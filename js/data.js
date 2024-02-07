const productData = [
    {
        "id": 1,
        "title": "Stylish T-Shirt",
        "description": "Comfortable and trendy t-shirt for everyday wear",
        "price": "₹499",
        "img": "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hpcnR8ZW58MHx8MHx8fDA%3D",
        "quantity": 1
    },
    {
        "id": 2,
        "title": "Running Shoes",
        "description": "High-performance running shoes for athletes",
        "price": "₹1299",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdwCwIzx_PcP-Iwu5NIXJWUsW89QCvHAdrJQ&s",
        "quantity": 1
    },
    {
        "id": 3,
        "title": "Denim Jeans",
        "description": "Classic denim jeans for a casual yet stylish look",
        "price": "₹899",
        "img": "https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGVuaW0lMjBqZWFuc3xlbnwwfHwwfHx8MA%3D%3D",
        "quantity": 1
    },
    {
        "id": 4,
        "title": "Sneakers",
        "description": "Fashionable sneakers for urban street style",
        "price": "₹1499",
        "img": "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c25lYWtlcnN8ZW58MHx8MHx8fDA%3D",
        "quantity": 1
    },
    {
        "id": 5,
        "title": "Formal Shirt",
        "description": "Elegant formal shirt for professional occasions",
        "price": "₹799",
        "img": "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNoaXJ0fGVufDB8fDB8fHww",
        "quantity": 1
    },
    {
        "id": 6,
        "title": "Boots",
        "description": "Stylish boots for a rugged and adventurous look",
        "price": "₹1899",
        "img": "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9vdHN8ZW58MHx8MHx8fDA%3D",
        "quantity": 1
    },
    {
        "id": 7,
        "title": "Summer Dress",
        "description": "Light and breezy dress perfect for summer days",
        "price": "₹699",
        "img": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2hpcnR8ZW58MHx8MHx8fDA%3D",
        "quantity": 1
    },
    {
        "id": 8,
        "title": "Leather Jacket",
        "description": "Classic leather jacket for a timeless fashion statement",
        "price": "₹2499",
        "img": "https://images.unsplash.com/photo-1602370463198-086436840055?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGVhdGhlciUyMGphY2tldHxlbnwwfHwwfHx8MA%3D%3D",
        "quantity": 1
    },
    {
        "id": 9,
        "title": "High Heels",
        "description": "Elegant high heels for a glamorous evening",
        "price": "₹1699",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUid6vgvDfsjZ-5A0vkeLl0IPtyjdMVn7pyg&s",
        "quantity": 1
    },
    {
        "id": 10,
        "title": "Casual Sneakers",
        "description": "Casual sneakers for everyday comfort and style",
        "price": "₹999",
        "img": "https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "quantity": 1
    },
    {
        "id": 11,
        "title": "Denim Jacket",
        "description": "Classic denim jacket for a versatile and rugged look",
        "price": "₹1799",
        "img": "https://images.unsplash.com/photo-1528228377194-2faca82540e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGRlbmltJTIwamFja2V0JTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D",
        "quantity": 1
    },
    {
        "id": 12,
        "title": "Winter Coat",
        "description": "Warm and stylish coat for chilly winter days",
        "price": "₹2999",
        "img": "https://images.unsplash.com/photo-1577287364980-8eadb74873d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdpbnRlciUyMGNvYXQlMjBjbG90aHN8ZW58MHx8MHx8fDA%3D",
        "quantity": 1
    },
    {
        "id": 13,
        "title": "Sweatshirt",
        "description": "Cozy sweatshirt for lounging at home or running errands",
        "price": "₹599",
        "img": "https://images.unsplash.com/photo-1614975059251-992f11792b9f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "quantity": 1
    },
    {
        "id": 14,
        "title": "Running Shorts",
        "description": "Lightweight and breathable shorts for running or workouts",
        "price": "₹399",
        "img": "https://images.unsplash.com/photo-1632063947736-6eb5943309fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJ1bm5pbmclMjBzaG9ydHN8ZW58MHx8MHx8fDA%3D",
        "quantity": 1
    },
    {
        "id": 15,
        "title": "Formal Suit",
        "description": "Classic formal suit for weddings or special occasions",
        "price": "₹3499",
        "img": "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9ybWFsJTIwc3VpdHxlbnwwfHwwfHx8MA%3D%3D"
    }
]