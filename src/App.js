import CharacterList from "./pages/CharacterList.js";
import Character from "./pages/Character.js";
import Search from "./pages/Search.js";
import Navigation from "./components/Navigation.js"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
const App = () => {
  return (
    <div className="App">
      <Router>
        <Navigation/>
        <Routes>
          <Route path="/" element={<CharacterList/>}/>
          <Route path="/search" element={<Search/>}/>
          <Route path="/:id" element={<Character/>}/>
        </Routes>
        </Router>
    </div>
  )
}
export default App;