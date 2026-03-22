import { cn } from "@/lib/utils";
import { ClassNameValue } from "tailwind-merge";

function H1({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: ClassNameValue;
}) {
  return (
    <h1 className={cn("text-4xl font-bold tracking-wider", className)}>
      {children}
    </h1>
  );
}

export default H1;
