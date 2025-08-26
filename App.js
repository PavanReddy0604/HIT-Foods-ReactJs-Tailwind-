import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client"
import "./src/index.css";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import AboutUs from "./src/components/AboutUs";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error"
// import Grocery from "./src/components/Grocery"

console.log("Hey welcome to JS")

const Grocery = lazy(() => import("./src/components/Grocery"))

const AppLayoutComponent = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayoutComponent />,
        children: [
             {
                path: "/",
                element: <Body />
             },
            {
                path: "/about",
                element: <AboutUs />

            },
            {
                path: "/contact",
                element: <Contact />

            },
            {
                path: "/grocery",
                element: (<Suspense fallback={"Loading the groceries" }><Grocery /></Suspense>)

            }
        ],
        errorElement: <Error />
    }

]

)


const rootElement = ReactDOM.createRoot(document.getElementById("root"))
rootElement.render(<RouterProvider router={appRouter} />)
