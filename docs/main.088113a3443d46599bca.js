(self.webpackChunklaptop_ecommerce =
  self.webpackChunklaptop_ecommerce || []).push([
  [179],
  {
    202: (t, e, o) => {
      'use strict';
      o.r(e);
    },
    607: function (t, e, o) {
      'use strict';
      var n =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        };
      Object.defineProperty(e, '__esModule', { value: !0 }),
        o(202),
        (0, n(o(267)).default)();
    },
    453: function (t, e, o) {
      'use strict';
      var n =
          (this && this.__spreadArray) ||
          function (t, e, o) {
            if (o || 2 === arguments.length)
              for (var n, a = 0, r = e.length; a < r; a++)
                (!n && a in e) ||
                  (n || (n = Array.prototype.slice.call(e, 0, a)),
                  (n[a] = e[a]));
            return t.concat(n || Array.prototype.slice.call(e));
          },
        a =
          (this && this.__importDefault) ||
          function (t) {
            return t && t.__esModule ? t : { default: t };
          };
      Object.defineProperty(e, '__esModule', { value: !0 });
      var r = a(o(790)),
        i = (function () {
          function t() {
            (this.$laptopList = document.getElementById('laptopList')),
              (this.$laptopsSection = document.getElementById('laptops')),
              (this.laptops = []),
              (this.laptopService = new r.default());
          }
          return (
            (t.prototype.loadLaptops = function () {
              var t = this;
              this.$laptopsSection.appendChild(this.loaderTemplate()),
                this.laptopService.getAllLaptops().then(function (e) {
                  (t.laptops = n([], e, !0)), t.renderLaptops(t.laptops);
                });
            }),
            (t.prototype.renderLaptops = function (t) {
              var e = this,
                o = document.createDocumentFragment();
              document.getElementById('loader').remove(),
                t.forEach(function (t) {
                  var n = e.laptopTemplate(t);
                  o.appendChild(n);
                }),
                this.$laptopList.appendChild(o);
            }),
            (t.prototype.convertToColombianCurrency = function (t) {
              return new Intl.NumberFormat('es-CO', {
                style: 'currency',
                currency: 'COP',
              }).format(t);
            }),
            (t.prototype.loaderTemplate = function () {
              var t = document.createElement('div');
              return (
                t.classList.add('loader'), t.setAttribute('id', 'loader'), t
              );
            }),
            (t.prototype.laptopTemplate = function (t) {
              var e = t.id,
                o = t.name,
                n = t.price,
                a = t.model,
                r = t.image,
                i = document.createElement('article');
              i.classList.add('laptop'), i.setAttribute('id', e);
              var p = this.convertToColombianCurrency(n);
              return (
                (i.innerHTML = '\n      <img\n        src="'
                  .concat(r, '"\n        class="laptop__image"\n        alt="')
                  .concat(o, '"\n        title="')
                  .concat(
                    o,
                    '"\n      />\n\n      <div class="details">\n        <span class="details__name">'
                  )
                  .concat(o, '</span>\n        <span class="details__model">')
                  .concat(
                    a,
                    '</span>\n      </div>\n\n      <p class="laptop__price">'
                  )
                  .concat(
                    p,
                    '</p>\n\n      <button class="laptop__button" type="button">Comprar</button>\n    '
                  )),
                i
              );
            }),
            t
          );
        })();
      e.default = i;
    },
    164: function (t, e, o) {
      'use strict';
      var n =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        };
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.LaptopList = void 0);
      var a = n(o(453));
      e.LaptopList = a.default;
    },
    876: function (t, e, o) {
      'use strict';
      var n =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        };
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.loadEvent = void 0);
      var a = n(o(189));
      e.loadEvent = a.default;
    },
    189: (t, e) => {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = function (t) {
          window.addEventListener('DOMContentLoaded', function () {
            t.loadLaptops();
          });
        });
    },
    807: (t, e, o) => {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 });
      var n = o(164),
        a = o(876);
      e.default = function () {
        var t = new n.LaptopList();
        (0, a.loadEvent)(t);
      };
    },
    267: function (t, e, o) {
      'use strict';
      var n =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        };
      Object.defineProperty(e, '__esModule', { value: !0 });
      var a = n(o(807));
      e.default = function () {
        (0, a.default)();
      };
    },
    790: function (t, e, o) {
      'use strict';
      var n =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        };
      Object.defineProperty(e, '__esModule', { value: !0 });
      var a = n(o(921)),
        r = (function () {
          function t() {
            this.laptops = a.default;
          }
          return (
            (t.prototype.getAllLaptops = function () {
              var t = this;
              return new Promise(function (e) {
                setTimeout(function () {
                  return e(t.laptops);
                }, 1e3);
              });
            }),
            (t.prototype.searchLaptopsByName = function (t) {
              return this.laptops.filter(function (e) {
                return e.name.toLowerCase().includes(t.toLowerCase());
              });
            }),
            (t.prototype.filterLaptopsByBrand = function (t) {
              return this.laptops.filter(function (e) {
                return e.brand === t;
              });
            }),
            t
          );
        })();
      e.default = r;
    },
    921: (t) => {
      'use strict';
      t.exports = JSON.parse(
        '[{"id":"1","name":"Laptop HP","brand":"HP","price":2000000,"model":"14-CK2091LA","image":"https://i.imgur.com/sjLedMg.jpg"},{"id":"2","name":"Laptop Lenovo","brand":"Lenovo","price":1500000,"model":"Ideapad 320","image":"https://i.imgur.com/aLNL8VV.jpg"},{"id":"3","name":"Laptop Apple","brand":"Apple","price":5000000,"model":"Mack Book","image":"https://i.imgur.com/6HS0mEN.jpg"},{"id":"4","name":"Laptop Dell","brand":"Dell","price":1500000,"model":"Inspiron 3501","image":"https://i.imgur.com/e69NZkH.jpg"},{"id":"5","name":"Laptop Samsung","brand":"Samsung","price":3000000,"model":"Book S","image":"https://i.imgur.com/IMS9Rzm.jpg"},{"id":"6","name":"Laptop HP","brand":"HP","price":2500000,"model":"14-K2091LA","image":"https://i.imgur.com/UMB378J.jpg"},{"id":"7","name":"Laptop Lenovo","brand":"Lenovo","price":1800000,"model":"Ideapad 300","image":"https://i.imgur.com/nBVnHoJ.jpg"},{"id":"8","name":"Laptop Samsung","brand":"Samsung","price":3500000,"model":"NP300V4A","image":"https://i.imgur.com/p59EyD3.jpg"}]'
      );
    },
  },
  0,
  [[607, 666]],
]);
//# sourceMappingURL=main.088113a3443d46599bca.js.map
