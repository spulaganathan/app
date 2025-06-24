import React from 'react';
import dayjs from 'dayjs';

const DayCell = ({ date, isToday, events, hasConflict, timeBlocks }) => {
  const getColor = (type) => {
    if (type === 'holiday') return 'bg-red-200';
    if (type === 'festival') return 'bg-green-200';
    return 'bg-blue-200';
  };

  return (
    <div className={`border p-2 h-40 relative rounded transition-all duration-200 ${isToday ? 'bg-yellow-100 border-yellow-500' : 'bg-white'} ${hasConflict ? 'border-red-500' : ''}`}>
      <div className="text-sm font-semibold text-gray-700">{dayjs(date).date()}</div>

      <div className="absolute top-6 left-1 right-1 overflow-y-auto h-16 custom-scrollbar">
        {events.map((event, i) => (
          <div
            key={i}
            className={`${getColor(event.type)} text-xs px-1 py-0.5 rounded mb-1 truncate shadow`}
            title={`${event.title} (${event.time || 'All Day'}, ${event.duration || '1 day'})`}
          >
            {event.title} <span className="text-[10px] text-gray-600">({event.time || 'All Day'})</span>
          </div>
        ))}
      </div>

      <div className="absolute bottom-1 left-1 right-1">
        {timeBlocks.map((note, i) => (
          <div
            key={i}
            className="text-xs px-1 py-0.5 rounded mb-0.5 truncate"
            style={{ backgroundColor: note.color }}
            title={`${note.title} (${note.startTime} - ${note.endTime})`}
          >
            🗒 {note.title} ({note.startTime})
          </div>
        ))}
      </div>

      {hasConflict && <span className="absolute top-1 right-1 text-red-600 text-xs">⚠️</span>}
    </div>
  );
};

export default DayCell;