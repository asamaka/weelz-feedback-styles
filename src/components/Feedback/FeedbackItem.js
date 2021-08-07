import React from "react";
import { Row, Col } from "react-bootstrap";
import { Paper, Title } from "./FeedbackItemStyles";
import { Rating } from "react-simple-star-rating";

/**
 * Props:
 *  - title: the header of the feedback item
 *  - subtitle: optional description
 *  - feedback: the initial values for the feedback
 *  - setFeedback: a callback to update the feedback values
 */

export default function FeedbackItem({
  title,
  subtitle,
  feedback,
  setFeedback
}) {
  return (
    <Paper>
      <Row>
        <Col>
          <Title>{title}</Title>
          <p>{subtitle}</p>
        </Col>
        <Col>
          <Rating
            onClick={(r) => setFeedback({ ...feedback, rating: r })}
            ratingValue={feedback.rating || 0}
          />
        </Col>
      </Row>
      <Row>
        <textarea
          onChange={(c) =>
            setFeedback({ ...feedback, comment: c.target.value })
          }
          defaultValue={feedback.comment}
        />
      </Row>
    </Paper>
  );
}
