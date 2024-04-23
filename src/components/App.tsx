import { NextUIProvider } from "@nextui-org/react";

export default function App(props: { children: React.ReactNode }) {
  const { children } = props;
  return <NextUIProvider>{children}</NextUIProvider>;
}
