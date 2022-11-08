import { useState } from "react";

export const useStorage = () => {
  const [name, setName] = useState("");

  localStorage.setItem("name", name);

  const nameLocalStorage = localStorage.getItem('name')
  console.log(nameLocalStorage);
  

  return [nameLocalStorage, setName];
};
