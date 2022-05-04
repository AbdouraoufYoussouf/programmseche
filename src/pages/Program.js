import React from 'react'
import '../styles/programStyle.css'
import doc from '../images/doc.PNG';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCarRear, faCheckCircle, faCoffee, faList, faListDots, faListSquares } from '@fortawesome/free-solid-svg-icons'

export const Program = () => {
  const Data = [
    "Jour 1 à 5", "Jour 6 à 10", "Jour 11 à 15", "Jour 16 à 20", "Jour 121 à 25", "Jour 26 à 30",
  ]
  return (
    <div className='containerP'>
      <div className='left'>
        <img src={doc} alt="image" />
        <h3>Transformation Faite Maison</h3>
        <div style={{ display: 'flex', flexDirection: 'column', }}>
          bar de progresssion
          <h1 style={{ fontSize: 40, textAlign: 'center' }}>36%</h1>
        </div>
      </div>
      <div className='content'>
        <h1>Le program 30 jours de routines</h1>

          {
            Data.map((item, index) => {
              return (
                <NavLink to='detail' className={(nav) => nav.isActive ? 'active' : 'item'}>
                  <FontAwesomeIcon style={{ marginLeft: 10 }} icon={faCheckCircle} color='white' size="2x" />
                  <FontAwesomeIcon style={{ marginLeft: 10 }} icon={faListSquares} color='white' size="lg" />

                  <div key={index} className='leson'>
                    <p>{item}</p>
                    <button style={{ backgroundColor: '#1888ff',cursor:'pointer', fontSize: 18, color: 'white', border: 'none', padding: 5, borderRadius: 5 }}>Commencer</button>
                  </div>
                </NavLink>
              )
            })
          }
      </div>
    </div>
  )
}
