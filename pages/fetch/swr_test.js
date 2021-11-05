import useSWR from 'swr'
import Layout from '../../components/layout'
import { useRouter } from 'next/router'

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function SWRPage() {
    const { data, error } = useSWR('/api/hello', fetcher)
    const router = useRouter()
    const nextUrl = "https://nextjs.org/learn/basics/create-nextjs-app"

    if (error) {
        return <div>Faild to Load</div>
    }
    if (!data) {
        return <div>Loading...</div>
    }

    return (
        <Layout>
            <div>Hello, {data.name}! Feel free to follow 
                <a onClick={() => router.push(nextUrl)}> this link </a>
                to scane NextJs Tutorial. 
            </div>
        </Layout>
    )
}