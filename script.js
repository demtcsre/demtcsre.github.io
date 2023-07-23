document.addEventListener("DOMContentLoaded", () =>{
    document.querySelectorAll(".control").forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
        if (document.querySelector(".theme-btn").className == "theme-btn rotated") {
            document.querySelector(".theme-btn").classList.remove("rotated");
        }else document.querySelector(".theme-btn").classList.add("rotated");
    })
})