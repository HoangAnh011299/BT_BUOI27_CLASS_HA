import {https} from "../services/service.js"
import {layThongTinTuForm} from "../v1/controller-v1.js"
import { renderFoodList } from "./controller-v2.js"
let fechFoodList = () =>{
https
.get("/food")
.then((res) => {
    renderFoodList(res.data);
})
.catch((err) => {
    console.log(err);
})
}
//lần đầu load trang
fechFoodList(); 

function deleteFood(id){
    https
    .delete(`/food/${id}`)
    .then((res)=>{
        fechFoodList();
        //sau khi xoá thành công => gọi laị api lấy data mới nhất
        console.log(res);
    })
    .catch((err)=>{
        console.log(err);
    })

}
window.deleteFood = deleteFood;

window.addFood = () =>{
    let food = layThongTinTuForm();
    https
    .delete("/food",food)
    .then((res)=>{
        fechFoodList();
        //tắt tab khi thêm thành công
        console.log(res);
        $("#exampleModal").modal("hide");
    })
    .catch((err)=>{
        console.log(err);
    })
}