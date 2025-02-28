export interface IAppointment {
  id?: string;
  tutor_name: string;
  tutor_phone: string;
  pet_name: string;
  service_description: string;
  date: string;
}

export interface IAppointmentsByPeriod {
  morning: IAppointment[];
  afternoon: IAppointment[];
  night: IAppointment[];
}
