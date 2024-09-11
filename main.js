let x = 
`
clamp(rem, vw, )

:root {
    --almost_white: hsl(0, 0%, 98%);
    --medium_grey: hsl(0, 0%, 41%);
    --almost_black: hsl(0, 0%, 8%);
    --paragraph_font: 18px;
    --mobile: 24em;
    --tablet: ;
    --desktop: 62em;
}

body,
html {
    width: 100%;
    min-height: 100vh;
    font-size: 100%;
    font-family: "Epilogue", sans-serif;
    font-optical-sizing: auto;
    font-weight: 500;
    font-style: normal;
    background-color: var(--almost_white);
    position: relative;
}

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

ul {
    list-style-type: none;
}

nav {
    width: 100%;
    padding: clamp(1rem, 2.222vw, 2rem) 3%;
    margin-bottom: clamp(1rem, 2.22vw, 2rem);
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.logo_link {
    width: 7%;
}

.logo_link img {
    width: 100%;
}

.main_nav {
    display: flex;
    width: 90%;
    justify-content: space-between;
}

.nav_links {
    display: flex;
    gap: 15%;
    align-items: center;
}

.nav_links li {}

.nav_links li p,
.nav_links li a {
    text-decoration: none;
    color: var(--almost_black);
}

.nav_links li label {
    position: relative;
    display: flex;
    gap: 6%;
    align-items: center;
}

.nav_links li label input[type="checkbox"] {
    position: absolute;
    top: 0;
    width: 100%;
    /* height: 100%; */
    opacity: 0;
}

.nav_links li label input[type="checkbox"]:checked~.menu {
    display: flex;
}

.nav_links li label input[type="checkbox"]:checked~.arrowimg {
    transform: rotate(180deg);
    transition: transform 150ms ease-in-out;
}

.nav_links li label>p:hover,
.nav_links li label>p:hover~img {
    transform: scale(1.1);
}

.nav_links a:hover,
.main_nav>.logins a:nth-child(1):hover {
    text-decoration: underline;
}

.menu {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 1.5rem;
    right: 0;
    padding: clamp(1rem, 1.444vw, 1.3rem);
    gap: 12px;
    border-radius: 10px;
    background-color: var(--almost_white);
    box-shadow: 0 0 clamp(1rem, 2.222vw, 2rem) rgb(216, 206, 206);
    width: auto;
}

.menu li {
    width: auto;
}

.menu li a {
    display: flex;
    gap: 12%;
    width: auto;
}

.menu li a img {}

.menu li a p {}

.main_nav>.logins {
    width: 20%;
    display: flex;
    gap: 10%;
    align-items: center;
    justify-content: flex-end;
}

.main_nav>.logins a {
    text-decoration: none;
    color: var(--almost_black);
    /* margin-left: 2rem; */
}

.main_nav>.logins a:nth-child(2) {
    padding: clamp(0.5rem, 0.778vw, 0.7rem) 8%;
    border: 2px solid black;
    border-radius: 10px;
}

.main_nav>.logins a:nth-child(2):hover {
    color: var(--almost_white);
    background-color: var(--almost_black);
}

.desktop {
    width: 40%;
    height: auto;
}

.mobile {
    display: none;
}

.nav_toggle {
    display: none;
}

@media(max-width: 47.8em) {

    .desktop {
        display: none;
    }

    .mobile {
        display: block;
        width: 100%;
    }

    .logo_link {
        width: 26%;
    }


    .nav_toggle {
        display: block;
        position: absolute;
        right: 5%;
        top: 1rem;
        width: 2rem;
        height: 2rem;
    }

    input.nav_toggle {
        z-index: 10;
        opacity: 0;
    }

    span.nav_toggle {
        background: url(images/icon-menu.svg);
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        transition: background 150ms ease-in-out;
        z-index: 5;
    }

    input.nav_toggle:checked {
        position: fixed;
    }

    input.nav_toggle:checked~span {
        background: url(images/icon-close-menu.svg);
        background-size: cover;
        background-repeat: no-repeat;
        position: fixed;
    }

    input.nav_toggle:checked~.main_nav {
        display: block;
        transition: transform 150ms ease-in;
        transform: translateX(0%);
    }

    .main_nav {
        display: none;
        transform: translateX(200%);
        width: 62%;
        min-height: 100%;
        position: absolute;
        top: 0;
        right: 0;
        background-color: var(--almost_white);
        box-shadow: -40vw 0 0 hsla(0, 0%, 8%, 0.678);
        flex-direction: column;
        padding: 5rem 5% 0 5%;
        align-items: flex-start;
        z-index: 3;
    }

    .main_nav>.nav_links {
        flex-direction: column;
        align-items: flex-start;
        gap: 1rem;
        margin-bottom: 2rem;
        width: 100%;
    }

    .nav_links li,
    .nav_links li label {
        width: 100%;
    }

    .nav_links li label {
        flex-wrap: wrap;
    }

    .menu {
        position: relative;
        margin-left: 5%;
        margin-bottom: 1rem;
        box-shadow: none;
        background-color: inherit;
        gap: 1.1rem;
        padding-top: 0;
        width: 100%;
    }

    .logins {
        flex-direction: column;
        min-width: 100%;
    }

    .logins a:nth-child(2) {
        margin-top: 1rem;
        width: 100%;
        text-align: center;
    }

}`