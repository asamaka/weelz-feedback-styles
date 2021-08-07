import { Container } from "react-bootstrap";
import styled from "styled-components";

export const Paper = styled(Container)`
  background-color: #ffffff;
  width: 90%;
  margin: 30px auto;
`;
export const Header = styled.div`
  /* display:inline-block; */
  /* background-color:#00f; */
  float: left;
  margin-bottom: 20px;
`;
export const Title = styled.h3`
  font-family: "Montserrat";
  margin: 0;
`;

export const SubTitle = styled.h5`
  font-family: "Montserrat";
  font-size: 15px;
  color: #ccc;
  margin: 0;
`;

export const Stars = styled.div`
  float: right;
`;

export const Textarea = styled.textarea`
  height: 200px;
  width: 100%;
`;
