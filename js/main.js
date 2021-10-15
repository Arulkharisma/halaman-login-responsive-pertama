//login show and hidden
const signUp = document.getElementById ('sign-up'),
    signIn = document.getElementById('sign-in'),
    loginIn = document.getElementById('login-in'),
    loginUp = document.getElementById('login-up')

signUp.addEventListener('click', ()=>{
    //remove clases first if they exist
    loginIn.classList.remove('block')
    loginUp.classList.remove('none')

    //add class
    loginIn.classList.add('none')
    loginUp.classList.add('block')
})

signIn.addEventListener('click', ()=>{
    //remove clases first if they exist
    loginIn.classList.remove('none')
    loginUp.classList.remove('block')

    //add class
    loginIn.classList.add('block')
    loginUp.classList.add('none')
})



