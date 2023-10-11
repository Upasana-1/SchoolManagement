function Validation(values) {
    let error = {}
    const email_pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const password_pattern =/ ^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@\[-`{-~]).{6,64}$/;
       

    if (values.name === "") {
        error.name = "Name should not be empty"
    }
    else {
        error.name = ""
    }
    if(values.name === "")
    error.password = "Password should not be empty"

    else if
    (!email_pattern.test(values.email)) {
        error.email = "Email Didn't match"
    }
     else {
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
  


export default Validation;