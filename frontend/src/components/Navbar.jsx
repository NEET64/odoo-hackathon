import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 px-8 bg-slate-600">
      <h1 className="text-slate-50 font-bold text-3xl">CIPHER</h1>
      <div className="flex items-center gap-2">
        <Link  to="/report-crime"><Button>Report Crime</Button></Link>
        <Button>Sign Up</Button>
        <Link to="/login"><Button>Sign In</Button></Link>
      </div>
    </nav>
  );
};

export default Navbar;
