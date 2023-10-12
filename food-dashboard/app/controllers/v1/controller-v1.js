let getData=(isValue)=>document.getElementById(isValue).value;
export let layThongTinTuForm=()=>{
    let ma = getData("foodID");
    let ten = getData("tenMon");
    let loai = getData("loai");
    let gia = getData("giaMon");
    let khuyenMai = getData("khuyenMai");
    let tinhTrang = getData("tinhTrang");
    let hinhMon = getData("hinhMon");
    let moTa = getData("moTa");

    return{
        ma,
        ten,
        loai,
        gia,
        khuyenMai,
        tinhTrang,
        hinhMon,
        moTa,
        tinhGKM: function(){
            return this.gia * (1 - this.khuyenMai);
        }
    };
};