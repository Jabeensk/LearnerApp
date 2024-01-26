import React from 'react';

function Score({score}) {
    return (
        <li>{`${score.date}:${score.score}`}</li>
    );
}

export default Score;