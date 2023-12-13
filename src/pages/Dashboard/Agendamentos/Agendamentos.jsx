import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import Carregando from './Carregando';
import './Agendamentos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../../assets/logo.svg'
import arrow from '../../../assets/arrowleft.svg'
import { BiHome } from 'react-icons/bi';

function Agendamentos() {
  var [id, setId] = useState('');
  const [data, setData] = useState([{}]);
  var [date, setDate] = useState('');
  const [loading, setLoading] = useState(false);

  function settarData(event) {
    setDate(event.target.value);
  }

  function settarID(event) {
    setId(event.target.value);
  }

  function limpar() {
    setId('');
    setDate('');
    setData([]);
  }

  async function pesquisar() {
    var url = 'https://us-south.functions.appdomain.cloud/api/v1/web/75a6c58b-8400-4fff-aac1-11d1bc743b16/default/crud_prjbarber.json?';
    
    if (id !== '') {
      url += '_id=' + id;
    } else if (date !== '') {
      url += 'user_date=' + date;
    } else if (id === '' && date === '') {
      url += 'all_docs';
    }

    setLoading(true);

    await fetch(url)
      .then((res) => res.json())
      .then((dadosApi) => {
        if (dadosApi.filtro_data) {
          setData(Object.values(dadosApi.filtro_data));
        } else if (dadosApi.all_docs) {
          setData(Object.values(dadosApi.all_docs));
        } else {
          setData(Object.values(dadosApi));
        }
      })
      .catch((erro) => console.log(erro));

    console.log('Pesquisa realizada com sucesso ' + date);
    console.log('esse é o usado na tabela' + Object.values(data));

    setLoading(false);
  }

  return (
    <>
      <div className="navbar fixed-top">
        <div className="logo2">
        <Link to="/dashboard" className="logo2">
          <img src={logo} alt="Logo" />
          <img src={arrow} alt="Logo" />
          </Link>
        </div>
        
      </div>
      <div className="content" style={{ marginTop: '10px' }}></div>
      <div className="container mt-4">
        <Form className="filtroAg">
          <Row>
            <Col>
              <Form.Label>CÓDIGO DO AGENDAMENTO</Form.Label>
              <Form.Control placeholder="Código do agendamento" value={id} onChange={settarID} />
            </Col>
            <Col>
              <Form.Label>DATA DE AGENDAMENTO</Form.Label>
              <Form.Control value={date} type="date" onChange={settarData} />
            </Col>
            <Col>
              <Button className="btnAg" variant="primary" onClick={pesquisar}>
                Pesquisar
              </Button>
              {loading && <Carregando />}
              <Button className="btnAg" variant="secondary" onClick={limpar}>
                Limpar
              </Button>
            </Col>
          </Row>
        </Form>
        <Table striped bordered hover className="mt-4">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Data do agendamento</th>
              <th>Hora</th>
              <th>Serviço</th>
              <th>Agendado via</th>
              <th>Confirmado</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item?._id}</td>
                <td>{item?.user_name}</td>
                <td>{item?.user_date}</td>
                <td>{item?.user_time}</td>
                <td>{item?.user_selecao_servico2}</td>
                <td>{item?.channel}</td>
                <td>{item?.user_confirma_agendamento}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default Agendamentos;
