document.querySelector('.hamburger').addEventListener('click', (e) => {
    e.preventDefault();
    
    document.querySelector('.navigation').classList.toggle('active');
    
 });
 document.querySelector("#nav-close").addEventListener("click", () => {
     document.querySelector(".navigation").classList.remove("active");
 });