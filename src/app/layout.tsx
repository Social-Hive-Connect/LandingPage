import "./styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hive.Connect",
  description: "Somos uma comunidade onde pessoas de diversas áreas da tecnologia e em diversos momentos de carreira para que possam se conectar, conversar e trocar conhecimentos.Queremos ajudar as pessoas a se encontrarem dentro de uma profissão de TI, ou até mesmo mudar de área dentro de tecnologia, ou ajudar o proximo repassando seu conhecimento.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="../../hive.png" />
      </head>
      <body className='bg-gray-800 text-white w-full'>
        <main>{children}</main>
      </body>
    </html>
  );
}
