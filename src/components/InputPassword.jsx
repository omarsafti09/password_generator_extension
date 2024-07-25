const InputPassword = () => {
  return (
    <input
      type="text"
      name="Password"
      placeholder="Password..."
      className="w-full h-8 pl-2 rounded disabled:bg-slate-500"
      id="password"
      disabled
    />
  );
};

export default InputPassword;
