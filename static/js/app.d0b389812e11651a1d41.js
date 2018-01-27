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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(8);
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
      currentWordIndex: 0,
      todayStr: Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* getTodayStr */])()
    };
  },
  methods: {
    setCurrentWordIsOver() {
      this.checkEnItemMemoryRecord(this.en);
      this.userMemoryData.memoryRecord[this.en].memoryCount += 20;

      this.checkDaysRecord();
      this.userMemoryData.daysRecord[this.todayStr].pass++;
      this.userMemoryData.daysRecord[this.todayStr].count++;
    },
    checkDaysRecord() {
      if (!this.userMemoryData.daysRecord) this.userMemoryData.daysRecord = {};

      if (!this.userMemoryData.daysRecord[this.todayStr]) this.userMemoryData.daysRecord[this.todayStr] = {};

      if (!this.userMemoryData.daysRecord[this.todayStr].count) this.userMemoryData.daysRecord[this.todayStr].count = 1;

      if (!this.userMemoryData.daysRecord[this.todayStr].pass) this.userMemoryData.daysRecord[this.todayStr].pass = 1;
    },
    next() {

      this.checkDaysRecord();

      if (!this.isShowZh) {
        this.userMemoryData.daysRecord[this.todayStr].pass++;
      }

      console.log('today before', this.userMemoryData.daysRecord[this.todayStr].count);
      this.userMemoryData.daysRecord[this.todayStr].count++;
      console.log('today +1 ', this.userMemoryData.daysRecord[this.todayStr].count);
      this.showNew();
    },

    checkEnItemMemoryRecord(en) {
      if (!this.userMemoryData.memoryRecord) this.userMemoryData.memoryRecord = {};
      if (!this.userMemoryData.memoryRecord[en]) {
        this.userMemoryData.memoryRecord[en] = {
          memoryCount: 0
        };
      }
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

      let en = this.wordsKeys[currentWordIndex];

      this.checkEnItemMemoryRecord(en);

      if (this.userMemoryData.memoryRecord[en].memoryCount > 20) {
        return this.showNew();
      }

      this.en = en;
      this.zh = this.words[this.en].zh;

      this.currentWordIndex = currentWordIndex;

      this.userMemoryData.memoryRecord[this.en].memoryCount++;
    }

  },
  async created() {
    if (localStorage.userMemoryDataStr) {
      this.userMemoryData = JSON.parse(localStorage.userMemoryDataStr);

      console.log('this.userMemoryData', this.userMemoryData);
    } else {
      this.userMemoryData = {};
    }

    setInterval(() => {
      localStorage.userMemoryDataStr = JSON.stringify(this.userMemoryData);
      console.log('save userMemoryDataStr finished');
    }, 1000 * 10);

    this.words = await Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* getNewWorldsData */])('static/words.json');

    this.wordsKeys = Object.keys(this.words);

    this.showNew();

    //console.log(this.todayStr)
  }
});

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = getTodayStr;
/* harmony export (immutable) */ __webpack_exports__["a"] = getNewWorldsData;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);


function getTodayStr() {
    var nowDate = new Date();
    var year = nowDate.getFullYear();
    var month = nowDate.getMonth() + 1 < 10 ? "0" + (nowDate.getMonth() + 1) : nowDate.getMonth() + 1;
    var day = nowDate.getDate() < 10 ? "0" + nowDate.getDate() : nowDate.getDate();
    return year + "-" + month + "-" + day;
}

async function getNewWorldsData(url) {
    let wordsObj;
    if (localStorage.wordsStr) {
        wordsObj = JSON.parse(localStorage.wordsStr);
    } else {
        let res = await __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(url);
        //console.log(res)
        wordsObj = res.data;
        localStorage.wordsStr = JSON.stringify(wordsObj);
    }

    return wordsObj;
}

/***/ }),
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(8);
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
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'hello',
  data() {
    return {
      todayStr: Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* getTodayStr */])(),
      overWordSum: 0,
      wordsLength: 0,
      userMemoryData: null
    };
  },
  async created() {
    if (localStorage.userMemoryDataStr) {
      this.userMemoryData = JSON.parse(localStorage.userMemoryDataStr);
    }

    let userMemoryData = this.userMemoryData;

    let overWordSum = 0;
    if (userMemoryData.daysRecord) {
      for (let day in userMemoryData.daysRecord) {
        let dayRecord = userMemoryData.daysRecord[day];
        if (dayRecord.pass) {
          overWordSum += dayRecord.pass;
        }
      }
    }

    this.overWordSum = overWordSum;

    let words = await Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* getNewWorldsData */])('static/words.json');
    console.log('words', words);

    this.wordsLength = Object.keys(words).length;
  }
});

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios__ = __webpack_require__(9);
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
/* 17 */,
/* 18 */,
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(6);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6fc11c20_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__ = __webpack_require__(22);
function injectStyle (ssrContext) {
  __webpack_require__(20)
}
var normalizeComponent = __webpack_require__(2)
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
/* 20 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 21 */,
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('router-view')],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Home__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Sum__ = __webpack_require__(46);





