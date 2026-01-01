import {Routes, Route} from 'react-router-dom';
import About from '../pages/About';
import Home from '../pages/Home';
import Contact from '../pages/Contact';

const Main = () => {
  return (
    <main>  
        {/* itt jelenik meg a menü kiválasztott eleme */}
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
        </Routes>
    </main>
  )
}

export default Main