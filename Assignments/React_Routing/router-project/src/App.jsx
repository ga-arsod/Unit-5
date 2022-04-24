
import { Routes, Route } from 'react-router-dom'
import { About } from '../Components/About'
import { Contact } from '../Components/Contact'
import { FAQ } from '../Components/FAQ'
import { Footer } from '../Components/Footer'
import { Home } from '../Components/Home'
import { Navbar } from '../Components/Navbar'
import { ProductDetails } from '../Components/ProductDetails'
import { Store } from '../Components/Store'
import './App.css'

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/faq' element={<FAQ/>}></Route>
        <Route path='/support' element={<Contact/>}></Route>
        <Route path='/store' element={<Store />}></Route>
        <Route path='/store/:id' element={<ProductDetails/>}></Route>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
