<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Asparuh Tenev's Portfolio</title>
    <link rel="icon" type="image/x-icon" href="images/favicon-green.png"> <!-- Fix later-->
    <link rel="stylesheet" href="css/normalize.css">
    <link rel="stylesheet" href="css/style.css">

    <!-- Adding Google invisible reCaptcha -->
    <script src="https://www.google.com/recaptcha/api.js" async defer></script>
    <!-- <script>
        function onSubmit(token) {
            // document.getElementById("form").submit();
        } -->
    </script>

</head>

<body>

    <header>
        <div class="container-wide flex-space-between">
            <h1><a href="index.html" class="header-menu__title">PorfolioX</a></h1>
            <ul class="header-menu__ul">
                <li class="header-menu__li"><a href="index.html#projects-area">Projects</a></li>
                <li class="header-menu__li"><a href="#">About</a></li>
                <li class="header-menu__li"><a href="#">Contacts</a></li>
            </ul>
        </div>
    </header>




    <main>
        <section class="contacts">
            <div class="container-narrow contact-form">

                <div id="successPopup" class="success-popup">
                    <span id="closePopup" class="close-popup">&times;</span>
                    Your message was submitted successfully !
                </div>
                <div id="overlay" class="overlay"></div>


                <div class="contact-form__image">
                    <img src="images/contact-form.webp" alt="">
                </div>
                <div class="contact-form__form">
                    <form id="form" method="POST">
                        <label for="name">Get in touch:</label>
                        <input name="name" type="text" placeholder="Name" id="name" required>

                        <input name="email" type="email" placeholder="Email" id="email" required>

                        <textarea name="message" cols="30" rows="10" placeholder="Message" id="message" required></textarea>

                        <button class="contact-form__button g-recaptcha" data-sitekey="6LcjiCkoAAAAAJy9UmeuB4R2ve-zad3DALIZBvT6" data-callback="onSubmit">
                            <div id="sendMsg">Send</div>
                            <div class="spinner" id="spinner"></div>
                        </button>
                    </form>
                </div>

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


    <script src="js/form-submission.js"></script>
</body>

</html>