import React, {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {Table, Button} from "react-bootstrap"

export default function View() {
    const navigate = useNavigate();

    const [list, listHandle] =useState([]);
    const [loading, loadingHandle] = useState(true);
    const getAll = async () => {
        await fetch("https://powerful-puce-angler.cyclic.app/api/v1/user/",{
            method : "GET"
        })
        .then((res) => {
            loadingHandle(true);
            return res.json();
        })
        .then((data) =>{            
            loadingHandle(false);
            listHandle(data);
            console.log(data);
        })
    }
    useEffect( () =>{
        getAll();
    },[])
    const deleteData = async (id) =>{
        await fetch("https://powerful-puce-angler.cyclic.app/api/v1/user/"+id,{
            method : "Delete"
        })
        .then((res) =>{
            return res.json();
        })
        .then((data) =>{
            getAll();
            console.log(data);
        })
    }
  return (
    <div className='col-md-6' style={{margin: "0 auto"}}>
      <Table striped>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Age</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {list.info && list.info.map( (data, index) => {
           return <tr key={index}>
                    <td>{data.id}</td>
                    <td>{data.name}</td>
                    <td>{data.age}</td>
                    <td>
                        <Button onClick={ () =>{
                            navigate("/update/", {
                                state : {
                                    id : data.id,
                                    name : data.name,
                                    age : data.age
                                }
                            })
                        }}>Edit</Button>
                        <Button variant="danger" className='ms-3' onClick={() => deleteData(data.id)}>Delete</Button>
                    </td>
                </tr>
        })}
      </tbody>
    </Table>
      {loading && <h2 className='text-center mt-5'>Data Loading...</h2>}
      {list.count === 0 && <h2 className='text-center mt-5'>Empty List 😵</h2>}
    </div>
  )
}
