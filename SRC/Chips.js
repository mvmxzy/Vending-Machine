import React from 'react';
import { Link } from 'react-router-dom';

const Chips = () => {
  return (
    <div>
      <h2>Chips</h2>
      <p>Chips are a delicious snack made from thinly sliced potatoes, fried or baked until crispy. They come in various flavors.</p>
      <Link to="/">Back to Vending Machine</Link>
    </div>
  );
}

export default Chips;