import { Provider } from "react-redux";
import store from "./redux/store";
import WeatherWidget from "./components/WeatherWidget/WeatherWidget";

function App() {
  return (
    <Provider store={store}>
      <WeatherWidget />
    </Provider>
  );
}

export default App;
