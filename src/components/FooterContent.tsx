// Icons
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

const FooterContent = () => {
  return (
    <footer className="my-12">
      <div className="flex space-x-24">
        <div className="flex flex-col">
          <h2 className="font-bold">Empresa</h2>
          <nav className="flex flex-col mt-2 space-y-1 text-gray-300">
            <a href="#" className="hover:underline hover:text-white">
              Sobre
            </a>
            <a href="#" className="hover:underline hover:text-white">
              Empregos
            </a>
            <a href="#" className="hover:underline hover:text-white">
              For the Record
            </a>
          </nav>
        </div>

        <div className="flex flex-col">
          <h2 className="font-bold">Comunidades</h2>
          <nav className="flex flex-col mt-2 space-y-1 text-gray-300">
            <a href="#" className="hover:underline hover:text-white">
              Para artistas
            </a>
            <a href="#" className="hover:underline hover:text-white">
              Desenvolvedores
            </a>
            <a href="#" className="hover:underline hover:text-white">
              Publicidade
            </a>
            <a href="#" className="hover:underline hover:text-white">
              Investidores
            </a>
            <a href="#" className="hover:underline hover:text-white">
              Fornecedores
            </a>
          </nav>
        </div>

        <div className="flex flex-col">
          <h2 className="font-bold">Links úteis</h2>
          <nav className="flex flex-col mt-2 space-y-1 text-gray-300">
            <a href="#" className="hover:underline hover:text-white">
              Suporte
            </a>
            <a href="#" className="hover:underline hover:text-white">
              Aplicativo móvel grátis
            </a>
          </nav>
        </div>

        <div
          style={{ marginLeft: "auto" }}
          className="pr-8 text-2xl flex space-x-3"
        >
          <a
            href="#"
            className="w-10 h-10 bg-background-card hover:bg-network-background rounded-full flex items-center justify-center p-3 cursor-default"
            title="Instagram"
          >
            <FaInstagram className="text-white" />
          </a>

          <a
            href="#"
            className="w-10 h-10 bg-background-card  hover:bg-network-background rounded-full flex items-center justify-center p-3 cursor-default"
            title="Twitter"
          >
            <FaTwitter className="text-white" />
          </a>

          <a
            href="#"
            className="w-10 h-10 bg-background-card  hover:bg-network-background rounded-full flex items-center justify-center p-3 cursor-default"
            title="Facebook"
          >
            <FaFacebook className="text-white" />
          </a>
        </div>
      </div>

      <div className="border-b my-7 border-gray-500/50"></div>

      <span className="mb-4 text-gray-300 text-sm">© 2024 Spotify AB</span>
    </footer>
  );
};

export default FooterContent;
