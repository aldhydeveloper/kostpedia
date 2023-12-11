
import { useEffect, useState, use } from "react";
import products from '@/data/product.json';
import dynamic from "next/dynamic";
// import Product from './core';


export default function Product({comp}:any) {
  return (
    <>
      {comp}
      {/* <Product data={ products['Kost'] } key="kost" /> */}
    </>
  )
}