if(JSON.parse(localStorage.getItem("basket")) == null){
    localStorage.setItem("basket", JSON.stringify([]))
    document.getElementById("count").innerHTML = 0
    document.getElementById("price").innerHTML = 0
}else{
    let basket = JSON.parse(localStorage.getItem("basket"))
    let price = 0
    document.getElementById("count").innerHTML = basket.length
    basket.forEach(item => {
        // console.log(Number(item.price),Number(item.count))
        price += Number(item.price) * Number(item.count)
    })
    document.getElementById("price").innerHTML = price.toFixed(2)
}


fetch("db.json")
.then(response => response.json())
.then(data => {
    let html = ""
    data.products.forEach(item => {
        html += 
        `
        <div class="col-lg-3 cell-custom">
            <div class="card-custom">
                <div class="img-div">
                    <img src="${item.image}" alt="">
                </div>
                <div class="bottom">
                    <h3 class="title">${item.name}</h3>
                    <span class="price">${item.price}$</span>
                </div>
                <div class="add-basket-div">
                    <button data-id="${item.id}" data-price="${item.price}" class="add-basket-btn">Add Basket</button>
                </div>
            </div>
        </div>
        `
        document.querySelector("#Products .container .row").innerHTML = html;

        let addBtns = document.querySelectorAll(".add-basket-btn");

        addBtns.forEach(element => {
            element.addEventListener("click", function() {
                let data_id = element.getAttribute("data-id")
                let data_price = element.getAttribute("data-price")
                if(JSON.parse(localStorage.getItem("basket")) == null){
                    localStorage.setItem("basket", JSON.stringify([]))
                }
                
                let basket = JSON.parse(localStorage.getItem("basket"));
                let exist = basket.find(a => {return a.id == data_id})
                console.log(exist)

                if(exist === undefined){
                    basket.push({
                        id: data_id,
                        count: 1,
                        price: data_price
                    })
                }else{
                    exist.count++
                }
                localStorage.setItem("basket", JSON.stringify(basket));
                document.getElementById("count").innerHTML = basket.length

                let price = 0
                basket.forEach(item => {
                    price += Number(item.price) * Number(item.count)
                })
                document.getElementById("price").innerHTML = price.toFixed(2)

            })
        })
    });
})