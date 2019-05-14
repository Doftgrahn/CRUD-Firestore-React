import React from 'react';


const Input = ({cafeInput,cityInput,ratingInput,cafeValue, cityValue,ratingValue}) => {
return(<div className="input_wrapper">
<input type="text"
value={cafeValue}
onChange={(event) =>cafeInput(event.target.value)}
placeholder="Cafe"
  />
<input type="text"
value={cityValue}
onChange={(event) => cityInput(event.target.value)}
placeholder="City"
 />
 <input type="range"
 max="10"
 min="0"
 value={ratingValue}
 onChange={(event) => ratingInput(event.target.value)}
 placeholder="Rating"
  /> <p className="rating">You're rating is: {ratingValue}</p>
    </div>)
}



export default Input;
