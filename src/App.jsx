import './App.css'
import Home from './Components/Home/Home.jsx'
import ArslanBap from './Components/Home/AlaToo1/ArslanBap.jsx'
import Footer from './Components/Home/AlaToo2/Footer.jsx'


import Stories from './Components/Home/Storis/Stories.jsx'
import Karta from './Components/Home/Karta/Karta.jsx'
import AboutUs from './Components/Home/AboutUs/AboutUs.jsx'


function App() {


  return (

      <div className='app'>

        <Home/>
        {/* <Kocho/> */}
        <ArslanBap/>
        {/* <Footer/> */}
        <Stories/>
        <Karta/>
        <AboutUs/>
     
      </div>

  )
}

export default App
