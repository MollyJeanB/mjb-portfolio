function scrollToSection(id) {
  const scrollDiv = document.getElementById(id)
  scrollDiv.scrollIntoView({behavior: "smooth"})
}

function listenBio() {
  $(".bio-link").on("click", event => {
    scrollToSection("bio")
  })
}

function listenProjects() {
  $(".projects-link").on("click", event => {
    scrollToSection("projects")
  })
}

function listenContact() {
  $(".contact-link").on("click", event => {
    scrollToSection("contact")
  })
}

function handleApp() {
  listenBio();
  listenProjects();
  listenContact();
}


$(handleApp)
