const btn = document.querySelector('#send-contact')

btn.addEventListener('click',function(e) {
    e.preventDefault();
 
    let name = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;
    let message = document.querySelector('#message').value;

    let objJSON = [];

    objJSON.push(name);
    objJSON.push(email);
    objJSON.push(message);

    console.log(objJSON);
})