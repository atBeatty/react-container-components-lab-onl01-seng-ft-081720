import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

class LatestMovieReviewsContainer extends Component {
    constructor() {
        super()
        this.state = {
            reviews: []
        }
    }

    componentDidMount() {
        fetch(URL)
        .then(resp => resp.json())
        .then(response => this.setState({ reviews: response.results }))
    }
    render() {
        return(
            <div className="latest-movie-reviews">
                <h2>Movie Reviews:</h2>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}

export default LatestMovieReviewsContainer;


// import React, { Component } from 'react';
// import 'isomorphic-fetch';
// import MovieReviews from './MovieReviews'

// const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
// const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
//             + `api-key=${NYT_API_KEY}`;

// // Code LatestMovieReviewsContainer Here


// class LatestMovieReviewsContainer extends Component {

//     constructor() {
//         super()

//         this.state = {
//             reviews: []
//         }
//     }

//     componentDidMount() {
//         fetch(URL)
//         .then(resp => resp.json())
//         // .then(json => this.setState({reviews:[json.results]}))
//         // .then(json => console.log(json.results[0].byline))
//         .then(json => this.setState({reviews: json.results}))
        

//     }
   


//     render() {
//         return <div className="latest-movie-reviews">
            
//             <MovieReviews reviewProp={this.state.reviews}/>
            
//             </div>
//     }
// }


// export default LatestMovieReviewsContainer