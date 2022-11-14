import React from 'react'
import Bic from '../../assets/pic.jpg'
import{Typography} from 'antd'
import {Link} from 'react-router-dom'
import './home.css' 

function Home() {
  const {Title, Text} = Typography
  return (
     
    <div id='homep'>

     <img src={Bic} alt='pics' id='cartoons'/>
     <Title level={1} id='httx'> Create, Inspire & Connect!</Title>
      <Text id='htx'>connect with people you know and around the world, we bring socialization to your door step </Text>

     <Link to ={'./signup'} id='btn'> Get Started </Link>
    
     
    </div>
  )
}

export default Home