import React from 'react'
import '../styles/programStyle.css'
import doc from '../images/doc.PNG';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCarRear, faCheckCircle, faCoffee, faList, faListDots, faListSquares } from '@fortawesome/free-solid-svg-icons'

export const Program = () => {
  
  return (
    <div className='container'>
      <div className='left'>
        <img src={doc} alt="image" />
        <h3>Transformation Faite Maison</h3>
        <div style={{ display: 'flex', flexDirection: 'column', }}>
          bar de progresssion
          <h1 style={{fontSize:40,textAlign:'center'}}>36%</h1>
        </div>
      </div>
      <div className='content'>
        <h1>Le program 30 jours de routines</h1>
        <NavLink to='detail' className={(nav)=> nav.isActive ? 'active' :'item'}>
        <FontAwesomeIcon style={{marginLeft:10}}  icon={faCheckCircle} color='white' size="2x"/>
        <FontAwesomeIcon style={{marginLeft:10}}  icon={faListSquares} color='white' size="lg"/>
          <div className='leson'>
            <p>Jour 1 à 6</p>
            <button style={{backgroundColor:'blue',fontSize:18,color:'white'}}>Commencer</button>
          </div>
        </NavLink>
      </div>
    </div>
  )
}
