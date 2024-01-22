import { useEffect, useState } from "react";
import Header from "./pages/Header";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Info from "./pages/Info";
import Footer from "./pages/Footer";

function App() {
  const [sec, setSec] = useState(0);
  const [vis, setVis] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSec((prevSec) => (prevSec < data.length - 1 ? prevSec + 1 : prevSec));
    }, 200);

    setTimeout(() => {
      clearInterval(intervalId);
      setVis(true);
    }, 1600);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  setTimeout(() => {
    setShow(true);
  }, 2600);

  const data = [
    "வணக்கம்",
    "नमस्ते",
    "నమస్కరం",
    "你好",
    "こんにちは",
    "Bonjour",
    "привет",
    "Hello",
  ];

  return (
    <div className="">
      <div
        className={`bg-[#222222] h-screen flex justify-center items-center ${
          vis
            ? "-translate-y-full duration-1000 ease-[cubic-bezier(0.95,0.05,0.795,0.035)]"
            : ""
        } ${show ? "hidden" : ""}`}
      >
        <span className="p-1 bg-white rounded-full"></span>
        <div className="px-4 text-white text-[40px]">{data[sec]}</div>
      </div>
      {show && (
        <div>
          <Header />
          <Home />
          <Info />
          <Project />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
