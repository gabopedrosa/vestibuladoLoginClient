import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FiMenu, FiHome, FiCalendar, FiSettings, FiLogOut, FiTool } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import * as RiIcons from 'react-icons/ri';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as HiIcons from 'react-icons/hi';
import * as BsIcons from 'react-icons/bs';
import './Simulados.css'

function handleLogout() {
  sessionStorage.removeItem('token')
  navigate('/')
}
const Simulados = ({ token }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div>

      <div className="dashboard">
        <aside className={`sidebar ${isSidebarOpen ? 'sidebar-open' : ''}`}>
          <div className={`logo ${isSidebarOpen ? 'logo-open' : 'logo-closed'}`}>

          </div>
          <nav>

            <ul className="sidebar-menu">
              <li>
                <Link to="/simulados" className="sidebar-link">
                  <IoIcons.IoIosPaper className="sidebar-icon" />
                  <span>Simulados</span>
                </Link>
              </li>

              <li>
                <Link to="/dashboard" className="sidebar-link">
                <HiIcons.HiOutlineDocumentSearch className="sidebar-icon" />
                  <span>Provas</span>
                </Link>
              </li>

              <li>
                <Link to="/dashboard" className="sidebar-link">
                <HiIcons.HiOutlineInformationCircle className="sidebar-icon" />
                  <span>Sobre</span>
                </Link>
              </li>

              <li>
                <Link to="/" className="sidebar-link" onClick={handleLogout}>
                  <FiLogOut className="sidebar-icon" />
                  <span onClick={handleLogout}>Sair</span>
                </Link>
              </li>

            </ul>
          </nav>
        </aside>





        <main className= 'content'>
          <h1 className="dashboard-title">
            Seja bem vindo, {token.user.user_metadata.username} !
            <br/>
            Começe a praticar:
          </h1>

          <div className='block'>
            <section className='card'>
              <div className='icon-card'>
                <RiIcons.RiCalendarCheckFill className='tema' />
              </div>
              <h3>Enem 2020</h3>
              <span>Simulado contendo todas as provas do Enem 2021.</span>
              <Link to='/simulados-tipos'><button>Praticar</button></Link>
            </section>

            <section className='card'>
              <div className='icon-card'>
                <RiIcons.RiCalendarCheckFill className='tema' />
              </div>
              <h3>Enem 2021</h3>
              <span>Simulado contendo todas as provas do Enem 2021.</span>
              <Link to='/simulados-tipos'><button>Praticar</button></Link>
            </section>

            <section className='card'>
              <div className='icon-card'>
                <RiIcons.RiCalendarCheckFill className='tema' />
              </div>
              <h3>Enem 2022</h3>
              <span>Simulado contendo todas as provas do Enem 2022.</span>
              <Link to='/simulados-tipos'><button>Praticar</button></Link>
            </section>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Simulados