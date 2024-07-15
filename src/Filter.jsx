import React from 'react';

const Filter = ({ setFilter }) => {
    return (
        <div className="filter-buttons">
            <select onChange={(e) => setFilter(e.target.value)}>
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="not completed">Not Completed</option>
            </select>
        </div>
    );
};

export default Filter;
