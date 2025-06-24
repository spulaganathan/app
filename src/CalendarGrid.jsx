import React from 'react';
import DayCell from './DayCell';
import dayjs from 'dayjs';

const CalendarGrid = ({ currentDate, events, timeBlocks }) => {
  const startOfMonth = currentDate.startOf('month');
  const endOfMonth = currentDate.endOf('month');
  const startDay = startOfMonth.day();
  const totalDays = endOfMonth.date();
  const today = dayjs();

  const daysArray = [];
  for (let i = 0; i < startDay; i++) {
    daysArray.push(null);
  }

  for (let i = 1; i <= totalDays; i++) {
    const fullDate = currentDate.date(i).format('YYYY-MM-DD');
    const annualEvents = events.filter(e => e.repeatAnnually && `${currentDate.year()}-${String(e.month).padStart(2, '0')}-${String(e.day).padStart(2, '0')}` === fullDate);
    const datedEvents = events.filter(e => e.date === fullDate);
    const cellEvents = [...annualEvents, ...datedEvents];
    const blocks = timeBlocks.filter(b => b.date === fullDate);

    const hasConflict = cellEvents.some((e1, i) => {
      return cellEvents.some((e2, j) => i !== j && e1.time === e2.time);
    });

    daysArray.push({
      date: fullDate,
      isToday: fullDate === today.format('YYYY-MM-DD'),
      events: cellEvents,
      timeBlocks: blocks,
      hasConflict
    });
  }

  return (
    <div className="grid grid-cols-7 gap-2 p-4">
      {["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map((d, i) => (
        <div key={i} className="text-center font-bold">{d}</div>
      ))}
      {daysArray.map((day, index) =>
        day ? (
          <DayCell key={index} {...day} />
        ) : (
          <div key={index}></div>
        )
      )}
    </div>
  );
};

export default CalendarGrid;