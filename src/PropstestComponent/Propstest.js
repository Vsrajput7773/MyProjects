import { Navigate } from "react-router-dom";
import './Propstest.css';

function Propstest(Props)
{
    return(
        <div>
            <h1>Welcome To Props Component</h1>
            <p>{Props.a}</p>
            <p>{Props.b}</p>
        </div>
    )
}

export default Propstest;