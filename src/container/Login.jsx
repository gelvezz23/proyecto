import React from 'react'
import NavBar from './../components/Navbar'
import {Link} from 'react-router-dom'
import './../assets/css/Login.css'
const Login = () =>{
    return(
        <>
            <NavBar/>
            <section className="uk-container ">
                <div className="uk-card uk-width-1-2@m uk-border-rounded uk-align-center">
                    <div className="uk-card-header">
                        <div className="uk-grid-small uk-flex-middle" uk-grid="true">
                            <div className="uk-width-expand">
                                <h2 className="">Bienvenido a clic2work</h2>
                            </div>
                        </div>
                    </div>
                    <div className="uk-card-body">
                        <div className="uk-margin uk-width-1-1">
                            <div className="uk-inline uk-width-1-1">
                                <span className="uk-form-icon" uk-icon="icon: user;ratio: 2;"></span>
                                <input className="uk-input uk-form-large border-round " type="text" placeholder="Nombre de usuario"/>
                            </div>
                        </div>

                        <div className="uk-margin uk-width-1-1">
                            <div className="uk-inline uk-width-1-1">
                                <span className="uk-form-icon" uk-icon="icon: lock;ratio: 2;"></span>
                                <input className="uk-input uk-form-large border-round" type="text" placeholder="Contraseña"/>
                            </div>
                        </div>
                    </div>
                    
                    <div className="uk-card-footer">
                    
                        <Link to="#" className="uk-button btn-clic2work-orange uk-light uk-width-1-1 uk-margin-small-bottom">
                            <span uk-icon="icon: chevron-double-right; ratio: 2" ></span> 
                            Iniciar sesion con nosotros
                        </Link> 
                        
                        <Link to="#" className="uk-button btn-clic2work-blue uk-light uk-width-1-1 uk-margin-small-bottom">
                            <span uk-icon="icon: facebook; ratio: 2" ></span> 
                            Iniciar sesion con facebook
                        </Link>

                        <Link to="#" className="uk-button btn-clic2work-red uk-light uk-width-1-1 uk-margin-small-bottom">
                            <span uk-icon="icon: google; ratio: 2" ></span> 
                            Iniciar sesion con Google
                        </Link>

                        
                    </div>
                </div>
            </section>
            
        </>
    );

}

export default Login;