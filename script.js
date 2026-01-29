function addReq() {

  const name = document.getElementById("client").value;
  const company = document.getElementById("company").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const role = document.getElementById("role").value;
  const rate = document.getElementById("rate").value;
  const jd = document.getElementById("jd").value;

  if (!name || !company) {
    alert("Client + Company required");
    return;
  }

  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <h3>${role}</h3>

    <p><strong>Client:</strong> ${name}</p>
    <p><strong>Company:</strong> ${company}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Rate:</strong> ${rate}</p>
    <p><strong>JD:</strong> ${jd}</p>

    <select onchange="this.parentElement.style.borderLeft = this.value==='Closed' ? '5px solid red' : '5px solid green'">
      <option>Open</option>
      <option>Submitted</option>
      <option>Interview</option>
      <option>Closed</option>
    </select>
  `;

  document.getElementById("list").appendChild(card);

  document.querySelectorAll("input, textarea").forEach(x => x.value = "");
}
