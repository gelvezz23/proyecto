import React,{useState} from 'react';
import NavBar from './../components/Navbar'

const Registro = () => {

const [formulario, setFormulario] = useState({
    name:"",
    username:"",
    apellido:"",
    email:"",
    password:""
});

const handleInput = (event) =>{
    setFormulario({
         ...formulario,
         [event.target.name]: event.target.value,   
    })
}

const handleSubmit = (event) => {
event.preventDefault()

const url = 'https://api-test-4y1jb8rz8.now.sh/api/user'
const data = formulario

fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers:{
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
  .catch(error => console.error('Error:', error))
  .then(response => console.log('Success:', response));
    
}
    
    return(
        <>
            <NavBar/>
            <section className="uk-container">
                <form id="formulario-registro" onSubmit={handleSubmit}>
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
                                    <input 
                                        name="name" 
                                        className="uk-input uk-form-large border-round " 
                                        type="text" 
                                        placeholder="Nombres"
                                        onChange={handleInput}
                                    />
                                </div>
                            </div>

                            <div className="uk-margin uk-width-1-1">
                                <div className="uk-inline uk-width-1-1">
                                    <span className="uk-form-icon" uk-icon="icon: user;ratio: 2;"></span>
                                    <input 
                                        name="apellido" 
                                        className="uk-input uk-form-large border-round " 
                                        type="text" 
                                        placeholder="Apellidos"
                                        onChange={handleInput}
                                    />
                                </div>
                            </div>

                            <div className="uk-margin uk-width-1-1">
                                <div className="uk-inline uk-width-1-1">
                                    <span className="uk-form-icon" uk-icon="icon: user;ratio: 2;"></span>
                                    <input 
                                        name="username" 
                                        className="uk-input uk-form-large border-round " 
                                        type="text" 
                                        placeholder="Nombre de usuario"
                                        onChange={handleInput}
                                    />
                                </div>
                            </div>

                            <div className="uk-margin uk-width-1-1">
                                <div className="uk-inline uk-width-1-1">
                                    <span className="uk-form-icon" uk-icon="icon: user;ratio: 2;"></span>
                                    <input 
                                        name="email" 
                                        className="uk-input uk-form-large border-round " 
                                        type="text" 
                                        placeholder="email"
                                        onChange={handleInput}
                                    />
                                </div>
                            </div>

                            <div className="uk-margin uk-width-1-1">
                                <div className="uk-inline uk-width-1-1">
                                    <span className="uk-form-icon" uk-icon="icon: lock;ratio: 2;"></span>
                                    <input 
                                        name="password" 
                                        className="uk-input uk-form-large border-round" 
                                        type="text" 
                                        placeholder="Contraseña"
                                        onChange={handleInput}
                                    />
                                </div>
                            </div>
                        </div>
                        
                        <div className="uk-card-footer">
                        
                            <button className="uk-button btn-clic2work-orange uk-light uk-width-1-1 uk-margin-small-bottom">
                                <span uk-icon="icon: chevron-double-right; ratio: 2" ></span> 
                                Registrate
                            </button> 
                       
                        </div>
                    </div>
                </form>
            </section>
            
        </>
    )

}

export default Registro;