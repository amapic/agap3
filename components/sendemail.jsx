import React from "react";
import emailjs from "emailjs-com";
import { Box } from "material-ui";

export default function ContactUs() {
  function sendEmail(e) {
    e.preventDefault(); //This is important, i'm not sure why, but the email won't send without it

    emailjs
      .sendForm(
        "service_pidbxsw",
        "template_xeg35zr",
        e.target,
        "4P5LQMujV6zLr0o1N"
      )
      .then(
        (result) => {
          alert("Votre message a bien été envoyé");
          // window.location.reload(); //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior)
        },
        (error) => {
          // alert(error.text)
          console.log(error.text);
        }
      );
  }

  return (
    <>
      <div id="texte-contact"
      style={{
        // height: "20vh",
        backgroundColor:"#fff"
      }}
      className="text-center py-2 px-4  text-2xl h-auto w-full text-5xl">Contactez moi je vous rappelle tout de suite !</div>
      <div
        className="w-full m-2 bg-white flex justify-center"
        style={{
          height: "50vh",
        }}
      >
        <div
          id="formcontact"
          className="flex h-auto w-3/4 md:w-1/2 rounded px-2 py-5 justify-start  self-auto m-auto m-4"
          style={{
            borderRadius: "1vw",
          }}
        >
          <form className="contact-form h-auto" onSubmit={sendEmail}>
            <div className="flex justify-start align-center flex-col">
              <div className="flex p-2 justify-start flex-wrap">
                <div className="py-1">
                  <input type="hidden" name="contact_number" />
                  <label
                    className="p-2"
                    style={{
                      minWidth: "70px",
                      display:"inline-block"
                    }}
                  >
                    Name
                  </label>

                  <input type="text" name="from_name" />
                </div>
                <div className="py-1">
                  <label
                    className="p-2 pr-10"
                    style={{
                      minWidth: "70px",
                      display:"inline-block"
                    }}
                  >
                    Email
                  </label>

                  <input type="email" name="from_email" />
                </div>
                <div className="py-1">
                  <label
                    className="px-2"
                    style={{
                      minWidth: "70px",
                      display:"inline-block"
                    }}
                  >
                    Subject
                  </label>

                  <input type="text" name="subject" style={{
                    overflow:"hidden"
                  }} />
                </div>
              </div>
              <div
                className="flex p-2 justify-start"
                style={{
                  minHeight: "100px",
                }}
              >
                <label className="px-2 text-center">Message</label>
                <textarea name="html_message" className="w-full" />
              </div>
              <div className="flex p-2 justify-center ">
                <input
                  className="p-2"
                  style={{
                    borderRadius: "0.5vw",
                    // backgroundColor:"red"
                  }}
                  type="submit"
                  value="Envoi"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
      <div
      // className="bg-white"
      style={{
        height: "20vh",
        backgroundColor:"#fff"
      }}
      >
      </div>
    </>
  );
}
