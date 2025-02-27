import { Input } from "./components/Input";
import user from "./assets/icons/user.svg";
import RegisterModal from "./components/RegisterModal";
import { Card } from "./components/Card";
import date from "./assets/icons/date.svg";
import { Button } from "./components/Button";
import { useState } from "react";

function App(): JSX.Element {
  const [isOpenRegisterModal, setIsOpenRegisterModal] =
    useState<boolean>(false);
  return (
    <div className="h-screen bg-[#14151D] w-full flex justify-center relative">
      <div className="max-w-[711px] ">
        <div className="flex justify-between mt-16 mb-10">
          <div>
            <h1 className="text-2xl text-white font-bold mb-1">Sua agenda</h1>
            <p className="text-[#98959D] text-sm font-medium">
              Aqui você pode ver todos os clientes e serviços agendados para
              hoje.
            </p>
          </div>
          <Input type="date" iconSrc={date} />
        </div>
        <Card />

        <RegisterModal
          isOpen={isOpenRegisterModal}
          onClose={() => setIsOpenRegisterModal(false)}
        />
      </div>
      <div className="absolute bottom-8 right-7">
        <Button isBlur={true} onClick={() => setIsOpenRegisterModal(true)}>
          Novo Agendamento
        </Button>
      </div>
    </div>
  );
}

export default App;
