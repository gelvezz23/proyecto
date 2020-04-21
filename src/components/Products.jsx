import React,{useState} from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import {getProduct, addCart} from './../redux/actions'
import './../assets/css/Products.css';

const Products = (props) => {
    const {id, title, precio, cover, description, onCart, mylist, cantidadonCart} = props;
    const [cantidad, setCantidad] = useState(1);
    //const [contador, setContador] = useState(1);

    const handlecount = (event) => {
        const { value } = event.target;
        setCantidad(value)
        if(value < 1){ 
            setCantidad(1)
            event.target.value = null
        }    
    } 

    const handleAddCart = () => {    
        const exists = mylist.find(item => item.id === id)
        if(exists){ 
            //setContador(parseInt(contador) + 1)
            //setCantidad(parseInt(cantidad ) + parseInt(contador))
            props.addCart({
                id, title, precio, cover, description, cantidad
            });
        }else{
            props.addCart({
                id, title, precio, cover, description, cantidad
            });
        }
    }   
    
    return(
        
    <div>
        <div className="uk-card uk-card-hover uk-card-body uk-border-rounded uk-box-shadow-small">
            {onCart ? null :
                <div className="uk-card-badge text-align-r">
                    <input className="uk-input uk-form-blank uk-form-width-small text-align-r" 
                        min="0"
                        value={cantidad}
                        type="number"
                        name="cantidad"
                        onChange={handlecount}
                    />
                </div>

            }
            
            <div className="uk-grid-small uk-flex-middle" uk-grid="true">
                <div className="uk-width-auto">
                    <img className="uk-border-circle" 
                    alt="..." 
                    width="50"
                    height="50" 
                    src={cover}/>
                </div>
                <div className="uk-width-expand">
                    <h3 className="uk-card-title">{title}</h3>
                    <p className="uk-margin-remove-top">{`Precio: ${precio}`}</p>
                    <p className="uk-margin-remove-top">
                        { onCart ? 
                            <div class="uk-button-group">
                                <button class="uk-button btn-clic2work uk-light uk-text-capitalize uk-width-auto"> - </button>
                                <input className="uk-input uk-form-blank uk-form-width-xsmall" 
                                        type="text" 
                                        value={cantidadonCart}
                                /> 
                                <button class="uk-button btn-clic2work uk-light uk-text-capitalize uk-width-auto"> + </button>
                            </div> : null
                             
                        } 
                    </p>
                </div>
            </div>
            
            { onCart ? null : <p>{description}</p> }
            <div className="uk-width-auto ">
                {onCart ? null :
                    <Link to="" className="uk-button btn-clic2work uk-light" 
                        uk-toggle={`target: #modal-group-${id}`}>
                            ver mas
                    </Link>
                } 
                {onCart ? null :
                    <button className="uk-button btn-clic2work uk-margin-left uk-light" 
                    onClick={handleAddCart}>comprar</button>
                }   
            </div>
           
        </div>


        <div id={`modal-group-${id}`} uk-modal="true">
            <div className="uk-modal-dialog">
                <button className="uk-modal-close-default" type="button" uk-close="true"></button>
                <div className="uk-modal-header">
                    <h2 className="uk-modal-title">{title}</h2>
                </div>
                <div className="uk-modal-body">
                <div className="uk-width-auto">
                    <img className="uk-border-circle" 
                    alt="..." 
                    src={cover}/>
                </div>
                    <p>{description}</p>
                </div>
                <div className="uk-modal-footer uk-text-right">
                    <button className="uk-button btn-clic2work uk-margin-left uk-light uk-modal-close" 
                    type="button">Cancel</button>
                    <button className="uk-button btn-clic2work uk-margin-left uk-light" 
                    onClick={handleAddCart}>comprar</button>
                </div>
            </div>
        </div>
    </div>     
    )

}
const mapDispatchToProps = {
    getProduct,
    addCart,
}

const mapStateToProps = state => {
    return{
        searching:state.searching,
        mylist:state.mylist,
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Products);