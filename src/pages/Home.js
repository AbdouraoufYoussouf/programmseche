import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/stylesHome.css'
import raf from '../images/raf.jpg';
import doc from '../images/doc.PNG';
import Card from '../components/Card';

export default function Home() {
    const data = [
        {}
    ]
    return (
        <div className='container'>
            <div style={{
                width: '100%', height: '400px', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around',
                backgroundImage: `url(${raf})`, backgroundSize: 'cover', backgroundPosition: 'right center', backgroundRepeat: 'no-repeat'
            }}>
                <div className='heder'>
                    <h2 style={{ fontSize: 25, textAlign: 'center' }}>Vous voulez etre beau pour l'été? si vous etes la c'est que
                        oui ,alors prepare toi et le'st go</h2>
                </div>
                <div className='heder'>
                    <h2 style={{ fontSize: 25, textAlign: 'center' }}>je sais que tu en as marre de ton biton de ventre ,c'est le moment de t'endebarasser .</h2>
                </div>
            </div>
            <div style={{display:'flex',flexWrap:'wrap',justifyContent:'center',marginTop:20 }}>
                {
                    // tutos.map((item, index) => {
                    //     return (
                            //<Link to="/some-where" state={myData}>Link Text</Link>
                            <Link className='carditem' to={'program'} /*state={{ tutos }} key={index}*/>
                                <Card titre='Seche Pour un mois'
                                    categorie='Street Workout'
                                    imag={doc} description='description' />
                            </Link >
                    //     )
                    // })
                }
                          
            </div>
        </div>
    )
}
