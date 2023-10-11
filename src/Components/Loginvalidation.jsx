function Validation(values) {
    let error = {}
    const email_pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const password_pattern =/ ^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@\[-`{-~]).{6,64}$/;

    if(values.email === "") {
        error.email = "Email should no be empty"
    }
    else if(!email_pattern.test(values.email)) {
        error.email = "Email Didn't match"
    } else {
        error.email = ""
    }
    if(values.password === "")
    error.password = "Password should not be empty"

    else if(!password_pattern.test(values.password)) {
        error.password = "Password didn't match"
    } 
    else {
        error.password = ""
    }
    return error; 
    }
  

    /*if(!values.email) {
        errors.email = 'Required'
    }
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
      }
    return errors */
    /*if(email.indexOf("@") <= 0){
        setError("Email address must contain an @.");
        return; //don't log in
      }
      else{
        setError(null);   //no error
      } */


export default Validation;