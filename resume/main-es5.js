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

/***/ "./node_modules/raw-loader/index.js!./src/app/app-config/app-config-dialog/app-config-dialog.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app-config/app-config-dialog/app-config-dialog.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Application Settings</h1>\r\n<mat-dialog-content>\r\n  <div align=\"center\">\r\n    <h3>Choose a Theme:</h3>\r\n    <span *ngFor=\"let theme of appConfigService.getThemes();let i = index\">\r\n      <br *ngIf=\"i===4\">\r\n      <button class=\"style-selector\" mat-mini-fab matTooltip=\"{{theme.title | titlecase}}\" (click)=\"updateTheme(theme)\" [ngStyle]=\"{'background-color': theme.primary, color: 'white'}\">\r\n        <mat-icon color=\"mat-light\" *ngIf=\"appConfig$.theme.title === theme.title\">check_circle</mat-icon>\r\n      </button>\r\n    </span>\r\n    <h3>Choose a Style:</h3>\r\n  </div>\r\n  <p class=\"center-col\">\r\n    <mat-radio-group>\r\n      <span *ngFor=\"let style of appConfigService.getStyles()\">\r\n        <mat-radio-button [checked]=\"appConfig$.style.title === style.title\" [matTooltip]=\"style.description\" [value]=\"style.title\" (click)=\"updateStyle(style)\">\r\n          {{style.title}}\r\n        </mat-radio-button>\r\n      </span>\r\n    </mat-radio-group>\r\n  </p>\r\n</mat-dialog-content>\r\n<mat-dialog-actions align=\"center\">\r\n  <button mat-flat-button [mat-dialog-close]=\"true\" color=\"accent\">DONE</button>\r\n</mat-dialog-actions>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app-config/app-config.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app-config/app-config.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>app-config works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app-styles/aqua/aqua.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app-styles/aqua/aqua.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"sidenav-container\">\r\n  <mat-sidenav #sidenav mode=\"over\" [(opened)]=\"sideNavOpened\" style=\"height: 100vh\">\r\n\r\n    <div class=\"monogram\">BF</div>\r\n\r\n    <div>\r\n      <mat-nav-list>\r\n        <mat-list-item *ngFor=\"let pl of menu.pageLinks\" style=\"width: 200px\">\r\n          {{pl.title}}\r\n        </mat-list-item>\r\n      </mat-nav-list>\r\n    </div>\r\n\r\n  </mat-sidenav>\r\n  <mat-sidenav-content [style.background-image]=\"'url(/assets/img/theme/heroes/'+appConfig$.theme.title+'.jpg) '\" [style.background-repeat]=\"'no-repeat'\">\r\n\r\n    <div class=\"bootstrap-wrapper\">\r\n      <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n          <div class=\"col-med-4\">\r\n            <button class=\"drawer-button\" (click)=\"sideNavOpened=!sideNavOpened\" mat-fab color=\"accent\">\r\n              <mat-icon>{{sideNavOpened ? 'close' : 'menu'}}</mat-icon>\r\n            </button>\r\n          </div>\r\n          <div class=\"col-med-4 spacer-greedy\"></div>\r\n          <div class=\"col-med-4\">\r\n            <button (click)=\"managerClick(m)\" class=\"manager-button\" mat-fab *ngFor=\"let m of menu.managers\" color=\"accent\">\r\n              <mat-icon>{{m.icon}}</mat-icon>\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <ng-content style=\"height: 100%\">\r\n\r\n    </ng-content>\r\n  </mat-sidenav-content>\r\n</mat-sidenav-container>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app-styles/classic/classic.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app-styles/classic/classic.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\r\n  <mat-toolbar-row>\r\n    <button mat-button disableRipple='true'>\r\n      <span class=\"monogram-small\">{{menu.home.title}}</span>\r\n    </button>\r\n    <button mat-flat-button color=\"primary\" *ngFor=\"let pl of menu.pageLinks\" matTooltipShowDelay=\"1000\" [matTooltip]=\"pl.description\">\r\n      <span *ngIf=\"!(breakpointObserver.observe([\r\n            breakPoints?.HandsetLandscape,\r\n            breakPoints?.HandsetPortrait\r\n          ]) | async).matches\">{{pl.title}}</span>\r\n      <mat-icon *ngIf=\"(breakpointObserver.observe([\r\n            breakPoints?.HandsetLandscape,\r\n            breakPoints?.HandsetPortrait\r\n          ]) | async).matches\">{{pl.icon}}</mat-icon>\r\n\r\n    </button>\r\n    <span class=\"spacer-greedy\"></span>\r\n    <button mat-icon-button *ngFor=\"let m of menu.managers\" (click)=\"managerClick(m)\">\r\n      <mat-icon>{{m.icon}}</mat-icon>\r\n    </button>\r\n  </mat-toolbar-row>\r\n</mat-toolbar>\r\n{{breakpointObserver.observe([\r\n      breakPoints?.HandsetLandscape,\r\n      breakPoints?.HandsetPortrait\r\n    ]) | async | json}}\r\n<ng-content>\r\n\r\n</ng-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container #appConfigGrot [ngSwitch]=\"(appConfigService.getAppConfig$() | async).style.title\">\r\n\r\n  <app-classic [menu]=\"menu\" *ngSwitchCase=\"'Classic'\">\r\n    <router-outlet></router-outlet>\r\n  </app-classic>\r\n\r\n  <app-aqua [menu]=\"menu\" *ngSwitchCase=\"'Aqua'\">\r\n    <router-outlet></router-outlet>\r\n  </app-aqua>\r\n\r\n  <app-classic [menu]=\"menu\" *ngSwitchDefault>\r\n    <router-outlet></router-outlet>\r\n  </app-classic>\r\n</ng-container>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/page/page-styles/classic/classic-page.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/page/page-styles/classic/classic-page.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bootstrap-wrapper\" [style.background-image]=\"'url(/assets/img/theme/heroes/'+appConfig$.theme.title+'.jpg) '\" [style.background-repeat]=\"'no-repeat'\" [style.background-attachment]=\"'fixed'\" style=\"background-position: 0px 56px\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-med-1\"></div>\r\n      <div class=\"col-med-10\">\r\n        <h1 class=\"handwriting\">Brian Francis</h1>\r\n      </div>\r\n      <div class=\"col-med-1\"></div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/app-config/app-config-dialog/app-config-dialog.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/app-config/app-config-dialog/app-config-dialog.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".style-selector,\nmat-radio-button {\n  margin: 3px;\n}\n\n.center-col {\n  margin-left: auto;\n  margin-right: auto;\n  width: 6em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLWNvbmZpZy9hcHAtY29uZmlnLWRpYWxvZy9DOlxcVXNlcnNcXEJyaWFuIFBDXFxEZXNrdG9wXFxyZXN1bWUvc3JjXFxhcHBcXGFwcC1jb25maWdcXGFwcC1jb25maWctZGlhbG9nXFxhcHAtY29uZmlnLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLWNvbmZpZy9hcHAtY29uZmlnLWRpYWxvZy9hcHAtY29uZmlnLWRpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvYXBwLWNvbmZpZy9hcHAtY29uZmlnLWRpYWxvZy9hcHAtY29uZmlnLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdHlsZS1zZWxlY3RvcixcclxubWF0LXJhZGlvLWJ1dHRvbiB7XHJcbiAgbWFyZ2luOiAzcHg7XHJcbn1cclxuXHJcbi5jZW50ZXItY29sIHtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgd2lkdGg6IDZlbTtcclxufSIsIi5zdHlsZS1zZWxlY3Rvcixcbm1hdC1yYWRpby1idXR0b24ge1xuICBtYXJnaW46IDNweDtcbn1cblxuLmNlbnRlci1jb2wge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB3aWR0aDogNmVtO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/app-config/app-config-dialog/app-config-dialog.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/app-config/app-config-dialog/app-config-dialog.component.ts ***!
  \*****************************************************************************/
/*! exports provided: AppConfigDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppConfigDialogComponent", function() { return AppConfigDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app-config.service */ "./src/app/app-config/app-config.service.ts");
/* harmony import */ var _unsubscriber_unsubscriber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../unsubscriber/unsubscriber */ "./src/app/unsubscriber/unsubscriber.ts");




var AppConfigDialogComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AppConfigDialogComponent, _super);
    function AppConfigDialogComponent(appConfigService) {
        var _this = _super.call(this) || this;
        _this.appConfigService = appConfigService;
        try {
            _this.subs.push(_this.appConfigService.getAppConfig$().subscribe(function (c) { return _this.appConfig$ = c; }));
        }
        catch (err) {
            console.error(err);
        }
        return _this;
    }
    AppConfigDialogComponent.prototype.updateTheme = function (theme) {
        var appConfig = { theme: theme, style: this.appConfig$.style };
        this.appConfigService.setAppConfig$(appConfig);
    };
    AppConfigDialogComponent.prototype.updateStyle = function (style) {
        var appConfig = { theme: this.appConfig$.theme, style: style };
        this.appConfigService.setAppConfig$(appConfig);
    };
    AppConfigDialogComponent.ctorParameters = function () { return [
        { type: _app_config_service__WEBPACK_IMPORTED_MODULE_2__["AppConfigService"] }
    ]; };
    AppConfigDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-config-dialog',
            template: __webpack_require__(/*! raw-loader!./app-config-dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/app-config/app-config-dialog/app-config-dialog.component.html"),
            styles: [__webpack_require__(/*! ./app-config-dialog.component.scss */ "./src/app/app-config/app-config-dialog/app-config-dialog.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_config_service__WEBPACK_IMPORTED_MODULE_2__["AppConfigService"]])
    ], AppConfigDialogComponent);
    return AppConfigDialogComponent;
}(_unsubscriber_unsubscriber__WEBPACK_IMPORTED_MODULE_3__["Unsubscriber"]));



