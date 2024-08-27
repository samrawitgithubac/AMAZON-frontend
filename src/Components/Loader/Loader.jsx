import React from 'react'
import {FadeLoader} from 'react-spinners'

const Loader = () => {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height:'50vh',
    }}>
      <FadeLoader color='#36d7d7' />
    </div>
  );
}

export default Loader