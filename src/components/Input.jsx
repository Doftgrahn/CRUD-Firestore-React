import React from 'react';

import '../styles/rangeInput.scss';

const Input = ({cafeInput,cityInput,ratingInput,cafeValue, cityValue,ratingValue}) => {

return(<div className="input_wrapper">
<div>
<label htmlFor="cafe">Cafe</label>
<input type="text"
id="cafe"
value={cafeValue}
onChange={(event) =>cafeInput(event.target.value)}
placeholder="e.g My Café..."
  />
  </div>
  <div>
  <label htmlFor="city">City</label>
<input type="text"
id="city"
value={cityValue}
onChange={(event) => cityInput(event.target.value)}
placeholder="e.g Stockholm..."
 />
 </div>

 <div>
 <label id="ranking" htmlFor="ranking">Ranking</label>
 <input type="range"
 max="10"
 min="0"
 value={ratingValue}
 onChange={(event) => ratingInput(event.target.value)}
 placeholder="Rating"
  /> <h3 className="rating">You're rating is: {ratingValue}</h3>
  </div>

    </div>)
}



export default Input;
