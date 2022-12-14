import { createContext, useState } from "react";
import { v4 as uuidv4} from "uuid"

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState([
        {
            id:1,
            text: 'item from context',
            rating: 10,
        },
        {
            id:2,
            text: 'item from context',
            rating: 8,
        },
        {
            id:3,
            text: 'item from context',
            rating: 5,
        },
    ])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item:{},
        edit: false,
    })

    const deleteFeedback = (id) => {
		if (window.confirm('Are you sure you want to delete?')) {
			setFeedback(feedback.filter((item) => item.id !== id ))
		}
	}
    // Add feedback
    const addFeedback = (newFeedback) => {
		newFeedback.id = uuidv4
		setFeedback([newFeedback, ...feedback])}

    const editFeedback = (item) =>{
        setFeedbackEdit({
            item, 
            edit: true
        })
    }

    return <FeedbackContext.Provider
    value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback
    }}
    >
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext