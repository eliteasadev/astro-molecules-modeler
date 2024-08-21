import { UserIcon } from "@/AI/icons";

export function UserMessage({ message }) {
  return (
    <div className="flex  gap-1 items-center ">
      <UserIcon />
      <p>:</p>
      <p className="font-medium w-96">{message}</p>
    </div>
  );
}
