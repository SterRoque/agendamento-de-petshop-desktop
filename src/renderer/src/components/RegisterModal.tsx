import { useState } from "react";
import { Input } from "./Input";
import user from "../assets/icons/user.svg";
import pet from "../assets/icons/pet.svg";
import phone from "../assets/icons/phone.svg";
import date from "../assets/icons/date.svg";
import time from "../assets/icons/time.svg";

export default function RegisterModal() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-[#23242C] px-10 py-9 rounded shadow-lg max-w-sm w-full max-w-[470px] max-h-[700px] h-full">
        <h1 className="text-white font-bold text-xl mb-1">
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
          <Input iconSrc={pet} label="Nome do pet" placeholder="Ex: Cheddar" />
          <Input
            iconSrc={phone}
            label="Telefone"
            placeholder="Ex: (00) 0 0000-0000"
          />
          <div>
            <p className="text-white text-xs font-bold mb-1">
              Descrição do serviço
            </p>
            <textarea
              className="w-full p-2 border border-[#3E3C41] rounded-md mb-4 bg-transparent text-sm focus:outline-none text-[#98959D]"
              rows={4}
              placeholder="Ex: Banho e tosa"
            />
          </div>
          <div className="flex w-full gap-2">
            <Input iconSrc={date} type="date" label="Data" />
            <Input iconSrc={time} type="time" label="Hora" />
          </div>
        </div>
      </div>
    </div>
  );
}
