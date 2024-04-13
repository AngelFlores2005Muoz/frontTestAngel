import axios from 'axios';
import { useState,useEffect } from 'react'
import { Card,Button } from 'react-bootstrap';
import '../styles/adminList.css';

function Login(props) {
  const baseURL = 'http://localhost:8080/gapsi';
  const [welcome, setWelcome] = useState("");
  const [version, setVersion] = useState("");


  const getWelcome = () => {
    axios.get(baseURL+'/welcome').then((response) => {setWelcome(response.data);});
  }

  const getVersion = () => {
    axios.get(baseURL+'/version').then((response) => {setVersion(response.data);});
  }


    useEffect(() => {   
        getWelcome();
        getVersion();
    }, []);

  return (
    <div>
        <Card bg={'primary'} style={{ width: '50rem' }}>
            <Card.Header style={{color:'black'}} >e-Commerce Gapsi</Card.Header>
            <Card.Img variant="top" src="../src/assets/logo.png" />
            <Card.Body>
                <Card.Title style={{color:'black'}}>{welcome}</Card.Title>
                <Button variant="primary" onClick={props.conditional}>Continuar</Button>{' '}
            </Card.Body>
            <Card.Footer style={{color:'black'}} >{version}</Card.Footer>
        </Card>
    </div>
  )
}

export default Login
