//1------------------Navegação por Tabs:
function initTabNav() {
  const tabMenu = document.querySelectorAll(".js-tabmenu li");
  const tabContent = document.querySelectorAll(".js-tabmenu section");
  const className = "ativo";

  // Se existir essas divs com essas classes:
  if (tabMenu.length && tabContent.length) {
    //Por padrão deixa o primeiro conteúdo sempre ativo pro site nn ficar sem content:
    tabContent[0].classList.add(className);

    function activateTab(index) {
      //Remove de cada um dos itens a classe ativo
      tabContent.forEach((content) => {
        content.classList.remove(className);
      });
      //Adiciona pra que foi clicada (index):
      tabContent[index].classList.add(className);
    }

    //Adiciona interação com a função acima:
    tabMenu.forEach((i, index) => {
      i.addEventListener("click", () => {
        activateTab(index);
      });
    });
  }
}
initTabNav();

//2------------------Navegação por Accordion Lists:
function initAccordionNav() {
  const accordionList = document.querySelectorAll(".js-accordion dt");
  const className = "ativo";

  // Se existir essas div com essa classe:
  if (accordionList.length) {
    //Por padrão deixa o primeiro conteúdo sempre ativo pra nn ficar sem content:
    accordionList[0].classList.add(className);
    accordionList[0].nextElementSibling.classList.add(className);

    function activateAccordionList() {
      /* Remove de cada um dos itens a classe ativo:
      accordionList.forEach((content) => {
        content.classList.remove(className);
        content.nextElementSibling.classList.remove(className);
      }); */

      //Nesse caso, this = currentTarget
      //Add pra dT (title):
      this.classList.toggle(className);
      //Add pra dd (content):
      this.nextElementSibling.classList.toggle(className);
    }

    //Adiciona interação com a função acima:
    accordionList.forEach((i) => {
      i.addEventListener("click", activateAccordionList);
    });
  }
}
initAccordionNav();

//3-------------------Scrollar pro topo da página:
function initScrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 60 viewport height, add the show-scroll class to the a tag with the scroll-Up class
  if (this.scrollY >= 60) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", initScrollUp);

//4-------------------Scroll animations:
function initAnimaScroll() {
  const sections = document.querySelectorAll(".js-scroll");
  const className = "ativaScrollAnim";

  // Se existir essas div com essa classe:
  if (sections.length) {
    //Add a classe ativa pra primeira seção sempre:
    sections[0].classList.add(className);
    //55% da tela do user:
    const screenSizeToAnimate = window.innerHeight * 0.55;

    function scrollAnimate() {
      //Pra cada uma das seções:
      sections.forEach((i) => {
        //Pega a distância do topo - o tamanho ideal de tela do user:
        const sectionTop = i.getBoundingClientRect().top - screenSizeToAnimate;
        //Testando --> console.log(`${i.id} -> ${sectionTop}`);

        //IF com operador ternário:
        sectionTop < 0
          ? i.classList.add(className)
          : i.classList.remove(className);
      });
    }

    window.addEventListener("scroll", scrollAnimate);
  }
}
initAnimaScroll();
