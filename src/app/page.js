import LogoLg from "@/components/LogoLg";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
      <div className="text-center overflow-y-auto">
        <div className="bg-neutral text-neutral-content p-8 flex flex-col gap-4 ">
          <p className="flex justify-center gap-4 items-center text-4xl">

            Seja bem-vindo(a) à <LogoLg/>
          </p>
          <p className="text-center text-lg">
            Inicie sua jornada como desenvolvedor Web
          </p>
          
        </div>
        <div className="h-56 overflow-hidden">
          <Image
            src="/images/banner.png"
            width={1920}
            height={435}
            alt="Códigos"
          />
        </div>
        <div className="flex-1 flex">
          <div className="p-4 max-w-[70%] flex flex-col gap-4">
            <h1 className="text-3xl">
              Por que aprender sobre programação?          
            </h1>
            <p>
              Nos dias de hoje, o contato com a tecnologia é algo cotidiano e as vezes nós usamos tantas tecnologias interessantes diariamente, que esquecemos de onde tudo partiu. Não pensamos com frequencia que para uma tecnologia existir, alguém em algum momento precisou a explorar, idealizar e criar.
            </p>
            <p>
              Sabia que as tecnologias mais complexas que existem no mercado hoje, até mesmo aquelas que você usa diariamente, precisaram de um ponto de partida lógico bem simples?
            </p>
            <p>
              Pra exemplificar este cenário, vamos construir juntos um site do 0, para mostrar que qualquer pessoa pode fazer isso, basta se dedicar um pouquinho.
            </p>
            <b><p>
              Quem sabe você não é o próximo Steve Jobs?
            </p></b>
            <p>
              Bora testar?
            </p>
            
          </div>
          <div className="p-8 flex-1 flex flex-col justify-center gap-4 font-bold">
            <p className="text-xl">Para iniciar sua jornada, é só clicar no botão abaixo:</p>
            <Link href="/introducao" className="btn btn-primary align-bottom mr-2">vamos começar</Link>            
          </div>
        </div>
      </div>
  );
}
