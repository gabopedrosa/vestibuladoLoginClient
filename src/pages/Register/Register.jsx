import React, { useState } from 'react'
import './Register.css'
import '../../App.css'
import { Link, useNavigate } from 'react-router-dom'
import { supabase } from '../../supabaseClient'

// Assets
import video from '../../assets/video.mp4'
import logo from '../../assets/logo.png'

// Icons
import {FaUserShield} from 'react-icons/fa'
import {BsFillShieldLockFill} from 'react-icons/bs'
import {AiOutlineArrowRight} from 'react-icons/ai'
import {MdEmail, MdMarkEmailRead} from 'react-icons/md'
import Swal from 'sweetalert2'

const Register = () => {

  let navigate = useNavigate(); 
  
  // Back-End cadastro Usuário
    const [formData, setFormData] = useState({
    email:'',
    password:''
  })
  
  function handleChange(event){
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.id]: event.target.value
      }
    })
  }
  console.log(formData)

  async function handleSubmit(e){
    e.preventDefault()

    try {
      const { data, error } = await supabase.auth.signUp(
        {
        email: formData.email,
        password: formData.password,
          options: {
            data: {
              username: formData.username,
              }
          }
        } 
      )
      if (error) throw error
      Swal.fire(
        'Cadastro realizado',
        'Confirme o seu cadastro pelo e-mail',
        'success'
      )
      navigate('/')

    } catch (error) {
      Swal.fire(
        'Ops!',
        `${error}`,
        'error'
      )
    }
  }

  // Front-End
  return (
    <div className='registerPage flex'>
    <div className='container flex'> 


      <div className="videoDiv">
        <video src={video} autoPlay muted loop></video>
        
        <div className="textDivRegister">
          <h2 className='title'>Aqui o Quiz é seguro</h2>
          <p>Cadastre-se já</p>
        </div>

        <div className="footerDiv flex">
          <span className='text'>Já possui cadastro?</span>
          <Link to={'/'}>
          <button className='btn'>Tela Inicial</button>
          </Link>
      </div>
      </div>

      <div className="formDiv flex">
        <div className="headerDiv">
          {/* <img src={logo} alt="Logo IMG" /> */}
          <h3>Cadastre-se agora</h3>
        </div>


        <form onSubmit={handleSubmit} className='form grid'>
        <div className="inputDiv">
            <label htmlFor='email'>Email</label>
            <div className="input flex">
              <MdMarkEmailRead className="icon" />
              <input 
                type='email' 
                id='email' 
                placeholder='Seu Email'
                onChange={handleChange} 
              />
            </div> 
          </div>


          <div className="inputDiv">
            <label htmlFor='username'>Usuário</label>
            <div className="input flex">
              <FaUserShield className="icon" />
              <input 
                type='text' 
                id='username' 
                placeholder='Seu Username'
                onChange={handleChange} 
              />
            </div> 
          </div>


          <div className="inputDiv">
            <label htmlFor='password'>Senha</label>
            <div className="input flex">
              <BsFillShieldLockFill className="icon" />
              <input 
                type='password' 
                id='password' 
                placeholder='Sua senha'
                onChange={handleChange}
              />
            </div> 
          </div>


          <button type='submit' className='btn flex'>
            <span>Concluir Registro</span>
            <AiOutlineArrowRight className="icon" />
          </button>

        </form>
      </div>


    </div>
    </div>
  )
}

export default Register