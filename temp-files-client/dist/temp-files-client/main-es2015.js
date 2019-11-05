(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/error-home/error-home.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/error-home/error-home.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>error-home works! {{errorMsg}}</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/file-download-home/file-download-home.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/file-download-home/file-download-home.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"container download-link-container\">\n    <div class=\"header-text-container\">\n        Please use this link to download the file\n    </div>\n    <div class=\"row link-container\">\n        <div class=\"col-lg-10 col-md-10 col-sm-10 col-xs-12\">\n            <input id=\"link-input\" type=\"text\" class=\"download-link\" value=\"{{fileDownloadLink}}\" (window:resize)=\"onLinkElementChange($event);\" readonly />\n        </div>\n        <div class=\"col-lg-2 col-md-2 col-sm-2 col-xs-2 offset-xs-5 text-center\">\n            <button class=\"clipboard-icon-container\" (click)=\"clickClipboardIcon();\">\n                <fa name=\"copy\"></fa>\n            </button>\n        </div>\n    </div>\n    <div class=\"header-text-container qr-msg-container\">\n            Or Scan the QR Code\n    </div>\n    <div class=\"qr-code-container\">\n        <ngx-qrcode qrc-element-type=\"url\" [qrc-value]=\"fileDownloadLink\" qrc-class = \"aclass\" qrc-errorCorrectionLevel = \"L\"></ngx-qrcode>\n    </div>\n\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/file-input/file-input.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/file-input/file-input.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <form id=\"file-form\" action=\"\" method=\"post\" enctype=\"multipart/form-data\">\n    Upload a File:\n    <input type=\"file\" id=\"myfile\" name=\"myfile\">\n    <input type=\"button\" id=\"submit\" name=\"submit\" (click)=\"uploadFile();\" value=\"Upload File Now\" >\n</form> -->\n\n<div class=\"container-fluid upload-container\">\n    <div class=\"row\">\n        <div class=\"upload-picker-container col-lg-5 col-md-7 col-sm-8 col-xs-10 offset-lg-3 offset-md-2 offset-sm-2 offset-xs-1\">\n            <div class=\"custom-file mb-3\">\n                <input type=\"file\" class=\"custom-file-input\" id=\"myfile\" name=\"myfile\" (change)=\"uploadFileChange();\">\n                <label class=\"custom-file-label\" id=\"upload-file-label\" for=\"myfile\">Choose file</label>\n            </div>\n        </div>\n        <div class = \"upload-button-container col-lg-1 col-md-1 col-sm-2 col-xs-4 offset-lg-0 offset-md-0 offset-sm-5 offset-xs-4\">\n            <button type=\"button\" class=\"upload-button\" (click)=\"uploadFile();\">\n                Upload\n            </button>\n        </div>\n    </div>\n    <div *ngIf = \"state == 'loading'\" class=\"row\">\n        <div class=\"col-lg-6 offset-lg-3 progress-line-container\">\n            <div class=\"progress-line\"></div>\n            <div class=\"upload-status\">\n                Processing Upload\n            </div>\n        </div>      \n    </div>\n    <div *ngIf = \"state == 'loaded'\" class=\"row\">\n        <div class=\"col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-sm-10 offset-sm-1 col-xs-10 offset-xs-1 progress-line-done-container\">\n            <div class=\"progress-line-done\"></div>\n            <div class=\"upload-status\">\n                    Upload Successful!\n            </div>\n        </div>\n        \n        <div class=\"col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-sm-10 offset-sm-1 col-xs-12 download-link-container\">\n            <app-file-download-home [fileDownloadLink]=\"fileDownloadLink\"></app-file-download-home>\n        </div>  \n    </div>\n    <div *ngIf=\"state == 'error'\" class=\"row\">\n        <div class=\"col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-sm-10 offset-sm-1 col-xs-10 offset-xs-1\">\n            <app-upload-error-msg  [message]=\"errorMsg\"></app-upload-error-msg>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-dark bg-dark\">\n    <button class=\"github-button\"><fa name=\"github\"></fa></button>\n</nav>\n<app-file-input></app-file-input>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/upload-error-msg/upload-error-msg.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/upload-error-msg/upload-error-msg.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"error-container\">\n    <div class=\"error-icon-container\">\n        <fa name=\"exclamation-triangle\"></fa>\n    </div>\n    <div class=\"error-msg-container\">\n        {{message}}\n    </div>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _error_home_error_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./error-home/error-home.component */ "./src/app/error-home/error-home.component.ts");





const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'error/:errorMsg', component: _error_home_error_home_component__WEBPACK_IMPORTED_MODULE_4__["ErrorHomeComponent"] },
    { path: 'd/:downloadString', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'temp-files-client';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _file_input_file_input_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./file-input/file-input.component */ "./src/app/file-input/file-input.component.ts");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.js");
