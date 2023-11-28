import React from 'react';
import { Link } from 'react-router-dom';

const VendingMachine = () => {
  return (
    <div>
      <h1>Vending Machine</h1>
      <ul>
        <li><Link to="/Chips">Chips</Link></li>
        <li><Link to="/Candy">Candy</Link></li>
        <li><Link to="/Soda">Soda</Link></li>
      </ul>
    </div>
  );
}

export default VendingMachine;