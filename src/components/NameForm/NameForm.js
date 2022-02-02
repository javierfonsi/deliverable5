import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './nameForm.css'
//import imgfondo from './Pokemon.jpg'

const NameForm = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [name, setName] = useState("")

    const submit = (e) =>{
        e.preventDefault() 
        dispatch({type: "SET_NAME", payload:name })
        navigate("/pokedex")
    }

  return(
    <section className='container-login'>
    <h1 className='title'>POKEDEX</h1>
    <div className='img-left'>
        <img src="https://get.wallhere.com/photo/illustration-cartoon-Pok-mon-Pikachu-Pokemon-First-Generation-Toy-Charizard-Red-character-Blastoise-187493.jpg" alt='' />
    </div>
    <div className='form'>
        <img src="https://t2.uc.ltmcdn.com/images/7/0/9/img_43907_ins_3746270_600.jpg" alt="" />
        <form onSubmit={submit}> 
            <label>                                
                <input 
                    type="text"
                    placeholder= 'Type your name. Enter'
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </label>
            <button className='btn-send'></button>
        </form>
    </div>
  </section>

  )};

export default NameForm;
