import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(ScrollTrigger, SplitText)

const App = () => {
  return (
    <div className='flex-center h-[100vh]'>
      <h1 className='text-indigo-500 text-3xl'>Hello Gsap</h1>
    </div>
  )
}

export default App
