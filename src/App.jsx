import DefaultLayout from "./layouts/DefaultLayout"
import HomePage from "./components/HomePage"
import PostsPage from "./components/Postspage"
import NotFound404 from "./components/NotFound404"
import { BrowserRouter, Routes, Route } from "react-router-dom"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout}>
          <Route path="/" Component={HomePage} />
          <Route path="/lista-posts" Component={PostsPage} />
          <Route path="*" Component={NotFound404} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App