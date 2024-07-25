import InputEmail from "./InputEmail";
import InputPassword from "./InputPassword";
import GenerateButton from "./GenerateButton";
import SubmitButton from "./SubmitButton";
import Website from "./Website";

const FormPassword = () => {
  return (
    <form className="flex flex-col p-4 bg-yellow-400 rounded justify-center items-center w-1/2 gap-4">
      <Website />
      <InputEmail />
      <InputPassword />
      <GenerateButton />
      <SubmitButton />
    </form>
  );
};

export default FormPassword;
