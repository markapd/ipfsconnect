import React, { useState } from "react";
import { useValidate , useValidateAll, useStateValidator} from "react-indicative-hooks";




const messages = {
  "name.required": "Please, fill the name input with some data",
  "email.email": "You need to enter a valid email"
};
const rules = {
  nameValidate: "required",
  emailValidate: "required|email"
};
const messagess = {
  "name.required": "Please, fill the name input with some data",
  "email.email": "You need to enter a valid email"
};
const ruless = {
  nameValidateAll: "required",
  emailValidateAll: "required|email"
};
const rulesss = "required";

const messagesss = {
  required: "Please, fill the input with some data"
};


export const IndicativeForm = () => {
  const [nameValidate, setNameValidate] = useState("");
  const [emailValidate, setEmailValidate] = useState("");
  const [nameValidateAll, setNameValidateAll] = useState("");
  const [emailValidateAll, setEmailValidateAll] = useState("");
  const [show, setShow] = useState(false);
  
  const options = {
    messagesss,
    runOnMount: true,
    onSuccess: () => setShow(false),
    onError: () => setShow(true)
  };

  const error = useValidate({ nameValidate, emailValidate }, rules, messages);
  const errors = useValidateAll({ nameValidateAll, emailValidateAll }, ruless, messagess);
  const [valuess, setValue, errorss] = useStateValidator("", rulesss, messagesss,options);


  return (
    <>
    <div>
      <h4>useValidate</h4>
      Name
      <input
        value={nameValidate}
        onChange={e => setNameValidate(e.target.value)}
        data-testid="name"
        className="ml-2 mr-5 mb-5"
        />
      Email
      <input
        value={emailValidate}
        onChange={e => setEmailValidate(e.target.value)}
        data-testid="email"
        className="ml-2 mr-5 mb-5"
        />
      <p className="text-red" data-testid="error">
        {error && error.message}
      </p>
      </div>

    <div>
      <h4>useValidateAll</h4>
      Name
      <input
        value={nameValidateAll}
        onChange={e => setNameValidateAll(e.target.value)}
        data-testid="name"
        className="ml-2 mr-5 mb-5"
      />
      Email
      <input
        value={emailValidateAll}
        onChange={e => setEmailValidateAll(e.target.value)}
        data-testid="email"
        className="ml-2 mr-5 mb-5"
      />
      <p className="text-red" data-testid="error">
        {errors && errors.map(error => error.message).join(", ")}
      </p>
      </div>
    <div>
        <h4>useValidatator</h4>
          <input
            value={valuess}
            onChange={e => setValue(e.target.value)}
            data-testid="input"
            className="ml-2 mr-5 mb-5"
          />
          <p className="text-red" data-testid="error">
            {errorss && errorss.message}
          </p>
      </div>
    </>
  );
}