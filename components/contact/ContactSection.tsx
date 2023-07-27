import React from "react"
import ContactForm from '@/components/contact/ContactForm';

function ContactSection () {
    return (

        <section id="contact" className="flex justify-center px-4 md:my-12 md:pt-10 my-6 pt-7">
            <div>
                <ContactForm />
            </div>
        </section>
    );
}

export default ContactSection;