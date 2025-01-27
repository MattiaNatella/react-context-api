import DefaultLayout from "./layouts/DefaultLayout"
import HomePage from "./components/HomePage"
import PostsPage from "./components/Postspage"
import NotFound404 from "./components/NotFound404"

import { GlobalProvider } from "./context/GlobalContext"
import { BrowserRouter, Routes, Route } from "react-router-dom"

const App = () => {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path="/" Component={HomePage} />
            <Route path="/lista-posts" Component={PostsPage} />
            <Route path="*" Component={NotFound404} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  )
}

export default App