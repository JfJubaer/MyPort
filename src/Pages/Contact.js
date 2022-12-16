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
        <div>
            <div className="hero min-h-screen bg-base-200 mx-auto">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <div>
                            <lottie-player
                                autoplay
                                loop
                                mode="normal"
                                src="https://assets10.lottiefiles.com/packages/lf20_ipd377dh.json"
                                style={{ width: "500px", height: "500px" }}
                            ></lottie-player>
                        </div>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mr-10">
                        <div className="card-body">
                            <h1 className="mb-5 text-5xl font-bold">If you want to contact me jump here ...</h1>
                            <form ref={form} className="contact-form " onSubmit={sendEmail}>
                                <label className="label">Name</label>
                                <input className="input input-bordered w-60" type="text" name="user_name" /><br />
                                <label className="label">Email</label>
                                <input className="input input-bordered w-60" type="email" name="from_email" /><br />
                                <label className="label">Subject</label>
                                <input className="input input-bordered w-60" type="text" name="subject" /><br />
                                <label className="label">Message</label>
                                <textarea className="input input-bordered h-40 w-60" name="message" /><br />
                                <input className="btn btn-primary" type="submit" value="Send" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Contact;