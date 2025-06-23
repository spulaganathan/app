import React from 'react';
import dayjs from 'dayjs';

const DayCell = ({ date, isToday, events }) => {
  return (
    <div className={`border p-2 h-32 relative ${isToday ? 'bg-yellow-100 border-yellow-500' : ''}`}>
      <div className="text-sm font-semibold">{dayjs(date).date()}</div>
      <div className="absolute top-6 left-1 right-1 overflow-y-auto h-20">
        {events.map((event, i) => (
          <div
            key={i}
            className="bg-blue-200 text-xs px-1 rounded mb-1 truncate"
            title={`${event.title} (${event.time})`}
          >
            {event.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DayCell;
