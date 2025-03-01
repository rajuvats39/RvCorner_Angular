export const AppValidationConstants = {
    required: 'Please provide input',
    isWhitespace: 'Please provide valid input',
    dropDownHasValue: 'Please provide valid option',

    regex: {
        email: 'Please provide valid email',
        numeric: 'Please provide valid numeric value',
    }
};

export const Regex = {
    emailRegex: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
    numericRegex: /^\d+/g
};