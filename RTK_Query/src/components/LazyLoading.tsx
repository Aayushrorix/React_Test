import React, { Suspense } from 'react'

const B = React.lazy(()=> import ('./Read'))

export const LazyLoading = () => {
  return (
    <div style={{padding:'20px'}}>
      <h1>Lazy loading in react</h1>
      <Suspense fallback={<div>Lazy Loading...</div>}>
        <B/>
      </Suspense>
    </div>
  )
}

export default LazyLoading
