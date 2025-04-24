/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
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
import Script from "next/script";

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
        {/* Facebook Pixel Script */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
              !function (f, b, e, v, n, t, s) {
      if (f.fbq) return; n = f.fbq = function () {
        n.callMethod ?
          n.callMethod.apply(n, arguments) : n.queue.push(arguments)
      };
      if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0';
      n.queue = []; t = b.createElement(e); t.async = !0;
      t.src = v; s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s)
    }(window, document, 'script',
      'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '1476752036639325');       
    fbq('track', 'PageView');
          `}
        </Script>

        {/* Facebook Pixel NoScript fallback */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1476752036639325&ev=PageView&noscript=1"
          />
        </noscript>
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
