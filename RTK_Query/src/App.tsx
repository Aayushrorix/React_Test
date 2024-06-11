import AddEdit from "./components/AddEdit"
import Header from "./components/Header"
import Read from "./components/Read"
// import { useGetStudentsQuery } from "./slices/studentSlice"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


function App() {
  


  return (
    <>
      <Router>
        <Header/>
        <h2>RTK Query Tutorial</h2>
        <Routes>
          <Route path='/student' element={<Read/>}/>
          <Route path='/create' element={<AddEdit/>}/>
          <Route path='/edit/:id' element={<AddEdit/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
