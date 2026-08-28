import { useState } from "react";
import LoadingScreen from "./components/loading-screen";

import logo from "./assets/logos/logo-vertical.png";
import Button from "./components/button";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <div className="bg-secondary/30 w-full h-screen flex flex-col items-center pt-16 space-y-6">
      <div className="flex flex-col items-center space-y-1">
        <img src={logo} alt="logo" className="w-64 h-34" />
        <p className="text-xs text-gray-400">Psiquiatra • CRM.MG 84432</p>
        <div className="bg-[#B7C9CC] px-2 py-1 rounded-full border border-primary/20">
          <p className="text-[#396461] font-montserrat-semibold text-sm">
            Consultas online · Todo o Brasil
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-1 items-center max-w-90 w-full">
        <a
          href="https://tinyurl.com/4kbzcxdx"
          target="_blank"
          className="bg-[#1A7177] hover:bg-[#1a7177cd] rounded-2xl py-4 w-full flex gap-2 justify-center items-center"
        >
          <img src="src/assets/whatsapp-icon.png" alt="whats" width={24} />
          <p className="font-semibold text-white">Agendar consulta</p>
        </a>
        <p className="text-xs text-gray-400">Acesse também</p>
        <img
          src="src/assets/hand-under.png"
          className="mb-2 animate-hand-bob"
          alt="hand"
          width={18}
        />
        <div className="w-full space-y-2">
          <Button
            icon="src/assets/net-icon.png"
            link="https://dranicollepsiquiatria.com.br/"
            text="Site Oficial"
            content={
              <p className="text-xs text-gray-400">
                dranicollepsiquiatria.com.br
              </p>
            }
          />
          <Button
            icon="src/assets/google-icon.png"
            link="https://dranicollepsiquiatria.com.br/"
            text="Depoimentos"
            content={
              <div className="flex items-center justify-between text-xs text-gray-400 gap-5">
                <p>+30 depoimentos</p>
                <span className="text-[#396461] font-sans font-semibold">★★★★★ 5,0</span>
              </div>
            }
          />
          <Button
            icon="src/assets/gps-icon.png"
            link="https://dranicollepsiquiatria.com.br/"
            text="Como chegar à clínica"
            content={
              <p className="text-xs text-gray-400">
                Ver no google Maps
              </p>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default App;
