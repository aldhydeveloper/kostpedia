import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function Loading() {
  const rows = [];
  for (let i = 0; i < 5; i++) {
    rows.push(
      <div className="flex-1 leading-tight" key={i}>
        <Skeleton height={200} className="mb-4" />
        <Skeleton />
        <Skeleton width="80%" />
      </div>
      )
  } 
  return (
    <>
      <div style={{ fontSize: 20, lineHeight: 2 }} className="flex space-x-4">
        {
          rows
        }
      </div>
    </>
  )
}