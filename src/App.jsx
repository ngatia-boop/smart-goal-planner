import { useEffect, useState } from "react";
import { fetchGoals, addGoal, updateGoal, deleteGoal } from "./api";
import GoalList from './components/GoalList';
import GoalForm from './components/GoalForm';
import DepositForm from './components/DepositForm';
import Overview from './components/Overview';

function App() {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    fetchGoals().then(res => setGoals(res.data));
  }, []);

  const handleAddGoal = (newGoal) => {
    addGoal(newGoal).then(res => setGoals([...goals, res.data]));
  };

  const handleUpdateGoal = (id, updates) => {
      updateGoal(id, updates).then(res => {
        setGoals(goals.map(goal => goal.id === id ? res.data : goal));
      });
    };

  const handleDeleteGoal = (id) => {
        deleteGoal(id).then(() => {
          setGoals(goals.filter(goal => goal.id !== id));
        });
      };

      return (
        <div className="App">
          <h1>Smart Goal Planner</h1>
          <Overview goals={goals}/> 
          <GoalForm onAddGoal={handleAddGoal}/>
          <DepositForm goals={goals} onUpdateGoal={handleUpdateGoal} />
          <GoalList
             goals={goals}
             onUpdateGoal={handleUpdateGoal}
             onDeleteGoal={handleDeleteGoal}
             />
        </div>
      );
}

export default App;
