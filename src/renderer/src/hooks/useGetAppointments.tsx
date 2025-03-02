import { IAppointmentsByPeriod } from "@renderer/interfaces/IAppointment";
import { getAppointmentsService } from "@renderer/services/get-appointments-service";
import { convertAppointmentsByPeriod } from "@renderer/utils/convertAppointmentsByPeriod";
import { useCallback, useEffect, useState } from "react";
import { useLoading } from "./useLoading";

export const appointmentsInitial: IAppointmentsByPeriod = {
  morning: [],
  afternoon: [],
  night: [],
};

export function useGetAppointments() {
  const [appointments, setAppointments] =
    useState<IAppointmentsByPeriod>(appointmentsInitial);

  const { isLoading, startLoading, stopLoading } = useLoading();

  const getAppointments = useCallback(async () => {
    if (!isLoading) {
      setAppointments(appointmentsInitial);

      try {
        startLoading();

        const { data } = await getAppointmentsService();

        const appointmentsByPeriod = convertAppointmentsByPeriod(data);
        setAppointments(appointmentsByPeriod);
      } catch (error) {
        alert("erro");
      } finally {
        stopLoading();
      }
    }
  }, []);

  console.log({
    appointments,
  });

  useEffect(() => {
    getAppointments();
  }, []);

  return {
    appointments,
  };
}
