/**
 * Bài 1: Tìm số nguyên dương nhỏ nhất sao cho 1+2+3+...+n > 10000
 * Mô hình 3 khối
 * Khối 1: Input
 * 
 * Khối 2: Các bước xử lý
 *      Tạo hàm và gắn sự kiện cho button
 *      Tạo biến tổng tích luỹ sum, biến lưu trữ số nhỏ nhất
 *      Tạo vòng lặp for với điều kiện lặp là sum <= 10000
 *              trong vòng lặp: sum += count
 *                              count ++     
 * Khôi 3: Output
 *      số n sao cho 1+2+3+...+n > 10000
 */

function timSo(){
    var num = 0;
    var sum = 0;
    for(var i = 1; sum < 10000; i++){
        sum += i;
        num = i;
    }
    document.querySelector("#timSoResult").innerHTML = "Số nhỏ nhất thoả điều kiện: " + num;
}

document.querySelector("#timSoBtn").onclick = timSo;