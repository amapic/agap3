import React from "react";
import emailjs from "emailjs-com";

import ScrollToTopFab from "../components/scrollToTop";
export default function ContactUs() {
  const Name = React.useRef("");
  const Message = React.useRef("");
  const Email = React.useRef("");
  const Sujet = React.useRef("");

  function sendEmail(e) {
    e.preventDefault(); 

    
    
    
    

    if (
      Sujet.current.value &&
      Name.current.value &&
      Message.current.value &&
      Email.current.value
    ) {
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
            
          },
          (error) => {
            
            console.log(error.text);
          }
        );
    }else{
      alert("Merci de renseigner tous les champs")
    }
  }

  return (
    <>
      <div
        id="texte-contact"
        style={{
          
          backgroundColor: "#fff",
        }}
        className="text-center py-2 px-4  text-2xl h-auto w-full md:text-3xl xl:text-5xl"
      >
        Contactez moi et je vous rappelle très rapidement !
      </div>
      <div
        className="w-full p-2 flex justify-center"
        style={{
          minHeight: "50vh",
          backgroundColor: "#fff",
        }}
      >
        <div
          id="formcontact"
          className="h-auto w-3/4 md:w-1/2 rounded px-2 py-5 justify-start  self-auto m-auto m-4"
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
                      display: "inline-block",
                    }}
                    
                  >
                    Nom
                  </label>

                  <input ref={Name} id="form_sname" type="text" name="from_name" />
                </div>
                <div className="py-1">
                  <label
                    className="p-2 pr-10"
                    style={{
                      minWidth: "70px",
                      display: "inline-block",
                    }}
                    
                  >
                    Email
                  </label>

                  <input ref={Email} id="form_ssubject" type="email" name="from_email" />
                </div>
                <div className="py-1">
                  <label
                    className="p-2"
                    style={{
                      minWidth: "70px",
                      display: "inline-block",
                    }}
                    
                  >
                    Sujet
                  </label>

                  <input
                  id="form_ssubject"
                    ref={Sujet}
                    type="text"
                    name="subject"
                    style={{
                      overflow: "hidden",
                    }}
                  />
                </div>
              </div>
              <div
                className="flex p-2 justify-start"
                style={{
                  minHeight: "100px",
                }}
              >
                <label  className="px-2 text-center">Message</label>
                <textarea
                  ref={Message}
                  name="html_message"
                  className="w-full"
                  id="html_message"
                />
              </div>
              <div className="flex p-2 justify-center "
              
              >
                <input
                  id="submitBouton"
                  className="p-2 text-2xl md:text-3xl"
                  style={{
                    borderRadius: "0.5vw",
                    
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
        
        style={{
          height: "20vh",
          backgroundColor: "#fff",
        }}
      ></div>
      <ScrollToTopFab />
    </>
  );
}
