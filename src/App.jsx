import './App.css'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Login from './components/Login'
import Chat from './components/Chat'
function App() {

  return (
    <>
      <div className='col-12'>
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
