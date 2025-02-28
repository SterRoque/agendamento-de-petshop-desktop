import { IAppointment } from "@renderer/interfaces/IAppointment";
import { createAppointmentService } from "@renderer/services/create-appointment-service";
import { convertInDateTime } from "@renderer/utils/convertInDateTime";
import { useState } from "react";

const formInitial: IAppointment = {
  tutor_name: "",
  tutor_phone: "",
  pet_name: "",
  service_description: "",
  date: "",
};

export function useCreateAppointment() {
  const [form, setForm] = useState<IAppointment>(formInitial);
  const [date, setDate] = useState<string>("");
  const [time, setTime] = useState<string>("");

  function handleChangeInput(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function onSubmit() {
    try {
      await createAppointmentService({
        ...form,
        date: convertInDateTime(date, time),
      });
      setForm(formInitial);
    } catch (error) {
      alert("erro");
    }
  }

  return {
    form,
    date,
    setDate,
    time,
    setTime,
    onSubmit,
    handleChangeInput,
  };
}
