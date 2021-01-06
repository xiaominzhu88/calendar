import React, {useState} from 'react';
import './App.scss';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import{EmailIcon,FacebookIcon,LinkedinIcon,TwitterIcon,WhatsappIcon} from 'react-share';
import { Button } from "reakit/Button";

function App() {
  const [date, setDate] = useState(new Date());
  const [visible, setVisible] = useState(false)
  const selectDate = e => {
    setDate(e)
  }
  const shareUrl = 'https://www.linkedin.com/in/xiaominzhu/';

  const share = () => setVisible(!visible)

  return (
    <div className="App">
      <div className='main'>
          <Calendar role="alertdialog" showWeekNumbers= {true} value={date} onChange={selectDate}  />
          <div className='content'>
            <p>Current Date is <b>{moment(new Date()).format('Do MMMM YYYY')}</b></p>
            <p>Selected Date is <b>{moment(date).format('Do MMMM YYYY')}</b></p>
            <Button onClick={share} className='buttonStyle'>Share Me</Button>
          </div>
      </div>
  
      { visible && <div className='buttons'>
        <EmailShareButton className='btn'>
          <EmailIcon size={38} round={true} />
        </EmailShareButton>
        <FacebookShareButton className='btn' url={shareUrl} quote={"World is yours to explore"} >
          <FacebookIcon size={38} round={true}/>
        </FacebookShareButton>
        <LinkedinShareButton className='btn' url={shareUrl}>
          <LinkedinIcon size={38} round={true}/>
        </LinkedinShareButton>
        <TwitterShareButton className='btn' url={shareUrl}>
          <TwitterIcon size={38} round={true}/>
        </TwitterShareButton>
        <WhatsappShareButton className='btn' url={shareUrl}>
          <WhatsappIcon size={38} round={true}/>
        </WhatsappShareButton>
      </div> }
    </div>
  );
}
     

export default App;
