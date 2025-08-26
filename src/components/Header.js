import { useState } from "react";
import { HEADER_LOGO } from "../utils/constants"
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/userOnlineStatus";

const Header = () => {
    const [status, setStatus] = useState('Logout')
    const onlineStatus = useOnlineStatus();
    return (
        <div className="flex justify-between shadow-2xl bg-pink-100">
            <div >
                <img className="w-30"  src={HEADER_LOGO} />
            </div>

                <h1 className="flex items-center p-8 font-bold text-6xl"> HIT Foods</h1>
          

            <div className="flex items-center">
                <ul className="flex p-4 m-4 px-5">
                    <li className="p-5 font-bold">
                        Online Status: {onlineStatus ? "✅" : "🔴"}
                    </li>
                    <li className="p-5 font-bold  hover:bg-gray-200">
                        <Link to='/'>
                            Home
                        </Link>
                    </li>
                    <li className="p-5 font-bold hover:bg-gray-200">
                        <Link to='/about'>About us </Link>
                    </li>
                    <li className="p-5 font-bold  hover:bg-gray-200"> <Link to='/contact'>
                        Contact
                    </Link> </li>
                    
                    <li className="p-5 font-bold  hover:bg-gray-200"> <Link to='/grocery'>
                        Grocery
                    </Link> </li>

                    <li className="p-5 font-bold  hover:bg-gray-200" > Cart </li>

                    <button className='font-bold p-5' onClick={() => {
                        console.log(`State is ${status}`)
                        if (status === 'Logout') {
                            setStatus('Login')
                        }
                        else {
                            setStatus('Logout')
                        }
                    }}>{status}</button>
                </ul>
            </div>

        </div>
    )
}

export default Header;