/***/ }),

/***/ "./src/app/app-config/app-config.component.scss":
/*!******************************************************!*\
  !*** ./src/app/app-config/app-config.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC1jb25maWcvYXBwLWNvbmZpZy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app-config/app-config.component.ts":
/*!****************************************************!*\
  !*** ./src/app/app-config/app-config.component.ts ***!
  \****************************************************/
/*! exports provided: AppConfigComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppConfigComponent", function() { return AppConfigComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppConfigComponent = /** @class */ (function () {
    function AppConfigComponent() {
    }
    AppConfigComponent.prototype.ngOnInit = function () {
    };
    AppConfigComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-app-config',
            template: __webpack_require__(/*! raw-loader!./app-config.component.html */ "./node_modules/raw-loader/index.js!./src/app/app-config/app-config.component.html"),
            styles: [__webpack_require__(/*! ./app-config.component.scss */ "./src/app/app-config/app-config.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppConfigComponent);
    return AppConfigComponent;
}());



/***/ }),

/***/ "./src/app/app-config/app-config.service.ts":
/*!**************************************************!*\
  !*** ./src/app/app-config/app-config.service.ts ***!
  \**************************************************/
/*! exports provided: THEME_EXTENSION, AppConfig, AppConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "THEME_EXTENSION", function() { return THEME_EXTENSION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppConfig", function() { return AppConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppConfigService", function() { return AppConfigService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _unsubscriber_unsubscriber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../unsubscriber/unsubscriber */ "./src/app/unsubscriber/unsubscriber.ts");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");





var THEME_EXTENSION = 'theme';
var THEMES = [
    { title: 'arizona', primary: '#8D6E63', accent: '#FF7043' },
    { title: 'beach', primary: '#009688', accent: '#BCAAA4' },
    { title: 'corp', primary: '#607D8B', accent: '#9E9E9E' },
    { title: 'lush', primary: '#2E7D32', accent: '#AED581' },
    { title: 'midnight', primary: '#512DA8', accent: '#3F51B5' },
    { title: 'pirate', primary: '#212121', accent: '#B71C1C' },
    { title: 'tech', primary: '#263238', accent: '#1DE9B6' },
    { title: 'tropical', primary: '#3F51B5', accent: '#03A9F4' },
];
var STYLES = [
    { title: 'Classic', description: 'Classic Top Menu Navigation' },
    { title: 'Aqua', description: 'Side-Bar Navigation' }
];
var AppConfig = /** @class */ (function () {
    function AppConfig(appConfig) {
        this.theme = (appConfig && appConfig.theme) || THEMES[2];
        this.style = (appConfig && appConfig.style) || STYLES[0];
        return this;
    }
    AppConfig.ctorParameters = function () { return [
        { type: AppConfig }
    ]; };
    return AppConfig;
}());

