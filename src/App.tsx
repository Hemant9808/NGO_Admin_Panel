
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"

import Navbar from './components/navbar'
import CreatePost from './pages/CreatePost'
import Events from './pages/Posts'

function App() {
  

  return (
<BrowserRouter >
    <Navbar/>

    <Routes>
    <Route path="/" element={<Events/>}  />
       <Route path="createPost" element={<CreatePost/>} />
      
      <Route path="/events/" element={<Events/>} />
      {/* <Route path="/admin/posts/:postId" element={<UpdateBlog />} />
      */}
    </Routes>
  
    </BrowserRouter>
  )
}

export default App
