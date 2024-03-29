import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import { appReducer } from "./appState/appStateSlice";
import { favoriteReducer } from "./favorite/favoriteSlice";
import { authReducer } from "./auth/authSlice";
import { nanniesReducer } from "./nannies/nanniesSlice";

const favoritePersistConfig = {
  key: "favorite",
  storage,
};
const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

const authPersistReducer = persistReducer(authPersistConfig, authReducer);

const favoritePersistReducer = persistReducer(
  favoritePersistConfig,
  favoriteReducer
);

export const reducer = {
  auth: authPersistReducer,
  nannies: nanniesReducer,
  appState: appReducer,
  favorite: favoritePersistReducer,
};
