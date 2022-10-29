/**
 * Nhập vào n. Tính giai thừa 1*2*...n
 * Khối 1: Input
 *      n
 * Khối 2: Các bước xử lý
 *      tạo hàm và gắn vào sự kiện của button
 *      lấy giá trị từ form
 *      tạo biến tính giai thừa rs
 *      tạo vòng for với điều kiện lặp: i <= n
 *              trong vòng lặp: rs *= i
 * Khối 3: Output
 *      giai thừa n: rs
 */

function tinhGiaiThua(){
    var n = document.querySelector("#numberN").value;
    var rs = 1;
    for(var i = 1; i <= n; i++){
        rs *= i;
    }
    document.querySelector("#tinhGiaiThuaResult").innerHTML = "Giai thừa: " + rs;
}

document.querySelector("#tinhGiaiThuaBtn").onclick = tinhGiaiThua