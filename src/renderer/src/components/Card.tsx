import { consultas } from "@renderer/constants/consultas";
import morning from "../assets/icons/morning.svg";

export function Card() {
  return (
    <div className="bg-[#23242C] w-full h-fit rounded-[10px] max-w-[711px]">
      <div className="flex justify-between border-b border-b-[#353339] py-3">
        <div className="flex gap-3 ml-5">
          <img src={morning} alt="" />
          <p className="text-white font-semibold">Manhã</p>
        </div>
        <p className="text-[#98959D] font-bold mr-5">09h-12h</p>
      </div>
      <div className="p-5">
        {consultas.map((consulta, index, array) => (
          <div
            key={consulta.id}
            className={`flex py-4 px-3 text-xs text-[#98959D] ${consultas.length - 1 !== index && "border-b border-b-[#353339] "}}`}
          >
            <p className="w-11 mr-4 font-bold text-white">{consulta.hora}</p>
            <p className="w-[195px] mr-4">
              <span className="font-bold text-white">{consulta.nomePet}</span> /{" "}
              {consulta.nomeTutor}
            </p>
            <p className="w-[220px]">{consulta.descricaoServico}</p>
            <p className="text-[#666666] cursor-pointer">Remover agendamento</p>
          </div>
        ))}
      </div>
    </div>
  );
}
