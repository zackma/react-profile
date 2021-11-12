import Layout from "../../src/components/layout"
import { getAllRootDetails } from "../../src/utils/load"
import { Box } from "@material-ui/core"

export async function getStaticPaths() {
    const paths = getAllRootDetails()
    return {
        paths,
        fallback: false
    }
} 

export async function getStaticProps({ params }) {
    // const postData = await getPostData(params.id)
    // return {
    //     props: {
    //         postData
    //     }
    // }
    return {
        props: {
            params
        }
    }
}

export default function Post({ params }) {
    return (
        <Layout>
            <Box style={{ display:'flex', justifyContent:'center', width:'100%', marginTop: 100 }} >
                <h3> Content of {params.id} is to be released </h3>
            </Box>
        </Layout>
    )
}