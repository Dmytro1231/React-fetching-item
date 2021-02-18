import React, {useState} from 'react';
import PropTypes from "prop-types";

import './StylesPeople.css'

function People({ name, birth_year }) {
    const [comment, setComment] = useState(false);
    const [data, setData] = useState(null);

    function getData(val) {
        setData(val.target.value)
        setComment(false)
    }



    return (
        <div className="people">
            <img src="./LukeSkywalker.jpg" alt={name}/>
            <div className="people__column">
                <h2>Name: {name}</h2>
                <h5>Birth year: {birth_year}</h5>
                { comment ? <p>{data}</p> : null}
                <button className="btn" type="button" onClick={() => setComment(true)}>Comment</button>
                <input 
                    type="text" 
                    className="input" 
                    placeholder="Введите комментарий"
                    onChange={getData}
                  />
            </div>
        </div>
    )
}



People.propTypes = {
    name: PropTypes.string.isRequired,
    birth_year: PropTypes.string.isRequired
}

export default People;