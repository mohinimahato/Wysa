import './App.css'
import Login from './components/Login'
import Chat from './components/Chat'
function App() {

  return (
    <>
      <div className='col-md-5 border border-danger mx-auto py-5 text-center'>
        <Login />
        <Chat />
      </div>

    </>
  )
}

export default App
