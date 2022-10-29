/**
 * Click vào button in ra 10 thẻ div màu đỏ, màu xanh
 * Khối 1: Input
 * Khối 2: Các bước xử lý
 *      Tạo hàm và gắn sự kiện vào button
 *      Tạo biến content chứa các danh sách các thẻ div
 *      Tạo vòng lặp với điều kiện biến bước nhảy chạy đến 10
 *              Trong hàm: kiểm tra biến bước nhảy chẵn hay lẻ
 *                         nếu biến bước nhảy là số chẵn thì cộng dồn thẻ div đỏ vào content ngược lại cộng vào dồn thẻ div xanh
 *      Hiển thị kết quả lên UI
 * Khối 3: Output
 */
function taoTheDiv(){
    var content = "";
    for(var i = 1; i <= 10; i++){
        if(i%2 == 0){
            content += "<div style = \"background-color: red; color: white;\" >Div chẵn</div>"
        } else {
            content += "<div style = \"background-color: blue; color: white;\" >Div lẻ</div>"
        }
    }
    console.log("hello")
    document.querySelector("#taoTheResult").innerHTML = content;
}

document.querySelector("#taoTheBtn").onclick = taoTheDiv;