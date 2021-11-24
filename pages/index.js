import Layout from '../src/components/layout'
import EssentialInfo from '../src/components/essential'
import { Divider, Tab, Box } from '@material-ui/core'
import { TabList, TabPanel, TabContext } from '@material-ui/lab'
import { loadProfileData, getAllRootDetails } from '../src/utils/load'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/dist/client/router'
import SelfIntroduction from '../src/components/introduction'
import ProfileDetails from '../src/components/details'

export async function getServerSideProps() {
  const allJsonData = await loadProfileData()
  let details = getAllRootDetails()
  details = details.map(each=>{return each['params']['id']})
 
  return {
    props: {
      profile: allJsonData,
      details: details
    }
  }
}

export default function Home({ profile, details }) {

    const router = useRouter()
    const { lang } = router.query 
    let init_lang = (JSON.stringify(router.query ) === '{}'?'cn':lang)
    const [language, setLanguage] = useState(init_lang)
    const [profileData, setProfileData] = useState(profile[init_lang])
    const [value, setValue] = useState('1');

    function handleTabChange(event, newValue) {
      setValue(newValue);
    };

    function handleChange(event) {
      const lang = event['target']['value']
      setLanguage(lang)
    }

    useEffect(() => {
      setProfileData(language === 'en'?profile['en']:profile['cn'])
    }, [language])

    return (
      <Layout
        home
        data={profileData}
        languageChange={handleChange}
      >
        <Divider style={{ marginTop:50 }}/>
        <Box style={{ width: '100%' }}>
          <TabContext value={value}>
            <Box style={{ borderBottom: 1, borderColor: 'divider', display:'flex',justifyContent:'center' }}>
              <TabList onChange={handleTabChange} >
                <Tab 
                  label={language === 'en'?'Introduction':'自我介绍'} 
                  value='1' 
                />
                <Tab 
                  label={language === 'en'?'Essential':'基本信息 '}
                  value='2'
                />
                <Tab 
                  label={language === 'en'?'Details':'履历详情'} 
                  value='3'
                />
              </TabList>
            </Box>
            <TabPanel value='1'>
              <SelfIntroduction
                profileData={profileData}
              />
            </TabPanel>
            <TabPanel value='2'>
              <EssentialInfo 
                language={language}
                profileData={profileData}
              />
            </TabPanel>
            <TabPanel value='3'>
              <ProfileDetails
                language={language}
                details={details}
              />
            </TabPanel>
          </TabContext>
        </Box>
      </Layout>
  )
}