import React from 'react';
import { Link } from 'react-router-dom';

const Candy = () => {
  return (
    <div>
      <h2>Candy</h2>
      <p>Candy is a sweet treat made from sugar or chocolate. There are countless varieties of candies, from gummies to chocolates.</p>
      <Link to="/">Back to Vending Machine</Link>
    </div>
  );
}

export default Candy;