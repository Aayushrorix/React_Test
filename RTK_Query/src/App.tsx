import AddEdit from "./components/AddEdit"
// import ErrorBoundry from "./components/ErrorBoundry"
import Header from "./components/Header"
import Home from "./components/Home"
import LazyLoading from "./components/LazyLoading"
// import Read from "./components/Read"
// import { useGetStudentsQuery } from "./slices/studentSlice"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


function App() {
  


  return (
    <>
      <Router>
        <Header/>
        <h2>RTK Query Tutorial</h2>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/student' element={<LazyLoading/>}/>
          <Route path='/create' element={<AddEdit/>}/>
          <Route path='/edit/:id' element={<AddEdit/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
