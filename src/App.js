import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import AppBar from "./components/AppBar";
import Loader from "react-loader-spinner";

const HomePage = lazy(() =>
  import("./views/HomePage" /* webpackChunkName:'home-view'*/)
);
const MovieDetailsPage = lazy(() =>
  import("./views/MovieDetailsPage" /* webpackChunkName:'movie-details-view'*/)
);
const MoviesPage = lazy(() =>
  import("./views/MoviesPage" /* webpackChunkName:'movie-page'*/)
);

const App = () => (
  <>
    <AppBar />
    <Suspense
      fallback={
        <Loader
          type="Oval"
          color="#3f51b5"
          height={80}
          width={80}
          radius={100}
          timeout={7000}
          className="Loader"
        />
      }
    >
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/movies/:movieId" component={MovieDetailsPage} />
        <Route path="/movies" component={MoviesPage} />
      </Switch>
    </Suspense>
  </>
);
export default App;
