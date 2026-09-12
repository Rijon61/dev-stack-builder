
import { Suspense } from 'react'
import './App.css'
import HeroSection from './HeroSection/HeroSection'
import NavBer from './NavBer/NavBer'
import TechnologySection from './TechnologySection/TechnologySection'
import type TechnologyType from './Type/TechnologyType'
import { ToastContainer } from 'react-toastify'

const technologyPromise = async () :Promise<TechnologyType[]>=>{
  const res = await fetch('/technologyApi.json')
  const data = await res.json()
  return data

}

function App() {

  return (
    <>
    <NavBer/>
    <HeroSection/>
    <Suspense fallback={<p>Loading...</p>}>
  <TechnologySection technologyPromise={technologyPromise()}/>
  <ToastContainer/>
</Suspense>
    

    </>
  )
}

export default App
