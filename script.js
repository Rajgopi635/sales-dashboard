loadSaved();

function addReq() {

  const name = client.value;
  const company = companyInput.value;
  const email = emailInput.value;
  const phone = phoneInput.value;
  const role = roleInput.value;
  const rate = rateInput.value;
  const jd = jdInput.value;

  if (!name || !company) return alert("Client + Company required");

  const data = {
    name, company, email, phone, role, rate, jd, status:"Open"
  };

  const saved = JSON.parse(localStorage.getItem("leads") || "[]");
  saved.push(data);
  localStorage.setItem("leads", JSON.stringify(saved));

  render();
  document.querySelectorAll("input,textarea").forEach(x=>x.value="");
}

function render(){
  list.innerHTML="";

let open=0, submitted=0, interview=0, closed=0;

leads.forEach(l=>{
 if(l.status=="Open") open++;
 if(l.status=="Submitted") submitted++;
 if(l.status=="Interview") interview++;
 if(l.status=="Closed") closed++;
});

stats.innerHTML = `
<div class="card">Open: ${open}</div>
<div class="card">Submitted: ${submitted}</div>
<div class="card">Interview: ${interview}</div>
<div class="card">Closed: ${closed}</div>
`;

  const leads = JSON.parse(localStorage.getItem("leads")||"[]");

  leads.forEach((l,i)=>{
    list.innerHTML+=`
      <div class="card">
        <h3>${l.role}</h3>

        <p><b>Client:</b> ${l.name}</p>
        <p><b>Company:</b> ${l.company}</p>
        <p><b>Email:</b> ${l.email}</p>
        <p><b>Phone:</b> ${l.phone}</p>
        <p><b>Rate:</b> ${l.rate}</p>

        <select onchange="update(${i},this.value)">
          <option ${l.status=="Open"?"selected":""}>Open</option>
          <option ${l.status=="Submitted"?"selected":""}>Submitted</option>
          <option ${l.status=="Interview"?"selected":""}>Interview</option>
          <option ${l.status=="Closed"?"selected":""}>Closed</option>
        </select>

        <button onclick="del(${i})">Delete</button>
      </div>
    `;
  });
}

function update(i,val){
 const d=JSON.parse(localStorage.getItem("leads"));
 d[i].status=val;
 localStorage.setItem("leads",JSON.stringify(d));
}

function del(i){
 const d=JSON.parse(localStorage.getItem("leads"));
 d.splice(i,1);
 localStorage.setItem("leads",JSON.stringify(d));
 render();
}

function loadSaved(){
 window.client=document.getElementById("client");
 window.companyInput=document.getElementById("company");
 window.emailInput=document.getElementById("email");
 window.phoneInput=document.getElementById("phone");
 window.roleInput=document.getElementById("role");
 window.rateInput=document.getElementById("rate");
 window.jdInput=document.getElementById("jd");
 window.list=document.getElementById("list");

 render();
}
