import { appointmentsInitial } from "@renderer/hooks/useGetAppointments";
import {
  IAppointment,
  IAppointmentsByPeriod,
} from "@renderer/interfaces/IAppointment";
import { classifyTime } from "./classifyTime";

export function convertAppointmentsByPeriod(
  appointments: IAppointment[]
): IAppointmentsByPeriod {
  const result: IAppointmentsByPeriod = appointmentsInitial;

  appointments.forEach((appointment) => {
    const period = classifyTime(appointment.date);

    if (result[period]) {
      result[period].push(appointment);
    }
  });

  return result;
}
