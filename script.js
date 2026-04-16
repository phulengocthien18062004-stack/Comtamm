// script.js

// Menu Data
const menuItems = [
    {
        id: 1,
        name: "Cơm tấm sườn nướng",
        desc: "Sườn cốt lết tẩm ướp mật ong nướng vàng rộm, kèm mỡ hành và đồ chua.",
        price: "45.000đ",
        image: "assets/com_tam.png"
    },
    {
        id: 2,
        name: "Cơm tấm chả trứng",
        desc: "Chả trứng đúc thịt thơm lừng béo ngậy, phong cách Sài Gòn đặc trưng.",
        price: "40.000đ",
        // Tái sử dụng ảnh hoặc placeholder nếu thiếu
        image: "assets/com_tam.png" 
    },
    {
        id: 3,
        name: "Cơm tấm đặc biệt",
        desc: "Tứ vị sườn, bì, chả, trứng ốp la, kèm nước mắm ớt Huế mặn mà.",
        price: "75.000đ",
        image: "assets/com_tam.png"
    },
    {
        id: 4,
        name: "Bì chả",
        desc: "Phần thêm dồi dào với bì heo giòn dai và chả lụa hảo hạng.",
        price: "35.000đ",
        image: "assets/com_tam.png"
    },
    {
        id: 5,
        name: "Bánh bèo Huế",
        desc: "Chén bánh bèo nhỏ xinh điểm xuyến tôm cháy, tóp mỡ giòn rụm.",
        price: "40.000đ",
        image: "assets/banh_beo.png"
    },
    {
        id: 6,
        name: "Nem lụi",
        desc: "Nem lụi nướng sả thơm phức, ăn kèm bánh tráng và rau sống xanh tươi.",
        price: "50.000đ",
        image: "assets/nem_lui.png"
    },
    {
        id: 7,
        name: "Chả Huế",
        desc: "Đòn chả lụa Huế mặn mà, giòn dai ăn kèm tỏi ớt.",
        price: "30.000đ",
        image: "assets/banh_beo.png" // placeholder tạm
    },
    {
        id: 8,
        name: "Chè Huế",
        desc: "Bát chè cung đình thanh mát thảo mộc, khép lại bữa ăn trọn vẹn.",
        price: "25.000đ",
        image: "assets/che.png"
    }
];

// Initialize Menu
const menuGrid = document.getElementById('menu-grid');

menuItems.forEach(item => {
    const card = document.createElement('div');
    card.className = 'menu-card';
    
    card.innerHTML = `
        <div class="menu-card-img-wrapper">
            <img src="${item.image}" alt="${item.name}" class="menu-card-img" />
        </div>
        <div class="menu-card-body">
            <h3 class="menu-card-title">${item.name}</h3>
            <p class="menu-card-desc">${item.desc}</p>
            <div class="menu-card-price">
                <span>${item.price}</span>
                <button class="btn btn-primary btn-sm" onclick="selectDish('${item.name}')">Chọn Món</button>
            </div>
        </div>
    `;
    
    menuGrid.appendChild(card);
});

// Scroll Navbar Effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
const mobileToggle = document.getElementById('mobile-toggle');
const navLinks = document.getElementById('nav-links');

mobileToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Form Submission & Alert
const bookingForm = document.getElementById('booking-form');
bookingForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    console.log("Form Submitted for: ", name);
    alert(`Đơn đặt của ${name} đã được gửi thành công! Cơm Tấm Sài Gòn Xưa sẽ sớm liên hệ với bạn.`);
    bookingForm.reset();
});

// Helper for "Chọn món" button from menu card
function selectDish(dishName) {
    // Attempt to map to select options if it matches
    const select = document.getElementById('dish');
    let found = false;
    for(let i=0; i<select.options.length; i++){
        if(select.options[i].text.includes(dishName)){
            select.selectedIndex = i;
            found = true;
            break;
        }
    }
    document.getElementById('booking').scrollIntoView({behavior: "smooth"});
}
