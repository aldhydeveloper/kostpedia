'use client'
import { useEffect, useRef, useState } from "react"
import Image from 'next/image'
// import { hydrateRoot } from 'react-dom';
import { IoHome } from 'react-icons/io5';
import { MdApartment, MdOutlineAddBusiness, MdBusinessCenter } from "react-icons/md";
import classNames from 'classnames/bind';
import Link from 'next/link'
import { useScrollDirection } from "@/plugins/useScrollDirection";

const blurEl = <div className="absolute inset-0 bg-white"></div>;
const nav = [
  {
    title: 'Sewa',
    route: '/',
    child: [
      {title:'Kos', route:'/', desc: 'Solusi kos kosan dengan harga yang murah.', icon: <IoHome />},
      {title:'Apartment', route:'/', desc: 'Apertement mewah dan murah.', icon: <MdApartment />}
    ]
  },{
    title: 'Partnership',
    route: '/',
    child: [
      {title:'Gabung dengan Kostpedia', route:'/', desc: 'Gabung dengan kami untuk bisnis properti anda.', icon: <MdOutlineAddBusiness />},
      {title:'Bangun', route:'/', desc:'Jadikan asset anda sebagai bisnis properti', icon: <MdBusinessCenter />}
    ]
  },
]

const cx = classNames.bind({
  hover: 'group active',
  classes:'py-4 px-2'
});


export default function Navbar() {
  const direction = useScrollDirection();
  console.log(direction)
  // interface Hover
  const [hover, setHover] = useState<string | null>(null);
  const [style, setStyle] = useState<object | {}>({});
  const ref = useRef<any>(0);
  const hoverNav = (state:string | null) => {
    setHover(state)
    // hydrateRoot(blurEl, document.getElementById('root'));
  }

  useEffect(() => {
    const w = ref.current.offsetWidth;
    window.addEventListener('scroll', () => {
      const position = window.pageYOffset;
      if (position > 20 && position < 160) {
        setStyle({
          width: `${w + position}px`
        })
      } else {
      }
     })
  })
  return (
    <>
      <nav ref={ref} className="fixed top-4 rounded-full bg-gradient-to- bg-almond-50/90 to-slate-600/90 z-10 inset-x-0 w-[1200px] mx-auto flex items-center px-10 duration-200 transition-all" style={style}>
        <Link href="/">
          <h2 className="text-xl font-bold">KOSTPEDIA</h2>  
        </Link>
        <ul className="text-slate-900 flex gap-2 container mx-auto px-5 ml-4">
          {nav.map((v, i) => {
            return (
              v.child
              ? <li
                  key={i}
                  onMouseEnter={() => hoverNav(v.title)}
                  onMouseLeave={() => setHover(null)}
                  // className={hover === v.title ? 'group active' : ''}
                  className={cx({hover: hover === v.title}, 'classes')}
              ><a href="#">{v.title}</a>
                  <ul className="absolute py-2 px-4 bg-white text-slate-900 rounded-md shadow-lg group-[.active]:show hide duration-200">
                  {(v.child).map((vC, iC) => {
                    return (
                      <li key={iC} className="hover:bg-almond-50 rounded-md px-2 py-2 w-full">
                        <Link href="/" className="flex items-center">
                          <span className="text-2xl">{vC.icon}</span>
                          <div className="ms-4">
                            <p className="font-bold text-md">{vC.title}</p>
                            <p className="font-normal text-sm">{vC.desc}</p>
                          </div> 
                        </Link>
                      </li>
                    );
                      })
                    }
                  </ul>
                </li>
                : <li><Link href="/">{v.title}</Link></li>
              )
            })

          }
        </ul> 
      </nav>
      {/* <nav className="fixed top-0 right-0 z-20 w-1/2">
        <ul className="text-white flex gap-2 container mx-auto px-5">
          {nav.map((v, i) => {
            return (
              v.child
              ? <li
                  key={i}
                  onMouseEnter={() => hoverNav(v.title)}
                  onMouseLeave={() => setHover(null)}
                  // className={hover === v.title ? 'group active' : ''}
                  className={cx({hover: hover === v.title}, 'classes')}
              ><a href="#">{v.title}</a>
                  <ul className="absolute py-3 px-4 bg-white text-slate-900 rounded-md shadow-lg group-[.active]:show hide duration-200">
                  {(v.child).map((vC, iC) => {
                    return (
                      <li key={iC} className="hover:bg-azure-100 rounded-md px-2 py-2 w-full">
                        <Link href="/" className="flex items-center">
                          <span className="text-2xl">{vC.icon}</span>
                          <div className="ms-4">
                            <p className="font-bold text-md">{vC.title}</p>
                            <p className="font-normal text-sm">{vC.desc}</p>
                          </div> 
                        </Link>
                      </li>
                    );
                      })
                    }
                  </ul>
                </li>
                : <li><Link href="/">{v.title}</Link></li>
              )
            })

          }
        </ul> 
      </nav>*/}
    </>
  )
}