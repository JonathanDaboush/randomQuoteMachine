import { Provider } from "react-redux";
import store from "./store";
import Randomizer from "./Randomizer";
import { PersistGate } from 'redux-persist/integration/react'
function App() {
  return (
 <Provider store={store}>
      <Randomizer />
 </Provider>
  );
}

export default App;
