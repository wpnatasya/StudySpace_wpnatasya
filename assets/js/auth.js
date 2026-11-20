/* Authentication shared by the separate login and registration pages. */
function login(event){
  event.preventDefault();
  const email=document.getElementById('loginEmail').value.trim().toLowerCase();
  const password=document.getElementById('loginPassword').value;
  const user=users.find(item=>item.email.toLowerCase()===email&&item.password===password);
  const alertBox=document.getElementById('loginAlert');
  if(!user){alertBox.textContent='The email or password you entered is incorrect. Please try again.';alertBox.classList.remove('d-none');return;}
  currentUser={name:user.name,email:user.email,id:user.id};saveCurrentUser();
  location.href='dashboard.html';
}
function register(event){
  event.preventDefault();
  const name=document.getElementById('regName').value.trim();
  const email=document.getElementById('regEmail').value.trim().toLowerCase();
  const id=document.getElementById('regId').value.trim();
  const password=document.getElementById('regPassword').value;
  const alertBox=document.getElementById('registerAlert');
  if(users.some(item=>item.email.toLowerCase()===email)){alertBox.textContent='An account with this email already exists. Please log in.';alertBox.classList.remove('d-none');return;}
  if(!(email.endsWith('.edu')||email.endsWith('.edu.my'))){alertBox.textContent='Please use your student email address (ending in .edu).';alertBox.classList.remove('d-none');return;}
  const user={name,email,password,id};users.push(user);saveUsers();
  students.push({name,id,email,since:new Date().toLocaleDateString('en-US',{month:'short',year:'numeric'})});
  currentUser={name,email,id};saveCurrentUser();location.href='dashboard.html';
}
function logout(){currentUser=null;saveCurrentUser();location.href='login.html';}
document.addEventListener('DOMContentLoaded',()=>{
 const loginForm=document.getElementById('loginForm');if(loginForm)loginForm.addEventListener('submit',login);
 const registerForm=document.getElementById('registerForm');if(registerForm)registerForm.addEventListener('submit',register);
});
