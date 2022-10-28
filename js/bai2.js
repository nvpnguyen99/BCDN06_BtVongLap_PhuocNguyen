/**
 * tính tổng: S(n) = x + x^2 + x^3 + ... + x^n
 * Mô hình 3 khối:
 * Khối 1: Input
 *      x, n
 * Khối 2: Các bước xử lý
 *      + Lấy giá trị từ form
 *      + Tính tổng dãy số
 *              tạo biến tổng cộng dồn sum
 *              for(var i; i < n; i++)
 *                  sum += x^i
 *      + Hiển thị kết quả lên UI
 * Khối 3: Output
 *      sum
 */

function thucHanhBai2(){
    var x = document.querySelector("#soX").value;
    var n = document.querySelector("#soN").value;
    
    document.querySelector("#tinhTongResult").innerHTML = "Tổng dãy số: " + tinhTongDaySo(x,n);
}

function tinhTongDaySo(x,n) {
    var sum = 0;
    for(var i = 1; i <= n; i++){
        sum += Math.pow(x,i);
    }
    return sum;
}

document.querySelector("#tinhTongBtn").onclick = thucHanhBai2;