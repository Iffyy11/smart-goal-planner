Here’s a **short and clean README.md** for your Smart Goal Planner project:

---

## ✅ **README.md**

````markdown
# Smart Goal Planner

A simple React-based financial goal management app that allows users to create, edit, delete, and track savings goals. It uses `json-server` for a mock backend and supports deposits with real-time progress tracking.

---

## 🚀 Features
- Add, edit, and delete goals
- Deposit money toward any goal
- Progress bars with percentage indicators
- Overview of total goals, savings, and completed goals

---

## 🛠 Tech Stack
- React (Frontend)
- JSON Server (Mock API)

---

## ▶️ Installation & Setup

1. **Clone the repo**
```bash
git clone https://github.com/Iffyy11/smart-goal-planner.git
cd smart-goal-planner
````

2. **Install dependencies**

```bash
npm install
```

3. **Start the mock API**

```bash
npx json-server --watch db.json --port 5000
```

4. **Start the React app**

```bash
npm start
```

---

## 📌 API Endpoint

`http://localhost:5000/goals`

---

## ✅ Example Goal Object

```json
{
  "id": 1,
  "name": "Travel Fund",
  "targetAmount": 5000,
  "savedAmount": 2000,
  "category": "Travel",
  "deadline": "2025-12-31",
  "createdAt": "2024-01-15"
}
```

---

### 💡 Future Enhancements

* Deadline warnings for overdue goals
* Responsive design
* Authentication & user accounts

MIT License

Copyright (c) 2025 [Iffrah]
