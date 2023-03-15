import { Routes as Switch, BrowserRouter, Route } from "react-router-dom";
import { Animes, AnimeCharacters } from "./views";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<Animes />} />
        <Route path="/:id/characters" element={<AnimeCharacters />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
