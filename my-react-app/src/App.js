import React from 'react'
import Navbar from './componet/Navbar/Navbar'
import Part1 from './componet/Navbar/Part1'
import Part2 from './componet/Navbar/Part2'
import Part3 from './componet/Part3'
import About from './componet/About'
import Footer from './componet/Footer'
import Popup from './componet/Navbar/Popup'


export default function App() {
  const [showPopup, setshowPopup] = React.useState(false);
  const HandlePopup = () => {
    setshowPopup(true);
  };

  return (
    <div>
      <Navbar HandlePopup={HandlePopup} />
      <Part1 />
      <Part2 />
      <Part3 />
      <About  HandlePopup={HandlePopup} />
      <Footer />
      <button
        onClick={() => setshowPopup(true)}
        className='bg-blue-500 text-white px-4 py-2 rounded-md'
      >
        Open Popup
      </button>
      <Popup showPopup={showPopup} setshowPopup={setshowPopup} />
    </div>
  );
}