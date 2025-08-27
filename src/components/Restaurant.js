
const RestaurantCard = (props) => {
   const {res}=props
    return (

        <div className="m-4 p-4 w-[250px] bg-gray-100 rounded-lg hover:bg-gray-200 cursor-pointer">
            <img className="rounded-lg pb-3 h-60" alt="rest"
                src="https://www.apnachef.com/wp-content/uploads/2024/01/chicken-biryani-25-people-wide.jpg" />
            <h3 className="font-bold py-1.5 text-lg justify-center pb-3"> {res.name} </h3>
            <h4> {res.cuisine} </h4>
            <h4> {res.rating}</h4>
            <h5> {res.time}</h5>

        </div>
    )
};

//Higher order component
// input-RestaurantCard, output-enhanced RestaurantCard
export const withPromotedLabel=(RestaurantCard) =>{
    const WithPromotedLable=(props)=>{
        return(
            <div>
                <label className="absolute p-2 m-2 rounded-lg bg-black text-white">Promoted</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
    return WithPromotedLable;
}


export default RestaurantCard;