/* harmony import */ var _file_download_home_file_download_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./file-download-home/file-download-home.component */ "./src/app/file-download-home/file-download-home.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var ngx_qrcode2__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-qrcode2 */ "./node_modules/ngx-qrcode2/index.js");
/* harmony import */ var _upload_error_msg_upload_error_msg_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./upload-error-msg/upload-error-msg.component */ "./src/app/upload-error-msg/upload-error-msg.component.ts");
/* harmony import */ var _error_home_error_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./error-home/error-home.component */ "./src/app/error-home/error-home.component.ts");














let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
            _file_input_file_input_component__WEBPACK_IMPORTED_MODULE_6__["FileInputComponent"],
            _file_download_home_file_download_home_component__WEBPACK_IMPORTED_MODULE_8__["FileDownloadHomeComponent"],
            _upload_error_msg_upload_error_msg_component__WEBPACK_IMPORTED_MODULE_12__["UploadErrorMsgComponent"],
            _error_home_error_home_component__WEBPACK_IMPORTED_MODULE_13__["ErrorHomeComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrModule"].forRoot(),
            ngx_qrcode2__WEBPACK_IMPORTED_MODULE_11__["NgxQRCodeModule"],
            angular_font_awesome__WEBPACK_IMPORTED_MODULE_7__["AngularFontAwesomeModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);

/*
TODO:
- Warning modal
- file input with large filename ellipse measurelength
- change font family
- add text above file upload
- env file

Future
- bit.ly
- encrypt file

*/ 


/***/ }),

/***/ "./src/app/error-home/error-home.component.css":
/*!*****************************************************!*\
  !*** ./src/app/error-home/error-home.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vycm9yLWhvbWUvZXJyb3ItaG9tZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/error-home/error-home.component.ts":
/*!****************************************************!*\
  !*** ./src/app/error-home/error-home.component.ts ***!
  \****************************************************/
/*! exports provided: ErrorHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorHomeComponent", function() { return ErrorHomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let ErrorHomeComponent = class ErrorHomeComponent {
    constructor(route) {
        this.route = route;
        this.errorMsg = this.route.snapshot.paramMap.get("errorMsg");
    }
    ngOnInit() {
    }
};
ErrorHomeComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
ErrorHomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-error-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./error-home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/error-home/error-home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./error-home.component.css */ "./src/app/error-home/error-home.component.css")).default]
    })
], ErrorHomeComponent);



/***/ }),

/***/ "./src/app/file-download-home/file-download-home.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/file-download-home/file-download-home.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* .download-link-container {\n    background-color: lightblue;\n} */\n\n.header-text-container {\n    text-align: center;\n}\n\n.clipboard-icon-containe {\n    text-align: center;\n}\n\n.download-link {\n    width: 100%;\n    border: 0; \n    padding-top:5px;\n    padding-bottom: 5px;\n    padding-left: 2px;\n    padding-right: 22-px;\n    border-bottom: 1px solid black;\n    text-align: center;\n}\n\n.link-container {\n    margin-top: 15px;\n    font-size: 25px;\n}\n\n.clipboard-icon-container {\n    border: 1px solid black;\n    border-radius: 25px;\n    background-color: black;\n    color: white;\n    outline: none;\n    padding-left: 20px;\n    padding-right: 20px;\n}\n\n#link-input {\n    outline: none;\n}\n\n@media (max-width: 575.98px) {\n    .clipboard-icon-container {\n        margin-top: 20px;\n    }\n}\n\n.qr-msg-container {\n    margin-top: 25px;\n}\n\n.qr-code-container {\n    text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmlsZS1kb3dubG9hZC1ob21lL2ZpbGUtZG93bmxvYWQtaG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHOztBQUVIO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFNBQVM7SUFDVCxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsOEJBQThCO0lBQzlCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJO1FBQ0ksZ0JBQWdCO0lBQ3BCO0FBQ0o7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9maWxlLWRvd25sb2FkLWhvbWUvZmlsZS1kb3dubG9hZC1ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAuZG93bmxvYWQtbGluay1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcbn0gKi9cblxuLmhlYWRlci10ZXh0LWNvbnRhaW5lciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY2xpcGJvYXJkLWljb24tY29udGFpbmUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmRvd25sb2FkLWxpbmsge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogMDsgXG4gICAgcGFkZGluZy10b3A6NXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAycHg7XG4gICAgcGFkZGluZy1yaWdodDogMjItcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmxpbmstY29udGFpbmVyIHtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbn1cblxuLmNsaXBib2FyZC1pY29uLWNvbnRhaW5lciB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcbn1cblxuI2xpbmstaW5wdXQge1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzUuOThweCkge1xuICAgIC5jbGlwYm9hcmQtaWNvbi1jb250YWluZXIge1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIH1cbn1cblxuLnFyLW1zZy1jb250YWluZXIge1xuICAgIG1hcmdpbi10b3A6IDI1cHg7XG59XG5cbi5xci1jb2RlLWNvbnRhaW5lciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/file-download-home/file-download-home.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/file-download-home/file-download-home.component.ts ***!
  \********************************************************************/
