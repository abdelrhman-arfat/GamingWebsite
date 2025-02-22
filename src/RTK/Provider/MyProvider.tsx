import { ReactNode } from "react";
import { Provider } from "react-redux";
import { persistor, store } from "../store/Store";
import { PersistGate } from "redux-persist/integration/react";

const MyProvider = ({ children }: { children: ReactNode }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={<div>loading...</div>} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};

export default MyProvider;
