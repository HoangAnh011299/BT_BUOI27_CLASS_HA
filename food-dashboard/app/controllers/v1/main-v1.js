import {layThongTinTuForm} from "./controller-v1.js"
let themMon =()=>{
    let data = layThongTinTuForm();
    //DESTRUCTORING
    let {ma,ten,loai,gia, khuyenMai,tinhTrang,hinhMon,moTa} = data;
    //SHOW DATA LEN FORM
    document.getElementById("spMa").innerText = ma;
    document.getElementById("spTenMon").innerText= ten;
    document.getElementById("spLoaiMon").innerText= loai;
    document.getElementById("spGia").innerText = gia;
    document.getElementById("spKM").innerText = khuyenMai +"%";
    document.getElementById("spTT").innerText = tinhTrang == "0" ? "hết" : "còn";
    document.getElementById("imgMonAn").src = hinhMon;
    document.getElementById("pMoTa").innerText = moTa;
    document.getElementById("spGiaKM").innerText = data.tinhGKM();
}
window.themMon = themMon;