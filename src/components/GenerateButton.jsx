const generatePassword = (event) => {
  event.preventDefault();
  let charachters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*()-_=+[]{}<>?";
  let password = "";
  for (let i = 0; i < 12; i++) {
    const r = Math.floor(Math.random() * charachters.length);
    password += charachters.charAt(r);
  }
  document.getElementById("password").value = password;
};

const GenerateButton = () => {
  return (
    <button
      onClick={generatePassword}
      className="h-8 text-lg text-gray-300 font-bold flex flex-col justify-center items-center w-full rounded bg-teal-600"
    >
      Generate Password
    </button>
  );
};

export default GenerateButton;
