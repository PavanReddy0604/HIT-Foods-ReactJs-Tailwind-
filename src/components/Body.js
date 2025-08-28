import { useContext, useEffect, useState } from "react";
import { LIST_ALL_RESTAURANTS } from "../utils/constants.js";
import RestaurantCard from "./Restaurant";
import Shimmer from "./Shimmer";
import { withPromotedLabel } from "./Restaurant";
import UserContext from "../utils/userContext.js";


const Body = () => {
    const [resList, setResList] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [filteredResList, setFilteredResList] = useState([]);
    const {loggedInUser,setUserName}=useContext(UserContext);

    const RestauantCardPromoted = withPromotedLabel(RestaurantCard)


    useEffect(() => {
        console.log("Use effect triggered")
        fetchRestaurets();
    }, [])

    async function fetchRestaurets() {
        // const data = await fetch(LIST_ALL_RESTAURANTS)
        // const res = await data.json();
        // const restaurantList=res.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
        // console.log("data is fetched " + JSON.stringify(restaurantList, null, 2))

        const data = await fetch("http://localhost:8080/restaurants")
        const res = await data.json();
        console.log("data is fetched " + JSON.stringify(res, null, 2))
        setResList(res)
        setFilteredResList(res)
    }

    console.log("Rendering the body component")

    return (
        resList.length === 0 ? <Shimmer />
            :
            <div className="body">
                <div className="filter flex">

                    <div className="search m-4 p-4">
                        <input type="text"
                            className=" border border-solid border-black rounded-lg p-2 focus:ring"
                            value={searchText}
                            onChange={(e) => {
                                setSearchText(e.target.value)
                            }}
                        >
                        </input>
                        <button className="px-4 py-2 m-4 bg-green-100 rounded-lg hover:cursor-pointer" onClick={() => {
                            console.log(`search text is ${searchText}`)
                            const filteredRes = resList.filter(res => res.name.toLowerCase().includes(searchText.toLowerCase()))
                            setFilteredResList(filteredRes)
                        }}>Search</button>
                    </div>

                    <div className="flex items-center">
                        <button className="bg-gray-100 px-4 py-3 mx-3 rounded-lg border  hover:cursor-pointer" onClick={() => {
                            console.log(`resList`)
                            console.log(`filter top reated restaurents`)
                            const filteredRestaurants = resList.filter((res) => {
                                return res.rating > 4.5
                            })
                            setFilteredResList(filteredRestaurants)
                            console.log(`filtered restaurents ${filteredRestaurants.length}`)
                        }}> Top reated restraunts</button>

                    </div>

                    <div className="flex items-center">
                        <button className="bg-gray-100 px-4 py-3 mx-3 rounded-lg border  hover:cursor-pointer" onClick={() => {
                            console.log("Show all restaurants")
                            setFilteredResList(resList)
                        }}>show all</button>

                    </div>
                    <div className="search m-4 p-4">
                              <button className="px-4 py-2 m-4 bg-green-100 rounded-lg hover:cursor-pointer" onClick={() => {
                            console.log(`search text is ${searchText}`)
                        }}>UserName: </button>

                        <input type="text"
                            className=" border border-solid border-black rounded-lg p-2 focus:ring"
                            value={loggedInUser}
                            onChange={(e) => {
                                setUserName(e.target.value)
                            }}
                        >
                        </input>
                  
                    </div>
                </div>

                <div className="flex flex-wrap">
                    {
                        filteredResList.map((restaurant, index) => {
                            return restaurant.promoted ?
                                <RestauantCardPromoted key={restaurant.id} res={restaurant} /> :
                                <RestaurantCard key={restaurant.id} res={restaurant} />
                        })}
                </div>
            </div>
    )
}

export default Body;