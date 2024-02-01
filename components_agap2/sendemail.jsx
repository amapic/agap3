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
          // alert(result)
          window.location.reload(); //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior)
        },
        (error) => {
          // alert(error.text)
          console.log(error.text);
        }
      );
  }

  return (
    <div
      style={{
        height: "50vh",
      }}
    >
      {/* <Box> */}
      {/* <div className="flex w-3/4 "> */}
      <form className="contact-form" onSubmit={sendEmail}>
        <input type="hidden" name="contact_number" />
        <label>Name</label>
        <input type="text" name="from_name" />
        <label>Email</label>
        <input type="email" name="from_email" />
        <label>Subject</label>
        <input type="text" name="subject" />
        <label>Message</label>
        <textarea name="html_message" />
        <input type="submit" value="Send" />
      </form>
      {/* </div> */}
      {/* </Box> */}
      {/* <Grid container direction="column" justify="center" alignItems="center">
        <Grid item>
          <form
            id="contact-form"
            className={classes.contactForm}
            // onSubmit={this.handleSubmit}
            onSubmit={sendEmail}
          >
            <Grid item>
              <TextField
                fullWidth
                required
                id="name"
                label="Name"
                name="userName"
                className={classes.inputField}
                onChange={this.handleChange("userName")}
                margin="normal"
              />
            </Grid>
            <Grid item>
              <TextField
                fullWidth
                required
                id="email"
                label="Email"
                name="email"
                className={classes.inputField}
                onChange={this.handleChange("email")}
                margin="normal"
              />
            </Grid>
            <Grid item>
              <TextField
                fullWidth
                required
                id="message"
                label="Message"
                name="message"
                className={classes.inputField}
                onChange={this.handleChange("message")}
                margin="normal"
                multiline
                maxRows="4"
              />
            </Grid>
            <Grid
              container
              direction="row"
              spacing={2}
              style={{ marginTop: 20 }}
            >
              <Grid item>
                <Button
                  className={classes.formButton}
                  type="reset"
                  variant="contained"
                  color="default"
                  //disabled={submitting || pristine}
                >
                  RESET
                </Button>
              </Grid>
              <Grid item>
                <Button
                  className={classes.formButton}
                  type="submit"
                  variant="contained"
                  color="primary"
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid> */}
    </div>
  );
}
