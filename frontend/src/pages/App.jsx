import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div>
      <h1>This is the App page</h1>
      <Outlet />
    </div>
  );
};

export default App;
