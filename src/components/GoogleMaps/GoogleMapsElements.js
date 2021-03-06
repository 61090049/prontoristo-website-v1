import styled from "styled-components";
import FeaturePic from "../../images/google-maps-logo.jpg";

export const FeatureContainer = styled.div`
  background: 
  linear-gradient(
      to right,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.1)
    ), url(${FeaturePic});
  height: 100vh;
  max-height: 500px;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
  padding: 0 1rem;
  margin-bottom:3rem;
`;