import React from 'react'
import '../styles/detailStyle.css'
import { NavLink, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faCarRear, faCheckCircle, faListDots, faListSquares } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux';


export const Details = () => {
  const Seche = useSelector((state) => state.secheState)
  const Data = Seche.seche

  const { idP, idItem } = useParams()
  //console.log(idP)
  ///////////// fonction qui va afficher les sous titres dans le side left /////
  const prSemaine = Data.find(d => d.id === parseInt(idP))
  const semaine = prSemaine.semaine
  const detailData = semaine.find(s => s.id == idItem)
  //const soutitre = detailData.soustitres;
  //console.log('soutitre', soutitre)

  return (
    <div className='containerD'>
      <div className='left' >
        <h1 style={{ fontSize: 30, textAlign: 'center', backgroundColor: 'blueviolet', width: '100%', borderRadius: 15, marginTop: 5 }}>36% Completé</h1>
        <div style={{ display: 'flex', flexDirection: 'column', }}>
          {
            semaine.map((item, index) => {
              return (
                <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 10 }}>
                  <NavLink style={{ width: 290 }} key={item.id} to={'/program/' + idP + '/detail/' + item.id} className={(nav) => nav.isActive ? 'active' : 'item'}>
                    <FontAwesomeIcon style={{ marginLeft: 10 }} icon={faCheckCircle} color='white' size="2x" />
                    <FontAwesomeIcon style={{ marginLeft: 10 }} icon={faListSquares} color='white' size="lg" />
                    <div key={index} className='leson'>
                      <p>{item.titre}</p>
                    </div>
                  </NavLink>

                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    {
                      item.soustitres.map((item, index) => {
                        return (
                          <div key={index} style={{ marginLeft: 10, marginBottom: 7 }}>
                            <FontAwesomeIcon icon={faCalendar} color='white' size="x" />
                            <a style={{ fontSize: 16, textDecoration: 'none', color: 'white', marginLeft: 5 }} href={'#' + item.id}>{item.nom}</a>
                          </div>
                        )
                      })
                    }


                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className='content'>
        <h1>{detailData.titre}</h1>
        {detailData.intro}
        <img style={{ width: 400, height: 'auto', borderRadius: 15, alignSelf: 'center' }} src={detailData.photo} />
        {
          detailData.soustitres.map((item, index) => {
            return (
              <div id={item.id} key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'self-start', width: '100%' }}>
                <h2><input style={{ backgroundColor: 'red', width: 18, height: 18 }} type="checkbox" /> {item.nom} </h2>
                <p> Durée total aproximative : <code style={{ fontSize: 18 }}>{item.dure}</code></p>
                <p style={{ fontSize: 18, margin: 0 }}>{item.desc} </p>
                <h2>Routine à suivre:</h2>
                {
                  item.routines.map((item, index) => {
                    return (
                      <div key={index}>
                        <h3 style={{ textAlign: 'left', margin: 5 }}>{item.titre} </h3>
                        <iframe width="560" height="315" 
                          src={item.url}
                          title="YouTube video player"
                          allow="accelerometer; autoplay; clipboard-write;  encrypted-media; gyroscope; picture-in-picture"
                        >
                        </iframe>
                      </div>
                    )
                  })
                }
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
