const products = [

    // Watches

    {
        name: "Office shoe",
        category: "shoe",
        sub_category: "men",
        price: 13,
        image: "https://images.unsplash.com/photo-1626947346165-4c2288dadc2a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
        name: "Shirt buttoned",
        category: "clothing",
        sub_category: "men",
        price: 10,
        image: "https://images.unsplash.com/photo-1602810316693-3667c854239a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
   
    {
        name: "Mystrey",
        category: "watch",
        sub_category: "men",
        price: 10,
        image: "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
        name: "Nike Red",
        category: "shoe",
        sub_category: "men",
        price: 12,
        image: "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
        name: "Sleeveless",
        category: "clothing",
        sub_category: "women",
        price: 7,
        image: "https://images.unsplash.com/photo-1525171254930-643fc658b64e?q=80&w=1977&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
   
    {
        name: "Vultz",
        category: "watch",
        sub_category: "women",
        price: 12,
        image: "https://images.unsplash.com/photo-1632280071595-b13521457242?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
        name: "Soft Comfy",
        category: "shoe",
        sub_category: "women",
        price: 11,
        image: "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?q=80&w=2031&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
        name: "Varaca",
        category: "clothing",
        sub_category: "men",
        price: 5,
        image: "https://images.unsplash.com/photo-1556306535-0f09a537f0a3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
   
    {
        name: "Weltz",
        category: "watch",
        sub_category: "men",
        price: 10,
        image: "https://images.unsplash.com/photo-1623998021450-85c29c644e0d?q=80&w=1857&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
        name: "Step Ons",
        category: "shoe",
        sub_category: "women",
        price: 12,
        image: "https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
        name: "Bultz",
        category: "clothing",
        sub_category: "men",
        price: 6,
        image: "https://images.unsplash.com/photo-1521369909029-2afed882baee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
   
    {
        name: "Dytz",
        category: "watch",
        sub_category: "women",
        price: 15,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
        name: "Puma",
        category: "shoe",
        sub_category: "men",
        price: 14,
        image: "https://images.unsplash.com/photo-1545289414-1c3cb1c06238?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
        name: "Blue shorts",
        category: "clothing",
        sub_category: "women",
        price: 10,
        image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
   
    {
        name: "Shines",
        category: "watch",
        sub_category: "men",
        price: 11,
        image: "https://images.unsplash.com/photo-1639006570490-79c0c53f1080?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
        name: "Rubber Comfy",
        category: "shoe",
        sub_category: "men",
        price: 9,
        image: "https://images.unsplash.com/photo-1463100099107-aa0980c362e6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
        name: "Belt headphones",
        category: "clothing",
        sub_category: "men",
        price: 12,
        image: "https://images.unsplash.com/photo-1600086827875-a63b01f1335c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
   
    {
        name: "Sheins",
        category: "watch",
        sub_category: "women",
        price: 14,
        image: "https://images.unsplash.com/photo-1565531185009-b89c734b9719?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
        name: "Fila",
        category: "shoe",
        sub_category: "women",
        price: 14,
        image: "https://images.unsplash.com/photo-1579446565308-427218a2c60e?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
        name: "Comfy socks",
        category: "clothing",
        sub_category: "women",
        price: 6,
        image: "https://images.unsplash.com/photo-1564379976409-79bd0786fff1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
   
    {
        name: "Mia Myles",
        category: "watch",
        sub_category: "men",
        price: 10,
        image: "https://images.unsplash.com/flagged/photo-1564826836200-87e3faad54bb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

]

export default products