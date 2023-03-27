import React from "react";
import "./style.css";

const InputField: React.FC<{
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  onAdd: (e: React.FormEvent) => void;
}> = ({ todo, setTodo, onAdd }) => {
  return (
    <form className="input" onSubmit={onAdd}>
      <input
        type="input"
        placeholder="Enter a task"
        className="input__box"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button className="input_submit" type="submit">
        Go
      </button>
    </form>
  );
};

export default InputField;
