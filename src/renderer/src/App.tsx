import Loading from "./components/Loading";
import { LoadingContextProvider } from "./contexts/LoadingContext";
import { Home } from "./pages/Home";

function App(): JSX.Element {
  return (
    <LoadingContextProvider>
      <Loading />
      <Home />
    </LoadingContextProvider>
  );
}

export default App;
