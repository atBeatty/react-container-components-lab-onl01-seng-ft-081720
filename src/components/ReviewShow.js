
import React from 'react'

const ReviewShow = (props) => {

    
    return <div className="review">
        <h2>{props.title}</h2>
        <h4>Director: {props.byline}</h4>
        <p>{props.shortSummary}</p>
    </div>
}

export default ReviewShow