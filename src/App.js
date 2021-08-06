import Home from "./pages/Home";
import { Switch, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./v-components/Navbar";
import AboutUs from "./v-pages/AboutUs";
import StyleGlobal from "./v-components/StyleGlobal";
import Upcoming from "./pages/UpcomingMovie";
function App() {
  return (
    <div className="App">
      <StyleGlobal />
      <Navbar />
      <AnimatePresence exitBeforeEnter>
        <Switch>
          <Route path="/" exact>
            <AboutUs />
          </Route>
          <Route path={["/movie:id", "/popmovie"]}>
            <Home />
          </Route>
          <Route path={["/movie:id", "/upmovie"]}>
            <Upcoming />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}
export default App;
