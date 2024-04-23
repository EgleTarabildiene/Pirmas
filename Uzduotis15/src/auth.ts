import { userInfo } from "./app.js";
import { loadData } from "./loadData.js";
import { User } from "./user.js";

function authExec(method:string){
    fetch(`https://identitytoolkit.googleapis.com/v1/accounts:${method}?key=AIzaSyAASr2IpTiQgqGeYNTr607xkxqqT0n-sWg`,{
    method:"POST",
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },

       body: JSON.stringify({
            email:(<HTMLInputElement>document.getElementById("loginEmail")).value,
            password:(<HTMLInputElement>document.getElementById("loginPassword")).value,
            returnSecureToken:true,
        })
    })
.then((response)=>{
      return response.json();
    })
    .then((data)=>{
        //Patikriname ar gražintame atsakyme yra error (atributas)
        // Jei taip, tuomet nutraukia vykdymą ir išmetame klaidą kuri patenka į catch metodą (apačioje)
        if (typeof data.error !== "undefined"){
            if (data.error.message=="EMAIL_EXISTS"){
                throw new Error("Toks el. pašto adresas jau egzistuoja");
            }
            if (data.error.message=="WEAK_PASSWORD : Password should be at least 6 characters"){
                throw new Error("Per silpnas slaptažodis");
            }

            throw new Error("Vartotojo vardas arba slaptažodis neteisingas");
        }
        console.log(data);
        // Priskiriame vartotojo duomenis kintamajam userInfo
        userInfo.email=data.email;
        //Priskiriame ir token
        userInfo.idToken=data.idToken;
        userInfo.loggedin=true;
        saveUser();
        //Paslėpiame logino sekciją ir parodome duomenų sekciją
       hideLogin();
        //Užkrauname duomenis
        loadData();
    })
    .catch((err:Error)=>{
       let errorDiv= (<HTMLElement>document.getElementById("loginError"));
       errorDiv.style.display="block";
       errorDiv.innerHTML=err.message;
    });
}


// Eksportuojame prisijungimo ir registracijos funkcijas, kurios abi iškviečia authExec f-ją su skirtingais metodais
export function loginExec(){
    authExec("signInWithPassword");
} 

export function registerExec(){
    authExec("signUp");
} 

export function saveUser() {
    localStorage.setItem("userInfo" , JSON.stringify( userInfo));
    
}
export function loadUser() {
    const userStr = localStorage.getItem("userInfo");
    if(userStr != null) {
       const user:User = JSON.parse(userStr);
       userInfo.email=user.email;
       userInfo.idToken=user.idToken;
       userInfo.loggedin=user.loggedin;
      
       loadData();
        hideLogin();
    }
}

export function showLogin(){
    (<HTMLElement>document.getElementById("loginSection")).style.display="block";
        (<HTMLElement>document.getElementById("dataSection")).style.display="none";
}
export function hideLogin(){
(<HTMLElement>document.getElementById("loginSection")).style.display="none";
(<HTMLElement>document.getElementById("dataSection")).style.display="block";
}

export function logOut() {
    localStorage.removeItem("userInfo");
    showLogin();
}

export function deleteAccount() {
    fetch(`https://identitytoolkit.googleapis.com/v1/accounts:delete?key=AIzaSyAASr2IpTiQgqGeYNTr607xkxqqT0n-sWg`,{
  method:"POST",
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },

       body: JSON.stringify({
           idToken:userInfo.idToken,
          
        })
})
.then((result)=>{
return result.json();
})
.then((data)=>{
logOut();
})
}
(<HTMLElement>document.getElementById("loginError")).style.display="none";
(<HTMLElement>document.getElementById("logOut")).onclick=logOut;
(<HTMLElement>document.getElementById("deleteAccount")).onclick=deleteAccount;



export function changeEmail(email:string) {
    fetch(`https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAASr2IpTiQgqGeYNTr607xkxqqT0n-sWg`,{
  method:"POST",
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },

       body: JSON.stringify({
            email:"",
            password:"",
            idToken: userInfo.idToken,
            returnSecureToken:false,
        })
})
.then((result)=>{
return result.json();
})
.then((data)=>{
logOut()
})
}

export function changePasword(password:string) {
    fetch(`https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAASr2IpTiQgqGeYNTr607xkxqqT0n-sWg`,{
  method:"POST",
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },

       body: JSON.stringify({
            email:"",
            password:"",
            idToken: userInfo.idToken,
            returnSecureToken:false,
        })
})
.then((result)=>{
return result.json();
})
.then((data)=>{
logOut()
})
}

(<HTMLElement>document.getElementById("changePassword")).onclick = () => {
       
     (<HTMLElement>document.getElementById("newLoginSection")).style.display ='block';
     
        
        (<HTMLButtonElement>document.getElementById("changePasswordBtn")).onclick = () => {
            let newPassword = (<HTMLInputElement>document.getElementById("newLoginPassword")).value;
            changePasword(newPassword);
        
            (<HTMLElement>document.getElementById("newloginSection")).style.display = 'none';
        }  
    } 


(<HTMLElement>document.getElementById("changeEmail")).onclick = () => {
    ((<HTMLElement>document.getElementById("newLoginSection")).style.display === 'block');
       

        
        (<HTMLButtonElement>document.getElementById('changeEmailBtn')).onclick = () => {
            let newEmail = (<HTMLInputElement>document.getElementById("newLoginEmail")).value;
            changeEmail(newEmail);
          
            (<HTMLElement>document.getElementById("newloginSection")).style.display = 'none';
        }  
     
} 














