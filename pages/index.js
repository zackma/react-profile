import Layout from '../src/components/layout'
import EssentialInfo from '../src/components/essential'
import { Box, Typography, Divider } from '@material-ui/core'
import { loadProfileData, getAllRootDetails } from '../src/utils/load'
import { useState, useEffect } from 'react'
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

    const [language, setLanguage] = useState('cn')
    const [profileData, setProfileData] = useState(profile['cn'])

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
        <SelfIntroduction
          language={language}
          profileData={profileData}
        />
        <Divider style={{ marginTop:20 }}/>
        <EssentialInfo 
          language={language}
          profileData={profileData}
        />
        <Divider style={{ marginTop:20 }}/>
        <ProfileDetails
          language={language}
          details={details}
        />
       
      </Layout>
  )
}