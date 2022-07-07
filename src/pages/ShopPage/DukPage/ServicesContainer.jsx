import React from "react";
import styledComponents from "styled-components";

const ServivceWrapper = styledComponents.div`
    display: flex;
    justify-content: center;
`;

const ServivceContainer = styledComponents.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 20%;
    margin: 40px;
    padding: 50px;
    border-radius: 30px;
    box-shadow: 4px 8px 36px -13px rgba(0,0,0,0.75);
`;

export function ServicesContainer({ data }) {
  return (
    <div>
      <ServivceWrapper>
        <ServivceContainer>
          <div>
            <h1>Audio:</h1>
            {data.audio}
          </div>
        </ServivceContainer>
        <ServivceContainer>
          <div>
            <h1>Film:</h1>
            {data.film}
          </div>
        </ServivceContainer>
        <ServivceContainer>
          <div>
            <h1>Livestream:</h1>
            {data.livestream}
          </div>
        </ServivceContainer>
      </ServivceWrapper>
    </div>
  );
}
