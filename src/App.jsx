import { HashRouter, Routes, Route } from "react-router-dom";
import CalculatorNav from "./components/general/CalculatorNav.jsx";
import BasicsMatrix from "./components/BasicsMatrix.jsx";
import SolutionCramer from "./components/SolutionCramer.jsx";
import OperationsMatrix from "./components/OperationsMatrix.jsx";
import EscalarMatrix from "./components/EscalarMatrix.jsx";

function App() {
  return (
    <HashRouter>
      <div className="flex flex-col gap-6">
        <CalculatorNav />
        <div
          id="container-app"
          className="
          w-full
          max-w-8xl
          h-fit
          mx-auto
          overflow-hidden
          bg-[var(--color-surface)]
          text-[var(--color-text-primary)]
          rounded-xl
          shadow-lg
          border border-[var(--color-border)]
          backdrop-blur-sm
          transition-all
          duration-300
          ease-in-out
          hover:shadow-xl
          dark:shadow-[var(--color-shadow)]
          p-6
          md:p-8
          lg:p-10"
        >
          <main className="relative">
            <Routes>
              <Route path="/" element={<BasicsMatrix />} />
              <Route path="/cramer" element={<SolutionCramer />} />
              <Route path="/operaciones" element={<OperationsMatrix />} />
              <Route path="/operaciones/escalar" element={<EscalarMatrix />} />
              <Route path="/inversas" element={<BasicsMatrix />} />
            </Routes>
          </main>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