__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  routes: [{
    path: '/',
    name: 'Home',
    component: __WEBPACK_IMPORTED_MODULE_2__components_Home__["a" /* default */]
  }, {
    path: '/home',
    name: 'Home',
    component: __WEBPACK_IMPORTED_MODULE_2__components_Home__["a" /* default */]
  }, {
    path: '/sum',
    name: 'Sum',
    component: __WEBPACK_IMPORTED_MODULE_3__components_Sum__["a" /* default */]
  }]
}));

/***/ }),
/* 24 */,
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Home_vue__ = __webpack_require__(7);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_87b61500_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Home_vue__ = __webpack_require__(45);
function injectStyle (ssrContext) {
  __webpack_require__(26)
}
var normalizeComponent = __webpack_require__(2)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_87b61500_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Home_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 26 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"hello"},[_c('br'),_vm._v(" "),_c('br'),_vm._v(" "),_c('br'),_vm._v(" "),_c('br'),_vm._v(" "),_c('br'),_vm._v(" "),_c('div',{staticClass:"l-ali-center"},[_c('span',[_vm._v(_vm._s(_vm.en))]),_vm._v(" "),_c('br'),_vm._v(" "),_c('div',{staticClass:"infos"},[(_vm.isShowZh)?_c('div',{staticClass:"infos__inner"},[_c('span',[_vm._v(_vm._s(_vm.zh))])]):_vm._e()]),_vm._v(" "),_c('br'),_vm._v(" "),_c('a',{staticClass:"btn-little",attrs:{"href":"javascript:void(0);"},on:{"click":function($event){_vm.isShowZh=true}}},[_vm._v("show annotation")]),_vm._v(" "),_c('br'),_vm._v(" "),_c('a',{staticClass:"btn-little",attrs:{"href":"javascript:void(0);"},on:{"click":_vm.next}},[_vm._v("next")]),_vm._v(" "),_c('br'),_vm._v(" "),_c('a',{staticClass:"btn-little",attrs:{"href":"javascript:void(0);"},on:{"click":_vm.setCurrentWordIsOver}},[_vm._v("it's familiar")])]),_vm._v(" "),_c('nav',{staticClass:"bottom-nav"},[_c('router-link',{attrs:{"to":"/sum","href":"javascript:void(0);"}},[_vm._v("统计")])],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Sum_vue__ = __webpack_require__(15);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5c928bd2_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Sum_vue__ = __webpack_require__(48);
function injectStyle (ssrContext) {
  __webpack_require__(47)
}
var normalizeComponent = __webpack_require__(2)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Sum_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5c928bd2_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Sum_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 47 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"hello"},[_c('div',[_c('span',[_vm._v("共有"+_vm._s(_vm.wordsLength)+"个单词")])]),_vm._v(" "),_c('div',[_c('span',[_vm._v("已经记住"+_vm._s(_vm.overWordSum)+"个单词")])]),_vm._v(" "),_c('br'),_vm._v(" "),(_vm.userMemoryData&&_vm.userMemoryData.daysRecord&&_vm.userMemoryData.daysRecord[_vm.todayStr])?_c('div',[_c('div',[_c('span',[_vm._v("今天记了"+_vm._s(_vm.userMemoryData.daysRecord[_vm.todayStr].count)+"个单词")])]),_vm._v(" "),_c('div',[_c('span',[_vm._v("其中，pass了"+_vm._s(_vm.userMemoryData.daysRecord[_vm.todayStr].pass)+"个")])])]):_c('div',[_vm._v("\n    今天没有数据\n  ")]),_vm._v(" "),_c('div',[_c('router-link',{attrs:{"to":"/home","href":"javascript:void(0);"}},[_vm._v("返回")])],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })
],[16]);
//# sourceMappingURL=app.d0b389812e11651a1d41.js.map