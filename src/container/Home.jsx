import React from 'react';
import {Link} from 'react-router-dom';
import './../assets/css/Home.css';
import Navbar from './../components/Navbar';
import ImgStatic from './../assets/image/img33.gif';
import ImgCard from './../assets/image/card1.jpg';
import ImgCardDos from './../assets/image/card2.jpg';
import ImgCardTres from './../assets/image/card3.jpg';
import Search from './../components/Search';
import { connect } from 'react-redux';


const Home = (props) =>{

    return(  
 <>  
    <Navbar/>     
    <section className="header-home">
        <div className="uk-child-width-expand@s" uk-grid="true">   
            <div className="uk-margin-xlarge-top  uk-container"><br/>
                <h3 className="uk-text-bolder">La forma mas facil de realizar<br/> 
                            Tus proyectos de construcción
                </h3>
                <div className="uk-margin uk-container">
                    <Search key="search"/>
                    <nav className="uk-navbar-container uk-navbar-transparent uk-margin-xlarge-top uk-margin-left" uk-navbar="true">
                        <div className="uk-navbar-bottom">

                            <ul className="uk-navbar-nav">
                                <li className="uk-active">
                                    <div className="uk-navbar-item">
                                        <Link className="uk-link-reset" to="/">Contacto</Link>
                                    </div>
                                </li>   
                                
                                <li className="uk-active">
                                    <div className="uk-navbar-item">
                                        <Link className="uk-link-reset" to="/">Precios</Link>
                                    </div>
                                </li>
                                <li className="uk-active">
                                    <div className="uk-navbar-item">
                                        <Link className="uk-link-reset" to="/">Sobre Nosotros</Link>
                                    </div>
                                </li>
                            </ul>

                        </div>
                    </nav>
                </div>
                
            </div>

            <div className="uk-align-center uk-grid-item-match">
                <div className="uk-card uk-card-body uk-width-xlarge">
                    <img 
                    src={ImgStatic}
                    sizes="(min-width: 650px) 650px"
                
                    alt="" 
                    uk-img="true"/>               
                    
                </div>
            </div>
        </div> 
    </section>
    <section className="uk-container">

    <div className="uk-card uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid="true">
        <div className="uk-card-media-left uk-cover-container">
            <img src={ImgCard} alt="" uk-cover="true" uk-img="true"/>
            <canvas width="500" height="300"></canvas>
        </div>
        <div>
            <div className="uk-card-body uk-position-large">
                <h1 className="uk-card-title">
                    <strong>Más de 60 servicios <br/>en el área de construcción</strong>
                </h1>
                <p>Desde nuestra plataforma podras encontrar los servicios 
                que necesitas para presupuestar, contratar y supervisar tus proyectos
                desde la comodidad de tu hogar </p>
            </div>
        </div>
    </div>

    <div className="uk-card uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid="true">
        <div className="uk-card-media-left uk-cover-container">
            <img src={ImgCardDos} alt="" uk-cover="true" uk-img="true"/>
            <canvas width="500" height="300"></canvas>
        </div>
        <div>
            <div className="uk-card-body uk-position-large">
                <h3 className="uk-card-title">Calidad garantizada</h3>
                <p>Todos nuestros servicios tienen garantia, tenemos el personal
                    mas calificado para hacer realidad tus proyectos</p>
            </div>
        </div>
    </div>

    <div className="uk-card uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid="true">
        <div className="uk-card-media-left uk-cover-container">
            <img src={ImgCardTres} alt="" uk-cover="true" uk-img="true"/>
            <canvas width="500" height="300"></canvas>
        </div>
        <div>
            <div className="uk-card-body uk-position-large">
                <h3 className="uk-card-title">Fácil y seguro</h3>
                <p>Contamos con una plataforma fácil de usar que te 
                    guiara en tu proceso de orden con toda la seguridd y resguardo
                    de tus datos personales
                </p>
            </div>
        </div>
    </div>

    </section>
    <section>
        <div className="uk-height-large uk-background-cover uk-overflow-hidden uk-dark uk-flex uk-flex-top uk-background-muted">
            <div className="uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical">
                <h1 uk-parallax="opacity: 0,1; y: -100,0; scale: 2,1; viewport: 0.5;" 
                className="uk-text-secondary">Tienes dudas sobre tus ordenes o cómo comprar ?</h1>
                <p uk-parallax="opacity: 0,1; y: 100,0; scale: 0.5,1; viewport: 0.5;" 
                className="uk-text-secondary uk-text-bold">Llama a la línea Clic2Work para clientes : 
                <span className="uk-text-warning">301 - 543 7232</span></p>
            </div>
        </div>
    </section>
</>
    )
}


export default connect(null,null)(Home);