import axios from 'axios';
import React, { Fragment, FormEventHandler,  } from 'react';
import { useState } from 'react'
import { Card,Button,Form } from 'react-bootstrap';
import '../styles/adminList.css';

function AddUser(props) {
  const baseURL = 'http://localhost:8080/gapsi';
  const [supplierSave, setSupplierSave] = useState({});

  const onFormChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setSupplierSave({ ...supplierSave, [name]: value });
  };

  const submitHandler: FormEventHandler = (event) => {
    event.preventDefault();
    event.persist();
    const supplierBody = JSON.stringify( supplierSave );
    axios.post(baseURL+'/saveSupplier',supplierBody,{headers: {'Content-Type': 'application/json'}}).then((response) => {props.close()});
    
  };

  return (
    
    <div>
        <Card bg={'primary'} style={{ width: '50%' }}>
            <Card.Body>
                <Card.Title style={{color:'black'}}>Agregar proveedor</Card.Title>
                <Form onSubmit={submitHandler}>
                    <Form.Group className="mb-3">
                        <Form.Label >Nombre</Form.Label>
                        <Form.Control name="name" onInput={onFormChange} placeholder="Nombre" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label >Razon Social</Form.Label>
                        <Form.Control name="razonSocial" onInput={onFormChange} placeholder="Razon social" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label >Direccion</Form.Label>
                        <Form.Control name="direccion" onInput={onFormChange} placeholder="Direccion" />
                    </Form.Group>
                    <Button type="submit">Agregar proveedor +</Button>
                </Form>
            </Card.Body>
        </Card>
    </div>
  )
}

export default AddUser
