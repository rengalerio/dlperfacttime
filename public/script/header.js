let header = document.getElementById("header")
let headerLogoWrapper = document.getElementById("header-logo-wrapper")
let headerLogo = document.getElementById("header-logo")
let headerNavMobileWrapper = document.getElementById("header-nav-mobile-wrapper")
let arcDiv = document.getElementById('entourage-arc')
let sectionDiv = document.getElementById('entourage-section')
let countdownWrapper = document.getElementById('countdown-wrapper')
let vw = window.innerWidth;
let vh = window.innerHeight;

function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function onMenuClick() {
    headerNavMobileWrapper.classList.remove("hidden")
}

function onCloseMenuClick() {
    headerNavMobileWrapper.classList.add("hidden")
}

function onHeaderScroll() {
    if (vw > 600) {
        if (vh > 699) {
            if (window.scrollY > 50) {
                headerLogoWrapper.style.height = '40px'
                headerLogo.style.width = 'auto'
                header.style.height = '100px'
                header.style.paddingTop = '30px'
                header.style.paddingBottom = '30px'
            } else {
                headerLogoWrapper.style.height = '80px'
                header.style.height = 'auto'
                header.style.paddingTop = '40px'
                header.style.paddingBottom = '40px'
            }
        }

        if (arcDiv) {
            if (window.scrollY > 0.1 * vh) {
                sectionDiv.style.width = '100vw'
                arcDiv.style.width = '100vw'
                arcDiv.style.borderRadius = '0'
            } else {
                sectionDiv.style.width = '60vw'
                arcDiv.style.width = '60vw'
                arcDiv.style.borderRadius = '50%'
            }
        }
    } else {
        if (arcDiv) {
            if (window.scrollY > 0.1 * vh) {
                sectionDiv.style.width = '100vw'
                arcDiv.style.width = '100vw'
                arcDiv.style.borderRadius = '0'
            } else {
                sectionDiv.style.width = '90vw'
                arcDiv.style.width = '90vw'
                arcDiv.style.borderRadius = '50%'
            }
        }
    }

    reveal()
}

function reveal() {
    var reveals = document.querySelectorAll(".reveal")
  
    for (var i = 0; i < reveals.length; i++) {
      var elementTop = reveals[i].getBoundingClientRect().top
      var elementVisible = 0
  
      if (elementTop < vh - elementVisible) {
        reveals[i].classList.add("active")
      } else {
        reveals[i].classList.remove("active")
      }
    }
}