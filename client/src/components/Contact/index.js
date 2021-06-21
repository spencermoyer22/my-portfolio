import React, {useState} from 'react';
import { validateEmail } from '../../utils/helpers';

function Contact() {
    const [formState, setFormState] = useState({name: '', email: '', message: ''});
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage]= useState('');

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            }
             else {
                 setErrorMessage('');
             }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value});
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    return (
        <div className='container'>
            <h2 className='mt-3'>Contact</h2>
            <div className='row justify-content-center'>
                <form onSubmit={handleSubmit} className='d-inline col-6'>
                    <div>
                        <label htmlFor='name' className='form-label'>Name:</label>
                        <input className='form-control' type='text' name='name' defaultValue={name} onBlur={handleChange} />
                    </div>
                    <div>
                        <label htmlFor='email' className='form-label'>Email:</label>
                        <input className='form-control' type='email' name='email' defaultValue={email} onBlur={handleChange} />
                    </div>
                    <div>
                        <label htmlFor='message' className='form-label'>Message:</label>
                        <textarea className='form-control' name='message' rows='5' defaultValue={message} onBlur={handleChange} />
                    </div>
                    {errorMessage && (
                        <div>
                            <p class='text-danger'>{errorMessage}</p>
                        </div>
                    )}
                    <button type='submit' className='btn'>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;