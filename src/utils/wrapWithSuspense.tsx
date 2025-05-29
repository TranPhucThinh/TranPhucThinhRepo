import type React from 'react'
import { Suspense } from 'react'

const wrapWithSuspense = (element: React.ReactNode, fallback: React.ReactNode = <div>Loading...</div>) => {
  return <Suspense fallback={fallback}>{element}</Suspense>
}

export default wrapWithSuspense
