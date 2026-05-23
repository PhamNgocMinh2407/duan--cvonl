
const menuBtn =
document.querySelector(".menu-btn");

const navLinks =
document.querySelector(".nav-links");
if(menuBtn && navLinks){

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });

}

const fileInput =
document.getElementById("fileInput");

const preview =
document.getElementById("preview");

const avatarWrapper =
document.getElementById("avatarWrapper");

if(avatarWrapper && fileInput && preview){

    avatarWrapper.addEventListener("click", () => {

        fileInput.click();

    });

   fileInput.addEventListener("change", function(){

        const file = this.files[0];

        if(file){

            const imageURL =
            URL.createObjectURL(file);
            preview.src = imageURL;
           preview.style.display = "block";
            avatarWrapper.classList.add(
                "has-image"
            );

        }

    });

}