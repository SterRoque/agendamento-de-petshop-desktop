type InputProps = {
  iconSrc?: string;
  placeholder?: string;
  label?: string;
};

export function Input({ iconSrc, placeholder, label }: InputProps) {
  return (
    <div>
      <p className="text-white text-sm font-bold mb-1">{label}</p>
      <div className=" w-full flex p-2 border border-[#3E3C41] rounded-md gap-2">
        <img src={iconSrc} className="w-[17px] h-[17px]" />
        <input
          type="text"
          className="focus:outline-none text-sm bg-transparent text-[#98959D]"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}
