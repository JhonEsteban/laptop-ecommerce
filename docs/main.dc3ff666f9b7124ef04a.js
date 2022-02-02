(self.webpackChunklaptop_ecommerce =
  self.webpackChunklaptop_ecommerce || []).push([
  [179],
  {
    202: (t, e, n) => {
      'use strict';
      n.r(e);
    },
    607: function (t, e, n) {
      'use strict';
      var r =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        };
      Object.defineProperty(e, '__esModule', { value: !0 }),
        n(202),
        (0, r(n(267)).default)();
    },
    234: (t, e) => {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 });
      var n = (function () {
        function t() {
          this.count = 0;
        }
        return (
          (t.prototype.increment = function () {
            this.count++;
          }),
          (t.prototype.decrement = function () {
            this.count--;
          }),
          (t.prototype.decrementCustomCount = function (t) {
            this.count = this.count - t;
          }),
          (t.prototype.reset = function () {
            this.count = 0;
          }),
          t
        );
      })();
      e.default = n;
    },
    453: function (t, e, n) {
      'use strict';
      var r =
        (this && this.__spreadArray) ||
        function (t, e, n) {
          if (n || 2 === arguments.length)
            for (var r, o = 0, a = e.length; o < a; o++)
              (!r && o in e) ||
                (r || (r = Array.prototype.slice.call(e, 0, o)), (r[o] = e[o]));
          return t.concat(r || Array.prototype.slice.call(e));
        };
      Object.defineProperty(e, '__esModule', { value: !0 });
      var o = n(731),
        a = (function () {
          function t() {
            (this.$laptopList = document.getElementById('laptopList')),
              (this.$laptopsSection = document.getElementById('laptops')),
              (this.laptops = []),
              (this.laptopService = new o.LaptopService()),
              (this.currencyService = new o.CurrencyService());
          }
          return (
            (t.prototype.loadLaptops = function () {
              var t = this;
              this.$laptopsSection.appendChild(this.loaderTemplate()),
                this.laptopService.getAllLaptops().then(function (e) {
                  (t.laptops = r([], e, !0)), t.renderLaptops(t.laptops);
                });
            }),
            (t.prototype.searchLaptopsByName = function (t) {
              var e = this.laptopService.searchLaptopsByName(t);
              this.renderLaptops(e);
            }),
            (t.prototype.filterLaptopsByBrand = function (t) {
              if ('Filtrar por marcas' !== t) {
                var e = this.laptopService.filterLaptopsByBrand(t);
                this.renderLaptops(e);
              } else this.renderLaptops(this.laptops);
            }),
            (t.prototype.filterLaptopById = function (t) {
              return this.laptopService.filterLaptopById(t);
            }),
            (t.prototype.renderLaptops = function (t) {
              var e = this,
                n = document.createDocumentFragment();
              document.getElementById('loader').classList.add('hide'),
                (this.$laptopList.innerHTML = ''),
                t.forEach(function (t) {
                  var r = e.laptopTemplate(t);
                  n.appendChild(r);
                }),
                this.$laptopList.appendChild(n);
            }),
            (t.prototype.loaderTemplate = function () {
              var t = document.createElement('div');
              return (
                t.classList.add('loader'), t.setAttribute('id', 'loader'), t
              );
            }),
            (t.prototype.laptopTemplate = function (t) {
              var e = t.id,
                n = t.name,
                r = t.price,
                o = t.model,
                a = t.image,
                i = document.createElement('article');
              i.classList.add('laptop'), i.setAttribute('id', e);
              var c = this.currencyService.convertToColombianCurrency(r);
              return (
                (i.innerHTML = '\n      <img\n        src="'
                  .concat(a, '"\n        class="laptop__image"\n        alt="')
                  .concat(n, '"\n        title="')
                  .concat(
                    n,
                    '"\n      />\n\n      <div class="details">\n        <span class="details__name">'
                  )
                  .concat(n, '</span>\n        <span class="details__model">')
                  .concat(
                    o,
                    '</span>\n      </div>\n\n      <p class="laptop__price">'
                  )
                  .concat(
                    c,
                    '</p>\n\n      <button class="laptop-button" type="button">\n        <span class="laptop-button__text">Añadir al</span> \n\n        <img  \n          src="https://i.imgur.com/01DHmE6.png" \n          class="laptop-button__image"\n          alt="Logo del carrito de compras" \n          title="Logo del carrito de compras"  \n        />\n      </button>\n    '
                  )),
                i
              );
            }),
            t
          );
        })();
      e.default = a;
    },
    529: function (t, e, n) {
      'use strict';
      var r =
          (this && this.__assign) ||
          function () {
            return (r =
              Object.assign ||
              function (t) {
                for (var e, n = 1, r = arguments.length; n < r; n++)
                  for (var o in (e = arguments[n]))
                    Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                return t;
              }).apply(this, arguments);
          },
        o =
          (this && this.__spreadArray) ||
          function (t, e, n) {
            if (n || 2 === arguments.length)
              for (var r, o = 0, a = e.length; o < a; o++)
                (!r && o in e) ||
                  (r || (r = Array.prototype.slice.call(e, 0, o)),
                  (r[o] = e[o]));
            return t.concat(r || Array.prototype.slice.call(e));
          },
        a =
          (this && this.__importDefault) ||
          function (t) {
            return t && t.__esModule ? t : { default: t };
          };
      Object.defineProperty(e, '__esModule', { value: !0 });
      var i = a(n(234)),
        c = n(731),
        u = (function () {
          function t() {
            (this.$cartContainer = document.getElementById('cartContainer')),
              (this.$cartCounter = document.getElementById('cartCounter')),
              (this.$totalPrice = document.getElementById('totalPrice')),
              (this.$totalLaptops = document.getElementById('totalLaptops')),
              (this.cart = []),
              (this.counter = new i.default()),
              (this.currencyService = new c.CurrencyService()),
              (this.alertService = new c.AlertService()),
              this.updateCounter();
          }
          return (
            (t.prototype.loadCart = function () {
              0 === this.cart.length &&
                0 === this.counter.count &&
                (this.$cartContainer.appendChild(this.cartEmptyTemplate()),
                this.getTotalLaptopsPrice());
            }),
            (t.prototype.addLaptopToCart = function (t) {
              this.checkAndCleanDuplicateLaptops(t),
                this.renderCart(this.cart),
                this.counter.increment(),
                this.updateCounter(),
                this.getTotalLaptopsPrice(),
                this.alertService.showSuccessAlert(
                  'Laptop agregada al carrito!'
                );
            }),
            (t.prototype.clearCart = function () {
              (this.cart = []),
                this.renderCart(this.cart),
                this.counter.reset(),
                this.updateCounter(),
                this.loadCart(),
                this.alertService.showSuccessAlert('Se vació el carrito!');
            }),
            (t.prototype.deleteLaptopFromCart = function (t) {
              var e = this.getLaptopCartAmountById(t);
              (this.cart = this.cart.filter(function (e) {
                return e.id !== t;
              })),
                this.renderCart(this.cart),
                this.counter.decrementCustomCount(e),
                this.updateCounter(),
                this.getTotalLaptopsPrice(),
                this.loadCart(),
                this.alertService.showSuccessAlert(
                  'Laptop eliminada del carrito!'
                );
            }),
            (t.prototype.incrementLaptopAmount = function (t) {
              (this.cart = this.cart.map(function (e) {
                return e.id === t ? r(r({}, e), { amount: e.amount + 1 }) : e;
              })),
                this.renderCart(this.cart),
                this.counter.increment(),
                this.updateCounter(),
                this.getTotalLaptopsPrice();
            }),
            (t.prototype.decrementLaptopAmount = function (t) {
              var e = this.getLaptopCartAmountById(t),
                n = document.querySelector('.options__two');
              1 !== e
                ? ((this.cart = this.cart.map(function (e) {
                    return e.id === t
                      ? r(r({}, e), { amount: e.amount - 1 })
                      : e;
                  })),
                  this.renderCart(this.cart),
                  this.counter.decrement(),
                  this.updateCounter(),
                  this.getTotalLaptopsPrice())
                : n.classList.add('inactive');
            }),
            (t.prototype.cartEmptyTemplate = function () {
              var t = document.createElement('div');
              return (
                t.classList.add('cart-empty'),
                (t.innerHTML = '<p>No hay laptops en el carrito :-(</p>'),
                t
              );
            }),
            (t.prototype.getLaptopCartAmountById = function (t) {
              return this.cart.filter(function (e) {
                return e.id === t;
              })[0].amount;
            }),
            (t.prototype.checkAndCleanDuplicateLaptops = function (t) {
              this.cart.some(function (e) {
                return e.id === t.id;
              })
                ? (this.cart = this.cart.map(function (e) {
                    return e.id === t.id
                      ? r(r({}, e), { amount: e.amount + 1 })
                      : e;
                  }))
                : (this.cart = o([t], this.cart, !0));
            }),
            (t.prototype.renderCart = function (t) {
              var e = this,
                n = document.createDocumentFragment();
              (this.$cartContainer.innerHTML = ''),
                t.forEach(function (t) {
                  var r = e.laptopCartTemplate(t);
                  n.appendChild(r);
                }),
                this.$cartContainer.appendChild(n);
            }),
            (t.prototype.laptopCartTemplate = function (t) {
              var e = t.id,
                n = t.name,
                r = t.price,
                o = t.amount,
                a = document.createElement('article');
              a.classList.add('cart-product'), a.setAttribute('id', e);
              var i = this.currencyService.convertToColombianCurrency(r);
              return (
                (a.innerHTML = '\n      <h3 class="cart-product__name">'
                  .concat(n, '</h3>\n      <h4 class="cart-product__amount">')
                  .concat(
                    o,
                    '</h4>\n\n      <div class="options">\n        <button\n          class="options__one"\n          type="button"\n          title="Aumentar cantidad"\n        >\n          +\n        </button>\n\n        <button\n          class="options__two"\n          type="button"\n          title="Disminuir cantidad"\n        >\n          -\n        </button>\n      </div>\n\n      <span class="cart-product__price">'
                  )
                  .concat(
                    i,
                    '</span>\n\n      <button\n        class="cart-product__close"\n        type="button"\n        title="Eliminar laptop del carrito"\n      >\n          X\n      </button>'
                  )),
                a
              );
            }),
            (t.prototype.updateCounter = function () {
              (this.$cartCounter.textContent = this.counter.count.toString()),
                (this.$totalLaptops.textContent = this.counter.count.toString());
            }),
            (t.prototype.getTotalLaptopsPrice = function () {
              var t = this.cart.reduce(function (t, e) {
                  return 1 !== e.amount ? t + e.price * e.amount : t + e.price;
                }, 0),
                e = this.currencyService.convertToColombianCurrency(t);
              this.$totalPrice.textContent = e;
            }),
            t
          );
        })();
      e.default = u;
    },
    164: function (t, e, n) {
      'use strict';
      var r =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        };
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.ShoppingCart = e.LaptopList = void 0);
      var o = r(n(453));
      e.LaptopList = o.default;
      var a = r(n(529));
      e.ShoppingCart = a.default;
    },
    680: (t, e) => {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = function () {
          document.getElementById('modalCart').classList.toggle('open');
        });
    },
    103: function (t, e, n) {
      'use strict';
      var r =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        };
      Object.defineProperty(e, '__esModule', { value: !0 });
      var o = r(n(910)),
        a = r(n(307)),
        i = r(n(909));
      e.default = function (t, e) {
        var n = t.target;
        switch (n.classList[0]) {
          case 'cart-product__close':
            (0, a.default)(n, e);
            break;
          case 'options__one':
            (0, i.default)(n, e);
            break;
          case 'options__two':
            (0, o.default)(n, e);
        }
      };
    },
    969: (t, e) => {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = function (t) {
          document
            .getElementById('clearCart')
            .addEventListener('click', function () {
              t.clearCart();
            });
        });
    },
    955: function (t, e, n) {
      'use strict';
      var r =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        };
      Object.defineProperty(e, '__esModule', { value: !0 });
      var o = r(n(680));
      e.default = function () {
        document.getElementById('cart').addEventListener('click', o.default);
      };
    },
    768: function (t, e, n) {
      'use strict';
      var r =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        };
      Object.defineProperty(e, '__esModule', { value: !0 });
      var o = r(n(103));
      e.default = function (t) {
        document
          .getElementById('cartContainer')
          .addEventListener('click', function (e) {
            (0, o.default)(e, t);
          });
      };
    },
    233: function (t, e, n) {
      'use strict';
      var r =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        };
      Object.defineProperty(e, '__esModule', { value: !0 });
      var o = r(n(162));
      e.default = function (t, e) {
        document
          .getElementById('laptopList')
          .addEventListener('click', function (n) {
            (0, o.default)(n, t, e);
          });
      };
    },
    876: function (t, e, n) {
      'use strict';
      var r =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        };
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.laptopCardClickEvent = e.cartButtonClickEvent = e.cartIconClickEvent = e.laptopClickEvent = e.selectChangeEvent = e.submitEvent = e.loadEvent = void 0);
      var o = r(n(189));
      e.loadEvent = o.default;
      var a = r(n(465));
      e.submitEvent = a.default;
      var i = r(n(155));
      e.selectChangeEvent = i.default;
      var c = r(n(233));
      e.laptopClickEvent = c.default;
      var u = r(n(955));
      e.cartIconClickEvent = u.default;
      var s = r(n(969));
      e.cartButtonClickEvent = s.default;
      var p = r(n(768));
      e.laptopCardClickEvent = p.default;
    },
    189: (t, e) => {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = function (t, e) {
          window.addEventListener('DOMContentLoaded', function () {
            t.loadLaptops(), e.loadCart();
          });
        });
    },
    155: function (t, e, n) {
      'use strict';
      var r =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        };
      Object.defineProperty(e, '__esModule', { value: !0 });
      var o = r(n(681));
      e.default = function (t) {
        document
          .getElementById('formSelect')
          .addEventListener('change', function (e) {
            (0, o.default)(e, t);
          });
      };
    },
    465: function (t, e, n) {
      'use strict';
      var r =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        };
      Object.defineProperty(e, '__esModule', { value: !0 });
      var o = r(n(498));
      e.default = function (t) {
        var e = document.getElementById('form');
        e.addEventListener('submit', function (n) {
          n.preventDefault(), (0, o.default)(t, e);
        });
      };
    },
    498: (t, e) => {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = function (t, e) {
          var n = document.getElementById('formSearchInput').value.trim();
          t.searchLaptopsByName(n), e.reset();
        });
    },
    681: (t, e) => {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = function (t, e) {
          var n = t.target.value;
          e.filterLaptopsByBrand(n);
        });
    },
    910: (t, e) => {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = function (t, e) {
          var n,
            r = (null === (n = t.parentElement) || void 0 === n
              ? void 0
              : n.parentElement
            ).getAttribute('id');
          e.decrementLaptopAmount(r);
        });
    },
    307: (t, e) => {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = function (t, e) {
          var n = t.parentElement.getAttribute('id');
          e.deleteLaptopFromCart(n);
        });
    },
    909: (t, e) => {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = function (t, e) {
          var n,
            r = (null === (n = t.parentElement) || void 0 === n
              ? void 0
              : n.parentElement
            ).getAttribute('id');
          e.incrementLaptopAmount(r);
        });
    },
    162: function (t, e, n) {
      'use strict';
      var r =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        };
      Object.defineProperty(e, '__esModule', { value: !0 });
      var o = r(n(80)),
        a = r(n(928)),
        i = r(n(576));
      e.default = function (t, e, n) {
        var r = t.target;
        if ((0, o.default)(r)) {
          var c = (0, a.default)(r),
            u = (0, i.default)(e, c);
          n.addLaptopToCart(u);
        }
      };
    },
    928: (t, e) => {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = function (t) {
          var e;
          return ('laptop-button' !== t.classList[0]
            ? null === (e = t.parentElement) || void 0 === e
              ? void 0
              : e.parentElement
            : t.parentElement
          ).getAttribute('id');
        });
    },
    576: (t, e) => {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = function (t, e) {
          var n = t.filterLaptopById(e)[0];
          return {
            id: n.id,
            name: ''.concat(n.name, ' ').concat(n.model),
            price: n.price,
            amount: 1,
          };
        });
    },
    80: (t, e) => {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = function (t) {
          var e = [
            'laptop-button',
            'laptop-button__text',
            'laptop-button__image',
          ];
          return (
            t.classList.contains(e[0]) ||
            t.classList.contains(e[1]) ||
            t.classList.contains(e[2])
          );
        });
    },
    807: (t, e, n) => {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 });
      var r = n(164),
        o = n(876);
      e.default = function () {
        var t = new r.LaptopList(),
          e = new r.ShoppingCart();
        (0, o.loadEvent)(t, e),
          (0, o.submitEvent)(t),
          (0, o.selectChangeEvent)(t),
          (0, o.cartIconClickEvent)(),
          (0, o.laptopClickEvent)(t, e),
          (0, o.cartButtonClickEvent)(e),
          (0, o.laptopCardClickEvent)(e);
      };
    },
    267: function (t, e, n) {
      'use strict';
      var r =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        };
      Object.defineProperty(e, '__esModule', { value: !0 });
      var o = r(n(807));
      e.default = function () {
        (0, o.default)();
      };
    },
    599: function (t, e, n) {
      'use strict';
      var r =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        };
      Object.defineProperty(e, '__esModule', { value: !0 });
      var o = r(n(455)),
        a = (function () {
          function t() {}
          return (
            (t.prototype.showSuccessAlert = function (t) {
              o.default.fire({
                position: 'center',
                icon: 'success',
                title: t,
                showConfirmButton: !1,
                timer: 800,
              });
            }),
            t
          );
        })();
      e.default = a;
    },
    963: (t, e) => {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 });
      var n = (function () {
        function t() {}
        return (
          (t.prototype.convertToColombianCurrency = function (t) {
            return new Intl.NumberFormat('es-CO', {
              style: 'currency',
              currency: 'COP',
            }).format(t);
          }),
          t
        );
      })();
      e.default = n;
    },
    731: function (t, e, n) {
      'use strict';
      var r =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        };
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.AlertService = e.CurrencyService = e.LaptopService = void 0);
      var o = r(n(790));
      e.LaptopService = o.default;
      var a = r(n(963));
      e.CurrencyService = a.default;
      var i = r(n(599));
      e.AlertService = i.default;
    },
    790: function (t, e, n) {
      'use strict';
      var r =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        };
      Object.defineProperty(e, '__esModule', { value: !0 });
      var o = r(n(921)),
        a = (function () {
          function t() {
            this.laptops = o.default;
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
            (t.prototype.filterLaptopById = function (t) {
              return this.laptops.filter(function (e) {
                return e.id === t;
              });
            }),
            t
          );
        })();
      e.default = a;
    },
    921: (t) => {
      'use strict';
      t.exports = JSON.parse(
        '[{"id":"1","name":"Laptop HP","brand":"HP","price":2000000,"model":"14-CK2091LA","image":"https://i.imgur.com/sjLedMg.jpg"},{"id":"2","name":"Laptop Lenovo","brand":"Lenovo","price":1500000,"model":"Ideapad 320","image":"https://i.imgur.com/aLNL8VV.jpg"},{"id":"3","name":"Laptop Apple","brand":"Apple","price":5000000,"model":"Mack Book","image":"https://i.imgur.com/6HS0mEN.jpg"},{"id":"4","name":"Laptop Dell","brand":"Dell","price":1500000,"model":"Inspiron 3501","image":"https://i.imgur.com/e69NZkH.jpg"},{"id":"5","name":"Laptop Samsung","brand":"Samsung","price":3000000,"model":"Book S","image":"https://i.imgur.com/IMS9Rzm.jpg"},{"id":"6","name":"Laptop HP","brand":"HP","price":2500000,"model":"14-K2091LA","image":"https://i.imgur.com/UMB378J.jpg"},{"id":"7","name":"Laptop Lenovo","brand":"Lenovo","price":1800000,"model":"Ideapad 300","image":"https://i.imgur.com/nBVnHoJ.jpg"},{"id":"8","name":"Laptop Samsung","brand":"Samsung","price":3500000,"model":"NP300V4A","image":"https://i.imgur.com/p59EyD3.jpg"}]'
      );
    },
  },
  0,
  [[607, 666, 216]],
]);
//# sourceMappingURL=main.dc3ff666f9b7124ef04a.js.map
