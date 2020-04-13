import React, {useState} from "react"
import axios from 'axios'
import * as qs from "query-string"

import Layout from "../components/layout"

const IndexPage = ({location}) => {
  const [formInputs, setFormInputs] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formInputs)
    // const formData = {}
    // Object.keys(refForm.current).map(key => (formData[key] = refForm.current[key].value))

    const axiosOptions = {
      url: location.pathname,
      method: 'POST',
      headers: { 
        'Accept': 'application/x-www-form-urlencoded;charset=UTF-8',
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' 
      },
      data: qs.stringify(formInputs)
    }
    console.log(axiosOptions)


    axios(axiosOptions)
    .then(response => {
      console.log('!!!!!!!!!!!!!!!!!!!!!')
      console.log(response)
      // this.setState({
      //   feedbackMsg: "Form submitted successfully!",
      // })
      // this.domRef.current.reset()
    })
    .catch(err => {
      console.log('@@@@@@@@@@@@@@@@')
      console.log(err)
      // this.setState({
      //   feedbackMsg: "Form could not be submitted.",
      // })
    })
  }
  return (
    <Layout>
      <form name="test_form" method="POST" data-netlify="true" onSubmit={handleSubmit}>
    <p>
      <label>Your Name: <input type="text" name="name" onChange={(e) => setFormInputs({...formInputs, name: e.target.value})}/></label>   
    </p>
    <p>
      <label>Your Email: <input type="email" name="email" onChange={(e) => setFormInputs({...formInputs, email: e.target.value})}/></label>
    </p>
    <p>
      <label>Message: <textarea name="message" onChange={(e) => setFormInputs({...formInputs, message: e.target.value})}></textarea></label>
    </p>
    <p>
      <button type="submit">Send</button>
    </p>
  </form>

    </Layout>
  )
}

export default IndexPage
