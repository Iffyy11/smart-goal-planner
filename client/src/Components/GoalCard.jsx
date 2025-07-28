import React, { useState } from "react";

function GoalCard({ goal, onUpdateGoal, onDeleteGoal }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedGoal, setEditedGoal] = useState({ ...goal });

  const progress = (goal.savedAmount / goal.targetAmount) * 100;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedGoal({ ...editedGoal, [name]: value });
  };

  const handleSave = () => {
    const updatedGoal = {
      ...editedGoal,
      targetAmount: Number(editedGoal.targetAmount),
      savedAmount: Number(editedGoal.savedAmount)
    };
    onUpdateGoal(goal.id, updatedGoal);
    setIsEditing(false);
  };

  return (
    <div className="goal-card">
      {isEditing ? (
        <>
          <input name="name" value={editedGoal.name} onChange={handleChange} />
          <input
            name="targetAmount"
            type="number"
            value={editedGoal.targetAmount}
            onChange={handleChange}
          />
          <input
            name="category"
            value={editedGoal.category}
            onChange={handleChange}
          />
          <input
            name="deadline"
            type="date"
            value={editedGoal.deadline}
            onChange={handleChange}
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </>
      ) : (
        <>
          <h3>{goal.name}</h3>
          <p>Saved: ${goal.savedAmount} / ${goal.targetAmount}</p>
          <div className="progress-container">
            <div
              className="progress-bar"
              style={{
                width: `${progress}%`,
                background: progress >= 100 ? "green" : "#4caf50"
              }}
            ></div>
            <span className="progress-text">
              {Math.min(progress, 100).toFixed(1)}%
            </span>
          </div>
          <p>Category: {goal.category}</p>
          <p>Deadline: {goal.deadline}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => onDeleteGoal(goal.id)}>Delete</button>
        </>
      )}
    </div>
  );
}

export default GoalCard;
