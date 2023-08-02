
//check regular expresion

let list = document.getElementById('selectoption');
let email_check = list.querySelector('#email_input');
let phone_check = list.querySelector('#phone_input');
let bd_check = list.querySelector('#bd_input');
let nickname_check = list.querySelector('#nickname_input');


email_check.addEventListener('click', check_email);
phone_check.addEventListener('click', check_phn);
bd_check.addEventListener('click', check_bd);
nickname_check.addEventListener('click', check_nickname);



function check_phn(event){
    let phn_input = prompt("Enter an Phone Number:");
    let phn_re= /^01[0-9]{9}$/

    if(phn_input){
    if(phn_re.exec(phn_input)){
        alert("Yes! That's a valid phone number!!");
    }
    else
    {
        alert("Not a valid phone number!!");
    }
    }
    else
    {
        alert("Please Input Something");
    }
}

function check_email(event){

    let email_input = prompt("Enter an Email:");
    let email_re= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    
    if(email_input){
        if(email_re.test(email_input)){
        alert("Yes! That's a valid Email!!");
    }
        else
    {
        alert("Not a valid Email!!");
    }
    }else
    {
        alert("Please Input Something");
    }   
}

function check_bd(event){


    let bd_input = prompt("Enter a Birthdate(Ex: dd/mm/yyyy or dd-mm-yyyy):");
    let email_re= /\b(?:0?[1-9]|[1-2][0-9]|3[0-1])(\/|-)(?:0?[1-9]|1[0-2])(\/|-)(?:19\d{2}|20\d{2})\b/
    

    if(bd_input){
        if(email_re.test(bd_input)){
        alert("Yes! That's a valid Birthdate!!");
    }
         else
    {
        alert("Not a valid Birthdate!!");
    }}
    else{
        alert("Please Input Something");
    }
}


function check_nickname(event){
    let nickname_input = prompt("Enter a Nickname:");
    let email_re= /^[A-Za-z0-9_-]{3,20}$/

    if(nickname_input){
        if(email_re.test(nickname_input)){
        alert("Yes! That's a valid Nickname!!");
    }
        else
    {
        alert("Not a valid Nickname!!");
    }}

    else{
        alert("Please Input Something")
    }
}