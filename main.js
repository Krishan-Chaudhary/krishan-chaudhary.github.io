(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _employees_employees_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./employees/employees.component */ "./src/app/employees/employees.component.ts");
/* harmony import */ var _comments_comments_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./comments/comments.component */ "./src/app/comments/comments.component.ts");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login */ "./src/app/login/index.ts");
/* harmony import */ var _register__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register */ "./src/app/register/index.ts");







var routes = [
    { path: 'login', component: _login__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: 'employee', component: _employees_employees_component__WEBPACK_IMPORTED_MODULE_3__["EmployeesComponent"] },
    { path: 'chat', component: _comments_comments_component__WEBPACK_IMPORTED_MODULE_4__["CommentsComponent"] },
    { path: 'register', component: _register__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"] },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- nav -->\n\n<div class=\"container-fliud\" *ngIf=\"user\">\n        <header></header>\n</div>\n\n<!-- <nav class=\"navbar navbar-expand navbar-dark bg-dark\" *ngIf=\"currentUser\">\n    <div class=\"navbar-nav\">\n        <a class=\"nav-item nav-link\" [routerLink]=\"['/employee']\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\">employee</a>\n        <a class=\"nav-item nav-link\" [routerLink]=\"['/chat']\" routerLinkActive=\"active\">chat</a>\n        <a class=\"nav-item nav-link\" (click)=\"logout()\">Logout</a>\n    </div>\n</nav> -->\n\n<!-- {{user?.displayName|json}} -->\n\n<!-- main app container -->\n<div class=\"jumbotron\">\n    <div class=\"container\">\n\n                <router-outlet></router-outlet>\n\n    </div>\n</div>\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_auth_login_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/auth/login/login.service */ "./src/app/shared/auth/login/login.service.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");





var AppComponent = /** @class */ (function () {
    function AppComponent(router, afAuth, service) {
        this.router = router;
        this.afAuth = afAuth;
        this.service = service;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getuserstate().subscribe(function (data) {
            _this.user = data;
            if (data) {
                _this.router.navigate(['/employee']);
            }
        });
        // this.afAuth.authState
        // .subscribe(user =>{
        //   this.user = user
        //   if(user){
        //       this.router.navigate(['/employee']);
        // }
        //   console.log(user);
        // })
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({ selector: 'app-root', template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html") }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"],
            _shared_auth_login_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]])
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _employees_employees_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./employees/employees.component */ "./src/app/employees/employees.component.ts");
/* harmony import */ var _employees_employee_employee_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./employees/employee/employee.component */ "./src/app/employees/employee/employee.component.ts");
/* harmony import */ var _employees_employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./employees/employee-list/employee-list.component */ "./src/app/employees/employee-list/employee-list.component.ts");
/* harmony import */ var _shared_employee_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/employee.service */ "./src/app/shared/employee.service.ts");
/* harmony import */ var _shared_auth_login_login_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/auth/login/login.service */ "./src/app/shared/auth/login/login.service.ts");
/* harmony import */ var _shared_comments_comment_comment_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shared/comments/comment/comment.service */ "./src/app/shared/comments/comment/comment.service.ts");
/* harmony import */ var _comments_comment_list_comment_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./comments/comment-list/comment-list.component */ "./src/app/comments/comment-list/comment-list.component.ts");
/* harmony import */ var _comments_comments_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./comments/comments.component */ "./src/app/comments/comments.component.ts");
/* harmony import */ var _comments_comment_comment_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./comments/comment/comment.component */ "./src/app/comments/comment/comment.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _shared_material_material_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./shared/material/material.module */ "./src/app/shared/material/material.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./login */ "./src/app/login/index.ts");
/* harmony import */ var _register__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./register */ "./src/app/register/index.ts");








//firebase















// import { NgModule }      from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';


// import { AppComponent }  from './app.component';
// import { routing }        from './app.routing';


