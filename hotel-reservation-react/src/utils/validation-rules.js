const Rules =  {
    fnameRules: [{
        required: true,
        message: 'Please input your First Name!',
    }, {
        pattern: /^[a-zA-Z]+$/,
        message: 'Name can only include letters.',
    }],
    lnameRules: [{
        required: true,
        message: 'Please input your Last Name!',
    }, {
        pattern: /^[a-zA-Z]+$/,
        message: 'Name can only include letters.',
    }],
    emailRules: [{
        required: true,
        message: 'Please input your Email!',
    }, {
        pattern: /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/,
        message: 'Enter a valid E-mail',
    }],
    phoneNoRules: [{
        required: true,
        message: 'Please input a valid Phone Number'
    }, {
        pattern: /[2-9]{2}\d{8}/,
        message: 'Please enter a valid Phone Number'
    }],
    passwordRules: [{
        required: true,
        message: 'Please input your password!',
    }]
}

export default Rules;