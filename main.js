const products = {
    data: [
        {
            productName: "Regular White T-Shirt",
            category: "Topwear",
            price: 40,
            image: "./images/white-Tshirt.jpg"
        },

        {
            productName: "Beige Short Skirt",
            category: "Bottomwear",
            price: 54,
            image: "./images/short-skirt.jpg"
        },

        {
            productName: "Sporty SmartWatch",
            category: "Watch",
            price: 30,
            image: "./images/sporty-smartwatch.jpg"
        },

        {
            productName: "Basic Knitted Top",
            category: "Topwear",
            price: 26,
            image: "./images/knitted-top.jpg"
        },

        {
            productName: "Black Leather Jacket",
            category: "Jacket",
            price: 87,
            image: "./images/black-leather-jacket.jpg"
        },

        {
            productName: "Stylish Pink Trousers",
            category: "Bottomwear",
            price: 121,
            image: "./images/pink-trousers.jpg"
        },

        {
            productName: "Bottom Men's Jacket",
            category: "Jacket",
            price: 36,
            image: "./images/men-jacket.jpg"
        },

        {
            productName: "Comfy Gray Pants",
            category: "Bottomwear",
            price: 70,
            image: "./images/comfy-gray-pants.jpg"
        }
    ]
};

for (let i of products.data) {
    //Create Card 
    let card = document.createElement('div');
    //Card should have category and should stay hidden initially
    card.classList.add('card', i.category);
    //img div
    let imageContainer = document.createElement("div");
    imageContainer.classList.add('image-container');
    //Tag image
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imageContainer.appendChild(image);
    card.appendChild(imageContainer);


    //Create container
    let container = document.createElement('div');
    container.classList.add('container');

    //Create product name
    let name = document.createElement("h5");
    name.classList.add('product-name');
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
    //Create price
    let price = document.createElement("h6");
    price.innerText = "$" + i.price;
    container.appendChild(price)



    card.appendChild(container);
    // Gắn card vào thẻ div#products
    document.getElementById("products").appendChild(card);
}

function filterProduct(value) {
    const buttons = document.querySelectorAll(".button-value");
    buttons.forEach(button => {
        if (button.innerText.toUpperCase() == value.toUpperCase()) {
            button.classList.add("active");
        }
        else {
            button.classList.remove("active");
        }
    });

    const elements = document.querySelectorAll(".card");

    elements.forEach(element => {
        if (value == "All") {
            element.classList.remove("hidden");
        }
        else {
            if (element.classList.contains(value)) {
                element.classList.remove("hidden");
            }
            else {
                element.classList.add("hidden");
            }
        }
    })
}

//Search button click
document.getElementById("search").addEventListener("click", () => {
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");

    elements.forEach((element, index) => {
        if (element.innerText.includes(searchInput.toUpperCase())) {
            cards[index].classList.remove("hidden");
        }
        else {
            cards[index].classList.add("hidden");

        }
    })
})

//Initially display all product
document.onload = () => {
    filerProduct("All");
}
