(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<header>\n  <app-navbar></app-navbar>\n</header>\n<main>\n  <router-outlet></router-outlet>\n</main>\n<footer></footer>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/donation/donation.component.html": 
        /*!****************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/donation/donation.component.html ***!
          \****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<mat-tab-group>\n  <mat-tab>\n    <ng-template matTabLabel>\n      <h2>Needs</h2>\n    </ng-template>\n    <app-needs></app-needs>\n  </mat-tab>\n\n  <mat-tab>\n    <ng-template matTabLabel>\n      <h2>Quests</h2>\n    </ng-template>\n    <app-quests-list></app-quests-list>\n  </mat-tab>\n</mat-tab-group>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/donation/needs/needs-item/needs-item.component.html": 
        /*!***********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/donation/needs/needs-item/needs-item.component.html ***!
          \***********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<mat-card>\n  <span>{{ need.lastDateWhenStatusChanged | date:'dd/MM/yyyy'}}</span>\n  <span>{{ need.status }}</span>\n  <span>{{ need.city }}</span>\n  <span>{{ need.orphanageName }}</span>\n  <span>{{ need.donationItemID }}</span>\n  <span>{{ need.itemName }}</span>\n  <button mat-button (click)=\"openDialog()\">Open details</button>\n</mat-card>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/donation/needs/needs-list/needs.component.html": 
        /*!******************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/donation/needs/needs-list/needs.component.html ***!
          \******************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-search\n  (onSearch)=\"onSearch($event)\"></app-search>\n\n<mat-list>\n  <mat-list-item *ngFor=\"let need of needs$ | async; trackBy: trackById\">\n    <app-needs-item [need]=\"need\"></app-needs-item>\n  </mat-list-item>\n</mat-list>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/donation/quests/quests-item/quests-item.component.html": 
        /*!**************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/donation/quests/quests-item/quests-item.component.html ***!
          \**************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<mat-card>\n  <span>{{ quest.lastDateWhenStatusChanged | date:'dd/MM/yyyy'}}</span>\n  <span>{{ quest.status }}</span>\n  <span>{{ quest.city }}</span>\n  <span>{{ quest.orphanageName }}</span>\n  <span>{{ quest.itemID }}</span>\n  <span>{{ quest.itemName }}</span>\n</mat-card>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/donation/quests/quests-list/quests-list.component.html": 
        /*!**************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/donation/quests/quests-list/quests-list.component.html ***!
          \**************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-search\n  (onSearch)=\"onSearch($event)\"></app-search>\n\n<mat-list>\n  <mat-list-item *ngFor=\"let quest of quests$ | async; trackBy: trackById\">\n    <app-quests-item [quest]=\"quest\"></app-quests-item>\n  </mat-list-item>\n</mat-list>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html": 
        /*!**********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
          \**********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<form class=\"container\" [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n  <h2 class=\"mat-display-1\">Login Form</h2>\n\n  <mat-form-field>\n    <input matInput placeholder=\"Email\" formControlName=\"email\">\n    <mat-hint align=\"end\">\n      Format: johndoe@mail.com\n    </mat-hint>\n    <mat-error *ngIf=\"isFieldInvalid('email')\">\n      Please enter valid Email (format: johndoe@mail.com)\n    </mat-error>\n  </mat-form-field>\n\n  <mat-form-field>\n    <input matInput placeholder=\"Password\" type=\"password\" formControlName=\"password\">\n    <mat-hint align=\"end\">\n      Between 6 and 16 symbols, must have at least one letter and one number\n    </mat-hint>\n    <mat-error *ngIf=\"isFieldInvalid('password')\">\n      Please enter valid Password (6-16 symbols, 1 digit and 1 letter at least)\n    </mat-error>\n  </mat-form-field>\n\n  <div class=\"div-buttons\">\n    <button type=\"submit\" mat-raised-button [disabled]=\"loginForm.invalid\">\n      Log In\n    </button>\n    <button type=\"button\" mat-raised-button (click)=\"goToRegistrationPage()\">\n      Create New Account\n    </button>\n  </div>\n</form>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html": 
        /*!************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html ***!
          \************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"nav mat-elevation-z6\">\n  <a mat-button disableRipple [routerLink]=\"['/shelters']\">\n    <img src='assets/logo.png'>\n    <span></span>\n  </a>\n  <a mat-button [routerLink]=\"['/shelters']\">\n    Find shelter\n  </a>\n  <a mat-button [routerLink]=\"['/donation']\">Donate\n  </a>\n  <div class=\"flex-spacer\"></div>\n  <a mat-button color=\"primary\" [routerLink]=\"['/shelter-registration']\">\n    Shelters registration\n  </a>\n  <a mat-stroked-button color=\"primary\" [routerLink]=\"['/login']\">\n    Sign in\n  </a>\n</nav>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/registration-user/registration-user.component.html": 
        /*!**********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/registration-user/registration-user.component.html ***!
          \**********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<form class=\"container\" [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\n  <h2 class=\"mat-display-1\">Create New Account</h2>\n\n  <mat-form-field>\n    <input matInput placeholder=\"First Name\" type=\"text\" formControlName=\"firstName\" />\n    <mat-hint align=\"end\">\n      Between 2 and 20 symbols\n    </mat-hint>\n    <mat-error *ngIf=\"isFieldInvalid('firstName')\">\n      Please enter valid First Name (between 2 and 20 symbols)\n    </mat-error>\n  </mat-form-field>\n\n  <mat-form-field>\n    <input matInput placeholder=\"Last Name\" type=\"text\" formControlName=\"lastName\" />\n    <mat-hint align=\"end\">\n      Between 2 and 20 symbols\n    </mat-hint>\n    <mat-error *ngIf=\"isFieldInvalid('lastName')\">\n      Please enter valid Last Name (between 2 and 20 symbols)\n    </mat-error>\n  </mat-form-field>\n\n  <mat-form-field>\n    <input matInput placeholder=\"Phone Number\" type=\"text\" formControlName=\"phone\" />\n    <mat-hint align=\"end\">\n      Format: +380501234567\n    </mat-hint>\n    <mat-error *ngIf=\"isFieldInvalid('phone')\">\n      Please enter valid Phone Number (format: +380501234567)\n    </mat-error>\n  </mat-form-field>\n\n  <mat-form-field>\n    <input matInput placeholder=\"Email\" type=\"email\" formControlName=\"email\" />\n    <mat-hint align=\"end\">\n      Format: johndoe@mail.com\n    </mat-hint>\n    <mat-error *ngIf=\"isFieldInvalid('email')\">\n      Please enter valid Email (format: johndoe@mail.com)\n    </mat-error>\n  </mat-form-field>\n\n  <mat-form-field>\n    <input matInput placeholder=\"Password\" type=\"password\" formControlName=\"password\" />\n    <mat-hint align=\"end\">\n      Between 6 and 16 symbols, must have at least one letter and one number\n    </mat-hint>\n    <mat-error *ngIf=\"isFieldInvalid('password')\">\n      Please enter valid Password (6-16 symbols, 1 digit and 1 letter at least)\n    </mat-error>\n  </mat-form-field>\n\n  <mat-form-field>\n    <input matInput placeholder=\"Confirm Password\" type=\"password\" formControlName=\"confirmPassword\" />\n    <mat-hint align=\"end\">\n      Between 6 and 16 symbols, must have at least one letter and one number\n    </mat-hint>\n    <mat-error *ngIf=\"isFieldInvalid('confirmPassword')\">\n      Passwords don't match\n    </mat-error>\n  </mat-form-field>\n\n  <div class=\"div-buttons\">\n    <button type=\"submit\" mat-raised-button [disabled]=\"registerForm.invalid\">\n      Create Account\n    </button>\n  </div>\n</form>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.component.html": 
        /*!************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.component.html ***!
          \************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"searchContainer\">\n  <form [formGroup]=\"searchForm\" (ngSubmit)=\"search(searchInput.value)\">\n    <mat-form-field class=\"example-full-width\">\n      <input\n        matInput\n        placeholder=\"Search\"\n        #searchInput\n        formControlName=\"search\"/>\n    </mat-form-field>\n    <button type=\"submit\" mat-button ><i class=\"material-icons\">\n      search\n    </i></button>\n  </form>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shelters/shelter-card-details/shelter-card-details.component.html": 
        /*!*************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shelters/shelter-card-details/shelter-card-details.component.html ***!
          \*************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<mat-card>\n    <form class=\"details-form\" [formGroup]=\"profileForm\">\n        <mat-card-title>\n            <mat-form-field class=\"details-full-width\">\n                <input matInput placeholder=\"Shelter name\" formControlName=\"name\">\n            </mat-form-field>\n        </mat-card-title>\n        <mat-card-subtitle class=\"address\" formGroupName=\"address\">\n            <mat-form-field class=\"details-full-width\">\n                <input matInput placeholder=\"Country\" formControlName=\"country\">\n            </mat-form-field>\n            <mat-form-field class=\"details-full-width\">\n                <input matInput placeholder=\"Region\" formControlName=\"region\">\n            </mat-form-field>\n            <mat-form-field class=\"details-full-width\">\n                <input matInput placeholder=\"City\" formControlName=\"city\">\n            </mat-form-field>\n            <mat-form-field class=\"details-full-width\">\n                <input matInput placeholder=\"Street\" formControlName=\"street\">\n            </mat-form-field>\n            <mat-form-field class=\"details-full-width\">\n                <input matInput placeholder=\"House\" formControlName=\"house\">\n            </mat-form-field>\n        </mat-card-subtitle>\n        <mat-card-content>Rating: {{shelter?.rating}}</mat-card-content>\n        <mat-card-actions>\n            <button mat-button (click)=\"onEdit()\" [disabled]=\"!isEdiDisabled\">Edit</button>\n            <button mat-button (click)=\"onSubmit()\" [disabled]=\"isEdiDisabled || profileForm.invalid\">Save</button>\n            <button mat-button (click)=\"onReset()\" [disabled]=\"isEdiDisabled\">Reset</button>\n        </mat-card-actions>\n    </form>\n</mat-card>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shelters/shelter-card/shelter-card.component.html": 
        /*!*********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shelters/shelter-card/shelter-card.component.html ***!
          \*********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<a class=\"shelter\" \n  [routerLink]=\"[shelter.id]\"\n  (click)=\"selectCard(shelter)\">\n  <mat-card\n    [class.selected]=\"shelter.id === selectedId\">\n    <!-- <img mat-card-image src=\"{{shelter.photoPath}}\" alt=\"Photo Shelter\"> -->\n    <mat-card-title>{{shelter.name}}</mat-card-title>\n    <mat-card-subtitle>id: {{shelter.id}}</mat-card-subtitle>\n    <mat-card-content>Rating: {{shelter.rating}}</mat-card-content>\n  </mat-card>\n</a>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shelters/shelter-list/shelter-list.component.html": 
        /*!*********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shelters/shelter-list/shelter-list.component.html ***!
          \*********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-search\n  (onSearch)=\"onSearch($event)\"></app-search>\n<mat-grid-list cols=\"4\">\n  <mat-grid-tile *ngFor=\"let shelter of shelters$ | async; trackBy: shelterTrackBy\">\n    <app-shelter-card [shelter]=\"shelter\"></app-shelter-card>\n  </mat-grid-tile>\n</mat-grid-list>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shelters/shelter-registration/shelter-registration.component.html": 
        /*!*************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shelters/shelter-registration/shelter-registration.component.html ***!
          \*************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<form class=\"form-wrap\" [formGroup]=\"form\" (ngSubmit)=\"submit()\">\n  <h4 class=\"mat-display-1\">Shelter Registration Form</h4>\n  <p *ngIf=\"error; else registrationBlock\" class=\"error\">\n    {{ error }}\n    <button mat-button color=\"primary\" (click)=\"gotoMainPage()\">To the main</button>\n  </p>\n  <ng-template #registrationBlock>\n  <mat-form-field [ngClass]=\"{ 'mat-form-field': isFieldValid('country') }\">\n    <input\n      matInput\n      type=\"text\"\n      placeholder=\"Country\"\n      formControlName=\"country\" />\n    <mat-error *ngIf=\"isFieldValid('country')\">You must enter a value</mat-error>\n  </mat-form-field>\n  <mat-form-field [ngClass]=\"{ 'mat-form-field': isFieldValid('region') }\">\n    <input\n      matInput\n      type=\"text\"\n      placeholder=\"Region\"\n      formControlName=\"region\"\n    />\n    <mat-error *ngIf=\"isFieldValid('region')\">\n      You must enter a value\n    </mat-error>\n  </mat-form-field>\n    <mat-form-field [ngClass]=\"{ 'mat-form-field': isFieldValid('city') }\">\n      <input\n        matInput\n        type=\"text\"\n        placeholder=\"Сity\"\n        formControlName=\"city\"\n      />\n      <mat-error *ngIf=\"isFieldValid('city')\">\n        You must enter a value\n      </mat-error>\n    </mat-form-field>\n    <mat-form-field [ngClass]=\"{ 'mat-form-field': isFieldValid('street') }\">\n      <input\n        matInput\n        type=\"text\"\n        placeholder=\"Street\"\n        formControlName=\"street\"\n      />\n      <mat-error *ngIf=\"isFieldValid('street')\">\n        You must enter a value\n      </mat-error>\n    </mat-form-field>\n    <mat-form-field [ngClass]=\"{ 'mat-form-field': isFieldValid('house') }\">\n      <input\n        matInput\n        type=\"text\"\n        placeholder=\"House\"\n        formControlName=\"house\"\n      />\n      <mat-error *ngIf=\"isFieldValid('house')\">\n        You must enter a value\n      </mat-error>\n    </mat-form-field>\n  <div class=\"div-buttons\">\n    <button type=\"submit\" mat-button [disabled]=\"form.invalid\">Confirm</button>\n    <button mat-button (click)=\"gotoMainPage()\">Cancel</button>\n  </div>\n  </ng-template>\n</form>\n");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
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
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
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
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
            /* harmony import */ var _registration_user_registration_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./registration-user/registration-user.component */ "./src/app/registration-user/registration-user.component.ts");
            var routes = [
                { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
                { path: 'registraction-user', component: _registration_user_registration_user_component__WEBPACK_IMPORTED_MODULE_4__["RegistrationUserComponent"] }
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.scss": 
        /*!************************************!*\
          !*** ./src/app/app.component.scss ***!
          \************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("main {\n  padding: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxhZG1pblxcRGVza3RvcFxcc2hlbHRlci9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYWluIHtcbiAgcGFkZGluZzogNXB4O1xufVxuIiwibWFpbiB7XG4gIHBhZGRpbmc6IDVweDtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _shared_services_config_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/services/config/config.service */ "./src/app/shared/services/config/config.service.ts");
            var AppComponent = /** @class */ (function () {
                function AppComponent(configService) {
                    this.configService = configService;
                }
                AppComponent.prototype.ngOnInit = function () {
                    this.configService.initConfig();
                };
                return AppComponent;
            }());
            AppComponent.ctorParameters = function () { return [
                { type: _shared_services_config_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"] }
            ]; };
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
            /* harmony import */ var _donation_donation_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./donation/donation.module */ "./src/app/donation/donation.module.ts");
            /* harmony import */ var _shelters_shelters_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shelters/shelters.module */ "./src/app/shelters/shelters.module.ts");
            /* harmony import */ var _login_login_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.module */ "./src/app/login/login.module.ts");
            /* harmony import */ var _registration_user_registration_user_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./registration-user/registration-user.module */ "./src/app/registration-user/registration-user.module.ts");
            /* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
            /* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__["NavbarComponent"]],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["NoopAnimationsModule"],
                        _shelters_shelters_module__WEBPACK_IMPORTED_MODULE_7__["SheltersModule"],
                        _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
                        _login_login_module__WEBPACK_IMPORTED_MODULE_8__["LoginModule"],
                        _registration_user_registration_user_module__WEBPACK_IMPORTED_MODULE_9__["RegistrationUserModule"],
                        _donation_donation_module__WEBPACK_IMPORTED_MODULE_6__["DonationModule"]
                    ],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/donation/donation.component.scss": 
        /*!**************************************************!*\
          !*** ./src/app/donation/donation.component.scss ***!
          \**************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RvbmF0aW9uL2RvbmF0aW9uLmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/donation/donation.component.ts": 
        /*!************************************************!*\
          !*** ./src/app/donation/donation.component.ts ***!
          \************************************************/
        /*! exports provided: DonationComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonationComponent", function () { return DonationComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var DonationComponent = /** @class */ (function () {
                function DonationComponent() {
                }
                return DonationComponent;
            }());
            DonationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-donation',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./donation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/donation/donation.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./donation.component.scss */ "./src/app/donation/donation.component.scss")).default]
                })
            ], DonationComponent);
            /***/ 
        }),
        /***/ "./src/app/donation/donation.module.ts": 
        /*!*********************************************!*\
          !*** ./src/app/donation/donation.module.ts ***!
          \*********************************************/
        /*! exports provided: DonationModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonationModule", function () { return DonationModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _donation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./donation.component */ "./src/app/donation/donation.component.ts");
            /* harmony import */ var _needs_needs_list_needs_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./needs/needs-list/needs.component */ "./src/app/donation/needs/needs-list/needs.component.ts");
            /* harmony import */ var _needs_needs_item_needs_item_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./needs/needs-item/needs-item.component */ "./src/app/donation/needs/needs-item/needs-item.component.ts");
            /* harmony import */ var _quests_quests_list_quests_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./quests/quests-list/quests-list.component */ "./src/app/donation/quests/quests-list/quests-list.component.ts");
            /* harmony import */ var _quests_quests_item_quests_item_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./quests/quests-item/quests-item.component */ "./src/app/donation/quests/quests-item/quests-item.component.ts");
            /* harmony import */ var _search_search_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../search/search.module */ "./src/app/search/search.module.ts");
            var donationRoutes = [
                { path: 'donation', component: _donation_component__WEBPACK_IMPORTED_MODULE_6__["DonationComponent"] }
            ];
            var DonationModule = /** @class */ (function () {
                function DonationModule() {
                }
                return DonationModule;
            }());
            DonationModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_donation_component__WEBPACK_IMPORTED_MODULE_6__["DonationComponent"], _needs_needs_list_needs_component__WEBPACK_IMPORTED_MODULE_7__["NeedsComponent"], _needs_needs_item_needs_item_component__WEBPACK_IMPORTED_MODULE_8__["NeedsItemComponent"], _quests_quests_list_quests_list_component__WEBPACK_IMPORTED_MODULE_9__["QuestsListComponent"], _quests_quests_item_quests_item_component__WEBPACK_IMPORTED_MODULE_10__["QuestsItemComponent"]],
                    imports: [
                        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(donationRoutes),
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                        _search_search_module__WEBPACK_IMPORTED_MODULE_11__["SearchModule"]
                    ],
                    exports: [
                        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
                    ]
                })
            ], DonationModule);
            /***/ 
        }),
        /***/ "./src/app/donation/needs/needs-item/needs-item.component.scss": 
        /*!*********************************************************************!*\
          !*** ./src/app/donation/needs/needs-item/needs-item.component.scss ***!
          \*********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".mat-card {\n  width: 800px;\n}\n\nspan {\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG9uYXRpb24vbmVlZHMvbmVlZHMtaXRlbS9DOlxcVXNlcnNcXGFkbWluXFxEZXNrdG9wXFxzaGVsdGVyL3NyY1xcYXBwXFxkb25hdGlvblxcbmVlZHNcXG5lZWRzLWl0ZW1cXG5lZWRzLWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2RvbmF0aW9uL25lZWRzL25lZWRzLWl0ZW0vbmVlZHMtaXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2RvbmF0aW9uL25lZWRzL25lZWRzLWl0ZW0vbmVlZHMtaXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtY2FyZCB7XG4gIHdpZHRoOiA4MDBweDtcbn1cblxuc3BhbiB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4iLCIubWF0LWNhcmQge1xuICB3aWR0aDogODAwcHg7XG59XG5cbnNwYW4ge1xuICBwYWRkaW5nOiAxMHB4O1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/donation/needs/needs-item/needs-item.component.ts": 
        /*!*******************************************************************!*\
          !*** ./src/app/donation/needs/needs-item/needs-item.component.ts ***!
          \*******************************************************************/
        /*! exports provided: NeedsItemComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NeedsItemComponent", function () { return NeedsItemComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var NeedsItemComponent = /** @class */ (function () {
                function NeedsItemComponent() {
                }
                return NeedsItemComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], NeedsItemComponent.prototype, "need", void 0);
            NeedsItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-needs-item',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./needs-item.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/donation/needs/needs-item/needs-item.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./needs-item.component.scss */ "./src/app/donation/needs/needs-item/needs-item.component.scss")).default]
                })
            ], NeedsItemComponent);
            /***/ 
        }),
        /***/ "./src/app/donation/needs/needs-list/needs.component.scss": 
        /*!****************************************************************!*\
          !*** ./src/app/donation/needs/needs-list/needs.component.scss ***!
          \****************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".mat-list-item {\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG9uYXRpb24vbmVlZHMvbmVlZHMtbGlzdC9DOlxcVXNlcnNcXGFkbWluXFxEZXNrdG9wXFxzaGVsdGVyL3NyY1xcYXBwXFxkb25hdGlvblxcbmVlZHNcXG5lZWRzLWxpc3RcXG5lZWRzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kb25hdGlvbi9uZWVkcy9uZWVkcy1saXN0L25lZWRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2RvbmF0aW9uL25lZWRzL25lZWRzLWxpc3QvbmVlZHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWxpc3QtaXRlbSB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4iLCIubWF0LWxpc3QtaXRlbSB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/donation/needs/needs-list/needs.component.ts": 
        /*!**************************************************************!*\
          !*** ./src/app/donation/needs/needs-list/needs.component.ts ***!
          \**************************************************************/
        /*! exports provided: NeedsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NeedsComponent", function () { return NeedsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_need_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/need.service */ "./src/app/donation/needs/services/need.service.ts");
            var NeedsComponent = /** @class */ (function () {
                function NeedsComponent(needService) {
                    this.needService = needService;
                }
                NeedsComponent.prototype.ngOnInit = function () {
                    this.needs$ = this.needService.getNeeds();
                };
                NeedsComponent.prototype.trackById = function (index, item) {
                    return item.donationItemID;
                };
                NeedsComponent.prototype.onSearch = function (searchValue) {
                    this.needs$ = this.needService.getNeeds({ itemName: searchValue });
                };
                return NeedsComponent;
            }());
            NeedsComponent.ctorParameters = function () { return [
                { type: _services_need_service__WEBPACK_IMPORTED_MODULE_2__["NeedService"] }
            ]; };
            NeedsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-needs',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./needs.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/donation/needs/needs-list/needs.component.html")).default,
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./needs.component.scss */ "./src/app/donation/needs/needs-list/needs.component.scss")).default]
                })
            ], NeedsComponent);
            /***/ 
        }),
        /***/ "./src/app/donation/needs/services/need.service.ts": 
        /*!*********************************************************!*\
          !*** ./src/app/donation/needs/services/need.service.ts ***!
          \*********************************************************/
        /*! exports provided: NeedService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NeedService", function () { return NeedService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var src_app_shared_services_config_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/config/config.service */ "./src/app/shared/services/config/config.service.ts");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            var NeedService = /** @class */ (function () {
                function NeedService(http, configService) {
                    this.http = http;
                    this.configService = configService;
                }
                // TODO. Nikolaienko Mikhail responsible for realization of search logic. Due to lack of search logic on backend, it is temporary realized on front-side.
                // Nikolaienko Mikhail takes responsibility to negotiate with backers on matter of realization of search logic on beckend until next presentation.
                NeedService.prototype.getNeeds = function (paramObj) {
                    var _this = this;
                    if (paramObj === void 0) { paramObj = {}; }
                    return this.configService.configLoaded.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])(function (config) { return _this.http.get(config.needsApi); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (arr) {
                        if (Object.values(paramObj).length > 0) {
                            var key_1 = Object.keys(paramObj)[0];
                            var value_1 = paramObj[key_1];
                            return arr.filter(function (el) { return el[key_1].toLowerCase().indexOf(value_1.toLocaleLowerCase()) > -1; });
                        }
                        return arr;
                    }));
                };
                return NeedService;
            }());
            NeedService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
                { type: src_app_shared_services_config_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"] }
            ]; };
            NeedService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], NeedService);
            /***/ 
        }),
        /***/ "./src/app/donation/quests/quests-item/quests-item.component.scss": 
        /*!************************************************************************!*\
          !*** ./src/app/donation/quests/quests-item/quests-item.component.scss ***!
          \************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".mat-card {\n  width: 800px;\n}\n\nspan {\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG9uYXRpb24vcXVlc3RzL3F1ZXN0cy1pdGVtL0M6XFxVc2Vyc1xcYWRtaW5cXERlc2t0b3BcXHNoZWx0ZXIvc3JjXFxhcHBcXGRvbmF0aW9uXFxxdWVzdHNcXHF1ZXN0cy1pdGVtXFxxdWVzdHMtaXRlbS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZG9uYXRpb24vcXVlc3RzL3F1ZXN0cy1pdGVtL3F1ZXN0cy1pdGVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvZG9uYXRpb24vcXVlc3RzL3F1ZXN0cy1pdGVtL3F1ZXN0cy1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1jYXJkIHtcbiAgd2lkdGg6IDgwMHB4O1xufVxuXG5zcGFuIHtcbiAgcGFkZGluZzogMTBweDtcbn1cbiIsIi5tYXQtY2FyZCB7XG4gIHdpZHRoOiA4MDBweDtcbn1cblxuc3BhbiB7XG4gIHBhZGRpbmc6IDEwcHg7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/donation/quests/quests-item/quests-item.component.ts": 
        /*!**********************************************************************!*\
          !*** ./src/app/donation/quests/quests-item/quests-item.component.ts ***!
          \**********************************************************************/
        /*! exports provided: QuestsItemComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestsItemComponent", function () { return QuestsItemComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var QuestsItemComponent = /** @class */ (function () {
                function QuestsItemComponent() {
                }
                return QuestsItemComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], QuestsItemComponent.prototype, "quest", void 0);
            QuestsItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-quests-item',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./quests-item.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/donation/quests/quests-item/quests-item.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./quests-item.component.scss */ "./src/app/donation/quests/quests-item/quests-item.component.scss")).default]
                })
            ], QuestsItemComponent);
            /***/ 
        }),
        /***/ "./src/app/donation/quests/quests-list/quests-list.component.scss": 
        /*!************************************************************************!*\
          !*** ./src/app/donation/quests/quests-list/quests-list.component.scss ***!
          \************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".mat-list-item {\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG9uYXRpb24vcXVlc3RzL3F1ZXN0cy1saXN0L0M6XFxVc2Vyc1xcYWRtaW5cXERlc2t0b3BcXHNoZWx0ZXIvc3JjXFxhcHBcXGRvbmF0aW9uXFxxdWVzdHNcXHF1ZXN0cy1saXN0XFxxdWVzdHMtbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZG9uYXRpb24vcXVlc3RzL3F1ZXN0cy1saXN0L3F1ZXN0cy1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2RvbmF0aW9uL3F1ZXN0cy9xdWVzdHMtbGlzdC9xdWVzdHMtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtbGlzdC1pdGVtIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbiIsIi5tYXQtbGlzdC1pdGVtIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/donation/quests/quests-list/quests-list.component.ts": 
        /*!**********************************************************************!*\
          !*** ./src/app/donation/quests/quests-list/quests-list.component.ts ***!
          \**********************************************************************/
        /*! exports provided: QuestsListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestsListComponent", function () { return QuestsListComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_quest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/quest.service */ "./src/app/donation/quests/services/quest.service.ts");
            var QuestsListComponent = /** @class */ (function () {
                function QuestsListComponent(questService) {
                    this.questService = questService;
                }
                QuestsListComponent.prototype.ngOnInit = function () {
                    this.quests$ = this.questService.getNeeds();
                };
                QuestsListComponent.prototype.trackById = function (index, quest) {
                    return quest.itemID;
                };
                QuestsListComponent.prototype.onSearch = function (searchValue) {
                    this.quests$ = this.questService.getNeeds({ itemName: searchValue });
                };
                return QuestsListComponent;
            }());
            QuestsListComponent.ctorParameters = function () { return [
                { type: _services_quest_service__WEBPACK_IMPORTED_MODULE_2__["QuestService"] }
            ]; };
            QuestsListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-quests-list',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./quests-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/donation/quests/quests-list/quests-list.component.html")).default,
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./quests-list.component.scss */ "./src/app/donation/quests/quests-list/quests-list.component.scss")).default]
                })
            ], QuestsListComponent);
            /***/ 
        }),
        /***/ "./src/app/donation/quests/services/quest.service.ts": 
        /*!***********************************************************!*\
          !*** ./src/app/donation/quests/services/quest.service.ts ***!
          \***********************************************************/
        /*! exports provided: QuestService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestService", function () { return QuestService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var src_app_shared_services_config_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/config/config.service */ "./src/app/shared/services/config/config.service.ts");
            var QuestService = /** @class */ (function () {
                function QuestService(http, configService) {
                    this.http = http;
                    this.configService = configService;
                }
                // TODO. Nikolaienko Mikhail responsible for realization of search logic. Due to lack of search logic on backend, it is temporary realized on front-side.
                // Nikolaienko Mikhail takes responsibility to negotiate with backers on matter of realization of search logic on beckend until next presentation.
                QuestService.prototype.getNeeds = function (paramObj) {
                    var _this = this;
                    if (paramObj === void 0) { paramObj = {}; }
                    return this.configService.configLoaded.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["concatMap"])(function (config) { return _this.http.get(config.questsApi); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (arr) {
                        if (Object.values(paramObj).length > 0) {
                            var key_2 = Object.keys(paramObj)[0];
                            var value_2 = paramObj[key_2];
                            return arr.filter(function (el) { return el[key_2].toLowerCase().indexOf(value_2.toLocaleLowerCase()) > -1; });
                        }
                        return arr;
                    }));
                };
                return QuestService;
            }());
            QuestService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
                { type: src_app_shared_services_config_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] }
            ]; };
            QuestService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], QuestService);
            /***/ 
        }),
        /***/ "./src/app/login/login.component.scss": 
        /*!********************************************!*\
          !*** ./src/app/login/login.component.scss ***!
          \********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".container {\n  display: flex;\n  flex-direction: column;\n  max-width: 37rem;\n  margin: 5rem auto;\n}\n.container h2 {\n  text-align: center;\n}\n.container .div-buttons {\n  margin-top: 1rem;\n  text-align: center;\n}\n.container .div-buttons button {\n  margin-right: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXFVzZXJzXFxhZG1pblxcRGVza3RvcFxcc2hlbHRlci9zcmNcXGFwcFxcbG9naW5cXGxvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNDRjtBRENFO0VBQ0Usa0JBQUE7QUNDSjtBREVFO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtBQ0FKO0FER0U7RUFDRSxrQkFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWF4LXdpZHRoOiAzN3JlbTtcbiAgbWFyZ2luOiA1cmVtIGF1dG87XG5cbiAgaDIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC5kaXYtYnV0dG9ucyB7XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAuZGl2LWJ1dHRvbnMgYnV0dG9uIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gIH1cbn1cbiIsIi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXgtd2lkdGg6IDM3cmVtO1xuICBtYXJnaW46IDVyZW0gYXV0bztcbn1cbi5jb250YWluZXIgaDIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY29udGFpbmVyIC5kaXYtYnV0dG9ucyB7XG4gIG1hcmdpbi10b3A6IDFyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jb250YWluZXIgLmRpdi1idXR0b25zIGJ1dHRvbiB7XG4gIG1hcmdpbi1yaWdodDogMXJlbTtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/login/login.component.ts": 
        /*!******************************************!*\
          !*** ./src/app/login/login.component.ts ***!
          \******************************************/
        /*! exports provided: LoginComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function () { return LoginComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _shared_services_user_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/user/authentication.service */ "./src/app/shared/services/user/authentication.service.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _shared_validators_form_fields_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/validators/form-fields-validator */ "./src/app/shared/validators/form-fields-validator.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var LoginComponent = /** @class */ (function () {
                function LoginComponent(formBuilder, authenticationService, router) {
                    this.formBuilder = formBuilder;
                    this.authenticationService = authenticationService;
                    this.router = router;
                }
                LoginComponent.prototype.ngOnInit = function () {
                    this.loginForm = this.formBuilder.group({
                        email: [null, _shared_validators_form_fields_validator__WEBPACK_IMPORTED_MODULE_4__["FormFiledsValidator"].checkEmail],
                        password: [null, _shared_validators_form_fields_validator__WEBPACK_IMPORTED_MODULE_4__["FormFiledsValidator"].checkPassword]
                    });
                };
                LoginComponent.prototype.isFieldInvalid = function (fieldName) {
                    return (this.loginForm.get(fieldName).touched &&
                        this.loginForm.get(fieldName).invalid);
                };
                LoginComponent.prototype.onSubmit = function () {
                    if (this.loginForm.invalid) {
                        return;
                    }
                    var loginData = Object.assign({}, this.loginForm.value);
                    this.authenticationService.login(loginData).subscribe();
                };
                LoginComponent.prototype.goToRegistrationPage = function () {
                    this.router.navigate(['/registraction-user']);
                };
                return LoginComponent;
            }());
            LoginComponent.ctorParameters = function () { return [
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
                { type: _shared_services_user_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
            ]; };
            LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-login',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")).default]
                })
            ], LoginComponent);
            /***/ 
        }),
        /***/ "./src/app/login/login.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/login/login.module.ts ***!
          \***************************************/
        /*! exports provided: LoginModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function () { return LoginModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
            /* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
            /* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
            /* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var LoginModule = /** @class */ (function () {
                function LoginModule() {
                }
                return LoginModule;
            }());
            LoginModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                        _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                        _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]
                    ]
                })
            ], LoginModule);
            /***/ 
        }),
        /***/ "./src/app/navbar/navbar.component.scss": 
        /*!**********************************************!*\
          !*** ./src/app/navbar/navbar.component.scss ***!
          \**********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("/*\n* see https://www.fonts-online.ru/font/Kindly-Jasmine for title font\n* license: free for personal project, non-profit and charity use\n*/\n.nav {\n  display: flex;\n  justify-content: space-between;\n  background-color: aliceblue;\n  padding: 8px 16px;\n}\n.nav a {\n  text-decoration: none;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.nav a img {\n  max-height: 40px;\n  max-width: 100%;\n}\n.nav a span {\n  margin-left: 5px;\n}\n.nav .flex-spacer {\n  flex-grow: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL0M6XFxVc2Vyc1xcYWRtaW5cXERlc2t0b3BcXHNoZWx0ZXIvc3JjXFxhcHBcXG5hdmJhclxcbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9uYXZiYXIvQzpcXFVzZXJzXFxhZG1pblxcRGVza3RvcFxcc2hlbHRlci9zcmNcXGFwcFxcc2hhcmVkXFxzdHlsZVxcdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztDQUFBO0FBTUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSwyQkNUd0I7RURVeEIsaUJBQUE7QUVERjtBRkdFO0VBQ0UscUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBRURKO0FGR0k7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUVETjtBRklJO0VBQ0UsZ0JBQUE7QUVGTjtBRk1FO0VBQ0UsWUFBQTtBRUpKIiwiZmlsZSI6InNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4qIHNlZSBodHRwczovL3d3dy5mb250cy1vbmxpbmUucnUvZm9udC9LaW5kbHktSmFzbWluZSBmb3IgdGl0bGUgZm9udFxuKiBsaWNlbnNlOiBmcmVlIGZvciBwZXJzb25hbCBwcm9qZWN0LCBub24tcHJvZml0IGFuZCBjaGFyaXR5IHVzZVxuKi9cbkBpbXBvcnQgXCJzcmMvYXBwL3NoYXJlZC9zdHlsZS92YXJpYWJsZXMuc2Nzc1wiO1xuXG4ubmF2IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmF2YmFyLWJhY2tncm91bmQtY29sb3I7XG4gIHBhZGRpbmc6IDhweCAxNnB4O1xuXG4gIGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICBpbWcge1xuICAgICAgbWF4LWhlaWdodDogNDBweDtcbiAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICBzcGFuIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgfVxuICB9XG5cbiAgLmZsZXgtc3BhY2VyIHtcbiAgICBmbGV4LWdyb3c6IDE7XG4gIH1cbn1cbiIsIiRuYXZiYXItYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xuJGNvbG9yUmVkRm9yRXJyb3I6ICNGRjAwMDA7XG5cbiRidXR0b24tcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XG4kc2VsZWN0ZWQtYmFja2dyb3VuZC1jb2xvcjogI0NGRDhEQztcbiRzZWxlY3RlZC1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiAjQkJEOERDO1xuIiwiLypcbiogc2VlIGh0dHBzOi8vd3d3LmZvbnRzLW9ubGluZS5ydS9mb250L0tpbmRseS1KYXNtaW5lIGZvciB0aXRsZSBmb250XG4qIGxpY2Vuc2U6IGZyZWUgZm9yIHBlcnNvbmFsIHByb2plY3QsIG5vbi1wcm9maXQgYW5kIGNoYXJpdHkgdXNlXG4qL1xuLm5hdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xuICBwYWRkaW5nOiA4cHggMTZweDtcbn1cbi5uYXYgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubmF2IGEgaW1nIHtcbiAgbWF4LWhlaWdodDogNDBweDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuLm5hdiBhIHNwYW4ge1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuLm5hdiAuZmxleC1zcGFjZXIge1xuICBmbGV4LWdyb3c6IDE7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/navbar/navbar.component.ts": 
        /*!********************************************!*\
          !*** ./src/app/navbar/navbar.component.ts ***!
          \********************************************/
        /*! exports provided: NavbarComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () { return NavbarComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var NavbarComponent = /** @class */ (function () {
                function NavbarComponent() {
                }
                return NavbarComponent;
            }());
            NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-navbar',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navbar.component.scss */ "./src/app/navbar/navbar.component.scss")).default]
                })
            ], NavbarComponent);
            /***/ 
        }),
        /***/ "./src/app/registration-user/registration-user.component.scss": 
        /*!********************************************************************!*\
          !*** ./src/app/registration-user/registration-user.component.scss ***!
          \********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".container {\n  display: flex;\n  flex-direction: column;\n  max-width: 37rem;\n  margin: 5rem auto;\n}\n.container h2 {\n  text-align: center;\n}\n.container .div-buttons {\n  margin-top: 1rem;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0cmF0aW9uLXVzZXIvQzpcXFVzZXJzXFxhZG1pblxcRGVza3RvcFxcc2hlbHRlci9zcmNcXGFwcFxccmVnaXN0cmF0aW9uLXVzZXJcXHJlZ2lzdHJhdGlvbi11c2VyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9yZWdpc3RyYXRpb24tdXNlci9yZWdpc3RyYXRpb24tdXNlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNDRjtBRENFO0VBQ0Usa0JBQUE7QUNDSjtBREVFO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0cmF0aW9uLXVzZXIvcmVnaXN0cmF0aW9uLXVzZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWF4LXdpZHRoOiAzN3JlbTtcclxuICBtYXJnaW46IDVyZW0gYXV0bztcclxuXHJcbiAgaDIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmRpdi1idXR0b25zIHtcclxuICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcbiIsIi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXgtd2lkdGg6IDM3cmVtO1xuICBtYXJnaW46IDVyZW0gYXV0bztcbn1cbi5jb250YWluZXIgaDIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY29udGFpbmVyIC5kaXYtYnV0dG9ucyB7XG4gIG1hcmdpbi10b3A6IDFyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/registration-user/registration-user.component.ts": 
        /*!******************************************************************!*\
          !*** ./src/app/registration-user/registration-user.component.ts ***!
          \******************************************************************/
        /*! exports provided: RegistrationUserComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationUserComponent", function () { return RegistrationUserComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _shared_services_user_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/user/authentication.service */ "./src/app/shared/services/user/authentication.service.ts");
            /* harmony import */ var _shared_validators_form_fields_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/validators/form-fields-validator */ "./src/app/shared/validators/form-fields-validator.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var RegistrationUserComponent = /** @class */ (function () {
                function RegistrationUserComponent(formBuilder, authenticationService, router) {
                    this.formBuilder = formBuilder;
                    this.authenticationService = authenticationService;
                    this.router = router;
                }
                RegistrationUserComponent.prototype.ngOnInit = function () {
                    this.registerForm = this.formBuilder.group({
                        firstName: [null, _shared_validators_form_fields_validator__WEBPACK_IMPORTED_MODULE_4__["FormFiledsValidator"].checkName],
                        lastName: [null, _shared_validators_form_fields_validator__WEBPACK_IMPORTED_MODULE_4__["FormFiledsValidator"].checkName],
                        phone: ['+380', _shared_validators_form_fields_validator__WEBPACK_IMPORTED_MODULE_4__["FormFiledsValidator"].checkPhone],
                        email: [null, _shared_validators_form_fields_validator__WEBPACK_IMPORTED_MODULE_4__["FormFiledsValidator"].checkEmail],
                        password: [null, _shared_validators_form_fields_validator__WEBPACK_IMPORTED_MODULE_4__["FormFiledsValidator"].checkPassword],
                        confirmPassword: [null, _shared_validators_form_fields_validator__WEBPACK_IMPORTED_MODULE_4__["FormFiledsValidator"].checkPassword]
                    }, {
                        validator: _shared_validators_form_fields_validator__WEBPACK_IMPORTED_MODULE_4__["FormFiledsValidator"].matchPassword
                    });
                };
                RegistrationUserComponent.prototype.isFieldInvalid = function (fieldName) {
                    return (this.registerForm.get(fieldName).touched &&
                        this.registerForm.get(fieldName).invalid);
                };
                RegistrationUserComponent.prototype.goToLoginPage = function () {
                    this.router.navigate(['/login']);
                };
                RegistrationUserComponent.prototype.onSubmit = function () {
                    if (this.registerForm.invalid) {
                        return;
                    }
                    var newUser = Object.assign({}, this.registerForm.value);
                    this.authenticationService.addUser(newUser);
                    this.goToLoginPage();
                };
                return RegistrationUserComponent;
            }());
            RegistrationUserComponent.ctorParameters = function () { return [
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
                { type: _shared_services_user_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
            ]; };
            RegistrationUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-registration-user',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./registration-user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/registration-user/registration-user.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./registration-user.component.scss */ "./src/app/registration-user/registration-user.component.scss")).default]
                })
            ], RegistrationUserComponent);
            /***/ 
        }),
        /***/ "./src/app/registration-user/registration-user.module.ts": 
        /*!***************************************************************!*\
          !*** ./src/app/registration-user/registration-user.module.ts ***!
          \***************************************************************/
        /*! exports provided: RegistrationUserModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationUserModule", function () { return RegistrationUserModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
            /* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
            /* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
            /* harmony import */ var _registration_user_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./registration-user.component */ "./src/app/registration-user/registration-user.component.ts");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var RegistrationUserModule = /** @class */ (function () {
                function RegistrationUserModule() {
                }
                return RegistrationUserModule;
            }());
            RegistrationUserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_registration_user_component__WEBPACK_IMPORTED_MODULE_7__["RegistrationUserComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                        _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                        _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]
                    ],
                    exports: [_registration_user_component__WEBPACK_IMPORTED_MODULE_7__["RegistrationUserComponent"]]
                })
            ], RegistrationUserModule);
            /***/ 
        }),
        /***/ "./src/app/search/search.component.scss": 
        /*!**********************************************!*\
          !*** ./src/app/search/search.component.scss ***!
          \**********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".searchContainer {\n  padding: 10px 30px 10px 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoL0M6XFxVc2Vyc1xcYWRtaW5cXERlc2t0b3BcXHNoZWx0ZXIvc3JjXFxhcHBcXHNlYXJjaFxcc2VhcmNoLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNEJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VhcmNoQ29udGFpbmVyIHtcbiAgcGFkZGluZzogMTBweCAzMHB4IDEwcHggMzBweDtcbn0iLCIuc2VhcmNoQ29udGFpbmVyIHtcbiAgcGFkZGluZzogMTBweCAzMHB4IDEwcHggMzBweDtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/search/search.component.ts": 
        /*!********************************************!*\
          !*** ./src/app/search/search.component.ts ***!
          \********************************************/
        /*! exports provided: SearchComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function () { return SearchComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            var SearchComponent = /** @class */ (function () {
                function SearchComponent(formBuilder) {
                    this.formBuilder = formBuilder;
                    this.onSearch = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                }
                SearchComponent.prototype.ngOnInit = function () {
                    this.searchForm = this.formBuilder.group({
                        search: ''
                    });
                };
                SearchComponent.prototype.search = function (searchInputValue) {
                    this.onSearch.emit(searchInputValue);
                };
                return SearchComponent;
            }());
            SearchComponent.ctorParameters = function () { return [
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], SearchComponent.prototype, "onSearch", void 0);
            SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-search',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./search.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./search.component.scss */ "./src/app/search/search.component.scss")).default]
                })
            ], SearchComponent);
            /***/ 
        }),
        /***/ "./src/app/search/search.module.ts": 
        /*!*****************************************!*\
          !*** ./src/app/search/search.module.ts ***!
          \*****************************************/
        /*! exports provided: SearchModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchModule", function () { return SearchModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
            /* harmony import */ var _search_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search.component */ "./src/app/search/search.component.ts");
            var SearchModule = /** @class */ (function () {
                function SearchModule() {
                }
                return SearchModule;
            }());
            SearchModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_search_component__WEBPACK_IMPORTED_MODULE_5__["SearchComponent"]],
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
                    exports: [_search_component__WEBPACK_IMPORTED_MODULE_5__["SearchComponent"]]
                })
            ], SearchModule);
            /***/ 
        }),
        /***/ "./src/app/shared/services/config/config.service.ts": 
        /*!**********************************************************!*\
          !*** ./src/app/shared/services/config/config.service.ts ***!
          \**********************************************************/
        /*! exports provided: ConfigService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function () { return ConfigService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            var ConfigService = /** @class */ (function () {
                function ConfigService(http) {
                    this.http = http;
                    this.configUrl = 'assets/config.json';
                    this.configLoaded = new rxjs__WEBPACK_IMPORTED_MODULE_3__["ReplaySubject"](1);
                }
                ConfigService.prototype.initConfig = function () {
                    var _this = this;
                    this.http
                        .get(this.configUrl)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1))
                        .subscribe(function (config) { return _this.configLoaded.next(config); });
                };
                return ConfigService;
            }());
            ConfigService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            ConfigService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], ConfigService);
            /***/ 
        }),
        /***/ "./src/app/shared/services/user/authentication.service.ts": 
        /*!****************************************************************!*\
          !*** ./src/app/shared/services/user/authentication.service.ts ***!
          \****************************************************************/
        /*! exports provided: AuthenticationService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function () { return AuthenticationService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _config_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../config/config.service */ "./src/app/shared/services/config/config.service.ts");
            var AuthenticationService = /** @class */ (function () {
                function AuthenticationService(router, http, configService) {
                    this.router = router;
                    this.http = http;
                    this.configService = configService;
                    this.httpOptions = {
                        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                            'Content-Type': 'application/json'
                        })
                    };
                }
                AuthenticationService.prototype.login = function (loginData) {
                    var _this = this;
                    return this.configService.configLoaded.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["concatMap"])(function (config) { return _this.http.post(config.loginApi, loginData, _this.httpOptions); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (tokenObj) {
                        _this.httpOptions.headers.set('Authorization', tokenObj['token']);
                    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
                };
                AuthenticationService.prototype.addUser = function (newUser) {
                    console.log('User has been added', newUser);
                };
                AuthenticationService.prototype.removeUser = function (id) {
                    console.log('User has been removed');
                };
                AuthenticationService.prototype.handleError = function (error) {
                    if (error.error instanceof ErrorEvent) {
                        // A client-side or network error occurred. Handle it accordingly.
                        console.error('An error occurred:', error.error.message);
                    }
                    else {
                        // The backend returned an unsuccessful response code.
                        // The response body may contain clues as to what went wrong,
                        console.error("Backend returned code " + error.status + ", " + ("body was: " + error.error));
                    }
                    // return an observable with a user-facing error message
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Something bad happened; please try again later.');
                };
                return AuthenticationService;
            }());
            AuthenticationService.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
                { type: _config_config_service__WEBPACK_IMPORTED_MODULE_6__["ConfigService"] }
            ]; };
            AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], AuthenticationService);
            /***/ 
        }),
        /***/ "./src/app/shared/validators/form-fields-validator.ts": 
        /*!************************************************************!*\
          !*** ./src/app/shared/validators/form-fields-validator.ts ***!
          \************************************************************/
        /*! exports provided: FormFiledsValidator */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormFiledsValidator", function () { return FormFiledsValidator; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            var FormFiledsValidator = /** @class */ (function () {
                function FormFiledsValidator() {
                }
                FormFiledsValidator.matchPassword = function (control) {
                    var password = control.get('password').value;
                    var confirmPassword = control.get('confirmPassword').value;
                    if (password !== confirmPassword) {
                        control.get('confirmPassword').setErrors({ NoPasswordMatch: true });
                    }
                    else {
                        return null;
                    }
                };
                return FormFiledsValidator;
            }());
            FormFiledsValidator.checkName = [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-zA-Zа-яА-Я\' -]+$'),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(20)
            ];
            FormFiledsValidator.checkPhone = [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[+][0-9]+$'),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(13),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(13)
            ];
            FormFiledsValidator.checkEmail = [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+[.])+([a-zA-Z0-9]{2,4})+$'),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(20)
            ];
            FormFiledsValidator.checkPassword = [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9.,<>()-=_+!@#$%^&*~?]+$'),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(20)
            ];
            /***/ 
        }),
        /***/ "./src/app/shelters/shelter-card-details/shelter-card-details.component.scss": 
        /*!***********************************************************************************!*\
          !*** ./src/app/shelters/shelter-card-details/shelter-card-details.component.scss ***!
          \***********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".mat-card {\n  max-width: 450px;\n  margin: 25px auto;\n}\n\n.mat-card-image {\n  max-height: 250px;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n\n.details-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.details-full-width {\n  width: 100%;\n}\n\ntd {\n  padding-right: 8px;\n}\n\n.mat-card-actions {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hlbHRlcnMvc2hlbHRlci1jYXJkLWRldGFpbHMvQzpcXFVzZXJzXFxhZG1pblxcRGVza3RvcFxcc2hlbHRlci9zcmNcXGFwcFxcc2hlbHRlcnNcXHNoZWx0ZXItY2FyZC1kZXRhaWxzXFxzaGVsdGVyLWNhcmQtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hlbHRlcnMvc2hlbHRlci1jYXJkLWRldGFpbHMvc2hlbHRlci1jYXJkLWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLHNCQUFBO0tBQUEsbUJBQUE7QUNDRjs7QURDQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDRUY7O0FEQ0E7RUFDRSxXQUFBO0FDRUY7O0FEQ0E7RUFDRSxrQkFBQTtBQ0VGOztBRENBO0VBQ0Usa0JBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL3NoZWx0ZXJzL3NoZWx0ZXItY2FyZC1kZXRhaWxzL3NoZWx0ZXItY2FyZC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1jYXJkIHtcbiAgbWF4LXdpZHRoOiA0NTBweDtcbiAgbWFyZ2luOiAyNXB4IGF1dG87XG59XG5cbi5tYXQtY2FyZC1pbWFnZSB7XG4gIG1heC1oZWlnaHQ6IDI1MHB4O1xuICBvYmplY3QtZml0OiBjb250YWluO1xufVxuLmRldGFpbHMtZm9ybSB7XG4gIG1pbi13aWR0aDogMTUwcHg7XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZGV0YWlscy1mdWxsLXdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbnRkIHtcbiAgcGFkZGluZy1yaWdodDogOHB4O1xufVxuXG4ubWF0LWNhcmQtYWN0aW9ucyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iLCIubWF0LWNhcmQge1xuICBtYXgtd2lkdGg6IDQ1MHB4O1xuICBtYXJnaW46IDI1cHggYXV0bztcbn1cblxuLm1hdC1jYXJkLWltYWdlIHtcbiAgbWF4LWhlaWdodDogMjUwcHg7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG59XG5cbi5kZXRhaWxzLWZvcm0ge1xuICBtaW4td2lkdGg6IDE1MHB4O1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmRldGFpbHMtZnVsbC13aWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG50ZCB7XG4gIHBhZGRpbmctcmlnaHQ6IDhweDtcbn1cblxuLm1hdC1jYXJkLWFjdGlvbnMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/shelters/shelter-card-details/shelter-card-details.component.ts": 
        /*!*********************************************************************************!*\
          !*** ./src/app/shelters/shelter-card-details/shelter-card-details.component.ts ***!
          \*********************************************************************************/
        /*! exports provided: ShelterCardDetailsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShelterCardDetailsComponent", function () { return ShelterCardDetailsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _shelters_service_shelters_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shelters-service/shelters.service */ "./src/app/shelters/shelters-service/shelters.service.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            var ShelterCardDetailsComponent = /** @class */ (function () {
                function ShelterCardDetailsComponent(sheltersService, activatedRoute, fb) {
                    this.sheltersService = sheltersService;
                    this.activatedRoute = activatedRoute;
                    this.fb = fb;
                }
                ShelterCardDetailsComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.createForm();
                    this.toggleForm();
                    this.shelterId = this.activatedRoute.snapshot.params['id'];
                    this.sheltersService
                        .getDetails(this.shelterId)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1))
                        .subscribe(function (shelter) {
                        _this.shelter = shelter;
                        _this.patchFormValues(shelter);
                    });
                };
                ShelterCardDetailsComponent.prototype.onSubmit = function () {
                    this.toggleForm();
                };
                ShelterCardDetailsComponent.prototype.onEdit = function () {
                    this.toggleForm();
                };
                ShelterCardDetailsComponent.prototype.onReset = function () {
                    this.patchFormValues(this.shelter);
                };
                ShelterCardDetailsComponent.prototype.createForm = function () {
                    this.profileForm = this.fb.group({
                        name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                        avatar: [],
                        photoPath: [],
                        rating: [],
                        address: this.fb.group({
                            country: [],
                            region: [],
                            city: [],
                            street: [],
                            house: []
                        })
                    });
                };
                ShelterCardDetailsComponent.prototype.patchFormValues = function (shelter) {
                    this.profileForm.patchValue({
                        name: shelter.name,
                        address: {
                            country: shelter.country,
                            region: shelter.region,
                            city: shelter.city,
                            street: shelter.street,
                            house: shelter.house
                        }
                    });
                };
                ShelterCardDetailsComponent.prototype.toggleForm = function () {
                    this.profileForm.enabled
                        ? this.profileForm.disable()
                        : this.profileForm.enable();
                    this.isEdiDisabled = this.profileForm.disabled;
                };
                return ShelterCardDetailsComponent;
            }());
            ShelterCardDetailsComponent.ctorParameters = function () { return [
                { type: _shelters_service_shelters_service__WEBPACK_IMPORTED_MODULE_3__["SheltersService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
            ]; };
            ShelterCardDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-shelter-card-details',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./shelter-card-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shelters/shelter-card-details/shelter-card-details.component.html")).default,
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./shelter-card-details.component.scss */ "./src/app/shelters/shelter-card-details/shelter-card-details.component.scss")).default]
                })
            ], ShelterCardDetailsComponent);
            /***/ 
        }),
        /***/ "./src/app/shelters/shelter-card/shelter-card.component.scss": 
        /*!*******************************************************************!*\
          !*** ./src/app/shelters/shelter-card/shelter-card.component.scss ***!
          \*******************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".shelter {\n  text-decoration: none;\n}\n\n.mat-card {\n  cursor: pointer;\n}\n\n.shelter .selected {\n  background-color: #CFD8DC;\n  color: white;\n}\n\n.shelter .selected:hover,\n.mat-card:hover {\n  background-color: #BBD8DC;\n}\n\n.mat-card-image {\n  max-height: 250px;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hlbHRlcnMvc2hlbHRlci1jYXJkL0M6XFxVc2Vyc1xcYWRtaW5cXERlc2t0b3BcXHNoZWx0ZXIvc3JjXFxhcHBcXHNoZWx0ZXJzXFxzaGVsdGVyLWNhcmRcXHNoZWx0ZXItY2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hlbHRlcnMvc2hlbHRlci1jYXJkL3NoZWx0ZXItY2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hlbHRlcnMvc2hlbHRlci1jYXJkL0M6XFxVc2Vyc1xcYWRtaW5cXERlc2t0b3BcXHNoZWx0ZXIvc3JjXFxhcHBcXHNoYXJlZFxcc3R5bGVcXHZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UscUJBQUE7QUNERjs7QURJQTtFQUNFLGVBQUE7QUNERjs7QURJQTtFQUNFLHlCRVAwQjtFRlExQixZQUFBO0FDREY7O0FESUE7O0VBRUUseUJFWmdDO0FEV2xDOztBRElBO0VBQ0UsaUJBQUE7RUFDQSxzQkFBQTtLQUFBLG1CQUFBO0FDREYiLCJmaWxlIjoic3JjL2FwcC9zaGVsdGVycy9zaGVsdGVyLWNhcmQvc2hlbHRlci1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInNyYy9hcHAvc2hhcmVkL3N0eWxlL3ZhcmlhYmxlcy5zY3NzXCI7XG5cbi5zaGVsdGVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4ubWF0LWNhcmQge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zaGVsdGVyIC5zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRzZWxlY3RlZC1iYWNrZ3JvdW5kLWNvbG9yO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5zaGVsdGVyIC5zZWxlY3RlZDpob3Zlcixcbi5tYXQtY2FyZDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRzZWxlY3RlZC1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yO1xufVxuXG4ubWF0LWNhcmQtaW1hZ2Uge1xuICBtYXgtaGVpZ2h0OiAyNTBweDtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbn1cbiIsIi5zaGVsdGVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4ubWF0LWNhcmQge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zaGVsdGVyIC5zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNDRkQ4REM7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnNoZWx0ZXIgLnNlbGVjdGVkOmhvdmVyLFxuLm1hdC1jYXJkOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0JCRDhEQztcbn1cblxuLm1hdC1jYXJkLWltYWdlIHtcbiAgbWF4LWhlaWdodDogMjUwcHg7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG59IiwiJG5hdmJhci1iYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XG4kY29sb3JSZWRGb3JFcnJvcjogI0ZGMDAwMDtcblxuJGJ1dHRvbi1wcmltYXJ5LWJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcbiRzZWxlY3RlZC1iYWNrZ3JvdW5kLWNvbG9yOiAjQ0ZEOERDO1xuJHNlbGVjdGVkLWhvdmVyLWJhY2tncm91bmQtY29sb3I6ICNCQkQ4REM7XG4iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/shelters/shelter-card/shelter-card.component.ts": 
        /*!*****************************************************************!*\
          !*** ./src/app/shelters/shelter-card/shelter-card.component.ts ***!
          \*****************************************************************/
        /*! exports provided: ShelterCardComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShelterCardComponent", function () { return ShelterCardComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var ShelterCardComponent = /** @class */ (function () {
                function ShelterCardComponent() {
                }
                ShelterCardComponent.prototype.selectCard = function (shelter) {
                    this.selectedId = shelter.id;
                };
                return ShelterCardComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], ShelterCardComponent.prototype, "shelter", void 0);
            ShelterCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-shelter-card',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./shelter-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shelters/shelter-card/shelter-card.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./shelter-card.component.scss */ "./src/app/shelters/shelter-card/shelter-card.component.scss")).default]
                })
            ], ShelterCardComponent);
            /***/ 
        }),
        /***/ "./src/app/shelters/shelter-list/shelter-list.component.scss": 
        /*!*******************************************************************!*\
          !*** ./src/app/shelters/shelter-list/shelter-list.component.scss ***!
          \*******************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoZWx0ZXJzL3NoZWx0ZXItbGlzdC9zaGVsdGVyLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/shelters/shelter-list/shelter-list.component.ts": 
        /*!*****************************************************************!*\
          !*** ./src/app/shelters/shelter-list/shelter-list.component.ts ***!
          \*****************************************************************/
        /*! exports provided: ShelterListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShelterListComponent", function () { return ShelterListComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _shelters_service_shelters_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shelters-service/shelters.service */ "./src/app/shelters/shelters-service/shelters.service.ts");
            var ShelterListComponent = /** @class */ (function () {
                function ShelterListComponent(sheltersService) {
                    this.sheltersService = sheltersService;
                }
                ShelterListComponent.prototype.ngOnInit = function () {
                    this.shelters$ = this.sheltersService.getShelters();
                };
                ShelterListComponent.prototype.shelterTrackBy = function (index, shelter) {
                    return shelter.id;
                };
                ShelterListComponent.prototype.onSearch = function (searchValue) {
                    this.shelters$ = this.sheltersService.getShelters({ name: searchValue });
                };
                return ShelterListComponent;
            }());
            ShelterListComponent.ctorParameters = function () { return [
                { type: _shelters_service_shelters_service__WEBPACK_IMPORTED_MODULE_2__["SheltersService"] }
            ]; };
            ShelterListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-shelter-list',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./shelter-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shelters/shelter-list/shelter-list.component.html")).default,
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./shelter-list.component.scss */ "./src/app/shelters/shelter-list/shelter-list.component.scss")).default]
                })
            ], ShelterListComponent);
            /***/ 
        }),
        /***/ "./src/app/shelters/shelter-registration/shelter-registration.component.scss": 
        /*!***********************************************************************************!*\
          !*** ./src/app/shelters/shelter-registration/shelter-registration.component.scss ***!
          \***********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".form-wrap {\n  display: flex;\n  flex-direction: column;\n  max-width: 600px;\n  margin: 0 auto;\n}\n.form-wrap h4 {\n  text-align: center;\n}\n.form-wrap .div-buttons {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hlbHRlcnMvc2hlbHRlci1yZWdpc3RyYXRpb24vQzpcXFVzZXJzXFxhZG1pblxcRGVza3RvcFxcc2hlbHRlci9zcmNcXGFwcFxcc2hlbHRlcnNcXHNoZWx0ZXItcmVnaXN0cmF0aW9uXFxzaGVsdGVyLXJlZ2lzdHJhdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hlbHRlcnMvc2hlbHRlci1yZWdpc3RyYXRpb24vc2hlbHRlci1yZWdpc3RyYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNDRjtBRENFO0VBQ0Usa0JBQUE7QUNDSjtBREVFO0VBQ0Usa0JBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL3NoZWx0ZXJzL3NoZWx0ZXItcmVnaXN0cmF0aW9uL3NoZWx0ZXItcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0td3JhcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuXG4gIGg0IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAuZGl2LWJ1dHRvbnMge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufVxuIiwiLmZvcm0td3JhcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLmZvcm0td3JhcCBoNCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5mb3JtLXdyYXAgLmRpdi1idXR0b25zIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/shelters/shelter-registration/shelter-registration.component.ts": 
        /*!*********************************************************************************!*\
          !*** ./src/app/shelters/shelter-registration/shelter-registration.component.ts ***!
          \*********************************************************************************/
        /*! exports provided: ShelterRegistrationComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShelterRegistrationComponent", function () { return ShelterRegistrationComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _shelters_service_shelters_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shelters-service/shelters.service */ "./src/app/shelters/shelters-service/shelters.service.ts");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            var ShelterRegistrationComponent = /** @class */ (function () {
                function ShelterRegistrationComponent(sheltersService, router) {
                    this.sheltersService = sheltersService;
                    this.router = router;
                    this.error = '';
                    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
                }
                ShelterRegistrationComponent.prototype.ngOnInit = function () {
                    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                        country: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                        region: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                        city: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                        street: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                        house: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
                    });
                };
                ShelterRegistrationComponent.prototype.isFieldValid = function (fieldName) {
                    return this.form.get(fieldName).touched && this.form.get(fieldName).invalid;
                };
                ShelterRegistrationComponent.prototype.submit = function () {
                    var _this = this;
                    if (this.form.invalid) {
                        return;
                    }
                    var formData = Object.assign({}, this.form.value);
                    this.sheltersService
                        .registerAddressShelter(formData)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$))
                        .subscribe(function () {
                        _this.form.reset();
                        _this.gotoMainPage();
                    }, function (error) {
                        _this.error = error.message;
                    });
                };
                ShelterRegistrationComponent.prototype.ngOnDestroy = function () {
                    this.destroy$.next();
                    this.destroy$.complete();
                };
                ShelterRegistrationComponent.prototype.gotoMainPage = function () {
                    this.router.navigate(['/']);
                };
                return ShelterRegistrationComponent;
            }());
            ShelterRegistrationComponent.ctorParameters = function () { return [
                { type: _shelters_service_shelters_service__WEBPACK_IMPORTED_MODULE_4__["SheltersService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
            ]; };
            ShelterRegistrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-registration-shelter',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./shelter-registration.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shelters/shelter-registration/shelter-registration.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./shelter-registration.component.scss */ "./src/app/shelters/shelter-registration/shelter-registration.component.scss")).default]
                })
            ], ShelterRegistrationComponent);
            /***/ 
        }),
        /***/ "./src/app/shelters/shelters-service/shelters.service.ts": 
        /*!***************************************************************!*\
          !*** ./src/app/shelters/shelters-service/shelters.service.ts ***!
          \***************************************************************/
        /*! exports provided: SheltersService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SheltersService", function () { return SheltersService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var src_app_shared_services_config_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/config/config.service */ "./src/app/shared/services/config/config.service.ts");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            var SheltersService = /** @class */ (function () {
                function SheltersService(http, configService) {
                    this.http = http;
                    this.configService = configService;
                }
                SheltersService.prototype.getShelters = function (paramObj) {
                    var _this = this;
                    if (paramObj === void 0) { paramObj = {}; }
                    var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
                    Object.entries(paramObj).forEach(function (_a) {
                        var key = _a[0], value = _a[1];
                        return (params = params.append(key, value));
                    });
                    return this.configService.configLoaded.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["concatMap"])(function (config) { return _this.http.get(config.sheltersApi, { params: params }); }));
                };
                SheltersService.prototype.getDetails = function (id) {
                    var _this = this;
                    if (id === void 0) { id = ''; }
                    return this.configService.configLoaded.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["concatMap"])(function (config) { return _this.getShelter(config.sheltersApi, id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["concatMap"])(function (shelter) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(shelter), _this.getAddress(config.addressApi, shelter.adressID), _this.getLocation(config.locationApi, shelter.locationID)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (arr) { return arr.reduce(function (acc, curr) { return (Object.assign({}, curr, acc)); }); })); }));
                };
                SheltersService.prototype.getShelter = function (api, id) {
                    return this.http.get(api + "/" + id);
                };
                SheltersService.prototype.getAddress = function (api, params) {
                    return params ? this.http.get(api + "/" + params) : Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
                };
                SheltersService.prototype.getLocation = function (api, params) {
                    return params ? this.http.get(api + "/" + params) : Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
                };
                SheltersService.prototype.registerAddressShelter = function (addressShelter) {
                    var _this = this;
                    return this.configService.configLoaded.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["concatMap"])(function (config) { return _this.http.post(config.addressApi, addressShelter); }));
                };
                return SheltersService;
            }());
            SheltersService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
                { type: src_app_shared_services_config_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] }
            ]; };
            SheltersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], SheltersService);
            /***/ 
        }),
        /***/ "./src/app/shelters/shelters.module.ts": 
        /*!*********************************************!*\
          !*** ./src/app/shelters/shelters.module.ts ***!
          \*********************************************/
        /*! exports provided: SheltersModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SheltersModule", function () { return SheltersModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _shelter_card_shelter_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shelter-card/shelter-card.component */ "./src/app/shelters/shelter-card/shelter-card.component.ts");
            /* harmony import */ var _shelter_list_shelter_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shelter-list/shelter-list.component */ "./src/app/shelters/shelter-list/shelter-list.component.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm2015/grid-list.js");
            /* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _shelter_card_details_shelter_card_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shelter-card-details/shelter-card-details.component */ "./src/app/shelters/shelter-card-details/shelter-card-details.component.ts");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _search_search_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../search/search.module */ "./src/app/search/search.module.ts");
            /* harmony import */ var _shelter_registration_shelter_registration_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shelter-registration/shelter-registration.component */ "./src/app/shelters/shelter-registration/shelter-registration.component.ts");
            var sheltersRoutes = [
                { path: 'shelter-registration', component: _shelter_registration_shelter_registration_component__WEBPACK_IMPORTED_MODULE_14__["ShelterRegistrationComponent"] },
                { path: 'shelters', component: _shelter_list_shelter_list_component__WEBPACK_IMPORTED_MODULE_6__["ShelterListComponent"] },
                { path: 'shelters/:id', component: _shelter_card_details_shelter_card_details_component__WEBPACK_IMPORTED_MODULE_11__["ShelterCardDetailsComponent"] }
            ];
            var SheltersModule = /** @class */ (function () {
                function SheltersModule() {
                }
                return SheltersModule;
            }());
            SheltersModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [
                        _shelter_list_shelter_list_component__WEBPACK_IMPORTED_MODULE_6__["ShelterListComponent"],
                        _shelter_card_shelter_card_component__WEBPACK_IMPORTED_MODULE_5__["ShelterCardComponent"],
                        _shelter_card_details_shelter_card_details_component__WEBPACK_IMPORTED_MODULE_11__["ShelterCardDetailsComponent"],
                        _shelter_registration_shelter_registration_component__WEBPACK_IMPORTED_MODULE_14__["ShelterRegistrationComponent"]
                    ],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild(sheltersRoutes),
                        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridListModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"],
                        _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
                        _search_search_module__WEBPACK_IMPORTED_MODULE_13__["SearchModule"]
                    ],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"], _shelter_card_shelter_card_component__WEBPACK_IMPORTED_MODULE_5__["ShelterCardComponent"]]
                })
            ], SheltersModule);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
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
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
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
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])()
                .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! C:\Users\admin\Desktop\shelter\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map