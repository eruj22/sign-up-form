<h2>Sign up form</h2>

![image](https://user-images.githubusercontent.com/80893722/128145870-7f033a6a-aeeb-45a6-a3ca-035f2a444ad6.png)

The project is made with React.

Process of building it:
- main App returns proper layout with added two components, SocialAccounts and Form
- SocialAccounts imports react icons and displays them
- the Form displays inputs and buttons
- styling of all components
- in the Form there are added modals for privacy and terms: For each one added states and functions to change those states, styling them and on click of the highlighted text displaying them. The text is inside "bold" element with type="button", so that on click it doesn't trigger form submit
- separate function validateInfo for form validation to validate values from each input
- This validation is inserted in the custom hook useForm, where there are states for values, errors and checkbox checked. It processes values based on the return from validateInfo and returns functions and properties that we can use in the Form
- when values are inserted correcly and checkbox is checked, a message appears in the console "your form is submitted"

This project was good challenge. During it I had some problems with validation. I have tried yup validation but I wasn't happy with the result. Then I followed a YouTube solution for custom hook validation. It took me some time to get the whole functionality. Now it is working and I have greater flexibility with a little bit more code than using other libraries.