/*! exports provided: FileDownloadHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileDownloadHomeComponent", function() { return FileDownloadHomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);




let FileDownloadHomeComponent = class FileDownloadHomeComponent {
    constructor(toastr) {
        this.toastr = toastr;
        jquery__WEBPACK_IMPORTED_MODULE_3___default()(document).ready(() => this.onLinkElementChange(null));
    }
    ngOnInit() {
    }
    onLinkElementChange(event) {
        console.log("calling shrinktofill");
        this.shrinkToFill("#link-input", 25, "", "serif");
    }
    clickClipboardIcon() {
        this.copyToClipboard(this.fileDownloadLink);
    }
    copyToClipboard(item) {
        document.addEventListener('copy', (e) => {
            e.clipboardData.setData('text/plain', (item));
            e.preventDefault();
            document.removeEventListener('copy', null);
        });
        document.execCommand('copy');
        // this.toastr.toastrConfig. options = {
        //   "debug": false,
        //   "positionClass": "toast-bottom-full-width",
        //   "onclick": null,
        //   "fadeIn": 300,
        //   "fadeOut": 1000,
        //   "timeOut": 5000,
        //   "extendedTimeOut": 1000
        // }
        if (jquery__WEBPACK_IMPORTED_MODULE_3___default()(".clipboard-icon-container").css("margin-top") == "20px") {
            this.toastr.success('Successfully copied to clipboard', "", { positionClass: "toast-bottom-full-width" });
        }
        else {
            this.toastr.success('Successfully copied to clipboard', "", { positionClass: "toast-bottom-right" });
        }
    }
    measureText(txt, font) {
        var id = 'text-width-tester', $tag = jquery__WEBPACK_IMPORTED_MODULE_3___default()('#' + id);
        if (!$tag.length) {
            $tag = jquery__WEBPACK_IMPORTED_MODULE_3___default()('<span id="' + id + '" style="display:none;font:' + font + ';">' + txt + '</span>');
            jquery__WEBPACK_IMPORTED_MODULE_3___default()('body').append($tag);
        }
        else {
            $tag.css({ font: font }).html(txt);
        }
        return {
            width: $tag.width(),
            height: $tag.height()
        };
    }
    shrinkToFill(input, fontSize, fontWeight, fontFamily) {
        var $input = jquery__WEBPACK_IMPORTED_MODULE_3___default()(input);
        var txt = $input.val();
        var maxWidth = $input.width() + 5;
        var font = fontWeight + " " + fontSize + "px " + fontFamily;
        var textWidth = this.measureText(txt, font).width;
        console.log(textWidth, maxWidth);
        if (textWidth > maxWidth) {
            fontSize = fontSize * maxWidth / textWidth * .9;
            font = fontWeight + " " + fontSize + "px " + fontFamily;
            $input.css({ font: font });
        }
        else {
            $input.css({ font: font });
        }
    }
};
FileDownloadHomeComponent.ctorParameters = () => [
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FileDownloadHomeComponent.prototype, "fileDownloadLink", void 0);
FileDownloadHomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-file-download-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./file-download-home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/file-download-home/file-download-home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./file-download-home.component.css */ "./src/app/file-download-home/file-download-home.component.css")).default]
    })
], FileDownloadHomeComponent);



/***/ }),

