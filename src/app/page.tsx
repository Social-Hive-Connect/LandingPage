"use client";
import Colmeia from '@/components/Colmeia';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden">
      <Navbar />
      <div className="absolute top-60 left-20 -translate-x-1/2 -translate-y-1/2 z-0">
        <Colmeia treeLevels={[6, 5, 4, 3]} />
      </div>
      <div className="relative container mx-auto px-8 pt-10 text-center h-[60vh] flex flex-col justify-center items-center">
        <h2
          id="subtitle"
          className="relative z-10 text-4xl font-semibold mb-6 text-gray-100 drop-shadow-2xl text-outline sm:mt-16 sm:text-3xl"
        >
          Uma comunidade de todos para todos
        </h2>
        <h1
          id="title"
          className="relative z-10 text-7xl font-black text-white drop-shadow-2xl text-outline sm:text-5xl sm:mb-8"
        >
          Hive Connect
        </h1>
      </div>
      <div
        id="quem-somos"
        className="relative bg-white mx-auto px-8 py-10 scroll-mt-20"
      >
        <h2 className="quem-somos-title text-5xl text-center py-4 uppercase font-bold bg-gradient-to-r from-customColors-color4 via-customColors-color5 to-customColors-color6 text-transparent bg-clip-text sm:text-3xl">
          visão geral
        </h2>
        <p className="quem-somos-text text-gray-900 text-4xl text-center xl:px-60 lg:px-32 md:px-12 sm:px-4 pb-8 sm:text-2xl">
          Somos uma comunidade onde pessoas de diversas áreas da tecnologia e em
          diversos momentos de carreira para que possam se conectar, conversar
          e trocar conhecimentos. Queremos ajudar as pessoas a se encontrarem
          dentro de uma profissão de TI, ou até mesmo mudar de área dentro de
          tecnologia, ou ajudar o próximo repassando seu conhecimento.
        </p>
        <h2 className="quem-somos-title text-5xl text-center py-4 uppercase font-bold bg-gradient-to-r from-customColors-color4 via-customColors-color5 to-customColors-color6 text-transparent bg-clip-text sm:text-3xl">
          qual o problema?
        </h2>
        <p className="quem-somos-text text-gray-900 text-4xl text-center xl:px-60 lg:px-32 md:px-12 sm:px-4 pb-8 sm:text-2xl">
          Atualmente a cidade de Curitiba se mostra um tanto carente quando o
          assunto é comunidade e eventos de tecnologia. Percebemos essa
          necessidade tanto entre os profissionais do mercado de TI, quanto
          entre aqueles que desejam ingressar na área. Hoje as oportunidades
          para networking se limitam, na maioria das vezes ao LinkedIn, que
          embora seja uma ferramenta essencial, é marcada por uma formalidade
          que dificulta a formação de amizades e um networking mais natural e
          descontraído.
        </p>
        <h2 className="quem-somos-title text-5xl text-center py-4 uppercase font-bold bg-gradient-to-r from-customColors-color4 via-customColors-color5 to-customColors-color6 text-transparent bg-clip-text sm:text-3xl">
          o que é uma comunidade?
        </h2>
        <p className="quem-somos-text text-gray-900 text-4xl text-center xl:px-60 lg:px-32 md:px-12 sm:px-4 pb-8 sm:text-2xl">
          <span>
            Um espaço de convergência onde indivíduos buscam compartilhar e
            enriquecer conhecimentos;
          </span>
          <br />
          <span>
            Um ambiente seguro para o estabelecimento de conexões profissionais,
            cultivo de novas amizades e oportunidades de mentoria;
          </span>
          <br />
          <span>
            Uma rede colaborativa onde profissionais e iniciantes se unem para
            impulsionar o crescimento mútuo e o aprendizado contínuo;
          </span>
        </p>
      </div>
    </div>
  );
}