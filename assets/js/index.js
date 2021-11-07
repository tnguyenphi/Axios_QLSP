var service = new ProductService();


function getEle(id){
    return document.getElementById(id);
}
function getListProduct() {
    service.getListProductApi()            
    // thành công trả về then
    .then(function (result) {
        console.log(result.data);
        renderData(result.data);
    })
    // lỗi thì catch
    .catch(function (error) {
        console.log(error);
    });
}
getListProduct();

function renderData(data) {
    var html = "";
    data.forEach(function (item) {
        html += `<tr>   
            <td>${item.id}</td>
            <td>${item.tenSP}</td>
            <td>${item.gia}</td>
            <td><img src="../../assets/img/${item.hinhAnh}" class="card-img-top" alt="..."></td>
            <td>${item.moTa}</td>
            <td><button class ="btn btn-danger">Xóa sản phẩm</button></td>
        </tr>`;
    });
    getEle("tblDanhSachSP").innerHTML = html;
}