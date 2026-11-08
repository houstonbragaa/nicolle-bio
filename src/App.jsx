import { useState } from "react";
import LoadingScreen from "./components/loading-screen";
import { motion } from "motion/react";

import logo from "./assets/logos/logo-vertical.png";
import photo from "./assets/photo-nicolle.png";
import whatsappIcon from "./assets/whatsapp-icon.png";
import handUnderIcon from "./assets/hand-under.png";
import netIcon from "./assets/net-icon.png";
import googleIcon from "./assets/google-icon.png";
import gpsIcon from "./assets/gps-icon.png";
import Button from "./components/button";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <motion.div
      className="page-texture relative mx-auto flex min-h-dvh w-full max-w-md flex-col items-center pt-5 pb-10"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="relative w-full" variants={itemVariants}>
        <img
          src={photo}
          alt="Dra. Nicolle Germiniani"
          className="h-[46vh] max-h-120 min-h-80 w-full object-cover object-top"
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-linear-to-b from-transparent to-[#f3f0eb]" />
      </motion.div>

      <motion.img
        src={logo}
        alt="Nicolle Germiniani Saúde Mental"
        className="relative z-10 -mt-38 w-56"
        variants={itemVariants}
      />

      <motion.p
        className="mt-1 z-10 text-xs text-gray-400"
        variants={itemVariants}
      >
        Psiquiatria • CRM.MG 100183
      </motion.p>

      <motion.div
        className="mt-3 rounded-full z-10 border border-primary/20 bg-[#B7C9CC] px-2 py-1"
        variants={itemVariants}
      >
        <p className="font-montserrat-semibold text-sm text-[#396461]">
          Consultas online · Todo o Brasil
        </p>
      </motion.div>

      <motion.a
        href="https://tinyurl.com/4kbzcxdx"
        target="_blank"
        rel="noreferrer"
        className="mt-6 flex w-[calc(100%-2.5rem)] items-center justify-center gap-2 rounded-2xl bg-[#1A7177] py-4 hover:bg-[#1a7177cd]"
        variants={itemVariants}
      >
        <img src={whatsappIcon} alt="" width={24} />
        <p className="font-semibold text-white">Agendar consulta</p>
      </motion.a>

      <motion.p className="mt-3 text-xs text-gray-400" variants={itemVariants}>
        Acesse também
      </motion.p>

      <motion.img
        src={handUnderIcon}
        className="mt-0 mb-3 animate-hand-bob"
        alt=""
        width={18}
        variants={itemVariants}
      />

      <motion.div
        className="-mt-1 flex w-[calc(100%-2.5rem)] flex-col gap-2"
        variants={itemVariants}
      >
        <Button
          icon={netIcon}
          link="https://dranicollepsiquiatria.com.br/"
          text="Site Oficial"
          content={
            <p className="text-xs text-gray-400">
              dranicollepsiquiatria.com.br
            </p>
          }
        />
        <Button
          icon={googleIcon}
          link="https://www.google.com/search?sca_esv=d82df368beb8a1ba&sxsrf=ANbL-n5BD0spuQPnMg0C7koLI4BNN_VYHw:1779380310773&kgmid=/g/11yp_2yym0&q=Dra.+Nicolle+Germiniani+Sa%C3%BAde+Mental&shem=epsdc,rimspwouoe&shndl=30&source=sh/x/loc/uni/m1/1&kgs=ad7c0b66ffa237d9&utm_source=epsdc,rimspwouoe,sh/x/loc/uni/m1/1"
          text="Depoimentos"
          content={
            <div className="flex items-center justify-between text-xs text-gray-400 gap-5">
              <p>+30 depoimentos</p>
              <span className="text-gray-400 font-sans font-semibold">
                ★★★★★ 5,0
              </span>
            </div>
          }
        />
        <Button
          icon={gpsIcon}
          link="https://www.google.com/maps/place/Dra.+Nicolle+Germiniani+Sa%C3%BAde+Mental/@-22.4207497,-45.4600112,925m/data=!3m2!1e3!4b1!4m6!3m5!1s0x94cb7ba149824e05:0xb6425d2fccf6eab2!8m2!3d-22.4207497!4d-45.4600112!16s%2Fg%2F11yp_2yym0?entry=ttu&g_ep=EgoyMDI2MDgyNS4wIKXMDSoASAFQAw%3D%3D"
          text="Como chegar à clínica"
          content={<p className="text-xs text-gray-400">Ver no google Maps</p>}
        />
      </motion.div>
    </motion.div>
  );
};

export default App;
