import Head from "next/head"
import Header from "./component/Header"
export default function About() {
    return (
        <div>
            <Head>
                <title>About :: Caffe CentumJoonho</title>
            </Head>
            <Header></Header>
            <div className='container'>
                <h1>카페 소개</h1>
                <p>소개 내용 </p>

            </div>

        </div>
    )
}