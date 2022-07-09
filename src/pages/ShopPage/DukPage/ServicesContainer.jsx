import React from "react";
import styledComponents from "styled-components";
import { MarkDownWrapper } from "../../../Components/MarkDownWrapper";

const ServivceWrapper = styledComponents.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
`;

const ServivceContainer = styledComponents.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 20%;
    margin: 40px;
    padding: 50px;
    border-radius: 30px;
`;

export function ServicesContainer({ data }) {
  return (
    <div>
      <ServivceWrapper>
        <ServivceContainer>
          <div>
            <h1>Audio:</h1>
            <MarkDownWrapper markdown={data.audio} />
          </div>
        </ServivceContainer>
        <ServivceContainer>
          <div>
            <h1>Film:</h1>
            <MarkDownWrapper markdown={data.film} />
          </div>
        </ServivceContainer>
        <ServivceContainer>
          <div>
            <h1>Livestream:</h1>
            <MarkDownWrapper markdown={data.livestream} />
          </div>
        </ServivceContainer>
      </ServivceWrapper>
    </div>
  );
}
