import { IAppointment } from "@renderer/interfaces/IAppointment";
import { api } from "@renderer/lib/axios";

export async function createAppointmentService(data: IAppointment) {
  return api.post("/appointments", data);
}
