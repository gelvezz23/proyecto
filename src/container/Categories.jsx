import React,{useEffect} from 'react';
import Navbar from './../components/Navbar';
import { connect } from 'react-redux'
import { getOnlyProduct} from './../redux/actions';
import Products from './../components/Products';
import Search from './../components/Search'

const Categories =(props) => {
    
    const {searching, products} = props;
        useEffect(() =>{ 
            const { id } = props.match.params;
            if(id){
                getOnlyProduct(id);
            }else{
                return "No hay productos"
            }
        }) 


    return (
    <>
        
        <Navbar isBlack={true}/>

        <div className="item-responsibe">
            <Search/> 
        </div>

        <div className="uk-container uk-align-center">
            <section className="uk-child-width-1-3@m uk-grid-small uk-grid-match" uk-grid="true">
                
                {searching.length === 0 &&
                    <h3>No hay productos.</h3>
                }
                {searching.length > 0 &&
                    searching.map((item) =>{
                        return(
                            <Products 
                                key={item.id}
                                id={item.id} 
                                title={item.title}
                                precio={item.precio}
                                cantidad={item.cantidad}
                                cover={item.cover}
                                description={item.description}
                            />
                        )
                    })
                }

                {products.length > 0 &&
                    products.map((item) =>{
                        return(
                            <Products 
                                key={item.id}
                                id={item.id} 
                                title={item.title}
                                precio={item.precio}
                                cantidad={item.cantidad}
                                cover={item.cover}
                                description={item.description}
                            />
                        )
                    })
                    
                }
            </section>
      </div>
    </>  
    )

} 

const mapDispatchToProps = {
        getOnlyProduct,   
}

const mapStateToProps = state => {
    return{
        searching:state.searching,
        products:state.products,        
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Categories);