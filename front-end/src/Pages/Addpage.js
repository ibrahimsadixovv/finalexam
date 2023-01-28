import React from 'react';
 import { Formik, Field, Form } from 'formik';
 import * as Yup from 'yup';
import Navbar from '../Components/Navbar';
import './addpage.scss';
import axios from 'axios';
import Footer from '../Components/Footer';
import {Helmet} from "react-helmet";
 

function Addpage() {
  return (
    <div>
         <Helmet>
        <title>Add Page</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
<Navbar/>
<div className='form'>
<Formik
       initialValues={{ img: '', title: '', des: '' }}
       validationSchema={Yup.object({
        img: Yup.string()
           .required('Required'),
           title: Yup.string()
           .required('Required'),
           des: Yup.string()
           .required('Required'),
       })}
       onSubmit={(values, { setSubmitting }) => {
            axios.post("http://localhost:5354/",{
                img:values.img,
                title:values.title,
                des:values.des
            })
       }}
     >
       <Form className='formArea'>
         <label htmlFor="img">Image URL</label>
         <Field name="img" type="text" />
    
 
         <label htmlFor="title">Title</label>
         <Field name="title" type="text" />
 
 
         <label htmlFor="des">Text</label>
         <Field name="des" type="text" />
    
 
         <button className='submit' type="submit">Submit</button>
       </Form>
     </Formik>   
    </div>
    <Footer/>

    </div>
  )
}

export default Addpage