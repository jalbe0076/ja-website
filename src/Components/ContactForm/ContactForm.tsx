import './ContactForm.scss';
import { useState, ChangeEvent } from 'react';

const ContactForm = () => {
  const [values, setValues] = useState<{ [key: string]: string }>({
    name: '',
    email: '',
    message: '',
  });

  const [focusedFields, setFocusedFields] = useState<{ [key: string]: boolean }>({
    name: false,
    email: false,
    message: false,
  });

  const handleFocus = (fieldNames: Array<string>) => {
    setFocusedFields(prevState => {
      const updatedFields = { ...prevState };
  
      fieldNames.forEach(fieldName => {
        updatedFields[fieldName] = true;
      });
  
      return updatedFields;
    });
  }

  return (
    <section className="form-box">
      <h2 className='sub-title-form' >Send me an email</h2>
      <form className="contact-form" action="https://formsubmit.co/8aaee187ac3a3657ff6c44542c299c36" method="POST">
        <div className='form-item'>
          <label className='form-label' htmlFor="contact-name">Name</label>
          <input 
            type="text" 
            className='form-input' 
            id="contact-name" 
            name="name" 
            placeholder='Enter your name' 
            onChange={(e: ChangeEvent<HTMLInputElement>) => setValues({...values, name: e.target.value})} 
            value={values.name} 
            onBlur={() => handleFocus(['name'])}
            data-focused={focusedFields.name.toString()}
            required 
          />
          <span className='form-error form'>Please enter your name</span>
        </div>
        <div className='form-item'>
          <label className='form-label' htmlFor="contact-email">Email</label>
          <input 
            type="email" 
            className='form-input' 
            id="contact-email" 
            name="email" 
            placeholder="name@domain.com" 
            onChange={(e: ChangeEvent<HTMLInputElement>) => setValues({...values, email: e.target.value})}
            value={values.email}
            onBlur={() => handleFocus(['email'])}
            data-focused={focusedFields.email.toString()}
            required />
          <span className='form-error form'>Please enter your email</span>
        </div>
        <div className='form-item'>
          <label className='form-label' htmlFor="contact-message">Message</label>
          <textarea 
            name="message" 
            className='form-input' 
            id="contact-message" 
            maxLength={750} 
            placeholder='Enter a detailed message (Max 750 chars)' 
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setValues({...values, message: e.target.value})} 
            value={values.message}  
            onBlur={() => handleFocus(['message'])}
            data-focused={focusedFields.message.toString()}
            required 
          />
          <span className='form-error form'>Please enter a message</span>
        </div>
        <button className='form-button' type="submit" onClick={() => handleFocus(['name', 'email', 'message'])}>Send email</button>
      </form>
    </section>
  )
}

export default ContactForm;