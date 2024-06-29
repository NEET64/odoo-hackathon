import Navbar from "@/components/Navbar";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="flex min-h-dvh w-full flex-col bg-slate-800 dark:bg-zinc-950 dark:text-zinc-50">
      <Navbar />

      <Outlet />
    </div>
  );
};

export default App;
