import React from "react";
import styledComponents from "styled-components";
import { MarkDownWrapper } from "../../../Components/MarkDownWrapper";

const ServivceWrapper = styledComponents.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;

    @media screen and (max-width: 900px) {
      flex-direction: column;
      align-items: center;
      padding: 20px;
    }
`;

const ServivceContainer = styledComponents.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 20%;
    margin: 40px;
    padding: 50px;
    border-radius: 30px;

    @media screen and (max-width: 900px) {
      width: 90%;
      margin: 0;
      padding: 20px;
      line-height: 20px;

      h1 {
        margin-bottom: 10px;
      }
    }
`;

export function ServicesContainer({ data }) {
  return (
    <>
      <ServivceWrapper>
        <ServivceContainer>
          <h1>Audio:</h1>
          <MarkDownWrapper markdown={data.audio} />
        </ServivceContainer>
        <ServivceContainer>
          <h1>Film:</h1>
          <MarkDownWrapper markdown={data.film} />
        </ServivceContainer>
        <ServivceContainer>
          <h1>Livestream:</h1>
          <MarkDownWrapper markdown={data.livestream} />
        </ServivceContainer>
      </ServivceWrapper>
    </>
  );
}
