//css
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

//router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//pages
import Main from "./pages/Main";
import Estates from "./pages/Estates";
import Estate from "./pages/Estate"

//components
import Navbar from "./components/navbar";

//theme
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import theme from "./theme/theme";

function App() {
  return (
    <Router>
      <MuiThemeProvider theme={theme}>
        <Navbar />
        <Switch>
          <Route path="/estate/id" exact>
            <Estate />
          </Route>
          <Route path="/estates" exact>
            <Estates />
          </Route>
          <Route path="/" exact>
            <Main />
          </Route>
        </Switch>
      </MuiThemeProvider>
    </Router>
  );
}

export default App;
