import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { toast } from 'react-hot-toast';
require("@lottiefiles/lottie-player");


const Contact = () => {
    const form = useRef();

    function sendEmail(e) {
        e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it
        emailjs.sendForm('service_fc1slem', 'template_rv70ijs', form.current, 'Lc3xZQPuy8BIgeSfG')
            .then((result) => {
                window.location.reload();
                //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
            }, (error) => {
                console.log(error.text);
            });
        toast.success('Successfully sent');
    }
    return (
        <div id='mail' className='mt-32'>
            <h1 className="mb-5 text-5xl font-light text-center text-indigo-700">If you want to contact me jump here ...</h1>
            <div className="hero-content mt-10 flex-col mx-auto lg:flex-row-reverse">
                <div>
                    <div className='mx-auto'>
                        <lottie-player
                            autoplay
                            loop
                            mode="normal"
                            src="https://assets10.lottiefiles.com/packages/lf20_ipd377dh.json"
                            style={{ width: "400px", height: "500px" }}
                        ></lottie-player>
                    </div>
                </div>
                <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100 lg:mr-10">
                    <div className="card-body">
                        <form ref={form} className="contact-form " onSubmit={sendEmail}>
                            <label className="label">Name</label>
                            <input className="input input-bordered w-80" placeholder='Name' type="text" name="user_name" required /><br />
                            <label className="label">Email</label>
                            <input className="input input-bordered w-80" placeholder='Email' type="email" name="from_email" required /><br />
                            <label className="label">Subject</label>
                            <input className="input input-bordered w-80" placeholder='Subject' type="text" name="subject" required /><br />
                            <label className="label">Message</label>
                            <textarea className="input input-bordered w-80" placeholder='Message' name="message" required /><br />
                            <button type="submit" className="relative px-5 py-3 mt-2 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group">
                                <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
                                <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
                                <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                                <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                                <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-indigo-900 opacity-0 group-hover:opacity-100"></span>
                                <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">Button Text</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;