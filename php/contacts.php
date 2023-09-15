<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Asparuh Tenev's Portfolio</title>
    <link rel="icon" type="image/x-icon" href="images/favicon-green.png"> <!-- Fix later-->
    <link rel="stylesheet" href="css/normalize.css">
    <link rel="stylesheet" href="css/style.css">
</head>

<body>

    <header>
        <div class="container-wide flex-space-between">
            <h1><a href="#" class="header-menu__title">PorfolioX</a></h1>
            <ul class="header-menu__ul">
                <li class="header-menu__li"><a href="../index.html#projects-area">Projects</a></li>
                <li class="header-menu__li"><a href="#">About</a></li>
                <li class="header-menu__li"><a href="#">Contacts</a></li>
            </ul>
        </div>
    </header>




    <main>
        <section class="contact-form">
            <div class="contact-form__image">
                Image here
            </div>
            <div class="contact-form__form">
                <form action="send-email.php">
                    <label for="name">Get in touch:</label>
                    <input name="name" type="text" placeholder="Name" required>

                    <input name="email" type="email" placeholder="Emaill" required>

                    <textarea name="message" cols="30" rows="10" placeholder="Message"></textarea>
                </form>


            </div>
        </section>
    </main>




    <footer>
        <div class="container-normal flex-space-around">
            <div class="footer-widget">
                <h3>Get in touch:</h3>

            </div>
            <div class="footer-widget">
                <p></p>
            </div>
        </div>
    </footer>




    <script src="js/type-animation.js"></script>
</body>

</html>