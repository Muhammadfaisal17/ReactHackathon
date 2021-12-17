import { Provider } from "react-redux";
import store from "./store";
import AppRouter from "./config/Router";

function App() {
  return (
    <Provider store = {store}>
      <AppRouter/>
    </Provider>
    );
}

export default App;
