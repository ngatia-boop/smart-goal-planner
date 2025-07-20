import GoalCard from './GoalCard';

function GoalList({ goals, onUpdateGoal, onDeleteGoal }) {
  return (
    <div>
      <h2>All Goals</h2>
      {goals.length === 0 ? (
        <p>No goals yet. Add your first one above!</p>
      ) : (
        goals.map(goal => (
          <GoalCard
            key={goal.id}
            goal={goal}
            onUpdateGoal={onUpdateGoal}
            onDeleteGoal={onDeleteGoal}
          />
        ))
      )}
    </div>
  );
}

export default GoalList;
