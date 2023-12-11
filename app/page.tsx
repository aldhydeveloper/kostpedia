'use client'
import Image from 'next/image'

import Slide from '@/components/Slide/slide'
import TabProduct from '@/components/Product/tab'
import dynamic from 'next/dynamic'
import NextNProgress from 'nextjs-progressbar';
// import Product from '@/components/Product/product'
// import { Suspense, lazy } from 'react'
// import Loading from './loading'

// const Product = lazy(() => import('@/components/Product/product'))

 
export default function Home() {
  return (
    <>
      <NextNProgress />
      <div className="grid grid-cols-2 max-h-[70vh]">
        <Slide />
        <div className="bg-gradient-to-b from-almond-400 to-almond-200  text-white flex flex-col justify-center px-10">
          <small className="text-almond-900 font-bold">Kostpedia</small>
          <h2 className="text-2xl font-bold mb-7">Cari Hunian terbaik anda.</h2>
          <input type="text" name="search" className="h-10"></input>
        </div>
      </div>
      <div className="container px-8 mb-20 mx-auto">
        <TabProduct />
      </div>
    </>
  )
}
