import React from 'react';
import DayCell from './DayCell';
import dayjs from 'dayjs';

const CalendarGrid = ({ currentDate, events }) => {
  const startOfMonth = currentDate.startOf('month');
  const endOfMonth = currentDate.endOf('month');
  const startDay = startOfMonth.day(); // Sunday = 0
  const totalDays = endOfMonth.date();

  const today = dayjs();

  const daysArray = [];
  for (let i = 0; i < startDay; i++) {
    daysArray.push(null); // empty cells
  }

  for (let i = 1; i <= totalDays; i++) {
    const fullDate = currentDate.date(i).format('YYYY-MM-DD');
    const cellEvents = events.filter(e => e.date === fullDate);

    daysArray.push({
      date: fullDate,
      isToday: fullDate === today.format('YYYY-MM-DD'),
      events: cellEvents
    });
  }

  return (
    <div className="grid grid-cols-7 gap-2 p-4">
      {['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map((d, i) => (
        <div key={i} className="text-center font-bold">{d}</div>
      ))}
      {daysArray.map((day, index) =>
        day ? (
          <DayCell key={index} date={day.date} isToday={day.isToday} events={day.events} />
        ) : (
          <div key={index}></div>
        )
      )}
    </div>
  );
};

export default CalendarGrid;
