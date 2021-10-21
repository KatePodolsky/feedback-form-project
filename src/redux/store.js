import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { feedbackReducer } from "./feedback";

const feedbackPersistConfig = {
  key: "feedback",
  storage,
//   whitelist: ["token"],
};

const store = configureStore({
  reducer: {
    feedback: persistReducer(feedbackPersistConfig, feedbackReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === "development",
});

const persistor = persistStore(store);

const storePersistor = { store, persistor };

export default storePersistor;