import React, { useState } from 'react'
import './Contact.css';
export default function Contact() {

    const [namee, setNamee] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [msg, setMsg] = useState('');
    const [bool, setBool] = useState(false);

    //handling events

    const changeNamee = (e) => {
        setNamee(e.target.value);
    }
    const changeEmail = (e) => {
        setEmail(e.target.value);
    }
    const changePhone = (e) => {
        setPhone(e.target.value);
    }
    const changeMsg = (e) => {
        setMsg(e.target.value);
    }

    // submitting form

    const formSubmit = (e) => {
        e.preventDefault();

        let data = {
            namee: namee,
            email: email,
            phone: phone,
            msg: msg
        }

        console.log(data);

        setNamee('');
        setEmail('');
        setPhone('');
        setMsg('');

        setBool(true);
    }


    return (
        <div>
            <h1 className="h_primary center">Contact Us</h1>
            <div id="contact-box">
                <form action="">
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" placeholder="Enter Your name" value={namee} onChange={changeNamee} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">E-mail:</label>
                        <input type="email" name="email" id="email" placeholder="Enter Your email" value={email} onChange={changeEmail} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="no.">Phone no:</label>
                        <input type="text" name="no." id="no." placeholder="Enter Your no." value={phone} onChange={changePhone} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <textarea name="message" id="" cols="30" rows="5" value={msg} onChange={changeMsg}></textarea>
                    </div>
                    <div className="form-btn">
                        <button className="btn" onClick={formSubmit}>Submit</button>
                    </div>
                </form>
            </div>

        </div>
    )
}
