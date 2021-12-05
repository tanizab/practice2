let userForm = document.forms.userForm;

let select = userForm.elements[userForm.elements.length - 2];
//console.log(select);
let userClass = ["10А", "10Б", "10В"];

for(let type of userClass) {
    let opt = new Option(type);
    select.add(opt);
}

let a = document.body.lastElementChild.previousElementSibling.previousElementSibling.previousElementSibling.lastElementChild;

let b = document.body.lastElementChild.previousElementSibling.previousElementSibling.lastElementChild;

let c = document.body.lastElementChild.previousElementSibling.lastElementChild;
//console.log(a);
//console.log(b);
//console.log(c);

const sendForm = function(e) {
    e.preventDefault();

    let data = {};

    for(let i = 0; i < userForm.elements.length; i++){
        let child = userForm.elements[i];
        if(child.nodeName !== "BUTTON") {
            data[child.name] = child.value;
        }
    }
    console.log(data);

    let div = `<div class="box">`;
    div += `&#8226; `;
    for(let k in data){
        div += `<div class="boxText">${data[k]}</div>`;
    }
    div += `</div>`;

    if(data.userClass == "10А"){
        a.innerHTML += div;
    }else if(data.userClass == "10Б"){
        b.innerHTML += div;
    }else{
        c.innerHTML += div;
    }

    userForm.reset();
}
let sub = userForm.elements[userForm.elements.length - 1];

sub.onclick = sendForm;