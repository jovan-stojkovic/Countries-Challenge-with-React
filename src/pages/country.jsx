import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Country = () => {

    const[country, setCountry] = useState([])
    const {name} = useParams()

    useEffect(() => {
        const fetchCountryData = async
    })

    return ( <>
    <Link to='/'><button>Back</button></Link>
    <h1>Country Data</h1>
    </> );
}
 
export default Country;