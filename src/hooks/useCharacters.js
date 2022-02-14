import {useQuery,gql} from "@apollo/client";
const GET_CHARACTERS = gql`
query {
    characters {
      results {
        id,
        name,
        image,
        gender
      }
  }
  }
`;
const useCharacters = () => {
    const {error,data,loading} = useQuery(GET_CHARACTERS);
    return {data,loading,error}
}
export default useCharacters;