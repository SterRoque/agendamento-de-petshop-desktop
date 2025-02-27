import { useState } from "react";
import { Input } from "./Input";
import user from "../assets/icons/user.svg";
import pet from "../assets/icons/pet.svg";
import phone from "../assets/icons/phone.svg";
import date from "../assets/icons/date.svg";
import time from "../assets/icons/time.svg";
import { Button } from "./Button";

type RegisterModalProps = {
  onClose: () => void;
  isOpen: boolean;
};

export default function RegisterModal({ onClose, isOpen }: RegisterModalProps) {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          onClick={onClose}
        >
          <div
            className="relative bg-[#23242C] px-10 py-9 rounded shadow-lg  w-full max-w-[470px] max-h-[700px] h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <h1 className="text-white font-bold text-2xl mb-1">
              Agende um atendimento
            </h1>
            <p className="text-[#98959D] text-sm mb-7">
              Preencha os dados do cliente para realizar o agendamento.
            </p>
            <div className="flex flex-col gap-4">
              <Input
                iconSrc={user}
                label="Nome do tutor"
                placeholder="Ex: Helena Souza"
              />
              <Input
                iconSrc={pet}
                label="Nome do pet"
                placeholder="Ex: Cheddar"
              />
              <Input
                iconSrc={phone}
                label="Telefone"
                placeholder="Ex: (00) 0 0000-0000"
              />
              <div>
                <p className="text-white text-sm font-bold mb-1">
                  Descrição do serviço
                </p>
                <textarea
                  className="w-full p-2 border border-[#3E3C41] rounded-md bg-transparent text-sm focus:outline-none text-[#98959D]"
                  rows={4}
                  placeholder="Ex: Banho e tosa"
                />
              </div>
              <div className="flex w-full gap-2">
                <Input iconSrc={date} type="date" label="Data" />
                <Input iconSrc={time} type="time" label="Hora" />
              </div>
            </div>
            <div className="absolute right-10 mt-7">
              <Button>agendar</Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
