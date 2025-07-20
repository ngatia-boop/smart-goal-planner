# Smart Goal Planner

A React-based personal finance app that allows users to manage and track multiple savings goals with full CRUD functionality. Built using Vite, React, and JSON Server.

## Features

- Create, Read, Update, and Delete (CRUD) financial goals
- Track savings progress toward each goal with visual progress bars
- Make deposits to individual goals
- Get an overview of:
  - Total goals
  - Total money saved
  - Completed goals
  - Time left per goal
  - Overdue and near-deadline warnings

## Built With

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [JSON Server](https://github.com/typicode/json-server)
- [Axios](https://axios-http.com/)
- [date-fns](https://date-fns.org/) – for date calculations

##  Folder Structure

src/
├── components/
│ ├── GoalForm.jsx
│ ├── GoalList.jsx
│ ├── GoalCard.jsx
│ ├── DepositForm.jsx
│ └── Overview.jsx
├── App.jsx
└── api.js


## Getting Started

Follow these steps to run the project locally:

### 1. Clone the Repository

```bash
git clone https://github.com/ngatia-boop/smart-goal-planner.git
cd smart-goal-planner
```

### 2. Install Dependencies

npm install

### 3. Start JSON Server
This will run the backend at http://localhost:3000

npm run server

### 4. Start the React App
Runs on http://localhost:5173

npm run dev

## Sample db.json

{
  "goals": [
    {
      "id": "1",
      "name": "Travel Fund - Japan",
      "targetAmount": 5000,
      "savedAmount": 3200,
      "category": "Travel",
      "deadline": "2025-12-31",
      "createdAt": "2024-01-15"
    }
  ]
}

## link to repo
 Repository: github.com/ngatia-boop/smart-goal-planner

## Author 
Student @ Moringa School 
GitHub: ngatia-boop
