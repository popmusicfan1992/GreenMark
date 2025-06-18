import React from 'react'
import { MainBanner } from '../components/MainBanner'
import Categories from '../components/Categories'
import BestSeller from '../components/bestSeller'
import BottomBanner from '../components/BottomBanner'
import NewsLetter from '../components/NewsLetter'


export const Home = () => {
  return (
      <div className='mt-10'>
        <MainBanner/>
        <Categories/>
        <BestSeller/>
        <BottomBanner/>
        <NewsLetter/>
    </div>
  )
}
