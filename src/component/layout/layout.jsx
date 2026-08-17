import { Outlet } from "react-router-dom";
import Header from "../outlet/header/header";
;


function Layout() {
    return (
        <>
            <Header />

            <main>
                <Outlet />
            </main>
        </>
    );
}

export default Layout;