import Header from "@/src/components/Header/Header";
import { ReactNode } from "react";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main>
        <div className="container">{children}</div>
      </main>
    </>
  );
}
