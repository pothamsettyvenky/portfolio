import React from 'react'
import './Contactus.scss'
import imagee from './shake.svg'
import emailjs from 'emailjs-com';
function ContactUs() {
    const [message,setMessage]=React.useState(false);
    const Submit=(e)=>{
        e.preventDefault();

        emailjs.sendForm('service_do9ztuw', 'template_hdmz4e8', e.target, 'user_zUKGnrOCAVisG42yeTytC')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
    };
    return (
        <div className="Contact1" id="contactus_head">
        <div className="Contact_right">
            <img src={imagee}/>
        </div>
        <div className="Contact_left">
        <h1>Contact us</h1>
            <form onSubmit={Submit}>
                <input type="text" placeholder="Email" name="name"/>
                <textarea type=" text" placeholder="Message" name="message"/>
                <button type="submit">Send</button>
                {message && <span>Thanks,I'll reply ASAP</span>}
            </form>
        </div>
            

        </div>
    )
}

export default ContactUs;