var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _employees_employee_employee_component__WEBPACK_IMPORTED_MODULE_13__["EmployeeComponent"],
                _employees_employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_14__["EmployeeListComponent"],
                _employees_employees_component__WEBPACK_IMPORTED_MODULE_12__["EmployeesComponent"],
                _comments_comment_comment_component__WEBPACK_IMPORTED_MODULE_20__["CommentComponent"],
                _comments_comments_component__WEBPACK_IMPORTED_MODULE_19__["CommentsComponent"],
                _comments_comment_list_comment_list_component__WEBPACK_IMPORTED_MODULE_18__["CommentListComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_21__["HeaderComponent"],
                _login__WEBPACK_IMPORTED_MODULE_24__["LoginComponent"],
                _register__WEBPACK_IMPORTED_MODULE_25__["RegisterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_8__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].firebaseConfig),
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__["AngularFirestoreModule"],
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_10__["AngularFireAuthModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrModule"].forRoot(),
                _shared_material_material_module__WEBPACK_IMPORTED_MODULE_22__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["HttpClientModule"]
            ],
            providers: [
                _shared_employee_service__WEBPACK_IMPORTED_MODULE_15__["EmployeeService"], _shared_comments_comment_comment_service__WEBPACK_IMPORTED_MODULE_17__["CommentService"], _shared_auth_login_login_service__WEBPACK_IMPORTED_MODULE_16__["LoginService"]
            ],
            // providers: [EmployeeService,CommentService,LoginService],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/comments/comment-list/comment-list.component.css":
/*!******************************************************************!*\
  !*** ./src/app/comments/comment-list/comment-list.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1lbnRzL2NvbW1lbnQtbGlzdC9jb21tZW50LWxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/comments/comment-list/comment-list.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/comments/comment-list/comment-list.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-hover\" *ngIf=\"list && list.length\">\n    <thead>\n      <th>Comment</th>\n      <th>Mobile</th>\n      <th></th>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let item of list\">\n        <td (click)=\"onEdit(item)\">{{item.comment}} - {{item.itemCode}}</td>\n        <td (click)=\"onEdit(item)\">{{item.mobile}}</td>\n        <td><a class=\"btn text-danger\"><i class=\"fa fa fa-trash\" (click)=\"onDelete(item.id)\"></i></a></td>\n      </tr>\n    </tbody>\n  \n  </table>\n  "

/***/ }),

/***/ "./src/app/comments/comment-list/comment-list.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/comments/comment-list/comment-list.component.ts ***!
  \*****************************************************************/
/*! exports provided: CommentListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentListComponent", function() { return CommentListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_comments_comment_comment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/comments/comment/comment.service */ "./src/app/shared/comments/comment/comment.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");





var CommentListComponent = /** @class */ (function () {
    function CommentListComponent(service, fireStore, notiFication) {
        this.service = service;
        this.fireStore = fireStore;
        this.notiFication = notiFication;
    }
    CommentListComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    CommentListComponent.prototype.getData = function () {
        var _this = this;
        this.service.getData()
            .subscribe(function (data) {
            _this.list = data.map(function (item) {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: item.payload.doc.id }, item.payload.doc.data());
            });
        });
    };
    CommentListComponent.prototype.onEdit = function (com) {
        this.service.formData = Object.assign({}, com);
    };
    CommentListComponent.prototype.onDelete = function (id) {
        if (confirm("Are you sure to delete this record"))
            this.fireStore.doc('chats/' + id).delete();
        this.notiFication.warning("Deleted successfully");
    };
    CommentListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'comment-list',
            template: __webpack_require__(/*! ./comment-list.component.html */ "./src/app/comments/comment-list/comment-list.component.html"),
            styles: [__webpack_require__(/*! ./comment-list.component.css */ "./src/app/comments/comment-list/comment-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_comments_comment_comment_service__WEBPACK_IMPORTED_MODULE_2__["CommentService"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], CommentListComponent);
    return CommentListComponent;
}());



/***/ }),

/***/ "./src/app/comments/comment/comment.component.css":
/*!********************************************************!*\
  !*** ./src/app/comments/comment/comment.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".validation-error {\n    color: red;\n    font-size: 9px;\n }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbWVudHMvY29tbWVudC9jb21tZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsY0FBYztDQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NvbW1lbnRzL2NvbW1lbnQvY29tbWVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnZhbGlkYXRpb24tZXJyb3Ige1xuICAgIGNvbG9yOiByZWQ7XG4gICAgZm9udC1zaXplOiA5cHg7XG4gfVxuIl19 */"

/***/ }),

/***/ "./src/app/comments/comment/comment.component.html":
/*!*********************************************************!*\
  !*** ./src/app/comments/comment/comment.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h5>Chating Section</h5>\n<form #form=\"ngForm\" autocomplete=\"off\" (submit)=\"onSubmit(form)\">\n\t<input type=\"hidden\" name=\"id\" #id=\"ngModel\" [(ngModel)]=\"service.formData.id\">\n\t<div class=\"form-group\">\n\t  <input type=\"text\" name=\"comment\" #comment=\"ngModel\" [(ngModel)]=\"service.formData.comment\" class=\"form-control\" placeholder=\"comment\" required>\n\t\t<div *ngIf=\"comment.touched && comment.invalid\"class=\"validation-error\">This fields is required</div>\n\t</div>\n\t<div class=\"form-group\">\n\t  <input type=\"text\" name=\"mobile\" #mobile=\"ngModel\" [(ngModel)]=\"service.formData.mobile\" class=\"form-control\" placeholder=\"mobile\" required>\n\t\t<div *ngIf=\"mobile.touched && mobile.invalid\"class=\"validation-error\">This fields is required</div>\n\t</div>\n\t<div class=\"form-group\">\n\t\t<button type=\"submit\" [disabled]=\"form.invalid\" class=\"btn btn-sm btn-danger\">Send</button>\n\t\t</div>\n</form>\n\n\n"

/***/ }),

/***/ "./src/app/comments/comment/comment.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/comments/comment/comment.component.ts ***!
  \*******************************************************/
