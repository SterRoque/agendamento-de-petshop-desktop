import { IAppointmentsByPeriod } from "@renderer/interfaces/IAppointment";
import { getAppointmentsService } from "@renderer/services/get-appointments-service";
import { convertAppointmentsByPeriod } from "@renderer/utils/convertAppointmentsByPeriod";
import { useCallback, useContext, useEffect, useState } from "react";
import { useLoading } from "./useLoading";
import { AppointmentContext } from "@renderer/contexts/AppointmentContext";

export const appointmentsInitial: IAppointmentsByPeriod = {
  morning: [],
  afternoon: [],
  night: [],
};

export function useGetAppointments() {
  const { appointmentsByPeriod, setAppointmentsByPeriod } =
    useContext(AppointmentContext);

  const { isLoading, startLoading, stopLoading } = useLoading();

  const getAppointments = useCallback(async () => {
    setAppointmentsByPeriod(appointmentsInitial);

    try {
      startLoading();

      const { data } = await getAppointmentsService();

      const appointmentsByPeriodConverted = convertAppointmentsByPeriod(data);
      setAppointmentsByPeriod(appointmentsByPeriodConverted);
    } catch (error) {
      alert("erro");
    } finally {
      stopLoading();
    }
  }, []);

  useEffect(() => {
    if (!isLoading) {
      getAppointments();
    }
  }, []);

  return {
    appointmentsByPeriod,
    getAppointments,
  };
}
