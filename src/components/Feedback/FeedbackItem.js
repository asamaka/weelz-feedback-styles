import React from "react";
import { Row, Col } from "react-bootstrap";
import {
  Paper,
  SubTitle,
  Textarea,
  Title,
  Stars,
  Header
} from "./FeedbackItemStyles";
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
          <Header>
            <Title>{title}</Title>
            <SubTitle>{subtitle}</SubTitle>
          </Header>
        </Col>
        <Col>
          <Stars>
            <Rating
              onClick={(r) => setFeedback({ ...feedback, rating: r })}
              ratingValue={feedback.rating || 0}
            />
          </Stars>
        </Col>
      </Row>
      <Row>
        <Textarea
          onChange={(c) =>
            setFeedback({ ...feedback, comment: c.target.value })
          }
          defaultValue={feedback.comment}
        />
      </Row>
    </Paper>
  );
}
