import useCharacters from "../hooks/useCharacters.js";
import {Link} from "react-router-dom";
function CharacterList() {
  const {loading,error,data} = useCharacters();
  if(loading) {
    return (
      <div className="loading">Loading.....</div>
    )
  };
  if(error) {
    return (
      <div className="loading">Error.....</div>
    )
  }
  return (
    <div className="characterList">
      {data?.characters?.results.map((character) => {
        const {name,id,image,gender} = character;
        return (
          <div key={id}>
            <div className="margin">
           <Link to = {`/${character.id}`} >
           <img src={image} alt={name}/>
            <h4>{name}</h4>
            <h3>Gender: {gender}</h3>
           </Link>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default CharacterList