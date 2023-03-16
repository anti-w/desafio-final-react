import { Routes as Switch, BrowserRouter, Route } from "react-router-dom";
import { Animes, AnimeCharacters, Home } from "./views";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/animes" element={<Animes />} />
        <Route path="/:id/characters" element={<AnimeCharacters />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
