import React, {useState} from 'react';
import './Org.scss';
import ServicesApi from '../Component/ServicesApi';
import AboutCard from './AboutCard';
const About = () => {
  const [data, setdata] = useState(ServicesApi);
  return (
    <>
    
<AboutCard data = {data} />
    </>
  )
}

export default About