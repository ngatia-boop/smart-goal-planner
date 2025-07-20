import { differenceInDays, isBefore, parseISO } from 'date-fns';

function Overview({ goals }) {
  const totalGoals = goals.length;

  const totalSaved = goals.reduce((sum, goal) => sum + goal.savedAmount, 0);

  const completedGoals = goals.filter(goal => goal.savedAmount >= goal.targetAmount).length;

  const today = new Date();

  const deadlineWarnings = goals.filter(goal => {
    const deadline = parseISO(goal.deadline);
    const daysLeft = differenceInDays(deadline, today);
    return daysLeft <= 30 && daysLeft >= 0 && goal.savedAmount < goal.targetAmount;
  });

  const overdueGoals = goals.filter(goal => {
    const deadline = parseISO(goal.deadline);
    return isBefore(deadline, today) && goal.savedAmount < goal.targetAmount;
  });

  return (
    <div style={{ border: '2px solid #000', padding: '1rem', marginBottom: '2rem' }}>
      <h2>Overview</h2>
      <p>Total Goals: {totalGoals}</p>
      <p>Total Saved: ${totalSaved}</p>
      <p>Completed Goals: {completedGoals}</p>
      <p>⚠️ Goals close to deadline (≤ 30 days): {deadlineWarnings.length}</p>
      <p>❌ Overdue Goals: {overdueGoals.length}</p>
    </div>
  );
}

export default Overview;
