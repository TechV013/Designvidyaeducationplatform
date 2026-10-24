import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import SessionProvider from "@/components/auth/SessionProvider";
import SessionGuard from "@/components/auth/SessionGuard";
import AuthNotificationManager from "@/components/auth/AuthNotificationManager";
import { ToastProvider } from "@/components/ui/Toast";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.designvidya.com"),
  title: {
    default: "Design Vidya - Learn Creative Skills",
    template: "%s | Design Vidya",
  },
  description:
    "Master 3D Modeling, Animation, VFX, Video Editing and more with Design Vidya — affordable, expert-led creative courses.",
  keywords: [
    "3D modeling course",
    "animation classes online",
    "VFX training",
    "video editing course",
    "creative skills learning",
    "online design courses",
  ],
  verification: {
    google: "zqQ7Q7ot_jetE4s9_-gKqyYwfggOJiKec1f",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    siteName: "Design Vidya",
    type: "website",
    locale: "en_US",
    url: "https://www.designvidya.com",
    title: "Design Vidya - Learn Creative Skills",
    description: "Master 3D Modeling, Animation, VFX, Video Editing and more.",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "Design Vidya" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Design Vidya - Learn Creative Skills",
    description: "Master 3D Modeling, Animation, VFX, Video Editing and more.",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.className} h-full antialiased`}
    >
      <head>
        {/* Meta Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${process.env.META_PIXEL_ID || "2378602222953460"}');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${process.env.META_PIXEL_ID || "2378602222953460"}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>
        {/* End Meta Pixel Code */}
      </head>
      <body className="min-h-full flex flex-col">
        <SessionProvider>
          <ToastProvider>
            <SessionGuard />
            <AuthNotificationManager />
            {children}
          </ToastProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
