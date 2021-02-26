import { Provider } from "react-redux";
import Home from "./Pages/Home";
import { ConfigureStore } from "./Redux";

function App() {
  return (
    <Provider store={ConfigureStore()}>
      <Home />
    </Provider>
  );
}

export default App;