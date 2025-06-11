import { useState } from 'react'
import { ContactForm } from './ContactForm'

export const Contact = () => {
    const [submissionMessage, setSubmissionMessage] = useState("")
    return(
        <section id="contact" className="bg-slate-900 text-white w-full">
            <div className="inner-container">
                <h2>Contact Me</h2>
                <p>Have a question, comment, or concern? Let me know! I'd love to hear from you.</p>
                <p className="text-xl">{submissionMessage}</p>
                <ContactForm setSubmissionMessage={setSubmissionMessage}/>
            </div>
        </section>
    );
}