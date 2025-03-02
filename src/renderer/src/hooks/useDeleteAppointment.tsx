import { deleteAppointmentService } from "@renderer/services/delete-appointment-service";
import { useLoading } from "./useLoading";
import { useContext } from "react";
import { AppointmentContext } from "@renderer/contexts/AppointmentContext";
import { IAppointment } from "@renderer/interfaces/IAppointment";
import { convertAppointmentsByPeriod } from "@renderer/utils/convertAppointmentsByPeriod";

export function useDeleteAppointment() {
  const { isLoading, startLoading, stopLoading } = useLoading();
  const { appointmentsByPeriod, setAppointmentsByPeriod } =
    useContext(AppointmentContext);

  async function deleteAppointment(id: string) {
    if (!isLoading) {
      try {
        startLoading();
        await deleteAppointmentService(id);

        const { morning, afternoon, night } = appointmentsByPeriod;

        const appointments: IAppointment[] = [
          ...morning,
          ...afternoon,
          ...night,
        ];

        const appointmentsUpdated = appointments.filter(
          (item) => item.id !== id
        );

        const appointmentsByPeriodConverted =
          convertAppointmentsByPeriod(appointmentsUpdated);

        setAppointmentsByPeriod(appointmentsByPeriodConverted);
      } catch (error) {
        alert("erro");
      } finally {
        stopLoading();
      }
    }
  }

  return {
    deleteAppointment,
  };
}
