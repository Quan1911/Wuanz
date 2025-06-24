/**
 * Hàm upDate được gọi khi người dùng di chuột qua một ảnh.
 * @param {object} previewPic - Phần tử <img> được di chuột qua.
 */
function upDate(previewPic) {
    // Lấy phần tử div hiển thị chính bằng ID.
    var displayDiv = document.getElementById('image');
    
    // Thay đổi ảnh nền của div thành URL của ảnh được di chuột qua.
    displayDiv.style.backgroundImage = "url('" + previewPic.src + "')";
    
    // Thay đổi nội dung văn bản của div thành văn bản 'alt' của ảnh.
    displayDiv.innerHTML = previewPic.alt;
}

/**
 * Hàm undo được gọi khi người dùng di chuột ra khỏi ảnh.
 * Nó sẽ đặt lại div hiển thị về trạng thái ban đầu.
 */
function undo() {
    // Lấy phần tử div hiển thị chính bằng ID.
    var displayDiv = document.getElementById('image');

    // Xóa ảnh nền.
    displayDiv.style.backgroundImage = "url('')";

    // Đặt lại văn bản giữ chỗ ban đầu.
    displayDiv.innerHTML = "Di chuột qua một ảnh bên dưới để hiển thị ở đây.";
}