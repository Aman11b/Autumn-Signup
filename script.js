document.getElementById('form').addEventListener('submit',function(event){
    event.preventDefault();

    let isValid=true;

    // validate name
    const nameInput=document.getElementById('Name');
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
    if(isValid){
        alert("Form submitted successfully");
    }
});