/***/ "./src/app/file-input/file-input.component.css":
/*!*****************************************************!*\
  !*** ./src/app/file-input/file-input.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".upload-container {\n    margin-top: 50px;\n    outline: none;\n}\n\n.upload-button {\n    background-color: blueviolet;\n    color: white;\n    border: 0px solid black;\n    border-radius: 25px;\n    height: calc(1.5em + .75rem + 2px);\n    padding-left: 30px;\n    padding-right: 30px;\n    outline: none !important;\n}\n\n.custom-file-label {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n@media (max-width: 767px) {\n    .upload-button-container {\n        margin-top: 20px;\n    }\n}\n\n@media (max-width: 575.98px) { \n    .upload-button-container {\n        text-align: center;\n    }\n    \n    .upload-button {\n        padding-left: 40px;\n        padding-right: 40px;\n    }\n}\n\n.progress-line-container {\n    margin-top: 30px;\n    height: 20px;\n    display: inline-block;\n    text-align: center;\n}\n\n.progress-line, .progress-line:before {\n    height: 100%;\n    width: 100%;\n    margin: 0;\n    border-radius: 20px;\n  }\n\n.progress-line {\n    background-color: #b3d4fc;\n    display: flex;\n    border-radius: 20px;\n  }\n\n.progress-line:before {\n    border-radius: 20px;\n    background-color: #3f51b5;\n    content: '';\n    -webkit-animation: running-progress 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n    animation: running-progress 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n  }\n\n@-webkit-keyframes running-progress {\n    0% { margin-left: 0px; margin-right: 100%; }\n    50% { margin-left: 25%; margin-right: 0%; }\n    100% { margin-left: 100%; margin-right: 0; }\n  }\n\n@keyframes running-progress {\n    0% { margin-left: 0px; margin-right: 100%; }\n    50% { margin-left: 25%; margin-right: 0%; }\n    100% { margin-left: 100%; margin-right: 0; }\n  }\n\n.progress-line-done, .progress-line-done:before {\n    height: 100%;\n    width: 100%;\n    margin: 0;\n    border-radius: 20px;\n  }\n\n.progress-line-done {\n    background-color: #b3d4fc;\n    display: flex;\n    border-radius: 20px;\n  }\n\n.progress-line-done:before {\n    border-radius: 20px;\n    background-color: #3f51b5;\n    content: '';\n  }\n\n.progress-line-done-container {\n    margin-top: 30px;\n    height: 20px;\n    text-align: center;\n}\n\n.upload-status {\n    font-size: 150%;\n    font-weight: 500;\n    font-family: monospace;\n    align-self: center;\n    margin-top: 15px;\n}\n\n.download-link-container {\n    position: absolute;\n    margin-top: 150px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmlsZS1pbnB1dC9maWxlLWlucHV0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLDRCQUE0QjtJQUM1QixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixrQ0FBa0M7SUFDbEMsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQix3QkFBd0I7QUFDNUI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFHQTtJQUNJO1FBQ0ksZ0JBQWdCO0lBQ3BCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLGtCQUFrQjtRQUNsQixtQkFBbUI7SUFDdkI7QUFDSjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsU0FBUztJQUNULG1CQUFtQjtFQUNyQjs7QUFDQTtJQUNFLHlCQUF5QjtJQUV6QixhQUFhO0lBQ2IsbUJBQW1CO0VBQ3JCOztBQUNBO0lBQ0UsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsNEVBQTRFO0lBQzVFLG9FQUFvRTtFQUN0RTs7QUFDQTtJQUNFLEtBQUssZ0JBQWdCLEVBQUUsa0JBQWtCLEVBQUU7SUFDM0MsTUFBTSxnQkFBZ0IsRUFBRSxnQkFBZ0IsRUFBRTtJQUMxQyxPQUFPLGlCQUFpQixFQUFFLGVBQWUsRUFBRTtFQUM3Qzs7QUFDQTtJQUNFLEtBQUssZ0JBQWdCLEVBQUUsa0JBQWtCLEVBQUU7SUFDM0MsTUFBTSxnQkFBZ0IsRUFBRSxnQkFBZ0IsRUFBRTtJQUMxQyxPQUFPLGlCQUFpQixFQUFFLGVBQWUsRUFBRTtFQUM3Qzs7QUFHQTtJQUNFLFlBQVk7SUFDWixXQUFXO0lBQ1gsU0FBUztJQUNULG1CQUFtQjtFQUNyQjs7QUFDQTtJQUNFLHlCQUF5QjtJQUV6QixhQUFhO0lBQ2IsbUJBQW1CO0VBQ3JCOztBQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixXQUFXO0VBQ2I7O0FBRUY7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvZmlsZS1pbnB1dC9maWxlLWlucHV0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXBsb2FkLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG4udXBsb2FkLWJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZXZpb2xldDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiAwcHggc29saWQgYmxhY2s7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICBoZWlnaHQ6IGNhbGMoMS41ZW0gKyAuNzVyZW0gKyAycHgpO1xuICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmN1c3RvbS1maWxlLWxhYmVsIHtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgLnVwbG9hZC1idXR0b24tY29udGFpbmVyIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzUuOThweCkgeyBcbiAgICAudXBsb2FkLWJ1dHRvbi1jb250YWluZXIge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICAgIFxuICAgIC51cGxvYWQtYnV0dG9uIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xuICAgIH1cbn1cblxuLnByb2dyZXNzLWxpbmUtY29udGFpbmVyIHtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucHJvZ3Jlc3MtbGluZSwgLnByb2dyZXNzLWxpbmU6YmVmb3JlIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIH1cbiAgLnByb2dyZXNzLWxpbmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNiM2Q0ZmM7XG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgfVxuICAucHJvZ3Jlc3MtbGluZTpiZWZvcmUge1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTFiNTtcbiAgICBjb250ZW50OiAnJztcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogcnVubmluZy1wcm9ncmVzcyAycyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIGluZmluaXRlO1xuICAgIGFuaW1hdGlvbjogcnVubmluZy1wcm9ncmVzcyAycyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIGluZmluaXRlO1xuICB9XG4gIEAtd2Via2l0LWtleWZyYW1lcyBydW5uaW5nLXByb2dyZXNzIHtcbiAgICAwJSB7IG1hcmdpbi1sZWZ0OiAwcHg7IG1hcmdpbi1yaWdodDogMTAwJTsgfVxuICAgIDUwJSB7IG1hcmdpbi1sZWZ0OiAyNSU7IG1hcmdpbi1yaWdodDogMCU7IH1cbiAgICAxMDAlIHsgbWFyZ2luLWxlZnQ6IDEwMCU7IG1hcmdpbi1yaWdodDogMDsgfVxuICB9XG4gIEBrZXlmcmFtZXMgcnVubmluZy1wcm9ncmVzcyB7XG4gICAgMCUgeyBtYXJnaW4tbGVmdDogMHB4OyBtYXJnaW4tcmlnaHQ6IDEwMCU7IH1cbiAgICA1MCUgeyBtYXJnaW4tbGVmdDogMjUlOyBtYXJnaW4tcmlnaHQ6IDAlOyB9XG4gICAgMTAwJSB7IG1hcmdpbi1sZWZ0OiAxMDAlOyBtYXJnaW4tcmlnaHQ6IDA7IH1cbiAgfVxuXG5cbiAgLnByb2dyZXNzLWxpbmUtZG9uZSwgLnByb2dyZXNzLWxpbmUtZG9uZTpiZWZvcmUge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDA7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgfVxuICAucHJvZ3Jlc3MtbGluZS1kb25lIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjNkNGZjO1xuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIH1cblxuICAucHJvZ3Jlc3MtbGluZS1kb25lOmJlZm9yZSB7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MWI1O1xuICAgIGNvbnRlbnQ6ICcnO1xuICB9XG5cbi5wcm9ncmVzcy1saW5lLWRvbmUtY29udGFpbmVyIHtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi51cGxvYWQtc3RhdHVzIHtcbiAgICBmb250LXNpemU6IDE1MCU7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4uZG93bmxvYWQtbGluay1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBtYXJnaW4tdG9wOiAxNTBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/file-input/file-input.component.ts":
/*!****************************************************!*\
  !*** ./src/app/file-input/file-input.component.ts ***!
  \****************************************************/
