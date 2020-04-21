import React from 'react';
import {Link} from 'react-router-dom';

const Footer = () =>{
    return(
        <div className="uk-grid-collapse uk-child-width-expand@s uk-text-left" uk-grid="true">
            <div>
                <div className="uk-padding"><div className="uk-width-1-2@s uk-width-2-5@m">
                    <ul className="uk-nav uk-nav-default">
                        <li className="uk-nav-header">Menu</li>
                        <li><Link to="/">Contacto</Link></li>
                        <li><Link to="/">Precio</Link></li>
                        <li><Link to="/">Sobre nosotros</Link></li>
                    </ul>
                </div>
            </div>
            </div>
            <div>
                <div className="uk-padding">Item</div>
            </div>
            <div>
                <div className="uk-padding">Item</div>
            </div>
        </div>
    )

}

export default Footer;

