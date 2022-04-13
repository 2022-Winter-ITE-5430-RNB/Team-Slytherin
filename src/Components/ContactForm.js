import emailjs from "emailjs-com";
import { init } from "@emailjs/browser";
import React from "react";
import { toast } from "react-toastify";
import "../assets/css/contact.css";
import "react-toastify/dist/ReactToastify.css";
toast.configure();
init("Mf5M0Lt8CZkqgB4Rw");
export default function ContactUs() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2v1rlvo",
        "template_z0j54tg",
        e.target,
        "Mf5M0Lt8CZkqgB4Rw"
      )
      .then(
        (result) => {
          //   console.log(result.text);
          toast.success("Message sent Successfully", {
            position: toast.POSITION.TOP_CENTER,
          });
        },
        (error) => {
          //   console.log(error.text);
          toast.error("Message not sent ,Something wrong", {
            position: toast.POSITION.TOP_CENTER,
          });
        }
      );
  };

  return (
    <div className="contact-outer">
      <h1>CONTACT US</h1>
      <div className="container contact">
        <form onSubmit={sendEmail}>
          <div className="row pt-5 mx-auto">
            <div className="col-8 form-group mx-auto">
              <input
                type="text"
                className="input"
                placeholder="Name"
                name="name"
              />
            </div>
            <div className="col-8 form-group pt-2 mx-auto">
              <input
                type="email"
                className="input"
                placeholder="Email Address"
                name="email"
              />
            </div>
            <div className="col-8 form-group pt-2 mx-auto">
              <input
                type="text"
                className="input"
                placeholder="Subject"
                name="subject"
              />
            </div>
            <div className="col-8 form-group pt-2 mx-auto msg">
              <textarea
                className="holder"
                id=""
                cols="30"
                rows="8"
                placeholder="Your message"
                name="message"
              ></textarea>
            </div>
            <div className="col-8 pt-3 mx-auto">
              <input
                type="submit"
                className="btn btn-info"
                value="Send Message"
              ></input>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
