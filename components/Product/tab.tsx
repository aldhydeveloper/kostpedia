'use client'

import dynamic from "next/dynamic";
import { useState, FC } from "react"
import { IoHome } from "react-icons/io5";
import { PiBuildingsFill } from "react-icons/pi";

import Loading from './loading';

const Kost = dynamic(
  () => import('./kost'),
  {
    loading: () => <Loading />,
    ssr: false
  }
)
const Apartment = dynamic(
  () => import('./apartment'),
  {
    loading: () => <Loading />,
    ssr: false
  }
)
// const ProductApart = dynamic(
//   () => import('./product'),
//   {
//     loading: () =><Skeleton />,
//     ssr: false
//   }
// )

const tabs = [
  {name: 'Kost', icon: <IoHome />, comp: <Kost />},
  {name: 'Apartment', icon: <PiBuildingsFill />, comp: <Apartment />}
];
 

export default function Tab() {
  const [data, setData] = useState<JSX.Element>(<Kost />);
  return (
    <>
      <ul role="tab" className="flex space-x-8 mt-10">
       { tabs.map((v, i) => {
            return (
              <li key={i} className="py-2">
                <button onClick={() => setData(v.comp)} className="text-center py-2 flex flex-col items-center">
                  { v.icon }
                  <p>{ v.name }</p>
                </button>
              </li>
            )
          })
        }
      </ul>
      {data}
    </>
  )
}