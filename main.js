// ===== MENU MOBILE =====

const menuBtn =
document.querySelector(".menu-btn");

const navLinks =
document.querySelector(".nav-links");

if(menuBtn && navLinks){

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });

}

// ===== AVATAR UPLOAD + SAVE =====

const fileInput =
document.getElementById("fileInput");

const preview =
document.getElementById("preview");

const avatarWrapper =
document.getElementById("avatarWrapper");

if(avatarWrapper && fileInput && preview){

    // ===== LOAD AVATAR ĐÃ LƯU =====

    const savedAvatar =
    localStorage.getItem("avatar");

    if(savedAvatar){

        preview.src = savedAvatar;

        preview.style.display =
        "block";

        avatarWrapper.classList.add(
            "has-image"
        );

    }

    // ===== CLICK AVATAR =====

    avatarWrapper.addEventListener("click", () => {

        fileInput.click();

    });

    // ===== CHỌN ẢNH =====

    fileInput.addEventListener("change", function(){

        const file = this.files[0];

        if(file){

            const reader =
            new FileReader();

            reader.onload = function(e){

                const imageData =
                e.target.result;

                // cập nhật ảnh

                preview.src =
                imageData;

                preview.style.display =
                "block";

                avatarWrapper.classList.add(
                    "has-image"
                );

                // lưu ảnh

                localStorage.setItem(
                    "avatar",
                    imageData
                );

            };

            reader.readAsDataURL(file);

        }

    });

}