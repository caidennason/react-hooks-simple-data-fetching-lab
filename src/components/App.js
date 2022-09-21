// create your App component here
import react from "react"
import { useState, useEffect } from "react"

function App(){

const [randomDogs, setRandomDogs] = useState()
const [isLoaded, setLoaded] = useState(false)

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(resp => resp.json())
            .then(data => {
                console.log(data.message)
                setRandomDogs(data.message)
                setLoaded(true)
            })
    },[])

if(!isLoaded) return <h3>Loading...</h3>

    return(

        <img src={randomDogs} alt={'A Random Dog'}></img>

    )
}

export default App