import { fetchRegistrations } from "./fetchData.js";
import { loadData } from "./loadData.js";
export const showData = (registrationData) => {
    let dataTableBody = document.getElementById("dataTableBody");
    dataTableBody.innerHTML = "";
    registrationData.forEach((reg) => {
        const tr = document.createElement("tr");
        const tdVardas = document.createElement("td");
        tdVardas.innerHTML = reg.vardas;
        const tdPavarde = document.createElement("td");
        tdPavarde.innerHTML = reg.pavarde;
        const tdNo = document.createElement("td");
        tdNo.innerHTML = reg.email;
        const tdV = document.createElement("td");
        tr.appendChild(tdVardas);
        tr.appendChild(tdPavarde);
        tr.appendChild(tdNo);
        tr.appendChild(tdV);
        dataTableBody.appendChild(tr);
        tr.onclick = () => {
            document.getElementById("dataTable").style.display = "none";
            document.getElementById("editForm").style.display = "block";
            document.getElementById("vardasEdit").value = reg.vardas;
            document.getElementById("pavardeEdit").value = reg.pavarde;
            document.getElementById("emailEdit").value = reg.email;
            document.getElementById("yearEdit").value = reg.gimimoMetai.toString();
            document.getElementById("phoneEdit").value = reg.phone;
            if (reg.gender === 'Vyras') {
                document.getElementById('vyrasEdit').checked = true;
                document.getElementById('vyrasEdit').checked = false;
            }
            else {
                document.getElementById('moterisEdit').checked = true;
                document.getElementById('moterisEdit').checked = false;
            }
            document.getElementById("updateRegistration").onclick = () => {
                const upReg = {
                    vardas: document.getElementById("vardasEdit").value,
                    pavarde: document.getElementById("pavardeEdit").value,
                    gimimoMetai: document.getElementById("yearEdit").valueAsNumber,
                    gender: document.querySelector('input[name="genderEdit"]:checked').value,
                    email: document.getElementById("emailEdit").value,
                    phone: document.getElementById("phoneEdit").value,
                };
                fetchRegistrations(`vaikustovykla/$reg.id`, "PUT", "upReg")
                    .then((response) => {
                    return response.json();
                })
                    .then((data) => {
                    document.getElementById("dataTable").style.display = "block";
                    document.getElementById("editForm").style.display = "none";
                    loadData();
                });
            };
            document.getElementById("deleteRegistration").onclick = () => {
                fetchRegistrations(`vaikustovykla/${reg.id}`, "DELETE", null)
                    .then((response) => {
                    return response.json();
                })
                    .then((data) => {
                    document.getElementById("dataTable").style.display = "block";
                    document.getElementById("editForm").style.display = "none";
                    loadData();
                });
            };
        };
    });
};
