import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Configuration EmailJS
        const serviceID = 'service_uhzk4b8';
        const templateID = 'template_95x0bzv';
        const userID = 'wguJ_enhZ0zJwG0ci';

        const emailData = {
            ...formData,
            from_email: formData.email,
        };

        emailjs
            .send(serviceID, templateID, emailData, userID)
            .then(
            (response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert('Votre message a été envoyé avec succès !');
                setFormData({
                firstName: '',
                lastName: '',
                email: '',
                message: '',
                });
            },
            (err) => {
                console.error('FAILED...', err);
                alert('Une erreur est survenue lors de l\'envoi. Veuillez réessayer.');
            }
            );
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
            <label htmlFor="firstName">Prénom:</label>
            <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
            />
            </div>
            <div>
            <label htmlFor="lastName">Nom:</label>
            <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
            />
            </div>
            <div>
            <label htmlFor="email">Email:</label>
            <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
            />
            </div>
            <div>
            <label htmlFor="message">Message:</label>
            <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
            />
            </div>
            <button type="submit">Envoyer</button>
        </form>
    );
};

export default ContactForm;