var AppConfigService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AppConfigService, _super);
    function AppConfigService(overlayContainer) {
        var _this = _super.call(this) || this;
        _this.overlayContainer = overlayContainer;
        _this._appConfig$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](new AppConfig());
        _this.subs.push(_this.getAppConfig$().subscribe(function (ac) {
            console.log(ac);
            _this._appConfig = ac;
            if (_this.lastTheme)
                _this.removeLastThemeHTML();
            _this.lastTheme = _this.appConfig.theme;
            _this.addThemeHTML();
        }));
        return _this;
    }
    AppConfigService.prototype.setAppConfig$ = function (appConfig) { this._appConfig$.next(appConfig); };
    AppConfigService.prototype.getAppConfig$ = function () { return this._appConfig$.asObservable(); };
    Object.defineProperty(AppConfigService.prototype, "appConfig", {
        get: function () { return this._appConfig; },
        set: function (ac) { this.setAppConfig$(ac); },
        enumerable: true,
        configurable: true
    });
    AppConfigService.prototype.getThemes = function () { return THEMES; };
    AppConfigService.prototype.getStyles = function () { return STYLES; };
    AppConfigService.prototype.removeLastThemeHTML = function () {
        var theme = this.lastTheme.title + "-" + THEME_EXTENSION;
        this.overlayContainer.getContainerElement().classList.remove(theme);
        document.body.classList.remove(theme);
    };
    AppConfigService.prototype.addThemeHTML = function () {
        var theme = this.appConfig.theme.title + "-" + THEME_EXTENSION;
        this.overlayContainer.getContainerElement().classList.add(theme);
        document.body.classList.add(theme);
    };
    AppConfigService.ctorParameters = function () { return [
        { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__["OverlayContainer"] }
    ]; };
    AppConfigService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__["OverlayContainer"]])
    ], AppConfigService);
    return AppConfigService;
}(_unsubscriber_unsubscriber__WEBPACK_IMPORTED_MODULE_3__["Unsubscriber"]));



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _page_page_styles_classic_classic_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page/page-styles/classic/classic-page.component */ "./src/app/page/page-styles/classic/classic-page.component.ts");




var routes = [
    { path: '', component: _page_page_styles_classic_classic_page_component__WEBPACK_IMPORTED_MODULE_3__["ClassicPageComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app-styles/app-style.ts":
/*!*****************************************!*\
  !*** ./src/app/app-styles/app-style.ts ***!
  \*****************************************/
/*! exports provided: AppStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppStyle", function() { return AppStyle; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_config_app_config_dialog_app_config_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app-config/app-config-dialog/app-config-dialog.component */ "./src/app/app-config/app-config-dialog/app-config-dialog.component.ts");
/* harmony import */ var _unsubscriber_unsubscriber__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../unsubscriber/unsubscriber */ "./src/app/unsubscriber/unsubscriber.ts");





var AppStyle = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AppStyle, _super);
    function AppStyle(dialog) {
        var _this = _super.call(this) || this;
        _this.dialog = dialog;
        return _this;
    }
    AppStyle.prototype.managerClick = function (m) {
        if (m.dialog) {
            if (m.id === 'AppManager') {
                // TODO: find a place to store the top and right values
                var position = { top: '20px', right: '50px' };
                this.dialog.open(_app_config_app_config_dialog_app_config_dialog_component__WEBPACK_IMPORTED_MODULE_3__["AppConfigDialogComponent"], { 'position': position, hasBackdrop: false });
            }
        }
    };
    AppStyle.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AppStyle.prototype, "menu", void 0);
    return AppStyle;
}(_unsubscriber_unsubscriber__WEBPACK_IMPORTED_MODULE_4__["Unsubscriber"]));



/***/ }),

/***/ "./src/app/app-styles/aqua/aqua.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/app-styles/aqua/aqua.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav-container {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLXN0eWxlcy9hcXVhL0M6XFxVc2Vyc1xcQnJpYW4gUENcXERlc2t0b3BcXHJlc3VtZS9zcmNcXGFwcFxcYXBwLXN0eWxlc1xcYXF1YVxcYXF1YS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLXN0eWxlcy9hcXVhL2FxdWEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL2FwcC1zdHlsZXMvYXF1YS9hcXVhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGVuYXYtY29udGFpbmVyIHtcclxuICAvL3dpZHRoOiAyMjVweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG59XHJcbiIsIi5zaWRlbmF2LWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/app-styles/aqua/aqua.component.ts":
/*!***************************************************!*\
  !*** ./src/app/app-styles/aqua/aqua.component.ts ***!
  \***************************************************/
/*! exports provided: AquaAppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AquaAppComponent", function() { return AquaAppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app-style */ "./src/app/app-styles/app-style.ts");
/* harmony import */ var _app_config_app_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app-config/app-config.service */ "./src/app/app-config/app-config.service.ts");





var AquaAppComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AquaAppComponent, _super);
    function AquaAppComponent(dialog, appConfigService) {
        var _this = _super.call(this, dialog) || this;
        _this.dialog = dialog;
        _this.appConfigService = appConfigService;
        _this.sideNavOpened = false;
        try {
            _this.appConfigService.getAppConfig$().subscribe(function (c) {
                _this.appConfig$ = c;
            });
        }
        catch (err) {
            console.error(err);
        }
        return _this;
    }
    AquaAppComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
        { type: _app_config_app_config_service__WEBPACK_IMPORTED_MODULE_4__["AppConfigService"] }
    ]; };
    AquaAppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-aqua',
            template: __webpack_require__(/*! raw-loader!./aqua.component.html */ "./node_modules/raw-loader/index.js!./src/app/app-styles/aqua/aqua.component.html"),
            styles: [__webpack_require__(/*! ./aqua.component.scss */ "./src/app/app-styles/aqua/aqua.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _app_config_app_config_service__WEBPACK_IMPORTED_MODULE_4__["AppConfigService"]])
    ], AquaAppComponent);
    return AquaAppComponent;
}(_app_style__WEBPACK_IMPORTED_MODULE_3__["AppStyle"]));



/***/ }),

/***/ "./src/app/app-styles/classic/classic.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/app-styles/classic/classic.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-toolbar {\n  position: fixed;\n  top: 0;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLXN0eWxlcy9jbGFzc2ljL0M6XFxVc2Vyc1xcQnJpYW4gUENcXERlc2t0b3BcXHJlc3VtZS9zcmNcXGFwcFxcYXBwLXN0eWxlc1xcY2xhc3NpY1xcY2xhc3NpYy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLXN0eWxlcy9jbGFzc2ljL2NsYXNzaWMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC1zdHlsZXMvY2xhc3NpYy9jbGFzc2ljLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LXRvb2xiYXIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn0iLCJtYXQtdG9vbGJhciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app-styles/classic/classic.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/app-styles/classic/classic.component.ts ***!
  \*********************************************************/
/*! exports provided: ClassicAppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassicAppComponent", function() { return ClassicAppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app-style */ "./src/app/app-styles/app-style.ts");





var ClassicAppComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ClassicAppComponent, _super);
    function ClassicAppComponent(dialog, breakpointObserver) {
        var _this = _super.call(this, dialog) || this;
        _this.dialog = dialog;
        _this.breakpointObserver = breakpointObserver;
        _this.breakPoints = _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"];
        console.log(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"]);
        return _this;
    }
    ClassicAppComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
        { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"] }
    ]; };
    ClassicAppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-classic',
            template: __webpack_require__(/*! raw-loader!./classic.component.html */ "./node_modules/raw-loader/index.js!./src/app/app-styles/classic/classic.component.html"),
            styles: [__webpack_require__(/*! ./classic.component.scss */ "./src/app/app-styles/classic/classic.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"]])
    ], ClassicAppComponent);
    return ClassicAppComponent;
}(_app_style__WEBPACK_IMPORTED_MODULE_4__["AppStyle"]));



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_config_app_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-config/app-config.service */ "./src/app/app-config/app-config.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(appConfigService) {
        this.appConfigService = appConfigService;
        this.menu = {
            home: { title: 'BF', description: 'Brian Francis', icon: 'home' },
            pageLinks: [
                { title: 'About', description: 'About Brian Francis', icon: 'info' },
                { title: 'Experience', description: 'Work Experience', icon: 'business_center' },
                { title: 'Skills', description: 'Skills', icon: 'build' },
                { title: 'PortFolio', description: 'Projects', icon: 'photo_library' },
                { title: 'Testimonials', description: 'What people are saying about Brian', icon: 'star' }
            ],
            managers: [
                { id: 'AppManager', title: 'App Manager', description: 'Application Manager', icon: 'settings', dialog: true }
            ]
        };
    }
    AppComponent.ctorParameters = function () { return [
        { type: _app_config_app_config_service__WEBPACK_IMPORTED_MODULE_2__["AppConfigService"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({ selector: 'app-root', template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html") }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_config_app_config_service__WEBPACK_IMPORTED_MODULE_2__["AppConfigService"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_config_app_config_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app-config/app-config.component */ "./src/app/app-config/app-config.component.ts");
/* harmony import */ var _app_config_app_config_dialog_app_config_dialog_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./app-config/app-config-dialog/app-config-dialog.component */ "./src/app/app-config/app-config-dialog/app-config-dialog.component.ts");
/* harmony import */ var _app_styles_classic_classic_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./app-styles/classic/classic.component */ "./src/app/app-styles/classic/classic.component.ts");
/* harmony import */ var _app_styles_aqua_aqua_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./app-styles/aqua/aqua.component */ "./src/app/app-styles/aqua/aqua.component.ts");
/* harmony import */ var _page_page_styles_classic_classic_page_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./page/page-styles/classic/classic-page.component */ "./src/app/page/page-styles/classic/classic-page.component.ts");



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"], _app_config_app_config_component__WEBPACK_IMPORTED_MODULE_14__["AppConfigComponent"], _app_config_app_config_dialog_app_config_dialog_component__WEBPACK_IMPORTED_MODULE_15__["AppConfigDialogComponent"],
                _app_styles_aqua_aqua_component__WEBPACK_IMPORTED_MODULE_17__["AquaAppComponent"], _app_styles_classic_classic_component__WEBPACK_IMPORTED_MODULE_16__["ClassicAppComponent"],
                _page_page_styles_classic_classic_page_component__WEBPACK_IMPORTED_MODULE_18__["ClassicPageComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__["MatRadioModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__["MatTooltipModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]],
            entryComponents: [_app_config_app_config_dialog_app_config_dialog_component__WEBPACK_IMPORTED_MODULE_15__["AppConfigDialogComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/page/page-styles/classic/classic-page.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/page/page-styles/classic/classic-page.component.ts ***!
  \********************************************************************/
/*! exports provided: ClassicPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassicPageComponent", function() { return ClassicPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _page_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../page-style */ "./src/app/page/page-styles/page-style.ts");
/* harmony import */ var _app_config_app_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../app-config/app-config.service */ "./src/app/app-config/app-config.service.ts");




appConfig$: _app_config_app_config_service__WEBPACK_IMPORTED_MODULE_3__["AppConfig"];
var ClassicPageComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ClassicPageComponent, _super);
    function ClassicPageComponent(appConfigService) {
        var _this = _super.call(this) || this;
        _this.appConfigService = appConfigService;
        try {
            _this.appConfigService.getAppConfig$().subscribe(function (c) {
                _this.appConfig$ = c;
            });
        }
        catch (err) {
            console.error(err);
        }
        return _this;
    }
    ClassicPageComponent.ctorParameters = function () { return [
        { type: _app_config_app_config_service__WEBPACK_IMPORTED_MODULE_3__["AppConfigService"] }
    ]; };
    ClassicPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'classic-page',
            template: __webpack_require__(/*! raw-loader!./classic-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/page/page-styles/classic/classic-page.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_config_app_config_service__WEBPACK_IMPORTED_MODULE_3__["AppConfigService"]])
    ], ClassicPageComponent);
    return ClassicPageComponent;
}(_page_style__WEBPACK_IMPORTED_MODULE_2__["PageStyle"]));



/***/ }),

/***/ "./src/app/page/page-styles/page-style.ts":
/*!************************************************!*\
  !*** ./src/app/page/page-styles/page-style.ts ***!
  \************************************************/
/*! exports provided: PageStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageStyle", function() { return PageStyle; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _unsubscriber_unsubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../unsubscriber/unsubscriber */ "./src/app/unsubscriber/unsubscriber.ts");


var PageStyle = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PageStyle, _super);
    function PageStyle() {
        return _super.call(this) || this;
    }
    return PageStyle;
}(_unsubscriber_unsubscriber__WEBPACK_IMPORTED_MODULE_1__["Unsubscriber"]));



/***/ }),

/***/ "./src/app/unsubscriber/unsubscriber.ts":
/*!**********************************************!*\
  !*** ./src/app/unsubscriber/unsubscriber.ts ***!
  \**********************************************/
/*! exports provided: Unsubscriber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Unsubscriber", function() { return Unsubscriber; });
var Unsubscriber = /** @class */ (function () {
    function Unsubscriber() {
        this.subs = [];
    }
    Unsubscriber.prototype.ngOnDestroy = function () { this.subs.forEach(function (sub) { return sub.unsubscribe(); }); };
    return Unsubscriber;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Brian PC\Desktop\resume\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map