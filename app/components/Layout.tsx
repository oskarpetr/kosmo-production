import { PropsWithChildren } from "react";
import Navbar from "./Navbar";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div>
      <Navbar />
      <div className="px-48">{children}</div>
    </div>
  );
}
