import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs.sendForm(
        'service_ilxfcck', // Your EmailJS service ID
        'template_cn975wt', // Your EmailJS template ID
        form.current,
        'WTyxAi03GNl3_3AdS' // Your EmailJS public key
      )
        .then((result) => {
          console.log('Email successfully sent:', result);
          Swal.fire({
            title: "Email sent successfully!",
            background: '#f0f8ff', 
            color: '#333', 
            confirmButtonColor: '#008000',
            showClass: {
              popup: 'animate__animated animate__fadeInUp animate__faster',
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutDown animate__faster',
            }
          });
          form.current.reset();
        }, (error) => {
          console.log('Email sending failed:', error.text);
          alert('Failed to send email. Please try again later.');
        });
    }
  };

  return (
    <div className="section relative" id="contact">
    {/* <div className="section bg-[url('https://i.postimg.cc/rm1w3MhL/Gemini-Generated-Image-rflajcrflajcrfla.jpg')] bg-no-repeat" id="contact"> */}
        <h1 className='h-24'>For Spacing</h1>

        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://i.postimg.cc/rm1w3MhL/Gemini-Generated-Image-rflajcrflajcrfla.jpg')" }}></div>
            
      <h2 className="text-xl text-center md:text-[40px] text-green-500 font-bold mb-10">
        Contact
      </h2>

      {/* Social Icons */}
      {/* <div className="flex justify-center items-center space-x-2 md:space-x-6 mb-20">
      </div> */}

      {/* Contact Form */}
      <div className="flex justify-center mb-20">
        <div className="card flex-shrink-0 w-full max-w-md  ">
          <h2 className="text-xl text-center md:text-[30px] text-green-500 font-bold mb-10">
            Send us message
          </h2>
          <div className="card-body">
            <form ref={form} onSubmit={sendEmail}>
              <div data-aos="zoom-in" className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-[15px] md:text-[22px] text-green-400">Name</span>
                </label>
                <input type="text" name="from_name" placeholder="Name" required className="input input-bordered border-blue-400" />
              </div>

              <div data-aos="zoom-in" className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-[15px] md:text-[22px] text-green-400">Email</span>
                </label>
                <input type="email" name="from_email" placeholder="Email" required className="input input-bordered border-blue-400" />
              </div>

              <div data-aos="zoom-in" className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-[15px] md:text-[22px] text-green-400">Message</span>
                </label>
                <textarea name="message" placeholder="Your message" required className="textarea textarea-bordered border-blue-400"></textarea>
              </div>

              <div data-aos="zoom-in" className="form-control mt-6">
                <button type="submit" className="hover:bg-orange-300 hover:text-black btn bg-green-500 font-bold text-[15px] md:text-[20px] text-white">
                  Send Email
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
