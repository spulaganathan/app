import React, { useState } from 'react';
import Header from './Header';
import CalendarGrid from './CalendarGrid';
import { events } from './events';
import { timeBlocks } from './timeBlocks';
import dayjs from 'dayjs';

function App() {
  const [date, setDate] = useState(dayjs());

  const nextMonth = () => setDate(date.add(1, 'month'));
  const prevMonth = () => setDate(date.subtract(1, 'month'));
  const goToToday = () => setDate(dayjs());

  return (
    <div className="max-w-5xl mx-auto mt-10">
      <Header
        month={date.format('MMMM')}
        year={date.format('YYYY')}
        onPrev={prevMonth}
        onNext={nextMonth}
        onToday={goToToday}
      />
      <CalendarGrid currentDate={date} events={events} timeBlocks={timeBlocks} />
    </div>
  );
}

export default App;