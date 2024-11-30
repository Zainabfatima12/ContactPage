<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Us Form</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <nav class="navbar">
            <img src="/img/agratas-main-logo.png" alt="Agratas Infotech Logo" class="logo">
            <span class="menu">
            <ul class="nav-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Get Started</a></li>
                <a href="#"><i class="fa-solid fa-circle-user"></i></a>
            </ul>
        </span>
            <div class="nav-icons">
                 <div class="user">
                <a href="#"><i class="fa-solid fa-circle-user"></i></a>
            </div>
                <a href="#" id="searchIcon"><i class="fa-solid fa-magnifying-glass"></i></a>
                <div id="hamburger-icon" onclick="toggleMobileMenu(this)">
                    <div class="bar1"></div>
                    <div class="bar2"></div>
                     <div class="bar3"></div>
                     <ul class="mobile-menu">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Get Started</a></li>
                      
                     </ul>
                </div>
            </div>
        </nav>
        <div class="search-box" id="searchBox">
            <form action="#" method="get">
                <input type="text" id="searchInput" placeholder="Search..." name="query" required>
                <button type="submit">Search</button>
            </form>
        </div>
    </header>
    
    <section class="contact-section">
        <div class="form-container">
            <h1>Contact Us</h1>
            <form id="contactForm">
                <div class="input-group">
                    <i class="fa-regular fa-user"></i>
                    <input type="text" placeholder="Name" required>
                </div>
                <div class="input-group">
                    <i class="fa-regular fa-envelope"></i>
                    <input type="email" placeholder="Email" required>
                </div>
                <div class="input-group">
                    <textarea placeholder="Message" required></textarea>
                </div>
                <button type="submit">Send Message</button>
            </form>
        </div>
        <div class="illustration">
            <img src="./img/photo-removebg-preview.png" alt="Contact Illustration">
        </div>
    </section>
    
    <script src="script.js"></script>
</body>
</html>
