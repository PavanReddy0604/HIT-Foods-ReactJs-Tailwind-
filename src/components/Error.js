import {useRouteError} from "react-router-dom";

const Error = () => {

    console.log('Rendering Error page')
    const error=useRouteError();
    return(
        <div>
            <h2> OOPS !! </h2>
            <h3> {error?.statusText}</h3>
            {alert(error?.statusText)}
            </div>
            
    );
}

export default Error;