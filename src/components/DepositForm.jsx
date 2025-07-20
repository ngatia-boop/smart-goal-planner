import { useState } from 'react';

function DepositForm({ goals, onUpdateGoal }) {
  const [selectedGoalId, setSelectedGoalId] = useState('');
  const [depositAmount, setDepositAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!selectedGoalId || depositAmount <= 0) return;

    const goalToUpdate = goals.find(goal => goal.id === selectedGoalId);
    if (!goalToUpdate) return;

    const newSavedAmount = goalToUpdate.savedAmount + Number(depositAmount);

    onUpdateGoal(selectedGoalId, { savedAmount: newSavedAmount });

    // Reset form
    setSelectedGoalId('');
    setDepositAmount('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
      <h2>Make a Deposit</h2>

      <select
        value={selectedGoalId}
        onChange={(e) => setSelectedGoalId(e.target.value)}
        required
      >
        <option value="">-- Select Goal --</option>
        {goals.map(goal => (
          <option key={goal.id} value={goal.id}>
            {goal.name}
          </option>
        ))}
      </select>

      <input
        type="number"
        placeholder="Amount to Deposit"
        value={depositAmount}
        onChange={(e) => setDepositAmount(e.target.value)}
        required
        min="1"
      />

      <button type="submit">Add Deposit</button>
    </form>
  );
}

export default DepositForm;
