// increase strikes; increase balls 

import React, { useState } from 'react';
import styled from 'styled-components';

import Display from './SubComponents/Display';
import Button  from './SubComponents/Button';

const DivColumn = styled.div`
  display: flex;
  flex-direction: column;

  .buttons button {
    padding: 1rem;
    margin: 0.5rem;
  }
`;

const Dashboard = () => {
  const [ balls,   setBalls   ] = useState( 0 );
  const [ strikes, setStrikes ] = useState( 0 );

  return (
    <DivColumn className='board'>
      <Display strikes={ strikes } balls={ balls } />
      <div className='buttons'>
        <Button name='Foul'
          balls   = { balls   } setBalls   = { setBalls   }
          strikes = { strikes } setStrikes = { setStrikes }
        />
        <Button name='Ball'
          balls   = { balls   } setBalls   = { setBalls   }
          strikes = { strikes } setStrikes = { setStrikes }
        />
        <Button name='Strike'
          balls   = { balls   } setBalls   = { setBalls   }
          strikes = { strikes } setStrikes = { setStrikes }
        />
        <Button name='Hit'
          balls   = { balls   } setBalls   = { setBalls   }
          strikes = { strikes } setStrikes = { setStrikes }
        />
      </div>
    </DivColumn>
  );
};

export default Dashboard;
