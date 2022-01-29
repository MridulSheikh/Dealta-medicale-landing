import React from 'react'
import AskedQuestion from '../components/home/AskedQuestion'
import Banner from '../components/home/Banner'
import BestService from '../components/home/BestService'
import Platform from '../components/home/Platform'


export default function Home() {
    return (
        <div>
           <Banner />
           <BestService/>
           <AskedQuestion />
           <Platform />
        </div>
    )
}
