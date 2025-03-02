import {
  IAppointment,
  IAppointmentsByPeriod,
} from "@renderer/interfaces/IAppointment";
import { classifyTime } from "./classifyTime";

export function convertAppointmentsByPeriod(
  appointments: IAppointment[]
): IAppointmentsByPeriod {
  const result: IAppointmentsByPeriod = {
    morning: [],
    afternoon: [],
    night: [],
  };

  appointments.forEach((appointment) => {
    const period = classifyTime(appointment.date);

    if (result[period]) {
      result[period].push(appointment);
    }
  });

  return result;
}
