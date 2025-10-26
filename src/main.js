function changeTab(category) {
    // داده‌های نمونه با جزئیات کارت (می‌تونی تصاویر واقعی بذاری)
    const foods = {
        seafood: [
              { name: "Espresso", desc: "single shot = 30ml of pure espresso", img: "image/dagh.webp", price: "$5", cal: "300ml 359cal" },
  { name: "Americano", desc: "espresso, milk with thick foam", img: "image/usa.webp", price: "$5", cal: "300ml 359cal" },

            { name: "Latte", desc: "espresso shot, milk with little foam", img: "image/lattes.webp", price: "$5", cal: "300ml 359cal" },
            { name: "Capuccino", desc: "espresso shot, milk with lots of foam", img: "image/capoch.webp", price: "$6", cal: "Available +6" }
        ],
        veggie: [
              { name: "Vanilla Latte", desc: "espresso shot, milk and vanilla", img: "image/vanili.webp", price: "$5", cal: "300ml 359cal" },
  { name: "Cafe Latte", desc: "espresso shot, milk, ice", img: "image/icee.webp", price: "$5", cal: "300ml 359cal" },

            { name: "Iced Americano", desc: "espresso shot, cold water,ice", img: "image/american.webp", price: "$5", cal: "300ml 359cal" },
            { name: "Salted Caramel", desc: "espresso shot, caramel sauce,milk", img: "image/karam.webp", price: "$4", cal: "Available +3" }
        ],
        meat: [
              { name: "peanut butter chocolate shake", desc: "chocolate protain whey,peanut butter,milk", img: "image/pinut.webp", price: "$5", cal: "300ml 359cal" },
  { name: "Morniga protain shake", desc: "vanilla protain whey, moringa milk", img: "image/morning.webp", price: "$5", cal: "300ml 359cal" },

            { name: "Protain coffee", desc: "milk, chocolate protain whey, espresso", img: "image/protin.webp", price: "$7", cal: "400cal" },
            { name: "Wellness smoothie", desc: "pro-yogurt, collagen, spirulina, coconut syrup", img: "image/smoti.webp", price: "$8", cal: "500cal" }
        ],
herbal: [ 
     { name: "Persian Latte", desc: "pistachio butter, saffron extract,rose water, hot milk", img: "image/persian.webp", price: "$4", cal: "200ml 150cal" },
 { name: "Hot Chocolate", desc: "cocoa powder, hot milk, foam", img: "image/cocoae.webp", price: "$4", cal: "200ml 150cal" },

            { name: "Matcha Latte", desc: "matcha powder, hot water, milk with foam", img: "image/macha.webp", price: "$4", cal: "200ml 150cal" },
            { name: "Pumpkin spice latte", desc: "pumpkin puree,espresso, milk", img: "image/pumpkin.webp", price: "$6", cal: "300ml 250cal" }
  ]

        

        
       
    };

    const contentDiv = document.getElementById("content");
    contentDiv.innerHTML = ""; // پاک کردن قبلی

    foods[category].forEach(food => {
        // ساخت HTML کارت
        const cardHTML = `
            <div class="card">
                <img src="${food.img}" alt="${food.name}">
                <h3>${food.name}</h3>
                <p>${food.desc}</p>
                <p>${food.cal}</p>
                <p class="price">${food.price}</p>
                <button>Order</button>
            </div>
        `;
        contentDiv.innerHTML += cardHTML; // اضافه کردن کارت
    });

    // فعال کردن تب
    document.querySelectorAll(".tab").forEach(tab => tab.classList.remove("active"));
    document.querySelector(`.tab[onclick="changeTab('${category}')"]`).classList.add("active");
}

// لود اولیه
changeTab("seafood");
