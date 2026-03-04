
function changeImage(el){
document.getElementById("mainImage").src = el.src;
}

document.querySelectorAll(".faq-question").forEach(btn=>{
btn.addEventListener("click",()=>{
let ans = btn.nextElementSibling;
ans.style.display = ans.style.display === "block" ? "none" : "block";
});
});
