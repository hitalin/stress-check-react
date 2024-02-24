import React, { useEffect, useState } from 'react';

const CurrentTime: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      日時：{currentDate.getFullYear()}年{currentDate.getMonth() + 1}月{currentDate.getDate()}日 {currentDate.getHours()}:{currentDate.getMinutes() < 10 ? '0' : ''}{currentDate.getMinutes()}
    </div>
  );
};

export default CurrentTime;