/*! exports provided: FileInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileInputComponent", function() { return FileInputComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");



let FileInputComponent = class FileInputComponent {
    constructor(location) {
        this.location = location;
        this.state = "init";
        this.fileDownloadLink = "";
        this.defaultErrorMsg = "Something went wrong! Please try again after some time.";
        this.errorMsg = this.defaultErrorMsg;
        this.fileSizeLimit = 5000000;
    }
    ngOnInit() {
        if (document.getElementById("serverInput").innerHTML == "true") {
            this.state = "error";
            this.errorMsg = "File not Found";
            this.location.replaceState('');
        }
    }
    uploadFile() {
        this.state = "loading";
        // setTimeout(() => {
        //   console.log("got");
        //   this.state = "loaded";
        //   this.fileDownloadLink = "localhost:5000/download/19664838e89d4302a67146ebfb2ac824";
        //   console.log(this.state);
        // }, 3000 * 1);
        // return
        var file = document.getElementById('myfile').files[0];
        if (!file) {
            this.errorMsg = 'Please select a file for upload';
            this.state = "error";
            return;
        }
        var formData = new FormData();
        if (file.size >= this.fileSizeLimit) {
            this.errorMsg = 'You cannot upload this file because its size exceeds the maximum limit of 5 MB.';
            this.state = "error";
            return;
        }
        formData.append('myfile', file, file.name);
        var xhr = new XMLHttpRequest();
        xhr.open('POST', '/file-upload', true);
        xhr.onload = () => {
            if (xhr.status === 200) {
                // statusDiv.innerHTML = 'Your upload is successful..' + xhr.responseText;
                var responseText = xhr.responseText;
                if (responseText == "error") {
                    this.state = "error";
                    this.fileDownloadLink = "error";
                    this.errorMsg = this.defaultErrorMsg;
                }
                else {
                    this.state = "loaded";
                    this.fileDownloadLink = responseText;
                    this.errorMsg = this.defaultErrorMsg;
                }
            }
            else {
                this.state = "error";
                this.fileDownloadLink = "error";
                // statusDiv.innerHTML = 'An error occurred during the upload. Try again.';
            }
        };
        xhr.send(formData);
    }
    uploadFileChange() {
        var file = document.getElementById('myfile').files[0];
        if (!file) {
            document.getElementById("upload-file-label").textContent = "Choose file";
        }
        else {
            document.getElementById("upload-file-label").textContent = file.name;
        }
    }
};
FileInputComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FileInputComponent.prototype, "state", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FileInputComponent.prototype, "errorMsg", void 0);
FileInputComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-file-input',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./file-input.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/file-input/file-input.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./file-input.component.css */ "./src/app/file-input/file-input.component.css")).default]
    })
], FileInputComponent);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".github-button{\n    outline: none;\n    border: 0px solid black;\n    background-color:transparent;\n    color:white;\n    font-size: 200%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLDRCQUE0QjtJQUM1QixXQUFXO0lBQ1gsZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdpdGh1Yi1idXR0b257XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXI6IDBweCBzb2xpZCBibGFjaztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O1xuICAgIGNvbG9yOndoaXRlO1xuICAgIGZvbnQtc2l6ZTogMjAwJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/upload-error-msg/upload-error-msg.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/upload-error-msg/upload-error-msg.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".error-icon-container {\n    margin-top: 25px;\n    font-size: 400%;\n    background-color: transparent;\n    color: red;\n}\n\n.error-msg-container {\n    margin-top: 25px;\n    font-size: 150%;\n    font-family: monospace;\n}\n\n.error-container {\n    text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXBsb2FkLWVycm9yLW1zZy91cGxvYWQtZXJyb3ItbXNnLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLDZCQUE2QjtJQUM3QixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL3VwbG9hZC1lcnJvci1tc2cvdXBsb2FkLWVycm9yLW1zZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVycm9yLWljb24tY29udGFpbmVyIHtcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xuICAgIGZvbnQtc2l6ZTogNDAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBjb2xvcjogcmVkO1xufVxuXG4uZXJyb3ItbXNnLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luLXRvcDogMjVweDtcbiAgICBmb250LXNpemU6IDE1MCU7XG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbn1cblxuLmVycm9yLWNvbnRhaW5lciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/upload-error-msg/upload-error-msg.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/upload-error-msg/upload-error-msg.component.ts ***!
  \****************************************************************/
/*! exports provided: UploadErrorMsgComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadErrorMsgComponent", function() { return UploadErrorMsgComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UploadErrorMsgComponent = class UploadErrorMsgComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], UploadErrorMsgComponent.prototype, "message", void 0);
UploadErrorMsgComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-upload-error-msg',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./upload-error-msg.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/upload-error-msg/upload-error-msg.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./upload-error-msg.component.css */ "./src/app/upload-error-msg/upload-error-msg.component.css")).default]
    })
], UploadErrorMsgComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/udith/Documents/WORKSPACE/temp_files/temp-files-client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map