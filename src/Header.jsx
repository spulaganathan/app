import React from 'react';

const Header = ({ month, year, onPrev, onNext, onToday }) => {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-100 shadow rounded">
      <div className="flex gap-2">
        <button onClick={onPrev} className="px-4 py-2 bg-blue-500 text-white rounded">Previous</button>
        <button onClick={onToday} className="px-4 py-2 bg-yellow-500 text-white rounded">Today</button>
        <button onClick={onNext} className="px-4 py-2 bg-blue-500 text-white rounded">Next</button>
      </div>
      <h1 className="text-xl font-bold">{month} {year}</h1>
    </div>
  );
};

export default Header;