webpackJsonp([1],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'app'
});

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


//生成从minNum到maxNum的随机数
function randomNum(minNum, maxNum) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * minNum + 1, 10);
      break;
    case 2:
      return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
      break;
    default:
      return 0;
      break;
  }
}

/* harmony default export */ __webpack_exports__["a"] = ({
  name: "home",
  data() {
    return {
      en: "english",
      zh: "英语",
      isShowZh: false,
      words: {
        "accuser": {
          "zh": "控告"
        },
        "accustom": {
          "zh": "习惯"
        },
        "accustomed": {
          "zh": "惯例"
        },
        "accustomed to": {
          "zh": "惯例"
        },
        "ace": {
          "zh": "王牌"
        },
        "acetic": {
          "zh": "醋"
        },
        "ache": {
          "zh": "疼痛"
        }
      },
      wordsKeys: [],
      currentWordIndex: 0
    };
  },
  methods: {
    next() {
      this.showNew();
    },
    showNew() {
      this.isShowZh = false;
      let currentWordIndex = randomNum(0, this.wordsKeys.length - 1);

      if (currentWordIndex === this.currentWordIndex) {

        if (currentWordIndex > 1) {
          currentWordIndex--;
        } else {
          currentWordIndex++;
        }
      }

      this.en = this.wordsKeys[currentWordIndex];
      this.zh = this.words[this.wordsKeys[currentWordIndex]].zh;

      this.currentWordIndex = currentWordIndex;
    },
    async getNewWorldsData() {
      let res = await this.axios.get("/static/words.json");
      console.log(res);

      return res.data;
    }
  },
  async created() {

    this.words = await this.getNewWorldsData();

    this.wordsKeys = Object.keys(this.words);

    this.showNew();
  }
});

/***/ }),
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_axios__);
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.





__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].prototype.axios = __WEBPACK_IMPORTED_MODULE_3_axios___default.a;

__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].config.productionTip = false;

/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
  el: '#app',
  router: __WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */],
  template: '<App/>',
  components: { App: __WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */] }
});

/***/ }),
/* 14 */,
/* 15 */,
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(6);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6fc11c20_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__ = __webpack_require__(19);
function injectStyle (ssrContext) {
  __webpack_require__(17)
}
var normalizeComponent = __webpack_require__(5)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6fc11c20_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 17 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 18 */,
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('router-view')],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Home__ = __webpack_require__(22);




__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  routes: [{
    path: '/',
    name: 'Home',
    component: __WEBPACK_IMPORTED_MODULE_2__components_Home__["a" /* default */]
  }]
}));

/***/ }),
/* 21 */,
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Home_vue__ = __webpack_require__(7);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2eb9cab6_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Home_vue__ = __webpack_require__(24);
function injectStyle (ssrContext) {
  __webpack_require__(23)
}
var normalizeComponent = __webpack_require__(5)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Home_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2eb9cab6_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Home_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 23 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"hello"},[_c('br'),_vm._v(" "),_c('br'),_vm._v(" "),_c('br'),_vm._v(" "),_c('br'),_vm._v(" "),_c('br'),_vm._v(" "),_c('div',{staticClass:"l-ali-center"},[_c('span',[_vm._v(_vm._s(_vm.en))]),_vm._v(" "),_c('br'),_vm._v(" "),_c('div',{staticClass:"infos"},[(_vm.isShowZh)?_c('div',{staticClass:"infos__inner"},[_c('span',[_vm._v(_vm._s(_vm.zh))])]):_vm._e()]),_vm._v(" "),_c('br'),_vm._v(" "),_c('a',{staticClass:"btn-little",attrs:{"href":"javascript:void(0);"},on:{"click":function($event){_vm.isShowZh=true}}},[_vm._v("show annotation")]),_vm._v(" "),_c('br'),_vm._v(" "),_c('a',{staticClass:"btn-little",attrs:{"href":"javascript:void(0);"},on:{"click":_vm.next}},[_vm._v("next")])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })
],[13]);
//# sourceMappingURL=app.4470a697c240184dd550.js.map