const client = document.getElementById("client");
const company = document.getElementById("company");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const role = document.getElementById("role");
const rate = document.getElementById("rate");
const jd = document.getElementById("jd");
const list = document.getElementById("list");
const stats = document.getElementById("stats");

loadSaved();

function addReq() {

  if (!client.value || !company.value) {
    alert("Client + Company required");
    return;
  }

  const lead = {
    name: client.value,
    company: company.value,
    email: email.value,
    phone: phone.value,
    role: role.value,
    rate: rate.value,
    jd: jd.value,
    status: "Open"
  };

  const leads = JSON.parse(localStorage.getItem("leads") || "[]");
  leads.push(lead);
  localStorage.setItem("leads", JSON.stringify(leads));

  clearInputs();
  render();
}

function render() {

  const leads = JSON.parse(localStorage.getItem("leads") || "[]");

  list.innerHTML = "";

  let open = 0, submitted = 0, interview = 0, closed = 0;

  leads.forEach((l, i) => {

    if (l.status === "Open") open++;
    if (l.status === "Submitted") submitted++;
    if (l.status === "Interview") interview++;
    if (l.status === "Closed") closed++;

    list.innerHTML += `
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

  stats.innerHTML = `
    <div class="card">Open: ${open}</div>
    <div class="card">Submitted: ${submitted}</div>
    <div class="card">Interview: ${interview}</div>
    <div class="card">Closed: ${closed}</div>
  `;
}

function update(i, val) {
  const leads = JSON.parse(localStorage.getItem("leads"));
  leads[i].status = val;
  localStorage.setItem("leads", JSON.stringify(leads));
  render();
}

function del(i) {
  const leads = JSON.parse(localStorage.getItem("leads"));
  leads.splice(i, 1);
  localStorage.setItem("leads", JSON.stringify(leads));
  render();
}

function clearInputs() {
  client.value = "";
  company.value = "";
  email.value = "";
  phone.value = "";
  role.value = "";
  rate.value = "";
  jd.value = "";
}

function loadSaved() {
  render();
}
