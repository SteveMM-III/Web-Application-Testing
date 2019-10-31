import React from 'react';
import styled from 'styled-components';

const StyledDisplay = styled.div.attrs(props => ({
  className: 'display',
}))`
  display: flex;
  width: 100%;

  .strikes, .balls {
    display: flex;
    width: 100%;
    flex-direction: column;
  }

  h4, p {
    width: 50%;
    padding: 1rem;
    margin: 0;
    background-color: black;
    color: white;
    align-self: center;
  }

`;

const Display = (props) => {
  return (
    <StyledDisplay className='display'>
      <div className='strikes'>
        <h4>Strikes</h4>
        <p>{props.strikes}</p>
      </div>
      <div className='balls'>
        <h4>Balls</h4>
        <p>{props.balls}</p>
      </div>
    </StyledDisplay>
  );
};

export default Display;