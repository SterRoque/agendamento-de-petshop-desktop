import { IAppointment } from "@renderer/interfaces/IAppointment";

import morningIcon from "../assets/icons/morning.svg";
import afternoonIcon from "../assets/icons/afternoon.svg";
import nightIcon from "../assets/icons/night.svg";
import { formatDate } from "@renderer/utils/formatHour";

type CardProps = {
  appointments: IAppointment[];
  period: "morning" | "afternoon" | "night";
};

const periodsContent = {
  morning: {
    text: "Manhã",
    hour: "09h-12h",
    icon: morningIcon,
  },
  afternoon: {
    text: "Tarde",
    hour: "13h-18h",
    icon: afternoonIcon,
  },
  night: {
    text: "Noite",
    hour: "19h-21h",
    icon: nightIcon,
  },
};

export function Card({ appointments, period }: CardProps) {
  const currentPeriod = periodsContent[period];

  console.log(appointments);

  return (
    <div className="bg-[#23242C] w-full h-fit rounded-[10px] max-w-[711px]">
      <div className="flex justify-between border-b border-b-[#353339] py-3">
        <div className="flex gap-3 ml-5">
          <img src={currentPeriod.icon} alt={period} />

          <p className="text-white font-semibold">{currentPeriod.text}</p>
        </div>
        <p className="text-[#98959D] font-bold mr-5">{currentPeriod.hour}</p>
      </div>
      <div className="p-5">
        {appointments.map((appointment, index, array) => (
          <div
            key={appointment.id}
            className={`flex py-4 px-3 text-xs text-[#98959D] ${array.length - 1 !== index && "border-b border-b-[#353339] "}}`}
          >
            <p className="w-11 mr-4 font-bold text-white">
              {formatDate(appointment.date)}
            </p>
            <p className="w-[195px] mr-4">
              <span className="font-bold text-white">
                {appointment.pet_name}
              </span>{" "}
              / {appointment.tutor_name}
            </p>
            <p className="w-[220px]">{appointment.service_description}</p>
            <p className="text-[#666666] cursor-pointer">Remover agendamento</p>
          </div>
        ))}
      </div>
    </div>
  );
}
