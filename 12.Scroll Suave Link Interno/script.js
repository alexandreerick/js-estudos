function initTabNav() {
  const tabMenu = document.querySelectorAll(".js-tabmenu li");
  const tabContent = document.querySelectorAll(".js-tabcontent section");

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add("ativo");

    function activeTab(index) {
      tabContent.forEach(section => {
        section.classList.remove("ativo");
      });
      tabContent[index].classList.add("ativo");
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}
initTabNav();

function initAccordion() {
  const accordionList = document.querySelectorAll(".js-accordion dt");
  const activeClass = "ativo";
  if (accordionList.length) {
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);

    function activeAccordion() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }

    accordionList.forEach(item => {
      item.addEventListener("click", activeAccordion);
    });
  }
}
initAccordion();

function initScrollSuave() {
  // Pega o href
  const linksInternos = document.querySelectorAll(".js-menu a[href^='#']");

  // Funçao do scroll
  function scrollToSection(event) {
    event.preventDefault();
    // Pega o conteúdo do href
    const href = event.currentTarget.getAttribute("href");

    const section = document.querySelector(href);
    // Melhor forma
    section.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

    // Pega a distancia do topo
    // Forma alternativa
    // const topo = section.offsetTop;
    // window.scrollTo({
    //   top: topo,
    //   behavior: "smooth"
    // });
  }

  linksInternos.forEach(link => {
    link.addEventListener("click", scrollToSection);
  });
}
initScrollSuave();
