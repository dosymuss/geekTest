import { useEffect } from "react";
import "./App.css";
import PokemonCard from "./components/PokemonCard/PokemonCard";
import { getResultPokemon } from "./api/api";
import { useState } from "react";

function App() {
  const [data, setData] = useState(null)

  useEffect(()=>{
    getResultPokemon().then((res)=>{
      setData(res.results)
    })
  },[])

  if(data){
    return (
      <div className="wrap">
        {
          data.map((item)=>(
            <PokemonCard name={item.name} url={item.url}/>

          ))
        }
      </div>
    );

  }


}

export default App;
