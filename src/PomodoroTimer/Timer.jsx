import React from 'react'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './pomodoro.scss';
const red = '#f54e4e';
const green = '#4aec8c';
const Timer = () => {
  return (
    <>
    
  <CircularProgressbar value={60} text = {'60%'} className = "progressBar"/>
    </>
  )
}

export default Timer;