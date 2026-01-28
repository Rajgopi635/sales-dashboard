async function addReq(){

const client = document.getElementById("client").value;
const company = document.getElementById("company").value;
const email = document.getElementById("email").value;
const phone = document.getElementById("phone").value;
const role = document.getElementById("role").value;
const rate = document.getElementById("rate").value;
const jd = document.getElementById("jd").value;

if(!client || !company){
alert("Enter Client + Company");
return;
}

const payload = {
client,company,email,phone,role,rate,jd,status:"Open"
};

await fetch("https://script.google.com/macros/s/AKfycbzmZqIUiSmsdVxVBvAbWKtIyWGjQFsQlvCkFWyWLUZ-hMgdA_PUY4vIVb0oXlndomdQAw/exec",{
method:"POST",
body:JSON.stringify(payload)
});

const box = document.createElement("div");
box.className="card";

box.innerHTML=`
<b>${client}</b> – ${company}<br>
Email: ${email}<br>
Role: ${role}<br>
Status: Open
`;

document.getElementById("list").prepend(box);

document.querySelectorAll("input,textarea").forEach(x=>x.value="");

alert("Saved");
}
