import React, { useState, useEffect } from 'react';
import {
  PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import trainingPlan from '../utils/Task'; 

const Dashboard = () => {
  const localStorageKey = 'completedTasks';

  const [completedTasks, setCompletedTasks] = useState(() => {
    const savedTasks = localStorage.getItem(localStorageKey);
    console.log(savedTasks);
    
    return savedTasks ? JSON.parse(savedTasks) : {};
  });




  const completedCount = Object.values(completedTasks).filter(task => task === true).length;
  const totalTasks = trainingPlan.length * 2; 
  const pendingCount = totalTasks - completedCount;

  const barChartData = trainingPlan.map((plan) => {
    const day = plan.day;
    const completedForDay = [
      completedTasks[`morning-${day}`],
      completedTasks[`afternoon-${day}`],
    ].filter(task => task === true).length;

    return {
      name: `Day ${day}`,
      completed: completedForDay,
    };
  });

  const COLORS = ['#d4a373', '#fefae0'];

  return (
    <div className="bg-[#faedcd] p-6 min-h-screen w-full">
      <h1 className="text-4xl font-bold text-[#664422] text-center mb-8">
        My Progress Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Pie Chart Section */}
        <div className="bg-[#fefae0] p-4 rounded-lg shadow">
          <h2 className="text-2xl font-semibold text-[#664422] mb-4">Task Completion Overview</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={[
                  { name: 'Completed', value: completedCount },
                  { name: 'Pending', value: pendingCount },
                ]}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {COLORS.map((color, index) => (
                  <Cell key={`cell-${index}`} fill={index === 0 ? color : '#ffcc00'} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart Section */}
        <div className="bg-[#fefae0] p-4 rounded-lg shadow">
          <h2 className="text-2xl font-semibold text-[#664422] mb-4">Daily Task Completion</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={barChartData}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="completed" fill="#d4a373" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* What I Learned Section */}
      <div className="mt-8 bg-[#fefae0] p-4 rounded-lg shadow">
        <h2 className="text-2xl font-semibold text-[#664422] mb-4">What I Learned</h2>
        <ul className="list-disc list-inside max-h-40 overflow-auto">
          {trainingPlan.map((plan) => {
            const learnedTopics = [];
            if (completedTasks[`morning-${plan.day}`] === true) {
              learnedTopics.push(plan.morning);
            }
            if (completedTasks[`afternoon-${plan.day}`] === true) {
              learnedTopics.push(plan.afternoon);
            }

            if (learnedTopics.length > 0) {
              return (
                <li key={plan.day} className="mb-2 text-[#664422]">
                  Day {plan.day}: Learned about {learnedTopics.join(' and ')}
                </li>
              );
            }
            return null;
          })}
        </ul>
        {completedCount === 0 && (
          <p className="text-[#664422] italic">No tasks completed yet. Start learning!</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
