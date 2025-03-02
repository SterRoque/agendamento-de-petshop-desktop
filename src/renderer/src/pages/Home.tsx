import { Button } from "@renderer/components/Button";
import { Card } from "@renderer/components/Card";
import { Input } from "@renderer/components/Input";
import RegisterModal from "@renderer/components/RegisterModal";
import { useGetAppointments } from "@renderer/hooks/useGetAppointments";
import { useState } from "react";
import date from "../assets/icons/date.svg";

export function Home() {
  const [isOpenRegisterModal, setIsOpenRegisterModal] =
    useState<boolean>(false);

  const { appointments } = useGetAppointments();

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
        <div className="flex flex-col gap-3">
          <Card period="morning" appointments={appointments.morning} />
          <Card period="afternoon" appointments={appointments.afternoon} />
          <Card period="night" appointments={appointments.night} />
        </div>

        <RegisterModal
          isOpen={isOpenRegisterModal}
          onClose={() => setIsOpenRegisterModal(false)}
        />
      </div>
      <div className="fixed bottom-8 right-7">
        <Button isBlur={true} onClick={() => setIsOpenRegisterModal(true)}>
          Novo Agendamento
        </Button>
      </div>
    </div>
  );
}
