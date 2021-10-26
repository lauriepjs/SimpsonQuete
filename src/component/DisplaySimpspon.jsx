import React from 'react';

function DisplaySimpson({ quote }) {
  return (
    quote && (
      <div className='DisplaySimpson'>
        <img src={quote.image} alt={quote.character} />
        <ul>
          <li>{quote.quote}
          <li>
            {quote.character} 
          </li>
          </li>
        </ul>
      </div>
    )
  );
}

export default DisplaySimpson;