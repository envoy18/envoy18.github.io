import React from "react";
import emailjs from 'emailjs-com';

export const ContactUs: React.FC = () => { 
    const serviceId = 'service_ecz43g6';
    const templateId = 'template_xxajd4f';

    const sendEmail = () => {
        emailjs.send(serviceId, templateId, {
            email: 'jason.ampalayohan@gmail.com',
            name: 'Jason',
            message: 'Hello from React!',
        }, 'yGPRlRCy3Li43KlY-')
        .then(response => console.log('Success:', response))
        .catch(err => console.error('Error:', err));
    };

    return (
        <div>
            <button onClick={sendEmail}>
                test email
            </button>
        </div>
    );
}