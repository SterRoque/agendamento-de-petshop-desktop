import { api } from "@renderer/lib/axios";

export async function deleteAppointmentService(id: string) {
  return api.delete(`/appointments/${id}`);
}
