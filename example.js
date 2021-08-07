import React from 'react'
import FeedbackCard from './src/components/Feedback/FeedbackCard'

export default function FeedbackCardDemo() {

    const feedback = {
        driver: {
            name: "Ahmed ElSwa2",
            rating: 3,
            comment: "Ok"
        },
        car: {
            name: "Hyundai Elantra",
            rating: 3,
            comment: "Ok"
        },
        overall: {
            rating: 3,
            comment: "Ok"
        }
    }
    const setFeedback = (feedback) => console.log(feedback)

    return <FeedbackCard feedback={feedback} setFeedback={setFeedback} />
}
