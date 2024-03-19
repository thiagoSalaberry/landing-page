import { Layout } from "@/components/layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

const Theme = {
  main: {
    t: "red",
    breakpoints: {
      max: {
        sm: "(max-width: 641px)",
        md: "(max-width: 769px)",
        lg: "(max-width: 1025px)",
        xl: "(max-width: 1281px)",
        "2xl": "(max-width: 1537px)",
      },
      min: {
        sm: "(min-width: 640px)",
        md: "(min-width: 768px)",
        lg: "(min-width: 1024px)",
        xl: "(min-width: 1280px)",
        "2xl": "(min-width: 1536px)",
      },
    },
  },
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={Theme}>
      <Layout children={<Component {...pageProps} />} />
    </ThemeProvider>
  );
}
