import './App.css'
import Home from './Components/Home/Home.jsx'
import ArslanBap from './Components/Home/AlaToo1/ArslanBap.jsx'
import Footer from './Components/Home/AlaToo2/Footer.jsx'


import Stories from './Components/Home/Storis/Stories.jsx'


function App() {


  return (

      <div className='app'>

        <Home/>
        {/* <Kocho/> */}
        <ArslanBap/>
        {/* <Footer/> */}
        <Stories/>
     
      </div>

  )
}

export default App
