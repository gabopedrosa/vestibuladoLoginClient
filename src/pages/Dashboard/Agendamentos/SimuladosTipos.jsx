import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SimuladosTipos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../../assets/logo.svg'
import arrow from '../../../assets/arrowleft.svg'
import * as FaIcons from 'react-icons/gi'
import * as TbIcons from 'react-icons/tb'
import * as GiIcons from 'react-icons/gi';

function SimuladosTipos() {

  return (
    <>
    <div className='containerCards'>
      <div className="navbar fixed-top">
        <div className="logo2">
        <Link to="/simulados" className="logo2">
          {/* <img src={logo} alt="Logo" /> */}
          <img src={arrow} alt="Logo" />
          </Link>
        </div>
        <h1>Tipos de Prova</h1>
      </div>

      <div className='block1'>
        <section className='card'>
          <div className='icon'>
            <TbIcons.TbHexagonNumber1 className='tema' />
          </div>
          <h3>1° Dia do ENEM</h3>
          <span>Essa prova contém 90 questões de Liguagens e Códigos e Ciências Humanas.</span>
          <Link to='/simulados/testes/quiz'><button>Começar</button></Link>
        </section>

        <section className='card'>
          <div className='icon'>
            <TbIcons.TbHexagonNumber2 className='tema' />
          </div>
          <h3>2° Dia do ENEM</h3>
          <span>Essa prova contém 90 questões de Matemática e Ciências da Natureza.</span>
          <Link to='/simulados/testes/quiz'><button>Começar</button></Link>
        </section>

        <section className='card'>
          <div className='icon'>
            <TbIcons.TbNumbers className='tema' />
          </div>
          <h3>Matemática</h3>
          <span>Essa prova contém 45 questões de Matemática e suas Tecnologias.</span>
          <Link to='/simulados/enem2020/quizMat'><button>Começar</button></Link>
        </section>
        </div>


        <div className='block2'>
        <section className='card'>
          <div className='icon'>
            <FaIcons.GiMaterialsScience className='tema' />
          </div>
          <h3>Ciências da Natureza</h3>
          <span>Essa prova contém 45 questões variadas entre Física, Química e Biologia.</span>
          <Link to='/simulados/enem2020/quizCN'><button>Começar</button></Link>
        </section>

        <section className='card'>
          <div className='icon'>
            <GiIcons.GiHumanPyramid className='tema' />
          </div>
          <h3>Ciências Humanas</h3>
          <span>Essa prova contém 45 questões de História, Geografia, Filosofia, Sociologia.</span>
          <Link to='/simulados/enem2020/quizCH'><button>Começar</button></Link>
        </section>

        <section className='card'>
          <div className='icon'>
            <GiIcons.GiWhiteBook className='tema' />
          </div>
          <h3>Linguagens e Códigos</h3>
          <span>Essa prova contém 45 questões variadas entre Língua Portuguesa, Literatura, Inglês ou Espanhol.</span>
          <Link to='/simulados/enem2020/quizPort'><button>Começar</button></Link>
        </section>
        </div>
        </div>


    </>
  );
}

export default SimuladosTipos;
