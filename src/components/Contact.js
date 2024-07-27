import React, { useState, useRef } from 'react';
import { FaUser, FaLinkedin, FaGithub, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

function Contact() {
    const [formData, setFormData] = useState({
        from_name: '',
        from_email: '',
        from_subject: '',
        message: ''
    });

    const form = useRef();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_trr286m', 'template_ls74clo', form.current, '4Ijh1DogAyGOJjA5G')
            .then((result) => {
                console.log(result.text);
                alert('Message sent successfully!');
                setFormData({ from_name: '', from_email: '', from_subject: '', message: '' }); // Corrected line
            }, (error) => {
                console.log(error.text);
                alert('Failed to send message. Please try again.');
            });
    };

    return (
        <section className="contact" id="contact">
            <div className="max-width">
                <h2 className="title">Contact me</h2>
                <div className="contact-content">
                    <div className="column left">
                        <div className="text">Get in Touch</div>
                        <p>Need to get in touch with us? Either fill out the form with your inquiry or find the department
                            email you'd like to contact below.</p>
                        <div className="icons">
                            <div className="row">
                                <FaUser className='contact-icon' />
                                <div className="info">
                                    <div className="sub-title">Naveesha Kavindi</div>
                                </div>
                            </div>
                            <div className="row">
                                <FaLinkedin className='contact-icon' />
                                <div className="info">
                                    <div className="sub-title"><a href="https://www.linkedin.com/in/naveesha-kavindi-667835268/"> https://www.linkedin.com </a></div>
                                </div>
                            </div>
                            <div className="row">
                                <FaGithub className='contact-icon' />
                                <div className="info">
                                    <div className="sub-title"><a href="https://github.com/Naveesha1">https://github.com/Naveesha1</a> </div>
                                </div>
                            </div>
                            <div className="row">
                                <FaMapMarkerAlt className='contact-icon' />
                                <div className="info">
                                    <div className="sub-title">Rodrigo Road, Moratuwa</div>
                                </div>
                            </div>
                            <div className="row">
                                <FaEnvelope className='contact-icon' />
                                <div className="info">
                                    <div className="sub-title"><a href="mailto:naveeshakavindi4@gmail.com">naveeshakavindi4@gmail.com</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column right">
                        <div className="text">Message me</div>
                        <form ref={form} onSubmit={handleSubmit}>
                            <div className="fields">
                                <div className="field name">
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        name="from_name"
                                        value={formData.from_name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="field email">
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        name="from_email"
                                        value={formData.from_email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="field">
                                <input
                                    type="text"
                                    placeholder="Subject"
                                    name="from_subject"
                                    value={formData.from_subject}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="field textarea">
                                <textarea
                                    cols="30"
                                    rows="10"
                                    placeholder="Message.."
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>
                            <div className="button-area">
                                <button type="submit">Send message</button>
                            </div>
                        </form>
                    </div>
                </div>
                </div>
        </section>
    );
}

export default Contact;
