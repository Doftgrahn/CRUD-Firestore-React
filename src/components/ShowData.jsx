import React, {useState} from "react";

const ShowData = ({place, deteleteData, updateList}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [cafe, setCafe] = useState(place.cafe);
    const [city, setCity] = useState(place.city);
    const [rating, setRating] = useState(place.rating);

    const save = () => {
        setIsEditing(false)
        updateList(place, {cafe: cafe, city:city, rating: rating})

    }

    if(isEditing) {
        return (<li>
            <div>
            <span>
            <input type="text"
            value={cafe}
            onChange={event => setCafe(event.target.value)}
             />
             </span>
             <span>
            <input
            type="text"
            value={city}
            onChange={event => setCity(event.target.value)}
            />
            </span>
            <span>
            <input type="range"
            max="10"
            min="0"
            value={rating}
            onChange={event => setRating(event.target.value)}
             />
             </span>
             <p>Rating:{rating}</p>
              <button className="buttonList" onClick={() => deteleteData(place, {cafe: cafe})}>delete</button>
              <button className="buttonList" onClick={save}>Save</button>
</div>
            </li>)
    }
    return (
        <li>
            <div>
                <span>{cafe}</span>
                <span>{city}</span>
                <span>{rating}</span>
                <button className="buttonList" onClick={() => deteleteData(place, {cafe: cafe})}>Delete</button>
                <button className="buttonList" onClick={() => setIsEditing(true)}>Edit</button>

            </div>
        </li>
    );
};

export default ShowData;
