import React from 'react'
import { lazy, Suspense } from 'react'
import Loader from '../../Components/Loader'

const Section1 = lazy(() => import('../../Sections/Section1'))
const Section2 = lazy(() => import('../../Sections/Section2'))
const Section3 = lazy(() => import('../../Sections/Section3'))
const Section4 = lazy(() => import('../../Sections/Section4'))
const Section5 = lazy(() => import('../../Sections/Section5'))
const Section6 = lazy(() => import('../../Sections/Section6'))
const Section7 = lazy(() => import('../../Sections/Section7'))
const Section8 = lazy(() => import('../../Sections/Section8'))
const Section9 = lazy(() => import('../../Sections/Section9'))
const Section10 = lazy(() => import('../../Sections/Section10'))
const Section11 = lazy(() => import('../../Sections/Section11'))
const Section12 = lazy(() => import('../../Sections/Section12'))

const HomePage = () => {
  return (
    <Suspense fallback={<Loader/>}>
      <div>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Section8 />
        <Section9 />
        <Section10 />
        <Section11 />
        <Section12 />
      </div>
    </Suspense>
  )
}

export default HomePage