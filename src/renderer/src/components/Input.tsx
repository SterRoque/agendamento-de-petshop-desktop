import { useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";

type InputProps = {
  iconSrc?: string;
  placeholder?: string;
  label?: string;
  type?: "text" | "date" | "time";
};

export function Input({
  iconSrc,
  placeholder,
  label,
  type = "text",
}: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="w-full">
      {label && <p className="text-white text-sm font-bold mb-1">{label}</p>}
      <div className="w-full flex p-2 border border-[#3E3C41] rounded-md gap-2 h-12 items-center">
        {iconSrc && (
          <img src={iconSrc} alt="icon" className={`w-[17px] h-[17px] -mt-1`} />
        )}
        <input
          type={type}
          ref={inputRef}
          className={`focus:outline-none text-sm bg-transparent text-[#98959D] appearance-none custom-date-input ${(type === "date" || type === "time") && "cursor-pointer"}`}
          placeholder={placeholder}
          onClick={() => inputRef.current?.showPicker()}
        />

        {(type === "date" || type === "time") && (
          <div
            className="w-full relative cursor-pointer"
            onClick={() => inputRef.current?.showPicker()}
          >
            <IoIosArrowDown color="white" className="absolute right-2" />
          </div>
        )}
      </div>
    </div>
  );
}
