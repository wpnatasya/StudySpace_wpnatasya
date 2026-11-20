/* Ui module. */
function statusBadge(status){return `<span class="status-pill status-${status.toLowerCase()}">${status}</span>`}
function toast(message){document.getElementById('toastMessage').textContent=message;bootstrap.Toast.getOrCreateInstance(document.getElementById('appToast'),{delay:3200}).show()}
function escapeHTML(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
document.addEventListener('DOMContentLoaded',()=>{const todayInput=document.getElementById('bookingDate');if(todayInput)todayInput.min=dateOffset(0)});
