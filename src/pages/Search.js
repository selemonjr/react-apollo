import {useState} from "react";
import {gql,useLazyQuery} from "@apollo/client";
const GET_CHARACTER_LOCATION = gql `
query GetCharacterLocation($name: String!) {
    characters(filter: {name: $name}) {
        results {
            location {
                name
            }
        }
    }
}
`;
const Search = () => {
    const [input,SetInput] = useState("");
    const [getSearch, {loading,error,data}] = useLazyQuery(GET_CHARACTER_LOCATION, {
        variables: {
            name: input
        }
    });
    if(loading) {
        return (
          <div className="loadingLocation">Loading.....</div>
        )
      };
      if(error) {
        return (
          <div className="loading">Error.....</div>
        )
      }
    return (
        <div className="center">
            <input placeholder="Search" onChange={(e) => SetInput(e.target.value)}/>
            <button className="btnEl" onClick={() => getSearch()}>Search</button>
            <div>
               {data && (
                   <ul className="location">
                        {data.characters.results.map((character) => {
                    return (
                        <li>{character.location.name}</li>
                    )
                })}
                   </ul>
               )}
            </div>

        </div>
    )
}
export default Search;