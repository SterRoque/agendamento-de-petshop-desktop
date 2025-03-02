import { IAppointmentsByPeriod } from "@renderer/interfaces/IAppointment";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

export type AppointmentContextProps = {
  appointmentsByPeriod: IAppointmentsByPeriod;
  setAppointmentsByPeriod: Dispatch<SetStateAction<IAppointmentsByPeriod>>;
};

export type AppointmentContextProviderProps = {
  children: ReactNode;
};

const appointmentsByPeriodInitial: IAppointmentsByPeriod = {
  morning: [],
  afternoon: [],
  night: [],
};

const appointmentContextInitial: AppointmentContextProps = {
  appointmentsByPeriod: appointmentsByPeriodInitial,
  setAppointmentsByPeriod: () => {},
};

export const AppointmentContext = createContext<AppointmentContextProps>(
  appointmentContextInitial
);

export function AppointmentContextProvider({
  children,
}: AppointmentContextProviderProps) {
  const [appointmentsByPeriod, setAppointmentsByPeriod] =
    useState<IAppointmentsByPeriod>(appointmentsByPeriodInitial);

  return (
    <AppointmentContext.Provider
      value={{
        appointmentsByPeriod,
        setAppointmentsByPeriod,
      }}
    >
      {children}
    </AppointmentContext.Provider>
  );
}
