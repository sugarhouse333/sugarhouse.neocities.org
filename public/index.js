function dreamHover(x, image) {
    if (x==1) {
        image.src = 'pix/dreamshover.gif'
    }

    if (x==2) {
        image.src = 'pix/dreams.gif'
    }
}

function galleryHover(x, image) {
    if (x==1) {
        image.src = 'pix/galleryhover.gif'
    }

    if (x==2) {
        image.src = 'pix/gallery.gif'
    }
}

function linksHover(x, image) {
    if (x==1) {
        image.src = 'pix/linkshover.gif'
    }

    if (x==2) {
        image.src = 'pix/links.gif'
    }
}

function challengesHover(x, image) {
    if (x==1) {
        image.src = 'pix/bigchallenges-window2.png'
    }

    if (x==2) {
        image.src = 'pix/bigchallenges-window.png'
    }
}

function togglePage(x) {
    var home = document.getElementById("home")
    var about = document.getElementById("about")
    var blog = document.getElementById("blog")
    var chat = document.getElementById("chat")
    var guestbook = document.getElementById("guestbook")
    if (x == 1) {
        home.style.display = "block"
        about.style.display = "none"
        blog.style.display = "none"
        chat.style.display = "none"
        guestbook.style.display = "none"
    }
    if (x == 2) {
        home.style.display = "none"
        about.style.display = "block"
        blog.style.display = "none"
        chat.style.display = "none"
        guestbook.style.display = "none"
    }
    if (x == 3) {
        home.style.display = "none"
        about.style.display = "none"
        blog.style.display = "block"
        chat.style.display = "none"
        guestbook.style.display = "none"
    }
    if (x == 4) {
        home.style.display = "none"
        about.style.display = "none"
        blog.style.display = "none"
        chat.style.display = "block"
        guestbook.style.display = "none"
    }
    if (x == 5) {
        home.style.display = "none"
        about.style.display = "none"
        blog.style.display = "none"
        chat.style.display = "none"
        guestbook.style.display = "block"
    }
}