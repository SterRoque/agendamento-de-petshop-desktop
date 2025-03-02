import { useLoading } from "@renderer/hooks/useLoading";

export default function Loading() {
  const { isLoading } = useLoading();

  if (!isLoading) return null;

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#00000080] fixed w-screen z-[99999]">
      <div className="w-16 h-16 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
    </div>
  );
}
