import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-slate-600">
      <h1 className="text-slate-50">Crime Map</h1>
      <div className="flex items-center">
        <Button className="">Report Crime</Button>
      </div>
    </nav>
  );
};

export default Navbar;
