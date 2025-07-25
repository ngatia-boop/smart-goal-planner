import axios from 'axios';

const BASE_URL = " https://smart-goal-api-1.onrender.com";

export const fetchGoals = () => axios.get(BASE_URL);
export const addGoal = (goal) => axios.post(BASE_URL, goal);
export const updateGoal = (id, updates) => axios.patch(`${BASE_URL}/${id}`, updates);
export const deleteGoal = (id) => axios.delete(`${BASE_URL}/${id}`);

