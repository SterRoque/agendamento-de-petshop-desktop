import { Input } from "./components/Input";
import user from "./assets/icons/user.svg";
import RegisterModal from "./components/RegisterModal";

function App(): JSX.Element {
  return (
    <div className="h-screen">
      <RegisterModal />
    </div>
  );
}

export default App;
