import "./App.css";
import RelatedPerson from "./components/relatedPerson";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <Router>
          <Route exact path="/" component={RelatedPerson} />
        </Router>
      </div>
    </GlobalProvider>
  );
}

export default App;