/*! exports provided: CommentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentComponent", function() { return CommentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_comments_comment_comment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/comments/comment/comment.service */ "./src/app/shared/comments/comment/comment.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");





var CommentComponent = /** @class */ (function () {
    function CommentComponent(service, fireStore, notiFication) {
        this.service = service;
        this.fireStore = fireStore;
        this.notiFication = notiFication;
    }
    CommentComponent.prototype.ngOnInit = function () {
        this.resetForm();
    };
    CommentComponent.prototype.resetForm = function (form) {
        if (form != null)
            form.resetForm();
        this.service.formData = {
            id: null,
            comment: '',
            mobile: ''
        };
    };
    // onSubmit(form:NgForm){
    //   let data = form.value;
    //   this.fireStore.collection('employees').add(data);
    //   this.resetForm(form);
    //   this.notiFication.success('Submitted successfully');
    //
    // }
    // onSubmit(form:NgForm){
    //   let data = form.value;
    //
    //   // this is for form submitting
    //   if(form.value.id == null)
    //   this.fireStore.collection('employees').add(data);
    //
    //   // this is for form updating
    //   else
    //   this.fireStore.doc('employees/'+form.value.id).update(data);
    //
    //   this.resetForm(form);
    //   this.notiFication.success('Submitted successfully');
    //
    // }
    CommentComponent.prototype.onSubmit = function (form) {
        var data = Object.assign({}, form.value);
        delete data.id;
        // this is for form submitting
        if (form.value.id == null)
            this.fireStore.collection('chats').add(data);
        // this is for form updating
        else
            this.fireStore.doc('chats/' + form.value.id).update(data);
        this.resetForm(form);
        this.notiFication.success('Submitted successfully');
    };
    CommentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'comment',
            template: __webpack_require__(/*! ./comment.component.html */ "./src/app/comments/comment/comment.component.html"),
            styles: [__webpack_require__(/*! ./comment.component.css */ "./src/app/comments/comment/comment.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_comments_comment_comment_service__WEBPACK_IMPORTED_MODULE_2__["CommentService"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], CommentComponent);
    return CommentComponent;
}());



/***/ }),

/***/ "./src/app/comments/comments.component.css":
/*!*************************************************!*\
  !*** ./src/app/comments/comments.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1lbnRzL2NvbW1lbnRzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/comments/comments.component.html":
/*!**************************************************!*\
  !*** ./src/app/comments/comments.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-5\">\n      <comment></comment>\n    </div><!--end .col-5-->\n    <div class=\"col-md-7\">\n      <comment-list></comment-list>\n    </div><!--end .col-7-->\n  </div><!--end .row-->\n  "

/***/ }),

/***/ "./src/app/comments/comments.component.ts":
/*!************************************************!*\
  !*** ./src/app/comments/comments.component.ts ***!
  \************************************************/
/*! exports provided: CommentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsComponent", function() { return CommentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CommentsComponent = /** @class */ (function () {
    function CommentsComponent() {
    }
    CommentsComponent.prototype.ngOnInit = function () {
    };
    CommentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-comments',
            template: __webpack_require__(/*! ./comments.component.html */ "./src/app/comments/comments.component.html"),
            styles: [__webpack_require__(/*! ./comments.component.css */ "./src/app/comments/comments.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CommentsComponent);
    return CommentsComponent;
}());



/***/ }),

/***/ "./src/app/employees/employee-list/employee-list.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/employees/employee-list/employee-list.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlcy9lbXBsb3llZS1saXN0L2VtcGxveWVlLWxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/employees/employee-list/employee-list.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/employees/employee-list/employee-list.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-hover\" *ngIf=\"list && list.length\">\n\t<thead>\n\t\t<th>Name</th>\n\t\t<th>Position</th>\n\t\t<th>Mobile</th>\n\t\t<th></th>\n\t</thead>\n\t<tbody>\n\t\t<tr *ngFor=\"let emp of list\">\n\t\t\t<td (click)=\"onEdit(emp)\">{{emp.fullName}} - {{emp.empCode}}</td>\n\t\t\t<td (click)=\"onEdit(emp)\">{{emp.position}}</td>\n\t\t\t<td (click)=\"onEdit(emp)\">{{emp.mobile}}</td>\n\t\t\t<td><a class=\"btn text-danger\"><i class=\"fa fa fa-trash\" (click)=\"onDelete(emp.id)\"></i></a></td>\n\t\t</tr>\n\t</tbody>\n\n</table>\n"

/***/ }),

/***/ "./src/app/employees/employee-list/employee-list.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/employees/employee-list/employee-list.component.ts ***!
  \********************************************************************/
/*! exports provided: EmployeeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeListComponent", function() { return EmployeeListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_employee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/employee.service */ "./src/app/shared/employee.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");





