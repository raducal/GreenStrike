// Smooth Scrolling
$(".navbar a, .btn").on("click", function(event) {
  if (this.hash !== "") {
    event.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 100
      },
      800
    );
  }
});

document.querySelector(".burger").addEventListener("click", function() {
  const navLinks = document.querySelector(".navbar-links");

  console.log("hi");
  navLinks.classList.toggle("showItem");
});
