function messinger() {
    alert('xin chao');
}

function nhapSo() {
    var a = parseInt(prompt('nhap vao mot gia tri so'));
    var b = a+1;
    document.write(b + ' :la so sau khi cong them 1');
}

function nhapThamSo(a,b) {
    var a =parseInt(prompt('Nhap vao so thu nhat'));
    var b =parseInt(prompt('Nhap vao so thu 2'));
    if(a>b){
        document.write('So thu nhat lon hon so thu hai.');
    }else{
        var c = a+b;
        document.write('tong hai so la ' + c);
    }
}

function taoMang(n) {
    var ckeck = true;
    var b = ['Polaris', 'Andebaran', 'Deneb', 'Vega', 'Altair', 'Dubhe', 'Reguslus'];
    var c = ['Ursa Minor', 'Tarurus', 'Cygnus', 'Lyra', 'Aquila', 'Ursa Major', 'Leo'];
    for(i=0; i<b.length; i++){
        if(n === b[i]) {
            document.write(c[i]);
            ckeck = false;
        }
    }
    if(ckeck === true){
        document.write('khong co tu nay');
    }
}