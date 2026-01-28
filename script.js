function addReq(){

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

const box = document.createElement("div");
box.className = "card";

box.innerHTML = `
<b>${client}</b> – ${company}<br>
Email: ${email}<br>
Phone: ${phone}<br>
Role: ${role}<br>
Rate: ${rate}<br>
JD: ${jd}<br>

Status:
<select>
<option>Open</option>
<option>Submitted</option>
<option>Interview</option>
<option>Closed</option>
</select>
`;

document.getElementById("list").prepend(box);

// clear fields
document.querySelectorAll("input,textarea").forEach(x=>x.value="");

}
