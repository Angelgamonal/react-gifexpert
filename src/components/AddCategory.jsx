import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  //funcion que edita el texto
  const onInputChange = ({ target }) => {
    setInputValue(target.value);
    // console.log(target.value);
  };

  //funcion que envia el formulario
  const onSubmit = (event) => {
    event.preventDefault();
    // console.log(inputValue);

    // inputValue.trim().length >= 2 ?  setCategories((categories) => [inputValue, ...categories]) : return;
    if (inputValue.trim().length <= 1) return;
    // setCategories((categories) => [inputValue, ...categories]);

    onNewCategory(inputValue.trim());
    setInputValue("");

    // setCategory(...[inputValue]);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
