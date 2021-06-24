import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'
const RatingStars = ({ id, db, user, myRating }) => {
    const [hover, setHover] = useState(null)

    const handleRating = (ratingValue, id) => {
        return function() {
            console.log('rating: ' + ratingValue + ', id: ' + id)
            db.collection('users').doc(user.uid).collection('animes').doc(id.toString()).update({
                myRating: ratingValue,
           })
        }
    }

    return (
        <div className='card__rating'>
            <div>
                {[...Array(10)].map((star, i) => {
                    const ratingValue = i+1
                    return <label>
                        <input type='radio' name='rating' value={ratingValue}
                        onClick={handleRating(ratingValue, id)}/>

                            <FaStar size={25} color={ratingValue <= (hover || myRating) && 'gold'}
                                onMouseEnter={() => setHover(ratingValue)} 
                                onMouseLeave={() => setHover(null)} />
                    </label>
                }
                )}
            </div>

            {myRating && <span>You rate it as: {myRating}/10</span>}
            
        </div>
    )
}

export default RatingStars
