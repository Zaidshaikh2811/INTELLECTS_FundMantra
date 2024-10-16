import React from 'react';

const GridWithHeadings = (data) => {
  return (
    <div className="grid-container">
      <div className="grid-heading">
        <div></div>
        <div>Name</div>
        <div>1Y</div>
        <div>3Y</div>
        <div>5Y</div>
      </div>
      {data.map(item => (
        <div className="grid-row" key={item.id}>
          <div><img src={item.image} alt={item.name} /></div>
          <div>{item.name}</div>
          <div>{item.equity1Y}</div>
          <div>{item.equity3Y}</div>
          <div>{item.equity5Y}</div>
        </div>
      ))}
    </div>
  );
};

export default GridWithHeadings;
