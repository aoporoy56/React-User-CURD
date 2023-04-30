import React, {useRef} from 'react';
import {Form, Button} from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { UseProvider } from './Context/MyProvider';

export default function Update() {
    const { API_URL } = UseProvider();
    const locationData = useLocation();
    const navigate = useNavigate();
    const{id, name, age} = (locationData.state !== null) ? locationData.state : "";
    const idRef = useRef();
    const nameRef = useRef();
    const ageRef = useRef();
    const dataUpdate = async (e) =>{
        e.preventDefault();
        await fetch(API_URL+"/user/"+idRef.current.value,
        {
            method : "PUT",
            headers : {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            },
            body : new URLSearchParams({
                name : nameRef.current.value, age : ageRef.current.value
            })
        })
        .then((res) => {
            console.log(res);
            navigate("/view")
        })
    }
  return (
    <div className='row d-flex justify-content-center'>
      <Form action=""  className='col-md-6' onSubmit={dataUpdate}>
        <h2 className='text-center heading'>Update Data Here</h2>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>ID</Form.Label>
            <Form.Control type="text" placeholder="Enter ID" defaultValue={id} ref={idRef} required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Name" defaultValue={name} ref={nameRef} required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword" >
            <Form.Label>Age</Form.Label>
            <Form.Control type="number" placeholder="Age" defaultValue={age}  ref={ageRef} required/>
        </Form.Group>
        <Button variant="primary" type="submit" >
            Update
        </Button>
        <Button variant="info" type="reset" className='ms-3'>
            Reset
        </Button>
    </Form>
    </div>
  )
}
