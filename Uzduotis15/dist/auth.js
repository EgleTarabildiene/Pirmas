import { userInfo } from "./app.js";
import { loadData } from "./loadData.js";
function authExec(method) {
    fetch(`https://identitytoolkit.googleapis.com/v1/accounts:${method}?key=AIzaSyAASr2IpTiQgqGeYNTr607xkxqqT0n-sWg`, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: document.getElementById("loginEmail").value,
            password: document.getElementById("loginPassword").value,
            returnSecureToken: true,
        })
    })
        .then((response) => {
        return response.json();
    })
        .then((data) => {
        //Patikriname ar gražintame atsakyme yra error (atributas)
        // Jei taip, tuomet nutraukia vykdymą ir išmetame klaidą kuri patenka į catch metodą (apačioje)
        if (typeof data.error !== "undefined") {
            if (data.error.message == "EMAIL_EXISTS") {
                throw new Error("Toks el. pašto adresas jau egzistuoja");
            }
            if (data.error.message == "WEAK_PASSWORD : Password should be at least 6 characters") {
                throw new Error("Per silpnas slaptažodis");
            }
            throw new Error("Vartotojo vardas arba slaptažodis neteisingas");
        }
        console.log(data);
        // Priskiriame vartotojo duomenis kintamajam userInfo
        userInfo.email = data.email;
        //Priskiriame ir token
        userInfo.idToken = data.idToken;
        userInfo.loggedin = true;
        saveUser();
        //Paslėpiame logino sekciją ir parodome duomenų sekciją
        hideLogin();
        //Užkrauname duomenis
        loadData();
    })
        .catch((err) => {
        let errorDiv = document.getElementById("loginError");
        errorDiv.style.display = "block";
        errorDiv.innerHTML = err.message;
    });
}
// Eksportuojame prisijungimo ir registracijos funkcijas, kurios abi iškviečia authExec f-ją su skirtingais metodais
export function loginExec() {
    authExec("signInWithPassword");
}
export function registerExec() {
    authExec("signUp");
}
export function saveUser() {
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
}
export function loadUser() {
    const userStr = localStorage.getItem("userInfo");
    if (userStr != null) {
        const user = JSON.parse(userStr);
        userInfo.email = user.email;
        userInfo.idToken = user.idToken;
        userInfo.loggedin = user.loggedin;
        loadData();
        hideLogin();
    }
}
export function showLogin() {
    document.getElementById("loginSection").style.display = "block";
    document.getElementById("dataSection").style.display = "none";
}
export function hideLogin() {
    document.getElementById("loginSection").style.display = "none";
    document.getElementById("dataSection").style.display = "block";
}
export function logOut() {
    localStorage.removeItem("userInfo");
    showLogin();
}
export function deleteAccount() {
    fetch(`https://identitytoolkit.googleapis.com/v1/accounts:delete?key=AIzaSyAASr2IpTiQgqGeYNTr607xkxqqT0n-sWg`, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            idToken: userInfo.idToken,
        })
    })
        .then((result) => {
        return result.json();
    })
        .then((data) => {
        logOut();
    });
}
document.getElementById("loginError").style.display = "none";
document.getElementById("logOut").onclick = logOut;
document.getElementById("deleteAccount").onclick = deleteAccount;
/*

export function changeEmail() {
    fetch(`https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAASr2IpTiQgqGeYNTr607xkxqqT0n-sWg`,{
  method:"POST",
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },

       body: JSON.stringify({
            email:"",
            password:"",
            userInfo.idToken
            returnSecureToken:false,
        })
})
.then((result)=>{
return result.json();
})
.then((data)=>{
showLogin();
})
}

export function changePasword() {
    fetch(`https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAASr2IpTiQgqGeYNTr607xkxqqT0n-sWg`,{
  method:"POST",
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },

       body: JSON.stringify({
            email:"";
            password:"";
            userInfo.idToken
            returnSecureToken:false,
        })
})
.then((result)=>{
return result.json();
})
.then((data)=>{
showLogin();
})
}
*/
document.getElementById("changePassword").onclick = () => {
    document.getElementById("dataSection").style.display = "none";
    document.getElementById("newLoginSection").style.display = 'block';
    document.getElementById('changePasswordBtn').onclick = () => {
        let newPassword = document.getElementById("newPassword").value;
        changePassword({ password: newPassword });
        document.getElementById("newLoginPassword").value = '';
        document.getElementById("newloginSection").style.display = 'none';
    };
};
document.getElementById("changeEmail").onclick = () => {
    (document.getElementById("newLoginSection").style.display === 'block');
    document.getElementById("newLoginSection").style.display = 'block';
    document.getElementById('changeEmailBtn').onclick = () => {
        const newEmail = document.getElementById('newEmail').value;
        changeEmail({ email: newEmail });
        document.getElementById("newLoginEmail").value = '';
        document.getElementById("newloginSection").style.display = 'none';
    };
};
