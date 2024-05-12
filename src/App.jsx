import './App.css'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Login from './components/Login'
import Chat from './components/Chat'
import ColorList from './components/ColorList';
import { useEffect, useState } from 'react';
function App() {

  const colors = ['#292f56', '#1e4572', '#acfa70', '#33691e', '#900b0a', '#e3b2a6'];

  const [btnState, setBtnState] = useState(false)

  useEffect(() => {
    const currentColor = localStorage.getItem('color');
    // console.log(currentColor);
    setTheme(currentColor)
  }, [])


  const setTheme = (color) => {
    document.documentElement.style.setProperty('--bg-color', color);

  }

  const setColor = () => {
    const currentColor = event.target.style.getPropertyValue('--bg-color');
    setTheme(currentColor);
    // console.log(currentColor)
    localStorage.setItem('color', currentColor);
  }
  return (
    <>
      <div className='col-12'>
        <div className={`color-switcher ${btnState && 'color-switcher--open'}`}>
          <button onClick={() => setBtnState(prevState => !prevState)} className='switchTheme'>Switch Theme</button>
          <h1 className='select-color-heading'>Select color</h1>
          <div className="color-list">
            {colors.map((color, idx) => (<ColorList key={idx} setColor={setColor} color={color} />))}
          </div>
        </div>
        <BrowserRouter>
          <Routes>
            <Route path='/chat' element={<Chat />} />
            <Route path='/' element={<Login />} />
          </Routes>
        </BrowserRouter>


      </div >

    </>
  )
}

export default App