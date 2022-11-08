import React from "react";
import { useStorage } from "../hooks/useStorage";

const CompWithStorage = () => {
  const [nameLocalStorage, setName] = useStorage();
  console.log(nameLocalStorage);
  return (
    <div>
      <input
        type="text"
        value={nameLocalStorage}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
};

export default CompWithStorage;
