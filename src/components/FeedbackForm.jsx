import Card from "./shared/Card";
import { useState } from "react";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";

function FeedbackForm() {
	const [text, setText] = useState("");
	const [rating, setRating] = useState(10);
	const [btnDisabled, setBtnDisabled] = useState(true);
	const [message, setMessage] = useState("");
	const handleTextChange = (e) => {
		if (text === '') {
			setBtnDisabled(true)
			setMessage(null)
		} else if (text !== '' && text.trim().length <= 10){
			setMessage('Text must be atleast 10 characters')
			setBtnDisabled(true)
		} else if (text.trim().length >= 10) {
			setMessage(null)
			setBtnDisabled(false)
			
		}
		setText(e.target.value);
		};
	
	const handleClick = (mess) =>{
		console.log(mess)
	}

	
	return (
		<Card>
			<form action="">
				<h2>How would you rate your service</h2>
				<RatingSelect select={(rating) => setRating(rating)} />
				<div className="input-group">
					<input
						onChange={handleTextChange}
						type="text"
						placeholder="Write a review"
						value={text}
					/>
					<Button onClick={handleClick} type='submit' isDisabled={btnDisabled}>
						Send
					</Button>
				</div>

				{message && <div className="message">{message}</div>}
			</form>
		</Card>
	);
}

export default FeedbackForm;