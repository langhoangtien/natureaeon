import MainLayout from "@/components/layouts/main-layout";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return <MainLayout>{children}</MainLayout>;
}
