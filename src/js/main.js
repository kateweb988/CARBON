
document.addEventListener("DOMContentLoaded", () => {
  class ItcTabs {
    constructor(target, config) {
      const defaultConfig = {};
      this._config = Object.assign(defaultConfig, config);
      this._elTabs = typeof target === 'string' ? document.querySelector(target) : target;
      this._elButtons = this._elTabs.querySelectorAll('.tabs__btn');
      this._elPanes = this._elTabs.querySelectorAll('.tabs__pane');
      this._eventShow = new Event('tab.itc.change');
      this._init();
      this._events();
    }
    _init() {
      this._elTabs.setAttribute('role', 'tablist');
      this._elButtons.forEach((el, index) => {
        el.dataset.index = index;
        el.setAttribute('role', 'tab');
        this._elPanes[index].setAttribute('role', 'tabpanel');
      });
    }
    show(elLinkTarget) {
      const elPaneTarget = this._elPanes[elLinkTarget.dataset.index];
      const elLinkActive = this._elTabs.querySelector('.tabs__btn_active');
      const elPaneShow = this._elTabs.querySelector('.tabs__pane_show');
      if (elLinkTarget === elLinkActive) {
        return;
      }
      elLinkActive ? elLinkActive.classList.remove('tabs__btn_active') : null;
      elPaneShow ? elPaneShow.classList.remove('tabs__pane_show') : null;
      elLinkTarget.classList.add('tabs__btn_active');
      elPaneTarget.classList.add('tabs__pane_show');
      this._elTabs.dispatchEvent(this._eventShow);
      elLinkTarget.focus();
    }
    showByIndex(index) {
      const elLinkTarget = this._elButtons[index];
      elLinkTarget ? this.show(elLinkTarget) : null;
    };
    _events() {
      this._elTabs.addEventListener('click', (e) => {
        const target = e.target.closest('.tabs__btn');
        if (target) {
          e.preventDefault();
          this.show(target);
        }
      });
    }
  }

  // инициализация .tabs как табов
  new ItcTabs('.tabs');
});
document.addEventListener("DOMContentLoaded", () => {
  $(document).ready(function () {
    $(".youtube-link").grtyoutube({
      autoPlay: true
    });
  });

  (function ($) {

    $.fn.grtyoutube = function (options) {

      return this.each(function () {

        // Get video ID
        var getvideoid = $(this).attr("youtubeid");

        // Default options
        var settings = $.extend({
          videoID: getvideoid,
          autoPlay: true
        }, options);

        // Convert some values
        if (settings.autoPlay === true) { settings.autoPlay = 1 } else { settings.autoPlay = 0 }

        // Initialize on click
        if (getvideoid) {
          $(this).on("click", function () {
            $("body").append('<div class="grtvideo-popup">' +
              '<div class="grtvideo-popup-content">' +
              '<span class="grtvideo-popup-close">&times;</span>' +
              '<iframe class="grtyoutube-iframe" src="https://www.youtube.com/embed/' + settings.videoID + '?rel=0&wmode=transparent&autoplay=' + settings.autoPlay + '&iv_load_policy=3" allowfullscreen frameborder="0"></iframe>' +
              '</div>' +
              '</div>');
          });
        }

        // Close the box on click or escape
        $(this).on('click', function (event) {
          event.preventDefault();
          $(".grtvideo-popup-close, .grtvideo-popup").click(function () {
            $(".grtvideo-popup").remove();
          });
        });

        $(document).keyup(function (event) {
          if (event.keyCode == 27) {
            $(".grtvideo-popup").remove();
          }
        });
      });
    };
  }(jQuery));
});
document.addEventListener("DOMContentLoaded", () => {
  // Scrollto
  $('.go_to').click(function () { // ловим клик по ссылке с классом go_to
    var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
    if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
      $('html, body').animate({ scrollTop: $(scroll_el).offset().top - 0 }, 800); // анимируем скроолинг к элементу scroll_el
    }
    return false; // выключаем стандартное действие
  });
});
document.addEventListener("DOMContentLoaded", () => {
  class ItcTabs {
    constructor(target, config) {
      const defaultConfig = {};
      this._config = Object.assign(defaultConfig, config);
      this._elTabs = typeof target === 'string' ? document.querySelector(target) : target;
      this._elButtons = this._elTabs.querySelectorAll('.tabs__btn');
      this._elPanes = this._elTabs.querySelectorAll('.tabs__pane');
      this._eventShow = new Event('tab.itc.change');
      this._init();
      this._events();
    }
    _init() {
      this._elTabs.setAttribute('role', 'tablist');
      this._elButtons.forEach((el, index) => {
        el.dataset.index = index;
        el.setAttribute('role', 'tab');
        this._elPanes[index].setAttribute('role', 'tabpanel');
      });
    }
    show(elLinkTarget) {
      const elPaneTarget = this._elPanes[elLinkTarget.dataset.index];
      const elLinkActive = this._elTabs.querySelector('.tabs__btn_active');
      const elPaneShow = this._elTabs.querySelector('.tabs__pane_show');
      if (elLinkTarget === elLinkActive) {
        return;
      }
      elLinkActive ? elLinkActive.classList.remove('tabs__btn_active') : null;
      elPaneShow ? elPaneShow.classList.remove('tabs__pane_show') : null;
      elLinkTarget.classList.add('tabs__btn_active');
      elPaneTarget.classList.add('tabs__pane_show');
      this._elTabs.dispatchEvent(this._eventShow);
      elLinkTarget.focus();
    }
    showByIndex(index) {
      const elLinkTarget = this._elButtons[index];
      elLinkTarget ? this.show(elLinkTarget) : null;
    };
    _events() {
      this._elTabs.addEventListener('click', (e) => {
        const target = e.target.closest('.tabs__btn');
        if (target) {
          e.preventDefault();
          this.show(target);
        }
      });
    }
  }

  // инициализация .tabs как табов
  new ItcTabs('.tabs2');
});
document.addEventListener("DOMContentLoaded", () => {
  function controlFromInput(fromSlider, fromInput, toInput, controlSlider) {
    const [from, to] = getParsed(fromInput, toInput);
    fillSlider(fromInput, toInput, '#dedede', '#86ba39', controlSlider);
    if (from > to) {
      fromSlider.value = to;
      fromInput.value = to;
    } else {
      fromSlider.value = from;
    }
  }

  function controlToInput(toSlider, fromInput, toInput, controlSlider) {
    const [from, to] = getParsed(fromInput, toInput);
    fillSlider(fromInput, toInput, '#dedede', '#86ba39', controlSlider);
    setToggleAccessible(toInput);
    if (from <= to) {
      toSlider.value = to;
      toInput.value = to;
    } else {
      toInput.value = from;
    }
  }

  function controlFromSlider(fromSlider, toSlider, fromInput) {
    const [from, to] = getParsed(fromSlider, toSlider);
    fillSlider(fromSlider, toSlider, '#dedede', '#86ba39', toSlider);
    if (from > to) {
      fromSlider.value = to;
      fromInput.value = to;
    } else {
      fromInput.value = from;
    }
  }

  function controlToSlider(fromSlider, toSlider, toInput) {
    const [from, to] = getParsed(fromSlider, toSlider);
    fillSlider(fromSlider, toSlider, '#dedede', '#86ba39', toSlider);
    setToggleAccessible(toSlider);
    if (from <= to) {
      toSlider.value = to;
      toInput.value = to;
    } else {
      toInput.value = from;
      toSlider.value = from;
    }
  }

  function getParsed(currentFrom, currentTo) {
    const from = parseInt(currentFrom.value, 10);
    const to = parseInt(currentTo.value, 10);
    return [from, to];
  }

  function fillSlider(from, to, sliderColor, rangeColor, controlSlider) {
    const rangeDistance = to.max - to.min;
    const fromPosition = from.value - to.min;
    const toPosition = to.value - to.min;
    controlSlider.style.background = `linear-gradient(
      to right,
      ${sliderColor} 0%,
      ${sliderColor} ${(fromPosition) / (rangeDistance) * 100}%,
      ${rangeColor} ${((fromPosition) / (rangeDistance)) * 100}%,
      ${rangeColor} ${(toPosition) / (rangeDistance) * 100}%, 
      ${sliderColor} ${(toPosition) / (rangeDistance) * 100}%, 
      ${sliderColor} 100%)`;
  }

  function setToggleAccessible(currentTarget) {
    const toSlider = document.querySelector('#toSlider');
    if (Number(currentTarget.value) <= 0) {
      toSlider.style.zIndex = 2;
    } else {
      toSlider.style.zIndex = 0;
    }
  }

  const fromSlider = document.querySelector('#fromSlider');
  const toSlider = document.querySelector('#toSlider');
  const fromInput = document.querySelector('#fromInput');
  const toInput = document.querySelector('#toInput');
  fillSlider(fromSlider, toSlider, '#dedede', '#86ba39', toSlider);
  setToggleAccessible(toSlider);

  fromSlider.oninput = () => controlFromSlider(fromSlider, toSlider, fromInput);
  toSlider.oninput = () => controlToSlider(fromSlider, toSlider, toInput);
  fromInput.oninput = () => controlFromInput(fromSlider, fromInput, toInput, toSlider);
  toInput.oninput = () => controlToInput(toSlider, fromInput, toInput, toSlider);

});
document.addEventListener("DOMContentLoaded", () => {
  class ItcTabs {
    constructor(target, config) {
      const defaultConfig = {};
      this._config = Object.assign(defaultConfig, config);
      this._elTabs = typeof target === 'string' ? document.querySelector(target) : target;
      this._elButtons = this._elTabs.querySelectorAll('.tabs__btn');
      this._elPanes = this._elTabs.querySelectorAll('.tabs__pane');
      this._eventShow = new Event('tab.itc.change');
      this._init();
      this._events();
    }
    _init() {
      this._elTabs.setAttribute('role', 'tablist');
      this._elButtons.forEach((el, index) => {
        el.dataset.index = index;
        el.setAttribute('role', 'tab');
        this._elPanes[index].setAttribute('role', 'tabpanel');
      });
    }
    show(elLinkTarget) {
      const elPaneTarget = this._elPanes[elLinkTarget.dataset.index];
      const elLinkActive = this._elTabs.querySelector('.tabs__btn_active');
      const elPaneShow = this._elTabs.querySelector('.tabs__pane_show');
      if (elLinkTarget === elLinkActive) {
        return;
      }
      elLinkActive ? elLinkActive.classList.remove('tabs__btn_active') : null;
      elPaneShow ? elPaneShow.classList.remove('tabs__pane_show') : null;
      elLinkTarget.classList.add('tabs__btn_active');
      elPaneTarget.classList.add('tabs__pane_show');
      this._elTabs.dispatchEvent(this._eventShow);
      elLinkTarget.focus();
    }
    showByIndex(index) {
      const elLinkTarget = this._elButtons[index];
      elLinkTarget ? this.show(elLinkTarget) : null;
    };
    _events() {
      this._elTabs.addEventListener('click', (e) => {
        const target = e.target.closest('.tabs__btn');
        if (target) {
          e.preventDefault();
          this.show(target);
        }
      });
    }
  }

  // инициализация .tabs как табов
  new ItcTabs('.tabs2');
});
window.addEventListener("DOMContentLoaded", function () {
  [].forEach.call(document.querySelectorAll('.tel'), function (input) {
    var keyCode;
    function mask(event) {
      event.keyCode && (keyCode = event.keyCode);
      var pos = this.selectionStart;
      if (pos < 3) event.preventDefault();
      var matrix = "+7 (___) ___ ____",
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, ""),
        new_value = matrix.replace(/[_\d]/g, function (a) {
          return i < val.length ? val.charAt(i++) || def.charAt(i) : a
        });
      i = new_value.indexOf("_");
      if (i != -1) {
        i < 5 && (i = 3);
        new_value = new_value.slice(0, i)
      }
      var reg = matrix.substr(0, this.value.length).replace(/_+/g,
        function (a) {
          return "\\d{1," + a.length + "}"
        }).replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
      if (event.type == "blur" && this.value.length < 5) this.value = ""
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false)

  });

});
document.addEventListener("DOMContentLoaded", () => {
  (function ($) {
    var elActive = '';
    $.fn.selectCF = function (options) {

      // option
      var settings = $.extend({
        color: "#888888", // color
        backgroundColor: "#FFFFFF", // background
        change: function () { }, // event change
      }, options);

      return this.each(function () {

        var selectParent = $(this);
        list = [],
          html = '';

        //parameter CSS
        var width = $(selectParent).width();

        $(selectParent).hide();
        if ($(selectParent).children('option').length == 0) { return; }
        $(selectParent).children('option').each(function () {
          if ($(this).is(':selected')) { s = 1; title = $(this).text(); } else { s = 0; }
          list.push({
            value: $(this).attr('value'),
            text: $(this).text(),
            selected: s,
          })
        })

        // style
        var style = " background: " + settings.backgroundColor + "; color: " + settings.color + " ";

        html += "<ul class='selectCF'>";
        html += "<li>";
        html += "<span class='arrowCF ion-chevron-right' style='" + style + "'></span>";
        html += "<span class='titleCF' style='" + style + "; width:" + width + "px'>" + title + "</span>";
        html += "<span class='searchCF' style='" + style + "; width:" + width + "px'><input style='color:" + settings.color + "' /></span>";
        html += "<ul>";
        $.each(list, function (k, v) {
          s = (v.selected == 1) ? "selected" : "";
          html += "<li value=" + v.value + " class='" + s + "'>" + v.text + "</li>";
        })
        html += "</ul>";
        html += "</li>";
        html += "</ul>";
        $(selectParent).after(html);
        var customSelect = $(this).next('ul.selectCF'); // add Html
        var seachEl = $(this).next('ul.selectCF').children('li').children('.searchCF');
        var seachElOption = $(this).next('ul.selectCF').children('li').children('ul').children('li');
        var seachElInput = $(this).next('ul.selectCF').children('li').children('.searchCF').children('input');

        // handle active select
        $(customSelect).unbind('click').bind('click', function (e) {
          e.stopPropagation();
          if ($(this).hasClass('onCF')) {
            elActive = '';
            $(this).removeClass('onCF');
            $(this).removeClass('searchActive'); $(seachElInput).val('');
            $(seachElOption).show();
          } else {
            if (elActive != '') {
              $(elActive).removeClass('onCF');
              $(elActive).removeClass('searchActive'); $(seachElInput).val('');
              $(seachElOption).show();
            }
            elActive = $(this);
            $(this).addClass('onCF');
            $(seachEl).children('input').focus();
          }
        })

        // handle choose option
        var optionSelect = $(customSelect).children('li').children('ul').children('li');
        $(optionSelect).bind('click', function (e) {
          var value = $(this).attr('value');
          if ($(this).hasClass('selected')) {
            //
          } else {
            $(optionSelect).removeClass('selected');
            $(this).addClass('selected');
            $(customSelect).children('li').children('.titleCF').html($(this).html());
            $(selectParent).val(value);
            settings.change.call(selectParent); // call event change
          }
        })

        // handle search 
        $(seachEl).children('input').bind('keyup', function (e) {
          var value = $(this).val();
          if (value) {
            $(customSelect).addClass('searchActive');
            $(seachElOption).each(function () {
              if ($(this).text().search(new RegExp(value, "i")) < 0) {
                // not item
                $(this).fadeOut();
              } else {
                // have item
                $(this).fadeIn();
              }
            })
          } else {
            $(customSelect).removeClass('searchActive');
            $(seachElOption).fadeIn();
          }
        })

      });
    };
    $(document).click(function () {
      if (elActive != '') {
        $(elActive).removeClass('onCF');
        $(elActive).removeClass('searchActive');
      }
    })
  }(jQuery));

  $(function () {
    var event_change = $('#event-change');
    $(".select").selectCF({
      change: function () {
        var value = $(this).val();
        var text = $(this).children('option:selected').html();
        console.log(value + ' : ' + text);
        event_change.html(value + ' : ' + text);
      }
    });
  });
});
document.addEventListener("DOMContentLoaded", () => {
  var accordeonButtons = document.getElementsByClassName("accordeon__button");

  //пишем событие при клике на кнопки - вызов функции toggle
  for (var i = 0; i < accordeonButtons.length; i++) {
    var accordeonButton = accordeonButtons[i];

    accordeonButton.addEventListener("click", toggleItems, false);
  }

  //пишем функцию
  function toggleItems() {

    // переменная кнопки(актульная) с классом
    var itemClass = this.className;

    // добавляем всем кнопкам класс close
    for (var i = 0; i < accordeonButtons.length; i++) {
      accordeonButtons[i].className = "accordeon__button closed";
    }

    // закрываем все открытые панели с текстом
    var pannels = document.getElementsByClassName("accordeon__panel");
    for (var z = 0; z < pannels.length; z++) {
      pannels[z].style.maxHeight = 0;
    }

    // проверка. если кнопка имеет класс close при нажатии
    // к актуальной(нажатой) кнопке добававляем активный класс
    // а панели - которая находится рядом задаем высоту
    if (itemClass == "accordeon__button closed") {
      this.className = "accordeon__button active";
      var panel = this.nextElementSibling;
      panel.style.maxHeight = panel.scrollHeight + "px";
    }

  }
});
document.addEventListener("DOMContentLoaded", () => {
  var accordeonButtons2 = document.getElementsByClassName("accordeon__button2");

  //пишем событие при клике на кнопки - вызов функции toggle
  for (var i = 0; i < accordeonButtons2.length; i++) {
    var accordeonButton2 = accordeonButtons2[i];

    accordeonButton2.addEventListener("click", toggleItems, false);
  }

  //пишем функцию
  function toggleItems() {

    // переменная кнопки(актульная) с классом
    var itemClass2 = this.className;

    // добавляем всем кнопкам класс close
    for (var i = 0; i < accordeonButtons2.length; i++) {
      accordeonButtons2[i].className = "accordeon__button2 closed";
    }

    // закрываем все открытые панели с текстом
    var pannels2 = document.getElementsByClassName("accordeon__panel2");
    for (var z = 0; z < pannels2.length; z++) {
      pannels2[z].style.maxHeight = 0;
    }

    // проверка. если кнопка имеет класс close при нажатии
    // к актуальной(нажатой) кнопке добававляем активный класс
    // а панели - которая находится рядом задаем высоту
    if (itemClass2 == "accordeon__button2 closed") {
      this.className = "accordeon__button2 active";
      var panel2 = this.nextElementSibling;
      panel2.style.maxHeight = panel2.scrollHeight + "px";
    }

  }

});
document.addEventListener("DOMContentLoaded", () => {
  var accordeonButtons3 = document.getElementsByClassName("accordeon__button3");

  //пишем событие при клике на кнопки - вызов функции toggle
  for (var i = 0; i < accordeonButtons3.length; i++) {
    var accordeonButton3 = accordeonButtons3[i];

    accordeonButton3.addEventListener("click", toggleItems, false);
  }

  //пишем функцию
  function toggleItems() {

    // переменная кнопки(актульная) с классом
    var itemClass3 = this.className;

    // добавляем всем кнопкам класс close
    for (var i = 0; i < accordeonButtons3.length; i++) {
      accordeonButtons3[i].className = "accordeon__button3 closed";
    }

    // закрываем все открытые панели с текстом
    var pannels3 = document.getElementsByClassName("accordeon__panel3");
    for (var z = 0; z < pannels3.length; z++) {
      pannels3[z].style.maxHeight = 0;
    }

    // проверка. если кнопка имеет класс close при нажатии
    // к актуальной(нажатой) кнопке добававляем активный класс
    // а панели - которая находится рядом задаем высоту
    if (itemClass3 == "accordeon__button3 closed") {
      this.className = "accordeon__button3 active";
      var panel3 = this.nextElementSibling;
      panel3.style.maxHeight = panel3.scrollHeight + "px";
    }

  }

});
document.addEventListener("DOMContentLoaded", () => {
  var accordeonButtons4 = document.getElementsByClassName("accordeon__button4");

  //пишем событие при клике на кнопки - вызов функции toggle
  for (var i = 0; i < accordeonButtons4.length; i++) {
    var accordeonButton4 = accordeonButtons4[i];

    accordeonButton4.addEventListener("click", toggleItems, false);
  }

  //пишем функцию
  function toggleItems() {

    // переменная кнопки(актульная) с классом
    var itemClass4 = this.className;

    // добавляем всем кнопкам класс close
    for (var i = 0; i < accordeonButtons4.length; i++) {
      accordeonButtons4[i].className = "accordeon__button4 closed";
    }

    // закрываем все открытые панели с текстом
    var pannels4 = document.getElementsByClassName("accordeon__panel4");
    for (var z = 0; z < pannels4.length; z++) {
      pannels4[z].style.maxHeight = 0;
    }

    // проверка. если кнопка имеет класс close при нажатии
    // к актуальной(нажатой) кнопке добававляем активный класс
    // а панели - которая находится рядом задаем высоту
    if (itemClass4 == "accordeon__button4 closed") {
      this.className = "accordeon__button4 active";
      var panel4 = this.nextElementSibling;
      panel4.style.maxHeight = panel4.scrollHeight + "px";
    }

  }

});
document.addEventListener("DOMContentLoaded", () => {
  var accordeonButtons5 = document.getElementsByClassName("accordeon__button5");

  //пишем событие при клике на кнопки - вызов функции toggle
  for (var i = 0; i < accordeonButtons5.length; i++) {
    var accordeonButton5 = accordeonButtons5[i];

    accordeonButton5.addEventListener("click", toggleItems, false);
  }

  //пишем функцию
  function toggleItems() {

    // переменная кнопки(актульная) с классом
    var itemClass5 = this.className;

    // добавляем всем кнопкам класс close
    for (var i = 0; i < accordeonButtons5.length; i++) {
      accordeonButtons5[i].className = "accordeon__button5 closed";
    }

    // закрываем все открытые панели с текстом
    var pannels5 = document.getElementsByClassName("accordeon__panel5");
    for (var z = 0; z < pannels5.length; z++) {
      pannels5[z].style.maxHeight = 0;
    }

    // проверка. если кнопка имеет класс close при нажатии
    // к актуальной(нажатой) кнопке добававляем активный класс
    // а панели - которая находится рядом задаем высоту
    if (itemClass5 == "accordeon__button5 closed") {
      this.className = "accordeon__button5 active";
      var panel5 = this.nextElementSibling;
      panel5.style.maxHeight = panel5.scrollHeight + "px";
    }

  }

});
document.addEventListener("DOMContentLoaded", () => {
  var accordeonButtons6 = document.getElementsByClassName("accordeon__button6");

  //пишем событие при клике на кнопки - вызов функции toggle
  for (var i = 0; i < accordeonButtons6.length; i++) {
    var accordeonButton6 = accordeonButtons6[i];

    accordeonButton6.addEventListener("click", toggleItems, false);
  }

  //пишем функцию
  function toggleItems() {

    // переменная кнопки(актульная) с классом
    var itemClass6 = this.className;

    // добавляем всем кнопкам класс close
    for (var i = 0; i < accordeonButtons6.length; i++) {
      accordeonButtons6[i].className = "accordeon__button6 closed";
    }

    // закрываем все открытые панели с текстом
    var pannels6 = document.getElementsByClassName("accordeon__panel6");
    for (var z = 0; z < pannels6.length; z++) {
      pannels6[z].style.maxHeight = 0;
    }

    // проверка. если кнопка имеет класс close при нажатии
    // к актуальной(нажатой) кнопке добававляем активный класс
    // а панели - которая находится рядом задаем высоту
    if (itemClass6 == "accordeon__button6 closed") {
      this.className = "accordeon__button6 active";
      var panel6 = this.nextElementSibling;
      panel6.style.maxHeight = panel6.scrollHeight + "px";
    }

  }

});
document.addEventListener("DOMContentLoaded", () => {
  var accordeonButtons7 = document.getElementsByClassName("accordeon__button7");

  //пишем событие при клике на кнопки - вызов функции toggle
  for (var i = 0; i < accordeonButtons7.length; i++) {
    var accordeonButton7 = accordeonButtons7[i];

    accordeonButton7.addEventListener("click", toggleItems, false);
  }

  //пишем функцию
  function toggleItems() {

    // переменная кнопки(актульная) с классом
    var itemClass7 = this.className;

    // добавляем всем кнопкам класс close
    for (var i = 0; i < accordeonButtons7.length; i++) {
      accordeonButtons7[i].className = "accordeon__button7 closed";
    }

    // закрываем все открытые панели с текстом
    var pannels7 = document.getElementsByClassName("accordeon__panel7");
    for (var z = 0; z < pannels7.length; z++) {
      pannels7[z].style.maxHeight = 0;
    }

    // проверка. если кнопка имеет класс close при нажатии
    // к актуальной(нажатой) кнопке добававляем активный класс
    // а панели - которая находится рядом задаем высоту
    if (itemClass7 == "accordeon__button7 closed") {
      this.className = "accordeon__button7 active";
      var panel7 = this.nextElementSibling;
      panel7.style.maxHeight = panel7.scrollHeight + "px";
    }

  }

});
document.addEventListener("DOMContentLoaded", () => {
  var accordeonButtons8 = document.getElementsByClassName("accordeon__button8");

  //пишем событие при клике на кнопки - вызов функции toggle
  for (var i = 0; i < accordeonButtons8.length; i++) {
    var accordeonButton8 = accordeonButtons8[i];

    accordeonButton8.addEventListener("click", toggleItems, false);
  }

  //пишем функцию
  function toggleItems() {

    // переменная кнопки(актульная) с классом
    var itemClass8 = this.className;

    // добавляем всем кнопкам класс close
    for (var i = 0; i < accordeonButtons8.length; i++) {
      accordeonButtons8[i].className = "accordeon__button8 closed";
    }

    // закрываем все открытые панели с текстом
    var pannels8 = document.getElementsByClassName("accordeon__panel8");
    for (var z = 0; z < pannels8.length; z++) {
      pannels8[z].style.maxHeight = 0;
    }

    // проверка. если кнопка имеет класс close при нажатии
    // к актуальной(нажатой) кнопке добававляем активный класс
    // а панели - которая находится рядом задаем высоту
    if (itemClass8 == "accordeon__button8 closed") {
      this.className = "accordeon__button8 active";
      var panel8 = this.nextElementSibling;
      panel8.style.maxHeight = panel8.scrollHeight + "px";
    }

  }

});
document.addEventListener("DOMContentLoaded", () => {
  var accordeonButtons9 = document.getElementsByClassName("accordeon__button9");

  //пишем событие при клике на кнопки - вызов функции toggle
  for (var i = 0; i < accordeonButtons9.length; i++) {
    var accordeonButton9 = accordeonButtons9[i];

    accordeonButton9.addEventListener("click", toggleItems, false);
  }

  //пишем функцию
  function toggleItems() {

    // переменная кнопки(актульная) с классом
    var itemClass9 = this.className;

    // добавляем всем кнопкам класс close
    for (var i = 0; i < accordeonButtons9.length; i++) {
      accordeonButtons9[i].className = "accordeon__button9 closed";
    }

    // закрываем все открытые панели с текстом
    var pannels9 = document.getElementsByClassName("accordeon__panel9");
    for (var z = 0; z < pannels9.length; z++) {
      pannels9[z].style.maxHeight = 0;
    }

    // проверка. если кнопка имеет класс close при нажатии
    // к актуальной(нажатой) кнопке добававляем активный класс
    // а панели - которая находится рядом задаем высоту
    if (itemClass9 == "accordeon__button9 closed") {
      this.className = "accordeon__button9 active";
      var panel9 = this.nextElementSibling;
      panel9.style.maxHeight = panel9.scrollHeight + "px";
    }

  }

});
document.addEventListener("DOMContentLoaded", () => {
  $(function () {
    $('.slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      slidesToScroll: 1,
      prevArrow: '<button type="button" class="slick-prev"><img src="/img/le.png"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="/img/ri.png"></button>',
      asNavFor: '.slider-nav',
      responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 1,
          }
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 1,
          }
        },
        {
          breakpoint: 768,
          settings: {
            dots: true,
            slidesToShow: 1,
          }
        }
      ]
    });
    $('.slider-nav').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: '.slider',
      prevArrow: '<button type="button" class="slick-prev"><img src="/img/1.png"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="/img/2.png"></button>',
      focusOnSelect: true,
      vertical: true,
      responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 4,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 4,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 4,
          }
        }
      ]
    });
  });

});
document.addEventListener("DOMContentLoaded", () => {
  $(function () {
    $('.slider2').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      slidesToScroll: 1,
      prevArrow: '<button type="button" class="slick-prev"><img src="/img/le2.png"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="/img/ri2.png"></button>',
      asNavFor: '.slider-nav2',
      responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 1,
          }
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 1,
          }
        },
        {
          breakpoint: 768,
          settings: {
            dots: true,
            slidesToShow: 1,
          }
        }
      ]
    });
    $('.slider-nav2').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: '.slider2',
      prevArrow: '<button type="button" class="slick-prev"><img src="/img/1.png"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="/img/2.png"></button>',
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 4,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 4,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 4,
          }
        }
      ]
    });
  });

});
document.addEventListener("DOMContentLoaded", () => {
  var splashInput = document.querySelector(".splash-input");
  var splashVal = parseFloat(splashInput.value);
  document.querySelector(".counter-elem__plus").onclick = function () {
    splashInput.value = ++splashVal;
  }
  document.querySelector(".counter-elem__minus").onclick = function () {
    if (splashVal > 1) {
      splashInput.value = --splashVal;
    }
  }
});
document.addEventListener("DOMContentLoaded", () => {
  $('body').on('click', '.password-control', function () {
    if ($('#password-input').attr('type') == 'password') {
      $(this).addClass('view');
      $('#password-input').attr('type', 'text');
    } else {
      $(this).removeClass('view');
      $('#password-input').attr('type', 'password');
    }
    return false;
  });
});
document.addEventListener("DOMContentLoaded", () => {
  $('body').on('click', '.password-control2', function () {
    if ($('#password-input2').attr('type') == 'password') {
      $(this).addClass('view');
      $('#password-input2').attr('type', 'text');
    } else {
      $(this).removeClass('view');
      $('#password-input2').attr('type', 'password');
    }
    return false;
  });
});
document.addEventListener("DOMContentLoaded", () => {
  $('body').on('click', '.password-control3', function () {
    if ($('#password-input3').attr('type') == 'password') {
      $(this).addClass('view');
      $('#password-input3').attr('type', 'text');
    } else {
      $(this).removeClass('view');
      $('#password-input3').attr('type', 'password');
    }
    return false;
  });
});
document.addEventListener("DOMContentLoaded", () => {
  $('body').on('click', '.password-control4', function () {
    if ($('#password-input4').attr('type') == 'password') {
      $(this).addClass('view');
      $('#password-input4').attr('type', 'text');
    } else {
      $(this).removeClass('view');
      $('#password-input4').attr('type', 'password');
    }
    return false;
  });
});
document.addEventListener("DOMContentLoaded", () => {
  //popup1
  let popupBg = document.querySelector('.popup__bg');
  let popup = document.querySelector('.popup');
  let openPopupButtons = document.querySelectorAll('.a1');
  let closePopupButton = document.querySelector('.close-popup');

  openPopupButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      popupBg.classList.add('active');
      popup.classList.add('active');
    })
  });

  closePopupButton.addEventListener('click', () => {
    popupBg.classList.remove('active');
    popup.classList.remove('active');
  });

  document.addEventListener('click', (e) => {
    if (e.target === popupBg) {
      popupBg.classList.remove('active');
      popup.classList.remove('active');
    }
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      //ваша функция закрытия окна
      popupBg.classList.remove('active');
      popup.classList.remove('active');
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  //popup2
  let popupBg2 = document.querySelector('.popup__bg2');
  let popup2 = document.querySelector('.popup2');
  let openPopupButtons2 = document.querySelectorAll('.a2');
  let closePopupButton2 = document.querySelector('.close-popup2');

  openPopupButtons2.forEach((button) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      popupBg2.classList.add('active');
      popup2.classList.add('active');
    })
  });

  closePopupButton2.addEventListener('click', () => {
    popupBg2.classList.remove('active');
    popup2.classList.remove('active');
  });

  document.addEventListener('click', (e) => {
    if (e.target === popupBg2) {
      popupBg2.classList.remove('active');
      popup2.classList.remove('active');
    }
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      //ваша функция закрытия окна
      popupBg2.classList.remove('active');
      popup2.classList.remove('active');
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  //popup3
  let popupBg3 = document.querySelector('.popup__bg3');
  let popup3 = document.querySelector('.popup3');
  let openPopupButtons3 = document.querySelectorAll('.a3');
  let closePopupButton3 = document.querySelector('.close-popup3');

  openPopupButtons3.forEach((button) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      popupBg3.classList.add('active');
      popup3.classList.add('active');
    })
  });

  closePopupButton3.addEventListener('click', () => {
    popupBg3.classList.remove('active');
    popup3.classList.remove('active');
  });

  document.addEventListener('click', (e) => {
    if (e.target === popupBg3) {
      popupBg3.classList.remove('active');
      popup3.classList.remove('active');
    }
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      //ваша функция закрытия окна
      popupBg3.classList.remove('active');
      popup3.classList.remove('active');
    }
  });
});
document.addEventListener('DOMContentLoaded', function () {
  $('.my').change(function () {
    if ($(this).val() != '') $(this).prev().text('Выбрано файлов: ' + $(this)[0].files.length);
    else $(this).prev().text('Выберите файлы');
  });
});
document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.swiper1', {
    slidesPerView: 1,
    pagination: {
      el: ".swiper-pagination1",
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  const swiper2 = new Swiper('.swiper2', {
    slidesPerView: 4,
    spaceBetween: 26,
    pagination: {
      el: ".swiper-pagination2",
      type: "progressbar",
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        spaceBetween: 0,
        loop: true,
        slidesPerView: 1
      },
      767: {
        spaceBetween: 10,
        slidesPerView: 2
      },
      992: {
        spaceBetween: 10,
        slidesPerView: 3
      },
      1200: {
        spaceBetween: 26,
        slidesPerView: 4,
        pagination: {
          el: ".swiper-pagination2",
          type: "progressbar"
        }
      }
    }
  });
  const swiper3 = new Swiper('.swiper3', {
    slidesPerView: 6,
    spaceBetween: 28,
    pagination: {
      el: ".swiper-pagination3",
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        spaceBetween: 0,
        loop: true,
        slidesPerView: 1
      },
      767: {
        spaceBetween: 10,
        slidesPerView: 2
      },
      992: {
        spaceBetween: 20,
        slidesPerView: 4
      },
      1200: {
        spaceBetween: 28,
        slidesPerView: 6
      }
    }
  });
  const swiper4 = new Swiper('.swiper4', {
    slidesPerView: 4,
    spaceBetween: 34,
    pagination: {
      el: ".swiper-pagination4",
    },
    navigation: {
      nextEl: '.swiper-button-next4',
      prevEl: '.swiper-button-prev4',
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        spaceBetween: 0,
        loop: true,
        slidesPerView: 1
      },
      767: {
        spaceBetween: 10,
        slidesPerView: 2
      },
      992: {
        spaceBetween: 20,
        slidesPerView: 2
      },
      1200: {
        spaceBetween: 34,
        slidesPerView: 4
      }
    }
  });
  const swiper44 = new Swiper('.swiper44', {
    slidesPerView: 3,
    spaceBetween: 78,
    pagination: {
      el: ".swiper-pagination44",
    },
    navigation: {
      nextEl: '.swiper-button-next44',
      prevEl: '.swiper-button-prev44',
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        spaceBetween: 0,
        loop: true,
        slidesPerView: 1
      },
      767: {
        spaceBetween: 10,
        slidesPerView: 2
      },
      992: {
        spaceBetween: 20,
        slidesPerView: 2
      },
      1200: {
        spaceBetween: 78,
        slidesPerView: 3
      }
    }
  });
  const swiper46 = new Swiper('.swiper46', {
    slidesPerView: 2,
    spaceBetween: 48,
    pagination: {
      el: ".swiper-pagination44",
    },
    navigation: {
      nextEl: '.swiper-button-next44',
      prevEl: '.swiper-button-prev44',
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        spaceBetween: 0,
        loop: true,
        slidesPerView: 1
      },
      767: {
        spaceBetween: 10,
        slidesPerView: 2
      },
      992: {
        spaceBetween: 20,
        slidesPerView: 2
      },
      1200: {
        spaceBetween: 48,
        slidesPerView: 2
      }
    }
  });
  const swiper5 = new Swiper('.swiper5', {
    slidesPerView: 8,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination5",
    },
    navigation: {
      nextEl: '.swiper-button-next5',
      prevEl: '.swiper-button-prev5',
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        spaceBetween: 10,
        loop: true,
        slidesPerView: 2
      },
      767: {
        spaceBetween: 10,
        slidesPerView: 4
      },
      992: {
        spaceBetween: 20,
        slidesPerView: 6
      },
      1200: {
        spaceBetween: 30,
        slidesPerView: 8
      }
    }
  });
  const swiper8 = new Swiper('.swiper8', {
    slidesPerView: 12,
    spaceBetween: 11,
    pagination: {
      el: ".swiper-pagination8",
    },
    navigation: {
      nextEl: '.swiper-button-next8',
      prevEl: '.swiper-button-prev8',
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        spaceBetween: 5,
        loop: true,
        slidesPerView: 3
      },
      576: {
        spaceBetween: 10,
        slidesPerView: 7
      },
      767: {
        spaceBetween: 10,
        slidesPerView: 7
      },
      992: {
        spaceBetween: 10,
        slidesPerView: 10
      },
      1200: {
        spaceBetween: 12,
        slidesPerView: 11
      }
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  $('.about__link').click(function (event) {
    $(this).css('display', 'none');
    $('.about__see').slideToggle();
    $('.about__see').addClass('opened');
    return false;
  });
});
document.addEventListener("DOMContentLoaded", () => {
  $('.about__link2').click(function (event) {
    $(this).css('display', 'none');
    $('.about__see2').slideToggle();
    $('.about__see2').addClass('opened');
    return false;
  });
});
document.addEventListener("DOMContentLoaded", () => {
  $('.about__link3').click(function (event) {
    $(this).css('display', 'none');
    $('.about__see3').slideToggle();
    $('.about__see3').addClass('opened');
    return false;
  });
});
document.addEventListener("DOMContentLoaded", () => {
  $('.about__link4').click(function (event) {
    $(this).css('display', 'none');
    $('.about__see4').slideToggle();
    $('.about__see4').addClass('opened');
    return false;
  });
});
document.addEventListener("DOMContentLoaded", () => {
  $('.about__link5').click(function (event) {
    $(this).css('display', 'none');
    $('.about__see5').slideToggle();
    $('.about__see5').addClass('opened');
    return false;
  });
});
document.addEventListener("DOMContentLoaded", () => {
  $('.about__link6').click(function (event) {
    $(this).css('display', 'none');
    $('.about__see6').slideToggle();
    $('.about__see6').addClass('opened');
    return false;
  });
});
document.addEventListener("DOMContentLoaded", () => {
  $('.about__link7').click(function (event) {
    $(this).css('display', 'none');
    $('.about__see7').slideToggle();
    $('.about__see7').addClass('opened');
    return false;
  });
});
document.addEventListener("DOMContentLoaded", () => {
  $('.about__link8').click(function (event) {
    $(this).css('display', 'none');
    $('.about__see8').slideToggle();
    $('.about__content8').addClass('opened');
    return false;
  });
});
document.addEventListener("DOMContentLoaded", () => {
  $('.about__link9').click(function (event) {
    $(this).css('display', 'none');
    $('.about__see9').slideToggle();
    $('.about__see9').addClass('opened');
    return false;
  });
});
document.addEventListener("DOMContentLoaded", () => {
  $('.about__link10').click(function (event) {
    $(this).css('display', 'none');
    $('.about__see10').slideToggle();
    $('.about__see10').addClass('opened');
    return false;
  });
});
document.addEventListener("DOMContentLoaded", () => {
  $('.about__link11').click(function (event) {
    $(this).css('display', 'none');
    $('.about__see11').slideToggle();
    $('.about__see11').addClass('opened');
    return false;
  });
});
document.addEventListener("DOMContentLoaded", () => {
  $('.about__link12').click(function (event) {
    $(this).css('display', 'none');
    $('.about__see12').slideToggle();
    $('.about__see12').addClass('opened');
    return false;
  });
});