var EmployeeListComponent = /** @class */ (function () {
    function EmployeeListComponent(service, fireStore, notiFication) {
        this.service = service;
        this.fireStore = fireStore;
        this.notiFication = notiFication;
    }
    EmployeeListComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    EmployeeListComponent.prototype.getData = function () {
        var _this = this;
        this.service.getData()
            .subscribe(function (data) {
            _this.list = data.map(function (item) {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: item.payload.doc.id }, item.payload.doc.data());
            });
        });
    };
    EmployeeListComponent.prototype.onEdit = function (emp) {
        this.service.formData = Object.assign({}, emp);
    };
    EmployeeListComponent.prototype.onDelete = function (id) {
        if (confirm("Are you sure to delete this record"))
            this.fireStore.doc('employees/' + id).delete();
        this.notiFication.warning("Deleted successfully");
    };
    EmployeeListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-employee-list',
            template: __webpack_require__(/*! ./employee-list.component.html */ "./src/app/employees/employee-list/employee-list.component.html"),
            styles: [__webpack_require__(/*! ./employee-list.component.css */ "./src/app/employees/employee-list/employee-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], EmployeeListComponent);
    return EmployeeListComponent;
}());



/***/ }),

/***/ "./src/app/employees/employee/employee.component.css":
/*!***********************************************************!*\
  !*** ./src/app/employees/employee/employee.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".validation-error {\n\t color: red;\n\t font-size: 9px;\n  }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wbG95ZWVzL2VtcGxveWVlL2VtcGxveWVlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1YsY0FBYztFQUNkIiwiZmlsZSI6InNyYy9hcHAvZW1wbG95ZWVzL2VtcGxveWVlL2VtcGxveWVlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmFsaWRhdGlvbi1lcnJvciB7XG5cdCBjb2xvcjogcmVkO1xuXHQgZm9udC1zaXplOiA5cHg7XG4gIH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/employees/employee/employee.component.html":
/*!************************************************************!*\
  !*** ./src/app/employees/employee/employee.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h5>Registration Form</h5>\n<form #form=\"ngForm\" autocomplete=\"off\" (submit)=\"onSubmit(form)\">\n\t<input type=\"hidden\" name=\"id\" #id=\"ngModel\" [(ngModel)]=\"service.formData.id\">\n\t<div class=\"form-group\">\n\t  <input type=\"text\" name=\"fullName\" #fullName=\"ngModel\" [(ngModel)]=\"service.formData.fullName\" class=\"form-control\" placeholder=\"Full Name\" required>\n\t\t<div *ngIf=\"fullName.touched && fullName.invalid\"class=\"validation-error\">This fields is required</div>\n\t</div>\n\t<div class=\"form-group\">\n\t  <input type=\"text\" name=\"position\" #position=\"ngModel\" [(ngModel)]=\"service.formData.position\" class=\"form-control\" placeholder=\"Position\">\n\t</div>\n\t<div class=\"form-row\">\n\t\t<div class=\"form-group col-6\">\n\t\t  <input type=\"text\" name=\"empCode\" #empCode=\"ngModel\" [(ngModel)]=\"service.formData.empCode\" class=\"form-control\" placeholder=\"EmpCode\">\n\t\t</div>\n\t<div class=\"form-group col-6\">\n\t  <input type=\"text\" name=\"mobile\" #mobile=\"ngModel\" [(ngModel)]=\"service.formData.mobile\" class=\"form-control\" placeholder=\"Mobile\">\n\t</div>\n\t</div>\n\t<div class=\"form-group\">\n\t\t<button type=\"submit\" [disabled]=\"form.invalid\" class=\"btn btn-sm btn-danger\">Submit</button>\n\t\t</div>\n</form>\n\n\n"

/***/ }),

/***/ "./src/app/employees/employee/employee.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/employees/employee/employee.component.ts ***!
  \**********************************************************/
/*! exports provided: EmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeComponent", function() { return EmployeeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_employee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/employee.service */ "./src/app/shared/employee.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");





var EmployeeComponent = /** @class */ (function () {
    function EmployeeComponent(service, fireStore, notiFication) {
        this.service = service;
        this.fireStore = fireStore;
        this.notiFication = notiFication;
    }
    EmployeeComponent.prototype.ngOnInit = function () {
        this.resetForm();
    };
    EmployeeComponent.prototype.resetForm = function (form) {
        if (form != null)
            form.resetForm();
        this.service.formData = {
            id: null,
            fullName: '',
            position: '',
            empCode: '',
            mobile: ''
        };
    };
    // onSubmit(form:NgForm){
    //   let data = form.value;
    //   this.fireStore.collection('employees').add(data);
    //   this.resetForm(form);
    //   this.notiFication.success('Submitted successfully');
    //
    // }
    // onSubmit(form:NgForm){
    //   let data = form.value;
    //
    //   // this is for form submitting
    //   if(form.value.id == null)
    //   this.fireStore.collection('employees').add(data);
    //
    //   // this is for form updating
    //   else
    //   this.fireStore.doc('employees/'+form.value.id).update(data);
    //
    //   this.resetForm(form);
    //   this.notiFication.success('Submitted successfully');
    //
    // }
    EmployeeComponent.prototype.onSubmit = function (form) {
        var data = Object.assign({}, form.value);
        delete data.id;
        // this is for form submitting
        if (form.value.id == null)
            this.fireStore.collection('employees').add(data);
        // this is for form updating
        else
            this.fireStore.doc('employees/' + form.value.id).update(data);
        this.resetForm(form);
        this.notiFication.success('Submitted successfully');
    };
    EmployeeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-employee',
            template: __webpack_require__(/*! ./employee.component.html */ "./src/app/employees/employee/employee.component.html"),
            styles: [__webpack_require__(/*! ./employee.component.css */ "./src/app/employees/employee/employee.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], EmployeeComponent);
    return EmployeeComponent;
}());



/***/ }),

