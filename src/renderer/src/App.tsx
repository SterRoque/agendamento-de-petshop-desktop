import Loading from "./components/Loading";
import { AppointmentContextProvider } from "./contexts/AppointmentContext";
import { LoadingContextProvider } from "./contexts/LoadingContext";
import { Home } from "./pages/Home";

function App(): JSX.Element {
  return (
    <LoadingContextProvider>
      <AppointmentContextProvider>
        <Loading />
        <Home />
      </AppointmentContextProvider>
    </LoadingContextProvider>
  );
}

export default App;
