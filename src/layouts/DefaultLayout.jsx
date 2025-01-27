import MainNav from "../components/MainNav"
import { Outlet } from "react-router-dom"

const DefaultLayout = () => {
    return (
        <>
            <header>
                <MainNav />
            </header>
            <main className="container my-5">
                <Outlet />
            </main>

        </>
    )
}

export default DefaultLayout