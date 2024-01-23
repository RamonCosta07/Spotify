// Icons
import { FaArrowLeft, FaPlay } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
// Imagens
import album from "../../images/album.webp";
import FooterContent from "./FooterContent";

const MainContent = () => {
  return (
    <main className="flex-1">
      <div className="h-1/6 bg-background-mainBody mb-0 m-2 rounded flex items-center pl-8 gap-3 justify-between">
        <div className="hidden lg:flex xl:flex 2xl:flex gap-2 text-gray-200/50">
          <button className="button-arrow">
            <FaArrowLeft />
          </button>
          <button className="button-arrow">
            <FaArrowRight />
          </button>
        </div>

        <div className="flex items-center pr-5 bg-background-mainBody">
          <nav className="flex flex-row space-x-3">
            <a
              href="#"
              className="font-medium text-md text-gray-300 hover:scale-105 hover:text-white"
            >
              Premium
            </a>
            <a
              href="#"
              className="font-medium text-md text-gray-300 hover:scale-105 hover:text-white"
            >
              Suporte
            </a>
            <a
              href="#"
              className="font-medium text-md text-gray-300 hover:scale-105 hover:text-white"
            >
              Baixar
            </a>
          </nav>

          <div className="border-r-2 border-solid border-gray-200 h-6 px-3"></div>

          <nav className="flex flex-row space-x-3 pl-6">
            <a
              href="#"
              className="hidden lg:block xl:block 2xl:bloc font-medium text-md text-gray-300 hover:scale-105 hover:text-white ml-auto"
            >
              Inscreva-se
            </a>
          </nav>

          <button className="rounded-full bg-white py-3 px-7 sm:py-1 sm:px-4 sm:mb-2 border hover:bg-gray-100 font-bold flex flex-row gap-1 hover:scale-102 hover:border-2 ml-4">
            <span className="text-md text-black">Entrar</span>
          </button>
        </div>
      </div>

      <div className="h-5/6 bg-gradient-to-b from-background-mini-card via-background-card to-mainBody my-0 m-2 rounded pt-2 px-6 flex-1 overflow-y-auto ">
        <nav className="flex justify-between">
          <a href="#" className="cursor-default">
            <h1 className="font-bold text-2xl">
              <span className="hover:underline cursor-pointer">
                Playlists do Spotify
              </span>
            </h1>
          </a>

          <a href="#" className="text-sm hover:underline text-gray-300 mt-2">
            Mostrar tudo
          </a>
        </nav>

        <div className="grid lg:grid-cols-5 sm:grid-cols-2 gap-6 mt-3">
          <div className="flex flex-col relative bg-white/5 p-3 rounded-md cursor-pointer group hover:bg-white/10">
            <img
              src={album}
              alt="Capa do álbum"
              className="w-full rounded-md"
            />
            <div className="absolute bottom-14 right-2 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="p-4 rounded-full bg-play-button text-black hover:scale-105">
                <FaPlay />
              </button>
            </div>
            <strong className="font-semibold">Dark necessities</strong>
            <span className="text-sm text-zinc-400">Red Hot Chili Peppers</span>
          </div>

          <div className="flex flex-col relative bg-white/5 p-3 rounded-md cursor-pointer group hover:bg-white/10">
            <img
              src={album}
              alt="Capa do álbum"
              className="w-full rounded-md"
            />
            <div className="absolute bottom-14 right-2 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="p-4 rounded-full bg-play-button text-black hover:scale-105">
                <FaPlay />
              </button>
            </div>
            <strong className="font-semibold">Dark necessities</strong>
            <span className="text-sm text-zinc-400">Red Hot Chili Peppers</span>
          </div>

          <div className="flex flex-col relative bg-white/5 p-3 rounded-md cursor-pointer group hover:bg-white/10">
            <img
              src={album}
              alt="Capa do álbum"
              className="w-full rounded-md"
            />
            <div className="absolute bottom-14 right-2 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="p-4 rounded-full bg-play-button text-black hover:scale-105">
                <FaPlay />
              </button>
            </div>
            <strong className="font-semibold">Dark necessities</strong>
            <span className="text-sm text-zinc-400">Red Hot Chili Peppers</span>
          </div>

          <div className="flex flex-col relative bg-white/5 p-3 rounded-md cursor-pointer group hover:bg-white/10">
            <img
              src={album}
              alt="Capa do álbum"
              className="w-full rounded-md"
            />
            <div className="absolute bottom-14 right-2 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="p-4 rounded-full bg-play-button text-black hover:scale-105">
                <FaPlay />
              </button>
            </div>
            <strong className="font-semibold">Dark necessities</strong>
            <span className="text-sm text-zinc-400">Red Hot Chili Peppers</span>
          </div>

          <div className="flex flex-col relative bg-white/5 p-3 rounded-md cursor-pointer group hover:bg-white/10">
            <img
              src={album}
              alt="Capa do álbum"
              className="w-full rounded-md"
            />
            <div className="absolute bottom-14 right-2 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="p-4 rounded-full bg-play-button text-black hover:scale-105">
                <FaPlay />
              </button>
            </div>
            <strong className="font-semibold">Dark necessities</strong>
            <span className="text-sm text-zinc-400">Red Hot Chili Peppers</span>
          </div>
        </div>

        <h1 className="font-bold text-2xl mt-10">Para dormir</h1>
        <div className="grid grid-cols-5 gap-6 mt-3 pb-5">
          <div className="flex flex-col relative bg-white/5 p-3 rounded-md cursor-pointer group hover:bg-white/10">
            <img
              src={album}
              alt="Capa do álbum"
              className="w-full rounded-md"
            />
            <div className="absolute bottom-14 right-2 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="p-4 rounded-full bg-play-button text-black hover:scale-105">
                <FaPlay />
              </button>
            </div>
            <strong className="font-semibold">Dark necessities</strong>
            <span className="text-sm text-zinc-400">Red Hot Chili Peppers</span>
          </div>

          <div className="flex flex-col relative bg-white/5 p-3 rounded-md cursor-pointer group hover:bg-white/10">
            <img
              src={album}
              alt="Capa do álbum"
              className="w-full rounded-md"
            />
            <div className="absolute bottom-14 right-2 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="p-4 rounded-full bg-play-button text-black hover:scale-105">
                <FaPlay />
              </button>
            </div>
            <strong className="font-semibold">Dark necessities</strong>
            <span className="text-sm text-zinc-400">Red Hot Chili Peppers</span>
          </div>
        </div>
        <FooterContent />
      </div>
    </main>
  );
};

export default MainContent;
