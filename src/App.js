import "./App.css";
import FormPassword from "./components/FormPassword";
import PasswordsViewer from "./components/PasswordsViewer";

function App() {
  return (
    <div className="flex flex-col p-4 bg-black h-screen justify-center items-center text-white">
      <PasswordsViewer />
    </div>
  );
}

export default App;
