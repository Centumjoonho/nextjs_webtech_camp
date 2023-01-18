import Head from 'next/head'

import Header from './component/Header'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home :: Caffe CentumJoonho</title>
      </Head>
      <Header></Header>

      <div className='container'>
        <h1>Caffe Next.js</h1>
        <p>온라인으로 메뉴를 확인하고 주문해보세요</p>

      </div>

    </div>

  )
}
