import React from 'react';

const Header = ({ month, year, onPrev, onNext }) => {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-100 shadow">
      <button onClick={onPrev} className="px-4 py-2 bg-blue-500 text-white rounded">Previous</button>
      <h1 className="text-xl font-bold">{month} {year}</h1>
      <button onClick={onNext} className="px-4 py-2 bg-blue-500 text-white rounded">Next</button>
    </div>
  );
};

export default Header;
