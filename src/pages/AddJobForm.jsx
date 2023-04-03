import { useState } from "react";

export default function AddJobForm({ planningList, setPlanningList }) {
  const [newTodo, setNewTodo] = useState({
    id: "",
    content: "",
    step: 1,
  });

  function handleSubmit(e) {
    e.preventDefault();
    setPlanningList([...planningList, newTodo]);
    setNewTodo({
      id: "",
      content: "",
      step: 1,
    });
  }

  function handleChange(evt) {
    const addItem = {
      id: planningList?.length + 1,
      content: evt.target.value,
      step: 1,
    };
    setNewTodo(addItem);
  }

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="conent"
          value={newTodo.content}
          onChange={handleChange}
          required
          autoComplete="off"
        />
        <button type="submit"><img src="./add-new.png" alt="" /></button>
      </form>
    </div>
  );
}
