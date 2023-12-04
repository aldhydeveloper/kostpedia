import Image from 'next/image'

import Slide from '@/components/Slide/slide'
export default function Home() {
  return (
    <>
      <div className="grid grid-cols-2 max-h-[70vh]">
        <Slide />
        <div className="bg-gradient-to-b from-almond-400 to-almond-200  text-white flex flex-col justify-center px-10">
          <small className="text-almond-900 font-bold">Kostpedia</small>
          <h2 className="text-2xl font-bold mb-7">Cari Hunian terbaik anda.</h2>
          <input type="text" name="search" className="h-10"></input>
        </div>
      </div>
    </>
  )
}
