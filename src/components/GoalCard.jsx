import { formatDistanceToNowStrict, isBefore, subDays, parseISO } from 'date-fns';

function GoalCard({ goal, onUpdateGoal, onDeleteGoal }) {
  const {
    id,
    name,
    targetAmount,
    savedAmount,
    category,
    deadline,
    createdAt,
  } = goal;

  const remaining = targetAmount - savedAmount;
  const progress = Math.min((savedAmount / targetAmount) * 100, 100).toFixed(0);

  const deadlineDate = parseISO(deadline);
  const daysLeft = formatDistanceToNowStrict(deadlineDate);
  const isOverdue = isBefore(deadlineDate, new Date()) && savedAmount < targetAmount;
  const isWarning = !isOverdue && isBefore(deadlineDate, subDays(new Date(), -30)) && savedAmount < targetAmount;
  const isComplete = savedAmount >= targetAmount;

  return (
    <div className="goal-card" style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem' }}>
      <h3>{name}</h3>
      <p>Category: {category}</p>
      <p>Deadline: {deadline} ({daysLeft} left)</p>
      <p>Target: ${targetAmount}</p>
      <p>Saved: ${savedAmount}</p>
      <p>Remaining: ${remaining}</p>

      <div style={{ background: '#eee', height: '20px', borderRadius: '5px', overflow: 'hidden', marginBottom: '0.5rem' }}>
        <div style={{
          width: `${progress}%`,
          background: progress >= 100 ? 'green' : 'orange',
          height: '100%',
        }} />
      </div>
      <p>{progress}% complete</p>

      {isComplete && <p style={{ color: 'green' }}>✅ Goal Completed</p>}
      {isWarning && <p style={{ color: 'orange' }}>⚠️ Less than 30 days left!</p>}
      {isOverdue && <p style={{ color: 'red' }}>❌ Overdue!</p>}

      <button onClick={() => onDeleteGoal(id)} style={{ marginTop: '0.5rem' }}>Delete</button>
    </div>
  );
}

export default GoalCard;
