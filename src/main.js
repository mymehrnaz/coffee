function changeTab(category) {
    // داده‌های نمونه با جزئیات کارت (می‌تونی تصاویر واقعی بذاری)
    const foods = {
        seafood: [
              { name: "Espresso", desc: "Ramen, lotus root, daikon radish...", img: "image/espresso.jpg", price: "$5", cal: "300ml 359cal" },
  { name: "Americano", desc: "Ramen, lotus root, daikon radish...", img: "image/americano.jpg", price: "$5", cal: "300ml 359cal" },

            { name: "Latte", desc: "Ramen, lotus root, daikon radish...", img: "image/latte.jpg", price: "$5", cal: "300ml 359cal" },
            { name: "Capuccino", desc: "Ramen, vegetable broth...", img: "image/capocciano.jpg", price: "$6", cal: "Available +6" }
        ],
        veggie: [
              { name: "Vanilla Latte", desc: "Ramen, lotus root, daikon radish...", img: "image/vannila.jpg", price: "$5", cal: "300ml 359cal" },
  { name: "Cafe Latte", desc: "Ramen, lotus root, daikon radish...", img: "image/cafe.jpg", price: "$5", cal: "300ml 359cal" },

            { name: "Iced Americano", desc: "Ramen, pumpkin, greens...", img: "image/americ.jpg", price: "$5", cal: "300ml 359cal" },
            { name: "Salted Caramel", desc: "Ramen, vegetable broth...", img: "image/caramel.jpg", price: "$4", cal: "Available +3" }
        ],
        meat: [
              { name: "Yousei no miru", desc: "Ramen, lotus root, daikon radish...", img: "https://via.placeholder.com/200?text=Seafood1", price: "$5", cal: "300ml 359cal" },
  { name: "Yousei no miru", desc: "Ramen, lotus root, daikon radish...", img: "https://via.placeholder.com/200?text=Seafood1", price: "$5", cal: "300ml 359cal" },

            { name: "Chicken Soup", desc: "With noodles and veggies...", img: "https://via.placeholder.com/200?text=Meat1", price: "$7", cal: "400cal" },
            { name: "Beef Ramen", desc: "Spicy and hearty...", img: "https://via.placeholder.com/200?text=Meat2", price: "$8", cal: "500cal" }
        ],
herbal: [ 
     { name: "Herbal Tea", desc: "Green tea with herbs...", img: "https://via.placeholder.com/200?text=Herbal1", price: "$4", cal: "200ml 150cal" },
 { name: "Herbal Tea", desc: "Green tea with herbs...", img: "https://via.placeholder.com/200?text=Herbal1", price: "$4", cal: "200ml 150cal" },

            { name: "Herbal Tea", desc: "Green tea with herbs...", img: "https://via.placeholder.com/200?text=Herbal1", price: "$4", cal: "200ml 150cal" },
            { name: "Herbal Soup", desc: "Vegetable broth with herbs...", img: "https://via.placeholder.com/200?text=Herbal2", price: "$6", cal: "300ml 250cal" }
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
