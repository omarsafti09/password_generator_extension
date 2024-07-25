import { useState } from "react";

const Website = () => {
  const [website, setWebsite] = useState("");

  return (
    <input
      type="text"
      name="Website"
      placeholder="Website..."
      className="w-full h-8 pl-2 rounded disabled:bg-slate-500"
      value={website}
      onChange={(e) => setWebsite(e.target.value)}
    />
  );
};

export default Website;
