import Image from 'next/image'
import Link from 'next/link'
import { NumericFormat } from 'react-number-format';
// console.log(product)
interface MyProps {
  /** The text to display inside the button */
  folder: string;
  data: any;
}
interface dataProps {
  name: string,
  img: string,
  address: string,
  price: number,
  route:string
};

export default function Product({data, folder }: MyProps) {
  const datas: dataProps[] = data;
  
  return (
    <>
      <div className="scrollbar-none relative flex snap-x snap-mandatory flex-row space-x-4 overflow-x-auto md:snap-none md:px-0 mb-10">
        {
          datas.map((v,i) => {
            return (
              <Link href={`product/${folder}/${i}`} key={i} className="webkit-border-radius relative cursor-pointer snap-center transition-all duration-300 ease-in-out">
                <div className="w-[75vw] md:w-[278px] !aspect-h-[3] !aspect-w-[4] mb-1 overflow-hidden rounded-lg">
                  <Image
                    className="w-full h-full block object-cover"
                    src={`/img/${folder}/${v.img}`}
                    alt={v.name}
                    fill={true}
                    sizes="(max-width: 288px) 100vw"
                    loading="lazy"
                    // width={400}
                    // height={400}
                  />
                </div>
                <h4 className="text-md font-bold mb-0">{v.name}</h4>
                <small>{v.address}</small>
                <NumericFormat value={v.price} prefix="Rp. " thousandSeparator="." decimalSeparator="," className="text-sm font-bold" />
              </Link>
            )
          })
        }
      </div>
    </>
  )
}