import './style.css'

import 'primeicons/primeicons.css';
        

const Form = (props) => {

    
    return(
        <form className='formulario'>


            <div className='location'>
           
             <input type="text" name="city" value={props.input} onChange={props.handleChange}
            placeholder='Digite seu pais'/>
            </div>
            <button onClick={props.search}> <span style={{color: "#7e8bab",}} className="pi pi-search"></span >Buscar</button>
           
            
        </form>
    );
}

export default Form;