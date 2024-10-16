import { useState, useEffect } from "react";

export default function Home() {
    const targetDate = new Date("2024-11-11T23:59:59");
    const [timeRemaining, setTimeRemaining] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const timeDiff = targetDate - now; 

            if (timeDiff <= 0) {
                clearInterval(interval);
                setTimeRemaining("Goal Achieved!"); 
            } else {
                const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
                const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

                setTimeRemaining({ days, hours, minutes, seconds });
            }
        }, 1000);

        return () => clearInterval(interval); 
    }, [targetDate]);

    return (
        <div className="h-screen w-full flex items-center justify-center bg-[#faedcd]">
            {timeRemaining.days !== undefined ? (
                <div className="flex gap-4 bg-[#d4a373] p-8 rounded-lg shadow-lg text-white">
                    <div className="text-center">
                        <div className="text-6xl font-bold">{timeRemaining.days}</div>
                        <div className="text-sm">Days</div>
                    </div>
                    <div className="text-center">
                        <div className="text-6xl font-bold">{timeRemaining.hours}</div>
                        <div className="text-sm">Hours</div>
                    </div>
                    <div className="text-center">
                        <div className="text-6xl font-bold">{timeRemaining.minutes}</div>
                        <div className="text-sm">Minutes</div>
                    </div>
                    <div className="text-center">
                        <div className="text-6xl font-bold">{timeRemaining.seconds}</div>
                        <div className="text-sm">Seconds</div>
                    </div>
                </div>
            ) : (
                <h1 className="text-4xl text-[#c09163]">{timeRemaining}</h1>
            )}
        </div>
    );
}
