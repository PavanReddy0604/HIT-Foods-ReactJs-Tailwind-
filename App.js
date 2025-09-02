import React, { lazy, Suspense, useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom/client"
import "./src/index.css";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import AboutUs from "./src/components/AboutUs";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error"
import UserContext from './src/utils/userContext';
import { Provider } from "react-redux";
import appStore from "./src/utils/appStore";
import { Cart } from "./src/components/Cart";
// import Grocery from "./src/components/Grocery"

console.log("Hey welcome to JS")

const Grocery = lazy(() => import("./src/components/Grocery"))

const AppLayoutComponent = () => {
    const {loggedInUser}=useContext(UserContext);

    const [userName, setUserName] = useState(loggedInUser)
    useEffect(() => {
        //Suppose Authentication call happened and the result is something like below
        const data = {
            name: ''
        }
        setUserName(data.name)
    }, [])

    return (
        <div>

            <Provider store ={appStore}>      
            <UserContext.Provider value={{loggedInUser:userName,setUserName}}>
            <Header />
            <Outlet />
            </UserContext.Provider>
            </Provider>

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
                element: (<Suspense fallback={"Loading the groceries"}><Grocery /></Suspense>)

            },
            {
                path: "/cart",
                element: <Cart />

            }
        ],
        errorElement: <Error />
    }

]

)


const rootElement = ReactDOM.createRoot(document.getElementById("root"))
rootElement.render(<RouterProvider router={appRouter} />)
