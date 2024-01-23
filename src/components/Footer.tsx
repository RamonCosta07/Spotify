const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-first-color-gradient to-last-color-gradient m-2 p-2 pl-4 mt-5 flex flex-row cursor-default overflow-hidden">
      <a href="#" className="flex flex-col space-y-0">
        <span className="font-semibold">Testar o Premium de graça</span>
        <p className="text-base">
          Inscreva-se para curtir música ilimitada e podcasts só com alguns
          anúncios. Não precisa de cartão de crédito.
        </p>
      </a>
      <div className="ml-auto">
        <button className="rounded-full bg-white py-3 px-7 border border-gray-300 font-bold flex flex-row gap-1 hover:scale-105 hover:border-2">
          <span className="text-md text-black">Inscreva-se grátis</span>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
