import Navbar from "../Navbar/Navbar";
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm("xqkryonr");
  if (state.succeeded) {
    return (
      <>
        <Navbar />
        <div className="container-fluid p-3">
        <div className="row mt-3 pt-3">
          <div className="col-md-2"> </div>
          <div className="col-md-8 pt-3">
            <h6 className="mt-3 mb-2">CONTACT FORM</h6>
            <h1 className="contact-h1">Get in touch<br/> with me</h1>
            <form>
            <div className="row">
              <div className="col-md-6">
                <label className="pt-2 pb-2">Name</label>
                <input type="text" placeholder="put here you name" className="border-none p-2 w-100 bg-light" />
              </div>
              
              <div className="col-md-6">
                <label className="pt-2 pb-2">Email</label>
                <input type="email" placeholder="put here you email adress" className="border-none p-2 w-100 bg-light" />
              </div>
            </div>
            
            <h6 className="text-success p-3"> Thank you! I will answer you soon as possible! ... Best regards Franck sefu!</h6>
            </form>
          </div>
          <div className="col-md-2"> </div>
          
        </div>
      </div>
      </>
    );
  }
  return(
    <>
      <Navbar />
      <div className="container-fluid p-3">
        <div className="row mt-3 pt-3">
          <div className="col-md-2"> </div>
          <div className="col-md-8 pt-3">
            <h6 className="mt-3 mb-2">CONTACT FORM</h6>
            <h1 className="contact-h1">Get in touch<br/> with me</h1>
            <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6">
                <label className="pt-2 pb-2">Name</label>
                <input type="text" id="name" name="name" placeholder="put here you name" className="border-none p-2 w-100 bg-light" />
              </div>
              
              <div className="col-md-6">
                <label className="pt-2 pb-2">Email</label>
                <input type="email" id="email" name="email" placeholder="put here you email adress" className="border-none p-2 w-100 bg-light" />
                <ValidationError 
                  prefix="Email" 
                  field="email"
                  errors={state.errors}
                />
              </div>
            </div>
            <label className="pt-3 pb-2 mt-3"> TELL ME ABOUT YOUR PROJECT </label>
            <textarea id="message" name="message" className="col-md-12 bg-light border-none" rows="3" placeholder="Write here ..."></textarea>
            <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
            />
            <button type="submit" className="btn btn-dark p-3 mt-3 w-50" disabled={state.submitting}>SUBMIT</button>
            </form>
          </div>
          <div className="col-md-2"> </div>
          
        </div>
      </div>
    </>
  );
}

export default Contact;