import { Card } from "react-bootstrap"
import { products } from "../utils"
import Loading from "./Loading"
import {useState, useEffect} from "react"

const Home = () => {
    const api = "https://fakestoreapi.com/products"
    const [products, setProducts] = useState<products[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(api)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setProducts(data)
        })
        .catch((err) => console.log(err))
        .finally(() => setLoading(false))
    },[])

    return (
        <main>
            {loading && <Loading />}
            {!loading && <>
                            <h3>Productos cargados...</h3>
                            
                        </>}
        </main>
    )
}

export default Home
