const nameInput=document.getElementById('Name');
const emailInput=document.getElementById('email');
const passwordInput=document.getElementById('password');
const strengthIndicator = document.getElementById('strength-indicator');
const guidelines={
    length: document.getElementById('length-rule'),
    uppercase: document.getElementById('uppercase-rule'),
    lowercase: document.getElementById('lowercase-rule'),
    number: document.getElementById('number-rule'),
    special: document.getElementById('special-rule')
};
const confirmPasswordInput=document.getElementById('confirmPassword');

// validation flag

let isValid=true; // Flag to track overall validation status

function validateName(){
    const nameError=document.getElementById('Name-error');
    const nameRegex=/^[A-Za-z\s]{3,}$/; //only letters and space

    if(nameInput.value.trim()===''){
        nameError.textContent='Name is required';
        nameInput.classList.add('error');
        nameInput.classList.remove('success'); // Remove success class
        isValid=false;
    }

    // check if the input matches the regex
    else if(!nameRegex.test(nameInput.value.trim())){
        nameError.textContent='Name must contain only letters and spaces and be at least 3 characters long';
        nameInput.classList.add('error');
        nameInput.classList.remove('success'); // Remove success class
        isValid=false;
    }else{
        nameError.textContent='';
        nameInput.classList.remove('error');
        nameInput.classList.add('success');
        console.log(nameInput.classList);
    }

}
    
function validateEmail(){
    const emailError=document.getElementById('email-error');
    const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/

    emailInput.classList.remove('error', 'success');

    if(emailInput.value.trim()===''){
        emailError.textContent='Email is required';
        emailInput.classList.add('error');
        emailError.classList.remove('success');
        isValid=false;
    }else if(!emailRegex.test(emailInput.value)){
        emailError.textContent='Please enter valid email address';
        emailInput.classList.add('error');
        emailError.classList.remove('success');
        isValid=false;
    }else{
        emailError.textContent = ''; // Clear error message
        emailInput.classList.remove('error');
        emailInput.classList.add('success'); // Add success class
    }

}

function validatePassword(){
    const password=passwordInput.value;

    passwordInput.classList.remove('error','success');
    Object.values(guidelines).forEach(guidelines=>{
        guidelines.style.color='grey';
    });

    // check length requirement
    if(password.length<8){
        passwordInput.classList.add('error');
        passwordInput.classList.remove('success');
        guidelines.length.style.color='red';
        isValid=false;
    }else{
        passwordInput.classList.add('success');
        passwordInput.classList.remove('error');
        guidelines.length.style.color='green';
    }
    // check other requirements
    if(!/[A-Z]/.test(password)){
        passwordInput.classList.add('error');
        passwordInput.classList.remove('success');
        guidelines.uppercase.style.color='red';
        isValid=false;
    }else{
        passwordInput.classList.add('success');
        passwordInput.classList.remove('error');
        guidelines.uppercase.style.color='green';
    }
    if(!/[a-z]/.test(password)){
        passwordInput.classList.add('error');
        passwordInput.classList.remove('success');
        guidelines.lowercase.style.color='red';
        isValid=false;
    }else{
        passwordInput.classList.add('success');
        passwordInput.classList.remove('error');
        guidelines.lowercase.style.color='green';
    }
    if(!/\d/.test(password)){
        passwordInput.classList.add('error');
        passwordInput.classList.remove('success');
        guidelines.number.style.color='red';
        isValid=false;
    }else{
        passwordInput.classList.add('success');
        passwordInput.classList.remove('error');
        guidelines.number.style.color='green';
    }
    if(!/[!@#$%^&*(),.?:{}|<>]/.test(password)){
        passwordInput.classList.add('error');
        passwordInput.classList.remove('success');
        guidelines.special.style.color='red';
        isValid=false;
    }else{
        passwordInput.classList.add('success');
        passwordInput.classList.remove('error');
        guidelines.special.style.color='green';
    }

    updateStrengthIndicator(password);
}

function updateStrengthIndicator(password){
    const strengthBar=document.getElementById('strength-indicator');
    let strength=0;
    
    // calculate strength based on password length
    if(password.length>=8) strength+=25;
    if(/[A-Z]/.test(password)) strength+=25;
    if(/[a-z]/.test(password)) strength+=25;
    if(/\d/.test(password)) strength+=25;
    if(/[!@#$%^&*(),.?:{}|<>]/.test(password)) strength+=25;

    // update strength bar width and color
    strengthBar.style.width=`${strength}%`;
    if(strength<50){
        strengthBar.style.backgroundColor='red';
    }else if(strength<75){
        strengthBar.style.backgroundColor='orange';
    }else{
        strengthBar.style.backgroundColor='green';
    }
    

}

function validateConfirmPassword(){
    const confirmPasswordError=document.getElementById('confirmPassword-error');

    confirmPasswordInput.classList.remove('error','success');

    if(confirmPasswordInput.value.trim()===''){
        confirmPasswordError.textContent='Confirm your Password';
        confirmPasswordInput.classList.remove('success');
        confirmPasswordInput.classList.add('error');

        isValid=false;
    }else if(confirmPasswordInput.value===passwordInput.value){
        confirmPasswordError.textContent='';
        confirmPasswordInput.classList.remove('error');
        confirmPasswordInput.classList.add('success');
    }else{
        confirmPasswordError.textContent='Password not matching';
        confirmPasswordInput.classList.remove('success');
        confirmPasswordInput.classList.add('error');

    }
}

passwordInput.addEventListener('input', validatePassword);
passwordInput.addEventListener('blur', validatePassword);

nameInput.addEventListener('input',validateName);
nameInput.addEventListener('blur',validateName);

emailInput.addEventListener('input',validateEmail);
emailInput.addEventListener('blur',validateEmail);

confirmPasswordInput.addEventListener('input', validateConfirmPassword);
confirmPasswordInput.addEventListener('blur', validateConfirmPassword);
