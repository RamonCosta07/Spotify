// Icons
import { FaSpotify } from "react-icons/fa";
import { AiOutlineHome, AiOutlinePlus } from "react-icons/ai";
import { IoIosSearch } from "react-icons/io";
import { VscLibrary } from "react-icons/vsc";
import { TbWorld } from "react-icons/tb";

const Aside = () => {
  return (
    <aside className="hidden md:flex lg:flex xl:flex w-72 ml-2 h-full flex-col max-h-128 pb-4">
      <nav
        className="h-2/6 rounded bg-background-card m-1 my-2
          p-6"
      >
        <a href="#" className="flex cursor-pointer">
          <FaSpotify className="text-2xl mr-1" />
          <div title="Spotify" className="font-bold">
            Spotify
          </div>
        </a>

        <a href="#" className="sidebar-icons">
          <AiOutlineHome className="text-2xl mr-1" />
          <span className="font-medium">Início</span>
        </a>

        <a href="#" className="sidebar-icons">
          <IoIosSearch className="text-2xl mr-1" />
          <span className="font-medium">Buscar</span>
        </a>
      </nav>

      <div className="h-4/6 rounded bg-background-card mx-1  flex flex-col">
        <nav className="flex p-6">
          <a href="#" className="sidebar-content">
            <VscLibrary className="text-2xl mr-1" />
            <span className="font-medium">Sua Biblioteca</span>
          </a>

          <a
            href="#"
            className="sidebar-content ml-auto py-1 pl-1 hover:text-white hover:font-extrabold hover:rounded-full hover:bg-gray-300/10"
            title="Criar playlist ou pasta"
          >
            <AiOutlinePlus className="text-2xl mr-1" />
          </a>
        </nav>

        <div className="flex-1 flex flex-col space-y-2 max-h-screen overflow-y-auto">
          <div className="rounded-md bg-background-mini-card p-4 w-11/12 mt-2 mx-auto space-y-4 cursor-default">
            <div className="space-y-1">
              <h2 className="font-bold text-base">
                Crie sua primeira playlist
              </h2>
              <p className="text-sm">É fácil, vamos te ajudar.</p>
            </div>

            <div>
              <button className="rounded-full bg-white text-black text-sm font-bold py-2 px-5 transition-transform transform hover:scale-105">
                Criar playlist
              </button>
            </div>
          </div>

          <div className="rounded-md bg-background-mini-card p-4 pr-3 w-11/12 mt-2 mx-auto space-y-4 cursor-default">
            <div className="space-y-1">
              <h2 className="font-bold text-sm">
                Que tal seguir um podcast novo?
              </h2>
              <p className="text-sm">Avisaremos sobre novos episódios.</p>
            </div>

            <div>
              <button className="rounded-full bg-white text-black text-sm font-bold py-2 px-5 transition-transform transform hover:scale-105">
                Explore podcasts
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 mx-6">
          <a href="#" className="text-xs text-gray-300 hover:underline">
            Cookies
          </a>
        </div>

        <div className="flex items-center justify-items-start ml-5 mt-5 pb-3">
          <button className="rounded-full bg-background-card py-1 px-4 border border-gray-300 font-bold flex flex-row gap-1 hover:scale-105 hover:border-2">
            <TbWorld className="mt-1" />
            <span className="text-sm">Português do Brasil</span>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Aside;
