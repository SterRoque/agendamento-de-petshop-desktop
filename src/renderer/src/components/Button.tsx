import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  isBlur?: boolean;
};

export function Button({ children, onClick, isBlur = false }: ButtonProps) {
  return (
    <button
      className={`py-3 px-6 max-h-12 bg-[#9282FA] uppercase font-medium rounded-lg ${isBlur && "drop-shadow-[0_0_10px_#9282FA70]"}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
