let merch = [{
        id: 1,
        name: "White Shirt",
        size: "L",
        color: "White",
        price: 2000,
        image: "male1.jpg",
        description: "Classic White shirt",
    },
    {
        id: 2,
        name: "Dotted Shirt",
        size: "M",
        color: "Dark Blue",
        price: 2500,
        image: "male2.jpg",
        description: "White Dotted  Blue Shirt",
    },

    {
        id: 3,

        name: "Hoodie",
        size: "l",
        color: "Light Brown",
        price: 3000,
        image: "male3.jpg",
        description: "Light Brown Hoodie",
    },

    {
        id: 4,
        name: "Coat for Women",
        size: "L",
        color: "Orange Red",
        price: 3500,
        image: "female1.jpg",
        description: "Red Orange shaded Coat for Women",
    },

    {
        id: 5,
        name: "Paired Dress",
        size: "M",
        color: "orange",
        price: 5000,
        image: "famale2.jpg",
        description: "Party wear orange tuxedo",
    },

    {
        id: 6,
        name: "White Lehenga",
        size: "M",
        color: "White",
        price: 6750,
        image: "female3.jpg",
        description: "Beautiful Full set white Lehenga",
    },
    {
        id: 7,
        name: "Gray Suit",
        size: "M",
        color: "Gray",
        price: 7000,
        image: "male4.jpg",
        description: "Good looking Professional Suit",
    },
    {
        id: 8,
        name: "Striped Suit",
        size: "S",
        color: "Whhite",
        price: 8800,
        image: "male5.jpg",
        description: "Blue Stripes on White Suit",
    },
    {
        id: 9,
        name: "Rich Black Suit",
        size: "L",
        color: "Black",
        price: 10300,
        image: "male6.jpg",
        description: "Classy Royal Black",
    },
    {
        id: 10,
        name: "Floral Gown",
        size: "M",
        color: "Blue and White",
        price: 2300,
        image: "female4.jpg",
        description: "Beautiful yet simple gown",
    },
    {
        id: 11,
        name: "Darling Red Gown",
        size: "M",
        color: "Red",
        price: 6000,
        image: "female5.jpg",
        description: "Sizzling Red Gown",
    },
    {
        id: 12,
        name: "Full Gown",
        size: "M",
        color: "Dark Red",
        price: 6000,
        image: "female6.jpg",
        description: "Stunning Red Gown",
    },
];
let cart = [];
let count = 0;

function displaymerch(merchd, type = "main", place = "card") {
    console.log(merchd);
    let strmerch = "";
    let arrmerch = "";
    merchd.forEach(function(ele, index) {
        if (type == "main") {
            strmerch = ` <div class="productcardbg">
        <div class="image">
          <img src="${ele.image}" width="100%" />
        </div>
        <div>
        <h3 style="font-family : Geneva, Verdana, sans-serif; padding-left : 10px">${ele.name}</h3>
        <p>Size : ${ele.size}</p>
        <p>Color : ${ele.color}</p>
        <p>price : ${ele.price}</p>
        <h5 style="font-family : Geneva, Verdana, sans-serif; padding-left : 10px ;padding-top : 10px">${ele.description}</h5>
        <p style="padding-top: 5px">
          <button class="buttonbg" onclick="addToCart(${ele.id})">Add to Cart</button>
        </p>
      </div>
      </div>`;
            arrmerch += strmerch;
        }

        if (type == "cartd") {
            strmerch = ` <div class="productcardbg">
        <div class="image">
          <img src="${ele.image}" width="100%" />
        </div>
        <div>
        <h3 style="font-family : Geneva, Verdana, sans-serif; padding-left : 10px">${ele.name}</h3>
        <p>Size : ${ele.size}</p>
        <p>Color : ${ele.color}</p>
        <p>price : ${ele.price}</p>
        <h5 style="font-family : Geneva, Verdana, sans-serif; padding-left : 10px ;padding-top : 10px">${ele.description}</h5>
        <p style="padding-top: 5px">
          <button class="buttonbg" onclick="deletemerch(${ele.id})">Delete item</button>
        </p>
      </div>
      </div>`;

            arrmerch += strmerch;

        }
    });

    document.getElementById(place).innerHTML = arrmerch;

}


function getProductByID(mercha, id) {
    return mercha.find(function(ele) {
        return ele.id == id;
    });
}
let flag = false;

function addToCart(id) {
    flag = false;
    let item = getProductByID(merch, id);

    cart.forEach(function(element) {
        if (element.id == item.id) {
            flag = true;

        }


    })
    if (flag) {
        alert("Manners Maketh Man!\ndont add the same product twice");
        return 0;
    }
    cart.push(item);
    count += 1;
    document.getElementById("numb").innerText = count;
    let type = "cartd";
    let place = "cartcard";
    displaymerch(cart, type, place);

}


function search() {
    console.log("calling");
}

function deletemerch(id) {
    let item = getProductByID(merch, id);
    let index = cart.findIndex(function(item1) {
        return item1.id == id;
    });
    cart.splice(index, 1);
    count -= 1;
    document.getElementById("numb").innerText = count;
    let type = "cartd";
    let place = "cartcard";
    displaymerch(cart, type, place);
}

function filter() {
    let minv = document.getElementById("minp").value;
    let maxv = document.getElementById("maxp").value;
    let items = merch.filter(function(itemsl) {
        return itemsl.price >= minv && itemsl.price <= maxv;
    })
    displaymerch(items);
    document.getElementById("minp").value = "";
    document.getElementById("maxp").value = "";
}

function search() {
    let str = document.getElementById("serstr").value;
    console.log(str);
    let items = merch.filter(function(ele) {
        return ele.name.indexOf(str) != -1;
    });
    displaymerch(items);


}
displaymerch(merch);