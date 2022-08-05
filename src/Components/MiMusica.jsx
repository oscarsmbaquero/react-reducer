import React, { useEffect, useReducer } from 'react';
import musicaReducer from '../reducers/musicaReducer';

const init = () =>{

    return JSON.parse(localStorage.getItem("musica")) || [];
}


const MiMusica = () => {

   

    const[musica, dispatch] = useReducer(musicaReducer, [], init);
    

    useEffect(() => {
     localStorage.setItem("musica", JSON.stringify(musica));
    }, [musica])
    


    const DatosForm = (e) => {
    e.preventDefault();
    console.log('Entro');
    console.log(e.target.title.value);
    let tema = {
        id: new Date().getTime(),
        title: e.target.title.value,
        disc: e.target.disc.value
    }
    const action = {
        type:"crear",
        payload:tema
    };

    dispatch(action);
    console.log(musica);

    }
    const borrar = (id) => {
       
        const action = {
            type:"borrar",
            payload: id
        }
        dispatch(action);
        console.log(musica);
    }

    const editar = (e, id) => {

        let tema = {
            id,
            title: e.target.value,
            disc: e.target.value
        }
        const action = {
            type:"editar",
            payload:tema
        }
        dispatch(action);
        
    }
    


  return (
    <div>
        <h1>Mi Musica</h1>
        <p> NUmero de Canciones: {musica.length} </p>

        <ul>
           {
            musica.map(tema =>(
             <li key={tema.id}>
             {tema.title}
             <button onClick={e => borrar(tema.id)}>X</button>
             <input type="text" onBlur={e => editar(e,tema.id)}
                                onKeyPress={e => {
                                    if(e.key ==='Enter'){
                                        editar(e,tema.id)
                                    }
                                        
                                    }} 

                                />
             </li>
           ))
           }
            
        </ul>

        <h3>Agregar Canciones</h3>

        <form onSubmit={DatosForm}>
            <input type="text" name="title" placeholder='titulo'/>
            <input type="disco" name="disc" placeholder='disco'/>
            <input type= "submit" value="Guardar"/>
            
        </form>
    </div>
  )
}

export default MiMusica