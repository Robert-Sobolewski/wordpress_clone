import axios from "axios";
import React, { Fragment, useState } from "react";
import "./Confirm.scss";
interface EmailStruct {
  sendTo: string;
  subject: string;
  message?: string;
}
const Confirm = () => {
  const [email, setEmail] = useState<string>("rrrguru112@gmail.com");
  const [subject, setSubject] = useState<string>("Demo Subject Title");
  const [message, setMessage] = useState<string>(
    "Plain text of the message, hello world it's working !!!"
  );
  const formSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const mail: EmailStruct = {
      email: email,
      subject: subject,
      message: message,
    };
    await axios
      .post("http://localhost:4444/confirm", mail, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response: any) => response.data)
      .catch((error: any) => console.error(error));

    //alert("call submit");
  };
  return (
    <Fragment>
      <div className="confirm">
        <h3>confirm page</h3>
        <form action="">
          <input
            type="text"
            name=""
            id="sendTo"
            value={email}
            onChange={(e: any) => setEmail(e.target.value)}
          />
          <br />
          <input
            type="text"
            name="subject"
            id="subject"
            value={subject}
            onChange={(e: any) => setSubject(e.target.value)}
          />
          <br />
          <textarea
            name=""
            id="message"
            cols="30"
            rows="10"
            value={message}
            onChange={(e: any) => setMessage(e.target.value)}
          ></textarea>
          <br />
          <button onClick={formSubmit} type="button">
            Submit
          </button>
        </form>
      </div>
    </Fragment>
  );
};

export default Confirm;
