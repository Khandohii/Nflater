// Проверка браузера
if ( !supportsCssVars() ) {
	document.querySelector('body').classList.add("lock");
	document.querySelector('.supports_error').classList.add("show");
}


// Ленивая загрузка
setTimeout(function(){
	observer = lozad('.lozad', {
		rootMargin: '200px 0px',
		threshold: 0,
		loaded: function(el) {
			el.classList.add('loaded')
		}
	})

	observer.observe()
}, 200)


// Аккордеон
var accordionItemTitles = document.querySelectorAll(".accordion .open_btn");

for (var i = 0; i < accordionItemTitles.length; i++) {
  accordionItemTitles[i].addEventListener("click",
  function (event) {
    event.preventDefault();
    event.target.classList.toggle("active");
    var accordionItemContent = event.target.nextElementSibling;

    if (!accordionItemContent.classList.contains('active')) {
      accordionItemContent.classList.add('active');
      accordionItemContent.style.height = 'auto';

      var height = accordionItemContent.clientHeight + 'px';

      accordionItemContent.style.height = '0px';

      setTimeout(function () {
        accordionItemContent.style.height = height;
      }, 0);
    } else {
      accordionItemContent.style.height = '0px';

      accordionItemContent.addEventListener('transitionend',
        function () {
          accordionItemContent.classList.remove('active');
        }, {
          once: true
        });
      }
    });
}

// Открытие моб меню
document.querySelector('.mob_menu_link').addEventListener("click", function(e){
	e.preventDefault()

	if ( this.classList.contains('active') ) {
		this.classList.remove('active')

		document.querySelector('header .menu').classList.remove('visible')
	} else {
		this.classList.add('active')

		document.querySelector('header .menu').classList.add('visible')
	}
})


// Вспомогательные функции
function supportsCssVars() {
    var s = document.createElement('style'),
        support

    s.innerHTML = ":root { --tmp-var: bold; }"
    document.head.appendChild(s)
    support = !!(window.CSS && window.CSS.supports && window.CSS.supports('font-weight', 'var(--tmp-var)'))
    s.parentNode.removeChild(s)

    return support
}