/***/ "./src/app/employees/employees.component.css":
/*!***************************************************!*\
  !*** ./src/app/employees/employees.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlcy9lbXBsb3llZXMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/employees/employees.component.html":
/*!****************************************************!*\
  !*** ./src/app/employees/employees.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\t<div class=\"col-md-5\">\n\t\t<app-employee></app-employee>\n\t</div><!--end .col-5-->\n\t<div class=\"col-md-7\">\n\t\t<app-employee-list></app-employee-list>\n\t</div><!--end .col-7-->\n</div><!--end .row-->\n"

/***/ }),

/***/ "./src/app/employees/employees.component.ts":
/*!**************************************************!*\
  !*** ./src/app/employees/employees.component.ts ***!
  \**************************************************/
/*! exports provided: EmployeesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeesComponent", function() { return EmployeesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EmployeesComponent = /** @class */ (function () {
    function EmployeesComponent() {
    }
    EmployeesComponent.prototype.ngOnInit = function () {
    };
    EmployeesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-employees',
            template: __webpack_require__(/*! ./employees.component.html */ "./src/app/employees/employees.component.html"),
            styles: [__webpack_require__(/*! ./employees.component.css */ "./src/app/employees/employees.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EmployeesComponent);
    return EmployeesComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- {{user|json}} -->\n<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\">App</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavAltMarkup\" aria-controls=\"navbarNavAltMarkup\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNavAltMarkup\">\n    <div class=\"navbar-nav\">\n      <a class=\"nav-item nav-link\" [routerLink]=\"['/employee']\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\">employee</a>\n      <a class=\"nav-item nav-link\" [routerLink]=\"['/chat']\" routerLinkActive=\"active\">chat</a>\n    </div>\n  </div>\n  <ul class=\"nav navbar-nav navbar-right\">\n      <!-- <li><a href=\"#\"><span class=\"glyphicon glyphicon-user\"></span>img</a></li> -->\n      <!-- <li class=\"pointer\" (click)=\"logout()\"><a><span class=\"glyphicon glyphicon-log-in\"></span> logout</a></li> -->\n      <li class=\"nav-item dropdown no-arrow \">\n          <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"userDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            <span class=\"mr-2 d-none d-lg-inline text-gray-600 small\">{{user.displayName}}</span>\n            <img class=\"img-profile rounded-circle\" src=\"{{user.photoURL}}\" style=\"width: 40px;\">\n          </a>\n          <!-- Dropdown - User Information -->\n          <div class=\"dropdown-menu dropdown-menu-right shadow animated--grow-in \" aria-labelledby=\"userDropdown\">\n            <div class=\"dropdown-divider\"></div>\n            <a class=\"dropdown-item\" (click)=\"logout()\" data-toggle=\"modal\" data-target=\"#logoutModal\">\n              <i class=\"fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400\"></i>\n              Logout\n            </a>\n          </div>\n        </li>\n  </ul>\n</nav>\n\n\n\n<!-- <nav class=\"navbar navbar-expand navbar-dark bg-dark\" *ngIf=\"currentUser\">\n    <div class=\"navbar-nav\">\n        <a class=\"nav-item nav-link\" [routerLink]=\"['/employee']\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\">employee</a>\n        <a class=\"nav-item nav-link\" [routerLink]=\"['/chat']\" routerLinkActive=\"active\">chat</a>\n        <a class=\"nav-item nav-link\" (click)=\"logout()\">Logout</a>\n    </div>\n</nav> -->\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_auth_login_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/auth/login/login.service */ "./src/app/shared/auth/login/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(service, router) {
        this.service = service;
        this.router = router;
    }
    HeaderComponent.prototype.logout = function () {
        this.service.logout();
        this.router.navigate(['/login']);
    };
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getuserstate().subscribe(function (data) {
            _this.user = data;
        });
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_auth_login_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/login/index.ts":
/*!********************************!*\
  !*** ./src/app/login/index.ts ***!
  \********************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return _login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"]; });




/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n    max-width: 360px;\n    margin: 0 auto;\n    margin-top: 100px;\n}\n.page-logo { max-width: 80px;margin: 0 auto;margin-top: 40px;}\n.page-logo img { width: 100%;}\n.mat-form-field:focus {\n    outline:0px !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsaUJBQWlCO0FBQ3JCO0FBQ0EsYUFBYSxlQUFlLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDO0FBQzdELGlCQUFpQixXQUFXLENBQUM7QUFHN0I7SUFDSSxzQkFBc0I7QUFDMUIiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xuICAgIG1heC13aWR0aDogMzYwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XG59XG4ucGFnZS1sb2dvIHsgbWF4LXdpZHRoOiA4MHB4O21hcmdpbjogMCBhdXRvO21hcmdpbi10b3A6IDQwcHg7fVxuLnBhZ2UtbG9nbyBpbWcgeyB3aWR0aDogMTAwJTt9XG5cblxuLm1hdC1mb3JtLWZpZWxkOmZvY3VzIHtcbiAgICBvdXRsaW5lOjBweCAhaW1wb3J0YW50O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n    <div class=\"page-logo\">\n        <img src=\"assets/img/security.png\">\n    </div>\n    <div class=\"card-body p-3\">\n            <p>{{autherror?.message}}</p>\n\n        <form #form=\"ngForm\" autocomplete=\"off\" (ngSubmit)=\"loginemail(form)\">\n\n            <div class=\"form-group\">\n                <input ngModel type=\"text\" name=\"email\" #email=\"ngModel\" class=\"form-control\" placeholder=\"Email\">\n              </div>\n                <div class=\"form-group\">\n                  <input ngModel type=\"password\" name=\"password\" #password=\"ngModel\" class=\"form-control\" placeholder=\"Password\">\n                </div>\n\n                <div class=\"form-group\">\n                        <button type=\"submit\" [disabled]=\"form.invalid\" class=\"btn btn-sm btn-danger\">login</button>\n               </div>\n\n            </form>\n        <div class=\"example-button-row text-right mb-3\">\n            <!-- <button [disabled]=\"loading\" mat-button color=\"primary\">Login</button> -->\n            <a [routerLink]=\"['/register']\" class=\"btn btn-link\">Register</a>\n        </div>\n\n            <div class=\"example-button-row\">\n                    <button class=\"w-100 mb-2\" mat-flat-button color=\"primary\" href=\"*.firebaseapp.com\" (click)=\"logingoogle()\">Login with google</button>\n                    <button class=\"w-100 mb-2\" mat-flat-button color=\"accent\" href=\"*.firebaseapp.com\" (click)=\"loginfb()\">Login with facebook</button>\n                    <button class=\"w-100 mb-2\" mat-flat-button color=\"warn\" href=\"*.firebaseapp.com\" (click)=\"loginemail(form)\">Login with email</button>\n            </div>\n\n            </div>\n</div>\n\n\n\n<!-- <div class=\"card\">\n    <div class=\"page-logo\">\n        <img src=\"assets/img/security.png\">\n    </div>\n    <div class=\"card-body p-3\">\n      <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n\n              <mat-form-field class=\"w-100\">\n              <input matInput formControlName=\"username\"  placeholder=\"User name\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" />\n              <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"f.username.errors.required\">Username is required</div>\n              </div>\n              </mat-form-field>\n\n              <mat-form-field class=\"w-100\">\n            <input matInput formControlName=\"password\"  placeholder=\"Password\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n              <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"f.password.errors.required\">Password is required</div>\n              </div>\n              </mat-form-field>\n\n        <div class=\"example-button-row text-right mb-3\">\n            <button [disabled]=\"loading\" mat-button color=\"primary\">Login</button>\n            <a [routerLink]=\"['/register']\" class=\"btn btn-link\">Register</a>\n        </div>\n            </form>\n\n            <div class=\"example-button-row\">\n                    <button class=\"w-100 mb-2\" mat-flat-button color=\"primary\" href=\"*.firebaseapp.com\" (click)=\"logingoogle()\">Login with google</button>\n                    <button class=\"w-100 mb-2\" mat-flat-button color=\"accent\" href=\"*.firebaseapp.com\" (click)=\"loginfb()\">Login with facebook</button>\n                    <button class=\"w-100 mb-2\" mat-flat-button color=\"warn\">Login with email</button>\n            </div>\n\n            </div>\n</div> -->\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_auth_login_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/auth/login/login.service */ "./src/app/shared/auth/login/login.service.ts");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, route, router, service) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.service = service;
        this.loading = false;
        this.submitted = false;
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.logingoogle = function () {
        this.service.login();
    };
    LoginComponent.prototype.loginfb = function () {
        this.service.loginfb();
    };
    LoginComponent.prototype.loginemail = function (form) {
        this.service.loginemail(form.value.email, form.value.password);
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_shared_auth_login_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/register/index.ts":
/*!***********************************!*\
  !*** ./src/app/register/index.ts ***!
  \***********************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _register_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.component */ "./src/app/register/register.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return _register_component__WEBPACK_IMPORTED_MODULE_0__["RegisterComponent"]; });




/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <h2>Register</h2>\n<form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"form-group\">\n        <label for=\"firstName\">First Name</label>\n        <input type=\"text\" formControlName=\"firstName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.firstName.errors }\" />\n        <div *ngIf=\"submitted && f.firstName.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.firstName.errors.required\">First Name is required</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"lastName\">Last Name</label>\n        <input type=\"text\" formControlName=\"lastName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.lastName.errors }\" />\n        <div *ngIf=\"submitted && f.lastName.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.lastName.errors.required\">Last Name is required</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"username\">Username</label>\n        <input type=\"text\" formControlName=\"username\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" />\n        <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.username.errors.required\">Username is required</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n        <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.password.errors.required\">Password is required</div>\n            <div *ngIf=\"f.password.errors.minlength\">Password must be at least 6 characters</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <button [disabled]=\"loading\" class=\"btn btn-primary\">Register</button>\n        <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n        <a [routerLink]=\"['/login']\" class=\"btn btn-link\">Cancel</a>\n    </div>\n</form> -->\n\n\n\n\n<h5>Registration Form</h5>\n\n<p>{{autherror?.message}}</p>\n\n<form #form=\"ngForm\" autocomplete=\"off\" (ngSubmit)=\"creatuser(form)\">\n\t<div class=\"form-group\">\n\t  <input ngModel type=\"text\" name=\"firstName\" #firstName=\"ngModel\" class=\"form-control\" placeholder=\"first Name\" required>\n\t\t<!-- <div *ngIf=\"firstName.touched && firstName.invalid\"class=\"validation-error\">This fields is required</div> -->\n\t</div>\n\t<div class=\"form-group\">\n\t  <input ngModel type=\"text\" name=\"lastName\" #lastName=\"ngModel\" class=\"form-control\" placeholder=\"Last Name\">\n\t</div>\n\t<div class=\"form-row\">\n\t\t<div class=\"form-group col-6\">\n\t\t  <input ngModel type=\"text\" name=\"username\" #username=\"ngModel\" class=\"form-control\" placeholder=\"Username\">\n\t\t</div>\n\t<div class=\"form-group col-6\">\n\t  <input ngModel type=\"text\" name=\"mobile\" #mobile=\"ngModel\" class=\"form-control\" placeholder=\"Mobile\">\n\t</div>\n\t</div>\n\t<div class=\"form-row\">\n\t\t<div class=\"form-group col-6\">\n\t\t  <input ngModel type=\"password\" name=\"password\" #password=\"ngModel\" class=\"form-control\" placeholder=\"Password\">\n\t\t</div>\n\t<div class=\"form-group col-6\">\n\t  <input ngModel type=\"text\" name=\"email\" #email=\"ngModel\" class=\"form-control\" placeholder=\"Email\">\n\t</div>\n  </div>  \n  <div class=\"form-group\">\n    <input name=\"password\" type=\"password\" class=\"form-control\" placeholder=\"Confirm Password\">\n\t</div>\n\t<div class=\"form-group\">\n\t\t<button type=\"submit\" [disabled]=\"form.invalid\" class=\"btn btn-sm btn-danger\">Submit</button>\n\t\t</div>\n</form>\n\n<!-- <h5>Registration Form</h5>\n\n<p>{{autherror?.message}}</p>\n\n<form #form=\"ngForm\" autocomplete=\"off\" (ngSubmit)=\"creatuser(form)\">\n\t<div class=\"form-group\">\n\t  <input type=\"text\" name=\"firstName\" #firstName=\"ngModel\" [(ngModel)]=\"service.formData.firstName\" class=\"form-control\" placeholder=\"first Name\" required>\n\t\t<div *ngIf=\"firstName.touched && firstName.invalid\"class=\"validation-error\">This fields is required</div>\n\t</div>\n\t<div class=\"form-group\">\n\t  <input type=\"text\" name=\"lastName\" #lastName=\"ngModel\" [(ngModel)]=\"service.formData.lastName\" class=\"form-control\" placeholder=\"Last Name\">\n\t</div>\n\t<div class=\"form-row\">\n\t\t<div class=\"form-group col-6\">\n\t\t  <input type=\"text\" name=\"usernameusername\" #username=\"ngModel\" [(ngModel)]=\"service.formData.username\" class=\"form-control\" placeholder=\"Username\">\n\t\t</div>\n\t<div class=\"form-group col-6\">\n\t  <input type=\"text\" name=\"mobile\" #mobile=\"ngModel\" [(ngModel)]=\"service.formData.mobile\" class=\"form-control\" placeholder=\"Mobile\">\n\t</div>\n\t</div>\n\t<div class=\"form-row\">\n\t\t<div class=\"form-group col-6\">\n\t\t  <input type=\"password\" name=\"password\" #password=\"ngModel\" [(ngModel)]=\"service.formData.password\" class=\"form-control\" placeholder=\"Password\">\n\t\t</div>\n\t<div class=\"form-group col-6\">\n\t  <input type=\"text\" name=\"email\" #email=\"ngModel\" [(ngModel)]=\"service.formData.email\" class=\"form-control\" placeholder=\"Email\">\n\t</div>\n\t</div>\n\t<div class=\"form-group\">\n\t\t<button type=\"submit\" [disabled]=\"form.invalid\" class=\"btn btn-sm btn-danger\">Submit</button>\n\t\t</div>\n</form> -->\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_shared_auth_login_login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/auth/login/login.service */ "./src/app/shared/auth/login/login.service.ts");




// import { RegisterService } from 'src/app/shared/auth/register/register.service';



var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(service, fireStore, notiFication, formBuilder, router) {
        this.service = service;
        this.fireStore = fireStore;
        this.notiFication = notiFication;
        this.formBuilder = formBuilder;
        this.router = router;
        this.loading = false;
        this.submitted = false;
    }
    RegisterComponent.prototype.ngOnInit = function () { };
    RegisterComponent.prototype.creatuser = function (form) {
        this.service.createuser(form.value);
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({ template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html") }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_auth_login_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/shared/auth/login/login.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/auth/login/login.service.ts ***!
  \****************************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");







// import firebase = require('firebase');
var LoginService = /** @class */ (function () {
    function LoginService(afAuth, db, router) {
        this.afAuth = afAuth;
        this.db = db;
        this.router = router;
        this.eventautherror = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](" ");
        this.eventautherror$ = this.eventautherror.asObservable();
    }
    // user login with google i
    LoginService.prototype.login = function () {
        this.afAuth.auth.signInWithRedirect(new firebase__WEBPACK_IMPORTED_MODULE_3__["auth"].GoogleAuthProvider());
    };
    // user login with google id
    LoginService.prototype.loginfb = function () {
        this.afAuth.auth.signInWithRedirect(new firebase__WEBPACK_IMPORTED_MODULE_3__["auth"].FacebookAuthProvider());
    };
    LoginService.prototype.getuserstate = function () {
        return this.afAuth.authState;
    };
    LoginService.prototype.loginemail = function (email, password) {
        var _this = this;
        this.afAuth.auth.signInWithEmailAndPassword(email, password)
            .catch(function (error) {
            _this.eventautherror.next(error);
        });
        // you can vcall from service also
        // .then(()=>{
        //   this.router.navigate(['/']);
        // })
    };
    // sign-up page - create a new user
    LoginService.prototype.createuser = function (user) {
        var _this = this;
        this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
            .then(function (userCredential) {
            _this.newuser = user;
            userCredential.user.updateProfile({
                displayName: user.firstName + ' ' + user.lastName
            });
            _this.insertUserdata(userCredential);
            // this.insertUserdata(userCredential)
            //   .then(()=>{
            //     this.router.navigate(['/']);
            //   })
        })
            .catch(function (error) {
            _this.eventautherror.next(error);
        });
    };
    LoginService.prototype.insertUserdata = function (userCredential) {
        return this.db.doc("User/" + userCredential.user.uid).set({
            email: this.newuser.email,
            firstName: this.newuser.firstName,
            lastName: this.newuser.lastName,
            role: 'network user'
        });
    };
    //user logout
    LoginService.prototype.logout = function () {
        this.afAuth.auth.signOut();
    };
    LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/shared/comments/comment/comment.service.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/comments/comment/comment.service.ts ***!
  \************************************************************/
/*! exports provided: CommentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentService", function() { return CommentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");



var CommentService = /** @class */ (function () {
    function CommentService(fireStore) {
        this.fireStore = fireStore;
    }
    CommentService.prototype.getData = function () {
        return this.fireStore.collection('chats').snapshotChanges();
    };
    CommentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], CommentService);
    return CommentService;
}());



/***/ }),

/***/ "./src/app/shared/employee.service.ts":
/*!********************************************!*\
  !*** ./src/app/shared/employee.service.ts ***!
  \********************************************/
/*! exports provided: EmployeeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeService", function() { return EmployeeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");



var EmployeeService = /** @class */ (function () {
    function EmployeeService(fireStore) {
        this.fireStore = fireStore;
    }
    EmployeeService.prototype.getData = function () {
        return this.fireStore.collection('employees').snapshotChanges();
    };
    EmployeeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], EmployeeService);
    return EmployeeService;
}());



/***/ }),

/***/ "./src/app/shared/material/material.module.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/material/material.module.ts ***!
  \****************************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");






var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"]
            ],
            exports: [
                _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"]
            ],
            declarations: []
        })
    ], MaterialModule);
    return MaterialModule;
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
    production: true,
    firebaseConfig: {
        apiKey: "AIzaSyA0fPS0W5mbJe3kpS9aBQrdCnRMYEfR490",
        authDomain: "ng-fire-2cd04.firebaseapp.com",
        databaseURL: "https://ng-fire-2cd04.firebaseio.com",
        projectId: "ng-fire-2cd04",
        storageBucket: "ng-fire-2cd04.appspot.com",
        messagingSenderId: "433767139903"
    }
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

module.exports = __webpack_require__(/*! /Applications/MAMP/htdocs/ng-fire/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map