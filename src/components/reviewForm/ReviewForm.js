import React, {useState} from 'react';

export default function Post(){
    const[review, setReview] = useState("best meal!")
    const [submittedReview, setSubmittedReview] = useState([]);

    function handleReview(event){
          setReview(event.target.value)
    }

    function handleSubmit(event){
         event.preventDefault()
         const ReviewData = { review: review };
         const postArray = [...submittedReview, ReviewData];
         setSubmittedReview(postArray);
         setReview("");

    }

    const listOfSubmissions = submittedReview.map((data, index) => {
        return (
          <div key={index}>
            {data.review}
          </div>
        );
      });

    return(
        <div>
            <center>
            <h3>Write your review here</h3>
        <form onSubmit={handleSubmit}>
        <input type="text"   onChange={handleReview} placeholder="burgers"/>
        <button type="submit">Post</button>
      </form>
      <h3>Food review</h3>
      <ul>
      <li>
      {listOfSubmissions}
      </li>
      </ul>
            </center>
        </div>
    )
}