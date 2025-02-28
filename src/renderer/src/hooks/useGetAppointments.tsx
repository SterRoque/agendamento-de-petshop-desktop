import { IAppointmentsByPeriod } from "@renderer/interfaces/IAppointment";
import { getAppointmentsService } from "@renderer/services/get-appointments-service";
import { convertAppointmentsByPeriod } from "@renderer/utils/convertAppointmentsByPeriod";
import { useEffect, useState } from "react";

export const appointmentsInitial: IAppointmentsByPeriod = {
  morning: [],
  afternoon: [],
  night: [],
};

export function useGetAppointments() {
  const [appointments, setAppointments] =
    useState<IAppointmentsByPeriod>(appointmentsInitial);

  async function getAppointments() {
    try {
      const { data } = await getAppointmentsService();

      const appointmentsByPeriod = convertAppointmentsByPeriod(data);
      setAppointments(appointmentsByPeriod);
    } catch (error) {
      alert("erro");
    }
  }

  useEffect(() => {
    getAppointments();
  }, []);

  return {
    appointments,
  };
}
