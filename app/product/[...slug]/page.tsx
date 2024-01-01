"use client";
import Image from "next/image";
import products from "@/data/product.json";
import { IoHome } from "react-icons/io5";
import { PiBuildingsFill } from "react-icons/pi";
import { NumericFormat } from "react-number-format";
import { FaWifi } from "react-icons/fa";
import { FaSquareParking } from "react-icons/fa6";
import { TbAirConditioning } from "react-icons/tb";
import { GiSofa } from "react-icons/gi";
import { FaShower } from "react-icons/fa6";
import { MdOutlineWindow } from "react-icons/md";
interface Dic {
  [key: string | number]: any;
}
const icons: { [key: string]: JSX.Element } = {
  Wifi: <FaWifi />,
  Parkir: <FaSquareParking />,
  "A/C": <TbAirConditioning />,
  "Ruang Tamu": <GiSofa />,
  "Kamar Mandi Dalam": <FaShower />,
  Jendela: <MdOutlineWindow />,
};
export default function Page({ params }: { params: { slug: string[] } }) {
  // return <div>My Post: {params.slug[0]}</div>
  const data: Dic = products;
  const type = params.slug[0];
  const index: any = params.slug[1];
  const product = data[type][index];
  const facility = product.fasility;
  const capitalized = type.charAt(0).toUpperCase() + type.slice(1);
  console.log(facility);
  return (
    <>
      <div className="container max-w-7xl mx-auto px-10 pt-20 mt-10">
        <div className="grid grid-cols-4 grid-rows-2 gap-4">
          <div
            role="button"
            className="relative aspect-h-4 aspect-w-5 col-span-2 row-span-2 overflow-hidden rounded-l-lg"
          >
            <Image
              className="w-full h-full block object-cover"
              src={`/img/${type}/${product.img}`}
              alt={product.name}
              fill={true}
              sizes="(max-width: 576px) 100vw, 576px"
              loading="lazy"
            />
          </div>
          <div
            role="button"
            className="relative aspect-h-5 aspect-w-6 col-span-1 row-span-1 overflow-hidden"
          >
            <Image
              className="w-full h-full block object-cover"
              src={`/img/${type}/${data[type][1].img}`}
              alt={product.name}
              fill={true}
              sizes="(max-width: 288px) 100vw"
              loading="lazy"
            />
          </div>
          <div
            role="button"
            className="relative aspect-h-5 aspect-w-6 col-span-1 row-span-1 overflow-hidden rounded-tr-lg"
          >
            <Image
              className="w-full h-full block object-cover"
              src={`/img/${type}/${data[type][4].img}`}
              alt={product.name}
              fill={true}
              sizes="(max-width: 288px) 100vw"
              loading="lazy"
            />
          </div>
          <div
            role="button"
            className="relative aspect-h-5 aspect-w-6 col-span-1 row-span-1 overflow-hidden"
          >
            <Image
              className="w-full h-full block object-cover"
              src={`/img/${type}/${data[type][2].img}`}
              alt={product.name}
              fill={true}
              sizes="(max-width: 288px) 100vw"
              loading="lazy"
            />
          </div>
          <div
            role="button"
            className="relative aspect-h-5 aspect-w-6 col-span-1 row-span-1 overflow-hidden rounded-br-lg"
          >
            <Image
              className="w-full h-full block object-cover"
              src={`/img/${type}/${data[type][3].img}`}
              alt={product.name}
              fill={true}
              sizes="(max-width: 288px) 100vw"
              loading="lazy"
            />
          </div>
        </div>
        <label className="px-3 py-1 text-xs rounded-full border my-3 inline-flex gap-2 items-center">
          {type == "Kost" ? <IoHome /> : <PiBuildingsFill />}
          {type}
        </label>
        <div className="flex justify-between pb-6">
          <div>
            <h1 className="text-xl font-bold">{product.name}</h1>
            <p>{product.address}</p>
          </div>
          <div className="text-right">
            <small className="block">Mulai dari</small>
            <NumericFormat
              value={product.price}
              prefix="Rp. "
              suffix="/Bulan"
              thousandSeparator="."
              decimalSeparator=","
              className="text-xl text-right font-bold"
            />
          </div>
        </div>
        {/* FASILITAS */}
        <hr className="mb-2" />
        <div className="pb-8">
          <h4 className="text-xl font-bold mb-1">Fasilitas</h4>
          <div className="text-zinc-500">
            <div className="flex items-center gap-6 font-normal">
              {facility.map((v: string, i: number) => {
                return (
                  <div key={i} className="flex items-center gap-2">
                    {icons[v]} {v}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
