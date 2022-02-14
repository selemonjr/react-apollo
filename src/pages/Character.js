import useCharacter from "../hooks/useCharacter.js";
import {useParams} from "react-router-dom";
const Character = () => {
    const {id} = useParams();
    const {error,loading,data} = useCharacter(id);
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
        <div className="character">
            <img className="character-image" src={data?.character?.image} alt={data.character.name} width={500} height={500}/>
            <div className="character-content">
                <h1>{data?.character?.name}</h1>
                <p>{data.character.gender}</p>
                <div className="character-episodes">
                    {data.character?.episode.map((episode) => {
                        return (
                            <ul key={episode.id}>
                                <li>{episode.name} - <b>{episode.episode}</b></li>
                            </ul>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
export default Character;