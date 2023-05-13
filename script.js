// Password Strength Checker: Create a program that takes a password input from the user and checks its strength based on criteria such as length, use of special characters, uppercase and lowercase letters, and numbers. The program should then display the strength rating on the webpage.


function showOutput(output){
    document.getElementById('output').innerHTML = output
}

function handleCheckPassward(){
   event.preventDefault()
  let password =   document.getElementById('passward').value
  
  if (password.length < 8) {
    showOutput('Password should be at least 8 characters long.');
  }

  if (!/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password)) {
    showOutput('Password should include at least one special character.');
    return
  }

  if (!/[A-Z]/.test(password)) {
    showOutput('Password should include at least one uppercase letter.');
    return

  }

  if (!/[a-z]/.test(password)) {
    showOutput('Password should include at least one lowercase letter.');
    return

  }

  if (!/[0-9]/.test(password)) {
    showOutput('Password should include at least one number.');
    return

  }

  showOutput( `"${password}" Correct Passward`)


}