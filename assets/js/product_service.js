function ProductService(){
    this.getListProductApi = function (){
        return axios({
            url:"https://6183cae791d76c00172d1b5b.mockapi.io/api/products",
            //backend sử dụng method gì thì sử dụng method đó
            method: "GET",
        })

    };
}