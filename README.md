#  Personal Progress Tracker

**Personal Progress Tracker** is a flexible and reusable web-based application that helps you monitor your progress on various tasks. Whether you're tracking learning goals, fitness routines, or daily habits, the tracker provides visual insights to keep you motivated.

## 📝 How it Works

1. **Track Tasks:** Mark tasks as completed for both morning and afternoon sessions.
2. **Visualize Progress:** View a summary of your performance through Pie and Bar charts.
3. **Daily Insights:** See what you've accomplished each day in the "What I Learned" section.
4. **Reusable Setup:** Easily customize the tasks by editing `utils/Task.js` to match your own goals.

---

Customize your own progress tracker and stay on top of your goals! 🎯

---

### Example of Task Configuration (`utils/Task.js`)
```javascript
const trainingPlan = [
  { day: 1, morning: 'Learn React Basics', afternoon: 'Practice Recharts' },
  { day: 2, morning: 'Understand Redux', afternoon: 'Create a Sample App' },
  { day: 3, morning: 'Explore Tailwind CSS', afternoon: 'Integrate it with React' },
  // Add more tasks or replace existing ones to fit your needs
];

export default trainingPlan;
