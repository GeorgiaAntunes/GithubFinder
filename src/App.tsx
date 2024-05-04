import { Outlet } from "react-router-dom"
function App() {
  return (
    <>
      <div className='App'>
        <Outlet/>
        <h1>Github Finder</h1>
      </div>
    </>
  )
}

export default App
