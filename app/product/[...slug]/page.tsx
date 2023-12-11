import Image from 'next/image';
import products from '@/data/product.json';
interface Dic {
    [key: string|number]: any
}
export default function Page({ params }: { params: { slug: string[] } }) {
  // return <div>My Post: {params.slug[0]}</div>
  const data: Dic = products;
  const type = params.slug[0];
  const index:any = params.slug[1];
  // console.log(index)
  const capitalized =
  type.charAt(0).toUpperCase()
  + type.slice(1)
  return (
    <>
      <div className="container max-w-7xl mx-auto px-10 pt-20 mt-10">
        <div className="grid grid-cols-4 grid-rows-2 gap-4">
          <div role="button" className="relative aspect-h-4 aspect-w-5 col-span-2 row-span-2 overflow-hidden rounded-l-lg">
            <Image
              className="w-full h-full block object-cover"
              src={`/img/${type}/${data[type][index].img}`}
              alt={data[type][index].name}
              fill={true}
              sizes="(max-width: 576px) 100vw, 576px"
              loading="lazy"
            />
          </div>
          <div role="button" className="relative aspect-h-5 aspect-w-6 col-span-1 row-span-1 overflow-hidden">
            <Image
              className="w-full h-full block object-cover"
              src={`/img/${type}/${data[type][1].img}`}
              alt={data[type][index].name}
              fill={true}
              sizes="(max-width: 288px) 100vw"
              loading="lazy"
            />
          </div>
          <div role="button" className="relative aspect-h-5 aspect-w-6 col-span-1 row-span-1 overflow-hidden rounded-tr-lg">
            <Image
              className="w-full h-full block object-cover"
              src={`/img/${type}/${data[type][4].img}`}
              alt={data[type][index].name}
              fill={true}
              sizes="(max-width: 288px) 100vw"
              loading="lazy"
            />
          </div>
          <div role="button" className="relative aspect-h-5 aspect-w-6 col-span-1 row-span-1 overflow-hidden">
            <Image
              className="w-full h-full block object-cover"
              src={`/img/${type}/${data[type][2].img}`}
              alt={data[type][index].name}
              fill={true}
              sizes="(max-width: 288px) 100vw"
              loading="lazy"
            />
          </div>
          <div role="button" className="relative aspect-h-5 aspect-w-6 col-span-1 row-span-1 overflow-hidden rounded-br-lg">
            <Image
              className="w-full h-full block object-cover"
              src={`/img/${type}/${data[type][3].img}`}
              alt={data[type][index].name}
              fill={true}
              sizes="(max-width: 288px) 100vw"
              loading="lazy"
            />
          </div>
        </div>
        <h1 className="text-2xl font-bold my-10">{ data['Kost'][index].name }</h1>
      </div>
    </>
    
  )
}