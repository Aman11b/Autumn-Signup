const nameInput=document.getElementById('Name');
const emailInput=document.getElementById('email');

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
 nameInput.addEventListener('input',validateName);
 nameInput.addEventListener('blur',validateName);

 emailInput.addEventListener('input',validateEmail);
 emailInput.addEventListener('blur',validateEmail);