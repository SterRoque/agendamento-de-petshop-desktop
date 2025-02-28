import { ChangeEventHandler, useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";

type InputProps = {
  iconSrc?: string;
  placeholder?: string;
  label?: string;
  type?: "text" | "date" | "time";
  value?: string | number;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  name?: string;
};

export function Input({
  iconSrc,
  placeholder,
  label,
  type = "text",
  value,
  name,
  onChange,
}: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div
      className={`w-full ${(type === "date" || type === "time") && "max-w-[190.5px]"}`}
    >
      {label && <p className="text-white text-sm font-bold mb-1">{label}</p>}
      <div className="w-full flex p-2 border border-[#3E3C41] rounded-md gap-2 h-12 items-center">
        {iconSrc && (
          <img src={iconSrc} alt="icon" className={`w-[17px] h-[17px] -mt-1`} />
        )}
        <input
          value={value}
          onChange={onChange}
          name={name}
          type={type}
          ref={inputRef}
          className={`focus:outline-none text-sm bg-transparent text-[#98959D] appearance-none custom-date-input ${(type === "date" || type === "time") && "cursor-pointer"}`}
          placeholder={placeholder}
          onClick={() => inputRef.current?.showPicker()}
        />

        {(type === "date" || type === "time") && (
          <div
            className="relative cursor-pointer w-full h-full"
            onClick={() => inputRef.current?.showPicker()}
          >
            <IoIosArrowDown color="white" className="absolute right-2 top-2" />
          </div>
        )}
      </div>
    </div>
  );
}
