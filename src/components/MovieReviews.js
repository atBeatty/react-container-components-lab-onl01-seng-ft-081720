

import React, { Component } from 'react';

const MovieReview = ({headline, byline, link, summary_short}) => {
    return ( 
        <div key={headline} className="review">
            <h3> <a href={link.url}>{headline}</a> </h3>
            <h4> { byline } </h4>
            <h5> { summary_short }</h5>
        </div>
    )
}

const MovieReviews = ({reviews}) => { 
        return (
            <div className="review-list">
                {reviews.map(MovieReview)}
            </div>
        );
    }

MovieReviews.defaultProps = {
    reviews: []
}
export default MovieReviews;






// // Code MovieReviews Here
// // import { render } from 'enzyme'
// import ReviewShow from './ReviewShow'
// import React, {Component} from 'react'

// const MovieReviews = ({reviewProp}) => {

//     // console.log(typeof props.reviewProp[0], props.reviewProp.keys)
//     // const reviewList = props.reviewProp

//         console.log(reviewProp, "REVIEWPROP")
//     return <div className="review-list">
//     {reviewProp.map(review => <ReviewShow title={review.display_title} byline={review.byline} shortSummary={review.summary_short}/>)}
//     </div>
    
// }

// export default MovieReviews
//     return (
//         <div>
//             {props.reviewProp.map(review => <ReviewShow movie={review}/>)}
//         </div>
//     )
//     return props.reviewProp.map((review) => {
//         console.log(typeof props.reviewProp)
//         return <div><h1>hellooooo</h1><ReviewShow title={review[0]}/></div>

//     })
//     let createReviewCards = (props) => {
//         debugger
//         return <div>HI HI</div>
//     }

//     console.log(props, createReviewCards())
//     // let createReviewJSX = () => {

//     //     // Q: WHY DOES THE LENGTH HAVE TO BE CHECKED? LIFECYCLE COMPONENT ISSUE.
//     //     if (typeof props.reviewProp[0] !== 'undefined') {
//     //         return props.reviewProp[0].map(review => (

//     //                     <section className="review">
//     //                         <h3>{review.display_title}</h3>
//     //                         <h6>{review.byline}</h6>
                            
//     //                         </section>

//     //                 )
//     //             )
//     //     }
//     // }
       

// // debugger
//     return (
//         <ReviewShow title={props.reviewProp}/>
//         )
//     // return <div className="review-list">{props.renderTheList()}</div>
        
    