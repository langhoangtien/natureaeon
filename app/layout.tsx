import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { CartProvider } from "@/components/cart/cart-context";
import { Toaster } from "@/components/ui/sonner";
import {
  CheckCircle,
  AlertTriangle,
  XCircle,
  Loader2,
  Info,
} from "lucide-react";
import { COMPANY_NAME } from "@/config";

export const metadata: Metadata = {
  title: COMPANY_NAME,
  description: `${COMPANY_NAME} is a wellness brand that offers premium supplements.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <CartProvider>{children}</CartProvider>
          <Toaster
            position="top-right"
            expand={true}
            icons={{
              success: (
                <CheckCircle
                  strokeWidth={1.25}
                  size={16}
                  className="text-green-500 mt-1"
                />
              ),
              info: (
                <Info
                  strokeWidth={1.25}
                  size={16}
                  className="text-blue-500 mt-1"
                />
              ),
              warning: (
                <AlertTriangle
                  strokeWidth={1.25}
                  size={16}
                  className="text-yellow-500 mt-1"
                />
              ),
              error: (
                <XCircle
                  strokeWidth={1.25}
                  size={16}
                  className="text-red-500 mt-1"
                />
              ),
              loading: (
                <Loader2
                  strokeWidth={1.25}
                  size={16}
                  className="animate-spin mt-1"
                />
              ),
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
