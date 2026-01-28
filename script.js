const API="PASTE_SHEETDB_URL";

async function addReq(){

const data={
ClientName:client.value,
Company:company.value,
Email:email.value,
Phone:phone.value,
Role:role.value,
JD:jd.value,
Rate:rate.value,
Status:"Open",
LastUpdated:new Date().toISOString()
};

await fetch(API,{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify(data)
});

load();
}

async function load(){

const r=await fetch(API);
const d=await r.json();

list.innerHTML="";

d.forEach(x=>{
list.innerHTML+=`
<div class="card">
<b>${x.ClientName}</b> – ${x.Role}<br>
Status:
<select onchange="update('${x.id}',this.value)">
<option>Open</option>
<option>Submitted</option>
<option>Interview</option>
<option>Closed</option>
</select>
</div>
`;
});
}

async function update(id,status){

await fetch(API+"/"+id,{
method:"PATCH",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({Status:status,LastUpdated:new Date().toISOString()})
});

alert("Status Updated");
}

load();
