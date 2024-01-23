// Components
import Aside from "./components/Aside";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";

function App() {
  return (
    <div className="bg-black h-screen text-white flex flex-col">
      <div className="flex flex-1 overflow-y-hidden">
        <Aside />
        <MainContent />
      </div>
      <Footer />
    </div>
  );
}

export default App;
