import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Router } from "react-router";
import HomePage from "./pages/homePage";
import LecturePage from "./pages/lecturePage";
import createHistory from "history/createBrowserHistory";

import { Route, Switch } from "react-router-dom";


const history = createHistory({ forceRefresh: true });

const theme = createTheme({
  palette: {
    primary: {
      main: "#EEF7FF",
    },
    secondary: {
      main: "#EEF7FF",
    },
    third: {
      light: "#A52A2A",
      main: "#A52A2A",
      dark: "#A52A2A",
      contrastText: "#A52A2A",
    },
  },
});

const getRoutes = () => {
  return (
    <Switch>
      <Route path="/lecture">
        <LecturePage />
      </Route>
      <Route exact path="/home">
        <HomePage />
      </Route>
      <Route exact path="*">
        <HomePage />
      </Route>
    </Switch>
  );
};
function App() {
  return (
    <Router history={history}>
      <ThemeProvider theme={theme}>{getRoutes()}</ThemeProvider>
    </Router>
  );
}

export default App;
