import React from 'react';
import './Loading.css'; // Import your CSS file
// import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
// import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import ReactLoading from "https://cdn.skypack.dev/react-loading@2.0.3";

function Loading() {

 
  return (
    <div className="loading-app">
      <div className="loading-container">
        {/* <div className="spinner"> */}
        </div>
        <ReactLoading type={"bars"} color={"#FFFF00"} height={200} width={100} />

        <p style={{ color: 'black',fontSize:'25px', }}>Loading...........</p>
        <div className='loadingmessage'>
          {/* <p>oops!!{<SentimentVeryDissatisfiedIcon />}Please Wait for a Moment{<HourglassBottomIcon />}.</p> */}
        </div>
      </div>

    // </div>
  );
}


export default Loading;