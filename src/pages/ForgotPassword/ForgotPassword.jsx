import React, { useState } from 'react'
import './ForgotPassword.css'
import '../../App.css'
import { Link, useNavigate } from 'react-router-dom'
import video from '../../assets/video.mp4'
import logo from '../../assets/logo.png'
import { supabase } from '../../supabaseClient'
import Swal from 'sweetalert2'

// Icons
import {MdEmail, MdMarkEmailRead} from 'react-icons/md'
import {BsFillShieldLockFill} from 'react-icons/bs'
import {BiCheck} from 'react-icons/bi'
function ForgotPassword() {
    
  return (
    <div className='loginPage flex'>
    <div className='container flex'> 

      <div className="videoDiv">
        <video src={video} autoPlay muted loop></video>
        
        <div className="textDiv">
          <h2 className='title'>Faça parte do nosso time</h2>
          <p>Estamos te esperando!</p>
        </div>

        <div className="footerDiv flex">
          <span className='text'>Não criou sua conta ainda?</span>
          <Link to={'/'}>
          <button className='btn'>Voltar pra tela inicial</button>
          </Link>
      </div>
      </div>

      <div className="formDiv flex">
        <div className="headerDiv">
          <img src={logo} alt="Logo IMG" />
          <h3>Recuperação de senha</h3>
        </div>

        <form onSubmit='' className='form grid'>
          <span></span> 
          <div className="inputDiv">
            <label htmlFor='email'>Email</label>
            <div className="input flex">
              <MdEmail className="icon" />
              <input 
                type='text' 
                id='email' 
                placeholder='Seu Email'
                onChange=''
              />
            </div> 
          </div>

          <button type='submit' className='btn flex'>
            <span>Enviar </span>
            <BiCheck className="icon" />
          </button>

          <span className='forgotPassword'>
            Você receberá um e-mail para recuperar sua senha.
          </span>
          

        </form>
      </div>


    </div>
    </div>
  )
}

export default ForgotPassword