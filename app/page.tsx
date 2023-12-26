"use client";
import { useState, useRef, useEffect } from "react";

import Slide from "@/components/Slide/slide";
// import TabProduct from '@/components/Product/tab'
import City from "@/components/Search/city";
// import Budget from '@/components/Budget/budget'
import Campus from "@/components/Search/campus";
// import {comp1, comp2} from '@/components/Search/popular'
import NextNProgress from "nextjs-progressbar";
import { FaArrowLeft } from "react-icons/fa6";
import classNames from "classnames/bind";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import TrackVisibility from "react-on-screen";

function Box({ children }: any) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        display: "block",
        lineHeight: 2,
        padding: "1rem",
        marginBottom: "0.5rem",
        width: 100,
      }}
    >
      {children}
    </div>
  );
}

// import Product from '@/components/Product/product'
// import { Suspense, lazy } from 'react'
// import Loading from './loading'

// const Product = lazy(() => import('@/components/Product/product'))

function handleChange() {}

const cities = [
  { name: "Jakarta", img: "jakarta.jpg" },
  { name: "Bandung", img: "bandung.jpg" },
  { name: "Bogor", img: "bogor.jpg" },
  { name: "Surabaya", img: "surabaya.jpg" },
  { name: "Yogyakarta", img: "yogyakarta.jpg" },
];

const cx = classNames.bind({
  classes: "fixed inset-0 z-50 bg-white",
});

// const comp = dynamic(() => import('@/components/Search/popular').then((mod) => mod.comp1))
const TabProduct = dynamic(() => import("@/components/Product/tab"));
const Budget = dynamic(() => import("@/components/Budget/budget"));
const PopularCity = dynamic(() => import("@/components/Populer/city"));
const PopularCampus = dynamic(() => import("@/components/Populer/campus"));
const Popular = dynamic(() => import("@/components/Search/popular"), {
  loading: () => {
    return (
      <SkeletonTheme borderRadius={99} height={26}>
        <Skeleton inline={true} />
        <Skeleton inline={true} />
        <Skeleton inline={true} />
        <Skeleton inline={true} />
        <Skeleton inline={true} />
      </SkeletonTheme>
    );
  },
  ssr: false,
});

// const cxBudget = classNames.bind({
//   classes:'fixed inset-0 z-50 bg-white'
// });
const ComponentToTrack = (props: any) => {
  // const style = {
  //     background: props.isVisible ? 'red' : 'blue'
  // };

  return (
    <>
      <TabProduct />
      <br />
      <br />
      <Budget />
    </>
  );
};
export default function Home() {
  const ref = useRef<HTMLInputElement>(null);
  const [input, setInput] = useState({
    search: "Jakarta",
  });
  const [show, setShow] = useState<boolean>(false);
  const [popular, setPopular] = useState<any>(<Popular name={input.search} />);
  function handleCallback(childData: string) {
    setInput({ search: childData });
    setPopular(<Popular name={input.search} />);
  }
  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  });
  return (
    <>
      <div className={cx([show ? "block" : "hidden"], "classes")}>
        <div className="container max-w-2xl mx-auto py-8">
          <div className="flex mb-4">
            <button className="px-4 text-xl" onClick={() => setShow(false)}>
              <FaArrowLeft />
            </button>
            <input
              type="text"
              className="rounded-full border-slate-200 border outline-none w-full py-3 px-4 text-xs"
              placeholder="Coba Bandung, Jakarta, Surabaya"
              onChange={handleChange}
              value={input.search}
              ref={ref}
            />
          </div>
          <div className="overflow-y-auto max-h-[calc(100vh-80px)]">
            <div className="grid grid-cols-5 gap-5">
              {cities.map((v, i) => {
                return (
                  <City
                    img={v.img}
                    name={v.name}
                    key={i}
                    childCallback={handleCallback}
                  />
                );
              })}
            </div>
            <p className="mt-6 mb-2">Pencarian Populer</p>
            <div className="grid grid-cols-5 gap-4 pb-1">{popular}</div>
            <p className="mt-6 mb-2">Kampus terdekat</p>
            <Campus />
          </div>
        </div>
      </div>
      <NextNProgress />
      <div className="grid grid-cols-2 max-h-[70vh]">
        <Slide />
        <div className="bg-gradient-to-b from-azure-400 to-azure-200  text-white flex flex-col justify-center px-10 rounded-br-[8rem]">
          <small className="text-azure-900 font-bold">Kostpedia</small>
          <h2 className="text-2xl font-bold mb-7">Cari Hunian terbaik anda.</h2>
          <button
            className="text-left rounded-full bg-white text-slate-400 px-4 py-2"
            onClick={() => setShow(true)}
          >
            Cari Lokasi ...
          </button>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="container px-8 mb-20 mx-auto"
      >
        <TrackVisibility once partialVisibility>
          {({ isVisible }) =>
            isVisible && (
              <>
                <TabProduct />
                <br />
                <br />
                <Budget />
                <br />
                <br />
                <PopularCity />
                <br />
                <br />
                <PopularCampus />
              </>
            )
          }
        </TrackVisibility>
      </motion.div>
    </>
  );
}
