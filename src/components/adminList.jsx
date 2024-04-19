import axios from 'axios';
import { useState,useEffect } from 'react'
import { Button,Table,Card } from 'react-bootstrap';
import AddUser from './addUser.tsx';

function AdminList() {
  const baseURL = 'http://localhost:8080/gapsi';
  const [suppliers, setSuppliers] = useState([]);
  const [modal, setModal] = useState(false);
  const [page, setPage] = useState(0);


  const getSupplier = (pageNumber,pageSize) => {
    axios.get(baseURL+'/suppliers/'+pageNumber+'/'+pageSize).then((response) => {setSuppliers(response.data);});
  }

  const deleteSupplier = (id) => {
    axios.delete(baseURL+'/deleteSupplier/'+id).then(response => {
        getSupplier(0,5);
    });
  }

  const nextPage = () => {
    setPage(page+1);
  }

  const previousPage = () => {
    if(page > 0){
        setPage(page-1);
    }
  }

  const openModal = () => {
    setModal(true);
  }

  const closeModal = () => {
    setModal(false);
  }

  useEffect(() => {   
    getSupplier(page,5);
}, [page]);

  return (
    <>
            {!modal && <Button onClick={openModal}>Agregar Proveedor +</Button>}
            <Card style={{width: '100%'}}></Card>
            <Card.Title>Lista de Proveedores</Card.Title>
            <Table responsive style={{backgroundColor: '#888'}}>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Nombre</th>
                    <th>Razon Social</th>
                    <th>Direccion</th>
                    <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {suppliers.map((supplier, index) => (
                        <tr>
                        <td>{index}</td>
                        <td>{supplier.nombre}</td>
                        <td>{supplier.razonSocial}</td>
                        <td>{supplier.direccion}</td>
                        <td><Button onClick={deleteSupplier(supplier.id)} type="delete">Eliminar</Button></td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <Button onClick={previousPage} type="submit">{'<<'}</Button>
            <span>{page}</span>
            <Button onClick={nextPage} type="submit">{'>>'}</Button>
            
            {modal && <AddUser refresh={getSupplier} close={closeModal} ></AddUser>}
    </>
  )
}

export default AdminList
