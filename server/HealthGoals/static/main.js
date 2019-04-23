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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _exercise_videos_exercise_videos_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./exercise-videos/exercise-videos.component */ "./src/app/exercise-videos/exercise-videos.component.ts");
/* harmony import */ var _find_therapist_find_therapist_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./find-therapist/find-therapist.component */ "./src/app/find-therapist/find-therapist.component.ts");
/* harmony import */ var _fitness_instructors_fitness_instructors_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fitness-instructors/fitness-instructors.component */ "./src/app/fitness-instructors/fitness-instructors.component.ts");
/* harmony import */ var _food_blogs_food_blogs_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./food-blogs/food-blogs.component */ "./src/app/food-blogs/food-blogs.component.ts");
/* harmony import */ var _food_recipes_food_recipes_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./food-recipes/food-recipes.component */ "./src/app/food-recipes/food-recipes.component.ts");
/* harmony import */ var _mh_articles_mh_articles_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mh-articles/mh-articles.component */ "./src/app/mh-articles/mh-articles.component.ts");
/* harmony import */ var _mh_forums_mh_forums_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./mh-forums/mh-forums.component */ "./src/app/mh-forums/mh-forums.component.ts");
/* harmony import */ var _mh_forums_details_mh_forums_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./mh-forums-details/mh-forums-details.component */ "./src/app/mh-forums-details/mh-forums-details.component.ts");
/* harmony import */ var _mh_start_forum_mh_start_forum_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./mh-start-forum/mh-start-forum.component */ "./src/app/mh-start-forum/mh-start-forum.component.ts");
/* harmony import */ var _weight_watchers_weight_watchers_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./weight-watchers/weight-watchers.component */ "./src/app/weight-watchers/weight-watchers.component.ts");
/* harmony import */ var _exercise_videos_details_exercise_videos_details_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./exercise-videos-details/exercise-videos-details.component */ "./src/app/exercise-videos-details/exercise-videos-details.component.ts");
/* harmony import */ var _meal_plan_meal_plan_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./meal-plan/meal-plan.component */ "./src/app/meal-plan/meal-plan.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _therapist_details_therapist_details_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./therapist-details/therapist-details.component */ "./src/app/therapist-details/therapist-details.component.ts");
/* harmony import */ var _instructor_details_instructor_details_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./instructor-details/instructor-details.component */ "./src/app/instructor-details/instructor-details.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'welcome'
    },
    {
        path: 'static',
        pathMatch: 'full',
        redirectTo: 'welcome'
    },
    {
        path: 'welcome',
        pathMatch: 'full',
        component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_2__["WelcomeComponent"]
    },
    {
        path: 'exercise-videos',
        pathMatch: 'full',
        component: _exercise_videos_exercise_videos_component__WEBPACK_IMPORTED_MODULE_3__["ExerciseVideosComponent"]
    },
    {
        path: 'exercise-videos/:videos',
        pathMatch: 'full',
        component: _exercise_videos_details_exercise_videos_details_component__WEBPACK_IMPORTED_MODULE_13__["ExerciseVideosDetailsComponent"]
    },
    {
        path: 'find-therapist',
        pathMatch: 'full',
        component: _find_therapist_find_therapist_component__WEBPACK_IMPORTED_MODULE_4__["FindTherapistComponent"]
    },
    {
        path: 'find-therapist/:npi',
        pathMatch: 'full',
        component: _therapist_details_therapist_details_component__WEBPACK_IMPORTED_MODULE_16__["TherapistDetailsComponent"]
    },
    {
        path: 'fitness-instructors',
        pathMatch: 'full',
        component: _fitness_instructors_fitness_instructors_component__WEBPACK_IMPORTED_MODULE_5__["FitnessInstructorsComponent"]
    },
    {
        path: 'fitness-instructors/:Name',
        pathMatch: 'full',
        component: _instructor_details_instructor_details_component__WEBPACK_IMPORTED_MODULE_17__["InstructorDetailsComponent"]
    },
    {
        path: 'food-blogs',
        pathMatch: 'full',
        component: _food_blogs_food_blogs_component__WEBPACK_IMPORTED_MODULE_6__["FoodBlogsComponent"]
    },
    {
        path: 'food-recipes',
        pathMatch: 'full',
        component: _food_recipes_food_recipes_component__WEBPACK_IMPORTED_MODULE_7__["FoodRecipesComponent"]
    },
    {
        path: 'mh-articles',
        pathMatch: 'full',
        component: _mh_articles_mh_articles_component__WEBPACK_IMPORTED_MODULE_8__["MhArticlesComponent"]
    },
    {
        path: 'mh-forums',
        pathMatch: 'full',
        component: _mh_forums_mh_forums_component__WEBPACK_IMPORTED_MODULE_9__["MhForumsComponent"]
    },
    {
        path: 'mh-forums/:forum',
        pathMatch: 'full',
        component: _mh_forums_details_mh_forums_details_component__WEBPACK_IMPORTED_MODULE_10__["MhForumsDetailsComponent"]
    },
    {
        path: 'mh-start',
        pathMatch: 'full',
        component: _mh_start_forum_mh_start_forum_component__WEBPACK_IMPORTED_MODULE_11__["MhStartForumComponent"]
    },
    {
        path: 'profile/:ID',
        pathMatch: 'full',
        component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_18__["ProfileComponent"]
    },
    {
        path: 'weight-watchers',
        pathMatch: 'full',
        component: _weight_watchers_weight_watchers_component__WEBPACK_IMPORTED_MODULE_12__["WeightWatchersComponent"]
    },
    {
        path: 'meal-plan',
        pathMatch: 'full',
        component: _meal_plan_meal_plan_component__WEBPACK_IMPORTED_MODULE_14__["MealPlanComponent"]
    },
    {
        path: 'sign-up',
        pathMatch: 'full',
        component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_15__["SignupComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n    <a class=\"navbar-brand\" routerLink=\"welcome\">Health Goals</a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n  <span class=\"navbar-toggler-icon\"></span>\r\n</button>\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\r\n        <ul class=\"navbar-nav\">\r\n            <li class=\"nav-item\" routerLinkActive=\"active\">\r\n                <a class=\"nav-link\" routerLink=\"exercise-videos\">Exercise Videos</a>\r\n            </li>\r\n            <li class=\"nav-item\" routerLinkActive=\"active\">\r\n                <a class=\"nav-link\" routerLink=\"weight-watchers\">Weight Watchers</a>\r\n            </li>\r\n            <li class=\"nav-item\" routerLinkActive=\"active\">\r\n                <a class=\"nav-link\" routerLink=\"food-blogs\">Food Blogs</a>\r\n            </li>\r\n            <li class=\"nav-item\" routerLinkActive=\"active\">\r\n                <a class=\"nav-link\" routerLink=\"food-recipes\">Food Recipes</a>\r\n            </li>\r\n            <li class=\"nav-item\" routerLinkActive=\"active\">\r\n                <a class=\"nav-link\" routerLink=\"fitness-instructors\">Fitness Instructors</a>\r\n            </li>\r\n            <li class=\"nav-item\" routerLinkActive=\"active\">\r\n                <a class=\"nav-link\" routerLink=\"find-therapist\">Find Therapist</a>\r\n            </li>\r\n            <li class=\"nav-item\" routerLinkActive=\"active\">\r\n                <a class=\"nav-link\" routerLink=\"mh-forums\">Mental Health Forums</a>\r\n            </li>\r\n            <li class=\"nav-item\" routerLinkActive=\"active\">\r\n                <a class=\"nav-link\" routerLink=\"mh-articles\">Mental Health Articles</a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</nav>\r\n\r\n<router-outlet></router-outlet>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Health Goals';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _pipes_youtube__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pipes/youtube */ "./src/pipes/youtube.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _exercise_videos_exercise_videos_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./exercise-videos/exercise-videos.component */ "./src/app/exercise-videos/exercise-videos.component.ts");
/* harmony import */ var _weight_watchers_weight_watchers_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./weight-watchers/weight-watchers.component */ "./src/app/weight-watchers/weight-watchers.component.ts");
/* harmony import */ var _food_blogs_food_blogs_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./food-blogs/food-blogs.component */ "./src/app/food-blogs/food-blogs.component.ts");
/* harmony import */ var _food_recipes_food_recipes_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./food-recipes/food-recipes.component */ "./src/app/food-recipes/food-recipes.component.ts");
/* harmony import */ var _fitness_instructors_fitness_instructors_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./fitness-instructors/fitness-instructors.component */ "./src/app/fitness-instructors/fitness-instructors.component.ts");
/* harmony import */ var _find_therapist_find_therapist_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./find-therapist/find-therapist.component */ "./src/app/find-therapist/find-therapist.component.ts");
/* harmony import */ var _mh_forums_mh_forums_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./mh-forums/mh-forums.component */ "./src/app/mh-forums/mh-forums.component.ts");
/* harmony import */ var _mh_articles_mh_articles_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./mh-articles/mh-articles.component */ "./src/app/mh-articles/mh-articles.component.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/card */ "./node_modules/primeng/card.js");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(primeng_card__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var primeng_carousel__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/carousel */ "./node_modules/primeng/carousel.js");
/* harmony import */ var primeng_carousel__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(primeng_carousel__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/checkbox */ "./node_modules/primeng/checkbox.js");
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(primeng_checkbox__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/button.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/inputtext */ "./node_modules/primeng/inputtext.js");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(primeng_inputtext__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var primeng_dataview__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/dataview */ "./node_modules/primeng/dataview.js");
/* harmony import */ var primeng_dataview__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(primeng_dataview__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! primeng/messages */ "./node_modules/primeng/messages.js");
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(primeng_messages__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! primeng/message */ "./node_modules/primeng/message.js");
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(primeng_message__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/toast.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(primeng_toast__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _meal_plan_meal_plan_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./meal-plan/meal-plan.component */ "./src/app/meal-plan/meal-plan.component.ts");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var _mh_forums_details_mh_forums_details_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./mh-forums-details/mh-forums-details.component */ "./src/app/mh-forums-details/mh-forums-details.component.ts");
/* harmony import */ var _mh_start_forum_mh_start_forum_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./mh-start-forum/mh-start-forum.component */ "./src/app/mh-start-forum/mh-start-forum.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _exercise_videos_details_exercise_videos_details_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./exercise-videos-details/exercise-videos-details.component */ "./src/app/exercise-videos-details/exercise-videos-details.component.ts");
/* harmony import */ var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! primeng/autocomplete */ "./node_modules/primeng/autocomplete.js");
/* harmony import */ var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(primeng_autocomplete__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var _therapist_details_therapist_details_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./therapist-details/therapist-details.component */ "./src/app/therapist-details/therapist-details.component.ts");
/* harmony import */ var _instructor_details_instructor_details_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./instructor-details/instructor-details.component */ "./src/app/instructor-details/instructor-details.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! primeng/dialog */ "./node_modules/primeng/dialog.js");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(primeng_dialog__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var primeng_orderlist__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! primeng/orderlist */ "./node_modules/primeng/orderlist.js");
/* harmony import */ var primeng_orderlist__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(primeng_orderlist__WEBPACK_IMPORTED_MODULE_39__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _exercise_videos_exercise_videos_component__WEBPACK_IMPORTED_MODULE_8__["ExerciseVideosComponent"],
                _weight_watchers_weight_watchers_component__WEBPACK_IMPORTED_MODULE_9__["WeightWatchersComponent"],
                _food_blogs_food_blogs_component__WEBPACK_IMPORTED_MODULE_10__["FoodBlogsComponent"],
                _food_recipes_food_recipes_component__WEBPACK_IMPORTED_MODULE_11__["FoodRecipesComponent"],
                _fitness_instructors_fitness_instructors_component__WEBPACK_IMPORTED_MODULE_12__["FitnessInstructorsComponent"],
                _find_therapist_find_therapist_component__WEBPACK_IMPORTED_MODULE_13__["FindTherapistComponent"],
                _mh_forums_mh_forums_component__WEBPACK_IMPORTED_MODULE_14__["MhForumsComponent"],
                _mh_articles_mh_articles_component__WEBPACK_IMPORTED_MODULE_15__["MhArticlesComponent"],
                _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_16__["WelcomeComponent"],
                _exercise_videos_details_exercise_videos_details_component__WEBPACK_IMPORTED_MODULE_33__["ExerciseVideosDetailsComponent"],
                _pipes_youtube__WEBPACK_IMPORTED_MODULE_4__["Youtube"],
                _meal_plan_meal_plan_component__WEBPACK_IMPORTED_MODULE_28__["MealPlanComponent"],
                _mh_forums_details_mh_forums_details_component__WEBPACK_IMPORTED_MODULE_30__["MhForumsDetailsComponent"],
                _mh_start_forum_mh_start_forum_component__WEBPACK_IMPORTED_MODULE_31__["MhStartForumComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_32__["SignupComponent"],
                _therapist_details_therapist_details_component__WEBPACK_IMPORTED_MODULE_35__["TherapistDetailsComponent"],
                _instructor_details_instructor_details_component__WEBPACK_IMPORTED_MODULE_36__["InstructorDetailsComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_37__["ProfileComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["AlertModule"].forRoot(),
                primeng_card__WEBPACK_IMPORTED_MODULE_17__["CardModule"],
                primeng_checkbox__WEBPACK_IMPORTED_MODULE_19__["CheckboxModule"],
                primeng_carousel__WEBPACK_IMPORTED_MODULE_18__["CarouselModule"],
                primeng_button__WEBPACK_IMPORTED_MODULE_20__["ButtonModule"],
                primeng_inputtext__WEBPACK_IMPORTED_MODULE_21__["InputTextModule"],
                primeng_dataview__WEBPACK_IMPORTED_MODULE_22__["DataViewModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_23__["DropdownModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_24__["HttpClientModule"],
                primeng_messages__WEBPACK_IMPORTED_MODULE_25__["MessagesModule"],
                primeng_message__WEBPACK_IMPORTED_MODULE_26__["MessageModule"],
                primeng_toast__WEBPACK_IMPORTED_MODULE_27__["ToastModule"],
                primeng_table__WEBPACK_IMPORTED_MODULE_29__["TableModule"],
                primeng_autocomplete__WEBPACK_IMPORTED_MODULE_34__["AutoCompleteModule"],
                primeng_dialog__WEBPACK_IMPORTED_MODULE_38__["DialogModule"],
                primeng_orderlist__WEBPACK_IMPORTED_MODULE_39__["OrderListModule"]
            ],
            providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_24__["HttpClient"], _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_16__["WelcomeComponent"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/exercise-videos-details/exercise-videos-details.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/exercise-videos-details/exercise-videos-details.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".jumbotron {\r\n    padding-top: 2%;\r\n    padding-bottom: 2%;\r\n}\r\n\r\n.VideoResults{\r\n    font-family: 'Quicksand', sans-serif;\r\n    font-weight: 250;\r\n    position: absolute;\r\n    top: 365px;\r\n    left: 350px;\r\n    width: 925px;\r\n    bottom: 100px;\r\n}\r\n\r\n.save-button{\r\n    font-family: 'Quicksand', sans-serif;\r\n    font-weight: 250;\r\n    position: absolute;\r\n    top: 325px;\r\n    left: 1155px;\r\n}\r\n\r\n.Back-Button {\r\n    font-family: 'Quicksand', sans-serif;\r\n    font-weight: 350;\r\n    position: absolute;\r\n    top: 325px;\r\n    left: 350px;\r\n    width: 200px;\r\n}\r\n\r\n.sidenav {\r\n    font-family: 'Quicksand', sans-serif;\r\n    font-weight: 350;\r\n    position: absolute;\r\n    left: 25px;\r\n    top: 325px;\r\n    width: 300px;\r\n}\r\n\r\nh1 { \r\n    font-size: 2em;\r\n    font-weight: bold;\r\n}\r\n\r\nh2 {\r\n        display: block;\r\n        font-size: 1.5em;\r\n        font-weight: bold;\r\n}\r\n\r\n.Heading2 {\r\n    font-family: 'Quicksand', sans-serif;\r\n    font-size: 25px;\r\n    position: absolute;\r\n    left: 25px;\r\n    top: 260px;\r\n}\r\n\r\n.searchbar{\r\n    font-family: 'Quicksand', sans-serif;\r\n    font-weight: 350;\r\n    position: absolute;\r\n    top: 325px;\r\n    left: 350px;\r\n}\r\n\r\n.search-button{\r\n    position: absolute;\r\n    top: 325px;\r\n    left: 1000px;\r\n}\r\n\r\n.new-button{\r\n    position: absolute;\r\n    top: 325px;\r\n    left: 1035px;\r\n}\r\n\r\n.page-button{\r\n    position: absolute;\r\n    top: 325px;\r\n    left: 1165px;\r\n}\r\n\r\n.workout-set1{\r\n    color: white;\r\n    position: absolute;\r\n    top: 380px;\r\n    left: 320px;\r\n}\r\n\r\n.workout-set2{\r\n    color:WHITE;\r\n    position: absolute;\r\n    top: 380px;\r\n    left: 650px;\r\n}\r\n\r\n.workout-set3{\r\n    color:WHITE;\r\n    position: absolute;\r\n    top: 380px;\r\n    left: 980px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhlcmNpc2UtdmlkZW9zLWRldGFpbHMvZXhlcmNpc2UtdmlkZW9zLWRldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUdBO0lBQ0ksb0NBQW9DO0lBQ3BDLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFlBQVk7QUFDaEI7O0FBQ0E7SUFDSSxvQ0FBb0M7SUFDcEMsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBQ0E7SUFDSSxvQ0FBb0M7SUFDcEMsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsVUFBVTtJQUNWLFlBQVk7QUFDaEI7O0FBQ0E7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0FBQ3JCOztBQUVBO1FBQ1EsY0FBYztRQUNkLGdCQUFnQjtRQUNoQixpQkFBaUI7QUFDekI7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsVUFBVTtBQUNkOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFdBQVc7QUFDZjs7QUFDQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2V4ZXJjaXNlLXZpZGVvcy1kZXRhaWxzL2V4ZXJjaXNlLXZpZGVvcy1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuanVtYm90cm9uIHtcclxuICAgIHBhZGRpbmctdG9wOiAyJTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyJTtcclxufVxyXG5cclxuLlZpZGVvUmVzdWx0c3tcclxuICAgIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiAyNTA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDM2NXB4O1xyXG4gICAgbGVmdDogMzUwcHg7XHJcbiAgICB3aWR0aDogOTI1cHg7XHJcbiAgICBib3R0b206IDEwMHB4O1xyXG59XHJcblxyXG5cclxuLnNhdmUtYnV0dG9ue1xyXG4gICAgZm9udC1mYW1pbHk6ICdRdWlja3NhbmQnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDI1MDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMzI1cHg7XHJcbiAgICBsZWZ0OiAxMTU1cHg7XHJcbn1cclxuLkJhY2stQnV0dG9uIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiAzNTA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDMyNXB4O1xyXG4gICAgbGVmdDogMzUwcHg7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbn1cclxuLnNpZGVuYXYge1xyXG4gICAgZm9udC1mYW1pbHk6ICdRdWlja3NhbmQnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDM1MDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDI1cHg7XHJcbiAgICB0b3A6IDMyNXB4O1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG59XHJcbmgxIHsgXHJcbiAgICBmb250LXNpemU6IDJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5oMiB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLkhlYWRpbmcyIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDI1cHg7XHJcbiAgICB0b3A6IDI2MHB4O1xyXG59XHJcblxyXG4uc2VhcmNoYmFye1xyXG4gICAgZm9udC1mYW1pbHk6ICdRdWlja3NhbmQnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDM1MDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMzI1cHg7XHJcbiAgICBsZWZ0OiAzNTBweDtcclxufVxyXG5cclxuLnNlYXJjaC1idXR0b257XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDMyNXB4O1xyXG4gICAgbGVmdDogMTAwMHB4O1xyXG59XHJcblxyXG4ubmV3LWJ1dHRvbntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMzI1cHg7XHJcbiAgICBsZWZ0OiAxMDM1cHg7XHJcbn1cclxuXHJcbi5wYWdlLWJ1dHRvbntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMzI1cHg7XHJcbiAgICBsZWZ0OiAxMTY1cHg7XHJcbn1cclxuXHJcbi53b3Jrb3V0LXNldDF7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDM4MHB4O1xyXG4gICAgbGVmdDogMzIwcHg7XHJcbn1cclxuXHJcbi53b3Jrb3V0LXNldDJ7XHJcbiAgICBjb2xvcjpXSElURTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMzgwcHg7XHJcbiAgICBsZWZ0OiA2NTBweDtcclxufVxyXG4ud29ya291dC1zZXQze1xyXG4gICAgY29sb3I6V0hJVEU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDM4MHB4O1xyXG4gICAgbGVmdDogOTgwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/exercise-videos-details/exercise-videos-details.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/exercise-videos-details/exercise-videos-details.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\r\n  <figure><img src=\"assets/image/heart.png\" width=\"60\" height=\"60\" class=\"mx-auto d-block\"></figure>\r\n  <h1 style=\"text-align:center\" class=\"display-4\">Health Goals</h1>\r\n</div>\r\n\r\n<p class = \"Heading2\"><b>Exercise Videos</b></p>\r\n\r\n<!-- Side navigation -->\r\n<div class=\"sidenav\">\r\n      <p-card header = \"Filter Results\">\r\n      <h5> Training Type </h5>\r\n          <p-checkbox name=\"trainingtype\" value=\"Strength Training\" label=\"Strength Training\" (click) =\"getTrainingType('Strength Training')\"> </p-checkbox>\r\n          <br>\r\n          <p-checkbox name=\"trainingtype\" value=\"HIIT\" label=\"HIIT\" (click) =\"getTrainingType('HIIT')\" > </p-checkbox>\r\n          <br>\r\n          <p-checkbox name=\"trainingtype\" value=\"Low Impact\" label=\"Low Impact\" (click) =\"getTrainingType('Low Impact')\" > </p-checkbox>\r\n          <br>\r\n          <p-checkbox name=\"trainingtype\" value=\"Toning\" label=\"Toning\" (click) =\"getTrainingType('Toning')\" > </p-checkbox>\r\n          <br>\r\n          <p-checkbox name=\"trainingtype\" value=\"Warming/Cooldown\" label=\"Warm up /Cool down\" (click) =\"getTrainingType('Warming')\"> </p-checkbox>\r\n          <br>\r\n          <p-checkbox name=\"trainingtype\" value=\"Yoga\" label=\"Yoga\" (click) =\"getTrainingType('Yoga')\" ></p-checkbox>\r\n          <br>\r\n          <p-checkbox name=\"trainingtype\" value=\"Cardiovascular\" label=\"Cardiovascular\" (click) =\"getTrainingType('Cardiovascular')\"> </p-checkbox>\r\n          <br>\r\n          <p-checkbox name=\"trainingtype\" value=\"Barre\" label=\"Barre\" (click) =\"getTrainingType('Barre')\"> </p-checkbox>\r\n          <br>\r\n          <p-checkbox name=\"trainingtype\" value=\"Plyometric\" label =\"Plyometric\"(click) =\"getTrainingType('Plyometric')\"> </p-checkbox>\r\n          <br>\r\n          <p-checkbox name=\"trainingtype\" value=\"Balance\" label=\"Balance / Agility\"  (click) =\"getTrainingType('Balance')\"> </p-checkbox>\r\n          <br>\r\n          <br>\r\n  \r\n      <h5> Difficulty </h5>\r\n          <p-checkbox name=\"difficulty\" value=\"1\" label=\"1\"   (click) =\"getDifficultyLevel('1')\"> </p-checkbox>\r\n          <br>\r\n          <p-checkbox name=\"difficulty\" value=\"2\" label=\"2\"  (click) =\"getDifficultyLevel('2')\"> </p-checkbox>\r\n          <br>\r\n          <p-checkbox name=\"difficulty\" value=\"3\" label=\"3\"   (click) =\"getDifficultyLevel('3')\"> </p-checkbox>\r\n          <br>\r\n          <p-checkbox name=\"difficulty\" value=\"4\" label=\"4\"   (click) =\"getDifficultyLevel('4')\"> </p-checkbox>\r\n          <br>\r\n          <p-checkbox name=\"difficulty\" value=\"5\" label=\"5\"   (click) =\"getDifficultyLevel('5')\"> </p-checkbox>\r\n          <br>\r\n          <br>\r\n  \r\n      <h5> Body Focus </h5>\r\n      \r\n          <p-checkbox name=\"bodyfocus\" value=\"core\" label=\" Core \"    (click) =\"getbodyfocus('Core')\"> </p-checkbox>\r\n          <br>\r\n          <p-checkbox name=\"bodyfocus\" value=\"upper\" label=\" Upper \"  (click) =\"getbodyfocus('Upper')\"> </p-checkbox>\r\n          <br>\r\n          <p-checkbox name=\"bodyfocus\" value=\"lower\" label=\" Lower \"  (click) =\"getbodyfocus('Lower')\"> </p-checkbox>\r\n          <br>\r\n          <p-checkbox name=\"bodyfocus\" value=\"total\" label=\" Total \" (click) =\"getbodyfocus('Total')\"> </p-checkbox>\r\n          <br>\r\n          <br>\r\n     \r\n      <!-- Save Button \r\n      <div class=\"save-button\">\r\n          <p-button label=\"Save\" (click) =\"\"></p-button>\r\n      </div>  \r\n      <br>-->\r\n\r\n      <!-- Clear Filters Button   -->     \r\n      <p-button label=\"Clear Filters\" id=\"searchButton\" (click) = \"getVideos()\"></p-button>\r\n  \r\n  </p-card>\r\n</div>\r\n\r\n<div class=\"save-button\">\r\n    <p-button *ngIf= \"loggedIn\" label=\"Save Video\" (click) =\"saveVideo(user.ID)\"></p-button>\r\n    <p-button *ngIf=\"!loggedIn\" label=\"Save Video\" (click) =\"signInToSave()\"></p-button>\r\n</div> \r\n\r\n<button type=\"button\" (click) = \"backClicked()\" pButton label=\"Back to all Videos\" class = \"Back-Button\"></button>\r\n\r\n<div class=\"VideoResults\">\r\n          <p-card> \r\n           <h2> {{videoname}} </h2>\r\n               <p *ngIf=\"videoDetails\">Training Type: {{videoDetails?.TrainingType }}</p>\r\n               <br>\r\n               <p *ngIf=\"videoDetails\">Body Focus: {{videoDetails?.BodyFocus }}</p>\r\n               <br>\r\n               <p *ngIf=\"videoDetails\"> Difficulty: {{videoDetails?.Difficulty }}</p>\r\n               <br>\r\n              <iframe *ngIf=\"videoDetails\" width=\"900\" height=\"507\" [src]=\"videoDetails?.FinalLink | youtube\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"></iframe> \r\n          </p-card>\r\n        </div>\r\n"

/***/ }),

/***/ "./src/app/exercise-videos-details/exercise-videos-details.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/exercise-videos-details/exercise-videos-details.component.ts ***!
  \******************************************************************************/
/*! exports provided: ExerciseVideosDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExerciseVideosDetailsComponent", function() { return ExerciseVideosDetailsComponent; });
/* harmony import */ var _exercisevideos_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../exercisevideos.service */ "./src/app/exercisevideos.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _welcome_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../welcome.service */ "./src/app/welcome.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ExerciseVideosDetailsComponent = /** @class */ (function () {
    function ExerciseVideosDetailsComponent(videoService, exercisevideoService, route, _location, userService) {
        var _this = this;
        this.videoService = videoService;
        this.exercisevideoService = exercisevideoService;
        this.route = route;
        this._location = _location;
        this.userService = userService;
        this.loggedIn = false;
        route.paramMap.subscribe(function (paramMap) {
            // debugger;
            _this.videoname = paramMap.get('videos');
            exercisevideoService.findvideo(_this.videoname).subscribe(function (data) {
                _this.videoDetails = data;
                console.log(data);
            }, function (error) {
                if (error.status === 404) {
                    alert('Video not found');
                }
                else {
                    console.error(error.status + ' - ' + error.body);
                    alert('An error occurred on the server. Please check the console.');
                }
            });
        });
    }
    ExerciseVideosDetailsComponent.prototype.backClicked = function () {
        this._location.back();
    };
    ExerciseVideosDetailsComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem("loggedIn") == "true") {
            this.loggedIn = true;
            this.get_userdata(localStorage.getItem("ID"));
        }
        else {
            this.loggedIn = false;
            localStorage.clear();
            localStorage.setItem("loggedIn", "false");
        }
    };
    ExerciseVideosDetailsComponent.prototype.signInToSave = function () {
        alert('Please sign in to save this video');
    };
    ExerciseVideosDetailsComponent.prototype.get_userdata = function (ID) {
        var _this = this;
        this.userService.get_userdata(ID).subscribe(function (data) {
            _this.user = data;
        }, function (error) {
            alert("unable to get user data");
        });
    };
    ExerciseVideosDetailsComponent.prototype.saveVideo = function (username) {
        var _this = this;
        this.videoService.saveVideo(this.videoname, username).subscribe(function (data) {
            _this.videos = data;
            alert('Video saved');
        }, function (error) {
            alert('Could not save video');
        });
    };
    ExerciseVideosDetailsComponent.prototype.getVideos = function () {
        var _this = this;
        this.videoService.getVideos().subscribe(function (data) {
            _this.videos = data;
        }, function (error) {
            alert('Could not retrieve a list of videos');
        });
    };
    ExerciseVideosDetailsComponent.prototype.getDifficultyLevel = function (difficulty) {
        var _this = this;
        this.videoService.getDifficultyLevel(difficulty).subscribe(function (data) {
            _this.videos = data;
        }, function (error) {
            alert('Could not retrieve a list of difficulties');
        });
    };
    ExerciseVideosDetailsComponent.prototype.getTrainingType = function (trainingtype) {
        var _this = this;
        this.videoService.getTrainingType(trainingtype).subscribe(function (data) {
            _this.videos = data;
        }, function (error) {
            alert('Could not retrieve a list of training types');
        });
    };
    ExerciseVideosDetailsComponent.prototype.getbodyfocus = function (bodyfocus) {
        var _this = this;
        this.videoService.getbodyfocus(bodyfocus).subscribe(function (data) {
            _this.videos = data;
        }, function (error) {
            alert('Could not retrieve a list of Body Focus types');
        });
    };
    ExerciseVideosDetailsComponent.prototype.getcombine = function (training, difficulty, bodyfocus) {
        var _this = this;
        if (training != undefined && difficulty == undefined && bodyfocus == undefined) {
            this.videoService.getTrainingType(training).subscribe(function (data) {
                _this.videos = data;
            }, function (error) {
                alert('Could not retrieve a list of training types');
            });
        }
        else if (training == undefined && difficulty != undefined && bodyfocus == undefined) {
            this.videoService.getDifficultyLevel(difficulty).subscribe(function (data) {
                _this.videos = data;
            }, function (error) {
                alert('Could not retrieve a list of difficulties');
            });
        }
        else if (training == undefined && difficulty == undefined && bodyfocus != undefined) {
            this.videoService.getbodyfocus(bodyfocus).subscribe(function (data) {
                _this.videos = data;
            }, function (error) {
                alert('Could not retrieve a list of Body Focus types');
            });
        }
        else if (training != undefined && difficulty != undefined && bodyfocus == undefined) {
            this.videoService.gettd(training, difficulty).subscribe(function (data) {
                _this.videos = data;
            }, function (error) {
                alert('Could not retrieve a list of training and difficulty types');
            });
        }
        else if (training == undefined && difficulty != undefined && bodyfocus != undefined) {
            this.videoService.getdf(difficulty, bodyfocus).subscribe(function (data) {
                _this.videos = data;
            }, function (error) {
                alert('Could not retrieve a list of difficulty and body focus types');
            });
        }
        else if (training != undefined && difficulty == undefined && bodyfocus != undefined) {
            this.videoService.gettf(training, bodyfocus).subscribe(function (data) {
                _this.videos = data;
            }, function (error) {
                alert('Could not retrieve a list of training and body focus types');
            });
        }
        else {
            this.videoService.getcombine(training, difficulty, bodyfocus).subscribe(function (data) {
                _this.videos = data;
            }, function (error) {
                alert('Error');
            });
        }
    };
    ExerciseVideosDetailsComponent.prototype.gettd = function (training, difficulty) {
        var _this = this;
        this.videoService.gettd(training, difficulty).subscribe(function (data) {
            _this.videos = data;
        }, function (error) {
            alert('Could not retrieve a list of types');
        });
    };
    ExerciseVideosDetailsComponent.prototype.getdf = function (difficulty, focus) {
        var _this = this;
        this.videoService.gettd(difficulty, focus).subscribe(function (data) {
            _this.videos = data;
        }, function (error) {
            alert('Could not retrieve a list of types');
        });
    };
    ExerciseVideosDetailsComponent.prototype.gettf = function (training, focus) {
        var _this = this;
        this.videoService.gettd(training, focus).subscribe(function (data) {
            _this.videos = data;
        }, function (error) {
            alert('Could not retrieve a list of types');
        });
    };
    ExerciseVideosDetailsComponent.prototype.searchVideo = function (name) {
        var _this = this;
        this.videoService.searchVideo(name).subscribe(function (data) {
            _this.videos = data;
        }, function (error) {
            alert('No videos found');
        });
    };
    ExerciseVideosDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-exercise-videos-details',
            template: __webpack_require__(/*! ./exercise-videos-details.component.html */ "./src/app/exercise-videos-details/exercise-videos-details.component.html"),
            styles: [__webpack_require__(/*! ./exercise-videos-details.component.css */ "./src/app/exercise-videos-details/exercise-videos-details.component.css")]
        }),
        __metadata("design:paramtypes", [_exercisevideos_service__WEBPACK_IMPORTED_MODULE_0__["ExercisevideosService"],
            _exercisevideos_service__WEBPACK_IMPORTED_MODULE_0__["ExercisevideosService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _welcome_service__WEBPACK_IMPORTED_MODULE_4__["WelcomeService"]])
    ], ExerciseVideosDetailsComponent);
    return ExerciseVideosDetailsComponent;
}());



/***/ }),

/***/ "./src/app/exercise-videos/exercise-videos.component.css":
/*!***************************************************************!*\
  !*** ./src/app/exercise-videos/exercise-videos.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".jumbotron {\r\n    padding-top:2%;\r\n    padding-bottom: 3%;\r\n}\r\n\r\n.save-button{\r\n    font-family: 'Quicksand', sans-serif;\r\n    font-weight: 250;\r\n    position: absolute;\r\n    top: 325px;\r\n    left: 1110px;\r\n}\r\n\r\n.SavedVideoResults{\r\n    font-family: 'Quicksand', sans-serif;\r\n    font-weight: 250;\r\n    position: absolute;\r\n    top: 900px;\r\n    left: 350px;\r\n    width: 925px;\r\n    bottom: 100px;\r\n}\r\n\r\n.search-button{\r\n    font-family: 'Quicksand', sans-serif;\r\n    font-weight: 250;\r\n    position: absolute;\r\n    top: 325px;\r\n    left: 1000px;\r\n}\r\n\r\n.VideoResults{\r\n    font-family: 'Quicksand', sans-serif;\r\n    font-weight: 250;\r\n    position: absolute;\r\n    top: 380px;\r\n    left: 350px;\r\n    width: 925px;\r\n    bottom: 100px;\r\n}\r\n\r\n.sidenav {\r\n    font-family: 'Quicksand', sans-serif;\r\n    font-weight: 350;\r\n    position: absolute;\r\n    left: 25px;\r\n    top: 325px;\r\n    width: 300px;\r\n}\r\n\r\nh1 { \r\n    font-size: 2em;\r\n    font-weight: bold;\r\n}\r\n\r\nh2 {\r\n        display: block;\r\n        font-size: 1.5em;\r\n        font-weight: bold;\r\n}\r\n\r\n.Heading2 {\r\n    font-family: 'Quicksand', sans-serif;\r\n    font-size: 25px;\r\n    position: absolute;\r\n    left: 25px;\r\n    top: 260px;\r\n}\r\n\r\n.searchbar{\r\n    font-family: 'Quicksand', sans-serif;\r\n    font-weight: 350;\r\n    position: absolute;\r\n    top: 325px;\r\n    left: 350px;\r\n}\r\n\r\n.search-button{\r\n    position: absolute;\r\n    top: 325px;\r\n    left: 940px;\r\n    top: 318px;\r\n    left: 320px;\r\n}\r\n\r\n.new-button{\r\n    position: absolute;\r\n    top: 325px;\r\n    left: 1035px;\r\n}\r\n\r\n.page-button{\r\n    position: absolute;\r\n    top: 325px;\r\n    left: 1165px;\r\n}\r\n\r\n.workout-set1{\r\n    color: white;\r\n    position: absolute;\r\n    top: 380px;\r\n    left: 320px;\r\n}\r\n\r\n.workout-set2{\r\n    color:WHITE;\r\n    position: absolute;\r\n    top: 380px;\r\n    left: 650px;\r\n}\r\n\r\n.workout-set3{\r\n    color:WHITE;\r\n    position: absolute;\r\n    top: 380px;\r\n    left: 980px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhlcmNpc2UtdmlkZW9zL2V4ZXJjaXNlLXZpZGVvcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixZQUFZO0FBQ2hCOztBQUNBO0lBQ0ksb0NBQW9DO0lBQ3BDLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixVQUFVO0lBQ1YsWUFBWTtBQUNoQjs7QUFDQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7O0FBRUE7UUFDUSxjQUFjO1FBQ2QsZ0JBQWdCO1FBQ2hCLGlCQUFpQjtBQUN6Qjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixXQUFXO0lBQ1gsVUFBVTtJQUNWLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFdBQVc7QUFDZjs7QUFDQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2V4ZXJjaXNlLXZpZGVvcy9leGVyY2lzZS12aWRlb3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5qdW1ib3Ryb24ge1xyXG4gICAgcGFkZGluZy10b3A6MiU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMyU7XHJcbn1cclxuXHJcbi5zYXZlLWJ1dHRvbntcclxuICAgIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiAyNTA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDMyNXB4O1xyXG4gICAgbGVmdDogMTExMHB4O1xyXG59XHJcblxyXG4uU2F2ZWRWaWRlb1Jlc3VsdHN7XHJcbiAgICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCcsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogMjUwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA5MDBweDtcclxuICAgIGxlZnQ6IDM1MHB4O1xyXG4gICAgd2lkdGg6IDkyNXB4O1xyXG4gICAgYm90dG9tOiAxMDBweDtcclxufVxyXG5cclxuLnNlYXJjaC1idXR0b257XHJcbiAgICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCcsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogMjUwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAzMjVweDtcclxuICAgIGxlZnQ6IDEwMDBweDtcclxufVxyXG4uVmlkZW9SZXN1bHRze1xyXG4gICAgZm9udC1mYW1pbHk6ICdRdWlja3NhbmQnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDI1MDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMzgwcHg7XHJcbiAgICBsZWZ0OiAzNTBweDtcclxuICAgIHdpZHRoOiA5MjVweDtcclxuICAgIGJvdHRvbTogMTAwcHg7XHJcbn1cclxuXHJcbi5zaWRlbmF2IHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiAzNTA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAyNXB4O1xyXG4gICAgdG9wOiAzMjVweDtcclxuICAgIHdpZHRoOiAzMDBweDtcclxufVxyXG5oMSB7IFxyXG4gICAgZm9udC1zaXplOiAyZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuaDIge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5IZWFkaW5nMiB7XHJcbiAgICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCcsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAyNXB4O1xyXG4gICAgdG9wOiAyNjBweDtcclxufVxyXG5cclxuLnNlYXJjaGJhcntcclxuICAgIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiAzNTA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDMyNXB4O1xyXG4gICAgbGVmdDogMzUwcHg7XHJcbn1cclxuXHJcbi5zZWFyY2gtYnV0dG9ue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAzMjVweDtcclxuICAgIGxlZnQ6IDk0MHB4O1xyXG4gICAgdG9wOiAzMThweDtcclxuICAgIGxlZnQ6IDMyMHB4O1xyXG59XHJcblxyXG4ubmV3LWJ1dHRvbntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMzI1cHg7XHJcbiAgICBsZWZ0OiAxMDM1cHg7XHJcbn1cclxuXHJcbi5wYWdlLWJ1dHRvbntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMzI1cHg7XHJcbiAgICBsZWZ0OiAxMTY1cHg7XHJcbn1cclxuXHJcbi53b3Jrb3V0LXNldDF7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDM4MHB4O1xyXG4gICAgbGVmdDogMzIwcHg7XHJcbn1cclxuXHJcbi53b3Jrb3V0LXNldDJ7XHJcbiAgICBjb2xvcjpXSElURTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMzgwcHg7XHJcbiAgICBsZWZ0OiA2NTBweDtcclxufVxyXG4ud29ya291dC1zZXQze1xyXG4gICAgY29sb3I6V0hJVEU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDM4MHB4O1xyXG4gICAgbGVmdDogOTgwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/exercise-videos/exercise-videos.component.html":
/*!****************************************************************!*\
  !*** ./src/app/exercise-videos/exercise-videos.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\r\n        <figure><img src=\"assets/image/heart.png\" width=\"60\" height=\"60\"  class=\"mx-auto d-block\"></figure>\r\n        <h1 style=\"text-align:center\" class=\"display-4\">Health Goals</h1>\r\n</div>\r\n\r\n<p class = \"Heading2\"><b>Exercise Videos</b></p>\r\n\r\n<!-- Side navigation \r\n<div class=\"sidenav\">\r\n        <p-card header = \"Filter Results\">\r\n        <h5> Training Type </h5>\r\n            <p-checkbox name=\"trainingtype\" value=\"Strength Training\" label=\"Strength Training\" [(ngModel)] =\"selectedTraining\"> </p-checkbox>\r\n            <br>\r\n            <p-checkbox name=\"trainingtype\" value=\"HIIT\" label=\"HIIT\" [(ngModel)] =\"selectedTraining\" > </p-checkbox>\r\n            <br>\r\n            <p-checkbox name=\"trainingtype\" value=\"Low Impact\" label=\"Low Impact\" [(ngModel)] =\"selectedTraining\" > </p-checkbox>\r\n            <br>\r\n            <p-checkbox name=\"trainingtype\" value=\"Toning\" label=\"Toning\" [(ngModel)] =\"selectedTraining\" > </p-checkbox>\r\n            <br>\r\n            <p-checkbox name=\"trainingtype\" value=\"Warming/Cooldown\" label=\"Warm up /Cool down\"[(ngModel)] =\"selectedTraining\"> </p-checkbox>\r\n            <br>\r\n            <p-checkbox name=\"trainingtype\" value=\"Yoga\" label=\"Yoga\" [(ngModel)] =\"selectedTraining\" ></p-checkbox>\r\n            <br>\r\n            <p-checkbox name=\"trainingtype\" value=\"Cardiovascular\" label=\"Cardiovascular\" [(ngModel)] =\"selectedTraining\" > </p-checkbox>\r\n            <br>\r\n            <p-checkbox name=\"trainingtype\" value=\"Barre\" label=\"Barre\" [(ngModel)] =\"selectedTraining\"> </p-checkbox>\r\n            <br>\r\n            <p-checkbox name=\"trainingtype\" value=\"Plyometric\" label =\"Plyometric\"[(ngModel)] =\"selectedTraining\"> </p-checkbox>\r\n            <br>\r\n            <p-checkbox name=\"trainingtype\" value=\"Balance\" label=\"Balance / Agility\"  [(ngModel)] =\"selectedTraining\"> </p-checkbox>\r\n            <br>\r\n            <br>\r\n    \r\n        <h5> Difficulty </h5>\r\n            <p-checkbox name=\"difficulty\" value=\"1\" label=\"1\"  [(ngModel)] =\"selectedDifficulty\"> </p-checkbox>\r\n            <br>\r\n            <p-checkbox name=\"difficulty\" value=\"2\" label=\"2\"  [(ngModel)] =\"selectedDifficulty\"> </p-checkbox>\r\n            <br>\r\n            <p-checkbox name=\"difficulty\" value=\"3\" label=\"3\"  [(ngModel)] =\"selectedDifficulty\"> </p-checkbox>\r\n            <br>\r\n            <p-checkbox name=\"difficulty\" value=\"4\" label=\"4\"  [(ngModel)] =\"selectedDifficulty\"> </p-checkbox>\r\n            <br>\r\n            <p-checkbox name=\"difficulty\" value=\"5\" label=\"5\"  [(ngModel)] =\"selectedDifficulty\"> </p-checkbox>\r\n            <br>\r\n            <br>\r\n    \r\n        <h5> Body Focus </h5>\r\n        \r\n            <p-checkbox name=\"bodyfocus\" value=\"core\" label=\" Core \"   [(ngModel)] =\"selectedFocus\"> </p-checkbox>\r\n            <br>\r\n            <p-checkbox name=\"bodyfocus\" value=\"upper\" label=\" Upper \" [(ngModel)] =\"selectedFocus\"> </p-checkbox>\r\n            <br>\r\n            <p-checkbox name=\"bodyfocus\" value=\"lower\" label=\" Lower \" [(ngModel)] =\"selectedFocus\"> </p-checkbox>\r\n            <br>\r\n            <p-checkbox name=\"bodyfocus\" value=\"total\" label=\" Total \" [(ngModel)] =\"selectedFocus\"> </p-checkbox>\r\n            <br>\r\n            <br>\r\n            \r\n        <Save Button\r\n        <div class=\"save-button\"\r\n            <p-button label=\"Save\" (click) =\"getcombine(selectedTraining,selectedDifficulty,selectedFocus)\"></p-button>\r\n        </div>  \r\n        <br>\r\n\r\n         <-Clear Filters Button\r\n        <p-button label=\"Clear Filters\" id=\"searchButton\" (click) = \"getVideos()\"></p-button>\r\n    \r\n    </p-card>\r\n</div>-->\r\n\r\n<!-- Side navigation -->\r\n<div class=\"sidenav\">\r\n    <p-card header = \"Filter Results\">\r\n    <h5> Training Type </h5>\r\n        <p-checkbox name=\"trainingtype\" value=\"Strength Training\" label=\"Strength Training\" (click) =\"getTrainingType('Strength Training')\"> </p-checkbox>\r\n        <br>\r\n        <p-checkbox name=\"trainingtype\" value=\"HIIT\" label=\"HIIT\" (click) =\"getTrainingType('HIIT')\" > </p-checkbox>\r\n        <br>\r\n        <p-checkbox name=\"trainingtype\" value=\"Low Impact\" label=\"Low Impact\" (click) =\"getTrainingType('Low Impact')\" > </p-checkbox>\r\n        <br>\r\n        <p-checkbox name=\"trainingtype\" value=\"Toning\" label=\"Toning\" (click) =\"getTrainingType('Toning')\" > </p-checkbox>\r\n        <br>\r\n        <p-checkbox name=\"trainingtype\" value=\"Warming/Cooldown\" label=\"Warm up /Cool down\" (click) =\"getTrainingType('Warm')\"> </p-checkbox>\r\n        <br>\r\n        <p-checkbox name=\"trainingtype\" value=\"Yoga\" label=\"Yoga\" (click) =\"getTrainingType('Yoga')\" ></p-checkbox>\r\n        <br>\r\n        <p-checkbox name=\"trainingtype\" value=\"Cardiovascular\" label=\"Cardiovascular\" (click) =\"getTrainingType('Cardiovascular')\"> </p-checkbox>\r\n        <br>\r\n        <p-checkbox name=\"trainingtype\" value=\"Barre\" label=\"Barre\" (click) =\"getTrainingType('Barre')\"> </p-checkbox>\r\n        <br>\r\n        <p-checkbox name=\"trainingtype\" value=\"Plyometric\" label =\"Plyometric\"(click) =\"getTrainingType('Plyometric')\"> </p-checkbox>\r\n        <br>\r\n        <p-checkbox name=\"trainingtype\" value=\"Balance\" label=\"Balance / Agility\"  (click) =\"getTrainingType('Balance')\"> </p-checkbox>\r\n        <br>\r\n        <br>\r\n\r\n    <h5> Difficulty </h5>\r\n        <p-checkbox name=\"difficulty\" value=\"1\" label=\"1\"   (click) =\"getDifficultyLevel('1')\"> </p-checkbox>\r\n        <br>\r\n        <p-checkbox name=\"difficulty\" value=\"2\" label=\"2\"  (click) =\"getDifficultyLevel('2')\"> </p-checkbox>\r\n        <br>\r\n        <p-checkbox name=\"difficulty\" value=\"3\" label=\"3\"   (click) =\"getDifficultyLevel('3')\"> </p-checkbox>\r\n        <br>\r\n        <p-checkbox name=\"difficulty\" value=\"4\" label=\"4\"   (click) =\"getDifficultyLevel('4')\"> </p-checkbox>\r\n        <br>\r\n        <p-checkbox name=\"difficulty\" value=\"5\" label=\"5\"   (click) =\"getDifficultyLevel('5')\"> </p-checkbox>\r\n        <br>\r\n        <br>\r\n\r\n    <h5> Body Focus </h5>\r\n    \r\n        <p-checkbox name=\"bodyfocus\" value=\"core\" label=\" Core \"    (click) =\"getbodyfocus('Core')\"> </p-checkbox>\r\n        <br>\r\n        <p-checkbox name=\"bodyfocus\" value=\"upper\" label=\" Upper \"  (click) =\"getbodyfocus('Upper')\"> </p-checkbox>\r\n        <br>\r\n        <p-checkbox name=\"bodyfocus\" value=\"lower\" label=\" Lower \"  (click) =\"getbodyfocus('Lower')\"> </p-checkbox>\r\n        <br>\r\n        <p-checkbox name=\"bodyfocus\" value=\"total\" label=\" Total \" (click) =\"getbodyfocus('Total')\"> </p-checkbox>\r\n        <br>\r\n        <br>\r\n\r\n    <!-- Clear Filters Button -->     \r\n    <p-button label=\"Clear Filters\" id=\"searchButton\" (click) = \"getVideos()\"></p-button>\r\n\r\n</p-card>\r\n</div>\r\n\r\n<br>\r\n<div class=\"VideoResults\">\r\n        <p-carousel headerText = \"All Videos\" [value]=\"videos\">\r\n            <ng-template pTemplate =\"body\" let-video>\r\n                 <a routerLink = \"/exercise-videos/{{video.VideoName}}\">  \r\n                    <img src=\"{{video.ImageLink}}\" height=\"400\" width=\"320\">\r\n                 </a>\r\n        </ng-template>\r\n        </p-carousel>\r\n</div>\r\n<br>\r\n<div class=\"save-button\"><p-button *ngIf= \"loggedIn\" label=\"Show Saved Videos\" (click) =\"getSavedVideos(user.ID)\"></p-button></div>\r\n\r\n\r\n<div class=\"SavedVideoResults\">\r\n    \r\n    \r\n    <p-carousel *ngIf= \"loggedIn\" [value]=\"savedvideos\" numVisible=\"3\" headerText = \"Saved Videos\">\r\n        <ng-template pTemplate =\"body\" let-savedvideo>\r\n                <a routerLink = \"/exercise-videos/{{savedvideo.VideoName}}\"> {{savedvideo.VideoName}}\r\n                 </a>\r\n             \r\n        </ng-template>\r\n    </p-carousel>\r\n</div>\r\n\r\n    <!--Search Bar-->\r\n   \r\n    <div class=\"searchbar\">\r\n        <span class=\"ui-float-label\">\r\n          <input id=\"float-input\" type=\"text\" size=\"85\" pInputTextArea [(ngModel)] = \"input\" (keyup.enter) = \"searchVideo(input)\"> \r\n      </span>\r\n    </div>\r\n    <!--    <div class = \"search-button\">\r\n        <p-button label=\"Search\" (click) =\"saveVideo()\"></p-button>\r\n    </div>-->\r\n \r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/exercise-videos/exercise-videos.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/exercise-videos/exercise-videos.component.ts ***!
  \**************************************************************/
/*! exports provided: ExerciseVideosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExerciseVideosComponent", function() { return ExerciseVideosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _exercisevideos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../exercisevideos.service */ "./src/app/exercisevideos.service.ts");
/* harmony import */ var _welcome_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../welcome.service */ "./src/app/welcome.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ExerciseVideosComponent = /** @class */ (function () {
    function ExerciseVideosComponent(videoService, userService) {
        this.videoService = videoService;
        this.userService = userService;
        this.loggedIn = false;
        this.videoService.getDifficultyLevel(this.difficulty).subscribe(function (data) {
            console.log(data);
        });
        this.videoService.getTrainingType(this.trainingtype).subscribe(function (data) {
            console.log(data);
        });
        this.videoService.getbodyfocus(this.bodyfocus).subscribe(function (data) {
            console.log(data);
        });
    }
    ExerciseVideosComponent.prototype.ngOnInit = function () {
        this.trainingtype = undefined;
        this.training = undefined;
        this.difficulty = undefined;
        this.bodyfocus = undefined;
        this.getVideos();
        if (localStorage.getItem("loggedIn") == "true") {
            this.loggedIn = true;
            this.get_userdata(localStorage.getItem("ID"));
        }
        else {
            this.loggedIn = false;
            localStorage.clear();
            localStorage.setItem("loggedIn", "false");
        }
    };
    ExerciseVideosComponent.prototype.signInToSave = function () {
        alert('Please sign in to save this video');
    };
    ExerciseVideosComponent.prototype.get_userdata = function (ID) {
        var _this = this;
        this.userService.get_userdata(ID).subscribe(function (data) {
            _this.user = data;
        }, function (error) {
            alert("unable to get user data");
        });
    };
    ExerciseVideosComponent.prototype.getVideos = function () {
        var _this = this;
        // debugger;
        this.videoService.getVideos().subscribe(function (data) {
            _this.videos = data;
        }, function (error) {
            alert('Could not retrieve a list of videos');
        });
    };
    ExerciseVideosComponent.prototype.getSavedVideos = function (userID) {
        var _this = this;
        this.videoService.getSavedVideos(userID).subscribe(function (data) {
            _this.savedvideos = data;
            console.log(data);
        }, function (error) {
            alert('Could not retrieve a list of saved videos');
        });
    };
    ExerciseVideosComponent.prototype.getDifficultyLevel = function (difficulty) {
        var _this = this;
        this.videoService.getDifficultyLevel(difficulty).subscribe(function (data) {
            _this.videos = data;
        }, function (error) {
            alert('Could not retrieve a list of difficulties');
        });
    };
    ExerciseVideosComponent.prototype.getTrainingType = function (trainingtype) {
        var _this = this;
        this.videoService.getTrainingType(trainingtype).subscribe(function (data) {
            _this.videos = data;
        }, function (error) {
            alert('Could not retrieve a list of training types');
        });
    };
    ExerciseVideosComponent.prototype.getbodyfocus = function (bodyfocus) {
        var _this = this;
        this.videoService.getbodyfocus(bodyfocus).subscribe(function (data) {
            _this.videos = data;
        }, function (error) {
            alert('Could not retrieve a list of Body Focus types');
        });
    };
    ExerciseVideosComponent.prototype.getcombine = function (training, difficulty, bodyfocus) {
        var _this = this;
        if (training != undefined && difficulty == undefined && bodyfocus == undefined) {
            this.videoService.getTrainingType(training).subscribe(function (data) {
                _this.videos = data;
            }, function (error) {
                alert('Could not retrieve a list of training types');
            });
        }
        else if (training == undefined && difficulty != undefined && bodyfocus == undefined) {
            this.videoService.getDifficultyLevel(difficulty).subscribe(function (data) {
                _this.videos = data;
            }, function (error) {
                alert('Could not retrieve a list of difficulties');
            });
        }
        else if (training == undefined && difficulty == undefined && bodyfocus != undefined) {
            this.videoService.getbodyfocus(bodyfocus).subscribe(function (data) {
                _this.videos = data;
            }, function (error) {
                alert('Could not retrieve a list of Body Focus types');
            });
        }
        else if (training != undefined && difficulty != undefined && bodyfocus == undefined) {
            this.videoService.gettd(training, difficulty).subscribe(function (data) {
                _this.videos = data;
            }, function (error) {
                alert('Could not retrieve a list of training and difficulty types');
            });
        }
        else if (training == undefined && difficulty != undefined && bodyfocus != undefined) {
            this.videoService.getdf(difficulty, bodyfocus).subscribe(function (data) {
                _this.videos = data;
            }, function (error) {
                alert('Could not retrieve a list of difficulty and body focus types');
            });
        }
        else if (training != undefined && difficulty == undefined && bodyfocus != undefined) {
            this.videoService.gettf(training, bodyfocus).subscribe(function (data) {
                _this.videos = data;
            }, function (error) {
                alert('Could not retrieve a list of training and body focus types');
            });
        }
        else {
            this.videoService.getcombine(training, difficulty, bodyfocus).subscribe(function (data) {
                _this.videos = data;
            }, function (error) {
                alert('Error');
            });
        }
    };
    ExerciseVideosComponent.prototype.gettd = function (training, difficulty) {
        var _this = this;
        this.videoService.gettd(training, difficulty).subscribe(function (data) {
            _this.videos = data;
        }, function (error) {
            alert('Could not retrieve a list of types');
        });
    };
    ExerciseVideosComponent.prototype.getdf = function (difficulty, focus) {
        var _this = this;
        this.videoService.gettd(difficulty, focus).subscribe(function (data) {
            _this.videos = data;
        }, function (error) {
            alert('Could not retrieve a list of types');
        });
    };
    ExerciseVideosComponent.prototype.gettf = function (training, focus) {
        var _this = this;
        this.videoService.gettd(training, focus).subscribe(function (data) {
            _this.videos = data;
        }, function (error) {
            alert('Could not retrieve a list of types');
        });
    };
    ExerciseVideosComponent.prototype.searchVideo = function (name) {
        var _this = this;
        this.videoService.searchVideo(name).subscribe(function (data) {
            _this.videos = data;
        }, function (error) {
            alert('No videos found');
        });
    };
    ExerciseVideosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-exercise-videos',
            template: __webpack_require__(/*! ./exercise-videos.component.html */ "./src/app/exercise-videos/exercise-videos.component.html"),
            styles: [__webpack_require__(/*! ./exercise-videos.component.css */ "./src/app/exercise-videos/exercise-videos.component.css")]
        }),
        __metadata("design:paramtypes", [_exercisevideos_service__WEBPACK_IMPORTED_MODULE_1__["ExercisevideosService"],
            _welcome_service__WEBPACK_IMPORTED_MODULE_2__["WelcomeService"]])
    ], ExerciseVideosComponent);
    return ExerciseVideosComponent;
}());



/***/ }),

/***/ "./src/app/exercisevideos.service.ts":
/*!*******************************************!*\
  !*** ./src/app/exercisevideos.service.ts ***!
  \*******************************************/
/*! exports provided: ExercisevideosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExercisevideosService", function() { return ExercisevideosService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ExercisevideosService = /** @class */ (function () {
    function ExercisevideosService(http) {
        this.http = http;
    }
    ExercisevideosService.prototype.saveVideo = function (videoname, user) {
        return this.http.get('/api/SaveVideo/' + videoname + '/' + user);
    };
    ExercisevideosService.prototype.getSavedVideos = function (userid) {
        return this.http.get('/api/savedvideos/' + userid);
    };
    ExercisevideosService.prototype.getVideos = function () {
        return this.http.get('/api/videos');
    };
    ExercisevideosService.prototype.getDifficultyLevel = function (difficulty) {
        return this.http.get('/api/difficulty/' + difficulty);
    };
    ExercisevideosService.prototype.getTrainingType = function (trainingtype) {
        return this.http.get('/api/trainingtype/' + trainingtype);
    };
    ExercisevideosService.prototype.getbodyfocus = function (bodyfocus) {
        return this.http.get('/api/bodyfocus/' + bodyfocus);
    };
    ExercisevideosService.prototype.getcombine = function (training, difficulty, bodyfocus) {
        return this.http.get('/api/combine/' + training + "/" + difficulty + "/" + bodyfocus);
    };
    ExercisevideosService.prototype.gettd = function (training, difficulty) {
        return this.http.get('/api/combine/' + training + "/" + difficulty);
    };
    ExercisevideosService.prototype.getdf = function (difficulty, focus) {
        return this.http.get('/api/combine/' + difficulty + "/" + focus);
    };
    ExercisevideosService.prototype.gettf = function (training, focus) {
        return this.http.get('/api/combine/' + training + "/" + focus);
    };
    ExercisevideosService.prototype.searchVideo = function (name) {
        return this.http.get('/api/SearchVideos/' + name);
    };
    ExercisevideosService.prototype.findvideo = function (video) {
        return this.http.get('/api/videos/' + video);
    };
    ExercisevideosService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ExercisevideosService);
    return ExercisevideosService;
}());



/***/ }),

/***/ "./src/app/find-instructors.service.ts":
/*!*********************************************!*\
  !*** ./src/app/find-instructors.service.ts ***!
  \*********************************************/
/*! exports provided: FindInstructorsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindInstructorsService", function() { return FindInstructorsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FindInstructorsService = /** @class */ (function () {
    function FindInstructorsService(http) {
        this.http = http;
    }
    FindInstructorsService.prototype.getInstructor = function () {
        return this.http.get('/api/instructors');
    };
    FindInstructorsService.prototype.findInstructor = function (name) {
        return this.http.get('/api/instructors/' + name);
    };
    FindInstructorsService.prototype.getName = function (name) {
        return this.http.get('/api/name/' + name);
    };
    FindInstructorsService.prototype.getAddress = function (address) {
        return this.http.get('/api/address/' + address);
    };
    FindInstructorsService.prototype.getZip = function (zip) {
        return this.http.get('/api/zip/' + zip);
    };
    FindInstructorsService.prototype.getPhone = function (phone) {
        return this.http.get('/api/phone/' + phone);
    };
    FindInstructorsService.prototype.getTags = function (tags) {
        return this.http.get('/api/tags/' + tags);
    };
    FindInstructorsService.prototype.getImage = function (image_URL) {
        return this.http.get('/api/image/' + image_URL);
    };
    FindInstructorsService.prototype.getAbout = function (about) {
        return this.http.get('/api/about/' + about);
    };
    FindInstructorsService.prototype.getRates = function (rates) {
        return this.http.get('/api/rates/' + rates);
    };
    FindInstructorsService.prototype.getCertifications = function (certifications) {
        return this.http.get('/api/certifications/' + certifications);
    };
    FindInstructorsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], FindInstructorsService);
    return FindInstructorsService;
}());



/***/ }),

/***/ "./src/app/find-therapist.service.ts":
/*!*******************************************!*\
  !*** ./src/app/find-therapist.service.ts ***!
  \*******************************************/
/*! exports provided: FindTherapistService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindTherapistService", function() { return FindTherapistService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FindTherapistService = /** @class */ (function () {
    function FindTherapistService(http) {
        this.http = http;
        this.d = new Date();
        this.today = this.d.getUTCFullYear() + '-' + this.d.getUTCMonth() + '-' + this.d.getUTCDate();
        this._url = 'https://api.betterdoctor.com';
        this.app_key = '2bd6df991f4d47275948ff4ece06e299';
        this.x = document.getElementById("demo");
    }
    FindTherapistService.prototype.getLocation = function () {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.showPosition);
        }
        else {
            this.x.innerHTML = "Geolocation is not supported by this browser.";
        }
    };
    FindTherapistService.prototype.showPosition = function (position) {
        this.x.innerHTML = position.coords.latitude + ", " + position.coords.longitude;
    };
    FindTherapistService.prototype.getTherapist = function () {
        var _url = this._url + '/' + '2016-03-01' + '/doctors?specialty_uid=professional-counselor%2Cpsychiatrist%2Cmental-health-counselor&location=' + '40.5194845,-74.4556964' + ',100&skip=0&limit=100&user_key=' + this.app_key;
        console.log(encodeURI('https://api.betterdoctor.com/2016-03-01/doctors?specialty_uid=professional-counselor,psychiatrist,mental-health-counselor&location=34.052235,-118.243683,100&skip=2&limit=10&user_key=2bd6df991f4d47275948ff4ece06e299'));
        return this.http.get(encodeURI('https://api.betterdoctor.com/2016-03-01/doctors?specialty_uid=professional-counselor,psychiatrist,mental-health-counselor,addiction-counselor,adult-psychologist,clinical-child-psychologist,mental-retardation-psychologists,medical-psychologist,group-psychotherapy-psychologist,health-service-psychologist,cognitive-behavioral-psychologist,psychologist,addiction-psychologist,health-psychologist,family-psychologist,occupational-therapist,occupational-therapist-environmental-modification,recreation-therapist,&location=40.5194742,-74.4558448,100&skip=2&limit=50&user_key=2bd6df991f4d47275948ff4ece06e299'))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorHandler));
    };
    FindTherapistService.prototype.getonlyTherapists = function () {
        var my_url = 'https://api.betterdoctor.com/2016-03-01/doctors?specialty_uid=occupational-therapist%2Coccupational-therapist-environmental-modification%2Crecreation-therapist&location=40.5194742%2C-74.4558448%2C100&user_location=40.5194742%2C-74.4558448&skip=0&limit=100&user_key=09fd788402c043185e2d8aa505cb01ff';
        console.log(my_url);
        debugger;
        return this.http.get(my_url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorHandler));
    };
    FindTherapistService.prototype.getonlyPsychologists = function () {
        var my_url = "https://api.betterdoctor.com/2016-03-01/doctors?specialty_uid=adult-psychologist%2Cclinical-child-psychologist%2Cmental-retardation-psychologists%2Cmedical-psychologist%2Cgroup-psychotherapy-psychologist%2Chealth-service-psychologist%2Ccognitive-behavioral-psychologist%2Cpsychologist%2Caddiction-psychologist%2Chealth-psychologist%2Cfamily-psychologist&location=40.5194742%2C-74.4558448%2C100&user_location=40.5194742%2C-74.4558448&skip=0&limit=100&user_key=1acf4fc370a08033a801b6bad1cd40d2";
        console.log(my_url);
        return this.http.get(my_url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorHandler));
    };
    FindTherapistService.prototype.getonlyPsychiatrist = function () {
        var my_url = "https://api.betterdoctor.com/2016-03-01/doctors?specialty_uid=psychiatrist&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=100&user_key=4148c5f0b800ddd4a9cafd0822547a88";
        return this.http.get(my_url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorHandler));
    };
    FindTherapistService.prototype.getonlyCounselors = function () {
        var my_url = "https://api.betterdoctor.com/2016-03-01/doctors?specialty_uid=professional-counselor%2Cmental-health-counselor%2Caddiction-counselor&location=37.773%2C-122.413%2C100&user_location=40.5194742%2C-74.4558448&skip=0&limit=100&user_key=3d2523a7d9df82fbaa616ddc952ccc34";
        return this.http.get(my_url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorHandler));
    };
    FindTherapistService.prototype.getCombined = function () {
        var my_url = "";
        return this.http.get(my_url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorHandler));
    };
    FindTherapistService.prototype.errorHandler = function (error) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error.error);
    };
    FindTherapistService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], FindTherapistService);
    return FindTherapistService;
}());



/***/ }),

/***/ "./src/app/find-therapist/find-therapist.component.css":
/*!*************************************************************!*\
  !*** ./src/app/find-therapist/find-therapist.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".Filter-Results {\r\n    font-family: 'Quicksand', sans-serif;\r\n    font-weight: 350;\r\n    position: absolute;\r\n    top: 330px;\r\n    left: 25px;\r\n    width: 200px;\r\n}\r\nimg{\r\n    border-radius: 50%;\r\n}\r\nh1 { \r\n    font-size: 2em;\r\n    font-weight: bold;\r\n}\r\nh2 {\r\n        display: block;\r\n        font-size: 1.5em;\r\n        font-weight: bold;\r\n}\r\n.Heading2 {\r\n    font-family: 'Quicksand', sans-serif;\r\n    font-size: 25px;\r\n    position: absolute;\r\n    left: 25px;\r\n    top: 260px;\r\n}\r\n.jumbotron {\r\n    padding-top: 2%;\r\n    padding-bottom: 2%;\r\n}\r\n.Search-Bar {\r\n    font-family: 'Quicksand', sans-serif;\r\n    font-weight: 350;\r\n    position: absolute;\r\n    top: 200px;\r\n    left: 215px;\r\n}\r\n.Search-Button {\r\n    font-family: 'Quicksand', sans-serif;\r\n    font-weight: 350;\r\n    position: absolute;\r\n    top: 200px;\r\n    left: 735px;\r\n}\r\n.Search-Results {\r\n    font-family: 'Quicksand', sans-serif;\r\n    font-weight: 350;\r\n    position: absolute;\r\n    top: 287px;\r\n    left: 255px;\r\n    width: 925px;\r\n}\r\n.Search-Results li {\r\n    cursor: pointer;\r\n    position: relative;\r\n    left: 215px;\r\n    background-color: #EEE;\r\n    margin: .5em;\r\n\r\n}\r\n.Search-Results li.selected:hover{\r\n    background-color: #BBD8DC !important;\r\n    color: white;\r\n}\r\n.Search-Results li:hover{\r\n    color: #607D8B;\r\n    background-color: #DDD;\r\n    left: 215px;\r\n}\r\n.Search-Results .text{\r\n    position: relative;\r\n    top: -3px;\r\n}\r\n.Search-Row-Info {\r\n    position: relative;\r\n    left: 235px;\r\n    top: -185px;\r\n    min-height: 180px;\r\n    margin-bottom: -150px;\r\n    margin-right: 235px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmluZC10aGVyYXBpc3QvZmluZC10aGVyYXBpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9DQUFvQztJQUNwQyxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixVQUFVO0lBQ1YsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0FBQ3JCO0FBRUE7UUFDUSxjQUFjO1FBQ2QsZ0JBQWdCO1FBQ2hCLGlCQUFpQjtBQUN6QjtBQUNBO0lBQ0ksb0NBQW9DO0lBQ3BDLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFVBQVU7QUFDZDtBQUNBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFdBQVc7QUFDZjtBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFdBQVc7QUFDZjtBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsWUFBWTs7QUFFaEI7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxZQUFZO0FBQ2hCO0FBRUE7SUFDSSxjQUFjO0lBQ2Qsc0JBQXNCO0lBQ3RCLFdBQVc7QUFDZjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7QUFDYjtBQUdBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9maW5kLXRoZXJhcGlzdC9maW5kLXRoZXJhcGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLkZpbHRlci1SZXN1bHRzIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiAzNTA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDMzMHB4O1xyXG4gICAgbGVmdDogMjVweDtcclxuICAgIHdpZHRoOiAyMDBweDtcclxufVxyXG5pbWd7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuaDEgeyBcclxuICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbmgyIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5IZWFkaW5nMiB7XHJcbiAgICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCcsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAyNXB4O1xyXG4gICAgdG9wOiAyNjBweDtcclxufVxyXG4uanVtYm90cm9uIHtcclxuICAgIHBhZGRpbmctdG9wOiAyJTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyJTtcclxufVxyXG5cclxuLlNlYXJjaC1CYXIge1xyXG4gICAgZm9udC1mYW1pbHk6ICdRdWlja3NhbmQnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDM1MDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMjAwcHg7XHJcbiAgICBsZWZ0OiAyMTVweDtcclxufVxyXG5cclxuLlNlYXJjaC1CdXR0b24ge1xyXG4gICAgZm9udC1mYW1pbHk6ICdRdWlja3NhbmQnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDM1MDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMjAwcHg7XHJcbiAgICBsZWZ0OiA3MzVweDtcclxufVxyXG5cclxuLlNlYXJjaC1SZXN1bHRzIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiAzNTA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDI4N3B4O1xyXG4gICAgbGVmdDogMjU1cHg7XHJcbiAgICB3aWR0aDogOTI1cHg7XHJcbn1cclxuXHJcbi5TZWFyY2gtUmVzdWx0cyBsaSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiAyMTVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFRUU7XHJcbiAgICBtYXJnaW46IC41ZW07XHJcblxyXG59XHJcblxyXG4uU2VhcmNoLVJlc3VsdHMgbGkuc2VsZWN0ZWQ6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQkJEOERDICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5TZWFyY2gtUmVzdWx0cyBsaTpob3ZlcntcclxuICAgIGNvbG9yOiAjNjA3RDhCO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0RERDtcclxuICAgIGxlZnQ6IDIxNXB4O1xyXG59XHJcblxyXG4uU2VhcmNoLVJlc3VsdHMgLnRleHR7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IC0zcHg7XHJcbn1cclxuXHJcblxyXG4uU2VhcmNoLVJvdy1JbmZvIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IDIzNXB4O1xyXG4gICAgdG9wOiAtMTg1cHg7XHJcbiAgICBtaW4taGVpZ2h0OiAxODBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IC0xNTBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMjM1cHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/find-therapist/find-therapist.component.html":
/*!**************************************************************!*\
  !*** ./src/app/find-therapist/find-therapist.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\r\n  <figure><img src=\"assets/image/heart.png\" width=\"60\" height=\"60\"  class=\"mx-auto d-block\"></figure>\r\n  <h1 style=\"text-align:center\" class=\"display-4\">Health Goals</h1>\r\n</div>\r\n\r\n<p class = \"Heading2\"><b>Find a Therapist!</b></p>\r\n\r\n<div class=\"Filter-Results\">\r\n        \r\n  <p-card header=\"Filter Results\" subheader=\"Treatment Type\">\r\n      <font style=\"font-weight: normal;\">\r\n        <div onmouseover=\"this.style.fontWeight='bold'\" onmouseout=\"this.style.fontWeight='normal'\">\r\n      <p-checkbox name=\"treatmenttype\" value=\"Therapy\" label=\"Therapy\" (click)=\"getonlyTherapists()\" [(ngModel)]=\"thera\" binary=\"true\"></p-checkbox>\r\n      </div>\r\n      <div onmouseover=\"this.style.fontWeight='bold'\" onmouseout=\"this.style.fontWeight='normal'\">\r\n      <p-checkbox name=\"treatmenttype\" value=\"Psychiatrist\" label=\"Psychiatrist\" (click)=\"getonlyPsychiatrists()\" [(ngModel)]=\"psych\" binary=\"true\"></p-checkbox>\r\n      </div>\r\n      <div onmouseover=\"this.style.fontWeight='bold'\" onmouseout=\"this.style.fontWeight='normal'\">\r\n      <p-checkbox name=\"treatmenttype\" value=\"psychologist\" label=\"Psychology\" (click)=\"getonlyPsychologists()\" [(ngModel)]=\"psychologis\" binary=\"true\"></p-checkbox>\r\n      </div>\r\n      <div onmouseover=\"this.style.fontWeight='bold'\" onmouseout=\"this.style.fontWeight='normal'\">\r\n      <p-checkbox name=\"treatmenttype\" value=\"counselor\" label=\"Counseling\" (click)=\"getonlyCounselors()\" [(ngModel)]=\"coun\" binary=\"true\"></p-checkbox>\r\n      </div>\r\n      <br>\r\n      <button type=\"button\" (click) = \"resetFilter()\" pButton label=\"Reset Filter\" class = \"reset-filter\"></button>\r\n  \r\n      \r\n      <!--<font color=\"grey\"><b>Duration</b></font>\r\n      <br/>\r\n      <br/>\r\n      <p-checkbox name=\"duration\" value=\"shortterm\" label=\"Short Term\"></p-checkbox>\r\n      <!–– <br/>\r\n      <!–– <br/>\r\n      &nbsp;\r\n      <p-checkbox name=\"duration\" value=\"longterm\" label=\"Long Term\"></p-checkbox>\r\n      <br/>\r\n      <br/>\r\n\r\n      <font color=\"grey\"><b>Other Specifications</b></font>\r\n      <br/>\r\n      <br/>\r\n      <p-checkbox name=\"otherspecifications\" value=\"LGBTQ\" label=\"LGBTQ+ Friendly\"></p-checkbox>\r\n      <br/>\r\n      <br/>-->\r\n</font>\r\n  </p-card>\r\n</div>\r\n\r\n<div class=\"Search-Button\">\r\n  <p-button label=\"Search\" id=\"searchButton\" style=\"display: none;\"></p-button>\r\n</div>\r\n\r\n<div class=\"Search-Results\">\r\n    <ng-container *ngIf=\"error == null\">\r\n                <img src=\"{{ this.imageURL }}\">\r\n    </ng-container>\r\n    <br>\r\n    <p-toast *ngIf=\"error !== null\" position=\"center\">{{ error }}</p-toast>\r\n    <br>\r\n\r\n    <p-dataView [value]=\"therapistResults\"  [loading]=\"loading\" [paginator]=\"true\" [rows]=\"5\" paginatorPosition=\"both\">\r\n        <ng-template let-res pTemplate=\"listItem\">\r\n        <a routerLink=\"/find-therapist/{{res.npi}}\" style=\"text-decoration: none;\">\r\n            <div id=\"Search-row\"  >\r\n                \r\n                    <div>\r\n                        <img src={{res.imageURL}} height=\"180\" width=\"190\">\r\n                    </div>\r\n                \r\n\r\n                <div class=\"Search-Row-Info\" style=\"color: black; text-decoration: none\">\r\n                    <div>\r\n                        <font size=\"6\">\r\n                            <strong>\r\n                                {{ res.fname}} {{res.mname}} {{res.lname}}\r\n                                </strong>\r\n                        </font>\r\n                    </div>\r\n                    <div>\r\n                        <font size=\"3\">\r\n                            {{ res.address}}, {{res.city}}, {{res.state}}, {{res.zip}}\r\n\r\n                        </font>\r\n                    </div>\r\n                    <div>\r\n                        <font size=\"3\">\r\n                            Phone Number: {{ res.number }}\r\n                        </font>\r\n                    </div>\r\n                    <br>\r\n                    <div>\r\n                        <font size=\"1.5\">\r\n                           Specialty: {{res.specialties}}\r\n                           <br>\r\n                           {{res.s_description}}\r\n                        </font>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </a>\r\n        </ng-template>\r\n    </p-dataView>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/find-therapist/find-therapist.component.ts":
/*!************************************************************!*\
  !*** ./src/app/find-therapist/find-therapist.component.ts ***!
  \************************************************************/
/*! exports provided: FindTherapistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindTherapistComponent", function() { return FindTherapistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _find_therapist_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../find-therapist.service */ "./src/app/find-therapist.service.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FindTherapistComponent = /** @class */ (function () {
    function FindTherapistComponent(findTherapistService, messageService) {
        this.findTherapistService = findTherapistService;
        this.messageService = messageService;
        this.error = null;
        this.findTherapistService.getonlyTherapists().subscribe(function (obj) {
            console.log(obj);
        });
        this.findTherapistService.getonlyPsychiatrist().subscribe(function (obj) {
            console.log(obj);
        });
        this.findTherapistService.getonlyPsychologists().subscribe(function (obj) {
            console.log(obj);
        });
        this.findTherapistService.getonlyCounselors().subscribe(function (obj) {
            console.log(obj);
        });
    }
    FindTherapistComponent.prototype.ngOnInit = function () {
        this.TherapistLocation();
    };
    FindTherapistComponent.prototype.TherapistLocation = function () {
        var _this = this;
        this.findTherapistService.getTherapist().subscribe(function (obj) {
            var str = JSON.stringify(obj);
            var output = [];
            str.substring(str.indexOf('\"profile\":') + 12, str.length - 1).split('\"profile\":').forEach(function (therapist) {
                var T = {};
                T.fname = therapist.substring(therapist.indexOf('\"first_name\":') + 14, therapist.indexOf('\"', therapist.indexOf('\"first_name\"') + 14));
                T.mname = therapist.substring(therapist.indexOf('\"middle_name\":') + 15, therapist.indexOf('\"', therapist.indexOf('\"middle_name\"') + 15)).replace('achael', '');
                T.lname = therapist.substring(therapist.indexOf('\"last_name\":') + 13, therapist.indexOf('\"', therapist.indexOf('\"last_name\"') + 13));
                T.title = therapist.substring(therapist.indexOf('\"title\":') + 9, therapist.indexOf('\"', therapist.indexOf('\"title\"') + 9));
                T.imageURL = therapist.substring(therapist.indexOf('\"image_url\":') + 13, therapist.indexOf('\"', therapist.indexOf('\"image_url\"') + 13));
                T.gender = therapist.substring(therapist.indexOf('\"gender\":') + 10, therapist.indexOf('\"', therapist.indexOf('\"gender\"') + 10));
                T.bio = therapist.substring(therapist.indexOf('\"bio\":') + 7, therapist.indexOf('\"', therapist.indexOf('\"bio\"') + 7));
                T.state = therapist.substring(therapist.indexOf('\"state_long\":') + 14, therapist.indexOf('\"', therapist.indexOf('\"state_long\"') + 14));
                T.address = therapist.substring(therapist.indexOf('\"street\":') + 10, therapist.indexOf('\"', therapist.indexOf('\"street\"') + 10));
                T.number = therapist.substring(therapist.indexOf('\"phones\"') + 21, therapist.indexOf('\"', therapist.indexOf('\"phones\"') + 21));
                T.zip = therapist.substring(therapist.indexOf('\"zip\"') + 7, therapist.indexOf('\"', therapist.indexOf('\"zip\"') + 7));
                T.city = therapist.substring(therapist.indexOf('\"city\"') + 8, therapist.indexOf('\"', therapist.indexOf('\"city\"') + 8));
                T.npi = therapist.substring(therapist.indexOf('\"npi\"') + 7, therapist.indexOf('\"', therapist.indexOf('\"npi\"') + 7));
                therapist.substring(therapist.indexOf('\"specialties\":') + 16, therapist.length - 1).split('\"specialties\":').forEach(function (therapist) {
                    T.specialties = therapist.substring(therapist.indexOf('\"name\":') + 8, therapist.indexOf('\"', therapist.indexOf('\"name\"') + 8));
                    T.s_description = therapist.substring(therapist.indexOf('\"description\":') + 15, therapist.indexOf('\"', therapist.indexOf('\"description\"') + 15));
                });
                output.push(T);
            });
            _this.therapistResults = output;
        }, function (error) {
            console.error(error);
            _this.error = error;
            _this.messageService.add({ severity: 'error', summary: _this.error, life: 5000, detail: 'Search Failed' });
        });
    };
    FindTherapistComponent.prototype.getonlyTherapists = function () {
        var _this = this;
        this.findTherapistService.getonlyTherapists().subscribe(function (obj) {
            var str = JSON.stringify(obj);
            var output = [];
            str.substring(str.indexOf('\"profile\":') + 12, str.length - 1).split('\"profile\":').forEach(function (therapist) {
                var T = {};
                T.fname = therapist.substring(therapist.indexOf('\"first_name\":') + 14, therapist.indexOf('\"', therapist.indexOf('\"first_name\"') + 14));
                T.mname = therapist.substring(therapist.indexOf('\"middle_name\":') + 15, therapist.indexOf('\"', therapist.indexOf('\"middle_name\"') + 15)).replace('achael', '');
                T.lname = therapist.substring(therapist.indexOf('\"last_name\":') + 13, therapist.indexOf('\"', therapist.indexOf('\"last_name\"') + 13));
                T.title = therapist.substring(therapist.indexOf('\"title\":') + 9, therapist.indexOf('\"', therapist.indexOf('\"title\"') + 9));
                T.imageURL = therapist.substring(therapist.indexOf('\"image_url\":') + 13, therapist.indexOf('\"', therapist.indexOf('\"image_url\"') + 13));
                T.gender = therapist.substring(therapist.indexOf('\"gender\":') + 10, therapist.indexOf('\"', therapist.indexOf('\"gender\"') + 10));
                T.bio = therapist.substring(therapist.indexOf('\"bio\":') + 7, therapist.indexOf('\"', therapist.indexOf('\"bio\"') + 7));
                T.state = therapist.substring(therapist.indexOf('\"state_long\":') + 14, therapist.indexOf('\"', therapist.indexOf('\"state_long\"') + 14));
                T.address = therapist.substring(therapist.indexOf('\"street\":') + 10, therapist.indexOf('\"', therapist.indexOf('\"street\"') + 10));
                T.number = therapist.substring(therapist.indexOf('\"phones\"') + 21, therapist.indexOf('\"', therapist.indexOf('\"phones\"') + 21));
                T.zip = therapist.substring(therapist.indexOf('\"zip\"') + 7, therapist.indexOf('\"', therapist.indexOf('\"zip\"') + 7));
                T.city = therapist.substring(therapist.indexOf('\"city\"') + 8, therapist.indexOf('\"', therapist.indexOf('\"city\"') + 8));
                T.npi = therapist.substring(therapist.indexOf('\"npi\"') + 7, therapist.indexOf('\"', therapist.indexOf('\"npi\"') + 7));
                therapist.substring(therapist.indexOf('\"specialties\":') + 16, therapist.length - 1).split('\"specialties\":').forEach(function (therapist) {
                    T.specialties = therapist.substring(therapist.indexOf('\"name\":') + 8, therapist.indexOf('\"', therapist.indexOf('\"name\"') + 8));
                    T.s_description = therapist.substring(therapist.indexOf('\"description\":') + 15, therapist.indexOf('\"', therapist.indexOf('\"description\"') + 15));
                });
                output.push(T);
            });
            _this.therapistResults = output;
        }, function (error) {
            console.error(error);
            _this.error = error;
            _this.messageService.add({ severity: 'error', summary: _this.error, life: 5000, detail: 'Search Failed' });
        });
    };
    FindTherapistComponent.prototype.getonlyPsychologists = function () {
        var _this = this;
        this.findTherapistService.getonlyPsychologists().subscribe(function (obj) {
            var str = JSON.stringify(obj);
            var output = [];
            str.substring(str.indexOf('\"profile\":') + 12, str.length - 1).split('\"profile\":').forEach(function (therapist) {
                var T = {};
                T.fname = therapist.substring(therapist.indexOf('\"first_name\":') + 14, therapist.indexOf('\"', therapist.indexOf('\"first_name\"') + 14));
                T.mname = therapist.substring(therapist.indexOf('\"middle_name\":') + 15, therapist.indexOf('\"', therapist.indexOf('\"middle_name\"') + 15));
                T.lname = therapist.substring(therapist.indexOf('\"last_name\":') + 13, therapist.indexOf('\"', therapist.indexOf('\"last_name\"') + 13));
                T.title = therapist.substring(therapist.indexOf('\"title\":') + 9, therapist.indexOf('\"', therapist.indexOf('\"title\"') + 9));
                T.imageURL = therapist.substring(therapist.indexOf('\"image_url\":') + 13, therapist.indexOf('\"', therapist.indexOf('\"image_url\"') + 13));
                T.gender = therapist.substring(therapist.indexOf('\"gender\":') + 10, therapist.indexOf('\"', therapist.indexOf('\"gender\"') + 10));
                T.bio = therapist.substring(therapist.indexOf('\"bio\":') + 7, therapist.indexOf('\"', therapist.indexOf('\"bio\"') + 7));
                T.state = therapist.substring(therapist.indexOf('\"state_long\":') + 14, therapist.indexOf('\"', therapist.indexOf('\"state_long\"') + 14));
                T.address = therapist.substring(therapist.indexOf('\"street\":') + 10, therapist.indexOf('\"', therapist.indexOf('\"street\"') + 10));
                T.number = therapist.substring(therapist.indexOf('\"phones\"') + 21, therapist.indexOf('\"', therapist.indexOf('\"phones\"') + 21));
                T.zip = therapist.substring(therapist.indexOf('\"zip\"') + 7, therapist.indexOf('\"', therapist.indexOf('\"zip\"') + 7));
                T.city = therapist.substring(therapist.indexOf('\"city\"') + 8, therapist.indexOf('\"', therapist.indexOf('\"city\"') + 8));
                T.npi = therapist.substring(therapist.indexOf('\"npi\"') + 7, therapist.indexOf('\"', therapist.indexOf('\"npi\"') + 7));
                therapist.substring(therapist.indexOf('\"specialties\":') + 16, therapist.length - 1).split('\"specialties\":').forEach(function (therapist) {
                    T.specialties = therapist.substring(therapist.indexOf('\"name\":') + 8, therapist.indexOf('\"', therapist.indexOf('\"name\"') + 8));
                    T.s_description = therapist.substring(therapist.indexOf('\"description\":') + 15, therapist.indexOf('\"', therapist.indexOf('\"description\"') + 15));
                });
                output.push(T);
            });
            _this.therapistResults = output;
        }, function (error) {
            console.error(error);
            _this.error = error;
            _this.messageService.add({ severity: 'error', summary: _this.error, life: 5000, detail: 'Search Failed' });
        });
    };
    FindTherapistComponent.prototype.getonlyCounselors = function () {
        var _this = this;
        this.findTherapistService.getonlyCounselors().subscribe(function (obj) {
            var str = JSON.stringify(obj);
            var output = [];
            str.substring(str.indexOf('\"profile\":') + 12, str.length - 1).split('\"profile\":').forEach(function (therapist) {
                var T = {};
                T.fname = therapist.substring(therapist.indexOf('\"first_name\":') + 14, therapist.indexOf('\"', therapist.indexOf('\"first_name\"') + 14));
                T.mname = therapist.substring(therapist.indexOf('\"middle_name\":') + 15, therapist.indexOf('\"', therapist.indexOf('\"middle_name\"') + 15));
                T.lname = therapist.substring(therapist.indexOf('\"last_name\":') + 13, therapist.indexOf('\"', therapist.indexOf('\"last_name\"') + 13));
                T.title = therapist.substring(therapist.indexOf('\"title\":') + 9, therapist.indexOf('\"', therapist.indexOf('\"title\"') + 9));
                T.imageURL = therapist.substring(therapist.indexOf('\"image_url\":') + 13, therapist.indexOf('\"', therapist.indexOf('\"image_url\"') + 13));
                T.gender = therapist.substring(therapist.indexOf('\"gender\":') + 10, therapist.indexOf('\"', therapist.indexOf('\"gender\"') + 10));
                T.bio = therapist.substring(therapist.indexOf('\"bio\":') + 7, therapist.indexOf('\"', therapist.indexOf('\"bio\"') + 7));
                T.state = therapist.substring(therapist.indexOf('\"state_long\":') + 14, therapist.indexOf('\"', therapist.indexOf('\"state_long\"') + 14));
                T.address = therapist.substring(therapist.indexOf('\"street\":') + 10, therapist.indexOf('\"', therapist.indexOf('\"street\"') + 10));
                T.number = therapist.substring(therapist.indexOf('\"phones\"') + 21, therapist.indexOf('\"', therapist.indexOf('\"phones\"') + 21));
                T.zip = therapist.substring(therapist.indexOf('\"zip\"') + 7, therapist.indexOf('\"', therapist.indexOf('\"zip\"') + 7));
                T.city = therapist.substring(therapist.indexOf('\"city\"') + 8, therapist.indexOf('\"', therapist.indexOf('\"city\"') + 8));
                T.npi = therapist.substring(therapist.indexOf('\"npi\"') + 7, therapist.indexOf('\"', therapist.indexOf('\"npi\"') + 7));
                therapist.substring(therapist.indexOf('\"specialties\":') + 16, therapist.length - 1).split('\"specialties\":').forEach(function (therapist) {
                    T.specialties = therapist.substring(therapist.indexOf('\"name\":') + 8, therapist.indexOf('\"', therapist.indexOf('\"name\"') + 8));
                    T.s_description = therapist.substring(therapist.indexOf('\"description\":') + 15, therapist.indexOf('\"', therapist.indexOf('\"description\"') + 15));
                });
                output.push(T);
            });
            _this.therapistResults = output;
        }, function (error) {
            console.error(error);
            _this.error = error;
            _this.messageService.add({ severity: 'error', summary: _this.error, life: 5000, detail: 'Search Failed' });
        });
    };
    FindTherapistComponent.prototype.resetFilter = function () {
        debugger;
        this.thera = false;
        this.psych = false;
        this.psychologis = false;
        this.coun = false;
        this.TherapistLocation();
    };
    FindTherapistComponent.prototype.getonlyPsychiatrists = function () {
        var _this = this;
        this.findTherapistService.getonlyPsychiatrist().subscribe(function (obj) {
            var str = JSON.stringify(obj);
            var output = [];
            debugger;
            str.substring(str.indexOf('\"profile\":') + 12, str.length - 1).split('\"profile\":').forEach(function (therapist) {
                var T = {};
                T.fname = therapist.substring(therapist.indexOf('\"first_name\":') + 14, therapist.indexOf('\"', therapist.indexOf('\"first_name\"') + 14));
                T.mname = therapist.substring(therapist.indexOf('\"middle_name\":') + 15, therapist.indexOf('\"', therapist.indexOf('\"middle_name\"') + 15));
                T.lname = therapist.substring(therapist.indexOf('\"last_name\":') + 13, therapist.indexOf('\"', therapist.indexOf('\"last_name\"') + 13));
                T.title = therapist.substring(therapist.indexOf('\"title\":') + 9, therapist.indexOf('\"', therapist.indexOf('\"title\"') + 9));
                T.imageURL = therapist.substring(therapist.indexOf('\"image_url\":') + 13, therapist.indexOf('\"', therapist.indexOf('\"image_url\"') + 13));
                T.gender = therapist.substring(therapist.indexOf('\"gender\":') + 10, therapist.indexOf('\"', therapist.indexOf('\"gender\"') + 10));
                T.bio = therapist.substring(therapist.indexOf('\"bio\":') + 7, therapist.indexOf('\"', therapist.indexOf('\"bio\"') + 7));
                T.state = therapist.substring(therapist.indexOf('\"state_long\":') + 14, therapist.indexOf('\"', therapist.indexOf('\"state_long\"') + 14));
                T.address = therapist.substring(therapist.indexOf('\"street\":') + 10, therapist.indexOf('\"', therapist.indexOf('\"street\"') + 10));
                T.number = therapist.substring(therapist.indexOf('\"phones\"') + 21, therapist.indexOf('\"', therapist.indexOf('\"phones\"') + 21));
                T.zip = therapist.substring(therapist.indexOf('\"zip\"') + 7, therapist.indexOf('\"', therapist.indexOf('\"zip\"') + 7));
                T.city = therapist.substring(therapist.indexOf('\"city\"') + 8, therapist.indexOf('\"', therapist.indexOf('\"city\"') + 8));
                T.npi = therapist.substring(therapist.indexOf('\"npi\"') + 7, therapist.indexOf('\"', therapist.indexOf('\"npi\"') + 7));
                therapist.substring(therapist.indexOf('\"specialties\":') + 16, therapist.length - 1).split('\"specialties\":').forEach(function (therapist) {
                    T.specialties = therapist.substring(therapist.indexOf('\"name\":') + 8, therapist.indexOf('\"', therapist.indexOf('\"name\"') + 8));
                    T.s_description = therapist.substring(therapist.indexOf('\"description\":') + 15, therapist.indexOf('\"', therapist.indexOf('\"description\"') + 15));
                });
                output.push(T);
            });
            _this.therapistResults = output;
        }, function (error) {
            console.error(error);
            _this.error = error;
            _this.messageService.add({ severity: 'error', summary: _this.error, life: 5000, detail: 'Search Failed' });
        });
    };
    FindTherapistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-find-therapist',
            template: __webpack_require__(/*! ./find-therapist.component.html */ "./src/app/find-therapist/find-therapist.component.html"),
            providers: [primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"]],
            styles: [__webpack_require__(/*! ./find-therapist.component.css */ "./src/app/find-therapist/find-therapist.component.css")]
        }),
        __metadata("design:paramtypes", [_find_therapist_service__WEBPACK_IMPORTED_MODULE_1__["FindTherapistService"],
            primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"]])
    ], FindTherapistComponent);
    return FindTherapistComponent;
}());



/***/ }),

/***/ "./src/app/fitness-instructors/fitness-instructors.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/fitness-instructors/fitness-instructors.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".jumbotron {\r\n    padding-top:2%;\r\n    padding-bottom: 3%;\r\n}\r\n\r\nimg{\r\n    border-radius: 50%;\r\n}\r\n\r\nh1 { \r\n    font-size: 2em;\r\n    font-weight: bold;\r\n}\r\n\r\nh2 {\r\n        display: block;\r\n        font-size: 1.5em;\r\n        font-weight: bold;\r\n}\r\n\r\n.Heading2 {\r\n    font-family: 'Quicksand', sans-serif;\r\n    font-size: 25px;\r\n    position: absolute;\r\n    left: 25px;\r\n    top: 260px;\r\n}\r\n\r\n.Filter-Results {\r\n    font-family: 'Quicksand', sans-serif;\r\n    font-weight: 350;\r\n    position: absolute;\r\n    top: 330px;\r\n    left: 25px;\r\n    width: 200px;\r\n}\r\n\r\n.Search-Results {\r\n    font-family: 'Quicksand', sans-serif;\r\n    font-weight: 350;\r\n    position: absolute;\r\n    top: 330px;\r\n    left: 250px;\r\n    width: 925px;\r\n}\r\n\r\n.Search-Row-Info {\r\n    position: relative;\r\n    left: 235px;\r\n    top: -185px;\r\n    min-height: 180px;\r\n    margin-bottom: -150px;\r\n    margin-right: 235px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZml0bmVzcy1pbnN0cnVjdG9ycy9maXRuZXNzLWluc3RydWN0b3JzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUNBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtBQUNyQjs7QUFFQTtRQUNRLGNBQWM7UUFDZCxnQkFBZ0I7UUFDaEIsaUJBQWlCO0FBQ3pCOztBQUNBO0lBQ0ksb0NBQW9DO0lBQ3BDLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFVBQVU7QUFDZDs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixVQUFVO0lBQ1YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvZml0bmVzcy1pbnN0cnVjdG9ycy9maXRuZXNzLWluc3RydWN0b3JzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuanVtYm90cm9uIHtcclxuICAgIHBhZGRpbmctdG9wOjIlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDMlO1xyXG59XHJcblxyXG5pbWd7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuaDEgeyBcclxuICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbmgyIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5IZWFkaW5nMiB7XHJcbiAgICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCcsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAyNXB4O1xyXG4gICAgdG9wOiAyNjBweDtcclxufVxyXG5cclxuLkZpbHRlci1SZXN1bHRzIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiAzNTA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDMzMHB4O1xyXG4gICAgbGVmdDogMjVweDtcclxuICAgIHdpZHRoOiAyMDBweDtcclxufVxyXG5cclxuLlNlYXJjaC1SZXN1bHRzIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiAzNTA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDMzMHB4O1xyXG4gICAgbGVmdDogMjUwcHg7XHJcbiAgICB3aWR0aDogOTI1cHg7XHJcbn1cclxuXHJcbi5TZWFyY2gtUm93LUluZm8ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogMjM1cHg7XHJcbiAgICB0b3A6IC0xODVweDtcclxuICAgIG1pbi1oZWlnaHQ6IDE4MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTE1MHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMzVweDtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/fitness-instructors/fitness-instructors.component.html":
/*!************************************************************************!*\
  !*** ./src/app/fitness-instructors/fitness-instructors.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\r\n    <figure><img src=\"assets/image/heart.png\" width=\"60\" height=\"60\"  class=\"mx-auto d-block\"></figure>\r\n    <h1 style=\"text-align:center\" class=\"display-4\">Health Goals</h1>\r\n</div>\r\n\r\n<p class = \"Heading2\"><b>Find a Fitness Instructor!</b></p>\r\n\r\n\r\n<div class=\"Filter-Results\">\r\n  <p-card header=\"Filter Results\">\r\n      <!--<input type=\"button\" (click)=\"resetFilters()\" pButton label=\"Reset Filters\" class=\"reset\"></button>-->\r\n      <font color=\"grey\"><b>Tags</b></font>\r\n      <br/>\r\n      <br/>\r\n      <font size=\"0.1\" style=\"font-weight: normal\">\r\n      <div onmouseover=\"this.style.fontWeight='bold'\" onmouseout=\"this.style.fontWeight='normal'\">    \r\n      <p-checkbox name=\"tags\" value=\"activeaging\" label=\"Active Aging\" [(ngModel)]=\"activeAgingvalue\" ng-checked=\"selectall\" binary=\"true\" (onChange)=\"getByTags($event)\"></p-checkbox>\r\n    </div>\r\n    <div onmouseover=\"this.style.fontWeight='bold'\" onmouseout=\"this.style.fontWeight='normal'\">\r\n      <p-checkbox name=\"tags\" value=\"Corrective Exercise\" label=\"Corrective Exercise\" [(ngModel)]=\"correctiveExercise\" binary=\"true\" (onChange)=\"getByTags($event)\"></p-checkbox>\r\n    </div>\r\n    <div onmouseover=\"this.style.fontWeight='bold'\" onmouseout=\"this.style.fontWeight='normal'\">\r\n      <p-checkbox name=\"tags\" value=\"Disease Considerations\" label=\"Disease Considerations\" [(ngModel)]=\"diseaseConsiderationvalue\" binary=\"true\" (onChange)=\"getByTags($event)\"></p-checkbox>\r\n      </div>\r\n      <div onmouseover=\"this.style.fontWeight='bold'\" onmouseout=\"this.style.fontWeight='normal'\">\r\n      <p-checkbox name=\"tags\" value=\"Orthopedic Conditions\" label=\"Orthopedic Conditions\" [(ngModel)]=\"orthopedicConditionsvalue\" binary=\"true\" (onChange)=\"getByTags($event)\"></p-checkbox>\r\n      </div>\r\n      <div onmouseover=\"this.style.fontWeight='bold'\" onmouseout=\"this.style.fontWeight='normal'\">\r\n      <p-checkbox name=\"tags\" value=\"Pre-Post Natal\" label=\"Pre-Post Natal\" [(ngModel)]=\"prepostNatalvalue\" binary=\"true\" (onChange)=\"getByTags($event)\"></p-checkbox>\r\n      </div>\r\n      <div onmouseover=\"this.style.fontWeight='bold'\" onmouseout=\"this.style.fontWeight='normal'\">\r\n      <p-checkbox name=\"tags\" value=\"Group Fitness\" label=\"Group Fitness\" [(ngModel)]=\"groupFitnessvalue\" binary=\"true\" (onChange)=\"getByTags($event)\"></p-checkbox>\r\n      </div>\r\n      <div onmouseover=\"this.style.fontWeight='bold'\" onmouseout=\"this.style.fontWeight='normal'\">\r\n      <p-checkbox name=\"tags\" value=\"Dancebased Programs\" label=\"Dance-based Programs\" [(ngModel)]=\"dancebasedProgramsvalue\" binary=\"true\" (onChange)=\"getByTags($event)\"></p-checkbox>\r\n      </div>\r\n      <div onmouseover=\"this.style.fontWeight='bold'\" onmouseout=\"this.style.fontWeight='normal'\">\r\n      <p-checkbox name=\"tags\" value=\"Functional Training\" label=\"Functional Training\" [(ngModel)]=\"functionalTrainingvalue\" binary=\"true\" (onChange)=\"getByTags($event)\"></p-checkbox>\r\n      </div>\r\n      <div onmouseover=\"this.style.fontWeight='bold'\" onmouseout=\"this.style.fontWeight='normal'\">      \r\n      <p-checkbox name=\"tags\" value=\"Group Strength\" label=\"Group Strength\" [(ngModel)]=\"groupStrengthvalue\" binary=\"true\" (onChange)=\"getByTags($event)\"></p-checkbox>\r\n      </div>\r\n      <div onmouseover=\"this.style.fontWeight='bold'\" onmouseout=\"this.style.fontWeight='normal'\">\r\n      <p-checkbox name=\"tags\" value=\"Walking Programs\" label=\"Walking Programs\" [(ngModel)]=\"walkingProgramsvalue\" binary=\"true\" (onChange)=\"getByTags($event)\"></p-checkbox>\r\n    </div>\r\n    <div onmouseover=\"this.style.fontWeight='bold'\" onmouseout=\"this.style.fontWeight='normal'\">\r\n      <p-checkbox name=\"tags\" value=\"Lifestyle Medicine\" label=\"Lifestyle Medicine\" [(ngModel)]=\"lifestyleMedicinevalue\" binary=\"true\" (onChange)=\"getByTags($event)\"></p-checkbox>\r\n      </div>\r\n      <div onmouseover=\"this.style.fontWeight='bold'\" onmouseout=\"this.style.fontWeight='normal'\">\r\n      <p-checkbox name=\"tags\" value=\"Pilates (Mat Training)\" label=\"Pilates (Mat Training)\" [(ngModel)]=\"pilatesMattrainingvalue\" binary=\"true\" (onChange)=\"getByTags($event)\"></p-checkbox>\r\n      </div>\r\n      <div onmouseover=\"this.style.fontWeight='bold'\" onmouseout=\"this.style.fontWeight='normal'\">\r\n      <p-checkbox name=\"tags\" value=\"Yoga\" label=\"Yoga\" [(ngModel)]=\"yogavalue\" binary=\"true\" (onChange)=\"getByTags($event)\"></p-checkbox>\r\n      </div>\r\n      <div onmouseover=\"this.style.fontWeight='bold'\" onmouseout=\"this.style.fontWeight='normal'\">\r\n      <p-checkbox name=\"tags\" value=\"Nutrition\" label=\"Nutrition\" [(ngModel)]=\"nutritionvalue\" binary=\"true\" (onChange)=\"getByTags($event)\"></p-checkbox>\r\n      </div>\r\n      <div onmouseover=\"this.style.fontWeight='bold'\" onmouseout=\"this.style.fontWeight='normal'\">\r\n      <p-checkbox name=\"tags\" value=\"Weight Loss/Weight Management\" label=\"Weight Loss\" [(ngModel)]=\"weightLossweightManagementvalue\" binary=\"true\" (onChange)=\"getByTags($event)\"></p-checkbox>\r\n      </div>\r\n      <div onmouseover=\"this.style.fontWeight='bold'\" onmouseout=\"this.style.fontWeight='normal'\">\r\n      <p-checkbox name=\"tags\" value=\"Overweight and Obesity\" label=\"Overweight and Obesity\" [(ngModel)]=\"overweightAndobesityvalue\" binary=\"true\" (onChange)=\"getByTags($event)\"></p-checkbox> \r\n    </div>  \r\n    </font>\r\n\r\n    <br>\r\n      <font color=\"grey\"><b>Certifications</b></font>\r\n      <br/>\r\n      <br/>\r\n      <font size=\"0.1\" style=\"font-weight: normal\">\r\n            <div onmouseover=\"this.style.fontWeight='bold'\" onmouseout=\"this.style.fontWeight='normal'\">\r\n      <p-checkbox name=\"cert\" value=\"ACEhealth\" label=\"ACE Health Coach\" [(ngModel)]=\"ACEvalue\" binary=\"true\" (onChange)=\"getByCert($event)\"></p-checkbox>\r\n      </div>\r\n      <div onmouseover=\"this.style.fontWeight='bold'\" onmouseout=\"this.style.fontWeight='normal'\">\r\n      <p-checkbox name=\"cert\" value=\"GroupFitness\" label=\"Group Fitness Instructor\" [(ngModel)]=\"groupvalue\" binary=\"true\" (onChange)=\"getByCert($event)\"></p-checkbox>\r\n      </div>\r\n      <div onmouseover=\"this.style.fontWeight='bold'\" onmouseout=\"this.style.fontWeight='normal'\">\r\n      <p-checkbox name=\"cert\" value=\"personal\" label=\"Personal Trainer\" [(ngModel)]=\"Personalvalue\" binary=\"true\" (onChange)=\"getByCert($event)\"></p-checkbox>\r\n      </div>\r\n    </font>\r\n    <br>\r\n    <button type=\"button\" (click) = \"resetFilters()\" pButton label=\"Reset Filters\" class = \"reset-filter\"></button>\r\n  </p-card>\r\n</div>\r\n\r\n<script>\r\n    var app=angular.module(\"CheckAllModule\", []);\r\n    app.controller(\"checkboxController\", function checkboxController($scope) {\r\n        $scope.checkAll = function (Count) {\r\n            angular.forEach($scope.Items, function (item) {\r\n                item.Selected = false;\r\n        });\r\n\r\n    };\r\n\r\n\r\n});\r\n</script>\r\n\r\n<div class=\"Search-Results\" style=\" text-decoration: none !important;\">\r\n    <p-dataView [value]=\"instructors_\" [loading]=\"loading\" [paginator]=\"true\" [rows]=\"5\" paginatorPosition=\"both\">\r\n        <ng-template pTemplate=\"listItem\" let-instructor>\r\n            <a routerLink=\"/fitness-instructors/{{instructor.Name}}\" style=\"text-decoration: none; color:black;\">\r\n                <div id=\"Search-row\" style=\"padding: 0.1em;border-bottom: 1px solid #d9d9d9; cursor:pointer\">\r\n                    <div>\r\n                        <img src=\"{{instructor.Image_URL}}\" height=\"180\" width=\"190\">\r\n                    </div>\r\n\r\n                    <div class=\"Search-Row-Info\">\r\n                        <div onmouseover=\"this.style.fontWeight='bold'\" onmouseout=\"this.style.fontWeight='normal'\">\r\n                            <font size=\"6\" style=\"font-weight: normal; \">\r\n                                {{instructor.Name}}\r\n                            </font>\r\n                        </div>\r\n                        <div>\r\n                            <font size=\"3\">\r\n                                {{instructor.Address}}, {{instructor.Zip}}\r\n                            </font>\r\n                        </div>\r\n                        <br>\r\n                        <div>\r\n                            <font size=\"1\">\r\n                                {{instructor.Tags}}\r\n                            </font>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </a>\r\n            <!--<img src=\"{{instructor.Image_URL}}\" height=\"400\" width=\"320\">\r\n            <img src=\"https://acefitnessmediastorage.blob.core.windows.net/acepublicfiles/c83ce4e7-0c1a-48e1-ae46-d1540c3e2231.jpg\">-->\r\n        </ng-template>\r\n    </p-dataView>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/fitness-instructors/fitness-instructors.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/fitness-instructors/fitness-instructors.component.ts ***!
  \**********************************************************************/
/*! exports provided: FitnessInstructorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FitnessInstructorsComponent", function() { return FitnessInstructorsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _find_instructors_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../find-instructors.service */ "./src/app/find-instructors.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FitnessInstructorsComponent = /** @class */ (function () {
    function FitnessInstructorsComponent(InstructorService) {
        this.InstructorService = InstructorService;
        this.InstructorService.getName(this.name).subscribe(function (data) {
            console.log(data);
        });
        this.InstructorService.getPhone(this.phone).subscribe(function (data) {
            console.log(data);
        });
        this.InstructorService.getAddress(this.address).subscribe(function (data) {
            console.log(data);
        });
        this.InstructorService.getZip(this.zip).subscribe(function (data) {
            console.log(data);
        });
        this.InstructorService.getImage(this.image).subscribe(function (data) {
            console.log(data);
        });
        this.InstructorService.getRates(this.rates).subscribe(function (data) {
            console.log(data);
        });
        this.InstructorService.getAbout(this.rates).subscribe(function (data) {
            console.log(data);
        });
        this.InstructorService.getTags(this.tags).subscribe(function (data) {
            console.log(data);
        });
    }
    FitnessInstructorsComponent.prototype.ngOnInit = function () {
        this.name = undefined;
        this.phone = undefined;
        this.address = undefined;
        this.zip = undefined;
        this.getInstructors();
    };
    FitnessInstructorsComponent.prototype.getInstructors = function () {
        var _this = this;
        this.setAllFalse();
        this.InstructorService.getInstructor().subscribe(function (data) {
            _this.instructors_ = data;
            console.log(_this.instructors_[0].Image_URL);
            /*for(var i=0;i<this.instructors_.length; i++){
              debugger;
          //this.instructors_[i].uri_name=encodeURI(this.instructors_[i].Name);
        }*/
            //this.getByTags('Active Aging');
            //this.getByTags('Corrective Exercise');
            debugger;
        }, function (error) {
            alert('Could not retrieve a list of instructors');
        });
        // debugger;
    };
    FitnessInstructorsComponent.prototype.getByTags = function (event) {
        if (this.activeAgingvalue) {
            this.tags = 'Active Aging';
            console.log(this.tags);
            this.helper(this.tags);
            //this.activeAgingvalue=false;
        }
        if (this.correctiveExercise) {
            this.tags = 'Corrective Exercise';
            this.helper(this.tags);
            //this.correctiveExercise=false;
        }
        if (this.diseaseConsiderationvalue) {
            this.tags = 'Disease Considerations';
            this.helper(this.tags);
        }
        if (this.orthopedicConditionsvalue) {
            this.tags = 'Orthopedic Conditions';
            this.helper(this.tags);
        }
        if (this.prepostNatalvalue) {
            this.tags = 'Pre-Post Natal';
            this.helper(this.tags);
        }
        if (this.groupFitnessvalue) {
            this.tags = 'Group Fitness';
            this.helper(this.tags);
        }
        if (this.dancebasedProgramsvalue) {
            this.tags = 'Dance-based Programs';
            this.helper(this.tags);
        }
        if (this.functionalTrainingvalue) {
            this.tags = 'Functional Training';
            this.helper(this.tags);
        }
        if (this.groupStrengthvalue) {
            this.tags = 'Group Strength';
            this.helper(this.tags);
        }
        if (this.walkingProgramsvalue) {
            this.tags = 'Walking Programs';
            this.helper(this.tags);
        }
        if (this.lifestyleMedicinevalue) {
            this.tags = 'Lifestyle Medicine';
            this.helper(this.tags);
        }
        if (this.yogavalue) {
            this.tags = 'Yoga';
            this.helper(this.tags);
        }
        if (this.nutritionvalue) {
            this.tags = 'Nutrition';
            this.helper(this.tags);
        }
        if (this.weightLossweightManagementvalue) {
            this.tags = 'Weight Loss/Weight Management';
            this.helper(this.tags);
        }
        if (this.overweightAndobesityvalue) {
            this.tags = 'Overweight and Obesity';
            this.helper(this.tags);
        }
        debugger;
    };
    FitnessInstructorsComponent.prototype.getByCert = function (event) {
        debugger;
        if (this.ACEvalue) {
            this.certifications = "ACE Health Coach";
            console.log(this.certifications);
            this.helperC(this.certifications);
            debugger;
        }
        if (this.Personalvalue) {
            this.certifications = 'Personal Trainer';
            this.helperC(this.certifications);
        }
        if (this.groupvalue) {
            this.certifications = "Group Fitness Instructor";
            this.helperC(this.certifications);
        }
    };
    FitnessInstructorsComponent.prototype.helper = function (tags) {
        for (var i = 0; i < this.instructors_.length; i++) {
            if (-1 == this.instructors_[i].Tags.indexOf(this.tags)) {
                this.instructors_.splice(i, 1);
                i--;
            }
            if (this.instructors_.length == 0) {
                console.warn('No instructors found by these tags try again');
            }
        }
    };
    FitnessInstructorsComponent.prototype.helperC = function (cert) {
        for (var i = 0; i < this.instructors_.length; i++) {
            if (-1 == this.instructors_[i].Certification.indexOf(cert)) {
                this.instructors_.splice(i, 1);
                i--;
            }
            if (this.instructors_.length == 0) {
                console.warn('No instructors found by these Certifications try again');
            }
        }
    };
    FitnessInstructorsComponent.prototype.resetFilters = function () {
        if (this.instructors_.length < 1) {
            this.getInstructors();
        }
        else {
            this.instructors_.length = 0;
            this.getInstructors();
            console.log('Filters have been cleared');
        }
    };
    FitnessInstructorsComponent.prototype.setAllFalse = function () {
        this.activeAgingvalue = false;
        this.correctiveExercise = false;
        this.diseaseConsiderationvalue = false;
        this.orthopedicConditionsvalue = false;
        this.prepostNatalvalue = false;
        this.groupFitnessvalue = false;
        this.dancebasedProgramsvalue = false;
        this.functionalTrainingvalue = false;
        this.groupStrengthvalue = false;
        this.walkingProgramsvalue = false;
        this.lifestyleMedicinevalue = false;
        this.pilatesMattrainingvalue = false;
        this.yogavalue = false;
        this.nutritionvalue = false;
        this.weightLossweightManagementvalue = false;
        this.overweightAndobesityvalue = false;
        this.ACEvalue = false;
        this.Personalvalue = false;
        this.groupvalue = false;
    };
    FitnessInstructorsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fitness-instructors',
            template: __webpack_require__(/*! ./fitness-instructors.component.html */ "./src/app/fitness-instructors/fitness-instructors.component.html"),
            styles: [__webpack_require__(/*! ./fitness-instructors.component.css */ "./src/app/fitness-instructors/fitness-instructors.component.css")]
        }),
        __metadata("design:paramtypes", [_find_instructors_service__WEBPACK_IMPORTED_MODULE_1__["FindInstructorsService"]])
    ], FitnessInstructorsComponent);
    return FitnessInstructorsComponent;
}());



/***/ }),

/***/ "./src/app/food-blogs/food-blogs.component.css":
/*!*****************************************************!*\
  !*** ./src/app/food-blogs/food-blogs.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".jumbotron {\r\n    padding-top: 2%;\r\n    padding-bottom: 3%;\r\n}\r\n\r\nh1 {\r\n    font-size: 2em;\r\n    font-weight: bold;\r\n}\r\n\r\n.sidenav {\r\n    width: 300px;\r\n    background: #eee;\r\n    padding: 8px 8px;\r\n}\r\n\r\n.Filter-Results {\r\n    position: absolute;\r\n    top: 330px;\r\n    width: 275px;\r\n    height:400px;\r\n    left:1020px;\r\n}\r\n\r\na:hover {\r\n    opacity: 0.7;\r\n}\r\n\r\n.Search-Results {\r\n    border-radius: 3px;\r\n    position: absolute;\r\n    border: 1px solid lightgray;\r\n    top: 330px;\r\n    left: 320px;\r\n    width: 1000px;\r\n    height: 400px;\r\n}\r\n\r\n.Search-Row-Info {\r\n    position: relative;\r\n    left: 235px;\r\n    top: -165px;\r\n    min-height: 180px;\r\n    margin-bottom: -75px;\r\n    margin-right: 235px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vZC1ibG9ncy9mb29kLWJsb2dzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixZQUFZO0lBQ1osWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFDQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLDJCQUEyQjtJQUMzQixVQUFVO0lBQ1YsV0FBVztJQUNYLGFBQWE7SUFDYixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9mb29kLWJsb2dzL2Zvb2QtYmxvZ3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5qdW1ib3Ryb24ge1xyXG4gICAgcGFkZGluZy10b3A6IDIlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDMlO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uc2lkZW5hdiB7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWVlO1xyXG4gICAgcGFkZGluZzogOHB4IDhweDtcclxufVxyXG5cclxuLkZpbHRlci1SZXN1bHRzIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMzMwcHg7XHJcbiAgICB3aWR0aDogMjc1cHg7XHJcbiAgICBoZWlnaHQ6NDAwcHg7XHJcbiAgICBsZWZ0OjEwMjBweDtcclxufVxyXG5hOmhvdmVyIHtcclxuICAgIG9wYWNpdHk6IDAuNztcclxufVxyXG5cclxuLlNlYXJjaC1SZXN1bHRzIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICAgIHRvcDogMzMwcHg7XHJcbiAgICBsZWZ0OiAzMjBweDtcclxuICAgIHdpZHRoOiAxMDAwcHg7XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG59XHJcblxyXG4uU2VhcmNoLVJvdy1JbmZvIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IDIzNXB4O1xyXG4gICAgdG9wOiAtMTY1cHg7XHJcbiAgICBtaW4taGVpZ2h0OiAxODBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IC03NXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMzVweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/food-blogs/food-blogs.component.html":
/*!******************************************************!*\
  !*** ./src/app/food-blogs/food-blogs.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n\r\n<html>\r\n\r\n<div class=\"jumbotron jumbotron-fluid\">\r\n    <figure><img src=\"assets/image/heart.png\" width=\"60\" height=\"60\" class=\"mx-auto d-block\"></figure>\r\n    <h1 style=\"text-align:center\" class=\"display-4\">Health Goals</h1>\r\n</div>\r\n\r\n<h2> Food Blogs </h2>\r\n\r\n<body>\r\n\r\n\r\n<div class=\"Filter-Results\">\r\n  <p><a href =\"https://detailed.com/food-blogs/\">Current Top Food Blogs:</a></p>\r\n\r\n\r\n  <ol>\r\n    <li>Food52</li>\r\n    <a href=\"https://food52.com/\r\n\" style=\"color:#000;\">\r\n      <figure><img src=\"assets/image/52.jpg\" width=\"200\" height=\"200\">\r\n        <p style=\"font-size: xx-small; width: 50px;\">https://food52.com/\r\n          <br>\r\n      </figure>\r\n    </a>\r\n    <li>Serious Eats</li>\r\n    <a href=\"http://www.seriouseats.com/\r\n\" style=\"color:#000;\">\r\n      <figure><img src=\"assets/image/srs.jpg\" width=\"200\" height=\"200\">\r\n        <p style=\"font-size: xx-small; width: 50px;\">http://www.seriouseats.com/\r\n\r\n          <br>\r\n      </figure>\r\n    </a>\r\n    <li>Kitchn</li>\r\n    <a href=\"https://www.thekitchn.com/\" style=\"color:#000;\">\r\n      <figure><img src=\"assets/image/kitchn.jpg\" width=\"200\" height=\"200\">\r\n        <p style=\"font-size: xx-small; width: 50px;\">https://www.thekitchn.com/\r\n          <br>\r\n      </figure>\r\n    </a>\r\n    <li>Minimalist Baker</li>\r\n    <a href=\"https://minimalistbaker.com/\" style=\"color:#000;\">\r\n      <figure><img src=\"assets/image/min.jpg\" width=\"200\" height=\"200\">\r\n        <p style=\"font-size: xx-small; width: 50px;\">https://minimalistbaker.com/\r\n\r\n          <br>\r\n      </figure>\r\n    </a> </ol>\r\n    <!--<li>Simply Recipes</li>\r\n    <a href=\"http://www.simplyrecipes.com/\" style=\"color:#000;\">\r\n      <figure><img src=\"assets/image/simple.jpg\" width=\"200\" height=\"200\">\r\n        <p style=\"font-size: xx-small; width: 50px;\">http://www.simplyrecipes.com/\r\n          <br>\r\n      </figure>\r\n    </a>\r\n    <li>smitten kitchen</li>\r\n    <a href=\"https://smittenkitchen.com/\" style=\"color:#000;\">\r\n      <figure><img src=\"assets/image/smitten.jpg\" width=\"200\" height=\"200\">\r\n        <p style=\"font-size: xx-small; width: 50px;\">https://smittenkitchen.com/\r\n\r\n          <br>\r\n      </figure>\r\n    </a>\r\n    <li>Pinch of Yum</li>\r\n    <a href=\"https://pinchofyum.com/\" style=\"color:#000;\">\r\n      <figure><img src=\"assets/image/pinch.jpg\" width=\"200\" height=\"200\">\r\n        <p style=\"font-size: xx-small; width: 50px;\">https://pinchofyum.com/\r\n          <br>\r\n      </figure>\r\n    </a>\r\n    <li>Skinnytaste</li>\r\n    <a href=\"https://www.skinnytaste.com/\" style=\"color:#000;\">\r\n      <figure><img src=\"assets/image/skinny.jpg\" width=\"200\" height=\"200\">\r\n        <p style=\"font-size: xx-small; width: 50px;\">https://www.skinnytaste.com/\r\n\r\n          <br>\r\n      </figure>\r\n    </a>-->\r\n\r\n\r\n\r\n\r\n</div>\r\n    <!--\r\n\r\n        <span class=\"ui-float-label\">\r\n      <input id=\"float-input\" type=\"text\" size=\"83\" [(ngModel)]=\"blogQuery\" (keyup.enter)=\"foodBlogsQuery(blogQuery)\"> \r\n      <label *ngIf=\"mealQuery == null\" for=\"float-input\">Search For Food Blogs</label>\r\n  </span>\r\n    </div>\r\n--><div class=\"Search-Bar\">\r\n    <iframe src=\"https://ui.customsearch.ai/hosted-page?customconfig=cc8011fc-0a87-478d-b7e5-dcdc3eb169f7&version=latest&market=en-US&q=healthy-meals\" height=\"1000\" width=\"1000\"></iframe>\r\n</div>\r\n\r\n\r\n</body>\r\n\r\n</html>\r\n"

/***/ }),

/***/ "./src/app/food-blogs/food-blogs.component.ts":
/*!****************************************************!*\
  !*** ./src/app/food-blogs/food-blogs.component.ts ***!
  \****************************************************/
/*! exports provided: FoodBlogsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodBlogsComponent", function() { return FoodBlogsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FoodBlogsComponent = /** @class */ (function () {
    function FoodBlogsComponent() {
    }
    FoodBlogsComponent.prototype.ngOnInit = function () {
    };
    FoodBlogsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-food-blogs',
            template: __webpack_require__(/*! ./food-blogs.component.html */ "./src/app/food-blogs/food-blogs.component.html"),
            styles: [__webpack_require__(/*! ./food-blogs.component.css */ "./src/app/food-blogs/food-blogs.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FoodBlogsComponent);
    return FoodBlogsComponent;
}());



/***/ }),

/***/ "./src/app/food-recipes-suggestions.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/food-recipes-suggestions.service.ts ***!
  \*****************************************************/
/*! exports provided: FoodRecipesSuggestionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodRecipesSuggestionsService", function() { return FoodRecipesSuggestionsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FoodRecipesSuggestionsService = /** @class */ (function () {
    function FoodRecipesSuggestionsService(http) {
        this.http = http;
        this._url = 'http://api.edamam.com/auto-complete';
        this.app_id = '1f302d04';
        this.app_key = '66efd9eae9211103611d7e48705766a7';
    }
    FoodRecipesSuggestionsService.prototype.getFoodSuggestions = function (input) {
        var _url = this._url + '?' + 'app_id=' + this.app_id + '&app_key=' + this.app_key + '&q=' + input.split(' ').join(', ') + '&limit=10';
        console.log(encodeURI(this._url));
        return this.http.get(encodeURI(_url))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorHandler));
    };
    FoodRecipesSuggestionsService.prototype.errorHandler = function (error) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error.error);
    };
    FoodRecipesSuggestionsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], FoodRecipesSuggestionsService);
    return FoodRecipesSuggestionsService;
}());



/***/ }),

/***/ "./src/app/food-recipes.service.ts":
/*!*****************************************!*\
  !*** ./src/app/food-recipes.service.ts ***!
  \*****************************************/
/*! exports provided: FoodRecipesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodRecipesService", function() { return FoodRecipesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FoodRecipesService = /** @class */ (function () {
    function FoodRecipesService(http) {
        this.http = http;
        this._url = 'https://api.edamam.com/search';
        this.app_ids = ['398ae301', '3f4dd5fb', '2f7143dd'];
        this.app_keys = ['e8be0dadda64231adcee646af7ed8116', '5c0f10c58fc253db198f5c29645e6b4f', 'ba8ffcc43f11094e3a710afa48ca271f'];
    }
    FoodRecipesService.prototype.getFoodRecipes = function (input, dietFilters, healthFilters) {
        var app_id = this.app_ids[0];
        var app_key = this.app_keys[0];
        var _url = this._url + '?' + 'app_id=' + app_id + '&app_key=' + app_key + '&q=' + input.split(' ').join(', ') + '&to=100';
        if (dietFilters.length > 0) {
            _url = _url + '&diet=' + dietFilters.join('&diet=');
        }
        if (healthFilters.length > 0) {
            _url = _url + '&health=' + healthFilters.join('&health=');
        }
        return this.http.get(encodeURI(_url))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorHandler));
    };
    FoodRecipesService.prototype.getBreakfast = function (input, dietFilters, healthFilters) {
        var app_id = this.app_ids[1];
        var app_key = this.app_keys[1];
        var _url = this._url + '?' + 'app_id=' + app_id + '&app_key=' + app_key + '&q=' + input.split(' ').join(', ') + '&to=100'
            + '&time=10&calories=400';
        //console.log(encodeURI(this._url));
        if (dietFilters.length > 0) {
            _url = _url + '&diet=' + dietFilters.join('&diet=');
        }
        else {
            _url = _url + '&diet=balanced';
        }
        if (healthFilters.length > 0) {
            _url = _url + '&health=' + healthFilters.join('&health=');
        }
        return this.http.get(encodeURI(_url))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorHandler));
    };
    FoodRecipesService.prototype.getLunch = function (input, dietFilters, healthFilters) {
        var app_id = this.app_ids[1];
        var app_key = this.app_keys[1];
        var _url = this._url + '?' + 'app_id=' + app_id + '&app_key=' + app_key + '&q=' + input.split(' ').join(', ') + '&to=100'
            + '&time=5-20&calories=400-700';
        //console.log(encodeURI(this._url));
        if (dietFilters.length > 0) {
            _url = _url + '&diet=' + dietFilters.join('&diet=');
        }
        else {
            _url = _url + '&diet=balanced';
        }
        if (healthFilters.length > 0) {
            _url = _url + '&health=' + healthFilters.join('&health=');
        }
        return this.http.get(encodeURI(_url))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorHandler));
    };
    FoodRecipesService.prototype.getDinner = function (input, dietFilters, healthFilters) {
        var app_id = this.app_ids[2];
        var app_key = this.app_keys[2];
        var _url = this._url + '?' + 'app_id=' + app_id + '&app_key=' + app_key + '&q=' + input.split(' ').join(', ') + '&to=100'
            + '&time=10-25&calories=600-1300';
        //console.log(encodeURI(this._url));
        if (dietFilters.length > 0) {
            _url = _url + '&diet=' + dietFilters.join('&diet=');
        }
        else {
            _url = _url + '&diet=balanced';
        }
        if (healthFilters.length > 0) {
            _url = _url + '&health=' + healthFilters.join('&health=');
        }
        return this.http.get(encodeURI(_url))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorHandler));
    };
    FoodRecipesService.prototype.getSnack = function (input, dietFilters, healthFilters) {
        var app_id = this.app_ids[2];
        var app_key = this.app_keys[2];
        var _url = this._url + '?' + 'app_id=' + app_id + '&app_key=' + app_key + '&q=' + input.split(' ').join(', ') + '&to=100'
            + '&time=0-5&calories=250';
        //console.log(encodeURI(this._url));
        if (dietFilters.length > 0) {
            _url = _url + '&diet=' + dietFilters.join('&diet=');
        }
        else {
            _url = _url + '&diet=balanced';
        }
        if (healthFilters.length > 0) {
            _url = _url + '&health=' + healthFilters.join('&health=');
        }
        return this.http.get(encodeURI(_url))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorHandler));
    };
    FoodRecipesService.prototype.getDrink = function (input, dietFilters, healthFilters) {
        var app_id = this.app_ids[2];
        var app_key = this.app_keys[2];
        input = input + ' drink';
        var _url = this._url + '?' + 'app_id=' + app_id + '&app_key=' + app_key + '&q=' + input.split(' ').join(', ') + '&to=100'
            + '&time=0-5&calories=250&ingr=5';
        //console.log(encodeURI(this._url));
        if (dietFilters.length > 0) {
            _url = _url + '&diet=' + dietFilters.join('&diet=');
        }
        if (healthFilters.length > 0) {
            _url = _url + '&health=' + healthFilters.join('&health=');
        }
        return this.http.get(encodeURI(_url))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorHandler));
    };
    FoodRecipesService.prototype.errorHandler = function (error) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error.error);
    };
    FoodRecipesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], FoodRecipesService);
    return FoodRecipesService;
}());



/***/ }),

/***/ "./src/app/food-recipes/food-recipes.component.css":
/*!*********************************************************!*\
  !*** ./src/app/food-recipes/food-recipes.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".jumbotron {\r\n    padding-top: 2%;\r\n    padding-bottom: 3%;\r\n}\r\n\r\nh1 {\r\n    font-size: 2em;\r\n    font-weight: bold;\r\n}\r\n\r\n.Filter-Results {\r\n    font-family: 'Quicksand', sans-serif;\r\n    font-weight: 350;\r\n    position: absolute;\r\n    top: 350px;\r\n    width: 200px;\r\n}\r\n\r\n.Search-Bar {\r\n    font-family: 'Quicksand', sans-serif;\r\n    font-weight: 350;\r\n    position: absolute;\r\n    top: 350px;\r\n    left: 215px;\r\n}\r\n\r\n.Search-Button {\r\n    font-family: 'Quicksand', sans-serif;\r\n    font-weight: 350;\r\n    position: absolute;\r\n    top: 350px;\r\n    left: 735px;\r\n}\r\n\r\n.Search-Results {\r\n    font-family: 'Quicksand', sans-serif;\r\n    font-weight: 350;\r\n    position: absolute;\r\n    top: 395px;\r\n    left: 215px;\r\n    width: 700px;\r\n}\r\n\r\n.Search-Row-Info {\r\n    position: relative;\r\n    left: 235px;\r\n    top: -185px;\r\n    min-height: 180px;\r\n    margin-bottom: -140px;\r\n    margin-right: 235px;\r\n}\r\n\r\n.Nutrition-Facts {\r\n    position: relative;\r\n    left: 540px;\r\n    top: -40px;\r\n}\r\n\r\n.Trending-Recipes {\r\n    font-family: 'Quicksand', sans-serif;\r\n    font-weight: 350;\r\n    list-style: none;\r\n    position: absolute;\r\n    top: 350px;\r\n    left: 930px;\r\n    width: 250px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vZC1yZWNpcGVzL2Zvb2QtcmVjaXBlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztBQUNmOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFVBQVU7QUFDZDs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztJQUNYLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9mb29kLXJlY2lwZXMvZm9vZC1yZWNpcGVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuanVtYm90cm9uIHtcclxuICAgIHBhZGRpbmctdG9wOiAyJTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAzJTtcclxufVxyXG5cclxuaDEge1xyXG4gICAgZm9udC1zaXplOiAyZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLkZpbHRlci1SZXN1bHRzIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiAzNTA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDM1MHB4O1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG59XHJcblxyXG4uU2VhcmNoLUJhciB7XHJcbiAgICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCcsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogMzUwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAzNTBweDtcclxuICAgIGxlZnQ6IDIxNXB4O1xyXG59XHJcblxyXG4uU2VhcmNoLUJ1dHRvbiB7XHJcbiAgICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCcsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogMzUwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAzNTBweDtcclxuICAgIGxlZnQ6IDczNXB4O1xyXG59XHJcblxyXG4uU2VhcmNoLVJlc3VsdHMge1xyXG4gICAgZm9udC1mYW1pbHk6ICdRdWlja3NhbmQnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDM1MDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMzk1cHg7XHJcbiAgICBsZWZ0OiAyMTVweDtcclxuICAgIHdpZHRoOiA3MDBweDtcclxufVxyXG5cclxuLlNlYXJjaC1Sb3ctSW5mbyB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiAyMzVweDtcclxuICAgIHRvcDogLTE4NXB4O1xyXG4gICAgbWluLWhlaWdodDogMTgwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtMTQwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIzNXB4O1xyXG59XHJcblxyXG4uTnV0cml0aW9uLUZhY3RzIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IDU0MHB4O1xyXG4gICAgdG9wOiAtNDBweDtcclxufVxyXG5cclxuLlRyZW5kaW5nLVJlY2lwZXMge1xyXG4gICAgZm9udC1mYW1pbHk6ICdRdWlja3NhbmQnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDM1MDtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDM1MHB4O1xyXG4gICAgbGVmdDogOTMwcHg7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/food-recipes/food-recipes.component.html":
/*!**********************************************************!*\
  !*** ./src/app/food-recipes/food-recipes.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\r\n    <figure><img src=\"assets/image/heart.png\" width=\"60\" height=\"60\" class=\"mx-auto d-block\"></figure>\r\n    <h1 style=\"text-align:center\" class=\"display-4\">Health Goals</h1>\r\n</div>\r\n\r\n<h2> Food Recipes </h2>\r\n\r\n<div class=\"Filter-Results\">\r\n    <p-card header=\"Filter Results\" subheader=\"Meal Type\">\r\n        <p-checkbox name=\"mealtype\" value=\"breakfast\" label=\"Breakfast\" [(ngModel)]=\"breakfastValue\" binary=\"true\" (onChange)=\"breakfastQuery($event)\"></p-checkbox>\r\n        <br/>\r\n        <br/>\r\n        <p-checkbox name=\"mealtype\" value=\"lunch\" label=\"Lunch\" [(ngModel)]=\"lunchValue\" binary=\"true\" (onChange)=\"lunchQuery($event)\"></p-checkbox>\r\n        <br/>\r\n        <br/>\r\n        <p-checkbox name=\"mealtype\" value=\"dinner\" label=\"Dinner\" [(ngModel)]=\"dinnerValue\" binary=\"true\" (onChange)=\"dinnerQuery($event)\"></p-checkbox>\r\n        <br/>\r\n        <br/>\r\n        <p-checkbox name=\"mealtype\" value=\"snack\" label=\"Snack\" [(ngModel)]=\"snackValue\" binary=\"true\" (onChange)=\"snackQuery($event)\"></p-checkbox>\r\n        <br/>\r\n        <br/>\r\n        <p-checkbox name=\"mealtype\" value=\"drink\" label=\"Drink\" [(ngModel)]=\"drinkValue\" binary=\"true\" (onChange)=\"drinkQuery($event)\"></p-checkbox>\r\n        <br/>\r\n        <br/>\r\n\r\n        <font color=\"grey\"><b>Diet</b></font>\r\n        <br/>\r\n        <br/>\r\n        <p-checkbox name=\"diet\" value=\"balanced\" label=\"Balanced\" [(ngModel)]=\"balancedValue\" binary=\"true\" (onChange)=\"balancedQuery($event)\"></p-checkbox>\r\n        <br/>\r\n        <br/>\r\n        <p-checkbox name=\"diet\" value=\"highprotein\" label=\"High-Protein\" [(ngModel)]=\"highProteinValue\" binary=\"true\" (onChange)=\"highProteinQuery($event)\"></p-checkbox>\r\n        <br/>\r\n        <br/>\r\n        <p-checkbox name=\"diet\" value=\"lowfat\" label=\"Low-fat\" [(ngModel)]=\"lowFatValue\" binary=\"true\" (onChange)=\"lowFatQuery($event)\"></p-checkbox>\r\n        <br/>\r\n        <br/>\r\n        <p-checkbox name=\"diet\" value=\"lowcarb\" label=\"Low-carb\" [(ngModel)]=\"lowCarbValue\" binary=\"true\" (onChange)=\"lowCarbQuery($event)\"></p-checkbox>\r\n        <br/>\r\n        <br/>\r\n\r\n        <font color=\"grey\"><b>Health</b></font>\r\n        <br/>\r\n        <br/>\r\n        <p-checkbox name=\"health\" value=\"vegan\" label=\"Vegan\" [(ngModel)]=\"veganValue\" binary=\"true\" (onChange)=\"veganQuery($event)\"></p-checkbox>\r\n        <br/>\r\n        <br/>\r\n        <p-checkbox name=\"health\" value=\"vegetarian\" label=\"Vegetarian\" [(ngModel)]=\"vegetarianValue\" binary=\"true\" (onChange)=\"vegetarianQuery($event)\"></p-checkbox>\r\n        <br/>\r\n        <br/>\r\n        <p-checkbox name=\"health\" value=\"sugarconscious\" label=\"Sugar-conscious\" [(ngModel)]=\"sugarConsciousValue\" binary=\"true\" (onChange)=\"sugarConsciousQuery($event)\"></p-checkbox>\r\n        <br/>\r\n        <br/>\r\n        <p-checkbox name=\"health\" value=\"peanutfree\" label=\"Peanut-free\" [(ngModel)]=\"peanutFreeValue\" binary=\"true\" (onChange)=\"peanutFreeQuery($event)\"></p-checkbox>\r\n        <br/>\r\n        <br/>\r\n        <p-checkbox name=\"health\" value=\"treenutfree\" label=\"Tree-nut-free\" [(ngModel)]=\"treeNutFreeValue\" binary=\"true\" (onChange)=\"treeNutFreeQuery($event)\"></p-checkbox>\r\n        <br/>\r\n        <br/>\r\n        <p-checkbox name=\"health\" value=\"alcoholfree\" label=\"Alcohol-free\" [(ngModel)]=\"alcoholFreeValue\" binary=\"true\" (onChange)=\"alcoholFreeQuery($event)\"></p-checkbox>\r\n        <br/>\r\n        <br/>\r\n\r\n        <!--\r\n        <font color=\"grey\"><b>Additional</b></font>\r\n        <br/>\r\n        <br/>\r\n        <p-checkbox name=\"additional\" value=\"convenience\" label=\"Convenience\"></p-checkbox>\r\n        <br/>\r\n        <br/>\r\n        <p-checkbox name=\"additional\" value=\"cost\" label=\"Cost\"></p-checkbox>\r\n        <br/>\r\n        <br/>\r\n        <p-checkbox name=\"additional\" value=\"ratings\" label=\"Ratings\"></p-checkbox>\r\n        -->\r\n    </p-card>\r\n</div>\r\n\r\n<div class=\"Search-Bar\">\r\n    <span class=\"ui-float-label\">\r\n        <!--<input id=\"float-input\" type=\"text\" size=\"83\" [(ngModel)]=\"mealQuery\" (keyup.enter)=\"recipesQuery(mealQuery)\"> -->\r\n        <p-autoComplete id=\"float-input\" type=\"text\" size=\"93\" [(ngModel)]=\"mealQuery\" (keyup.enter)=\"recipesQuery(mealQuery)\" [(ngModel)]=\"text\" [suggestions]=\"results\" (completeMethod)=\"suggestions($event)\"></p-autoComplete>\r\n        <label *ngIf=\"mealQuery == null\" for=\"float-input\">Search For Recipes</label>\r\n    </span>\r\n</div>\r\n\r\n<div class=\"Search-Button\">\r\n    <p-button label=\"Search\" id=\"searchButton\" (click)=\"recipesQuery(mealQuery)\" style=\"display: none;\"></p-button>\r\n</div>\r\n\r\n<div class=\"Search-Results\">\r\n    <!--\r\n    <ng-container *ngIf=\"error == null\">\r\n        <li *ngFor=\"let res of searchResults\">\r\n            <br/>\r\n            <font color=\"grey\"><b> {{ res.recipeName }}</b></font>\r\n            <br/>\r\n            <a href=\"{{ res.articleURL }}\">\r\n                <img src=\"{{ res.imageURL }}\">\r\n            </a>\r\n            <br/>\r\n            <font color=\"grey\"><b>Diet Labels: </b></font> {{ res.dietLabels }}\r\n            <br/>\r\n            <font color=\"grey\"><b>Health Labels: </b></font> {{ res.healthLabels }}\r\n            <br/>\r\n            <br/>\r\n        </li>\r\n    </ng-container>\r\n    <br>\r\n    <p-toast *ngIf=\"error !== null\" position=\"center\">{{ error }}</p-toast>\r\n    <br> -->\r\n\r\n    <p-dataView [value]=\"searchResults\" [loading]=\"loading\" [paginator]=\"true\" [rows]=\"5\" paginatorPosition=\"both\" [sortField]=\"sortField\" [sortOrder]=\"sortOrder\">\r\n        <p-header>\r\n            <div class=\"ui-helper-clearfix\">\r\n                <div class=\"ui-g\">\r\n                    <div class=\"ui-g-12 ui-md-4\">\r\n                        <p-dropdown [options]=\"sortOptions\" [(ngModel)]=\"sortKey\" placeholder=\"Sort By\" (onChange)=\"onSortChange($event)\" [style]=\"{'min-width':'100px'}\"></p-dropdown>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </p-header>\r\n        <ng-template let-res pTemplate=\"listItem\">\r\n            <div id=\"Search-row\" style=\"padding: 0.1em;border-bottom: 1px solid #d9d9d9\">\r\n                <div>\r\n                    <div>\r\n                        <font color=\"grey\"><b> {{ res.recipeName }}</b></font>\r\n                    </div>\r\n                    <div>\r\n                        <a href=\"{{ res.articleURL }}\">\r\n                            <img src=\"{{ res.imageURL }}\" height=\"180\" width=\"220\">\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"Search-Row-Info\">\r\n                    <div>\r\n                        <font size=\"1.6\">\r\n                            <font color=\"grey\"><b>Calories/Serving: </b></font> {{ res.calories }} &nbsp;\r\n                            <font color=\"grey\"><b>Daily %: </b></font> {{ res.totalDaily }} &nbsp;\r\n                            <font color=\"grey\"><b>Servings: </b></font> {{ res.servings }}\r\n\r\n                        </font>\r\n                    </div>\r\n                    <div>\r\n                        <font size=\"1.6\">\r\n                            <font color=\"grey\"><b>Diet Labels: </b></font> {{ res.dietLabels }}\r\n                        </font>\r\n                    </div>\r\n                    <div>\r\n                        <font size=\"1.6\">\r\n                            <font color=\"grey\"><b>Health Labels: </b></font> {{ res.healthLabels }}\r\n                        </font>\r\n                    </div>\r\n                    <div>\r\n                        <font size=\"1.6\">\r\n                            <font color=\"grey\"><b>Ingredients: </b></font> {{ res.ingredients }}\r\n                        </font>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"Nutrition-Facts\">\r\n                <p-dialog header=\"Nutrition Facts\" [(visible)]=\"nutritionFacts\" [modal]=\"true\" [responsive]=\"true\" [style]=\"{width: '450px', minWidth: '200px'}\" [contentStyle]=\"{'max-height':'650px'}\" [minY]=\"70\" [maximizable]=\"true\" [baseZIndex]=\"10000\">\r\n                    <!--\r\n                    <p-orderList [value]=\"facts\" [listStyle]=\"{'height':'250px'}\">\r\n                        <ng-template let-car pTemplate=\"item\">\r\n                            <div class=\"ui-helper-clearfix\">\r\n                                <img src=\"assets/showcase/images/demo/car/{{car.brand}}.png\" style=\"display:inline-block;margin:2px 0 2px 2px\" width=\"48\">\r\n                                <div style=\"font-size:14px;float:right;margin:15px 5px 0 0\">{{car.brand}} - {{car.year}} - {{car.color}}</div>\r\n                            </div>\r\n                        </ng-template>\r\n                    </p-orderList>\r\n                    -->\r\n                    <p-table [value]=\"nutrientsList\">\r\n                        <ng-template pTemplate=\"header\">\r\n                            <tr>\r\n                                <th style=\"width: 70%\">Nutrition Facts (per serving)</th>\r\n                                <th style=\"width: 30%\">% Daily Value</th>\r\n                            </tr>\r\n                        </ng-template>\r\n                        <ng-template pTemplate=\"body\" let-nutri>\r\n                            <tr>\r\n                                <td>\r\n                                    {{ nutri.vitamin }}\r\n                                </td>\r\n                                <td>\r\n                                    {{ nutri.daily }}\r\n                                </td>\r\n                            </tr>\r\n                        </ng-template>\r\n                    </p-table>\r\n                    <br/>\r\n                    <br/>\r\n                    <p-table [value]=\"ingredientsList\">\r\n                        <ng-template pTemplate=\"header\">\r\n                            <tr>\r\n                                <th style=\"width: 100%\">Ingredients</th>\r\n                            </tr>\r\n                        </ng-template>\r\n                        <ng-template pTemplate=\"body\" let-ingr>\r\n                            <tr>\r\n                                <td>\r\n                                    <font color=\"grey\"><b>Weight: </b></font> {{ ingr.weight }}g\r\n                                    <br/>\r\n                                    <font color=\"grey\"><b>Ingredient: </b></font> {{ ingr.ingredient }}\r\n                                </td>\r\n                            </tr>\r\n                        </ng-template>\r\n                    </p-table>\r\n                </p-dialog>\r\n                <button type=\"button\" (click)=\"showNutritionFacts(res)\" pButton icon=\"pi pi-info-circle\" label=\"Nutrition Facts\"></button>\r\n            </div>\r\n        </ng-template>\r\n    </p-dataView>\r\n</div>\r\n\r\n<div class=\"Trending-Recipes\">\r\n    <p-card header=\"Trending Recipes\">\r\n        <li *ngFor=\"let res of searchResults | slice:0:10; let i=index\">\r\n            <div>\r\n                <a href=\"{{ res.articleURL }}\">\r\n                    <b>{{ i+1 }}. {{ res.recipeName }}</b>\r\n                </a>\r\n            </div>\r\n            <br/>\r\n        </li>\r\n    </p-card>\r\n</div>"

/***/ }),

/***/ "./src/app/food-recipes/food-recipes.component.ts":
/*!********************************************************!*\
  !*** ./src/app/food-recipes/food-recipes.component.ts ***!
  \********************************************************/
/*! exports provided: FoodRecipesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodRecipesComponent", function() { return FoodRecipesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _food_recipes_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../food-recipes.service */ "./src/app/food-recipes.service.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _food_recipes_suggestions_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../food-recipes-suggestions.service */ "./src/app/food-recipes-suggestions.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FoodRecipesComponent = /** @class */ (function () {
    function FoodRecipesComponent(foodRecipesService, messageService, foodRecipesSuggestionsService) {
        this.foodRecipesService = foodRecipesService;
        this.messageService = messageService;
        this.foodRecipesSuggestionsService = foodRecipesSuggestionsService;
        this.searchResults = [];
        this.error = null;
        this.dietFilters = [];
        this.healthFilters = [];
        this.nutritionFacts = false;
        this.nutrientsList = [];
        this.ingredientsList = [];
    }
    FoodRecipesComponent.prototype.ngOnInit = function () {
        this.mealQuery = JSON.parse(localStorage.getItem('mealQuery'));
        this.searchResults = JSON.parse(localStorage.getItem('searchResults'));
        if (this.searchResults == null) {
            console.log('Run Query for vegan');
            this.mealQuery = 'vegan';
            this.recipesQuery(this.mealQuery);
        }
        this.sortOptions = [
            { label: 'A-Z', value: 'name' },
            { label: 'Z-A', value: '!name' },
            { label: 'Calories', value: 'calories' },
            { label: 'Daily %', value: 'daily' }
        ];
    };
    FoodRecipesComponent.prototype.recipesQuery = function (mealQuery) {
        var _this = this;
        this.foodRecipesService.getFoodRecipes(mealQuery, this.dietFilters, this.healthFilters).subscribe(function (obj) {
            var idx = 0;
            var str = JSON.stringify(obj);
            var output = [];
            if (parseInt(str.substring(str.indexOf('\"count\"') + 8, str.indexOf(',', str.indexOf('\"count\"') + 8))) > 0) {
                str.substring(str.indexOf('\"recipe\"') + 12, str.length - 1).split('\"recipe\"').forEach(function (recipe) {
                    var fR = {};
                    fR.recipeName = recipe.substring(recipe.indexOf('\"label\"') + 9, recipe.indexOf('\"', recipe.indexOf('\"label\"') + 9));
                    /*
                    const test = (obj as any).hits[idx++];
                    console.log(test.recipe);
                    this.makeNutritionLabel(test, null);
                    */
                    fR.imageURL = recipe.substring(recipe.indexOf('\"image\"') + 9, recipe.indexOf('\"', recipe.indexOf('\"image\"') + 9));
                    fR.articleURL = recipe.substring(recipe.indexOf('\"url\"') + 7, recipe.indexOf('\"', recipe.indexOf('\"url\"') + 7));
                    fR.dietLabels = recipe.substring(recipe.indexOf('\"dietLabels\"') + 14, recipe.indexOf('\],', recipe.indexOf('\"dietLabels\"') + 14)).split('\"').join(' ');
                    fR.healthLabels = recipe.substring(recipe.indexOf('\"healthLabels\"') + 16, recipe.indexOf('\],', recipe.indexOf('\"healthLabels\"') + 16)).split('\"').join(' ');
                    fR.ingredients = recipe.substring(recipe.indexOf('\"ingredientLines\"') + 19, recipe.indexOf('\],', recipe.indexOf('\"ingredientLines\"') + 19)).split('\"').join(' ');
                    fR.calories = Math.round(parseFloat(recipe.substring(recipe.indexOf('\"calories\"') + 11, recipe.indexOf(',', recipe.indexOf('\"calories\"') + 11)))) + '';
                    fR.servings = Math.round(parseFloat(recipe.substring(recipe.indexOf('\"yield\"') + 8, recipe.indexOf(',', recipe.indexOf('\"yield\"') + 8)))) + '';
                    var ingreds = obj.hits[idx].recipe.ingredients;
                    var w = [];
                    var i = [];
                    ingreds.forEach(function (o) {
                        w.push(o.weight);
                        i.push(o.text);
                    });
                    //console.log(w);
                    //console.log(i);
                    fR.weights = w;
                    fR.ingreds = i;
                    var nutrients = JSON.stringify(obj.hits[idx].recipe.totalNutrients);
                    var nutri = [];
                    nutri.push('Servings: ' + fR.servings);
                    nutrients.split('\},').forEach(function (str2) {
                        var str3 = str2.substring(str2.indexOf('\"label\"') + 9, str2.indexOf('\"', str2.indexOf('\"label\"') + 9)) + ':';
                        str3 += ' ' + Math.round(parseFloat(str2.substring(str2.indexOf('\"quantity\"') + 11, str2.indexOf(',', str2.indexOf('\"quantity\"') + 11))) /
                            parseFloat(fR.servings) * 100) / 100;
                        str3 += str2.substring(str2.indexOf('\"unit\"') + 8, str2.indexOf('\"', str2.indexOf('\"unit\"') + 8));
                        //console.log(str3);
                        nutri.push(str3);
                    });
                    var dailyVal = JSON.stringify(obj.hits[idx++].recipe.totalDaily);
                    var daily = [];
                    dailyVal.split('\},').forEach(function (str2) {
                        var str3 = str2.substring(str2.indexOf('\"label\"') + 9, str2.indexOf('\"', str2.indexOf('\"label\"') + 9)) + ':';
                        str3 += ' ' + Math.round(parseFloat(str2.substring(str2.indexOf('\"quantity\"') + 11, str2.indexOf(',', str2.indexOf('\"quantity\"') + 11))) /
                            parseFloat(fR.servings) * 100) / 100;
                        str3 += str2.substring(str2.indexOf('\"unit\"') + 8, str2.indexOf('\"', str2.indexOf('\"unit\"') + 8));
                        //console.log(str3);
                        daily.push(str3);
                    });
                    fR.vitamins = nutri;
                    fR.daily = daily;
                    var totalDailyStr = recipe.substring(recipe.indexOf('\"totalDaily\"') + 14, recipe.indexOf('\},', recipe.indexOf('\"totalDaily\"') + 14));
                    fR.totalDaily = Math.round(parseFloat(totalDailyStr.substring(totalDailyStr.indexOf('\"quantity\"') + 11, totalDailyStr.indexOf('\,', totalDailyStr.indexOf('\"quantity\"') + 11)))) + '\%';
                    fR.calories = Math.round(parseFloat(fR.calories) / parseFloat(fR.servings)) + '';
                    fR.totalDaily = Math.round(parseFloat(fR.totalDaily) / parseFloat(fR.servings)) + '';
                    output.push(fR);
                });
            }
            _this.searchResults = output;
            localStorage.setItem('mealQuery', JSON.stringify(_this.mealQuery));
            localStorage.setItem('searchResults', JSON.stringify(_this.searchResults));
        }, function (error) {
            console.error(error);
            _this.error = error;
            _this.messageService.add({ severity: 'error', summary: _this.error, life: 5000, detail: 'Search Failed!' });
        });
    };
    FoodRecipesComponent.prototype.suggestions = function (event) {
        var _this = this;
        this.foodRecipesSuggestionsService.getFoodSuggestions(event.query).subscribe(function (data) {
            _this.results = data;
        });
    };
    FoodRecipesComponent.prototype.breakfastQuery = function (event) {
        var _this = this;
        this.lunchValue = false;
        this.dinnerValue = false;
        this.snackValue = false;
        this.drinkValue = false;
        if (this.breakfastValue) {
            console.log(this.mealQuery);
            this.foodRecipesService.getBreakfast(this.mealQuery, this.dietFilters, this.healthFilters).subscribe(function (obj) {
                var idx = 0;
                var str = JSON.stringify(obj);
                var output = [];
                if (parseInt(str.substring(str.indexOf('\"count\"') + 8, str.indexOf(',', str.indexOf('\"count\"') + 8))) > 0) {
                    str.substring(str.indexOf('\"recipe\"') + 12, str.length - 1).split('\"recipe\"').forEach(function (recipe) {
                        var fR = {};
                        fR.recipeName = recipe.substring(recipe.indexOf('\"label\"') + 9, recipe.indexOf('\"', recipe.indexOf('\"label\"') + 9));
                        fR.imageURL = recipe.substring(recipe.indexOf('\"image\"') + 9, recipe.indexOf('\"', recipe.indexOf('\"image\"') + 9));
                        fR.articleURL = recipe.substring(recipe.indexOf('\"url\"') + 7, recipe.indexOf('\"', recipe.indexOf('\"url\"') + 7));
                        fR.dietLabels = recipe.substring(recipe.indexOf('\"dietLabels\"') + 14, recipe.indexOf('\],', recipe.indexOf('\"dietLabels\"') + 14)).split('\"').join(' ');
                        fR.healthLabels = recipe.substring(recipe.indexOf('\"healthLabels\"') + 16, recipe.indexOf('\],', recipe.indexOf('\"healthLabels\"') + 16)).split('\"').join(' ');
                        fR.ingredients = recipe.substring(recipe.indexOf('\"ingredientLines\"') + 19, recipe.indexOf('\],', recipe.indexOf('\"ingredientLines\"') + 19)).split('\"').join(' ');
                        fR.calories = Math.round(parseFloat(recipe.substring(recipe.indexOf('\"calories\"') + 11, recipe.indexOf(',', recipe.indexOf('\"calories\"') + 11)))) + '';
                        fR.servings = Math.round(parseFloat(recipe.substring(recipe.indexOf('\"yield\"') + 8, recipe.indexOf(',', recipe.indexOf('\"yield\"') + 8)))) + '';
                        var ingreds = obj.hits[idx].recipe.ingredients;
                        var w = [];
                        var i = [];
                        ingreds.forEach(function (o) {
                            w.push(o.weight);
                            i.push(o.text);
                        });
                        //console.log(w);
                        //console.log(i);
                        fR.weights = w;
                        fR.ingreds = i;
                        var nutrients = JSON.stringify(obj.hits[idx].recipe.totalNutrients);
                        var nutri = [];
                        nutri.push('Servings: ' + fR.servings);
                        nutrients.split('\},').forEach(function (str2) {
                            var str3 = str2.substring(str2.indexOf('\"label\"') + 9, str2.indexOf('\"', str2.indexOf('\"label\"') + 9)) + ':';
                            str3 += ' ' + Math.round(parseFloat(str2.substring(str2.indexOf('\"quantity\"') + 11, str2.indexOf(',', str2.indexOf('\"quantity\"') + 11))) /
                                parseFloat(fR.servings) * 100) / 100;
                            str3 += str2.substring(str2.indexOf('\"unit\"') + 8, str2.indexOf('\"', str2.indexOf('\"unit\"') + 8));
                            //console.log(str3);
                            nutri.push(str3);
                        });
                        var dailyVal = JSON.stringify(obj.hits[idx++].recipe.totalDaily);
                        var daily = [];
                        dailyVal.split('\},').forEach(function (str2) {
                            var str3 = str2.substring(str2.indexOf('\"label\"') + 9, str2.indexOf('\"', str2.indexOf('\"label\"') + 9)) + ':';
                            str3 += ' ' + Math.round(parseFloat(str2.substring(str2.indexOf('\"quantity\"') + 11, str2.indexOf(',', str2.indexOf('\"quantity\"') + 11))) /
                                parseFloat(fR.servings) * 100) / 100;
                            str3 += str2.substring(str2.indexOf('\"unit\"') + 8, str2.indexOf('\"', str2.indexOf('\"unit\"') + 8));
                            //console.log(str3);
                            daily.push(str3);
                        });
                        fR.vitamins = nutri;
                        fR.daily = daily;
                        var totalDailyStr = recipe.substring(recipe.indexOf('\"totalDaily\"') + 14, recipe.indexOf('\},', recipe.indexOf('\"totalDaily\"') + 14));
                        fR.totalDaily = Math.round(parseFloat(totalDailyStr.substring(totalDailyStr.indexOf('\"quantity\"') + 11, totalDailyStr.indexOf('\,', totalDailyStr.indexOf('\"quantity\"') + 11)))) + '\%';
                        fR.calories = Math.round(parseFloat(fR.calories) / parseFloat(fR.servings)) + '';
                        fR.totalDaily = Math.round(parseFloat(fR.totalDaily) / parseFloat(fR.servings)) + '';
                        output.push(fR);
                    });
                }
                console.log(output);
                _this.searchResults = output;
                localStorage.setItem('mealQuery', JSON.stringify(_this.mealQuery));
                localStorage.setItem('searchResults', JSON.stringify(_this.searchResults));
            }, function (error) {
                console.error(error);
                _this.error = error;
                _this.messageService.add({ severity: 'error', summary: _this.error, life: 5000, detail: 'Search Failed!' });
            });
        }
        else if (!(this.breakfastValue || this.lunchValue || this.dinnerValue || this.drinkValue || this.snackValue)) {
            this.recipesQuery(this.mealQuery);
        }
    };
    FoodRecipesComponent.prototype.lunchQuery = function (event) {
        var _this = this;
        this.breakfastValue = false;
        this.dinnerValue = false;
        this.snackValue = false;
        this.drinkValue = false;
        if (this.lunchValue) {
            console.log(this.mealQuery);
            this.foodRecipesService.getLunch(this.mealQuery, this.dietFilters, this.healthFilters).subscribe(function (obj) {
                var idx = 0;
                var str = JSON.stringify(obj);
                var output = [];
                if (parseInt(str.substring(str.indexOf('\"count\"') + 8, str.indexOf(',', str.indexOf('\"count\"') + 8))) > 0) {
                    str.substring(str.indexOf('\"recipe\"') + 12, str.length - 1).split('\"recipe\"').forEach(function (recipe) {
                        var fR = {};
                        fR.recipeName = recipe.substring(recipe.indexOf('\"label\"') + 9, recipe.indexOf('\"', recipe.indexOf('\"label\"') + 9));
                        fR.imageURL = recipe.substring(recipe.indexOf('\"image\"') + 9, recipe.indexOf('\"', recipe.indexOf('\"image\"') + 9));
                        fR.articleURL = recipe.substring(recipe.indexOf('\"url\"') + 7, recipe.indexOf('\"', recipe.indexOf('\"url\"') + 7));
                        fR.dietLabels = recipe.substring(recipe.indexOf('\"dietLabels\"') + 14, recipe.indexOf('\],', recipe.indexOf('\"dietLabels\"') + 14)).split('\"').join(' ');
                        fR.healthLabels = recipe.substring(recipe.indexOf('\"healthLabels\"') + 16, recipe.indexOf('\],', recipe.indexOf('\"healthLabels\"') + 16)).split('\"').join(' ');
                        fR.ingredients = recipe.substring(recipe.indexOf('\"ingredientLines\"') + 19, recipe.indexOf('\],', recipe.indexOf('\"ingredientLines\"') + 19)).split('\"').join(' ');
                        fR.calories = Math.round(parseFloat(recipe.substring(recipe.indexOf('\"calories\"') + 11, recipe.indexOf(',', recipe.indexOf('\"calories\"') + 11)))) + '';
                        fR.servings = Math.round(parseFloat(recipe.substring(recipe.indexOf('\"yield\"') + 8, recipe.indexOf(',', recipe.indexOf('\"yield\"') + 8)))) + '';
                        var ingreds = obj.hits[idx].recipe.ingredients;
                        var w = [];
                        var i = [];
                        ingreds.forEach(function (o) {
                            w.push(o.weight);
                            i.push(o.text);
                        });
                        //console.log(w);
                        //console.log(i);
                        fR.weights = w;
                        fR.ingreds = i;
                        var nutrients = JSON.stringify(obj.hits[idx].recipe.totalNutrients);
                        var nutri = [];
                        nutri.push('Servings: ' + fR.servings);
                        nutrients.split('\},').forEach(function (str2) {
                            var str3 = str2.substring(str2.indexOf('\"label\"') + 9, str2.indexOf('\"', str2.indexOf('\"label\"') + 9)) + ':';
                            str3 += ' ' + Math.round(parseFloat(str2.substring(str2.indexOf('\"quantity\"') + 11, str2.indexOf(',', str2.indexOf('\"quantity\"') + 11))) /
                                parseFloat(fR.servings) * 100) / 100;
                            str3 += str2.substring(str2.indexOf('\"unit\"') + 8, str2.indexOf('\"', str2.indexOf('\"unit\"') + 8));
                            //console.log(str3);
                            nutri.push(str3);
                        });
                        var dailyVal = JSON.stringify(obj.hits[idx++].recipe.totalDaily);
                        var daily = [];
                        dailyVal.split('\},').forEach(function (str2) {
                            var str3 = str2.substring(str2.indexOf('\"label\"') + 9, str2.indexOf('\"', str2.indexOf('\"label\"') + 9)) + ':';
                            str3 += ' ' + Math.round(parseFloat(str2.substring(str2.indexOf('\"quantity\"') + 11, str2.indexOf(',', str2.indexOf('\"quantity\"') + 11))) /
                                parseFloat(fR.servings) * 100) / 100;
                            str3 += str2.substring(str2.indexOf('\"unit\"') + 8, str2.indexOf('\"', str2.indexOf('\"unit\"') + 8));
                            //console.log(str3);
                            daily.push(str3);
                        });
                        fR.vitamins = nutri;
                        fR.daily = daily;
                        var totalDailyStr = recipe.substring(recipe.indexOf('\"totalDaily\"') + 14, recipe.indexOf('\},', recipe.indexOf('\"totalDaily\"') + 14));
                        fR.totalDaily = Math.round(parseFloat(totalDailyStr.substring(totalDailyStr.indexOf('\"quantity\"') + 11, totalDailyStr.indexOf('\,', totalDailyStr.indexOf('\"quantity\"') + 11)))) + '\%';
                        fR.calories = Math.round(parseFloat(fR.calories) / parseFloat(fR.servings)) + '';
                        fR.totalDaily = Math.round(parseFloat(fR.totalDaily) / parseFloat(fR.servings)) + '';
                        output.push(fR);
                    });
                }
                console.log(output);
                _this.searchResults = output;
                localStorage.setItem('mealQuery', JSON.stringify(_this.mealQuery));
                localStorage.setItem('searchResults', JSON.stringify(_this.searchResults));
            }, function (error) {
                console.error(error);
                _this.error = error;
                _this.messageService.add({ severity: 'error', summary: _this.error, life: 5000, detail: 'Search Failed!' });
            });
        }
        else if (!(this.breakfastValue || this.lunchValue || this.dinnerValue || this.drinkValue || this.snackValue)) {
            this.recipesQuery(this.mealQuery);
        }
    };
    FoodRecipesComponent.prototype.dinnerQuery = function (event) {
        var _this = this;
        this.breakfastValue = false;
        this.lunchValue = false;
        this.snackValue = false;
        this.drinkValue = false;
        if (this.dinnerValue) {
            console.log(this.mealQuery);
            this.foodRecipesService.getDinner(this.mealQuery, this.dietFilters, this.healthFilters).subscribe(function (obj) {
                var idx = 0;
                var str = JSON.stringify(obj);
                var output = [];
                if (parseInt(str.substring(str.indexOf('\"count\"') + 8, str.indexOf(',', str.indexOf('\"count\"') + 8))) > 0) {
                    str.substring(str.indexOf('\"recipe\"') + 12, str.length - 1).split('\"recipe\"').forEach(function (recipe) {
                        var fR = {};
                        fR.recipeName = recipe.substring(recipe.indexOf('\"label\"') + 9, recipe.indexOf('\"', recipe.indexOf('\"label\"') + 9));
                        fR.imageURL = recipe.substring(recipe.indexOf('\"image\"') + 9, recipe.indexOf('\"', recipe.indexOf('\"image\"') + 9));
                        fR.articleURL = recipe.substring(recipe.indexOf('\"url\"') + 7, recipe.indexOf('\"', recipe.indexOf('\"url\"') + 7));
                        fR.dietLabels = recipe.substring(recipe.indexOf('\"dietLabels\"') + 14, recipe.indexOf('\],', recipe.indexOf('\"dietLabels\"') + 14)).split('\"').join(' ');
                        fR.healthLabels = recipe.substring(recipe.indexOf('\"healthLabels\"') + 16, recipe.indexOf('\],', recipe.indexOf('\"healthLabels\"') + 16)).split('\"').join(' ');
                        fR.ingredients = recipe.substring(recipe.indexOf('\"ingredientLines\"') + 19, recipe.indexOf('\],', recipe.indexOf('\"ingredientLines\"') + 19)).split('\"').join(' ');
                        fR.calories = Math.round(parseFloat(recipe.substring(recipe.indexOf('\"calories\"') + 11, recipe.indexOf(',', recipe.indexOf('\"calories\"') + 11)))) + '';
                        fR.servings = Math.round(parseFloat(recipe.substring(recipe.indexOf('\"yield\"') + 8, recipe.indexOf(',', recipe.indexOf('\"yield\"') + 8)))) + '';
                        var ingreds = obj.hits[idx].recipe.ingredients;
                        var w = [];
                        var i = [];
                        ingreds.forEach(function (o) {
                            w.push(o.weight);
                            i.push(o.text);
                        });
                        //console.log(w);
                        //console.log(i);
                        fR.weights = w;
                        fR.ingreds = i;
                        var nutrients = JSON.stringify(obj.hits[idx].recipe.totalNutrients);
                        var nutri = [];
                        nutri.push('Servings: ' + fR.servings);
                        nutrients.split('\},').forEach(function (str2) {
                            var str3 = str2.substring(str2.indexOf('\"label\"') + 9, str2.indexOf('\"', str2.indexOf('\"label\"') + 9)) + ':';
                            str3 += ' ' + Math.round(parseFloat(str2.substring(str2.indexOf('\"quantity\"') + 11, str2.indexOf(',', str2.indexOf('\"quantity\"') + 11))) /
                                parseFloat(fR.servings) * 100) / 100;
                            str3 += str2.substring(str2.indexOf('\"unit\"') + 8, str2.indexOf('\"', str2.indexOf('\"unit\"') + 8));
                            //console.log(str3);
                            nutri.push(str3);
                        });
                        var dailyVal = JSON.stringify(obj.hits[idx++].recipe.totalDaily);
                        var daily = [];
                        dailyVal.split('\},').forEach(function (str2) {
                            var str3 = str2.substring(str2.indexOf('\"label\"') + 9, str2.indexOf('\"', str2.indexOf('\"label\"') + 9)) + ':';
                            str3 += ' ' + Math.round(parseFloat(str2.substring(str2.indexOf('\"quantity\"') + 11, str2.indexOf(',', str2.indexOf('\"quantity\"') + 11))) /
                                parseFloat(fR.servings) * 100) / 100;
                            str3 += str2.substring(str2.indexOf('\"unit\"') + 8, str2.indexOf('\"', str2.indexOf('\"unit\"') + 8));
                            //console.log(str3);
                            daily.push(str3);
                        });
                        fR.vitamins = nutri;
                        fR.daily = daily;
                        var totalDailyStr = recipe.substring(recipe.indexOf('\"totalDaily\"') + 14, recipe.indexOf('\},', recipe.indexOf('\"totalDaily\"') + 14));
                        fR.totalDaily = Math.round(parseFloat(totalDailyStr.substring(totalDailyStr.indexOf('\"quantity\"') + 11, totalDailyStr.indexOf('\,', totalDailyStr.indexOf('\"quantity\"') + 11)))) + '\%';
                        fR.calories = Math.round(parseFloat(fR.calories) / parseFloat(fR.servings)) + '';
                        fR.totalDaily = Math.round(parseFloat(fR.totalDaily) / parseFloat(fR.servings)) + '';
                        output.push(fR);
                    });
                }
                console.log(output);
                _this.searchResults = output;
                localStorage.setItem('mealQuery', JSON.stringify(_this.mealQuery));
                localStorage.setItem('searchResults', JSON.stringify(_this.searchResults));
            }, function (error) {
                console.error(error);
                _this.error = error;
                _this.messageService.add({ severity: 'error', summary: _this.error, life: 5000, detail: 'Search Failed!' });
            });
        }
        else if (!(this.breakfastValue || this.lunchValue || this.dinnerValue || this.drinkValue || this.snackValue)) {
            this.recipesQuery(this.mealQuery);
        }
    };
    FoodRecipesComponent.prototype.snackQuery = function (event) {
        var _this = this;
        this.breakfastValue = false;
        this.lunchValue = false;
        this.dinnerValue = false;
        this.drinkValue = false;
        if (this.snackValue) {
            console.log(this.mealQuery);
            this.foodRecipesService.getSnack(this.mealQuery, this.dietFilters, this.healthFilters).subscribe(function (obj) {
                var idx = 0;
                var str = JSON.stringify(obj);
                var output = [];
                if (parseInt(str.substring(str.indexOf('\"count\"') + 8, str.indexOf(',', str.indexOf('\"count\"') + 8))) > 0) {
                    str.substring(str.indexOf('\"recipe\"') + 12, str.length - 1).split('\"recipe\"').forEach(function (recipe) {
                        var fR = {};
                        fR.recipeName = recipe.substring(recipe.indexOf('\"label\"') + 9, recipe.indexOf('\"', recipe.indexOf('\"label\"') + 9));
                        fR.imageURL = recipe.substring(recipe.indexOf('\"image\"') + 9, recipe.indexOf('\"', recipe.indexOf('\"image\"') + 9));
                        fR.articleURL = recipe.substring(recipe.indexOf('\"url\"') + 7, recipe.indexOf('\"', recipe.indexOf('\"url\"') + 7));
                        fR.dietLabels = recipe.substring(recipe.indexOf('\"dietLabels\"') + 14, recipe.indexOf('\],', recipe.indexOf('\"dietLabels\"') + 14)).split('\"').join(' ');
                        fR.healthLabels = recipe.substring(recipe.indexOf('\"healthLabels\"') + 16, recipe.indexOf('\],', recipe.indexOf('\"healthLabels\"') + 16)).split('\"').join(' ');
                        fR.ingredients = recipe.substring(recipe.indexOf('\"ingredientLines\"') + 19, recipe.indexOf('\],', recipe.indexOf('\"ingredientLines\"') + 19)).split('\"').join(' ');
                        fR.calories = Math.round(parseFloat(recipe.substring(recipe.indexOf('\"calories\"') + 11, recipe.indexOf(',', recipe.indexOf('\"calories\"') + 11)))) + '';
                        fR.servings = Math.round(parseFloat(recipe.substring(recipe.indexOf('\"yield\"') + 8, recipe.indexOf(',', recipe.indexOf('\"yield\"') + 8)))) + '';
                        var ingreds = obj.hits[idx].recipe.ingredients;
                        var w = [];
                        var i = [];
                        ingreds.forEach(function (o) {
                            w.push(o.weight);
                            i.push(o.text);
                        });
                        //console.log(w);
                        //console.log(i);
                        fR.weights = w;
                        fR.ingreds = i;
                        var nutrients = JSON.stringify(obj.hits[idx].recipe.totalNutrients);
                        var nutri = [];
                        nutri.push('Servings: ' + fR.servings);
                        nutrients.split('\},').forEach(function (str2) {
                            var str3 = str2.substring(str2.indexOf('\"label\"') + 9, str2.indexOf('\"', str2.indexOf('\"label\"') + 9)) + ':';
                            str3 += ' ' + Math.round(parseFloat(str2.substring(str2.indexOf('\"quantity\"') + 11, str2.indexOf(',', str2.indexOf('\"quantity\"') + 11))) /
                                parseFloat(fR.servings) * 100) / 100;
                            str3 += str2.substring(str2.indexOf('\"unit\"') + 8, str2.indexOf('\"', str2.indexOf('\"unit\"') + 8));
                            //console.log(str3);
                            nutri.push(str3);
                        });
                        var dailyVal = JSON.stringify(obj.hits[idx++].recipe.totalDaily);
                        var daily = [];
                        dailyVal.split('\},').forEach(function (str2) {
                            var str3 = str2.substring(str2.indexOf('\"label\"') + 9, str2.indexOf('\"', str2.indexOf('\"label\"') + 9)) + ':';
                            str3 += ' ' + Math.round(parseFloat(str2.substring(str2.indexOf('\"quantity\"') + 11, str2.indexOf(',', str2.indexOf('\"quantity\"') + 11))) /
                                parseFloat(fR.servings) * 100) / 100;
                            str3 += str2.substring(str2.indexOf('\"unit\"') + 8, str2.indexOf('\"', str2.indexOf('\"unit\"') + 8));
                            //console.log(str3);
                            daily.push(str3);
                        });
                        fR.vitamins = nutri;
                        fR.daily = daily;
                        var totalDailyStr = recipe.substring(recipe.indexOf('\"totalDaily\"') + 14, recipe.indexOf('\},', recipe.indexOf('\"totalDaily\"') + 14));
                        fR.totalDaily = Math.round(parseFloat(totalDailyStr.substring(totalDailyStr.indexOf('\"quantity\"') + 11, totalDailyStr.indexOf('\,', totalDailyStr.indexOf('\"quantity\"') + 11)))) + '\%';
                        fR.calories = Math.round(parseFloat(fR.calories) / parseFloat(fR.servings)) + '';
                        fR.totalDaily = Math.round(parseFloat(fR.totalDaily) / parseFloat(fR.servings)) + '';
                        output.push(fR);
                    });
                }
                console.log(output);
                _this.searchResults = output;
                localStorage.setItem('mealQuery', JSON.stringify(_this.mealQuery));
                localStorage.setItem('searchResults', JSON.stringify(_this.searchResults));
            }, function (error) {
                console.error(error);
                _this.error = error;
                _this.messageService.add({ severity: 'error', summary: _this.error, life: 5000, detail: 'Search Failed!' });
            });
        }
        else if (!(this.breakfastValue || this.lunchValue || this.dinnerValue || this.drinkValue || this.snackValue)) {
            this.recipesQuery(this.mealQuery);
        }
    };
    FoodRecipesComponent.prototype.drinkQuery = function (event) {
        var _this = this;
        this.breakfastValue = false;
        this.lunchValue = false;
        this.dinnerValue = false;
        this.snackValue = false;
        if (this.drinkValue) {
            console.log(this.mealQuery);
            this.foodRecipesService.getDrink(this.mealQuery, this.dietFilters, this.healthFilters).subscribe(function (obj) {
                var idx = 0;
                var str = JSON.stringify(obj);
                var output = [];
                if (parseInt(str.substring(str.indexOf('\"count\"') + 8, str.indexOf(',', str.indexOf('\"count\"') + 8))) > 0) {
                    str.substring(str.indexOf('\"recipe\"') + 12, str.length - 1).split('\"recipe\"').forEach(function (recipe) {
                        var fR = {};
                        fR.recipeName = recipe.substring(recipe.indexOf('\"label\"') + 9, recipe.indexOf('\"', recipe.indexOf('\"label\"') + 9));
                        fR.imageURL = recipe.substring(recipe.indexOf('\"image\"') + 9, recipe.indexOf('\"', recipe.indexOf('\"image\"') + 9));
                        fR.articleURL = recipe.substring(recipe.indexOf('\"url\"') + 7, recipe.indexOf('\"', recipe.indexOf('\"url\"') + 7));
                        fR.dietLabels = recipe.substring(recipe.indexOf('\"dietLabels\"') + 14, recipe.indexOf('\],', recipe.indexOf('\"dietLabels\"') + 14)).split('\"').join(' ');
                        fR.healthLabels = recipe.substring(recipe.indexOf('\"healthLabels\"') + 16, recipe.indexOf('\],', recipe.indexOf('\"healthLabels\"') + 16)).split('\"').join(' ');
                        fR.ingredients = recipe.substring(recipe.indexOf('\"ingredientLines\"') + 19, recipe.indexOf('\],', recipe.indexOf('\"ingredientLines\"') + 19)).split('\"').join(' ');
                        fR.calories = Math.round(parseFloat(recipe.substring(recipe.indexOf('\"calories\"') + 11, recipe.indexOf(',', recipe.indexOf('\"calories\"') + 11)))) + '';
                        fR.servings = Math.round(parseFloat(recipe.substring(recipe.indexOf('\"yield\"') + 8, recipe.indexOf(',', recipe.indexOf('\"yield\"') + 8)))) + '';
                        var ingreds = obj.hits[idx].recipe.ingredients;
                        var w = [];
                        var i = [];
                        ingreds.forEach(function (o) {
                            w.push(o.weight);
                            i.push(o.text);
                        });
                        //console.log(w);
                        //console.log(i);
                        fR.weights = w;
                        fR.ingreds = i;
                        var nutrients = JSON.stringify(obj.hits[idx].recipe.totalNutrients);
                        var nutri = [];
                        nutri.push('Servings: ' + fR.servings);
                        nutrients.split('\},').forEach(function (str2) {
                            var str3 = str2.substring(str2.indexOf('\"label\"') + 9, str2.indexOf('\"', str2.indexOf('\"label\"') + 9)) + ':';
                            str3 += ' ' + Math.round(parseFloat(str2.substring(str2.indexOf('\"quantity\"') + 11, str2.indexOf(',', str2.indexOf('\"quantity\"') + 11))) /
                                parseFloat(fR.servings) * 100) / 100;
                            str3 += str2.substring(str2.indexOf('\"unit\"') + 8, str2.indexOf('\"', str2.indexOf('\"unit\"') + 8));
                            //console.log(str3);
                            nutri.push(str3);
                        });
                        var dailyVal = JSON.stringify(obj.hits[idx++].recipe.totalDaily);
                        var daily = [];
                        dailyVal.split('\},').forEach(function (str2) {
                            var str3 = str2.substring(str2.indexOf('\"label\"') + 9, str2.indexOf('\"', str2.indexOf('\"label\"') + 9)) + ':';
                            str3 += ' ' + Math.round(parseFloat(str2.substring(str2.indexOf('\"quantity\"') + 11, str2.indexOf(',', str2.indexOf('\"quantity\"') + 11))) /
                                parseFloat(fR.servings) * 100) / 100;
                            str3 += str2.substring(str2.indexOf('\"unit\"') + 8, str2.indexOf('\"', str2.indexOf('\"unit\"') + 8));
                            //console.log(str3);
                            daily.push(str3);
                        });
                        fR.vitamins = nutri;
                        fR.daily = daily;
                        var totalDailyStr = recipe.substring(recipe.indexOf('\"totalDaily\"') + 14, recipe.indexOf('\},', recipe.indexOf('\"totalDaily\"') + 14));
                        fR.totalDaily = Math.round(parseFloat(totalDailyStr.substring(totalDailyStr.indexOf('\"quantity\"') + 11, totalDailyStr.indexOf('\,', totalDailyStr.indexOf('\"quantity\"') + 11)))) + '\%';
                        fR.calories = Math.round(parseFloat(fR.calories) / parseFloat(fR.servings)) + '';
                        fR.totalDaily = Math.round(parseFloat(fR.totalDaily) / parseFloat(fR.servings)) + '';
                        output.push(fR);
                    });
                }
                console.log(output);
                _this.searchResults = output;
                localStorage.setItem('mealQuery', JSON.stringify(_this.mealQuery));
                localStorage.setItem('searchResults', JSON.stringify(_this.searchResults));
            }, function (error) {
                console.error(error);
                _this.error = error;
                _this.messageService.add({ severity: 'error', summary: _this.error, life: 5000, detail: 'Search Failed!' });
            });
        }
        else if (!(this.breakfastValue || this.lunchValue || this.dinnerValue || this.drinkValue || this.snackValue)) {
            this.recipesQuery(this.mealQuery);
        }
    };
    FoodRecipesComponent.prototype.balancedQuery = function (event) {
        if (this.balancedValue) {
            this.dietFilters.push('balanced');
        }
        else {
            this.dietFilters[this.dietFilters.indexOf('balanced')] = '';
            this.removeDiet('balanced');
        }
        if (this.breakfastValue) {
            this.breakfastQuery(this.mealQuery);
        }
        else if (this.lunchValue) {
            this.lunchQuery(this.mealQuery);
        }
        else if (this.dinnerValue) {
            this.dinnerQuery(this.mealQuery);
        }
        else if (this.snackValue) {
            this.snackQuery(this.mealQuery);
        }
        else if (this.drinkValue) {
            this.drinkQuery(this.mealQuery);
        }
        else {
            this.recipesQuery(this.mealQuery);
        }
    };
    FoodRecipesComponent.prototype.highProteinQuery = function (event) {
        if (this.highProteinValue) {
            this.dietFilters.push('high-protein');
        }
        else {
            this.dietFilters[this.dietFilters.indexOf('high-protein')] = '';
            this.removeDiet('high-protein');
        }
        if (this.breakfastValue) {
            this.breakfastQuery(this.mealQuery);
        }
        else if (this.lunchValue) {
            this.lunchQuery(this.mealQuery);
        }
        else if (this.dinnerValue) {
            this.dinnerQuery(this.mealQuery);
        }
        else if (this.snackValue) {
            this.snackQuery(this.mealQuery);
        }
        else if (this.drinkValue) {
            this.drinkQuery(this.mealQuery);
        }
        else {
            this.recipesQuery(this.mealQuery);
        }
    };
    FoodRecipesComponent.prototype.lowFatQuery = function (event) {
        if (this.lowFatValue) {
            this.dietFilters.push('low-fat');
        }
        else {
            this.dietFilters[this.dietFilters.indexOf('low-fat')] = '';
            this.removeDiet('low-fat');
        }
        if (this.breakfastValue) {
            this.breakfastQuery(this.mealQuery);
        }
        else if (this.lunchValue) {
            this.lunchQuery(this.mealQuery);
        }
        else if (this.dinnerValue) {
            this.dinnerQuery(this.mealQuery);
        }
        else if (this.snackValue) {
            this.snackQuery(this.mealQuery);
        }
        else if (this.drinkValue) {
            this.drinkQuery(this.mealQuery);
        }
        else {
            this.recipesQuery(this.mealQuery);
        }
    };
    FoodRecipesComponent.prototype.lowCarbQuery = function (event) {
        if (this.lowCarbValue) {
            this.dietFilters.push('low-carb');
        }
        else {
            this.dietFilters[this.dietFilters.indexOf('low-carb')] = '';
            this.removeDiet('low-carb');
        }
        if (this.breakfastValue) {
            this.breakfastQuery(this.mealQuery);
        }
        else if (this.lunchValue) {
            this.lunchQuery(this.mealQuery);
        }
        else if (this.dinnerValue) {
            this.dinnerQuery(this.mealQuery);
        }
        else if (this.snackValue) {
            this.snackQuery(this.mealQuery);
        }
        else if (this.drinkValue) {
            this.drinkQuery(this.mealQuery);
        }
        else {
            this.recipesQuery(this.mealQuery);
        }
    };
    FoodRecipesComponent.prototype.removeDiet = function (filter) {
        var filters = [];
        this.dietFilters.forEach(function (filter) {
            if (filter.length > 0) {
                filters.push(filter);
            }
        });
        this.dietFilters = filters;
    };
    FoodRecipesComponent.prototype.veganQuery = function (event) {
        if (this.veganValue) {
            this.healthFilters.push('vegan');
        }
        else {
            this.healthFilters[this.healthFilters.indexOf('vegan')] = '';
            this.removeHealth('vegan');
        }
        if (this.breakfastValue) {
            this.breakfastQuery(this.mealQuery);
        }
        else if (this.lunchValue) {
            this.lunchQuery(this.mealQuery);
        }
        else if (this.dinnerValue) {
            this.dinnerQuery(this.mealQuery);
        }
        else if (this.snackValue) {
            this.snackQuery(this.mealQuery);
        }
        else if (this.drinkValue) {
            this.drinkQuery(this.mealQuery);
        }
        else {
            this.recipesQuery(this.mealQuery);
        }
    };
    FoodRecipesComponent.prototype.vegetarianQuery = function (event) {
        if (this.vegetarianValue) {
            this.healthFilters.push('vegetarian');
        }
        else {
            this.healthFilters[this.healthFilters.indexOf('vegetarian')] = '';
            this.removeHealth('vegetarian');
        }
        if (this.breakfastValue) {
            this.breakfastQuery(this.mealQuery);
        }
        else if (this.lunchValue) {
            this.lunchQuery(this.mealQuery);
        }
        else if (this.dinnerValue) {
            this.dinnerQuery(this.mealQuery);
        }
        else if (this.snackValue) {
            this.snackQuery(this.mealQuery);
        }
        else if (this.drinkValue) {
            this.drinkQuery(this.mealQuery);
        }
        else {
            this.recipesQuery(this.mealQuery);
        }
    };
    FoodRecipesComponent.prototype.sugarConsciousQuery = function (event) {
        if (this.veganValue) {
            this.healthFilters.push('sugar-conscious');
        }
        else {
            this.healthFilters[this.healthFilters.indexOf('sugar-conscious')] = '';
            this.removeHealth('sugar-conscious');
        }
        if (this.breakfastValue) {
            this.breakfastQuery(this.mealQuery);
        }
        else if (this.lunchValue) {
            this.lunchQuery(this.mealQuery);
        }
        else if (this.dinnerValue) {
            this.dinnerQuery(this.mealQuery);
        }
        else if (this.snackValue) {
            this.snackQuery(this.mealQuery);
        }
        else if (this.drinkValue) {
            this.drinkQuery(this.mealQuery);
        }
        else {
            this.recipesQuery(this.mealQuery);
        }
    };
    FoodRecipesComponent.prototype.peanutFreeQuery = function (event) {
        if (this.veganValue) {
            this.healthFilters.push('peanut-free');
        }
        else {
            this.healthFilters[this.healthFilters.indexOf('peanut-free')] = '';
            this.removeHealth('peanut-free');
        }
        if (this.breakfastValue) {
            this.breakfastQuery(this.mealQuery);
        }
        else if (this.lunchValue) {
            this.lunchQuery(this.mealQuery);
        }
        else if (this.dinnerValue) {
            this.dinnerQuery(this.mealQuery);
        }
        else if (this.snackValue) {
            this.snackQuery(this.mealQuery);
        }
        else if (this.drinkValue) {
            this.drinkQuery(this.mealQuery);
        }
        else {
            this.recipesQuery(this.mealQuery);
        }
    };
    FoodRecipesComponent.prototype.treeNutFreeQuery = function (event) {
        if (this.veganValue) {
            this.healthFilters.push('tree-nut-free');
        }
        else {
            this.healthFilters[this.healthFilters.indexOf('tree-nut-free')] = '';
            this.removeHealth('tree-nut-free');
        }
        if (this.breakfastValue) {
            this.breakfastQuery(this.mealQuery);
        }
        else if (this.lunchValue) {
            this.lunchQuery(this.mealQuery);
        }
        else if (this.dinnerValue) {
            this.dinnerQuery(this.mealQuery);
        }
        else if (this.snackValue) {
            this.snackQuery(this.mealQuery);
        }
        else if (this.drinkValue) {
            this.drinkQuery(this.mealQuery);
        }
        else {
            this.recipesQuery(this.mealQuery);
        }
    };
    FoodRecipesComponent.prototype.alcoholFreeQuery = function (event) {
        if (this.veganValue) {
            this.healthFilters.push('alcohol-free');
        }
        else {
            this.healthFilters[this.healthFilters.indexOf('alcohol-free')] = '';
            this.removeHealth('alcohol-free');
        }
        if (this.breakfastValue) {
            this.breakfastQuery(this.mealQuery);
        }
        else if (this.lunchValue) {
            this.lunchQuery(this.mealQuery);
        }
        else if (this.dinnerValue) {
            this.dinnerQuery(this.mealQuery);
        }
        else if (this.snackValue) {
            this.snackQuery(this.mealQuery);
        }
        else if (this.drinkValue) {
            this.drinkQuery(this.mealQuery);
        }
        else {
            this.recipesQuery(this.mealQuery);
        }
    };
    FoodRecipesComponent.prototype.removeHealth = function (filter) {
        var filters = [];
        this.healthFilters.forEach(function (filter) {
            if (filter.length > 0) {
                filters.push(filter);
            }
        });
        this.healthFilters = filters;
    };
    FoodRecipesComponent.prototype.onSortChange = function (event) {
        if (this.searchResults.length > 0) {
            if (event.value === 'name') {
                this.searchResults.sort(function (a, b) { return (a.recipeName > b.recipeName) ? 1 : ((b.recipeName > a.recipeName) ? -1 : 0); });
            }
            else if (event.value === '!name') {
                this.searchResults.sort(function (a, b) { return (a.recipeName < b.recipeName) ? 1 : ((b.recipeName < a.recipeName) ? -1 : 0); });
            }
            else if (event.value === 'calories') {
                this.searchResults.sort(function (a, b) { return (parseInt(a.calories) * parseInt(a.servings) > parseInt(b.calories) * parseInt(b.servings)) ? 1 : ((parseInt(b.calories) * parseInt(b.servings) > parseInt(a.calories) * parseInt(a.servings)) ? -1 : 0); });
            }
            else if (event.value === 'daily') {
                this.searchResults.sort(function (a, b) { return (parseInt(a.totalDaily) > parseInt(b.totalDaily)) ? 1 : ((parseInt(b.totalDaily) > parseInt(a.totalDaily)) ? -1 : 0); });
            }
        }
    };
    FoodRecipesComponent.prototype.showNutritionFacts = function (res) {
        this.nutritionFacts = true;
        var output = [];
        for (var i = 0; i < res.weights.length; i++) {
            var o = {};
            o.ingredient = res.ingreds[i];
            o.weight = Math.round(parseFloat(res.weights[i]) * 100) / 100 + '';
            output.push(o);
        }
        this.ingredientsList = output;
        var output2 = [];
        for (var i = 0; i < res.vitamins.length; i++) {
            var o = {};
            o.vitamin = res.vitamins[i];
            var contains = false;
            for (var j = 0; j < res.daily.length; j++) {
                if (res.vitamins[i].split(':')[0] === res.daily[j].split(':')[0]) {
                    contains = true;
                    o.daily = res.daily[j].split(': ')[1].split('\%')[0];
                }
            }
            if (!contains) {
                o.daily = '';
            }
            output2.push(o);
        }
        this.nutrientsList = output2;
    };
    FoodRecipesComponent.prototype.makeNutritionLabel = function (obj, output) {
        var ingreds = obj.recipe.ingredients;
        var w = [];
        var i = [];
        ingreds.forEach(function (o) {
            w.push(o.weight);
            i.push(o.text);
        });
        console.log(w);
        console.log(i);
    };
    FoodRecipesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-food-recipes',
            template: __webpack_require__(/*! ./food-recipes.component.html */ "./src/app/food-recipes/food-recipes.component.html"),
            providers: [primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"]],
            styles: [__webpack_require__(/*! ./food-recipes.component.css */ "./src/app/food-recipes/food-recipes.component.css")]
        }),
        __metadata("design:paramtypes", [_food_recipes_service__WEBPACK_IMPORTED_MODULE_1__["FoodRecipesService"],
            primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"],
            _food_recipes_suggestions_service__WEBPACK_IMPORTED_MODULE_3__["FoodRecipesSuggestionsService"]])
    ], FoodRecipesComponent);
    return FoodRecipesComponent;
}());



/***/ }),

/***/ "./src/app/instructor-details/instructor-details.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/instructor-details/instructor-details.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div{\r\n    white-space: pre-wrap !important;\r\n}\r\n\r\n.jumbotron {\r\n    padding-top: 2%;\r\n    padding-bottom: 2%;\r\n}\r\n\r\n.Instructor-Result{\r\n    top:5px;\r\n    white-space: pre-line;\r\n}\r\n\r\nimg{\r\n    border-radius: 50% !important;\r\n    position: relative;\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5zdHJ1Y3Rvci1kZXRhaWxzL2luc3RydWN0b3ItZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLE9BQU87SUFDUCxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0Isa0JBQWtCOztBQUV0QiIsImZpbGUiOiJzcmMvYXBwL2luc3RydWN0b3ItZGV0YWlscy9pbnN0cnVjdG9yLWRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdntcclxuICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uanVtYm90cm9uIHtcclxuICAgIHBhZGRpbmctdG9wOiAyJTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyJTtcclxufVxyXG5cclxuLkluc3RydWN0b3ItUmVzdWx0e1xyXG4gICAgdG9wOjVweDtcclxuICAgIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcclxufVxyXG5cclxuaW1ne1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlICFpbXBvcnRhbnQ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG59Il19 */"

/***/ }),

/***/ "./src/app/instructor-details/instructor-details.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/instructor-details/instructor-details.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\r\n  <figure><img src=\"assets/image/heart.png\" width=\"60\" height=\"60\"  class=\"mx-auto d-block\"></figure>\r\n  <h1 style=\"text-align:center\" class=\"display-4\">Health Goals</h1>\r\n</div>\r\n\r\n<button type=\"button\" (click) = \"backClicked()\" pButton label=\"Back to list of Instructors\" class = \"Back-Button\"></button>\r\n\r\n<div class=\"InstructorResults\">\r\n  <!--<p-card>\r\n    <p *ngIf=\"instructor_d\"> {{instructor_d?.About}} </p>\r\n  </p-card>-->\r\n  <p-card>\r\n    <h2 style=\"text-align: center !important\"><strong><font size=7>{{ name }}</font></strong></h2>\r\n  </p-card>\r\n\r\n  <div class=\"inst-img\">\r\n    <img src=\"{{instructor_d.Image_URL}}\" style=\"float:left; padding: 5px\" alt=\"Avatar\" height=\"260\" width=\"250\">\r\n    <div style=\"left:1000px; display: inline-block\">\r\n      <font size=4.5>\r\n        <font size=6>\r\n          <strong>\r\n            <div>\r\n              {{instructor_d?.Address}}, {{instructor_d?.Zip}}\r\n            </div>\r\n            <div>\r\n              Phone:{{instructor_d?.Number}}\r\n            </div>\r\n          </strong>\r\n        </font>\r\n        <div>\r\n          Certifications: {{instructor_d?.Certification}}\r\n        </div>\r\n      </font>\r\n    </div>\r\n    <font size=4>\r\n      <br>\r\n      <br>\r\n      About Me:\r\n      {{ instructor_d?.About }}\r\n    </font>\r\n    <br>\r\n    <br>\r\n    <br>\r\n    <div>\r\n      My Rates:\r\n      <br>\r\n      {{ instructor_d?.Rates }}\r\n    </div>\r\n    <br>\r\n    <div>\r\n      Specialties: {{ instructor_d?.Tags }}\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/instructor-details/instructor-details.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/instructor-details/instructor-details.component.ts ***!
  \********************************************************************/
/*! exports provided: InstructorDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstructorDetailsComponent", function() { return InstructorDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _find_instructors_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../find-instructors.service */ "./src/app/find-instructors.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InstructorDetailsComponent = /** @class */ (function () {
    function InstructorDetailsComponent(instructorService, priv_ins, _location, route) {
        var _this = this;
        this.instructorService = instructorService;
        this.priv_ins = priv_ins;
        this._location = _location;
        this.route = route;
        route.paramMap.subscribe(function (paramMap) {
            _this.name = paramMap.get('Name');
            console.log(_this.name);
            priv_ins.findInstructor(_this.name).subscribe(function (data) {
                _this.instructor_d = data;
                console.log(data);
                debugger;
            }, function (error) {
                if (error.status == 404) {
                    alert('Instructor not found :(');
                }
                else {
                    console.error(error.status + '-' + error.body);
                    alert('An error ocurred on the server. Check the console');
                }
            });
        });
    }
    InstructorDetailsComponent.prototype.backClicked = function () {
        this._location.back();
    };
    InstructorDetailsComponent.prototype.ngOnInit = function () {
    };
    InstructorDetailsComponent.prototype.getInstructors = function () {
        var _this = this;
        this.instructorService.getInstructor().subscribe(function (data) {
            _this.instructors_ = data;
            //console.log(this.instructors[0].Image_URL);
            /*for(var i=0;i<this.instructors_.length; i++){
          //this.instructors_[i].uri_name=encodeURI(this.instructors_[i].Name);
        }*/
            debugger;
        }, function (error) {
            alert('Could not retrieve a list of instructors');
        });
        debugger;
    };
    InstructorDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-instructor-details',
            template: __webpack_require__(/*! ./instructor-details.component.html */ "./src/app/instructor-details/instructor-details.component.html"),
            styles: [__webpack_require__(/*! ./instructor-details.component.css */ "./src/app/instructor-details/instructor-details.component.css")]
        }),
        __metadata("design:paramtypes", [_find_instructors_service__WEBPACK_IMPORTED_MODULE_1__["FindInstructorsService"],
            _find_instructors_service__WEBPACK_IMPORTED_MODULE_1__["FindInstructorsService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], InstructorDetailsComponent);
    return InstructorDetailsComponent;
}());



/***/ }),

/***/ "./src/app/meal-plan/meal-plan.component.css":
/*!***************************************************!*\
  !*** ./src/app/meal-plan/meal-plan.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".jumbotron {\r\n    padding-top:2%;\r\n    padding-bottom: 3%;\r\n}\r\n\r\n.Heading {\r\n    font-family: 'Quicksand', sans-serif;\r\n    font-size: 30px;\r\n}\r\n\r\n.sidenav {\r\n    width: 300px;\r\n    background: #eee;\r\n    padding: 8px 8px;\r\n}\r\n\r\nh1 {\r\n    font-size: 2em;\r\n    font-weight: bold;\r\n}\r\n\r\nh2 {\r\n    display: block;\r\n    font-size: 1.5em;\r\n    font-weight: bold;\r\n}\r\n\r\n.card {\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\r\n    max-width: 300px;\r\n    margin: auto;\r\n    text-align: center;\r\n}\r\n\r\n.title {\r\n    color: grey;\r\n    font-size: 18px;\r\n}\r\n\r\nbutton {\r\n    border: none;\r\n    outline: 0;\r\n    display: inline-block;\r\n    padding: 8px;\r\n    color: white;\r\n    background-color: #000;\r\n    text-align: center;\r\n    cursor: pointer;\r\n    width: 100%;\r\n    font-size: 18px;\r\n}\r\n\r\na {\r\n    text-decoration: none;\r\n    font-size: 22px;\r\n    color: black;\r\n}\r\n\r\nbutton:hover, a:hover {\r\n    opacity: 0.7;\r\n}\r\n\r\n.header3{\r\n    background-color: whitesmoke;\r\n    position: absolute;\r\n    padding: 10px;\r\n    text-align: center;\r\n    font-size: 15px;\r\n    top: 280px;\r\n    left: 320px;\r\n}\r\n\r\n.meal1{\r\n    color: white;\r\n    position:absolute;\r\n    top: 330px;\r\n    left: 20px;\r\n}\r\n\r\n.meal1{\r\n    color:WHITE;\r\n    position: absolute;\r\n    top: 530px;\r\n    left: 20px;\r\n}\r\n\r\n.meal1{\r\n    color:WHITE;\r\n    position: absolute;\r\n    top: 730px;\r\n    left: 20px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVhbC1wbGFuL21lYWwtcGxhbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxlQUFlO0FBQ25COztBQUNBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSwwQ0FBMEM7SUFDMUMsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixVQUFVO0lBQ1YscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsV0FBVztJQUNYLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsZUFBZTtJQUNmLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixVQUFVO0lBQ1YsV0FBVztBQUNmOztBQUNBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsVUFBVTtBQUNkOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsVUFBVTtBQUNkOztBQUNBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsVUFBVTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvbWVhbC1wbGFuL21lYWwtcGxhbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmp1bWJvdHJvbiB7XHJcbiAgICBwYWRkaW5nLXRvcDoyJTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAzJTtcclxufVxyXG5cclxuLkhlYWRpbmcge1xyXG4gICAgZm9udC1mYW1pbHk6ICdRdWlja3NhbmQnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcbi5zaWRlbmF2IHtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGJhY2tncm91bmQ6ICNlZWU7XHJcbiAgICBwYWRkaW5nOiA4cHggOHB4O1xyXG59XHJcbmgxIHtcclxuICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbmgyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gICAgY29sb3I6IGdyZXk7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG5hIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuYnV0dG9uOmhvdmVyLCBhOmhvdmVyIHtcclxuICAgIG9wYWNpdHk6IDAuNztcclxufVxyXG5cclxuLmhlYWRlcjN7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIHRvcDogMjgwcHg7XHJcbiAgICBsZWZ0OiAzMjBweDtcclxufVxyXG4ubWVhbDF7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIHRvcDogMzMwcHg7XHJcbiAgICBsZWZ0OiAyMHB4O1xyXG59XHJcblxyXG4ubWVhbDF7XHJcbiAgICBjb2xvcjpXSElURTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTMwcHg7XHJcbiAgICBsZWZ0OiAyMHB4O1xyXG59XHJcbi5tZWFsMXtcclxuICAgIGNvbG9yOldISVRFO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA3MzBweDtcclxuICAgIGxlZnQ6IDIwcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/meal-plan/meal-plan.component.html":
/*!****************************************************!*\
  !*** ./src/app/meal-plan/meal-plan.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html lang=\"en\">\r\n<head>\r\n  <title></title>\r\n  <meta charset=\"utf-8\">\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n\r\n</head>\r\n\r\n<body>\r\n\r\n\r\n\r\n<div class=\"jumbotron jumbotron-fluid\">\r\n  <figure><img src=\"assets/image/heart.png\" width=\"60\" height=\"60\"  class=\"mx-auto d-block\"></figure>\r\n  <h1 style=\"text-align:center\" class=\"display-4\">Health Goals</h1>\r\n</div>\r\n\r\n\r\n<div>\r\n  <h3>Daily Meal Plan</h3>\r\n</div>\r\n<input type=\"button\" value=\"Click here to get a new Meal Plan\" onClick=\"location.href=location.href\">\r\n\r\n\r\n<div>\r\n  <!--<div class=\"Search-Button\">\r\n    <p-button label=\"Search\" id=\"searchButton\" (click)=\"mealPlanQuery(mealQuery)\" style=\"display: none;\"></p-button>\r\n  </div>-->\r\n  <div class = \"breakfast\">\r\n  <p-dataView [value]=\"searchbResults\" [loading]=\"loading\">\r\n    <ng-template let-res pTemplate=\"listItem\">\r\n      <div id=\"Search-row1\" style=\"padding: 0.1em;border-bottom: 1px solid #d9d9d9\">\r\n        <div>\r\n          <div>\r\n            <font color=\"grey\"><b>BREAKFAST: {{ res.brecipeName }}</b></font>\r\n          </div>\r\n          <div>\r\n            <a href=\"{{ res.barticleURL }}\" target=\"_blank\">\r\n              <img src=\"{{ res.bimageURL }}\" height=\"180\" width=\"220\">\r\n            </a>\r\n          </div>\r\n        </div>\r\n        <div class=\"Search-Row-Info\">\r\n          <div>\r\n            <font size=\"1.6\">\r\n              <font color=\"grey\"><b>Calories/Serving: </b></font> {{ res.bcalories }} &nbsp;\r\n              <font color=\"grey\"><b>Daily %: </b></font> {{ res.btotalDaily }} &nbsp;\r\n              <font color=\"grey\"><b>Servings: </b></font> {{ res.bservings }}\r\n\r\n            </font>\r\n          </div>\r\n          <div>\r\n            <font size=\"1.6\">\r\n              <font color=\"grey\"><b>Diet Labels: </b></font> {{ res.bdietLabels }}\r\n            </font>\r\n          </div>\r\n          <div>\r\n            <font size=\"1.6\">\r\n              <font color=\"grey\"><b>Health Labels: </b></font> {{ res.bhealthLabels }}\r\n            </font>\r\n          </div>\r\n          <div>\r\n            <font size=\"1.6\">\r\n              <font color=\"grey\"><b>Ingredients: </b></font> {{ res.bingredients }}\r\n            </font>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </ng-template>\r\n  </p-dataView></div>\r\n<div class=\"lunch\">\r\n  <p-dataView [value]=\"searchlResults\" [loading]=\"loading\">\r\n    <ng-template let-res pTemplate=\"listItem\">\r\n      <div id=\"Search-row2\" style=\"padding: 0.1em;border-bottom: 1px solid #d9d9d9\">\r\n        <div>\r\n          <div>\r\n            <font color=\"grey\"><b>LUNCH: {{ res.lrecipeName }}</b></font>\r\n          </div>\r\n          <div>\r\n            <a href=\"{{ res.larticleURL }}\" target=\"_blank\">\r\n              <img src=\"{{ res.limageURL }}\" height=\"180\" width=\"220\">\r\n            </a>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"Search-Row-Info\">\r\n          <div>\r\n            <font size=\"1.6\">\r\n              <font color=\"grey\"><b>Calories/Serving: </b></font> {{ res.lcalories }} &nbsp;\r\n              <font color=\"grey\"><b>Daily %: </b></font> {{ res.ltotalDaily }} &nbsp;\r\n              <font color=\"grey\"><b>Servings: </b></font> {{ res.lservings }}\r\n\r\n            </font>\r\n          </div>\r\n          <div>\r\n            <font size=\"1.6\">\r\n              <font color=\"grey\"><b>Diet Labels: </b></font> {{ res.ldietLabels }}\r\n            </font>\r\n          </div>\r\n          <div>\r\n            <font size=\"1.6\">\r\n              <font color=\"grey\"><b>Health Labels: </b></font> {{ res.lhealthLabels }}\r\n            </font>\r\n          </div>\r\n          <div>\r\n            <font size=\"1.6\">\r\n              <font color=\"grey\"><b>Ingredients: </b></font> {{ res.lingredients }}\r\n            </font>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </ng-template>\r\n  </p-dataView>\r\n</div>\r\n  <div class = \"dinner\">\r\n <p-dataView [value]=\"searchdResults\" [loading]=\"loading\">\r\n    <ng-template let-res pTemplate=\"listItem\">\r\n      <div id=\"Search-row\" style=\"padding: 0.1em;border-bottom: 1px solid #d9d9d9\">\r\n        <div>\r\n          <div>\r\n            <font color=\"grey\"><b>DINNER: {{ res.drecipeName }}</b></font>\r\n          </div>\r\n          <div>\r\n            <a href=\"{{ res.darticleURL }}\" target=\"_blank\">\r\n              <img src=\"{{ res.dimageURL }}\" height=\"180\" width=\"220\">\r\n            </a>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"Search-Row-Info\">\r\n          <div>\r\n            <font size=\"1.6\">\r\n              <font color=\"grey\"><b>Calories/Serving: </b></font> {{ res.dcalories }} &nbsp;\r\n              <font color=\"grey\"><b>Daily %: </b></font> {{ res.dtotalDaily }} &nbsp;\r\n              <font color=\"grey\"><b>Servings: </b></font> {{ res.dservings }}\r\n\r\n            </font>\r\n          </div>\r\n          <div>\r\n            <font size=\"1.6\">\r\n              <font color=\"grey\"><b>Diet Labels: </b></font> {{ res.ddietLabels }}\r\n            </font>\r\n          </div>\r\n          <div>\r\n            <font size=\"1.6\">\r\n              <font color=\"grey\"><b>Health Labels: </b></font> {{ res.dhealthLabels }}\r\n            </font>\r\n          </div>\r\n          <div>\r\n            <font size=\"1.6\">\r\n              <font color=\"grey\"><b>Ingredients: </b></font> {{ res.dingredients }}\r\n            </font>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </ng-template>\r\n  </p-dataView></div>\r\n</div>\r\n<!--Workout Links-->\r\n\r\n\r\n\r\n</body>\r\n</html>\r\n"

/***/ }),

/***/ "./src/app/meal-plan/meal-plan.component.ts":
/*!**************************************************!*\
  !*** ./src/app/meal-plan/meal-plan.component.ts ***!
  \**************************************************/
/*! exports provided: MealPlanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MealPlanComponent", function() { return MealPlanComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _food_recipes_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../food-recipes.service */ "./src/app/food-recipes.service.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _welcome_meal_plan_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../welcome/meal-plan.service */ "./src/app/welcome/meal-plan.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MealPlanComponent = /** @class */ (function () {
    function MealPlanComponent(foodRecipesService, mealPlanService, messageService) {
        this.foodRecipesService = foodRecipesService;
        this.mealPlanService = mealPlanService;
        this.messageService = messageService;
        this.loggedIn = false;
        this.error = null;
    }
    MealPlanComponent.prototype.get_userdata = function (ID) {
        var _this = this;
        this.userService.get_userdata(ID).subscribe(function (data) {
            _this.user = data;
        }, function (error) {
            alert("unable to get user data");
        });
    };
    MealPlanComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem("loggedIn") == "true") {
            this.loggedIn = true;
            this.get_userdata(localStorage.getItem("ID"));
            console.log(this.get_userdata(localStorage.getItem("ID")));
        }
        else {
            this.loggedIn = false;
            localStorage.clear();
            localStorage.setItem("loggedIn", "false");
        }
        // this.welcomeService.get_userdata(localStorage.getItem("ID"));
        //console.log(this.user["Dietary Restrictions"]);
        var breakfastitems = ['apple-juice', 'strawberry', 'french-toast', 'fruit', 'bananas-milk', 'granola', 'banana-pancake', 'bacon-strip-breakfast', 'smoothie', 'omelette', 'quick', 'bread', 'orange-juice', 'low-cal-juice', 'granola-bar'];
        var lunchitems = ['veggie-sandwich', 'chicken-sandwich', 'egg', 'rice', 'bowl', 'wrap', 'salad', 'beans', 'green', 'burrito', 'lunch', 'whole-wheat', 'tater-tots', 'quinoa', 'salad-wrap'];
        var dinneritems = ['burger', 'pizza', 'steak', 'pasta', 'rice', 'hearty', 'potatoes', 'vegetable', 'eggplant', 'tomato-salad', 'steamed-veg', 'olive', 'pita-bread', 'low-cal-steaks', 'lasagna'];
        this.r = this.randomInt(0, breakfastitems.length);
        console.log(breakfastitems[this.r]);
        console.log(lunchitems[this.r]);
        console.log(dinneritems[this.r]);
        this.mealPlanQuery(breakfastitems[this.r], lunchitems[this.r], dinneritems[this.r]);
        /* if(this.loggedIn == true){
             this.mealPlanQuery(String(breakfastitems[this.r] + this.user["Dietary Restrictions"]), String(lunchitems[this.r] + this.user["Dietary Restrictions"]), String(dinneritems[this.r] + this.user["Dietary Restrictions"]));
         }
         else{
             this.mealPlanQuery(breakfastitems[this.r], lunchitems[this.r], dinneritems[this.r]);
         }*/
    };
    MealPlanComponent.prototype.randomInt = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    MealPlanComponent.prototype.mealPlanQuery = function (breakfast, lunch, dinner) {
        var _this = this;
        this.mealPlanService.getmyBreakfast(breakfast).subscribe(function (obj) {
            var output = [];
            var str = JSON.stringify(obj);
            var fR = {};
            str.substring(str.indexOf('\"recipe\"') + 12, str.length - 1).split('\"recipe\"').forEach(function (recipe) {
                fR.brecipeName = recipe.substring(recipe.indexOf('\"label\"') + 9, recipe.indexOf('\"', recipe.indexOf('\"label\"') + 9));
                console.log(fR.brecipeName);
                fR.bimageURL = recipe.substring(recipe.indexOf('\"image\"') + 9, recipe.indexOf('\"', recipe.indexOf('\"image\"') + 9));
                fR.barticleURL = recipe.substring(recipe.indexOf('\"url\"') + 7, recipe.indexOf('\"', recipe.indexOf('\"url\"') + 7));
                fR.bdietLabels = recipe.substring(recipe.indexOf('\"dietLabels\"') + 14, recipe.indexOf('\],', recipe.indexOf('\"dietLabels\"') + 14)).split('\"').join(' ');
                fR.bhealthLabels = recipe.substring(recipe.indexOf('\"healthLabels\"') + 16, recipe.indexOf('\],', recipe.indexOf('\"healthLabels\"') + 16)).split('\"').join(' ');
                fR.bingredients = recipe.substring(recipe.indexOf('\"ingredientLines\"') + 19, recipe.indexOf('\],', recipe.indexOf('\"ingredientLines\"') + 19)).split('\"').join(' ');
                fR.bcalories = Math.round(parseFloat(recipe.substring(recipe.indexOf('\"calories\"') + 11, recipe.indexOf(',', recipe.indexOf('\"calories\"') + 11)))) + '';
                // this.totalCal = Number(fR.bcalories);
                fR.bservings = Math.round(parseFloat(recipe.substring(recipe.indexOf('\"yield\"') + 8, recipe.indexOf(',', recipe.indexOf('\"yield\"') + 8)))) + '';
                var totalDailyStr = recipe.substring(recipe.indexOf('\"totalDaily\"') + 14, recipe.indexOf('\},', recipe.indexOf('\"totalDaily\"') + 14));
                fR.btotalDaily = Math.round(parseFloat(totalDailyStr.substring(totalDailyStr.indexOf('\"quantity\"') + 11, totalDailyStr.indexOf('\,', totalDailyStr.indexOf('\"quantity\"') + 11)))) + '\%';
                fR.bcalories = Math.round(parseFloat(fR.bcalories) / parseFloat(fR.bservings)) + '';
                fR.btotalDaily = Math.round(parseFloat(fR.btotalDaily) / parseFloat(fR.bservings)) + '';
                output.push(fR);
            });
            _this.searchbResults = output;
            localStorage.setItem('mealQuery', JSON.stringify(_this.breakfast));
            localStorage.setItem('searchResults', JSON.stringify(_this.searchbResults));
        }, function (error) {
            console.error(error);
            _this.error = error;
            _this.messageService.add({ severity: 'error', summary: _this.error, life: 5000, detail: 'Search Failed!' });
        });
        this.mealPlanService.getmyLunch(lunch).subscribe(function (obj) {
            var str = JSON.stringify(obj);
            var output = [];
            //const output: MealPlan[] = [];
            str.substring(str.indexOf('\"recipe\"') + 12, str.length - 1).split('\"recipe\"').forEach(function (recipe) {
                var fR = {};
                fR.lrecipeName = recipe.substring(recipe.indexOf('\"label\"') + 9, recipe.indexOf('\"', recipe.indexOf('\"label\"') + 9));
                console.log(fR.lrecipeName);
                fR.limageURL = recipe.substring(recipe.indexOf('\"image\"') + 9, recipe.indexOf('\"', recipe.indexOf('\"image\"') + 9));
                fR.larticleURL = recipe.substring(recipe.indexOf('\"url\"') + 7, recipe.indexOf('\"', recipe.indexOf('\"url\"') + 7));
                fR.ldietLabels = recipe.substring(recipe.indexOf('\"dietLabels\"') + 14, recipe.indexOf('\],', recipe.indexOf('\"dietLabels\"') + 14)).split('\"').join(' ');
                fR.lhealthLabels = recipe.substring(recipe.indexOf('\"healthLabels\"') + 16, recipe.indexOf('\],', recipe.indexOf('\"healthLabels\"') + 16)).split('\"').join(' ');
                fR.lingredients = recipe.substring(recipe.indexOf('\"ingredientLines\"') + 19, recipe.indexOf('\],', recipe.indexOf('\"ingredientLines\"') + 19)).split('\"').join(' ');
                fR.lcalories = Math.round(parseFloat(recipe.substring(recipe.indexOf('\"calories\"') + 11, recipe.indexOf(',', recipe.indexOf('\"calories\"') + 11)))) + '';
                // this.totalCal = this.totalCal + Number(fR.lcalories);
                fR.lservings = Math.round(parseFloat(recipe.substring(recipe.indexOf('\"yield\"') + 8, recipe.indexOf(',', recipe.indexOf('\"yield\"') + 8)))) + '';
                var totalDailyStr = recipe.substring(recipe.indexOf('\"totalDaily\"') + 14, recipe.indexOf('\},', recipe.indexOf('\"totalDaily\"') + 14));
                fR.ltotalDaily = Math.round(parseFloat(totalDailyStr.substring(totalDailyStr.indexOf('\"quantity\"') + 11, totalDailyStr.indexOf('\,', totalDailyStr.indexOf('\"quantity\"') + 11)))) + '\%';
                fR.lcalories = Math.round(parseFloat(fR.lcalories) / parseFloat(fR.lservings)) + '';
                fR.ltotalDaily = Math.round(parseFloat(fR.ltotalDaily) / parseFloat(fR.lservings)) + '';
                output.push(fR);
            });
            _this.searchlResults = output;
            localStorage.setItem('mealQuery', JSON.stringify(_this.lunch));
            localStorage.setItem('searchResults', JSON.stringify(_this.searchlResults));
        }, function (error) {
            console.error(error);
            _this.error = error;
            _this.messageService.add({ severity: 'error', summary: _this.error, life: 5000, detail: 'Search Failed!' });
        });
        this.mealPlanService.getmyDinner(dinner).subscribe(function (obj) {
            var str = JSON.stringify(obj);
            var output = [];
            //const output: MealPlan[] = [];
            str.substring(str.indexOf('\"recipe\"') + 12, str.length - 1).split('\"recipe\"').forEach(function (recipe) {
                var fR = {};
                fR.drecipeName = recipe.substring(recipe.indexOf('\"label\"') + 9, recipe.indexOf('\"', recipe.indexOf('\"label\"') + 9));
                console.log(fR.drecipeName);
                fR.dimageURL = recipe.substring(recipe.indexOf('\"image\"') + 9, recipe.indexOf('\"', recipe.indexOf('\"image\"') + 9));
                fR.darticleURL = recipe.substring(recipe.indexOf('\"url\"') + 7, recipe.indexOf('\"', recipe.indexOf('\"url\"') + 7));
                fR.ddietLabels = recipe.substring(recipe.indexOf('\"dietLabels\"') + 14, recipe.indexOf('\],', recipe.indexOf('\"dietLabels\"') + 14)).split('\"').join(' ');
                fR.dhealthLabels = recipe.substring(recipe.indexOf('\"healthLabels\"') + 16, recipe.indexOf('\],', recipe.indexOf('\"healthLabels\"') + 16)).split('\"').join(' ');
                fR.dingredients = recipe.substring(recipe.indexOf('\"ingredientLines\"') + 19, recipe.indexOf('\],', recipe.indexOf('\"ingredientLines\"') + 19)).split('\"').join(' ');
                fR.dcalories = Math.round(parseFloat(recipe.substring(recipe.indexOf('\"calories\"') + 11, recipe.indexOf(',', recipe.indexOf('\"calories\"') + 11)))) + '';
                // this.totalCal = this.totalCal + Number(fR.dcalories);
                //console.log(this.totalCal);
                fR.dservings = Math.round(parseFloat(recipe.substring(recipe.indexOf('\"yield\"') + 8, recipe.indexOf(',', recipe.indexOf('\"yield\"') + 8)))) + '';
                var totalDailyStr = recipe.substring(recipe.indexOf('\"totalDaily\"') + 14, recipe.indexOf('\},', recipe.indexOf('\"totalDaily\"') + 14));
                fR.dtotalDaily = Math.round(parseFloat(totalDailyStr.substring(totalDailyStr.indexOf('\"quantity\"') + 11, totalDailyStr.indexOf('\,', totalDailyStr.indexOf('\"quantity\"') + 11)))) + '\%';
                fR.dcalories = Math.round(parseFloat(fR.dcalories) / parseFloat(fR.dservings)) + '';
                fR.dtotalDaily = Math.round(parseFloat(fR.dtotalDaily) / parseFloat(fR.dservings)) + '';
                output.push(fR);
            });
            _this.searchdResults = output;
            localStorage.setItem('mealQuery', JSON.stringify(_this.dinner));
            localStorage.setItem('searchResults', JSON.stringify(_this.searchdResults));
        }, function (error) {
            console.error(error);
            _this.error = error;
            _this.messageService.add({ severity: 'error', summary: _this.error, life: 5000, detail: 'Search Failed!' });
        });
    };
    MealPlanComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-meal-plan',
            template: __webpack_require__(/*! ./meal-plan.component.html */ "./src/app/meal-plan/meal-plan.component.html"),
            providers: [primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"]],
            styles: [__webpack_require__(/*! ./meal-plan.component.css */ "./src/app/meal-plan/meal-plan.component.css")]
        }),
        __metadata("design:paramtypes", [_food_recipes_service__WEBPACK_IMPORTED_MODULE_1__["FoodRecipesService"],
            _welcome_meal_plan_service__WEBPACK_IMPORTED_MODULE_3__["MealPlanService"],
            primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"]])
    ], MealPlanComponent);
    return MealPlanComponent;
}());



/***/ }),

/***/ "./src/app/mental-health-forums.service.ts":
/*!*************************************************!*\
  !*** ./src/app/mental-health-forums.service.ts ***!
  \*************************************************/
/*! exports provided: MentalHealthForumsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MentalHealthForumsService", function() { return MentalHealthForumsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MentalHealthForumsService = /** @class */ (function () {
    function MentalHealthForumsService(http) {
        this.http = http;
    }
    MentalHealthForumsService.prototype.getForums = function () {
        return this.http.get('/api/MentalHealthForums');
    };
    MentalHealthForumsService.prototype.getLatestForums = function () {
        return this.http.get('/api/MentalHealthLatestForums');
    };
    MentalHealthForumsService.prototype.findForum = function (forum) {
        return this.http.get('/api/MentalHealthForums/' + forum);
    };
    MentalHealthForumsService.prototype.filterByTopic = function (topic) {
        return this.http.get('/api/FilterForumByTopic/' + topic);
    };
    MentalHealthForumsService.prototype.searchForForums = function (name) {
        return this.http.get('/api/SearchForForum/' + name);
    };
    MentalHealthForumsService.prototype.postForum = function (useremail, name, description, topic) {
        return this.http.get('/api/PostForum/' + useremail + '/' + name + '/' + description + '/' + topic);
    };
    MentalHealthForumsService.prototype.getReplies = function (name) {
        return this.http.get('/api/ForumReplies/' + name);
    };
    MentalHealthForumsService.prototype.addReply = function (useremail, name, reply) {
        return this.http.get('/api/AddReply/' + useremail + '/' + name + '/' + reply);
    };
    MentalHealthForumsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MentalHealthForumsService);
    return MentalHealthForumsService;
}());



/***/ }),

/***/ "./src/app/mh-articles/mh-articles.component.css":
/*!*******************************************************!*\
  !*** ./src/app/mh-articles/mh-articles.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".jumbotron {\r\n    padding-top: 2%;\r\n    padding-bottom: 3%;\r\n}\r\n\r\nh1 { \r\n    font-size: 2em;\r\n    font-weight: bold;\r\n}\r\n\r\nh2 {\r\n    display: block;\r\n    font-size: 1.5em;\r\n    font-weight: bold;\r\n}\r\n\r\n.Filter-Results {\r\n    font-family: 'Quicksand', sans-serif;\r\n    font-weight: 350;\r\n    position: absolute;\r\n    top: 330px;\r\n    width: 275px;\r\n}\r\n\r\n.Search-Bar {\r\n    font-family: 'Quicksand', sans-serif;\r\n    font-weight: 350;\r\n    position: absolute;\r\n    top: 330px;\r\n    left: 290px;\r\n    width: 960px;\r\n}\r\n\r\n.Search-Button {\r\n    font-family: 'Quicksand', sans-serif;\r\n    font-weight: 350;\r\n    position: absolute;\r\n    top: 330px;\r\n    left: 735px;\r\n    width: 960px;\r\n}\r\n\r\n.Search-Results {\r\n    font-family: 'Quicksand', sans-serif;\r\n    font-weight: 350;\r\n    position: absolute;\r\n    border-radius: 3px;\r\n    border: 1px solid lightgray;\r\n    top: 375px;\r\n    left: 290px;\r\n    width: 960px;\r\n    height: 400px;\r\n}\r\n\r\n.Search-Row-Info {\r\n    position: relative;\r\n    left: 235px;\r\n    top: -165px;\r\n    min-height: 180px;\r\n    margin-bottom: -75px;\r\n    margin-right: 235px;\r\n}\r\n\r\n.match1{\r\n    color: white;\r\n    position: absolute;\r\n    top: 20px;\r\n    left: 20px;\r\n    text-align: center;\r\n    white-space: nowrap;\r\n}\r\n\r\n.match2{\r\n    color: white;\r\n    position: absolute;\r\n    top: 20px;\r\n    left: 260px;\r\n    text-align: center;\r\n    white-space: nowrap;\r\n}\r\n\r\n.match3{\r\n    color: white;\r\n    position: absolute;\r\n    top: 20px;\r\n    left: 505px;\r\n    text-align: center;\r\n    white-space: nowrap;\r\n}\r\n\r\n.match4{\r\n    color: white;\r\n    position: absolute;\r\n    top: 20px;\r\n    left: 745px;\r\n    text-align: center;\r\n}\r\n\r\n.match5{\r\n    color: white;\r\n    position: absolute;\r\n    top: 200px;\r\n    left: 20px;\r\n    text-align: center;\r\n}\r\n\r\n.match6{\r\n    color: white;\r\n    position: absolute;\r\n    top: 200px;\r\n    left: 260px;\r\n    text-align: center;\r\n    white-space: nowrap;\r\n}\r\n\r\n.match7{\r\n    color: white;\r\n    position: absolute;\r\n    top: 200px;\r\n    left: 505px;\r\n    text-align: center;\r\n    white-space: nowrap;\r\n}\r\n\r\n.match8{\r\n    color: white;\r\n    position: absolute;\r\n    top: 200px;\r\n    left: 745px;\r\n    text-align: center;\r\n    white-space: nowrap;\r\n}\r\n\r\n.body{\r\n    font-size: 8;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWgtYXJ0aWNsZXMvbWgtYXJ0aWNsZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQiwyQkFBMkI7SUFDM0IsVUFBVTtJQUNWLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsU0FBUztJQUNULFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsV0FBVztJQUNYLGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFVBQVU7SUFDVixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFHQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBQ0E7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvbWgtYXJ0aWNsZXMvbWgtYXJ0aWNsZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5qdW1ib3Ryb24ge1xyXG4gICAgcGFkZGluZy10b3A6IDIlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDMlO1xyXG59XHJcblxyXG5oMSB7IFxyXG4gICAgZm9udC1zaXplOiAyZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuaDIge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5GaWx0ZXItUmVzdWx0cyB7XHJcbiAgICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCcsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogMzUwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAzMzBweDtcclxuICAgIHdpZHRoOiAyNzVweDtcclxufVxyXG5cclxuLlNlYXJjaC1CYXIge1xyXG4gICAgZm9udC1mYW1pbHk6ICdRdWlja3NhbmQnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDM1MDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMzMwcHg7XHJcbiAgICBsZWZ0OiAyOTBweDtcclxuICAgIHdpZHRoOiA5NjBweDtcclxufVxyXG5cclxuLlNlYXJjaC1CdXR0b24ge1xyXG4gICAgZm9udC1mYW1pbHk6ICdRdWlja3NhbmQnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDM1MDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMzMwcHg7XHJcbiAgICBsZWZ0OiA3MzVweDtcclxuICAgIHdpZHRoOiA5NjBweDtcclxufVxyXG5cclxuLlNlYXJjaC1SZXN1bHRzIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiAzNTA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgICB0b3A6IDM3NXB4O1xyXG4gICAgbGVmdDogMjkwcHg7XHJcbiAgICB3aWR0aDogOTYwcHg7XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG59XHJcblxyXG4uU2VhcmNoLVJvdy1JbmZvIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IDIzNXB4O1xyXG4gICAgdG9wOiAtMTY1cHg7XHJcbiAgICBtaW4taGVpZ2h0OiAxODBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IC03NXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMzVweDtcclxufVxyXG5cclxuLm1hdGNoMXtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMjBweDtcclxuICAgIGxlZnQ6IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcblxyXG4ubWF0Y2gye1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAyMHB4O1xyXG4gICAgbGVmdDogMjYwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcblxyXG4ubWF0Y2gze1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAyMHB4O1xyXG4gICAgbGVmdDogNTA1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcblxyXG4ubWF0Y2g0e1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAyMHB4O1xyXG4gICAgbGVmdDogNzQ1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLm1hdGNoNXtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMjAwcHg7XHJcbiAgICBsZWZ0OiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubWF0Y2g2e1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAyMDBweDtcclxuICAgIGxlZnQ6IDI2MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG5cclxuXHJcbi5tYXRjaDd7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDIwMHB4O1xyXG4gICAgbGVmdDogNTA1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcblxyXG4ubWF0Y2g4e1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAyMDBweDtcclxuICAgIGxlZnQ6IDc0NXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG4uYm9keXtcclxuICAgIGZvbnQtc2l6ZTogODtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/mh-articles/mh-articles.component.html":
/*!********************************************************!*\
  !*** ./src/app/mh-articles/mh-articles.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\r\n  <figure><img src=\"assets/image/heart.png\" width=\"60\" height=\"60\"  class=\"mx-auto d-block\"></figure>\r\n  <h1 style=\"text-align:center\" class=\"display-4\">Health Goals</h1>\r\n</div>\r\n\r\n\r\n<div class=\"Filter-Results\">\r\n<p-card header=\"Filter Results\" subheader=\"Type\">\r\n    &nbsp;\r\n    <p-checkbox name=\"symptoms\" value=\"therapist\" label=\"General Symptoms\"></p-checkbox>\r\n    <br/>\r\n    <br/>\r\n    &nbsp;\r\n    <p-checkbox name=\"symptoms\" value=\"depression\" label=\"Depression\"></p-checkbox>\r\n    <br/>\r\n    <br/>\r\n    &nbsp;\r\n    <p-checkbox name=\"symptoms\" value=\"suicidalthoughts\" label=\"Suicidal Thoughts\"></p-checkbox>\r\n    <br/>\r\n    <br/>\r\n    &nbsp;\r\n    <p-checkbox name=\"symptoms\" value=\"other\" label=\"Other\"></p-checkbox>\r\n    <br/>\r\n    <br/>\r\n    \r\n    <font color=\"grey\"><b>Article Type</b></font>\r\n    <br/>\r\n    <br/>\r\n    &nbsp;\r\n    <p-checkbox name=\"duration\" value=\"scholarly\" label=\"Scholarly\"></p-checkbox>\r\n    <br/>\r\n    <br/>\r\n    &nbsp;\r\n    <p-checkbox name=\"duration\" value=\"opinion\" label=\"Opinion\"></p-checkbox>\r\n    <br/>\r\n    <br/>\r\n    <font color=\"grey\"><b>Article Age</b></font>\r\n    <br/>\r\n    <br/>\r\n    &nbsp;\r\n    <p-checkbox name=\"age\" value=\"old\" label=\"<2000\"></p-checkbox>\r\n    &nbsp;\r\n    &nbsp;\r\n    <p-checkbox name=\"age\" value=\"3to5\" label=\"2000-2010\"></p-checkbox>\r\n    <br/>\r\n    <br/>\r\n    &nbsp;\r\n    <p-checkbox name=\"age\" value=\"5to10\" label=\">2010\"></p-checkbox>\r\n    &nbsp;\r\n</p-card>\r\n</div>\r\n\r\n<div class=\"Search-Bar\">\r\n<span class=\"ui-float-label\">\r\n    <input id=\"float-input\" type=\"text\" size=\"83\"> \r\n    <label for=\"float-input\">Search For Service</label>\r\n</span>\r\n</div>\r\n\r\n<div class=\"Search-Button\">\r\n<p-button label=\"Search\" id=\"searchButton\" style=\"display: none;\"></p-button>\r\n</div>\r\n\r\n<div class=\"Search-Results\">\r\n<div class=\"match1\">\r\n    <a href=\"https://teenlineonline.org/ask-teen-line/\" style=\"color:#000;\">\r\n        <figure><img src=\"assets/image/tll.png\" width=\"200\" height=\"100\" style=\"border:0.5px solid gray\">\r\n            <figcaption>Teenline</figcaption>\r\n            <p style=\"font-size: xx-small; width: 50px;\">Teenline.org<br>\r\n                <span style=\"font-size: x-small\" >Published 1980 </span></p>\r\n        </figure>\r\n    </a>\r\n</div>\r\n\r\n<div class=\"match2\">\r\n    <a href=\"https://stacks.cdc.gov/view/cdc/39008\" style=\"color: #000;\">\r\n        <figure><img src=\"assets/image/cdc.png\" width=\"200\" height=\"100\" style=\"border: 0.5px solid gray\">\r\n            <figcaption>Increase in Suicide in ...</figcaption>\r\n            <p style=\"font-size: xx-small; border-right: 925; border-left: 745; overflow: inherit\">US Department of Health and Human Services<br>\r\n                <span style=\"font-size: x-small\">Published April, 2016</span></p>\r\n        </figure>\r\n    </a>\r\n</div>\r\n\r\n<div class=\"match3\">\r\n    <a href=\"https://themighty.com/2019/03/second-parkland-shooting-survivor-dies-by-suicide/\" style=\"color:#000;\">\r\n        <figure><img src=\"assets/image/mh.png\" width=\"200\" height=\"100\" style=\"border:0.5px solid gray\">\r\n            <figcaption>Second Parkland Shooting Surv...</figcaption>\r\n            <p style=\"font-size: xx-small; width: 50px;\">Paige Wyant<br>\r\n                <span style=\"font-size: x-small\" >Published March, 2019 </span></p>\r\n        </figure>\r\n    </a>\r\n</div>\r\n\r\n<div class=\"match4\">\r\n    <a href=\"https://psycnet.apa.org/record/2006-20880-000\" style=\"color: #000;\">\r\n        <figure><img src=\"assets/image/apa.png\" width=\"200\" height=\"100\" style=\"border: 0.5px solid gray\">\r\n            <figcaption>Current concepts of positive mental health.</figcaption>\r\n            <p style=\"font-size: xx-small; border-right: 925; border-left: 745; overflow: inherit\">Jahoda, M.<br>\r\n                <span style=\"font-size: x-small\">Published 1958</span></p>\r\n        </figure>\r\n    </a>\r\n</div>\r\n\r\n<div class=\"match5\">\r\n    <a href=\"https://psycnet.apa.org/search/display?id=87ae849b-c03f-cfaf-e2bc-13c466d9c435&recordId=3&tab=PA&page=1&display=25&sort=PublicationYearMSSort%20desc,AuthorSort%20asc&sr=1\" style=\"color: #000;\">\r\n        <figure><img src=\"assets/image/apa.png\" width=\"200\" height=\"100\" style=\"border: 0.5px solid gray\">\r\n            <figcaption>Moral injury and suicidality...</figcaption>\r\n            <p style=\"font-size: xx-small; border-right: 925; border-left: 745; overflow: inherit\">Kelley, M.<br>\r\n                <span style=\"font-size: x-small\">Published 2019</span></p>\r\n        </figure>\r\n    </a>\r\n</div>\r\n\r\n<div class=\"match6\">\r\n    <a href=\"https://www.npr.org/sections/health-shots/2019/03/21/705545014/new-postpartum-depression-drug-could-be-hard-to-access-for-moms-most-in-need\" style=\"color: #000;\">\r\n        <figure><img src=\"assets/image/npr.png\" width=\"200\" height=\"100\" style=\"border: 0.5px solid gray\">\r\n            <figcaption>New Postpartum Depress...</figcaption>\r\n            <p style=\"font-size: xx-small; border-right: 925; border-left: 745; overflow: inherit\">Kelley, M.<br>\r\n                <span style=\"font-size: x-small\">Published March, 2019</span></p>\r\n        </figure>\r\n    </a>\r\n</div>\r\n\r\n\r\n<div class=\"match7\">\r\n    <a href=\"https://www.washingtonpost.com/opinions/we-must-treat-mental-and-bodily-health-the-same-its-a-matter-of-human-rights/2018/09/28/1348d73a-c263-11e8-97a5-ab1e46bb3bc7_story.html?utm_term=.a01f3a1c19a1\" style=\"color: #000;\">\r\n        <figure><img src=\"assets/image/wp.jpeg\" width=\"200\" height=\"120\" style=\"border: 0.5px solid gray\">\r\n            <figcaption>We Must Treat Mental...</figcaption>\r\n            <p style=\"font-size: xx-small; border-right: 925; border-left: 745; overflow: inherit\">Rosalynn Carter <br>\r\n                <span style=\"font-size: x-small\">Published September, 2018</span></p>\r\n        </figure>\r\n    </a>\r\n</div>\r\n\r\n<div class=\"match8\">\r\n    <a href=\"http://time.com/5304227/suicide-on-the-rise/\" style=\"color: #000;\">\r\n        <figure><img src=\"assets/image/time.png\" width=\"200\" height=\"120\" style=\"border: 0.5px solid gray\">\r\n            <figcaption>Suicide on the Rise</figcaption>\r\n            <p style=\"font-size: xx-small; border-right: 925; border-left: 745; overflow: inherit\">Jaime Ducharme<br>\r\n                <span style=\"font-size: x-small\">Published June, 2018</span></p>\r\n        </figure>\r\n    </a>\r\n</div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/mh-articles/mh-articles.component.ts":
/*!******************************************************!*\
  !*** ./src/app/mh-articles/mh-articles.component.ts ***!
  \******************************************************/
/*! exports provided: MhArticlesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MhArticlesComponent", function() { return MhArticlesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MhArticlesComponent = /** @class */ (function () {
    function MhArticlesComponent() {
    }
    MhArticlesComponent.prototype.ngOnInit = function () {
    };
    MhArticlesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mh-articles',
            template: __webpack_require__(/*! ./mh-articles.component.html */ "./src/app/mh-articles/mh-articles.component.html"),
            styles: [__webpack_require__(/*! ./mh-articles.component.css */ "./src/app/mh-articles/mh-articles.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MhArticlesComponent);
    return MhArticlesComponent;
}());



/***/ }),

/***/ "./src/app/mh-forums-details/mh-forums-details.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/mh-forums-details/mh-forums-details.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".jumbotron {\r\n    padding-top:2%;\r\n    padding-bottom: 3%;\r\n}\r\nh1 { \r\n    font-size: 2em;\r\n    font-weight: bold;\r\n}\r\nh2 {\r\n    display: block;\r\n    font-size: 1.5em;\r\n    font-weight: bold;\r\n}\r\na {\r\n    text-decoration: none;\r\n}\r\np {\r\n    line-height:20px;\r\n    overflow:hidden;\r\n}\r\n.Heading2 {\r\n    font-family: 'Quicksand', sans-serif;\r\n    position: absolute;\r\n    top: 260px;\r\n    left: 25px;\r\n    font-size: 25px;\r\n}\r\n.Filter-Results {\r\n    font-family: 'Quicksand', sans-serif;\r\n    font-weight: 350;\r\n    position: absolute;\r\n    left: 25px;\r\n    top: 325px;\r\n    width: 200px;\r\n}\r\n.Start-Forum-Button {\r\n    font-family: 'Quicksand', sans-serif;\r\n    font-weight: 350;\r\n    position: absolute;\r\n    top: 325px;\r\n    left: 240px;\r\n    width: 200px;\r\n}\r\n.Back-Button {\r\n    font-family: 'Quicksand', sans-serif;\r\n    font-weight: 350;\r\n    position: absolute;\r\n    top: 325px;\r\n    left: 240px;\r\n    width: 200px;\r\n}\r\n.Search-Forum {\r\n    font-family: 'Quicksand', sans-serif;\r\n    font-weight: 350;\r\n    position: absolute;\r\n    top: 325px;\r\n    left: 452px;\r\n}\r\n.Search-Button {\r\n    font-family: 'Quicksand', sans-serif;\r\n    font-weight: 350;\r\n    position: absolute;\r\n    top: 325px;   \r\n    left: 805px;\r\n}\r\n.Dropdown-Forum {\r\n    font-family: 'Quicksand', sans-serif;\r\n    font-weight: 350;\r\n    position: absolute;\r\n    top: 325px;\r\n    left: 885px;\r\n}\r\n.Search-Results {\r\n    font-family: 'Quicksand', sans-serif;\r\n    font-weight: 250;\r\n    position: absolute;\r\n    top: 365px;\r\n    left: 240px;\r\n    width: 753px;\r\n    bottom: 100px;\r\n}\r\n.Reply-Results {\r\n    font-family: 'Quicksand', sans-serif;\r\n    font-weight: 250;\r\n    position: relative;\r\n    left: 50px;\r\n    width: 703px;\r\n}\r\n.Latest-Forums {\r\n    font-family: 'Quicksand', sans-serif;\r\n    font-weight: 350;\r\n    list-style: none;\r\n    position: absolute;\r\n    top: 325px;\r\n    left: 1015px;\r\n    width: 230px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWgtZm9ydW1zLWRldGFpbHMvbWgtZm9ydW1zLWRldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25CO0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixVQUFVO0lBQ1YsZUFBZTtBQUNuQjtBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFVBQVU7SUFDVixZQUFZO0FBQ2hCO0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztJQUNYLFlBQVk7QUFDaEI7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixXQUFXO0lBQ1gsWUFBWTtBQUNoQjtBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFdBQVc7QUFDZjtBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFdBQVc7QUFDZjtBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFdBQVc7QUFDZjtBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtBQUNqQjtBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFlBQVk7QUFDaEI7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsWUFBWTtJQUNaLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9taC1mb3J1bXMtZGV0YWlscy9taC1mb3J1bXMtZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmp1bWJvdHJvbiB7XHJcbiAgICBwYWRkaW5nLXRvcDoyJTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAzJTtcclxufVxyXG5oMSB7IFxyXG4gICAgZm9udC1zaXplOiAyZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5oMiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbnAge1xyXG4gICAgbGluZS1oZWlnaHQ6MjBweDtcclxuICAgIG92ZXJmbG93OmhpZGRlbjtcclxufVxyXG5cclxuLkhlYWRpbmcyIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMjYwcHg7XHJcbiAgICBsZWZ0OiAyNXB4O1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG59XHJcblxyXG4uRmlsdGVyLVJlc3VsdHMge1xyXG4gICAgZm9udC1mYW1pbHk6ICdRdWlja3NhbmQnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDM1MDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDI1cHg7XHJcbiAgICB0b3A6IDMyNXB4O1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG59XHJcblxyXG4uU3RhcnQtRm9ydW0tQnV0dG9uIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiAzNTA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDMyNXB4O1xyXG4gICAgbGVmdDogMjQwcHg7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbn1cclxuXHJcbi5CYWNrLUJ1dHRvbiB7XHJcbiAgICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCcsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogMzUwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAzMjVweDtcclxuICAgIGxlZnQ6IDI0MHB4O1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG59XHJcblxyXG4uU2VhcmNoLUZvcnVtIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiAzNTA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDMyNXB4O1xyXG4gICAgbGVmdDogNDUycHg7XHJcbn1cclxuXHJcbi5TZWFyY2gtQnV0dG9uIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiAzNTA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDMyNXB4OyAgIFxyXG4gICAgbGVmdDogODA1cHg7XHJcbn1cclxuXHJcbi5Ecm9wZG93bi1Gb3J1bSB7XHJcbiAgICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCcsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogMzUwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAzMjVweDtcclxuICAgIGxlZnQ6IDg4NXB4O1xyXG59XHJcblxyXG4uU2VhcmNoLVJlc3VsdHMge1xyXG4gICAgZm9udC1mYW1pbHk6ICdRdWlja3NhbmQnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDI1MDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMzY1cHg7XHJcbiAgICBsZWZ0OiAyNDBweDtcclxuICAgIHdpZHRoOiA3NTNweDtcclxuICAgIGJvdHRvbTogMTAwcHg7XHJcbn1cclxuXHJcbi5SZXBseS1SZXN1bHRzIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiAyNTA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiA1MHB4O1xyXG4gICAgd2lkdGg6IDcwM3B4O1xyXG59XHJcblxyXG4uTGF0ZXN0LUZvcnVtcyB7XHJcbiAgICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCcsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogMzUwO1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMzI1cHg7XHJcbiAgICBsZWZ0OiAxMDE1cHg7XHJcbiAgICB3aWR0aDogMjMwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/mh-forums-details/mh-forums-details.component.html":
/*!********************************************************************!*\
  !*** ./src/app/mh-forums-details/mh-forums-details.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\r\n  <figure><img src=\"assets/image/heart.png\" width=\"60\" height=\"60\"  class=\"mx-auto d-block\"></figure>\r\n  <h1 style=\"text-align:center\" class=\"display-4\">Health Goals</h1>\r\n</div>\r\n\r\n<p class = \"Heading2\"><b>Mental Health Forums: <i>A safe discussion space for anyone who needs it</i></b></p>\r\n\r\n<div class=\"Filter-Results\">\r\n  <p-card header=\"Filter Results\" subheader=\"Mental Health Topics\">\r\n    <p-checkbox name=\"forumtype\" value=\"depression\" label=\"Depression\" [(ngModel)]=\"selectedValues\"></p-checkbox>\r\n    <br/>\r\n    <br/>\r\n    <p-checkbox name=\"forumtype\" value=\"anxiety\" label=\"Anxiety\" [(ngModel)]=\"selectedValues\"></p-checkbox>\r\n    <br/>\r\n    <br/>\r\n    <p-checkbox name=\"forumtype\" value=\"ptsd\" label=\"PTSD\" [(ngModel)]=\"selectedValues\"></p-checkbox>\r\n    <br/>\r\n    <br/>\r\n    <p-checkbox name=\"forumtype\" value=\"phobia\" label=\"Phobia\" [(ngModel)]=\"selectedValues\"></p-checkbox>\r\n    <br/>\r\n    <br/>\r\n    <p-checkbox name=\"forumtype\" value=\"eating disorder\" label=\"Eating Disorder\" [(ngModel)]=\"selectedValues\"></p-checkbox>\r\n    <br/>\r\n    <br/>\r\n    <p-checkbox name=\"forumtype\" value=\"self harm\" label=\"Self Harm\" [(ngModel)]=\"selectedValues\"></p-checkbox>\r\n    <br/>\r\n    <br/>\r\n    <p-checkbox name=\"forumtype\" value=\"lgbtq\" label=\"LGBTQ\" [(ngModel)]=\"selectedValues\"></p-checkbox>\r\n    <br/>\r\n    <br/>\r\n    <p-checkbox name=\"forumtype\" value=\"panic disorder\" label=\"Panic Disorder\" [(ngModel)]=\"selectedValues\"></p-checkbox>\r\n    <br/>\r\n    <br/>\r\n    <button type=\"button\" (click) = \"filterByTopic(selectedValues)\" pButton label=\"Save\"></button>\r\n    <br/>\r\n    <br/>\r\n    <button type=\"button\" (click) = \"getForums()\" pButton label=\"Clear Filters\"></button>\r\n</p-card>\r\n</div>\r\n\r\n<button type=\"button\" (click) = \"backClicked()\" pButton label=\"Back to all Forums\" class = \"Back-Button\"></button>\r\n\r\n\r\n<div class=\"Search-Results\">\r\n      <p-card>\r\n        <h1>{{forumName}}</h1>\r\n        <hr>\r\n        <h6><p *ngIf=\"forumDetails\">{{ forumDetails?.Description }}</p></h6>\r\n        <br>\r\n        <br>\r\n        <h6 ALIGN=\"RIGHT\" *ngIf=\"forumDetails\">Posted by: <b>{{ forumDetails?.Email }}</b></h6>\r\n      </p-card>\r\n      <br>\r\n\r\n    <div class = \"Reply-Results\">\r\n        <p-table [value]=\"replies\">\r\n            <ng-template pTemplate=\"body\" let-reply>\r\n              <p-card>\r\n                <p><b>{{reply.Description}}</b></p>\r\n                <br>\r\n                <h6 ALIGN=\"RIGHT\">Posted by: <b>{{reply.Email}}</b></h6>\r\n              </p-card>\r\n              <br>\r\n            </ng-template>\r\n        </p-table>\r\n\r\n        <p-card *ngIf=\"!loggedIn\">\r\n          <h5><b>Please sign in or sign up to reply to this forum!</b></h5>\r\n        </p-card>\r\n\r\n          <p-card *ngIf=\"loggedIn\">\r\n            <h5><b>Reply to this forum:</b></h5>\r\n            <textarea autoresize=\"autoResize\" cols=\"93\" pInputTextarea rows=\"5\" [(ngModel)]=\"NewReply\"></textarea>\r\n            <br/>\r\n            <br/>\r\n            <button type=\"button\" (click) = \"addNewReply(user.Email, NewReply)\" pButton label=\"Add Reply\"></button>\r\n          </p-card>\r\n          <br>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/mh-forums-details/mh-forums-details.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/mh-forums-details/mh-forums-details.component.ts ***!
  \******************************************************************/
/*! exports provided: MhForumsDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MhForumsDetailsComponent", function() { return MhForumsDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _mental_health_forums_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mental-health-forums.service */ "./src/app/mental-health-forums.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _welcome_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../welcome.service */ "./src/app/welcome.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MhForumsDetailsComponent = /** @class */ (function () {
    function MhForumsDetailsComponent(forumsService, mentalHealthForumsService, route, userService, _location) {
        var _this = this;
        this.forumsService = forumsService;
        this.mentalHealthForumsService = mentalHealthForumsService;
        this.route = route;
        this.userService = userService;
        this._location = _location;
        this.loggedIn = false;
        route.paramMap.subscribe(function (paramMap) {
            _this.forumName = paramMap.get('forum');
            mentalHealthForumsService.findForum(_this.forumName).subscribe(function (data) {
                _this.forumDetails = data;
            }, function (error) {
                if (error.status === 404) {
                    alert('Forum not found');
                }
                else {
                    console.error(error.status + ' - ' + error.body);
                    alert('An error occurred on the server. Please check the console.');
                }
            });
            mentalHealthForumsService.getReplies(_this.forumName).subscribe(function (data) {
                _this.replies = data;
            }, function (error) {
                if (error.status === 404) {
                    alert('Replies not found');
                }
                else {
                    console.error(error.status + ' - ' + error.body);
                    alert('An error occurred on the server. Please check the console.');
                }
            });
        });
    }
    MhForumsDetailsComponent.prototype.backClicked = function () {
        this._location.back();
    };
    MhForumsDetailsComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem("loggedIn") == "true") {
            this.loggedIn = true;
            this.get_userdata(localStorage.getItem("ID"));
        }
        else {
            this.loggedIn = false;
            localStorage.clear();
            localStorage.setItem("loggedIn", "false");
        }
    };
    MhForumsDetailsComponent.prototype.get_userdata = function (ID) {
        var _this = this;
        this.userService.get_userdata(ID).subscribe(function (data) {
            _this.user = data;
        }, function (error) {
            alert("unable to get user data");
        });
    };
    MhForumsDetailsComponent.prototype.getForums = function () {
        var _this = this;
        this.forumsService.getForums().subscribe(function (data) {
            _this.forums = data;
        }, function (error) {
            alert('Could not retrieve a list of forums');
        });
    };
    MhForumsDetailsComponent.prototype.findForum = function (forum) {
        var _this = this;
        this.forumsService.findForum(forum).subscribe(function (data) {
            _this.forums = data;
        }, function (error) {
            alert('Could not find this forum');
        });
    };
    MhForumsDetailsComponent.prototype.filterByTopic = function (topic) {
        var _this = this;
        this.forumsService.filterByTopic(topic).subscribe(function (data) {
            _this.forums = data;
        }, function (error) {
            alert('Could not retrieve a list of forums with this topic');
        });
    };
    MhForumsDetailsComponent.prototype.addNewReply = function (useremail, reply) {
        var _this = this;
        this.forumsService.addReply(useremail, this.forumName, reply).subscribe(function (data) {
            _this.forums = data;
            alert('Reply posted');
        }, function (error) {
            alert('Error in adding reply');
        });
        this._location.back();
    };
    MhForumsDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mh-forums-details',
            template: __webpack_require__(/*! ./mh-forums-details.component.html */ "./src/app/mh-forums-details/mh-forums-details.component.html"),
            styles: [__webpack_require__(/*! ./mh-forums-details.component.css */ "./src/app/mh-forums-details/mh-forums-details.component.css")]
        }),
        __metadata("design:paramtypes", [_mental_health_forums_service__WEBPACK_IMPORTED_MODULE_2__["MentalHealthForumsService"],
            _mental_health_forums_service__WEBPACK_IMPORTED_MODULE_2__["MentalHealthForumsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _welcome_service__WEBPACK_IMPORTED_MODULE_4__["WelcomeService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], MhForumsDetailsComponent);
    return MhForumsDetailsComponent;
}());



/***/ }),

/***/ "./src/app/mh-forums/mh-forums.component.css":
/*!***************************************************!*\
  !*** ./src/app/mh-forums/mh-forums.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".jumbotron {\r\n    padding-top:2%;\r\n    padding-bottom: 3%;\r\n}\r\nh1 { \r\n    font-size: 2em;\r\n    font-weight: bold;\r\n}\r\nh2 {\r\n    display: block;\r\n    font-size: 1.5em;\r\n    font-weight: bold;\r\n}\r\na {\r\n    text-decoration: none;\r\n}\r\np {\r\n    height:65px;\r\n    line-height:20px;\r\n    overflow:hidden;\r\n}\r\n.Heading2 {\r\n    font-family: 'Quicksand', sans-serif;\r\n    position: absolute;\r\n    top: 260px;\r\n    left: 25px;\r\n    font-size: 25px;\r\n}\r\n.Filter-Results {\r\n    font-family: 'Quicksand', sans-serif;\r\n    font-weight: 350;\r\n    position: absolute;\r\n    left: 25px;\r\n    top: 325px;\r\n    width: 200px;\r\n}\r\n.Start-Forum-Button {\r\n    font-family: 'Quicksand', sans-serif;\r\n    font-weight: 350;\r\n    position: absolute;\r\n    top: 325px;\r\n    left: 240px;\r\n    width: 200px;\r\n}\r\n.Search-Forum {\r\n    font-family: 'Quicksand', sans-serif;\r\n    font-weight: 350;\r\n    position: absolute;\r\n    top: 325px;\r\n    left: 452px;\r\n}\r\n.Search-Button {\r\n    font-family: 'Quicksand', sans-serif;\r\n    font-weight: 350;\r\n    position: absolute;\r\n    top: 325px;   \r\n    left: 920px;\r\n}\r\n.Dropdown-Forum {\r\n    font-family: 'Quicksand', sans-serif;\r\n    font-weight: 350;\r\n    position: absolute;\r\n    top: 325px;\r\n    left: 885px;\r\n}\r\n.Search-Results {\r\n    font-family: 'Quicksand', sans-serif;\r\n    font-weight: 250;\r\n    position: absolute;\r\n    top: 365px;\r\n    left: 240px;\r\n    width: 753px;\r\n    bottom: 100px;\r\n}\r\n.Latest-Forums {\r\n    font-family: 'Quicksand', sans-serif;\r\n    font-weight: 350;\r\n    list-style: none;\r\n    position: absolute;\r\n    top: 325px;\r\n    left: 1015px;\r\n    width: 230px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWgtZm9ydW1zL21oLWZvcnVtcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7QUFFQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUVBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25CO0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixVQUFVO0lBQ1YsZUFBZTtBQUNuQjtBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFVBQVU7SUFDVixZQUFZO0FBQ2hCO0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztJQUNYLFlBQVk7QUFDaEI7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixXQUFXO0FBQ2Y7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixXQUFXO0FBQ2Y7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixXQUFXO0FBQ2Y7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7QUFDakI7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsWUFBWTtJQUNaLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9taC1mb3J1bXMvbWgtZm9ydW1zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuanVtYm90cm9uIHtcclxuICAgIHBhZGRpbmctdG9wOjIlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDMlO1xyXG59XHJcbmgxIHsgXHJcbiAgICBmb250LXNpemU6IDJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbmgyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5hIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxucCB7XHJcbiAgICBoZWlnaHQ6NjVweDtcclxuICAgIGxpbmUtaGVpZ2h0OjIwcHg7XHJcbiAgICBvdmVyZmxvdzpoaWRkZW47XHJcbn1cclxuXHJcbi5IZWFkaW5nMiB7XHJcbiAgICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCcsIHNhbnMtc2VyaWY7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDI2MHB4O1xyXG4gICAgbGVmdDogMjVweDtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG5cclxuLkZpbHRlci1SZXN1bHRzIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiAzNTA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAyNXB4O1xyXG4gICAgdG9wOiAzMjVweDtcclxuICAgIHdpZHRoOiAyMDBweDtcclxufVxyXG5cclxuLlN0YXJ0LUZvcnVtLUJ1dHRvbiB7XHJcbiAgICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCcsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogMzUwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAzMjVweDtcclxuICAgIGxlZnQ6IDI0MHB4O1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG59XHJcblxyXG4uU2VhcmNoLUZvcnVtIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiAzNTA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDMyNXB4O1xyXG4gICAgbGVmdDogNDUycHg7XHJcbn1cclxuXHJcbi5TZWFyY2gtQnV0dG9uIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiAzNTA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDMyNXB4OyAgIFxyXG4gICAgbGVmdDogOTIwcHg7XHJcbn1cclxuXHJcbi5Ecm9wZG93bi1Gb3J1bSB7XHJcbiAgICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCcsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogMzUwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAzMjVweDtcclxuICAgIGxlZnQ6IDg4NXB4O1xyXG59XHJcblxyXG4uU2VhcmNoLVJlc3VsdHMge1xyXG4gICAgZm9udC1mYW1pbHk6ICdRdWlja3NhbmQnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDI1MDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMzY1cHg7XHJcbiAgICBsZWZ0OiAyNDBweDtcclxuICAgIHdpZHRoOiA3NTNweDtcclxuICAgIGJvdHRvbTogMTAwcHg7XHJcbn1cclxuXHJcbi5MYXRlc3QtRm9ydW1zIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiAzNTA7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAzMjVweDtcclxuICAgIGxlZnQ6IDEwMTVweDtcclxuICAgIHdpZHRoOiAyMzBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/mh-forums/mh-forums.component.html":
/*!****************************************************!*\
  !*** ./src/app/mh-forums/mh-forums.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\r\n    <figure><img src=\"assets/image/heart.png\" width=\"60\" height=\"60\"  class=\"mx-auto d-block\"></figure>\r\n    <h1 style=\"text-align:center\" class=\"display-4\">Health Goals</h1>\r\n</div>\r\n\r\n<p class = \"Heading2\"><b>Mental Health Forums: <i>A safe discussion space for anyone who needs it</i></b></p>\r\n\r\n<div class=\"Filter-Results\">\r\n    <p-card header=\"Filter Results\" subheader=\"Mental Health Topics\">\r\n      <p-checkbox name=\"forumtype\" value=\"depression\" label=\"Depression\" [(ngModel)]=\"selectedValues\"></p-checkbox>\r\n      <br/>\r\n      <br/>\r\n      <p-checkbox name=\"forumtype\" value=\"anxiety\" label=\"Anxiety\" [(ngModel)]=\"selectedValues\"></p-checkbox>\r\n      <br/>\r\n      <br/>\r\n      <p-checkbox name=\"forumtype\" value=\"ptsd\" label=\"PTSD\" [(ngModel)]=\"selectedValues\"></p-checkbox>\r\n      <br/>\r\n      <br/>\r\n      <p-checkbox name=\"forumtype\" value=\"phobia\" label=\"Phobia\" [(ngModel)]=\"selectedValues\"></p-checkbox>\r\n      <br/>\r\n      <br/>\r\n      <p-checkbox name=\"forumtype\" value=\"eating disorder\" label=\"Eating Disorder\" [(ngModel)]=\"selectedValues\"></p-checkbox>\r\n      <br/>\r\n      <br/>\r\n      <p-checkbox name=\"forumtype\" value=\"self harm\" label=\"Self Harm\" [(ngModel)]=\"selectedValues\"></p-checkbox>\r\n      <br/>\r\n      <br/>\r\n      <p-checkbox name=\"forumtype\" value=\"lgbtq\" label=\"LGBTQ\" [(ngModel)]=\"selectedValues\"></p-checkbox>\r\n      <br/>\r\n      <br/>\r\n      <p-checkbox name=\"forumtype\" value=\"panic disorder\" label=\"Panic Disorder\" [(ngModel)]=\"selectedValues\"></p-checkbox>\r\n      <br/>\r\n      <br/>\r\n      <button type=\"button\" (click) = \"filterByTopic(selectedValues)\" pButton label=\"Save\"></button>\r\n      <br/>\r\n      <br/>\r\n      <button type=\"button\" (click) = \"getForums()\" pButton label=\"Clear Filters\"></button>\r\n  </p-card>\r\n</div>\r\n\r\n  <button type=\"button\" routerLink = \"/mh-start\" pButton label=\"Start a Forum\" class = \"Start-Forum-Button\" *ngIf=\"loggedIn\"></button>\r\n\r\n  <button type=\"button\" (click) = \"SignInToStartForum()\" pButton label=\"Start a Forum\" class = \"Start-Forum-Button\" *ngIf=\"!loggedIn\"></button>\r\n\r\n<div class=\"Search-Forum\">\r\n  <span class=\"ui-float-label\">\r\n      <input id=\"float-input\" type=\"text\" size=\"55\" pInputTextarea [(ngModel)]=\"input\"> \r\n  </span>\r\n</div>\r\n\r\n<button type=\"button\" (click) = \"searchForForums(input)\" pButton label=\"Search\" class = \"Search-Button\"></button>\r\n\r\n<br/>\r\n<br/>\r\n\r\n<div class=\"Search-Results\">\r\n  <p-table [value]=\"forums\" [paginator]=\"true\" [rows]=\"5\">\r\n    <ng-template pTemplate=\"body\" let-forum>\r\n      <p-card>\r\n          <a routerLink = \"/mh-forums/{{ forum.NameOfForum }}\"><h2>{{forum.NameOfForum}}</h2></a>\r\n        <hr>\r\n        <p><b>{{forum.Description}}</b></p>\r\n        <br>\r\n        <b><a routerLink = \"/mh-forums/{{ forum.NameOfForum }}\">Read More</a></b>\r\n        <br>\r\n        <br>\r\n        <h6 ALIGN=\"RIGHT\">Posted by: <b>{{forum.Email}}</b></h6>\r\n      </p-card>\r\n      <br>\r\n    </ng-template>\r\n  </p-table>\r\n  <br>\r\n</div>\r\n\r\n<div class=\"Latest-Forums\">\r\n  <h2>Latest Forums</h2>\r\n    <p-table [value]=\"latestForums\">\r\n        <ng-template pTemplate=\"body\" let-latestForum>\r\n          <p-card>\r\n            <a routerLink = \"/mh-forums/{{ latestForum.NameOfForum }}\"><b>{{ latestForum.ForumNumber }}.</b> {{ latestForum.NameOfForum }}</a>\r\n          </p-card>\r\n        </ng-template>\r\n    </p-table>\r\n</div>\r\n\r\n<!--\r\n\r\n<div class=\"Latest-Forums\">\r\n  <h2>Latest Forums</h2>\r\n    <p-table [value]=\"latestForums\">\r\n        <ng-template pTemplate=\"body\" let-latestForum>\r\n          <tr>\r\n            <a routerLink = \"/mh-forums/{{ latestForum.NameOfForum }}\"><b>{{ latestForum.ForumNumber }}.</b> {{ latestForum.NameOfForum }}</a>\r\n          </tr>\r\n        </ng-template>\r\n    </p-table>\r\n</div>\r\n\r\n-->"

/***/ }),

/***/ "./src/app/mh-forums/mh-forums.component.ts":
/*!**************************************************!*\
  !*** ./src/app/mh-forums/mh-forums.component.ts ***!
  \**************************************************/
/*! exports provided: MhForumsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MhForumsComponent", function() { return MhForumsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mental_health_forums_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mental-health-forums.service */ "./src/app/mental-health-forums.service.ts");
/* harmony import */ var _welcome_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../welcome.service */ "./src/app/welcome.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MhForumsComponent = /** @class */ (function () {
    function MhForumsComponent(forumsService, userService) {
        this.forumsService = forumsService;
        this.userService = userService;
        this.loggedIn = false;
    }
    MhForumsComponent.prototype.ngOnInit = function () {
        this.getForums();
        this.getLatestForums();
        //if(localStorage.getItem("loggedIn") == "true"){
        //this.examplename = localStorage.getItem("ID");
        //}
        if (localStorage.getItem("loggedIn") == "true") {
            this.loggedIn = true;
            this.get_userdata(localStorage.getItem("ID"));
        }
        else {
            this.loggedIn = false;
            localStorage.clear();
            localStorage.setItem("loggedIn", "false");
        }
    };
    MhForumsComponent.prototype.get_userdata = function (ID) {
        var _this = this;
        this.userService.get_userdata(ID).subscribe(function (data) {
            _this.user = data;
        }, function (error) {
            alert("unable to get user data");
        });
    };
    MhForumsComponent.prototype.getForums = function () {
        var _this = this;
        this.forumsService.getForums().subscribe(function (data) {
            _this.forums = data;
        }, function (error) {
            alert('Could not retrieve a list of forums');
        });
    };
    MhForumsComponent.prototype.getLatestForums = function () {
        var _this = this;
        this.forumsService.getLatestForums().subscribe(function (data) {
            _this.latestForums = data;
        }, function (error) {
            alert('Could not retrieve a list of latest forums');
        });
    };
    MhForumsComponent.prototype.findForum = function (forum) {
        var _this = this;
        this.forumsService.findForum(forum).subscribe(function (data) {
            _this.forums = data;
        }, function (error) {
            alert('Could not find this forum');
        });
    };
    MhForumsComponent.prototype.filterByTopic = function (topic) {
        var _this = this;
        this.forumsService.filterByTopic(topic).subscribe(function (data) {
            _this.forums = data;
        }, function (error) {
            alert('Could not retrieve a list of forums with this topic');
        });
    };
    MhForumsComponent.prototype.searchForForums = function (name) {
        var _this = this;
        this.forumsService.searchForForums(name).subscribe(function (data) {
            _this.forums = data;
        }, function (error) {
            alert('No forums found');
        });
    };
    MhForumsComponent.prototype.SignInToStartForum = function () {
        alert('Please sign in or sign up to start a forum!');
    };
    MhForumsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mh-forums',
            template: __webpack_require__(/*! ./mh-forums.component.html */ "./src/app/mh-forums/mh-forums.component.html"),
            styles: [__webpack_require__(/*! ./mh-forums.component.css */ "./src/app/mh-forums/mh-forums.component.css")]
        }),
        __metadata("design:paramtypes", [_mental_health_forums_service__WEBPACK_IMPORTED_MODULE_1__["MentalHealthForumsService"],
            _welcome_service__WEBPACK_IMPORTED_MODULE_2__["WelcomeService"]])
    ], MhForumsComponent);
    return MhForumsComponent;
}());



/***/ }),

/***/ "./src/app/mh-start-forum/mh-start-forum.component.css":
/*!*************************************************************!*\
  !*** ./src/app/mh-start-forum/mh-start-forum.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".jumbotron {\r\n    padding-top:2%;\r\n    padding-bottom: 3%;\r\n}\r\nh1 { \r\n    font-size: 2em;\r\n    font-weight: bold;\r\n}\r\nh2 {\r\n    display: block;\r\n    font-size: 1.5em;\r\n    font-weight: bold;\r\n}\r\na {\r\n    text-decoration: none;\r\n}\r\np {\r\n    height:65px;\r\n    line-height:20px;\r\n    overflow:hidden;\r\n}\r\n.Heading2 {\r\n    font-family: 'Quicksand', sans-serif;\r\n    position: absolute;\r\n    top: 260px;\r\n    left: 25px;\r\n    font-size: 25px;\r\n}\r\n.Filter-Results {\r\n    font-family: 'Quicksand', sans-serif;\r\n    font-weight: 350;\r\n    position: absolute;\r\n    left: 25px;\r\n    top: 325px;\r\n    width: 200px;\r\n}\r\n.Start-Forum-Button {\r\n    font-family: 'Quicksand', sans-serif;\r\n    font-weight: 350;\r\n    position: absolute;\r\n    top: 325px;\r\n    left: 240px;\r\n    width: 200px;\r\n}\r\n.Back-Button {\r\n    font-family: 'Quicksand', sans-serif;\r\n    font-weight: 350;\r\n    position: absolute;\r\n    top: 325px;\r\n    left: 240px;\r\n    width: 200px;\r\n}\r\n.Post-Forum-Button {\r\n    font-family: 'Quicksand', sans-serif;\r\n    font-weight: 350;\r\n    position: absolute;\r\n    top: 765px;\r\n    left: 795px;\r\n    width: 200px;\r\n}\r\n.Search-Forum {\r\n    font-family: 'Quicksand', sans-serif;\r\n    font-weight: 350;\r\n    position: absolute;\r\n    top: 325px;\r\n    left: 452px;\r\n}\r\n.Search-Button {\r\n    font-family: 'Quicksand', sans-serif;\r\n    font-weight: 350;\r\n    position: absolute;\r\n    top: 325px;   \r\n    left: 805px;\r\n}\r\n.Dropdown-Forum {\r\n    font-family: 'Quicksand', sans-serif;\r\n    font-weight: 350;\r\n    position: absolute;\r\n    top: 325px;\r\n    left: 885px;\r\n}\r\n.Search-Results {\r\n    font-family: 'Quicksand', sans-serif;\r\n    font-weight: 250;\r\n    position: absolute;\r\n    top: 365px;\r\n    left: 240px;\r\n    width: 753px;\r\n    bottom: 100px;\r\n}\r\n.New-Forum {\r\n    font-family: 'Quicksand', sans-serif;\r\n    font-weight: 250;\r\n    position: absolute;\r\n    top: 325px;\r\n    left: 240px;\r\n    width: 753px;\r\n    bottom: 100px;\r\n}\r\n.Active-Forums {\r\n    font-family: 'Quicksand', sans-serif;\r\n    font-weight: 350;\r\n    list-style: none;\r\n    position: absolute;\r\n    top: 325px;\r\n    left: 1015px;\r\n    width: 230px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWgtc3RhcnQtZm9ydW0vbWgtc3RhcnQtZm9ydW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7QUFFQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjtBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsVUFBVTtJQUNWLGVBQWU7QUFDbkI7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixVQUFVO0lBQ1YsWUFBWTtBQUNoQjtBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztJQUNYLFlBQVk7QUFDaEI7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixXQUFXO0lBQ1gsWUFBWTtBQUNoQjtBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFdBQVc7QUFDZjtBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFdBQVc7QUFDZjtBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFdBQVc7QUFDZjtBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtBQUNqQjtBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtBQUNqQjtBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixZQUFZO0lBQ1osWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL21oLXN0YXJ0LWZvcnVtL21oLXN0YXJ0LWZvcnVtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuanVtYm90cm9uIHtcclxuICAgIHBhZGRpbmctdG9wOjIlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDMlO1xyXG59XHJcbmgxIHsgXHJcbiAgICBmb250LXNpemU6IDJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbmgyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5hIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxucCB7XHJcbiAgICBoZWlnaHQ6NjVweDtcclxuICAgIGxpbmUtaGVpZ2h0OjIwcHg7XHJcbiAgICBvdmVyZmxvdzpoaWRkZW47XHJcbn1cclxuXHJcbi5IZWFkaW5nMiB7XHJcbiAgICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCcsIHNhbnMtc2VyaWY7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDI2MHB4O1xyXG4gICAgbGVmdDogMjVweDtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG5cclxuLkZpbHRlci1SZXN1bHRzIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiAzNTA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAyNXB4O1xyXG4gICAgdG9wOiAzMjVweDtcclxuICAgIHdpZHRoOiAyMDBweDtcclxufVxyXG5cclxuLlN0YXJ0LUZvcnVtLUJ1dHRvbiB7XHJcbiAgICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCcsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogMzUwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAzMjVweDtcclxuICAgIGxlZnQ6IDI0MHB4O1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG59XHJcblxyXG4uQmFjay1CdXR0b24ge1xyXG4gICAgZm9udC1mYW1pbHk6ICdRdWlja3NhbmQnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDM1MDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMzI1cHg7XHJcbiAgICBsZWZ0OiAyNDBweDtcclxuICAgIHdpZHRoOiAyMDBweDtcclxufVxyXG5cclxuLlBvc3QtRm9ydW0tQnV0dG9uIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiAzNTA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDc2NXB4O1xyXG4gICAgbGVmdDogNzk1cHg7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbn1cclxuXHJcbi5TZWFyY2gtRm9ydW0ge1xyXG4gICAgZm9udC1mYW1pbHk6ICdRdWlja3NhbmQnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDM1MDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMzI1cHg7XHJcbiAgICBsZWZ0OiA0NTJweDtcclxufVxyXG5cclxuLlNlYXJjaC1CdXR0b24ge1xyXG4gICAgZm9udC1mYW1pbHk6ICdRdWlja3NhbmQnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDM1MDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMzI1cHg7ICAgXHJcbiAgICBsZWZ0OiA4MDVweDtcclxufVxyXG5cclxuLkRyb3Bkb3duLUZvcnVtIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiAzNTA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDMyNXB4O1xyXG4gICAgbGVmdDogODg1cHg7XHJcbn1cclxuXHJcbi5TZWFyY2gtUmVzdWx0cyB7XHJcbiAgICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCcsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogMjUwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAzNjVweDtcclxuICAgIGxlZnQ6IDI0MHB4O1xyXG4gICAgd2lkdGg6IDc1M3B4O1xyXG4gICAgYm90dG9tOiAxMDBweDtcclxufVxyXG5cclxuLk5ldy1Gb3J1bSB7XHJcbiAgICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCcsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogMjUwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAzMjVweDtcclxuICAgIGxlZnQ6IDI0MHB4O1xyXG4gICAgd2lkdGg6IDc1M3B4O1xyXG4gICAgYm90dG9tOiAxMDBweDtcclxufVxyXG5cclxuLkFjdGl2ZS1Gb3J1bXMge1xyXG4gICAgZm9udC1mYW1pbHk6ICdRdWlja3NhbmQnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDM1MDtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDMyNXB4O1xyXG4gICAgbGVmdDogMTAxNXB4O1xyXG4gICAgd2lkdGg6IDIzMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/mh-start-forum/mh-start-forum.component.html":
/*!**************************************************************!*\
  !*** ./src/app/mh-start-forum/mh-start-forum.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\r\n  <figure><img src=\"assets/image/heart.png\" width=\"60\" height=\"60\"  class=\"mx-auto d-block\"></figure>\r\n  <h1 style=\"text-align:center\" class=\"display-4\">Health Goals</h1>\r\n</div>\r\n\r\n<p class = \"Heading2\"><b>Mental Health Forums: <i>A safe discussion space for anyone who needs it</i></b></p>\r\n\r\n<div class=\"Filter-Results\">\r\n  <p-card header=\"Filter Results\" subheader=\"Mental Health Topics\">\r\n    <p-checkbox name=\"forumtype\" value=\"depression\" label=\"Depression\" [(ngModel)]=\"selectedValues\"></p-checkbox>\r\n    <br/>\r\n    <br/>\r\n    <p-checkbox name=\"forumtype\" value=\"anxiety\" label=\"Anxiety\" [(ngModel)]=\"selectedValues\"></p-checkbox>\r\n    <br/>\r\n    <br/>\r\n    <p-checkbox name=\"forumtype\" value=\"ptsd\" label=\"PTSD\" [(ngModel)]=\"selectedValues\"></p-checkbox>\r\n    <br/>\r\n    <br/>\r\n    <p-checkbox name=\"forumtype\" value=\"phobia\" label=\"Phobia\" [(ngModel)]=\"selectedValues\"></p-checkbox>\r\n    <br/>\r\n    <br/>\r\n    <p-checkbox name=\"forumtype\" value=\"eating disorder\" label=\"Eating Disorder\" [(ngModel)]=\"selectedValues\"></p-checkbox>\r\n    <br/>\r\n    <br/>\r\n    <p-checkbox name=\"forumtype\" value=\"self harm\" label=\"Self Harm\" [(ngModel)]=\"selectedValues\"></p-checkbox>\r\n    <br/>\r\n    <br/>\r\n    <p-checkbox name=\"forumtype\" value=\"lgbtq\" label=\"LGBTQ\" [(ngModel)]=\"selectedValues\"></p-checkbox>\r\n    <br/>\r\n    <br/>\r\n    <p-checkbox name=\"forumtype\" value=\"panic disorder\" label=\"Panic Disorder\" [(ngModel)]=\"selectedValues\"></p-checkbox>\r\n    <br/>\r\n    <br/>\r\n    <button type=\"button\" (click) = \"filterByTopic(selectedValues)\" pButton label=\"Save\"></button>\r\n    <br/>\r\n    <br/>\r\n    <button type=\"button\" (click) = \"getForums()\" pButton label=\"Clear Filters\"></button>\r\n</p-card>\r\n</div>\r\n<!--\r\n<button type=\"button\" (click) = \"backClicked()\" pButton label=\"Back to all Forums\" class = \"Back-Button\"></button>\r\n-->\r\n<div class=\"New-Forum\">\r\n    <p-card>\r\n      <h5><b>Name of Forum:</b></h5>\r\n      <textarea autoresize=\"autoResize\" cols=\"100\" pInputTextarea rows=\"2\" [(ngModel)]=\"NameOfNewForum\"></textarea>\r\n      <br/>\r\n      <br/>\r\n      <h5><b>Description:</b></h5>\r\n      <textarea autoresize=\"autoResize\" cols=\"100\" pInputTextarea rows=\"10\" [(ngModel)]=\"NewDescription\"></textarea>\r\n      <br/>\r\n      <br/>\r\n      <h5><b>Topic:</b></h5>\r\n      <textarea autoresize=\"autoResize\" cols=\"100\" pInputTextarea rows=\"1\" [(ngModel)]=\"NewTopic\"></textarea>\r\n      <br/>\r\n      <br/>\r\n      <button type=\"button\" (click) = \"postForum(user.Email, NameOfNewForum, NewDescription, NewTopic)\" pButton label=\"Post Forum\" *ngIf=\"loggedIn\"></button>\r\n      \r\n      <button type=\"button\" (click) = \"SignInToPostForum()\" pButton label=\"Post Forum\" *ngIf=\"!loggedIn\"></button>\r\n    </p-card>\r\n    <br>\r\n</div>\r\n\r\n<!--\r\n  class = \"Post-Forum-Button\"\r\n<div class=\"NameOfNewForum\">\r\n  <span class=\"ui-float-label\">\r\n    <input id=\"float-input\" type=\"text\" size=\"50\" pInputTextarea [(ngModel)]=\"NameOfNewForum\"> \r\n  </span>\r\n</div>\r\n\r\n<div class=\"NewDescription\">\r\n  <span class=\"ui-float-label\">\r\n    <input id=\"float-input-description\" type=\"text\" pInputTextarea [(ngModel)]=\"NewDescription\"> \r\n  </span>\r\n</div>\r\n\r\n<div class=\"NewDescription\">\r\n  <h6>Description</h6>\r\n  <textarea autoresize=\"autoResize\" cols=\"75\" pInputTextarea rows=\"10\" [(ngModel)]=\"NewDescription\"></textarea>\r\n</div>\r\n-->"

/***/ }),

/***/ "./src/app/mh-start-forum/mh-start-forum.component.ts":
/*!************************************************************!*\
  !*** ./src/app/mh-start-forum/mh-start-forum.component.ts ***!
  \************************************************************/
/*! exports provided: MhStartForumComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MhStartForumComponent", function() { return MhStartForumComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mental_health_forums_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mental-health-forums.service */ "./src/app/mental-health-forums.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _welcome_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../welcome.service */ "./src/app/welcome.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MhStartForumComponent = /** @class */ (function () {
    function MhStartForumComponent(forumsService, userService, _location) {
        this.forumsService = forumsService;
        this.userService = userService;
        this._location = _location;
        this.loggedIn = false;
    }
    MhStartForumComponent.prototype.ngOnInit = function () {
        this.getForums();
        if (localStorage.getItem("loggedIn") == "true") {
            this.loggedIn = true;
            this.get_userdata(localStorage.getItem("ID"));
        }
        else {
            this.loggedIn = false;
            localStorage.clear();
            localStorage.setItem("loggedIn", "false");
        }
    };
    MhStartForumComponent.prototype.get_userdata = function (ID) {
        var _this = this;
        this.userService.get_userdata(ID).subscribe(function (data) {
            _this.user = data;
        }, function (error) {
            alert("unable to get user data");
        });
    };
    MhStartForumComponent.prototype.backClicked = function () {
        this._location.back();
    };
    MhStartForumComponent.prototype.getForums = function () {
        var _this = this;
        this.forumsService.getForums().subscribe(function (data) {
            _this.forums = data;
        }, function (error) {
            alert('Could not retrieve a list of forums');
        });
    };
    MhStartForumComponent.prototype.filterByTopic = function (topic) {
        var _this = this;
        this.forumsService.filterByTopic(topic).subscribe(function (data) {
            _this.forums = data;
        }, function (error) {
            alert('Could not retrieve a list of forums with this topic');
        });
    };
    MhStartForumComponent.prototype.postForum = function (useremail, name, description, topic) {
        var _this = this;
        this.forumsService.postForum(useremail, name, description, topic).subscribe(function (data) {
            _this.forums = data;
            alert('Forum posted');
        }, function (error) {
            alert('Error in posting forum');
        });
        this._location.back();
    };
    MhStartForumComponent.prototype.SignInToPostForum = function () {
        alert('Please sign in or sign up to post a forum!');
    };
    MhStartForumComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mh-start-forum',
            template: __webpack_require__(/*! ./mh-start-forum.component.html */ "./src/app/mh-start-forum/mh-start-forum.component.html"),
            styles: [__webpack_require__(/*! ./mh-start-forum.component.css */ "./src/app/mh-start-forum/mh-start-forum.component.css")]
        }),
        __metadata("design:paramtypes", [_mental_health_forums_service__WEBPACK_IMPORTED_MODULE_1__["MentalHealthForumsService"],
            _welcome_service__WEBPACK_IMPORTED_MODULE_3__["WelcomeService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
    ], MhStartForumComponent);
    return MhStartForumComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".jumbotron {\r\n    padding-top:2%;\r\n    padding-bottom: 3%;\r\n} \r\n.circle-set {\r\n    background-color: rgb(236, 236, 236);\r\n    background-size: cover;\r\n    position: relative;\r\n    font: Helvetica;\r\n} \r\n.circle {\r\n    height: 500px;\r\n    position: absolute;\r\n    width: 20%;\r\n} \r\n.circle-LeftBox {\r\n    left: 10px;\r\n    top: 10px;\r\n} \r\n.circle-RightBox{\r\n    right: 10px;\r\n    top: 10px;\r\n} \r\n.UserBox{\r\n    background-color: rgb(236, 236, 236);\r\n    margin: auto;\r\n    margin-bottom: 3%;\r\n    width: 50%;\r\n    height: 500px;\r\n    padding: 50px;\r\n} \r\n* {\r\n    box-sizing: border-box;\r\n  } \r\n/* Create three unequal columns that floats next to each other */ \r\n.column {\r\n    float: left;\r\n    padding: 10px;\r\n    margin-bottom: 5%;\r\n    margin: auto;\r\n  } \r\n.left{\r\n    background-color: rgb(248, 246, 246);\r\n    width: 30%;\r\n    height: 45%;\r\n    margin: 30px;\r\n    position: absolute;\r\n    left: 10px; \r\n    margin-bottom: 5%;\r\n  } \r\n.right {\r\n    background-color: rgb(248, 246, 246);\r\n    height: 45%;\r\n    width: 30%;\r\n    margin: 30px;\r\n    position: absolute;\r\n    right: 10px;\r\n    margin-bottom: 5%;\r\n  } \r\n.middle {\r\n    background-color: rgb(248, 246, 246);\r\n    width: 25%;\r\n    margin-bottom: 5%;\r\n  }\r\n  \r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxvQ0FBb0M7SUFDcEMsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25CO0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZDtBQUVBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7QUFDYjtBQUVBO0lBQ0ksV0FBVztJQUNYLFNBQVM7QUFDYjtBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsVUFBVTtJQUNWLGFBQWE7SUFDYixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxzQkFBc0I7RUFDeEI7QUFFQSxnRUFBZ0U7QUFDaEU7SUFDRSxXQUFXO0lBQ1gsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixZQUFZO0VBQ2Q7QUFFQTtJQUNFLG9DQUFvQztJQUNwQyxVQUFVO0lBQ1YsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGlCQUFpQjtFQUNuQjtBQUVBO0lBQ0Usb0NBQW9DO0lBQ3BDLFdBQVc7SUFDWCxVQUFVO0lBQ1YsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsaUJBQWlCO0VBQ25CO0FBRUE7SUFDRSxvQ0FBb0M7SUFDcEMsVUFBVTtJQUNWLGlCQUFpQjtFQUNuQiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmp1bWJvdHJvbiB7XHJcbiAgICBwYWRkaW5nLXRvcDoyJTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAzJTtcclxufSBcclxuLmNpcmNsZS1zZXQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNiwgMjM2LCAyMzYpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGZvbnQ6IEhlbHZldGljYTtcclxufVxyXG5cclxuLmNpcmNsZSB7XHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDIwJTtcclxufVxyXG5cclxuLmNpcmNsZS1MZWZ0Qm94IHtcclxuICAgIGxlZnQ6IDEwcHg7XHJcbiAgICB0b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5jaXJjbGUtUmlnaHRCb3h7XHJcbiAgICByaWdodDogMTBweDtcclxuICAgIHRvcDogMTBweDtcclxufVxyXG5cclxuLlVzZXJCb3h7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM2LCAyMzYsIDIzNik7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzJTtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gICAgcGFkZGluZzogNTBweDtcclxufVxyXG4qIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIENyZWF0ZSB0aHJlZSB1bmVxdWFsIGNvbHVtbnMgdGhhdCBmbG9hdHMgbmV4dCB0byBlYWNoIG90aGVyICovXHJcbiAgLmNvbHVtbiB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICB9XHJcbiAgXHJcbiAgLmxlZnR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ4LCAyNDYsIDI0Nik7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgaGVpZ2h0OiA0NSU7XHJcbiAgICBtYXJnaW46IDMwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAxMHB4OyBcclxuICAgIG1hcmdpbi1ib3R0b206IDUlO1xyXG4gIH1cclxuICBcclxuICAucmlnaHQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0OCwgMjQ2LCAyNDYpO1xyXG4gICAgaGVpZ2h0OiA0NSU7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgbWFyZ2luOiAzMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcclxuICB9XHJcbiAgXHJcbiAgLm1pZGRsZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ4LCAyNDYsIDI0Nik7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XHJcbiAgfVxyXG4gIFxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\r\n  <figure><img src=\"assets/image/heart.png\" width=\"60\" height=\"60\"  class=\"mx-auto d-block\"></figure>\r\n  <h1 style=\"text-align:center\" class=\"display-4\">Health Goals</h1>\r\n</div>\r\n<html>\r\n\r\n<html>\r\n    <body>\r\n\r\n        <div style=\"text-align: center\"> \r\n         \r\n        <div class=\"row\" >\r\n          <div class=\"column left\" style=\"text-align: center\">\r\n            <h2>Groups Joined</h2>\r\n            <table class=\"table\" *ngIf=\"!isNull\">\r\n                <thead>\r\n                  <tr> \r\n                    <th scope=\"col\">Group <br> Name</th>\r\n                    <th scope=\"col\">Training Type</th>\r\n                    <th scope=\"col\">Calorie Goal</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr>\r\n                    <th scope=\"row\">{{groupInfo.NameOfGroup}}</th>\r\n                    <td>{{groupInfo.TrainingType}}</td>\r\n                    <td>{{groupInfo.CalorieGoal}}</td>\r\n                  </tr>\r\n                </tbody>\r\n            </table>\r\n              <br>\r\n              <h2>Group Goals</h2>\r\n              <table class=\"table\" *ngIf=\"!isNull\">\r\n                  <thead>\r\n                    <tr> \r\n                      <th scope=\"col\">Group Name</th>\r\n                      <th scope=\"col\">Rank</th>\r\n                      <th scope=\"col\">Goal Reached</th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr>\r\n                      <th scope=\"row\">{{groupMemberInfo.NameOfGroup}}</th>\r\n                      <td>{{groupMemberInfo.Rank}}</td>\r\n                      <td>{{groupMemberInfo.GoalReached}}</td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n          </div>\r\n\r\n          <div class=\"column middle\" style=\"text-align: center\">\r\n            <h2>About {{user.FirstName}}</h2>\r\n              <img src=\"icon.png\" width=\"200\" height=\"200\">\r\n              <br>\r\n              <i>\"{{user.Description}}\"</i>\r\n              <br>\r\n              <small><b>Name:</b> {{user.FirstName}} {{user.LastName}}</small>\r\n              <br>\r\n              <small><b>E-mail:</b> {{user.Email}}</small>\r\n              <br>\r\n              <small><b>Dietary Restrictions:</b> {{user.DietaryRestrictions}}</small>\r\n              <br>\r\n              <small><b>Goals</b> {{user.Goals}} </small>\r\n              <br>\r\n          </div>\r\n          <div class=\"column right\" style=\"text-align: center\">\r\n              <h2>Saved Videos</h2>\r\n                <div class=\"SavedVideoResults\">\r\n                    <p-carousel [value]=\"savedvideos\" numVisible=\"3\" headerText = \"Saved Videos\">\r\n                        <ng-template pTemplate =\"body\" let-savedvideo>\r\n                                <a routerLink = \"/exercise-videos/{{savedvideo.VideoName}}\"> {{savedvideo.VideoName}}\r\n                                 </a> \r\n                        </ng-template>\r\n                    </p-carousel>\r\n                </div>\r\n              <br>\r\n              <h2>Forums</h2>\r\n              <div class=\"SavedForumResults\">\r\n                  <p-carousel [value]=\"userForums\" numVisible=\"3\" headerText = \"Forums\">\r\n                      <ng-template pTemplate =\"body\" let-userForum>\r\n                              <a routerLink = \"/mh-forums/{{userForum.NameOfForum}}\"> {{userForum.NameOfForum}}\r\n                               </a> \r\n                      </ng-template>\r\n                  </p-carousel>\r\n              </div>\r\n          </div>\r\n        </div>\r\n        </div>\r\n    </body>\r\n</html>\r\n"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _welcome_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../welcome.service */ "./src/app/welcome.service.ts");
/* harmony import */ var _exercisevideos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../exercisevideos.service */ "./src/app/exercisevideos.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(userService, videoService, route) {
        var _this = this;
        this.userService = userService;
        this.videoService = videoService;
        this.route = route;
        this.isNULL = false;
        route.paramMap.subscribe(function (paramMap) {
            _this.userID = paramMap.get('ID');
            console.log("USER ID" + _this.userID);
            userService.get_userdata(_this.userID).subscribe(function (data) {
                _this.user = data;
            }, function (error) {
                if (error.status === 404) {
                    alert('User not found.');
                }
                else {
                    console.error(error.status + ' - ' + error.body);
                    alert('An error occured on the server. Check the console.');
                }
            });
            userService.get_usergroups(_this.userID).subscribe(function (data) {
                if (data == null) {
                    console.log("NULL YO");
                    _this.isNULL = true;
                    return;
                }
                console.log("usergroups" + data);
                _this.groupInfo = data;
            }, function (error) {
                if (error.status === 404) {
                    alert('Group not found.');
                }
                else {
                    console.error(error.status + ' - ' + error.body);
                    alert('An error occured on the server. Check the console.');
                }
            });
            userService.get_groupmemberinfo(_this.userID).subscribe(function (data) {
                if (data == null) {
                    console.log("NULL YO");
                    _this.isNULL = true;
                    return;
                }
                _this.groupMemberInfo = data;
            }, function (error) {
                if (error.status === 404) {
                    alert('Group Member Info not found.');
                }
                else {
                    console.error(error.status + ' - ' + error.body);
                    alert('An error occured on the server. Check the console.');
                }
            });
            userService.get_user_forum(_this.userID).subscribe(function (data) {
                _this.userForums = data;
                console.log(_this.userForums);
            }, function (error) {
                if (error.status === 404) {
                    alert('User Forums not found');
                }
                else {
                    console.error(error.status + ' - ' + error.body);
                    alert('An error occured on the server. Check the console.');
                }
            });
            videoService.getSavedVideos(_this.userID).subscribe(function (data) {
                _this.savedvideos = data;
                console.log(_this.savedvideos);
            }, function (error) {
                if (error.status === 404) {
                    alert('Group Member Info not found.');
                }
                else {
                    console.error(error.status + ' - ' + error.body);
                    alert('An error occured on the server. Check the console.');
                }
            });
        });
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_welcome_service__WEBPACK_IMPORTED_MODULE_2__["WelcomeService"],
            _exercisevideos_service__WEBPACK_IMPORTED_MODULE_3__["ExercisevideosService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/*!*********************************************!*\
  !*** ./src/app/signup/signup.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".jumbotron {\r\n    padding-top:2%;\r\n    padding-bottom: 3%;\r\n}\r\nh1 { \r\n    font-size: 2em;\r\n    font-weight: bold;\r\n}\r\nh2 {\r\n    display: block;\r\n    font-size: 1.5em;\r\n    font-weight: bold;\r\n}\r\n.SignUpBox{\r\n    background-color: rgb(236, 236, 236);\r\n    margin: auto;\r\n    margin-bottom: 4%;\r\n    width: 60%;\r\n    height: 700px;\r\n    padding: 50px;\r\n}\r\n.icon {\r\n    background-image: url('static/icon.png');\r\n    background-repeat: no-repeat;\r\n    background-size: 200px;\r\n    height: 200px;\r\n    width: 200px;\r\n}\r\n.leftside{\r\n    width: 25%;\r\n    float: left;\r\n}\r\n.rightside{\r\n    width: 70%;\r\n    float: right;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixhQUFhO0lBQ2IsYUFBYTtBQUNqQjtBQUVBO0lBQ0ksd0NBQXNDO0lBQ3RDLDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLFlBQVk7QUFDaEI7QUFFQTtJQUNJLFVBQVU7SUFDVixXQUFXO0FBQ2Y7QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmp1bWJvdHJvbiB7XHJcbiAgICBwYWRkaW5nLXRvcDoyJTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAzJTtcclxufVxyXG5oMSB7IFxyXG4gICAgZm9udC1zaXplOiAyZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5oMiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLlNpZ25VcEJveHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzYsIDIzNiwgMjM2KTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206IDQlO1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIGhlaWdodDogNzAwcHg7XHJcbiAgICBwYWRkaW5nOiA1MHB4O1xyXG59XHJcblxyXG4uaWNvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaW1hZ2VzL2ljb24ucG5nKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDIwMHB4O1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIHdpZHRoOiAyMDBweDtcclxufVxyXG5cclxuLmxlZnRzaWRle1xyXG4gICAgd2lkdGg6IDI1JTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG4ucmlnaHRzaWRle1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIGZsb2F0OiByaWdodDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/signup/signup.component.html":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\r\n    <br>\r\n    <h1 style=\"text-align:center\" class=\"display-6\">Welcome to Health Goals!</h1>\r\n    <figure><img src=\"assets/image/heart.png\" width=\"60\" height=\"60\"  class=\"mx-auto d-block\"></figure>\r\n</div>\r\n<html>\r\n<br/>\r\n<div class=\"SignUpBox\">\r\n        <h2 style=\"text-align:center\" font=\"Arial\">Sign Up</h2>\r\n        <small>First Name:</small>\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"FirstName\" pInputText [(ngModel)]=\"FirstName\" required>\r\n        <br>\r\n        <small>Last Name:</small>\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"LastName\" pInputText [(ngModel)]=\"LastName\">\r\n        <br>\r\n        <small>Email Address:</small>\r\n        <input type=\"email\" class=\"form-control\" placeholder=\"Email\" pInputText [(ngModel)]=\"Email\">\r\n        <br>\r\n        <small>Password:</small>\r\n        <input type=\"password\" class=\"form-control\" placeholder=\"Password\" pInputText [(ngModel)]=\"Password\">\r\n        <br>\r\n        <small>Health Goals:</small>\r\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"Goals\" placeholder=\"Weight loss, get toned, healthy diet, etc...\">\r\n        <br>\r\n        <small>Dietary Restrictions:</small>\r\n        <select class=\"custom-select\" multiple id=\"scrolllist\" size=\"3\" [(ngModel)]=\"DietaryRestrictions\">\r\n            <option selected>None</option>\r\n            <option value=\"vegan\">Vegan</option>\r\n            <option value=\"vegetarian\">Vegetarian</option>\r\n            <option value=\"pescetarian\">Pescetarian</option>\r\n            <option value=\"gluten free\">Gluten Free</option>\r\n            <option value=\"grain free\">Grain Free</option>\r\n            <option value=\"dairy free\">Dairy Free</option>\r\n            <option value=\"high protein\">High Protein</option>\r\n            <option value=\"low sodium\">Low Sodium</option>\r\n            <option value=\"low carb\">Low Carb</option>\r\n            <option value=\"Paleo\">Paleo</option>\r\n            <option value=\"Primal\">Primal</option>\r\n            <option value=\"ketogenic\">Ketogenic</option>\r\n            <option value=\"FODMAP\">FODMAP</option>\r\n            <option value=\"Whole 30\">Whole 30</option>\r\n        </select>\r\n        <br>\r\n        <br>\r\n        <small>Description:</small>\r\n        <textarea class=\"form-control\" [(ngModel)]=\"Description\" placeholder=\"Describe yourself here...\"></textarea>\r\n        <br>\r\n        <div style=\"text-align: center\">\r\n          <button type=\"button\" (click) = \"sign_up(FirstName, LastName, Email, Password, Description, Goals, DietaryRestrictions, Picture)\" pButton label=\"Sign Up!\" routerLink=\"/welcome\"></button>\r\n        </div>\r\n    <br><br>\r\n</div>\r\n</html>\r\n"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _welcome_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../welcome.service */ "./src/app/welcome.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SignupComponent = /** @class */ (function () {
    function SignupComponent(signupService) {
        this.signupService = signupService;
    }
    SignupComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem("signup") == "true") {
        }
    };
    SignupComponent.prototype.sign_up = function (FirstName, LastName, Email, Password, Description, Goals, DietaryRestrictions, Picture) {
        var _this = this;
        this.signupService.sign_up(FirstName, LastName, Email, Password, Description, Goals, DietaryRestrictions, Picture).subscribe(function (data) {
            _this.user = data;
            localStorage.setItem("signup", "true");
            alert('Signed Up!');
        }, function (error) {
            alert('Error Signing Up');
        });
    };
    SignupComponent.prototype.default_img = function (id, blob) {
        this.signupService.default_img(id, blob).subscribe(function (data) {
            console.log("uploaded default img");
        });
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [_welcome_service__WEBPACK_IMPORTED_MODULE_1__["WelcomeService"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/therapist-details/therapist-details.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/therapist-details/therapist-details.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div{\r\n    white-space: pre-wrap !important;\r\n}\r\n\r\n.jumbotron {\r\n    padding-top: 2%;\r\n    padding-bottom: 2%;\r\n}\r\n\r\n.Therapist-Result{\r\n    top:5px;\r\n    white-space: pre-line;\r\n}\r\n\r\nimg{\r\n    border-radius: 50% !important;\r\n    position: relative;\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlcmFwaXN0LWRldGFpbHMvdGhlcmFwaXN0LWRldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxPQUFPO0lBQ1AscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLGtCQUFrQjs7QUFFdEIiLCJmaWxlIjoic3JjL2FwcC90aGVyYXBpc3QtZGV0YWlscy90aGVyYXBpc3QtZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2e1xyXG4gICAgd2hpdGUtc3BhY2U6IHByZS13cmFwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5qdW1ib3Ryb24ge1xyXG4gICAgcGFkZGluZy10b3A6IDIlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIlO1xyXG59XHJcblxyXG4uVGhlcmFwaXN0LVJlc3VsdHtcclxuICAgIHRvcDo1cHg7XHJcbiAgICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XHJcbn1cclxuXHJcbmltZ3tcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJSAhaW1wb3J0YW50O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/therapist-details/therapist-details.component.html":
/*!********************************************************************!*\
  !*** ./src/app/therapist-details/therapist-details.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\r\n    <figure><img src=\"assets/image/heart.png\" width=\"60\" height=\"60\"  class=\"mx-auto d-block\"></figure>\r\n    <h1 style=\"text-align:center\" class=\"display-4\">Health Goals</h1>\r\n</div>\r\n\r\n<button type=\"button\" (click) = \"backClicked()\" pButton label=\"Back to list of Therapist\" class = \"Back-Button\"></button>\r\n\r\n<div class=\"Therapist-Result\">\r\n  <p-card>\r\n    <h2 style=\"text-align: center !important\"><strong><font size=7>{{fname}} {{mname}} {{lname}}</font></strong></h2>\r\n  </p-card>\r\n  <div class=doctor-image>\r\n      <img src={{imageURL}} style=\"float:left; padding: 10px\" alt=\"Avatar\" height=\"250\" width=\"230\">\r\n      <div style= 'left:1000px; display: inline-block'>\r\n        <font size=5>\r\n          <font size=6.5>\r\n          <strong>\r\n          <div>\r\n            {{address}}, {{city}}, USA, {{zip}}\r\n          </div>\r\n          \r\n          <div>\r\n            Phone: {{number}}\r\n          </div>\r\n          </strong>\r\n          </font>\r\n          <div>\r\n            Specialty: {{specialties}}\r\n          </div>\r\n          <div>\r\n            {{s_description}}\r\n          </div>\r\n          <div>\r\n            Title: <strong>{{title}}</strong> \r\n          </div>\r\n        </font>\r\n        \r\n      </div>\r\n  </div>\r\n  <div class=\"info-n\">\r\n    <br>\r\n    <br>\r\n    <font size=4>\r\n      {{bio}}\r\n    </font>\r\n    \r\n  </div>\r\n\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/therapist-details/therapist-details.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/therapist-details/therapist-details.component.ts ***!
  \******************************************************************/
/*! exports provided: TherapistDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TherapistDetailsComponent", function() { return TherapistDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TherapistDetailsComponent = /** @class */ (function () {
    function TherapistDetailsComponent(route, http, messageService, _location) {
        var _this = this;
        this.route = route;
        this.http = http;
        this.messageService = messageService;
        this._location = _location;
        this.error = null;
        //private T:FindTherapist;
        this._url = 'https://api.betterdoctor.com/2016-03-01/doctors/npi/';
        this.end = '?user_key=2bd6df991f4d47275948ff4ece06e299';
        route.paramMap.subscribe(function (paraMap) {
            _this.npi = paraMap.get('npi');
            /*this.Therapist(this.npi).subscribe(
              data=>{
                this.T=data;
                console.log(data);
              },
              (error:HttpResponse<any>)=>{
                if(error.status===404){
                  alert('Therapist not found');
                }else{
                  console.error(error.status+'-'+error.body);
                  alert('An error ocurred on the server. Please check console.')
                }
              }
            )*/
        });
    }
    TherapistDetailsComponent.prototype.backClicked = function () {
        this._location.back();
    };
    TherapistDetailsComponent.prototype.ngOnInit = function () {
        this.Therapist(this.npi);
    };
    TherapistDetailsComponent.prototype.npiSearch = function (npi) {
        var actual_url = this._url + npi + this.end;
        console.log(encodeURI(actual_url));
        return this.http.get(encodeURI(actual_url))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorHandler));
    };
    TherapistDetailsComponent.prototype.errorHandler = function (error) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error.error);
    };
    TherapistDetailsComponent.prototype.formatPhoneNumber = function (phoneNumber) {
        var cleaned = ('' + phoneNumber).replace(/\D/g, '');
        var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
        if (match) {
            return '(' + match[1] + ') ' + match[2] + '-' + match[3];
        }
        return null;
    };
    TherapistDetailsComponent.prototype.Therapist = function (npi) {
        var _this = this;
        this.npiSearch(npi).subscribe(function (obj) {
            var therapist = JSON.stringify(obj);
            var output = [];
            var T = {};
            T.fname = therapist.substring(therapist.indexOf('\"first_name\":') + 14, therapist.indexOf('\"', therapist.indexOf('\"first_name\"') + 14));
            T.mname = therapist.substring(therapist.indexOf('\"middle_name\":') + 15, therapist.indexOf('\"', therapist.indexOf('\"middle_name\"') + 15));
            T.lname = therapist.substring(therapist.indexOf('\"last_name\":') + 13, therapist.indexOf('\"', therapist.indexOf('\"last_name\"') + 13));
            T.title = therapist.substring(therapist.indexOf('\"title\":') + 9, therapist.indexOf('\"', therapist.indexOf('\"title\"') + 9));
            T.imageURL = therapist.substring(therapist.indexOf('\"image_url\":') + 13, therapist.indexOf('\"', therapist.indexOf('\"image_url\"') + 13));
            T.gender = therapist.substring(therapist.indexOf('\"gender\":') + 10, therapist.indexOf('\"', therapist.indexOf('\"gender\"') + 10));
            T.bio = therapist.substring(therapist.indexOf('\"bio\":') + 7, therapist.indexOf('\"', therapist.indexOf('\"bio\"') + 7));
            T.state = therapist.substring(therapist.indexOf('\"state_long\":') + 14, therapist.indexOf('\"', therapist.indexOf('\"state_long\"') + 14));
            T.address = therapist.substring(therapist.indexOf('\"street\":') + 10, therapist.indexOf('\"', therapist.indexOf('\"street\"') + 10));
            T.number = therapist.substring(therapist.indexOf('\"phones\"') + 21, therapist.indexOf('\"', therapist.indexOf('\"phones\"') + 21));
            T.zip = therapist.substring(therapist.indexOf('\"zip\"') + 7, therapist.indexOf('\"', therapist.indexOf('\"zip\"') + 7));
            T.city = therapist.substring(therapist.indexOf('\"city\"') + 8, therapist.indexOf('\"', therapist.indexOf('\"city\"') + 8));
            //T.npi=therapist.substring(therapist.indexOf('\"npi\"')+7,therapist.indexOf('\"',therapist.indexOf('\"npi\"')+7));
            therapist.substring(therapist.indexOf('\"specialties\":') + 16, therapist.length - 1).split('\"specialties\":').forEach(function (therapist) {
                T.specialties = therapist.substring(therapist.indexOf('\"name\":') + 8, therapist.indexOf('\"', therapist.indexOf('\"name\"') + 8));
                T.s_description = therapist.substring(therapist.indexOf('\"description\":') + 15, therapist.indexOf('\"', therapist.indexOf('\"description\"') + 15));
            });
            debugger;
            output.push(T);
            _this.therapistResults = output;
            _this.fname = T.fname;
            _this.mname = T.mname.replace('_type', '');
            _this.lname = T.lname;
            _this.number = _this.formatPhoneNumber(T.number);
            _this.address = T.address;
            _this.zip = T.zip;
            _this.city = T.city;
            _this.bio = T.bio.replace(/(?:\\r\\n|\\r|\\n)/g, '<br>');
            _this.gender = T.gender;
            _this.specialties = T.specialties;
            _this.title = T.title;
            _this.imageURL = T.imageURL;
            _this.s_description = T.s_description;
            _this.specialties = T.specialties;
        }, function (error) {
            console.error(error);
            _this.error = error;
            _this.messageService.add({ severity: 'error', summary: _this.error, life: 5000, detail: 'Search Failed' });
        });
    };
    TherapistDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-therapist-details',
            template: __webpack_require__(/*! ./therapist-details.component.html */ "./src/app/therapist-details/therapist-details.component.html"),
            providers: [primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"]],
            styles: [__webpack_require__(/*! ./therapist-details.component.css */ "./src/app/therapist-details/therapist-details.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]])
    ], TherapistDetailsComponent);
    return TherapistDetailsComponent;
}());



/***/ }),

/***/ "./src/app/weight-watchers/weight-watchers.component.css":
/*!***************************************************************!*\
  !*** ./src/app/weight-watchers/weight-watchers.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".jumbotron {\r\n    padding-top: 2%;\r\n    padding-bottom: 3%;\r\n}\r\n.sidenav {\r\n    width: 300px;\r\n    background: #eee;\r\n    padding: 8px 8px;\r\n}\r\nh1 { \r\n    font-size: 2em;\r\n    font-weight: bold;\r\n}\r\nh2 {\r\n        display: block;\r\n        font-size: 1.5em;\r\n        font-weight: bold;\r\n}\r\nh3 {\r\n    display: block;\r\n    font-size: 1.5em;\r\n}\r\n.topnav .search-container button {\r\n    float: none;\r\n    display: block;\r\n    text-align: left;\r\n    width: 100%;\r\n    margin: 0;\r\n    padding: 14px;\r\n  }\r\n.topnav input[type=text] {\r\n    border: 1px solid #ccc;  \r\n  }\r\n.Search-Results{\r\n    position: absolute;\r\n    top: 300px;\r\n    left: 320px;\r\n}\r\n.Memberlogo{\r\n    position: absolute;\r\n    top: 400px;\r\n    left: 320px;\r\n}\r\n.Table-heading{\r\n    color:white;\r\n    text-align: center;\r\n    position: absolute;\r\n    top: 300px;\r\n    left: 630px;\r\n}\r\n.Search-Results1{\r\n    position: absolute;\r\n    top: 850px;\r\n    left: 320px;\r\n}\r\n.Memberlogo1{\r\n    position: absolute;\r\n    top: 950px;\r\n    left: 320px;\r\n}\r\n.Table-heading1{\r\n    color:white;\r\n    text-align: center;\r\n    position: absolute;\r\n    top: 850px;\r\n    left: 630px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2VpZ2h0LXdhdGNoZXJzL3dlaWdodC13YXRjaGVycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7QUFFQTtRQUNRLGNBQWM7UUFDZCxnQkFBZ0I7UUFDaEIsaUJBQWlCO0FBQ3pCO0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCO0FBR0E7SUFDSSxXQUFXO0lBQ1gsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsU0FBUztJQUNULGFBQWE7RUFDZjtBQUNGO0lBQ0ksc0JBQXNCO0VBQ3hCO0FBRUY7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFdBQVc7QUFDZjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixXQUFXO0FBQ2Y7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixXQUFXO0FBQ2Y7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztBQUNmO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFdBQVc7QUFDZjtBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL3dlaWdodC13YXRjaGVycy93ZWlnaHQtd2F0Y2hlcnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5qdW1ib3Ryb24ge1xyXG4gICAgcGFkZGluZy10b3A6IDIlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDMlO1xyXG59XHJcbi5zaWRlbmF2IHtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGJhY2tncm91bmQ6ICNlZWU7XHJcbiAgICBwYWRkaW5nOiA4cHggOHB4O1xyXG59XHJcbmgxIHsgXHJcbiAgICBmb250LXNpemU6IDJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5oMiB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuaDMge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDEuNWVtO1xyXG59XHJcblxyXG5cclxuLnRvcG5hdiAuc2VhcmNoLWNvbnRhaW5lciBidXR0b24ge1xyXG4gICAgZmxvYXQ6IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDE0cHg7XHJcbiAgfVxyXG4udG9wbmF2IGlucHV0W3R5cGU9dGV4dF0ge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYzsgIFxyXG4gIH1cclxuICBcclxuLlNlYXJjaC1SZXN1bHRze1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAzMDBweDtcclxuICAgIGxlZnQ6IDMyMHB4O1xyXG59XHJcblxyXG4uTWVtYmVybG9nb3tcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNDAwcHg7XHJcbiAgICBsZWZ0OiAzMjBweDtcclxufVxyXG5cclxuLlRhYmxlLWhlYWRpbmd7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMzAwcHg7XHJcbiAgICBsZWZ0OiA2MzBweDtcclxufVxyXG5cclxuLlNlYXJjaC1SZXN1bHRzMXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogODUwcHg7XHJcbiAgICBsZWZ0OiAzMjBweDtcclxufVxyXG5cclxuLk1lbWJlcmxvZ28xe1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA5NTBweDtcclxuICAgIGxlZnQ6IDMyMHB4O1xyXG59XHJcblxyXG4uVGFibGUtaGVhZGluZzF7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogODUwcHg7XHJcbiAgICBsZWZ0OiA2MzBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/weight-watchers/weight-watchers.component.html":
/*!****************************************************************!*\
  !*** ./src/app/weight-watchers/weight-watchers.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\r\n  <figure><img src=\"assets/image/heart.png\" width=\"60\" height=\"60\"  class=\"mx-auto d-block\"></figure>\r\n  <h1 style=\"text-align:center\" class=\"display-4\">Health Goals</h1>\r\n</div>\r\n<h2> Weight Watchers </h2>\r\n\r\n\r\n<div class=\"sidenav\">\r\n  <br>\r\n  <h3><u>Join Group</u> </h3>\r\n  <h5> Name of group you want to join</h5>\r\n  <br>\r\n  <div class=\"search-container\">\r\n    <form action=\"/action_page.php\">\r\n      <input type=\"text\" placeholder=\"Type name here\" name=\"search\">\r\n      <button type=\"submit\">Join</button>\r\n    </form>\r\n  </div>\r\n  <br>\r\n  <h3><u>Find Group</u> </h3>\r\n  <h5> Filter Results to find best group </h5>\r\n  <br>\r\n  <h5> Training Type </h5>\r\n  <div class=\"checkbox\">\r\n      <label><input type=\"checkbox\" value=\"\"> Cardio </label> \r\n      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n      <label><input type=\"checkbox\" value=\"\"> Training </label>\r\n      <br>\r\n      <label><input type=\"checkbox\" value=\"\"> Strength Training </label> &nbsp;&nbsp;&nbsp;\r\n      <label><input type=\"checkbox\" value=\"\"> Yoga </label>\r\n      <br>\r\n      <br>\r\n  </div>\r\n  <h5> Calorie Goal per week </h5>\r\n  <div class=\"checkbox\">\r\n      <label><input type=\"checkbox\" value=\"\"> 1000-2000 </label> \r\n      &nbsp;&nbsp;\r\n      <label><input type=\"checkbox\" value=\"\"> 3000-5000 </label>\r\n      <br>\r\n      <label><input type=\"checkbox\" value=\"\"> 2000-3000 </label> &nbsp;\r\n      <label><input type=\"checkbox\" value=\"\"> 5000+ </label>\r\n  </div>\r\n  <div class=\"search-container\">\r\n    <form action=\"/action_page.php\">\r\n      <button type=\"submit\">Find</button>\r\n    </form>\r\n  </div>\r\n</div>\r\n\r\n<div class = \"Search-Results\">\r\n  <p-card header=\"Cardio Crew\" > \r\n    <p style=\"font-size:120%;\">\"Rise and Shine, its CARDIO time!\"</p>\r\n  </p-card>\r\n</div>\r\n<div class=\"Table-heading\">\r\n    <p-card header=\"Top 10 Leaderboard\" > \r\n        <figure><img src=\"assets/images/Leaderboard-1.png\" width=\"600\" height=\"405\"  class=\"mx-auto d-block\"></figure>\r\n      </p-card>\r\n</div>\r\n<div class = \"Memberlogo\">\r\n    <p-card header=\"Members(28)\" > \r\n        <figure><img src=\"assets/images/members.png\" width=\"262\" height=\"280\"  class=\"mx-auto d-block\"></figure>\r\n        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n        <button type=\"submit\">See All</button>\r\n    </p-card>\r\n  </div>\r\n  \r\n  <div class = \"Search-Results1\">\r\n      <p-card header=\"Fitness Fanatics\" > \r\n        <p style=\"font-size:120%;\">\"Don't STOP til you DROP\"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>\r\n      </p-card>\r\n  </div>\r\n  <div class=\"Table-heading1\">\r\n      <p-card header=\"Top 10 Leaderboard\" > \r\n          <figure><img src=\"assets/images/Leaderboard2.png\" width=\"600\" height=\"405\"  class=\"mx-auto d-block\"></figure>\r\n        </p-card>\r\n  </div>\r\n  <div class = \"Memberlogo1\">\r\n      <p-card header=\"Members(32)\" > \r\n          <figure><img src=\"assets/images/members-updated.png\" width=\"262\" height=\"280\"  class=\"mx-auto d-block\"></figure>\r\n          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n          <button type=\"submit\">See All</button>\r\n      </p-card>\r\n    </div>\r\n    "

/***/ }),

/***/ "./src/app/weight-watchers/weight-watchers.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/weight-watchers/weight-watchers.component.ts ***!
  \**************************************************************/
/*! exports provided: WeightWatchersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeightWatchersComponent", function() { return WeightWatchersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WeightWatchersComponent = /** @class */ (function () {
    function WeightWatchersComponent() {
    }
    WeightWatchersComponent.prototype.ngOnInit = function () {
    };
    WeightWatchersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-weight-watchers',
            template: __webpack_require__(/*! ./weight-watchers.component.html */ "./src/app/weight-watchers/weight-watchers.component.html"),
            styles: [__webpack_require__(/*! ./weight-watchers.component.css */ "./src/app/weight-watchers/weight-watchers.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WeightWatchersComponent);
    return WeightWatchersComponent;
}());



/***/ }),

/***/ "./src/app/welcome.service.ts":
/*!************************************!*\
  !*** ./src/app/welcome.service.ts ***!
  \************************************/
/*! exports provided: WelcomeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeService", function() { return WelcomeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WelcomeService = /** @class */ (function () {
    function WelcomeService(http) {
        this.http = http;
        this.loggedIn = false;
    }
    WelcomeService.prototype.get_login = function (email, password) {
        return this.http.get('/api/login/' + email + '/' + password);
    };
    WelcomeService.prototype.get_userdata = function (ID) {
        return this.http.get('/api/get_userdata/' + ID);
    };
    WelcomeService.prototype.sign_up = function (FirstName, LastName, Email, Password, Description, Goals, DietaryRestrictions, Picture) {
        return this.http.get('/api/signup/' + FirstName + '/' + LastName + '/' + Email + '/' + Password + '/' + Description + '/' + Goals + '/' + DietaryRestrictions + '/' + Picture);
    };
    WelcomeService.prototype.get_usergroups = function (ID) {
        return this.http.get('/api/get_usergroups/' + ID);
    };
    WelcomeService.prototype.get_groupmemberinfo = function (ID) {
        return this.http.get('/api/get_groupmemberinfo/' + ID);
    };
    WelcomeService.prototype.get_user_forum = function (ID) {
        return this.http.get('/api/get_user_forums/' + ID);
    };
    WelcomeService.prototype.default_img = function (id, blob) {
        return this.http.get('/api/default_img/' + id + '/' + blob);
    };
    WelcomeService.prototype.update_img = function (id, blob) {
        return this.http.get('/api/update_img/' + id + '/' + blob);
    };
    WelcomeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], WelcomeService);
    return WelcomeService;
}());



/***/ }),

/***/ "./src/app/welcome/meal-plan.service.ts":
/*!**********************************************!*\
  !*** ./src/app/welcome/meal-plan.service.ts ***!
  \**********************************************/
/*! exports provided: MealPlanService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MealPlanService", function() { return MealPlanService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MealPlanService = /** @class */ (function () {
    function MealPlanService(http) {
        this.http = http;
        this._url = 'https://api.edamam.com/search';
        this.app_id = '398ae301';
        this.app_key = 'e8be0dadda64231adcee646af7ed8116';
        this._url1 = 'https://api.edamam.com/search';
        this.app_id1 = 'c16673c6';
        this.app_key1 = '94d86718b1d043d92cf3373b72484d45';
        this._url2 = 'https://api.edamam.com/search';
        this.app_id2 = '27e40df6';
        this.app_key2 = 'f931d229fa44a2837cbc328aa4e0a589';
        this._url3 = 'https://api.edamam.com/search';
        this.app_id3 = '89071f45';
        this.app_key3 = '172f0ce905c0ad738adb63c7981b24bf';
    }
    MealPlanService.prototype.getBreakfast = function (input) {
        var _url = this._url + '?' + 'app_id=' + this.app_id + '&app_key=' + this.app_key + '&q=' + input.split(' ').join(', ') + '&to=25'
            + '&calories=300&time=0-10&diet=balanced';
        console.log(encodeURI(this._url));
        return this.http.get(encodeURI(_url))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorHandler));
    };
    MealPlanService.prototype.getmyBreakfast = function (input) {
        var _url = this._url1 + '?' + 'app_id=' + this.app_id1 + '&app_key=' + this.app_key1 + '&q=' + input.split(' ').join(', ') + '&to=1'
            + '&calories=300&time=0-10&diet=balanced';
        console.log(encodeURI(this._url1));
        return this.http.get(encodeURI(_url))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorHandler));
    };
    MealPlanService.prototype.getmyLunch = function (input) {
        var _url = this._url2 + '?' + 'app_id=' + this.app_id2 + '&app_key=' + this.app_key2 + '&q=' + input.split(' ').join(', ') + '&to=1'
            + '&calories=200-500&time=0-30&diet=balanced';
        console.log(encodeURI(this._url2));
        return this.http.get(encodeURI(_url))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorHandler));
    };
    MealPlanService.prototype.getmyDinner = function (input) {
        var _url = this._url3 + '?' + 'app_id=' + this.app_id3 + '&app_key=' + this.app_key3 + '&q=' + input.split(' ').join(', ') + '&to=1'
            + '&calories=200-600&time=0-50';
        console.log(encodeURI(this._url3));
        return this.http.get(encodeURI(_url))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorHandler));
    };
    // getBreakfast(input: string) {
    //  const _url = this._url + '?' + 'app_id=' + this.app_id + '&app_key=' + this.app_key + '&q=' + input.split(' ').join(', ') + '&to=25'
    // + '&time=0-10&calories=400&diet=balanced';
    //  console.log(encodeURI(this._url));
    // return this.http.get(encodeURI(_url))
    //            .pipe (
    //             catchError(this.errorHandler)
    //         );
    //  }
    MealPlanService.prototype.getLunch = function (input) {
        var _url = this._url + '?' + 'app_id=' + this.app_id + '&app_key=' + this.app_key + '&q=' + input.split(' ').join(', ') + '&to=25'
            + '&time=5-20&calories=400-700&diet=balanced';
        console.log(encodeURI(this._url));
        return this.http.get(encodeURI(_url))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorHandler));
    };
    MealPlanService.prototype.getDinner = function (input) {
        var _url = this._url + '?' + 'app_id=' + this.app_id + '&app_key=' + this.app_key + '&q=' + input.split(' ').join(', ') + '&to=25'
            + '&time=0-25&calories=600-1300&diet=balanced';
        console.log(encodeURI(this._url));
        return this.http.get(encodeURI(_url))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorHandler));
    };
    MealPlanService.prototype.getSnack = function (input) {
        var _url = this._url + '?' + 'app_id=' + this.app_id + '&app_key=' + this.app_key + '&q=' + input.split(' ').join(', ') + '&to=25'
            + '&time=0-5&calories=250&diet=balanced';
        console.log(encodeURI(this._url));
        return this.http.get(encodeURI(_url))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorHandler));
    };
    MealPlanService.prototype.errorHandler = function (error) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error.error);
    };
    MealPlanService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MealPlanService);
    return MealPlanService;
}());



/***/ }),

/***/ "./src/app/welcome/welcome.component.css":
/*!***********************************************!*\
  !*** ./src/app/welcome/welcome.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".jumbotron {\r\n    padding-top: 2%;\r\n    padding-bottom: 3%;\r\n}\r\n\r\n.circle-set {\r\n    color: WHITE;\r\n    background: rgb(255, 255, 255);\r\n    background-size: cover;\r\n    position: relative;\r\n    border-radius: 15px;\r\n    font: Helvetica;\r\n}\r\n\r\n.circle {\r\n    height: 200px;\r\n    position: absolute;\r\n    width: 200px;\r\n}\r\n\r\n.circle-exercise-videos {\r\n    background-image: url('static/exercisevid.jpg');\r\n    background-repeat: no-repeat;\r\n    background-size: 200px;\r\n    top: 0;\r\n    left: 10px;\r\n}\r\n\r\n.circle-weight-watchers {\r\n    background-image: url('static/weight_watchers.png');\r\n    background-repeat: no-repeat;\r\n    background-size: 200px;\r\n    top: 150px;\r\n    left: 150px;\r\n}\r\n\r\n.circle-food-blogs {\r\n    background-image: url('static/foodblogs.png');\r\n    background-repeat: no-repeat;\r\n    background-size: 200px;\r\n    top: 300px;\r\n    left: 10px;\r\n}\r\n\r\n.circle-food-recipes {\r\n    background-image: url('static/food_recipes.jpg');\r\n    background-repeat: no-repeat;\r\n    background-size: 200px;\r\n    top: 450px;\r\n    left: 150px;\r\n}\r\n\r\n.circle-fitness-instructors {\r\n    background-image: url('static/instructors.png');\r\n    background-repeat: no-repeat;\r\n    background-size: 200px;\r\n    top: 0;\r\n    right: 10px;\r\n}\r\n\r\n.circle-find-therapist {\r\n    background-image: url('static/therapist.png');\r\n    background-repeat: no-repeat;\r\n    background-size: 200px;\r\n    top: 150px;\r\n    right: 150px;\r\n}\r\n\r\n.circle-mh-forums {\r\n    background-image: url('static/forums.png');\r\n    background-repeat: no-repeat;\r\n    background-size: 200px;\r\n    top: 300px;\r\n    right: 10px;\r\n}\r\n\r\n.circle-mh-articles {\r\n    background-image: url('static/articles.png');\r\n    background-repeat: no-repeat;\r\n    background-size: 200px;\r\n    top: 450px;\r\n    right: 150px;\r\n}\r\n\r\n.icon {\r\n    background-image: url('static/icon.png');\r\n    background-repeat: no-repeat;\r\n    background-size: 200px;\r\n}\r\n\r\n.SignInBox{\r\n    background-color: rgb(236, 236, 236);\r\n    margin: auto;\r\n    margin-bottom: 3%;\r\n    width: 35%;\r\n    height: 500px;\r\n    padding: 50px;\r\n}\r\n\r\n.SignInBox2{\r\n    background-color: rgb(236, 236, 236);\r\n    margin: auto;\r\n    margin-bottom: 3%;\r\n    width: 35%;\r\n    height: 550px;\r\n    padding: 50px;\r\n}\r\n\r\n#inp {\r\n    text-align: center;\r\n    margin: auto;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLDhCQUE4QjtJQUM5QixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksK0NBQTZDO0lBQzdDLDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsTUFBTTtJQUNOLFVBQVU7QUFDZDs7QUFFQTtJQUNJLG1EQUFpRDtJQUNqRCw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSw2Q0FBMkM7SUFDM0MsNEJBQTRCO0lBQzVCLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1YsVUFBVTtBQUNkOztBQUVBO0lBQ0ksZ0RBQThDO0lBQzlDLDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLFdBQVc7QUFDZjs7QUFFQTtJQUNJLCtDQUE2QztJQUM3Qyw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLE1BQU07SUFDTixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSw2Q0FBMkM7SUFDM0MsNEJBQTRCO0lBQzVCLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLDBDQUF3QztJQUN4Qyw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSw0Q0FBMEM7SUFDMUMsNEJBQTRCO0lBQzVCLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHdDQUFzQztJQUN0Qyw0QkFBNEI7SUFDNUIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsVUFBVTtJQUNWLGFBQWE7SUFDYixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsVUFBVTtJQUNWLGFBQWE7SUFDYixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7RUFDZCIsImZpbGUiOiJzcmMvYXBwL3dlbGNvbWUvd2VsY29tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmp1bWJvdHJvbiB7XHJcbiAgICBwYWRkaW5nLXRvcDogMiU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMyU7XHJcbn1cclxuXHJcbi5jaXJjbGUtc2V0IHtcclxuICAgIGNvbG9yOiBXSElURTtcclxuICAgIGJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgZm9udDogSGVsdmV0aWNhO1xyXG59XHJcblxyXG4uY2lyY2xlIHtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbn1cclxuXHJcbi5jaXJjbGUtZXhlcmNpc2UtdmlkZW9zIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChpbWFnZXMvZXhlcmNpc2V2aWQuanBnKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDIwMHB4O1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMTBweDtcclxufVxyXG5cclxuLmNpcmNsZS13ZWlnaHQtd2F0Y2hlcnMge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGltYWdlcy93ZWlnaHRfd2F0Y2hlcnMucG5nKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDIwMHB4O1xyXG4gICAgdG9wOiAxNTBweDtcclxuICAgIGxlZnQ6IDE1MHB4O1xyXG59XHJcblxyXG4uY2lyY2xlLWZvb2QtYmxvZ3Mge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGltYWdlcy9mb29kYmxvZ3MucG5nKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDIwMHB4O1xyXG4gICAgdG9wOiAzMDBweDtcclxuICAgIGxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbi5jaXJjbGUtZm9vZC1yZWNpcGVzIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChpbWFnZXMvZm9vZF9yZWNpcGVzLmpwZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAyMDBweDtcclxuICAgIHRvcDogNDUwcHg7XHJcbiAgICBsZWZ0OiAxNTBweDtcclxufVxyXG5cclxuLmNpcmNsZS1maXRuZXNzLWluc3RydWN0b3JzIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChpbWFnZXMvaW5zdHJ1Y3RvcnMucG5nKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDIwMHB4O1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5jaXJjbGUtZmluZC10aGVyYXBpc3Qge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGltYWdlcy90aGVyYXBpc3QucG5nKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDIwMHB4O1xyXG4gICAgdG9wOiAxNTBweDtcclxuICAgIHJpZ2h0OiAxNTBweDtcclxufVxyXG5cclxuLmNpcmNsZS1taC1mb3J1bXMge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGltYWdlcy9mb3J1bXMucG5nKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDIwMHB4O1xyXG4gICAgdG9wOiAzMDBweDtcclxuICAgIHJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4uY2lyY2xlLW1oLWFydGljbGVzIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChpbWFnZXMvYXJ0aWNsZXMucG5nKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDIwMHB4O1xyXG4gICAgdG9wOiA0NTBweDtcclxuICAgIHJpZ2h0OiAxNTBweDtcclxufVxyXG5cclxuLmljb24ge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGltYWdlcy9pY29uLnBuZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAyMDBweDtcclxufVxyXG5cclxuLlNpZ25JbkJveHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzYsIDIzNiwgMjM2KTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206IDMlO1xyXG4gICAgd2lkdGg6IDM1JTtcclxuICAgIGhlaWdodDogNTAwcHg7XHJcbiAgICBwYWRkaW5nOiA1MHB4O1xyXG59XHJcblxyXG4uU2lnbkluQm94MntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzYsIDIzNiwgMjM2KTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206IDMlO1xyXG4gICAgd2lkdGg6IDM1JTtcclxuICAgIGhlaWdodDogNTUwcHg7XHJcbiAgICBwYWRkaW5nOiA1MHB4O1xyXG59XHJcblxyXG4jaW5wIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/welcome/welcome.component.html":
/*!************************************************!*\
  !*** ./src/app/welcome/welcome.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\" integrity=\"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T\" crossorigin=\"anonymous\">\r\n<div class=\"jumbotron jumbotron-fluid\">\r\n    <br>\r\n    <h1 style=\"text-align:center\" class=\"display-6\">Welcome to Health Goals!</h1>\r\n    <figure><img src=\"assets/image/heart.png\" width=\"60\" height=\"60\"  class=\"mx-auto d-block\"></figure>\r\n</div>\r\n<html>\r\n\r\n<body>\r\n    <div class=\"circle-set\">\r\n        <a href=\"exercise-videos\">\r\n            <figure class=\"circle circle-exercise-videos\"></figure>\r\n        </a>\r\n        <a href=\"weight-watchers\">\r\n            <figure class=\"circle circle-weight-watchers\"></figure>\r\n        </a>\r\n        <a href=\"food-blogs\">\r\n            <figure class=\"circle circle-food-blogs\"></figure>\r\n        </a>\r\n        <a href=\"food-recipes\">\r\n            <figure class=\"circle circle-food-recipes\"></figure>\r\n\r\n        </a>\r\n        <a href=\"fitness-instructors\">\r\n            <figure class=\"circle circle-fitness-instructors\"></figure>\r\n\r\n        </a>\r\n        <a href=\"find-therapist\">\r\n            <figure class=\"circle circle-find-therapist\"></figure>\r\n\r\n        </a>\r\n        <a href=\"mh-forums\">\r\n            <figure class=\"circle circle-mh-forums\"></figure>\r\n\r\n        </a>\r\n        <a href=\"mh-articles\">\r\n            <figure class=\"circle circle-mh-articles\"></figure>\r\n        </a>\r\n    </div>\r\n    <br>\r\n    <br>\r\n    <div class=\"SignInBox\" *ngIf=\"!loggedIn\">\r\n            <h2 style=\"text-align:center\" class=\"display-4\">Sign In</h2>\r\n            <br><br>\r\n            <span class=\"ui-float-label\">\r\n                <input type=\"email\" class=\"form-control\" placeholder=\"Email\" pInputText [(ngModel)]=\"email\">\r\n                <br>\r\n                <input type=\"password\" class=\"form-control\" placeholder=\"Password\" pInputText [(ngModel)]=\"password\">\r\n            <br><br>\r\n            <div style=\"text-align: center\"> \r\n                    <button type=\"button\" (click) = \"get_login(email,password)\" pButton label=\"Log In\"></button>\r\n                    <br><br>\r\n            </div>\r\n            </span>\r\n            <br><br><br>\r\n            <div style=\"text-align: center\">\r\n                <span class=\"psw\">Don't have an account? <a href=\"sign-up\">Sign Up!</a></span> <br>\r\n                <span class = \"psw\"> Get a Daily Meal Plan <a href=\"meal-plan\"> Here! </a></span>\r\n            </div>         \r\n    </div>\r\n    <div class=\"SignInBox2\" *ngIf=\"loggedIn\">\r\n        <h2 style=\"text-align:center\" class=\"display-4\">Welcome</h2>\r\n        <h1 style=\"text-align:center\" class=\"display-4\">{{user.FirstName}}</h1>\r\n        <div style=\"text-align: center\">\r\n            <a href=\"profile/{{user.ID}}\"> <img src=\"icon.png\" width=\"200\" height=\"200\"></a>\r\n            <!-- <p>Upload Photo: </p><input id=\"inp\" type=\"file\" (change)=\"onFileSelected($event)\" style=\"text-align:center\">\r\n            <button type=\"btn-primary\" (click) = \"onUpload()\" pButton label=\"Save\"></button> -->\r\n            <br>\r\n            <span class=\"psw\"> <a href=\"/profile/{{user.ID}}\">View Your Profile</a></span> <br>\r\n            <small><b><a href=\"meal-plan\"> Meal Plan </a></b></small><br><br><br>\r\n            <button type=\"btn-primary\" (click) = \"logout()\" pButton label=\"Log Out\"></button>\r\n        </div>\r\n\r\n    </div>\r\n    \r\n</body>\r\n\r\n</html>\r\n"

/***/ }),

/***/ "./src/app/welcome/welcome.component.ts":
/*!**********************************************!*\
  !*** ./src/app/welcome/welcome.component.ts ***!
  \**********************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _welcome_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../welcome.service */ "./src/app/welcome.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent(userService, router, http) {
        this.userService = userService;
        this.router = router;
        this.http = http;
        this.loggedIn = false;
        this.selectedFile = null;
    }
    WelcomeComponent.prototype.onFileSelected = function (event) {
        console.log(event);
        this.selectedFile = event.target.files[0];
        this.blob = this.selectedFile;
        console.log("blob" + this.blob);
    };
    WelcomeComponent.prototype.onUpload = function () {
        //this.default_img(localStorage.getItem("ID"), this.blob);
    };
    WelcomeComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem("loggedIn") == "true") {
            this.loggedIn = true;
            this.get_userdata(localStorage.getItem("ID"));
        }
        else {
            this.loggedIn = false;
            localStorage.clear();
            localStorage.setItem("loggedIn", "false");
        }
    };
    WelcomeComponent.prototype.get_userdata = function (ID) {
        var _this = this;
        this.userService.get_userdata(ID).subscribe(function (data) {
            _this.user = data;
        }, function (error) {
            alert("unable to get user data");
        });
    };
    WelcomeComponent.prototype.get_login = function (email, password) {
        var _this = this;
        this.userService.get_login(email, password).subscribe(function (data) {
            _this.user = data;
            localStorage.setItem("loggedIn", "true");
            localStorage.setItem("ID", _this.user["ID"]);
            console.log("signed in");
            _this.loggedIn = true;
        }, function (error) {
            alert('incorrect username or password');
        });
    };
    WelcomeComponent.prototype.logout = function () {
        localStorage.clear();
        localStorage.setItem("loggedIn", "false");
        this.loggedIn = false;
    };
    WelcomeComponent.prototype.update_img = function (id, blob) {
        this.userService.update_img(id, blob).subscribe(function (data) {
            console.log("inserted image.");
        }, function (error) {
            alert('error!!!');
        });
    };
    WelcomeComponent.prototype.default_img = function (id, blob) {
        this.userService.default_img(id, blob).subscribe(function (data) {
            console.log("uploaded default img");
        });
    };
    WelcomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-welcome',
            template: __webpack_require__(/*! ./welcome.component.html */ "./src/app/welcome/welcome.component.html"),
            styles: [__webpack_require__(/*! ./welcome.component.css */ "./src/app/welcome/welcome.component.css")]
        }),
        __metadata("design:paramtypes", [_welcome_service__WEBPACK_IMPORTED_MODULE_2__["WelcomeService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]])
    ], WelcomeComponent);
    return WelcomeComponent;
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




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "./src/pipes/youtube.ts":
/*!******************************!*\
  !*** ./src/pipes/youtube.ts ***!
  \******************************/
/*! exports provided: Youtube */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Youtube", function() { return Youtube; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Youtube = /** @class */ (function () {
    function Youtube(dom) {
        this.dom = dom;
    }
    Youtube.prototype.transform = function (url) {
        return this.dom.bypassSecurityTrustResourceUrl(url);
    };
    Youtube = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'youtube'
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
    ], Youtube);
    return Youtube;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\kisha\Desktop\health-goals\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map