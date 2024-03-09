 import axios from "axios"

 export const getResultPokemon = async()=>{
    try {
        const res = await axios.get("https://pokeapi.co/api/v2/pokemon/")
        if(res.status == 200){
            return res.data
        }
        
    } catch (error) {
        console.log(error);
    }
 }

