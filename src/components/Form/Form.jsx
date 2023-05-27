import React, {useEffect, useState} from 'react';
import {Container, InputGroup} from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css'
import {useForm} from "react-hook-form";

import "./Form.css"

const CustomForm = () => {

        const {
         register, formState: {errors, isValid}, handleSubmit,
         watch,
     } = useForm({
         mode: 'onBlur'
    });

    const onSubmit = (data) => {
        console.log(data);
    };

     useEffect( () => {
        watch();
    }, []);

    return (
        <Container className="p-xl-4 py-4 container__form ">
        <Form onSubmit={handleSubmit(onSubmit)}>

            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter name"
                    {...register('name', {
                        required: 'Name is required',
                        pattern: {
                            value: /^[a-zA-Z'][a-zA-Z-' ]+[a-zA-Z']?$/,
                            message: 'Name should contain only letters'
                        }
                    })}
                />
                <Form.Text className="text-danger">
                    {errors?.name?.message}
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email"
                              {...register('email', {
                                  required: 'Email is required',
                                  pattern: {
                                      value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                                      message: 'Invalid email'
                                  }
                              })}
                />
                <Form.Text className="text-danger">
                    {errors?.email?.message}
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPhone">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                    type="number"
                    placeholder="Enter phone"
                    {...register('phone', {
                        required: 'Phone is required',
                        pattern: {
                            value: /^((\+)?(3)?(8)?[\- ]?)?(\(?\d{3}\)?[\- ]?)?\d{3}[\- ]?\d{2}[\- ]?\d{2}$/,
                            message: 'Required format: +380 (XX) XXX-XX-XX'
                        }
                    })}
                />
                <Form.Text className="text-danger">
                    {errors?.phone?.message}
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Address</Form.Label>
                <Form.Control type="address" placeholder="Enter address"

                />
                <Form.Text className="text-danger">
                    {errors?.address?.message}
                </Form.Text>
            </Form.Group>

             <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out"
                            {...register( 'check', {
                                required: 'Check is required'
                            } )}
                />
            </Form.Group>

            <Button variant="primary" type="submit"
                    disabled={!isValid}>
                Submit
            </Button>
        </Form>
        </Container>
    );
}

export default CustomForm;