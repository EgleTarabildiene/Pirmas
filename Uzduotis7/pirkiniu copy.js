//Pasiimam elementus iš HTML
const nameInp = document.getElementById("name");
const quantityInp = document.getElementById("quantity");
const addBtn = document.getElementById("add");
const resultList = document.getElementById("result");
const clearBtn = document.getElementById("clear");

let products = [];

const saveProducts = () => {
    localStorage.setItem("products", JSON.stringify(products));
}

const loadProducts = () => {
    const lsProducts = localStorage.getItem("products");
    if (lsProducts != null) {
        products = JSON.parse(lsProducts);
        showProducts();
    }
}

const showProducts = () => {
    resultList.innerHTML = "";
    products.forEach((p, i) => {
        const productLi = document.createElement("li");
        productLi.className = "list-group-item";
        productLi.textContent = `${p.name} (${p.quantity})`;
        resultList.appendChild(productLi);


        //sukuriam HTML button elementa
        const deleteBtn = document.createElement("button")

        //priskiriam atributa textConent
        deleteBtn.textContent = "istrinti";

        //stilizuojame migtuka
        deleteBtn.className = "btn btn-info float-end btn-sm";

        deleteBtn.onclick = () => {
            products.splice(i, 1);
            saveProducts();
            showProducts();
        };


        //migtuka priskiriame li (productLI) elementui
        productLi.appendChild(deleteBtn);

    });
}

const addProduct = () => {
    //Paimame reiksmes is laukeliu
    const name = nameInp.value;
    const quantity = quantityInp.value;
    nameInp.value = "";
    quantityInp.value = "";
    products.push({
        name: name,
        quantity: quantity
    });
    showProducts();
    saveProducts();
}

const clear = () => {
    products = [];
    saveProducts();
    showProducts();
}

addBtn.onclick = addProduct;
clearBtn.onclick = clear;

loadProducts();