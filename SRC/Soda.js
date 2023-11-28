import React from 'react';
import { Link } from 'react-router-dom';

const Soda = () => {
  return (
    <div>
      <h2>Drinks</h2>
      <p>Drinks include a wide range of beverages, such as sodas, juices, and energy drinks. They come in various flavors and sizes.</p>
      <Link to="/">Back to Vending Machine</Link>
    </div>
  );
}

export default Soda; 