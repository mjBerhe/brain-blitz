"use client";

import { useTimer } from "react-timer-hook";

export const Timer: React.FC<{
  expiryTimestamp: Date;
  handleExpire: () => void;
}> = ({ expiryTimestamp, handleExpire }) => {
  const {
    totalSeconds,
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp,
    onExpire: () => handleExpire(),
    autoStart: true,
  });

  // console.log(isRunning);

  return (
    <div className="flex">
      <span className="text-5xl">{totalSeconds}</span>
    </div>
  );
};
