import { createStore, combineReducers, applyMiddleware } from "redux";
import promise from "redux-promise-middleware";
import logger from "redux-logger";
import auth from "../_reducers/auth";
import species from "../_reducers/species";
import pet from "../_reducers/pet";
import pets from "../_reducers/pets";
import user from "../_reducers/user";
import match from "../_reducers/match";
import payment from "../_reducers/payment";
import pets_match from "../_reducers/pets_match"; //FOR ,GENERATE LIST OF PETS FOR MATCHING

const reducers = combineReducers({
  auth,
  species,
  pets,
  pet,
  user,
  match,
  payment,
  pets_match
});

const store = createStore(reducers, applyMiddleware(promise, logger));

export default store;
