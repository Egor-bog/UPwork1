(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! D:\RS_school\My projects\UPWork\UPwork1\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "1OnI":
    /*!**********************************************!*\
      !*** ./src/app/nav-var/nav-bar.component.ts ***!
      \**********************************************/

    /*! exports provided: NavBarComponent */

    /***/
    function OnI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavBarComponent", function () {
        return NavBarComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var NavBarComponent = function NavBarComponent() {
        _classCallCheck(this, NavBarComponent);
      };

      NavBarComponent.ɵfac = function NavBarComponent_Factory(t) {
        return new (t || NavBarComponent)();
      };

      NavBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NavBarComponent,
        selectors: [["nav-var"]],
        decls: 1,
        vars: 0,
        template: function NavBarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Navigation ");
          }
        },
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavBarComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'nav-var',
            template: "\n    Navigation\n  "
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "E4Ix":
    /*!***************************************************!*\
      !*** ./src/app/calculator/card-holder.service.ts ***!
      \***************************************************/

    /*! exports provided: CardHolder */

    /***/
    function E4Ix(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CardHolder", function () {
        return CardHolder;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _card_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./card.service */
      "vvJJ");

      var CardHolder = /*#__PURE__*/function () {
        function CardHolder() {
          var imageIds = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
          var index = arguments.length > 1 ? arguments[1] : undefined;

          _classCallCheck(this, CardHolder);

          this.imageIds = imageIds;
          this.index = index;
          this.cards = [];
          this.cards = this.imageIds.map(function (id) {
            return new _card_service__WEBPACK_IMPORTED_MODULE_1__["Card"](id);
          });
          this.equity = null;
        }

        _createClass(CardHolder, [{
          key: "class",
          value: function _class() {
            return this.index === -1 ? 'board-label' : 'category-label';
          }
        }, {
          key: "label",
          value: function label() {
            var playerId = this.index + 1;

            if (this.index === -1) {
              return {
                name: 'Board',
                id: 'board',
                playerId: 'board'
              };
            }

            if (this.isHero()) {
              return {
                name: 'Hero',
                id: 'hero',
                playerId: playerId
              };
            } else {
              return {
                name: "P. ".concat(this.index),
                id: 'villain' + this.index.toString(),
                playerId: playerId
              };
            }
          }
        }, {
          key: "isHero",
          value: function isHero() {
            return this.index == 0;
          }
        }, {
          key: "exportValues",
          value: function exportValues() {
            return this.cards.map(function (c) {
              return c.serverValue();
            }).filter(function (a) {
              return a;
            });
          }
        }]);

        return CardHolder;
      }();

      CardHolder.ɵfac = function CardHolder_Factory(t) {
        return new (t || CardHolder)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"]('imageIds'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"]('isHero'));
      };

      CardHolder.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: CardHolder,
        factory: CardHolder.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardHolder, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: ['imageIds']
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: ['isHero']
            }]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "LkI3":
    /*!****************************************************!*\
      !*** ./src/app/calculator/calculator.component.ts ***!
      \****************************************************/

    /*! exports provided: CalculatorComponent */

    /***/
    function LkI3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CalculatorComponent", function () {
        return CalculatorComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _calculator_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./calculator.service */
      "nhOS");
      /* harmony import */


      var angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! angular-responsive-carousel */
      "T6vt");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _card_holder_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./card-holder.component */
      "s2wp");

      var _c0 = ["myCarousel"];

      function CalculatorComponent_div_14_span_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatorComponent_div_14_span_2_Template_img_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var i_r5 = ctx.$implicit;

            var suit_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r6.calculator.selectCard(i_r5, suit_r3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r5 = ctx.$implicit;

          var suit_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("invisible", ctx_r4.calculator.selectedCards[i_r5 + suit_r3]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate2"]("deck-card ", i_r5, "", suit_r3, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("id", "", i_r5, "", suit_r3, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r4.calculator.cardToSrc(i_r5 + suit_r3), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function CalculatorComponent_div_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CalculatorComponent_div_14_span_2_Template, 2, 9, "span", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.calculator.cardIndices);
        }
      }

      function CalculatorComponent_li_20_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatorComponent_li_20_div_1_Template_img_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

            var i_r12 = ctx.$implicit;

            var suit_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r13.calculator.selectCard(i_r12, suit_r10);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r12 = ctx.$implicit;

          var suit_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("invisible", ctx_r11.calculator.selectedCards[i_r12 + suit_r10]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate2"]("deck-card ", i_r12, "", suit_r10, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("id", "", i_r12, "", suit_r10, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r11.calculator.cardToSrc(i_r12 + suit_r10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function CalculatorComponent_li_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CalculatorComponent_li_20_div_1_Template, 2, 9, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.calculator.cardIndices);
        }
      }

      function CalculatorComponent_card_holder_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "card-holder", 25);
        }

        if (rf & 2) {
          var player_r17 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("calculator", ctx_r2.calculator)("player", player_r17);
        }
      }

      var CalculatorComponent = /*#__PURE__*/function () {
        function CalculatorComponent() {
          _classCallCheck(this, CalculatorComponent);

          this.currentSuitSelected = 0;
        }

        _createClass(CalculatorComponent, [{
          key: "toCdn",
          value: function toCdn(file) {
            return cdnUrl[file] || file;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.calculator = new _calculator_service__WEBPACK_IMPORTED_MODULE_1__["CalculatorService"]();
          }
        }, {
          key: "moveToIndex",
          value: function moveToIndex(i) {
            var _this = this;

            Array.from(document.getElementsByClassName('carousel-dot')).forEach(function (suitIndicator, index) {
              if (Array.from(suitIndicator.classList).find(function (i) {
                return i == 'carousel-dot-active';
              })) {
                _this.currentSuitSelected = index;
              }
            });
            var className;

            if (i < this.currentSuitSelected) {
              className = 'carousel-arrow-prev';
            } else {
              className = 'carousel-arrow-next';
            }

            var element = document.getElementsByClassName(className)[0];
            this.clickDelay(element, Math.abs(this.currentSuitSelected - i));
          }
        }, {
          key: "clickDelay",
          value: function clickDelay(element, times) {
            var _this2 = this;

            if (times == 0) return;
            element.click();
            setTimeout(function () {
              _this2.clickDelay(element, times - 1);
            }, 100);
          }
        }]);

        return CalculatorComponent;
      }();

      CalculatorComponent.ɵfac = function CalculatorComponent_Factory(t) {
        return new (t || CalculatorComponent)();
      };

      CalculatorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CalculatorComponent,
        selectors: [["calculator"]],
        viewQuery: function CalculatorComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.myCarousel = _t.first);
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_calculator_service__WEBPACK_IMPORTED_MODULE_1__["CalculatorService"]])],
        decls: 51,
        vars: 24,
        consts: [["id", "calc-wrapper"], ["id", "cards-to-select-mobile"], [1, "title-calc"], ["id", "suits"], ["id", "hearts", 1, "left", "suit-select"], [3, "src", "click"], ["id", "diamonds", 1, "left", "suit-select"], ["id", "spades", 1, "left", "suit-select"], ["id", "clubs", 1, "left", "suit-select"], ["cellsToShow", "1", "height", "255", "transitionDuration", "10", 3, "arrows", "dots", "arrowsOutside"], [4, "ngFor", "ngForOf"], [1, "wrapper-conteiner"], ["id", "cards-to-select"], [1, "cards-to-select-wrapper"], ["class", "card-list", 4, "ngFor", "ngForOf"], [1, "wrapper-shot-txt"], [1, "short-text"], ["id", "add-player"], [1, "calc-btn", "add-player-btn", 3, "disabled", "click"], ["id", "board"], ["id", "board-bg"], ["id", "board-content"], ["id", "board-grid"], [3, "calculator", "player", 4, "ngFor", "ngForOf"], ["id", "add-player-mobile"], [3, "calculator", "player"], ["id", "actions"], ["id", "twice-wrapper", 1, "left"], ["id", "run-twice", 1, "calc-btn", 3, "disabled", "click"], ["id", "three-wrapper", 1, "left"], ["id", "run-three", 1, "calc-btn", 3, "disabled", "click"], [1, "clear"], ["id", "results"], [1, "carousel-cell"], ["class", "deck-card-wrapper left", 3, "invisible", 4, "ngFor", "ngForOf"], [1, "deck-card-wrapper", "left"], [3, "id", "src", "click"], [1, "card-list"]],
        template: function CalculatorComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Texas Hold'em Poker Odds Calculator ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatorComponent_Template_img_click_6_listener() {
              return ctx.moveToIndex(0);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatorComponent_Template_img_click_8_listener() {
              return ctx.moveToIndex(1);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatorComponent_Template_img_click_10_listener() {
              return ctx.moveToIndex(2);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatorComponent_Template_img_click_12_listener() {
              return ctx.moveToIndex(3);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "carousel", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, CalculatorComponent_div_14_Template, 3, 1, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h1", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Texas Hold'em Poker Odds Calculator ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ul", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, CalculatorComponent_li_20_Template, 3, 1, "li", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatorComponent_Template_button_click_25_listener() {
              return ctx.calculator.addNewPlayer();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " + Add player");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, CalculatorComponent_card_holder_32_Template, 1, 2, "card-holder", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatorComponent_Template_button_click_34_listener() {
              return ctx.calculator.addNewPlayer();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " + Add player");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "card-holder", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatorComponent_Template_button_click_40_listener() {
              return ctx.calculator.sendAjaxAndSetResults(2);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Run it twice");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatorComponent_Template_button_click_44_listener() {
              return ctx.calculator.sendAjaxAndSetResults(3);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Run it three times");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " *depending on amount missing cards, percentage may be an approximation only (up to ~0.5% diff on a full missing board) ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.toCdn("assets/images/heart.png"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.toCdn("assets/images/diamond.png"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.toCdn("assets/images/spade.png"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.toCdn("assets/images/club.png"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("arrows", true)("dots", true)("arrowsOutside", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.calculator.suits);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.calculator.suits);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled-btn", ctx.calculator.isPlayersLimitReached());

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.calculator.isPlayersLimitReached());

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.calculator.players);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled-btn", ctx.calculator.isPlayersLimitReached());

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.calculator.isPlayersLimitReached());

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("calculator", ctx.calculator)("player", ctx.calculator.board);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled-btn", !ctx.calculator.validData);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.calculator.validData);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled-btn", !ctx.calculator.validData);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.calculator.validData);
          }
        },
        directives: [angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_2__["CarouselComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _card_holder_component__WEBPACK_IMPORTED_MODULE_4__["CardHolderComponent"]],
        styles: ["[_nghost-%COMP%]     carousel .carousel-arrows{\r\n    visibility: hidden;\r\n}\r\n\r\n[_nghost-%COMP%]     carousel .carousel-dots{\r\n    visibility: hidden;\r\n}\r\n\r\n[_nghost-%COMP%]     carousel .carousel-cells .carousel-cell {\r\n    height: 500px;\r\n}\r\n\r\n.invisible[_ngcontent-%COMP%] {\r\n    visibility: hidden;\r\n}\r\n\r\n#suits[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n\r\n#cards-to-select-mobile[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n\r\n.center[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\r\n\r\n#subtitle[_ngcontent-%COMP%] {\r\n    font-size: 1em;\r\n}\r\n\r\n#cards-to-select[_ngcontent-%COMP%] {\r\n    margin: 0 auto;\r\n    max-width: 1200px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n.cards-to-select-wrapper[_ngcontent-%COMP%] {\r\n    max-width: 1200px;\r\n   \r\n}\r\n\r\n.card-list[_ngcontent-%COMP%] {\r\n    margin: auto;\r\n    padding: 10px;\r\n}\r\n\r\n.left[_ngcontent-%COMP%] {\r\n    float: left;\r\n}\r\n\r\n.clear[_ngcontent-%COMP%] {\r\n    clear: both;\r\n}\r\n\r\nul[_ngcontent-%COMP%] {\r\n    list-style: none;\r\n\r\n}\r\n\r\n#board[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    margin: 20px 0px 25px calc((100% - 759px) * 0.5);\r\n    left: 8px;\r\n    grid-area: 7 / 1 / 11 / 2;\r\n    justify-self: start;\r\n    align-self: start;\r\n}\r\n\r\n#board-bg[_ngcontent-%COMP%] {\r\n    border: 8px solid #2b074d;\r\n    background-color: rgba(255, 255, 255, 0.36);\r\n    border-radius: 200px;\r\n    position: absolute;\r\n    width: 759px;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n}\r\n\r\n#board-content[_ngcontent-%COMP%] {\r\n    height: auto;\r\n    width: 792px;\r\n    position: relative;\r\n}\r\n\r\n#board-grid[_ngcontent-%COMP%] {\r\n    position: static;\r\n    height: auto;\r\n    width: 100%;\r\n    min-height: 432px;\r\n}\r\n\r\n#add-player-mobile[_ngcontent-%COMP%] {\r\n    visibility: hidden;\r\n}\r\n\r\n#add-player[_ngcontent-%COMP%]   .add-player-btn[_ngcontent-%COMP%] {\r\n     background-color: #3333; \r\n}\r\n\r\n#add-player[_ngcontent-%COMP%] {\r\n    visibility: visible;\r\n    width: 100%;\r\n    margin: 0 auto;\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\nbutton.add-player-btn[_ngcontent-%COMP%] {\r\n    font-size: 12px ;\r\n    width:225px;\r\n    display:block;\r\n    border:1px solid #fff;\r\n    margin: 20px auto 0;\r\n    font-family: 'Dosis', sans;\r\n    font-weight:200;\r\n    text-transform:uppercase;\r\n    text-decoration:none;\r\n    text-align:center;\r\n    opacity:.8;\r\n    letter-spacing: 1px;\r\n    transition: all 300ms cubic-bezier(0.250, 0.250, 0.750, 0.750); \r\n}\r\n\r\nbutton.add-player-btn[_ngcontent-%COMP%]:hover {\r\n    padding: 21px 40px 19px;\r\n    width:225px;\r\n    border:1px solid teal;\r\n    margin: 20px auto;\r\n    opacity:1;\r\n    letter-spacing: 4px;\r\n    transition: all 300ms cubic-bezier(0.250, 0.250, 0.750, 0.750); \r\n}\r\n\r\n.calc-btn[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    padding: 20px 40px;\r\n    color: white;\r\n    \r\n}\r\n\r\n.calc-btn[_ngcontent-%COMP%]::before {\r\n    bottom: -15px;\r\n    height: 15px;\r\n    width: 100%;\r\n    left: 8px;\r\n    transform: skewX(45deg);\r\n    background-color: #196090;\r\n}\r\n\r\n.calc-btn[_ngcontent-%COMP%]::after {\r\n    right: -15px;\r\n    height: 100%;\r\n    width: 15px;\r\n    bottom: -8px;\r\n    transform: skewY(45deg);\r\n    background-color: #124364;\r\n}\r\n\r\n.calc-btn[_ngcontent-%COMP%]:active {\r\n    margin-left: 10px;\r\n    margin-top: 10px;\r\n}\r\n\r\n.calc-btn[_ngcontent-%COMP%]:active::before {\r\n    bottom: -5px;\r\n    height: 5px;\r\n    left: 3px;\r\n}\r\n\r\n.calc-btn[_ngcontent-%COMP%]:active::after {\r\n    right: -5px;\r\n    width: 5px;\r\n    bottom: -3px;\r\n}\r\n\r\n#actions[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    padding-bottom: 4rem;\r\n}\r\n\r\n.calc-btn[_ngcontent-%COMP%]{\r\n    background-color: #3333; \r\n    margin: 0 1rem;\r\n    font-size: 12px ;\r\n    width:320px;\r\n    display:block;\r\n    border:1px solid #fff;\r\n    font-family: 'Dosis', sans;\r\n    font-weight:200;\r\n    text-transform:uppercase;\r\n    text-decoration:none;\r\n    text-align:center;\r\n    opacity:.8;\r\n    letter-spacing: 1px;\r\n    transition: all 300ms cubic-bezier(0.250, 0.250, 0.750, 0.750); \r\n}\r\n\r\n.calc-btn[_ngcontent-%COMP%]:hover{\r\n    padding: 21px 40px 19px;\r\n    width:320px;\r\n    border:1px solid teal;\r\n    opacity:1;\r\n    letter-spacing: 4px;\r\n    transition: all 300ms cubic-bezier(0.250, 0.250, 0.750, 0.750); \r\n}\r\n\r\n.disabled-btn[_ngcontent-%COMP%] {\r\n    color :rgba(255, 255, 255, 0.36)\r\n}\r\n\r\n.spinner[_ngcontent-%COMP%] {\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-top: 50px;\r\n}\r\n\r\n.deck-card-wrapper[_ngcontent-%COMP%] {\r\n    padding: 4px !important;\r\n}\r\n\r\n\r\n\r\n@media only screen and (max-width: 600px) {\r\n    #suits[_ngcontent-%COMP%] {\r\n        height: 40px;\r\n        display: block;\r\n    }\r\n\r\n    .title-calc[_ngcontent-%COMP%] {\r\n        font-size: 17px;\r\n    }\r\n\r\n    \r\n\r\n    .suit-select[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n        padding: 2px;\r\n        height: 25px;\r\n        margin-left: auto;\r\n        margin-right: auto;\r\n        display: block;\r\n    }\r\n\r\n    .suit-select[_ngcontent-%COMP%] {\r\n        opacity: 0.6;\r\n        box-shadow: 0 2px 5px 4px rgba(0,0,0,0.2);\r\n        cursor: pointer;\r\n        margin: 0 2px 0 2px;\r\n        width: calc(25% - 8px);\r\n        background-color: dimgray;\r\n        border: 2px outset currentColor;\r\n    }\r\n\r\n    .title[_ngcontent-%COMP%] {\r\n        font-size: 10px;\r\n    }\r\n\r\n    #cards-to-select-mobile[_ngcontent-%COMP%] {\r\n        display: inline-block;\r\n        width: 100%;\r\n    }\r\n\r\n    #subtitle[_ngcontent-%COMP%] {\r\n        display: none;\r\n    }\r\n\r\n    .card-list[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n    }\r\n\r\n    #board-bg[_ngcontent-%COMP%] {\r\n        display: none;\r\n    }\r\n\r\n    #board[_ngcontent-%COMP%] {\r\n        margin: 2px;\r\n    }\r\n\r\n    #board-grid[_ngcontent-%COMP%] {\r\n        min-height: 0px;\r\n    }\r\n\r\n    #board-content[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n    }\r\n\r\n    \r\n    #twice-wrapper[_ngcontent-%COMP%] {\r\n        margin-right: 0px;\r\n\r\n    }\r\n\r\n    #three-wrapper[_ngcontent-%COMP%] {\r\n        float: right;\r\n        margin-top: 1rem;\r\n    }\r\n\r\n    .calc-btn[_ngcontent-%COMP%] {\r\n        padding: 10px 20px;\r\n        font-size: 14px;\r\n    }\r\n\r\n    #actions[_ngcontent-%COMP%] {\r\n        margin: 0;\r\n        flex-direction: column;\r\n        align-items: center;\r\n    }\r\n\r\n    #cards-to-select[_ngcontent-%COMP%] {\r\n        display: none;\r\n        \r\n    }\r\n\r\n    \r\n    .card-list[_ngcontent-%COMP%] {\r\n        width: auto;\r\n        height: auto;\r\n    }\r\n\r\n    .animate[_ngcontent-%COMP%] {\r\n        transition: transform 0.3s ease-out;\r\n    }\r\n\r\n    #cards-to-select-mobile[_ngcontent-%COMP%] {\r\n        height: 270px;\r\n        position: relative;\r\n    }\r\n\r\n    .slider-wrap[_ngcontent-%COMP%] {\r\n        width: 360px;\r\n        height: 500px;\r\n        position: absolute;\r\n        margin-left: 20px;\r\n    }\r\n\r\n    .slider[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n        height: 100%;\r\n        overflow: hidden;\r\n    }\r\n\r\n    .ms-touch.slider[_ngcontent-%COMP%] {\r\n        overflow-x: scroll;\r\n        overflow-y: hidden;\r\n\r\n        -ms-overflow-style: none;\r\n        -ms-scroll-chaining: none;\r\n        -ms-scroll-snap-type: mandatory;\r\n        -ms-scroll-snap-points-x: snapInterval(0%, 100%);\r\n    }\r\n\r\n    .holder[_ngcontent-%COMP%] {\r\n        width: 400%;\r\n        max-height: 500px;\r\n        height: 100%;\r\n        overflow-y: hidden;\r\n    }\r\n\r\n    .slide-wrapper[_ngcontent-%COMP%] {\r\n        width: 25%;\r\n        height: 100%;\r\n        float: left;\r\n        height: 500px;\r\n        position: relative;\r\n        overflow: hidden;\r\n    }\r\n\r\n    .slide[_ngcontent-%COMP%] {\r\n        height: 100%;\r\n        position: relative;\r\n    }\r\n\r\n    .temp[_ngcontent-%COMP%] {\r\n        position: absolute;\r\n        z-index: 1;\r\n        color: white;\r\n        font-size: 100px;\r\n        bottom: 15px;\r\n        left: 15px;\r\n        font-family: 'Josefin Slab', serif;\r\n        font-weight: 100;\r\n    }\r\n\r\n    .slide[_ngcontent-%COMP%]:before {\r\n        content: \"\";\r\n        position: absolute;\r\n        z-index: 1;\r\n        bottom: 0;\r\n        left: 0;\r\n        width: 100%;\r\n        height: 40%;\r\n    }\r\n\r\n    .slide[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n        width: 300px;\r\n        height: 500px;\r\n        z-index: 0;\r\n    }\r\n\r\n    #add-player-mobile[_ngcontent-%COMP%]   .add-player-btn[_ngcontent-%COMP%] {\r\n        background-color: #3333;\r\n    }\r\n\r\n    #add-player[_ngcontent-%COMP%] {\r\n        visibility: hidden;\r\n    }\r\n    #add-player-mobile[_ngcontent-%COMP%] {\r\n        visibility: visible;\r\n        width: 100%;\r\n        height: 50px;\r\n        margin-bottom: 20px;\r\n    }\r\n\r\n    .deck-card-wrapper[_ngcontent-%COMP%] {\r\n        padding: 9px !important;\r\n    }\r\n}\r\n\r\nimg.deck-card[_ngcontent-%COMP%] {\r\n    height: 55px !important;\r\n    width: auto !important;\r\n}\r\n\r\n.title-calc[_ngcontent-%COMP%] {\r\n    color : rgb(163, 163, 163);\r\n    text-align: center;\r\n}\r\n\r\n.wrapper-conteiner[_ngcontent-%COMP%] {\r\n    margin: 0 auto;\r\n    max-width: 1200px;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.short-text[_ngcontent-%COMP%] {\r\n    margin: 0 auto;\r\n    max-width: 780px;\r\n    color: rgb(163, 163, 163);\r\n    font-size: 18px;\r\n    text-align: center;\r\n}\r\n\r\n@media only screen and (max-width: 1093px) {\r\n    .wrapper-conteiner[_ngcontent-%COMP%] {\r\n        flex-direction: column;\r\n\r\n    }\r\n\r\n    .wrapper-shot-txt[_ngcontent-%COMP%] {\r\n        display: flex;\r\n        flex-direction: column;\r\n    }\r\n    \r\n    \r\n    .short-text[_ngcontent-%COMP%] {\r\n        order: 1;\r\n    }\r\n    \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbGN1bGF0b3IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCOztBQUdBO0lBQ0ksaUJBQWlCOztBQUVyQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksZ0JBQWdCOztBQUVwQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnREFBZ0Q7SUFDaEQsU0FBUztJQUNULHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLDJDQUEyQztJQUMzQyxvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixNQUFNO0lBQ04sUUFBUTtJQUNSLFNBQVM7SUFDVCxPQUFPO0FBQ1g7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osV0FBVztJQUNYLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtLQUNLLHVCQUF1QjtBQUM1Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsY0FBYztJQUNkLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7O0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNY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QUFhO1FBQ2Isc0JBQXNCO0lBQzFCOzs7SUFHQTtRQUNJLFFBQVE7SUFDWjs7QUFFSiIsImZpbGUiOiJjYWxjdWxhdG9yLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAgY2Fyb3VzZWwgLmNhcm91c2VsLWFycm93c3tcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIGNhcm91c2VsIC5jYXJvdXNlbC1kb3Rze1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgY2Fyb3VzZWwgLmNhcm91c2VsLWNlbGxzIC5jYXJvdXNlbC1jZWxsIHtcclxuICAgIGhlaWdodDogNTAwcHg7XHJcbn1cclxuXHJcbi5pbnZpc2libGUge1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcblxyXG4jc3VpdHMge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuI2NhcmRzLXRvLXNlbGVjdC1tb2JpbGUge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmNlbnRlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbiNzdWJ0aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxufVxyXG5cclxuI2NhcmRzLXRvLXNlbGVjdCB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIG1heC13aWR0aDogMTIwMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5cclxuLmNhcmRzLXRvLXNlbGVjdC13cmFwcGVyIHtcclxuICAgIG1heC13aWR0aDogMTIwMHB4O1xyXG4gICBcclxufVxyXG5cclxuLmNhcmQtbGlzdCB7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4ubGVmdCB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuLmNsZWFyIHtcclxuICAgIGNsZWFyOiBib3RoO1xyXG59XHJcblxyXG51bCB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG5cclxufVxyXG5cclxuI2JvYXJkIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbjogMjBweCAwcHggMjVweCBjYWxjKCgxMDAlIC0gNzU5cHgpICogMC41KTtcclxuICAgIGxlZnQ6IDhweDtcclxuICAgIGdyaWQtYXJlYTogNyAvIDEgLyAxMSAvIDI7XHJcbiAgICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xyXG4gICAgYWxpZ24tc2VsZjogc3RhcnQ7XHJcbn1cclxuXHJcbiNib2FyZC1iZyB7XHJcbiAgICBib3JkZXI6IDhweCBzb2xpZCAjMmIwNzRkO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjM2KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDc1OXB4O1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG59XHJcblxyXG4jYm9hcmQtY29udGVudCB7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB3aWR0aDogNzkycHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbiNib2FyZC1ncmlkIHtcclxuICAgIHBvc2l0aW9uOiBzdGF0aWM7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDQzMnB4O1xyXG59XHJcblxyXG4jYWRkLXBsYXllci1tb2JpbGUge1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcblxyXG4jYWRkLXBsYXllciAuYWRkLXBsYXllci1idG4ge1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMzOyBcclxufVxyXG5cclxuI2FkZC1wbGF5ZXIge1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuYnV0dG9uLmFkZC1wbGF5ZXItYnRuIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweCA7XHJcbiAgICB3aWR0aDoyMjVweDtcclxuICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICBib3JkZXI6MXB4IHNvbGlkICNmZmY7XHJcbiAgICBtYXJnaW46IDIwcHggYXV0byAwO1xyXG4gICAgZm9udC1mYW1pbHk6ICdEb3NpcycsIHNhbnM7XHJcbiAgICBmb250LXdlaWdodDoyMDA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgb3BhY2l0eTouODtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMzAwbXMgY3ViaWMtYmV6aWVyKDAuMjUwLCAwLjI1MCwgMC43NTAsIDAuNzUwKTtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDMwMG1zIGN1YmljLWJlemllcigwLjI1MCwgMC4yNTAsIDAuNzUwLCAwLjc1MCk7XHJcbiAgICAgICAgLW8tdHJhbnNpdGlvbjogYWxsIDMwMG1zIGN1YmljLWJlemllcigwLjI1MCwgMC4yNTAsIDAuNzUwLCAwLjc1MCk7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcyBjdWJpYy1iZXppZXIoMC4yNTAsIDAuMjUwLCAwLjc1MCwgMC43NTApOyAvKiBsaW5lYXIgKi9cclxufVxyXG5cclxuYnV0dG9uLmFkZC1wbGF5ZXItYnRuOmhvdmVyIHtcclxuICAgIHBhZGRpbmc6IDIxcHggNDBweCAxOXB4O1xyXG4gICAgd2lkdGg6MjI1cHg7XHJcbiAgICBib3JkZXI6MXB4IHNvbGlkIHRlYWw7XHJcbiAgICBtYXJnaW46IDIwcHggYXV0bztcclxuICAgIG9wYWNpdHk6MTtcclxuICAgIGxldHRlci1zcGFjaW5nOiA0cHg7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAzMDBtcyBjdWJpYy1iZXppZXIoMC4yNTAsIDAuMjUwLCAwLjc1MCwgMC43NTApO1xyXG4gICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDMwMG1zIGN1YmljLWJlemllcigwLjI1MCwgMC4yNTAsIDAuNzUwLCAwLjc1MCk7XHJcbiAgICAgICAtby10cmFuc2l0aW9uOiBhbGwgMzAwbXMgY3ViaWMtYmV6aWVyKDAuMjUwLCAwLjI1MCwgMC43NTAsIDAuNzUwKTtcclxuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcyBjdWJpYy1iZXppZXIoMC4yNTAsIDAuMjUwLCAwLjc1MCwgMC43NTApOyAvKiBsaW5lYXIgKi9cclxufVxyXG5cclxuLmNhbGMtYnRuIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDIwcHggNDBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIC8qIHRyYW5zZm9ybTogdHJhbnNsYXRlKDIwJSwgMjAlKTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBmb250LWZhbWlseTogJ1J1YmlrIE9uZScsIHNhbnMtc2VyaWY7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDJ2dztcclxuICAgIHRyYW5zaXRpb246IGFsbCAuNXM7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ5OGRiO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyOyAqL1xyXG59XHJcblxyXG4uY2FsYy1idG46OmJlZm9yZSB7XHJcbiAgICBib3R0b206IC0xNXB4O1xyXG4gICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBsZWZ0OiA4cHg7XHJcbiAgICB0cmFuc2Zvcm06IHNrZXdYKDQ1ZGVnKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxOTYwOTA7XHJcbn1cclxuXHJcbi5jYWxjLWJ0bjo6YWZ0ZXIge1xyXG4gICAgcmlnaHQ6IC0xNXB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDE1cHg7XHJcbiAgICBib3R0b206IC04cHg7XHJcbiAgICB0cmFuc2Zvcm06IHNrZXdZKDQ1ZGVnKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMjQzNjQ7XHJcbn1cclxuXHJcbi5jYWxjLWJ0bjphY3RpdmUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4uY2FsYy1idG46YWN0aXZlOjpiZWZvcmUge1xyXG4gICAgYm90dG9tOiAtNXB4O1xyXG4gICAgaGVpZ2h0OiA1cHg7XHJcbiAgICBsZWZ0OiAzcHg7XHJcbn1cclxuXHJcbi5jYWxjLWJ0bjphY3RpdmU6OmFmdGVyIHtcclxuICAgIHJpZ2h0OiAtNXB4O1xyXG4gICAgd2lkdGg6IDVweDtcclxuICAgIGJvdHRvbTogLTNweDtcclxufVxyXG5cclxuI2FjdGlvbnMge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNHJlbTtcclxufVxyXG5cclxuLmNhbGMtYnRue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzM7IFxyXG4gICAgbWFyZ2luOiAwIDFyZW07XHJcbiAgICBmb250LXNpemU6IDEycHggO1xyXG4gICAgd2lkdGg6MzIwcHg7XHJcbiAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgYm9yZGVyOjFweCBzb2xpZCAjZmZmO1xyXG4gICAgZm9udC1mYW1pbHk6ICdEb3NpcycsIHNhbnM7XHJcbiAgICBmb250LXdlaWdodDoyMDA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgb3BhY2l0eTouODtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMzAwbXMgY3ViaWMtYmV6aWVyKDAuMjUwLCAwLjI1MCwgMC43NTAsIDAuNzUwKTtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDMwMG1zIGN1YmljLWJlemllcigwLjI1MCwgMC4yNTAsIDAuNzUwLCAwLjc1MCk7XHJcbiAgICAgICAgLW8tdHJhbnNpdGlvbjogYWxsIDMwMG1zIGN1YmljLWJlemllcigwLjI1MCwgMC4yNTAsIDAuNzUwLCAwLjc1MCk7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcyBjdWJpYy1iZXppZXIoMC4yNTAsIDAuMjUwLCAwLjc1MCwgMC43NTApOyAvKiBsaW5lYXIgKi9cclxufVxyXG5cclxuLmNhbGMtYnRuOmhvdmVye1xyXG4gICAgcGFkZGluZzogMjFweCA0MHB4IDE5cHg7XHJcbiAgICB3aWR0aDozMjBweDtcclxuICAgIGJvcmRlcjoxcHggc29saWQgdGVhbDtcclxuICAgIG9wYWNpdHk6MTtcclxuICAgIGxldHRlci1zcGFjaW5nOiA0cHg7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAzMDBtcyBjdWJpYy1iZXppZXIoMC4yNTAsIDAuMjUwLCAwLjc1MCwgMC43NTApO1xyXG4gICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDMwMG1zIGN1YmljLWJlemllcigwLjI1MCwgMC4yNTAsIDAuNzUwLCAwLjc1MCk7XHJcbiAgICAgICAtby10cmFuc2l0aW9uOiBhbGwgMzAwbXMgY3ViaWMtYmV6aWVyKDAuMjUwLCAwLjI1MCwgMC43NTAsIDAuNzUwKTtcclxuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcyBjdWJpYy1iZXppZXIoMC4yNTAsIDAuMjUwLCAwLjc1MCwgMC43NTApOyAvKiBsaW5lYXIgKi9cclxufVxyXG5cclxuLmRpc2FibGVkLWJ0biB7XHJcbiAgICBjb2xvciA6cmdiYSgyNTUsIDI1NSwgMjU1LCAwLjM2KVxyXG59XHJcblxyXG4uc3Bpbm5lciB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxufVxyXG5cclxuXHJcbi5kZWNrLWNhcmQtd3JhcHBlciB7XHJcbiAgICBwYWRkaW5nOiA0cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLyogbW9iaWxlICovXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAjc3VpdHMge1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuXHJcbiAgICAudGl0bGUtY2FsYyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgfVxyXG5cclxuICAgIC8qIC5yZW1vdmUtcGxheWVyLWJ0biB7XHJcbiAgICAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdyggMHB4IDBweCAxcHggd2hpdGUgKTtcclxuICAgIH0gKi9cclxuXHJcbiAgICAuc3VpdC1zZWxlY3QgaW1nIHtcclxuICAgICAgICBwYWRkaW5nOiAycHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuXHJcbiAgICAuc3VpdC1zZWxlY3Qge1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNjtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDJweCA1cHggNHB4IHJnYmEoMCwwLDAsMC4yKTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgbWFyZ2luOiAwIDJweCAwIDJweDtcclxuICAgICAgICB3aWR0aDogY2FsYygyNSUgLSA4cHgpO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGRpbWdyYXk7XHJcbiAgICAgICAgYm9yZGVyOiAycHggb3V0c2V0IGN1cnJlbnRDb2xvcjtcclxuICAgIH1cclxuXHJcbiAgICAudGl0bGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICAjY2FyZHMtdG8tc2VsZWN0LW1vYmlsZSB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgICNzdWJ0aXRsZSB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAuY2FyZC1saXN0IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAjYm9hcmQtYmcge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgI2JvYXJkIHtcclxuICAgICAgICBtYXJnaW46IDJweDtcclxuICAgIH1cclxuXHJcbiAgICAjYm9hcmQtZ3JpZCB7XHJcbiAgICAgICAgbWluLWhlaWdodDogMHB4O1xyXG4gICAgfVxyXG5cclxuICAgICNib2FyZC1jb250ZW50IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgICN0d2ljZS13cmFwcGVyIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgI3RocmVlLXdyYXBwZXIge1xyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5jYWxjLWJ0biB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuXHJcbiAgICAjYWN0aW9ucyB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAjY2FyZHMtdG8tc2VsZWN0IHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC8qIHNsaWRlciBhZGRpdGlvbnMqL1xyXG4gICAgLmNhcmQtbGlzdCB7XHJcbiAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgfVxyXG5cclxuICAgIC5hbmltYXRlIHtcclxuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLW91dDtcclxuICAgIH1cclxuXHJcbiAgICAjY2FyZHMtdG8tc2VsZWN0LW1vYmlsZSB7XHJcbiAgICAgICAgaGVpZ2h0OiAyNzBweDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB9XHJcblxyXG4gICAgLnNsaWRlci13cmFwIHtcclxuICAgICAgICB3aWR0aDogMzYwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA1MDBweDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnNsaWRlciB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB9XHJcblxyXG4gICAgLm1zLXRvdWNoLnNsaWRlciB7XHJcbiAgICAgICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xyXG4gICAgICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcclxuXHJcbiAgICAgICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xyXG4gICAgICAgIC1tcy1zY3JvbGwtY2hhaW5pbmc6IG5vbmU7XHJcbiAgICAgICAgLW1zLXNjcm9sbC1zbmFwLXR5cGU6IG1hbmRhdG9yeTtcclxuICAgICAgICAtbXMtc2Nyb2xsLXNuYXAtcG9pbnRzLXg6IHNuYXBJbnRlcnZhbCgwJSwgMTAwJSk7XHJcbiAgICB9XHJcblxyXG4gICAgLmhvbGRlciB7XHJcbiAgICAgICAgd2lkdGg6IDQwMCU7XHJcbiAgICAgICAgbWF4LWhlaWdodDogNTAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcclxuICAgIH1cclxuXHJcbiAgICAuc2xpZGUtd3JhcHBlciB7XHJcbiAgICAgICAgd2lkdGg6IDI1JTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgaGVpZ2h0OiA1MDBweDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIH1cclxuXHJcbiAgICAuc2xpZGUge1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB9XHJcblxyXG4gICAgLnRlbXAge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBmb250LXNpemU6IDEwMHB4O1xyXG4gICAgICAgIGJvdHRvbTogMTVweDtcclxuICAgICAgICBsZWZ0OiAxNXB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnSm9zZWZpbiBTbGFiJywgc2VyaWY7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgIH1cclxuXHJcbiAgICAuc2xpZGU6YmVmb3JlIHtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogNDAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5zbGlkZSBkaXYge1xyXG4gICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gICAgICAgIHotaW5kZXg6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgI2FkZC1wbGF5ZXItbW9iaWxlIC5hZGQtcGxheWVyLWJ0biB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzM7XHJcbiAgICB9XHJcblxyXG4gICAgI2FkZC1wbGF5ZXIge1xyXG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIH1cclxuICAgICNhZGQtcGxheWVyLW1vYmlsZSB7XHJcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICAuZGVjay1jYXJkLXdyYXBwZXIge1xyXG4gICAgICAgIHBhZGRpbmc6IDlweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5pbWcuZGVjay1jYXJkIHtcclxuICAgIGhlaWdodDogNTVweCAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRpdGxlLWNhbGMge1xyXG4gICAgY29sb3IgOiByZ2IoMTYzLCAxNjMsIDE2Myk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi53cmFwcGVyLWNvbnRlaW5lciB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIG1heC13aWR0aDogMTIwMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zaG9ydC10ZXh0IHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgbWF4LXdpZHRoOiA3ODBweDtcclxuICAgIGNvbG9yOiByZ2IoMTYzLCAxNjMsIDE2Myk7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTA5M3B4KSB7XHJcbiAgICAud3JhcHBlci1jb250ZWluZXIge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC53cmFwcGVyLXNob3QtdHh0IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG4gICAgLnNob3J0LXRleHQge1xyXG4gICAgICAgIG9yZGVyOiAxO1xyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalculatorComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'calculator',
            templateUrl: './calculator.component.html',
            styleUrls: ['./calculator.component.css'],
            providers: [_calculator_service__WEBPACK_IMPORTED_MODULE_1__["CalculatorService"]]
          }]
        }], null, {
          myCarousel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['myCarousel', {
              "static": false
            }]
          }]
        });
      })();
      /***/

    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _calculator_calculator_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./calculator/calculator.component */
      "LkI3");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 2,
        vars: 0,
        consts: [["id", "body"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "calculator");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_calculator_calculator_component__WEBPACK_IMPORTED_MODULE_1__["CalculatorComponent"]],
        styles: ["app-root[_ngcontent-%COMP%] {\r\n    display: block;\r\n    height: 100%;\r\n}\r\n\r\nbody[_ngcontent-%COMP%] {\r\n    margin: 0px;\r\n}\r\n\r\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%], #body[_ngcontent-%COMP%] {\r\n    overflow-x: hidden;\r\n    height: 100%;\r\n    background-image: url('https://i.yapx.ru/LM6Dv.jpg');\r\n \r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n    html[_ngcontent-%COMP%], body[_ngcontent-%COMP%], #body[_ngcontent-%COMP%] {\r\n        overflow-x: hidden;\r\n        height: 100%;\r\n\r\n    }\r\n\r\n    body[_ngcontent-%COMP%] {\r\n        margin: 0;\r\n        padding: 0;\r\n        overflow: hidden;\r\n    }\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLG9EQUFvRDs7QUFFeEQ7O0FBRUE7SUFDSTtRQUNJLGtCQUFrQjtRQUNsQixZQUFZOztJQUVoQjs7SUFFQTtRQUNJLFNBQVM7UUFDVCxVQUFVO1FBQ1YsZ0JBQWdCO0lBQ3BCOztBQUVKIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLXJvb3Qge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbn1cclxuXHJcbmh0bWwsIGJvZHksICNib2R5IHtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9pLnlhcHgucnUvTE02RHYuanBnJyk7XHJcbiBcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgaHRtbCwgYm9keSwgI2JvZHkge1xyXG4gICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGJvZHkge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB9XHJcblxyXG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            template: "\n<!--    <nav-var></nav-var>-->\n<div id=\"body\">\n    <calculator></calculator>\n</div>\n  ",
            styleUrls: ['./app.component.css']
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "cUpR");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! angular-responsive-carousel */
      "T6vt");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _nav_var_nav_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./nav-var/nav-bar.component */
      "1OnI");
      /* harmony import */


      var _calculator_card_holder_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./calculator/card-holder.component */
      "s2wp");
      /* harmony import */


      var _calculator_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./calculator/card.component */
      "a2OW");
      /* harmony import */


      var _calculator_calculator_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./calculator/calculator.component */
      "LkI3");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_3__["IvyCarouselModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _calculator_calculator_component__WEBPACK_IMPORTED_MODULE_8__["CalculatorComponent"], _calculator_card_holder_component__WEBPACK_IMPORTED_MODULE_6__["CardHolderComponent"], _calculator_card_component__WEBPACK_IMPORTED_MODULE_7__["CardComponent"], _nav_var_nav_bar_component__WEBPACK_IMPORTED_MODULE_5__["NavBarComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_3__["IvyCarouselModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
          args: [{
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_3__["IvyCarouselModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]],
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _calculator_calculator_component__WEBPACK_IMPORTED_MODULE_8__["CalculatorComponent"], _calculator_card_holder_component__WEBPACK_IMPORTED_MODULE_6__["CardHolderComponent"], _calculator_card_component__WEBPACK_IMPORTED_MODULE_7__["CardComponent"], _nav_var_nav_bar_component__WEBPACK_IMPORTED_MODULE_5__["NavBarComponent"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "a2OW":
    /*!**********************************************!*\
      !*** ./src/app/calculator/card.component.ts ***!
      \**********************************************/

    /*! exports provided: CardComponent */

    /***/
    function a2OW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CardComponent", function () {
        return CardComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var CardComponent = function CardComponent() {
        _classCallCheck(this, CardComponent);
      };

      CardComponent.ɵfac = function CardComponent_Factory(t) {
        return new (t || CardComponent)();
      };

      CardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CardComponent,
        selectors: [["card"]],
        inputs: {
          card: "card",
          calculator: "calculator"
        },
        decls: 2,
        vars: 2,
        consts: [[1, "deck-card-wrapper", "left", 3, "id"], [1, "deck-card", 3, "src", "click"]],
        template: function CardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardComponent_Template_img_click_1_listener() {
              return ctx.calculator.deselect(ctx.card);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", ctx.card.imageId);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.card.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
          }
        },
        styles: ["[_nghost-%COMP%]     carousel .carousel-arrows{\r\n    visibility: hidden;\r\n}\r\n\r\n[_nghost-%COMP%]     carousel .carousel-dots{\r\n    visibility: hidden;\r\n}\r\n\r\n[_nghost-%COMP%]     carousel .carousel-cells .carousel-cell {\r\n    height: 500px;\r\n}\r\n\r\n.invisible[_ngcontent-%COMP%] {\r\n    visibility: hidden;\r\n}\r\n\r\n#suits[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n\r\n#cards-to-select-mobile[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n\r\n.center[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\r\n\r\n#subtitle[_ngcontent-%COMP%] {\r\n    font-size: 1em;\r\n}\r\n\r\n#cards-to-select[_ngcontent-%COMP%] {\r\n    margin: 0 auto;\r\n    max-width: 1200px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n.cards-to-select-wrapper[_ngcontent-%COMP%] {\r\n    max-width: 1200px;\r\n   \r\n}\r\n\r\n.card-list[_ngcontent-%COMP%] {\r\n    margin: auto;\r\n    padding: 10px;\r\n}\r\n\r\n.left[_ngcontent-%COMP%] {\r\n    float: left;\r\n}\r\n\r\n.clear[_ngcontent-%COMP%] {\r\n    clear: both;\r\n}\r\n\r\nul[_ngcontent-%COMP%] {\r\n    list-style: none;\r\n\r\n}\r\n\r\n#board[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    margin: 20px 0px 25px calc((100% - 759px) * 0.5);\r\n    left: 8px;\r\n    grid-area: 7 / 1 / 11 / 2;\r\n    justify-self: start;\r\n    align-self: start;\r\n}\r\n\r\n#board-bg[_ngcontent-%COMP%] {\r\n    border: 8px solid #2b074d;\r\n    background-color: rgba(255, 255, 255, 0.36);\r\n    border-radius: 200px;\r\n    position: absolute;\r\n    width: 759px;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n}\r\n\r\n#board-content[_ngcontent-%COMP%] {\r\n    height: auto;\r\n    width: 792px;\r\n    position: relative;\r\n}\r\n\r\n#board-grid[_ngcontent-%COMP%] {\r\n    position: static;\r\n    height: auto;\r\n    width: 100%;\r\n    min-height: 432px;\r\n}\r\n\r\n#add-player-mobile[_ngcontent-%COMP%] {\r\n    visibility: hidden;\r\n}\r\n\r\n#add-player[_ngcontent-%COMP%]   .add-player-btn[_ngcontent-%COMP%] {\r\n     background-color: #3333; \r\n}\r\n\r\n#add-player[_ngcontent-%COMP%] {\r\n    visibility: visible;\r\n    width: 100%;\r\n    margin: 0 auto;\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\nbutton.add-player-btn[_ngcontent-%COMP%] {\r\n    font-size: 12px ;\r\n    width:225px;\r\n    display:block;\r\n    border:1px solid #fff;\r\n    margin: 20px auto 0;\r\n    font-family: 'Dosis', sans;\r\n    font-weight:200;\r\n    text-transform:uppercase;\r\n    text-decoration:none;\r\n    text-align:center;\r\n    opacity:.8;\r\n    letter-spacing: 1px;\r\n    transition: all 300ms cubic-bezier(0.250, 0.250, 0.750, 0.750); \r\n}\r\n\r\nbutton.add-player-btn[_ngcontent-%COMP%]:hover {\r\n    padding: 21px 40px 19px;\r\n    width:225px;\r\n    border:1px solid teal;\r\n    margin: 20px auto;\r\n    opacity:1;\r\n    letter-spacing: 4px;\r\n    transition: all 300ms cubic-bezier(0.250, 0.250, 0.750, 0.750); \r\n}\r\n\r\n.calc-btn[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    padding: 20px 40px;\r\n    color: white;\r\n    \r\n}\r\n\r\n.calc-btn[_ngcontent-%COMP%]::before {\r\n    bottom: -15px;\r\n    height: 15px;\r\n    width: 100%;\r\n    left: 8px;\r\n    transform: skewX(45deg);\r\n    background-color: #196090;\r\n}\r\n\r\n.calc-btn[_ngcontent-%COMP%]::after {\r\n    right: -15px;\r\n    height: 100%;\r\n    width: 15px;\r\n    bottom: -8px;\r\n    transform: skewY(45deg);\r\n    background-color: #124364;\r\n}\r\n\r\n.calc-btn[_ngcontent-%COMP%]:active {\r\n    margin-left: 10px;\r\n    margin-top: 10px;\r\n}\r\n\r\n.calc-btn[_ngcontent-%COMP%]:active::before {\r\n    bottom: -5px;\r\n    height: 5px;\r\n    left: 3px;\r\n}\r\n\r\n.calc-btn[_ngcontent-%COMP%]:active::after {\r\n    right: -5px;\r\n    width: 5px;\r\n    bottom: -3px;\r\n}\r\n\r\n#actions[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    padding-bottom: 4rem;\r\n}\r\n\r\n.calc-btn[_ngcontent-%COMP%]{\r\n    background-color: #3333; \r\n    margin: 0 1rem;\r\n    font-size: 12px ;\r\n    width:320px;\r\n    display:block;\r\n    border:1px solid #fff;\r\n    font-family: 'Dosis', sans;\r\n    font-weight:200;\r\n    text-transform:uppercase;\r\n    text-decoration:none;\r\n    text-align:center;\r\n    opacity:.8;\r\n    letter-spacing: 1px;\r\n    transition: all 300ms cubic-bezier(0.250, 0.250, 0.750, 0.750); \r\n}\r\n\r\n.calc-btn[_ngcontent-%COMP%]:hover{\r\n    padding: 21px 40px 19px;\r\n    width:320px;\r\n    border:1px solid teal;\r\n    opacity:1;\r\n    letter-spacing: 4px;\r\n    transition: all 300ms cubic-bezier(0.250, 0.250, 0.750, 0.750); \r\n}\r\n\r\n.disabled-btn[_ngcontent-%COMP%] {\r\n    color :rgba(255, 255, 255, 0.36)\r\n}\r\n\r\n.spinner[_ngcontent-%COMP%] {\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-top: 50px;\r\n}\r\n\r\n.deck-card-wrapper[_ngcontent-%COMP%] {\r\n    padding: 4px !important;\r\n}\r\n\r\n\r\n\r\n@media only screen and (max-width: 600px) {\r\n    #suits[_ngcontent-%COMP%] {\r\n        height: 40px;\r\n        display: block;\r\n    }\r\n\r\n    .title-calc[_ngcontent-%COMP%] {\r\n        font-size: 17px;\r\n    }\r\n\r\n    \r\n\r\n    .suit-select[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n        padding: 2px;\r\n        height: 25px;\r\n        margin-left: auto;\r\n        margin-right: auto;\r\n        display: block;\r\n    }\r\n\r\n    .suit-select[_ngcontent-%COMP%] {\r\n        opacity: 0.6;\r\n        box-shadow: 0 2px 5px 4px rgba(0,0,0,0.2);\r\n        cursor: pointer;\r\n        margin: 0 2px 0 2px;\r\n        width: calc(25% - 8px);\r\n        background-color: dimgray;\r\n        border: 2px outset currentColor;\r\n    }\r\n\r\n    .title[_ngcontent-%COMP%] {\r\n        font-size: 10px;\r\n    }\r\n\r\n    #cards-to-select-mobile[_ngcontent-%COMP%] {\r\n        display: inline-block;\r\n        width: 100%;\r\n    }\r\n\r\n    #subtitle[_ngcontent-%COMP%] {\r\n        display: none;\r\n    }\r\n\r\n    .card-list[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n    }\r\n\r\n    #board-bg[_ngcontent-%COMP%] {\r\n        display: none;\r\n    }\r\n\r\n    #board[_ngcontent-%COMP%] {\r\n        margin: 2px;\r\n    }\r\n\r\n    #board-grid[_ngcontent-%COMP%] {\r\n        min-height: 0px;\r\n    }\r\n\r\n    #board-content[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n    }\r\n\r\n    \r\n    #twice-wrapper[_ngcontent-%COMP%] {\r\n        margin-right: 0px;\r\n\r\n    }\r\n\r\n    #three-wrapper[_ngcontent-%COMP%] {\r\n        float: right;\r\n        margin-top: 1rem;\r\n    }\r\n\r\n    .calc-btn[_ngcontent-%COMP%] {\r\n        padding: 10px 20px;\r\n        font-size: 14px;\r\n    }\r\n\r\n    #actions[_ngcontent-%COMP%] {\r\n        margin: 0;\r\n        flex-direction: column;\r\n        align-items: center;\r\n    }\r\n\r\n    #cards-to-select[_ngcontent-%COMP%] {\r\n        display: none;\r\n        \r\n    }\r\n\r\n    \r\n    .card-list[_ngcontent-%COMP%] {\r\n        width: auto;\r\n        height: auto;\r\n    }\r\n\r\n    .animate[_ngcontent-%COMP%] {\r\n        transition: transform 0.3s ease-out;\r\n    }\r\n\r\n    #cards-to-select-mobile[_ngcontent-%COMP%] {\r\n        height: 270px;\r\n        position: relative;\r\n    }\r\n\r\n    .slider-wrap[_ngcontent-%COMP%] {\r\n        width: 360px;\r\n        height: 500px;\r\n        position: absolute;\r\n        margin-left: 20px;\r\n    }\r\n\r\n    .slider[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n        height: 100%;\r\n        overflow: hidden;\r\n    }\r\n\r\n    .ms-touch.slider[_ngcontent-%COMP%] {\r\n        overflow-x: scroll;\r\n        overflow-y: hidden;\r\n\r\n        -ms-overflow-style: none;\r\n        -ms-scroll-chaining: none;\r\n        -ms-scroll-snap-type: mandatory;\r\n        -ms-scroll-snap-points-x: snapInterval(0%, 100%);\r\n    }\r\n\r\n    .holder[_ngcontent-%COMP%] {\r\n        width: 400%;\r\n        max-height: 500px;\r\n        height: 100%;\r\n        overflow-y: hidden;\r\n    }\r\n\r\n    .slide-wrapper[_ngcontent-%COMP%] {\r\n        width: 25%;\r\n        height: 100%;\r\n        float: left;\r\n        height: 500px;\r\n        position: relative;\r\n        overflow: hidden;\r\n    }\r\n\r\n    .slide[_ngcontent-%COMP%] {\r\n        height: 100%;\r\n        position: relative;\r\n    }\r\n\r\n    .temp[_ngcontent-%COMP%] {\r\n        position: absolute;\r\n        z-index: 1;\r\n        color: white;\r\n        font-size: 100px;\r\n        bottom: 15px;\r\n        left: 15px;\r\n        font-family: 'Josefin Slab', serif;\r\n        font-weight: 100;\r\n    }\r\n\r\n    .slide[_ngcontent-%COMP%]:before {\r\n        content: \"\";\r\n        position: absolute;\r\n        z-index: 1;\r\n        bottom: 0;\r\n        left: 0;\r\n        width: 100%;\r\n        height: 40%;\r\n    }\r\n\r\n    .slide[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n        width: 300px;\r\n        height: 500px;\r\n        z-index: 0;\r\n    }\r\n\r\n    #add-player-mobile[_ngcontent-%COMP%]   .add-player-btn[_ngcontent-%COMP%] {\r\n        background-color: #3333;\r\n    }\r\n\r\n    #add-player[_ngcontent-%COMP%] {\r\n        visibility: hidden;\r\n    }\r\n    #add-player-mobile[_ngcontent-%COMP%] {\r\n        visibility: visible;\r\n        width: 100%;\r\n        height: 50px;\r\n        margin-bottom: 20px;\r\n    }\r\n\r\n    .deck-card-wrapper[_ngcontent-%COMP%] {\r\n        padding: 9px !important;\r\n    }\r\n}\r\n\r\nimg.deck-card[_ngcontent-%COMP%] {\r\n    height: 55px !important;\r\n    width: auto !important;\r\n}\r\n\r\n.title-calc[_ngcontent-%COMP%] {\r\n    color : rgb(163, 163, 163);\r\n    text-align: center;\r\n}\r\n\r\n.wrapper-conteiner[_ngcontent-%COMP%] {\r\n    margin: 0 auto;\r\n    max-width: 1200px;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.short-text[_ngcontent-%COMP%] {\r\n    margin: 0 auto;\r\n    max-width: 780px;\r\n    color: rgb(163, 163, 163);\r\n    font-size: 18px;\r\n    text-align: center;\r\n}\r\n\r\n@media only screen and (max-width: 1093px) {\r\n    .wrapper-conteiner[_ngcontent-%COMP%] {\r\n        flex-direction: column;\r\n\r\n    }\r\n\r\n    .wrapper-shot-txt[_ngcontent-%COMP%] {\r\n        display: flex;\r\n        flex-direction: column;\r\n    }\r\n    \r\n    \r\n    .short-text[_ngcontent-%COMP%] {\r\n        order: 1;\r\n    }\r\n    \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbGN1bGF0b3IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCOztBQUdBO0lBQ0ksaUJBQWlCOztBQUVyQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksZ0JBQWdCOztBQUVwQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnREFBZ0Q7SUFDaEQsU0FBUztJQUNULHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLDJDQUEyQztJQUMzQyxvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixNQUFNO0lBQ04sUUFBUTtJQUNSLFNBQVM7SUFDVCxPQUFPO0FBQ1g7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osV0FBVztJQUNYLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtLQUNLLHVCQUF1QjtBQUM1Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsY0FBYztJQUNkLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7O0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNY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QUFhO1FBQ2Isc0JBQXNCO0lBQzFCOzs7SUFHQTtRQUNJLFFBQVE7SUFDWjs7QUFFSiIsImZpbGUiOiJjYWxjdWxhdG9yLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAgY2Fyb3VzZWwgLmNhcm91c2VsLWFycm93c3tcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIGNhcm91c2VsIC5jYXJvdXNlbC1kb3Rze1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgY2Fyb3VzZWwgLmNhcm91c2VsLWNlbGxzIC5jYXJvdXNlbC1jZWxsIHtcclxuICAgIGhlaWdodDogNTAwcHg7XHJcbn1cclxuXHJcbi5pbnZpc2libGUge1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcblxyXG4jc3VpdHMge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuI2NhcmRzLXRvLXNlbGVjdC1tb2JpbGUge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmNlbnRlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbiNzdWJ0aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxufVxyXG5cclxuI2NhcmRzLXRvLXNlbGVjdCB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIG1heC13aWR0aDogMTIwMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5cclxuLmNhcmRzLXRvLXNlbGVjdC13cmFwcGVyIHtcclxuICAgIG1heC13aWR0aDogMTIwMHB4O1xyXG4gICBcclxufVxyXG5cclxuLmNhcmQtbGlzdCB7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4ubGVmdCB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuLmNsZWFyIHtcclxuICAgIGNsZWFyOiBib3RoO1xyXG59XHJcblxyXG51bCB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG5cclxufVxyXG5cclxuI2JvYXJkIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbjogMjBweCAwcHggMjVweCBjYWxjKCgxMDAlIC0gNzU5cHgpICogMC41KTtcclxuICAgIGxlZnQ6IDhweDtcclxuICAgIGdyaWQtYXJlYTogNyAvIDEgLyAxMSAvIDI7XHJcbiAgICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xyXG4gICAgYWxpZ24tc2VsZjogc3RhcnQ7XHJcbn1cclxuXHJcbiNib2FyZC1iZyB7XHJcbiAgICBib3JkZXI6IDhweCBzb2xpZCAjMmIwNzRkO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjM2KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDc1OXB4O1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG59XHJcblxyXG4jYm9hcmQtY29udGVudCB7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB3aWR0aDogNzkycHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbiNib2FyZC1ncmlkIHtcclxuICAgIHBvc2l0aW9uOiBzdGF0aWM7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDQzMnB4O1xyXG59XHJcblxyXG4jYWRkLXBsYXllci1tb2JpbGUge1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcblxyXG4jYWRkLXBsYXllciAuYWRkLXBsYXllci1idG4ge1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMzOyBcclxufVxyXG5cclxuI2FkZC1wbGF5ZXIge1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuYnV0dG9uLmFkZC1wbGF5ZXItYnRuIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweCA7XHJcbiAgICB3aWR0aDoyMjVweDtcclxuICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICBib3JkZXI6MXB4IHNvbGlkICNmZmY7XHJcbiAgICBtYXJnaW46IDIwcHggYXV0byAwO1xyXG4gICAgZm9udC1mYW1pbHk6ICdEb3NpcycsIHNhbnM7XHJcbiAgICBmb250LXdlaWdodDoyMDA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgb3BhY2l0eTouODtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMzAwbXMgY3ViaWMtYmV6aWVyKDAuMjUwLCAwLjI1MCwgMC43NTAsIDAuNzUwKTtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDMwMG1zIGN1YmljLWJlemllcigwLjI1MCwgMC4yNTAsIDAuNzUwLCAwLjc1MCk7XHJcbiAgICAgICAgLW8tdHJhbnNpdGlvbjogYWxsIDMwMG1zIGN1YmljLWJlemllcigwLjI1MCwgMC4yNTAsIDAuNzUwLCAwLjc1MCk7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcyBjdWJpYy1iZXppZXIoMC4yNTAsIDAuMjUwLCAwLjc1MCwgMC43NTApOyAvKiBsaW5lYXIgKi9cclxufVxyXG5cclxuYnV0dG9uLmFkZC1wbGF5ZXItYnRuOmhvdmVyIHtcclxuICAgIHBhZGRpbmc6IDIxcHggNDBweCAxOXB4O1xyXG4gICAgd2lkdGg6MjI1cHg7XHJcbiAgICBib3JkZXI6MXB4IHNvbGlkIHRlYWw7XHJcbiAgICBtYXJnaW46IDIwcHggYXV0bztcclxuICAgIG9wYWNpdHk6MTtcclxuICAgIGxldHRlci1zcGFjaW5nOiA0cHg7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAzMDBtcyBjdWJpYy1iZXppZXIoMC4yNTAsIDAuMjUwLCAwLjc1MCwgMC43NTApO1xyXG4gICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDMwMG1zIGN1YmljLWJlemllcigwLjI1MCwgMC4yNTAsIDAuNzUwLCAwLjc1MCk7XHJcbiAgICAgICAtby10cmFuc2l0aW9uOiBhbGwgMzAwbXMgY3ViaWMtYmV6aWVyKDAuMjUwLCAwLjI1MCwgMC43NTAsIDAuNzUwKTtcclxuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcyBjdWJpYy1iZXppZXIoMC4yNTAsIDAuMjUwLCAwLjc1MCwgMC43NTApOyAvKiBsaW5lYXIgKi9cclxufVxyXG5cclxuLmNhbGMtYnRuIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDIwcHggNDBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIC8qIHRyYW5zZm9ybTogdHJhbnNsYXRlKDIwJSwgMjAlKTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBmb250LWZhbWlseTogJ1J1YmlrIE9uZScsIHNhbnMtc2VyaWY7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDJ2dztcclxuICAgIHRyYW5zaXRpb246IGFsbCAuNXM7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ5OGRiO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyOyAqL1xyXG59XHJcblxyXG4uY2FsYy1idG46OmJlZm9yZSB7XHJcbiAgICBib3R0b206IC0xNXB4O1xyXG4gICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBsZWZ0OiA4cHg7XHJcbiAgICB0cmFuc2Zvcm06IHNrZXdYKDQ1ZGVnKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxOTYwOTA7XHJcbn1cclxuXHJcbi5jYWxjLWJ0bjo6YWZ0ZXIge1xyXG4gICAgcmlnaHQ6IC0xNXB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDE1cHg7XHJcbiAgICBib3R0b206IC04cHg7XHJcbiAgICB0cmFuc2Zvcm06IHNrZXdZKDQ1ZGVnKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMjQzNjQ7XHJcbn1cclxuXHJcbi5jYWxjLWJ0bjphY3RpdmUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4uY2FsYy1idG46YWN0aXZlOjpiZWZvcmUge1xyXG4gICAgYm90dG9tOiAtNXB4O1xyXG4gICAgaGVpZ2h0OiA1cHg7XHJcbiAgICBsZWZ0OiAzcHg7XHJcbn1cclxuXHJcbi5jYWxjLWJ0bjphY3RpdmU6OmFmdGVyIHtcclxuICAgIHJpZ2h0OiAtNXB4O1xyXG4gICAgd2lkdGg6IDVweDtcclxuICAgIGJvdHRvbTogLTNweDtcclxufVxyXG5cclxuI2FjdGlvbnMge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNHJlbTtcclxufVxyXG5cclxuLmNhbGMtYnRue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzM7IFxyXG4gICAgbWFyZ2luOiAwIDFyZW07XHJcbiAgICBmb250LXNpemU6IDEycHggO1xyXG4gICAgd2lkdGg6MzIwcHg7XHJcbiAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgYm9yZGVyOjFweCBzb2xpZCAjZmZmO1xyXG4gICAgZm9udC1mYW1pbHk6ICdEb3NpcycsIHNhbnM7XHJcbiAgICBmb250LXdlaWdodDoyMDA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgb3BhY2l0eTouODtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMzAwbXMgY3ViaWMtYmV6aWVyKDAuMjUwLCAwLjI1MCwgMC43NTAsIDAuNzUwKTtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDMwMG1zIGN1YmljLWJlemllcigwLjI1MCwgMC4yNTAsIDAuNzUwLCAwLjc1MCk7XHJcbiAgICAgICAgLW8tdHJhbnNpdGlvbjogYWxsIDMwMG1zIGN1YmljLWJlemllcigwLjI1MCwgMC4yNTAsIDAuNzUwLCAwLjc1MCk7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcyBjdWJpYy1iZXppZXIoMC4yNTAsIDAuMjUwLCAwLjc1MCwgMC43NTApOyAvKiBsaW5lYXIgKi9cclxufVxyXG5cclxuLmNhbGMtYnRuOmhvdmVye1xyXG4gICAgcGFkZGluZzogMjFweCA0MHB4IDE5cHg7XHJcbiAgICB3aWR0aDozMjBweDtcclxuICAgIGJvcmRlcjoxcHggc29saWQgdGVhbDtcclxuICAgIG9wYWNpdHk6MTtcclxuICAgIGxldHRlci1zcGFjaW5nOiA0cHg7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAzMDBtcyBjdWJpYy1iZXppZXIoMC4yNTAsIDAuMjUwLCAwLjc1MCwgMC43NTApO1xyXG4gICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDMwMG1zIGN1YmljLWJlemllcigwLjI1MCwgMC4yNTAsIDAuNzUwLCAwLjc1MCk7XHJcbiAgICAgICAtby10cmFuc2l0aW9uOiBhbGwgMzAwbXMgY3ViaWMtYmV6aWVyKDAuMjUwLCAwLjI1MCwgMC43NTAsIDAuNzUwKTtcclxuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcyBjdWJpYy1iZXppZXIoMC4yNTAsIDAuMjUwLCAwLjc1MCwgMC43NTApOyAvKiBsaW5lYXIgKi9cclxufVxyXG5cclxuLmRpc2FibGVkLWJ0biB7XHJcbiAgICBjb2xvciA6cmdiYSgyNTUsIDI1NSwgMjU1LCAwLjM2KVxyXG59XHJcblxyXG4uc3Bpbm5lciB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxufVxyXG5cclxuXHJcbi5kZWNrLWNhcmQtd3JhcHBlciB7XHJcbiAgICBwYWRkaW5nOiA0cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLyogbW9iaWxlICovXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAjc3VpdHMge1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuXHJcbiAgICAudGl0bGUtY2FsYyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgfVxyXG5cclxuICAgIC8qIC5yZW1vdmUtcGxheWVyLWJ0biB7XHJcbiAgICAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdyggMHB4IDBweCAxcHggd2hpdGUgKTtcclxuICAgIH0gKi9cclxuXHJcbiAgICAuc3VpdC1zZWxlY3QgaW1nIHtcclxuICAgICAgICBwYWRkaW5nOiAycHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuXHJcbiAgICAuc3VpdC1zZWxlY3Qge1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNjtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDJweCA1cHggNHB4IHJnYmEoMCwwLDAsMC4yKTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgbWFyZ2luOiAwIDJweCAwIDJweDtcclxuICAgICAgICB3aWR0aDogY2FsYygyNSUgLSA4cHgpO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGRpbWdyYXk7XHJcbiAgICAgICAgYm9yZGVyOiAycHggb3V0c2V0IGN1cnJlbnRDb2xvcjtcclxuICAgIH1cclxuXHJcbiAgICAudGl0bGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICAjY2FyZHMtdG8tc2VsZWN0LW1vYmlsZSB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgICNzdWJ0aXRsZSB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAuY2FyZC1saXN0IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAjYm9hcmQtYmcge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgI2JvYXJkIHtcclxuICAgICAgICBtYXJnaW46IDJweDtcclxuICAgIH1cclxuXHJcbiAgICAjYm9hcmQtZ3JpZCB7XHJcbiAgICAgICAgbWluLWhlaWdodDogMHB4O1xyXG4gICAgfVxyXG5cclxuICAgICNib2FyZC1jb250ZW50IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgICN0d2ljZS13cmFwcGVyIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgI3RocmVlLXdyYXBwZXIge1xyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5jYWxjLWJ0biB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuXHJcbiAgICAjYWN0aW9ucyB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAjY2FyZHMtdG8tc2VsZWN0IHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC8qIHNsaWRlciBhZGRpdGlvbnMqL1xyXG4gICAgLmNhcmQtbGlzdCB7XHJcbiAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgfVxyXG5cclxuICAgIC5hbmltYXRlIHtcclxuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLW91dDtcclxuICAgIH1cclxuXHJcbiAgICAjY2FyZHMtdG8tc2VsZWN0LW1vYmlsZSB7XHJcbiAgICAgICAgaGVpZ2h0OiAyNzBweDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB9XHJcblxyXG4gICAgLnNsaWRlci13cmFwIHtcclxuICAgICAgICB3aWR0aDogMzYwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA1MDBweDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnNsaWRlciB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB9XHJcblxyXG4gICAgLm1zLXRvdWNoLnNsaWRlciB7XHJcbiAgICAgICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xyXG4gICAgICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcclxuXHJcbiAgICAgICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xyXG4gICAgICAgIC1tcy1zY3JvbGwtY2hhaW5pbmc6IG5vbmU7XHJcbiAgICAgICAgLW1zLXNjcm9sbC1zbmFwLXR5cGU6IG1hbmRhdG9yeTtcclxuICAgICAgICAtbXMtc2Nyb2xsLXNuYXAtcG9pbnRzLXg6IHNuYXBJbnRlcnZhbCgwJSwgMTAwJSk7XHJcbiAgICB9XHJcblxyXG4gICAgLmhvbGRlciB7XHJcbiAgICAgICAgd2lkdGg6IDQwMCU7XHJcbiAgICAgICAgbWF4LWhlaWdodDogNTAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcclxuICAgIH1cclxuXHJcbiAgICAuc2xpZGUtd3JhcHBlciB7XHJcbiAgICAgICAgd2lkdGg6IDI1JTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgaGVpZ2h0OiA1MDBweDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIH1cclxuXHJcbiAgICAuc2xpZGUge1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB9XHJcblxyXG4gICAgLnRlbXAge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBmb250LXNpemU6IDEwMHB4O1xyXG4gICAgICAgIGJvdHRvbTogMTVweDtcclxuICAgICAgICBsZWZ0OiAxNXB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnSm9zZWZpbiBTbGFiJywgc2VyaWY7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgIH1cclxuXHJcbiAgICAuc2xpZGU6YmVmb3JlIHtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogNDAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5zbGlkZSBkaXYge1xyXG4gICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gICAgICAgIHotaW5kZXg6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgI2FkZC1wbGF5ZXItbW9iaWxlIC5hZGQtcGxheWVyLWJ0biB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzM7XHJcbiAgICB9XHJcblxyXG4gICAgI2FkZC1wbGF5ZXIge1xyXG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIH1cclxuICAgICNhZGQtcGxheWVyLW1vYmlsZSB7XHJcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICAuZGVjay1jYXJkLXdyYXBwZXIge1xyXG4gICAgICAgIHBhZGRpbmc6IDlweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5pbWcuZGVjay1jYXJkIHtcclxuICAgIGhlaWdodDogNTVweCAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRpdGxlLWNhbGMge1xyXG4gICAgY29sb3IgOiByZ2IoMTYzLCAxNjMsIDE2Myk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi53cmFwcGVyLWNvbnRlaW5lciB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIG1heC13aWR0aDogMTIwMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zaG9ydC10ZXh0IHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgbWF4LXdpZHRoOiA3ODBweDtcclxuICAgIGNvbG9yOiByZ2IoMTYzLCAxNjMsIDE2Myk7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTA5M3B4KSB7XHJcbiAgICAud3JhcHBlci1jb250ZWluZXIge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC53cmFwcGVyLXNob3QtdHh0IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG4gICAgLnNob3J0LXRleHQge1xyXG4gICAgICAgIG9yZGVyOiAxO1xyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'card',
            templateUrl: './card.component.html',
            styleUrls: ['./calculator.component.css']
          }]
        }], null, {
          card: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          calculator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "nhOS":
    /*!**************************************************!*\
      !*** ./src/app/calculator/calculator.service.ts ***!
      \**************************************************/

    /*! exports provided: CalculatorService */

    /***/
    function nhOS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CalculatorService", function () {
        return CalculatorService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _card_holder_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./card-holder.service */
      "E4Ix");

      function toCdn(file) {
        return cdnUrl[file] || file;
      }

      var CalculatorService = /*#__PURE__*/function () {
        function CalculatorService() {
          _classCallCheck(this, CalculatorService);

          this.suits = ['H', 'D', 'S', 'C'];
          this.cardIndices = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
          this.selectedCards = {};
          this.validData = false;
          this.players = [];
          this.ajaxCounter = 0;
          this.addPlayer(0);
          this.addPlayer(1);
          this.board = new _card_holder_service__WEBPACK_IMPORTED_MODULE_1__["CardHolder"](['board-1-card', 'board-2-card', 'board-3-card', 'board-4-card', 'board-5-card'], -1);
          this.resetSrc();
        }

        _createClass(CalculatorService, [{
          key: "cardToSrc",
          value: function cardToSrc(cardIndex) {
            return toCdn("assets/images/cards_zipped/".concat(cardIndex, ".png"));
          }
        }, {
          key: "nextCard",
          value: function nextCard() {
            return this.getAllCard().find(function (card) {
              return !card.value;
            });
          }
        }, {
          key: "addNewPlayer",
          value: function addNewPlayer() {
            if (this.players.length < 6) {
              this.addPlayer(this.players.length);
              console.log(this.players.length);
            }

            this.resetBoard();
          }
        }, {
          key: "removePlayer",
          value: function removePlayer(i) {
            this.players.splice(i, 1);
            this.resetBoard();
          }
        }, {
          key: "selectCard",
          value: function selectCard(i, suit) {
            var card = this.nextCard();

            if (card) {
              card.value = i + suit;
              this.selectedCards[card.value] = card;
              card.src = this.cardToSrc(i + suit); // TODO: bind runtime

              this.resetBoard();
            }
          }
        }, {
          key: "deselect",
          value: function deselect(card) {
            delete this.selectedCards[card.value];
            card.deselect();
            this.resetBoard();
          }
        }, {
          key: "addPlayer",
          value: function addPlayer(i) {
            this.players.push(new _card_holder_service__WEBPACK_IMPORTED_MODULE_1__["CardHolder"](["player".concat(i, "-1-card"), "player".concat(i, "-2-card")], i));
          } // private

        }, {
          key: "sendAjax",
          value: function sendAjax(times) {
            var params = {
              shared: this.board.exportValues(),
              times: times,
              deadCards: []
            };
            this.players.forEach(function (player, i) {
              params["cardsPlayer".concat(i + 1)] = player.exportValues();
            });
            var queryString = Object.keys(params).map(function (key) {
              if (Array.isArray(params[key])) {
                return params[key].map(function (arrValue) {
                  return key + '[]=' + arrValue;
                }).join('&');
              }

              return key + '=' + params[key];
            }).join('&');
            return fetch("https://texas-multirun.herokuapp.com/api/multi-calc?" + queryString, {
              "method": "get"
            }).then(function (r) {
              return r.json();
            });
          }
        }, {
          key: "initChart",
          value: function initChart(chartData) {
            this.chart = anychart.column(); // turn on chart animation

            this.chart.animation(true); // set chart title text settings

            this.chart.title('Running results'); // create area series with passed data

            var series = this.chart.column(chartData); // set series tooltip settings

            series.tooltip().titleFormat('{%X}');
            series.tooltip().position('center-top').anchor('center-bottom').offsetX(0).offsetY(5).format('%{%Value}{groupsSeparator: }'); // set scale minimum

            this.chart.yScale().minimum(0);
            this.chart.yScale().maximum(100); // set yAxis labels formatter

            this.chart.yAxis().labels().format('%{%Value}{groupsSeparator: }'); // tooltips position and interactivity settings

            this.chart.tooltip().positionMode('point');
            this.chart.interactivity().hoverMode('by-x'); // axes titles

            this.chart.xAxis().title('Pot share');
            this.chart.yAxis().title('Frequency'); // set container id for the chart

            this.chart.container('results'); // initiate chart drawing

            this.chart.draw();
          }
        }, {
          key: "removeChart",
          value: function removeChart() {
            if (this.chart) {
              this.chart.remove();
            }

            document.getElementById('results').innerHTML = '';
          }
        }, {
          key: "sendAjaxAndSetResults",
          value: function sendAjaxAndSetResults(times) {
            var _this3 = this;

            this.removeChart();
            this.sendAjax(times).then(function (a) {
              var humanMapping = {
                '0': 'Nothing',
                '25': '¼ Pot',
                '75': '¾ Pot',
                '50': '½ Pot',
                '100': 'All pots',
                '33.33333333333333': '⅓ Pot',
                '16.666666666666664': '⅙ Pot',
                '66.66666666666666': '⅔ Pot',
                '83.33333333333334': '⅚ Pot'
              };

              if (Object.keys(a).length > 2) {
                Object.assign(humanMapping, {
                  '25': '1 split pot',
                  '75': '½ Pot + split pot',
                  '16.666666666666664': '1 split pot',
                  '83.33333333333334': '⅔ Pot + split pot'
                });

                if (times == 3) {
                  Object.assign(humanMapping, {
                    '50': '⅓ Pot + split pot'
                  });
                }
              }

              var text = 'Running results: \n';
              var chartData = [];
              Object.keys(a.cardsPlayer1.running).sort(function (a, b) {
                return parseFloat(a) - parseFloat(b);
              }).forEach(function (res) {
                chartData.push([humanMapping[res] || res + '% Pot', a.cardsPlayer1.running[res]]);
                text += (humanMapping[res] || res + '% Pot') + ' is ' + a.cardsPlayer1.running[res] + '% ' + '\n';
              });

              _this3.initChart(chartData);

              document.getElementById('results').scrollIntoView({
                behavior: 'smooth'
              });
            });
          }
        }, {
          key: "setEquity",
          value: function setEquity() {
            var _this4 = this;

            if (this.validData) {
              this.ajaxCounter++;
              var requestId = this.ajaxCounter;
              this.sendAjax(1).then(function (res) {
                // checking if this is the last ajax sent
                if (requestId == _this4.ajaxCounter) {
                  _this4.players.forEach(function (player, i) {
                    var playerRes = res["cardsPlayer".concat(i + 1)].running;
                    player.equity = {
                      win: playerRes[100] || '0',
                      tie: playerRes[50] || '0'
                    };
                  });
                }
              });
            } else {
              this.players.forEach(function (player) {
                return player.equity = null;
              });
            }
          }
        }, {
          key: "resetIndexes",
          value: function resetIndexes() {
            this.players.forEach(function (player, i) {
              player.index = i;
            });
          }
        }, {
          key: "resetBoard",
          value: function resetBoard() {
            this.validData = this.players.every(function (player) {
              return player.cards.every(function (c) {
                return c.value;
              });
            });
            this.resetIndexes();
            this.removeChart();
            this.resetSrc();
            this.setEquity();
          }
        }, {
          key: "resetSrc",
          value: function resetSrc() {
            var _this5 = this;

            this.getAllCard().forEach(function (card) {
              card.setSrc(_this5);
            });
          }
        }, {
          key: "isPlayersLimitReached",
          value: function isPlayersLimitReached() {
            return this.players.length >= 6;
          }
        }, {
          key: "getAllCard",
          value: function getAllCard() {
            var allCards = [];
            this.players.forEach(function (p) {
              allCards = allCards.concat(p.cards);
            });
            return allCards.concat(this.board.cards);
          }
        }]);

        return CalculatorService;
      }();

      CalculatorService.ɵfac = function CalculatorService_Factory(t) {
        return new (t || CalculatorService)();
      };

      CalculatorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: CalculatorService,
        factory: CalculatorService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalculatorService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "s2wp":
    /*!*****************************************************!*\
      !*** ./src/app/calculator/card-holder.component.ts ***!
      \*****************************************************/

    /*! exports provided: CardHolderComponent */

    /***/
    function s2wp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CardHolderComponent", function () {
        return CardHolderComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./card.component */
      "a2OW");

      function CardHolderComponent_div_1_img_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardHolderComponent_div_1_img_1_Template_img_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r4.calculator.removePlayer(ctx_r4.player.index);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r3.toCdn("assets/images/delete-icon2.png"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function CardHolderComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CardHolderComponent_div_1_img_1_Template, 1, 1, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.calculator.players.length > 2 && ctx_r0.player.index > 0);
        }
      }

      function CardHolderComponent_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "", ctx_r1.player.label().playerId, "-eq");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Win: ", ctx_r1.player.equity["win"], "% ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Tie: ", ctx_r1.player.equity["tie"], "% ");
        }
      }

      function CardHolderComponent_card_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "card", 7);
        }

        if (rf & 2) {
          var card_r6 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("card", card_r6)("calculator", ctx_r2.calculator);
        }
      }

      var CardHolderComponent = /*#__PURE__*/function () {
        function CardHolderComponent() {
          _classCallCheck(this, CardHolderComponent);
        }

        _createClass(CardHolderComponent, [{
          key: "toCdn",
          value: function toCdn(file) {
            return cdnUrl[file] || file;
          }
        }]);

        return CardHolderComponent;
      }();

      CardHolderComponent.ɵfac = function CardHolderComponent_Factory(t) {
        return new (t || CardHolderComponent)();
      };

      CardHolderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CardHolderComponent,
        selectors: [["card-holder"]],
        inputs: {
          player: "player",
          calculator: "calculator"
        },
        decls: 7,
        vars: 10,
        consts: [["class", "remove-player-btn left", 4, "ngIf"], ["class", "equity", 3, "id", 4, "ngIf"], [3, "card", "calculator", 4, "ngFor", "ngForOf"], [1, "remove-player-btn", "left"], [3, "src", "click", 4, "ngIf"], [3, "src", "click"], [1, "equity", 3, "id"], [3, "card", "calculator"]],
        template: function CardHolderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CardHolderComponent_div_1_Template, 2, 1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CardHolderComponent_div_5_Template, 4, 3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CardHolderComponent_card_6_Template, 1, 2, "card", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", ctx.player.label().id, "-cards card-holder");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.player.index != -1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.player["class"]());

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.player.label().name, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.player.equity);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.player.cards);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _card_component__WEBPACK_IMPORTED_MODULE_2__["CardComponent"]],
        styles: [".left[_ngcontent-%COMP%] {\r\n    float: left;\r\n}\r\n\r\n.hero-cards[_ngcontent-%COMP%] {\r\n    margin: 20px 0px 0px 150px;\r\n}\r\n\r\n.villain1-cards[_ngcontent-%COMP%] {\r\n    margin: 20px 0px 0px 335px;\r\n}\r\n\r\n.villain2-cards[_ngcontent-%COMP%] {\r\n    margin: 20px 0px 0px 520px;\r\n}\r\n\r\n.villain3-cards[_ngcontent-%COMP%] {\r\n    margin: 285px 0px 0px 150px;\r\n}\r\n\r\n.villain4-cards[_ngcontent-%COMP%] {\r\n    margin: 285px 0px 0px 520px;\r\n}\r\n\r\n.villain5-cards[_ngcontent-%COMP%] {\r\n    margin: 285px 0px 0px 335px;\r\n}\r\n\r\n.card-holder[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n}\r\n\r\n.board-cards[_ngcontent-%COMP%] {\r\n    margin: 80px 0px 0px 255px;\r\n    position: absolute;\r\n}\r\n\r\n.equity[_ngcontent-%COMP%] {\r\n    -webkit-text-stroke: 0px black;\r\n    color: bisque;\r\n    text-align: center;\r\n}\r\n\r\n.remove-player-btn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    height: 15px;\r\n    margin-top: 8px;\r\n}\r\n\r\n.remove-player-btn[_ngcontent-%COMP%] {\r\n    width: 30px;\r\n    margin: 5px 10px 0px 0px;\r\n    opacity: 0.7;\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n\r\n    .category-label[_ngcontent-%COMP%] {\r\n        float: left;\r\n        width: 65px;\r\n    }\r\n\r\n    .board-label[_ngcontent-%COMP%] {\r\n        display: none;\r\n    }\r\n\r\n    .card-holder[_ngcontent-%COMP%], #board-cards[_ngcontent-%COMP%] {\r\n        margin: 0 0 0 10px;\r\n    }\r\n\r\n    .equity[_ngcontent-%COMP%] {\r\n        float: right;\r\n        font-size: 12px;\r\n        margin-right: 10px;\r\n        margin-top: 28px;\r\n    }\r\n\r\n    .card-holder[_ngcontent-%COMP%], #board-cards[_ngcontent-%COMP%] {\r\n        position: relative;\r\n        height: 145px;\r\n        font-size: 25px;\r\n        font-weight: bolder;\r\n        -webkit-text-stroke-width: 1px;\r\n        -webkit-text-stroke-color: black;\r\n    }\r\n\r\n    .card-holder.deck-card-wrapper[_ngcontent-%COMP%] {\r\n        padding: 4px !important;\r\n    }\r\n    .remove-player-btn[_ngcontent-%COMP%] {\r\n        margin-top: 20px;\r\n    }\r\n    .remove-player-btn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n        filter: drop-shadow( 3px 0px 1px white );\r\n        filter: drop-shadow( -3px 0px 1px white );\r\n        filter: drop-shadow( 0px 3px 1px white );\r\n        filter: drop-shadow( 0px -3px 1px white );\r\n        -webkit-filter: drop-shadow(3px 0px 1px white );\r\n        -webkit-filter: drop-shadow( -3px 0px 1px white );\r\n        -webkit-filter: drop-shadow( 0px 3px 1px white );\r\n        -webkit-filter: drop-shadow(  0px -3px 1px white );\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmQtaG9sZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBQ0E7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFDQTtJQUNJLFdBQVc7SUFDWCx3QkFBd0I7SUFDeEIsWUFBWTtBQUNoQjs7QUFFQTs7SUFFSTtRQUNJLFdBQVc7UUFDWCxXQUFXO0lBQ2Y7O0lBRUE7UUFDSSxhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksWUFBWTtRQUNaLGVBQWU7UUFDZixrQkFBa0I7UUFDbEIsZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksa0JBQWtCO1FBQ2xCLGFBQWE7UUFDYixlQUFlO1FBQ2YsbUJBQW1CO1FBQ25CLDhCQUE4QjtRQUM5QixnQ0FBZ0M7SUFDcEM7O0lBRUE7UUFDSSx1QkFBdUI7SUFDM0I7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksd0NBQXdDO1FBQ3hDLHlDQUF5QztRQUN6Qyx3Q0FBd0M7UUFDeEMseUNBQXlDO1FBQ3pDLCtDQUErQztRQUMvQyxpREFBaUQ7UUFDakQsZ0RBQWdEO1FBQ2hELGtEQUFrRDtJQUN0RDtBQUNKIiwiZmlsZSI6ImNhcmQtaG9sZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGVmdCB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuLmhlcm8tY2FyZHMge1xyXG4gICAgbWFyZ2luOiAyMHB4IDBweCAwcHggMTUwcHg7XHJcbn1cclxuXHJcbi52aWxsYWluMS1jYXJkcyB7XHJcbiAgICBtYXJnaW46IDIwcHggMHB4IDBweCAzMzVweDtcclxufVxyXG5cclxuLnZpbGxhaW4yLWNhcmRzIHtcclxuICAgIG1hcmdpbjogMjBweCAwcHggMHB4IDUyMHB4O1xyXG59XHJcblxyXG4udmlsbGFpbjMtY2FyZHMge1xyXG4gICAgbWFyZ2luOiAyODVweCAwcHggMHB4IDE1MHB4O1xyXG59XHJcblxyXG4udmlsbGFpbjQtY2FyZHMge1xyXG4gICAgbWFyZ2luOiAyODVweCAwcHggMHB4IDUyMHB4O1xyXG59XHJcbi52aWxsYWluNS1jYXJkcyB7XHJcbiAgICBtYXJnaW46IDI4NXB4IDBweCAwcHggMzM1cHg7XHJcbn1cclxuXHJcbi5jYXJkLWhvbGRlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcbi5ib2FyZC1jYXJkcyB7XHJcbiAgICBtYXJnaW46IDgwcHggMHB4IDBweCAyNTVweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuLmVxdWl0eSB7XHJcbiAgICAtd2Via2l0LXRleHQtc3Ryb2tlOiAwcHggYmxhY2s7XHJcbiAgICBjb2xvcjogYmlzcXVlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ucmVtb3ZlLXBsYXllci1idG4gaW1nIHtcclxuICAgIGhlaWdodDogMTVweDtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxufVxyXG4ucmVtb3ZlLXBsYXllci1idG4ge1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBtYXJnaW46IDVweCAxMHB4IDBweCAwcHg7XHJcbiAgICBvcGFjaXR5OiAwLjc7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuXHJcbiAgICAuY2F0ZWdvcnktbGFiZWwge1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIHdpZHRoOiA2NXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5ib2FyZC1sYWJlbCB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAuY2FyZC1ob2xkZXIsICNib2FyZC1jYXJkcyB7XHJcbiAgICAgICAgbWFyZ2luOiAwIDAgMCAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5lcXVpdHkge1xyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDI4cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmQtaG9sZGVyLCAjYm9hcmQtY2FyZHMge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBoZWlnaHQ6IDE0NXB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgICAgIC13ZWJraXQtdGV4dC1zdHJva2Utd2lkdGg6IDFweDtcclxuICAgICAgICAtd2Via2l0LXRleHQtc3Ryb2tlLWNvbG9yOiBibGFjaztcclxuICAgIH1cclxuXHJcbiAgICAuY2FyZC1ob2xkZXIuZGVjay1jYXJkLXdyYXBwZXIge1xyXG4gICAgICAgIHBhZGRpbmc6IDRweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLnJlbW92ZS1wbGF5ZXItYnRuIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgLnJlbW92ZS1wbGF5ZXItYnRuIGltZyB7XHJcbiAgICAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdyggM3B4IDBweCAxcHggd2hpdGUgKTtcclxuICAgICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KCAtM3B4IDBweCAxcHggd2hpdGUgKTtcclxuICAgICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KCAwcHggM3B4IDFweCB3aGl0ZSApO1xyXG4gICAgICAgIGZpbHRlcjogZHJvcC1zaGFkb3coIDBweCAtM3B4IDFweCB3aGl0ZSApO1xyXG4gICAgICAgIC13ZWJraXQtZmlsdGVyOiBkcm9wLXNoYWRvdygzcHggMHB4IDFweCB3aGl0ZSApO1xyXG4gICAgICAgIC13ZWJraXQtZmlsdGVyOiBkcm9wLXNoYWRvdyggLTNweCAwcHggMXB4IHdoaXRlICk7XHJcbiAgICAgICAgLXdlYmtpdC1maWx0ZXI6IGRyb3Atc2hhZG93KCAwcHggM3B4IDFweCB3aGl0ZSApO1xyXG4gICAgICAgIC13ZWJraXQtZmlsdGVyOiBkcm9wLXNoYWRvdyggIDBweCAtM3B4IDFweCB3aGl0ZSApO1xyXG4gICAgfVxyXG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardHolderComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'card-holder',
            templateUrl: './card-holder.component.html',
            styleUrls: ['./card-holder.component.css']
          }]
        }], null, {
          player: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          calculator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "vvJJ":
    /*!********************************************!*\
      !*** ./src/app/calculator/card.service.ts ***!
      \********************************************/

    /*! exports provided: Card */

    /***/
    function vvJJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Card", function () {
        return Card;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      function toCdn(file) {
        return cdnUrl[file] || file;
      }

      var Card = /*#__PURE__*/function () {
        function Card(imageId) {
          var src = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
          var value = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

          _classCallCheck(this, Card);

          this.imageId = imageId;
          this.src = src;
          this.value = value;
          this.redBack = toCdn('assets/images/cards_zipped/newGraySm.png');
          this.redBackBordered = toCdn('assets/images/cards_zipped/newGraySmBr.png');
          this.imageId = imageId;
          this.setNewCard(src, value);
        }

        _createClass(Card, [{
          key: "setNewCard",
          value: function setNewCard(src, value) {
            this.src = toCdn(src || this.redBack);
            this.value = value;
          }
        }, {
          key: "serverValue",
          value: function serverValue() {
            if (!this.value) {
              return null;
            }

            return this.value.slice(-1) + this.value.slice(0, -1);
          }
        }, {
          key: "deselect",
          value: function deselect() {
            this.src = toCdn(this.redBack);
            this.value = null;
          }
        }, {
          key: "setSrc",
          value: function setSrc(calculator) {
            if (!this.value) {
              if (this === calculator.nextCard()) {
                this.src = toCdn(this.redBackBordered);
              } else {
                this.src = toCdn(this.redBack);
              }
            }
          }
        }]);

        return Card;
      }();

      Card.ɵfac = function Card_Factory(t) {
        return new (t || Card)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"]('imageId'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"]('src'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"]('value'));
      };

      Card.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: Card,
        factory: Card.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Card, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: ['imageId']
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: ['src']
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: ['value']
            }]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "cUpR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map