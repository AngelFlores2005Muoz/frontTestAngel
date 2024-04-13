import { useState } from 'react'
import Login from '../src/components/login.jsx'
import AdminList from '../src/components/adminList.jsx'
import './App.css'

function App() {
  const [logger, setLogger] = useState(false)

  return (
    <>
      {!logger ? <Login conditional={() => setLogger(true)}></Login> : <AdminList></AdminList> }
    </>
  )
}

export default App