document.addEventListener("DOMContentLoaded", () => {
  let menuBtn = document.querySelector('.menu-btn');
  let menu = document.querySelector('.menu');
  menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
  });
});
document.addEventListener("DOMContentLoaded", () => {
  let menuBtn2 = document.querySelector('.menu-btn2');
  let menu2 = document.querySelector('.menu2');
  menuBtn2.addEventListener('click', function () {
    menuBtn2.classList.toggle('active');
    menu2.classList.toggle('active');
  });
});
// svg
$(function () {
  jQuery('img.svg').each(function () {
    var $img = jQuery(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');

    jQuery.get(imgURL, function (data) {
      // Get the SVG tag, ignore the rest
      var $svg = jQuery(data).find('svg');

      // Add replaced image's ID to the new SVG
      if (typeof imgID !== 'undefined') {
        $svg = $svg.attr('id', imgID);
      }
      // Add replaced image's classes to the new SVG
      if (typeof imgClass !== 'undefined') {
        $svg = $svg.attr('class', imgClass + ' replaced-svg');
      }

      // Remove any invalid XML tags as per http://validator.w3.org
      $svg = $svg.removeAttr('xmlns:a');

      // Check if the viewport is set, else we gonna set it if we can.
      if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
        $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
      }

      // Replace image with new SVG
      $img.replaceWith($svg);

    }, 'xml');

  });
});
