import React from 'react'
import Header from './Pages/Header'
import Page1 from './Pages/Home'
import Page2 from './Pages/Category'
import Page3 from './Pages/TopSelling'
import Page4 from './Pages/Booking'
import Page5 from './Pages/Testimonials'
import Section from './Pages/ImagesMarquee'
import Footer from './Pages/Footer'
import Sub from './Pages/Subscription'

const App = () => {
  return (
    <div className='md:mx-32 mx-8 overflow-hidden'>
      <Header />
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      <Page5 />
      <Section />
      <Sub />
      <Footer />
    </div>
  )
}

export default App