import { Button, Form } from 'react-bootstrap'
import React, {useRef, useState} from 'react'
import { UseProvider } from "./Context/MyProvider";

export default function Create() {
    const {API_URL} = UseProvider();
    const nameRef = useRef("");
    const ageRef = useRef("");
    const [massage, messageHandle] = useState("");
    const [dataAddLoading, dataAddLoadingHandle] = useState(false);
    const dataAdd = async(e) =>{
        e.preventDefault();
        await fetch(API_URL+ "/user/",{
            method : "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'

            },
            body : new URLSearchParams({
                'name' : nameRef.current.value ,'age' : ageRef.current.value
            })
        })
        .then((res) =>{
            return res.json();
        })
        .then((value) =>{
            dataAddLoadingHandle(true);
            messageHandle(value.message);
        });
        nameRef.current.value = "";
        ageRef.current.value = "";
    } 
    
  return (
    <div className='row d-flex justify-content-center'>
      <Form action=""  className='col-md-6' onSubmit={dataAdd}>
        <h2 className='text-center heading'>Add Data Here</h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Name" ref={nameRef}  required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword" >
            <Form.Label>Age</Form.Label>
            <Form.Control type="number" placeholder="Age" ref={ageRef} required/>
        </Form.Group>
        <Button variant="primary" type="submit" >
            Add
        </Button>
        <Button variant="info" type="reset" className='ms-3'>
            Reset
        </Button>
        {dataAddLoading && <h3 className='mt-3'>{massage}</h3>}
    </Form>
    </div>
  )
}
