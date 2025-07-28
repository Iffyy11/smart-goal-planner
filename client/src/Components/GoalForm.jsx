import React, { useState } from "react";

function GoalForm({ onAddGoal }) {
  const [name, setName] = useState("");
  const [targetAmount, setTargetAmount] = useState("");
  const [category, setCategory] = useState("");
  const [deadline, setDeadline] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newGoal = {
      name,
      targetAmount: Number(targetAmount),
      savedAmount: 0,
      category,
      deadline,
      createdAt: new Date().toISOString()
    };
    onAddGoal(newGoal);
    setName("");
    setTargetAmount("");
    setCategory("");
    setDeadline("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Goal Name" required />
      <input type="number" value={targetAmount} onChange={(e) => setTargetAmount(e.target.value)} placeholder="Target Amount" required />
      <input value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Category" required />
      <input type="date" value={deadline} onChange={(e) => setDeadline(e.target.value)} required />
      <button type="submit">Add Goal</button>
    </form>
  );
}

export default GoalForm;
