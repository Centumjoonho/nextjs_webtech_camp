import Header from "./component/Header"
import Head from "next/head"
import { EspressoCountBtn, AmericanoCountBtn, LatteCountBtn } from "./component/countbtn"
import { useState } from "react"
export default function Order() {



    return (
        <div>
            <Head>
                <title>Order :: Caffe CentumJoonho</title>
            </Head>
            <Header></Header>
            <div className="container">
                <h1 className="text-3xl font-bold m-3">온라인 메뉴판</h1>
                <dl className="row">
                    <dt className="col-sm-2">에스프레소</dt>
                    <dd className="col-sm-10"><p>2,000원</p>
                        <EspressoCountBtn />
                    </dd>

                    <dt className="col-sm-2">아메리카노</dt>
                    <dd className="col-sm-10"><p>2,000원</p>
                        <AmericanoCountBtn /></dd>

                    <dt className="col-sm-2">카페라테</dt>
                    <dd className="col-sm-10"><p>3,000원</p>
                        <LatteCountBtn /></dd>
                </dl>
                <hr className="mt-3" />
                <div className="row mt-3">
                    <div className="col-2"> 합계 </div>
                    <div className="col-10">0원 </div>

                </div>

            </div>
        </div>

    )
}