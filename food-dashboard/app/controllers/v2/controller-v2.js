export let renderFoodList=(foodArr) => {
    console.log(" 😂 ~ renderFoodList ~ foodArr:", foodArr);
    
    let contentHTML = "";
    // destructoring 
    foodArr.forEach((food)=>{
    let {ma, ten, loai, gia, khuyenMai, tinhGKM,tinhTrang} = food;

    contentHTML += `
                    <tr>
                            <td>${ma}</td>
                            <td>${ten}</td>
                            <td>${loai}</td>
                            <td>${gia}</td>
                            <td>${khuyenMai}</td>
                            <td>0</td>
                            <td>${tinhTrang}</td>
                            <td>
                            <button class='btn btn-success' onclick='deleteFood(${ma})' >Xoá</button>
                            </td>
                           
                     </tr>
    `
 }
)
document.getElementById("tbodyFood").innerHTML = contentHTML;
};
    