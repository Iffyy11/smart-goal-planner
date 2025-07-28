import React, { useEffect, useState } from "react";
import "./styles.css";
import GoalList from "./Components/GoalList";
import GoalForm from "./Components/GoalForm";
import Overview from "./Components/Overview";
import DepositForm from "./Components/DepositForm";

function App() {
  const [goals, setGoals] = useState([]);

  // Fetch all goals
  useEffect(() => {
    fetch("http://localhost:5000/goals")
      .then(response => response.json())
      .then(data => setGoals(data))
      .catch(error => console.error("Error fetching goals:", error));
  }, []);

  // Add new goal
  const addGoal = (newGoal) => {
    fetch("http://localhost:5000/goals", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newGoal)
    })
      .then(response => response.json())
      .then(data => setGoals([...goals, data]))
      .catch(error => console.error("Error adding goal:", error));
  };

  // Update existing goal (for editing feature later)
  const updateGoal = (id, updatedGoal) => {
    fetch(`http://localhost:5000/goals/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedGoal)
    })
      .then(response => response.json())
      .then(data => {
        setGoals(goals.map(goal => (goal.id === id ? data : goal)));
      })
      .catch(error => console.error("Error updating goal:", error));
  };

  // Delete goal
  const deleteGoal = (id) => {
    fetch(`http://localhost:5000/goals/${id}`, {
      method: "DELETE"
    })
      .then(() => {
        setGoals(goals.filter(goal => goal.id !== id));
      })
      .catch(error => console.error("Error deleting goal:", error));
  };

  // Deposit money to a goal (PATCH)
  const depositToGoal = (id, amount) => {
    const goal = goals.find(g => g.id === id);
    if (!goal) return;

    const newSavedAmount = goal.savedAmount + amount;

    fetch(`http://localhost:5000/goals/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ savedAmount: newSavedAmount })
    })
      .then(response => response.json())
      .then(data => {
        setGoals(goals.map(g => (g.id === id ? data : g)));
      })
      .catch(error => console.error("Error depositing to goal:", error));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Smart Goal Planner</h1>
      <Overview goals={goals} />
      <GoalForm onAddGoal={addGoal} />
      <DepositForm goals={goals} onDeposit={depositToGoal} />
      <GoalList goals={goals} onUpdateGoal={updateGoal} onDeleteGoal={deleteGoal} />
    </div>
  );
}

export default App;
