const fileInput = document.getElementById("fileInput");
const preview = document.getElementById("preview");
const avatarWrapper = document.getElementById("avatarWrapper");
const uploadOverlay = document.getElementById("uploadOverlay");

// click avatar để mở chọn file
avatarWrapper.addEventListener("click", () => {
    fileInput.click();
});

// khi chọn ảnh
fileInput.addEventListener("change", function () {

    const file = this.files[0];

    if (file) {

        const imageURL = URL.createObjectURL(file);

        preview.src = imageURL;
        preview.style.display = "block";

        // thêm class để ẩn nút chọn ảnh
        avatarWrapper.classList.add("has-image");
    }
});