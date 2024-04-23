import { ContainerProps } from "@/types/components";

export default function Container(props: ContainerProps) {
  const { children, className } = props;
  return (
    <div className={`w-full flex justify-center ${className}`}>{children}</div>
  );
}
