class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList); // Use querySelector para selecionar apenas o primeiro elemento
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";
    
    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation = link.style.animation
        ? ""
        : `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s 0.3s`;
    });
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li"
);
mobileNavbar.init();


document.getElementById('openModal').addEventListener('click', function () {
  document.getElementById('myModal').style.display = 'block';
});

document.getElementById('saveOptions').addEventListener('click', function () {
  // Aqui você pode acessar os valores das caixinhas marcadas e fazer o que desejar com eles
  const option1 = document.getElementById('option1').checked;
  const option2 = document.getElementById('option2').checked;
  const option3 = document.getElementById('option3').checked;
  const option4 = document.getElementById('option4').checked;
  const option5 = document.getElementById('option5').checked;
  const option6 = document.getElementById('option6').checked;
  const option7 = document.getElementById('option7').checked;
  
  // Por exemplo, exibir os valores no console
  console.log('Opção 1:', option1);
  console.log('Opção 2:', option2);
  console.log('Opção 3:', option3);
  console.log('Opção 4:', option4);
  console.log('Opção 5:', option5);
  console.log('Opção 6:', option6);
  console.log('Opção 7:', option7);
  
  // Fechar o modal
  document.getElementById('myModal').style.display = 'none';
});

const optionCheckboxes = document.querySelectorAll('input[type="checkbox"]');
  const video = document.getElementById('video');
  const openModalButton = document.getElementById('openModal');
  const saveOptionsButton = document.getElementById('saveOptions');

  const videos = {
    'option1': '/imagens/01 - Português Básico.mp4',
    'option2': '/imagens/02 - Português Básico.mp4',
    'option3': '/imagens/03 - Português Básico.mp4',
    'option4': '/imagens/04 - Português Básico.mp4',
    'option5': '/imagens/05 - Português Básico.mp4',
    'option6': '/imagens/06 - Português Básico.mp4',
    'option7': '/imagens/07 - Português Básico.mp4',
  };

  openModalButton.addEventListener('click', function () {
    document.getElementById('myModal').style.display = 'block';
    openModalButton.style.display = 'none';
  });

  optionCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', function () {
      if (this.checked) {
        const optionId = this.id;
        video.src = videos[optionId];
        video.style.display = 'block';
      }
    });
  });

  saveOptionsButton.addEventListener('click', function () {
    document.getElementById('myModal').style.display = 'none';
    openModalButton.style.display = 'block';
    // Resete a seleção de opções ou faça o que desejar com as opções
    optionCheckboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });
  });

  document.getElementById('closeModal').addEventListener('click', function () {
    document.getElementById('myModal').style.display = 'none';
    openModalButton.style.display = 'block';
    // Resete a seleção de opções ou faça o que desejar com as opções
    optionCheckboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });
  
});

