import { useState, useEffect } from "react";
import { supabase } from "../utils/supabase";

function Page() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const getTodos = async () => {
      const { data: passwords } = await supabase.from("Passwords").select();

      if (passwords.length > 1) {
        setTodos(passwords);
        console.log(todos);
        console.log(passwords);
      }
    };

    getTodos();
  }, []);

  return (
    <div className="w-1/2 flex flex-col bg-slate-400 p-4 rounded">
      <div className="flex justify-around">
        <h2>Website</h2>
        <h2>Email</h2>
        <h2>Password</h2>
      </div>
      {todos.map((todo) => (
        <div className="flex justify-around">
          <h2>{todo.Website}</h2>
          <h2>{todo.Email}</h2>
          <h2>{todo.Password}</h2>
        </div>
      ))}
    </div>
  );
}
export default Page;
