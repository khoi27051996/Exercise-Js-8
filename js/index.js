/**
 * INPUT: CHO PHÉP NGƯỜI DÙNG NHẬP VÀO CÁC SỐ NGUYÊN
 * Tạo thành 1 mảng
 */

var array = [];

document.querySelector('.btn').onclick = function () {
    var numberInput = document.querySelector('.numberInput').value * 1;
    array.push(numberInput)

    var numberOutput = document.querySelector('.numberOutput')
    numberOutput.innerHTML += numberInput + " "
}




// Bài 1: Tính tổng các số trong mảng:

/**
 * Process : dom tới input gán phép cộng trong các  trong mảng 
 * 
 * Output: Show ra kết quả
 */
document.getElementById('btnEx1').onclick = function () {
    var sum = 0
    for (var i = 0; i < array.length; i++) {
        sum += array[i]
    }
    document.getElementById('show1').innerHTML = sum
}

// Bài 2: Đếm  xem có bao nhiêu số dương
/**
 * Process : xét trong mảng được tạo , sử dụng phép gán để đếm xem có bao nhiêu con số trong mảng
 * 
 * Output: Show ra có xem bao nhiêu số dương trong mảng
 */
document.getElementById('btnEx2').onclick = function () {
    var dem = 0
    for (var i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            dem++
        }
    }
    document.getElementById('show2').innerHTML = dem
}

// Bài 3: Tìm số nhỏ nhất trong mảng:
/**
 * Process: cho mặc định 1 biến min , so sánh giá trị thứ tự lần lượt ở trong mảng, rồi show kq
 * 
 * Output: Thể hiện số nhỏ nhất trong mạng ra màn hình
 */
document.getElementById('btnEx3').onclick = function () {
    var min = array[0]
    for (var i = 0; i < array.length; i++) {
        if (min > array[i]) {
            min = array[i]
        }
    }
    document.getElementById('show3').innerHTML = min
}

//Bài 4: Tìm Số Dương nhỏ nhất trong mảng:
/**
 * Process: Cho mặc định 1 biến min, so sánh giá trị từng số trong mảng : điều kiện số đó nhỏ nhất và lớn hơn 0
 * 
 * Output: Show KQ
 */

document.getElementById('btnEx4').onclick = function () {
    var min = Infinity
    for (var i = 0; i < array.length; i++) {
        if (array[i] >= 0 && array[i] < min) {
            min = array[i]
        }
    }
    document.getElementById('show4').innerHTML = min
}

//Bài 5: Tìm Số chẵn cuối cùng trong mảng:
/**
 * Process: xét từng giá trị trong mảng xem số nào chia hết cho 2, số nào chia hết cho 2 rồi nằm ở vị trí cuối cùng thì show số đó ra. nếu mảng k có số chẵn show ra -1
 * 
 * Output: Show KQ
 */
document.getElementById('btnEx5').onclick = function () {
    var number = ''
    for (var i = array.length - 1; i >= 0; i--) {
        if (array[i] % 2 === 0) {
            number = array[i]
            break
        } else {
            number = -1
        }
    }
    document.getElementById('show5').innerHTML = number
}

// Bài 6 : Đổi chỗ theo vị trí người nhập 
/**
 * Process: sử dụng hàm splice: để đổi chỗ 
 * 
 * OutPut: show KQ
 */
document.getElementById('btnEx6').onclick = function () {
    var no1 = document.getElementById('no1').value * 1
    var no2 = document.getElementById('no2').value * 1
    var arrayNew = []
    arrayNew = arrayNew.concat(array)
    arrayNew.splice(no1 - 1, 0, arrayNew.splice(no2 - 1, 1)[0])
    //Có thể hiểu câu lệnh trên như sau: thay đổi chỗ phân tử bằng thuộc tính splice : Bắt đầu là sử dụng splice để thêm phân tử : vị trí index muốn thêm phân tử (ở đây vị trí phụ thuộc vào người nhập) + Số phân tử muốn số bắt đầu từ index (vì mình muốn đổi chỗ theo người nhập nên chỗ này để = 0) + giá trị muốn thêm ( dùng tiếp thuộc tính splice : nhưng lần này để xóa vị trí đổi)  [0] : thêm để giá trị đổi có thể hiểu được : nếu k có [0} : giá trị sẽ bị underfined
    document.getElementById('show6').innerHTML = arrayNew
}

//Bài 7 : Sắp xếp thứ tự theo thứ tự tăng dần:
/**
 * Process :Sử dụng vòng lập for trong for để so sánh và đổi chỗ các phần tử
 * 
 * OutPut: showKQ
 */

document.getElementById('btnEx7').onclick = function () {
    var newArray = []
    newArray = newArray.concat(array)
    for (var i = 0; i < newArray.length; i++) {
        for (var j = 0; j < newArray.length; j++) {
            if (newArray[i] < newArray[j]) {
                var tmp = newArray[i]
                newArray[i] = newArray[j]
                newArray[j] = tmp
            }
        }
    }
    document.getElementById('show7').innerHTML = newArray
}

//Bài 8 : Tìm số nguyên tố đầu tiên trong mảng:
/**
 * Process: sử dụng vòng lập for tìm ra ước của phân tử , nếu số nào có lớn hơn 2 ước thì là số nguyên tố
 * 
 * outPut: Show KQ
 */

function KiemTraSNT(n) {
    if (n < 2) {
        return false
    }
    for (var i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false
        }
    }
    return true
}

document.getElementById('btnEx8').onclick = function () {
    var ketQua = ''
    for (var i = 0; i < array.length; i++) {
        var checkSNT = KiemTraSNT(array[i])
        if (checkSNT) {
            ketQua = array[i]
            break
        } else {
            ketQua = -1
        }
    }
    document.getElementById('show8').innerHTML = ketQua
}
// Bài 9 : Đếm Số Nguyên :

/**
 *Process: sử dụng vòng lập for xét xem giá trị của phân tử  để kiểm tra xem số nào là số nguyên số nào là số thực

 OutPut: show KQ
 */

var newArray2 = []
document.getElementById('addNum').onclick = function () {
    var no3 = document.getElementById('no3').value * 1;
    newArray2.push(no3)
    document.getElementById('show9_2').innerHTML = newArray2
}
document.getElementById('addNum2').onclick = function () {
    newArray2 = newArray2.concat(array)
    document.getElementById('show9').innerHTML = 'Mảng Mới Là : ' + '[' + newArray2 + ']'
}
document.getElementById('btnEx9').onclick = function () {
    var ketQua = ''
    for (var i = 0; i < newArray2.length; i++) {
        var checkSN = Number.isInteger(newArray2[i]);
        if (checkSN == true) {
            ketQua += ' ' + newArray2[i]
        }
    }
    document.getElementById('show9_1').innerHTML = 'Số NGUYÊN là : ' + ketQua
}

//Bài !0 : So sánh số dương với số âm trong mảng 
/**
 * Process : Kiểm tra xem số nhập vô mảng là số âm hay số dương , rồi so sánh giá trị
 * 
 * Output : show KQ
 */

document.getElementById('btnEx10').onclick = function () {
    var soDuong = 0
    var soAm = 0
    var ketQua = ''
    for (var i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            soDuong++
        } else {
            soAm++
        }
        if (soDuong > soAm) {
            ketQua = 'Số Dương trong mảng nhiều hơn Số Âm'
        } else {
            ketQua = ' Số Âm trong mảng nhiều hơn Số Dương'
        }
        if (soAm == soDuong) {
            ketQua = 'Số Âm và Số Dương trong mảng bằng nhau'
        }
    }
    document.getElementById('show10').innerHTML = ketQua
}