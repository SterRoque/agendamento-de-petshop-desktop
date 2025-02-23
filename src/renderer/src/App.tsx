import { Input } from "./components/Input";
import user from "./assets/icons/user.svg";

function App(): JSX.Element {
  return (
    <div className="bg-[#23242C] h-screen">
      <h1 className="text-red-600">hello world</h1>
      <Input iconSrc={user} placeholder="Helena Souza" label="Nome do tutor" />
    </div>
  );
}

export default App;
