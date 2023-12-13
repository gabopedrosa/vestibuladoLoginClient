// Assets
import React, { useState } from 'react'
import './Login.css'
import '../../App.css'
import { Link, useNavigate } from 'react-router-dom'
import video from '../../assets/video.mp4'
import logo from '../../assets/logo.svg'
import { supabase } from '../../supabaseClient'
import Swal from 'sweetalert2'

// Icons
import {MdEmail, MdMarkEmailRead} from 'react-icons/md'
import {BsFillShieldLockFill} from 'react-icons/bs'
import {BiArrowToRight} from 'react-icons/bi'




const Login = ({setToken}) => {

  let navigate = useNavigate(); 

  // Back-End Login Usuário
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
      const { data, error } = await supabase.auth.signInWithPassword(
        {
        email: formData.email,
        password: formData.password,
        })

      if (error) throw error
      
      console.log(data)
      let timerInterval
      Swal.fire({
        title: 'Estamos verificando seus dados!',
        html: 'Seu acesso será liberado em <b></b> millisegundos.',
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading()
          const b = Swal.getHtmlContainer().querySelector('b')
          timerInterval = setInterval(() => {
            b.textContent = Swal.getTimerLeft()
          }, 100)
        },
        willClose: () => {
          clearInterval(timerInterval)
        }
      }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log('I was closed by the timer')
        }
      })
      setToken(data)
      navigate('/simulados')
      

    } catch (error) {
      Swal.fire(
        'Você errou seus dados',
        'Verifique seu e-mail e senha e tente novamente.',
        'error'
      )      
    }
  }



  // Front-End
  return (
    <div className='loginPage flex'>
    <div className='container flex'> 

      <div className="videoDiv">
        <video src={video} autoPlay muted loop></video>
        
        <div className="textDiv">
          <h2 className='title'>Vestibulado</h2>
          <p>Estamos te esperando!</p>
        </div>

        <div className="footerDiv flex">
          <span className='text'>Não tem uma conta?</span>
          <Link to={'/register'}>
          <button className='btn'>Criar Conta</button>
          </Link>
      </div>
      </div>

      <div className="formDiv flex">
        <div className="headerDiv">
          {/* <!---- <img src={logo} alt="Logo IMG" /> ----> */}
          <h3>Bem vindo de volta!</h3>
        </div>

        <form onSubmit={handleSubmit} className='form grid'>
          <span></span> 
          <div className="inputDiv">
            <label htmlFor='email'>Email</label>
            <div className="input flex">
              <MdEmail className="icon" />
              <input 
                type='text' 
                id='email' 
                placeholder='Seu Email'
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
            <span>Login </span>
            <BiArrowToRight className="icon" />
          </button>

          <span className='forgotPassword'>
            Esqueceu sua senha? <Link to={'/forgotPassword'}><a>Clique aqui</a></Link>
          </span>
          

        </form>
      </div>


    </div>
    </div>
  )
}


export default Login