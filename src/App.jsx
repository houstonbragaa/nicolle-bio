import { useState } from "react";
import LoadingScreen from "./components/loading-screen";

import logo from "./assets/logos/logo-vertical.png";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <div className="bg-secondary/30 w-full h-screen flex flex-col items-center pt-16">
      <div className="flex flex-col items-center space-y-1">
        <img src={logo} alt="logo" className="w-64 h-34" />
        <p className="text-xs text-gray-400">Psiquiatra • CRM.MG 84432</p>
        <div className="bg-[#B7C9CC] px-2 py-1 rounded-full border border-primary/20">
          <p className="text-[#396461] font-montserrat-semibold text-sm">Consultas online · Todo o Brasil</p>
        </div>
      </div>
    </div>
  );
};

export default App;
