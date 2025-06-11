import emailjs from 'emailjs-com';

export const ContactForm = (props) => {

const SERVICE_ID = "service_h186fc7";
const TEMPLATE_ID = "template_ouam1qq";
const PUBLIC_KEY = "b2syVNESLkdVU6TC-";

    const handleFormSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
          .then((result) => {
            props.setSubmissionMessage("Message sent! I will repsond as soon as I can.")
          }, (error) => {
            props.setSubmissionMessage("There was an error sending your message, please try again later.")
          });
        e.target.reset()
    };
    return (
        <div className="form-container mt-8">
            <form className="flex flex-col gap-8" onSubmit={handleFormSubmit}>
                <div className="form-field flex flex-col md:flex-row gap-4">
                    <label className="md:basis-32" for="from_name">Name</label>
                    <input className="grow border-2 border-white p-3 rounded-lg" type="text" id="from_name" name="from_name" placeholder="Your name.." required />
                </div>

                <div className="form-field flex flex-col md:flex-row gap-4">
                    <label className="md:basis-32">E-mail</label>
                    <input className="grow border-2 border-white p-3 rounded-lg" type="email" id="from_email" name="from_email" placeholder="Your email.." required />
                </div>

                <div className="form-field flex flex-col md:flex-row gap-4">
                    <label className="md:basis-32" for="message">Message</label>
                    <textarea className="grow border-2 border-white p-3 rounded-lg resize-none" name="message" placeholder="Your message.." rows="8" required />
                </div>
                <button type="submit" className="btn-secondary w-32 ml-auto">Submit</button>
            </form>
        </div>
    )
}