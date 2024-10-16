import React, { useState, useEffect } from 'react';
import trainingPlan from '../utils/Task';
import motivationalQuotes from '../utils/Quotes';

function Task() {
  const [completedTasks, setCompletedTasks] = useState(() => {
    const savedTasks = localStorage.getItem('completedTasks');
    return savedTasks ? JSON.parse(savedTasks) : {};
  });

  const [selectedDay, setSelectedDay] = useState(null);
  const [isDialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('completedTasks', JSON.stringify(completedTasks));
  }, [completedTasks]);

  const handleTaskToggle = (taskKey) => {
    setCompletedTasks((prev) => ({
      ...prev,
      [taskKey]: !prev[taskKey],
    }));
  };

  const openDialog = (day) => {
    setSelectedDay(day);
    setDialogOpen(true);
  };

  const closeDialog = () => {
    setDialogOpen(false);
    setSelectedDay(null);
  };

  const getRandomQuote = () =>
    motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];

  return (
    <div className="bg-[#faedcd] min-h-screen w-full  flex flex-col items-center justify-center p-10">

      <div className="w-full max-w-3xl text-center mb-8">
        <h1 className="text-4xl font-extrabold text-[#4b3c2a] mb-2">
          Keep Moving Forward
        </h1>
        <p className="text-lg text-[#97700e] italic">
          "{getRandomQuote()}"
        </p>
      </div>

      <div className="grid grid-cols-7 gap-2 bg-[#faedcd] p-2 rounded-lg border border-[#d4a373] shadow-sm">
        {trainingPlan.map((task) => {
          const isDayComplete =
            completedTasks[`morning-${task.day}`] &&
            completedTasks[`afternoon-${task.day}`];

          return (
            <div
              key={task.day}
              className={`hover:scale-110 text-[#664422] transition duration-200 cursor-pointer rounded-lg p-2 flex flex-col items-center justify-center
                ${isDayComplete ? 'bg-[#d4a373] text-[#fefae0]' : 'bg-[#fefae0] text-black'} 
                h-20 w-20 shadow-md hover:shadow-lg`}
              onClick={() => openDialog(task.day)}
            >
              <h3 className="text-lg font-bold">{task.day}</h3>
              <span className="text-sm">{task.date}</span>
            </div>
          );
        })}

        {isDialogOpen && selectedDay !== null && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-gradient-to-br from-[#fefae0] to-[#faedcd] rounded-lg p-6 w-80 shadow-lg transition-transform transform hover:scale-105">
              <h3 className="text-2xl font-bold mb-4 text-[#4b3c2a]">
                Day {selectedDay} Details
              </h3>

              <div className="mb-4">
                <h4 className="font-semibold text-[#4b3c2a] text-lg">Morning:</h4>
                <label
                  className={`flex items-center mb-2 cursor-pointer ${
                    completedTasks[`morning-${selectedDay}`]
                      ? 'line-through text-[#d4a373]'
                      : 'text-black'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={completedTasks[`morning-${selectedDay}`] || false}
                    onChange={() => handleTaskToggle(`morning-${selectedDay}`)}
                    className="mr-2 accent-[#3b82f6]"
                  />
                  <span className="text-base">
                    {trainingPlan[selectedDay - 1].morning}
                  </span>
                </label>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-[#4b3c2a] text-lg">Afternoon:</h4>
                <label
                  className={`flex items-center mb-2 cursor-pointer ${
                    completedTasks[`afternoon-${selectedDay}`]
                      ? 'line-through text-[#d4a373]'
                      : 'text-black'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={completedTasks[`afternoon-${selectedDay}`] || false}
                    onChange={() => handleTaskToggle(`afternoon-${selectedDay}`)}
                    className="mr-2 accent-[#3b82f6]"
                  />
                  <span className="text-base">
                    {trainingPlan[selectedDay - 1].afternoon}
                  </span>
                </label>
              </div>

              <button
                onClick={closeDialog}
                className="bg-gradient-to-r from-[#4b3c2a] to-[#97700e] text-white rounded px-4 py-2 mt-4 transition transform hover:scale-105 hover:shadow-lg"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Footer Section */}
      <footer className="w-full text-center mt-10">
        <p className="text-sm text-[#97700e]">
          Today is {new Date().toLocaleDateString()}
        </p>
      </footer>
    </div>
  );
}

export default Task;
