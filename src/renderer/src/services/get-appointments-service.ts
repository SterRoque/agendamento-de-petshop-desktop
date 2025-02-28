import { IAppointment } from "@renderer/interfaces/IAppointment";
import { api } from "@renderer/lib/axios";

export async function getAppointmentsService() {
  return api.get<IAppointment[]>("/appointments");
}
