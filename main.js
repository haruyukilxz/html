/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/main.ts","vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dist/markdown-include.ts":
/*!**********************************!*\
  !*** ./dist/markdown-include.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.markdowns = new Map([
    ["a765ec128f501baf42785cd60ed09c41", Promise.resolve().then(() => __importStar(__webpack_require__(/*! ./dist/markdowns/a765ec128f501baf42785cd60ed09c41 */ "./dist/markdowns/a765ec128f501baf42785cd60ed09c41.ts")))],
    ["0fbf6268acfca5e2da7b4aba3dc27366", Promise.resolve().then(() => __importStar(__webpack_require__(/*! ./dist/markdowns/0fbf6268acfca5e2da7b4aba3dc27366 */ "./dist/markdowns/0fbf6268acfca5e2da7b4aba3dc27366.ts")))],
    ["ec8d8a4a340e8ceb268689a2e3669187", Promise.resolve().then(() => __importStar(__webpack_require__(/*! ./dist/markdowns/ec8d8a4a340e8ceb268689a2e3669187 */ "./dist/markdowns/ec8d8a4a340e8ceb268689a2e3669187.ts")))],
    ["4ec58161cb5634cdf3e0a19bd3925c33", Promise.resolve().then(() => __importStar(__webpack_require__(/*! ./dist/markdowns/4ec58161cb5634cdf3e0a19bd3925c33 */ "./dist/markdowns/4ec58161cb5634cdf3e0a19bd3925c33.ts")))],
    ["46f3b92a2c7b3132e5c00eba329e7f1b", Promise.resolve().then(() => __importStar(__webpack_require__(/*! ./dist/markdowns/46f3b92a2c7b3132e5c00eba329e7f1b */ "./dist/markdowns/46f3b92a2c7b3132e5c00eba329e7f1b.ts")))],
    ["9e228da8c13da4109e7e7c3d84546bac", Promise.resolve().then(() => __importStar(__webpack_require__(/*! ./dist/markdowns/9e228da8c13da4109e7e7c3d84546bac */ "./dist/markdowns/9e228da8c13da4109e7e7c3d84546bac.ts")))],
    ["ca4d00071e2fde1f6b176b58682cc841", Promise.resolve().then(() => __importStar(__webpack_require__(/*! ./dist/markdowns/ca4d00071e2fde1f6b176b58682cc841 */ "./dist/markdowns/ca4d00071e2fde1f6b176b58682cc841.ts")))],
    ["d8d11fc2c56cab5ffeabdd1a1be70428", Promise.resolve().then(() => __importStar(__webpack_require__(/*! ./dist/markdowns/d8d11fc2c56cab5ffeabdd1a1be70428 */ "./dist/markdowns/d8d11fc2c56cab5ffeabdd1a1be70428.ts")))],
    ["4c17f277bd278634dc79e4c600ff24e0", Promise.resolve().then(() => __importStar(__webpack_require__(/*! ./dist/markdowns/4c17f277bd278634dc79e4c600ff24e0 */ "./dist/markdowns/4c17f277bd278634dc79e4c600ff24e0.ts")))],
    ["0c7c3e6722e84a3449511cfe567597d2", Promise.resolve().then(() => __importStar(__webpack_require__(/*! ./dist/markdowns/0c7c3e6722e84a3449511cfe567597d2 */ "./dist/markdowns/0c7c3e6722e84a3449511cfe567597d2.ts")))],
    ["950a0f76860ad280996c0449c9f26c7d", Promise.resolve().then(() => __importStar(__webpack_require__(/*! ./dist/markdowns/950a0f76860ad280996c0449c9f26c7d */ "./dist/markdowns/950a0f76860ad280996c0449c9f26c7d.ts")))],
    ["79f5fb14c0450ecd43e5ce78a1a52127", Promise.resolve().then(() => __importStar(__webpack_require__(/*! ./dist/markdowns/79f5fb14c0450ecd43e5ce78a1a52127 */ "./dist/markdowns/79f5fb14c0450ecd43e5ce78a1a52127.ts")))],
    ["c18e85b8f66830ce7833c584e62c86c0", Promise.resolve().then(() => __importStar(__webpack_require__(/*! ./dist/markdowns/c18e85b8f66830ce7833c584e62c86c0 */ "./dist/markdowns/c18e85b8f66830ce7833c584e62c86c0.ts")))],
    ["7be682647ec761ec21f1a6f98b8ec761", Promise.resolve().then(() => __importStar(__webpack_require__(/*! ./dist/markdowns/7be682647ec761ec21f1a6f98b8ec761 */ "./dist/markdowns/7be682647ec761ec21f1a6f98b8ec761.ts")))],
    ["92fd8e0100484b26b13aa4d2fb66d828", Promise.resolve().then(() => __importStar(__webpack_require__(/*! ./dist/markdowns/92fd8e0100484b26b13aa4d2fb66d828 */ "./dist/markdowns/92fd8e0100484b26b13aa4d2fb66d828.ts")))],
    ["830927dc509235808d30f43355c6549b", Promise.resolve().then(() => __importStar(__webpack_require__(/*! ./dist/markdowns/830927dc509235808d30f43355c6549b */ "./dist/markdowns/830927dc509235808d30f43355c6549b.ts")))],
    ["76f59b70bc0a45a5dc10a7e4e97f67d0", Promise.resolve().then(() => __importStar(__webpack_require__(/*! ./dist/markdowns/76f59b70bc0a45a5dc10a7e4e97f67d0 */ "./dist/markdowns/76f59b70bc0a45a5dc10a7e4e97f67d0.ts")))],
    ["54812cd74c7fac89e76d682d7aea0746", Promise.resolve().then(() => __importStar(__webpack_require__(/*! ./dist/markdowns/54812cd74c7fac89e76d682d7aea0746 */ "./dist/markdowns/54812cd74c7fac89e76d682d7aea0746.ts")))],
    ["c3a049d7d4d28debb81af22cf33e521a", Promise.resolve().then(() => __importStar(__webpack_require__(/*! ./dist/markdowns/c3a049d7d4d28debb81af22cf33e521a */ "./dist/markdowns/c3a049d7d4d28debb81af22cf33e521a.ts")))],
    ["b522394b658c2e2388b8f8a0724becfd", Promise.resolve().then(() => __importStar(__webpack_require__(/*! ./dist/markdowns/b522394b658c2e2388b8f8a0724becfd */ "./dist/markdowns/b522394b658c2e2388b8f8a0724becfd.ts")))],
    ["457479bfcd20e81f1c87a22cc8024584", Promise.resolve().then(() => __importStar(__webpack_require__(/*! ./dist/markdowns/457479bfcd20e81f1c87a22cc8024584 */ "./dist/markdowns/457479bfcd20e81f1c87a22cc8024584.ts")))],
    ["02522c2e523d95b693528dd0cf07710f", Promise.resolve().then(() => __importStar(__webpack_require__(/*! ./dist/markdowns/02522c2e523d95b693528dd0cf07710f */ "./dist/markdowns/02522c2e523d95b693528dd0cf07710f.ts")))],
    ["14480b9975518a777330067cc3ce2a9b", Promise.resolve().then(() => __importStar(__webpack_require__(/*! ./dist/markdowns/14480b9975518a777330067cc3ce2a9b */ "./dist/markdowns/14480b9975518a777330067cc3ce2a9b.ts")))],
    ["7cba1b1a72cda302480252f0b0aa5ebd", Promise.resolve().then(() => __importStar(__webpack_require__(/*! ./dist/markdowns/7cba1b1a72cda302480252f0b0aa5ebd */ "./dist/markdowns/7cba1b1a72cda302480252f0b0aa5ebd.ts")))],
    ["20eb467109c35b48d5990b637eac133f", Promise.resolve().then(() => __importStar(__webpack_require__(/*! ./dist/markdowns/20eb467109c35b48d5990b637eac133f */ "./dist/markdowns/20eb467109c35b48d5990b637eac133f.ts")))],
    ["d6ad28df54e11db930db47a5b55d9b4b", Promise.resolve().then(() => __importStar(__webpack_require__(/*! ./dist/markdowns/d6ad28df54e11db930db47a5b55d9b4b */ "./dist/markdowns/d6ad28df54e11db930db47a5b55d9b4b.ts")))],
    ["cf54232cfb0ce953dbc3b48bffceb2e6", Promise.resolve().then(() => __importStar(__webpack_require__(/*! ./dist/markdowns/cf54232cfb0ce953dbc3b48bffceb2e6 */ "./dist/markdowns/cf54232cfb0ce953dbc3b48bffceb2e6.ts")))],
    ["7c124163361668e8ff9b6841b23ab51c", Promise.resolve().then(() => __importStar(__webpack_require__(/*! ./dist/markdowns/7c124163361668e8ff9b6841b23ab51c */ "./dist/markdowns/7c124163361668e8ff9b6841b23ab51c.ts")))],
    ["359ef5fdb963189bb852fda9c094d64c", Promise.resolve().then(() => __importStar(__webpack_require__(/*! ./dist/markdowns/359ef5fdb963189bb852fda9c094d64c */ "./dist/markdowns/359ef5fdb963189bb852fda9c094d64c.ts")))],
    ["8d2f85a444486300b24b2b3aa608209c", Promise.resolve().then(() => __importStar(__webpack_require__(/*! ./dist/markdowns/8d2f85a444486300b24b2b3aa608209c */ "./dist/markdowns/8d2f85a444486300b24b2b3aa608209c.ts")))],
    ["617460aa3619b392a1c270e59b53da6f", Promise.resolve().then(() => __importStar(__webpack_require__(/*! ./dist/markdowns/617460aa3619b392a1c270e59b53da6f */ "./dist/markdowns/617460aa3619b392a1c270e59b53da6f.ts")))],
    ["dce3e8e7fed5b069a71d16c4a77f6ba0", Promise.resolve().then(() => __importStar(__webpack_require__(/*! ./dist/markdowns/dce3e8e7fed5b069a71d16c4a77f6ba0 */ "./dist/markdowns/dce3e8e7fed5b069a71d16c4a77f6ba0.ts")))],
    ["17ca3f4ef78ac9a68bd4735b44d6d841", Promise.resolve().then(() => __importStar(__webpack_require__(/*! ./dist/markdowns/17ca3f4ef78ac9a68bd4735b44d6d841 */ "./dist/markdowns/17ca3f4ef78ac9a68bd4735b44d6d841.ts")))],
    ["25cad7d594788f904ba3fefca09b84b8", Promise.resolve().then(() => __importStar(__webpack_require__(/*! ./dist/markdowns/25cad7d594788f904ba3fefca09b84b8 */ "./dist/markdowns/25cad7d594788f904ba3fefca09b84b8.ts")))],
    ["229417f06f54dad7b35fef663f2639dc", Promise.resolve().then(() => __importStar(__webpack_require__(/*! ./dist/markdowns/229417f06f54dad7b35fef663f2639dc */ "./dist/markdowns/229417f06f54dad7b35fef663f2639dc.ts")))],
    ["f6ce04dcf5f58ba0c3dd77049ade267d", Promise.resolve().then(() => __importStar(__webpack_require__(/*! ./dist/markdowns/f6ce04dcf5f58ba0c3dd77049ade267d */ "./dist/markdowns/f6ce04dcf5f58ba0c3dd77049ade267d.ts")))],
    ["1546c52dd884c47056ce2f8240408d96", Promise.resolve().then(() => __importStar(__webpack_require__(/*! ./dist/markdowns/1546c52dd884c47056ce2f8240408d96 */ "./dist/markdowns/1546c52dd884c47056ce2f8240408d96.ts")))],
    ["29761fed312861dd8e3ad704ffd14421", Promise.resolve().then(() => __importStar(__webpack_require__(/*! ./dist/markdowns/29761fed312861dd8e3ad704ffd14421 */ "./dist/markdowns/29761fed312861dd8e3ad704ffd14421.ts")))],
    ["520832bd6adee0ed10c0366f98275096", Promise.resolve().then(() => __importStar(__webpack_require__(/*! ./dist/markdowns/520832bd6adee0ed10c0366f98275096 */ "./dist/markdowns/520832bd6adee0ed10c0366f98275096.ts")))],
    ["16192b6eb7177e8b222b54bd94073ffd", Promise.resolve().then(() => __importStar(__webpack_require__(/*! ./dist/markdowns/16192b6eb7177e8b222b54bd94073ffd */ "./dist/markdowns/16192b6eb7177e8b222b54bd94073ffd.ts")))],
    ["feea517af9b6eeb6c0a81a05c4bcfb79", Promise.resolve().then(() => __importStar(__webpack_require__(/*! ./dist/markdowns/feea517af9b6eeb6c0a81a05c4bcfb79 */ "./dist/markdowns/feea517af9b6eeb6c0a81a05c4bcfb79.ts")))],
    ["1f55ffa4f96c0464ff47112af006da5e", Promise.resolve().then(() => __importStar(__webpack_require__(/*! ./dist/markdowns/1f55ffa4f96c0464ff47112af006da5e */ "./dist/markdowns/1f55ffa4f96c0464ff47112af006da5e.ts")))],
    ["278b07a930bc4d478beae35cac08b329", Promise.resolve().then(() => __importStar(__webpack_require__(/*! ./dist/markdowns/278b07a930bc4d478beae35cac08b329 */ "./dist/markdowns/278b07a930bc4d478beae35cac08b329.ts")))],
    ["467142a91bb0758002405e34c2801043", Promise.resolve().then(() => __importStar(__webpack_require__(/*! ./dist/markdowns/467142a91bb0758002405e34c2801043 */ "./dist/markdowns/467142a91bb0758002405e34c2801043.ts")))],
    ["711046682e4fad9eb360b2fb295cfe7d", Promise.resolve().then(() => __importStar(__webpack_require__(/*! ./dist/markdowns/711046682e4fad9eb360b2fb295cfe7d */ "./dist/markdowns/711046682e4fad9eb360b2fb295cfe7d.ts")))],
    ["23b14dae2f240c9e2c1e6b42e6c6a704", Promise.resolve().then(() => __importStar(__webpack_require__(/*! ./dist/markdowns/23b14dae2f240c9e2c1e6b42e6c6a704 */ "./dist/markdowns/23b14dae2f240c9e2c1e6b42e6c6a704.ts")))],
    ["8ad0cb2ea1a53b5acd2f723e2dd9f539", Promise.resolve().then(() => __importStar(__webpack_require__(/*! ./dist/markdowns/8ad0cb2ea1a53b5acd2f723e2dd9f539 */ "./dist/markdowns/8ad0cb2ea1a53b5acd2f723e2dd9f539.ts")))],
    ["d65437858db8a6c421e291760c6003b3", Promise.resolve().then(() => __importStar(__webpack_require__(/*! ./dist/markdowns/d65437858db8a6c421e291760c6003b3 */ "./dist/markdowns/d65437858db8a6c421e291760c6003b3.ts")))],
    ["270135518df7f4129558f9076f79a0a8", Promise.resolve().then(() => __importStar(__webpack_require__(/*! ./dist/markdowns/270135518df7f4129558f9076f79a0a8 */ "./dist/markdowns/270135518df7f4129558f9076f79a0a8.ts")))],
    ["fd9be9bffdf00c285a44927a6bcb7686", Promise.resolve().then(() => __importStar(__webpack_require__(/*! ./dist/markdowns/fd9be9bffdf00c285a44927a6bcb7686 */ "./dist/markdowns/fd9be9bffdf00c285a44927a6bcb7686.ts")))],
    ["eba9938dc5434e0a86e910df11a2f941", Promise.resolve().then(() => __importStar(__webpack_require__(/*! ./dist/markdowns/eba9938dc5434e0a86e910df11a2f941 */ "./dist/markdowns/eba9938dc5434e0a86e910df11a2f941.ts")))],
    ["577036ad3bb108e8edf9b8b08f0963eb", Promise.resolve().then(() => __importStar(__webpack_require__(/*! ./dist/markdowns/577036ad3bb108e8edf9b8b08f0963eb */ "./dist/markdowns/577036ad3bb108e8edf9b8b08f0963eb.ts")))],
    ["2e2217abd314b60174d0a15c88e6537a", Promise.resolve().then(() => __importStar(__webpack_require__(/*! ./dist/markdowns/2e2217abd314b60174d0a15c88e6537a */ "./dist/markdowns/2e2217abd314b60174d0a15c88e6537a.ts")))],
    ["81703499cb0139a5d95eaa51d24ad1d0", Promise.resolve().then(() => __importStar(__webpack_require__(/*! ./dist/markdowns/81703499cb0139a5d95eaa51d24ad1d0 */ "./dist/markdowns/81703499cb0139a5d95eaa51d24ad1d0.ts")))],
    ["b33d8642f68b23579b016e0786e306f9", Promise.resolve().then(() => __importStar(__webpack_require__(/*! ./dist/markdowns/b33d8642f68b23579b016e0786e306f9 */ "./dist/markdowns/b33d8642f68b23579b016e0786e306f9.ts")))],
    ["3e3c35394a72c93fcf2db86e32084bee", Promise.resolve().then(() => __importStar(__webpack_require__(/*! ./dist/markdowns/3e3c35394a72c93fcf2db86e32084bee */ "./dist/markdowns/3e3c35394a72c93fcf2db86e32084bee.ts")))],
    ["31c1e3d2c39385eaacd65a04ed05905f", Promise.resolve().then(() => __importStar(__webpack_require__(/*! ./dist/markdowns/31c1e3d2c39385eaacd65a04ed05905f */ "./dist/markdowns/31c1e3d2c39385eaacd65a04ed05905f.ts")))],
    ["b6e29ade42329ea483d6986e68520f08", Promise.resolve().then(() => __importStar(__webpack_require__(/*! ./dist/markdowns/b6e29ade42329ea483d6986e68520f08 */ "./dist/markdowns/b6e29ade42329ea483d6986e68520f08.ts")))],
    ["ae0d0f75c6dcfc95d117d4bc49049107", Promise.resolve().then(() => __importStar(__webpack_require__(/*! ./dist/markdowns/ae0d0f75c6dcfc95d117d4bc49049107 */ "./dist/markdowns/ae0d0f75c6dcfc95d117d4bc49049107.ts")))],
]);


/***/ }),

/***/ "./dist/markdowns/02522c2e523d95b693528dd0cf07710f.ts":
/*!************************************************************!*\
  !*** ./dist/markdowns/02522c2e523d95b693528dd0cf07710f.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const state_1 = __webpack_require__(/*! ./src/store/state */ "./src/store/state.ts");
const markdown_it_1 = __importDefault(__webpack_require__(/*! markdown-it */ "./node_modules/markdown-it/index.js"));
const md = new markdown_it_1.default();
exports.default = () => {
    const p = __webpack_require__(/*! ./static/hello.md */ "./static/hello.md");
    const body = md.render(p.body.toString());
    const element = body.split("\n");
    let post = new state_1.Post();
    post.attributes = p.attributes;
    //TODO: 通过配置文件选择保存的数量
    post.summary = element[0];
    post.body = body;
    return post;
};


/***/ }),

/***/ "./dist/markdowns/0c7c3e6722e84a3449511cfe567597d2.ts":
/*!************************************************************!*\
  !*** ./dist/markdowns/0c7c3e6722e84a3449511cfe567597d2.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const state_1 = __webpack_require__(/*! ./src/store/state */ "./src/store/state.ts");
const markdown_it_1 = __importDefault(__webpack_require__(/*! markdown-it */ "./node_modules/markdown-it/index.js"));
const md = new markdown_it_1.default();
exports.default = () => {
    const p = __webpack_require__(/*! ./static/TKL主题优化-转.md */ "./static/TKL主题优化-转.md");
    const body = md.render(p.body.toString());
    const element = body.split("\n");
    let post = new state_1.Post();
    post.attributes = p.attributes;
    //TODO: 通过配置文件选择保存的数量
    post.summary = element[0];
    post.body = body;
    return post;
};


/***/ }),

/***/ "./dist/markdowns/0fbf6268acfca5e2da7b4aba3dc27366.ts":
/*!************************************************************!*\
  !*** ./dist/markdowns/0fbf6268acfca5e2da7b4aba3dc27366.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const state_1 = __webpack_require__(/*! ./src/store/state */ "./src/store/state.ts");
const markdown_it_1 = __importDefault(__webpack_require__(/*! markdown-it */ "./node_modules/markdown-it/index.js"));
const md = new markdown_it_1.default();
exports.default = () => {
    const p = __webpack_require__(/*! ./static/ArchLinux运行steam出现缺少LibGL-steam-libGL-error-failed-to-load-driver-swrast.md */ "./static/ArchLinux运行steam出现缺少LibGL-steam-libGL-error-failed-to-load-driver-swrast.md");
    const body = md.render(p.body.toString());
    const element = body.split("\n");
    let post = new state_1.Post();
    post.attributes = p.attributes;
    //TODO: 通过配置文件选择保存的数量
    post.summary = element[0];
    post.body = body;
    return post;
};


/***/ }),

/***/ "./dist/markdowns/14480b9975518a777330067cc3ce2a9b.ts":
/*!************************************************************!*\
  !*** ./dist/markdowns/14480b9975518a777330067cc3ce2a9b.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const state_1 = __webpack_require__(/*! ./src/store/state */ "./src/store/state.ts");
const markdown_it_1 = __importDefault(__webpack_require__(/*! markdown-it */ "./node_modules/markdown-it/index.js"));
const md = new markdown_it_1.default();
exports.default = () => {
    const p = __webpack_require__(/*! ./static/hexo page move to coding.md */ "./static/hexo page move to coding.md");
    const body = md.render(p.body.toString());
    const element = body.split("\n");
    let post = new state_1.Post();
    post.attributes = p.attributes;
    //TODO: 通过配置文件选择保存的数量
    post.summary = element[0];
    post.body = body;
    return post;
};


/***/ }),

/***/ "./dist/markdowns/1546c52dd884c47056ce2f8240408d96.ts":
/*!************************************************************!*\
  !*** ./dist/markdowns/1546c52dd884c47056ce2f8240408d96.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const state_1 = __webpack_require__(/*! ./src/store/state */ "./src/store/state.ts");
const markdown_it_1 = __importDefault(__webpack_require__(/*! markdown-it */ "./node_modules/markdown-it/index.js"));
const md = new markdown_it_1.default();
exports.default = () => {
    const p = __webpack_require__(/*! ./static/vue-transitions.md */ "./static/vue-transitions.md");
    const body = md.render(p.body.toString());
    const element = body.split("\n");
    let post = new state_1.Post();
    post.attributes = p.attributes;
    //TODO: 通过配置文件选择保存的数量
    post.summary = element[0];
    post.body = body;
    return post;
};


/***/ }),

/***/ "./dist/markdowns/16192b6eb7177e8b222b54bd94073ffd.ts":
/*!************************************************************!*\
  !*** ./dist/markdowns/16192b6eb7177e8b222b54bd94073ffd.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const state_1 = __webpack_require__(/*! ./src/store/state */ "./src/store/state.ts");
const markdown_it_1 = __importDefault(__webpack_require__(/*! markdown-it */ "./node_modules/markdown-it/index.js"));
const md = new markdown_it_1.default();
exports.default = () => {
    const p = __webpack_require__(/*! ./static/wsl2的使用体验.md */ "./static/wsl2的使用体验.md");
    const body = md.render(p.body.toString());
    const element = body.split("\n");
    let post = new state_1.Post();
    post.attributes = p.attributes;
    //TODO: 通过配置文件选择保存的数量
    post.summary = element[0];
    post.body = body;
    return post;
};


/***/ }),

/***/ "./dist/markdowns/17ca3f4ef78ac9a68bd4735b44d6d841.ts":
/*!************************************************************!*\
  !*** ./dist/markdowns/17ca3f4ef78ac9a68bd4735b44d6d841.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const state_1 = __webpack_require__(/*! ./src/store/state */ "./src/store/state.ts");
const markdown_it_1 = __importDefault(__webpack_require__(/*! markdown-it */ "./node_modules/markdown-it/index.js"));
const md = new markdown_it_1.default();
exports.default = () => {
    const p = __webpack_require__(/*! ./static/use google calendar to finishe work.md */ "./static/use google calendar to finishe work.md");
    const body = md.render(p.body.toString());
    const element = body.split("\n");
    let post = new state_1.Post();
    post.attributes = p.attributes;
    //TODO: 通过配置文件选择保存的数量
    post.summary = element[0];
    post.body = body;
    return post;
};


/***/ }),

/***/ "./dist/markdowns/1f55ffa4f96c0464ff47112af006da5e.ts":
/*!************************************************************!*\
  !*** ./dist/markdowns/1f55ffa4f96c0464ff47112af006da5e.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const state_1 = __webpack_require__(/*! ./src/store/state */ "./src/store/state.ts");
const markdown_it_1 = __importDefault(__webpack_require__(/*! markdown-it */ "./node_modules/markdown-it/index.js"));
const md = new markdown_it_1.default();
exports.default = () => {
    const p = __webpack_require__(/*! ./static/使用webpack-dev-server来监听项目变化.md */ "./static/使用webpack-dev-server来监听项目变化.md");
    const body = md.render(p.body.toString());
    const element = body.split("\n");
    let post = new state_1.Post();
    post.attributes = p.attributes;
    //TODO: 通过配置文件选择保存的数量
    post.summary = element[0];
    post.body = body;
    return post;
};


/***/ }),

/***/ "./dist/markdowns/20eb467109c35b48d5990b637eac133f.ts":
/*!************************************************************!*\
  !*** ./dist/markdowns/20eb467109c35b48d5990b637eac133f.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const state_1 = __webpack_require__(/*! ./src/store/state */ "./src/store/state.ts");
const markdown_it_1 = __importDefault(__webpack_require__(/*! markdown-it */ "./node_modules/markdown-it/index.js"));
const md = new markdown_it_1.default();
exports.default = () => {
    const p = __webpack_require__(/*! ./static/how-to-use-LNMP-on-deepin.md */ "./static/how-to-use-LNMP-on-deepin.md");
    const body = md.render(p.body.toString());
    const element = body.split("\n");
    let post = new state_1.Post();
    post.attributes = p.attributes;
    //TODO: 通过配置文件选择保存的数量
    post.summary = element[0];
    post.body = body;
    return post;
};


/***/ }),

/***/ "./dist/markdowns/229417f06f54dad7b35fef663f2639dc.ts":
/*!************************************************************!*\
  !*** ./dist/markdowns/229417f06f54dad7b35fef663f2639dc.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const state_1 = __webpack_require__(/*! ./src/store/state */ "./src/store/state.ts");
const markdown_it_1 = __importDefault(__webpack_require__(/*! markdown-it */ "./node_modules/markdown-it/index.js"));
const md = new markdown_it_1.default();
exports.default = () => {
    const p = __webpack_require__(/*! ./static/use-serial-port-debug-deepin-on-archlinux.md */ "./static/use-serial-port-debug-deepin-on-archlinux.md");
    const body = md.render(p.body.toString());
    const element = body.split("\n");
    let post = new state_1.Post();
    post.attributes = p.attributes;
    //TODO: 通过配置文件选择保存的数量
    post.summary = element[0];
    post.body = body;
    return post;
};


/***/ }),

/***/ "./dist/markdowns/23b14dae2f240c9e2c1e6b42e6c6a704.ts":
/*!************************************************************!*\
  !*** ./dist/markdowns/23b14dae2f240c9e2c1e6b42e6c6a704.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const state_1 = __webpack_require__(/*! ./src/store/state */ "./src/store/state.ts");
const markdown_it_1 = __importDefault(__webpack_require__(/*! markdown-it */ "./node_modules/markdown-it/index.js"));
const md = new markdown_it_1.default();
exports.default = () => {
    const p = __webpack_require__(/*! ./static/入坑typescript了.md */ "./static/入坑typescript了.md");
    const body = md.render(p.body.toString());
    const element = body.split("\n");
    let post = new state_1.Post();
    post.attributes = p.attributes;
    //TODO: 通过配置文件选择保存的数量
    post.summary = element[0];
    post.body = body;
    return post;
};


/***/ }),

/***/ "./dist/markdowns/25cad7d594788f904ba3fefca09b84b8.ts":
/*!************************************************************!*\
  !*** ./dist/markdowns/25cad7d594788f904ba3fefca09b84b8.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const state_1 = __webpack_require__(/*! ./src/store/state */ "./src/store/state.ts");
const markdown_it_1 = __importDefault(__webpack_require__(/*! markdown-it */ "./node_modules/markdown-it/index.js"));
const md = new markdown_it_1.default();
exports.default = () => {
    const p = __webpack_require__(/*! ./static/use-github-actions-to-depoly-hexo.md */ "./static/use-github-actions-to-depoly-hexo.md");
    const body = md.render(p.body.toString());
    const element = body.split("\n");
    let post = new state_1.Post();
    post.attributes = p.attributes;
    //TODO: 通过配置文件选择保存的数量
    post.summary = element[0];
    post.body = body;
    return post;
};


/***/ }),

/***/ "./dist/markdowns/270135518df7f4129558f9076f79a0a8.ts":
/*!************************************************************!*\
  !*** ./dist/markdowns/270135518df7f4129558f9076f79a0a8.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const state_1 = __webpack_require__(/*! ./src/store/state */ "./src/store/state.ts");
const markdown_it_1 = __importDefault(__webpack_require__(/*! markdown-it */ "./node_modules/markdown-it/index.js"));
const md = new markdown_it_1.default();
exports.default = () => {
    const p = __webpack_require__(/*! ./static/在deepin上使用dnsmasq来解决dns解析缓慢.md */ "./static/在deepin上使用dnsmasq来解决dns解析缓慢.md");
    const body = md.render(p.body.toString());
    const element = body.split("\n");
    let post = new state_1.Post();
    post.attributes = p.attributes;
    //TODO: 通过配置文件选择保存的数量
    post.summary = element[0];
    post.body = body;
    return post;
};


/***/ }),

/***/ "./dist/markdowns/278b07a930bc4d478beae35cac08b329.ts":
/*!************************************************************!*\
  !*** ./dist/markdowns/278b07a930bc4d478beae35cac08b329.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const state_1 = __webpack_require__(/*! ./src/store/state */ "./src/store/state.ts");
const markdown_it_1 = __importDefault(__webpack_require__(/*! markdown-it */ "./node_modules/markdown-it/index.js"));
const md = new markdown_it_1.default();
exports.default = () => {
    const p = __webpack_require__(/*! ./static/使用webpack打包Vue和TypeScript.md */ "./static/使用webpack打包Vue和TypeScript.md");
    const body = md.render(p.body.toString());
    const element = body.split("\n");
    let post = new state_1.Post();
    post.attributes = p.attributes;
    //TODO: 通过配置文件选择保存的数量
    post.summary = element[0];
    post.body = body;
    return post;
};


/***/ }),

/***/ "./dist/markdowns/29761fed312861dd8e3ad704ffd14421.ts":
/*!************************************************************!*\
  !*** ./dist/markdowns/29761fed312861dd8e3ad704ffd14421.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const state_1 = __webpack_require__(/*! ./src/store/state */ "./src/store/state.ts");
const markdown_it_1 = __importDefault(__webpack_require__(/*! markdown-it */ "./node_modules/markdown-it/index.js"));
const md = new markdown_it_1.default();
exports.default = () => {
    const p = __webpack_require__(/*! ./static/webhook.md */ "./static/webhook.md");
    const body = md.render(p.body.toString());
    const element = body.split("\n");
    let post = new state_1.Post();
    post.attributes = p.attributes;
    //TODO: 通过配置文件选择保存的数量
    post.summary = element[0];
    post.body = body;
    return post;
};


/***/ }),

/***/ "./dist/markdowns/2e2217abd314b60174d0a15c88e6537a.ts":
/*!************************************************************!*\
  !*** ./dist/markdowns/2e2217abd314b60174d0a15c88e6537a.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const state_1 = __webpack_require__(/*! ./src/store/state */ "./src/store/state.ts");
const markdown_it_1 = __importDefault(__webpack_require__(/*! markdown-it */ "./node_modules/markdown-it/index.js"));
const md = new markdown_it_1.default();
exports.default = () => {
    const p = __webpack_require__(/*! ./static/浅谈Javascript构造器模式.md */ "./static/浅谈Javascript构造器模式.md");
    const body = md.render(p.body.toString());
    const element = body.split("\n");
    let post = new state_1.Post();
    post.attributes = p.attributes;
    //TODO: 通过配置文件选择保存的数量
    post.summary = element[0];
    post.body = body;
    return post;
};


/***/ }),

/***/ "./dist/markdowns/31c1e3d2c39385eaacd65a04ed05905f.ts":
/*!************************************************************!*\
  !*** ./dist/markdowns/31c1e3d2c39385eaacd65a04ed05905f.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const state_1 = __webpack_require__(/*! ./src/store/state */ "./src/store/state.ts");
const markdown_it_1 = __importDefault(__webpack_require__(/*! markdown-it */ "./node_modules/markdown-it/index.js"));
const md = new markdown_it_1.default();
exports.default = () => {
    const p = __webpack_require__(/*! ./static/解决NVIDIA重新启动以后系统冻结.md */ "./static/解决NVIDIA重新启动以后系统冻结.md");
    const body = md.render(p.body.toString());
    const element = body.split("\n");
    let post = new state_1.Post();
    post.attributes = p.attributes;
    //TODO: 通过配置文件选择保存的数量
    post.summary = element[0];
    post.body = body;
    return post;
};


/***/ }),

/***/ "./dist/markdowns/359ef5fdb963189bb852fda9c094d64c.ts":
/*!************************************************************!*\
  !*** ./dist/markdowns/359ef5fdb963189bb852fda9c094d64c.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const state_1 = __webpack_require__(/*! ./src/store/state */ "./src/store/state.ts");
const markdown_it_1 = __importDefault(__webpack_require__(/*! markdown-it */ "./node_modules/markdown-it/index.js"));
const md = new markdown_it_1.default();
exports.default = () => {
    const p = __webpack_require__(/*! ./static/quick sort for c++.md */ "./static/quick sort for c++.md");
    const body = md.render(p.body.toString());
    const element = body.split("\n");
    let post = new state_1.Post();
    post.attributes = p.attributes;
    //TODO: 通过配置文件选择保存的数量
    post.summary = element[0];
    post.body = body;
    return post;
};


/***/ }),

/***/ "./dist/markdowns/3e3c35394a72c93fcf2db86e32084bee.ts":
/*!************************************************************!*\
  !*** ./dist/markdowns/3e3c35394a72c93fcf2db86e32084bee.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const state_1 = __webpack_require__(/*! ./src/store/state */ "./src/store/state.ts");
const markdown_it_1 = __importDefault(__webpack_require__(/*! markdown-it */ "./node_modules/markdown-it/index.js"));
const md = new markdown_it_1.default();
exports.default = () => {
    const p = __webpack_require__(/*! ./static/解决IntelliJ-IDEA界面瞎眼.md */ "./static/解决IntelliJ-IDEA界面瞎眼.md");
    const body = md.render(p.body.toString());
    const element = body.split("\n");
    let post = new state_1.Post();
    post.attributes = p.attributes;
    //TODO: 通过配置文件选择保存的数量
    post.summary = element[0];
    post.body = body;
    return post;
};


/***/ }),

/***/ "./dist/markdowns/457479bfcd20e81f1c87a22cc8024584.ts":
/*!************************************************************!*\
  !*** ./dist/markdowns/457479bfcd20e81f1c87a22cc8024584.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const state_1 = __webpack_require__(/*! ./src/store/state */ "./src/store/state.ts");
const markdown_it_1 = __importDefault(__webpack_require__(/*! markdown-it */ "./node_modules/markdown-it/index.js"));
const md = new markdown_it_1.default();
exports.default = () => {
    const p = __webpack_require__(/*! ./static/fuck-taobao.md */ "./static/fuck-taobao.md");
    const body = md.render(p.body.toString());
    const element = body.split("\n");
    let post = new state_1.Post();
    post.attributes = p.attributes;
    //TODO: 通过配置文件选择保存的数量
    post.summary = element[0];
    post.body = body;
    return post;
};


/***/ }),

/***/ "./dist/markdowns/467142a91bb0758002405e34c2801043.ts":
/*!************************************************************!*\
  !*** ./dist/markdowns/467142a91bb0758002405e34c2801043.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const state_1 = __webpack_require__(/*! ./src/store/state */ "./src/store/state.ts");
const markdown_it_1 = __importDefault(__webpack_require__(/*! markdown-it */ "./node_modules/markdown-it/index.js"));
const md = new markdown_it_1.default();
exports.default = () => {
    const p = __webpack_require__(/*! ./static/使用伪元素创建一个圆点.md */ "./static/使用伪元素创建一个圆点.md");
    const body = md.render(p.body.toString());
    const element = body.split("\n");
    let post = new state_1.Post();
    post.attributes = p.attributes;
    //TODO: 通过配置文件选择保存的数量
    post.summary = element[0];
    post.body = body;
    return post;
};


/***/ }),

/***/ "./dist/markdowns/46f3b92a2c7b3132e5c00eba329e7f1b.ts":
/*!************************************************************!*\
  !*** ./dist/markdowns/46f3b92a2c7b3132e5c00eba329e7f1b.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const state_1 = __webpack_require__(/*! ./src/store/state */ "./src/store/state.ts");
const markdown_it_1 = __importDefault(__webpack_require__(/*! markdown-it */ "./node_modules/markdown-it/index.js"));
const md = new markdown_it_1.default();
exports.default = () => {
    const p = __webpack_require__(/*! ./static/Dock插件开发.md */ "./static/Dock插件开发.md");
    const body = md.render(p.body.toString());
    const element = body.split("\n");
    let post = new state_1.Post();
    post.attributes = p.attributes;
    //TODO: 通过配置文件选择保存的数量
    post.summary = element[0];
    post.body = body;
    return post;
};


/***/ }),

/***/ "./dist/markdowns/4c17f277bd278634dc79e4c600ff24e0.ts":
/*!************************************************************!*\
  !*** ./dist/markdowns/4c17f277bd278634dc79e4c600ff24e0.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const state_1 = __webpack_require__(/*! ./src/store/state */ "./src/store/state.ts");
const markdown_it_1 = __importDefault(__webpack_require__(/*! markdown-it */ "./node_modules/markdown-it/index.js"));
const md = new markdown_it_1.default();
exports.default = () => {
    const p = __webpack_require__(/*! ./static/SAOUTILS.md */ "./static/SAOUTILS.md");
    const body = md.render(p.body.toString());
    const element = body.split("\n");
    let post = new state_1.Post();
    post.attributes = p.attributes;
    //TODO: 通过配置文件选择保存的数量
    post.summary = element[0];
    post.body = body;
    return post;
};


/***/ }),

/***/ "./dist/markdowns/4ec58161cb5634cdf3e0a19bd3925c33.ts":
/*!************************************************************!*\
  !*** ./dist/markdowns/4ec58161cb5634cdf3e0a19bd3925c33.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const state_1 = __webpack_require__(/*! ./src/store/state */ "./src/store/state.ts");
const markdown_it_1 = __importDefault(__webpack_require__(/*! markdown-it */ "./node_modules/markdown-it/index.js"));
const md = new markdown_it_1.default();
exports.default = () => {
    const p = __webpack_require__(/*! ./static/CMake-CTests-for-dde-control-center.md */ "./static/CMake-CTests-for-dde-control-center.md");
    const body = md.render(p.body.toString());
    const element = body.split("\n");
    let post = new state_1.Post();
    post.attributes = p.attributes;
    //TODO: 通过配置文件选择保存的数量
    post.summary = element[0];
    post.body = body;
    return post;
};


/***/ }),

/***/ "./dist/markdowns/520832bd6adee0ed10c0366f98275096.ts":
/*!************************************************************!*\
  !*** ./dist/markdowns/520832bd6adee0ed10c0366f98275096.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const state_1 = __webpack_require__(/*! ./src/store/state */ "./src/store/state.ts");
const markdown_it_1 = __importDefault(__webpack_require__(/*! markdown-it */ "./node_modules/markdown-it/index.js"));
const md = new markdown_it_1.default();
exports.default = () => {
    const p = __webpack_require__(/*! ./static/webpack入门.md */ "./static/webpack入门.md");
    const body = md.render(p.body.toString());
    const element = body.split("\n");
    let post = new state_1.Post();
    post.attributes = p.attributes;
    //TODO: 通过配置文件选择保存的数量
    post.summary = element[0];
    post.body = body;
    return post;
};


/***/ }),

/***/ "./dist/markdowns/54812cd74c7fac89e76d682d7aea0746.ts":
/*!************************************************************!*\
  !*** ./dist/markdowns/54812cd74c7fac89e76d682d7aea0746.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const state_1 = __webpack_require__(/*! ./src/store/state */ "./src/store/state.ts");
const markdown_it_1 = __importDefault(__webpack_require__(/*! markdown-it */ "./node_modules/markdown-it/index.js"));
const md = new markdown_it_1.default();
exports.default = () => {
    const p = __webpack_require__(/*! ./static/docker-hexo.md */ "./static/docker-hexo.md");
    const body = md.render(p.body.toString());
    const element = body.split("\n");
    let post = new state_1.Post();
    post.attributes = p.attributes;
    //TODO: 通过配置文件选择保存的数量
    post.summary = element[0];
    post.body = body;
    return post;
};


/***/ }),

/***/ "./dist/markdowns/577036ad3bb108e8edf9b8b08f0963eb.ts":
/*!************************************************************!*\
  !*** ./dist/markdowns/577036ad3bb108e8edf9b8b08f0963eb.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const state_1 = __webpack_require__(/*! ./src/store/state */ "./src/store/state.ts");
const markdown_it_1 = __importDefault(__webpack_require__(/*! markdown-it */ "./node_modules/markdown-it/index.js"));
const md = new markdown_it_1.default();
exports.default = () => {
    const p = __webpack_require__(/*! ./static/正常的流程在界面上却是bug.md */ "./static/正常的流程在界面上却是bug.md");
    const body = md.render(p.body.toString());
    const element = body.split("\n");
    let post = new state_1.Post();
    post.attributes = p.attributes;
    //TODO: 通过配置文件选择保存的数量
    post.summary = element[0];
    post.body = body;
    return post;
};


/***/ }),

/***/ "./dist/markdowns/617460aa3619b392a1c270e59b53da6f.ts":
/*!************************************************************!*\
  !*** ./dist/markdowns/617460aa3619b392a1c270e59b53da6f.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const state_1 = __webpack_require__(/*! ./src/store/state */ "./src/store/state.ts");
const markdown_it_1 = __importDefault(__webpack_require__(/*! markdown-it */ "./node_modules/markdown-it/index.js"));
const md = new markdown_it_1.default();
exports.default = () => {
    const p = __webpack_require__(/*! ./static/test.md */ "./static/test.md");
    const body = md.render(p.body.toString());
    const element = body.split("\n");
    let post = new state_1.Post();
    post.attributes = p.attributes;
    //TODO: 通过配置文件选择保存的数量
    post.summary = element[0];
    post.body = body;
    return post;
};


/***/ }),

/***/ "./dist/markdowns/711046682e4fad9eb360b2fb295cfe7d.ts":
/*!************************************************************!*\
  !*** ./dist/markdowns/711046682e4fad9eb360b2fb295cfe7d.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const state_1 = __webpack_require__(/*! ./src/store/state */ "./src/store/state.ts");
const markdown_it_1 = __importDefault(__webpack_require__(/*! markdown-it */ "./node_modules/markdown-it/index.js"));
const md = new markdown_it_1.default();
exports.default = () => {
    const p = __webpack_require__(/*! ./static/修复Archlinux的Grub.md */ "./static/修复Archlinux的Grub.md");
    const body = md.render(p.body.toString());
    const element = body.split("\n");
    let post = new state_1.Post();
    post.attributes = p.attributes;
    //TODO: 通过配置文件选择保存的数量
    post.summary = element[0];
    post.body = body;
    return post;
};


/***/ }),

/***/ "./dist/markdowns/76f59b70bc0a45a5dc10a7e4e97f67d0.ts":
/*!************************************************************!*\
  !*** ./dist/markdowns/76f59b70bc0a45a5dc10a7e4e97f67d0.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const state_1 = __webpack_require__(/*! ./src/store/state */ "./src/store/state.ts");
const markdown_it_1 = __importDefault(__webpack_require__(/*! markdown-it */ "./node_modules/markdown-it/index.js"));
const md = new markdown_it_1.default();
exports.default = () => {
    const p = __webpack_require__(/*! ./static/docker-aria2c.md */ "./static/docker-aria2c.md");
    const body = md.render(p.body.toString());
    const element = body.split("\n");
    let post = new state_1.Post();
    post.attributes = p.attributes;
    //TODO: 通过配置文件选择保存的数量
    post.summary = element[0];
    post.body = body;
    return post;
};


/***/ }),

/***/ "./dist/markdowns/79f5fb14c0450ecd43e5ce78a1a52127.ts":
/*!************************************************************!*\
  !*** ./dist/markdowns/79f5fb14c0450ecd43e5ce78a1a52127.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const state_1 = __webpack_require__(/*! ./src/store/state */ "./src/store/state.ts");
const markdown_it_1 = __importDefault(__webpack_require__(/*! markdown-it */ "./node_modules/markdown-it/index.js"));
const md = new markdown_it_1.default();
exports.default = () => {
    const p = __webpack_require__(/*! ./static/aria2配置.md */ "./static/aria2配置.md");
    const body = md.render(p.body.toString());
    const element = body.split("\n");
    let post = new state_1.Post();
    post.attributes = p.attributes;
    //TODO: 通过配置文件选择保存的数量
    post.summary = element[0];
    post.body = body;
    return post;
};


/***/ }),

/***/ "./dist/markdowns/7be682647ec761ec21f1a6f98b8ec761.ts":
/*!************************************************************!*\
  !*** ./dist/markdowns/7be682647ec761ec21f1a6f98b8ec761.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const state_1 = __webpack_require__(/*! ./src/store/state */ "./src/store/state.ts");
const markdown_it_1 = __importDefault(__webpack_require__(/*! markdown-it */ "./node_modules/markdown-it/index.js"));
const md = new markdown_it_1.default();
exports.default = () => {
    const p = __webpack_require__(/*! ./static/cpp-sort.md */ "./static/cpp-sort.md");
    const body = md.render(p.body.toString());
    const element = body.split("\n");
    let post = new state_1.Post();
    post.attributes = p.attributes;
    //TODO: 通过配置文件选择保存的数量
    post.summary = element[0];
    post.body = body;
    return post;
};


/***/ }),

/***/ "./dist/markdowns/7c124163361668e8ff9b6841b23ab51c.ts":
/*!************************************************************!*\
  !*** ./dist/markdowns/7c124163361668e8ff9b6841b23ab51c.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const state_1 = __webpack_require__(/*! ./src/store/state */ "./src/store/state.ts");
const markdown_it_1 = __importDefault(__webpack_require__(/*! markdown-it */ "./node_modules/markdown-it/index.js"));
const md = new markdown_it_1.default();
exports.default = () => {
    const p = __webpack_require__(/*! ./static/page.md */ "./static/page.md");
    const body = md.render(p.body.toString());
    const element = body.split("\n");
    let post = new state_1.Post();
    post.attributes = p.attributes;
    //TODO: 通过配置文件选择保存的数量
    post.summary = element[0];
    post.body = body;
    return post;
};


/***/ }),

/***/ "./dist/markdowns/7cba1b1a72cda302480252f0b0aa5ebd.ts":
/*!************************************************************!*\
  !*** ./dist/markdowns/7cba1b1a72cda302480252f0b0aa5ebd.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const state_1 = __webpack_require__(/*! ./src/store/state */ "./src/store/state.ts");
const markdown_it_1 = __importDefault(__webpack_require__(/*! markdown-it */ "./node_modules/markdown-it/index.js"));
const md = new markdown_it_1.default();
exports.default = () => {
    const p = __webpack_require__(/*! ./static/hibernate-for-swapfile.md */ "./static/hibernate-for-swapfile.md");
    const body = md.render(p.body.toString());
    const element = body.split("\n");
    let post = new state_1.Post();
    post.attributes = p.attributes;
    //TODO: 通过配置文件选择保存的数量
    post.summary = element[0];
    post.body = body;
    return post;
};


/***/ }),

/***/ "./dist/markdowns/81703499cb0139a5d95eaa51d24ad1d0.ts":
/*!************************************************************!*\
  !*** ./dist/markdowns/81703499cb0139a5d95eaa51d24ad1d0.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const state_1 = __webpack_require__(/*! ./src/store/state */ "./src/store/state.ts");
const markdown_it_1 = __importDefault(__webpack_require__(/*! markdown-it */ "./node_modules/markdown-it/index.js"));
const md = new markdown_it_1.default();
exports.default = () => {
    const p = __webpack_require__(/*! ./static/深度学习笔记.md */ "./static/深度学习笔记.md");
    const body = md.render(p.body.toString());
    const element = body.split("\n");
    let post = new state_1.Post();
    post.attributes = p.attributes;
    //TODO: 通过配置文件选择保存的数量
    post.summary = element[0];
    post.body = body;
    return post;
};


/***/ }),

/***/ "./dist/markdowns/830927dc509235808d30f43355c6549b.ts":
/*!************************************************************!*\
  !*** ./dist/markdowns/830927dc509235808d30f43355c6549b.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const state_1 = __webpack_require__(/*! ./src/store/state */ "./src/store/state.ts");
const markdown_it_1 = __importDefault(__webpack_require__(/*! markdown-it */ "./node_modules/markdown-it/index.js"));
const md = new markdown_it_1.default();
exports.default = () => {
    const p = __webpack_require__(/*! ./static/deepin待机后键盘和触摸板无法使用的解决方法.md */ "./static/deepin待机后键盘和触摸板无法使用的解决方法.md");
    const body = md.render(p.body.toString());
    const element = body.split("\n");
    let post = new state_1.Post();
    post.attributes = p.attributes;
    //TODO: 通过配置文件选择保存的数量
    post.summary = element[0];
    post.body = body;
    return post;
};


/***/ }),

/***/ "./dist/markdowns/8ad0cb2ea1a53b5acd2f723e2dd9f539.ts":
/*!************************************************************!*\
  !*** ./dist/markdowns/8ad0cb2ea1a53b5acd2f723e2dd9f539.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const state_1 = __webpack_require__(/*! ./src/store/state */ "./src/store/state.ts");
const markdown_it_1 = __importDefault(__webpack_require__(/*! markdown-it */ "./node_modules/markdown-it/index.js"));
const md = new markdown_it_1.default();
exports.default = () => {
    const p = __webpack_require__(/*! ./static/卷积神经网络简述.md */ "./static/卷积神经网络简述.md");
    const body = md.render(p.body.toString());
    const element = body.split("\n");
    let post = new state_1.Post();
    post.attributes = p.attributes;
    //TODO: 通过配置文件选择保存的数量
    post.summary = element[0];
    post.body = body;
    return post;
};


/***/ }),

/***/ "./dist/markdowns/8d2f85a444486300b24b2b3aa608209c.ts":
/*!************************************************************!*\
  !*** ./dist/markdowns/8d2f85a444486300b24b2b3aa608209c.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const state_1 = __webpack_require__(/*! ./src/store/state */ "./src/store/state.ts");
const markdown_it_1 = __importDefault(__webpack_require__(/*! markdown-it */ "./node_modules/markdown-it/index.js"));
const md = new markdown_it_1.default();
exports.default = () => {
    const p = __webpack_require__(/*! ./static/sakura.md */ "./static/sakura.md");
    const body = md.render(p.body.toString());
    const element = body.split("\n");
    let post = new state_1.Post();
    post.attributes = p.attributes;
    //TODO: 通过配置文件选择保存的数量
    post.summary = element[0];
    post.body = body;
    return post;
};


/***/ }),

/***/ "./dist/markdowns/92fd8e0100484b26b13aa4d2fb66d828.ts":
/*!************************************************************!*\
  !*** ./dist/markdowns/92fd8e0100484b26b13aa4d2fb66d828.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const state_1 = __webpack_require__(/*! ./src/store/state */ "./src/store/state.ts");
const markdown_it_1 = __importDefault(__webpack_require__(/*! markdown-it */ "./node_modules/markdown-it/index.js"));
const md = new markdown_it_1.default();
exports.default = () => {
    const p = __webpack_require__(/*! ./static/debug了两天，只删了一行代码.md */ "./static/debug了两天，只删了一行代码.md");
    const body = md.render(p.body.toString());
    const element = body.split("\n");
    let post = new state_1.Post();
    post.attributes = p.attributes;
    //TODO: 通过配置文件选择保存的数量
    post.summary = element[0];
    post.body = body;
    return post;
};


/***/ }),

/***/ "./dist/markdowns/950a0f76860ad280996c0449c9f26c7d.ts":
/*!************************************************************!*\
  !*** ./dist/markdowns/950a0f76860ad280996c0449c9f26c7d.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const state_1 = __webpack_require__(/*! ./src/store/state */ "./src/store/state.ts");
const markdown_it_1 = __importDefault(__webpack_require__(/*! markdown-it */ "./node_modules/markdown-it/index.js"));
const md = new markdown_it_1.default();
exports.default = () => {
    const p = __webpack_require__(/*! ./static/Topbar.md */ "./static/Topbar.md");
    const body = md.render(p.body.toString());
    const element = body.split("\n");
    let post = new state_1.Post();
    post.attributes = p.attributes;
    //TODO: 通过配置文件选择保存的数量
    post.summary = element[0];
    post.body = body;
    return post;
};


/***/ }),

/***/ "./dist/markdowns/9e228da8c13da4109e7e7c3d84546bac.ts":
/*!************************************************************!*\
  !*** ./dist/markdowns/9e228da8c13da4109e7e7c3d84546bac.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const state_1 = __webpack_require__(/*! ./src/store/state */ "./src/store/state.ts");
const markdown_it_1 = __importDefault(__webpack_require__(/*! markdown-it */ "./node_modules/markdown-it/index.js"));
const md = new markdown_it_1.default();
exports.default = () => {
    const p = __webpack_require__(/*! ./static/JavaScript建造者模式.md */ "./static/JavaScript建造者模式.md");
    const body = md.render(p.body.toString());
    const element = body.split("\n");
    let post = new state_1.Post();
    post.attributes = p.attributes;
    //TODO: 通过配置文件选择保存的数量
    post.summary = element[0];
    post.body = body;
    return post;
};


/***/ }),

/***/ "./dist/markdowns/a765ec128f501baf42785cd60ed09c41.ts":
/*!************************************************************!*\
  !*** ./dist/markdowns/a765ec128f501baf42785cd60ed09c41.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const state_1 = __webpack_require__(/*! ./src/store/state */ "./src/store/state.ts");
const markdown_it_1 = __importDefault(__webpack_require__(/*! markdown-it */ "./node_modules/markdown-it/index.js"));
const md = new markdown_it_1.default();
exports.default = () => {
    const p = __webpack_require__(/*! ./static/2019review.md */ "./static/2019review.md");
    const body = md.render(p.body.toString());
    const element = body.split("\n");
    let post = new state_1.Post();
    post.attributes = p.attributes;
    //TODO: 通过配置文件选择保存的数量
    post.summary = element[0];
    post.body = body;
    return post;
};


/***/ }),

/***/ "./dist/markdowns/ae0d0f75c6dcfc95d117d4bc49049107.ts":
/*!************************************************************!*\
  !*** ./dist/markdowns/ae0d0f75c6dcfc95d117d4bc49049107.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const state_1 = __webpack_require__(/*! ./src/store/state */ "./src/store/state.ts");
const markdown_it_1 = __importDefault(__webpack_require__(/*! markdown-it */ "./node_modules/markdown-it/index.js"));
const md = new markdown_it_1.default();
exports.default = () => {
    const p = __webpack_require__(/*! ./static/重构dde-session-ui.md */ "./static/重构dde-session-ui.md");
    const body = md.render(p.body.toString());
    const element = body.split("\n");
    let post = new state_1.Post();
    post.attributes = p.attributes;
    //TODO: 通过配置文件选择保存的数量
    post.summary = element[0];
    post.body = body;
    return post;
};


/***/ }),

/***/ "./dist/markdowns/b33d8642f68b23579b016e0786e306f9.ts":
/*!************************************************************!*\
  !*** ./dist/markdowns/b33d8642f68b23579b016e0786e306f9.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const state_1 = __webpack_require__(/*! ./src/store/state */ "./src/store/state.ts");
const markdown_it_1 = __importDefault(__webpack_require__(/*! markdown-it */ "./node_modules/markdown-it/index.js"));
const md = new markdown_it_1.default();
exports.default = () => {
    const p = __webpack_require__(/*! ./static/给Archlinux开启BFQ和MuQSS.md */ "./static/给Archlinux开启BFQ和MuQSS.md");
    const body = md.render(p.body.toString());
    const element = body.split("\n");
    let post = new state_1.Post();
    post.attributes = p.attributes;
    //TODO: 通过配置文件选择保存的数量
    post.summary = element[0];
    post.body = body;
    return post;
};


/***/ }),

/***/ "./dist/markdowns/b522394b658c2e2388b8f8a0724becfd.ts":
/*!************************************************************!*\
  !*** ./dist/markdowns/b522394b658c2e2388b8f8a0724becfd.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const state_1 = __webpack_require__(/*! ./src/store/state */ "./src/store/state.ts");
const markdown_it_1 = __importDefault(__webpack_require__(/*! markdown-it */ "./node_modules/markdown-it/index.js"));
const md = new markdown_it_1.default();
exports.default = () => {
    const p = __webpack_require__(/*! ./static/font-config.md */ "./static/font-config.md");
    const body = md.render(p.body.toString());
    const element = body.split("\n");
    let post = new state_1.Post();
    post.attributes = p.attributes;
    //TODO: 通过配置文件选择保存的数量
    post.summary = element[0];
    post.body = body;
    return post;
};


/***/ }),

/***/ "./dist/markdowns/b6e29ade42329ea483d6986e68520f08.ts":
/*!************************************************************!*\
  !*** ./dist/markdowns/b6e29ade42329ea483d6986e68520f08.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const state_1 = __webpack_require__(/*! ./src/store/state */ "./src/store/state.ts");
const markdown_it_1 = __importDefault(__webpack_require__(/*! markdown-it */ "./node_modules/markdown-it/index.js"));
const md = new markdown_it_1.default();
exports.default = () => {
    const p = __webpack_require__(/*! ./static/记录一个坑爹的usb网卡.md */ "./static/记录一个坑爹的usb网卡.md");
    const body = md.render(p.body.toString());
    const element = body.split("\n");
    let post = new state_1.Post();
    post.attributes = p.attributes;
    //TODO: 通过配置文件选择保存的数量
    post.summary = element[0];
    post.body = body;
    return post;
};


/***/ }),

/***/ "./dist/markdowns/c18e85b8f66830ce7833c584e62c86c0.ts":
/*!************************************************************!*\
  !*** ./dist/markdowns/c18e85b8f66830ce7833c584e62c86c0.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const state_1 = __webpack_require__(/*! ./src/store/state */ "./src/store/state.ts");
const markdown_it_1 = __importDefault(__webpack_require__(/*! markdown-it */ "./node_modules/markdown-it/index.js"));
const md = new markdown_it_1.default();
exports.default = () => {
    const p = __webpack_require__(/*! ./static/cpp-smart-pointer.md */ "./static/cpp-smart-pointer.md");
    const body = md.render(p.body.toString());
    const element = body.split("\n");
    let post = new state_1.Post();
    post.attributes = p.attributes;
    //TODO: 通过配置文件选择保存的数量
    post.summary = element[0];
    post.body = body;
    return post;
};


/***/ }),

/***/ "./dist/markdowns/c3a049d7d4d28debb81af22cf33e521a.ts":
/*!************************************************************!*\
  !*** ./dist/markdowns/c3a049d7d4d28debb81af22cf33e521a.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const state_1 = __webpack_require__(/*! ./src/store/state */ "./src/store/state.ts");
const markdown_it_1 = __importDefault(__webpack_require__(/*! markdown-it */ "./node_modules/markdown-it/index.js"));
const md = new markdown_it_1.default();
exports.default = () => {
    const p = __webpack_require__(/*! ./static/dreamscene插件开发.md */ "./static/dreamscene插件开发.md");
    const body = md.render(p.body.toString());
    const element = body.split("\n");
    let post = new state_1.Post();
    post.attributes = p.attributes;
    //TODO: 通过配置文件选择保存的数量
    post.summary = element[0];
    post.body = body;
    return post;
};


/***/ }),

/***/ "./dist/markdowns/ca4d00071e2fde1f6b176b58682cc841.ts":
/*!************************************************************!*\
  !*** ./dist/markdowns/ca4d00071e2fde1f6b176b58682cc841.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const state_1 = __webpack_require__(/*! ./src/store/state */ "./src/store/state.ts");
const markdown_it_1 = __importDefault(__webpack_require__(/*! markdown-it */ "./node_modules/markdown-it/index.js"));
const md = new markdown_it_1.default();
exports.default = () => {
    const p = __webpack_require__(/*! ./static/Linux的PAM是什么.md */ "./static/Linux的PAM是什么.md");
    const body = md.render(p.body.toString());
    const element = body.split("\n");
    let post = new state_1.Post();
    post.attributes = p.attributes;
    //TODO: 通过配置文件选择保存的数量
    post.summary = element[0];
    post.body = body;
    return post;
};


/***/ }),

/***/ "./dist/markdowns/cf54232cfb0ce953dbc3b48bffceb2e6.ts":
/*!************************************************************!*\
  !*** ./dist/markdowns/cf54232cfb0ce953dbc3b48bffceb2e6.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const state_1 = __webpack_require__(/*! ./src/store/state */ "./src/store/state.ts");
const markdown_it_1 = __importDefault(__webpack_require__(/*! markdown-it */ "./node_modules/markdown-it/index.js"));
const md = new markdown_it_1.default();
exports.default = () => {
    const p = __webpack_require__(/*! ./static/my-life.md */ "./static/my-life.md");
    const body = md.render(p.body.toString());
    const element = body.split("\n");
    let post = new state_1.Post();
    post.attributes = p.attributes;
    //TODO: 通过配置文件选择保存的数量
    post.summary = element[0];
    post.body = body;
    return post;
};


/***/ }),

/***/ "./dist/markdowns/d65437858db8a6c421e291760c6003b3.ts":
/*!************************************************************!*\
  !*** ./dist/markdowns/d65437858db8a6c421e291760c6003b3.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const state_1 = __webpack_require__(/*! ./src/store/state */ "./src/store/state.ts");
const markdown_it_1 = __importDefault(__webpack_require__(/*! markdown-it */ "./node_modules/markdown-it/index.js"));
const md = new markdown_it_1.default();
exports.default = () => {
    const p = __webpack_require__(/*! ./static/在DeepinLinux下使用nVidia-CUDA.md */ "./static/在DeepinLinux下使用nVidia-CUDA.md");
    const body = md.render(p.body.toString());
    const element = body.split("\n");
    let post = new state_1.Post();
    post.attributes = p.attributes;
    //TODO: 通过配置文件选择保存的数量
    post.summary = element[0];
    post.body = body;
    return post;
};


/***/ }),

/***/ "./dist/markdowns/d6ad28df54e11db930db47a5b55d9b4b.ts":
/*!************************************************************!*\
  !*** ./dist/markdowns/d6ad28df54e11db930db47a5b55d9b4b.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const state_1 = __webpack_require__(/*! ./src/store/state */ "./src/store/state.ts");
const markdown_it_1 = __importDefault(__webpack_require__(/*! markdown-it */ "./node_modules/markdown-it/index.js"));
const md = new markdown_it_1.default();
exports.default = () => {
    const p = __webpack_require__(/*! ./static/linux下安装vmware及archlinux的安装和配置.md */ "./static/linux下安装vmware及archlinux的安装和配置.md");
    const body = md.render(p.body.toString());
    const element = body.split("\n");
    let post = new state_1.Post();
    post.attributes = p.attributes;
    //TODO: 通过配置文件选择保存的数量
    post.summary = element[0];
    post.body = body;
    return post;
};


/***/ }),

/***/ "./dist/markdowns/d8d11fc2c56cab5ffeabdd1a1be70428.ts":
/*!************************************************************!*\
  !*** ./dist/markdowns/d8d11fc2c56cab5ffeabdd1a1be70428.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const state_1 = __webpack_require__(/*! ./src/store/state */ "./src/store/state.ts");
const markdown_it_1 = __importDefault(__webpack_require__(/*! markdown-it */ "./node_modules/markdown-it/index.js"));
const md = new markdown_it_1.default();
exports.default = () => {
    const p = __webpack_require__(/*! ./static/PPA.md */ "./static/PPA.md");
    const body = md.render(p.body.toString());
    const element = body.split("\n");
    let post = new state_1.Post();
    post.attributes = p.attributes;
    //TODO: 通过配置文件选择保存的数量
    post.summary = element[0];
    post.body = body;
    return post;
};


/***/ }),

/***/ "./dist/markdowns/dce3e8e7fed5b069a71d16c4a77f6ba0.ts":
/*!************************************************************!*\
  !*** ./dist/markdowns/dce3e8e7fed5b069a71d16c4a77f6ba0.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const state_1 = __webpack_require__(/*! ./src/store/state */ "./src/store/state.ts");
const markdown_it_1 = __importDefault(__webpack_require__(/*! markdown-it */ "./node_modules/markdown-it/index.js"));
const md = new markdown_it_1.default();
exports.default = () => {
    const p = __webpack_require__(/*! ./static/topbar-PPA.md */ "./static/topbar-PPA.md");
    const body = md.render(p.body.toString());
    const element = body.split("\n");
    let post = new state_1.Post();
    post.attributes = p.attributes;
    //TODO: 通过配置文件选择保存的数量
    post.summary = element[0];
    post.body = body;
    return post;
};


/***/ }),

/***/ "./dist/markdowns/eba9938dc5434e0a86e910df11a2f941.ts":
/*!************************************************************!*\
  !*** ./dist/markdowns/eba9938dc5434e0a86e910df11a2f941.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const state_1 = __webpack_require__(/*! ./src/store/state */ "./src/store/state.ts");
const markdown_it_1 = __importDefault(__webpack_require__(/*! markdown-it */ "./node_modules/markdown-it/index.js"));
const md = new markdown_it_1.default();
exports.default = () => {
    const p = __webpack_require__(/*! ./static/我的代理折腾方案.md */ "./static/我的代理折腾方案.md");
    const body = md.render(p.body.toString());
    const element = body.split("\n");
    let post = new state_1.Post();
    post.attributes = p.attributes;
    //TODO: 通过配置文件选择保存的数量
    post.summary = element[0];
    post.body = body;
    return post;
};


/***/ }),

/***/ "./dist/markdowns/ec8d8a4a340e8ceb268689a2e3669187.ts":
/*!************************************************************!*\
  !*** ./dist/markdowns/ec8d8a4a340e8ceb268689a2e3669187.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const state_1 = __webpack_require__(/*! ./src/store/state */ "./src/store/state.ts");
const markdown_it_1 = __importDefault(__webpack_require__(/*! markdown-it */ "./node_modules/markdown-it/index.js"));
const md = new markdown_it_1.default();
exports.default = () => {
    const p = __webpack_require__(/*! ./static/C-plus-plus-Iterator-笔记.md */ "./static/C-plus-plus-Iterator-笔记.md");
    const body = md.render(p.body.toString());
    const element = body.split("\n");
    let post = new state_1.Post();
    post.attributes = p.attributes;
    //TODO: 通过配置文件选择保存的数量
    post.summary = element[0];
    post.body = body;
    return post;
};


/***/ }),

/***/ "./dist/markdowns/f6ce04dcf5f58ba0c3dd77049ade267d.ts":
/*!************************************************************!*\
  !*** ./dist/markdowns/f6ce04dcf5f58ba0c3dd77049ade267d.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const state_1 = __webpack_require__(/*! ./src/store/state */ "./src/store/state.ts");
const markdown_it_1 = __importDefault(__webpack_require__(/*! markdown-it */ "./node_modules/markdown-it/index.js"));
const md = new markdown_it_1.default();
exports.default = () => {
    const p = __webpack_require__(/*! ./static/vue-component-props.md */ "./static/vue-component-props.md");
    const body = md.render(p.body.toString());
    const element = body.split("\n");
    let post = new state_1.Post();
    post.attributes = p.attributes;
    //TODO: 通过配置文件选择保存的数量
    post.summary = element[0];
    post.body = body;
    return post;
};


/***/ }),

/***/ "./dist/markdowns/fd9be9bffdf00c285a44927a6bcb7686.ts":
/*!************************************************************!*\
  !*** ./dist/markdowns/fd9be9bffdf00c285a44927a6bcb7686.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const state_1 = __webpack_require__(/*! ./src/store/state */ "./src/store/state.ts");
const markdown_it_1 = __importDefault(__webpack_require__(/*! markdown-it */ "./node_modules/markdown-it/index.js"));
const md = new markdown_it_1.default();
exports.default = () => {
    const p = __webpack_require__(/*! ./static/开发topbar中的技术问题.md */ "./static/开发topbar中的技术问题.md");
    const body = md.render(p.body.toString());
    const element = body.split("\n");
    let post = new state_1.Post();
    post.attributes = p.attributes;
    //TODO: 通过配置文件选择保存的数量
    post.summary = element[0];
    post.body = body;
    return post;
};


/***/ }),

/***/ "./dist/markdowns/feea517af9b6eeb6c0a81a05c4bcfb79.ts":
/*!************************************************************!*\
  !*** ./dist/markdowns/feea517af9b6eeb6c0a81a05c4bcfb79.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const state_1 = __webpack_require__(/*! ./src/store/state */ "./src/store/state.ts");
const markdown_it_1 = __importDefault(__webpack_require__(/*! markdown-it */ "./node_modules/markdown-it/index.js"));
const md = new markdown_it_1.default();
exports.default = () => {
    const p = __webpack_require__(/*! ./static/使用DTK开发.md */ "./static/使用DTK开发.md");
    const body = md.render(p.body.toString());
    const element = body.split("\n");
    let post = new state_1.Post();
    post.attributes = p.attributes;
    //TODO: 通过配置文件选择保存的数量
    post.summary = element[0];
    post.body = body;
    return post;
};


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/app.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/app.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "body {\n  margin: 0px 0px;\n}\n#app {\n  background: #eee;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/components/pages/Index.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss&scope=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/pages/Index.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss&scope=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "#site {\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-start;\n  margin: 0px;\n  padding: 10px;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/components/pages/PostDetail.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/pages/PostDetail.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".post {\n  margin: 0px 10px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/components/widgets/PostBlock.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/widgets/PostBlock.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".post-block {\n  display: inline-flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  align-content: center;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.06), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  border-radius: initial;\n  background-color: #fff;\n  padding: 40px;\n  margin: 0px 0px 10px 0px;\n}\n.post-title {\n  text-align: center;\n}\n.post-title-link {\n  line-height: inherit;\n}\n.post-meta {\n  display: inline-flex;\n  color: #999;\n  font-size: 12px;\n  text-align: center;\n}\n.post-meta-divder {\n  margin: 0 0.5em;\n}\n.post-button {\n  margin-top: 40px;\n}\n.post-button .btn {\n    display: inline-block;\n    padding: 0 20px;\n    color: #555;\n    background: #fff;\n    border: 2px solid #555;\n    text-decoration: none;\n    border-radius: 2px;\n    transition-property: background-color;\n    transition-duration: 0.2s;\n    transition-timing-function: ease-in-out;\n    transition-delay: 0s;\n    line-height: 2;\n}\n.post-button .btn:hover {\n    background: #262a30;\n    color: #fff;\n}\n.post-summary {\n  font-size: 16px;\n}\n.post-summary p {\n    word-break: break-word;\n    white-space: pre-wrap;\n    width: 828px;\n}\n.post-summary pre {\n    width: 828px;\n    overflow: auto;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/components/widgets/PostList.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/widgets/PostList.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".post {\n  margin: 0px 10px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/components/widgets/SideBar.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss&scope=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/widgets/SideBar.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss&scope=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "#site-meta {\n  width: 240px;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/components/widgets/SiteDescription.vue?vue&type=style&index=0&id=420df356&rel=stylesheet%2Fscss&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/widgets/SiteDescription.vue?vue&type=style&index=0&id=420df356&rel=stylesheet%2Fscss&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "#site-description[data-v-420df356] {\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.06), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  border-radius: initial;\n}\n#site-meta[data-v-420df356] {\n  background: #222;\n  display: flex;\n  justify-content: center;\n  align-items: space-around;\n  flex-direction: column;\n  padding: 20px 0;\n}\n#site-title[data-v-420df356] {\n  color: white;\n  font-size: 20px;\n  text-align: center;\n  margin: 10px 0;\n  line-height: 36px;\n  font-weight: normal;\n  font-family: 'Lato', 'PingFang SC', 'Microsoft YaHei', sans-serif;\n}\n#site-subtitle[data-v-420df356] {\n  font-size: 13px;\n  text-align: center;\n  font-weight: initial;\n  color: #ddd;\n}\n#site-nav[data-v-420df356] {\n  background: white;\n  padding: 20px 0;\n}\n#site-nav li[data-v-420df356] {\n    list-style-type: none;\n}\nul[data-v-420df356] {\n  margin: 0;\n  padding: 0 0;\n}\nsite-menu[data-v-420df356] {\n  width: 100%;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/components/widgets/SiteInfo.vue?vue&type=style&index=0&id=3da72cb6&rel=stylesheet%2Fscss&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/widgets/SiteInfo.vue?vue&type=style&index=0&id=3da72cb6&rel=stylesheet%2Fscss&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "#site-info[data-v-3da72cb6] {\n  margin-top: 20px;\n  background: white;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.06), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  border-radius: initial;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  color: #555;\n  align-items: center;\n}\n#site-friend[data-v-3da72cb6] {\n  padding: 20px 0px;\n  text-align: center;\n}\n#title[data-v-3da72cb6] {\n  color: #222;\n  margin: 5px;\n}\n#description[data-v-3da72cb6] {\n  font-size: 13px;\n  color: #999;\n  text-align: center;\n}\n#links-title[data-v-3da72cb6] {\n  margin-bottom: auto;\n  font-size: 14px;\n  font-weight: 600;\n}\n.flex-stretch-bottom[data-v-3da72cb6] {\n  margin-bottom: auto;\n}\nul[data-v-3da72cb6] {\n  margin: 0;\n  padding: 0px 0px 20px 0px;\n}\nul li[data-v-3da72cb6] {\n    list-style-type: none;\n    text-align: center;\n    line-height: 2;\n}\nul li a[data-v-3da72cb6] {\n      color: #555;\n      white-space: nowrap;\n      border-bottom: 1px solid #999;\n      cursor: pointer;\n      font-size: 13px;\n      text-decoration: none;\n      outline: none;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/components/widgets/SiteMenu.vue?vue&type=style&index=0&id=9ad74c54&rel=stylesheet%2Fscss&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/widgets/SiteMenu.vue?vue&type=style&index=0&id=9ad74c54&rel=stylesheet%2Fscss&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "a[data-v-9ad74c54] {\n  padding: 5px 0px;\n  text-align: left;\n  line-height: inherit;\n  transition-property: background-color;\n  transition-duration: 0.2s;\n  transition-timing-function: ease-in-out;\n  transition-delay: 0s;\n  display: inline-flex;\n  justify-content: flex-start;\n  align-items: center;\n  text-decoration: none;\n  font-size: 13px;\n  color: #555;\n  width: 100%;\n}\n.menu-background[isActive='true'][data-v-9ad74c54] {\n  background: #f9f9f9;\n}\na[data-v-9ad74c54]:hover {\n  background: #f9f9f9;\n}\n#menu-left[data-v-9ad74c54] {\n  align-content: center;\n  margin: 0px 10px;\n}\n#menu-text[data-v-9ad74c54] {\n  width: 100%;\n  margin-left: 10px;\n}\n.menu-point-active[isActive='true'][data-v-9ad74c54] {\n  align-content: center;\n  min-width: 6px;\n  min-height: 6px;\n  max-height: 6px;\n  max-width: 6px;\n  border-radius: 50%;\n  background: #bbb;\n  margin-right: 15px;\n  margin-left: auto;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./src/app.vue?vue&type=script&lang=ts&":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./src/app.vue?vue&type=script&lang=ts& ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vue_1 = __importDefault(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.js"));
const SideBar_vue_1 = __importDefault(__webpack_require__(/*! ./components/widgets/SideBar.vue */ "./src/components/widgets/SideBar.vue"));
exports.default = vue_1.default.extend({
    components: {
        "side-bar": SideBar_vue_1.default
    }
});


/***/ }),

/***/ "./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/pages/About.vue?vue&type=script&lang=ts&":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./src/components/pages/About.vue?vue&type=script&lang=ts& ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vue_1 = __importDefault(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.js"));
exports.default = vue_1.default.extend({
    data: function () {
        return {};
    }
});


/***/ }),

/***/ "./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/pages/Index.vue?vue&type=script&lang=ts&":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./src/components/pages/Index.vue?vue&type=script&lang=ts& ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vue_1 = __importDefault(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.js"));
const PostList_vue_1 = __importDefault(__webpack_require__(/*! ../widgets/PostList.vue */ "./src/components/widgets/PostList.vue"));
exports.default = vue_1.default.extend({
    data: function () {
        return {};
    },
    components: {
        'post': PostList_vue_1.default
    }
});


/***/ }),

/***/ "./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/pages/PostDetail.vue?vue&type=script&lang=ts&":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./src/components/pages/PostDetail.vue?vue&type=script&lang=ts& ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vue_1 = __importDefault(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.js"));
const PostBlock_vue_1 = __importDefault(__webpack_require__(/*! ../widgets/PostBlock.vue */ "./src/components/widgets/PostBlock.vue"));
const routerparams_1 = __webpack_require__(/*! ../utils/routerparams */ "./src/components/utils/routerparams.ts");
const getters_1 = __webpack_require__(/*! ../../store/getters */ "./src/store/getters.ts");
exports.default = vue_1.default.extend({
    components: {
        'post-block': PostBlock_vue_1.default
    },
    data: function () {
        return {
            post: {}
        };
    },
    created: function () {
        const params = new routerparams_1.PageParams();
        params.year = this.$router.currentRoute.params["year"];
        params.month = this.$router.currentRoute.params["month"];
        params.day = this.$router.currentRoute.params["day"];
        params.post = this.$router.currentRoute.params["post"];
        let argument = {
            year: params.year,
            month: params.month,
            day: params.day,
            title: params.post
        };
        this.post = getters_1.getPost(this.$store.state, argument);
    }
});


/***/ }),

/***/ "./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/pages/Year.vue?vue&type=script&lang=ts&":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./src/components/pages/Year.vue?vue&type=script&lang=ts& ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vue_1 = __importDefault(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.js"));
exports.default = vue_1.default.extend({
    data: function () {
        return {};
    },
    mounted: function () {
        // const params: PageParams = this.$router.currentRoute.params;
        // console.log(params);
    }
});


/***/ }),

/***/ "./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/widgets/PostBlock.vue?vue&type=script&lang=ts&":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./src/components/widgets/PostBlock.vue?vue&type=script&lang=ts& ***!
  \**********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vue_1 = __importDefault(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.js"));
__webpack_require__(/*! @fortawesome/fontawesome-free/js/fontawesome */ "./node_modules/@fortawesome/fontawesome-free/js/fontawesome.js");
__webpack_require__(/*! @fortawesome/fontawesome-free/js/solid */ "./node_modules/@fortawesome/fontawesome-free/js/solid.js");
__webpack_require__(/*! @fortawesome/fontawesome-free/js/regular */ "./node_modules/@fortawesome/fontawesome-free/js/regular.js");
__webpack_require__(/*! @fortawesome/fontawesome-free/js/brands */ "./node_modules/@fortawesome/fontawesome-free/js/brands.js");
exports.default = vue_1.default.extend({
    props: {
        post: {
            type: Object,
            required: true
        },
        enableReadMore: {
            type: Boolean,
            required: true,
            default: true
        },
        useSummary: {
            type: Boolean,
            required: false,
            default: false
        }
    },
    data: function () {
        return {
            postTitle: this.post.attributes.title,
            postDate: this.post.attributes.date,
            lastEditData: '2020-01-01'
        };
    },
    computed: {
        category: function () {
            return '年度总结';
        },
        comments: function () {
            return '1';
        },
        link: function () {
            const date = new Date(this.postDate.toString());
            const year = String(date.getFullYear());
            const month = String(("0" + (date.getMonth() + 1)).slice(-2));
            const day = String(("0" + date.getDate()).slice(-2));
            const title = this.postTitle.replace(" ", "");
            return `/${year}/${month}/${day}/${title}`;
        },
        postBody: function () {
            return this.useSummary ? this.post.summary : this.post.body;
        }
    }
});


/***/ }),

/***/ "./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/widgets/PostList.vue?vue&type=script&lang=ts&":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./src/components/widgets/PostList.vue?vue&type=script&lang=ts& ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vue_1 = __importDefault(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.js"));
const PostBlock_vue_1 = __importDefault(__webpack_require__(/*! ../widgets/PostBlock.vue */ "./src/components/widgets/PostBlock.vue"));
exports.default = vue_1.default.extend({
    components: {
        "post-block": PostBlock_vue_1.default
    },
    data: function () {
        const posts = this.$store.state.posts;
        return {
            list: posts,
            useSummary: true,
        };
    }
});


/***/ }),

/***/ "./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/widgets/SideBar.vue?vue&type=script&lang=ts&":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./src/components/widgets/SideBar.vue?vue&type=script&lang=ts& ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vue_1 = __importDefault(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.js"));
const SiteDescription_vue_1 = __importDefault(__webpack_require__(/*! ./SiteDescription.vue */ "./src/components/widgets/SiteDescription.vue"));
const SiteInfo_vue_1 = __importDefault(__webpack_require__(/*! ./SiteInfo.vue */ "./src/components/widgets/SiteInfo.vue"));
exports.default = vue_1.default.extend({
    data: function () {
        return {};
    },
    components: {
        "site-description": SiteDescription_vue_1.default,
        "site-info": SiteInfo_vue_1.default
    }
});


/***/ }),

/***/ "./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/widgets/SiteDescription.vue?vue&type=script&lang=ts&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./src/components/widgets/SiteDescription.vue?vue&type=script&lang=ts& ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vue_1 = __importDefault(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.js"));
const SiteMenu_vue_1 = __importDefault(__webpack_require__(/*! ./SiteMenu.vue */ "./src/components/widgets/SiteMenu.vue"));
exports.default = vue_1.default.extend({
    components: {
        'site-menu': SiteMenu_vue_1.default
    },
    data: function () {
        return {
            title: "小竹's blog",
            subtitle: '永远不要停止思考',
            items: [
                { title: 'Home', link: '/', icon: 'fa fa-fw fa-home', isMain: true },
                {
                    title: 'About',
                    link: '/about',
                    icon: 'fa fa-fw fa-user',
                    isMain: false
                }
            ],
            menuActiveList: []
        };
    },
    methods: {
        enter: function (index) { },
        onMouseLeave: function (index) { }
    }
});


/***/ }),

/***/ "./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/widgets/SiteInfo.vue?vue&type=script&lang=ts&":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./src/components/widgets/SiteInfo.vue?vue&type=script&lang=ts& ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vue_1 = __importDefault(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.js"));
__webpack_require__(/*! @fortawesome/fontawesome-free/js/fontawesome */ "./node_modules/@fortawesome/fontawesome-free/js/fontawesome.js");
__webpack_require__(/*! @fortawesome/fontawesome-free/js/solid */ "./node_modules/@fortawesome/fontawesome-free/js/solid.js");
__webpack_require__(/*! @fortawesome/fontawesome-free/js/regular */ "./node_modules/@fortawesome/fontawesome-free/js/regular.js");
__webpack_require__(/*! @fortawesome/fontawesome-free/js/brands */ "./node_modules/@fortawesome/fontawesome-free/js/brands.js");
exports.default = vue_1.default.extend({
    data: function () {
        return {
            title: "小竹's blog",
            description: '永远不要停止思考',
            links: [
                { url: 'http://baidu.com', title: 'Mioto' },
                { url: 'http://baidu.com', title: 'hualet' }
            ]
        };
    }
});


/***/ }),

/***/ "./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/widgets/SiteMenu.vue?vue&type=script&lang=ts&":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./src/components/widgets/SiteMenu.vue?vue&type=script&lang=ts& ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vue_1 = __importDefault(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.js"));
__webpack_require__(/*! @fortawesome/fontawesome-free/js/fontawesome */ "./node_modules/@fortawesome/fontawesome-free/js/fontawesome.js");
__webpack_require__(/*! @fortawesome/fontawesome-free/js/solid */ "./node_modules/@fortawesome/fontawesome-free/js/solid.js");
__webpack_require__(/*! @fortawesome/fontawesome-free/js/regular */ "./node_modules/@fortawesome/fontawesome-free/js/regular.js");
__webpack_require__(/*! @fortawesome/fontawesome-free/js/brands */ "./node_modules/@fortawesome/fontawesome-free/js/brands.js");
exports.default = vue_1.default.extend({
    props: {
        link: String,
        icon: String,
        title: String,
        isMain: Boolean
    },
    data: function () {
        return {
            active: false
        };
    },
    methods: {
        onMouseEnter: function () {
            this.active = true;
        },
        onMouseLeave: function () {
            this.active = this.isMain;
        }
    },
    beforeMount: function () {
        this.active = this.isMain;
    }
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/app.vue?vue&type=template&id=5ef48958&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/app.vue?vue&type=template&id=5ef48958& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "app" } }, [
    _c(
      "div",
      { attrs: { id: "site" } },
      [
        _c("div", { attrs: { id: "site-side" } }, [_c("side-bar")], 1),
        _vm._v(" "),
        _c("router-view")
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/pages/About.vue?vue&type=template&id=1359eafc&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/pages/About.vue?vue&type=template&id=1359eafc& ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [_vm._v("\n    Design by justforlxz!\n")])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/pages/Index.vue?vue&type=template&id=160ae547&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/pages/Index.vue?vue&type=template&id=160ae547& ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("post")
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/pages/PostDetail.vue?vue&type=template&id=03263328&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/pages/PostDetail.vue?vue&type=template&id=03263328& ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "post" },
    [_c("post-block", { attrs: { post: _vm.post, enableReadMore: false } })],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/pages/Year.vue?vue&type=template&id=d4327c50&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/pages/Year.vue?vue&type=template&id=d4327c50& ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div")
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/widgets/PostBlock.vue?vue&type=template&id=4fa1f5ed&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/widgets/PostBlock.vue?vue&type=template&id=4fa1f5ed& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "post-block" }, [
    _c("div", { staticClass: "post-header" }, [
      _c("div", { staticClass: "post-title" }, [
        _c(
          "h1",
          [
            _c(
              "router-link",
              { staticClass: "post-title-link", attrs: { to: _vm.link } },
              [_vm._v(_vm._s(_vm.postTitle))]
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "post-meta" }, [
        _c("span", { staticClass: "post-time" }, [
          _c("span", { staticClass: "post-meta-item-icon fa fa-calendar-o" }),
          _vm._v(" "),
          _c("span", { staticClass: "post-meta-item-text" }, [
            _vm._v("\n          Posted on\n        ")
          ]),
          _vm._v(" "),
          _c("time", [_vm._v(_vm._s(_vm.postDate))])
        ]),
        _vm._v(" "),
        _c("span", { staticClass: "post-category" }, [
          _c("span", { staticClass: "post-meta-divder" }, [_vm._v("|")]),
          _vm._v(" "),
          _c("span", { staticClass: "post-meta-item-icon fa fa-folder-o" }),
          _vm._v(" "),
          _c("span", { staticClass: "post-meta-item-text" }, [_vm._v("in")]),
          _vm._v(" "),
          _c("span", { staticClass: "bottomline" }, [
            _c("a", { attrs: { href: "" } }, [_vm._v(_vm._s(_vm.category))])
          ])
        ]),
        _vm._v(" "),
        _c("span", { staticClass: "post-comments-count" }, [
          _c("span", { staticClass: "post-meta-divder" }, [_vm._v("|")]),
          _vm._v(" "),
          _c("span", { staticClass: "post-meta-item-icon fa fa-comment-o" }),
          _vm._v(" "),
          _c("span", { staticClass: "post-meta-item-text" }, [
            _vm._v("Comments:")
          ]),
          _vm._v(" "),
          _c("span", { staticClass: "bottomline" }, [
            _c("a", { attrs: { href: "" } }, [
              _vm._v(_vm._s(_vm.comments) + " Comment")
            ])
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", {
      staticClass: "post-summary",
      domProps: { innerHTML: _vm._s(_vm.postBody) }
    }),
    _vm._v(" "),
    _vm.enableReadMore
      ? _c(
          "div",
          { staticClass: "post-button" },
          [
            _c("router-link", { staticClass: "btn", attrs: { to: _vm.link } }, [
              _vm._v("Read more »")
            ])
          ],
          1
        )
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/widgets/PostList.vue?vue&type=template&id=48c68dee&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/widgets/PostList.vue?vue&type=template&id=48c68dee& ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "post" },
    _vm._l(_vm.list, function(post) {
      return _c("post-block", {
        key: post.id,
        attrs: { useSummary: _vm.useSummary, post: post, enableReadMore: true }
      })
    }),
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/widgets/SideBar.vue?vue&type=template&id=32cc7bdc&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/widgets/SideBar.vue?vue&type=template&id=32cc7bdc& ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "site-meta" } },
    [_c("site-description"), _vm._v(" "), _c("site-info")],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/widgets/SiteDescription.vue?vue&type=template&id=420df356&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/widgets/SiteDescription.vue?vue&type=template&id=420df356&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "site-description" } }, [
    _c("div", { attrs: { id: "site-meta" } }, [
      _c("div", { attrs: { id: "site-title" } }, [_vm._v(_vm._s(_vm.title))]),
      _vm._v(" "),
      _c("div", { attrs: { id: "site-subtitle" } }, [
        _vm._v(_vm._s(_vm.subtitle))
      ])
    ]),
    _vm._v(" "),
    _c("div", { attrs: { id: "site-nav" } }, [
      _c(
        "ul",
        _vm._l(_vm.items, function(item) {
          return _c(
            "li",
            { key: item.link },
            [
              _c("site-menu", {
                attrs: {
                  href: item.link,
                  title: item.title,
                  icon: item.icon,
                  isMain: item.isMain
                }
              })
            ],
            1
          )
        }),
        0
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/widgets/SiteInfo.vue?vue&type=template&id=3da72cb6&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/widgets/SiteInfo.vue?vue&type=template&id=3da72cb6&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "site-info" } }, [
    _c("div", { attrs: { id: "site-friend" } }, [
      _c("div", { staticClass: "text-align-center", attrs: { id: "title" } }, [
        _vm._v(_vm._s(_vm.title))
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "text-align-center", attrs: { id: "description" } },
        [_vm._v(_vm._s(_vm.description))]
      )
    ]),
    _vm._v(" "),
    _c("div", { attrs: { id: "links" } }, [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "ul",
        _vm._l(_vm.links, function(link, index) {
          return _c("li", { key: index }, [
            _c(
              "a",
              {
                staticClass: "text-align-center",
                attrs: {
                  href: link.url,
                  title: link.title,
                  rel: "noopener",
                  target: "_blank"
                }
              },
              [_vm._v(_vm._s(link.title))]
            )
          ])
        }),
        0
      ),
      _vm._v(" "),
      _c("span", { staticClass: "flex-stretch-bottom" })
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "links-title" }, [
      _c("span", { staticClass: "fa fa-fw fa-link" }),
      _vm._v("\n      Links:\n    ")
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/widgets/SiteMenu.vue?vue&type=template&id=9ad74c54&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/widgets/SiteMenu.vue?vue&type=template&id=9ad74c54&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "a",
    {
      staticClass: "menu-background",
      attrs: { href: _vm.link, isActive: _vm.isMain },
      on: { mouseenter: _vm.onMouseEnter, mouseleave: _vm.onMouseLeave }
    },
    [
      _c("span", { class: _vm.icon, attrs: { id: "menu-left" } }),
      _vm._v(" "),
      _c("span", { attrs: { id: "menu-center" } }, [_vm._v(_vm._s(_vm.title))]),
      _vm._v(" "),
      _c("span", {
        staticClass: "menu-point-active",
        attrs: { isActive: _vm.active }
      })
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/app.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/app.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/dist/cjs.js!../node_modules/vue-loader/lib??vue-loader-options!./app.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/app.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("36d14c8e", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/components/pages/Index.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss&scope=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/pages/Index.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss&scope=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss&scope=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/components/pages/Index.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss&scope=true&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("3ce755e2", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/components/pages/PostDetail.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/pages/PostDetail.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/vue-loader/lib??vue-loader-options!./PostDetail.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/components/pages/PostDetail.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("3f71c856", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/components/widgets/PostBlock.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/widgets/PostBlock.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/vue-loader/lib??vue-loader-options!./PostBlock.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/components/widgets/PostBlock.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("b40aa2c0", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/components/widgets/PostList.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/widgets/PostList.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/vue-loader/lib??vue-loader-options!./PostList.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/components/widgets/PostList.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("fef8ae38", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/components/widgets/SideBar.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss&scope=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/widgets/SideBar.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss&scope=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/vue-loader/lib??vue-loader-options!./SideBar.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss&scope=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/components/widgets/SideBar.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss&scope=true&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("33bb8c61", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/components/widgets/SiteDescription.vue?vue&type=style&index=0&id=420df356&rel=stylesheet%2Fscss&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/widgets/SiteDescription.vue?vue&type=style&index=0&id=420df356&rel=stylesheet%2Fscss&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/vue-loader/lib??vue-loader-options!./SiteDescription.vue?vue&type=style&index=0&id=420df356&rel=stylesheet%2Fscss&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/components/widgets/SiteDescription.vue?vue&type=style&index=0&id=420df356&rel=stylesheet%2Fscss&lang=scss&scoped=true&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("1c5b609e", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/components/widgets/SiteInfo.vue?vue&type=style&index=0&id=3da72cb6&rel=stylesheet%2Fscss&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/widgets/SiteInfo.vue?vue&type=style&index=0&id=3da72cb6&rel=stylesheet%2Fscss&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/vue-loader/lib??vue-loader-options!./SiteInfo.vue?vue&type=style&index=0&id=3da72cb6&rel=stylesheet%2Fscss&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/components/widgets/SiteInfo.vue?vue&type=style&index=0&id=3da72cb6&rel=stylesheet%2Fscss&lang=scss&scoped=true&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("b8ea3016", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/components/widgets/SiteMenu.vue?vue&type=style&index=0&id=9ad74c54&rel=stylesheet%2Fscss&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/widgets/SiteMenu.vue?vue&type=style&index=0&id=9ad74c54&rel=stylesheet%2Fscss&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/vue-loader/lib??vue-loader-options!./SiteMenu.vue?vue&type=style&index=0&id=9ad74c54&rel=stylesheet%2Fscss&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/components/widgets/SiteMenu.vue?vue&type=style&index=0&id=9ad74c54&rel=stylesheet%2Fscss&lang=scss&scoped=true&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("2179a04c", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/app.vue":
/*!*********************!*\
  !*** ./src/app.vue ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_vue_vue_type_template_id_5ef48958___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.vue?vue&type=template&id=5ef48958& */ "./src/app.vue?vue&type=template&id=5ef48958&");
/* harmony import */ var _app_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.vue?vue&type=script&lang=ts& */ "./src/app.vue?vue&type=script&lang=ts&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _app_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _app_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _app_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss& */ "./src/app.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _app_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _app_vue_vue_type_template_id_5ef48958___WEBPACK_IMPORTED_MODULE_0__["render"],
  _app_vue_vue_type_template_id_5ef48958___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/app.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/app.vue?vue&type=script&lang=ts&":
/*!**********************************************!*\
  !*** ./src/app.vue?vue&type=script&lang=ts& ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_ts_loader_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/ts-loader??ref--2!../node_modules/vue-loader/lib??vue-loader-options!./app.vue?vue&type=script&lang=ts& */ "./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./src/app.vue?vue&type=script&lang=ts&");
/* harmony import */ var _node_modules_ts_loader_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_ts_loader_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_ts_loader_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_ts_loader_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_ts_loader_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/app.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss&":
/*!*****************************************************************************!*\
  !*** ./src/app.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss& ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-style-loader!../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/dist/cjs.js!../node_modules/vue-loader/lib??vue-loader-options!./app.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/app.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/app.vue?vue&type=template&id=5ef48958&":
/*!****************************************************!*\
  !*** ./src/app.vue?vue&type=template&id=5ef48958& ***!
  \****************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_template_id_5ef48958___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??vue-loader-options!./app.vue?vue&type=template&id=5ef48958& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/app.vue?vue&type=template&id=5ef48958&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_template_id_5ef48958___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_template_id_5ef48958___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/pages/About.vue":
/*!****************************************!*\
  !*** ./src/components/pages/About.vue ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _About_vue_vue_type_template_id_1359eafc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./About.vue?vue&type=template&id=1359eafc& */ "./src/components/pages/About.vue?vue&type=template&id=1359eafc&");
/* harmony import */ var _About_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./About.vue?vue&type=script&lang=ts& */ "./src/components/pages/About.vue?vue&type=script&lang=ts&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _About_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _About_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _About_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _About_vue_vue_type_template_id_1359eafc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _About_vue_vue_type_template_id_1359eafc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/pages/About.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/pages/About.vue?vue&type=script&lang=ts&":
/*!*****************************************************************!*\
  !*** ./src/components/pages/About.vue?vue&type=script&lang=ts& ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_ts_loader_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/ts-loader??ref--2!../../../node_modules/vue-loader/lib??vue-loader-options!./About.vue?vue&type=script&lang=ts& */ "./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/pages/About.vue?vue&type=script&lang=ts&");
/* harmony import */ var _node_modules_ts_loader_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_ts_loader_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_ts_loader_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_ts_loader_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_ts_loader_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/components/pages/About.vue?vue&type=template&id=1359eafc&":
/*!***********************************************************************!*\
  !*** ./src/components/pages/About.vue?vue&type=template&id=1359eafc& ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_template_id_1359eafc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./About.vue?vue&type=template&id=1359eafc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/pages/About.vue?vue&type=template&id=1359eafc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_template_id_1359eafc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_template_id_1359eafc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/pages/Index.vue":
/*!****************************************!*\
  !*** ./src/components/pages/Index.vue ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_160ae547___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=160ae547& */ "./src/components/pages/Index.vue?vue&type=template&id=160ae547&");
/* harmony import */ var _Index_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=ts& */ "./src/components/pages/Index.vue?vue&type=script&lang=ts&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Index_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Index_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _Index_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss_scope_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Index.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss&scope=true& */ "./src/components/pages/Index.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss&scope=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Index_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_160ae547___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_160ae547___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/pages/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/pages/Index.vue?vue&type=script&lang=ts&":
/*!*****************************************************************!*\
  !*** ./src/components/pages/Index.vue?vue&type=script&lang=ts& ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_ts_loader_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/ts-loader??ref--2!../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=ts& */ "./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/pages/Index.vue?vue&type=script&lang=ts&");
/* harmony import */ var _node_modules_ts_loader_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_ts_loader_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_ts_loader_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_ts_loader_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_ts_loader_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/components/pages/Index.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss&scope=true&":
/*!***********************************************************************************************************!*\
  !*** ./src/components/pages/Index.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss&scope=true& ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss_scope_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss&scope=true& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/components/pages/Index.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss&scope=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss_scope_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss_scope_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss_scope_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss_scope_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss_scope_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/components/pages/Index.vue?vue&type=template&id=160ae547&":
/*!***********************************************************************!*\
  !*** ./src/components/pages/Index.vue?vue&type=template&id=160ae547& ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_160ae547___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=160ae547& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/pages/Index.vue?vue&type=template&id=160ae547&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_160ae547___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_160ae547___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/pages/PostDetail.vue":
/*!*********************************************!*\
  !*** ./src/components/pages/PostDetail.vue ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PostDetail_vue_vue_type_template_id_03263328___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PostDetail.vue?vue&type=template&id=03263328& */ "./src/components/pages/PostDetail.vue?vue&type=template&id=03263328&");
/* harmony import */ var _PostDetail_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PostDetail.vue?vue&type=script&lang=ts& */ "./src/components/pages/PostDetail.vue?vue&type=script&lang=ts&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _PostDetail_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _PostDetail_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _PostDetail_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PostDetail.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss& */ "./src/components/pages/PostDetail.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PostDetail_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PostDetail_vue_vue_type_template_id_03263328___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PostDetail_vue_vue_type_template_id_03263328___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/pages/PostDetail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/pages/PostDetail.vue?vue&type=script&lang=ts&":
/*!**********************************************************************!*\
  !*** ./src/components/pages/PostDetail.vue?vue&type=script&lang=ts& ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_ts_loader_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PostDetail_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/ts-loader??ref--2!../../../node_modules/vue-loader/lib??vue-loader-options!./PostDetail.vue?vue&type=script&lang=ts& */ "./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/pages/PostDetail.vue?vue&type=script&lang=ts&");
/* harmony import */ var _node_modules_ts_loader_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PostDetail_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_ts_loader_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PostDetail_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_ts_loader_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PostDetail_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_ts_loader_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PostDetail_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_ts_loader_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PostDetail_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/components/pages/PostDetail.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss&":
/*!*****************************************************************************************************!*\
  !*** ./src/components/pages/PostDetail.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss& ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PostDetail_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/vue-loader/lib??vue-loader-options!./PostDetail.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/components/pages/PostDetail.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PostDetail_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PostDetail_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PostDetail_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PostDetail_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PostDetail_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/components/pages/PostDetail.vue?vue&type=template&id=03263328&":
/*!****************************************************************************!*\
  !*** ./src/components/pages/PostDetail.vue?vue&type=template&id=03263328& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PostDetail_vue_vue_type_template_id_03263328___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./PostDetail.vue?vue&type=template&id=03263328& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/pages/PostDetail.vue?vue&type=template&id=03263328&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PostDetail_vue_vue_type_template_id_03263328___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PostDetail_vue_vue_type_template_id_03263328___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/pages/Year.vue":
/*!***************************************!*\
  !*** ./src/components/pages/Year.vue ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Year_vue_vue_type_template_id_d4327c50___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Year.vue?vue&type=template&id=d4327c50& */ "./src/components/pages/Year.vue?vue&type=template&id=d4327c50&");
/* harmony import */ var _Year_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Year.vue?vue&type=script&lang=ts& */ "./src/components/pages/Year.vue?vue&type=script&lang=ts&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Year_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Year_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Year_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Year_vue_vue_type_template_id_d4327c50___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Year_vue_vue_type_template_id_d4327c50___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/pages/Year.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/pages/Year.vue?vue&type=script&lang=ts&":
/*!****************************************************************!*\
  !*** ./src/components/pages/Year.vue?vue&type=script&lang=ts& ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_ts_loader_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Year_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/ts-loader??ref--2!../../../node_modules/vue-loader/lib??vue-loader-options!./Year.vue?vue&type=script&lang=ts& */ "./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/pages/Year.vue?vue&type=script&lang=ts&");
/* harmony import */ var _node_modules_ts_loader_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Year_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_ts_loader_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Year_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_ts_loader_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Year_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_ts_loader_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Year_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_ts_loader_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Year_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/components/pages/Year.vue?vue&type=template&id=d4327c50&":
/*!**********************************************************************!*\
  !*** ./src/components/pages/Year.vue?vue&type=template&id=d4327c50& ***!
  \**********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Year_vue_vue_type_template_id_d4327c50___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Year.vue?vue&type=template&id=d4327c50& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/pages/Year.vue?vue&type=template&id=d4327c50&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Year_vue_vue_type_template_id_d4327c50___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Year_vue_vue_type_template_id_d4327c50___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/utils/routerparams.ts":
/*!**********************************************!*\
  !*** ./src/components/utils/routerparams.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class PageParams {
    constructor() {
        this.year = "";
        this.month = "";
        this.day = "";
        this.post = "";
    }
}
exports.PageParams = PageParams;
;


/***/ }),

/***/ "./src/components/widgets/PostBlock.vue":
/*!**********************************************!*\
  !*** ./src/components/widgets/PostBlock.vue ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PostBlock_vue_vue_type_template_id_4fa1f5ed___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PostBlock.vue?vue&type=template&id=4fa1f5ed& */ "./src/components/widgets/PostBlock.vue?vue&type=template&id=4fa1f5ed&");
/* harmony import */ var _PostBlock_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PostBlock.vue?vue&type=script&lang=ts& */ "./src/components/widgets/PostBlock.vue?vue&type=script&lang=ts&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _PostBlock_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _PostBlock_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _PostBlock_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PostBlock.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss& */ "./src/components/widgets/PostBlock.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PostBlock_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PostBlock_vue_vue_type_template_id_4fa1f5ed___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PostBlock_vue_vue_type_template_id_4fa1f5ed___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/widgets/PostBlock.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/widgets/PostBlock.vue?vue&type=script&lang=ts&":
/*!***********************************************************************!*\
  !*** ./src/components/widgets/PostBlock.vue?vue&type=script&lang=ts& ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_ts_loader_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PostBlock_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/ts-loader??ref--2!../../../node_modules/vue-loader/lib??vue-loader-options!./PostBlock.vue?vue&type=script&lang=ts& */ "./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/widgets/PostBlock.vue?vue&type=script&lang=ts&");
/* harmony import */ var _node_modules_ts_loader_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PostBlock_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_ts_loader_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PostBlock_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_ts_loader_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PostBlock_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_ts_loader_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PostBlock_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_ts_loader_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PostBlock_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/components/widgets/PostBlock.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss&":
/*!******************************************************************************************************!*\
  !*** ./src/components/widgets/PostBlock.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss& ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PostBlock_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/vue-loader/lib??vue-loader-options!./PostBlock.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/components/widgets/PostBlock.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PostBlock_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PostBlock_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PostBlock_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PostBlock_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PostBlock_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/components/widgets/PostBlock.vue?vue&type=template&id=4fa1f5ed&":
/*!*****************************************************************************!*\
  !*** ./src/components/widgets/PostBlock.vue?vue&type=template&id=4fa1f5ed& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PostBlock_vue_vue_type_template_id_4fa1f5ed___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./PostBlock.vue?vue&type=template&id=4fa1f5ed& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/widgets/PostBlock.vue?vue&type=template&id=4fa1f5ed&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PostBlock_vue_vue_type_template_id_4fa1f5ed___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PostBlock_vue_vue_type_template_id_4fa1f5ed___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/widgets/PostList.vue":
/*!*********************************************!*\
  !*** ./src/components/widgets/PostList.vue ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PostList_vue_vue_type_template_id_48c68dee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PostList.vue?vue&type=template&id=48c68dee& */ "./src/components/widgets/PostList.vue?vue&type=template&id=48c68dee&");
/* harmony import */ var _PostList_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PostList.vue?vue&type=script&lang=ts& */ "./src/components/widgets/PostList.vue?vue&type=script&lang=ts&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _PostList_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _PostList_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _PostList_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PostList.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss& */ "./src/components/widgets/PostList.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PostList_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PostList_vue_vue_type_template_id_48c68dee___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PostList_vue_vue_type_template_id_48c68dee___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/widgets/PostList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/widgets/PostList.vue?vue&type=script&lang=ts&":
/*!**********************************************************************!*\
  !*** ./src/components/widgets/PostList.vue?vue&type=script&lang=ts& ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_ts_loader_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PostList_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/ts-loader??ref--2!../../../node_modules/vue-loader/lib??vue-loader-options!./PostList.vue?vue&type=script&lang=ts& */ "./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/widgets/PostList.vue?vue&type=script&lang=ts&");
/* harmony import */ var _node_modules_ts_loader_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PostList_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_ts_loader_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PostList_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_ts_loader_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PostList_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_ts_loader_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PostList_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_ts_loader_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PostList_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/components/widgets/PostList.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss&":
/*!*****************************************************************************************************!*\
  !*** ./src/components/widgets/PostList.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss& ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PostList_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/vue-loader/lib??vue-loader-options!./PostList.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/components/widgets/PostList.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PostList_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PostList_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PostList_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PostList_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PostList_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/components/widgets/PostList.vue?vue&type=template&id=48c68dee&":
/*!****************************************************************************!*\
  !*** ./src/components/widgets/PostList.vue?vue&type=template&id=48c68dee& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PostList_vue_vue_type_template_id_48c68dee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./PostList.vue?vue&type=template&id=48c68dee& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/widgets/PostList.vue?vue&type=template&id=48c68dee&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PostList_vue_vue_type_template_id_48c68dee___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PostList_vue_vue_type_template_id_48c68dee___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/widgets/SideBar.vue":
/*!********************************************!*\
  !*** ./src/components/widgets/SideBar.vue ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SideBar_vue_vue_type_template_id_32cc7bdc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SideBar.vue?vue&type=template&id=32cc7bdc& */ "./src/components/widgets/SideBar.vue?vue&type=template&id=32cc7bdc&");
/* harmony import */ var _SideBar_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SideBar.vue?vue&type=script&lang=ts& */ "./src/components/widgets/SideBar.vue?vue&type=script&lang=ts&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _SideBar_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _SideBar_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _SideBar_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss_scope_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SideBar.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss&scope=true& */ "./src/components/widgets/SideBar.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss&scope=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SideBar_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SideBar_vue_vue_type_template_id_32cc7bdc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SideBar_vue_vue_type_template_id_32cc7bdc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/widgets/SideBar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/widgets/SideBar.vue?vue&type=script&lang=ts&":
/*!*********************************************************************!*\
  !*** ./src/components/widgets/SideBar.vue?vue&type=script&lang=ts& ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_ts_loader_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBar_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/ts-loader??ref--2!../../../node_modules/vue-loader/lib??vue-loader-options!./SideBar.vue?vue&type=script&lang=ts& */ "./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/widgets/SideBar.vue?vue&type=script&lang=ts&");
/* harmony import */ var _node_modules_ts_loader_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBar_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_ts_loader_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBar_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_ts_loader_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBar_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_ts_loader_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBar_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_ts_loader_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBar_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/components/widgets/SideBar.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss&scope=true&":
/*!***************************************************************************************************************!*\
  !*** ./src/components/widgets/SideBar.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss&scope=true& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBar_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss_scope_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/vue-loader/lib??vue-loader-options!./SideBar.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss&scope=true& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/components/widgets/SideBar.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss&scope=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBar_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss_scope_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBar_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss_scope_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBar_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss_scope_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBar_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss_scope_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBar_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss_scope_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/components/widgets/SideBar.vue?vue&type=template&id=32cc7bdc&":
/*!***************************************************************************!*\
  !*** ./src/components/widgets/SideBar.vue?vue&type=template&id=32cc7bdc& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBar_vue_vue_type_template_id_32cc7bdc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./SideBar.vue?vue&type=template&id=32cc7bdc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/widgets/SideBar.vue?vue&type=template&id=32cc7bdc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBar_vue_vue_type_template_id_32cc7bdc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBar_vue_vue_type_template_id_32cc7bdc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/widgets/SiteDescription.vue":
/*!****************************************************!*\
  !*** ./src/components/widgets/SiteDescription.vue ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SiteDescription_vue_vue_type_template_id_420df356_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SiteDescription.vue?vue&type=template&id=420df356&scoped=true& */ "./src/components/widgets/SiteDescription.vue?vue&type=template&id=420df356&scoped=true&");
/* harmony import */ var _SiteDescription_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SiteDescription.vue?vue&type=script&lang=ts& */ "./src/components/widgets/SiteDescription.vue?vue&type=script&lang=ts&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _SiteDescription_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _SiteDescription_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _SiteDescription_vue_vue_type_style_index_0_id_420df356_rel_stylesheet_2Fscss_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SiteDescription.vue?vue&type=style&index=0&id=420df356&rel=stylesheet%2Fscss&lang=scss&scoped=true& */ "./src/components/widgets/SiteDescription.vue?vue&type=style&index=0&id=420df356&rel=stylesheet%2Fscss&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SiteDescription_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SiteDescription_vue_vue_type_template_id_420df356_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SiteDescription_vue_vue_type_template_id_420df356_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "420df356",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/widgets/SiteDescription.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/widgets/SiteDescription.vue?vue&type=script&lang=ts&":
/*!*****************************************************************************!*\
  !*** ./src/components/widgets/SiteDescription.vue?vue&type=script&lang=ts& ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_ts_loader_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SiteDescription_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/ts-loader??ref--2!../../../node_modules/vue-loader/lib??vue-loader-options!./SiteDescription.vue?vue&type=script&lang=ts& */ "./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/widgets/SiteDescription.vue?vue&type=script&lang=ts&");
/* harmony import */ var _node_modules_ts_loader_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SiteDescription_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_ts_loader_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SiteDescription_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_ts_loader_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SiteDescription_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_ts_loader_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SiteDescription_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_ts_loader_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SiteDescription_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/components/widgets/SiteDescription.vue?vue&type=style&index=0&id=420df356&rel=stylesheet%2Fscss&lang=scss&scoped=true&":
/*!************************************************************************************************************************************!*\
  !*** ./src/components/widgets/SiteDescription.vue?vue&type=style&index=0&id=420df356&rel=stylesheet%2Fscss&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SiteDescription_vue_vue_type_style_index_0_id_420df356_rel_stylesheet_2Fscss_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/vue-loader/lib??vue-loader-options!./SiteDescription.vue?vue&type=style&index=0&id=420df356&rel=stylesheet%2Fscss&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/components/widgets/SiteDescription.vue?vue&type=style&index=0&id=420df356&rel=stylesheet%2Fscss&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SiteDescription_vue_vue_type_style_index_0_id_420df356_rel_stylesheet_2Fscss_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SiteDescription_vue_vue_type_style_index_0_id_420df356_rel_stylesheet_2Fscss_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SiteDescription_vue_vue_type_style_index_0_id_420df356_rel_stylesheet_2Fscss_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SiteDescription_vue_vue_type_style_index_0_id_420df356_rel_stylesheet_2Fscss_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SiteDescription_vue_vue_type_style_index_0_id_420df356_rel_stylesheet_2Fscss_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/components/widgets/SiteDescription.vue?vue&type=template&id=420df356&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./src/components/widgets/SiteDescription.vue?vue&type=template&id=420df356&scoped=true& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SiteDescription_vue_vue_type_template_id_420df356_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./SiteDescription.vue?vue&type=template&id=420df356&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/widgets/SiteDescription.vue?vue&type=template&id=420df356&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SiteDescription_vue_vue_type_template_id_420df356_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SiteDescription_vue_vue_type_template_id_420df356_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/widgets/SiteInfo.vue":
/*!*********************************************!*\
  !*** ./src/components/widgets/SiteInfo.vue ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SiteInfo_vue_vue_type_template_id_3da72cb6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SiteInfo.vue?vue&type=template&id=3da72cb6&scoped=true& */ "./src/components/widgets/SiteInfo.vue?vue&type=template&id=3da72cb6&scoped=true&");
/* harmony import */ var _SiteInfo_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SiteInfo.vue?vue&type=script&lang=ts& */ "./src/components/widgets/SiteInfo.vue?vue&type=script&lang=ts&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _SiteInfo_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _SiteInfo_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _SiteInfo_vue_vue_type_style_index_0_id_3da72cb6_rel_stylesheet_2Fscss_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SiteInfo.vue?vue&type=style&index=0&id=3da72cb6&rel=stylesheet%2Fscss&lang=scss&scoped=true& */ "./src/components/widgets/SiteInfo.vue?vue&type=style&index=0&id=3da72cb6&rel=stylesheet%2Fscss&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SiteInfo_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SiteInfo_vue_vue_type_template_id_3da72cb6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SiteInfo_vue_vue_type_template_id_3da72cb6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3da72cb6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/widgets/SiteInfo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/widgets/SiteInfo.vue?vue&type=script&lang=ts&":
/*!**********************************************************************!*\
  !*** ./src/components/widgets/SiteInfo.vue?vue&type=script&lang=ts& ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_ts_loader_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SiteInfo_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/ts-loader??ref--2!../../../node_modules/vue-loader/lib??vue-loader-options!./SiteInfo.vue?vue&type=script&lang=ts& */ "./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/widgets/SiteInfo.vue?vue&type=script&lang=ts&");
/* harmony import */ var _node_modules_ts_loader_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SiteInfo_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_ts_loader_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SiteInfo_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_ts_loader_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SiteInfo_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_ts_loader_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SiteInfo_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_ts_loader_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SiteInfo_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/components/widgets/SiteInfo.vue?vue&type=style&index=0&id=3da72cb6&rel=stylesheet%2Fscss&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************!*\
  !*** ./src/components/widgets/SiteInfo.vue?vue&type=style&index=0&id=3da72cb6&rel=stylesheet%2Fscss&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SiteInfo_vue_vue_type_style_index_0_id_3da72cb6_rel_stylesheet_2Fscss_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/vue-loader/lib??vue-loader-options!./SiteInfo.vue?vue&type=style&index=0&id=3da72cb6&rel=stylesheet%2Fscss&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/components/widgets/SiteInfo.vue?vue&type=style&index=0&id=3da72cb6&rel=stylesheet%2Fscss&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SiteInfo_vue_vue_type_style_index_0_id_3da72cb6_rel_stylesheet_2Fscss_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SiteInfo_vue_vue_type_style_index_0_id_3da72cb6_rel_stylesheet_2Fscss_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SiteInfo_vue_vue_type_style_index_0_id_3da72cb6_rel_stylesheet_2Fscss_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SiteInfo_vue_vue_type_style_index_0_id_3da72cb6_rel_stylesheet_2Fscss_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SiteInfo_vue_vue_type_style_index_0_id_3da72cb6_rel_stylesheet_2Fscss_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/components/widgets/SiteInfo.vue?vue&type=template&id=3da72cb6&scoped=true&":
/*!****************************************************************************************!*\
  !*** ./src/components/widgets/SiteInfo.vue?vue&type=template&id=3da72cb6&scoped=true& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SiteInfo_vue_vue_type_template_id_3da72cb6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./SiteInfo.vue?vue&type=template&id=3da72cb6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/widgets/SiteInfo.vue?vue&type=template&id=3da72cb6&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SiteInfo_vue_vue_type_template_id_3da72cb6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SiteInfo_vue_vue_type_template_id_3da72cb6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/widgets/SiteMenu.vue":
/*!*********************************************!*\
  !*** ./src/components/widgets/SiteMenu.vue ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SiteMenu_vue_vue_type_template_id_9ad74c54_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SiteMenu.vue?vue&type=template&id=9ad74c54&scoped=true& */ "./src/components/widgets/SiteMenu.vue?vue&type=template&id=9ad74c54&scoped=true&");
/* harmony import */ var _SiteMenu_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SiteMenu.vue?vue&type=script&lang=ts& */ "./src/components/widgets/SiteMenu.vue?vue&type=script&lang=ts&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _SiteMenu_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _SiteMenu_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _SiteMenu_vue_vue_type_style_index_0_id_9ad74c54_rel_stylesheet_2Fscss_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SiteMenu.vue?vue&type=style&index=0&id=9ad74c54&rel=stylesheet%2Fscss&lang=scss&scoped=true& */ "./src/components/widgets/SiteMenu.vue?vue&type=style&index=0&id=9ad74c54&rel=stylesheet%2Fscss&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SiteMenu_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SiteMenu_vue_vue_type_template_id_9ad74c54_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SiteMenu_vue_vue_type_template_id_9ad74c54_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "9ad74c54",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/widgets/SiteMenu.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/widgets/SiteMenu.vue?vue&type=script&lang=ts&":
/*!**********************************************************************!*\
  !*** ./src/components/widgets/SiteMenu.vue?vue&type=script&lang=ts& ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_ts_loader_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SiteMenu_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/ts-loader??ref--2!../../../node_modules/vue-loader/lib??vue-loader-options!./SiteMenu.vue?vue&type=script&lang=ts& */ "./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/widgets/SiteMenu.vue?vue&type=script&lang=ts&");
/* harmony import */ var _node_modules_ts_loader_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SiteMenu_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_ts_loader_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SiteMenu_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_ts_loader_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SiteMenu_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_ts_loader_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SiteMenu_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_ts_loader_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SiteMenu_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/components/widgets/SiteMenu.vue?vue&type=style&index=0&id=9ad74c54&rel=stylesheet%2Fscss&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************!*\
  !*** ./src/components/widgets/SiteMenu.vue?vue&type=style&index=0&id=9ad74c54&rel=stylesheet%2Fscss&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SiteMenu_vue_vue_type_style_index_0_id_9ad74c54_rel_stylesheet_2Fscss_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/vue-loader/lib??vue-loader-options!./SiteMenu.vue?vue&type=style&index=0&id=9ad74c54&rel=stylesheet%2Fscss&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/components/widgets/SiteMenu.vue?vue&type=style&index=0&id=9ad74c54&rel=stylesheet%2Fscss&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SiteMenu_vue_vue_type_style_index_0_id_9ad74c54_rel_stylesheet_2Fscss_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SiteMenu_vue_vue_type_style_index_0_id_9ad74c54_rel_stylesheet_2Fscss_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SiteMenu_vue_vue_type_style_index_0_id_9ad74c54_rel_stylesheet_2Fscss_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SiteMenu_vue_vue_type_style_index_0_id_9ad74c54_rel_stylesheet_2Fscss_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SiteMenu_vue_vue_type_style_index_0_id_9ad74c54_rel_stylesheet_2Fscss_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/components/widgets/SiteMenu.vue?vue&type=template&id=9ad74c54&scoped=true&":
/*!****************************************************************************************!*\
  !*** ./src/components/widgets/SiteMenu.vue?vue&type=template&id=9ad74c54&scoped=true& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SiteMenu_vue_vue_type_template_id_9ad74c54_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./SiteMenu.vue?vue&type=template&id=9ad74c54&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/widgets/SiteMenu.vue?vue&type=template&id=9ad74c54&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SiteMenu_vue_vue_type_template_id_9ad74c54_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SiteMenu_vue_vue_type_template_id_9ad74c54_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vue_1 = __importDefault(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.js"));
const app_vue_1 = __importDefault(__webpack_require__(/*! ./app.vue */ "./src/app.vue"));
const router_1 = __importDefault(__webpack_require__(/*! ./router */ "./src/router.ts"));
const store_1 = __importDefault(__webpack_require__(/*! ./store/store */ "./src/store/store.ts"));
vue_1.default.config.productionTip = false;
new vue_1.default({
    render: (h) => h(app_vue_1.default),
    router: router_1.default,
    store: store_1.default,
}).$mount('#app');


/***/ }),

/***/ "./src/router.ts":
/*!***********************!*\
  !*** ./src/router.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vue_1 = __importDefault(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.js"));
const vue_router_1 = __importDefault(__webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm.js"));
const Index_vue_1 = __importDefault(__webpack_require__(/*! ./components/pages/Index.vue */ "./src/components/pages/Index.vue"));
const About_vue_1 = __importDefault(__webpack_require__(/*! ./components/pages/About.vue */ "./src/components/pages/About.vue"));
const Year_vue_1 = __importDefault(__webpack_require__(/*! ./components/pages/Year.vue */ "./src/components/pages/Year.vue"));
const PostDetail_vue_1 = __importDefault(__webpack_require__(/*! ./components/pages/PostDetail.vue */ "./src/components/pages/PostDetail.vue"));
vue_1.default.use(vue_router_1.default);
const scrollBehavior = (to, from, savedPosition) => {
    return (savedPosition && to.meta["keepAlive"]) ? savedPosition : { x: 0, y: 0 };
};
exports.default = new vue_router_1.default({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes: [
        { path: '/', component: Index_vue_1.default },
        { path: "/:year", component: Year_vue_1.default },
        { path: "/:year/:month", component: Index_vue_1.default },
        { path: "/:year/:month/:day", component: Index_vue_1.default },
        { path: "/:year/:month/:day/:post", component: PostDetail_vue_1.default },
        { path: "/about", component: About_vue_1.default },
        { path: "*", redirect: '/' }
    ],
    scrollBehavior: scrollBehavior,
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./src/store/getters.ts":
/*!******************************!*\
  !*** ./src/store/getters.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const md5_1 = __importDefault(__webpack_require__(/*! md5 */ "./node_modules/md5/md5.js"));
const markdown_include_1 = __webpack_require__(/*! @dist/markdown-include */ "./dist/markdown-include.ts");
for (let [k, v] of markdown_include_1.markdowns) {
    v.then(module => {
        const p = module.default;
        console.log(p.body);
    });
}
function getPost(rootState, postArgument) {
    const h = `${postArgument.year}${postArgument.month}${postArgument.day}${postArgument.title}`;
    const hash = md5_1.default(h);
    return rootState.cache.get(hash);
}
exports.getPost = getPost;
exports.getters = {};


/***/ }),

/***/ "./src/store/mutation.ts":
/*!*******************************!*\
  !*** ./src/store/mutation.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const md5_1 = __importDefault(__webpack_require__(/*! md5 */ "./node_modules/md5/md5.js"));
exports.mutations = {
    addPost(state, post) {
        state.posts = post;
        post.forEach((value) => {
            const date = new Date(value.attributes.date.toString());
            const year = String(date.getFullYear());
            const month = String(("0" + (date.getMonth() + 1)).slice(-2));
            const day = String(("0" + date.getDate()).slice(-2));
            const title = value.attributes.title.replace(" ", "");
            const h = `${year}${month}${day}${title}`;
            const hash = md5_1.default(h);
            state.cache.set(hash, value);
        });
        console.log(state.cache);
    }
};


/***/ }),

/***/ "./src/store/state.ts":
/*!****************************!*\
  !*** ./src/store/state.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Attributes {
    constructor() {
        this.title = "";
        this.date = "";
        this.author = "";
    }
}
exports.Attributes = Attributes;
class Post {
    constructor() {
        this.attributes = new Attributes();
        this.body = "";
        this.id = "";
        this.summary = "";
    }
}
exports.Post = Post;
class State {
    constructor() {
        this.posts = new Array();
        this.cache = new Map();
    }
}
exports.State = State;


/***/ }),

/***/ "./src/store/store.ts":
/*!****************************!*\
  !*** ./src/store/store.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vue_1 = __importDefault(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.js"));
const vuex_1 = __importDefault(__webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js"));
const state_1 = __webpack_require__(/*! ./state */ "./src/store/state.ts");
const mutation_1 = __webpack_require__(/*! ./mutation */ "./src/store/mutation.ts");
const getters_1 = __webpack_require__(/*! ./getters */ "./src/store/getters.ts");
vue_1.default.use(vuex_1.default);
const state = new state_1.State;
exports.default = new vuex_1.default.Store({
    state,
    mutations: mutation_1.mutations,
    getters: getters_1.getters
});


/***/ }),

/***/ "./static/2019review.md":
/*!******************************!*\
  !*** ./static/2019review.md ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"title":"2019 Review","date":"2020-01-01T21:25:54.000Z","tags":2019,"categories":"年度总结"},"body":"\n上一次写年终总结还是18年回家的动车上，可惜写了一半没发表，觉得一年了没有什么能够回想起来的，就又删除了。今年不同了，今年有好多想说的。\n\n<!-- more -->\n\n## 脱单\n\n**第一件重要的事是我遇到了生命中的她。**\n\n自从工作以后，我妈天天念叨我的就是找对象，和我预想的没错，上学的时候盼我毕业，毕业以后盼我工作，工作以后盼我找对象结婚，找对象以后盼我赶紧生个娃让她抱。~~（大家的父母应该都这样）~~\n\n## 加薪\n\n这件事确实也令我挺开心的，我的工资在2019年成功涨到了0.375乔(1乔等于**元  [@nanpuyue](https://blog.nanpuyue.com))\n\n涨工资谁不高兴，我估计也就马云不高兴了，毕竟他看不上钱。\n\n## 学习\n\n今年看了很多C++的资料，对C++和编译器都有了更深的了解。想2016年半夜[@zccrs](https://zcc.rs)在家教我编译原理，到现在我可以理解一门语言从设计到实现，再到使用模板完成编译时计算，我走了快三年，这三年里我一直没停下学习的脚步，在学习各种知识，从各种编程语言到各种框架原理，到图形界面的实现。还学习了单元测试，并且[@hualet](https://hualet.org)大佬给我讲了单元测试是什么，以及单元测试的重要性，从那以后我才算真正的了解单元测试的重要性，也使我在写代码的时候注重通过单元测试来保障我的功能。\n\n去年对深度学习进行了一波学习，今年对Web工程化和TypeScript也学习了一下，也算是对目前最热门的两个领域进行了一定的了解。\n\n## 读书\n\n去年买的TensorFlow看了没一半，今年倒是没买书，开始在微信读书上读书，利用一些空余时间读一点，我也推荐大家多利用空闲时间读读书，少刷抖音和bilibili。\n\n- 《TensorFlow》未读完\n- 《TypeScript实战》正在读\n\n## 博客\n\n2019年我一共水了15篇文章。\n\n- 12-26 [在ArchLinux通过串口调试VMware虚拟机中的deepin](https://blog.justforlxz.com/2019/12/26/use-serial-port-debug-deepin-on-archlinux/)\n\n- 12-26 [使用标准库std::sort函数进行排序](https://blog.justforlxz.com/2019/12/26/cpp-sort/)\n\n- 12-09 [记录一个坑爹的usb网卡](https://blog.justforlxz.com/2019/12/09/%E8%AE%B0%E5%BD%95%E4%B8%80%E4%B8%AA%E5%9D%91%E7%88%B9%E7%9A%84usb%E7%BD%91%E5%8D%A1/)\n\n- 12-09 [使用github actions自动部署hexo文章到html仓库](https://blog.justforlxz.com/2019/12/09/%E8%AE%B0%E5%BD%95%E4%B8%80%E4%B8%AA%E5%9D%91%E7%88%B9%E7%9A%84usb%E7%BD%91%E5%8D%A1/)\n\n- 12-08 [Vue父子组件传值 —— props & $emit](https://blog.justforlxz.com/2019/12/08/vue-component-props/)\n\n- 12-08 [添加Vue动画](https://blog.justforlxz.com/2019/12/08/vue-transitions/)\n\n- 11-25 [使用webpack-dev-server来监听项目变化](https://blog.justforlxz.com/2019/11/25/%E4%BD%BF%E7%94%A8webpack-dev-server%E6%9D%A5%E7%9B%91%E5%90%AC%E9%A1%B9%E7%9B%AE%E5%8F%98%E5%8C%96/)\n\n- 10-24 [给Archlinux开启BFQ和MuQSS](https://blog.justforlxz.com/2019/10/24/%E7%BB%99Archlinux%E5%BC%80%E5%90%AFBFQ%E5%92%8CMuQSS/)\n\n- 10-22 [使用webpack打包Vue和TypeScript](https://blog.justforlxz.com/2019/10/22/%E4%BD%BF%E7%94%A8webpack%E6%89%93%E5%8C%85Vue%E5%92%8CTypeScript/)\n\n- 10-14 [webpack入门](https://blog.justforlxz.com/2019/10/14/webpack%E5%85%A5%E9%97%A8/)\n\n- 06-16 [wsl2的使用体验](https://blog.justforlxz.com/2019/06/16/wsl2%E7%9A%84%E4%BD%BF%E7%94%A8%E4%BD%93%E9%AA%8C/)\n\n- 06-15 [入坑typescript了](https://blog.justforlxz.com/2019/06/15/%E5%85%A5%E5%9D%91typescript%E4%BA%86/)\n\n- 05-23 [CMake CTests for dde-control-center](https://blog.justforlxz.com/2019/05/23/CMake-CTests-for-dde-control-center/)\n\n- 02-21 [如何在Deepin上使用LNMP](https://blog.justforlxz.com/2019/02/21/how-to-use-LNMP-on-deepin/)\n\n- 02-23 [解决用了xposed后淘宝闪退](https://blog.justforlxz.com/2019/01/23/fuck-taobao/)\n\n```\n2019\n├── 01\n│   └── 23\n│       └── fuck-taobao\n│           └── index.html\n├── 02\n│   └── 21\n│       └── how-to-use-LNMP-on-deepin\n│           └── index.html\n├── 05\n│   └── 23\n│       └── CMake-CTests-for-dde-control-center\n│           └── index.html\n├── 06\n│   ├── 15\n│   │   └── 入坑typescript了\n│   │       ├── 深度录屏_选择区域_20190615202044.gif\n│   │       └── index.html\n│   └── 16\n│       └── wsl2的使用体验\n│           ├── index.html\n│           ├── Snipaste_2019-06-16_21-49-15.png\n│           └── Snipaste_2019-06-16_21-52-42.png\n├── 10\n│   ├── 14\n│   │   └── webpack入门\n│   │       └── index.html\n│   ├── 22\n│   │   └── 使用webpack打包Vue和TypeScript\n│   │       └── index.html\n│   └── 24\n│       └── 给Archlinux开启BFQ和MuQSS\n│           └── index.html\n├── 11\n│   └── 25\n│       └── 使用webpack-dev-server来监听项目变化\n│           └── index.html\n└── 12\n    ├── 08\n    │   ├── vue-component-props\n    │   │   └── index.html\n    │   └── vue-transitions\n    │       └── index.html\n    ├── 09\n    │   ├── 记录一个坑爹的usb网卡\n    │   │   └── index.html\n    │   └── use-github-actions-to-depoly-hexo\n    │       └── index.html\n    └── 26\n        ├── cpp-sort\n        │   └── index.html\n        └── use-serial-port-debug-deepin-on-archlinux\n            └── index.html\n\n34 directories, 18 files\n```\n\n## 科普视频\n\n1. 妈咪叔 (一个较真的理工男)\n\n这个名字我第一眼看到的时候，还以为是个卖母婴的，没想到居然是个搞科普的，而且内容讲的也很好，有数学、物理、化学和天文学。\n\n2. 李永乐老师\n\n以前偶尔看过老师的视频，因为一直都在热榜，所以没想到关注，后来是youtube上看到了，就点了关注，youtube上更新的和bilibili的还不是一样的，看最后结尾的时候youtube的只说youtube帐号关注，而bilibili的是bilibili，有时候还要多个平台去看。\n\n3.  萝王二号\n\n之前在科普区随便看的时候，对生物学产生了一些兴趣，萝王讲的风格我很喜欢，特别是他注重昆虫分类学(骨包皮，皮包骨啊2333)，还有一些辟谣视频。\n\n4. 芳斯塔夫 (鬼古)\n\n也使对生物学产生了一些兴趣，鬼古说以他很中二的风格带领我学习了一波古生物的相关知识(旧日支配者！！！)。\n\n5. 木偶君\n\n和鬼古一样是专门讲古生物的，不过每次结束的比较仓促，突然就结束了。\n\n6. 木鱼水心\n\n木鱼并不是今年才关注的，最开始关注是他做EVA剧场版解析，后来《木鱼说》开始做一些科普，我开始一直关注了。\n\n7. 宇宙视觉 (永远不要停止思考)\n\n一个讲天文的科普up，不过年底的时候换了配音，疑似配音出去单干了。\n\n## 电影\n\n1. 流浪地球\n2. 阿丽塔：战斗天使\n3. 战狼2\n4. 惊奇队长\n5. 复仇者联盟4\n6. 何以为家\n7. 速度与激情： 特别行动\n8. 叶问4\n\n## 纪录片\n\n1. 混沌：数学探秘\n2. 维度：数学漫步\n\n## 动漫\n\n1. 刀剑神域\n2. 紫罗兰永恒花园\n3. darling in the franxx\n4. 心理测量者\n5. 进击的巨人第三季\n6. 五等分的新娘\n7. citrus～柑橘味香气～\n","frontmatter":"title: 2019 Review\ndate: 2020-01-01 21:25:54\ntags: 2019\ncategories: 年度总结"}

/***/ }),

/***/ "./static/ArchLinux运行steam出现缺少LibGL-steam-libGL-error-failed-to-load-driver-swrast.md":
/*!********************************************************************************************!*\
  !*** ./static/ArchLinux运行steam出现缺少LibGL-steam-libGL-error-failed-to-load-driver-swrast.md ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"title":"ArchLinux运行steam出现缺少LibGL--steam libGL error: failed to load driver: swrast","subtitle":"arch库太新，steam库太旧导致的问题。","date":"2016-07-15T07:18:53.000Z","author":"kirigaya","header-img":"home-bg.jpg","tags":["实验室"]},"body":"其实arch的wiki已经提到了，而且这个问题是比较常见的，只需要删除steam的库就行。\n\n[wiki原文链接](https://wiki.archlinux.org/index.php/Steam/Troubleshooting#Deleting_the_runtime_libraries)\n\n<!--more-->\n\n删除运行库\n运行此命令，删除在issues上已知的运行库问题:\n\n    find ~/.steam/root/ \\( -name \"libgcc_s.so*\" -o -name \"libstdc++.so*\" -o -name \"libxcb.so*\" -o -name \"libgpg-error.so*\" \\) -print -delete\n\n\n如果上面的命令不工作，则再次运行上面的命令，然后运行此命令。\n\n    find ~/.local/share/Steam/ \\( -name \"libgcc_s.so*\" -o -name \"libstdc++.so*\" -o -name \"libxcb.so*\" -o -name \"libgpg-error.so*\" \\) -print -delete\n","frontmatter":"title: 'ArchLinux运行steam出现缺少LibGL--steam libGL error: failed to load driver: swrast'\nsubtitle:   \"arch库太新，steam库太旧导致的问题。\"\ndate: 2016-07-15 07:18:53\nauthor:     \"kirigaya\"\nheader-img: \"home-bg.jpg\"\ntags:\n    - 实验室"}

/***/ }),

/***/ "./static/C-plus-plus-Iterator-笔记.md":
/*!*******************************************!*\
  !*** ./static/C-plus-plus-Iterator-笔记.md ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"title":"C plus plus Iterator 笔记","date":"2018-07-09T13:05:12.000Z","tags":["C++"],"categories":"C++"},"body":"\n![放张好看的图让咱兴奋一下](http://manbizhi.com/images/20267945.jpg)\n\n本文记录了咱对迭代器的一些理解\n\n<!-- more -->\n\nC++ 标准库提供了三种类型组件:\n\n- 容器\n- 迭代器\n- 算法\n\n容器是指存储某种类型的结构，容器有两种:\n\n- 顺序容器 (vector、list和string等，是元素的有序集合。)\n- 关联容器 (set、map等，是包含查找元素的键值。 )\n\n遍历容器的方式之一就是迭代器，迭代器是一种泛型指针，普通指针指向一块内存，迭代器指向容器中的一个位置。STL的每个模板容器中，都定义了一组对应的迭代器类，使用迭代器和算法，就可以访问容器中特定位置的元素，而无需关心元素的类型。\n\n每种容器都定义了一对begin和end的函数，用于返回迭代器。如果容器中有元素的话，begin返回的迭代器指向第一个元素。\n\n```\nstd::list<int>::iterator it = list.begin();\n```\n\n上述语句把it初始化为由list的begin返回的迭代器，如果list不为空，it将指向该元素list[0]。\n\n由end操作返回的迭代器指向list的末端元素的下一个，通常指超出末端迭代器(off-the-end-iterator)，表明指向一个不存在的元素，如果容器为空，begin返回的迭代器将和end相同，在使用中，可以通过判断end来检查是否处理完容器种所有的元素。\n\n迭代器类型定义了一些操作来获取迭代器所指向的元素，并允许程序员将迭代器从一个元素移动到另一个元素。\n\n遍历列表：\n\n```\nstd::list<int> list\n\nfor (std::list<int>::const_iterator it = list.constBegin(); it != list.constEnd(); ++it) {\n    // 通过迭代器访问元素需要解引用。\n    std::cout << *it << std::endl;\n}\n```\n\n```\nstd::list<int> list;\nstd::sort(list.begin(), list.end(), [=] (int _i1, int _i2) {\n    return _i1 < _i2;\n});\n```\n\n上面的示例代码是对一个int类型的list进行排序，\n\n","frontmatter":"title: C plus plus Iterator 笔记\ndate: 2018-07-09 13:05:12\ntags: [\n    C++\n]\ncategories: C++"}

/***/ }),

/***/ "./static/CMake-CTests-for-dde-control-center.md":
/*!*******************************************************!*\
  !*** ./static/CMake-CTests-for-dde-control-center.md ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"title":"CMake CTests for dde-control-center","date":"2019-05-23T17:16:15.000Z","tags":["CMake Linux"],"categories":"Linux"},"body":"\n什么是单元测试?\n\n>在计算机编程中，单元测试又称为模块测试，是针对程序模块（软件设计的最小单位）来进行正确性检验的测试工作。\n\n单元测试存在的意义在于，如果程序发生了异常情况，比如接收了错误的值，从而导致结果不正确，当修正程序中的错误后，为了避免再次遇到这个问题，需要对出问题的值和函数/功能进行一次测试，确保结果符合预期。\n\n单元测试很重要，如果是新项目，请一定要刚开始就规划好单元测试。\n\n为什么说单元测试很重要呢？因为单元测试的目的是隔离其他单元，并证明当前单元是正确的。这需要开发者在设计程序的时候就要考虑很多，合理的设计和规划项目。当未来重构项目的时候，可以局部重构来优化项目，而不是从零重写。\n\n本文没有详细说明Qt的单元测试是如何编写的，编写Qt的单元测试放在以后再写(~~咕咕咕~~)。\n\n<!-- more -->\n\n写这篇文章是因为最近在给控制中心写单元测试，控制中心的模块都是MVC的，本身就做好了大方向的隔离，每个函数也基本是拆分出来的最小功能，可以单独拿出来测试。控制中心目前存在一个问题，Worker类是从DBus上接收数据，处理完成后放入Model中，如果测试Worker类，需要做很多和DBus相关的处理，比较麻烦，所以最开始我先把重心放在了创建Tests和测试一个基本的转换函数的功能，验证单元测试的流程。\n\n>[控制中心单元测试PR](https://github.com/linuxdeepin/dde-control-center/pull/171)\n\n控制中心项目使用的CMake作为项目构建工具，所以用到了CTests，控制中心使用的Qt进行的开发，Qt也提供了自己的单元测试，我两个都做了支持。\n\n在顶层的CMakeLists.txt中添加CTests的支持：\n```\n# 启用CTest检查\ninclude(Dart)\n\n# 启用CTest\ninclude(CTest)\n```\n这两行内容需要在顶层CMakeLists.txt中添加，不然不会生效。\n\n在子项目中创建一个dcc_test.h，用来写单元测试的类。\n\n```\n#ifndef DCC_TEST_H\n#define DCC_TEST_H\n\n#include <QMap>\n#include <QString>\n#include <QTest>\n\n#include \"modules/display/displaywidget.h\"\n\nnamespace Tests {\n\nclass Tests : public QObject {\n    Q_OBJECT\n\nprivate Q_SLOTS:\n    void testSliderValue_data()\n    {\n        QTest::addColumn<float>(\"value\");\n        QTest::addColumn<int>(\"result\");\n\n        QMap<float, int> testMap{ { 1.0, 1 },  { 1.25, 2 }, { 1.5, 3 },\n                                  { 1.75, 4 }, { 2.0, 5 },  { 2.25, 6 },\n                                  { 2.5, 7 },  { 2.75, 8 }, { 3.0, 9 } };\n\n        for (auto it = testMap.constBegin(); it != testMap.constEnd(); ++it) {\n            QTest::newRow(\"converToSlider\") << it.key() << it.value();\n        }\n    }\n    void testSliderValue()\n    {\n        QFETCH(float, value);\n        QFETCH(int, result);\n\n        using namespace dcc::display;\n\n        QCOMPARE(DisplayWidget::convertToSlider(value), result);\n        QCOMPARE(DisplayWidget::convertToScale(result), value);\n    }\n};\n}  // namespace Tests\n\nQTEST_MAIN(Tests::Tests)\n#endif  // !DCC_TEST_H\n```\n\n在子项目的CMakeLists.txt中添加一个二进制，用来当作单元测试程序。\n\n```\n# 这个宏是Dart提供的，用来判断是否开启CTest\nif(BUILD_TESTING)\nfind_package(Qt5 COMPONENTS\n    Test\nREQUIRED)\n\nset(Qt_LIBS\n    ${Qt_LIBS}\n    Qt5::Test\n)\n\nset(TEST_SRCS\ntests/dcc_test.h\n${DISPLAY_FILES}\n${WIDGETS_FILES}\n${MODULE_FILES}\n)\n\n# 添加一个叫unit-test的二进制\nadd_executable(unit-test\n${TEST_SRCS}\n${PROJECT_BINARY_DIR}\n)\n\ntarget_include_directories(unit-test PUBLIC\n${TEST_SRCS}\n${PROJECT_BINARY_DIR}\n${DFrameworkDBus_INCLUDE_DIRS}\n${QGSettings_INCLUDE_DIRS}\n${Qt5Gui_PRIVATE_INCLUDE_DIRS}\n)\n\ntarget_link_libraries(unit-test PRIVATE\n${Qt_LIBS}\n${DFrameworkDBus_LIBRARIES}\n${QGSettings_LIBRARIES}\n${DtkWidget_LIBRARIES}\n${XCB_EWMH_LIBRARIES}\n)\n```\n\n到这里，直接编译启动unit-test就可以使用Qt的单元测试了，但是加上CTest的支持只需要一行：\n\n```\nadd_test(ctest unit-test)\nendif()\n```\n\n使用ctest -j6 -C Debug -T test --output-on-failure跑CTest，得到执行结果：\n\n```\n[ctest]    Site: xiaomi-air\n[ctest]    Build name: Linux-c++\n[ctest] Test project /home/justforlxz/Projects/Deepin/dde-control-center/build\n[ctest]     Start 1: ctest\n[ctest] 1/1 Test #1: ctest ............................   Passed    0.05 sec\n[ctest]\n[ctest] 100% tests passed, 0 tests failed out of 1\n[ctest]\n[ctest] Total Test time (real) =   0.06 sec\n[ctest] CTest finished with return code 0\n```\n\n如果是跑unit-test二进制，则会得到Qt打印的相关信息：\n\n```\n********* Start testing of Tests::Tests *********\nConfig: Using QtTest library 5.12.3, Qt 5.12.3 (x86_64-little_endian-lp64 shared (dynamic) release build; by GCC 8.3.0)\nPASS   : Tests::Tests::initTestCase()\nPASS   : Tests::Tests::testSliderValue(converToSlider)\nPASS   : Tests::Tests::testSliderValue(converToSlider)\nPASS   : Tests::Tests::testSliderValue(converToSlider)\nPASS   : Tests::Tests::testSliderValue(converToSlider)\nPASS   : Tests::Tests::testSliderValue(converToSlider)\nPASS   : Tests::Tests::testSliderValue(converToSlider)\nPASS   : Tests::Tests::testSliderValue(converToSlider)\nPASS   : Tests::Tests::testSliderValue(converToSlider)\nPASS   : Tests::Tests::testSliderValue(converToSlider)\nPASS   : Tests::Tests::cleanupTestCase()\nTotals: 11 passed, 0 failed, 0 skipped, 0 blacklisted, 0ms\n********* Finished testing of Tests::Tests *********\n```\n\n对比CTest和Qt的单元测试，Qt会告诉你详细的函数调用和执行过程，CTest更注重结果，不过在Qtcreator的单元测试面板中，会看到更好的输出。\n\n说到底，CTest支持启动了一个带有单元测试的程序，而程序自己使用了Qt提供的单元测试类进行测试。\n","frontmatter":"title: CMake CTests for dde-control-center\ndate: 2019-05-23 17:16:15\ntags: [\n    CMake\n    Linux\n]\ncategories: Linux"}

/***/ }),

/***/ "./static/Dock插件开发.md":
/*!****************************!*\
  !*** ./static/Dock插件开发.md ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"title":"Dock插件开发<等待填坑>","date":"2018-05-23T05:22:12.000Z","tags":"Linux"},"body":"\n从零构建 dde-dock 的插件\n本教程将展示一个简单的 dde-dock 插件的开发过程，插件开发者可跟随此步骤为 dde-dock 创造出更多具有丰富功能的插件。\n\n<!-- more -->\n\n在本教程中，将创建一个可以实时显示用户家目录(~/)使用情况的小工具。\n\n插件的工作原理\ndde-dock 插件本质是一个按 Qt 插件标准所开发的共享库文件(so)。通过 dde-dock 预定的规范与提供的接口，共同完成 dde-dock 的功能扩展。\n\n准备环境\n插件的开发环境可以是任意的，只要是符合 Qt 插件规范及 dde-dock 插件规范的共享库文件，都可以被当作 dde-dock 插件载入。下面以 Qt + qmake 为例进行说明：\n\n安装依赖\n以 Deepin 15.5.1 环境为基础，至少先安装如下的包：\n\n- dde-dock-dev\n- qt5-qmake\n- qtbase5-dev-tools\n- libqt5core5a\n- libqt5widgets5\n- pkg-config\n\n基本的项目结构\n创建必需的项目目录与文件\n插件名称叫做home_monitor，所以创建以下的目录结构：\n\n```\nhome_monitor\n├── home_monitor.json\n├── homemonitorplugin.cpp\n├── homemonitorplugin.h\n└── home_monitor.pro\n ```\n\n","frontmatter":"title: Dock插件开发<等待填坑>\ndate: 2018-05-23 05:22:12\ntags: Linux"}

/***/ }),

/***/ "./static/JavaScript建造者模式.md":
/*!***********************************!*\
  !*** ./static/JavaScript建造者模式.md ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"title":"JavaScript建造者模式","date":"2020-02-01T20:52:58.000Z","tags":"Javascript","categories":"设计模式"},"body":"\n建造者模式就是指将类的构造和其表示分离开来，调用者可以通过不同的构建过程创造出不同表示的对象。主要解决在软件系统中，有时候面临着\"一个复杂对象\"的创建工作，由于需求的变化，这个复杂对象的某些部分经常面临着剧烈的变化，一些基本部件不会变。所以需要将变与不变分离。与抽象工厂的区别：在建造者模式里，有个指导者(Director)，由指导者来管理建造者，用户是与指导者联系的，指导者联系建造者最后得到产品。即建造者模式可以强制实行一种分步骤进行的建造过程。\n\n<!-- more -->\n\n##  建造者模式四要素\n\n1. 产品类Product: 一般是一个较为复杂的对象，也就是说创建对象的过程比较复杂，一般会有较多的代码。\n2. 抽象建造者类Builder: 将建造的具体过程交予它的子类来实现。\n3. 建造者类ConcreateBuilder: 组件产品，返回组件好的产品\n4. 指导类Director: 负责调用适当的建造者来组件产品，指导类一般不与产品类发生依赖关系，与指导类直接交互的是建造者类。\n\n##  建造者模式的优点\n\n建造者模式的封装很好，使用建造者模式可以进行有效的封装变化，在使用建造者模式的场景中，产品类和建造者类是比较稳定的，因此，将主要的业务逻辑封装在指导者类中对整体可以取得比较好的稳定性。\n\n建造者类也很方便扩展，如果有新的需求，只需要实现一个新的建造者类即可。\n\n\n产品类 product.ts\n```\nclass Product {\n    private _name: String;\n    public name(): String {\n        return this._name;\n    }\n    public setName(name: String) {\n        this._name = name;\n    }\n}\n```\n\n抽象建造类 builder.ts\n```\ninterface Builder {\n    _product: Product;\n    setName(name: String): Product;\n    build(): Product;\n}\n```\n\n建造类 concreatebuilder.ts\n```\nclass ConcreateBuilder implements Builder {\n    _product: Product = new Product;\n    public setName(name: String): Product {\n        this._product.setName(name);\n        return this._product;\n    }\n    public build(): Product {\n        return this._product;\n    }\n}\n\nclass HelloworldBuilder extends ConcreateBuilder {\n    public build(): Product {\n        this._product.setName(\"hello world!\");\n        return this._product;\n    }\n}\n```\n\n指导类 director.ts\n```\nclass Director {\n    private _defaultBuilder: ConcreateBuilder = new ConcreateBuilder;\n    private _helloworldBuilder: HelloworldBuilder = new HelloworldBuilder;\n    public buildForDefault(): Product  {\n        return this._defaultBuilder.build();\n    }\n    public buildForHelloworld(): Product {\n        return this._helloworldBuilder.build();\n    }\n}\n```\n\n测试运行:\n```\nlet director = new Director();\nconsole.log(director.buildForDefault().name());\nconsole.log(director.buildForHelloworld().name());\n```\n\n执行结果\n```\nundefined\nhello world!\n```\n\n通过不同的builder就可以构建不同的对象出来，当需求变动的时候，我们只需要扩展出不同的Builder和Director就可以满足。\n","frontmatter":"title: JavaScript建造者模式\ndate: 2020-02-01 20:52:58\ntags: Javascript\ncategories: 设计模式"}

/***/ }),

/***/ "./static/Linux的PAM是什么.md":
/*!********************************!*\
  !*** ./static/Linux的PAM是什么.md ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"layout":"post","title":"Linux的PAM是什么","subtitle":"我的linux日常","date":"2018-04-01T12:16:08.000Z","author":"张丁元","tags":["Linux"]},"body":"\n本文会基础的介绍一下PAM是什么，让你能够回答PAM是什么、PAM有什么用、如何根据需求自己开发PAM模块。\n\n### PAM是什么\n\nPAM即可插拔认证模块。它提供了一个所有服务的中心验证机制，适用于普通登录、ssh登录等需要进行身份认证的系统中。\n\n<!-- more -->\n\n### 为什么使用PAM\n\n为了安全起见，计算机只能给通过授权的用户进行使用，在创建用户时，密码会被加密保存在/etc/passwd中,在用户登录时，重新计算密码，然后在/etc/passwd中进行对比。\n\n除了上面这种，还有其他方式的验证，比如现在经常使用的指纹认证，其核心思想都是检查内容是否匹配。但是这些方案都有一些通病，那就是需要随着应用程序一起编译来使用，如果认证系统有问题，或者更新了算法，就需要重新编译才能使用。\n\n> 鉴于以上原因，人们开始寻找一种更佳的替代方案：一方面，将鉴别功能从应用中独立出来，单独进行模块化设计，实现和维护；另一方面，为这些鉴别模块建立标准 API，以便各应用程序能方便的使用它们提供的各种功能；同时，鉴别机制对其上层用户（包括应用程序和最终用户）是透明的。\n\n### PAM是如何工作的\n\n![](Linux的PAM是什么/PAM结构.png)\n\nPAM采用了分层的模块式开发，提供了四种类型的模块:\n\n- 认证管理\n- 账号管理\n- 会话管理\n- 口令管理\n\n这四个接口就可以满足用户的认证和管理。一个模块可以同时属于多种类型，只需实现对应的函数就可以。\n\n目前PAM的实现有以下三种：\n>1. Linux-PAM: Linux-PAM 涵盖了本文中讨论的所有 PAM。在任何一个 Linux 平台中的 PAM 的主要结构都类似于 Linux-PAM 版本。\n>2. OpenPAM: OpenPAM 是由 NAI 实验室的 Dag-Erling Smorgrav 开发的另一个 PAM 实现，属于 DARPA-CHATS 研究项目。由于它是开源的，因此它主要由 FreeBSD、NetBSD 及应用程序（加上 Mac OS X）使用。\n>3. Java™ PAM 或 JPam: PAM 主要是支持 Linux 和 UNIX 的标准验证模块。JPam 将 Java 部分与普通 PAM 联系了起来。JPam 允许基于 Java 的应用程序使用 PAM 模块或工具（如 auth、account、passwd、session 等）。它提供了 JAAS 和直接 API，并且支持大多数 Unix OS 和架构。\n\n虽然有不同的PAM实现，但是主要功能都是类似的，完成用户的验证。\n\n想要了解更多，可查看IBM的文档库。\n[深入 Linux PAM 体系结构](https://www.ibm.com/developerworks/cn/linux/l-cn-pam/index.html)\n\n### 如何自己开发PAM模块\n\nPAM模块使用一个pam_handle类型的结构当做句柄，也是唯一一个PAM和程序进行通信的结构。\n\n首先在编写的服务模块的源程序里要包含下列头文件：\n\n```\n#include <security/pam_modules.h>\n```\n\nPAM模块是一个个的so动态库。PAM会通过dlopen来装载这些so。四个模块分别需要实现对应的方法，PAM会根据配置文件来调用这些方法。\n\n每个PAM模块的认证程序都以pam_start开始，以pam_end结束。PAM还提供了pam_get_item和pam_set_item共享有关认证会话的某些公共信息，例如用户名、服务名和密码。应用程序在调用了pam_start以后可以用这些APIs来改变状态信息。实际工作的函数有6个：\n\n模块类型 | 函数 | 功能\n---- | ---- | ----\n认证管理 | PAM_EXTERN int pam_sm_authenticate(pam_handle_t *pamh, int flags, int argc, const char **argv) | 认证用户\n认证管理 |  PAM_EXTERN int pam_sm_setcred(pam_handle_t *pamh, int flags, int argc, const char **argv) | 设置用户证书\n账号管理 | PAM_EXTERN int pam_sm_acct_mgmt(pam_handle_t *pamh, int flags, int argc, const char **argv) | 账号管理\n会话管理 | PAM_EXTERN int pam_sm_open_session(pam_handle_t *pamh, int flags, int argc, const char **argv) | 打开会话\n会话管理 | PAM_EXTERN int pam_sm_close_session(pam_handle_t *pamh, int flags, int argc, const char **argv) | 关闭会话\n口令管理 | PAM_EXTERN int pam_sm_chauthtok(pam_handle_t *pamh, int flags, int argc, const char **argv) | 设置口令\n\n同一个模块可以同时支持不同的类型，可以一个模块全部实现这些方法，也可以实现部分。PAM自带的pam_unix.so就是支持四种类型。\n\n在函数内进行详细的操作，最后返回结果，即可完成整个验证流程。\n\n### 配置PAM\n\nPAM的配置通常在/etc/pam.d/下。\n\n模块将按照在配置文件中列出的顺序被调用，这取决于每个条目允许的 Control_flag 的值。Control_flag 值包括：\n\n> Required：堆栈中的所有 Required 模块必须看作一个成功的结果。如果一个或多个 Required 模块失败，则实现堆栈中的所有 Required 模块，但是将返回第一个错误。\n>\n>Sufficient：如果标记为 sufficient 的模块成功并且先前没有 Required 或 sufficient 模块失败，则忽略堆栈中的所有其余模块并返回成功。\n>\n>Optional：如果堆栈中没有一个模块是 required 并且没有任何一个 sufficient 模块成功，则服务/应用程序至少要有一个 optional 模块成功。\n\n### 在程序中使用PAM进行验证\n\n1. 开发PAM验证模块\n\n```\n#include <security/pam_appl.h>\n#include <security/pam_modules.h>\n#include <stdio.h>\n\n// 只实现账户认证\nPAM_EXTERN int pam_sm_authenticate(pam_handle_t *pamh, int flags, int argc,\n                                   const char **argv) {\n  char *username;\n  char password[256];\n\n  //得到用户名\n  pam_get_user(pamh, &username, \"Username: \");\n\n  // 得到密码\n  printf(\"Password: \");\n  gets(password);\n\n  // 测试判断，如果用户名和密码不相等，就认证失败\n  if (strcmp(username, password) != 0) {\n    return PAM_AUTH_ERR;\n  }\n\n  printf(\"Password is: %s\\n\", password);\n  return PAM_SUCCESS;\n}\n```\n\n编译:\n\n```\ngcc -fPIC -fno-stack-protector -c pam_test_mod.c\nsudo ld -x --shared -o /lib/security/pam_test_mod.so pam_test_mod.o\n```\n\n还需要修改pam的配置，来加载这个so。编辑/etc/pam.d/common-auth\n\n```\nauth [success=1 default=ignore] pam_test_mod.so\n```\n\n这里的success的值需要根据实际情况来调整，必须是所有里面的最大值。\n\n2. 使用模块进行验证\n\n```\n// PAM必须的两个头文件\n#include <iostream>\n#include <security/pam_appl.h>\n#include <security/pam_misc.h>\n\nusing namespace std;\n\nextern int misc_conv(int num_msg, const struct pam_message **msgm,\n                     struct pam_response **response, void *appdata_ptr) {\n\n  return PAM_SUCCESS;\n}\n\nconst struct pam_conv conv = {misc_conv, NULL};\n\nint main(int argc, char *argv[]) {\n  // 初始化\n  pam_handle_t *pamh = NULL;\n  int retval;\n  const char *username = argv[1];\n\n  // 初始化PAM 设置common-auth为验证配置\n  if ((pam_start(\"common-auth\", username, &conv, &pamh)) != PAM_SUCCESS) {\n    return -1;\n  }\n\n  // //认证用户\n  retval = pam_authenticate(pamh, 0);\n\n  cout << (retval == PAM_SUCCESS ? \"SUCCESS\\n\" : \"Failed\\n\") << endl;\n\n  // // 结束PAM\n  if (pam_end(pamh, retval) != PAM_SUCCESS) {\n    cout << \"check_user: failed to release authenticator\\n\" << endl;\n    return -1;\n  }\n\n  return retval == PAM_SUCCESS ? 0 : 1;\n}\n```\n\n编译测试一下:\n\n```\ng++ -o pam_test pam_test.cc -lpam -lpam_misc\nsudo ./pam_test $USER\n```\n\n输出为：\n\n```\n$ ./pam_test test       \nPassword: test\nPassword is: test\nSUCCESS\n```\n\n### 总结\n\n基于PAM认证体系，我们可以根据自己的需求任意的扩展linux账户，linux下的pbis-open，就是基于PAM扩展出来的一个AD域登录模块，它提供了一个pam_lsass.so的文件，来进行账户的验证。我们也可以自己设计一套认证流程，只需要满足上面的接口要求就可以。\n\n> 提供机制，而非策略","frontmatter":"layout:     post\ntitle:      \"Linux的PAM是什么\"\nsubtitle:   \"我的linux日常\"\ndate:       2018-04-01 12:16:08\nauthor:     \"张丁元\"\ntags:\n    - Linux"}

/***/ }),

/***/ "./static/PPA.md":
/*!***********************!*\
  !*** ./static/PPA.md ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"title":"PPA","date":"2017-07-24T16:07:50.000Z","tags":null},"body":"\n也许需要安装dirmngr\n\nmaybe you need install dirmngr\n\n\n追加内容到/etc/apt/sources.list\n\nAppend content to /etc/apt/sources.list\n\n```\ndeb [arch=amd64] https://packages.mkacg.com panda main \n\n```\n\n导入key \n\nimport key\n\n```\nsudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys 3BBF73EE77F2FB2A\n```","frontmatter":"title: PPA\ndate: 2017-07-24 16:07:50\ntags:"}

/***/ }),

/***/ "./static/SAOUTILS.md":
/*!****************************!*\
  !*** ./static/SAOUTILS.md ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"title":"SAOUTILS","date":"2017-07-04T06:20:00.000Z","tags":"linux"},"body":"\n鼠标手势还没想好要怎么实现，流程无法完全确认，这项稍后再做。\n\n主界面有两层构成，半透明全屏黑色背景和菜单。\n\n菜单较为复杂，除了左边是一个大面板，其他部分全部都可以使用一种方式实现。使用Qt的QAbstractItemDelegate、QListView来做列表和界面绘制。\n\n右边则是无限展开的菜单。\n\n每层菜单只是用一个对象，和topbar dock的popup window一样。\n点击每层菜单的时候，计算下一项要显示的位置。\n\n主界面应该是只有左右两部分，除了左边的大面板，右侧全部都是相同结构的菜单，只不过在功能上略有不同。\n\n点击的时候，所有菜单对鼠标点击的地点进行坐标计算，如果在鼠标右侧，则隐藏。如果要显示的菜单是自己，不隐藏。点击时开始timer，松开时停止，timeout以后显示选项。\n\n保持最后一个菜单在最中间的位置，主界面向左或向右用动画移动固定长度。","frontmatter":"title: SAOUTILS\ndate: 2017-07-04 06:20:00\ntags: linux"}

/***/ }),

/***/ "./static/TKL主题优化-转.md":
/*!*****************************!*\
  !*** ./static/TKL主题优化-转.md ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"title":"TKL主题优化 -<转>","date":"2017-08-20T05:05:54.000Z","tags":"Hexo"},"body":"\n[http://suninuni.com/2015/09/30/frontend/hexo/hexo-config/](http://suninuni.com/2015/09/30/frontend/hexo/hexo-config/)\n\n这个主题确实挺好的，我也魔改了一部分来达成自己的目的，添加tags是看的这篇文章。","frontmatter":"title: TKL主题优化 -<转>\ndate: 2017-08-20 05:05:54\ntags: Hexo"}

/***/ }),

/***/ "./static/Topbar.md":
/*!**************************!*\
  !*** ./static/Topbar.md ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"title":"Topbar","date":"2017-06-26T02:32:35.000Z","tags":"linux"},"body":"\n　　topbar的架构参考的是dde-dock，就是一个精简的dock，只有一个方向，一个位置，没有右键菜单，只有插件类型。\n\n<!--more-->\n\n<video controls=\"\" autoplay=\"false\" name=\"media\"><source src=\"https://cache.mkacg.com/t.mp4\" type=\"video/mp4\"></video>\n\n　　计划是用来支持各种各样的方便的插件，比如：\n\n- 活动窗口指示器\n- 多媒体控制器\n- 电源控制\n- 时间控制\n\n计划要完成有：\n\n- shadowsocks\n- vpn控制器\n- 系统资源监视器\n\n剩下的计划待完成的插件由于各种原因，开发比较难，还需要学习一部分知识才可以完成。","frontmatter":"title: Topbar\ndate: 2017-06-26 02:32:35\ntags: linux"}

/***/ }),

/***/ "./static/aria2配置.md":
/*!***************************!*\
  !*** ./static/aria2配置.md ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"layout":"post","title":"aria2配置","subtitle":"以前总是忘了aria2的配置","date":"2016-05-25 23:56","author":"kirigaya","header-img":"home-bg.jpg","tags":["教程"]},"body":"\n\n安装好aria2，然后执行一下内容\n\n    $ sudo nano /etc/systemd/user/aria2.service  \n\n    [Unit]\n    Description=Aria2 Service\n    After=network.target\n\n    [Service]\n    ExecStart=/usr/bin/aria2c --enable-rpc --rpc-listen-all=true   --rpc-secret=secret  --rpc-allow-origin-all  --conf-path=/home/用户名字/.config/aria2/aria2.conf  --input-file /home/用户名字/.config/aria2/session.lock --disk-cache=100M --max-overall-download-limit=0  --split=10 --max-connection-per-server=10 --max-concurrent-downloads=4   --dir=/home/用户名字/Downloads/\n    [Install]\n    WantedBy=default.target\n\n<!--more-->\n\n# 注意\n以上内容需要把用户名字更改成自己的\n\n在用户目录新建三个文件\n\n    touch ~/.config/aria2.conf  \n    touch ~/.config/aria2.session  \n    touch ~/.config/session.lock\n\n~/.config/aria2.conf 里面需要填写以下内容，其他两个文件保持空。\n\n    dir=下载目录【需要自行修改】\n    enable-rpc=true\n\n启动服务  \n\n    systemctl --user enable aria2\n    systemctl --user start aria\n\n浏览器打开：[http://yaaw.qiniudn.com/](http://yaaw.qiniudn.com/ \"aria2\")\n将服务器地址改成\n\n    http://token:secret@127.0.0.1:6800/jsonrpc\n\n然后应该页面的右上角就显示网速了。\n","frontmatter":"layout:     post\ntitle:      \"aria2配置\"\nsubtitle:   \"以前总是忘了aria2的配置\"\ndate:       2016-05-25 23:56\nauthor:     \"kirigaya\"\nheader-img: \"home-bg.jpg\"\ntags:\n    - 教程"}

/***/ }),

/***/ "./static/cpp-smart-pointer.md":
/*!*************************************!*\
  !*** ./static/cpp-smart-pointer.md ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"title":"智能指针","s":"cpp-smart-pointer","date":"2018-08-29T09:43:17.000Z","tags":"C++","categories":"C++"},"body":"\n\n其实一直都对智能指针的应用场景不清楚，项目中也很少用到，今天在 [@zccrs](https://zccrs.com) 大佬的帮助下，大概理解了智能指针的作用和应用场景。\n\n<!-- more -->\n\n# 设计思想\n\n智能指针依赖一种叫引用计数的手段来协助管理对象指针，通过引用计数为0时删除对象指针来完成内存的释放，本质上是通过栈对象来管理堆对象的一种方法。\n\n## 传统做法\n\n```\nvoid test() {\n    Test* t = new Test;\n    ...\n    if (...) {\n        throw exception();\n    }\n\n    delete t;\n}\n```\n\n当出现异常时，delete将不会被执行到，t也就泄露了。虽然我们可以在异常那里把delete给加上，但是在较为大型的项目中，如果对代码进行review来排查这种错误，将会是非常麻烦的一件事，所以为了避免内存泄漏，发明了基于引用技术的智能指针。\n\n## 智能指针做法\n\n```\nvoid test() {\n    std::unique_ptr<Test> t(new Test);\n    ...\n    if (...) {\n        throw exception();\n    }\n}\n\n```\n\n如果不关心std::unique_ptr是什么，这段代码无意是糟糕的，new出来的Test对象根本没有地方被删除，内存泄露了。\n\n但是不必担心，指针已经由std::unique_ptr来管理了，根本不会发生内存泄漏，对象将在离开函数作用域以后被删除。\n\n这就是智能指针的方便之处。\n\n# 智能指针的基本实现\n\n智能指针都通过模板编程来实现，模板是C++的另一大功能，可以使我们更关心实现而不需要关心具体的对象，通过更加抽象的方式来编写程序。\n\n智能指针有两层，里层用来保存对象的指针和引用计数，外层用来调用里层来控制引用计数。\n\n里层的辅助类\n```\ntemplate<typename T>\nclass P_ptr {\n    private:\n        friend class Pointer<T>;\n        P_ptr(T t)\n        : pointer(t)\n        , count(1)\n        {\n\n        }\n\n        uint count;\n        T pointer;\n}\n```\n\n外层的控制类\n\n```\ntemplate<typename T>\nclass Pointer {\n    public:\n        Pointer(T t)\n        : m_ptr(new P_ptr(t))\n        {\n\n        }\n\n        Pointer(const Pointer &pointer)\n        : m_ptr(pointer.m_ptr)\n        {\n            ++m_ptr->count;\n        }\n\n        Pointer& operator=(const Pointer &pointer) {\n            ++pointer->count;\n            if (--m_ptr->count == 0) { // 应对自赋值\n                delete m_ptr;\n            }\n            m_ptr = pointer->m_ptr;\n            return *this;\n        }\n\n        ~Pointer() {\n            if (--m_ptr->count == 0) {\n                delete m_ptr;\n            }\n        }\n\n    private:\n        P_ptr m_ptr;\n}\n```\n\n通过重写控制类的拷贝构造函数和赋值运算符重载来更新引用计数。\n\n使用实例\n\n```\nvoid test() {\n    Pointer<Test> t(new Test); // 引用计数目前是1\n    Pointer<Test> t1 = t; // t的引用计数是2，t1的引用计数也是2\n}\n\n// 离开作用域，t被删除，引用计数是1. t1被删除，引用计数为0，Test被删除，内存没有泄露。\n```\n\n这样我们就有一个简单的智能指针了，不过他还存在一些问题，比如循环引用导致内存泄漏，没有->和*的操作运算符等。所以我们需要更强大的智能指针来帮助我们。\n\n# 几种智能指针的介绍\n\n标准库提供了几个针对不同方面使用的智能指针，以满足我们的需求。\n\n- unique_ptr\n  > 只允许一个所有者，除非确信你需要共享该指针，则应该使用```shared_ptr```。可以转移到新的所有者，但是不会复制和共享。\n- shared_ptr\n  > 采用引用计数的智能指针，如果你想将一个原始指针分配给多个所有者，请使用该智能指针，直到```shared_ptr```所有者超出了范围或放弃所有权，才会删除原始指针，大小为两个指针，一个用于对象，一个用于引用计数。\n- weak_ptr\n  > 结合```shared_ptr```使用的特殊智能指针，提供一个或多个```shared_ptr```实例所拥有的对象的访问，但是不会增加引用计数。如果你想观察某个对象，但是不需要保持活动状态，则可以使用该智能指针。在某些情况下，需要断开```shared_ptr```实例间的循环引用。\n\n# 如何正确的选择智能指针\n\n智能指针只需要区分需不需要共享使用，如果外部需要使用这个对象，使用```shared_ptr```，否则就使用unique_ptr进行独占使用。\n\n# 陷阱和坑\n\n- 不要使用相同的内置指针来初始化多个智能指针\n- 不要主动回收智能指针内原始指针的内存\n- 不要使用智能指针的get来初始化或者reset另一个智能指针\n- 智能指针管理的资源只会默认删除new分配的内存，如果不是new分配的，则需要使用删除器","frontmatter":"title: 智能指针\ns: cpp-smart-pointer\ndate: 2018-08-29 09:43:17\ntags: C++\ncategories: C++"}

/***/ }),

/***/ "./static/cpp-sort.md":
/*!****************************!*\
  !*** ./static/cpp-sort.md ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"title":"使用标准库std::sort函数进行排序","s":"cpp-sort","date":"2019-12-26T17:24:23.000Z","tags":null,"categories":null},"body":"\nstd的sort方法接受两个迭代器begin和end。通过迭代器来抽象元素的访问，隐藏内部实现。\n\n<!-- more -->\n\n这是一个简单的例子:\n\n```\nstd::list<int> list {\n    0,\n    4,\n    2,\n    1,\n    3,\n};\n\nstd::sort(list.begin(), list.end());\n```\n\n结果就是list被排序了，至于使用了什么排序算法，我们并不需要关心。实际上标准库会通过元素的数量来决定使用什么算法，基于Introspective Sorting(内省式排序)。\n它是一种混合式的排序算法：\n\n- 在数据量很大时采用正常的快速排序，此时效率为O(logN)。\n\n- 一旦分段后的数据量小于某个阈值，就改用插入排序，因为此时这个分段是基本有序的，这时效率可达O(N)。\n\n- 在递归过程中，如果递归层次过深，分割行为有恶化倾向时，它能够自动侦测出来，使用堆排序来处理，在此情况下，使其效率维持在堆排序的O(N logN)，但这又比一开始使用堆排序好。\n\n默认情况下排序是升序排序，既结果从小到大，我们可以通过使用std::equal_to<T>、std::not_equal_to<T>、std::greater<T>、std::less<T>、std::greater_equal<T>和std::less_equal<T>来控制排序。\n\n以上是通过标准库内置的一些方式来控制排序，且适用于元素已实现了自定义比较(Compare)的要求。\n\n比较 (Compare) 是一些标准库设施针对用户提供的函数对象类型所期待的一组要求。\n\n对满足比较 (Compare) 的类型的对象运用函数调用操作的返回值，当按语境转换成 bool 时，若此类型所引入的严格弱序关系中，该调用的第一实参先于第二实参，则生成 true，否则生成 false。\n\n与任何二元谓词 (BinaryPredicate) 相同，不允许该表达式的求值通过解引用的迭代器调用非 const 函数。\n\n用人话来说就是，Compare必须提供出对比结果。\n\n看一个例子:\n\n```\nstruct Test {\n    int i;\n}\n\nstd::list<Test> list {\n    new Test(2),\n    new Test(1),\n    new Test(4),\n    new Test(3),\n    new Test(5),\n};\n\nstd::sort(list.begin(), list.end(), [=] (const Test& test1, const Test& test2) -> bool {\n    return test1.i < test2.i;\n});\n```\n\n这个例子提供了一个Compare，通过lambda来提供自定义的对比函数，返回值必须是bool，否则将不满足对比函数的要求。\n\n通过以上三种方式可以看出，标准库的sort函数可以很方便的为使用者提供标准对比和自定义对比。如果元素自己已实现operator<，则只需要使用标准库内置的对比函数即可，但是大部分情况其实并不会涉及到元素的排序，仅在临时情况下需要列表有序，所以我个人倾向于通过lambda提供Compare函数来完成列表的排序。\n\n[std::sort](https://zh.cppreference.com/w/cpp/algorithm/sort)\n[知无涯之std::sort源码剖析](http://feihu.me/blog/2014/sgi-std-sort/)\n","frontmatter":"title: 使用标准库std::sort函数进行排序\ns: cpp-sort\ndate: 2019-12-26 17:24:23\ntags:\ncategories:"}

/***/ }),

/***/ "./static/debug了两天，只删了一行代码.md":
/*!************************************!*\
  !*** ./static/debug了两天，只删了一行代码.md ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"title":"debug了两天，只删了一行代码","date":"2017-08-16T18:25:39.000Z","tags":null},"body":"\n前言： 项目一定要留一些文档！！ 修bug前一定要知道所有的流程！！！\n\n<!-- more -->\n\n这两天一直在修一个用户切换的bug，众所周知，deepin的多用户切换一直都不是正常工作的，确切来说是压根没有正常工作，还好用户不是经常切换，不然早就收到一大波的报告了。\n\ndde-session-ui项目中包含了以下软件：\n\n* dde-lock\n* dde-shutdown\n* dde-osd\n* lightdm-deepin-greeter\n* dde-switchtogreeter\n* dde-suspend-dialog\n* dde-warning-dialog\n* dde-welcome\n* dde-wm-chooser\n* dde-lowpower\n* dde-offline-upgrader\n\n大部分项目根据名字就可以知道是做什么的，这是一个软件组的集合。\n而dde-lock和lightdm-deepin-greeter二者有大量重复的功能和代码，这是它俩的工作性质决定的。\n\n>lightdm-deepin-greeter: display-manager启动的实体，登录的界面是它负责的。\n\n>dde-lock： 用户层面的屏幕锁定，基于我们的设计，和lightdm-deepin-greeter是大致相同的布局。\n\n而且都包含了用户密码的验证，用户的切换，但是二者工作的层面是不同的，为了方便切换，就有了dde-switchtogreeter，用来协调二者的工作，只需要提供用户名就可以切换。\n\n然而，虽然这样的想法是很好的，可是当初并没有人写文档，随着人员的变动，现在公司应该没有一个人是比较完整了解整个的工作流程了，用户切换的bug也就这样被留下来了。\n\n上次修复用户切换的问题，是发现登录以后lightdm-deepin-greeter没有退出，由于不是很清楚linux的登录流程，再加上代码中有不工作的退出代码，当时就改好了退出的问题，这样就引入了第二个问题，而这个问题，就导致了两天三个人在一直查找问题所在。\n\n这次的问题是发现一直切换greeter，会导致Xorg一直在开新的display，这就很奇怪了，正常来说是不会一直创建才对。\n\n最开始以为是dde-switchtogreeter的问题，毕竟切换是它在做，dde-switchtogreeter是单文件的c代码，代码没有任何的说明，真的是为切换而生，我从main函数开始自己走了好几遍的流程，一边看着d-feet的数据来验证，然而只发现了一个小问题，整个代码是没啥问题的。\n\n最后在后端大佬的帮助下，知道了display-manager会自己退掉greeter，不需要自己退，然后我就想起来了以前改的地方，赶紧把退出代码删掉，重新编译，问题得到了解决。\n\n如果我知道display-manager的工作流程，也许这个问题就不会拖两天了。","frontmatter":"title: debug了两天，只删了一行代码\ndate: 2017-08-16 18:25:39\ntags:"}

/***/ }),

/***/ "./static/deepin待机后键盘和触摸板无法使用的解决方法.md":
/*!********************************************!*\
  !*** ./static/deepin待机后键盘和触摸板无法使用的解决方法.md ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"title":"deepin待机后键盘和触摸板无法使用的解决方法","date":"2018-06-25T06:01:22.000Z","tags":"Linux"},"body":"\n笔记本一直使用的bumblebee来省电，毕竟我也不想笔记本的电只够从一张桌子移动到另一张桌子，但是今天在调待机唤醒后dde-dock崩溃的问题，我需要切换到私有驱动下，因为笔记本使用bumblebee需要使用acpi的参数，否则会见图形就死。\n\n<!-- more -->\n\n一切准备就绪以后，我开始调试dde-dock，通过codedump已经知道崩溃在wifi列表为空时访问了first节点，但是当我开始测试修复的代码时，发生了很意外的事情，恢复待机以后键盘和触摸板无法使用了。\n\n虽然之前我也偶尔会用用私有驱动，但是还没遇到过无法键盘和触摸板无法使用的情况。想到论坛好像也有人报了类似的问题，恢复待机以后无wifi和外置键盘无法使用，刚好可以趁这个机会调试一下。\n\n/var/log/Xorg.0.log里看到了大量的synaptics错误，然后该模块被卸载，键盘则是没看到什么信息。\n\n尝试重新modprobe synaptics模块，但是失败了，然后在/etc/modprobe.d/nvidia.conf里看到了几行配置。\n\n```\n# These aliases are defined in *all* nvidia modules.\n# Duplicating them here sets higher precedence and ensures the selected\n# module gets loaded instead of a random first match if more than one\n# version is installed. See #798207.\n#alias\tpci:v000010DEd00000E00sv*sd*bc04sc80i00*\tnvidia\n#alias\tpci:v000010DEd00000AA3sv*sd*bc0Bsc40i00*\tnvidia\n#alias\tpci:v000010DEd*sv*sd*bc03sc02i00*\t\tnvidia\n#alias\tpci:v000010DEd*sv*sd*bc03sc00i00*\t\tnvidia\n```\n\n似乎是通配出错了，匹配到了键盘和触摸板，然后就无法使用了。刚好deepin 15.6升级了nvidia驱动，所以是现在才会出这个问题。","frontmatter":"title: deepin待机后键盘和触摸板无法使用的解决方法\ndate: 2018-06-25 06:01:22\ntags: Linux"}

/***/ }),

/***/ "./static/docker-aria2c.md":
/*!*********************************!*\
  !*** ./static/docker-aria2c.md ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"layout":"post","title":"docker-aria2c","subtitle":"docker-aria2c","author":"kirigaya","header-img":"home-bg.jpg","tags":["实验室"],"date":"2016-05-31T22:43:54.000Z"},"body":"\n该项目是将aria2c封装进docker并提供服务。\n\n\n    docker pull kirigayakazushin/docker-aria2c\n\n<!--more-->\n\n下载好镜像，然后保存一份运行\n\n    docker run -p 6800:6800 --name docker-aria2c -d \\\n    -v {下载目录的绝对路径}:/aria2/downloads \\\n    imashiro/docker-aria2c\n\n打开浏览器，访问[http://yaaw.qiniudn.com/](http://yaaw.qiniudn.com/)\n输入\n\n    http://token:secret@127.0.0.1:6800/jsonrpc\n\n注意，暂时还无法处理文件的所有权，目前下载好的文件归属root。\n","frontmatter":"layout: post\ntitle: docker-aria2c\nsubtitle: docker-aria2c\nauthor: kirigaya\nheader-img: home-bg.jpg\ntags:\n  - 实验室\ndate: 2016-05-31 22:43:54"}

/***/ }),

/***/ "./static/docker-hexo.md":
/*!*******************************!*\
  !*** ./static/docker-hexo.md ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"layout":"post","title":"docker-hexo","subtitle":"把hexo封装进docker，当做本地工具使用","date":"2016-07-15T04:53:24.000Z","author":"kirigaya","header-img":"home-bg.jpg","tags":["实验室"]},"body":"引用一下基友的话\n>最开始接触 Hexo 的时候是在 Windows 下, 安装过程还算顺利, 因此在初期还整理了6篇关于 Hexo 博客的搭建教程.\n\n>后来转投 Linux 大法, 期间重装电脑无数次, 每一次安装 Hexo 所需要的 nodejs, 和各种插件的时候都是闹心的过程, 玩的多了自然就熟了, Linux 下的安装基本没问题了.\n\n<!--more-->\n\n>然后入职公司, 公司配了 Mac Pro 又需要安装 Nodejs, 以及各种插件, 人傻搞不定啊.., 晚上迷迷糊糊的还 rm -rf /usr/bin 了.., 所以决定放弃在实体机安装 Nodejs 的想法转战到了 Docker.\n\n>来自mashiro.io\n\n他后来更新了一下dockerfile，他觉得以前的思路是错的，现在他要把hexo封装进docker当做工具，又写了几个alias。\n安装docker，然后pull镜像\n\n    docker pull kirigayakazushin/docker-hexo\n\npull镜像以后，写入alias，将docker-hexo当做本地工具。\n\n    alias hexo='docker run -it --rm -p 4000:4000 -v $PWD:/Hexo -v $HOME/.gitconfig:/home/docker/.gitconfig -v $HOME/.ssh:/home/docker/.ssh kirigayakazushin/docker-hexo hexo'\n\n    alias npm='docker run -it --rm -v $PWD:/Hexo kirigayakazushin/docker-hexo npm'\n\n    alias ddnone=\"docker images | grep none | awk '{print \\$3}' |xargs docker rmi\"\n\n然后执行一下命令\n\n    npm install hexo-generator-sitemap --save \\\n    && npm install hexo-generator-feed --save \\\n    && npm install hexo-deployer-git --save\n\n把以上内容写进rc文件，我是用zsh的，所以写入~/.zshrc。\n![zshrc](docker-hexo/zshrc.png)\n\n接下来基本演示一下使用方式。\n\n![ys1](docker-hexo/ys1.png)\n![ys2](docker-hexo/ys2.png)\n![ys3](docker-hexo/ys3.png)\n![ys4](docker-hexo/ys4.png)\n![ys5](docker-hexo/ys5.png)\n","frontmatter":"layout: post\ntitle: docker-hexo\nsubtitle: \"把hexo封装进docker，当做本地工具使用\"\ndate: 2016-07-15 04:53:24\nauthor: \"kirigaya\"\nheader-img: \"home-bg.jpg\"\ntags:\n    - 实验室"}

/***/ }),

/***/ "./static/dreamscene插件开发.md":
/*!**********************************!*\
  !*** ./static/dreamscene插件开发.md ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"title":"dreamscene插件开发<等待填坑>","date":"2018-06-05T05:25:40.000Z","tags":"Linux 填坑"},"body":"\n本篇会介绍一下deepin-dreamscene的插件机制。\n\n<!-- more -->\n\n","frontmatter":"title: dreamscene插件开发<等待填坑>\ndate: 2018-06-05 05:25:40\ntags: Linux 填坑"}

/***/ }),

/***/ "./static/font-config.md":
/*!*******************************!*\
  !*** ./static/font-config.md ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"layout":"post","title":"Archlinux 添加漂亮的字体","subtitle":"想要漂亮的字体吗","date":"2016-04-08T16:54:26.000Z","author":"kirigaya","header-img":"home-bg.jpg","tags":["教程"]},"body":"该教程不能保证适用于所有人的情况。\n字体也不是配置，而是补充了字体。使用的是第三方的源。\n\n<!--more-->\n\n打开/etc/pacman.conf文件，添加以下内容到最底部。\n\n    [infinality-bundle]\n    SigLevel = Never\n    Server = http://bohoomil.com/repo/$arch\n    [infinality-bundle-multilib]\n    SigLevel = Never\n    Server = http://bohoomil.com/repo/multilib/$arch\n    [infinality-bundle-fonts]\n    SigLevel = Never\n    Server = http://bohoomil.com/repo/fonts\n\n执行安装命令:\n\n    sudo pacman -S infinality-bundle infinality-bundle-multilib ibfonts-meta-extended  #（用于64位系统）\n    sudo pacman -S infinality-bundle ibfonts-meta-extended #（用于32位系统）\n\n如果有遇到错误，可以手动添加hosts：\n\n    188.226.219.173 bohoomil.com\n\n会出现很多冲突，选择Y，然后安装。如果中断了，重新执行安装命令。\n\n来自：[如何给任意一款 Linux 发行版添加漂亮的字体-桌面应用|Linux.中国-开源社区][1]\n\n[1]: https://linux.cn/article-3019-1.html \"如何给任意一款 Linux 发行版添加漂亮的字体-桌面应用|Linux.中国-开源社区\"\n","frontmatter":"layout:     post\ntitle:      \"Archlinux 添加漂亮的字体\"\nsubtitle:   \"想要漂亮的字体吗\"\ndate:       2016-04-08 16:54:26\nauthor:     \"kirigaya\"\nheader-img: \"home-bg.jpg\"\ntags:\n    - 教程"}

/***/ }),

/***/ "./static/fuck-taobao.md":
/*!*******************************!*\
  !*** ./static/fuck-taobao.md ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"title":"解决用了xposed后淘宝闪退","s":"fuck_taobao","date":"2019-01-23T10:27:52.000Z","tags":null,"categories":null},"body":"\n反正都用xposed了，肯定也有root权限。\n删除/data/data/com.taobao.taobao/files/bundleBaseline/里的文件，然后设置该目录为500。\n","frontmatter":"title: 解决用了xposed后淘宝闪退\ns: fuck_taobao\ndate: 2019-01-23 10:27:52\ntags:\ncategories:"}

/***/ }),

/***/ "./static/hello.md":
/*!*************************!*\
  !*** ./static/hello.md ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"title":"标题1","date":"2018-12-01T00:00:00.000Z"},"body":"\n正文内容\n\n## test\n","frontmatter":"title: 标题1\ndate: 2018-12-1 00:00:00"}

/***/ }),

/***/ "./static/hexo page move to coding.md":
/*!********************************************!*\
  !*** ./static/hexo page move to coding.md ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"title":"把博客转移到coding","p":"hexo page move to coding","date":"2018-11-09T20:17:32.000Z","tags":null,"categories":null},"body":"\n上周末折腾黑果子的时候，不小心被果子坑爹的磁盘管理坑了，整个home被直接改成HFS+了，本来是打算分配一个空闲分区出来的，当我新建分区以后，从空间分区开始到home，分区全部都变成HFS+了，但是… 空闲分区新建失败，提示我磁盘空间不足，我就重启进deepin打算直接新建一个算了，然后就GG几率了。在windows下看到home已经成果子的文件系统了，然后我用arch的安装盘看了一下，已经无法重新挂载了(成功GG)，然后数据就都没了。\n\n还好我的数据在公司还有一份，私钥也都在，经过一星期的努力复制，大部分数据都恢复了，不过topbar的新功能代码是彻底没了，周五晚上太自信了，没有提交到gayhub上(猛叹气)。\n\n我们现在正在尝试把日常工作转向github的project和看板，每天早上开一下晨会，简单分配一下任务，开完会以后我会把自己的任务写在谷歌日历和task上，然后安排一下任务的先后顺序，我准备把自己的一些做法写到博客上，但是home已经不在了，所以我要先恢复我的博客，刚好国内有人说我博客访问的很慢，我打算国内解析到coding，国外解析到github。\n\n<!-- more -->\n\n首先，创建新的博客目录，用来拉取旧的数据。\n\n```\nmkdir blog && cd blog\n```\n\n初始化git目录。\n\n```\ngit init\n```\n\n添加远程仓库。\n\n```\ngit remote add origin 你的博客git地址\n```\n\n取回origin的backup分支，和本地master合并。因为hexo-git-backup插件只支持master，但是coding只支持master部署page服务，所以需要使用其他分支。\n\n```\ngit pull origin backup:master\n```\n\n拉取了代码以后，我们需要做点其他设置，首先设置上游分支。\n\n```\ngit branch --set-upstream-to=origin/backup master\n```\n\n设置git的默认push策略，可以参考[thekaiway](http://thekaiway.com/2013/07/30/config-your-git-push-strategy/)的文章。\n\n```\ngit config push.default upstream\n```\n\n然后添加coding的git地址。\n\n```\ngit remote add coding 你的git地址\n```\n\n之后就正常使用了，通过npm安装hexo，再安装需要的插件，最后完成了在一台新电脑上恢复hexo博客。\n","frontmatter":"title: 把博客转移到coding\np: hexo page move to coding\ndate: 2018-11-09 20:17:32\ntags:\ncategories:"}

/***/ }),

/***/ "./static/hibernate-for-swapfile.md":
/*!******************************************!*\
  !*** ./static/hibernate-for-swapfile.md ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"title":"使用swapfile来休眠","s":"hibernate for swapfile","date":"2018-12-12T11:01:55.000Z","tags":"Linux","categories":"Linux"},"body":"\n最近deepin要添加休眠功能，但是之前测试的通过swapfile来休眠失败了，所以对正在使用swap分区的用户提供休眠功能。但是昨天我在askubuntu上看到有人发了在ubuntu下通过swapfile休眠的方案，今天试了一下，效果良好，觉得可以考虑给deepin也加上这样的功能。\n\n<!-- more -->\n\n原文链接: [Hibernate and resume from a swap file](https://askubuntu.com/questions/6769/hibernate-and-resume-from-a-swap-file)\n\n具体步骤是通过uswsusp这个包来做的，uswsusp是一组用户空间工具，用于Linux系统上的休眠(挂起到磁盘)和挂起(挂起到RAM或待机)。详细内容可以在ArchWiki上参考。[点这里](https://wiki.archlinux.org/index.php/Uswsusp)\n\n\n先创建一个和内存同等大小的swapfile，为了确保休眠成功，不能小于内存的容量。\n\n```\nsudo fallocate -l 16g /swapfile # 我的机子是16G，具体自己修改\nsudo chmod 600 /swapfile\nsudo mkswap /swapfile\nsudo swapon /swapfile\necho '/swapfile swap swap defaults 0 0' | sudo tee -a /etc/fstab\n```\n\n安装用户空间软休眠(Userspace Software Suspend)包\n\n```\nsudo apt install uswsusp\n```\n\n创建需要的配置文件，只需要创建文件即可。\n\n```\nsudo touch /etc/uswsusp.conf\nsudo dpkg-reconfigure -pmedium uswsusp\n```\n\n这时候终端会提醒是否继续，选择Yes，然后会要求你创建一个密码，设置一个密码继续即可。\n\n此时就可以测试一下功能了，不过我是跳过这个步骤了(比较喜欢作死)。\n\n修改systemd的hibernate服务，使用uswsusp来代替systemd的功能。\n\n```\nsudo systemctl edit systemd-hibernate.service\n```\n\n写入以下内容:\n\n```\n[Service]\nExecStart=\nExecStart=/usr/sbin/s2disk\nExecStartPost=/bin/run-parts -a post /lib/systemd/system-sleep\n```\n\n这时候可以使用systemd的命令来测试的，我表示工作的非常正常。\n\n```\nsystemctl hibernate\n```\n\n执行以后可以看到屏幕上会打印当前保存的进度，然后设备就关机了，此时再开机，等待一会儿以后就看到了背景是我漂亮老婆的锁屏，解锁以后看到工作区还是执行命令前的，一切ok。\n\n\n参考以下内容:\n> https://askubuntu.com/questions/6769/hibernate-and-resume-from-a-swap-file\n\n> https://wiki.archlinux.org/index.php/Uswsusp\n","frontmatter":"title: 使用swapfile来休眠\ns: hibernate for swapfile\ndate: 2018-12-12 11:01:55\ntags: Linux\ncategories: Linux"}

/***/ }),

/***/ "./static/how-to-use-LNMP-on-deepin.md":
/*!*********************************************!*\
  !*** ./static/how-to-use-LNMP-on-deepin.md ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"title":"如何在Deepin上使用LNMP","date":"2019-02-21T10:11:15.000Z","tags":["LNMP","Linux","Deepin","Web"],"categories":["Linux"],"author":"Lorem Ipsum","url":"http://generator.lorem-ipsum.info"},"body":"\n为了节省读者的时间，我先简述一下阅读这篇文章需要了解的知识。\n\n这篇文章将基于Docker来构建nginx、php和mysql来搭建LNMP环境，和其他教程有所不同的是，需要有一定的Docker基础。\n\n<!-- more -->\n\nDocker是一个不错的工具，使我们不需要虚拟机那样的庞然大物就可以轻松的隔离运行的程序，这要感谢Linux的资源分离机制，避免启动一个虚拟机造成了大量资源浪费。\n\n首先需要在Deepin上安装Docker，添加Docker的deb仓库，并安装docker-ce。\n\n创建文件\n```\nsudo nano /etc/apt/sources.list.d/docker.list\n```\n写入\n```\ndeb [arch=amd64] https://download.docker.com/linux/debian jessie edge\n```\n\n刷新一下仓库就可以安装了。\n\n```\nsudo apt update && sudo apt install docker-ce docker-compose\n```\n\n安装完成后重启一下系统，准备工作就算完成了一半了。\n\n在家目录创建一个Projects目录，当做我们LNMP的工作目录，创建一个名叫*docker-compose.yaml*的文件，这是docker-compose的配置文件，我们通过docker-compose这个工具来管理我们的Docker容器。\n\n所有的镜像均采用最新版本，nginx(1.15.8)，php(7.3.2)，mysql(8.0.15)，如有需要，自行选择不同版本的镜像。\n\n注意PHP7已经不支持mysql扩展，使用内置的MySQLnd。\n\n写入以下配置文件：\n\n```\nversion: '3'\n\nservices:\n  nginx:\n    # 设置容器名字\n    container_name: \"nginx\"\n    # 采用最新的nginx\n    image: nginx:latest\n    # 绑定80端口\n    ports:\n        - \"80:80\"\n    # 添加php容器的依赖\n    depends_on:\n        - \"php\"\n    # 绑定数据目录\n    volumes:\n        - \"./volumes/nginx/conf.d:/etc/nginx/conf.d\"\n        - \"./volumes/html:/usr/share/nginx/html\"\n    restart: always\n\n  php:\n    # 设置容器名字\n    container_name: \"php\"\n    # 采用最新的php\n    image: php:fpm\n    # 绑定端口\n    ports:\n        - \"9000:9000\"\n    # 绑定数据目录\n    volumes:\n        - \"./volumes/html:/var/www/html\"\n    restart: always\n\n  mysql:\n    # 设置容器名字\n    container_name: \"mysql\"\n    # 采用最新的mysql\n    image: mysql:latest\n    # 绑定端口\n    ports:\n        - \"3306:3306\"\n    # 设置环境变量\n    environment:\n        - MYSQL_ROOT_PASSWORD=(自己设置密码)\n    # 绑定数据目录\n    volumes:\n        - \"./volumes/mysql:/var/lib/mysql\"\n    restart: always\n```\n\n创建nginx的配置文件，编辑 *./volumes/nginx/conf.d/nginx.conf* ：\n\n```\nserver {\n    listen       80;\n    server_name  localhost;\n    location / {\n        root   /usr/share/nginx/html;\n        index  index.html index.htm index.php;\n    }\n    error_page   500 502 503 504  /50x.html;\n    location = /50x.html {\n        root   /usr/share/nginx/html;\n    }\n    location ~ \\.php$ {\n        fastcgi_pass   php:9000;\n        fastcgi_index  index.php;\n        fastcgi_param  SCRIPT_FILENAME /var/www/html/$fastcgi_script_name;\n        include        fastcgi_params;\n    }\n}\n```\n\n创建php测试文件，编辑 *./volumes/html/index.php* :\n\n```\n<?php\nphpinfo();\n?>\n```\n\n启动docker，第一次需要拉取一下镜像:\n\n```\ndocker-compose up --build -d\n```\n\n等全部结束以后，就可以访问localhost看到php的信息了。\n\n通过Docker的方法来使用LNMP，不污染宿主机环境，不会再因为各种依赖问题而搞坏系统，这恰恰是新手容易犯的错误，使用Docker，方便你我。\n","frontmatter":"title: 如何在Deepin上使用LNMP\ndate: 2019-02-21 10:11:15\ntags:\n  - LNMP\n  - Linux\n  - Deepin\n  - Web\ncategories:\n  - Linux\nauthor: Lorem Ipsum\nurl: http://generator.lorem-ipsum.info"}

/***/ }),

/***/ "./static/linux下安装vmware及archlinux的安装和配置.md":
/*!**************************************************!*\
  !*** ./static/linux下安装vmware及archlinux的安装和配置.md ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"layout":"post","title":"linux下安装vmware及archlinux的安装和配置","subtitle":"我的linux日常","date":"2016-04-10T17:02:51.000Z","author":"kirigaya","header-img":"home-bg.jpg","tags":["教程"]},"body":"视频中给出了vmware的下载地址和安装过程，系统的下载我也会演示一遍。\n这篇教程会一篇完成，从安装到配置和美化，顺便也总结一下我的成果。\n由于我已经安装过一次vmware了，所以有个脚本的地方没有出现，输入界面上的提示信息即可。\n宿舍太乱，所以就没有录麦克风，操作我会尽量慢一些，然后打字讲述。\n这次大更。。gtk主题还没更新上来，所以界面好丑。  = =。\n安装完成以后安装源里面的vmware-patch。\n","frontmatter":"layout:     post\ntitle:      \"linux下安装vmware及archlinux的安装和配置\"\nsubtitle:   \"我的linux日常\"\ndate:       2016-04-10 17:02:51\nauthor:     \"kirigaya\"\nheader-img: \"home-bg.jpg\"\ntags:\n    - 教程"}

/***/ }),

/***/ "./static/my-life.md":
/*!***************************!*\
  !*** ./static/my-life.md ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"layout":"post","title":"My Life","subtitle":"我的linux日常","date":"2016-03-25T11:56:08.000Z","author":"kirigaya","header-img":"my-life.jpg","tags":["日常"]},"body":"这是我用markdown写的第一篇文章(水文)，先来个自我介绍吧，我是小竹，对没错，是小竹，不是竹子，不是竹酱，更不是竹基。\n\n<!--more-->\n\n我玩linux应该有五六年了吧，初二的时候接触的，不过很多年都保持在换各种发行版上，并没有真正意义的玩。上了大学以后，接触的更多了，玩的也更嗨了。\n现在也用上arch+btrfs+uefi了，各种叼炸天。\nirc里面也经常学习【看别人装逼。\n依旧是英语渣渣，数学渣渣，看到win32api，我直接放弃win编程了，我的智商也就玩玩wpf了。\n下面就贴几张我的日常截图。\n<!-- more -->\n**My Computer info**\n<pre><code>\nkirigayaloveyousei@linuser\nOS: Arch Linux\nKernel: x86_64 Linux 4.4.5-1-ARCH\nackages: 1092\nShell: zsh 5.2\nResolution: 1366x768\nWM: Mutter(DeepinGala)\nWM Theme: Adwaita\nGTK Theme: Arc-OSX [GTK2/3]\nIcon Theme: deepin\nFont: Noto Sans CJK SC Regular 10\nCPU: Intel Core i5-4210U CPU @ 2.7GHz\nRAM: 1980MiB / 3861MiB\n</code></pre>\n![pic1](my-life/深度截图20160403224356.png)\n![pic1](my-life/深度截图20160403224410.png)\n![pic1](my-life/深度截图20160403224524.png)\n![pic1](my-life/深度截图20160403224634.png)\n![pic1](my-life/深度截图20160403233112.png)\n![pic1](my-life/深度截图20160403233229.png)\n","frontmatter":"layout:     post\ntitle:      \"My Life\"\nsubtitle:   \"我的linux日常\"\ndate:       2016-03-25 11:56:08\nauthor:     \"kirigaya\"\nheader-img: \"my-life.jpg\"\ntags:\n    - 日常"}

/***/ }),

/***/ "./static/page.md":
/*!************************!*\
  !*** ./static/page.md ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"layout":"post","title":"标题","subtitle":"字幕","date":"2016-03-25T00:00:00.000Z","author":"kirigaya","header-img":"模板","tags":["模板"]},"body":"\n\n\n<!--more-->\n","frontmatter":"layout:     post\ntitle:      \"标题\"\nsubtitle:   \"字幕\"\ndate:       2016-03-25 00:00:00\nauthor:     \"kirigaya\"\nheader-img: \"模板\"\ntags:\n    - 模板"}

/***/ }),

/***/ "./static/quick sort for c++.md":
/*!**************************************!*\
  !*** ./static/quick sort for c++.md ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"title":"C++快速排序","p":"quick sort for c++","date":"2018-11-11T16:57:44.000Z","tags":["Program","C++"],"categories":null},"body":"\n快速排序是基于分治思想的排序算法，通过这种策略把列表分为两个子列，重复该过程。是由东尼·霍尔提出，在平均状况下，排序N个数据要O(nlogn)次比较，在最坏情况下则需要O(n^2)，但退化成冒泡的情况比较少见，快速排序比其他排序算法通常情况是最佳的，因为内部使用的循环在很多平台都有优化。\n\n<!-- more -->\n\n快速排序的步骤很简单：\n- 选择一个基准\n- 遍历列表，将小于基准的放在列表左边，大于基准的放在列表右边\n- 递归这个操作\n\n在维基百科上的这张图可以很直观的展示快速排序的过程\n\n![quicksort](Sorting_quicksort_anim.gif)\n\n代码实现:\n\n首先需要一个返回基准的函数，该函数负责从指定的范围中挑选一个位置作为基准，并对范围内列表进行排序，并返回基准所在的位置。\n\n```\nint Division(int a[], int left, int right) {\n    int base = a[left]; // 取第一个数为基准\n    while (left < right) {\n        while (left < right && a[left] > base) {\n            // 从右向左找第一个比基准小的元素\n            --right;\n        }\n        a[left] = a[right]; // 交换位置，把小元素放在左侧\n\n        while (left < right && a[left] < base) {\n            // 从左向右找第一个比基准大的元素\n            ++left;\n        }\n        a[right] = a[left]; // 交换位置，把大元素放在右侧\n    }\n    a[left] = base;\n    return left;\n}\n```\n\nDivision函数只做了最简单的事，找一个基准，并交换左右的元素，使列表左侧均小于基准元素，使右侧均大于基准元素，接下来需要一个函数，使列表趋向最小，直至列表元素剩一(这里我感觉其实有点极限的思想)。\n\n```\nvoid quick_sort(int a[], int left, int right) {\n    if (left < right) {\n        int index = Division(a, left, right); //对列表进行分割\n        quick_sort(a, left, i -1); //对左侧进行排序\n        quick_sort(a, i + 1, right); //对右侧进行排序\n    }\n}\n```\n\n配合上方的gif，就可以很清楚的了解快速排序是如何使用分治法来排序的，通过将大任务拆分成小任务，最终达成完整的排序.\n","frontmatter":"title: C++快速排序\np: quick sort for c++\ndate: 2018-11-11 16:57:44\ntags: [\n    'Program',\n    'C++'\n]\ncategories:"}

/***/ }),

/***/ "./static/sakura.md":
/*!**************************!*\
  !*** ./static/sakura.md ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"layout":"post","title":"sakura","subtitle":"樱花庄的宠物女孩","author":"kirigaya","header-img":"home-bg.jpg","tags":["ACG"],"date":"2016-05-29T11:55:20.000Z"},"body":"![sakura](sakura.jpg)\n这是我比较喜欢的一部动漫。\n\n[《樱花庄的宠物女孩》](\"http://baike.baidu.com/link?url=z8biExJdMd0fG7ZdoFfYBak4HQhtLZJIRgZ4bA1PtM1DPQwkBFcbEygmLIMZQKqI-SSfdT6Wwo8yzUNMXrgq_Q0OCP8kPcc83LdJgnDIiCu\")\n\n我的域名也是来自女主角的名字，椎名真白（椎名 ましろ）\n\n<!--more-->\n\n这部番怎么说呢，对我个人的影响是很大的，当年喜欢编程可能是因为《高达seed》的基拉大和说自己精通编程，然后我就打开了新世界的大门。现在喜欢游戏开发，可能就是因为男主角。\n\n我也喜欢和朋友们一起奋斗，留下美好的回忆。\n\n我也担心会失败，既然做了，就想要做到最好。\n\n其实就在眼前，明明就在伸手可及的地方，但那距离却总让人觉得像是永远。\n\n我发现了，无聊的不是这段时光，而是和别人相似的自己\n\n是啊 果然和别人一起创作是最开心的，虽然有时会令人沮丧，但那是无法避免的，因为我没有技术和经验。丽塔和椎名在一起了十年，虽然椎名的才能是压倒性的 但她还是继续努力着，与她相比 我和椎名见面才不过半年，明明还什么都没做，就沮丧失去自信实在是太厚脸皮了。没关系的 一定能成功。集合了樱花庄全员的力量，一定能成为一部了不起的作品，椎名已经不是一个人了，是怀有相同目标并一同前进着的伙伴。我也要 尽力去做自己能做到的事，即使只是一点点也好 为了去接近真白。\n\n无论普通人多么努力却无法超过那些天才，天才们只要无意的一个举动就能获得别人万分辛苦都得不到的东西。\n\n对啊，有很多人都有我从未拥有过的东西，可能那就是别人的天赋吧，而我的自己天赋就是没有天赋。天赋这东西是自己拥有别人不拥有的，可是我却不知道我拥有什么。想一想我的二十年人生可真是失败，连普通都算不上，知识没有储存那么多，还天真的以为自己能做些什么。这个世界的框架早已固定，而我就是被刷下来的人。\n\n给自己定下的目标，几乎都没有完成，总是半途放弃。前阵子还想通过游戏开发去快点赚些钱，可是家里说让我先奋斗奋斗，不要找眼前会赚很多钱的工作。我相信这是前辈总结出来的经验。\n\n人生还是太浮躁了，这个社会也是浮躁的，如果不能冷静下来，最后还是会脱离框架。\n\n<iframe frameborder=\"no\" border=\"0\" marginwidth=\"0\" marginheight=\"0\" width=330 height=300 src=\"http://music.163.com/outchain/player?type=0&id=391004793&auto=1&height=430\"></iframe>\n","frontmatter":"layout: post\ntitle: sakura\nsubtitle: 樱花庄的宠物女孩\nauthor: kirigaya\nheader-img: \"home-bg.jpg\"\ntags:\n  - ACG\ndate: 2016-05-29 11:55:20"}

/***/ }),

/***/ "./static/test.md":
/*!************************!*\
  !*** ./static/test.md ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"title":"标题","date":"2017-05-15T00:00:00.000Z","author":"justforlxz"},"body":"\n正文内容\n\n## test\n","frontmatter":"title: 标题\ndate: 2017-05-15 00:00:00\nauthor: justforlxz"}

/***/ }),

/***/ "./static/topbar-PPA.md":
/*!******************************!*\
  !*** ./static/topbar-PPA.md ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"title":"topbar PPA","date":"2017-07-20T13:37:51.000Z","tags":null},"body":"\n自己搭了一个仓库，提供deepin-topbar及相关依赖的包。\n\nI created a repository,provide deepin-topbar and dependencies.\n\n<!-- more -->\n\n也许需要安装dirmngr\n\nmaybe you need install dirmngr\n\n# 追加内容到/etc/apt/sources.list\n\nAppend content to /etc/apt/sources.list\n\n```\ndeb [arch=amd64] https://packages.mkacg.com panda main \n\n```\n\n# 导入key \n\nimport key\n\n```\nsudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys 3BBF73EE77F2FB2A\n```\n\n# 刷新列表，进行安装\n\nthen, refresh list and install\n\n``` \nsudo apt update && sudo apt install deepin-topbar \n```","frontmatter":"title: topbar PPA\ndate: 2017-07-20 13:37:51\ntags:"}

/***/ }),

/***/ "./static/use google calendar to finishe work.md":
/*!*******************************************************!*\
  !*** ./static/use google calendar to finishe work.md ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"title":"使用Google日历安排工作任务","p":"use google calendar to finishe work","date":"2018-11-09T21:15:45.000Z","tags":null,"categories":null},"body":"\n目前我们正在尝试把工作的分配和讨论放在github上进行，这样可以使我们的用户和开发者更容易接触到我们，可以提bug和对需求进行讨。\n\n但是使用起来还是有些不便，比如使用tower进行任务分配的时候，可以方便的移动一个任务到某个分类，或者指派一个时间。但是github上是基于issue的，并不是为了做这种事来设计的，所以需求上有一些出入。但是[@hualet](https://github.com/hualet)大佬根据github的api写了一个bot来做一点微小的事，当一个issue的assignees只剩QA的同事时，issue会被bot移动到测试栏中，只剩一个开发同事时(基本上是负责该任务的开发者)，会被移动到开发栏中。\n\n但是因为不能做到比如今天、明天、下周等时间的显示，所以任务只能通过每天开会来口头告知时间，但是这并不妨碍我进行自己的任务时间安排。请出世界第一的神器(日历)。\n\n<!-- more -->\n\n我选择使用谷歌日历，~~才不是因为它有网页还有安卓客户端【哼~~\n\n谷歌日历上支持新建三种类型，分别是活动、提醒和任务。活动是开始时间明确，但是结束时间未知的类型，适合用作对时间不严格的情况。提醒则是在活动的基础上添加了提供功能，在活动即将开始时发送通知提醒。任务则是熟悉的ToDoList，适合用来分配今天一定要做，但是时间未知的事。\n\n我添加了每天的开会提醒，再开完会以后，我会把身上的新任务创建成task，然后再添加大概的活动来确定一下要完成的task。把今天没有时间做的task移动到明天，留在当天的task尽量要当天完成，可以得到今天的任务列表和延期列表，让我对要做的事有完整的控制。\n\n谷歌日历的日视图和周视图会显示一条线，告诉你现在的时间，应该进行什么活动了。\n\n![activity](activity.png)\n\n![task](task.png)\n\n![week](week.png)\n\n在手机上需要使用两个app，Google calendar和Google task，活动和提醒需要calendar，task则需要单独使用一个app，只有网页上才是整合的。\n\n![android-calendar](android-calendar.png)\n\n![android-task](android-task.png)\n\n![day](day.png)\n\n因为我也是才开始用日历来分配任务的时间，所以记录的内容并不多，我也在摸索如何使用这些功能，但是我觉得使用日历来记录和管理时间是非常不错的一件事，我可以通过看某天的活动来回忆当天所做的事，也可以根据记录的内容来分析自己在某些任务上使用了多少的时间。\n","frontmatter":"title: 使用Google日历安排工作任务\np: use google calendar to finishe work\ndate: 2018-11-09 21:15:45\ntags:\ncategories:"}

/***/ }),

/***/ "./static/use-github-actions-to-depoly-hexo.md":
/*!*****************************************************!*\
  !*** ./static/use-github-actions-to-depoly-hexo.md ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"title":"使用github actions自动部署hexo文章到html仓库","date":"2019-12-09T13:19:11.000Z","tags":null,"categories":null},"body":"\n请先允许我大喊一声：微软牛逼！\n\n本文没有啥含金量，就是简单的说一下如何部署github-actions来自动生成hexo的public，并且再推送到html仓库的。\n\n我的博客仓库一共分为两个，blog仓库是私有的，需要通过我的私钥才能访问，html仓库是公开的，hexo生成的静态内容会被上传到这里。\n\n首先在package.json中添加一些命令，方便我们一键编译和提交:\n\n```\n  \"scripts\": {\n    \"build\": \"hexo clean && hexo g\",\n    \"deploy\": \"yarn run build && hexo d\",\n    \"backup\": \"hexo b\",\n  }\n```\n\n因为CI环境需要提交代码到仓库，所以申请一个个人用的token，访问[https://github.com/settings/tokens](https://github.com/settings/tokens)创建一个新的，勾选上`repo`，生成完token以后，修改一下`_config.yml`中对deploy仓库的url，格式固定为`https://x-access-token:你的token@github.com/你的名字/仓库名.git`,例如我这里是`https://x-access-token:xxxxxxxxxx@github.com/justforlxz/html.git`。\n\n然后新家一个github actions，选择nodejs环境，我们只需要修改最后一个步骤，执行我们自己的命令即可。\n\n- 设置git的用户名和邮箱地址\n- npm install -g yarn\n- yarn run deploy\n\n如果你还有一些其他步骤，可以自行扩展，比如我就有主题相关的操作，具体的内容如下:\n\n```\n    - name: npm install, build, and deploy\n      run: |\n        git config --global user.email \"justforlxz@gmail.com\"\n        git config --global user.name \"justforlxz\"\n        git submodule update --init\n        cd themes/next\n        git checkout dev\n        cd ../../\n        npm install -g yarn\n        yarn\n        yarn run deploy\n```\n\n然后就可以愉快的自动部署了。\n","frontmatter":"title: 使用github actions自动部署hexo文章到html仓库\ndate: 2019-12-09 13:19:11\ntags:\ncategories:"}

/***/ }),

/***/ "./static/use-serial-port-debug-deepin-on-archlinux.md":
/*!*************************************************************!*\
  !*** ./static/use-serial-port-debug-deepin-on-archlinux.md ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"title":"在ArchLinux通过串口调试VMware虚拟机中的deepin","s":"use-serial-port-debug-deepin-on-archlinux","date":"2019-12-26T17:26:13.000Z","tags":"Linux","categories":"Linux"},"body":"\n电脑主板上的接口：进行串行传输的接口，它一次只能传输1Bit。串行端口可以用于连接外置调制解调器、绘图仪或串行打印机。它也可以控制台连接的方式连接网络设备，例如路由器和交换机，主要用来配置它们。消费性电子已经由USB取代串列接口；但在非消费性用途，如网络设备等，串列接口仍是主要的传输控制方式。\n\n<!-- more -->\n\n首先给虚拟机分配一个串口设备，选择Settings->Add->Serial Port。分配好串口设备以后，我们需要选择一个串口设备的调试方式，一个是将输出转向一个文件，或者是通过socket。\n\n如果只是查看方式，选择outpu file即可。如果需要调试，则可以通过socket方式来进行。\n\nsocket方式需要给一个固定的路径分配/tmp/<socket>，我调试的时候给出的是/tmp/vhost，From选择Server，To选择An Application。From的意思是信息从哪里来，信息是虚拟机里的系统发出的，所以这里选择的是Server，如果是反向操作，需要选择Client。To也是有两个选项，第一个是An Virtual Machine，第二个是An Application。用于把消息发送给另外的虚拟机，或者是宿主机的一个应用程序。\n\n安装minicom包，用于进行调试，minicom这个东西，不是太好用，退出方式是先按Ctrl+A，然后按q，有时候还不一定管用，不知道是没接受到，还是按错了。\n\n先minicom -s 进行初始化，选择`Serial port setup`，按A编辑`Serial Device`，这里需要注意一下，通过socket进行调试，需要使用`unix#`前缀，然后加上在虚拟机里写的路径 `unix#/tmp/vhost`。然后保存，选择Exit，退出以后其实重启minicom，就进入minicom的调试界面了，然后此时开启虚拟机，给内核添加一个console=ttyS0的参数，就看到minicom显示输出的信息了，还可以交互。\n\n\n```\n[    3.855725] [drm:vmw_fb_setcolreg [vmwgfx]] *ERROR* Bad regno 254.\n[    3.857125] [drm:vmw_fb_setcolreg [vmwgfx]] *ERROR* Bad regno 255.\ndeepin Login:\n\nCTRL-A Z for help | unix-socket | NOR | Minicom 2.7.1 | VT102 | Offline | unix#/tmp/vhost\n```\n\n此时就可以交互了，用法和tty一样，最后一行是minicom的输出，可以看到CTRL-A Z可以看help，minicom的版本，和访问的串口socket。\n","frontmatter":"title: 在ArchLinux通过串口调试VMware虚拟机中的deepin\ns: use-serial-port-debug-deepin-on-archlinux\ndate: 2019-12-26 17:26:13\ntags: Linux\ncategories: Linux"}

/***/ }),

/***/ "./static/vue-component-props.md":
/*!***************************************!*\
  !*** ./static/vue-component-props.md ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"title":"Vue父子组件传值 —— props & $emit","date":"2019-12-08T21:08:00.000Z","tags":"Vue","categories":"Vue"},"body":"\nVue的父子组件传值比较有意思，父组件通过属性绑定，把自身的值和子组件的一个属性绑定起来，子组件通过props属性接收，该属性类型为数组，是Vue对象中比较少有的类型，data、computer、methods等方法都是对象的形式，props则是数组的形式。父组件通过v-on来监听子组件发出的事件来接收子组件的调用。在这里我是理解成子组件发送信号来通知上层，毕竟调用的是this.$emit来做到的。\n\n<!-- more -->\n\n我们假设子组件名为<hello>，我们通过v-bind来绑定一个值给它。\n\n```\n<template>\n    <div id=\"#app\">\n        // 通过v-bind绑定父子组件的属性\n        <hello v-bind:messageFromParent=\"message\"/>\n    </div>\n<template>\n\n<script lang=\"ts\">\nimport Vue from 'vue';\nimport Hello from './Hello.vue';\nexport default Vue.extend({\n    data: {\n        message: \"this message from parent\"\n    },\n    components: {\n        \"hello\": Hello\n    }\n});\n</script>\n```\n\n子组件hello.vue通过props属性接收，内容是这样的：\n\n```\n<template>\n    <div>\n        {{ messageFromParent }}\n    </div>\n</template>\n\n<script lang=\"ts\">\nimport Vue from 'vue';\nexport default Vue.extend({\n    // 通过props数组接收\n    props: [ \"messageFromParent\" ]\n});\n</script>\n```\n\n这里有个需要注意的地方，父组件给子组件的数据是单向的，虽然子组件也可以修改父组件传入的数据，但是会产生一个错误，并打印在终端里。\n\n那么我们怎么才能修改父组件的值呢？答案是`this.$emit`。\n\n我们给子组件绑定上v-on，来监听子组件的事件。\n\n```\n<template>\n    <div id=\"#app\">\n        // 通过v-bind绑定父子组件的属性，通过v-on监听子组件的属性变化\n        <hello v-bind:messageFromParent=\"message\" v-on:changeParentData=\"changeData\"/>\n    </div>\n<template>\n\n<script lang=\"ts\">\nimport Vue from 'vue';\nimport Hello from './Hello.vue';\nexport default Vue.extend({\n    data: {\n        message: \"this message from parent\"\n    },\n    components: {\n        \"hello\": Hello\n    },\n    methods: {\n        changeData: function(data: string) {\n            message = data;\n        }\n    }\n});\n</script>\n```\n\n子组件只需要发送出修改即可：\n\n```\n<template>\n    <div>\n        <button v-on:click=\"change\">修改父组件数据</button>\n        {{ messageFromParent }}\n    </div>\n</template>\n\n<script lang=\"ts\">\nimport Vue from 'vue';\nexport default Vue.extend({\n    // 通过props数组接收\n    props: [ \"messageFromParent\" ],\n    methods: {\n        change: function() {\n            // 调用this.$emit方法第一个参数是事件的名称，后面全部都是参数。\n            // this.$emit方法其实是自定义了一个事件，通过这种方式来完成子组件向父组件传递消息。\n            this.$emit(\"changeParentData\", \"change data by child\");\n        }\n    }\n});\n</script>\n```\n\n以上就是Vue父子组件传值的一种常用方法，适用于相邻组件的，如果隔代了，那么这种方式就不好用了，中间路过的组件都需要转发这个事件，处理这种情况就需要使用`provide/ inject`了，不过那就是另一篇文章啦。\n","frontmatter":"title: Vue父子组件传值 —— props & $emit\ndate: 2019-12-08 21:08:00\ntags: Vue\ncategories: Vue"}

/***/ }),

/***/ "./static/vue-transitions.md":
/*!***********************************!*\
  !*** ./static/vue-transitions.md ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"title":"添加Vue动画","date":"2019-12-08T08:03:40.000Z","tags":"Vue","categories":"Vue"},"body":"\n以前一直搞不懂动画是怎么做的，它怎么这么神奇，写了一点看不懂的代码，就实现了非常丰富的效果，现在做了三年Qt开发，接触到了Qt的动画类，明白了动画是怎么一会儿事，现在来看当初的css动画代码，也明白了它是如何工作的了。本文会介绍一下Vue提供的组件过渡动画模块——transitions。\n\n<!-- more -->\n\n## 概述\n\nVue在插入、更新和移除DOM元素时，提供了多种不同方式的应用过渡效果。包含以下工具：\n\n- 在css过渡和动画中自动应用class\n- 可以配合第三方动画css类，例如Animae.css\n- 提供钩子函数来使JS操作DOM元素\n- 可以配合使用第三方JavaScript动画库，例如Velocity.js\n\n## 单元素/组件过渡\n\nVue提供了 `transitions` 的封装组件，在下面的情况中，可以给任意元素或组件添加进入和离开的过渡效果。\n\n- 条件渲染 (使用 `v-show`)\n- 按需渲染 (使用 `v-if`)\n- 动态节点\n- 组件根元素\n\n这是一个基本的例子：\n\n```\n<div id=\"app\">\n    <button v-on:click=\"show = !show\">\n    Toggle\n    </button>\n    <transitions name=\"fade\">\n        <p v-if=\"show\"> hello! </p>\n    <transitions>\n<div>\n```\n\n```\nnew Vue({\n    el: \"#app\",\n    data: {\n        show: false\n    }\n});\n```\n\n在head中添加style：\n\n```\n.fade-enter-active,\n.fade-leave-active {\n  transition: opacity .5s;\n}\n\n.fade-enter,\n.fade-leave-to {\n  opacity: 0;\n}\n```\n\n这里有三点需要注意一下，需要动画的元素需要使用transitions节包裹起来，transitions需要一个name，css中需要使用固定的拼写来应用动画，入场动画和离场动画的状态是一致的，所以写在了一组里。\n\n当插入和删除包含在 `transitions` 组件中的元素时，Vue会做以下的事情：\n\n- 自动嗅探组件是否应用了css的过渡或动画，如果有，则在恰当的实际添加/删除css类名。\n- 如果 `transitions` 组件提供了钩子函数，Vue会在恰当的时机调用钩子函数。\n- 如果没有找到css过渡和动画，也没有找到钩子函数，则DOM的操作(插入和删除)在下一帧中立即执行。(注意是指浏览器的逐帧动画，而不是Vue的nextTick机制)\n\n### 过渡的类名\n\nVue的过渡动画一共有6个状态：\n\n1. `v-enter`: 定义进入过渡的开始状态，在元素被插入之前生效，待元素插入以后被移除。\n2. `v-enter-active`: 定义进入过渡生效时的状态，在整个进入过渡的阶段中应用，在元素插入之前生效，在过渡/动画完成后被移除。这个类可以定义过渡时间、延迟和动画曲线。\n3. `v-enter-to`: **在2.1.8版本及以上** 定义进入过渡的结束状态，在元素被插入的下一帧生效(与此同时 `v-enter` 被移除)，在过渡/动画完成后移除。\n4. `v-leave`: 定义离开过渡的开始状态，在离开过渡被触发时立即生效，下一帧被移除。\n5. `v-leave-active`: 定义离开过渡生效时的状态，在整个离开过渡的阶段中应用，在离开过渡触发时立即生效，在过渡/动画完成后立即被移除。这个类可以定义离开过渡的过程时间、延迟和动画曲线。\n6. `v-leave-to`: **在2.1。8版本及以上** 定义离开过渡的结束状态，在离开过渡被触发之后的下一帧被移除(与此同时`v-leave`也被删除)\n，在过渡/动画完成之后移除。\n\n![transitions](https://cn.vuejs.org/images/transition.png)\n\n可以看出一共两组动画，进入和离开的active。并且分别有两个状态，enter和enter-to，这6个状态控制了入场动画和离场动画。(吐槽一下Qt的动画系统，定义一个QAnimation只能做半场动画，想做到Vue这样的要定义两组，或者反向播放)\n\n对于那些正在过渡中切换的类名来说，如果使用了没有`name`属性的`transition`，Vue会使用v-当做默认前缀。为了避免多组动画冲突，我个人建议每一个`transition`组件都提供name属性。\n\n### JavaScript钩子函数\n\n`transition`也提供了钩子函数，使我们可以通过JavaScript来控制DOM元素，一共也包含了8个函数：\n\n1. beforeEnter\n2. enter\n3. afterEnter\n4. enterCancelled\n5. beforeLeave\n6. leave\n7. afterLeave\n8. leaveCancelled\n\n和css上要求的命名保持一致，只是增加了两个取消的接口，当动画被取消的时候被调用。\n\n这些钩子函数可以结合CSS `transition/animations` 使用，也可以单独使用。\n\n> 当只使用JavaScript过渡的时候，必须在 **enter** 和 **leave** 显式调用`done()`进行回调，否则他们将被同步调用，过渡会立即完成。\n\n> 推荐对于仅使用JavaScript过渡的元素添加`v-bind:css=\"false\"`，Vue会跳过CSS的检测，这也可以避免过渡过程中css的影响。\n\n## 列表元素的过渡\n\n以上我分享的都是单元素/组件的过渡，那么问题来了，列表这种通过v-for创建的元素该如何增加过渡效果呢？\n\nVue提供了`<transition-group>`组件，在深入了解之前，需要先介绍一下这个组件的一些特点：\n\n- 不同于`<transition>`，`<transition-group>`会创建一个真实的DOM元素，默认是<span>，可以通过tag属性切换为其他元素。\n- 过渡模式不再可用，因为我们不再相互切换特有的元素\n- 内部元素总是需要提供唯一的key值来进行区分\n- CSS过渡将会应用在内部的元素中，而不是这个组/容器本身\n\n### 列表的进入/离开过渡\n\n```\n<div id=\"app\">\n<button v-on:click=\"add\">add</button>\n<button v-on:click=\"remove\">remove</button>\n<transition-group name=\"group\" tag=\"ul\">\n<li v-for=\"item in items\" v-bind:key=\"item\">\n  {{ item }}\n</li>\n</transition-group>\n</div>\n```\n\n```\nnew Vue({\n\tel: \"#app\",\n\tdata: {\n\t\t\titems: [1,2,3]\n\t  },\n\t  methods: {\n\t  \tadd() {\n\t  \t\tthis.items.push(0)\n\t  \t}\n\t  }\n})\n```\n\n```\n.group-enter,\n.group-leave-to {\n  opacity: 0;\n  transform: translateY(10px)\n}\n\n.group-enter-active,\n.group-leave-active {\n  transition: all 1s;\n}\n```\n\n代码在[这里，点击访问](https://jsfiddle.net/justforlxz/9denwmor/20/)，只实现了添加元素的过渡效果。\n\n希望本文可以帮助你理解Vue是如何处理过渡动画，本文是基于官网的知识和demo所编写的，本文只写了一部分我觉得需要掌握的基本功能，Vue的transition组件还有很多功能等待你的挖掘，[点击前往Vue官网文档](https://cn.vuejs.org/v2/guide/transitions.html)\n","frontmatter":"title: 添加Vue动画\ndate: 2019-12-08 08:03:40\ntags: Vue\ncategories: Vue"}

/***/ }),

/***/ "./static/webhook.md":
/*!***************************!*\
  !*** ./static/webhook.md ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"title":"webhook","date":"2017-07-14T02:52:20.000Z","tags":"linux"},"body":"\nblog现在是用hexo，放在自己的[code](https://code.mkacg.com)网站上。\n\ncode是用无闻大大的gogs搭建的，跑在台式机的docker中，本机跑了很多docker服务，有hexo，有aria2c，有gogs，还有个webserver caddy。\n\ncaddy这东西还是基友 [不爱写博客的mioto](https://mioto.me/)推荐给我的，之前我一直是用nginx的，那配置文件太复杂了，根本玩不来。\n\n写一篇文章，会先提交到code，然后触发webhook，caddy会拉取code中的文章，由于是静态的，所以不需要处理其他的，只需要拉取最新的就可以了。\n\ncaddy的配置\n\n```\nblog.mkacg.com {\n    gzip\n    redir 301 {\n    if {>X-Forwarded-Proto} is http\n        /  https://{host}{uri}\n    }\n    tls kirigaya@mkacg.com\n    root /srv/www/blog\n    git code.mkacg.com/kirigayakazushin/blog {\n        path /srv/www/blog\n        branch gh-pages\n        hook /_webhook xxx\n        hook_type gogs\n        then git pull\n    }\n}\n\n```\n\ngogs上只需要创建一个webhook，地址填写成caddy中的hook地址，加密填写hook后的xxx即可，加密自己设置。\n\n然后就可以提交了。\n\n提交会触发push操作，gogs会根据设置的webhook中的规则，执行和push相关的webhook，webhook会向指定的url发送POST操作，发送的内容中包含了相关信息，caddy会根据相关信息，来处理webhook，执行你规定的操作。","frontmatter":"title: webhook\ndate: 2017-07-14 02:52:20\ntags: linux"}

/***/ }),

/***/ "./static/webpack入门.md":
/*!*****************************!*\
  !*** ./static/webpack入门.md ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"title":"webpack入门","date":"2019-10-14T15:34:52.000Z","tags":"Web","categories":["Web","webpack"]},"body":"\n现在前端开发不像以前一样，只需要写html、css和javascript文件就可以了。现代前端开发讲究工程化。\n\n**什么是工程化？**\n\n工程化即系统化、模块化、规范化的一个过程。\n\n**为什么要工程化？**\n\n工程化是让开发、测试和维护都变得更加可靠和提高效率的方式。\n\n1. 制定规范\n2. 版本管理\n3. 单元测试\n4. 自动化\n\n通过制定流程的方式，规范了开发和测试的流程，让工作有章可循，方便团队协作。\n\n<!--more -->\n\n最初的网页开发，是写好几份的javascript代码和css文件，手动在html中引入的。这样不适合多人协作开发，一旦开发人员多了，不可避免的会造成文件和命名冲突。\n为了避免这些事情的发生，javascript增加了模块的概念。\n\n有好的事情出现，就会有坏的事情发生。\n\n过多的模块导致js文件下载很慢，而且有冗余，为了避免这件事情影响用户体验，webpack横空出世了。\n\nwebpack是一个现代javascript的静态模块打包器。它会递归的构建出依赖图，并根据依赖图来输出应用程序需要的每个模块，然后将所有这些模块打包成一个或多个 bundle。\n\nwebpack有四个核心概念:\n\n- 入口(entry)\n- 输出(output)\n- loader\n- 插件\n\n入口决定了webpack要从哪个文件开始构建依赖图。\n\n看一个简单的例子:\n\n```\nmodule.exports = {\n    entry: './src/index.js'\n}\n```\n\noutput则决定了webpack会在哪里输出生成的bundles，以及如何命名这些bundles。输出目录默认为 `./dist/` 。\n\n```\nconst path = require('path');\n\nmodule.exports = {\n    entry: './src/index.js',\n    output: {\n        path: path.resolve(__dirname, 'dist'),\n        filename: 'bundle.js'\n    }\n}\n```\n\nloader可以让webpack打包非javascript文件，loader可以将所有类型的文件转换为webpack可以识别的有效模块，然后利用webpack的打包能力，对他们进行处理。\n\n```\nconst path = require('path');\n\nmodule.exports = {\n    entry: './src/index.js',\n    output: {\n        path: path.resolve(__dirname, 'dist'),\n        filename: 'bundle.js'\n    },\n    module: {\n        rules: {\n            test: /\\.css$/,\n            use: 'css-loader'\n        }\n    }\n}\n```\n\nrules中的意思是，当require()/impot中被解析为.css的路径时，先使用css-loader转换一下。\n\n我们可以开发新的loader去加载不同的文件，最终都通过webpack来打包到一起。\n\nloader用于转换某些类型的模块，插件则工作的更加广泛。插件的范围包括，从打包优化和压缩，一直到重新定义环境中的变量。插件接口功能极其强大，可以用来处理各种各样的任务。\n\n想要使用一个插件，你只需要 require() 它，然后把它添加到 plugins 数组中。多数插件可以通过选项(option)自定义。你也可以在一个配置文件中因为不同目的而多次使用同一个插件，这时需要通过使用 new 操作符来创建它的一个实例。\n\n```\nconst path = require('path');\nconst HtmlWebpackPlugin = require('html-webpack-plugin'); // 通过 npm 安装\nconst webpack = require('webpack');\n\nmodule.exports = {\n    entry: './src/index.js',\n    output: {\n        path: path.resolve(__dirname, 'dist'),\n        filename: 'bundle.js'\n    },\n    module: {\n        rules: {\n            test: /\\.css$/,\n            use: 'css-loader'\n        }\n    },\n    plugins: [\n        new HtmlWebpackPlugin({template: './src/index.html'})\n    ]\n}\n```\n\n## 总结\n\n通过webpack，我们可以将整个项目都打包为一个文件进行分发，而且还可以进行优化。webpack的出现，将前端的开发和发布彻底的分离开，开发人员可以以各种方式进行开发，通过webpack打包以后输出部署需要的文件。\n","frontmatter":"title: webpack入门\ndate: 2019-10-14 15:34:52\ntags: 'Web'\ncategories: [\n    'Web',\n    'webpack'\n]"}

/***/ }),

/***/ "./static/wsl2的使用体验.md":
/*!*****************************!*\
  !*** ./static/wsl2的使用体验.md ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"title":"wsl2的使用体验","date":"2019-06-16T12:59:59.000Z","tags":"Windows","categories":null},"body":"\nwsl2已经是虚拟机平台了。\n\n<!-- more -->\n\n需要Windows版本在18917及以上，先开启虚拟机平台才能继续，在管理员权限的powershell中执行\n\n```\nEnable-WindowsOptionalFeature -Online -FeatureName VirtualMachinePlatform\n```\n\n对已安装的wsl1进行转换\n\n```\nwsl --set-version <Distro> 2\n```\n\nDistro可以通过 `wsl --list` 查看。\n\n转换需要点时间，完成以后就可以浪起来了。\n\nwsl2新增了一些参数：\n\n- `wsl --set-version <Distro> <Version>`\n\n可以设置某个wsl的版本，1是旧版，2是新版。\n\n- `wsl --set-default-version <Version>`\n\n设置默认的wsl版本，推荐设置一下。\n\n- `wsl --shutdown`\n\n出于某些目的，比如已经完成了任务，不再需要wsl工作在后台，可以手动关闭。\n\n- `wsl --list --quiet`\n\n仅列出分发名称，此命令对于脚本编写很有用，因为它只会输出您已安装的发行版的名称，而不显示其他信息，如默认发行版，版本等。\n\n- `wsl --list --verbose`\n\n显示有关所有分发的详细信息。此命令列出每个发行版的名称，发行版所处的状态以及正在运行的版本。它还显示哪些分发是默认的星号。\n\n当一切准备就绪，我就安装了docker，测试一波。\n\n```\nsudo apt install docker-ce\n```\n\n添加用户到docker组。\n\n```\nsudo usermod -aG docker $USER\n```\n\n```\nsudo service docker --full-restart\n```\n\n已经可以跑docker了，我们来做个测试，请出万能的hello world！\n\n```\ndocker pull hello-world\n```\n\n```\ndocker run --rm hello-world\n```\n\n然后就看到了想要的结果，hello world成功的跑起来了。\n\n```\nHello from Docker!\nThis message shows that your installation appears to be working correctly.\n\nTo generate this message, Docker took the following steps:\n 1. The Docker client contacted the Docker daemon.\n 2. The Docker daemon pulled the \"hello-world\" image from the Docker Hub.\n    (amd64)\n 3. The Docker daemon created a new container from that image which runs the\n    executable that produces the output you are currently reading.\n 4. The Docker daemon streamed that output to the Docker client, which sent it\n    to your terminal.\n\nTo try something more ambitious, you can run an Ubuntu container with:\n $ docker run -it ubuntu bash\n\nShare images, automate workflows, and more with a free Docker ID:\n https://hub.docker.com/\n\nFor more examples and ideas, visit:\n https://docs.docker.com/get-started/\n```\n\n总的来说，因为wsl2改成虚拟机方案了，不过wsl2的启动速度还是挺快的，微软也努力让wsl2和wsl1之间在使用上没有差异。目前微软还没有完成wsl2的网络部分，wsl2和宿主机之间还需要使用专门的ip进行访问，等微软完成wsl2的localhost网络以后，就可以像以前一样直接跑一些网站或者需要端口的服务了。\n\n![网络截图](Snipaste_2019-06-16_21-52-42.png)\n\n来一张合照\n\n![合照](Snipaste_2019-06-16_21-49-15.png)\n\n[点我查看wsl2的发布说明](https://devblogs.microsoft.com/commandline/wsl-2-is-now-available-in-windows-insiders/)\n\n[点我查看如何安装wsl2](https://docs.microsoft.com/en-us/windows/wsl/wsl2-install)\n","frontmatter":"title: wsl2的使用体验\ndate: 2019-06-16 12:59:59\ntags: Windows\ncategories:"}

/***/ }),

/***/ "./static/使用DTK开发.md":
/*!***************************!*\
  !*** ./static/使用DTK开发.md ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"title":"使用DTK开发","date":"2018-01-12T11:05:26.000Z","tags":"Linux DTK"},"body":"\n\n**在阅读本篇文章之前，你需要掌握基本的Qt/C++开发知识。**\n\n<!-- more -->\n\n> **注意：本篇文章基于Deepin平台，其他平台请自行补充依赖关系。**\n\n先安装DTK的依赖关系。\n\n```\nsudo apt install libdtkwidget2 libdtkcore2\n```\n\n新建Qt项目，编辑pro文件，添加项目依赖。\n\n```\nCONFIG += c++14 link_pkgconfig\nPKGCONFIG += dtkwidget\n```\n\nDTK目前有两个组件，一个是提供库功能的core，一个是提供控件的widget。\n\n修改main.cpp,删除QApplication的相关内容，改为DApplication。\n\n> 注意： 使用DTK的组件，需要使用DTK的宏,根据使用的文件来选择对应的宏。\n\n```\nDWIDGET_USE_NAMESPACE\nDCORE_USE_NAMESPACE\n```\n\nDTK使用了deepin自己的qt插件，需要在DApplication前调用。\n\n```\n    DApplication::loadDXcbPlugin();\n    DApplication app(argc, argv);\n```\n\nDApplication中提供了很多方法来设置程序的各种信息，具体请看头文件的定义。\n\n主窗口由DMainWindow提供，新建类，然后添加DMainWindow的头文件和DTKWIDGET的宏。\n\n```\n#include <DMainWindow>\n\nDWIDGET_USE_NAMESPACE\n```\n\n然后修改继承关系，改为继承DMainWindow。DMainWindow提供了一些我们封装的方法。目前为止，该程序的界面已经符合Deepin程序的风格了，我们封装了一些其他控件，使其样式符合我们的风格，如果要在其他Qt程序中使用，也是同样的步骤，载入Qt插件，添加对应的头文件和DTK的宏。\n\n\n","frontmatter":"title: 使用DTK开发\ndate: 2018-01-12 11:05:26\ntags: Linux DTK"}

/***/ }),

/***/ "./static/使用webpack-dev-server来监听项目变化.md":
/*!***********************************************!*\
  !*** ./static/使用webpack-dev-server来监听项目变化.md ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"title":"使用webpack-dev-server来监听项目变化","date":"2019-11-25T17:54:36.000Z","tags":"Vue","categories":"Vue"},"body":"\nwebpack的出现方便了前端开发者，使开发和部署分成了两部分，开发者可以正常根据工程化的要求进行开发，部署时通过webpack实现代码的裁剪和优化。\n\n本次就介绍一个webpack的功能 `webpack-dev-server`\n\n将webpack与提供实时重载的开发服务器一起使用。这仅应用于开发。\n它在后台使用了webpack-dev-middleware，它提供了对Webpack资产的快速内存访问。\n\n<!-- more -->\n\nwebpack-dev-server提供了一个小型的express的http服务器，这个http服务器和client使用了websocket通讯协议，原始文件作出改动后，webpack-dev-server会实时的编译，但是最后的编译的文件并没有输出到目标文件夹。\n\n**注意：启动webpack-dev-server后，在目标文件夹中是看不到编译后的文件的,编译后的文件都保存到了内存当中来加速访问。**\n\n## 启用webpack-dev-server\n\n```\nnpm install -D webpack-dev-server\n```\n\n在webpack.config.js中添加devServer对象：\n\n```\nvar path = require('path');\n\nmodule.exports = {\n  //...\n  devServer: {\n    contentBase: path.join(__dirname, 'dist'),\n    compress: true, // 开启压缩\n    port: 9000 // 指定运行的端口\n  }\n};\n```\n\n然后通过`npx webpack-dev-server`启动，终端上会输出一些信息，一般我们会增加一些参数来使输出更加好看:\n\n```\nwebpack-dev-server --devtool eval-source-map --progress --colors --hot --inline\n```\n\n上面的命令增加一个开发工具 `eval-source-map`，开启了progress进度显示，开启了colors颜色，hot热更新和inline更新模式。上面的参数也可以添加到devServer的属性中。\n\n终端输出的内容如下:\n\n```\n10% building 1/1 modules 0 activeℹ ｢wds｣: Project is running at http://localhost:9000/\nℹ ｢wds｣: webpack output is served from /dist/\nℹ ｢wds｣: Content not from webpack is served from /home/justforlxz/Projects/VueBlog/dist\nℹ ｢wdm｣: Hash: ff9005d9f6ffafd11cd4\nVersion: webpack 4.41.0\nTime: 2938ms\nBuilt at: 11/25/2019 6:03:50 PM\n  Asset      Size  Chunks             Chunk Names\nmain.js  2.09 MiB    main  [emitted]  main\nEntrypoint main = main.js\n[0] multi (webpack)-dev-server/client?http://localhost:9000 (webpack)/hot/dev-server.js ./src/main.ts 52 bytes {main} [built]\n```\n\n我们就可以通过localhost:9000来访问我们的应用了。\n\n需要注意的是，由于我们经常把内容输出到dist目录，但是webpack运行是在项目目录的，访问webpack生成在dist目录的main.js时，需要写上相对于webpack的目录，例如dist/main.js。否则会找不到文件。\n\n如果遇到问题，导航到 /webpack-dev-server 路径，可以显示出文件的服务位置。 例如，http://localhost:9000/webpack-dev-server。\n\n## 配置webpack\n\nwebpack-dev-server支持在服务内部调用中间件对数据进行处理。\n\n### devServer.before\n\n`function (app, server)`\n\n在服务内部的所有其他中间件之前， 提供执行自定义中间件的功能。 这可以用来配置自定义处理程序，例如：\n\n```\nmodule.exports = {\n  //...\n  devServer: {\n    before: function(app, server) {\n      app.get('/some/path', function(req, res) {\n        res.json({ custom: 'response' });\n      });\n    }\n  }\n};\n```\n\n### devServer.after\n\n同devServer.before，在服务内部的所有中间件之后，提供执行自定义中间件的功能。\n\n### devServer.allowedHosts\n\n允许添加白名单服务，允许一些开发服务器访问。\n\n```\nmodule.exports = {\n  //...\n  devServer: {\n    allowedHosts: [\n      'host.com',\n      'subdomain.host.com',\n      'subdomain2.host.com',\n      'host2.com'\n    ]\n  }\n};\n```\n\n模仿 django 的 ALLOWED_HOSTS，以 . 开头的值可以用作子域通配符。.host.com 将会匹配 host.com, www.host.com 和 host.com 的任何其他子域名。\n\n```\nmodule.exports = {\n  //...\n  devServer: {\n    // 这实现了与第一个示例相同的效果，\n    // 如果新的子域名需要访问 dev server，\n    // 则无需更新您的配置\n    allowedHosts: [\n      '.host.com',\n      'host2.com'\n    ]\n  }\n};\n```\n\n### devServer.clientLogLevel\n\n`string: 'none' | 'info' | 'error' | 'warning'`\n\n当使用内联模式(inline mode)时，会在开发工具(DevTools)的控制台(console)显示消息，例如：在重新加载之前，在一个错误之前，或者 模块热替换(Hot Module Replacement) 启用时。默认值是 info。\n\ndevServer.clientLogLevel 可能会显得很繁琐，你可以通过将其设置为 'none' 来关闭 log。\n\n```\nmodule.exports = {\n  //...\n  devServer: {\n    clientLogLevel: 'none'\n  }\n};\n```\n\n### devServer.color  - 只用于命令行工具(CLI)\n\n只在终端下启用，启用/禁用控制台的彩色输出。\n\n```\nwebpack-dev-server --color\n```\n\n### devServer.compress\n\n`boolean`\n\n一切服务都开启gzip压缩。\n\n```\nmodule.exports = {\n  //...\n  devServer: {\n    compress: true\n  }\n};\n```\n\n### devServer.contentBase\n\n`boolean: false string [string] number`\n\n告诉服务器从哪个目录中提供内容。只有在你想要提供静态文件时才需要。devServer.publicPath 将用于确定应该从哪里提供 bundle，并且此选项优先。\n\n默认情况下，将使用当前工作目录作为提供内容的目录。将其设置为 false 以禁用 contentBase。\n\n```\nmodule.exports = {\n  //...\n  devServer: {\n    contentBase: path.join(__dirname, 'public')\n  }\n};\n```\n\n也可以从多个目录提供内容：\n\n```\nmodule.exports = {\n  //...\n  devServer: {\n    contentBase: [path.join(__dirname, 'public'), path.join(__dirname, 'assets')]\n  }\n};\n```\n\n### devServer.disableHostCheck\n\n`boolean`\n\n设置为 true 时，此选项绕过主机检查。不建议这样做，因为不检查主机的应用程序容易受到 DNS 重新连接攻击。\n\n```\nmodule.exports = {\n  //...\n  devServer: {\n    disableHostCheck: true\n  }\n};\n```\n\n### devServer.filename\n\n`string`\n\n在 lazy mode(惰性模式) 中，此选项可减少编译。 默认在 lazy mode(惰性模式)，每个请求结果都会产生全新的编译。使用 filename，可以只在某个文件被请求时编译。\n\n如果 output.filename 设置为 'bundle.js' ，devServer.filename 用法如下：\n\n```\nmodule.exports = {\n  //...\n  output: {\n    filename: 'bundle.js'\n  },\n  devServer: {\n    lazy: true,\n    filename: 'bundle.js'\n  }\n};\n```\n\n现在只有在请求了bundle.js时，才会去编译bundle。\n\n## 总结\n\nwebpack的功能确实很强大，可以针对代码进行各种操作，最终生成出可以适应各种场景的代码，使开发和部署彻底分离开来，开发者可以更加专注项目。\n","frontmatter":"title: 使用webpack-dev-server来监听项目变化\ndate: 2019-11-25 17:54:36\ntags: Vue\ncategories: Vue"}

/***/ }),

/***/ "./static/使用webpack打包Vue和TypeScript.md":
/*!*********************************************!*\
  !*** ./static/使用webpack打包Vue和TypeScript.md ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"title":"使用webpack打包Vue和TypeScript","date":"2019-10-22T15:20:08.000Z","tags":["Vue","Webpack","TypeScript"],"categories":"Web"},"body":"\n本文将会介绍如何通过Webpack将基于TypeScript的Vue项目进行打包。\n\n<!-- more -->\n\n## webpack基础配置\n\n首先创建一个基本的webpack.config.js文件:\n\n```\nconst path = require( 'path' );\n\nmodule.exports = {\n    entry: {\n        index: \"./src/index.ts\",\n    },\n    output: {\n        path: path.resolve( __dirname, 'dist' ),\n        publicPath: '/dist/',\n        filename: '[name].js'\n    },\n    devtool: 'inline-source-map',\n    mode: 'development',\n    module: {\n        rules: [\n        ]\n    },\n    resolve: {\n    }\n};\n```\n\n此时webpack只能将src/index.ts文件直接输出为index.js，我们需要添加typescript的loader，进行typescript的转换。\n\n将以下代码加入rules节:\n\n```\n{\n    test: /\\.ts?$/,\n    loader: 'ts-loader',\n    exclude: /node_modules/,\n},\n```\n\n通过ts-loader进行ts文件的转换，我们还需要创建typescript的一个配置文件。\n\n## 添加typescript支持\n\n创建tsconfig.json\n\n```\n{\n    \"compilerOptions\": {\n        \"outDir\": \"./dist/\",\n        \"sourceMap\": true,\n        \"strict\": true,\n        \"module\": \"commonjs\",\n        \"moduleResolution\": \"node\",\n        \"target\": \"es5\",\n        \"skipLibCheck\": true,\n        \"esModuleInterop\": true,\n        \"experimentalDecorators\": true\n    },\n    \"include\": [\n        \"./src/**/*\"\n    ]\n}\n```\n\n还需要在webpack的配置中添加ts文件，在resolve节中添加:\n\n```\nextensions: [ '.ts', '.js' ],\n```\n\n我们指定ts转换出的js代码是es5的。\n\n这个时候我们运行webpack，将会看到正常的转换输出。\n\n```\nHash: c3a0ae2c47032de12eec\nVersion: webpack 4.41.0\nTime: 1880ms\nBuilt at: 10/22/2019 3:40:59 PM\n   Asset      Size  Chunks             Chunk Names\nindex.js  11.8 KiB   index  [emitted]  index\nEntrypoint index = index.js\n[./src/index.ts] 269 bytes {index} [built]\n```\n\n入口文件就是index.ts了，之后我们就正常的在index.ts中写我们的代码，webpack就会查找所有的依赖，并打包输出到index.js中。\n\n## 添加Vue单文件的支持\n\nVue单文件组件(SFC)规范是指在一个文件中，提供html、css和script代码，三者包含在顶级语言块 `<template>`、`<script>` 和 `<style>`\n 中，还允许添加可选的自定义块。\n\n这是一个简单的vue单文件例子:\n\n```\n<template>\n  <div class=\"example\">{{ msg }}</div>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      msg: 'Hello world!'\n    }\n  }\n}\n</script>\n\n<style>\n.example {\n  color: red;\n}\n</style>\n\n<custom1>\n  This could be e.g. documentation for the component.\n</custom1>\n```\n\n我们通过vue-loader来解析该文件，提取每一个语言块，如有需要，会传递给其他loader进行处理，最后组装为一个ES Module。\n\n我们在webpack的rules节中添加vue-loader:\n\n```\n{\n  test: /\\.vue$/,\n  loader: 'vue-loader',\n  options: {\n    loaders: {\n      // Since sass-loader (weirdly) has SCSS as its default parse mode, we map\n      // the \"scss\" and \"sass\" values for the lang attribute to the right configs here.\n      // other preprocessors should work out of the box, no loader config like this necessary.\n      'scss': 'vue-style-loader!css-loader!sass-loader',\n      'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax',\n    }\n    // other vue-loader options go here\n  }\n},\n```\n\n## 如果vue是typescript代码？\n\n其实这很简单，ts-loader有一个appendTsSuffixTo的功能，可以给某个文件增加.ts的后缀，从而识别这个文件为ts文件。\n\n```\n{\n  test: /\\.tsx?$/,\n  loader: 'ts-loader',\n  exclude: /node_modules/,\n  options: {\n    appendTsSuffixTo: [/\\.vue$/],\n  }\n},\n```\n\n我们还需要在项目中添加一个vue-shim.d.ts来让ts正确的识别vue。\n\n```\ndeclare module '*.vue' {\n  import Vue from 'vue'\n  export default Vue\n}\n```\n\n还需要在webpack的resolve节追加vue的后缀:\n\n```\nresolve: {\n  extensions: [ '.tsx', '.ts', '.js' , '.vue'],\n  alias: {\n    'vue': 'vue/dist/vue.js'\n  }\n},\n```\n\nvue-loader现在需要手动处理一下插件，在webpack.config.js的头部导入vue-loader，并在plugins节创建对象。\n\n```\nconst { VueLoaderPlugin } = require('vue-loader')\n\n.......\n\nplugins: [\n  new VueLoaderPlugin()\n],\n```\n\n否则将不能正确工作。\n\n此时已经完成了webpack+vue+typescript的全部工作。\n\n```\nHash: 320d4ed3f55f52872694\nVersion: webpack 4.41.0\nTime: 2494ms\nBuilt at: 10/22/2019 4:00:50 PM\n      Asset       Size    Chunks             Chunk Names\n  bundle.js   1.12 MiB    bundle  [emitted]  bundle\nelectron.js   12.2 KiB  electron  [emitted]  electron\n index.html  194 bytes            [emitted]\nEntrypoint bundle = bundle.js\nEntrypoint electron = electron.js\n[./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/app.vue?vue&type=style&index=0&id=5ef48958&rel=stylesheet%2Fscss&lang=scss&scoped=true&] ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/app.vue?vue&type=style&index=0&id=5ef48958&rel=stylesheet%2Fscss&lang=scss&scoped=true& 542 bytes {bundle} [built]\n[./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./src/Components/About.vue?vue&type=script&lang=ts&] ./node_modules/ts-loader??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/About.vue?vue&type=script&lang=ts& 305 bytes {bundle} [built]\n[./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/Components/About.vue?vue&type=template&id=aa9c95a6&] ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/About.vue?vue&type=template&id=aa9c95a6& 235 bytes {bundle} [built]\n[./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/app.vue?vue&type=template&id=5ef48958&scoped=true&] ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/app.vue?vue&type=template&id=5ef48958&scoped=true& 589 bytes {bundle} [built]\n[./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/app.vue?vue&type=style&index=0&id=5ef48958&rel=stylesheet%2Fscss&lang=scss&scoped=true&] ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/app.vue?vue&type=style&index=0&id=5ef48958&rel=stylesheet%2Fscss&lang=scss&scoped=true& 1.64 KiB {bundle} [built]\n[./src/Components/About.vue] 1.06 KiB {bundle} [built]\n[./src/Components/About.vue?vue&type=script&lang=ts&] 350 bytes {bundle} [built]\n[./src/Components/About.vue?vue&type=template&id=aa9c95a6&] 203 bytes {bundle} [built]\n[./src/app.vue] 1.08 KiB {bundle} [built]\n[./src/app.vue?vue&type=style&index=0&id=5ef48958&rel=stylesheet%2Fscss&lang=scss&scoped=true&] 716 bytes {bundle} [built]\n[./src/app.vue?vue&type=template&id=5ef48958&scoped=true&] 207 bytes {bundle} [built]\n[./src/entry.ts] 538 bytes {bundle} [built]\n[./src/main.ts] 1.11 KiB {electron} [built]\n[./src/route.ts] 1.35 KiB {bundle} [built]\n```\n","frontmatter":"title: 使用webpack打包Vue和TypeScript\ndate: 2019-10-22 15:20:08\ntags: [\n    Vue,\n    Webpack,\n    TypeScript\n]\ncategories: Web"}

/***/ }),

/***/ "./static/使用伪元素创建一个圆点.md":
/*!*******************************!*\
  !*** ./static/使用伪元素创建一个圆点.md ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"title":"使用伪元素创建一个圆点","date":"2020-01-01T11:11:12.000Z","tags":"CSS","categories":"Web"},"body":"\n我最早接触到CSS中的伪元素是在一次写背景模糊的时候，CSS中的blur会模糊下面所有的元素，但是可以通过伪元素在before中先模糊，这样下层是没有任何元素的，自然也不会有元素被模糊。\n\n伪元素就如同它的名字一样，是假的元素，只是CSS引擎在排版的时候创建出来的，在DOM树中是不存在的，所以javascript是没办法操作伪元素的。伪元素分为before和after，可以在元素的前面或者后面创建一个假的元素，伪元素选择器的标志符号是`::`。\n\n1. `div::before` 在div元素的前面创建一个元素，配合content属性一起使用。\n2. `div::after` 在div元素的后面创建一个元素，配合content属性一起使用。\n\n![1657](16-57-30屏幕截图.png)\n\n使用伪元素选择器需要注意一点的是，必须使用content属性，否则将不起任何作用。\n\n伪元素选择器生效以后，可以在DOM中看到::before或者::after，这里提供一个例子。\n\nhtml部分：\n```\n<body>\n    <div>\n        Text\n    </div>\n</body>\n```\n\ncss部分：\n```\ndiv::before {\n  content: \"This is before Text, \";\n}\n\ndiv::after {\n  content: \", This is after Text.\";\n}\n```\n\n此时页面上会看到输出这么一句话，`This  is before Text, Text , This is after Text.`，并且使用鼠标只能选择到最中间的Text文本。\n\n![1657](16-57-16屏幕截图.png)\n\n代码可以点击[这里](https://jsfiddle.net/justforlxz/shg21kvb/18/)查看。\n\n今天写这篇文章呢，是因为今天我在实现hexo的Next主题，看到它在列表中使用after创建了一个小圆点，并且我遇到了一个问题，所以写这篇文章记录一下。\n\nNext用的是浮动布局来实现的，而我决定flex一把梭，整体布局是垂直的flex，首页、分类等列表内部是用水平的inline-flex实现的，最左边是图标，来自fortawesome，中间的文本使用span包裹一下，实现左对齐，然后通过伪元素在最右边创建一个小圆点，设置a元素的宽度为100%，就可以实现圆点在最右边。\n\n坑就是在这里遇到的，如果a元素的宽度设置为100%，伪元素创建的小圆点就不能完全显示，少1像素或者多1像素就可以完全显示。最终的解决办法是给小圆点的周围增加了1像素的padding解决了，但是原因位置，谁看到这篇文章并且恰好知道原因的，还请帮忙评论回复一下。\n\n```\n<div id=\"site-nav\">\n  <ul>\n    <li v-for=\"item in items\" v-bind:key=\"item.title\">\n      <a v-bind:href=\"item.link\">\n        <span id=\"menu-left\" v-bind:class=\"item.class\"></span>\n        <span id=\"menu-text\">\n          {{ item.title }}\n        </span>\n      </a>\n    </li>\n  </ul>\n</div>\n```\n\n```\n#site-nav {\n  background: white;\n  padding: 20px 0;\n}\n\nul {\n  margin: 0;\n  padding: 0 0;\n}\n\n#site-nav li {\n  list-style-type: none;\n}\n\n#site-nav li a {\n  padding: 5px 0px;\n  text-align: left;\n  line-height: inherit;\n  transition-property: background-color;\n  transition-duration: 0.2s;\n  transition-timing-function: ease-in-out;\n  transition-delay: 0s;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  text-decoration: none;\n  font-size: 13px;\n  border-bottom: 1px solid transparent;\n  color: #555;\n}\n\n#site-nav li a:hover {\n  background: #f9f9f9;\n}\n\n#menu-left {\n  align-content: center;\n  margin-left: 10px;\n}\n\n#menu-text {\n  width: 100%;\n  margin-left: 10px;\n}\n\n#site-nav li a::after {\n  content: ' ';\n  background: #bbb;\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  margin: 0 10px 0 0;\n  min-width: 6px;\n  min-height: 6px;\n  max-height: 6px;\n  max-width: 6px;\n  display: block;\n  box-sizing: border-box;\n}\n```\n\n但我提取了基本结构和css，demo是能够正常显示小圆点的，但是自己的Vue却不能正常显示，后来发现是display写成块级元素用的flex了，改成inline-flex就能正常显示了，但是在调整宽度的时候，就发现了上面的问题，它又不正常显示了，实在解决不了了，就用padding处理了。\n\n参考资料： [千古壹号](https://github.com/qianguyihao/Web/blob/master/02-CSS%E5%9F%BA%E7%A1%80/10-CSS3%E9%80%89%E6%8B%A9%E5%99%A8%E8%AF%A6%E8%A7%A3.md)\n","frontmatter":"title: 使用伪元素创建一个圆点\ndate: 2020-01-01 11:11:12\ntags: CSS\ncategories: Web"}

/***/ }),

/***/ "./static/修复Archlinux的Grub.md":
/*!************************************!*\
  !*** ./static/修复Archlinux的Grub.md ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"title":"修复Archlinux的Grub","date":"2017-12-18T09:44:55.000Z","tags":"Linux"},"body":"\n又双叒叕不知道怎么搞的，就把arch的grub给弄坏了，但是在重新安装grub的时候，提示了这么一个错误:\n\n```\nCould not prepare Boot variable: No space left on device\n```\n\n诶不对啊，boot分区还有800M呢，怎么这么快没空间了，根目录也有52G呢，于是谷歌了一把，找到了解决办法.\n\n```\nsudo rm /sys/firmware/efi/efivars/dump-*\n```\n\n>新式 efivarfs (EFI VARiable FileSystem) 接口 (CONFIG_EFIVAR_FS) - 由位于 /sys/firmware/efi/efivars 的 efivarfs 内核模块挂载使用 - 老式 sysfs-efivars 接口的替代品，不限制变量数据大小，支持 UEFI Secure Boot 变量并被上游推荐使用。在3.8版的内核中引入，新的 efivarfs 模块在3.10版内核中从旧的 efivars 内核模块中分离。\n\n删掉dump文件，就可以正常安装了【有点迷，不应该啊。\n\n参考资料 : [Unified_Extensible_Firmware_Interface](https://wiki.archlinux.org/index.php/Unified_Extensible_Firmware_Interface_(%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87))\n\n","frontmatter":"title: 修复Archlinux的Grub\ndate: 2017-12-18 09:44:55\ntags: Linux"}

/***/ }),

/***/ "./static/入坑typescript了.md":
/*!*********************************!*\
  !*** ./static/入坑typescript了.md ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"title":"入坑typescript了","date":"2019-06-15T23:41:49.000Z","tags":"typescript","categories":null},"body":"\n今天算是正式入坑 typescript 了，基于 vue 写了第一个函数，用来做一个文字效果。\n\n演示效果：\n![](深度录屏_选择区域_20190615202044.gif)\n\n<!-- more -->\n\n整体思路听简单的，就是用定时器和延时器来做，通过定时器来间隔的处理文本，延时器来延后所有的方法。\n\n```\nclass TextHandle {\n    private allDuration: number = 0;\n    public appendText(text: string) : void {\n        setTimeout(() = >{\n            const LeftMessage = document.getElementById('LeftMessage');\n            if (LeftMessage === null) {\n                return;\n            }\n\n            let index: number = 0;\n            const MessageText: string = LeftMessage.innerText;\n\n            // tslint:disable-next-line:only-arrow-functions\n            const interval = setInterval(function() {\n                if ((LeftMessage === null) || (index++ === text.length + 1)) {\n                    return clearInterval(interval);\n                }\n\n                LeftMessage.innerText = MessageText + text.substring(0, index);\n            },\n            300);\n        },\n        this.AllDuration);\n        this.AllDuration += text.length * 300 + 100;\n    }\n}\n```\n\ntypescript确实挺不错的，平时都在写静态语言，如C++，所以当我开始学动态语言的时候，就会觉得水土不服，现在\n通过typescript就可以让我继续使用静态语言的开发方式来写web，而且代码更容易理解。\n","frontmatter":"title: 入坑typescript了\ndate: 2019-06-15 23:41:49\ntags: typescript\ncategories:"}

/***/ }),

/***/ "./static/卷积神经网络简述.md":
/*!****************************!*\
  !*** ./static/卷积神经网络简述.md ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"title":"卷积神经网络简述","date":"2018-07-14T16:00:32.000Z","tags":"Deep Learning","categories":"Deep Learning"},"body":"\n前言： 我太菜了… 本来想着写个小例子，结果写到一半发现自己其实根本不会，我还是撸C++去吧。\n\n卷积神经网络(Convolutional Neural Network)是一种前馈神经网络。它的人工神经元可以响应一部分覆盖范围内的周围单元，对于大型图像处理有出色的表现。\n\n卷积神经网络由一个或多个卷积层和顶端的全连通层组成，同时也包含关联权重和池化层。这一结构可以使得卷积神经网络能够利用输入数据的二维结构。与其他深度学习结构相比，卷积神经网络在图像和声音上能够给出更好的结果，这一模型也可以用反向传播算法进行训练。相比较于其他神经网络、前馈神经网络，卷积神经网络需要考虑的参数更少，使之成为一种颇具吸引力的深度学习结构。\n\n<!-- more -->\n\n## 结构\n\n### 卷积层\n\n卷积神经网络中每层卷积层由若干卷积单元构成。每个卷积单元的参数都可以由反向传播算法来调整。卷积运算的目的是提取输入的不同特征，第一层卷积可能只提取非常小的特征，更多层的网络只能从低级特征中提取更复杂的特征。\n\n### 激活函数\n\n运行时激活神经网络中某一部分神经元，将激活信息向后传入下一层神经网络。神经网络之所以能解决非线性问题，如语音和图像，本质上就是激活函数加入了非线性的因素，弥补了线性模型的表达力，把“激活的神经元的特征”通过函数保留并映射到下一层。\n\n因为神经网络的数学基础是处处可微，所以选取的激活函数要能保证数据输入与输出也是可微的，介绍四种函数：\n\n- sigmoid\n\n![sigmoid](sigmoid.svg)\n\n![sigmoid](sigmoid.png)\n\nsigmoid函数是传统神经网络中最常用的激活函数之一，它的优点在于，它的输出映射在(0, 1)内，单调连续，非常适合作为输出层，并且求导比较容易，缺点也比较明显，因为软饱和性，一旦落入饱和区，f'(x)就会变得接近0，很容易产生阶梯消失。\n\n- tanh\n\n![](tanh.jpg)\n\n![](TanhReal.gif)\n\ntanh函数也具有软饱和性，因为它的输出以0为中心，收敛速度比sigmoid要快，但是仍然无法解决梯度消失问题。\n\n- relu\n\n![](relu.svg)\n\n![](relu.png)\n\nrelu是目前最受欢迎的激活函数，softplus可以看做是relu的平滑版本。使用线性整流（Rectified Linear Units, ReLU）f(x)=max(0,x)作为这一层神经的激励函数（Activation function）。它可以增强判定函数和整个神经网络的非线性特性，而本身并不会改变卷积层。\n\n- dropout\n\n一个神经元将以概率决定是否要被抑制，被抑制的神经元会被暂时认为不属于网络，但是它的权重将会被保留。\n\n### 池化层\n\n池化是卷积神经网络中另外一个非常重要的概念。它实际上是形式的降采样。有多种不同形式的非线性池化函数，而其中“最大池化”是最为常见的。它是将输入的图像划分为若干个矩形区域，对每个子区域输出最大值。直觉上，这种机制能够有效地原因在于，在发现一个特征之后，它的精确位置远不及它和其他特征的相对位置的关系重要。池化层会不断地减小数据的空间大小，因此参数的数量和计算量也会下降，这在一定程度上也控制了过拟合。通常来说，CNN的卷积层之间都会周期性地插入池化层。\n\n池化层通常会分别作用于每个输入的特征并减小其大小。目前最常用形式的池化层是每隔2个元素从图像划分出2x2的区块，然后对每个区块中的4个数取最大值。这将会减少75%的数据量。\n\n除了最大池化之外，池化层也可以使用其他池化函数，例如“平均池化”甚至“L2-范数池化”等。过去，平均池化的使用曾经较为广泛，但是最近由于最大池化在实践中的表现更好，平均池化已经不太常用。\n\n由于池化层过快地减少了数据的大小，目前文献中的趋势是使用较小的池化滤镜，甚至不再使用池化层。\n\n### 损失函数层\n\n损失函数层用于决定训练过程如何来“惩罚”网络的预测结果和真实结果之间的差异，它通常是网络的最后一层。各种不同的损失函数适用于不同类型的任务。例如，Softmax交叉熵损失函数常常被用于在K个类别中选出一个，而Sigmoid交叉熵损失函数常常用于多个独立的二分类问题。欧几里德损失函数常常用于结果取值范围为任意实数的问题。","frontmatter":"title: 卷积神经网络简述\ndate: 2018-07-14 16:00:32\ntags: Deep Learning\ncategories: Deep Learning"}

/***/ }),

/***/ "./static/在DeepinLinux下使用nVidia-CUDA.md":
/*!**********************************************!*\
  !*** ./static/在DeepinLinux下使用nVidia-CUDA.md ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"title":"在DeepinLinux下使用nVidia CUDA","date":"2018-06-28T03:21:50.000Z","tags":["Linux","nVidia Cuda"]},"body":"\nCUDA（Compute Unified Device Architecture，统一计算架构）是由NVIDIA所推出的一种集成技术，是该公司对于GPGPU的正式名称。通过这个技术，用户可利用NVIDIA的GeForce 8以后的GPU和较新的Quadro GPU进行计算。亦是首次可以利用GPU作为C-编译器的开发环境。NVIDIA营销的时候，往往将编译器与架构混合推广，造成混乱。实际上，CUDA可以兼容OpenCL或者自家的C-编译器。无论是CUDA C-语言或是OpenCL，指令最终都会被驱动程序转换成PTX代码，交由显示核心计算。\n\n在论坛上看到有些用户希望在deepin下使用CUDA，但是他们采取的做法往往是手动下载nvidia的二进制文件，直接进行安装。\n\n但是这样会破坏一部分的glx链接，导致卸载的时候无法彻底恢复，结果就是系统因为卸载nvidia驱动而废掉，所以我推荐使用包管理器的方式安装nvidia驱动和cuda相关的东西，尽量不要手动修改。\n\n<!-- more -->\n\n需要安装的很少，只有五个包，不过会依赖很多nvidia的库，总量还是有一些的。\n\n```\nsudo apt install nvidia-cuda-toolkit nvidia-profiler nvidia-visual-profiler nvidia-cuda-doc nvidia-cuda-dev\n```\n\nnvcc是cuda的编译器，它目前只支持g++5，所以还需要安装g++5。\n\n```\nsudo apt install g++-5\n```\n\n然后，重启一下计算机。\n\n[这里有个小栗子，可以用来测试cuda是否能够成功编译和运行](https://bingliu221.gitbooks.io/learn-cuda-the-simple-way/content/chapter2.html/)\n\n**将以下代码保存为 main.cu**\n\n```\n#include <stdio.h>\n\n__global__ void vector_add(const int *a, const int *b, int *c) {\n    *c = *a + *b;\n}\n\nint main(void) {\n    const int a = 2, b = 5;\n    int c = 0;\n\n    int *dev_a, *dev_b, *dev_c;\n\n    cudaMalloc((void **)&dev_a, sizeof(int));\n    cudaMalloc((void **)&dev_b, sizeof(int));\n    cudaMalloc((void **)&dev_c, sizeof(int));\n\n    cudaMemcpy(dev_a, &a, sizeof(int), cudaMemcpyHostToDevice);\n    cudaMemcpy(dev_b, &b, sizeof(int), cudaMemcpyHostToDevice);\n\n    vector_add<<<1, 1>>>(dev_a, dev_b, dev_c);\n\n    cudaMemcpy(&c, dev_c, sizeof(int), cudaMemcpyDeviceToHost);\n\n    printf(\"%d + %d = %d, Is that right?\\n\", a, b, c);\n\n    cudaFree(dev_a);\n    cudaFree(dev_b);\n    cudaFree(dev_c);\n\n    return 0;\n}\n```\n\n编译:\n\n```\nnvcc main.cu\n```\n\n运行:\n\n```\n./a.out\n```\n\n如果一切顺利，在编译的时候就不会有报错，不过在我的环境下nvcc会有架构被弃用的警告，本着只要不error就算没事的原则，我们无视这条警告即可。\n\n输出结果:\n\n```\n2 + 5 = 0, Is that right?\n```\n","frontmatter":"title: 在DeepinLinux下使用nVidia CUDA\ndate: 2018-06-28 03:21:50\ntags:\n  - Linux\n  - nVidia Cuda"}

/***/ }),

/***/ "./static/在deepin上使用dnsmasq来解决dns解析缓慢.md":
/*!***********************************************!*\
  !*** ./static/在deepin上使用dnsmasq来解决dns解析缓慢.md ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"title":"在deepin上使用dnsmasq来解决dns解析缓慢","date":"2017-08-11T14:07:26.000Z","tags":null},"body":"\n其实这个问题影响并不是很大，只是稍微的增加一点点访问速度，缓存这东西有利有弊。\n\n<!-- more -->\n\n在写完这篇文章以后，我就不用dnsmasq了，现在用的是github上的[Pcap_DNSProxy](https://github.com/chengr28/Pcap_DNSProxy)。用来防止dns污染的。\n\n根据[https://stackoverflow.com/questions/11020027/dns-caching-in-linux](https://stackoverflow.com/questions/11020027/dns-caching-in-linux) 中回答者提供的信息来看，linux发行版是不提供dns解析缓存的，上面提到的nscd也不在deepin的预装列表中，所以我们只能自己动手丰衣足食了。\n\n首先安装口碑较好的dnsmasq，来为我们提供dns缓存。\n\n```\nsudo apt install dnsmasq\n```\n\n如果是deepin最新的2015.4.1版本中安装，安装结束会提醒一个错误，这个错误的解决办法来自[https://stackoverflow.com/questions/16939306/i-cant-restart-my-dnsmasq-service-so-my-fog-server-wont-work](https://stackoverflow.com/questions/16939306/i-cant-restart-my-dnsmasq-service-so-my-fog-server-wont-work).\n这个错误似乎是因为/usr/share/dns/root.ds文件更新后结构导致的错误。\n\n编辑/etc/init.d/dnsmasq，并找到\n\n```\nROOT_DS=\"/usr/share/dns/root.ds\"\n\nif [ -f $ROOT_DS ]; then\n   DNSMASQ_OPTS=\"$DNSMASQ_OPTS `sed -e s/\". IN DS \"/--trust-anchor=.,/ -e s/\" \"/,/g $ROOT_DS | tr '\\n' ' '`\" \nfi\n```\n\n修改为\n\n```\nROOT_DS=\"/usr/share/dns/root.ds\"\n\nif [ -f $ROOT_DS ]; then\n   DNSMASQ_OPTS=\"$DNSMASQ_OPTS `sed -e s/\".*IN[[:space:]]DS[[:space:]]\"/--trust-anchor=.,/ -e s/\"[[:space:]]\"/,/g $ROOT_DS | tr '\\n' ' '`\" \nfi\n```\n\n当错误解决以后，我们手动重启一下dnsmasq的systemd服务。\n\n```\nsudo systemctl restart dnsmasq\n```\n\ndeepin的/etc/resolv.conf来自/etc/NetworkManager/resolv.conf.是一个软连接。我采取的行为是删除这个文件，重新创建。\n\n```\nsudo rm /etc/resolv.conf\n\nsudo vim /etc/resolv.conf\n```\n\n然后写入本地地址当做dns地址。\n\n```\nnameserver 127.0.0.1\n```\n\ndnsmasq是一个本地的dns和dhcp服务器，当我们在上面成功启动dnsmasq以后，个人系统中就已经在提供dns服务了，所以本机使用回环地址来表明dns服务器就是本机，所有的dns查询都会发送到本机的dnsmasq中。\n\n如果需要额外添加dns服务器，做法来自[https://wiki.archlinux.org/index.php/Dnsmasq#More_than_three_nameservers](https://wiki.archlinux.org/index.php/Dnsmasq#More_than_three_nameservers).\n\n创建一个 /etc/resolv.dnsmasq.conf，写入其他dns服务器的地址。\n\n```\nnameserver 114.114.114.114\n```\n\n然后编辑 /etc/dnsmasq.conf,找到resolv-file字段，改为\n\n```\nresolv-file=/etc/resolv.dnsmasq.conf\n```\n\n然后重启dnsmasq。\n\n验证的话通过dig命令。\n\n```\ndig blog.mkacg.com\n```\n\n通过执行两次来判断，Query time在第二次查询是为0 msec。","frontmatter":"title: 在deepin上使用dnsmasq来解决dns解析缓慢\ndate: 2017-08-11 14:07:26\ntags:"}

/***/ }),

/***/ "./static/开发topbar中的技术问题.md":
/*!**********************************!*\
  !*** ./static/开发topbar中的技术问题.md ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"title":"开发topbar中的技术问题","date":"2017-08-23T08:54:56.000Z","tags":null},"body":"\n这里记录了开发topbar中遇到的坑和一些问题。\n\n<!-- more -->\n\n使用Qt提供的qxcb方法注册阴影为dock类型，反而处于DESKTOP和NORMAL之间。其实当初并不是想设置为DOCK类型的，因为这样阴影也会在窗口上方，我希望的是阴影在普通程序下方，在桌面上方。今天曹哥来讲窗管的一些坑，讲到窗管是如何控制窗口的，我的阴影其实是被Qt注册成_NET_WM_STATE_BELOW了。\n[这里可以看到一些type的介绍](https://specifications.freedesktop.org/wm-spec/1.3/ar01s05.html)。\n\n在_NET_WM_STATE中一共有这么几个类型：\n\n```\n_NET_WM_STATE_MODAL, ATOM\n_NET_WM_STATE_STICKY, ATOM\n_NET_WM_STATE_MAXIMIZED_VERT, ATOM\n_NET_WM_STATE_MAXIMIZED_HORZ, ATOM\n_NET_WM_STATE_SHADED, ATOM\n_NET_WM_STATE_SKIP_TASKBAR, ATOM\n_NET_WM_STATE_SKIP_PAGER, ATOM\n_NET_WM_STATE_HIDDEN, ATOM\n_NET_WM_STATE_FULLSCREEN, ATOM\n_NET_WM_STATE_ABOVE, ATOM\n_NET_WM_STATE_BELOW, ATOM\n_NET_WM_STATE_DEMANDS_ATTENTION, ATOM\n\n```\n\n如果程序被注册成_NET_WM_STATE_BELOW，则会被放置在DESKTOP之上的一层。不是很清楚Qt是出于什么策略，才把我的阴影注册为这个状态，反而是刚好满足了我的需求。\n\n这要多谢曹哥了，我才终于明白了为什么会这样，以及以后如何正确的设置type。\n\n![DESKTOP1](DeepinScreenshot_桌面_20170823201608.png \"我老婆\")\n\n![DESKTOP2](DeepinScreenshot_桌面_20170823201641.png)\n","frontmatter":"title: 开发topbar中的技术问题\ndate: 2017-08-23 08:54:56\ntags:"}

/***/ }),

/***/ "./static/我的代理折腾方案.md":
/*!****************************!*\
  !*** ./static/我的代理折腾方案.md ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"title":"我的代理折腾方案","date":"2017-08-31T20:43:48.000Z","tags":"linux"},"body":"\n最近在准备做新的代理设置界面，然后想到自己也改改代理的配置，好方便的用在新的设置上。\n\n<!-- more -->\n\n我以前的旧方案是：\n\nprivoxy --> nginx --> 多个ss客户端 ==== 多个ss服务端\n\nprivoxy用来将socks转成http，nginx是用来多个ss负载均衡。\n\n这个方案虽然有点麻烦，但是用起来还是很吼的。\n\n但是我们改了控制中心对代理的设置，在程序前面加上了proxychains。\n刚好可以和我的privoxy在作用上冲突了。但是其实还有一些其他问题，我是比较懒的人，跳过大陆ip和局域网对我来说是有很大帮助的，这样我就可以设置一个全局代理，而不需要给每个程序单独设置。\n\n以前肥猫给我介绍过一些方法，当初我弄的时候，还是太图样，总是不能好好的稳定工作，所以暂时放弃了全局代理的方案。provixy其实是可以做这样的事，但是好麻烦，要自己添加很多规则，gfwlist是可以转成它支持的action，但是自己再添加的话，很麻烦。【而我是根比较懒的竹子\n\n今天把provixy给撤下来了，换上以前用的meow，是用go写的，作用也是转成http，但是它支持的方案比较多，可以直接添加ss，也可以正向代理。当初不用它的原因是我想随机使用一个代理，当时电信和我过不去，一个端口用久了，就封我一天，害得我早上到公司了，先远程到服务器改端口，后来又觉得麻烦，直接开了5个端口，每天改本机，再后来就想随机使用了…  【还有次把我的ssh端口封了一天…\n\n现在的话，就是变成了这个结构：\n\nmeow --> nginx --> 多个ss客户端 ==== 多个ss服务端\n\nnginx还是代替meow做负载均衡，meow的工作就变成了转成http代理和黑白名单。\n\n虽然不需要新的控制中心的代理方案，现在这套就工作的很好了，但是没有它，我就不会再折腾新的【笑哭","frontmatter":"title: 我的代理折腾方案\ndate: 2017-08-31 20:43:48\ntags: linux"}

/***/ }),

/***/ "./static/正常的流程在界面上却是bug.md":
/*!**********************************!*\
  !*** ./static/正常的流程在界面上却是bug.md ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"title":"正常的流程在界面上却是bug","date":"2017-08-15T07:43:43.000Z","tags":null},"body":"\n排查了一天，最后终于确认了流程，知道了问题所在，不得不说，dde-session-ui这个项目太需要一个文档了，要把工作流程写的非常详细才可以。\n\n<!-- more -->\n\n上午收到了一条新任务，是龙芯上新安装的系统需要输入两次密码才可以登录，没有错误提示。近期并没有什么太大的改动，无非是给龙芯也用上了简单重构过的dde-session-ui，怎么会导致这样的问题。\n\n由于是新安装的系统才会发生，而且是现象一旦发生，就无法重现，这让我头有点大，怎么会有这样的神奇的事情，而且日志中很正常，没有收到message导致密码框被清空。我提交了一个添加了更多日志的，然后重装的龙芯的系统(龙芯重装一次要半个小时)，等重装完了，切换到tty去安装这个包，然后重启lightdm，让我输入密码回车以后，密码消失，我赶紧去看日志，但是日志中并没有我的输出，回车以后肯定会有的一行输出也没有(内心OS：What the fuck is that？)\n\n我又回去看验证的流程，并没有发现有什么不对的地方，而且是近期才有的，我在自己电脑上使用了龙芯的编译参数，打了一个deb包，并没有发生和龙芯一样的情况（这里并不需要，既然是新安装的系统才会发生，在旧系统上是无法重现的）。\n\n再然后我暂时没有管这个，先去修其他bug了。忙完以后，我去问了一下其他大佬，大佬给我提了几条让我去看看，是不是起了两个lightdm-deepin-greeter进程，确认一下使用的二进制是不是你加了log的。（然后我又重装龙芯了），之后确认了是我的二进制，也没有起两个进程。但是ps中有两行输出，我以为是起了两个，就让后端大佬看了一下，后端大佬告诉我说一个是shell的进程，一个是本体，还是只有一个进程存在的。我彻底懵逼了，然后后端大佬告诉我，是不是greeter进程写入什么了，之后的验证中内容已经存在，所以就不会重现了。\n\n其实这个我也想过，但是没考虑太深，greeter并没有操作文件，但是大佬这么一说，我想到有一些dbus的调用，是有写入文件的，然后我把/var/lib/lightdm/lightdm-deepin-greeter目录给删除了，完美重现。\n\n我的天啊，排查了快一天，居然是这个目录在新装的系统上没有，所以回车登录以后收到了来自dbus的switchToUser，界面重启导致的内容消失，根本不是收到了Message才被清空的，所以我的log也没有打印出来。\n\n知道了如何重现，可是要怎么修复呢，似乎在greeter上并不能修复，只能去改dde-daemon中LockService，如果文件不存在，就不要发送userChanged的信号。（流程是读取这个文件的信息，和传入的参数进行对比，但是文件是空的，所以被认为不是同一个账户，就发送了信号，也导致了界面上重启，以后无法重现是因为里面已经有内容了）。\n\n就这样，一个流程很正确，但是表现到界面上时就成了一个bug的问题被解决了。写下这篇内容是为了记录我如何解决对我来说很棘手的问题，其实这个问题并不是很困难，但是对整个工作的流程不是很熟悉，导致浪费了大量的时间在非关键点处理，有空要写一些文档了。","frontmatter":"title: 正常的流程在界面上却是bug\ndate: 2017-08-15 07:43:43\ntags:"}

/***/ }),

/***/ "./static/浅谈Javascript构造器模式.md":
/*!*************************************!*\
  !*** ./static/浅谈Javascript构造器模式.md ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"title":"浅谈Javascript构造器模式","date":"2020-01-31T23:15:23.000Z","tags":"Javascript","categories":"设计模式"},"body":"\n为了简化操作，JavaScript提供了new关键字。new关键字用于创建一个用户定义类型的实例，或者具有构造函数的内置对象的实例。\n\n<!-- more -->\n\n每当我们在一个函数调用前使用new关键字，该函数便会以一种特殊模式——构造模式来运行，在此模式中，JavaScript可以自动完成一些操作。基本上它是指解释器在你的代码中嵌入几行操作代码。\n\n在JavaScript中，构造函数通常是认为用来实现实例的，但是JavaScript中没有类的概念，但是有特殊的构造函数，通过new关键字来调用定义的构造函数，你可以告诉JavaScript你需要创建一个新对象，并且新对象的成员声明都是构造函数里定义的。在构造函数内部，this引用的是新创建的对象。\n\n```\nfunction People(name: String, age: Number) {\n    this.name = name;\n    this.age = age;\n    this.output = function() {\n        return this.name + \"已经\" + this.age + \"岁了\";\n    }\n}\n\nlet people = new People(\"justforlxz\", 24);\n\nconsole.log(people.output());\n```\n\n上面是个很简单的构造函数模式，我们从字面上this是people对象，但是其实并不是这样的，new运算符帮助我们生成了this的初始化代码。\n\nnew运算符一共做了三件事：\n\n1. 创建一个空对象\n2. 将空对象的原型赋值为构造器函数的原型\n3. 更改构造器函数内部的this，将其指向新创建的对象\n\n```\nlet tmp = new Object();\ntmp.__proto__ = People.prototype;\nPeople.call(tmp);\n```\n\n最后会经过一个判断，如果构造器函数设置了返回值，并且返回值是一个Object类型的话，就直接返回该Object，否则就会返回新创建的空对象。\n\n总结一下： JavaScript没有类的概念，但是为了实现OOP，就通过new关键字实现对函数进行插入代码来实现对象实例的初始化。构造器模式就是通过一个方法来new出一个对象，这个操作就叫构造器模式。\n","frontmatter":"title: 浅谈Javascript构造器模式\ndate: 2020-01-31 23:15:23\ntags: Javascript\ncategories: 设计模式"}

/***/ }),

/***/ "./static/深度学习笔记.md":
/*!**************************!*\
  !*** ./static/深度学习笔记.md ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"title":"深度学习笔记","date":"2018-07-14T10:01:01.000Z","tags":"Deepin Learning","categories":"Deepin Learning"},"body":"\n机器学习，顾名思义当然是用机器来学习。本文完。\n\n<!-- more -->\n\n上面的话是开玩笑，各位客官不要走…\n\n## **人工智能**\n\n人工智能其实不算新名词，在人类历史的长河中，就有过很多关于技艺高超的工匠制造人造人，并赋予智慧。现代的人工智能则始于古典哲学家用机械符号的观点来解释人类思考过程的尝试。\n\n20世纪50年代，人类信心满满的开始了人工智能的征途，但是这趟旅程并不平坦，1973年美英两国政府停止了没有明确目标的人工智能项目的研究。七年后又受到日本政府研究规划的刺激，又恢复了拨款，但是在80年代末再次停止了拨款。人工智能的研究就这样在跌宕起伏中不断的前进。\n\n时光荏苒，人类进入了21世纪，这次人工智能领域终于迎来了新的人生，计算机已经得到了充足的发展，计算能力与日俱增，曾经因为计算能力不足导致无法研究的项目和算法也可以得到重新的验证，当然除了计算能力提升带来的提升，更多的是幕后的工作者不断的改进和完善各种算法，对不同的课题进行长期深度的研究。\n\n人工智能再次进入大众视野是2016年，来自Google公司的AlphaGo成功击败了韩国选手李世石，成为第一个在围棋上战胜人类的人工智能，立下了里程碑。在AlphaGo进行比赛前，人类还自信的认为机器无法在围棋赢得胜利(~~人类疯狂的奶自己…~~)。\n\nAlphaGo采用了蒙特卡洛树搜索和两个深度神经网络结合的办法，蒙特卡洛树搜索是基于某种决策过程的启发式搜索算法，两个深度神经网络一个以估值网络来评估大量的选点，一个则以走棋网络来选择落子，在这种设计下，系统可以结合树搜索来长远推断，就像人脑一样评估落点，提高下棋能力。\n\n## **人工智能、机器学习和深度学习的区别**\n\n我也对这三个名词产生过疑问，其实很简单：\n\n- 人工智能： 人工实现的智能\n- 机器学习： 一种人工智能的实现方法\n- 深度学习： 一种机器学习的实现方法\n\n### 机器学习\n\n机器学习是人工智能的一个分支，人工智能的研究历史中有一条以“推理”为重点，到以“知识”为重点，再到以“学习”为重点的自然、清晰的脉络。显然机器学习是是实现人工智能的一条途径，即以机器学习为手段解决人工智能中的问题。\n\n机器学习在近30多年已发展为一门多领域交叉学科，涉及概率论、统计学、逼近论、凸分析、计算复杂性理论等多门学科。机器学习理论主要是设计和分析一些让计算机可以自动“学习”的算法。机器学习算法是一类从数据中自动分析获得规律，并利用规律对未知数据进行预测的算法。因为学习算法中涉及了大量的统计学理论，机器学习与推断统计学联系尤为密切，也被称为统计学习理论。算法设计方面，机器学习理论关注可以实现的，行之有效的学习算法。很多推论问题属于无程序可循难度，所以部分的机器学习研究是开发容易处理的近似算法。\n\n### 机器学习的应用\n\n机器学习已广泛应用于数据挖掘、计算机视觉、自然语言处理、生物特征识别、搜索引擎、医学诊断、检测信用卡欺诈、证券市场分析、DNA序列测序、语音和手写识别、战略游戏和机器人等领域。\n\n### 机器学习的定义\n\n机器学习有下面几种定义：\n- 机器学习是一门人工智能的科学，该领域的主要研究对象是人工智能，特别是如何在经验学习- 中改善具体算法的性能。\n- 机器学习是对能通过经验自动改进的计算机算法的研究。\n- 机器学习是用数据或以往的经验，以此优化计算机程序的性能标准。\n\n### 机器学习的分类\n\n机器学习可以大概分为以下几类：\n- 监督学习：从给定的训练数据集中学习出一个函数，当新的数据到来时，可以根据这个函数预测结果。监督学习的训练集要求是包括输入和输出，也可以说是特征和目标。训练集中的目标是由人标注的。常见的监督学习算法包括回归分析和统计分类。\n- 半监督学习： 介于监督学习与无监督学习之间。\n- 无监督学习： 与监督学习相比，训练集没有人为标注的结果。常见的无监督学习算法有生成对抗网络（GAN）、聚类。\n- 强化学习： 通过观察来学习做成如何的动作。每个动作都会对环境有所影响，学习对象根据观察到的周围环境的反馈来做出判断。\n\n监督学习和无监督学习的差别在于训练数据是否人为标记，他们都有训练集，都有输入输出。\n\n### 机器学习的算法\n\n具体的机器学习算法有：\n- 构造间隔理论分布：聚类分析和模式识别\n  - 人工神经网络\n  - 决策树\n  - 感知器\n  - 支持向量机\n  - 集成学习AdaBoost\n  - 降维与度量学习\n  - 聚类\n  - 贝叶斯分类器\n- 构造条件概率：回归分析和统计分类\n  - 高斯过程回归\n  - 线性判别分析\n  - 最近邻居法\n  - 径向基函数核\n- 通过再生模型构造概率密度函数：\n  - 最大期望算法\n  - 概率图模型：包括贝叶斯网和Markov随机场\n  - Generative Topographic Mapping\n- 近似推断技术：\n  - 马尔可夫链\n  - 蒙特卡罗方法\n  - 变分法\n- 最优化：大多数以上方法，直接或者间接使用最优化算法。\n\n## 人工神经网络\n\n在机器学习中，目前应用最广泛的是人工神经网络(Artificial Neural Network，ANN)，简称神经网络。是一种模仿生物神经网络的结构和功能的数学模型或计算模型，用于对函数进行估计和近似。神经网络由大量的人工神经元连结进行计算。大多数情况下人工神经网络能在外界信息的基础上改变内部结构，是一种自适应系统，通俗叫具备学习能力。\n\n### 人工神经网络的组成\n\n现代神经网络是一种非线性统计行数据建模工具，典型的神经网络具有以下三个部分：\n\n- 结构(Architecture): 指定了网络中的变量和它们的拓扑关系。例如，神经网络中的变量可以是神经元连接的权重（weights）和神经元的激励值（activities of the neurons）。\n- 激励函数(Activity Rule): 大部分神经网络具有一个短时间尺度的动力学规则，来定义神经元如何根据其他神经元的活动来改变自己的激励值。一般激励值依赖于网络中的权重(即该网络中的参数)。\n- 学习规则(Learning Rule): 学习规则指定了网络中的权重如何随着时间推进而调整。这一般被看做是一种长时间尺度的动力学规则。一般情况下，学习规则依赖于神经元的激励值。它也可能依赖于监督者提供的目标值和当前权重的值。例如，用于手写识别的一个神经网络，有一组输入神经元。输入神经元会被输入图像的数据所激发。在激励值被加权并通过一个函数（由网络的设计者确定）后，这些神经元的激励值被传递到其他神经元。这个过程不断重复，直到输出神经元被激发。最后，输出神经元的激励值决定了识别出来的是哪个字母。\n\n____________________________________________________\n\n在这里我推荐观看3Blue1Brown的三期视频。\n\n[深度学习之神经网络的结构 Part 1 ver 2.0](https://www.bilibili.com/video/av15532370)\n\n[深度学习之梯度下降法 Part 2 ver 0.9 beta](https://www.bilibili.com/video/av16144388/)\n\n[深度学习之反向传播算法 上/下 Part 3 ver 0.9 beta](https://www.bilibili.com/video/av16577449/)\n\n____________________________________________________\n\n### 人工神经网络的基础\n\n神经网络的构筑理念是受到生物（人或其他动物）神经网络功能的运作启发而产生的。人工神经网络通常是通过一个基于数学统计学类型的学习方法（Learning Method）得以优化，所以人工神经网络也是数学统计学方法的一种实际应用，通过统计学的标准数学方法我们能够得到大量的可以用函数来表达的局部结构空间，另一方面在人工智能学的人工感知领域，我们通过数学统计学的应用可以来做人工感知方面的决定问题（也就是说通过统计学的方法，人工神经网络能够类似人一样具有简单的决定能力和简单的判断能力），这种方法比起正式的逻辑学推理演算更具有优势。\n\n和其他机器学习方法一样，神经网络已经被用于解决各种各样的问题，例如机器视觉和语音识别。这些问题都是很难被传统基于规则的编程所解决的。\n\n对人类中枢神经系统的观察启发了人工神经网络这个概念。在人工神经网络中，简单的人工节点，称作神经元（neurons），连接在一起形成一个类似生物神经网络的网状结构。\n\n人工神经网络目前没有一个统一的正式定义。不过，具有下列特点的统计模型可以被称作是“神经化”的：具有一组可以被调节的权重，换言之，被学习算法调节的数值参数，并且\n可以估计输入数据的非线性函数关系\n这些可调节的权重可以被看做神经元之间的连接强度。\n人工神经网络与生物神经网络的相似之处在于，它可以集体地、并行地计算函数的各个部分，而不需要描述每一个单元的特定任务。神经网络这个词一般指统计学、认知心理学和人工智能领域使用的模型，而控制中央神经系统的神经网络属于理论神经科学和计算神经科学。\n\n在神经网络的现代软件实现中，被生物学启发的那种方法已经很大程度上被抛弃了，取而代之的是基于统计学和信号处理的更加实用的方法。在一些软件系统中，神经网络或者神经网络的一部分（例如人工神经元）是大型系统中的一个部分。这些系统结合了适应性的和非适应性的元素。虽然这种系统使用的这种更加普遍的方法更适宜解决现实中的问题，但是这和传统的连接主义人工智能已经没有什么关联了。不过它们还有一些共同点：非线性、分布式、并行化，局部性计算以及适应性。从历史的角度讲，神经网络模型的应用标志着二十世纪八十年代后期从高度符号化的人工智能（以用条件规则表达知识的专家系统为代表）向低符号化的机器学习（以用动力系统的参数表达知识为代表）的转变。\n\n神经网络在早期的进展非常缓慢，第一个问题是基本感知器无法解决异或问题，第二个问题是计算机没有足够的能力处理大型神经网络所需要的计算时间,直到计算机具备更强的计算能力前，神经网络的进展都一直很缓慢。\n\n### 反向传播算法的出现\n\n后来出现了关键的的进展: 在1975年由Paul Werbos提出的反向传播算法。该算法解决了异或的问题，还能更普遍的训练多层神经网络。反向传播算法在3Blue1Brown的第二期视频中有讲解,视频中采用了通俗易懂的方式来介绍反向传播算法是如何调整神经元的。\n\n神经网络的又一个关键进展是显卡性能的提升。大家都知道CPU偏向于控制而非计算，这就造成早期处理训练神经网络的代价非常大，使用CPU来训练神经网络的速度非常慢，而现代图形处理器有强大的并行处理能力和可编程流水线，令流处理器也可以处理非图形数据。特别是在面对单指令流多数据流（SIMD）且数据处理的运算量远大于数据调度和传输的需要时，通用图形处理器在性能上大大超越了传统的中央处理器应用程序。现在我们可以轻易的使用Nvidia的CUDA方案或者OpenCL来编写代码，并使用显卡来进行计算。\n\n### 多层前馈网络\n\n一种常见的多层结构的前馈网络（Multilayer Feedforward Network）由三部分组成：\n\n- 输入层: 众多神经元接受大量非线性的信息，输入的信息被称为输入向量。\n- 隐含层: 是输入层和输出层之间众多神经元和链接组成的各个层面。隐含层可以有一层或多层。隐含层的节点（神经元）数目不定，但数目越多神经网络的非线性越显著，从而神经网络的强健性（robustness）（控制系统在一定结构、大小等的参数摄动下，维持某些性能的特性）更显著。习惯上会选输入节点1.2至1.5倍的节点。\n- 输出层: 在神经元链接中传输、分析、权衡，形成输出结果。输出的信息称为输出向量。\n\n这种网络一般称为感知器（对单隐藏层）或多层感知器（对多隐藏层），神经网络的类型已经演变出很多种，这种分层的结构也并不是对所有的神经网络都适用。\n\n### 理论性质\n\n#### 计算能力\n\n多层感知器（MLP）是一个通用的函数逼近器，由Cybenko定理证明。然而，证明不是由所要求的神经元数量或权重来推断的。Hava Siegelmann和Eduardo D. Sontag的工作证明了，一个具有有理数权重值的特定递归结构（与全精度实数权重值相对应）相当于一个具有有限数量的神经元和标准的线性关系的通用图灵机。他们进一步表明，使用无理数权重值会产生一个超图灵机。\n\n####　容量\n\n人工神经网络模型有一个属性，称为“容量”，这大致相当于他们模拟任何函数的能力。它与网络中可以存储的信息量有关，也与复杂性有关。\n\n#### 收敛性\n\n模型并不总是收敛到唯一解，因为它取决于一些因素。首先，函数可能存在许多局部极小值，这取决于成本函数和模型。其次，在远离局部最小值时，优化方法可能无法保证收敛。第三，对大量的数据或参数，一些方法变得不切实际。在一般情况下，我们发现，理论保证的收敛不能成为实际应用的一个可靠的指南。\n\n#### 综合统计\n\n在目标是创建一个普遍系统的应用程序中，过度训练的问题出现了。这出现在回旋或过度具体的系统中当网络的容量大大超过所需的自由参数。为了避免这个问题，有两个方向：第一个是使用交叉验证和类似的技术来检查过度训练的存在和选择最佳参数如最小化泛化误差。二是使用某种形式的正规化。这是一个在概率化（贝叶斯）框架里出现的概念，其中的正则化可以通过为简单模型选择一个较大的先验概率模型进行；而且在统计学习理论中，其目的是最大限度地减少了两个数量：“风险”和“结构风险”，相当于误差在训练集和由于过度拟合造成的预测误差。\n\n### 一个小例子\n\n现在作为深度学习入门的是手写数字识别，3Blue1Brown的三期视频就是基于此。\n\n通过神经网络来学习如何识别手写数字，本质上就是人类通过算法来分解图像的信息，比如数字9，它可以认为是竖线和圆的组合，输出层是9，则隐含层需要处理竖线和圆，输入层输入的是手写9的全部像素，隐含层就是神经网络的核心，它需要只要竖线和圆又是由什么组成，最后一步步的分解为一个像素，再通过反向传播算法来训练和调节隐含层中的偏置和权值，最后整个网络就可以学习到正确的识别手写数字。\n\n深度学习就是通过人工神经网络来告诉计算机结果是如何产生的，以及如何通过结果来调整网络结构，达到预测和处理未标记的信息。","frontmatter":"title: 深度学习笔记\ndate: 2018-07-14 10:01:01\ntags: Deepin Learning\ncategories: Deepin Learning"}

/***/ }),

/***/ "./static/给Archlinux开启BFQ和MuQSS.md":
/*!*****************************************!*\
  !*** ./static/给Archlinux开启BFQ和MuQSS.md ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"title":"给Archlinux开启BFQ和MuQSS","date":"2019-10-24T13:19:21.000Z","tags":"Linux","categories":"Linux"},"body":"\n最近在Arch上更新系统的时候，总是遇到图形完全卡住的情况，今天上午突然想起来自己曾经设置了使用noop的IO调度，猜测是因为这个。然后本着不折腾不舒服的原则，打算使用ck内核上MuQSS的进程调度和BFQ的IO调度。\n\n<!-- more -->\n\nck内核并没有在arch的仓库，但是aur有linux-ck的包，安装一下就可以了。\n\n```\nyay -S linux-ck linux-ck-headers\n```\n\n编译需要一些时间，在我的破本子i7-8550U编译了一顿过桥米线的时间，然后成功使用了ck内核。\n\n### 开启MuQSS\n\nck内核默认使用的就是MuQSS调度，并不需要修改什么，开机即可。\n\n### 开启BFQ\n\n开启BFQ需要一些手动设置。分为两步：\n\n1. 修改grub，给内核提供新的参数\n2. 使用udev开启动态调整\n\n**修改grub**\n\n编辑`/etc/default/grub`中`GRUB_CMDLINE_LINUX_DEFAULT`，增加一行内容:\n```\nGRUB_CMDLINE_LINUX_DEFAULT=\"quiet scsi_mod.use_blk_mq=1\"\n```\n\n然后更新grub配置文件:\n\n```\nsudo grub-mkconfig -o /boot/grub/grub.cfg\n```\n\n**创建udev规则**\n\n创建并编辑`/etc/udev/rules.d/60-scheduler.rules`\n\n```\n# set deadline scheduler for non-rotating disks\nACTION==\"add|change\", KERNEL==\"sd[a-z]\", TEST!=\"queue/rotational\", ATTR{queue/scheduler}=\"deadline\"\nACTION==\"add|change\", KERNEL==\"sd[a-z]\", ATTR{queue/rotational}==\"0\", ATTR{queue/scheduler}=\"bfq\"\n\n# set cfq scheduler for rotating disks\nACTION==\"add|change\", KERNEL==\"sd[a-z]\", ATTR{queue/rotational}==\"1\", ATTR{queue/scheduler}=\"bfq\"\nACTION==\"add|change\", KERNEL==\"nvme[0-9]n1\", ATTR{queue/rotational}==\"0\", ATTR{queue/scheduler}=\"bfq\"\n```\n\n上面的配置是给固态硬盘使用deadline，给机械盘使用bfq，给nvme盘bfq。\n\n本着电脑只有ssd，所以天不怕地不怕的原则，我选择全部使用bfq。\n\n然后重启电脑，查看所有硬盘的调度器：\n\n```\n# justforlxz @ archlinux in ~ [13:29:04]\n$ cat /sys/block/*/queue/scheduler\nmq-deadline kyber [bfq] none\nmq-deadline kyber [bfq] none\n```\n\n通过dmesg查看MuQSS是否开启：\n\n```\n$ sudo dmesg | grep -i scheduler\nAlias tip: _ dmesg | grep -i scheduler\n[    0.295872] rcu: RCU calculated value of scheduler-enlistment delay is 10 jiffies.\n[    1.223982] io scheduler mq-deadline registered\n[    1.223984] io scheduler kyber registered\n[    1.224038] io scheduler bfq registered\n[    1.586191] MuQSS CPU scheduler v0.193 by Con Kolivas.\n```\n\n## 总结\n\nMuQSS是BFS(脑残调度器)的进化版，主要是改进了BFS的O(n)复杂度，BFS适用于桌面环境用户，可以提供较好的进程切换和延迟。\nBFQ是针对硬盘的IO调度，它通过预先分配一定的IO吞吐量来合理安排每个进程的IO操作。我需要用几天来感受一下MuQSS和CFQ的好处。\n","frontmatter":"title: 给Archlinux开启BFQ和MuQSS\ndate: 2019-10-24 13:19:21\ntags: Linux\ncategories: Linux"}

/***/ }),

/***/ "./static/解决IntelliJ-IDEA界面瞎眼.md":
/*!***************************************!*\
  !*** ./static/解决IntelliJ-IDEA界面瞎眼.md ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"title":"解决IntelliJ IDEA界面瞎眼","date":"2017-12-25T14:22:25.000Z","tags":"Linux"},"body":"\n今天在逛深度论坛的时候，无意间看到了有个回复，是处理IEDA字体很挫的，试了一下，效果非常棒。\n\n我之前也试了些网上的办法，都没有解决，字体挫的根本看不了，被逼无奈跑到windows下写MOD了。\n\n<!--more-->\n\n[原文链接](https://bbs.deepin.org/forum.php?mod=redirect&goto=findpost&ptid=150634&pid=418410&fromuid=13250)\n\n在/etc/profile.d/新建一个文件，用来设置java的环境变量:\n\n```\nsudo vim /etc/profile.d/z999__java_options.sh\n```\n\n```\n#!/bin/bash\nopts=\" -Dswing.aatext=true  -Dawt.useSystemAAFontSettings=lcd -Djava.net.useSystemProxies=true \"\nexport _JAVA_OPTIONS=\"`echo ${_JAVA_OPTIONS} |sed -Ee 's/-Dawt.useSystemAAFontSettings=\\w+//ig'` $opts\"\n```\n\n然后注销再登录，就可以看到效果了。\n\n其实这个解决办法在arch的wiki上有，只不过似乎是我写错了吧，反正是没生效，按照这种方法是可以的，就这么用吧。非常感觉@ihipop。","frontmatter":"title: 解决IntelliJ IDEA界面瞎眼\ndate: 2017-12-25 14:22:25\ntags: Linux"}

/***/ }),

/***/ "./static/解决NVIDIA重新启动以后系统冻结.md":
/*!**************************************!*\
  !*** ./static/解决NVIDIA重新启动以后系统冻结.md ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"title":"解决NVIDIA重新启动以后系统冻结","date":"2017-09-01T17:01:47.000Z","tags":"linux"},"body":"\n分期买了一台神舟 Z6-kp5s1，配置还不错，够用三年了，但是在linux下使用bumblebee的时候，发生了问题，折腾了好久，现在把解决方法写出来。\n\n<!-- more -->\n\n先说一下问题吧，正常安装bumblebee、bbswitch和nvidia驱动，重新启动系统以后，系统出现冻结，没有任何的输入输出，没有任何日志产生。问题似乎是固件错误，详情查看[讨论](https://github.com/Bumblebee-Project/Bumblebee/issues/764)和Linux的bug[讨论](https://bugzilla.kernel.org/show_bug.cgi?id=156341)。\n\n解决方法是看的[Witiko](https://witiko.github.io/Optimus-on-Linux/)的博客，通过给内核传递参数来防止系统出现冻结。修改/etc/default/grub,在文件底部追加以下内容：\n\n```\n# Bumblebee 3.2.1 fix (see https://github.com/Bumblebee-Project/Bumblebee/issues/764)\nGRUB_CMDLINE_LINUX_DEFAULT=\"$GRUB_CMDLINE_LINUX_DEFAULT \"'acpi_osi=! acpi_osi=\"Windows 2009\"'\n```\n\n如果不放心，请先禁用登录管理器，防止开机就出现冻结，然后尝试手动启动登录管理器。在tty登录，然后执行：\n\n```\nsudo systemctl start display-manager.service\n```\n\n如果一切正常，你将会看到图形，并且lspci -v中能看到nvidia已经被禁用，然后使用提供的测试方法进行测试，可以看到nvidia被启用，关闭测试成功，nvidia被禁用。\n\n\n提供一下我关闭nvidia以后的使用和续航时间吧。亮度调节为50%，cpu设置为powersave，运行了一下程序：\n\n- telegram\n- chrome\n- dde-file-manager\n- vs code\n- meow\n- 若干ss client\n- 还有一大堆乱七八糟的服务，懒得写了\n\n从14:35开始断电测试，到17:17还有23%的电量。","frontmatter":"title: 解决NVIDIA重新启动以后系统冻结\ndate: 2017-09-01 17:01:47\ntags: linux"}

/***/ }),

/***/ "./static/记录一个坑爹的usb网卡.md":
/*!********************************!*\
  !*** ./static/记录一个坑爹的usb网卡.md ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"title":"记录一个坑爹的usb网卡","date":"2019-12-09T19:31:04.000Z","tags":"Linux","categories":"Linux"},"body":"\n网卡型号是Realtek RTL8811CU/RTL8821CU USB Wi-Fi adapter，买来是为了让黑苹果上网的，windows下也会自动下载和安装驱动，但是linux比较难受，内核不提供这样的驱动，只能去官方拿源码搞，今天在arch上打算装一下驱动，结果遇到了很多问题。\n\nwiki上推荐的8821应该使用rtl88xxau-aircrack-dkms-git，但是我安装以后压根不能用，一点变化都没有，而且modprobe也没有作者给出的88XXau，无奈只得放弃。\n\n继续谷歌之，在[https://forum.mxlinux.org/viewtopic.php?f=107&t=50579](https://forum.mxlinux.org/viewtopic.php?f=107&t=50579)看到了别人给的方案，然后果断clone并make,然后就因为没有适配5.x的内核编译失败，这可不行，翻了一下issue，看到作者在[https://github.com/whitebatman2/rtl8821CU/issues/33](https://github.com/whitebatman2/rtl8821CU/issues/33)提到了一个[#23](https://github.com/whitebatman2/rtl8821CU/issues/23)，这标题写的够可以，`Newer version 5.4.1 (Support Linux versions from 4.4.x up to 5.4.x) `，赶紧搞起，去源地址clone和make,成功使用上了驱动，按照作者提到的安装`usb_modeswitch`，并切换usb模式，我成功的使用上了这个usb网卡。\n\n> 吐槽一下，开发环境还是linux下舒服，仓库的包安装一下就可以开发了，windows下要自己写路径，mac下brew限制太死，一些库安装以后还要自己手动做些处理，一不小心就把shell的环境变量搞不行了，或者压根不能正常工作。\n","frontmatter":"title: 记录一个坑爹的usb网卡\ndate: 2019-12-09 19:31:04\ntags: Linux\ncategories: Linux"}

/***/ }),

/***/ "./static/重构dde-session-ui.md":
/*!************************************!*\
  !*** ./static/重构dde-session-ui.md ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"title":"重构dde-session-ui","date":"2018-03-11T11:48:01.000Z","tags":"Linux"},"body":"\ndde-session-ui里面包含了很多项目，是一个集合，但是其中的代码缺少合理的维护，以至于已经到了必须重构才能继续开发和维护，在支持AD域登录的时候，如果强制加上功能，代码会变得更加糟糕，所以和石博文一块重构了其中非常重要的UserWidget。\n\n<!-- more -->\n\n## 重构前的设计\n\n重构前的dde-lock和lightdm-deepin-greeter是非常混乱的，处理逻辑都混杂在一块，虽然能看出有基本的结构，但是整体并未解耦。\n\n## 重构后的设计\n\n- 基于User类的处理\n- UserWidget负责提供对用户的处理，暴露出基本的currentUser和LogindUsers。\n- Lock和Greeter的Manager从UserWidget、SessionWidget中获取用户和用户的会话。\n- Manager只负责控件的位置和用户的验证。\n- 背景修改为Manager提供模糊的壁纸，FullBackground只提供绘制。\n\n重构以后用了大概原代码的1/3，启动速度也快了，感觉世界充满了美好… 就是重构历程太辛苦…\n\n本次也发现了很多自身的问题，基础并没有学好，很多地方都可以使用更好的处理方式【就是管不住这手…】\n\n","frontmatter":"title: 重构dde-session-ui\ndate: 2018-03-11 11:48:01\ntags: Linux"}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9tYXJrZG93bi1pbmNsdWRlLnRzIiwid2VicGFjazovLy8uL2Rpc3QvbWFya2Rvd25zLzAyNTIyYzJlNTIzZDk1YjY5MzUyOGRkMGNmMDc3MTBmLnRzIiwid2VicGFjazovLy8uL2Rpc3QvbWFya2Rvd25zLzBjN2MzZTY3MjJlODRhMzQ0OTUxMWNmZTU2NzU5N2QyLnRzIiwid2VicGFjazovLy8uL2Rpc3QvbWFya2Rvd25zLzBmYmY2MjY4YWNmY2E1ZTJkYTdiNGFiYTNkYzI3MzY2LnRzIiwid2VicGFjazovLy8uL2Rpc3QvbWFya2Rvd25zLzE0NDgwYjk5NzU1MThhNzc3MzMwMDY3Y2MzY2UyYTliLnRzIiwid2VicGFjazovLy8uL2Rpc3QvbWFya2Rvd25zLzE1NDZjNTJkZDg4NGM0NzA1NmNlMmY4MjQwNDA4ZDk2LnRzIiwid2VicGFjazovLy8uL2Rpc3QvbWFya2Rvd25zLzE2MTkyYjZlYjcxNzdlOGIyMjJiNTRiZDk0MDczZmZkLnRzIiwid2VicGFjazovLy8uL2Rpc3QvbWFya2Rvd25zLzE3Y2EzZjRlZjc4YWM5YTY4YmQ0NzM1YjQ0ZDZkODQxLnRzIiwid2VicGFjazovLy8uL2Rpc3QvbWFya2Rvd25zLzFmNTVmZmE0Zjk2YzA0NjRmZjQ3MTEyYWYwMDZkYTVlLnRzIiwid2VicGFjazovLy8uL2Rpc3QvbWFya2Rvd25zLzIwZWI0NjcxMDljMzViNDhkNTk5MGI2MzdlYWMxMzNmLnRzIiwid2VicGFjazovLy8uL2Rpc3QvbWFya2Rvd25zLzIyOTQxN2YwNmY1NGRhZDdiMzVmZWY2NjNmMjYzOWRjLnRzIiwid2VicGFjazovLy8uL2Rpc3QvbWFya2Rvd25zLzIzYjE0ZGFlMmYyNDBjOWUyYzFlNmI0MmU2YzZhNzA0LnRzIiwid2VicGFjazovLy8uL2Rpc3QvbWFya2Rvd25zLzI1Y2FkN2Q1OTQ3ODhmOTA0YmEzZmVmY2EwOWI4NGI4LnRzIiwid2VicGFjazovLy8uL2Rpc3QvbWFya2Rvd25zLzI3MDEzNTUxOGRmN2Y0MTI5NTU4ZjkwNzZmNzlhMGE4LnRzIiwid2VicGFjazovLy8uL2Rpc3QvbWFya2Rvd25zLzI3OGIwN2E5MzBiYzRkNDc4YmVhZTM1Y2FjMDhiMzI5LnRzIiwid2VicGFjazovLy8uL2Rpc3QvbWFya2Rvd25zLzI5NzYxZmVkMzEyODYxZGQ4ZTNhZDcwNGZmZDE0NDIxLnRzIiwid2VicGFjazovLy8uL2Rpc3QvbWFya2Rvd25zLzJlMjIxN2FiZDMxNGI2MDE3NGQwYTE1Yzg4ZTY1MzdhLnRzIiwid2VicGFjazovLy8uL2Rpc3QvbWFya2Rvd25zLzMxYzFlM2QyYzM5Mzg1ZWFhY2Q2NWEwNGVkMDU5MDVmLnRzIiwid2VicGFjazovLy8uL2Rpc3QvbWFya2Rvd25zLzM1OWVmNWZkYjk2MzE4OWJiODUyZmRhOWMwOTRkNjRjLnRzIiwid2VicGFjazovLy8uL2Rpc3QvbWFya2Rvd25zLzNlM2MzNTM5NGE3MmM5M2ZjZjJkYjg2ZTMyMDg0YmVlLnRzIiwid2VicGFjazovLy8uL2Rpc3QvbWFya2Rvd25zLzQ1NzQ3OWJmY2QyMGU4MWYxYzg3YTIyY2M4MDI0NTg0LnRzIiwid2VicGFjazovLy8uL2Rpc3QvbWFya2Rvd25zLzQ2NzE0MmE5MWJiMDc1ODAwMjQwNWUzNGMyODAxMDQzLnRzIiwid2VicGFjazovLy8uL2Rpc3QvbWFya2Rvd25zLzQ2ZjNiOTJhMmM3YjMxMzJlNWMwMGViYTMyOWU3ZjFiLnRzIiwid2VicGFjazovLy8uL2Rpc3QvbWFya2Rvd25zLzRjMTdmMjc3YmQyNzg2MzRkYzc5ZTRjNjAwZmYyNGUwLnRzIiwid2VicGFjazovLy8uL2Rpc3QvbWFya2Rvd25zLzRlYzU4MTYxY2I1NjM0Y2RmM2UwYTE5YmQzOTI1YzMzLnRzIiwid2VicGFjazovLy8uL2Rpc3QvbWFya2Rvd25zLzUyMDgzMmJkNmFkZWUwZWQxMGMwMzY2Zjk4Mjc1MDk2LnRzIiwid2VicGFjazovLy8uL2Rpc3QvbWFya2Rvd25zLzU0ODEyY2Q3NGM3ZmFjODllNzZkNjgyZDdhZWEwNzQ2LnRzIiwid2VicGFjazovLy8uL2Rpc3QvbWFya2Rvd25zLzU3NzAzNmFkM2JiMTA4ZThlZGY5YjhiMDhmMDk2M2ViLnRzIiwid2VicGFjazovLy8uL2Rpc3QvbWFya2Rvd25zLzYxNzQ2MGFhMzYxOWIzOTJhMWMyNzBlNTliNTNkYTZmLnRzIiwid2VicGFjazovLy8uL2Rpc3QvbWFya2Rvd25zLzcxMTA0NjY4MmU0ZmFkOWViMzYwYjJmYjI5NWNmZTdkLnRzIiwid2VicGFjazovLy8uL2Rpc3QvbWFya2Rvd25zLzc2ZjU5YjcwYmMwYTQ1YTVkYzEwYTdlNGU5N2Y2N2QwLnRzIiwid2VicGFjazovLy8uL2Rpc3QvbWFya2Rvd25zLzc5ZjVmYjE0YzA0NTBlY2Q0M2U1Y2U3OGExYTUyMTI3LnRzIiwid2VicGFjazovLy8uL2Rpc3QvbWFya2Rvd25zLzdiZTY4MjY0N2VjNzYxZWMyMWYxYTZmOThiOGVjNzYxLnRzIiwid2VicGFjazovLy8uL2Rpc3QvbWFya2Rvd25zLzdjMTI0MTYzMzYxNjY4ZThmZjliNjg0MWIyM2FiNTFjLnRzIiwid2VicGFjazovLy8uL2Rpc3QvbWFya2Rvd25zLzdjYmExYjFhNzJjZGEzMDI0ODAyNTJmMGIwYWE1ZWJkLnRzIiwid2VicGFjazovLy8uL2Rpc3QvbWFya2Rvd25zLzgxNzAzNDk5Y2IwMTM5YTVkOTVlYWE1MWQyNGFkMWQwLnRzIiwid2VicGFjazovLy8uL2Rpc3QvbWFya2Rvd25zLzgzMDkyN2RjNTA5MjM1ODA4ZDMwZjQzMzU1YzY1NDliLnRzIiwid2VicGFjazovLy8uL2Rpc3QvbWFya2Rvd25zLzhhZDBjYjJlYTFhNTNiNWFjZDJmNzIzZTJkZDlmNTM5LnRzIiwid2VicGFjazovLy8uL2Rpc3QvbWFya2Rvd25zLzhkMmY4NWE0NDQ0ODYzMDBiMjRiMmIzYWE2MDgyMDljLnRzIiwid2VicGFjazovLy8uL2Rpc3QvbWFya2Rvd25zLzkyZmQ4ZTAxMDA0ODRiMjZiMTNhYTRkMmZiNjZkODI4LnRzIiwid2VicGFjazovLy8uL2Rpc3QvbWFya2Rvd25zLzk1MGEwZjc2ODYwYWQyODA5OTZjMDQ0OWM5ZjI2YzdkLnRzIiwid2VicGFjazovLy8uL2Rpc3QvbWFya2Rvd25zLzllMjI4ZGE4YzEzZGE0MTA5ZTdlN2MzZDg0NTQ2YmFjLnRzIiwid2VicGFjazovLy8uL2Rpc3QvbWFya2Rvd25zL2E3NjVlYzEyOGY1MDFiYWY0Mjc4NWNkNjBlZDA5YzQxLnRzIiwid2VicGFjazovLy8uL2Rpc3QvbWFya2Rvd25zL2FlMGQwZjc1YzZkY2ZjOTVkMTE3ZDRiYzQ5MDQ5MTA3LnRzIiwid2VicGFjazovLy8uL2Rpc3QvbWFya2Rvd25zL2IzM2Q4NjQyZjY4YjIzNTc5YjAxNmUwNzg2ZTMwNmY5LnRzIiwid2VicGFjazovLy8uL2Rpc3QvbWFya2Rvd25zL2I1MjIzOTRiNjU4YzJlMjM4OGI4ZjhhMDcyNGJlY2ZkLnRzIiwid2VicGFjazovLy8uL2Rpc3QvbWFya2Rvd25zL2I2ZTI5YWRlNDIzMjllYTQ4M2Q2OTg2ZTY4NTIwZjA4LnRzIiwid2VicGFjazovLy8uL2Rpc3QvbWFya2Rvd25zL2MxOGU4NWI4ZjY2ODMwY2U3ODMzYzU4NGU2MmM4NmMwLnRzIiwid2VicGFjazovLy8uL2Rpc3QvbWFya2Rvd25zL2MzYTA0OWQ3ZDRkMjhkZWJiODFhZjIyY2YzM2U1MjFhLnRzIiwid2VicGFjazovLy8uL2Rpc3QvbWFya2Rvd25zL2NhNGQwMDA3MWUyZmRlMWY2YjE3NmI1ODY4MmNjODQxLnRzIiwid2VicGFjazovLy8uL2Rpc3QvbWFya2Rvd25zL2NmNTQyMzJjZmIwY2U5NTNkYmMzYjQ4YmZmY2ViMmU2LnRzIiwid2VicGFjazovLy8uL2Rpc3QvbWFya2Rvd25zL2Q2NTQzNzg1OGRiOGE2YzQyMWUyOTE3NjBjNjAwM2IzLnRzIiwid2VicGFjazovLy8uL2Rpc3QvbWFya2Rvd25zL2Q2YWQyOGRmNTRlMTFkYjkzMGRiNDdhNWI1NWQ5YjRiLnRzIiwid2VicGFjazovLy8uL2Rpc3QvbWFya2Rvd25zL2Q4ZDExZmMyYzU2Y2FiNWZmZWFiZGQxYTFiZTcwNDI4LnRzIiwid2VicGFjazovLy8uL2Rpc3QvbWFya2Rvd25zL2RjZTNlOGU3ZmVkNWIwNjlhNzFkMTZjNGE3N2Y2YmEwLnRzIiwid2VicGFjazovLy8uL2Rpc3QvbWFya2Rvd25zL2ViYTk5MzhkYzU0MzRlMGE4NmU5MTBkZjExYTJmOTQxLnRzIiwid2VicGFjazovLy8uL2Rpc3QvbWFya2Rvd25zL2VjOGQ4YTRhMzQwZThjZWIyNjg2ODlhMmUzNjY5MTg3LnRzIiwid2VicGFjazovLy8uL2Rpc3QvbWFya2Rvd25zL2Y2Y2UwNGRjZjVmNThiYTBjM2RkNzcwNDlhZGUyNjdkLnRzIiwid2VicGFjazovLy8uL2Rpc3QvbWFya2Rvd25zL2ZkOWJlOWJmZmRmMDBjMjg1YTQ0OTI3YTZiY2I3Njg2LnRzIiwid2VicGFjazovLy8uL2Rpc3QvbWFya2Rvd25zL2ZlZWE1MTdhZjliNmVlYjZjMGE4MWEwNWM0YmNmYjc5LnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAudnVlPzY5ZDQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcGFnZXMvSW5kZXgudnVlP2Q3NmIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcGFnZXMvUG9zdERldGFpbC52dWU/MmVmZiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy93aWRnZXRzL1Bvc3RCbG9jay52dWU/NzI1OSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy93aWRnZXRzL1Bvc3RMaXN0LnZ1ZT85YjQxIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3dpZGdldHMvU2lkZUJhci52dWU/Y2QzYSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy93aWRnZXRzL1NpdGVEZXNjcmlwdGlvbi52dWU/MmM2YyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy93aWRnZXRzL1NpdGVJbmZvLnZ1ZT8xMWQ4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3dpZGdldHMvU2l0ZU1lbnUudnVlP2EwNDYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC52dWU/YmRiNyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wYWdlcy9BYm91dC52dWU/MGJhYyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wYWdlcy9JbmRleC52dWU/Mjk5NyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wYWdlcy9Qb3N0RGV0YWlsLnZ1ZT8yMjQ5Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3BhZ2VzL1llYXIudnVlPzY3MTQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvd2lkZ2V0cy9Qb3N0QmxvY2sudnVlPzVmN2QiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvd2lkZ2V0cy9Qb3N0TGlzdC52dWU/MzI1MiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy93aWRnZXRzL1NpZGVCYXIudnVlPzdlYzYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvd2lkZ2V0cy9TaXRlRGVzY3JpcHRpb24udnVlP2ZmNTIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvd2lkZ2V0cy9TaXRlSW5mby52dWU/N2Y3OSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy93aWRnZXRzL1NpdGVNZW51LnZ1ZT9iNDQyIiwid2VicGFjazovLy8uL3NyYy9hcHAudnVlPzNiY2EiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcGFnZXMvQWJvdXQudnVlPzQ2ZTIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcGFnZXMvSW5kZXgudnVlP2U2ODUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcGFnZXMvUG9zdERldGFpbC52dWU/MzBmMyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wYWdlcy9ZZWFyLnZ1ZT83YWUxIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3dpZGdldHMvUG9zdEJsb2NrLnZ1ZT85MmNlIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3dpZGdldHMvUG9zdExpc3QudnVlP2UyMDQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvd2lkZ2V0cy9TaWRlQmFyLnZ1ZT81YThjIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3dpZGdldHMvU2l0ZURlc2NyaXB0aW9uLnZ1ZT84YjExIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3dpZGdldHMvU2l0ZUluZm8udnVlPzc1ZDUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvd2lkZ2V0cy9TaXRlTWVudS52dWU/MDY3ZCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwLnZ1ZT9iMmMwIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3BhZ2VzL0luZGV4LnZ1ZT81MmJkIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3BhZ2VzL1Bvc3REZXRhaWwudnVlP2IzNDIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvd2lkZ2V0cy9Qb3N0QmxvY2sudnVlPzViZTAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvd2lkZ2V0cy9Qb3N0TGlzdC52dWU/NDJmYiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy93aWRnZXRzL1NpZGVCYXIudnVlP2EyYTMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvd2lkZ2V0cy9TaXRlRGVzY3JpcHRpb24udnVlP2RhMzUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvd2lkZ2V0cy9TaXRlSW5mby52dWU/NzQ4OCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy93aWRnZXRzL1NpdGVNZW51LnZ1ZT9jNGZlIiwid2VicGFjazovLy8uL3NyYy9hcHAudnVlIiwid2VicGFjazovLy8uL3NyYy9hcHAudnVlP2RkZjEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC52dWU/NDlhYiIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwLnZ1ZT85ZDQxIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3BhZ2VzL0Fib3V0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wYWdlcy9BYm91dC52dWU/ZDA1YyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wYWdlcy9BYm91dC52dWU/NDhlNCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wYWdlcy9JbmRleC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcGFnZXMvSW5kZXgudnVlPzUzMTciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcGFnZXMvSW5kZXgudnVlPzk2ODkiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcGFnZXMvSW5kZXgudnVlPzE1ODYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcGFnZXMvUG9zdERldGFpbC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcGFnZXMvUG9zdERldGFpbC52dWU/YzdiOCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wYWdlcy9Qb3N0RGV0YWlsLnZ1ZT8xOWIwIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3BhZ2VzL1Bvc3REZXRhaWwudnVlPzQyNDUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcGFnZXMvWWVhci52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcGFnZXMvWWVhci52dWU/Y2U2ZCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wYWdlcy9ZZWFyLnZ1ZT8xODNhIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3V0aWxzL3JvdXRlcnBhcmFtcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy93aWRnZXRzL1Bvc3RCbG9jay52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvd2lkZ2V0cy9Qb3N0QmxvY2sudnVlPzU1MDMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvd2lkZ2V0cy9Qb3N0QmxvY2sudnVlPzllMzkiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvd2lkZ2V0cy9Qb3N0QmxvY2sudnVlP2ViNzciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvd2lkZ2V0cy9Qb3N0TGlzdC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvd2lkZ2V0cy9Qb3N0TGlzdC52dWU/NzlhYSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy93aWRnZXRzL1Bvc3RMaXN0LnZ1ZT8xM2JiIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3dpZGdldHMvUG9zdExpc3QudnVlPzI0YjQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvd2lkZ2V0cy9TaWRlQmFyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy93aWRnZXRzL1NpZGVCYXIudnVlPzcyMWQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvd2lkZ2V0cy9TaWRlQmFyLnZ1ZT9hYzM4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3dpZGdldHMvU2lkZUJhci52dWU/YTY0NiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy93aWRnZXRzL1NpdGVEZXNjcmlwdGlvbi52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvd2lkZ2V0cy9TaXRlRGVzY3JpcHRpb24udnVlPzhhOTMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvd2lkZ2V0cy9TaXRlRGVzY3JpcHRpb24udnVlPzQ3NjYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvd2lkZ2V0cy9TaXRlRGVzY3JpcHRpb24udnVlPzRhMTYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvd2lkZ2V0cy9TaXRlSW5mby52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvd2lkZ2V0cy9TaXRlSW5mby52dWU/NGIyOCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy93aWRnZXRzL1NpdGVJbmZvLnZ1ZT9jMzY5Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3dpZGdldHMvU2l0ZUluZm8udnVlP2JiZjMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvd2lkZ2V0cy9TaXRlTWVudS52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvd2lkZ2V0cy9TaXRlTWVudS52dWU/NTk4NSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy93aWRnZXRzL1NpdGVNZW51LnZ1ZT9mYTk5Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3dpZGdldHMvU2l0ZU1lbnUudnVlPzhmZjYiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvZ2V0dGVycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvbXV0YXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL3N0YXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9zdG9yZS9zdG9yZS50cyIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvMjAxOXJldmlldy5tZCIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvQXJjaExpbnV46L+Q6KGMc3RlYW3lh7rnjrDnvLrlsJFMaWJHTC1zdGVhbS1saWJHTC1lcnJvci1mYWlsZWQtdG8tbG9hZC1kcml2ZXItc3dyYXN0Lm1kIiwid2VicGFjazovLy8uL3N0YXRpYy9DLXBsdXMtcGx1cy1JdGVyYXRvci3nrJTorrAubWQiLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL0NNYWtlLUNUZXN0cy1mb3ItZGRlLWNvbnRyb2wtY2VudGVyLm1kIiwid2VicGFjazovLy8uL3N0YXRpYy9Eb2Nr5o+S5Lu25byA5Y+RLm1kIiwid2VicGFjazovLy8uL3N0YXRpYy9KYXZhU2NyaXB05bu66YCg6ICF5qih5byPLm1kIiwid2VicGFjazovLy8uL3N0YXRpYy9MaW51eOeahFBBTeaYr+S7gOS5iC5tZCIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvUFBBLm1kIiwid2VicGFjazovLy8uL3N0YXRpYy9TQU9VVElMUy5tZCIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvVEtM5Li76aKY5LyY5YyWLei9rC5tZCIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvVG9wYmFyLm1kIiwid2VicGFjazovLy8uL3N0YXRpYy9hcmlhMumFjee9ri5tZCIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvY3BwLXNtYXJ0LXBvaW50ZXIubWQiLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2NwcC1zb3J0Lm1kIiwid2VicGFjazovLy8uL3N0YXRpYy9kZWJ1Z+S6huS4pOWkqe+8jOWPquWIoOS6huS4gOihjOS7o+eggS5tZCIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvZGVlcGlu5b6F5py65ZCO6ZSu55uY5ZKM6Kem5pG45p2/5peg5rOV5L2/55So55qE6Kej5Yaz5pa55rOVLm1kIiwid2VicGFjazovLy8uL3N0YXRpYy9kb2NrZXItYXJpYTJjLm1kIiwid2VicGFjazovLy8uL3N0YXRpYy9kb2NrZXItaGV4by5tZCIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvZHJlYW1zY2VuZeaPkuS7tuW8gOWPkS5tZCIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvZm9udC1jb25maWcubWQiLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2Z1Y2stdGFvYmFvLm1kIiwid2VicGFjazovLy8uL3N0YXRpYy9oZWxsby5tZCIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvaGV4byBwYWdlIG1vdmUgdG8gY29kaW5nLm1kIiwid2VicGFjazovLy8uL3N0YXRpYy9oaWJlcm5hdGUtZm9yLXN3YXBmaWxlLm1kIiwid2VicGFjazovLy8uL3N0YXRpYy9ob3ctdG8tdXNlLUxOTVAtb24tZGVlcGluLm1kIiwid2VicGFjazovLy8uL3N0YXRpYy9saW51eOS4i+WuieijhXZtd2FyZeWPimFyY2hsaW51eOeahOWuieijheWSjOmFjee9ri5tZCIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvbXktbGlmZS5tZCIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvcGFnZS5tZCIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvcXVpY2sgc29ydCBmb3IgYysrLm1kIiwid2VicGFjazovLy8uL3N0YXRpYy9zYWt1cmEubWQiLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL3Rlc3QubWQiLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL3RvcGJhci1QUEEubWQiLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL3VzZSBnb29nbGUgY2FsZW5kYXIgdG8gZmluaXNoZSB3b3JrLm1kIiwid2VicGFjazovLy8uL3N0YXRpYy91c2UtZ2l0aHViLWFjdGlvbnMtdG8tZGVwb2x5LWhleG8ubWQiLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL3VzZS1zZXJpYWwtcG9ydC1kZWJ1Zy1kZWVwaW4tb24tYXJjaGxpbnV4Lm1kIiwid2VicGFjazovLy8uL3N0YXRpYy92dWUtY29tcG9uZW50LXByb3BzLm1kIiwid2VicGFjazovLy8uL3N0YXRpYy92dWUtdHJhbnNpdGlvbnMubWQiLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL3dlYmhvb2subWQiLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL3dlYnBhY2vlhaXpl6gubWQiLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL3dzbDLnmoTkvb/nlKjkvZPpqowubWQiLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL+S9v+eUqERUS+W8gOWPkS5tZCIsIndlYnBhY2s6Ly8vLi9zdGF0aWMv5L2/55Sod2VicGFjay1kZXYtc2VydmVy5p2l55uR5ZCs6aG555uu5Y+Y5YyWLm1kIiwid2VicGFjazovLy8uL3N0YXRpYy/kvb/nlKh3ZWJwYWNr5omT5YyFVnVl5ZKMVHlwZVNjcmlwdC5tZCIsIndlYnBhY2s6Ly8vLi9zdGF0aWMv5L2/55So5Lyq5YWD57Sg5Yib5bu65LiA5Liq5ZyG54K5Lm1kIiwid2VicGFjazovLy8uL3N0YXRpYy/kv67lpI1BcmNobGludXjnmoRHcnViLm1kIiwid2VicGFjazovLy8uL3N0YXRpYy/lhaXlnZF0eXBlc2NyaXB05LqGLm1kIiwid2VicGFjazovLy8uL3N0YXRpYy/ljbfnp6/npZ7nu4/nvZHnu5znroDov7AubWQiLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL+WcqERlZXBpbkxpbnV45LiL5L2/55SoblZpZGlhLUNVREEubWQiLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL+WcqGRlZXBpbuS4iuS9v+eUqGRuc21hc3HmnaXop6PlhrNkbnPop6PmnpDnvJPmhaIubWQiLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL+W8gOWPkXRvcGJhcuS4reeahOaKgOacr+mXrumimC5tZCIsIndlYnBhY2s6Ly8vLi9zdGF0aWMv5oiR55qE5Luj55CG5oqY6IW+5pa55qGILm1kIiwid2VicGFjazovLy8uL3N0YXRpYy/mraPluLjnmoTmtYHnqIvlnKjnlYzpnaLkuIrljbTmmK9idWcubWQiLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL+a1heiwiEphdmFzY3JpcHTmnoTpgKDlmajmqKHlvI8ubWQiLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL+a3seW6puWtpuS5oOeslOiusC5tZCIsIndlYnBhY2s6Ly8vLi9zdGF0aWMv57uZQXJjaGxpbnV45byA5ZCvQkZR5ZKMTXVRU1MubWQiLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL+ino+WGs0ludGVsbGlKLUlERUHnlYzpnaLnno7nnLwubWQiLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL+ino+WGs05WSURJQemHjeaWsOWQr+WKqOS7peWQjuezu+e7n+WGu+e7ky5tZCIsIndlYnBhY2s6Ly8vLi9zdGF0aWMv6K6w5b2V5LiA5Liq5Z2R54i555qEdXNi572R5Y2hLm1kIiwid2VicGFjazovLy8uL3N0YXRpYy/ph43mnoRkZGUtc2Vzc2lvbi11aS5tZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQSxnQkFBZ0IsdUJBQXVCO1FBQ3ZDOzs7UUFHQTtRQUNBO1FBQ0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JKYSxpQkFBUyxHQUE4QixJQUFJLEdBQUcsQ0FBdUI7SUFDbEYsQ0FBQyxrQ0FBa0MsZ0VBQVMsK0dBQW1GLElBQUU7SUFDakksQ0FBQyxrQ0FBa0MsZ0VBQVMsK0dBQW1GLElBQUU7SUFDakksQ0FBQyxrQ0FBa0MsZ0VBQVMsK0dBQW1GLElBQUU7SUFDakksQ0FBQyxrQ0FBa0MsZ0VBQVMsK0dBQW1GLElBQUU7SUFDakksQ0FBQyxrQ0FBa0MsZ0VBQVMsK0dBQW1GLElBQUU7SUFDakksQ0FBQyxrQ0FBa0MsZ0VBQVMsK0dBQW1GLElBQUU7SUFDakksQ0FBQyxrQ0FBa0MsZ0VBQVMsK0dBQW1GLElBQUU7SUFDakksQ0FBQyxrQ0FBa0MsZ0VBQVMsK0dBQW1GLElBQUU7SUFDakksQ0FBQyxrQ0FBa0MsZ0VBQVMsK0dBQW1GLElBQUU7SUFDakksQ0FBQyxrQ0FBa0MsZ0VBQVMsK0dBQW1GLElBQUU7SUFDakksQ0FBQyxrQ0FBa0MsZ0VBQVMsK0dBQW1GLElBQUU7SUFDakksQ0FBQyxrQ0FBa0MsZ0VBQVMsK0dBQW1GLElBQUU7SUFDakksQ0FBQyxrQ0FBa0MsZ0VBQVMsK0dBQW1GLElBQUU7SUFDakksQ0FBQyxrQ0FBa0MsZ0VBQVMsK0dBQW1GLElBQUU7SUFDakksQ0FBQyxrQ0FBa0MsZ0VBQVMsK0dBQW1GLElBQUU7SUFDakksQ0FBQyxrQ0FBa0MsZ0VBQVMsK0dBQW1GLElBQUU7SUFDakksQ0FBQyxrQ0FBa0MsZ0VBQVMsK0dBQW1GLElBQUU7SUFDakksQ0FBQyxrQ0FBa0MsZ0VBQVMsK0dBQW1GLElBQUU7SUFDakksQ0FBQyxrQ0FBa0MsZ0VBQVMsK0dBQW1GLElBQUU7SUFDakksQ0FBQyxrQ0FBa0MsZ0VBQVMsK0dBQW1GLElBQUU7SUFDakksQ0FBQyxrQ0FBa0MsZ0VBQVMsK0dBQW1GLElBQUU7SUFDakksQ0FBQyxrQ0FBa0MsZ0VBQVMsK0dBQW1GLElBQUU7SUFDakksQ0FBQyxrQ0FBa0MsZ0VBQVMsK0dBQW1GLElBQUU7SUFDakksQ0FBQyxrQ0FBa0MsZ0VBQVMsK0dBQW1GLElBQUU7SUFDakksQ0FBQyxrQ0FBa0MsZ0VBQVMsK0dBQW1GLElBQUU7SUFDakksQ0FBQyxrQ0FBa0MsZ0VBQVMsK0dBQW1GLElBQUU7SUFDakksQ0FBQyxrQ0FBa0MsZ0VBQVMsK0dBQW1GLElBQUU7SUFDakksQ0FBQyxrQ0FBa0MsZ0VBQVMsK0dBQW1GLElBQUU7SUFDakksQ0FBQyxrQ0FBa0MsZ0VBQVMsK0dBQW1GLElBQUU7SUFDakksQ0FBQyxrQ0FBa0MsZ0VBQVMsK0dBQW1GLElBQUU7SUFDakksQ0FBQyxrQ0FBa0MsZ0VBQVMsK0dBQW1GLElBQUU7SUFDakksQ0FBQyxrQ0FBa0MsZ0VBQVMsK0dBQW1GLElBQUU7SUFDakksQ0FBQyxrQ0FBa0MsZ0VBQVMsK0dBQW1GLElBQUU7SUFDakksQ0FBQyxrQ0FBa0MsZ0VBQVMsK0dBQW1GLElBQUU7SUFDakksQ0FBQyxrQ0FBa0MsZ0VBQVMsK0dBQW1GLElBQUU7SUFDakksQ0FBQyxrQ0FBa0MsZ0VBQVMsK0dBQW1GLElBQUU7SUFDakksQ0FBQyxrQ0FBa0MsZ0VBQVMsK0dBQW1GLElBQUU7SUFDakksQ0FBQyxrQ0FBa0MsZ0VBQVMsK0dBQW1GLElBQUU7SUFDakksQ0FBQyxrQ0FBa0MsZ0VBQVMsK0dBQW1GLElBQUU7SUFDakksQ0FBQyxrQ0FBa0MsZ0VBQVMsK0dBQW1GLElBQUU7SUFDakksQ0FBQyxrQ0FBa0MsZ0VBQVMsK0dBQW1GLElBQUU7SUFDakksQ0FBQyxrQ0FBa0MsZ0VBQVMsK0dBQW1GLElBQUU7SUFDakksQ0FBQyxrQ0FBa0MsZ0VBQVMsK0dBQW1GLElBQUU7SUFDakksQ0FBQyxrQ0FBa0MsZ0VBQVMsK0dBQW1GLElBQUU7SUFDakksQ0FBQyxrQ0FBa0MsZ0VBQVMsK0dBQW1GLElBQUU7SUFDakksQ0FBQyxrQ0FBa0MsZ0VBQVMsK0dBQW1GLElBQUU7SUFDakksQ0FBQyxrQ0FBa0MsZ0VBQVMsK0dBQW1GLElBQUU7SUFDakksQ0FBQyxrQ0FBa0MsZ0VBQVMsK0dBQW1GLElBQUU7SUFDakksQ0FBQyxrQ0FBa0MsZ0VBQVMsK0dBQW1GLElBQUU7SUFDakksQ0FBQyxrQ0FBa0MsZ0VBQVMsK0dBQW1GLElBQUU7SUFDakksQ0FBQyxrQ0FBa0MsZ0VBQVMsK0dBQW1GLElBQUU7SUFDakksQ0FBQyxrQ0FBa0MsZ0VBQVMsK0dBQW1GLElBQUU7SUFDakksQ0FBQyxrQ0FBa0MsZ0VBQVMsK0dBQW1GLElBQUU7SUFDakksQ0FBQyxrQ0FBa0MsZ0VBQVMsK0dBQW1GLElBQUU7SUFDakksQ0FBQyxrQ0FBa0MsZ0VBQVMsK0dBQW1GLElBQUU7SUFDakksQ0FBQyxrQ0FBa0MsZ0VBQVMsK0dBQW1GLElBQUU7SUFDakksQ0FBQyxrQ0FBa0MsZ0VBQVMsK0dBQW1GLElBQUU7SUFDakksQ0FBQyxrQ0FBa0MsZ0VBQVMsK0dBQW1GLElBQUU7SUFDakksQ0FBQyxrQ0FBa0MsZ0VBQVMsK0dBQW1GLElBQUU7Q0FFaEksQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5REgscUZBQXFGO0FBQ3JGLHFIQUFxQztBQUdyQyxNQUFNLEVBQUUsR0FBRyxJQUFJLHFCQUFVLEVBQUUsQ0FBQztBQUU1QixrQkFBZSxHQUFTLEVBQUU7SUFDdEIsTUFBTSxDQUFDLEdBQVMsbUJBQU8sQ0FBQyw0Q0FBbUQsQ0FBQyxDQUFDO0lBRTdFLE1BQU0sSUFBSSxHQUFVLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQ2pELE1BQU0sT0FBTyxHQUFZLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFMUMsSUFBSSxJQUFJLEdBQUcsSUFBSSxZQUFJLEVBQUUsQ0FBQztJQUV0QixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUM7SUFDL0IscUJBQXFCO0lBQ3JCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ2pCLE9BQU8sSUFBSSxDQUFDO0FBQ2hCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CRCxxRkFBcUY7QUFDckYscUhBQXFDO0FBR3JDLE1BQU0sRUFBRSxHQUFHLElBQUkscUJBQVUsRUFBRSxDQUFDO0FBRTVCLGtCQUFlLEdBQVMsRUFBRTtJQUN0QixNQUFNLENBQUMsR0FBUyxtQkFBTyxDQUFDLG9EQUF1RCxDQUFDLENBQUM7SUFFakYsTUFBTSxJQUFJLEdBQVUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDakQsTUFBTSxPQUFPLEdBQVksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUUxQyxJQUFJLElBQUksR0FBRyxJQUFJLFlBQUksRUFBRSxDQUFDO0lBRXRCLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQztJQUMvQixxQkFBcUI7SUFDckIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDakIsT0FBTyxJQUFJLENBQUM7QUFDaEIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJELHFGQUFxRjtBQUNyRixxSEFBcUM7QUFHckMsTUFBTSxFQUFFLEdBQUcsSUFBSSxxQkFBVSxFQUFFLENBQUM7QUFFNUIsa0JBQWUsR0FBUyxFQUFFO0lBQ3RCLE1BQU0sQ0FBQyxHQUFTLG1CQUFPLENBQUMsa0xBQXNILENBQUMsQ0FBQztJQUVoSixNQUFNLElBQUksR0FBVSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUNqRCxNQUFNLE9BQU8sR0FBWSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRTFDLElBQUksSUFBSSxHQUFHLElBQUksWUFBSSxFQUFFLENBQUM7SUFFdEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDO0lBQy9CLHFCQUFxQjtJQUNyQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNqQixPQUFPLElBQUksQ0FBQztBQUNoQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQkQscUZBQXFGO0FBQ3JGLHFIQUFxQztBQUdyQyxNQUFNLEVBQUUsR0FBRyxJQUFJLHFCQUFVLEVBQUUsQ0FBQztBQUU1QixrQkFBZSxHQUFTLEVBQUU7SUFDdEIsTUFBTSxDQUFDLEdBQVMsbUJBQU8sQ0FBQyxrRkFBc0UsQ0FBQyxDQUFDO0lBRWhHLE1BQU0sSUFBSSxHQUFVLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQ2pELE1BQU0sT0FBTyxHQUFZLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFMUMsSUFBSSxJQUFJLEdBQUcsSUFBSSxZQUFJLEVBQUUsQ0FBQztJQUV0QixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUM7SUFDL0IscUJBQXFCO0lBQ3JCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ2pCLE9BQU8sSUFBSSxDQUFDO0FBQ2hCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CRCxxRkFBcUY7QUFDckYscUhBQXFDO0FBR3JDLE1BQU0sRUFBRSxHQUFHLElBQUkscUJBQVUsRUFBRSxDQUFDO0FBRTVCLGtCQUFlLEdBQVMsRUFBRTtJQUN0QixNQUFNLENBQUMsR0FBUyxtQkFBTyxDQUFDLGdFQUE2RCxDQUFDLENBQUM7SUFFdkYsTUFBTSxJQUFJLEdBQVUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDakQsTUFBTSxPQUFPLEdBQVksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUUxQyxJQUFJLElBQUksR0FBRyxJQUFJLFlBQUksRUFBRSxDQUFDO0lBRXRCLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQztJQUMvQixxQkFBcUI7SUFDckIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDakIsT0FBTyxJQUFJLENBQUM7QUFDaEIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJELHFGQUFxRjtBQUNyRixxSEFBcUM7QUFHckMsTUFBTSxFQUFFLEdBQUcsSUFBSSxxQkFBVSxFQUFFLENBQUM7QUFFNUIsa0JBQWUsR0FBUyxFQUFFO0lBQ3RCLE1BQU0sQ0FBQyxHQUFTLG1CQUFPLENBQUMsb0RBQXVELENBQUMsQ0FBQztJQUVqRixNQUFNLElBQUksR0FBVSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUNqRCxNQUFNLE9BQU8sR0FBWSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRTFDLElBQUksSUFBSSxHQUFHLElBQUksWUFBSSxFQUFFLENBQUM7SUFFdEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDO0lBQy9CLHFCQUFxQjtJQUNyQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNqQixPQUFPLElBQUksQ0FBQztBQUNoQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQkQscUZBQXFGO0FBQ3JGLHFIQUFxQztBQUdyQyxNQUFNLEVBQUUsR0FBRyxJQUFJLHFCQUFVLEVBQUUsQ0FBQztBQUU1QixrQkFBZSxHQUFTLEVBQUU7SUFDdEIsTUFBTSxDQUFDLEdBQVMsbUJBQU8sQ0FBQyx3R0FBaUYsQ0FBQyxDQUFDO0lBRTNHLE1BQU0sSUFBSSxHQUFVLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQ2pELE1BQU0sT0FBTyxHQUFZLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFMUMsSUFBSSxJQUFJLEdBQUcsSUFBSSxZQUFJLEVBQUUsQ0FBQztJQUV0QixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUM7SUFDL0IscUJBQXFCO0lBQ3JCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ2pCLE9BQU8sSUFBSSxDQUFDO0FBQ2hCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CRCxxRkFBcUY7QUFDckYscUhBQXFDO0FBR3JDLE1BQU0sRUFBRSxHQUFHLElBQUkscUJBQVUsRUFBRSxDQUFDO0FBRTVCLGtCQUFlLEdBQVMsRUFBRTtJQUN0QixNQUFNLENBQUMsR0FBUyxtQkFBTyxDQUFDLHdGQUF5RSxDQUFDLENBQUM7SUFFbkcsTUFBTSxJQUFJLEdBQVUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDakQsTUFBTSxPQUFPLEdBQVksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUUxQyxJQUFJLElBQUksR0FBRyxJQUFJLFlBQUksRUFBRSxDQUFDO0lBRXRCLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQztJQUMvQixxQkFBcUI7SUFDckIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDakIsT0FBTyxJQUFJLENBQUM7QUFDaEIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJELHFGQUFxRjtBQUNyRixxSEFBcUM7QUFHckMsTUFBTSxFQUFFLEdBQUcsSUFBSSxxQkFBVSxFQUFFLENBQUM7QUFFNUIsa0JBQWUsR0FBUyxFQUFFO0lBQ3RCLE1BQU0sQ0FBQyxHQUFTLG1CQUFPLENBQUMsb0ZBQXVFLENBQUMsQ0FBQztJQUVqRyxNQUFNLElBQUksR0FBVSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUNqRCxNQUFNLE9BQU8sR0FBWSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRTFDLElBQUksSUFBSSxHQUFHLElBQUksWUFBSSxFQUFFLENBQUM7SUFFdEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDO0lBQy9CLHFCQUFxQjtJQUNyQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNqQixPQUFPLElBQUksQ0FBQztBQUNoQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQkQscUZBQXFGO0FBQ3JGLHFIQUFxQztBQUdyQyxNQUFNLEVBQUUsR0FBRyxJQUFJLHFCQUFVLEVBQUUsQ0FBQztBQUU1QixrQkFBZSxHQUFTLEVBQUU7SUFDdEIsTUFBTSxDQUFDLEdBQVMsbUJBQU8sQ0FBQyxvSEFBdUYsQ0FBQyxDQUFDO0lBRWpILE1BQU0sSUFBSSxHQUFVLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQ2pELE1BQU0sT0FBTyxHQUFZLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFMUMsSUFBSSxJQUFJLEdBQUcsSUFBSSxZQUFJLEVBQUUsQ0FBQztJQUV0QixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUM7SUFDL0IscUJBQXFCO0lBQ3JCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ2pCLE9BQU8sSUFBSSxDQUFDO0FBQ2hCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CRCxxRkFBcUY7QUFDckYscUhBQXFDO0FBR3JDLE1BQU0sRUFBRSxHQUFHLElBQUkscUJBQVUsRUFBRSxDQUFDO0FBRTVCLGtCQUFlLEdBQVMsRUFBRTtJQUN0QixNQUFNLENBQUMsR0FBUyxtQkFBTyxDQUFDLDREQUEyRCxDQUFDLENBQUM7SUFFckYsTUFBTSxJQUFJLEdBQVUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDakQsTUFBTSxPQUFPLEdBQVksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUUxQyxJQUFJLElBQUksR0FBRyxJQUFJLFlBQUksRUFBRSxDQUFDO0lBRXRCLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQztJQUMvQixxQkFBcUI7SUFDckIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDakIsT0FBTyxJQUFJLENBQUM7QUFDaEIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJELHFGQUFxRjtBQUNyRixxSEFBcUM7QUFHckMsTUFBTSxFQUFFLEdBQUcsSUFBSSxxQkFBVSxFQUFFLENBQUM7QUFFNUIsa0JBQWUsR0FBUyxFQUFFO0lBQ3RCLE1BQU0sQ0FBQyxHQUFTLG1CQUFPLENBQUMsb0dBQStFLENBQUMsQ0FBQztJQUV6RyxNQUFNLElBQUksR0FBVSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUNqRCxNQUFNLE9BQU8sR0FBWSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRTFDLElBQUksSUFBSSxHQUFHLElBQUksWUFBSSxFQUFFLENBQUM7SUFFdEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDO0lBQy9CLHFCQUFxQjtJQUNyQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNqQixPQUFPLElBQUksQ0FBQztBQUNoQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQkQscUZBQXFGO0FBQ3JGLHFIQUFxQztBQUdyQyxNQUFNLEVBQUUsR0FBRyxJQUFJLHFCQUFVLEVBQUUsQ0FBQztBQUU1QixrQkFBZSxHQUFTLEVBQUU7SUFDdEIsTUFBTSxDQUFDLEdBQVMsbUJBQU8sQ0FBQyx3RkFBeUUsQ0FBQyxDQUFDO0lBRW5HLE1BQU0sSUFBSSxHQUFVLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQ2pELE1BQU0sT0FBTyxHQUFZLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFMUMsSUFBSSxJQUFJLEdBQUcsSUFBSSxZQUFJLEVBQUUsQ0FBQztJQUV0QixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUM7SUFDL0IscUJBQXFCO0lBQ3JCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ2pCLE9BQU8sSUFBSSxDQUFDO0FBQ2hCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CRCxxRkFBcUY7QUFDckYscUhBQXFDO0FBR3JDLE1BQU0sRUFBRSxHQUFHLElBQUkscUJBQVUsRUFBRSxDQUFDO0FBRTVCLGtCQUFlLEdBQVMsRUFBRTtJQUN0QixNQUFNLENBQUMsR0FBUyxtQkFBTyxDQUFDLG9GQUF1RSxDQUFDLENBQUM7SUFFakcsTUFBTSxJQUFJLEdBQVUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDakQsTUFBTSxPQUFPLEdBQVksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUUxQyxJQUFJLElBQUksR0FBRyxJQUFJLFlBQUksRUFBRSxDQUFDO0lBRXRCLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQztJQUMvQixxQkFBcUI7SUFDckIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDakIsT0FBTyxJQUFJLENBQUM7QUFDaEIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJELHFGQUFxRjtBQUNyRixxSEFBcUM7QUFHckMsTUFBTSxFQUFFLEdBQUcsSUFBSSxxQkFBVSxFQUFFLENBQUM7QUFFNUIsa0JBQWUsR0FBUyxFQUFFO0lBQ3RCLE1BQU0sQ0FBQyxHQUFTLG1CQUFPLENBQUMsZ0RBQXFELENBQUMsQ0FBQztJQUUvRSxNQUFNLElBQUksR0FBVSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUNqRCxNQUFNLE9BQU8sR0FBWSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRTFDLElBQUksSUFBSSxHQUFHLElBQUksWUFBSSxFQUFFLENBQUM7SUFFdEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDO0lBQy9CLHFCQUFxQjtJQUNyQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNqQixPQUFPLElBQUksQ0FBQztBQUNoQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQkQscUZBQXFGO0FBQ3JGLHFIQUFxQztBQUdyQyxNQUFNLEVBQUUsR0FBRyxJQUFJLHFCQUFVLEVBQUUsQ0FBQztBQUU1QixrQkFBZSxHQUFTLEVBQUU7SUFDdEIsTUFBTSxDQUFDLEdBQVMsbUJBQU8sQ0FBQyxvRUFBK0QsQ0FBQyxDQUFDO0lBRXpGLE1BQU0sSUFBSSxHQUFVLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQ2pELE1BQU0sT0FBTyxHQUFZLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFMUMsSUFBSSxJQUFJLEdBQUcsSUFBSSxZQUFJLEVBQUUsQ0FBQztJQUV0QixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUM7SUFDL0IscUJBQXFCO0lBQ3JCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ2pCLE9BQU8sSUFBSSxDQUFDO0FBQ2hCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CRCxxRkFBcUY7QUFDckYscUhBQXFDO0FBR3JDLE1BQU0sRUFBRSxHQUFHLElBQUkscUJBQVUsRUFBRSxDQUFDO0FBRTVCLGtCQUFlLEdBQVMsRUFBRTtJQUN0QixNQUFNLENBQUMsR0FBUyxtQkFBTyxDQUFDLHNFQUFnRSxDQUFDLENBQUM7SUFFMUYsTUFBTSxJQUFJLEdBQVUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDakQsTUFBTSxPQUFPLEdBQVksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUUxQyxJQUFJLElBQUksR0FBRyxJQUFJLFlBQUksRUFBRSxDQUFDO0lBRXRCLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQztJQUMvQixxQkFBcUI7SUFDckIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDakIsT0FBTyxJQUFJLENBQUM7QUFDaEIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJELHFGQUFxRjtBQUNyRixxSEFBcUM7QUFHckMsTUFBTSxFQUFFLEdBQUcsSUFBSSxxQkFBVSxFQUFFLENBQUM7QUFFNUIsa0JBQWUsR0FBUyxFQUFFO0lBQ3RCLE1BQU0sQ0FBQyxHQUFTLG1CQUFPLENBQUMsc0VBQWdFLENBQUMsQ0FBQztJQUUxRixNQUFNLElBQUksR0FBVSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUNqRCxNQUFNLE9BQU8sR0FBWSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRTFDLElBQUksSUFBSSxHQUFHLElBQUksWUFBSSxFQUFFLENBQUM7SUFFdEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDO0lBQy9CLHFCQUFxQjtJQUNyQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNqQixPQUFPLElBQUksQ0FBQztBQUNoQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQkQscUZBQXFGO0FBQ3JGLHFIQUFxQztBQUdyQyxNQUFNLEVBQUUsR0FBRyxJQUFJLHFCQUFVLEVBQUUsQ0FBQztBQUU1QixrQkFBZSxHQUFTLEVBQUU7SUFDdEIsTUFBTSxDQUFDLEdBQVMsbUJBQU8sQ0FBQyx3RUFBaUUsQ0FBQyxDQUFDO0lBRTNGLE1BQU0sSUFBSSxHQUFVLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQ2pELE1BQU0sT0FBTyxHQUFZLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFMUMsSUFBSSxJQUFJLEdBQUcsSUFBSSxZQUFJLEVBQUUsQ0FBQztJQUV0QixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUM7SUFDL0IscUJBQXFCO0lBQ3JCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ2pCLE9BQU8sSUFBSSxDQUFDO0FBQ2hCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CRCxxRkFBcUY7QUFDckYscUhBQXFDO0FBR3JDLE1BQU0sRUFBRSxHQUFHLElBQUkscUJBQVUsRUFBRSxDQUFDO0FBRTVCLGtCQUFlLEdBQVMsRUFBRTtJQUN0QixNQUFNLENBQUMsR0FBUyxtQkFBTyxDQUFDLHdEQUF5RCxDQUFDLENBQUM7SUFFbkYsTUFBTSxJQUFJLEdBQVUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDakQsTUFBTSxPQUFPLEdBQVksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUUxQyxJQUFJLElBQUksR0FBRyxJQUFJLFlBQUksRUFBRSxDQUFDO0lBRXRCLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQztJQUMvQixxQkFBcUI7SUFDckIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDakIsT0FBTyxJQUFJLENBQUM7QUFDaEIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJELHFGQUFxRjtBQUNyRixxSEFBcUM7QUFHckMsTUFBTSxFQUFFLEdBQUcsSUFBSSxxQkFBVSxFQUFFLENBQUM7QUFFNUIsa0JBQWUsR0FBUyxFQUFFO0lBQ3RCLE1BQU0sQ0FBQyxHQUFTLG1CQUFPLENBQUMsd0RBQXlELENBQUMsQ0FBQztJQUVuRixNQUFNLElBQUksR0FBVSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUNqRCxNQUFNLE9BQU8sR0FBWSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRTFDLElBQUksSUFBSSxHQUFHLElBQUksWUFBSSxFQUFFLENBQUM7SUFFdEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDO0lBQy9CLHFCQUFxQjtJQUNyQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNqQixPQUFPLElBQUksQ0FBQztBQUNoQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQkQscUZBQXFGO0FBQ3JGLHFIQUFxQztBQUdyQyxNQUFNLEVBQUUsR0FBRyxJQUFJLHFCQUFVLEVBQUUsQ0FBQztBQUU1QixrQkFBZSxHQUFTLEVBQUU7SUFDdEIsTUFBTSxDQUFDLEdBQVMsbUJBQU8sQ0FBQyxrREFBc0QsQ0FBQyxDQUFDO0lBRWhGLE1BQU0sSUFBSSxHQUFVLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQ2pELE1BQU0sT0FBTyxHQUFZLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFMUMsSUFBSSxJQUFJLEdBQUcsSUFBSSxZQUFJLEVBQUUsQ0FBQztJQUV0QixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUM7SUFDL0IscUJBQXFCO0lBQ3JCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ2pCLE9BQU8sSUFBSSxDQUFDO0FBQ2hCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CRCxxRkFBcUY7QUFDckYscUhBQXFDO0FBR3JDLE1BQU0sRUFBRSxHQUFHLElBQUkscUJBQVUsRUFBRSxDQUFDO0FBRTVCLGtCQUFlLEdBQVMsRUFBRTtJQUN0QixNQUFNLENBQUMsR0FBUyxtQkFBTyxDQUFDLGtEQUFzRCxDQUFDLENBQUM7SUFFaEYsTUFBTSxJQUFJLEdBQVUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDakQsTUFBTSxPQUFPLEdBQVksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUUxQyxJQUFJLElBQUksR0FBRyxJQUFJLFlBQUksRUFBRSxDQUFDO0lBRXRCLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQztJQUMvQixxQkFBcUI7SUFDckIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDakIsT0FBTyxJQUFJLENBQUM7QUFDaEIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJELHFGQUFxRjtBQUNyRixxSEFBcUM7QUFHckMsTUFBTSxFQUFFLEdBQUcsSUFBSSxxQkFBVSxFQUFFLENBQUM7QUFFNUIsa0JBQWUsR0FBUyxFQUFFO0lBQ3RCLE1BQU0sQ0FBQyxHQUFTLG1CQUFPLENBQUMsd0dBQWlGLENBQUMsQ0FBQztJQUUzRyxNQUFNLElBQUksR0FBVSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUNqRCxNQUFNLE9BQU8sR0FBWSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRTFDLElBQUksSUFBSSxHQUFHLElBQUksWUFBSSxFQUFFLENBQUM7SUFFdEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDO0lBQy9CLHFCQUFxQjtJQUNyQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNqQixPQUFPLElBQUksQ0FBQztBQUNoQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQkQscUZBQXFGO0FBQ3JGLHFIQUFxQztBQUdyQyxNQUFNLEVBQUUsR0FBRyxJQUFJLHFCQUFVLEVBQUUsQ0FBQztBQUU1QixrQkFBZSxHQUFTLEVBQUU7SUFDdEIsTUFBTSxDQUFDLEdBQVMsbUJBQU8sQ0FBQyxvREFBdUQsQ0FBQyxDQUFDO0lBRWpGLE1BQU0sSUFBSSxHQUFVLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQ2pELE1BQU0sT0FBTyxHQUFZLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFMUMsSUFBSSxJQUFJLEdBQUcsSUFBSSxZQUFJLEVBQUUsQ0FBQztJQUV0QixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUM7SUFDL0IscUJBQXFCO0lBQ3JCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ2pCLE9BQU8sSUFBSSxDQUFDO0FBQ2hCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CRCxxRkFBcUY7QUFDckYscUhBQXFDO0FBR3JDLE1BQU0sRUFBRSxHQUFHLElBQUkscUJBQVUsRUFBRSxDQUFDO0FBRTVCLGtCQUFlLEdBQVMsRUFBRTtJQUN0QixNQUFNLENBQUMsR0FBUyxtQkFBTyxDQUFDLHdEQUF5RCxDQUFDLENBQUM7SUFFbkYsTUFBTSxJQUFJLEdBQVUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDakQsTUFBTSxPQUFPLEdBQVksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUUxQyxJQUFJLElBQUksR0FBRyxJQUFJLFlBQUksRUFBRSxDQUFDO0lBRXRCLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQztJQUMvQixxQkFBcUI7SUFDckIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDakIsT0FBTyxJQUFJLENBQUM7QUFDaEIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJELHFGQUFxRjtBQUNyRixxSEFBcUM7QUFHckMsTUFBTSxFQUFFLEdBQUcsSUFBSSxxQkFBVSxFQUFFLENBQUM7QUFFNUIsa0JBQWUsR0FBUyxFQUFFO0lBQ3RCLE1BQU0sQ0FBQyxHQUFTLG1CQUFPLENBQUMsOERBQTRELENBQUMsQ0FBQztJQUV0RixNQUFNLElBQUksR0FBVSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUNqRCxNQUFNLE9BQU8sR0FBWSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRTFDLElBQUksSUFBSSxHQUFHLElBQUksWUFBSSxFQUFFLENBQUM7SUFFdEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDO0lBQy9CLHFCQUFxQjtJQUNyQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNqQixPQUFPLElBQUksQ0FBQztBQUNoQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQkQscUZBQXFGO0FBQ3JGLHFIQUFxQztBQUdyQyxNQUFNLEVBQUUsR0FBRyxJQUFJLHFCQUFVLEVBQUUsQ0FBQztBQUU1QixrQkFBZSxHQUFTLEVBQUU7SUFDdEIsTUFBTSxDQUFDLEdBQVMsbUJBQU8sQ0FBQywwQ0FBa0QsQ0FBQyxDQUFDO0lBRTVFLE1BQU0sSUFBSSxHQUFVLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQ2pELE1BQU0sT0FBTyxHQUFZLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFMUMsSUFBSSxJQUFJLEdBQUcsSUFBSSxZQUFJLEVBQUUsQ0FBQztJQUV0QixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUM7SUFDL0IscUJBQXFCO0lBQ3JCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ2pCLE9BQU8sSUFBSSxDQUFDO0FBQ2hCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CRCxxRkFBcUY7QUFDckYscUhBQXFDO0FBR3JDLE1BQU0sRUFBRSxHQUFHLElBQUkscUJBQVUsRUFBRSxDQUFDO0FBRTVCLGtCQUFlLEdBQVMsRUFBRTtJQUN0QixNQUFNLENBQUMsR0FBUyxtQkFBTyxDQUFDLGtFQUE4RCxDQUFDLENBQUM7SUFFeEYsTUFBTSxJQUFJLEdBQVUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDakQsTUFBTSxPQUFPLEdBQVksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUUxQyxJQUFJLElBQUksR0FBRyxJQUFJLFlBQUksRUFBRSxDQUFDO0lBRXRCLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQztJQUMvQixxQkFBcUI7SUFDckIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDakIsT0FBTyxJQUFJLENBQUM7QUFDaEIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJELHFGQUFxRjtBQUNyRixxSEFBcUM7QUFHckMsTUFBTSxFQUFFLEdBQUcsSUFBSSxxQkFBVSxFQUFFLENBQUM7QUFFNUIsa0JBQWUsR0FBUyxFQUFFO0lBQ3RCLE1BQU0sQ0FBQyxHQUFTLG1CQUFPLENBQUMsNERBQTJELENBQUMsQ0FBQztJQUVyRixNQUFNLElBQUksR0FBVSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUNqRCxNQUFNLE9BQU8sR0FBWSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRTFDLElBQUksSUFBSSxHQUFHLElBQUksWUFBSSxFQUFFLENBQUM7SUFFdEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDO0lBQy9CLHFCQUFxQjtJQUNyQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNqQixPQUFPLElBQUksQ0FBQztBQUNoQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQkQscUZBQXFGO0FBQ3JGLHFIQUFxQztBQUdyQyxNQUFNLEVBQUUsR0FBRyxJQUFJLHFCQUFVLEVBQUUsQ0FBQztBQUU1QixrQkFBZSxHQUFTLEVBQUU7SUFDdEIsTUFBTSxDQUFDLEdBQVMsbUJBQU8sQ0FBQyxnREFBcUQsQ0FBQyxDQUFDO0lBRS9FLE1BQU0sSUFBSSxHQUFVLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQ2pELE1BQU0sT0FBTyxHQUFZLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFMUMsSUFBSSxJQUFJLEdBQUcsSUFBSSxZQUFJLEVBQUUsQ0FBQztJQUV0QixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUM7SUFDL0IscUJBQXFCO0lBQ3JCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ2pCLE9BQU8sSUFBSSxDQUFDO0FBQ2hCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CRCxxRkFBcUY7QUFDckYscUhBQXFDO0FBR3JDLE1BQU0sRUFBRSxHQUFHLElBQUkscUJBQVUsRUFBRSxDQUFDO0FBRTVCLGtCQUFlLEdBQVMsRUFBRTtJQUN0QixNQUFNLENBQUMsR0FBUyxtQkFBTyxDQUFDLGtEQUFzRCxDQUFDLENBQUM7SUFFaEYsTUFBTSxJQUFJLEdBQVUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDakQsTUFBTSxPQUFPLEdBQVksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUUxQyxJQUFJLElBQUksR0FBRyxJQUFJLFlBQUksRUFBRSxDQUFDO0lBRXRCLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQztJQUMvQixxQkFBcUI7SUFDckIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDakIsT0FBTyxJQUFJLENBQUM7QUFDaEIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJELHFGQUFxRjtBQUNyRixxSEFBcUM7QUFHckMsTUFBTSxFQUFFLEdBQUcsSUFBSSxxQkFBVSxFQUFFLENBQUM7QUFFNUIsa0JBQWUsR0FBUyxFQUFFO0lBQ3RCLE1BQU0sQ0FBQyxHQUFTLG1CQUFPLENBQUMsMENBQWtELENBQUMsQ0FBQztJQUU1RSxNQUFNLElBQUksR0FBVSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUNqRCxNQUFNLE9BQU8sR0FBWSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRTFDLElBQUksSUFBSSxHQUFHLElBQUksWUFBSSxFQUFFLENBQUM7SUFFdEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDO0lBQy9CLHFCQUFxQjtJQUNyQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNqQixPQUFPLElBQUksQ0FBQztBQUNoQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQkQscUZBQXFGO0FBQ3JGLHFIQUFxQztBQUdyQyxNQUFNLEVBQUUsR0FBRyxJQUFJLHFCQUFVLEVBQUUsQ0FBQztBQUU1QixrQkFBZSxHQUFTLEVBQUU7SUFDdEIsTUFBTSxDQUFDLEdBQVMsbUJBQU8sQ0FBQyw4RUFBb0UsQ0FBQyxDQUFDO0lBRTlGLE1BQU0sSUFBSSxHQUFVLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQ2pELE1BQU0sT0FBTyxHQUFZLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFMUMsSUFBSSxJQUFJLEdBQUcsSUFBSSxZQUFJLEVBQUUsQ0FBQztJQUV0QixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUM7SUFDL0IscUJBQXFCO0lBQ3JCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ2pCLE9BQU8sSUFBSSxDQUFDO0FBQ2hCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CRCxxRkFBcUY7QUFDckYscUhBQXFDO0FBR3JDLE1BQU0sRUFBRSxHQUFHLElBQUkscUJBQVUsRUFBRSxDQUFDO0FBRTVCLGtCQUFlLEdBQVMsRUFBRTtJQUN0QixNQUFNLENBQUMsR0FBUyxtQkFBTyxDQUFDLDhDQUFvRCxDQUFDLENBQUM7SUFFOUUsTUFBTSxJQUFJLEdBQVUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDakQsTUFBTSxPQUFPLEdBQVksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUUxQyxJQUFJLElBQUksR0FBRyxJQUFJLFlBQUksRUFBRSxDQUFDO0lBRXRCLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQztJQUMvQixxQkFBcUI7SUFDckIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDakIsT0FBTyxJQUFJLENBQUM7QUFDaEIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJELHFGQUFxRjtBQUNyRixxSEFBcUM7QUFHckMsTUFBTSxFQUFFLEdBQUcsSUFBSSxxQkFBVSxFQUFFLENBQUM7QUFFNUIsa0JBQWUsR0FBUyxFQUFFO0lBQ3RCLE1BQU0sQ0FBQyxHQUFTLG1CQUFPLENBQUMsa0ZBQXNFLENBQUMsQ0FBQztJQUVoRyxNQUFNLElBQUksR0FBVSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUNqRCxNQUFNLE9BQU8sR0FBWSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRTFDLElBQUksSUFBSSxHQUFHLElBQUksWUFBSSxFQUFFLENBQUM7SUFFdEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDO0lBQy9CLHFCQUFxQjtJQUNyQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNqQixPQUFPLElBQUksQ0FBQztBQUNoQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQkQscUZBQXFGO0FBQ3JGLHFIQUFxQztBQUdyQyxNQUFNLEVBQUUsR0FBRyxJQUFJLHFCQUFVLEVBQUUsQ0FBQztBQUU1QixrQkFBZSxHQUFTLEVBQUU7SUFDdEIsTUFBTSxDQUFDLEdBQVMsbUJBQU8sQ0FBQyxrREFBc0QsQ0FBQyxDQUFDO0lBRWhGLE1BQU0sSUFBSSxHQUFVLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQ2pELE1BQU0sT0FBTyxHQUFZLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFMUMsSUFBSSxJQUFJLEdBQUcsSUFBSSxZQUFJLEVBQUUsQ0FBQztJQUV0QixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUM7SUFDL0IscUJBQXFCO0lBQ3JCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ2pCLE9BQU8sSUFBSSxDQUFDO0FBQ2hCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CRCxxRkFBcUY7QUFDckYscUhBQXFDO0FBR3JDLE1BQU0sRUFBRSxHQUFHLElBQUkscUJBQVUsRUFBRSxDQUFDO0FBRTVCLGtCQUFlLEdBQVMsRUFBRTtJQUN0QixNQUFNLENBQUMsR0FBUyxtQkFBTyxDQUFDLDhDQUFvRCxDQUFDLENBQUM7SUFFOUUsTUFBTSxJQUFJLEdBQVUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDakQsTUFBTSxPQUFPLEdBQVksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUUxQyxJQUFJLElBQUksR0FBRyxJQUFJLFlBQUksRUFBRSxDQUFDO0lBRXRCLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQztJQUMvQixxQkFBcUI7SUFDckIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDakIsT0FBTyxJQUFJLENBQUM7QUFDaEIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJELHFGQUFxRjtBQUNyRixxSEFBcUM7QUFHckMsTUFBTSxFQUFFLEdBQUcsSUFBSSxxQkFBVSxFQUFFLENBQUM7QUFFNUIsa0JBQWUsR0FBUyxFQUFFO0lBQ3RCLE1BQU0sQ0FBQyxHQUFTLG1CQUFPLENBQUMsa0VBQThELENBQUMsQ0FBQztJQUV4RixNQUFNLElBQUksR0FBVSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUNqRCxNQUFNLE9BQU8sR0FBWSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRTFDLElBQUksSUFBSSxHQUFHLElBQUksWUFBSSxFQUFFLENBQUM7SUFFdEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDO0lBQy9CLHFCQUFxQjtJQUNyQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNqQixPQUFPLElBQUksQ0FBQztBQUNoQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQkQscUZBQXFGO0FBQ3JGLHFIQUFxQztBQUdyQyxNQUFNLEVBQUUsR0FBRyxJQUFJLHFCQUFVLEVBQUUsQ0FBQztBQUU1QixrQkFBZSxHQUFTLEVBQUU7SUFDdEIsTUFBTSxDQUFDLEdBQVMsbUJBQU8sQ0FBQyw4Q0FBb0QsQ0FBQyxDQUFDO0lBRTlFLE1BQU0sSUFBSSxHQUFVLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQ2pELE1BQU0sT0FBTyxHQUFZLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFMUMsSUFBSSxJQUFJLEdBQUcsSUFBSSxZQUFJLEVBQUUsQ0FBQztJQUV0QixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUM7SUFDL0IscUJBQXFCO0lBQ3JCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ2pCLE9BQU8sSUFBSSxDQUFDO0FBQ2hCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CRCxxRkFBcUY7QUFDckYscUhBQXFDO0FBR3JDLE1BQU0sRUFBRSxHQUFHLElBQUkscUJBQVUsRUFBRSxDQUFDO0FBRTVCLGtCQUFlLEdBQVMsRUFBRTtJQUN0QixNQUFNLENBQUMsR0FBUyxtQkFBTyxDQUFDLGdFQUE2RCxDQUFDLENBQUM7SUFFdkYsTUFBTSxJQUFJLEdBQVUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDakQsTUFBTSxPQUFPLEdBQVksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUUxQyxJQUFJLElBQUksR0FBRyxJQUFJLFlBQUksRUFBRSxDQUFDO0lBRXRCLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQztJQUMvQixxQkFBcUI7SUFDckIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDakIsT0FBTyxJQUFJLENBQUM7QUFDaEIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJELHFGQUFxRjtBQUNyRixxSEFBcUM7QUFHckMsTUFBTSxFQUFFLEdBQUcsSUFBSSxxQkFBVSxFQUFFLENBQUM7QUFFNUIsa0JBQWUsR0FBUyxFQUFFO0lBQ3RCLE1BQU0sQ0FBQyxHQUFTLG1CQUFPLENBQUMsc0RBQXdELENBQUMsQ0FBQztJQUVsRixNQUFNLElBQUksR0FBVSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUNqRCxNQUFNLE9BQU8sR0FBWSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRTFDLElBQUksSUFBSSxHQUFHLElBQUksWUFBSSxFQUFFLENBQUM7SUFFdEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDO0lBQy9CLHFCQUFxQjtJQUNyQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNqQixPQUFPLElBQUksQ0FBQztBQUNoQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQkQscUZBQXFGO0FBQ3JGLHFIQUFxQztBQUdyQyxNQUFNLEVBQUUsR0FBRyxJQUFJLHFCQUFVLEVBQUUsQ0FBQztBQUU1QixrQkFBZSxHQUFTLEVBQUU7SUFDdEIsTUFBTSxDQUFDLEdBQVMsbUJBQU8sQ0FBQyxrRUFBOEQsQ0FBQyxDQUFDO0lBRXhGLE1BQU0sSUFBSSxHQUFVLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQ2pELE1BQU0sT0FBTyxHQUFZLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFMUMsSUFBSSxJQUFJLEdBQUcsSUFBSSxZQUFJLEVBQUUsQ0FBQztJQUV0QixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUM7SUFDL0IscUJBQXFCO0lBQ3JCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ2pCLE9BQU8sSUFBSSxDQUFDO0FBQ2hCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CRCxxRkFBcUY7QUFDckYscUhBQXFDO0FBR3JDLE1BQU0sRUFBRSxHQUFHLElBQUkscUJBQVUsRUFBRSxDQUFDO0FBRTVCLGtCQUFlLEdBQVMsRUFBRTtJQUN0QixNQUFNLENBQUMsR0FBUyxtQkFBTyxDQUFDLDRFQUFtRSxDQUFDLENBQUM7SUFFN0YsTUFBTSxJQUFJLEdBQVUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDakQsTUFBTSxPQUFPLEdBQVksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUUxQyxJQUFJLElBQUksR0FBRyxJQUFJLFlBQUksRUFBRSxDQUFDO0lBRXRCLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQztJQUMvQixxQkFBcUI7SUFDckIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDakIsT0FBTyxJQUFJLENBQUM7QUFDaEIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJELHFGQUFxRjtBQUNyRixxSEFBcUM7QUFHckMsTUFBTSxFQUFFLEdBQUcsSUFBSSxxQkFBVSxFQUFFLENBQUM7QUFFNUIsa0JBQWUsR0FBUyxFQUFFO0lBQ3RCLE1BQU0sQ0FBQyxHQUFTLG1CQUFPLENBQUMsd0RBQXlELENBQUMsQ0FBQztJQUVuRixNQUFNLElBQUksR0FBVSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUNqRCxNQUFNLE9BQU8sR0FBWSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRTFDLElBQUksSUFBSSxHQUFHLElBQUksWUFBSSxFQUFFLENBQUM7SUFFdEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDO0lBQy9CLHFCQUFxQjtJQUNyQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNqQixPQUFPLElBQUksQ0FBQztBQUNoQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQkQscUZBQXFGO0FBQ3JGLHFIQUFxQztBQUdyQyxNQUFNLEVBQUUsR0FBRyxJQUFJLHFCQUFVLEVBQUUsQ0FBQztBQUU1QixrQkFBZSxHQUFTLEVBQUU7SUFDdEIsTUFBTSxDQUFDLEdBQVMsbUJBQU8sQ0FBQywwREFBMEQsQ0FBQyxDQUFDO0lBRXBGLE1BQU0sSUFBSSxHQUFVLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQ2pELE1BQU0sT0FBTyxHQUFZLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFMUMsSUFBSSxJQUFJLEdBQUcsSUFBSSxZQUFJLEVBQUUsQ0FBQztJQUV0QixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUM7SUFDL0IscUJBQXFCO0lBQ3JCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ2pCLE9BQU8sSUFBSSxDQUFDO0FBQ2hCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CRCxxRkFBcUY7QUFDckYscUhBQXFDO0FBR3JDLE1BQU0sRUFBRSxHQUFHLElBQUkscUJBQVUsRUFBRSxDQUFDO0FBRTVCLGtCQUFlLEdBQVMsRUFBRTtJQUN0QixNQUFNLENBQUMsR0FBUyxtQkFBTyxDQUFDLG9FQUErRCxDQUFDLENBQUM7SUFFekYsTUFBTSxJQUFJLEdBQVUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDakQsTUFBTSxPQUFPLEdBQVksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUUxQyxJQUFJLElBQUksR0FBRyxJQUFJLFlBQUksRUFBRSxDQUFDO0lBRXRCLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQztJQUMvQixxQkFBcUI7SUFDckIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDakIsT0FBTyxJQUFJLENBQUM7QUFDaEIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJELHFGQUFxRjtBQUNyRixxSEFBcUM7QUFHckMsTUFBTSxFQUFFLEdBQUcsSUFBSSxxQkFBVSxFQUFFLENBQUM7QUFFNUIsa0JBQWUsR0FBUyxFQUFFO0lBQ3RCLE1BQU0sQ0FBQyxHQUFTLG1CQUFPLENBQUMsOERBQTRELENBQUMsQ0FBQztJQUV0RixNQUFNLElBQUksR0FBVSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUNqRCxNQUFNLE9BQU8sR0FBWSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRTFDLElBQUksSUFBSSxHQUFHLElBQUksWUFBSSxFQUFFLENBQUM7SUFFdEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDO0lBQy9CLHFCQUFxQjtJQUNyQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNqQixPQUFPLElBQUksQ0FBQztBQUNoQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQkQscUZBQXFGO0FBQ3JGLHFIQUFxQztBQUdyQyxNQUFNLEVBQUUsR0FBRyxJQUFJLHFCQUFVLEVBQUUsQ0FBQztBQUU1QixrQkFBZSxHQUFTLEVBQUU7SUFDdEIsTUFBTSxDQUFDLEdBQVMsbUJBQU8sQ0FBQywwREFBMEQsQ0FBQyxDQUFDO0lBRXBGLE1BQU0sSUFBSSxHQUFVLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQ2pELE1BQU0sT0FBTyxHQUFZLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFMUMsSUFBSSxJQUFJLEdBQUcsSUFBSSxZQUFJLEVBQUUsQ0FBQztJQUV0QixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUM7SUFDL0IscUJBQXFCO0lBQ3JCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ2pCLE9BQU8sSUFBSSxDQUFDO0FBQ2hCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CRCxxRkFBcUY7QUFDckYscUhBQXFDO0FBR3JDLE1BQU0sRUFBRSxHQUFHLElBQUkscUJBQVUsRUFBRSxDQUFDO0FBRTVCLGtCQUFlLEdBQVMsRUFBRTtJQUN0QixNQUFNLENBQUMsR0FBUyxtQkFBTyxDQUFDLGdEQUFxRCxDQUFDLENBQUM7SUFFL0UsTUFBTSxJQUFJLEdBQVUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDakQsTUFBTSxPQUFPLEdBQVksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUUxQyxJQUFJLElBQUksR0FBRyxJQUFJLFlBQUksRUFBRSxDQUFDO0lBRXRCLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQztJQUMvQixxQkFBcUI7SUFDckIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDakIsT0FBTyxJQUFJLENBQUM7QUFDaEIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJELHFGQUFxRjtBQUNyRixxSEFBcUM7QUFHckMsTUFBTSxFQUFFLEdBQUcsSUFBSSxxQkFBVSxFQUFFLENBQUM7QUFFNUIsa0JBQWUsR0FBUyxFQUFFO0lBQ3RCLE1BQU0sQ0FBQyxHQUFTLG1CQUFPLENBQUMsc0ZBQXdFLENBQUMsQ0FBQztJQUVsRyxNQUFNLElBQUksR0FBVSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUNqRCxNQUFNLE9BQU8sR0FBWSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRTFDLElBQUksSUFBSSxHQUFHLElBQUksWUFBSSxFQUFFLENBQUM7SUFFdEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDO0lBQy9CLHFCQUFxQjtJQUNyQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNqQixPQUFPLElBQUksQ0FBQztBQUNoQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQkQscUZBQXFGO0FBQ3JGLHFIQUFxQztBQUdyQyxNQUFNLEVBQUUsR0FBRyxJQUFJLHFCQUFVLEVBQUUsQ0FBQztBQUU1QixrQkFBZSxHQUFTLEVBQUU7SUFDdEIsTUFBTSxDQUFDLEdBQVMsbUJBQU8sQ0FBQyw4RkFBNEUsQ0FBQyxDQUFDO0lBRXRHLE1BQU0sSUFBSSxHQUFVLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQ2pELE1BQU0sT0FBTyxHQUFZLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFMUMsSUFBSSxJQUFJLEdBQUcsSUFBSSxZQUFJLEVBQUUsQ0FBQztJQUV0QixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUM7SUFDL0IscUJBQXFCO0lBQ3JCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ2pCLE9BQU8sSUFBSSxDQUFDO0FBQ2hCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CRCxxRkFBcUY7QUFDckYscUhBQXFDO0FBR3JDLE1BQU0sRUFBRSxHQUFHLElBQUkscUJBQVUsRUFBRSxDQUFDO0FBRTVCLGtCQUFlLEdBQVMsRUFBRTtJQUN0QixNQUFNLENBQUMsR0FBUyxtQkFBTyxDQUFDLHdDQUFpRCxDQUFDLENBQUM7SUFFM0UsTUFBTSxJQUFJLEdBQVUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDakQsTUFBTSxPQUFPLEdBQVksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUUxQyxJQUFJLElBQUksR0FBRyxJQUFJLFlBQUksRUFBRSxDQUFDO0lBRXRCLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQztJQUMvQixxQkFBcUI7SUFDckIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDakIsT0FBTyxJQUFJLENBQUM7QUFDaEIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJELHFGQUFxRjtBQUNyRixxSEFBcUM7QUFHckMsTUFBTSxFQUFFLEdBQUcsSUFBSSxxQkFBVSxFQUFFLENBQUM7QUFFNUIsa0JBQWUsR0FBUyxFQUFFO0lBQ3RCLE1BQU0sQ0FBQyxHQUFTLG1CQUFPLENBQUMsc0RBQXdELENBQUMsQ0FBQztJQUVsRixNQUFNLElBQUksR0FBVSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUNqRCxNQUFNLE9BQU8sR0FBWSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRTFDLElBQUksSUFBSSxHQUFHLElBQUksWUFBSSxFQUFFLENBQUM7SUFFdEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDO0lBQy9CLHFCQUFxQjtJQUNyQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNqQixPQUFPLElBQUksQ0FBQztBQUNoQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQkQscUZBQXFGO0FBQ3JGLHFIQUFxQztBQUdyQyxNQUFNLEVBQUUsR0FBRyxJQUFJLHFCQUFVLEVBQUUsQ0FBQztBQUU1QixrQkFBZSxHQUFTLEVBQUU7SUFDdEIsTUFBTSxDQUFDLEdBQVMsbUJBQU8sQ0FBQyxrREFBc0QsQ0FBQyxDQUFDO0lBRWhGLE1BQU0sSUFBSSxHQUFVLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQ2pELE1BQU0sT0FBTyxHQUFZLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFMUMsSUFBSSxJQUFJLEdBQUcsSUFBSSxZQUFJLEVBQUUsQ0FBQztJQUV0QixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUM7SUFDL0IscUJBQXFCO0lBQ3JCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ2pCLE9BQU8sSUFBSSxDQUFDO0FBQ2hCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CRCxxRkFBcUY7QUFDckYscUhBQXFDO0FBR3JDLE1BQU0sRUFBRSxHQUFHLElBQUkscUJBQVUsRUFBRSxDQUFDO0FBRTVCLGtCQUFlLEdBQVMsRUFBRTtJQUN0QixNQUFNLENBQUMsR0FBUyxtQkFBTyxDQUFDLGdGQUFxRSxDQUFDLENBQUM7SUFFL0YsTUFBTSxJQUFJLEdBQVUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDakQsTUFBTSxPQUFPLEdBQVksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUUxQyxJQUFJLElBQUksR0FBRyxJQUFJLFlBQUksRUFBRSxDQUFDO0lBRXRCLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQztJQUMvQixxQkFBcUI7SUFDckIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDakIsT0FBTyxJQUFJLENBQUM7QUFDaEIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJELHFGQUFxRjtBQUNyRixxSEFBcUM7QUFHckMsTUFBTSxFQUFFLEdBQUcsSUFBSSxxQkFBVSxFQUFFLENBQUM7QUFFNUIsa0JBQWUsR0FBUyxFQUFFO0lBQ3RCLE1BQU0sQ0FBQyxHQUFTLG1CQUFPLENBQUMsd0VBQWlFLENBQUMsQ0FBQztJQUUzRixNQUFNLElBQUksR0FBVSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUNqRCxNQUFNLE9BQU8sR0FBWSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRTFDLElBQUksSUFBSSxHQUFHLElBQUksWUFBSSxFQUFFLENBQUM7SUFFdEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDO0lBQy9CLHFCQUFxQjtJQUNyQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNqQixPQUFPLElBQUksQ0FBQztBQUNoQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQkQscUZBQXFGO0FBQ3JGLHFIQUFxQztBQUdyQyxNQUFNLEVBQUUsR0FBRyxJQUFJLHFCQUFVLEVBQUUsQ0FBQztBQUU1QixrQkFBZSxHQUFTLEVBQUU7SUFDdEIsTUFBTSxDQUFDLEdBQVMsbUJBQU8sQ0FBQyw4REFBNEQsQ0FBQyxDQUFDO0lBRXRGLE1BQU0sSUFBSSxHQUFVLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQ2pELE1BQU0sT0FBTyxHQUFZLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFMUMsSUFBSSxJQUFJLEdBQUcsSUFBSSxZQUFJLEVBQUUsQ0FBQztJQUV0QixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUM7SUFDL0IscUJBQXFCO0lBQ3JCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ2pCLE9BQU8sSUFBSSxDQUFDO0FBQ2hCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CRCxxRkFBcUY7QUFDckYscUhBQXFDO0FBR3JDLE1BQU0sRUFBRSxHQUFHLElBQUkscUJBQVUsRUFBRSxDQUFDO0FBRTVCLGtCQUFlLEdBQVMsRUFBRTtJQUN0QixNQUFNLENBQUMsR0FBUyxtQkFBTyxDQUFDLGdEQUFxRCxDQUFDLENBQUM7SUFFL0UsTUFBTSxJQUFJLEdBQVUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDakQsTUFBTSxPQUFPLEdBQVksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUUxQyxJQUFJLElBQUksR0FBRyxJQUFJLFlBQUksRUFBRSxDQUFDO0lBRXRCLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQztJQUMvQixxQkFBcUI7SUFDckIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDakIsT0FBTyxJQUFJLENBQUM7QUFDaEIsQ0FBQzs7Ozs7Ozs7Ozs7O0FDcEJEO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMscUdBQWdEO0FBQzFGO0FBQ0E7QUFDQSxjQUFjLFFBQVMsU0FBUyxvQkFBb0IsR0FBRyxRQUFRLHFCQUFxQixHQUFHO0FBQ3ZGO0FBQ0E7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsMkdBQXNEO0FBQ2hHO0FBQ0E7QUFDQSxjQUFjLFFBQVMsVUFBVSxrQkFBa0IsZ0NBQWdDLDRCQUE0QixnQkFBZ0Isa0JBQWtCLEdBQUc7QUFDcEo7QUFDQTs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQywyR0FBc0Q7QUFDaEc7QUFDQTtBQUNBLGNBQWMsUUFBUyxVQUFVLHFCQUFxQixrQkFBa0IsMkJBQTJCLGdDQUFnQyxHQUFHO0FBQ3RJO0FBQ0E7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsMkdBQXNEO0FBQ2hHO0FBQ0E7QUFDQSxjQUFjLFFBQVMsZ0JBQWdCLHlCQUF5QiwyQkFBMkIsa0NBQWtDLHdCQUF3QiwwQkFBMEIscUhBQXFILDJCQUEyQiwyQkFBMkIsa0JBQWtCLDZCQUE2QixHQUFHLGVBQWUsdUJBQXVCLEdBQUcsb0JBQW9CLHlCQUF5QixHQUFHLGNBQWMseUJBQXlCLGdCQUFnQixvQkFBb0IsdUJBQXVCLEdBQUcscUJBQXFCLG9CQUFvQixHQUFHLGdCQUFnQixxQkFBcUIsR0FBRyxxQkFBcUIsNEJBQTRCLHNCQUFzQixrQkFBa0IsdUJBQXVCLDZCQUE2Qiw0QkFBNEIseUJBQXlCLDRDQUE0QyxnQ0FBZ0MsOENBQThDLDJCQUEyQixxQkFBcUIsR0FBRywyQkFBMkIsMEJBQTBCLGtCQUFrQixHQUFHLGlCQUFpQixvQkFBb0IsR0FBRyxtQkFBbUIsNkJBQTZCLDRCQUE0QixtQkFBbUIsR0FBRyxxQkFBcUIsbUJBQW1CLHFCQUFxQixHQUFHO0FBQ2p5QztBQUNBOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLDJHQUFzRDtBQUNoRztBQUNBO0FBQ0EsY0FBYyxRQUFTLFVBQVUscUJBQXFCLGtCQUFrQiwyQkFBMkIsZ0NBQWdDLEdBQUc7QUFDdEk7QUFDQTs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQywyR0FBc0Q7QUFDaEc7QUFDQTtBQUNBLGNBQWMsUUFBUyxlQUFlLGlCQUFpQixHQUFHO0FBQzFEO0FBQ0E7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsMkdBQXNEO0FBQ2hHO0FBQ0E7QUFDQSxjQUFjLFFBQVMsdUNBQXVDLHFIQUFxSCwyQkFBMkIsR0FBRywrQkFBK0IscUJBQXFCLGtCQUFrQiw0QkFBNEIsOEJBQThCLDJCQUEyQixvQkFBb0IsR0FBRyxnQ0FBZ0MsaUJBQWlCLG9CQUFvQix1QkFBdUIsbUJBQW1CLHNCQUFzQix3QkFBd0Isc0VBQXNFLEdBQUcsbUNBQW1DLG9CQUFvQix1QkFBdUIseUJBQXlCLGdCQUFnQixHQUFHLDhCQUE4QixzQkFBc0Isb0JBQW9CLEdBQUcsaUNBQWlDLDRCQUE0QixHQUFHLHVCQUF1QixjQUFjLGlCQUFpQixHQUFHLDhCQUE4QixnQkFBZ0IsR0FBRztBQUN4OUI7QUFDQTs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQywyR0FBc0Q7QUFDaEc7QUFDQTtBQUNBLGNBQWMsUUFBUyxnQ0FBZ0MscUJBQXFCLHNCQUFzQixxSEFBcUgsMkJBQTJCLGtCQUFrQiw0QkFBNEIsMkJBQTJCLGdCQUFnQix3QkFBd0IsR0FBRyxpQ0FBaUMsc0JBQXNCLHVCQUF1QixHQUFHLDJCQUEyQixnQkFBZ0IsZ0JBQWdCLEdBQUcsaUNBQWlDLG9CQUFvQixnQkFBZ0IsdUJBQXVCLEdBQUcsaUNBQWlDLHdCQUF3QixvQkFBb0IscUJBQXFCLEdBQUcseUNBQXlDLHdCQUF3QixHQUFHLHVCQUF1QixjQUFjLDhCQUE4QixHQUFHLDBCQUEwQiw0QkFBNEIseUJBQXlCLHFCQUFxQixHQUFHLDRCQUE0QixvQkFBb0IsNEJBQTRCLHNDQUFzQyx3QkFBd0Isd0JBQXdCLDhCQUE4QixzQkFBc0IsR0FBRztBQUNub0M7QUFDQTs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQywyR0FBc0Q7QUFDaEc7QUFDQTtBQUNBLGNBQWMsUUFBUyx1QkFBdUIscUJBQXFCLHFCQUFxQix5QkFBeUIsMENBQTBDLDhCQUE4Qiw0Q0FBNEMseUJBQXlCLHlCQUF5QixnQ0FBZ0Msd0JBQXdCLDBCQUEwQixvQkFBb0IsZ0JBQWdCLGdCQUFnQixHQUFHLHNEQUFzRCx3QkFBd0IsR0FBRyw0QkFBNEIsd0JBQXdCLEdBQUcsK0JBQStCLDBCQUEwQixxQkFBcUIsR0FBRywrQkFBK0IsZ0JBQWdCLHNCQUFzQixHQUFHLHdEQUF3RCwwQkFBMEIsbUJBQW1CLG9CQUFvQixvQkFBb0IsbUJBQW1CLHVCQUF1QixxQkFBcUIsdUJBQXVCLHNCQUFzQixHQUFHO0FBQzc3QjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNNQSxnR0FBcUI7QUFDckIsMklBQXNEO0FBRXRELGtCQUFlLGFBQUcsQ0FBQyxNQUFNLENBQUM7SUFDeEIsVUFBVSxFQUFFO1FBQ1YsVUFBVSxFQUFFLHFCQUFPO0tBQ3BCO0NBQ0YsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWkYsZ0dBQXNCO0FBRXRCLGtCQUFlLGFBQUcsQ0FBQyxNQUFNLENBQUM7SUFDdEIsSUFBSSxFQUFFO1FBQ0YsT0FBTyxFQUFFLENBQUM7SUFDZCxDQUFDO0NBQ0osQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSSCxnR0FBcUI7QUFDckIsb0lBQThDO0FBRTlDLGtCQUFlLGFBQUcsQ0FBQyxNQUFNLENBQUM7SUFDeEIsSUFBSSxFQUFFO1FBQ0osT0FBTyxFQUFFO0lBQ1gsQ0FBQztJQUNELFVBQVUsRUFBRTtRQUNWLE1BQU0sRUFBRSxzQkFBUTtLQUNqQjtDQUNGLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JGLGdHQUFxQjtBQUNyQix1SUFBZ0Q7QUFFaEQsa0hBQWtEO0FBQ2xELDJGQUE2QztBQUU3QyxrQkFBZSxhQUFHLENBQUMsTUFBTSxDQUFDO0lBQ3hCLFVBQVUsRUFBRTtRQUNWLFlBQVksRUFBRSx1QkFBUztLQUN4QjtJQUNELElBQUksRUFBRTtRQUNKLE9BQU87WUFDTCxJQUFJLEVBQUUsRUFBRTtTQUNUO0lBQ0gsQ0FBQztJQUNELE9BQU8sRUFBRTtRQUNQLE1BQU0sTUFBTSxHQUFlLElBQUkseUJBQVUsRUFBRSxDQUFDO1FBRTVDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZELE1BQU0sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3pELE1BQU0sQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JELE1BQU0sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRXZELElBQUksUUFBUSxHQUFvQjtZQUM5QixJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUk7WUFDakIsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLO1lBQ25CLEdBQUcsRUFBRSxNQUFNLENBQUMsR0FBRztZQUNmLEtBQUssRUFBRSxNQUFNLENBQUMsSUFBSTtTQUNuQixDQUFDO1FBRUYsSUFBSSxDQUFDLElBQUksR0FBRyxpQkFBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBUyxDQUFDO0lBQzNELENBQUM7Q0FDRixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQ0YsZ0dBQXNCO0FBR3RCLGtCQUFlLGFBQUcsQ0FBQyxNQUFNLENBQUM7SUFDdEIsSUFBSSxFQUFFO1FBQ0YsT0FBTyxFQUVOO0lBQ0wsQ0FBQztJQUNELE9BQU8sRUFBRTtRQUNMLCtEQUErRDtRQUMvRCx1QkFBdUI7SUFDM0IsQ0FBQztDQUNKLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDc0JILGdHQUFxQjtBQUVyQiwwSUFBcUQ7QUFDckQsOEhBQStDO0FBQy9DLGtJQUFpRDtBQUNqRCxnSUFBZ0Q7QUFFaEQsa0JBQWUsYUFBRyxDQUFDLE1BQU0sQ0FBQztJQUN4QixLQUFLLEVBQUU7UUFDTCxJQUFJLEVBQUU7WUFDSixJQUFJLEVBQUUsTUFBb0I7WUFDMUIsUUFBUSxFQUFFLElBQUk7U0FDZjtRQUNELGNBQWMsRUFBRTtZQUNkLElBQUksRUFBRSxPQUFPO1lBQ2IsUUFBUSxFQUFFLElBQUk7WUFDZCxPQUFPLEVBQUUsSUFBSTtTQUNkO1FBQ0QsVUFBVSxFQUFFO1lBQ1YsSUFBSSxFQUFFLE9BQU87WUFDYixRQUFRLEVBQUUsS0FBSztZQUNmLE9BQU8sRUFBRSxLQUFLO1NBQ2Y7S0FDRjtJQUNELElBQUksRUFBRTtRQUNKLE9BQU87WUFDTCxTQUFTLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSztZQUNyQyxRQUFRLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSTtZQUNuQyxZQUFZLEVBQUUsWUFBWTtTQUMzQjtJQUNILENBQUM7SUFDRCxRQUFRLEVBQUU7UUFDUixRQUFRLEVBQUU7WUFDUixPQUFPLE1BQU07UUFDZixDQUFDO1FBQ0QsUUFBUSxFQUFFO1lBQ1IsT0FBTyxHQUFHO1FBQ1osQ0FBQztRQUNELElBQUksRUFBRTtZQUNKLE1BQU0sSUFBSSxHQUFTLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztZQUN0RCxNQUFNLElBQUksR0FBVSxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7WUFDL0MsTUFBTSxLQUFLLEdBQVUsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNyRSxNQUFNLEdBQUcsR0FBVSxNQUFNLENBQUMsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1RCxNQUFNLEtBQUssR0FBVSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDckQsT0FBTyxJQUFJLElBQUksSUFBSSxLQUFLLElBQUksR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDO1FBQzdDLENBQUM7UUFDRCxRQUFRLEVBQUU7WUFDUixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUM5RCxDQUFDO0tBQ0Y7Q0FDRixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRkYsZ0dBQXFCO0FBQ3JCLHVJQUFpRDtBQUdqRCxrQkFBZSxhQUFHLENBQUMsTUFBTSxDQUFDO0lBQ3RCLFVBQVUsRUFBRTtRQUNSLFlBQVksRUFBRSx1QkFBUztLQUMxQjtJQUNELElBQUksRUFBRTtRQUNGLE1BQU0sS0FBSyxHQUFlLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUNsRCxPQUFPO1lBQ0gsSUFBSSxFQUFFLEtBQUs7WUFDWCxVQUFVLEVBQUUsSUFBSTtTQUNuQjtJQUNMLENBQUM7Q0FDSixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmRixnR0FBcUI7QUFDckIsZ0pBQW1EO0FBQ25ELDJIQUFxQztBQUNyQyxrQkFBZSxhQUFHLENBQUMsTUFBTSxDQUFDO0lBQ3hCLElBQUksRUFBRTtRQUNKLE9BQU8sRUFBRTtJQUNYLENBQUM7SUFDRCxVQUFVLEVBQUU7UUFDVixrQkFBa0IsRUFBRSw2QkFBZTtRQUNuQyxXQUFXLEVBQUUsc0JBQVE7S0FDdEI7Q0FDRixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNHRixnR0FBcUI7QUFDckIsMkhBQXFDO0FBRXJDLGtCQUFlLGFBQUcsQ0FBQyxNQUFNLENBQUM7SUFDeEIsVUFBVSxFQUFFO1FBQ1YsV0FBVyxFQUFFLHNCQUFRO0tBQ3RCO0lBQ0QsSUFBSSxFQUFFO1FBQ0osT0FBTztZQUNMLEtBQUssRUFBRSxXQUFXO1lBQ2xCLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLEtBQUssRUFBRTtnQkFDTCxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtnQkFDcEU7b0JBQ0UsS0FBSyxFQUFFLE9BQU87b0JBQ2QsSUFBSSxFQUFFLFFBQVE7b0JBQ2QsSUFBSSxFQUFFLGtCQUFrQjtvQkFDeEIsTUFBTSxFQUFFLEtBQUs7aUJBQ2Q7YUFDRjtZQUNELGNBQWMsRUFBRSxFQUFFO1NBQ25CO0lBQ0gsQ0FBQztJQUNELE9BQU8sRUFBRTtRQUNQLEtBQUssRUFBRSxVQUFTLEtBQWEsSUFBRyxDQUFDO1FBQ2pDLFlBQVksRUFBRSxVQUFTLEtBQWEsSUFBRyxDQUFDO0tBQ3pDO0NBQ0YsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJGLGdHQUFxQjtBQUNyQiwwSUFBcUQ7QUFDckQsOEhBQStDO0FBQy9DLGtJQUFpRDtBQUNqRCxnSUFBZ0Q7QUFFaEQsa0JBQWUsYUFBRyxDQUFDLE1BQU0sQ0FBQztJQUN4QixJQUFJLEVBQUU7UUFDSixPQUFPO1lBQ0wsS0FBSyxFQUFFLFdBQVc7WUFDbEIsV0FBVyxFQUFFLFVBQVU7WUFDdkIsS0FBSyxFQUFFO2dCQUNMLEVBQUUsR0FBRyxFQUFFLGtCQUFrQixFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUU7Z0JBQzNDLEVBQUUsR0FBRyxFQUFFLGtCQUFrQixFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUU7YUFDN0M7U0FDRjtJQUNILENBQUM7Q0FDRixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQ0YsZ0dBQXFCO0FBQ3JCLDBJQUFxRDtBQUNyRCw4SEFBK0M7QUFDL0Msa0lBQWlEO0FBQ2pELGdJQUFnRDtBQUVoRCxrQkFBZSxhQUFHLENBQUMsTUFBTSxDQUFDO0lBQ3hCLEtBQUssRUFBRTtRQUNMLElBQUksRUFBRSxNQUFNO1FBQ1osSUFBSSxFQUFFLE1BQU07UUFDWixLQUFLLEVBQUUsTUFBTTtRQUNiLE1BQU0sRUFBRSxPQUFPO0tBQ2hCO0lBQ0QsSUFBSSxFQUFFO1FBQ0osT0FBTztZQUNMLE1BQU0sRUFBRSxLQUFLO1NBQ2Q7SUFDSCxDQUFDO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsWUFBWSxFQUFFO1lBQ1osSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJO1FBQ3BCLENBQUM7UUFDRCxZQUFZLEVBQUU7WUFDWixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNO1FBQzNCLENBQUM7S0FDRjtJQUNELFdBQVcsRUFBRTtRQUNYLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUM1QixDQUFDO0NBQ0YsQ0FBQzs7Ozs7Ozs7Ozs7OztBQzNDRjtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixTQUFTLFlBQVksRUFBRTtBQUMzQztBQUNBO0FBQ0EsT0FBTyxTQUFTLGFBQWEsRUFBRTtBQUMvQjtBQUNBLG1CQUFtQixTQUFTLGtCQUFrQixFQUFFO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNsQkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNQQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ1BBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssc0JBQXNCO0FBQzNCLHVCQUF1QixTQUFTLHdDQUF3QyxFQUFFO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDWkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNQQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQsZUFBZSw2QkFBNkI7QUFDNUMsaUJBQWlCLDRCQUE0QjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSx5Q0FBeUMsZUFBZSxFQUFFO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLDJCQUEyQjtBQUM1QyxvQkFBb0IsMkJBQTJCO0FBQy9DLHNCQUFzQixzREFBc0Q7QUFDNUU7QUFDQSxzQkFBc0IscUNBQXFDO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiwrQkFBK0I7QUFDbkQsc0JBQXNCLGtDQUFrQztBQUN4RDtBQUNBLHNCQUFzQixvREFBb0Q7QUFDMUU7QUFDQSxzQkFBc0IscUNBQXFDO0FBQzNEO0FBQ0Esc0JBQXNCLDRCQUE0QjtBQUNsRCxxQkFBcUIsU0FBUyxXQUFXLEVBQUU7QUFDM0M7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHFDQUFxQztBQUN6RCxzQkFBc0Isa0NBQWtDO0FBQ3hEO0FBQ0Esc0JBQXNCLHFEQUFxRDtBQUMzRTtBQUNBLHNCQUFzQixxQ0FBcUM7QUFDM0Q7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDRCQUE0QjtBQUNsRCxxQkFBcUIsU0FBUyxXQUFXLEVBQUU7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsNkJBQTZCO0FBQ3hDO0FBQ0EsK0JBQStCLDZCQUE2QixlQUFlLEVBQUU7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDakZBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssc0JBQXNCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQixPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDakJBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssU0FBUyxrQkFBa0IsRUFBRTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDWkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsU0FBUyx5QkFBeUIsRUFBRTtBQUN4RCxlQUFlLFNBQVMsa0JBQWtCLEVBQUU7QUFDNUMsaUJBQWlCLFNBQVMsbUJBQW1CLEVBQUU7QUFDL0M7QUFDQSxpQkFBaUIsU0FBUyxzQkFBc0IsRUFBRTtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsU0FBUyxpQkFBaUIsRUFBRTtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxpQkFBaUI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDdkNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFNBQVMsa0JBQWtCLEVBQUU7QUFDakQsZUFBZSxTQUFTLG9CQUFvQixFQUFFO0FBQzlDLGlCQUFpQiwyQ0FBMkMsY0FBYyxFQUFFO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLDJDQUEyQyxvQkFBb0IsRUFBRTtBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsU0FBUyxjQUFjLEVBQUU7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixhQUFhO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IscUNBQXFDO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsNkJBQTZCO0FBQ25ELGtCQUFrQixrQ0FBa0M7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN6REE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsdUNBQXVDO0FBQ3JELFdBQVc7QUFDWCxLQUFLO0FBQ0w7QUFDQSxrQkFBa0IsMEJBQTBCLGtCQUFrQixFQUFFO0FBQ2hFO0FBQ0Esa0JBQWtCLFNBQVMsb0JBQW9CLEVBQUU7QUFDakQ7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDeEJBOztBQUVBO0FBQ0EsY0FBYyxtQkFBTyxDQUFDLDJmQUEwUTtBQUNoUyw0Q0FBNEMsUUFBUztBQUNyRDtBQUNBO0FBQ0EsVUFBVSxtQkFBTyxDQUFDLHVIQUEwRDtBQUM1RSwrQ0FBK0M7QUFDL0M7QUFDQSxHQUFHLEtBQVUsRUFBRSxFOzs7Ozs7Ozs7OztBQ1ZmOztBQUVBO0FBQ0EsY0FBYyxtQkFBTyxDQUFDLDhqQkFBK1M7QUFDclUsNENBQTRDLFFBQVM7QUFDckQ7QUFDQTtBQUNBLFVBQVUsbUJBQU8sQ0FBQyw2SEFBZ0U7QUFDbEYsK0NBQStDO0FBQy9DO0FBQ0EsR0FBRyxLQUFVLEVBQUUsRTs7Ozs7Ozs7Ozs7QUNWZjs7QUFFQTtBQUNBLGNBQWMsbUJBQU8sQ0FBQyxrakJBQXlTO0FBQy9ULDRDQUE0QyxRQUFTO0FBQ3JEO0FBQ0E7QUFDQSxVQUFVLG1CQUFPLENBQUMsNkhBQWdFO0FBQ2xGLCtDQUErQztBQUMvQztBQUNBLEdBQUcsS0FBVSxFQUFFLEU7Ozs7Ozs7Ozs7O0FDVmY7O0FBRUE7QUFDQSxjQUFjLG1CQUFPLENBQUMsa2pCQUF3UztBQUM5VCw0Q0FBNEMsUUFBUztBQUNyRDtBQUNBO0FBQ0EsVUFBVSxtQkFBTyxDQUFDLDZIQUFnRTtBQUNsRiwrQ0FBK0M7QUFDL0M7QUFDQSxHQUFHLEtBQVUsRUFBRSxFOzs7Ozs7Ozs7OztBQ1ZmOztBQUVBO0FBQ0EsY0FBYyxtQkFBTyxDQUFDLGdqQkFBdVM7QUFDN1QsNENBQTRDLFFBQVM7QUFDckQ7QUFDQTtBQUNBLFVBQVUsbUJBQU8sQ0FBQyw2SEFBZ0U7QUFDbEYsK0NBQStDO0FBQy9DO0FBQ0EsR0FBRyxLQUFVLEVBQUUsRTs7Ozs7Ozs7Ozs7QUNWZjs7QUFFQTtBQUNBLGNBQWMsbUJBQU8sQ0FBQyxva0JBQWlUO0FBQ3ZVLDRDQUE0QyxRQUFTO0FBQ3JEO0FBQ0E7QUFDQSxVQUFVLG1CQUFPLENBQUMsNkhBQWdFO0FBQ2xGLCtDQUErQztBQUMvQztBQUNBLEdBQUcsS0FBVSxFQUFFLEU7Ozs7Ozs7Ozs7O0FDVmY7O0FBRUE7QUFDQSxjQUFjLG1CQUFPLENBQUMsOG1CQUFzVTtBQUM1Viw0Q0FBNEMsUUFBUztBQUNyRDtBQUNBO0FBQ0EsVUFBVSxtQkFBTyxDQUFDLDZIQUFnRTtBQUNsRiwrQ0FBK0M7QUFDL0M7QUFDQSxHQUFHLEtBQVUsRUFBRSxFOzs7Ozs7Ozs7OztBQ1ZmOztBQUVBO0FBQ0EsY0FBYyxtQkFBTyxDQUFDLGdtQkFBK1Q7QUFDclYsNENBQTRDLFFBQVM7QUFDckQ7QUFDQTtBQUNBLFVBQVUsbUJBQU8sQ0FBQyw2SEFBZ0U7QUFDbEYsK0NBQStDO0FBQy9DO0FBQ0EsR0FBRyxLQUFVLEVBQUUsRTs7Ozs7Ozs7Ozs7QUNWZjs7QUFFQTtBQUNBLGNBQWMsbUJBQU8sQ0FBQyxnbUJBQStUO0FBQ3JWLDRDQUE0QyxRQUFTO0FBQ3JEO0FBQ0E7QUFDQSxVQUFVLG1CQUFPLENBQUMsNkhBQWdFO0FBQ2xGLCtDQUErQztBQUMvQztBQUNBLEdBQUcsS0FBVSxFQUFFLEU7Ozs7Ozs7Ozs7OztBQ1ZmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFrRjtBQUMzQjtBQUNMO0FBQ29DOzs7QUFHdEY7QUFDdUY7QUFDdkYsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUseUVBQU07QUFDUixFQUFFLDhFQUFNO0FBQ1IsRUFBRSx1RkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdkNmO0FBQUE7QUFBQTtBQUFBO0FBQThKLENBQWdCLHFPQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQWxMO0FBQUE7QUFBQTtBQUFBO0FBQXFVLENBQWdCLHFZQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQXpWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBb0Y7QUFDM0I7QUFDTDs7O0FBR3BEO0FBQzZGO0FBQzdGLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLDJFQUFNO0FBQ1IsRUFBRSxnRkFBTTtBQUNSLEVBQUUseUZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3RDZjtBQUFBO0FBQUE7QUFBQTtBQUE0SyxDQUFnQix1T0FBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0FoTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBb0Y7QUFDM0I7QUFDTDtBQUMrQzs7O0FBR25HO0FBQzZGO0FBQzdGLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLDJFQUFNO0FBQ1IsRUFBRSxnRkFBTTtBQUNSLEVBQUUseUZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3ZDZjtBQUFBO0FBQUE7QUFBQTtBQUE0SyxDQUFnQix1T0FBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0FoTTtBQUFBO0FBQUE7QUFBQTtBQUFnWCxDQUFnQixrWkFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0FwWTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUY7QUFDM0I7QUFDTDtBQUNvQzs7O0FBRzdGO0FBQzZGO0FBQzdGLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLGdGQUFNO0FBQ1IsRUFBRSxxRkFBTTtBQUNSLEVBQUUsOEZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3ZDZjtBQUFBO0FBQUE7QUFBQTtBQUFpTCxDQUFnQiw0T0FBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0FyTTtBQUFBO0FBQUE7QUFBQTtBQUEwVyxDQUFnQiw0WUFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0E5WDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW1GO0FBQzNCO0FBQ0w7OztBQUduRDtBQUM2RjtBQUM3RixnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSwwRUFBTTtBQUNSLEVBQUUsK0VBQU07QUFDUixFQUFFLHdGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN0Q2Y7QUFBQTtBQUFBO0FBQUE7QUFBMkssQ0FBZ0Isc09BQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBL0w7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7QUNBQSxNQUFhLFVBQVU7SUFDbkI7UUFDSSxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNmLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDO1FBQ2QsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7SUFDbkIsQ0FBQztDQU1KO0FBWkQsZ0NBWUM7QUFBQSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDWkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXdGO0FBQzNCO0FBQ0w7QUFDb0M7OztBQUc1RjtBQUM2RjtBQUM3RixnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSwrRUFBTTtBQUNSLEVBQUUsb0ZBQU07QUFDUixFQUFFLDZGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN2Q2Y7QUFBQTtBQUFBO0FBQUE7QUFBZ0wsQ0FBZ0IsMk9BQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBcE07QUFBQTtBQUFBO0FBQUE7QUFBeVcsQ0FBZ0IsMllBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBN1g7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXVGO0FBQzNCO0FBQ0w7QUFDb0M7OztBQUczRjtBQUM2RjtBQUM3RixnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSw4RUFBTTtBQUNSLEVBQUUsbUZBQU07QUFDUixFQUFFLDRGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN2Q2Y7QUFBQTtBQUFBO0FBQUE7QUFBK0ssQ0FBZ0IsME9BQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBbk07QUFBQTtBQUFBO0FBQUE7QUFBd1csQ0FBZ0IsMFlBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBNVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXNGO0FBQzNCO0FBQ0w7QUFDK0M7OztBQUdyRztBQUM2RjtBQUM3RixnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSw2RUFBTTtBQUNSLEVBQUUsa0ZBQU07QUFDUixFQUFFLDJGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN2Q2Y7QUFBQTtBQUFBO0FBQUE7QUFBOEssQ0FBZ0IseU9BQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBbE07QUFBQTtBQUFBO0FBQUE7QUFBa1gsQ0FBZ0Isb1pBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBdFk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTBHO0FBQ3ZDO0FBQ0w7QUFDNEQ7OztBQUcxSDtBQUM2RjtBQUM3RixnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSxxRkFBTTtBQUNSLEVBQUUsc0dBQU07QUFDUixFQUFFLCtHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN2Q2Y7QUFBQTtBQUFBO0FBQUE7QUFBc0wsQ0FBZ0IsaVBBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBMU07QUFBQTtBQUFBO0FBQUE7QUFBdVksQ0FBZ0IseWFBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBM1o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW1HO0FBQ3ZDO0FBQ0w7QUFDNEQ7OztBQUduSDtBQUM2RjtBQUM3RixnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSw4RUFBTTtBQUNSLEVBQUUsK0ZBQU07QUFDUixFQUFFLHdHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN2Q2Y7QUFBQTtBQUFBO0FBQUE7QUFBK0ssQ0FBZ0IsME9BQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBbk07QUFBQTtBQUFBO0FBQUE7QUFBZ1ksQ0FBZ0Isa2FBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBcFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW1HO0FBQ3ZDO0FBQ0w7QUFDNEQ7OztBQUduSDtBQUM2RjtBQUM3RixnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSw4RUFBTTtBQUNSLEVBQUUsK0ZBQU07QUFDUixFQUFFLHdHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN2Q2Y7QUFBQTtBQUFBO0FBQUE7QUFBK0ssQ0FBZ0IsME9BQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBbk07QUFBQTtBQUFBO0FBQUE7QUFBZ1ksQ0FBZ0Isa2FBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBcFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQSxnR0FBc0I7QUFDdEIseUZBQTRCO0FBQzVCLHlGQUE2QjtBQUM3QixrR0FBaUM7QUFFakMsYUFBRyxDQUFDLE1BQU0sQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0FBRWpDLElBQUksYUFBRyxDQUFDO0lBQ04sTUFBTSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsaUJBQUcsQ0FBQztJQUNyQixNQUFNLEVBQU4sZ0JBQU07SUFDTixLQUFLLEVBQUwsZUFBSztDQUNOLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1hsQixnR0FBc0I7QUFFdEIsZ0lBQWdDO0FBQ2hDLGlJQUFnRDtBQUNoRCxpSUFBZ0Q7QUFDaEQsOEhBQThDO0FBQzlDLGdKQUEwRDtBQUUxRCxhQUFHLENBQUMsR0FBRyxDQUFDLG9CQUFNLENBQUMsQ0FBQztBQUtoQixNQUFNLGNBQWMsR0FBRyxDQUNyQixFQUFTLEVBQ1QsSUFBVyxFQUNYLGFBQThCLEVBQytCLEVBQUU7SUFDL0QsT0FBTyxDQUFDLGFBQWEsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUMsQ0FBQztBQUNqRixDQUFDO0FBRUQsa0JBQWUsSUFBSSxvQkFBTSxDQUFDO0lBQ3hCLElBQUksRUFBRSxNQUFNO0lBQ1osSUFBSSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUTtJQUMxQixNQUFNLEVBQUU7UUFDTixFQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLG1CQUFLLEVBQUM7UUFDN0IsRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxrQkFBSSxFQUFDO1FBQ2pDLEVBQUMsSUFBSSxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsbUJBQUssRUFBQztRQUN6QyxFQUFDLElBQUksRUFBRSxvQkFBb0IsRUFBRSxTQUFTLEVBQUUsbUJBQUssRUFBQztRQUM5QyxFQUFDLElBQUksRUFBRSwwQkFBMEIsRUFBRSxTQUFTLEVBQUUsd0JBQVUsRUFBQztRQUN6RCxFQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLG1CQUFLLEVBQUM7UUFDbEMsRUFBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUM7S0FDM0I7SUFDRCxjQUFjLEVBQUUsY0FBYztDQUMvQixDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQ0gsMkZBQXFCO0FBQ3JCLDJHQUFtRDtBQUVuRCxLQUFLLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksNEJBQVMsRUFBRTtJQUM1QixDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2QsTUFBTSxDQUFDLEdBQVMsTUFBTSxDQUFDLE9BQU8sQ0FBQztRQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0QixDQUFDLENBQUMsQ0FBQztDQUNKO0FBRUQsU0FBZ0IsT0FBTyxDQUFDLFNBQWdCLEVBQUUsWUFBNkI7SUFDckUsTUFBTSxDQUFDLEdBQVcsR0FBRyxZQUFZLENBQUMsSUFBSSxHQUFHLFlBQVksQ0FBQyxLQUFLLEdBQUcsWUFBWSxDQUFDLEdBQUcsR0FBRyxZQUFZLENBQUMsS0FBSyxFQUFFO0lBQ3JHLE1BQU0sSUFBSSxHQUFXLGFBQUcsQ0FBQyxDQUFDLENBQUM7SUFDM0IsT0FBTyxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUM7QUFDbEMsQ0FBQztBQUpELDBCQUlDO0FBRVksZUFBTyxHQUFHLEVBRXRCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQkQsMkZBQXNCO0FBRVQsaUJBQVMsR0FBd0I7SUFDMUMsT0FBTyxDQUFDLEtBQVksRUFBRSxJQUFpQjtRQUNuQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNuQixJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBVyxFQUFFLEVBQUU7WUFDekIsTUFBTSxJQUFJLEdBQVMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztZQUM5RCxNQUFNLElBQUksR0FBVSxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7WUFDL0MsTUFBTSxLQUFLLEdBQVUsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNyRSxNQUFNLEdBQUcsR0FBVSxNQUFNLENBQUMsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1RCxNQUFNLEtBQUssR0FBVyxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQzlELE1BQU0sQ0FBQyxHQUFXLEdBQUcsSUFBSSxHQUFHLEtBQUssR0FBRyxHQUFHLEdBQUcsS0FBSyxFQUFFO1lBQ2pELE1BQU0sSUFBSSxHQUFXLGFBQUcsQ0FBQyxDQUFDLENBQUM7WUFDM0IsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2pDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0IsQ0FBQztDQUNKOzs7Ozs7Ozs7Ozs7Ozs7QUNuQkQsTUFBYSxVQUFVO0lBQ25CO1FBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7UUFDZixJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztJQUNyQixDQUFDO0NBS0o7QUFWRCxnQ0FVQztBQUVELE1BQWEsSUFBSTtJQUNiO1FBQ0ksSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDO1FBQ25DLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ2YsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztJQUN0QixDQUFDO0NBTUo7QUFaRCxvQkFZQztBQWVELE1BQWEsS0FBSztJQUFsQjtRQUNJLFVBQUssR0FBZ0IsSUFBSSxLQUFLLEVBQVEsQ0FBQztRQUN2QyxVQUFLLEdBQXNCLElBQUksR0FBRyxFQUFnQixDQUFDO0lBQ3ZELENBQUM7Q0FBQTtBQUhELHNCQUdDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQ0QsZ0dBQXNCO0FBQ3RCLHdHQUF3QjtBQUN4QiwyRUFBK0I7QUFDL0Isb0ZBQXNDO0FBQ3RDLGlGQUFtQztBQUVuQyxhQUFHLENBQUMsR0FBRyxDQUFDLGNBQUksQ0FBQyxDQUFDO0FBRWQsTUFBTSxLQUFLLEdBQVUsSUFBSSxhQUFLLENBQUM7QUFFL0Isa0JBQWUsSUFBSSxjQUFJLENBQUMsS0FBSyxDQUFDO0lBQzFCLEtBQUs7SUFDTCxTQUFTLEVBQVQsb0JBQVM7SUFDVCxPQUFPLEVBQVAsaUJBQU87Q0FDVixDQUFDLENBQUM7Ozs7Ozs7Ozs7OztBQ2RILGtCQUFrQixjQUFjLHdGQUF3RiwreUo7Ozs7Ozs7Ozs7O0FDQXhILGtCQUFrQixjQUFjLDBOQUEwTixzeUI7Ozs7Ozs7Ozs7O0FDQTFQLGtCQUFrQixjQUFjLHNHQUFzRyw2ZEFBNmQsZ1dBQWdXLHVCQUF1QixRQUFRLDREQUE0RCxHQUFHLGtDQUFrQyw4REFBOEQsdUJBQXVCLEdBQUcsRUFBRSx5Sjs7Ozs7Ozs7Ozs7QUNBN3BDLGtCQUFrQixjQUFjLDRIQUE0SCx3a0NBQXdrQyxrQ0FBa0MsMEVBQTBFLDZDQUE2Qyw0Q0FBNEMscUNBQXFDLEVBQUUsU0FBUyxJQUFJLFVBQVUsR0FBRyxTQUFTLHNDQUFzQyxVQUFVLEdBQUcsU0FBUyxJQUFJLFVBQVUsc0NBQXNDLFNBQVMsSUFBSSxVQUFVLEdBQUcsU0FBUyxHQUFHLGdEQUFnRCwwQkFBMEIsUUFBUSwwRUFBMEUsV0FBVyxPQUFPLG1DQUFtQywrQkFBK0IsOEJBQThCLHlDQUF5QyxvRUFBb0UsaUVBQWlFLE9BQU8sSUFBSSxHQUFHLHdQQUF3UCxRQUFRLHlEQUF5RCxjQUFjLElBQUksY0FBYyxJQUFJLGFBQWEseURBQXlELFVBQVUsSUFBSSxtQkFBbUIsc0RBQXNELFVBQVUsSUFBSSxtQkFBbUIsSUFBSSw0QkFBNEIsSUFBSSx3QkFBd0IsSUFBSSw0QkFBNEIsa0RBQWtELFFBQVEsSUFBSSx5QkFBeUIsSUFBSSxxQkFBcUIsSUFBSSxvQkFBb0IsSUFBSSxtQkFBbUIsNHhCQUE0eEIsaytCOzs7Ozs7Ozs7OztBQ0Fyb0gsa0JBQWtCLGNBQWMsMEVBQTBFLHN2Qjs7Ozs7Ozs7Ozs7QUNBMUcsa0JBQWtCLGNBQWMsb0dBQW9HLDBwQkFBMHBCLDRCQUE0Qiw2QkFBNkIsNEJBQTRCLE9BQU8sb0NBQW9DLDRCQUE0QixPQUFPLEdBQUcsbURBQW1ELHdCQUF3QixxQ0FBcUMsdUJBQXVCLEdBQUcsa0ZBQWtGLHNDQUFzQyw2Q0FBNkMsc0NBQXNDLCtCQUErQixPQUFPLCtCQUErQiwrQkFBK0IsT0FBTyxHQUFHLHNEQUFzRCwrQkFBK0Isa0RBQWtELCtCQUErQixPQUFPLEdBQUcsK0NBQStDLHVFQUF1RSw0RUFBNEUsMENBQTBDLDhDQUE4QyxPQUFPLDRDQUE0QyxpREFBaUQsT0FBTyxHQUFHLG1EQUFtRCxpREFBaUQsb0RBQW9ELGlPOzs7Ozs7Ozs7OztBQ0F2bEUsa0JBQWtCLGNBQWMsZ0lBQWdJLGtoR0FBa2hHLG1CQUFtQix1QkFBdUIsK0RBQStELHdDQUF3QyxtQkFBbUIseUVBQXlFLDBCQUEwQixLQUFLLCtDQUErQyx1QkFBdUIsR0FBRyx1YkFBdWIsaUpBQWlKLHlCQUF5QixHQUFHLGtDQUFrQyxpQkFBaUIsc0NBQXNDLHdDQUF3QyxlQUFlLG1DQUFtQyxnSEFBZ0gsZ0JBQWdCLEtBQUssc0RBQXNELCtFQUErRSxnRUFBZ0UseUVBQXlFLGdCQUFnQixLQUFLLDJDQUEyQyxHQUFHLHNnQjs7Ozs7Ozs7Ozs7QUNBcHZKLGtCQUFrQixjQUFjLDREQUE0RCwrWDs7Ozs7Ozs7Ozs7QUNBNUYsa0JBQWtCLGNBQWMsb0VBQW9FLDBlOzs7Ozs7Ozs7OztBQ0FwRyxrQkFBa0IsY0FBYyx1RUFBdUUsMlA7Ozs7Ozs7Ozs7O0FDQXZHLGtCQUFrQixjQUFjLGtFQUFrRSxtYzs7Ozs7Ozs7Ozs7QUNBbEcsa0JBQWtCLGNBQWMscUpBQXFKLCt1Qzs7Ozs7Ozs7Ozs7QUNBckwsa0JBQWtCLGNBQWMseUdBQXlHLHlPQUF5Tyx5QkFBeUIseUJBQXlCLDRCQUE0QixPQUFPLGlCQUFpQixHQUFHLHFLQUFxSyx3Q0FBd0MseUJBQXlCLDRCQUE0QixPQUFPLEdBQUcsZ1ZBQWdWLGdEQUFnRCx5RUFBeUUsYUFBYSx1QkFBdUIsb0JBQW9CLEdBQUcsNkRBQTZELDZFQUE2RSxhQUFhLHNGQUFzRiw2QkFBNkIsV0FBVyx3REFBd0QsK0JBQStCLHdDQUF3Qyx3Q0FBd0MsZUFBZSxxQ0FBcUMsMkJBQTJCLFdBQVcsd0JBQXdCLHdDQUF3QywrQkFBK0IsZUFBZSxXQUFXLHNDQUFzQyxHQUFHLHFFQUFxRSxnQ0FBZ0MsdUNBQXVDLDBCQUEwQix3NEI7Ozs7Ozs7Ozs7O0FDQXprRSxrQkFBa0IsY0FBYyw4R0FBOEcsd0hBQXdILDRDQUE0Qyx3Q0FBd0MsdXdCQUF1d0IsWUFBWSxHQUFHLDBCQUEwQiw4RkFBOEYsNEZBQTRGLCtCQUErQixHQUFHLEVBQUUsaWQ7Ozs7Ozs7Ozs7O0FDQXgyQyxrQkFBa0IsY0FBYyx5RUFBeUUsbTBDOzs7Ozs7Ozs7OztBQ0F6RyxrQkFBa0IsY0FBYyxvRkFBb0YsZ21DOzs7Ozs7Ozs7OztBQ0FwSCxrQkFBa0IsY0FBYyxtS0FBbUssOExBQThMLFVBQVUsZ1g7Ozs7Ozs7Ozs7O0FDQTNZLGtCQUFrQixjQUFjLDJLQUEySyxvMEJBQW8wQixXQUFXLDJsQjs7Ozs7Ozs7Ozs7QUNBMWhDLGtCQUFrQixjQUFjLG1GQUFtRix1Sjs7Ozs7Ozs7Ozs7QUNBbkgsa0JBQWtCLGNBQWMsaUtBQWlLLDZnQzs7Ozs7Ozs7Ozs7QUNBak0sa0JBQWtCLGNBQWMsNEdBQTRHLG1OOzs7Ozs7Ozs7OztBQ0E1SSxrQkFBa0IsY0FBYyxnREFBZ0QsbUY7Ozs7Ozs7Ozs7O0FDQWhGLGtCQUFrQixjQUFjLHNIQUFzSCw0d0M7Ozs7Ozs7Ozs7O0FDQXRKLGtCQUFrQixjQUFjLDJIQUEySCxnbUQ7Ozs7Ozs7Ozs7O0FDQTNKLGtCQUFrQixjQUFjLDRMQUE0TCwyd0RBQTJ3RCxzQkFBc0IsNkJBQTZCLGtCQUFrQix1Q0FBdUMsZ0RBQWdELE9BQU8sOENBQThDLDRCQUE0Qix1Q0FBdUMsT0FBTywwQkFBMEIsa0NBQWtDLG1DQUFtQyw0RUFBNEUsd0NBQXdDLE9BQU8sR0FBRyw0RUFBNEUseVk7Ozs7Ozs7Ozs7O0FDQTNpRixrQkFBa0IsY0FBYywrS0FBK0sscWI7Ozs7Ozs7Ozs7O0FDQS9NLGtCQUFrQixjQUFjLHdKQUF3SixpbEM7Ozs7Ozs7Ozs7O0FDQXhMLGtCQUFrQixjQUFjLG1JQUFtSSx1TTs7Ozs7Ozs7Ozs7QUNBbkssa0JBQWtCLGNBQWMsd0hBQXdILHViQUF1Yix5QkFBeUIsd0NBQXdDLGtEQUFrRCxzREFBc0QsV0FBVyw2QkFBNkIscUVBQXFFLHFEQUFxRCxXQUFXLDZCQUE2Qix3QkFBd0IscUJBQXFCLGtCQUFrQixHQUFHLHNLQUFzSyx5QkFBeUIsK0NBQStDLDhDQUE4QyxnREFBZ0QsaUJBQWlCLEdBQUcsNE07Ozs7Ozs7Ozs7O0FDQXAyQyxrQkFBa0IsY0FBYyx1SkFBdUosMjFDOzs7Ozs7Ozs7OztBQ0F2TCxrQkFBa0IsY0FBYyxxRUFBcUUsdUc7Ozs7Ozs7Ozs7O0FDQXJHLGtCQUFrQixjQUFjLG1FQUFtRSxpbkI7Ozs7Ozs7Ozs7O0FDQW5HLGtCQUFrQixjQUFjLHFJQUFxSSxreEM7Ozs7Ozs7Ozs7O0FDQXJLLGtCQUFrQixjQUFjLDRHQUE0Ryx1T0FBdU8sMkhBQTJILHU4Qjs7Ozs7Ozs7Ozs7QUNBOWUsa0JBQWtCLGNBQWMsa0tBQWtLLG0zQzs7Ozs7Ozs7Ozs7QUNBbE0sa0JBQWtCLGNBQWMsdUdBQXVHLG9kQUFvZCxrQ0FBa0MsNkJBQTZCLGFBQWEsc0RBQXNELG9CQUFvQixpQ0FBaUMsR0FBRyxFQUFFLDZGQUE2RixxQkFBcUIseUVBQXlFLDZCQUE2Qiw2REFBNkQsRUFBRSxrWkFBa1osa0NBQWtDLDZCQUE2QixhQUFhLHNEQUFzRCxvQkFBb0IsaUNBQWlDLGlCQUFpQiw4Q0FBOEMsNkJBQTZCLFdBQVcsT0FBTyxHQUFHLEVBQUUsb0lBQW9JLHFCQUFxQix5RUFBeUUsNkJBQTZCLDJFQUEyRSw4QkFBOEIsMkxBQTJMLFdBQVcsT0FBTyxHQUFHLEVBQUUsNE87Ozs7Ozs7Ozs7O0FDQXB5RSxrQkFBa0IsY0FBYyxvRkFBb0YsdXNCQUF1c0IsZ0NBQWdDLDRCQUE0QixHQUFHLEVBQUUseUVBQXlFLDRCQUE0QixHQUFHLGtDQUFrQyxlQUFlLEdBQUcsMG5FQUEwbkUsUUFBUSwyREFBMkQsNEJBQTRCLDZCQUE2QixpQkFBaUIsZUFBZSxxQ0FBcUMsT0FBTyxHQUFHLCtDQUErQyxlQUFlLGtDQUFrQywrQ0FBK0MsdUJBQXVCLEdBQUcsMlU7Ozs7Ozs7Ozs7O0FDQXRnSCxrQkFBa0IsY0FBYyxtRUFBbUUsb1dBQW9XLDJCQUEyQixVQUFVLG1CQUFtQiw4QkFBOEIsTUFBTSxJQUFJLE9BQU8sb0dBQW9HLHVJQUF1SSxHQUFHLDhSOzs7Ozs7Ozs7OztBQ0E1eEIsa0JBQWtCLGNBQWMsa0dBQWtHLCtwQkFBK3BCLGdDQUFnQyxvSEFBb0gsc0JBQXNCLDZDQUE2QyxzRkFBc0YsR0FBRyw0SUFBNEksc0JBQXNCLDZDQUE2QyxzRkFBc0YsZ0JBQWdCLGtCQUFrQix3RUFBd0UsT0FBTyxHQUFHLGdYQUFnWCwyREFBMkQsa0RBQWtELHNCQUFzQiw2Q0FBNkMsc0ZBQXNGLGdCQUFnQixrQkFBa0Isd0VBQXdFLE9BQU8sa0RBQWtELDZCQUE2QixXQUFXLHdQOzs7Ozs7Ozs7OztBQ0EzeUUsa0JBQWtCLGNBQWMseUZBQXlGLG8yRTs7Ozs7Ozs7Ozs7QUNBekgsa0JBQWtCLGNBQWMsdUVBQXVFLHdpQkFBd2lCLG1DQUFtQyxrWjs7Ozs7Ozs7Ozs7QUNBbHJCLGtCQUFrQixjQUFjLHdHQUF3RyxpbEJBQWlsQixzQkFBc0IseUJBQXlCLDZHQUE2RyxJQUFJLDYxQkFBNjFCLEtBQUssc2NBQXNjLHlCQUF5QixxQ0FBcUMsa0RBQWtELG9CQUFvQixxQkFBcUIsRUFBRSxTQUFTLEVBQUUsT0FBTyxLQUFLLElBQUksaUtBQWlLLHlCQUF5QixrSUFBa0ksSUFBSSwwSUFBMEkseUJBQXlCLG1KQUFtSixJQUFJLGlUQUFpVCx5QkFBeUIsaUNBQWlDLElBQUksbU1BQW1NLHlCQUF5Qix5QkFBeUIsSUFBSSx1UEFBdVAseUJBQXlCLHNEQUFzRCxJQUFJLGlEQUFpRCx5QkFBeUIsd0ZBQXdGLElBQUksMklBQTJJLHlCQUF5QixpQ0FBaUMsSUFBSSx1T0FBdU8sc0JBQXNCLGdDQUFnQyxpQkFBaUIsaURBQWlELElBQUksME87Ozs7Ozs7Ozs7O0FDQXJsSixrQkFBa0IsY0FBYywrSEFBK0gsZ0tBQWdLLHNCQUFzQixjQUFjLDJDQUEyQyxnQkFBZ0IsdUhBQXVILDZFQUE2RSxvQ0FBb0MsaUJBQWlCLE9BQU8sSUFBSSxxSEFBcUgsaUZBQWlGLDBHQUEwRyw0QkFBNEIsMlRBQTJULHVEQUF1RCx1WkFBdVosTUFBTSxpU0FBaVMsT0FBTyxpREFBaUQsYUFBYSxjQUFjLGtDQUFrQyxLQUFLLEdBQUcsa0NBQWtDLGVBQWUsR0FBRyxxTkFBcU4sMkRBQTJELGdCQUFnQix3WkFBd1osOENBQThDLEdBQUcsbUhBQW1ILHVGQUF1Rix5Q0FBeUMsR0FBRyxrRkFBa0Ysa0RBQWtELHlEQUF5RCw2REFBNkQsbUNBQW1DLEdBQUcsa0dBQWtHLGtCQUFrQix5akNBQXlqQyxPQUFPLDZSQUE2UixPQUFPLDBXQUEwVyxPQUFPLHdXQUF3VyxPQUFPLGlvQkFBaW9CLE9BQU8saURBQWlELE9BQU8sMkVBQTJFLE9BQU8saUZBQWlGLE9BQU8sb0NBQW9DLE9BQU8scUhBQXFILE9BQU8sZ0ZBQWdGLE9BQU8sc0NBQXNDLE9BQU8sb0NBQW9DLFNBQVMscUNBQXFDLE9BQU8sa0s7Ozs7Ozs7Ozs7O0FDQXAzTixrQkFBa0IsY0FBYyx3RkFBd0YsMGpCQUEwakIsdUNBQXVDLEdBQUcsZ0JBQWdCLHVDQUF1QyxHQUFHLGd6QkFBZ3pCLGNBQWMsa0ZBQWtGLHNCQUFzQixvQkFBb0IsR0FBRyxRQUFRLGNBQWMsaUJBQWlCLEdBQUcsa0JBQWtCLDBCQUEwQixHQUFHLG9CQUFvQixxQkFBcUIscUJBQXFCLHlCQUF5QiwwQ0FBMEMsOEJBQThCLDRDQUE0Qyx5QkFBeUIsa0JBQWtCLG1DQUFtQyx3QkFBd0IsMEJBQTBCLG9CQUFvQix5Q0FBeUMsZ0JBQWdCLEdBQUcsMEJBQTBCLHdCQUF3QixHQUFHLGdCQUFnQiwwQkFBMEIsc0JBQXNCLEdBQUcsZ0JBQWdCLGdCQUFnQixzQkFBc0IsR0FBRywyQkFBMkIsaUJBQWlCLHFCQUFxQixlQUFlLGdCQUFnQix1QkFBdUIsdUJBQXVCLG1CQUFtQixvQkFBb0Isb0JBQW9CLG1CQUFtQixtQkFBbUIsMkJBQTJCLEdBQUcsd1k7Ozs7Ozs7Ozs7O0FDQXJvRixrQkFBa0IsY0FBYyw0RUFBNEUsZ3dCOzs7Ozs7Ozs7OztBQ0E1RyxrQkFBa0IsY0FBYyxnR0FBZ0csc01BQXNNLHNDQUFzQyw4Q0FBOEMsNEJBQTRCLHlFQUF5RSx5Q0FBeUMseUJBQXlCLGVBQWUsc0NBQXNDLGdFQUFnRSx1SEFBdUgsZ0ZBQWdGLHFEQUFxRCxtQkFBbUIsbUZBQW1GLGVBQWUsb0JBQW9CLFdBQVcsNkJBQTZCLHNEQUFzRCxPQUFPLEdBQUcsc047Ozs7Ozs7Ozs7O0FDQW5xQyxrQkFBa0IsY0FBYyx5R0FBeUcsczhEOzs7Ozs7Ozs7OztBQ0F6SSxrQkFBa0IsY0FBYyxzR0FBc0csODdCQUE4N0IsbUJBQW1CLEdBQUcsb0JBQW9CLDZCQUE2QixnQkFBZ0IsbUNBQW1DLGlEQUFpRCwrQ0FBK0MsK0NBQStDLG1FQUFtRSxpRUFBaUUsa0RBQWtELG1FQUFtRSw2REFBNkQsd0JBQXdCLHNCQUFzQixzQkFBc0IsaUJBQWlCLEdBQUcsa1Q7Ozs7Ozs7Ozs7O0FDQTN0RCxrQkFBa0IsY0FBYyxvRkFBb0YsdzJCQUF3MkIsNk1BQTZNLHlsQzs7Ozs7Ozs7Ozs7QUNBenFDLGtCQUFrQixjQUFjLHVFQUF1RSx1aEM7Ozs7Ozs7Ozs7O0FDQXZHLGtCQUFrQixjQUFjLG9FQUFvRSwyNEI7Ozs7Ozs7Ozs7O0FDQXBHLGtCQUFrQixjQUFjLHVFQUF1RSxpNUM7Ozs7Ozs7Ozs7O0FDQXZHLGtCQUFrQixjQUFjLHNHQUFzRywrWUFBK1ksdUJBQXVCLHFCQUFxQixnQ0FBZ0Msd0RBQXdELE9BQU8sR0FBRyxnREFBZ0QsaUNBQWlDLG9NQUFvTSxtQ0FBbUMsbUJBQW1CLG1TOzs7Ozs7Ozs7OztBQ0E5K0Isa0JBQWtCLGNBQWMsMkdBQTJHLCtwTTs7Ozs7Ozs7Ozs7QUNBM0ksa0JBQWtCLGNBQWMsc0dBQXNHLDB6QkFBMHpCLGdCQUFnQixpRUFBaUUsaUJBQWlCLGNBQWMsZ0JBQWdCLHNHQUFzRyxpQkFBaUIsY0FBYyxnQkFBZ0IsZ0VBQWdFLGlCQUFpQixjQUFjLGdCQUFnQiwyNUI7Ozs7Ozs7Ozs7O0FDQXAwQyxrQkFBa0IsY0FBYywrRUFBK0UsdWVBQXVlLGNBQWMscVA7Ozs7Ozs7Ozs7O0FDQXBtQixrQkFBa0IsY0FBYyw4RUFBOEUseW1DOzs7Ozs7Ozs7OztBQ0E5RyxrQkFBa0IsY0FBYyw2RkFBNkYsNjlCOzs7Ozs7Ozs7OztBQ0E3SCxrQkFBa0IsY0FBYyw0RUFBNEUsdW9CIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibWFpblwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL21haW4udHNcIixcInZlbmRvcnN+bWFpblwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5cbmV4cG9ydCBjb25zdCBtYXJrZG93bnM6IE1hcDxTdHJpbmcsIFByb21pc2U8YW55Pj4gPSBuZXcgTWFwPFN0cmluZywgUHJvbWlzZTxhbnk+PihbXG5bXCJhNzY1ZWMxMjhmNTAxYmFmNDI3ODVjZDYwZWQwOWM0MVwiLCBpbXBvcnQoXCIvaG9tZS9ydW5uZXIvd29yay9WdWVCbG9nL1Z1ZUJsb2cvZGlzdC9tYXJrZG93bnMvYTc2NWVjMTI4ZjUwMWJhZjQyNzg1Y2Q2MGVkMDljNDFcIildLFxuW1wiMGZiZjYyNjhhY2ZjYTVlMmRhN2I0YWJhM2RjMjczNjZcIiwgaW1wb3J0KFwiL2hvbWUvcnVubmVyL3dvcmsvVnVlQmxvZy9WdWVCbG9nL2Rpc3QvbWFya2Rvd25zLzBmYmY2MjY4YWNmY2E1ZTJkYTdiNGFiYTNkYzI3MzY2XCIpXSxcbltcImVjOGQ4YTRhMzQwZThjZWIyNjg2ODlhMmUzNjY5MTg3XCIsIGltcG9ydChcIi9ob21lL3J1bm5lci93b3JrL1Z1ZUJsb2cvVnVlQmxvZy9kaXN0L21hcmtkb3ducy9lYzhkOGE0YTM0MGU4Y2ViMjY4Njg5YTJlMzY2OTE4N1wiKV0sXG5bXCI0ZWM1ODE2MWNiNTYzNGNkZjNlMGExOWJkMzkyNWMzM1wiLCBpbXBvcnQoXCIvaG9tZS9ydW5uZXIvd29yay9WdWVCbG9nL1Z1ZUJsb2cvZGlzdC9tYXJrZG93bnMvNGVjNTgxNjFjYjU2MzRjZGYzZTBhMTliZDM5MjVjMzNcIildLFxuW1wiNDZmM2I5MmEyYzdiMzEzMmU1YzAwZWJhMzI5ZTdmMWJcIiwgaW1wb3J0KFwiL2hvbWUvcnVubmVyL3dvcmsvVnVlQmxvZy9WdWVCbG9nL2Rpc3QvbWFya2Rvd25zLzQ2ZjNiOTJhMmM3YjMxMzJlNWMwMGViYTMyOWU3ZjFiXCIpXSxcbltcIjllMjI4ZGE4YzEzZGE0MTA5ZTdlN2MzZDg0NTQ2YmFjXCIsIGltcG9ydChcIi9ob21lL3J1bm5lci93b3JrL1Z1ZUJsb2cvVnVlQmxvZy9kaXN0L21hcmtkb3ducy85ZTIyOGRhOGMxM2RhNDEwOWU3ZTdjM2Q4NDU0NmJhY1wiKV0sXG5bXCJjYTRkMDAwNzFlMmZkZTFmNmIxNzZiNTg2ODJjYzg0MVwiLCBpbXBvcnQoXCIvaG9tZS9ydW5uZXIvd29yay9WdWVCbG9nL1Z1ZUJsb2cvZGlzdC9tYXJrZG93bnMvY2E0ZDAwMDcxZTJmZGUxZjZiMTc2YjU4NjgyY2M4NDFcIildLFxuW1wiZDhkMTFmYzJjNTZjYWI1ZmZlYWJkZDFhMWJlNzA0MjhcIiwgaW1wb3J0KFwiL2hvbWUvcnVubmVyL3dvcmsvVnVlQmxvZy9WdWVCbG9nL2Rpc3QvbWFya2Rvd25zL2Q4ZDExZmMyYzU2Y2FiNWZmZWFiZGQxYTFiZTcwNDI4XCIpXSxcbltcIjRjMTdmMjc3YmQyNzg2MzRkYzc5ZTRjNjAwZmYyNGUwXCIsIGltcG9ydChcIi9ob21lL3J1bm5lci93b3JrL1Z1ZUJsb2cvVnVlQmxvZy9kaXN0L21hcmtkb3ducy80YzE3ZjI3N2JkMjc4NjM0ZGM3OWU0YzYwMGZmMjRlMFwiKV0sXG5bXCIwYzdjM2U2NzIyZTg0YTM0NDk1MTFjZmU1Njc1OTdkMlwiLCBpbXBvcnQoXCIvaG9tZS9ydW5uZXIvd29yay9WdWVCbG9nL1Z1ZUJsb2cvZGlzdC9tYXJrZG93bnMvMGM3YzNlNjcyMmU4NGEzNDQ5NTExY2ZlNTY3NTk3ZDJcIildLFxuW1wiOTUwYTBmNzY4NjBhZDI4MDk5NmMwNDQ5YzlmMjZjN2RcIiwgaW1wb3J0KFwiL2hvbWUvcnVubmVyL3dvcmsvVnVlQmxvZy9WdWVCbG9nL2Rpc3QvbWFya2Rvd25zLzk1MGEwZjc2ODYwYWQyODA5OTZjMDQ0OWM5ZjI2YzdkXCIpXSxcbltcIjc5ZjVmYjE0YzA0NTBlY2Q0M2U1Y2U3OGExYTUyMTI3XCIsIGltcG9ydChcIi9ob21lL3J1bm5lci93b3JrL1Z1ZUJsb2cvVnVlQmxvZy9kaXN0L21hcmtkb3ducy83OWY1ZmIxNGMwNDUwZWNkNDNlNWNlNzhhMWE1MjEyN1wiKV0sXG5bXCJjMThlODViOGY2NjgzMGNlNzgzM2M1ODRlNjJjODZjMFwiLCBpbXBvcnQoXCIvaG9tZS9ydW5uZXIvd29yay9WdWVCbG9nL1Z1ZUJsb2cvZGlzdC9tYXJrZG93bnMvYzE4ZTg1YjhmNjY4MzBjZTc4MzNjNTg0ZTYyYzg2YzBcIildLFxuW1wiN2JlNjgyNjQ3ZWM3NjFlYzIxZjFhNmY5OGI4ZWM3NjFcIiwgaW1wb3J0KFwiL2hvbWUvcnVubmVyL3dvcmsvVnVlQmxvZy9WdWVCbG9nL2Rpc3QvbWFya2Rvd25zLzdiZTY4MjY0N2VjNzYxZWMyMWYxYTZmOThiOGVjNzYxXCIpXSxcbltcIjkyZmQ4ZTAxMDA0ODRiMjZiMTNhYTRkMmZiNjZkODI4XCIsIGltcG9ydChcIi9ob21lL3J1bm5lci93b3JrL1Z1ZUJsb2cvVnVlQmxvZy9kaXN0L21hcmtkb3ducy85MmZkOGUwMTAwNDg0YjI2YjEzYWE0ZDJmYjY2ZDgyOFwiKV0sXG5bXCI4MzA5MjdkYzUwOTIzNTgwOGQzMGY0MzM1NWM2NTQ5YlwiLCBpbXBvcnQoXCIvaG9tZS9ydW5uZXIvd29yay9WdWVCbG9nL1Z1ZUJsb2cvZGlzdC9tYXJrZG93bnMvODMwOTI3ZGM1MDkyMzU4MDhkMzBmNDMzNTVjNjU0OWJcIildLFxuW1wiNzZmNTliNzBiYzBhNDVhNWRjMTBhN2U0ZTk3ZjY3ZDBcIiwgaW1wb3J0KFwiL2hvbWUvcnVubmVyL3dvcmsvVnVlQmxvZy9WdWVCbG9nL2Rpc3QvbWFya2Rvd25zLzc2ZjU5YjcwYmMwYTQ1YTVkYzEwYTdlNGU5N2Y2N2QwXCIpXSxcbltcIjU0ODEyY2Q3NGM3ZmFjODllNzZkNjgyZDdhZWEwNzQ2XCIsIGltcG9ydChcIi9ob21lL3J1bm5lci93b3JrL1Z1ZUJsb2cvVnVlQmxvZy9kaXN0L21hcmtkb3ducy81NDgxMmNkNzRjN2ZhYzg5ZTc2ZDY4MmQ3YWVhMDc0NlwiKV0sXG5bXCJjM2EwNDlkN2Q0ZDI4ZGViYjgxYWYyMmNmMzNlNTIxYVwiLCBpbXBvcnQoXCIvaG9tZS9ydW5uZXIvd29yay9WdWVCbG9nL1Z1ZUJsb2cvZGlzdC9tYXJrZG93bnMvYzNhMDQ5ZDdkNGQyOGRlYmI4MWFmMjJjZjMzZTUyMWFcIildLFxuW1wiYjUyMjM5NGI2NThjMmUyMzg4YjhmOGEwNzI0YmVjZmRcIiwgaW1wb3J0KFwiL2hvbWUvcnVubmVyL3dvcmsvVnVlQmxvZy9WdWVCbG9nL2Rpc3QvbWFya2Rvd25zL2I1MjIzOTRiNjU4YzJlMjM4OGI4ZjhhMDcyNGJlY2ZkXCIpXSxcbltcIjQ1NzQ3OWJmY2QyMGU4MWYxYzg3YTIyY2M4MDI0NTg0XCIsIGltcG9ydChcIi9ob21lL3J1bm5lci93b3JrL1Z1ZUJsb2cvVnVlQmxvZy9kaXN0L21hcmtkb3ducy80NTc0NzliZmNkMjBlODFmMWM4N2EyMmNjODAyNDU4NFwiKV0sXG5bXCIwMjUyMmMyZTUyM2Q5NWI2OTM1MjhkZDBjZjA3NzEwZlwiLCBpbXBvcnQoXCIvaG9tZS9ydW5uZXIvd29yay9WdWVCbG9nL1Z1ZUJsb2cvZGlzdC9tYXJrZG93bnMvMDI1MjJjMmU1MjNkOTViNjkzNTI4ZGQwY2YwNzcxMGZcIildLFxuW1wiMTQ0ODBiOTk3NTUxOGE3NzczMzAwNjdjYzNjZTJhOWJcIiwgaW1wb3J0KFwiL2hvbWUvcnVubmVyL3dvcmsvVnVlQmxvZy9WdWVCbG9nL2Rpc3QvbWFya2Rvd25zLzE0NDgwYjk5NzU1MThhNzc3MzMwMDY3Y2MzY2UyYTliXCIpXSxcbltcIjdjYmExYjFhNzJjZGEzMDI0ODAyNTJmMGIwYWE1ZWJkXCIsIGltcG9ydChcIi9ob21lL3J1bm5lci93b3JrL1Z1ZUJsb2cvVnVlQmxvZy9kaXN0L21hcmtkb3ducy83Y2JhMWIxYTcyY2RhMzAyNDgwMjUyZjBiMGFhNWViZFwiKV0sXG5bXCIyMGViNDY3MTA5YzM1YjQ4ZDU5OTBiNjM3ZWFjMTMzZlwiLCBpbXBvcnQoXCIvaG9tZS9ydW5uZXIvd29yay9WdWVCbG9nL1Z1ZUJsb2cvZGlzdC9tYXJrZG93bnMvMjBlYjQ2NzEwOWMzNWI0OGQ1OTkwYjYzN2VhYzEzM2ZcIildLFxuW1wiZDZhZDI4ZGY1NGUxMWRiOTMwZGI0N2E1YjU1ZDliNGJcIiwgaW1wb3J0KFwiL2hvbWUvcnVubmVyL3dvcmsvVnVlQmxvZy9WdWVCbG9nL2Rpc3QvbWFya2Rvd25zL2Q2YWQyOGRmNTRlMTFkYjkzMGRiNDdhNWI1NWQ5YjRiXCIpXSxcbltcImNmNTQyMzJjZmIwY2U5NTNkYmMzYjQ4YmZmY2ViMmU2XCIsIGltcG9ydChcIi9ob21lL3J1bm5lci93b3JrL1Z1ZUJsb2cvVnVlQmxvZy9kaXN0L21hcmtkb3ducy9jZjU0MjMyY2ZiMGNlOTUzZGJjM2I0OGJmZmNlYjJlNlwiKV0sXG5bXCI3YzEyNDE2MzM2MTY2OGU4ZmY5YjY4NDFiMjNhYjUxY1wiLCBpbXBvcnQoXCIvaG9tZS9ydW5uZXIvd29yay9WdWVCbG9nL1Z1ZUJsb2cvZGlzdC9tYXJrZG93bnMvN2MxMjQxNjMzNjE2NjhlOGZmOWI2ODQxYjIzYWI1MWNcIildLFxuW1wiMzU5ZWY1ZmRiOTYzMTg5YmI4NTJmZGE5YzA5NGQ2NGNcIiwgaW1wb3J0KFwiL2hvbWUvcnVubmVyL3dvcmsvVnVlQmxvZy9WdWVCbG9nL2Rpc3QvbWFya2Rvd25zLzM1OWVmNWZkYjk2MzE4OWJiODUyZmRhOWMwOTRkNjRjXCIpXSxcbltcIjhkMmY4NWE0NDQ0ODYzMDBiMjRiMmIzYWE2MDgyMDljXCIsIGltcG9ydChcIi9ob21lL3J1bm5lci93b3JrL1Z1ZUJsb2cvVnVlQmxvZy9kaXN0L21hcmtkb3ducy84ZDJmODVhNDQ0NDg2MzAwYjI0YjJiM2FhNjA4MjA5Y1wiKV0sXG5bXCI2MTc0NjBhYTM2MTliMzkyYTFjMjcwZTU5YjUzZGE2ZlwiLCBpbXBvcnQoXCIvaG9tZS9ydW5uZXIvd29yay9WdWVCbG9nL1Z1ZUJsb2cvZGlzdC9tYXJrZG93bnMvNjE3NDYwYWEzNjE5YjM5MmExYzI3MGU1OWI1M2RhNmZcIildLFxuW1wiZGNlM2U4ZTdmZWQ1YjA2OWE3MWQxNmM0YTc3ZjZiYTBcIiwgaW1wb3J0KFwiL2hvbWUvcnVubmVyL3dvcmsvVnVlQmxvZy9WdWVCbG9nL2Rpc3QvbWFya2Rvd25zL2RjZTNlOGU3ZmVkNWIwNjlhNzFkMTZjNGE3N2Y2YmEwXCIpXSxcbltcIjE3Y2EzZjRlZjc4YWM5YTY4YmQ0NzM1YjQ0ZDZkODQxXCIsIGltcG9ydChcIi9ob21lL3J1bm5lci93b3JrL1Z1ZUJsb2cvVnVlQmxvZy9kaXN0L21hcmtkb3ducy8xN2NhM2Y0ZWY3OGFjOWE2OGJkNDczNWI0NGQ2ZDg0MVwiKV0sXG5bXCIyNWNhZDdkNTk0Nzg4ZjkwNGJhM2ZlZmNhMDliODRiOFwiLCBpbXBvcnQoXCIvaG9tZS9ydW5uZXIvd29yay9WdWVCbG9nL1Z1ZUJsb2cvZGlzdC9tYXJrZG93bnMvMjVjYWQ3ZDU5NDc4OGY5MDRiYTNmZWZjYTA5Yjg0YjhcIildLFxuW1wiMjI5NDE3ZjA2ZjU0ZGFkN2IzNWZlZjY2M2YyNjM5ZGNcIiwgaW1wb3J0KFwiL2hvbWUvcnVubmVyL3dvcmsvVnVlQmxvZy9WdWVCbG9nL2Rpc3QvbWFya2Rvd25zLzIyOTQxN2YwNmY1NGRhZDdiMzVmZWY2NjNmMjYzOWRjXCIpXSxcbltcImY2Y2UwNGRjZjVmNThiYTBjM2RkNzcwNDlhZGUyNjdkXCIsIGltcG9ydChcIi9ob21lL3J1bm5lci93b3JrL1Z1ZUJsb2cvVnVlQmxvZy9kaXN0L21hcmtkb3ducy9mNmNlMDRkY2Y1ZjU4YmEwYzNkZDc3MDQ5YWRlMjY3ZFwiKV0sXG5bXCIxNTQ2YzUyZGQ4ODRjNDcwNTZjZTJmODI0MDQwOGQ5NlwiLCBpbXBvcnQoXCIvaG9tZS9ydW5uZXIvd29yay9WdWVCbG9nL1Z1ZUJsb2cvZGlzdC9tYXJrZG93bnMvMTU0NmM1MmRkODg0YzQ3MDU2Y2UyZjgyNDA0MDhkOTZcIildLFxuW1wiMjk3NjFmZWQzMTI4NjFkZDhlM2FkNzA0ZmZkMTQ0MjFcIiwgaW1wb3J0KFwiL2hvbWUvcnVubmVyL3dvcmsvVnVlQmxvZy9WdWVCbG9nL2Rpc3QvbWFya2Rvd25zLzI5NzYxZmVkMzEyODYxZGQ4ZTNhZDcwNGZmZDE0NDIxXCIpXSxcbltcIjUyMDgzMmJkNmFkZWUwZWQxMGMwMzY2Zjk4Mjc1MDk2XCIsIGltcG9ydChcIi9ob21lL3J1bm5lci93b3JrL1Z1ZUJsb2cvVnVlQmxvZy9kaXN0L21hcmtkb3ducy81MjA4MzJiZDZhZGVlMGVkMTBjMDM2NmY5ODI3NTA5NlwiKV0sXG5bXCIxNjE5MmI2ZWI3MTc3ZThiMjIyYjU0YmQ5NDA3M2ZmZFwiLCBpbXBvcnQoXCIvaG9tZS9ydW5uZXIvd29yay9WdWVCbG9nL1Z1ZUJsb2cvZGlzdC9tYXJrZG93bnMvMTYxOTJiNmViNzE3N2U4YjIyMmI1NGJkOTQwNzNmZmRcIildLFxuW1wiZmVlYTUxN2FmOWI2ZWViNmMwYTgxYTA1YzRiY2ZiNzlcIiwgaW1wb3J0KFwiL2hvbWUvcnVubmVyL3dvcmsvVnVlQmxvZy9WdWVCbG9nL2Rpc3QvbWFya2Rvd25zL2ZlZWE1MTdhZjliNmVlYjZjMGE4MWEwNWM0YmNmYjc5XCIpXSxcbltcIjFmNTVmZmE0Zjk2YzA0NjRmZjQ3MTEyYWYwMDZkYTVlXCIsIGltcG9ydChcIi9ob21lL3J1bm5lci93b3JrL1Z1ZUJsb2cvVnVlQmxvZy9kaXN0L21hcmtkb3ducy8xZjU1ZmZhNGY5NmMwNDY0ZmY0NzExMmFmMDA2ZGE1ZVwiKV0sXG5bXCIyNzhiMDdhOTMwYmM0ZDQ3OGJlYWUzNWNhYzA4YjMyOVwiLCBpbXBvcnQoXCIvaG9tZS9ydW5uZXIvd29yay9WdWVCbG9nL1Z1ZUJsb2cvZGlzdC9tYXJrZG93bnMvMjc4YjA3YTkzMGJjNGQ0NzhiZWFlMzVjYWMwOGIzMjlcIildLFxuW1wiNDY3MTQyYTkxYmIwNzU4MDAyNDA1ZTM0YzI4MDEwNDNcIiwgaW1wb3J0KFwiL2hvbWUvcnVubmVyL3dvcmsvVnVlQmxvZy9WdWVCbG9nL2Rpc3QvbWFya2Rvd25zLzQ2NzE0MmE5MWJiMDc1ODAwMjQwNWUzNGMyODAxMDQzXCIpXSxcbltcIjcxMTA0NjY4MmU0ZmFkOWViMzYwYjJmYjI5NWNmZTdkXCIsIGltcG9ydChcIi9ob21lL3J1bm5lci93b3JrL1Z1ZUJsb2cvVnVlQmxvZy9kaXN0L21hcmtkb3ducy83MTEwNDY2ODJlNGZhZDllYjM2MGIyZmIyOTVjZmU3ZFwiKV0sXG5bXCIyM2IxNGRhZTJmMjQwYzllMmMxZTZiNDJlNmM2YTcwNFwiLCBpbXBvcnQoXCIvaG9tZS9ydW5uZXIvd29yay9WdWVCbG9nL1Z1ZUJsb2cvZGlzdC9tYXJrZG93bnMvMjNiMTRkYWUyZjI0MGM5ZTJjMWU2YjQyZTZjNmE3MDRcIildLFxuW1wiOGFkMGNiMmVhMWE1M2I1YWNkMmY3MjNlMmRkOWY1MzlcIiwgaW1wb3J0KFwiL2hvbWUvcnVubmVyL3dvcmsvVnVlQmxvZy9WdWVCbG9nL2Rpc3QvbWFya2Rvd25zLzhhZDBjYjJlYTFhNTNiNWFjZDJmNzIzZTJkZDlmNTM5XCIpXSxcbltcImQ2NTQzNzg1OGRiOGE2YzQyMWUyOTE3NjBjNjAwM2IzXCIsIGltcG9ydChcIi9ob21lL3J1bm5lci93b3JrL1Z1ZUJsb2cvVnVlQmxvZy9kaXN0L21hcmtkb3ducy9kNjU0Mzc4NThkYjhhNmM0MjFlMjkxNzYwYzYwMDNiM1wiKV0sXG5bXCIyNzAxMzU1MThkZjdmNDEyOTU1OGY5MDc2Zjc5YTBhOFwiLCBpbXBvcnQoXCIvaG9tZS9ydW5uZXIvd29yay9WdWVCbG9nL1Z1ZUJsb2cvZGlzdC9tYXJrZG93bnMvMjcwMTM1NTE4ZGY3ZjQxMjk1NThmOTA3NmY3OWEwYThcIildLFxuW1wiZmQ5YmU5YmZmZGYwMGMyODVhNDQ5MjdhNmJjYjc2ODZcIiwgaW1wb3J0KFwiL2hvbWUvcnVubmVyL3dvcmsvVnVlQmxvZy9WdWVCbG9nL2Rpc3QvbWFya2Rvd25zL2ZkOWJlOWJmZmRmMDBjMjg1YTQ0OTI3YTZiY2I3Njg2XCIpXSxcbltcImViYTk5MzhkYzU0MzRlMGE4NmU5MTBkZjExYTJmOTQxXCIsIGltcG9ydChcIi9ob21lL3J1bm5lci93b3JrL1Z1ZUJsb2cvVnVlQmxvZy9kaXN0L21hcmtkb3ducy9lYmE5OTM4ZGM1NDM0ZTBhODZlOTEwZGYxMWEyZjk0MVwiKV0sXG5bXCI1NzcwMzZhZDNiYjEwOGU4ZWRmOWI4YjA4ZjA5NjNlYlwiLCBpbXBvcnQoXCIvaG9tZS9ydW5uZXIvd29yay9WdWVCbG9nL1Z1ZUJsb2cvZGlzdC9tYXJrZG93bnMvNTc3MDM2YWQzYmIxMDhlOGVkZjliOGIwOGYwOTYzZWJcIildLFxuW1wiMmUyMjE3YWJkMzE0YjYwMTc0ZDBhMTVjODhlNjUzN2FcIiwgaW1wb3J0KFwiL2hvbWUvcnVubmVyL3dvcmsvVnVlQmxvZy9WdWVCbG9nL2Rpc3QvbWFya2Rvd25zLzJlMjIxN2FiZDMxNGI2MDE3NGQwYTE1Yzg4ZTY1MzdhXCIpXSxcbltcIjgxNzAzNDk5Y2IwMTM5YTVkOTVlYWE1MWQyNGFkMWQwXCIsIGltcG9ydChcIi9ob21lL3J1bm5lci93b3JrL1Z1ZUJsb2cvVnVlQmxvZy9kaXN0L21hcmtkb3ducy84MTcwMzQ5OWNiMDEzOWE1ZDk1ZWFhNTFkMjRhZDFkMFwiKV0sXG5bXCJiMzNkODY0MmY2OGIyMzU3OWIwMTZlMDc4NmUzMDZmOVwiLCBpbXBvcnQoXCIvaG9tZS9ydW5uZXIvd29yay9WdWVCbG9nL1Z1ZUJsb2cvZGlzdC9tYXJrZG93bnMvYjMzZDg2NDJmNjhiMjM1NzliMDE2ZTA3ODZlMzA2ZjlcIildLFxuW1wiM2UzYzM1Mzk0YTcyYzkzZmNmMmRiODZlMzIwODRiZWVcIiwgaW1wb3J0KFwiL2hvbWUvcnVubmVyL3dvcmsvVnVlQmxvZy9WdWVCbG9nL2Rpc3QvbWFya2Rvd25zLzNlM2MzNTM5NGE3MmM5M2ZjZjJkYjg2ZTMyMDg0YmVlXCIpXSxcbltcIjMxYzFlM2QyYzM5Mzg1ZWFhY2Q2NWEwNGVkMDU5MDVmXCIsIGltcG9ydChcIi9ob21lL3J1bm5lci93b3JrL1Z1ZUJsb2cvVnVlQmxvZy9kaXN0L21hcmtkb3ducy8zMWMxZTNkMmMzOTM4NWVhYWNkNjVhMDRlZDA1OTA1ZlwiKV0sXG5bXCJiNmUyOWFkZTQyMzI5ZWE0ODNkNjk4NmU2ODUyMGYwOFwiLCBpbXBvcnQoXCIvaG9tZS9ydW5uZXIvd29yay9WdWVCbG9nL1Z1ZUJsb2cvZGlzdC9tYXJrZG93bnMvYjZlMjlhZGU0MjMyOWVhNDgzZDY5ODZlNjg1MjBmMDhcIildLFxuW1wiYWUwZDBmNzVjNmRjZmM5NWQxMTdkNGJjNDkwNDkxMDdcIiwgaW1wb3J0KFwiL2hvbWUvcnVubmVyL3dvcmsvVnVlQmxvZy9WdWVCbG9nL2Rpc3QvbWFya2Rvd25zL2FlMGQwZjc1YzZkY2ZjOTVkMTE3ZDRiYzQ5MDQ5MTA3XCIpXSxcblxuXSk7XG4iLCJcbmltcG9ydCB7IEF0dHJpYnV0ZXMsIFBvc3QgfSBmcm9tIFwiL2hvbWUvcnVubmVyL3dvcmsvVnVlQmxvZy9WdWVCbG9nL3NyYy9zdG9yZS9zdGF0ZVwiO1xuaW1wb3J0IE1hcmtkb3duSXQgZnJvbSBcIm1hcmtkb3duLWl0XCI7XG5pbXBvcnQgZnJvbnRNYXR0ZXIgZnJvbSBcImZyb250LW1hdHRlclwiO1xuXG5jb25zdCBtZCA9IG5ldyBNYXJrZG93bkl0KCk7XG5cbmV4cG9ydCBkZWZhdWx0ICgpOiBQb3N0ID0+IHtcbiAgICBjb25zdCBwOiBQb3N0ID0gcmVxdWlyZShcIi9ob21lL3J1bm5lci93b3JrL1Z1ZUJsb2cvVnVlQmxvZy9zdGF0aWMvaGVsbG8ubWRcIik7XG5cbiAgICBjb25zdCBib2R5OlN0cmluZyA9IG1kLnJlbmRlcihwLmJvZHkudG9TdHJpbmcoKSk7XG4gICAgY29uc3QgZWxlbWVudDpTdHJpbmdbXSA9IGJvZHkuc3BsaXQoXCJcXG5cIik7XG5cbiAgICBsZXQgcG9zdCA9IG5ldyBQb3N0KCk7XG5cbiAgICBwb3N0LmF0dHJpYnV0ZXMgPSBwLmF0dHJpYnV0ZXM7XG4gICAgLy9UT0RPOiDpgJrov4fphY3nva7mlofku7bpgInmi6nkv53lrZjnmoTmlbDph49cbiAgICBwb3N0LnN1bW1hcnkgPSBlbGVtZW50WzBdO1xuICAgIHBvc3QuYm9keSA9IGJvZHk7XG4gICAgcmV0dXJuIHBvc3Q7XG59IiwiXG5pbXBvcnQgeyBBdHRyaWJ1dGVzLCBQb3N0IH0gZnJvbSBcIi9ob21lL3J1bm5lci93b3JrL1Z1ZUJsb2cvVnVlQmxvZy9zcmMvc3RvcmUvc3RhdGVcIjtcbmltcG9ydCBNYXJrZG93bkl0IGZyb20gXCJtYXJrZG93bi1pdFwiO1xuaW1wb3J0IGZyb250TWF0dGVyIGZyb20gXCJmcm9udC1tYXR0ZXJcIjtcblxuY29uc3QgbWQgPSBuZXcgTWFya2Rvd25JdCgpO1xuXG5leHBvcnQgZGVmYXVsdCAoKTogUG9zdCA9PiB7XG4gICAgY29uc3QgcDogUG9zdCA9IHJlcXVpcmUoXCIvaG9tZS9ydW5uZXIvd29yay9WdWVCbG9nL1Z1ZUJsb2cvc3RhdGljL1RLTOS4u+mimOS8mOWMli3ovawubWRcIik7XG5cbiAgICBjb25zdCBib2R5OlN0cmluZyA9IG1kLnJlbmRlcihwLmJvZHkudG9TdHJpbmcoKSk7XG4gICAgY29uc3QgZWxlbWVudDpTdHJpbmdbXSA9IGJvZHkuc3BsaXQoXCJcXG5cIik7XG5cbiAgICBsZXQgcG9zdCA9IG5ldyBQb3N0KCk7XG5cbiAgICBwb3N0LmF0dHJpYnV0ZXMgPSBwLmF0dHJpYnV0ZXM7XG4gICAgLy9UT0RPOiDpgJrov4fphY3nva7mlofku7bpgInmi6nkv53lrZjnmoTmlbDph49cbiAgICBwb3N0LnN1bW1hcnkgPSBlbGVtZW50WzBdO1xuICAgIHBvc3QuYm9keSA9IGJvZHk7XG4gICAgcmV0dXJuIHBvc3Q7XG59IiwiXG5pbXBvcnQgeyBBdHRyaWJ1dGVzLCBQb3N0IH0gZnJvbSBcIi9ob21lL3J1bm5lci93b3JrL1Z1ZUJsb2cvVnVlQmxvZy9zcmMvc3RvcmUvc3RhdGVcIjtcbmltcG9ydCBNYXJrZG93bkl0IGZyb20gXCJtYXJrZG93bi1pdFwiO1xuaW1wb3J0IGZyb250TWF0dGVyIGZyb20gXCJmcm9udC1tYXR0ZXJcIjtcblxuY29uc3QgbWQgPSBuZXcgTWFya2Rvd25JdCgpO1xuXG5leHBvcnQgZGVmYXVsdCAoKTogUG9zdCA9PiB7XG4gICAgY29uc3QgcDogUG9zdCA9IHJlcXVpcmUoXCIvaG9tZS9ydW5uZXIvd29yay9WdWVCbG9nL1Z1ZUJsb2cvc3RhdGljL0FyY2hMaW51eOi/kOihjHN0ZWFt5Ye6546w57y65bCRTGliR0wtc3RlYW0tbGliR0wtZXJyb3ItZmFpbGVkLXRvLWxvYWQtZHJpdmVyLXN3cmFzdC5tZFwiKTtcblxuICAgIGNvbnN0IGJvZHk6U3RyaW5nID0gbWQucmVuZGVyKHAuYm9keS50b1N0cmluZygpKTtcbiAgICBjb25zdCBlbGVtZW50OlN0cmluZ1tdID0gYm9keS5zcGxpdChcIlxcblwiKTtcblxuICAgIGxldCBwb3N0ID0gbmV3IFBvc3QoKTtcblxuICAgIHBvc3QuYXR0cmlidXRlcyA9IHAuYXR0cmlidXRlcztcbiAgICAvL1RPRE86IOmAmui/h+mFjee9ruaWh+S7tumAieaLqeS/neWtmOeahOaVsOmHj1xuICAgIHBvc3Quc3VtbWFyeSA9IGVsZW1lbnRbMF07XG4gICAgcG9zdC5ib2R5ID0gYm9keTtcbiAgICByZXR1cm4gcG9zdDtcbn0iLCJcbmltcG9ydCB7IEF0dHJpYnV0ZXMsIFBvc3QgfSBmcm9tIFwiL2hvbWUvcnVubmVyL3dvcmsvVnVlQmxvZy9WdWVCbG9nL3NyYy9zdG9yZS9zdGF0ZVwiO1xuaW1wb3J0IE1hcmtkb3duSXQgZnJvbSBcIm1hcmtkb3duLWl0XCI7XG5pbXBvcnQgZnJvbnRNYXR0ZXIgZnJvbSBcImZyb250LW1hdHRlclwiO1xuXG5jb25zdCBtZCA9IG5ldyBNYXJrZG93bkl0KCk7XG5cbmV4cG9ydCBkZWZhdWx0ICgpOiBQb3N0ID0+IHtcbiAgICBjb25zdCBwOiBQb3N0ID0gcmVxdWlyZShcIi9ob21lL3J1bm5lci93b3JrL1Z1ZUJsb2cvVnVlQmxvZy9zdGF0aWMvaGV4byBwYWdlIG1vdmUgdG8gY29kaW5nLm1kXCIpO1xuXG4gICAgY29uc3QgYm9keTpTdHJpbmcgPSBtZC5yZW5kZXIocC5ib2R5LnRvU3RyaW5nKCkpO1xuICAgIGNvbnN0IGVsZW1lbnQ6U3RyaW5nW10gPSBib2R5LnNwbGl0KFwiXFxuXCIpO1xuXG4gICAgbGV0IHBvc3QgPSBuZXcgUG9zdCgpO1xuXG4gICAgcG9zdC5hdHRyaWJ1dGVzID0gcC5hdHRyaWJ1dGVzO1xuICAgIC8vVE9ETzog6YCa6L+H6YWN572u5paH5Lu26YCJ5oup5L+d5a2Y55qE5pWw6YePXG4gICAgcG9zdC5zdW1tYXJ5ID0gZWxlbWVudFswXTtcbiAgICBwb3N0LmJvZHkgPSBib2R5O1xuICAgIHJldHVybiBwb3N0O1xufSIsIlxuaW1wb3J0IHsgQXR0cmlidXRlcywgUG9zdCB9IGZyb20gXCIvaG9tZS9ydW5uZXIvd29yay9WdWVCbG9nL1Z1ZUJsb2cvc3JjL3N0b3JlL3N0YXRlXCI7XG5pbXBvcnQgTWFya2Rvd25JdCBmcm9tIFwibWFya2Rvd24taXRcIjtcbmltcG9ydCBmcm9udE1hdHRlciBmcm9tIFwiZnJvbnQtbWF0dGVyXCI7XG5cbmNvbnN0IG1kID0gbmV3IE1hcmtkb3duSXQoKTtcblxuZXhwb3J0IGRlZmF1bHQgKCk6IFBvc3QgPT4ge1xuICAgIGNvbnN0IHA6IFBvc3QgPSByZXF1aXJlKFwiL2hvbWUvcnVubmVyL3dvcmsvVnVlQmxvZy9WdWVCbG9nL3N0YXRpYy92dWUtdHJhbnNpdGlvbnMubWRcIik7XG5cbiAgICBjb25zdCBib2R5OlN0cmluZyA9IG1kLnJlbmRlcihwLmJvZHkudG9TdHJpbmcoKSk7XG4gICAgY29uc3QgZWxlbWVudDpTdHJpbmdbXSA9IGJvZHkuc3BsaXQoXCJcXG5cIik7XG5cbiAgICBsZXQgcG9zdCA9IG5ldyBQb3N0KCk7XG5cbiAgICBwb3N0LmF0dHJpYnV0ZXMgPSBwLmF0dHJpYnV0ZXM7XG4gICAgLy9UT0RPOiDpgJrov4fphY3nva7mlofku7bpgInmi6nkv53lrZjnmoTmlbDph49cbiAgICBwb3N0LnN1bW1hcnkgPSBlbGVtZW50WzBdO1xuICAgIHBvc3QuYm9keSA9IGJvZHk7XG4gICAgcmV0dXJuIHBvc3Q7XG59IiwiXG5pbXBvcnQgeyBBdHRyaWJ1dGVzLCBQb3N0IH0gZnJvbSBcIi9ob21lL3J1bm5lci93b3JrL1Z1ZUJsb2cvVnVlQmxvZy9zcmMvc3RvcmUvc3RhdGVcIjtcbmltcG9ydCBNYXJrZG93bkl0IGZyb20gXCJtYXJrZG93bi1pdFwiO1xuaW1wb3J0IGZyb250TWF0dGVyIGZyb20gXCJmcm9udC1tYXR0ZXJcIjtcblxuY29uc3QgbWQgPSBuZXcgTWFya2Rvd25JdCgpO1xuXG5leHBvcnQgZGVmYXVsdCAoKTogUG9zdCA9PiB7XG4gICAgY29uc3QgcDogUG9zdCA9IHJlcXVpcmUoXCIvaG9tZS9ydW5uZXIvd29yay9WdWVCbG9nL1Z1ZUJsb2cvc3RhdGljL3dzbDLnmoTkvb/nlKjkvZPpqowubWRcIik7XG5cbiAgICBjb25zdCBib2R5OlN0cmluZyA9IG1kLnJlbmRlcihwLmJvZHkudG9TdHJpbmcoKSk7XG4gICAgY29uc3QgZWxlbWVudDpTdHJpbmdbXSA9IGJvZHkuc3BsaXQoXCJcXG5cIik7XG5cbiAgICBsZXQgcG9zdCA9IG5ldyBQb3N0KCk7XG5cbiAgICBwb3N0LmF0dHJpYnV0ZXMgPSBwLmF0dHJpYnV0ZXM7XG4gICAgLy9UT0RPOiDpgJrov4fphY3nva7mlofku7bpgInmi6nkv53lrZjnmoTmlbDph49cbiAgICBwb3N0LnN1bW1hcnkgPSBlbGVtZW50WzBdO1xuICAgIHBvc3QuYm9keSA9IGJvZHk7XG4gICAgcmV0dXJuIHBvc3Q7XG59IiwiXG5pbXBvcnQgeyBBdHRyaWJ1dGVzLCBQb3N0IH0gZnJvbSBcIi9ob21lL3J1bm5lci93b3JrL1Z1ZUJsb2cvVnVlQmxvZy9zcmMvc3RvcmUvc3RhdGVcIjtcbmltcG9ydCBNYXJrZG93bkl0IGZyb20gXCJtYXJrZG93bi1pdFwiO1xuaW1wb3J0IGZyb250TWF0dGVyIGZyb20gXCJmcm9udC1tYXR0ZXJcIjtcblxuY29uc3QgbWQgPSBuZXcgTWFya2Rvd25JdCgpO1xuXG5leHBvcnQgZGVmYXVsdCAoKTogUG9zdCA9PiB7XG4gICAgY29uc3QgcDogUG9zdCA9IHJlcXVpcmUoXCIvaG9tZS9ydW5uZXIvd29yay9WdWVCbG9nL1Z1ZUJsb2cvc3RhdGljL3VzZSBnb29nbGUgY2FsZW5kYXIgdG8gZmluaXNoZSB3b3JrLm1kXCIpO1xuXG4gICAgY29uc3QgYm9keTpTdHJpbmcgPSBtZC5yZW5kZXIocC5ib2R5LnRvU3RyaW5nKCkpO1xuICAgIGNvbnN0IGVsZW1lbnQ6U3RyaW5nW10gPSBib2R5LnNwbGl0KFwiXFxuXCIpO1xuXG4gICAgbGV0IHBvc3QgPSBuZXcgUG9zdCgpO1xuXG4gICAgcG9zdC5hdHRyaWJ1dGVzID0gcC5hdHRyaWJ1dGVzO1xuICAgIC8vVE9ETzog6YCa6L+H6YWN572u5paH5Lu26YCJ5oup5L+d5a2Y55qE5pWw6YePXG4gICAgcG9zdC5zdW1tYXJ5ID0gZWxlbWVudFswXTtcbiAgICBwb3N0LmJvZHkgPSBib2R5O1xuICAgIHJldHVybiBwb3N0O1xufSIsIlxuaW1wb3J0IHsgQXR0cmlidXRlcywgUG9zdCB9IGZyb20gXCIvaG9tZS9ydW5uZXIvd29yay9WdWVCbG9nL1Z1ZUJsb2cvc3JjL3N0b3JlL3N0YXRlXCI7XG5pbXBvcnQgTWFya2Rvd25JdCBmcm9tIFwibWFya2Rvd24taXRcIjtcbmltcG9ydCBmcm9udE1hdHRlciBmcm9tIFwiZnJvbnQtbWF0dGVyXCI7XG5cbmNvbnN0IG1kID0gbmV3IE1hcmtkb3duSXQoKTtcblxuZXhwb3J0IGRlZmF1bHQgKCk6IFBvc3QgPT4ge1xuICAgIGNvbnN0IHA6IFBvc3QgPSByZXF1aXJlKFwiL2hvbWUvcnVubmVyL3dvcmsvVnVlQmxvZy9WdWVCbG9nL3N0YXRpYy/kvb/nlKh3ZWJwYWNrLWRldi1zZXJ2ZXLmnaXnm5HlkKzpobnnm67lj5jljJYubWRcIik7XG5cbiAgICBjb25zdCBib2R5OlN0cmluZyA9IG1kLnJlbmRlcihwLmJvZHkudG9TdHJpbmcoKSk7XG4gICAgY29uc3QgZWxlbWVudDpTdHJpbmdbXSA9IGJvZHkuc3BsaXQoXCJcXG5cIik7XG5cbiAgICBsZXQgcG9zdCA9IG5ldyBQb3N0KCk7XG5cbiAgICBwb3N0LmF0dHJpYnV0ZXMgPSBwLmF0dHJpYnV0ZXM7XG4gICAgLy9UT0RPOiDpgJrov4fphY3nva7mlofku7bpgInmi6nkv53lrZjnmoTmlbDph49cbiAgICBwb3N0LnN1bW1hcnkgPSBlbGVtZW50WzBdO1xuICAgIHBvc3QuYm9keSA9IGJvZHk7XG4gICAgcmV0dXJuIHBvc3Q7XG59IiwiXG5pbXBvcnQgeyBBdHRyaWJ1dGVzLCBQb3N0IH0gZnJvbSBcIi9ob21lL3J1bm5lci93b3JrL1Z1ZUJsb2cvVnVlQmxvZy9zcmMvc3RvcmUvc3RhdGVcIjtcbmltcG9ydCBNYXJrZG93bkl0IGZyb20gXCJtYXJrZG93bi1pdFwiO1xuaW1wb3J0IGZyb250TWF0dGVyIGZyb20gXCJmcm9udC1tYXR0ZXJcIjtcblxuY29uc3QgbWQgPSBuZXcgTWFya2Rvd25JdCgpO1xuXG5leHBvcnQgZGVmYXVsdCAoKTogUG9zdCA9PiB7XG4gICAgY29uc3QgcDogUG9zdCA9IHJlcXVpcmUoXCIvaG9tZS9ydW5uZXIvd29yay9WdWVCbG9nL1Z1ZUJsb2cvc3RhdGljL2hvdy10by11c2UtTE5NUC1vbi1kZWVwaW4ubWRcIik7XG5cbiAgICBjb25zdCBib2R5OlN0cmluZyA9IG1kLnJlbmRlcihwLmJvZHkudG9TdHJpbmcoKSk7XG4gICAgY29uc3QgZWxlbWVudDpTdHJpbmdbXSA9IGJvZHkuc3BsaXQoXCJcXG5cIik7XG5cbiAgICBsZXQgcG9zdCA9IG5ldyBQb3N0KCk7XG5cbiAgICBwb3N0LmF0dHJpYnV0ZXMgPSBwLmF0dHJpYnV0ZXM7XG4gICAgLy9UT0RPOiDpgJrov4fphY3nva7mlofku7bpgInmi6nkv53lrZjnmoTmlbDph49cbiAgICBwb3N0LnN1bW1hcnkgPSBlbGVtZW50WzBdO1xuICAgIHBvc3QuYm9keSA9IGJvZHk7XG4gICAgcmV0dXJuIHBvc3Q7XG59IiwiXG5pbXBvcnQgeyBBdHRyaWJ1dGVzLCBQb3N0IH0gZnJvbSBcIi9ob21lL3J1bm5lci93b3JrL1Z1ZUJsb2cvVnVlQmxvZy9zcmMvc3RvcmUvc3RhdGVcIjtcbmltcG9ydCBNYXJrZG93bkl0IGZyb20gXCJtYXJrZG93bi1pdFwiO1xuaW1wb3J0IGZyb250TWF0dGVyIGZyb20gXCJmcm9udC1tYXR0ZXJcIjtcblxuY29uc3QgbWQgPSBuZXcgTWFya2Rvd25JdCgpO1xuXG5leHBvcnQgZGVmYXVsdCAoKTogUG9zdCA9PiB7XG4gICAgY29uc3QgcDogUG9zdCA9IHJlcXVpcmUoXCIvaG9tZS9ydW5uZXIvd29yay9WdWVCbG9nL1Z1ZUJsb2cvc3RhdGljL3VzZS1zZXJpYWwtcG9ydC1kZWJ1Zy1kZWVwaW4tb24tYXJjaGxpbnV4Lm1kXCIpO1xuXG4gICAgY29uc3QgYm9keTpTdHJpbmcgPSBtZC5yZW5kZXIocC5ib2R5LnRvU3RyaW5nKCkpO1xuICAgIGNvbnN0IGVsZW1lbnQ6U3RyaW5nW10gPSBib2R5LnNwbGl0KFwiXFxuXCIpO1xuXG4gICAgbGV0IHBvc3QgPSBuZXcgUG9zdCgpO1xuXG4gICAgcG9zdC5hdHRyaWJ1dGVzID0gcC5hdHRyaWJ1dGVzO1xuICAgIC8vVE9ETzog6YCa6L+H6YWN572u5paH5Lu26YCJ5oup5L+d5a2Y55qE5pWw6YePXG4gICAgcG9zdC5zdW1tYXJ5ID0gZWxlbWVudFswXTtcbiAgICBwb3N0LmJvZHkgPSBib2R5O1xuICAgIHJldHVybiBwb3N0O1xufSIsIlxuaW1wb3J0IHsgQXR0cmlidXRlcywgUG9zdCB9IGZyb20gXCIvaG9tZS9ydW5uZXIvd29yay9WdWVCbG9nL1Z1ZUJsb2cvc3JjL3N0b3JlL3N0YXRlXCI7XG5pbXBvcnQgTWFya2Rvd25JdCBmcm9tIFwibWFya2Rvd24taXRcIjtcbmltcG9ydCBmcm9udE1hdHRlciBmcm9tIFwiZnJvbnQtbWF0dGVyXCI7XG5cbmNvbnN0IG1kID0gbmV3IE1hcmtkb3duSXQoKTtcblxuZXhwb3J0IGRlZmF1bHQgKCk6IFBvc3QgPT4ge1xuICAgIGNvbnN0IHA6IFBvc3QgPSByZXF1aXJlKFwiL2hvbWUvcnVubmVyL3dvcmsvVnVlQmxvZy9WdWVCbG9nL3N0YXRpYy/lhaXlnZF0eXBlc2NyaXB05LqGLm1kXCIpO1xuXG4gICAgY29uc3QgYm9keTpTdHJpbmcgPSBtZC5yZW5kZXIocC5ib2R5LnRvU3RyaW5nKCkpO1xuICAgIGNvbnN0IGVsZW1lbnQ6U3RyaW5nW10gPSBib2R5LnNwbGl0KFwiXFxuXCIpO1xuXG4gICAgbGV0IHBvc3QgPSBuZXcgUG9zdCgpO1xuXG4gICAgcG9zdC5hdHRyaWJ1dGVzID0gcC5hdHRyaWJ1dGVzO1xuICAgIC8vVE9ETzog6YCa6L+H6YWN572u5paH5Lu26YCJ5oup5L+d5a2Y55qE5pWw6YePXG4gICAgcG9zdC5zdW1tYXJ5ID0gZWxlbWVudFswXTtcbiAgICBwb3N0LmJvZHkgPSBib2R5O1xuICAgIHJldHVybiBwb3N0O1xufSIsIlxuaW1wb3J0IHsgQXR0cmlidXRlcywgUG9zdCB9IGZyb20gXCIvaG9tZS9ydW5uZXIvd29yay9WdWVCbG9nL1Z1ZUJsb2cvc3JjL3N0b3JlL3N0YXRlXCI7XG5pbXBvcnQgTWFya2Rvd25JdCBmcm9tIFwibWFya2Rvd24taXRcIjtcbmltcG9ydCBmcm9udE1hdHRlciBmcm9tIFwiZnJvbnQtbWF0dGVyXCI7XG5cbmNvbnN0IG1kID0gbmV3IE1hcmtkb3duSXQoKTtcblxuZXhwb3J0IGRlZmF1bHQgKCk6IFBvc3QgPT4ge1xuICAgIGNvbnN0IHA6IFBvc3QgPSByZXF1aXJlKFwiL2hvbWUvcnVubmVyL3dvcmsvVnVlQmxvZy9WdWVCbG9nL3N0YXRpYy91c2UtZ2l0aHViLWFjdGlvbnMtdG8tZGVwb2x5LWhleG8ubWRcIik7XG5cbiAgICBjb25zdCBib2R5OlN0cmluZyA9IG1kLnJlbmRlcihwLmJvZHkudG9TdHJpbmcoKSk7XG4gICAgY29uc3QgZWxlbWVudDpTdHJpbmdbXSA9IGJvZHkuc3BsaXQoXCJcXG5cIik7XG5cbiAgICBsZXQgcG9zdCA9IG5ldyBQb3N0KCk7XG5cbiAgICBwb3N0LmF0dHJpYnV0ZXMgPSBwLmF0dHJpYnV0ZXM7XG4gICAgLy9UT0RPOiDpgJrov4fphY3nva7mlofku7bpgInmi6nkv53lrZjnmoTmlbDph49cbiAgICBwb3N0LnN1bW1hcnkgPSBlbGVtZW50WzBdO1xuICAgIHBvc3QuYm9keSA9IGJvZHk7XG4gICAgcmV0dXJuIHBvc3Q7XG59IiwiXG5pbXBvcnQgeyBBdHRyaWJ1dGVzLCBQb3N0IH0gZnJvbSBcIi9ob21lL3J1bm5lci93b3JrL1Z1ZUJsb2cvVnVlQmxvZy9zcmMvc3RvcmUvc3RhdGVcIjtcbmltcG9ydCBNYXJrZG93bkl0IGZyb20gXCJtYXJrZG93bi1pdFwiO1xuaW1wb3J0IGZyb250TWF0dGVyIGZyb20gXCJmcm9udC1tYXR0ZXJcIjtcblxuY29uc3QgbWQgPSBuZXcgTWFya2Rvd25JdCgpO1xuXG5leHBvcnQgZGVmYXVsdCAoKTogUG9zdCA9PiB7XG4gICAgY29uc3QgcDogUG9zdCA9IHJlcXVpcmUoXCIvaG9tZS9ydW5uZXIvd29yay9WdWVCbG9nL1Z1ZUJsb2cvc3RhdGljL+WcqGRlZXBpbuS4iuS9v+eUqGRuc21hc3HmnaXop6PlhrNkbnPop6PmnpDnvJPmhaIubWRcIik7XG5cbiAgICBjb25zdCBib2R5OlN0cmluZyA9IG1kLnJlbmRlcihwLmJvZHkudG9TdHJpbmcoKSk7XG4gICAgY29uc3QgZWxlbWVudDpTdHJpbmdbXSA9IGJvZHkuc3BsaXQoXCJcXG5cIik7XG5cbiAgICBsZXQgcG9zdCA9IG5ldyBQb3N0KCk7XG5cbiAgICBwb3N0LmF0dHJpYnV0ZXMgPSBwLmF0dHJpYnV0ZXM7XG4gICAgLy9UT0RPOiDpgJrov4fphY3nva7mlofku7bpgInmi6nkv53lrZjnmoTmlbDph49cbiAgICBwb3N0LnN1bW1hcnkgPSBlbGVtZW50WzBdO1xuICAgIHBvc3QuYm9keSA9IGJvZHk7XG4gICAgcmV0dXJuIHBvc3Q7XG59IiwiXG5pbXBvcnQgeyBBdHRyaWJ1dGVzLCBQb3N0IH0gZnJvbSBcIi9ob21lL3J1bm5lci93b3JrL1Z1ZUJsb2cvVnVlQmxvZy9zcmMvc3RvcmUvc3RhdGVcIjtcbmltcG9ydCBNYXJrZG93bkl0IGZyb20gXCJtYXJrZG93bi1pdFwiO1xuaW1wb3J0IGZyb250TWF0dGVyIGZyb20gXCJmcm9udC1tYXR0ZXJcIjtcblxuY29uc3QgbWQgPSBuZXcgTWFya2Rvd25JdCgpO1xuXG5leHBvcnQgZGVmYXVsdCAoKTogUG9zdCA9PiB7XG4gICAgY29uc3QgcDogUG9zdCA9IHJlcXVpcmUoXCIvaG9tZS9ydW5uZXIvd29yay9WdWVCbG9nL1Z1ZUJsb2cvc3RhdGljL+S9v+eUqHdlYnBhY2vmiZPljIVWdWXlkoxUeXBlU2NyaXB0Lm1kXCIpO1xuXG4gICAgY29uc3QgYm9keTpTdHJpbmcgPSBtZC5yZW5kZXIocC5ib2R5LnRvU3RyaW5nKCkpO1xuICAgIGNvbnN0IGVsZW1lbnQ6U3RyaW5nW10gPSBib2R5LnNwbGl0KFwiXFxuXCIpO1xuXG4gICAgbGV0IHBvc3QgPSBuZXcgUG9zdCgpO1xuXG4gICAgcG9zdC5hdHRyaWJ1dGVzID0gcC5hdHRyaWJ1dGVzO1xuICAgIC8vVE9ETzog6YCa6L+H6YWN572u5paH5Lu26YCJ5oup5L+d5a2Y55qE5pWw6YePXG4gICAgcG9zdC5zdW1tYXJ5ID0gZWxlbWVudFswXTtcbiAgICBwb3N0LmJvZHkgPSBib2R5O1xuICAgIHJldHVybiBwb3N0O1xufSIsIlxuaW1wb3J0IHsgQXR0cmlidXRlcywgUG9zdCB9IGZyb20gXCIvaG9tZS9ydW5uZXIvd29yay9WdWVCbG9nL1Z1ZUJsb2cvc3JjL3N0b3JlL3N0YXRlXCI7XG5pbXBvcnQgTWFya2Rvd25JdCBmcm9tIFwibWFya2Rvd24taXRcIjtcbmltcG9ydCBmcm9udE1hdHRlciBmcm9tIFwiZnJvbnQtbWF0dGVyXCI7XG5cbmNvbnN0IG1kID0gbmV3IE1hcmtkb3duSXQoKTtcblxuZXhwb3J0IGRlZmF1bHQgKCk6IFBvc3QgPT4ge1xuICAgIGNvbnN0IHA6IFBvc3QgPSByZXF1aXJlKFwiL2hvbWUvcnVubmVyL3dvcmsvVnVlQmxvZy9WdWVCbG9nL3N0YXRpYy93ZWJob29rLm1kXCIpO1xuXG4gICAgY29uc3QgYm9keTpTdHJpbmcgPSBtZC5yZW5kZXIocC5ib2R5LnRvU3RyaW5nKCkpO1xuICAgIGNvbnN0IGVsZW1lbnQ6U3RyaW5nW10gPSBib2R5LnNwbGl0KFwiXFxuXCIpO1xuXG4gICAgbGV0IHBvc3QgPSBuZXcgUG9zdCgpO1xuXG4gICAgcG9zdC5hdHRyaWJ1dGVzID0gcC5hdHRyaWJ1dGVzO1xuICAgIC8vVE9ETzog6YCa6L+H6YWN572u5paH5Lu26YCJ5oup5L+d5a2Y55qE5pWw6YePXG4gICAgcG9zdC5zdW1tYXJ5ID0gZWxlbWVudFswXTtcbiAgICBwb3N0LmJvZHkgPSBib2R5O1xuICAgIHJldHVybiBwb3N0O1xufSIsIlxuaW1wb3J0IHsgQXR0cmlidXRlcywgUG9zdCB9IGZyb20gXCIvaG9tZS9ydW5uZXIvd29yay9WdWVCbG9nL1Z1ZUJsb2cvc3JjL3N0b3JlL3N0YXRlXCI7XG5pbXBvcnQgTWFya2Rvd25JdCBmcm9tIFwibWFya2Rvd24taXRcIjtcbmltcG9ydCBmcm9udE1hdHRlciBmcm9tIFwiZnJvbnQtbWF0dGVyXCI7XG5cbmNvbnN0IG1kID0gbmV3IE1hcmtkb3duSXQoKTtcblxuZXhwb3J0IGRlZmF1bHQgKCk6IFBvc3QgPT4ge1xuICAgIGNvbnN0IHA6IFBvc3QgPSByZXF1aXJlKFwiL2hvbWUvcnVubmVyL3dvcmsvVnVlQmxvZy9WdWVCbG9nL3N0YXRpYy/mtYXosIhKYXZhc2NyaXB05p6E6YCg5Zmo5qih5byPLm1kXCIpO1xuXG4gICAgY29uc3QgYm9keTpTdHJpbmcgPSBtZC5yZW5kZXIocC5ib2R5LnRvU3RyaW5nKCkpO1xuICAgIGNvbnN0IGVsZW1lbnQ6U3RyaW5nW10gPSBib2R5LnNwbGl0KFwiXFxuXCIpO1xuXG4gICAgbGV0IHBvc3QgPSBuZXcgUG9zdCgpO1xuXG4gICAgcG9zdC5hdHRyaWJ1dGVzID0gcC5hdHRyaWJ1dGVzO1xuICAgIC8vVE9ETzog6YCa6L+H6YWN572u5paH5Lu26YCJ5oup5L+d5a2Y55qE5pWw6YePXG4gICAgcG9zdC5zdW1tYXJ5ID0gZWxlbWVudFswXTtcbiAgICBwb3N0LmJvZHkgPSBib2R5O1xuICAgIHJldHVybiBwb3N0O1xufSIsIlxuaW1wb3J0IHsgQXR0cmlidXRlcywgUG9zdCB9IGZyb20gXCIvaG9tZS9ydW5uZXIvd29yay9WdWVCbG9nL1Z1ZUJsb2cvc3JjL3N0b3JlL3N0YXRlXCI7XG5pbXBvcnQgTWFya2Rvd25JdCBmcm9tIFwibWFya2Rvd24taXRcIjtcbmltcG9ydCBmcm9udE1hdHRlciBmcm9tIFwiZnJvbnQtbWF0dGVyXCI7XG5cbmNvbnN0IG1kID0gbmV3IE1hcmtkb3duSXQoKTtcblxuZXhwb3J0IGRlZmF1bHQgKCk6IFBvc3QgPT4ge1xuICAgIGNvbnN0IHA6IFBvc3QgPSByZXF1aXJlKFwiL2hvbWUvcnVubmVyL3dvcmsvVnVlQmxvZy9WdWVCbG9nL3N0YXRpYy/op6PlhrNOVklESUHph43mlrDlkK/liqjku6XlkI7ns7vnu5/lhrvnu5MubWRcIik7XG5cbiAgICBjb25zdCBib2R5OlN0cmluZyA9IG1kLnJlbmRlcihwLmJvZHkudG9TdHJpbmcoKSk7XG4gICAgY29uc3QgZWxlbWVudDpTdHJpbmdbXSA9IGJvZHkuc3BsaXQoXCJcXG5cIik7XG5cbiAgICBsZXQgcG9zdCA9IG5ldyBQb3N0KCk7XG5cbiAgICBwb3N0LmF0dHJpYnV0ZXMgPSBwLmF0dHJpYnV0ZXM7XG4gICAgLy9UT0RPOiDpgJrov4fphY3nva7mlofku7bpgInmi6nkv53lrZjnmoTmlbDph49cbiAgICBwb3N0LnN1bW1hcnkgPSBlbGVtZW50WzBdO1xuICAgIHBvc3QuYm9keSA9IGJvZHk7XG4gICAgcmV0dXJuIHBvc3Q7XG59IiwiXG5pbXBvcnQgeyBBdHRyaWJ1dGVzLCBQb3N0IH0gZnJvbSBcIi9ob21lL3J1bm5lci93b3JrL1Z1ZUJsb2cvVnVlQmxvZy9zcmMvc3RvcmUvc3RhdGVcIjtcbmltcG9ydCBNYXJrZG93bkl0IGZyb20gXCJtYXJrZG93bi1pdFwiO1xuaW1wb3J0IGZyb250TWF0dGVyIGZyb20gXCJmcm9udC1tYXR0ZXJcIjtcblxuY29uc3QgbWQgPSBuZXcgTWFya2Rvd25JdCgpO1xuXG5leHBvcnQgZGVmYXVsdCAoKTogUG9zdCA9PiB7XG4gICAgY29uc3QgcDogUG9zdCA9IHJlcXVpcmUoXCIvaG9tZS9ydW5uZXIvd29yay9WdWVCbG9nL1Z1ZUJsb2cvc3RhdGljL3F1aWNrIHNvcnQgZm9yIGMrKy5tZFwiKTtcblxuICAgIGNvbnN0IGJvZHk6U3RyaW5nID0gbWQucmVuZGVyKHAuYm9keS50b1N0cmluZygpKTtcbiAgICBjb25zdCBlbGVtZW50OlN0cmluZ1tdID0gYm9keS5zcGxpdChcIlxcblwiKTtcblxuICAgIGxldCBwb3N0ID0gbmV3IFBvc3QoKTtcblxuICAgIHBvc3QuYXR0cmlidXRlcyA9IHAuYXR0cmlidXRlcztcbiAgICAvL1RPRE86IOmAmui/h+mFjee9ruaWh+S7tumAieaLqeS/neWtmOeahOaVsOmHj1xuICAgIHBvc3Quc3VtbWFyeSA9IGVsZW1lbnRbMF07XG4gICAgcG9zdC5ib2R5ID0gYm9keTtcbiAgICByZXR1cm4gcG9zdDtcbn0iLCJcbmltcG9ydCB7IEF0dHJpYnV0ZXMsIFBvc3QgfSBmcm9tIFwiL2hvbWUvcnVubmVyL3dvcmsvVnVlQmxvZy9WdWVCbG9nL3NyYy9zdG9yZS9zdGF0ZVwiO1xuaW1wb3J0IE1hcmtkb3duSXQgZnJvbSBcIm1hcmtkb3duLWl0XCI7XG5pbXBvcnQgZnJvbnRNYXR0ZXIgZnJvbSBcImZyb250LW1hdHRlclwiO1xuXG5jb25zdCBtZCA9IG5ldyBNYXJrZG93bkl0KCk7XG5cbmV4cG9ydCBkZWZhdWx0ICgpOiBQb3N0ID0+IHtcbiAgICBjb25zdCBwOiBQb3N0ID0gcmVxdWlyZShcIi9ob21lL3J1bm5lci93b3JrL1Z1ZUJsb2cvVnVlQmxvZy9zdGF0aWMv6Kej5YazSW50ZWxsaUotSURFQeeVjOmdoueejuecvC5tZFwiKTtcblxuICAgIGNvbnN0IGJvZHk6U3RyaW5nID0gbWQucmVuZGVyKHAuYm9keS50b1N0cmluZygpKTtcbiAgICBjb25zdCBlbGVtZW50OlN0cmluZ1tdID0gYm9keS5zcGxpdChcIlxcblwiKTtcblxuICAgIGxldCBwb3N0ID0gbmV3IFBvc3QoKTtcblxuICAgIHBvc3QuYXR0cmlidXRlcyA9IHAuYXR0cmlidXRlcztcbiAgICAvL1RPRE86IOmAmui/h+mFjee9ruaWh+S7tumAieaLqeS/neWtmOeahOaVsOmHj1xuICAgIHBvc3Quc3VtbWFyeSA9IGVsZW1lbnRbMF07XG4gICAgcG9zdC5ib2R5ID0gYm9keTtcbiAgICByZXR1cm4gcG9zdDtcbn0iLCJcbmltcG9ydCB7IEF0dHJpYnV0ZXMsIFBvc3QgfSBmcm9tIFwiL2hvbWUvcnVubmVyL3dvcmsvVnVlQmxvZy9WdWVCbG9nL3NyYy9zdG9yZS9zdGF0ZVwiO1xuaW1wb3J0IE1hcmtkb3duSXQgZnJvbSBcIm1hcmtkb3duLWl0XCI7XG5pbXBvcnQgZnJvbnRNYXR0ZXIgZnJvbSBcImZyb250LW1hdHRlclwiO1xuXG5jb25zdCBtZCA9IG5ldyBNYXJrZG93bkl0KCk7XG5cbmV4cG9ydCBkZWZhdWx0ICgpOiBQb3N0ID0+IHtcbiAgICBjb25zdCBwOiBQb3N0ID0gcmVxdWlyZShcIi9ob21lL3J1bm5lci93b3JrL1Z1ZUJsb2cvVnVlQmxvZy9zdGF0aWMvZnVjay10YW9iYW8ubWRcIik7XG5cbiAgICBjb25zdCBib2R5OlN0cmluZyA9IG1kLnJlbmRlcihwLmJvZHkudG9TdHJpbmcoKSk7XG4gICAgY29uc3QgZWxlbWVudDpTdHJpbmdbXSA9IGJvZHkuc3BsaXQoXCJcXG5cIik7XG5cbiAgICBsZXQgcG9zdCA9IG5ldyBQb3N0KCk7XG5cbiAgICBwb3N0LmF0dHJpYnV0ZXMgPSBwLmF0dHJpYnV0ZXM7XG4gICAgLy9UT0RPOiDpgJrov4fphY3nva7mlofku7bpgInmi6nkv53lrZjnmoTmlbDph49cbiAgICBwb3N0LnN1bW1hcnkgPSBlbGVtZW50WzBdO1xuICAgIHBvc3QuYm9keSA9IGJvZHk7XG4gICAgcmV0dXJuIHBvc3Q7XG59IiwiXG5pbXBvcnQgeyBBdHRyaWJ1dGVzLCBQb3N0IH0gZnJvbSBcIi9ob21lL3J1bm5lci93b3JrL1Z1ZUJsb2cvVnVlQmxvZy9zcmMvc3RvcmUvc3RhdGVcIjtcbmltcG9ydCBNYXJrZG93bkl0IGZyb20gXCJtYXJrZG93bi1pdFwiO1xuaW1wb3J0IGZyb250TWF0dGVyIGZyb20gXCJmcm9udC1tYXR0ZXJcIjtcblxuY29uc3QgbWQgPSBuZXcgTWFya2Rvd25JdCgpO1xuXG5leHBvcnQgZGVmYXVsdCAoKTogUG9zdCA9PiB7XG4gICAgY29uc3QgcDogUG9zdCA9IHJlcXVpcmUoXCIvaG9tZS9ydW5uZXIvd29yay9WdWVCbG9nL1Z1ZUJsb2cvc3RhdGljL+S9v+eUqOS8quWFg+e0oOWIm+W7uuS4gOS4quWchueCuS5tZFwiKTtcblxuICAgIGNvbnN0IGJvZHk6U3RyaW5nID0gbWQucmVuZGVyKHAuYm9keS50b1N0cmluZygpKTtcbiAgICBjb25zdCBlbGVtZW50OlN0cmluZ1tdID0gYm9keS5zcGxpdChcIlxcblwiKTtcblxuICAgIGxldCBwb3N0ID0gbmV3IFBvc3QoKTtcblxuICAgIHBvc3QuYXR0cmlidXRlcyA9IHAuYXR0cmlidXRlcztcbiAgICAvL1RPRE86IOmAmui/h+mFjee9ruaWh+S7tumAieaLqeS/neWtmOeahOaVsOmHj1xuICAgIHBvc3Quc3VtbWFyeSA9IGVsZW1lbnRbMF07XG4gICAgcG9zdC5ib2R5ID0gYm9keTtcbiAgICByZXR1cm4gcG9zdDtcbn0iLCJcbmltcG9ydCB7IEF0dHJpYnV0ZXMsIFBvc3QgfSBmcm9tIFwiL2hvbWUvcnVubmVyL3dvcmsvVnVlQmxvZy9WdWVCbG9nL3NyYy9zdG9yZS9zdGF0ZVwiO1xuaW1wb3J0IE1hcmtkb3duSXQgZnJvbSBcIm1hcmtkb3duLWl0XCI7XG5pbXBvcnQgZnJvbnRNYXR0ZXIgZnJvbSBcImZyb250LW1hdHRlclwiO1xuXG5jb25zdCBtZCA9IG5ldyBNYXJrZG93bkl0KCk7XG5cbmV4cG9ydCBkZWZhdWx0ICgpOiBQb3N0ID0+IHtcbiAgICBjb25zdCBwOiBQb3N0ID0gcmVxdWlyZShcIi9ob21lL3J1bm5lci93b3JrL1Z1ZUJsb2cvVnVlQmxvZy9zdGF0aWMvRG9ja+aPkuS7tuW8gOWPkS5tZFwiKTtcblxuICAgIGNvbnN0IGJvZHk6U3RyaW5nID0gbWQucmVuZGVyKHAuYm9keS50b1N0cmluZygpKTtcbiAgICBjb25zdCBlbGVtZW50OlN0cmluZ1tdID0gYm9keS5zcGxpdChcIlxcblwiKTtcblxuICAgIGxldCBwb3N0ID0gbmV3IFBvc3QoKTtcblxuICAgIHBvc3QuYXR0cmlidXRlcyA9IHAuYXR0cmlidXRlcztcbiAgICAvL1RPRE86IOmAmui/h+mFjee9ruaWh+S7tumAieaLqeS/neWtmOeahOaVsOmHj1xuICAgIHBvc3Quc3VtbWFyeSA9IGVsZW1lbnRbMF07XG4gICAgcG9zdC5ib2R5ID0gYm9keTtcbiAgICByZXR1cm4gcG9zdDtcbn0iLCJcbmltcG9ydCB7IEF0dHJpYnV0ZXMsIFBvc3QgfSBmcm9tIFwiL2hvbWUvcnVubmVyL3dvcmsvVnVlQmxvZy9WdWVCbG9nL3NyYy9zdG9yZS9zdGF0ZVwiO1xuaW1wb3J0IE1hcmtkb3duSXQgZnJvbSBcIm1hcmtkb3duLWl0XCI7XG5pbXBvcnQgZnJvbnRNYXR0ZXIgZnJvbSBcImZyb250LW1hdHRlclwiO1xuXG5jb25zdCBtZCA9IG5ldyBNYXJrZG93bkl0KCk7XG5cbmV4cG9ydCBkZWZhdWx0ICgpOiBQb3N0ID0+IHtcbiAgICBjb25zdCBwOiBQb3N0ID0gcmVxdWlyZShcIi9ob21lL3J1bm5lci93b3JrL1Z1ZUJsb2cvVnVlQmxvZy9zdGF0aWMvU0FPVVRJTFMubWRcIik7XG5cbiAgICBjb25zdCBib2R5OlN0cmluZyA9IG1kLnJlbmRlcihwLmJvZHkudG9TdHJpbmcoKSk7XG4gICAgY29uc3QgZWxlbWVudDpTdHJpbmdbXSA9IGJvZHkuc3BsaXQoXCJcXG5cIik7XG5cbiAgICBsZXQgcG9zdCA9IG5ldyBQb3N0KCk7XG5cbiAgICBwb3N0LmF0dHJpYnV0ZXMgPSBwLmF0dHJpYnV0ZXM7XG4gICAgLy9UT0RPOiDpgJrov4fphY3nva7mlofku7bpgInmi6nkv53lrZjnmoTmlbDph49cbiAgICBwb3N0LnN1bW1hcnkgPSBlbGVtZW50WzBdO1xuICAgIHBvc3QuYm9keSA9IGJvZHk7XG4gICAgcmV0dXJuIHBvc3Q7XG59IiwiXG5pbXBvcnQgeyBBdHRyaWJ1dGVzLCBQb3N0IH0gZnJvbSBcIi9ob21lL3J1bm5lci93b3JrL1Z1ZUJsb2cvVnVlQmxvZy9zcmMvc3RvcmUvc3RhdGVcIjtcbmltcG9ydCBNYXJrZG93bkl0IGZyb20gXCJtYXJrZG93bi1pdFwiO1xuaW1wb3J0IGZyb250TWF0dGVyIGZyb20gXCJmcm9udC1tYXR0ZXJcIjtcblxuY29uc3QgbWQgPSBuZXcgTWFya2Rvd25JdCgpO1xuXG5leHBvcnQgZGVmYXVsdCAoKTogUG9zdCA9PiB7XG4gICAgY29uc3QgcDogUG9zdCA9IHJlcXVpcmUoXCIvaG9tZS9ydW5uZXIvd29yay9WdWVCbG9nL1Z1ZUJsb2cvc3RhdGljL0NNYWtlLUNUZXN0cy1mb3ItZGRlLWNvbnRyb2wtY2VudGVyLm1kXCIpO1xuXG4gICAgY29uc3QgYm9keTpTdHJpbmcgPSBtZC5yZW5kZXIocC5ib2R5LnRvU3RyaW5nKCkpO1xuICAgIGNvbnN0IGVsZW1lbnQ6U3RyaW5nW10gPSBib2R5LnNwbGl0KFwiXFxuXCIpO1xuXG4gICAgbGV0IHBvc3QgPSBuZXcgUG9zdCgpO1xuXG4gICAgcG9zdC5hdHRyaWJ1dGVzID0gcC5hdHRyaWJ1dGVzO1xuICAgIC8vVE9ETzog6YCa6L+H6YWN572u5paH5Lu26YCJ5oup5L+d5a2Y55qE5pWw6YePXG4gICAgcG9zdC5zdW1tYXJ5ID0gZWxlbWVudFswXTtcbiAgICBwb3N0LmJvZHkgPSBib2R5O1xuICAgIHJldHVybiBwb3N0O1xufSIsIlxuaW1wb3J0IHsgQXR0cmlidXRlcywgUG9zdCB9IGZyb20gXCIvaG9tZS9ydW5uZXIvd29yay9WdWVCbG9nL1Z1ZUJsb2cvc3JjL3N0b3JlL3N0YXRlXCI7XG5pbXBvcnQgTWFya2Rvd25JdCBmcm9tIFwibWFya2Rvd24taXRcIjtcbmltcG9ydCBmcm9udE1hdHRlciBmcm9tIFwiZnJvbnQtbWF0dGVyXCI7XG5cbmNvbnN0IG1kID0gbmV3IE1hcmtkb3duSXQoKTtcblxuZXhwb3J0IGRlZmF1bHQgKCk6IFBvc3QgPT4ge1xuICAgIGNvbnN0IHA6IFBvc3QgPSByZXF1aXJlKFwiL2hvbWUvcnVubmVyL3dvcmsvVnVlQmxvZy9WdWVCbG9nL3N0YXRpYy93ZWJwYWNr5YWl6ZeoLm1kXCIpO1xuXG4gICAgY29uc3QgYm9keTpTdHJpbmcgPSBtZC5yZW5kZXIocC5ib2R5LnRvU3RyaW5nKCkpO1xuICAgIGNvbnN0IGVsZW1lbnQ6U3RyaW5nW10gPSBib2R5LnNwbGl0KFwiXFxuXCIpO1xuXG4gICAgbGV0IHBvc3QgPSBuZXcgUG9zdCgpO1xuXG4gICAgcG9zdC5hdHRyaWJ1dGVzID0gcC5hdHRyaWJ1dGVzO1xuICAgIC8vVE9ETzog6YCa6L+H6YWN572u5paH5Lu26YCJ5oup5L+d5a2Y55qE5pWw6YePXG4gICAgcG9zdC5zdW1tYXJ5ID0gZWxlbWVudFswXTtcbiAgICBwb3N0LmJvZHkgPSBib2R5O1xuICAgIHJldHVybiBwb3N0O1xufSIsIlxuaW1wb3J0IHsgQXR0cmlidXRlcywgUG9zdCB9IGZyb20gXCIvaG9tZS9ydW5uZXIvd29yay9WdWVCbG9nL1Z1ZUJsb2cvc3JjL3N0b3JlL3N0YXRlXCI7XG5pbXBvcnQgTWFya2Rvd25JdCBmcm9tIFwibWFya2Rvd24taXRcIjtcbmltcG9ydCBmcm9udE1hdHRlciBmcm9tIFwiZnJvbnQtbWF0dGVyXCI7XG5cbmNvbnN0IG1kID0gbmV3IE1hcmtkb3duSXQoKTtcblxuZXhwb3J0IGRlZmF1bHQgKCk6IFBvc3QgPT4ge1xuICAgIGNvbnN0IHA6IFBvc3QgPSByZXF1aXJlKFwiL2hvbWUvcnVubmVyL3dvcmsvVnVlQmxvZy9WdWVCbG9nL3N0YXRpYy9kb2NrZXItaGV4by5tZFwiKTtcblxuICAgIGNvbnN0IGJvZHk6U3RyaW5nID0gbWQucmVuZGVyKHAuYm9keS50b1N0cmluZygpKTtcbiAgICBjb25zdCBlbGVtZW50OlN0cmluZ1tdID0gYm9keS5zcGxpdChcIlxcblwiKTtcblxuICAgIGxldCBwb3N0ID0gbmV3IFBvc3QoKTtcblxuICAgIHBvc3QuYXR0cmlidXRlcyA9IHAuYXR0cmlidXRlcztcbiAgICAvL1RPRE86IOmAmui/h+mFjee9ruaWh+S7tumAieaLqeS/neWtmOeahOaVsOmHj1xuICAgIHBvc3Quc3VtbWFyeSA9IGVsZW1lbnRbMF07XG4gICAgcG9zdC5ib2R5ID0gYm9keTtcbiAgICByZXR1cm4gcG9zdDtcbn0iLCJcbmltcG9ydCB7IEF0dHJpYnV0ZXMsIFBvc3QgfSBmcm9tIFwiL2hvbWUvcnVubmVyL3dvcmsvVnVlQmxvZy9WdWVCbG9nL3NyYy9zdG9yZS9zdGF0ZVwiO1xuaW1wb3J0IE1hcmtkb3duSXQgZnJvbSBcIm1hcmtkb3duLWl0XCI7XG5pbXBvcnQgZnJvbnRNYXR0ZXIgZnJvbSBcImZyb250LW1hdHRlclwiO1xuXG5jb25zdCBtZCA9IG5ldyBNYXJrZG93bkl0KCk7XG5cbmV4cG9ydCBkZWZhdWx0ICgpOiBQb3N0ID0+IHtcbiAgICBjb25zdCBwOiBQb3N0ID0gcmVxdWlyZShcIi9ob21lL3J1bm5lci93b3JrL1Z1ZUJsb2cvVnVlQmxvZy9zdGF0aWMv5q2j5bi455qE5rWB56iL5Zyo55WM6Z2i5LiK5Y205pivYnVnLm1kXCIpO1xuXG4gICAgY29uc3QgYm9keTpTdHJpbmcgPSBtZC5yZW5kZXIocC5ib2R5LnRvU3RyaW5nKCkpO1xuICAgIGNvbnN0IGVsZW1lbnQ6U3RyaW5nW10gPSBib2R5LnNwbGl0KFwiXFxuXCIpO1xuXG4gICAgbGV0IHBvc3QgPSBuZXcgUG9zdCgpO1xuXG4gICAgcG9zdC5hdHRyaWJ1dGVzID0gcC5hdHRyaWJ1dGVzO1xuICAgIC8vVE9ETzog6YCa6L+H6YWN572u5paH5Lu26YCJ5oup5L+d5a2Y55qE5pWw6YePXG4gICAgcG9zdC5zdW1tYXJ5ID0gZWxlbWVudFswXTtcbiAgICBwb3N0LmJvZHkgPSBib2R5O1xuICAgIHJldHVybiBwb3N0O1xufSIsIlxuaW1wb3J0IHsgQXR0cmlidXRlcywgUG9zdCB9IGZyb20gXCIvaG9tZS9ydW5uZXIvd29yay9WdWVCbG9nL1Z1ZUJsb2cvc3JjL3N0b3JlL3N0YXRlXCI7XG5pbXBvcnQgTWFya2Rvd25JdCBmcm9tIFwibWFya2Rvd24taXRcIjtcbmltcG9ydCBmcm9udE1hdHRlciBmcm9tIFwiZnJvbnQtbWF0dGVyXCI7XG5cbmNvbnN0IG1kID0gbmV3IE1hcmtkb3duSXQoKTtcblxuZXhwb3J0IGRlZmF1bHQgKCk6IFBvc3QgPT4ge1xuICAgIGNvbnN0IHA6IFBvc3QgPSByZXF1aXJlKFwiL2hvbWUvcnVubmVyL3dvcmsvVnVlQmxvZy9WdWVCbG9nL3N0YXRpYy90ZXN0Lm1kXCIpO1xuXG4gICAgY29uc3QgYm9keTpTdHJpbmcgPSBtZC5yZW5kZXIocC5ib2R5LnRvU3RyaW5nKCkpO1xuICAgIGNvbnN0IGVsZW1lbnQ6U3RyaW5nW10gPSBib2R5LnNwbGl0KFwiXFxuXCIpO1xuXG4gICAgbGV0IHBvc3QgPSBuZXcgUG9zdCgpO1xuXG4gICAgcG9zdC5hdHRyaWJ1dGVzID0gcC5hdHRyaWJ1dGVzO1xuICAgIC8vVE9ETzog6YCa6L+H6YWN572u5paH5Lu26YCJ5oup5L+d5a2Y55qE5pWw6YePXG4gICAgcG9zdC5zdW1tYXJ5ID0gZWxlbWVudFswXTtcbiAgICBwb3N0LmJvZHkgPSBib2R5O1xuICAgIHJldHVybiBwb3N0O1xufSIsIlxuaW1wb3J0IHsgQXR0cmlidXRlcywgUG9zdCB9IGZyb20gXCIvaG9tZS9ydW5uZXIvd29yay9WdWVCbG9nL1Z1ZUJsb2cvc3JjL3N0b3JlL3N0YXRlXCI7XG5pbXBvcnQgTWFya2Rvd25JdCBmcm9tIFwibWFya2Rvd24taXRcIjtcbmltcG9ydCBmcm9udE1hdHRlciBmcm9tIFwiZnJvbnQtbWF0dGVyXCI7XG5cbmNvbnN0IG1kID0gbmV3IE1hcmtkb3duSXQoKTtcblxuZXhwb3J0IGRlZmF1bHQgKCk6IFBvc3QgPT4ge1xuICAgIGNvbnN0IHA6IFBvc3QgPSByZXF1aXJlKFwiL2hvbWUvcnVubmVyL3dvcmsvVnVlQmxvZy9WdWVCbG9nL3N0YXRpYy/kv67lpI1BcmNobGludXjnmoRHcnViLm1kXCIpO1xuXG4gICAgY29uc3QgYm9keTpTdHJpbmcgPSBtZC5yZW5kZXIocC5ib2R5LnRvU3RyaW5nKCkpO1xuICAgIGNvbnN0IGVsZW1lbnQ6U3RyaW5nW10gPSBib2R5LnNwbGl0KFwiXFxuXCIpO1xuXG4gICAgbGV0IHBvc3QgPSBuZXcgUG9zdCgpO1xuXG4gICAgcG9zdC5hdHRyaWJ1dGVzID0gcC5hdHRyaWJ1dGVzO1xuICAgIC8vVE9ETzog6YCa6L+H6YWN572u5paH5Lu26YCJ5oup5L+d5a2Y55qE5pWw6YePXG4gICAgcG9zdC5zdW1tYXJ5ID0gZWxlbWVudFswXTtcbiAgICBwb3N0LmJvZHkgPSBib2R5O1xuICAgIHJldHVybiBwb3N0O1xufSIsIlxuaW1wb3J0IHsgQXR0cmlidXRlcywgUG9zdCB9IGZyb20gXCIvaG9tZS9ydW5uZXIvd29yay9WdWVCbG9nL1Z1ZUJsb2cvc3JjL3N0b3JlL3N0YXRlXCI7XG5pbXBvcnQgTWFya2Rvd25JdCBmcm9tIFwibWFya2Rvd24taXRcIjtcbmltcG9ydCBmcm9udE1hdHRlciBmcm9tIFwiZnJvbnQtbWF0dGVyXCI7XG5cbmNvbnN0IG1kID0gbmV3IE1hcmtkb3duSXQoKTtcblxuZXhwb3J0IGRlZmF1bHQgKCk6IFBvc3QgPT4ge1xuICAgIGNvbnN0IHA6IFBvc3QgPSByZXF1aXJlKFwiL2hvbWUvcnVubmVyL3dvcmsvVnVlQmxvZy9WdWVCbG9nL3N0YXRpYy9kb2NrZXItYXJpYTJjLm1kXCIpO1xuXG4gICAgY29uc3QgYm9keTpTdHJpbmcgPSBtZC5yZW5kZXIocC5ib2R5LnRvU3RyaW5nKCkpO1xuICAgIGNvbnN0IGVsZW1lbnQ6U3RyaW5nW10gPSBib2R5LnNwbGl0KFwiXFxuXCIpO1xuXG4gICAgbGV0IHBvc3QgPSBuZXcgUG9zdCgpO1xuXG4gICAgcG9zdC5hdHRyaWJ1dGVzID0gcC5hdHRyaWJ1dGVzO1xuICAgIC8vVE9ETzog6YCa6L+H6YWN572u5paH5Lu26YCJ5oup5L+d5a2Y55qE5pWw6YePXG4gICAgcG9zdC5zdW1tYXJ5ID0gZWxlbWVudFswXTtcbiAgICBwb3N0LmJvZHkgPSBib2R5O1xuICAgIHJldHVybiBwb3N0O1xufSIsIlxuaW1wb3J0IHsgQXR0cmlidXRlcywgUG9zdCB9IGZyb20gXCIvaG9tZS9ydW5uZXIvd29yay9WdWVCbG9nL1Z1ZUJsb2cvc3JjL3N0b3JlL3N0YXRlXCI7XG5pbXBvcnQgTWFya2Rvd25JdCBmcm9tIFwibWFya2Rvd24taXRcIjtcbmltcG9ydCBmcm9udE1hdHRlciBmcm9tIFwiZnJvbnQtbWF0dGVyXCI7XG5cbmNvbnN0IG1kID0gbmV3IE1hcmtkb3duSXQoKTtcblxuZXhwb3J0IGRlZmF1bHQgKCk6IFBvc3QgPT4ge1xuICAgIGNvbnN0IHA6IFBvc3QgPSByZXF1aXJlKFwiL2hvbWUvcnVubmVyL3dvcmsvVnVlQmxvZy9WdWVCbG9nL3N0YXRpYy9hcmlhMumFjee9ri5tZFwiKTtcblxuICAgIGNvbnN0IGJvZHk6U3RyaW5nID0gbWQucmVuZGVyKHAuYm9keS50b1N0cmluZygpKTtcbiAgICBjb25zdCBlbGVtZW50OlN0cmluZ1tdID0gYm9keS5zcGxpdChcIlxcblwiKTtcblxuICAgIGxldCBwb3N0ID0gbmV3IFBvc3QoKTtcblxuICAgIHBvc3QuYXR0cmlidXRlcyA9IHAuYXR0cmlidXRlcztcbiAgICAvL1RPRE86IOmAmui/h+mFjee9ruaWh+S7tumAieaLqeS/neWtmOeahOaVsOmHj1xuICAgIHBvc3Quc3VtbWFyeSA9IGVsZW1lbnRbMF07XG4gICAgcG9zdC5ib2R5ID0gYm9keTtcbiAgICByZXR1cm4gcG9zdDtcbn0iLCJcbmltcG9ydCB7IEF0dHJpYnV0ZXMsIFBvc3QgfSBmcm9tIFwiL2hvbWUvcnVubmVyL3dvcmsvVnVlQmxvZy9WdWVCbG9nL3NyYy9zdG9yZS9zdGF0ZVwiO1xuaW1wb3J0IE1hcmtkb3duSXQgZnJvbSBcIm1hcmtkb3duLWl0XCI7XG5pbXBvcnQgZnJvbnRNYXR0ZXIgZnJvbSBcImZyb250LW1hdHRlclwiO1xuXG5jb25zdCBtZCA9IG5ldyBNYXJrZG93bkl0KCk7XG5cbmV4cG9ydCBkZWZhdWx0ICgpOiBQb3N0ID0+IHtcbiAgICBjb25zdCBwOiBQb3N0ID0gcmVxdWlyZShcIi9ob21lL3J1bm5lci93b3JrL1Z1ZUJsb2cvVnVlQmxvZy9zdGF0aWMvY3BwLXNvcnQubWRcIik7XG5cbiAgICBjb25zdCBib2R5OlN0cmluZyA9IG1kLnJlbmRlcihwLmJvZHkudG9TdHJpbmcoKSk7XG4gICAgY29uc3QgZWxlbWVudDpTdHJpbmdbXSA9IGJvZHkuc3BsaXQoXCJcXG5cIik7XG5cbiAgICBsZXQgcG9zdCA9IG5ldyBQb3N0KCk7XG5cbiAgICBwb3N0LmF0dHJpYnV0ZXMgPSBwLmF0dHJpYnV0ZXM7XG4gICAgLy9UT0RPOiDpgJrov4fphY3nva7mlofku7bpgInmi6nkv53lrZjnmoTmlbDph49cbiAgICBwb3N0LnN1bW1hcnkgPSBlbGVtZW50WzBdO1xuICAgIHBvc3QuYm9keSA9IGJvZHk7XG4gICAgcmV0dXJuIHBvc3Q7XG59IiwiXG5pbXBvcnQgeyBBdHRyaWJ1dGVzLCBQb3N0IH0gZnJvbSBcIi9ob21lL3J1bm5lci93b3JrL1Z1ZUJsb2cvVnVlQmxvZy9zcmMvc3RvcmUvc3RhdGVcIjtcbmltcG9ydCBNYXJrZG93bkl0IGZyb20gXCJtYXJrZG93bi1pdFwiO1xuaW1wb3J0IGZyb250TWF0dGVyIGZyb20gXCJmcm9udC1tYXR0ZXJcIjtcblxuY29uc3QgbWQgPSBuZXcgTWFya2Rvd25JdCgpO1xuXG5leHBvcnQgZGVmYXVsdCAoKTogUG9zdCA9PiB7XG4gICAgY29uc3QgcDogUG9zdCA9IHJlcXVpcmUoXCIvaG9tZS9ydW5uZXIvd29yay9WdWVCbG9nL1Z1ZUJsb2cvc3RhdGljL3BhZ2UubWRcIik7XG5cbiAgICBjb25zdCBib2R5OlN0cmluZyA9IG1kLnJlbmRlcihwLmJvZHkudG9TdHJpbmcoKSk7XG4gICAgY29uc3QgZWxlbWVudDpTdHJpbmdbXSA9IGJvZHkuc3BsaXQoXCJcXG5cIik7XG5cbiAgICBsZXQgcG9zdCA9IG5ldyBQb3N0KCk7XG5cbiAgICBwb3N0LmF0dHJpYnV0ZXMgPSBwLmF0dHJpYnV0ZXM7XG4gICAgLy9UT0RPOiDpgJrov4fphY3nva7mlofku7bpgInmi6nkv53lrZjnmoTmlbDph49cbiAgICBwb3N0LnN1bW1hcnkgPSBlbGVtZW50WzBdO1xuICAgIHBvc3QuYm9keSA9IGJvZHk7XG4gICAgcmV0dXJuIHBvc3Q7XG59IiwiXG5pbXBvcnQgeyBBdHRyaWJ1dGVzLCBQb3N0IH0gZnJvbSBcIi9ob21lL3J1bm5lci93b3JrL1Z1ZUJsb2cvVnVlQmxvZy9zcmMvc3RvcmUvc3RhdGVcIjtcbmltcG9ydCBNYXJrZG93bkl0IGZyb20gXCJtYXJrZG93bi1pdFwiO1xuaW1wb3J0IGZyb250TWF0dGVyIGZyb20gXCJmcm9udC1tYXR0ZXJcIjtcblxuY29uc3QgbWQgPSBuZXcgTWFya2Rvd25JdCgpO1xuXG5leHBvcnQgZGVmYXVsdCAoKTogUG9zdCA9PiB7XG4gICAgY29uc3QgcDogUG9zdCA9IHJlcXVpcmUoXCIvaG9tZS9ydW5uZXIvd29yay9WdWVCbG9nL1Z1ZUJsb2cvc3RhdGljL2hpYmVybmF0ZS1mb3Itc3dhcGZpbGUubWRcIik7XG5cbiAgICBjb25zdCBib2R5OlN0cmluZyA9IG1kLnJlbmRlcihwLmJvZHkudG9TdHJpbmcoKSk7XG4gICAgY29uc3QgZWxlbWVudDpTdHJpbmdbXSA9IGJvZHkuc3BsaXQoXCJcXG5cIik7XG5cbiAgICBsZXQgcG9zdCA9IG5ldyBQb3N0KCk7XG5cbiAgICBwb3N0LmF0dHJpYnV0ZXMgPSBwLmF0dHJpYnV0ZXM7XG4gICAgLy9UT0RPOiDpgJrov4fphY3nva7mlofku7bpgInmi6nkv53lrZjnmoTmlbDph49cbiAgICBwb3N0LnN1bW1hcnkgPSBlbGVtZW50WzBdO1xuICAgIHBvc3QuYm9keSA9IGJvZHk7XG4gICAgcmV0dXJuIHBvc3Q7XG59IiwiXG5pbXBvcnQgeyBBdHRyaWJ1dGVzLCBQb3N0IH0gZnJvbSBcIi9ob21lL3J1bm5lci93b3JrL1Z1ZUJsb2cvVnVlQmxvZy9zcmMvc3RvcmUvc3RhdGVcIjtcbmltcG9ydCBNYXJrZG93bkl0IGZyb20gXCJtYXJrZG93bi1pdFwiO1xuaW1wb3J0IGZyb250TWF0dGVyIGZyb20gXCJmcm9udC1tYXR0ZXJcIjtcblxuY29uc3QgbWQgPSBuZXcgTWFya2Rvd25JdCgpO1xuXG5leHBvcnQgZGVmYXVsdCAoKTogUG9zdCA9PiB7XG4gICAgY29uc3QgcDogUG9zdCA9IHJlcXVpcmUoXCIvaG9tZS9ydW5uZXIvd29yay9WdWVCbG9nL1Z1ZUJsb2cvc3RhdGljL+a3seW6puWtpuS5oOeslOiusC5tZFwiKTtcblxuICAgIGNvbnN0IGJvZHk6U3RyaW5nID0gbWQucmVuZGVyKHAuYm9keS50b1N0cmluZygpKTtcbiAgICBjb25zdCBlbGVtZW50OlN0cmluZ1tdID0gYm9keS5zcGxpdChcIlxcblwiKTtcblxuICAgIGxldCBwb3N0ID0gbmV3IFBvc3QoKTtcblxuICAgIHBvc3QuYXR0cmlidXRlcyA9IHAuYXR0cmlidXRlcztcbiAgICAvL1RPRE86IOmAmui/h+mFjee9ruaWh+S7tumAieaLqeS/neWtmOeahOaVsOmHj1xuICAgIHBvc3Quc3VtbWFyeSA9IGVsZW1lbnRbMF07XG4gICAgcG9zdC5ib2R5ID0gYm9keTtcbiAgICByZXR1cm4gcG9zdDtcbn0iLCJcbmltcG9ydCB7IEF0dHJpYnV0ZXMsIFBvc3QgfSBmcm9tIFwiL2hvbWUvcnVubmVyL3dvcmsvVnVlQmxvZy9WdWVCbG9nL3NyYy9zdG9yZS9zdGF0ZVwiO1xuaW1wb3J0IE1hcmtkb3duSXQgZnJvbSBcIm1hcmtkb3duLWl0XCI7XG5pbXBvcnQgZnJvbnRNYXR0ZXIgZnJvbSBcImZyb250LW1hdHRlclwiO1xuXG5jb25zdCBtZCA9IG5ldyBNYXJrZG93bkl0KCk7XG5cbmV4cG9ydCBkZWZhdWx0ICgpOiBQb3N0ID0+IHtcbiAgICBjb25zdCBwOiBQb3N0ID0gcmVxdWlyZShcIi9ob21lL3J1bm5lci93b3JrL1Z1ZUJsb2cvVnVlQmxvZy9zdGF0aWMvZGVlcGlu5b6F5py65ZCO6ZSu55uY5ZKM6Kem5pG45p2/5peg5rOV5L2/55So55qE6Kej5Yaz5pa55rOVLm1kXCIpO1xuXG4gICAgY29uc3QgYm9keTpTdHJpbmcgPSBtZC5yZW5kZXIocC5ib2R5LnRvU3RyaW5nKCkpO1xuICAgIGNvbnN0IGVsZW1lbnQ6U3RyaW5nW10gPSBib2R5LnNwbGl0KFwiXFxuXCIpO1xuXG4gICAgbGV0IHBvc3QgPSBuZXcgUG9zdCgpO1xuXG4gICAgcG9zdC5hdHRyaWJ1dGVzID0gcC5hdHRyaWJ1dGVzO1xuICAgIC8vVE9ETzog6YCa6L+H6YWN572u5paH5Lu26YCJ5oup5L+d5a2Y55qE5pWw6YePXG4gICAgcG9zdC5zdW1tYXJ5ID0gZWxlbWVudFswXTtcbiAgICBwb3N0LmJvZHkgPSBib2R5O1xuICAgIHJldHVybiBwb3N0O1xufSIsIlxuaW1wb3J0IHsgQXR0cmlidXRlcywgUG9zdCB9IGZyb20gXCIvaG9tZS9ydW5uZXIvd29yay9WdWVCbG9nL1Z1ZUJsb2cvc3JjL3N0b3JlL3N0YXRlXCI7XG5pbXBvcnQgTWFya2Rvd25JdCBmcm9tIFwibWFya2Rvd24taXRcIjtcbmltcG9ydCBmcm9udE1hdHRlciBmcm9tIFwiZnJvbnQtbWF0dGVyXCI7XG5cbmNvbnN0IG1kID0gbmV3IE1hcmtkb3duSXQoKTtcblxuZXhwb3J0IGRlZmF1bHQgKCk6IFBvc3QgPT4ge1xuICAgIGNvbnN0IHA6IFBvc3QgPSByZXF1aXJlKFwiL2hvbWUvcnVubmVyL3dvcmsvVnVlQmxvZy9WdWVCbG9nL3N0YXRpYy/ljbfnp6/npZ7nu4/nvZHnu5znroDov7AubWRcIik7XG5cbiAgICBjb25zdCBib2R5OlN0cmluZyA9IG1kLnJlbmRlcihwLmJvZHkudG9TdHJpbmcoKSk7XG4gICAgY29uc3QgZWxlbWVudDpTdHJpbmdbXSA9IGJvZHkuc3BsaXQoXCJcXG5cIik7XG5cbiAgICBsZXQgcG9zdCA9IG5ldyBQb3N0KCk7XG5cbiAgICBwb3N0LmF0dHJpYnV0ZXMgPSBwLmF0dHJpYnV0ZXM7XG4gICAgLy9UT0RPOiDpgJrov4fphY3nva7mlofku7bpgInmi6nkv53lrZjnmoTmlbDph49cbiAgICBwb3N0LnN1bW1hcnkgPSBlbGVtZW50WzBdO1xuICAgIHBvc3QuYm9keSA9IGJvZHk7XG4gICAgcmV0dXJuIHBvc3Q7XG59IiwiXG5pbXBvcnQgeyBBdHRyaWJ1dGVzLCBQb3N0IH0gZnJvbSBcIi9ob21lL3J1bm5lci93b3JrL1Z1ZUJsb2cvVnVlQmxvZy9zcmMvc3RvcmUvc3RhdGVcIjtcbmltcG9ydCBNYXJrZG93bkl0IGZyb20gXCJtYXJrZG93bi1pdFwiO1xuaW1wb3J0IGZyb250TWF0dGVyIGZyb20gXCJmcm9udC1tYXR0ZXJcIjtcblxuY29uc3QgbWQgPSBuZXcgTWFya2Rvd25JdCgpO1xuXG5leHBvcnQgZGVmYXVsdCAoKTogUG9zdCA9PiB7XG4gICAgY29uc3QgcDogUG9zdCA9IHJlcXVpcmUoXCIvaG9tZS9ydW5uZXIvd29yay9WdWVCbG9nL1Z1ZUJsb2cvc3RhdGljL3Nha3VyYS5tZFwiKTtcblxuICAgIGNvbnN0IGJvZHk6U3RyaW5nID0gbWQucmVuZGVyKHAuYm9keS50b1N0cmluZygpKTtcbiAgICBjb25zdCBlbGVtZW50OlN0cmluZ1tdID0gYm9keS5zcGxpdChcIlxcblwiKTtcblxuICAgIGxldCBwb3N0ID0gbmV3IFBvc3QoKTtcblxuICAgIHBvc3QuYXR0cmlidXRlcyA9IHAuYXR0cmlidXRlcztcbiAgICAvL1RPRE86IOmAmui/h+mFjee9ruaWh+S7tumAieaLqeS/neWtmOeahOaVsOmHj1xuICAgIHBvc3Quc3VtbWFyeSA9IGVsZW1lbnRbMF07XG4gICAgcG9zdC5ib2R5ID0gYm9keTtcbiAgICByZXR1cm4gcG9zdDtcbn0iLCJcbmltcG9ydCB7IEF0dHJpYnV0ZXMsIFBvc3QgfSBmcm9tIFwiL2hvbWUvcnVubmVyL3dvcmsvVnVlQmxvZy9WdWVCbG9nL3NyYy9zdG9yZS9zdGF0ZVwiO1xuaW1wb3J0IE1hcmtkb3duSXQgZnJvbSBcIm1hcmtkb3duLWl0XCI7XG5pbXBvcnQgZnJvbnRNYXR0ZXIgZnJvbSBcImZyb250LW1hdHRlclwiO1xuXG5jb25zdCBtZCA9IG5ldyBNYXJrZG93bkl0KCk7XG5cbmV4cG9ydCBkZWZhdWx0ICgpOiBQb3N0ID0+IHtcbiAgICBjb25zdCBwOiBQb3N0ID0gcmVxdWlyZShcIi9ob21lL3J1bm5lci93b3JrL1Z1ZUJsb2cvVnVlQmxvZy9zdGF0aWMvZGVidWfkuobkuKTlpKnvvIzlj6rliKDkuobkuIDooYzku6PnoIEubWRcIik7XG5cbiAgICBjb25zdCBib2R5OlN0cmluZyA9IG1kLnJlbmRlcihwLmJvZHkudG9TdHJpbmcoKSk7XG4gICAgY29uc3QgZWxlbWVudDpTdHJpbmdbXSA9IGJvZHkuc3BsaXQoXCJcXG5cIik7XG5cbiAgICBsZXQgcG9zdCA9IG5ldyBQb3N0KCk7XG5cbiAgICBwb3N0LmF0dHJpYnV0ZXMgPSBwLmF0dHJpYnV0ZXM7XG4gICAgLy9UT0RPOiDpgJrov4fphY3nva7mlofku7bpgInmi6nkv53lrZjnmoTmlbDph49cbiAgICBwb3N0LnN1bW1hcnkgPSBlbGVtZW50WzBdO1xuICAgIHBvc3QuYm9keSA9IGJvZHk7XG4gICAgcmV0dXJuIHBvc3Q7XG59IiwiXG5pbXBvcnQgeyBBdHRyaWJ1dGVzLCBQb3N0IH0gZnJvbSBcIi9ob21lL3J1bm5lci93b3JrL1Z1ZUJsb2cvVnVlQmxvZy9zcmMvc3RvcmUvc3RhdGVcIjtcbmltcG9ydCBNYXJrZG93bkl0IGZyb20gXCJtYXJrZG93bi1pdFwiO1xuaW1wb3J0IGZyb250TWF0dGVyIGZyb20gXCJmcm9udC1tYXR0ZXJcIjtcblxuY29uc3QgbWQgPSBuZXcgTWFya2Rvd25JdCgpO1xuXG5leHBvcnQgZGVmYXVsdCAoKTogUG9zdCA9PiB7XG4gICAgY29uc3QgcDogUG9zdCA9IHJlcXVpcmUoXCIvaG9tZS9ydW5uZXIvd29yay9WdWVCbG9nL1Z1ZUJsb2cvc3RhdGljL1RvcGJhci5tZFwiKTtcblxuICAgIGNvbnN0IGJvZHk6U3RyaW5nID0gbWQucmVuZGVyKHAuYm9keS50b1N0cmluZygpKTtcbiAgICBjb25zdCBlbGVtZW50OlN0cmluZ1tdID0gYm9keS5zcGxpdChcIlxcblwiKTtcblxuICAgIGxldCBwb3N0ID0gbmV3IFBvc3QoKTtcblxuICAgIHBvc3QuYXR0cmlidXRlcyA9IHAuYXR0cmlidXRlcztcbiAgICAvL1RPRE86IOmAmui/h+mFjee9ruaWh+S7tumAieaLqeS/neWtmOeahOaVsOmHj1xuICAgIHBvc3Quc3VtbWFyeSA9IGVsZW1lbnRbMF07XG4gICAgcG9zdC5ib2R5ID0gYm9keTtcbiAgICByZXR1cm4gcG9zdDtcbn0iLCJcbmltcG9ydCB7IEF0dHJpYnV0ZXMsIFBvc3QgfSBmcm9tIFwiL2hvbWUvcnVubmVyL3dvcmsvVnVlQmxvZy9WdWVCbG9nL3NyYy9zdG9yZS9zdGF0ZVwiO1xuaW1wb3J0IE1hcmtkb3duSXQgZnJvbSBcIm1hcmtkb3duLWl0XCI7XG5pbXBvcnQgZnJvbnRNYXR0ZXIgZnJvbSBcImZyb250LW1hdHRlclwiO1xuXG5jb25zdCBtZCA9IG5ldyBNYXJrZG93bkl0KCk7XG5cbmV4cG9ydCBkZWZhdWx0ICgpOiBQb3N0ID0+IHtcbiAgICBjb25zdCBwOiBQb3N0ID0gcmVxdWlyZShcIi9ob21lL3J1bm5lci93b3JrL1Z1ZUJsb2cvVnVlQmxvZy9zdGF0aWMvSmF2YVNjcmlwdOW7uumAoOiAheaooeW8jy5tZFwiKTtcblxuICAgIGNvbnN0IGJvZHk6U3RyaW5nID0gbWQucmVuZGVyKHAuYm9keS50b1N0cmluZygpKTtcbiAgICBjb25zdCBlbGVtZW50OlN0cmluZ1tdID0gYm9keS5zcGxpdChcIlxcblwiKTtcblxuICAgIGxldCBwb3N0ID0gbmV3IFBvc3QoKTtcblxuICAgIHBvc3QuYXR0cmlidXRlcyA9IHAuYXR0cmlidXRlcztcbiAgICAvL1RPRE86IOmAmui/h+mFjee9ruaWh+S7tumAieaLqeS/neWtmOeahOaVsOmHj1xuICAgIHBvc3Quc3VtbWFyeSA9IGVsZW1lbnRbMF07XG4gICAgcG9zdC5ib2R5ID0gYm9keTtcbiAgICByZXR1cm4gcG9zdDtcbn0iLCJcbmltcG9ydCB7IEF0dHJpYnV0ZXMsIFBvc3QgfSBmcm9tIFwiL2hvbWUvcnVubmVyL3dvcmsvVnVlQmxvZy9WdWVCbG9nL3NyYy9zdG9yZS9zdGF0ZVwiO1xuaW1wb3J0IE1hcmtkb3duSXQgZnJvbSBcIm1hcmtkb3duLWl0XCI7XG5pbXBvcnQgZnJvbnRNYXR0ZXIgZnJvbSBcImZyb250LW1hdHRlclwiO1xuXG5jb25zdCBtZCA9IG5ldyBNYXJrZG93bkl0KCk7XG5cbmV4cG9ydCBkZWZhdWx0ICgpOiBQb3N0ID0+IHtcbiAgICBjb25zdCBwOiBQb3N0ID0gcmVxdWlyZShcIi9ob21lL3J1bm5lci93b3JrL1Z1ZUJsb2cvVnVlQmxvZy9zdGF0aWMvMjAxOXJldmlldy5tZFwiKTtcblxuICAgIGNvbnN0IGJvZHk6U3RyaW5nID0gbWQucmVuZGVyKHAuYm9keS50b1N0cmluZygpKTtcbiAgICBjb25zdCBlbGVtZW50OlN0cmluZ1tdID0gYm9keS5zcGxpdChcIlxcblwiKTtcblxuICAgIGxldCBwb3N0ID0gbmV3IFBvc3QoKTtcblxuICAgIHBvc3QuYXR0cmlidXRlcyA9IHAuYXR0cmlidXRlcztcbiAgICAvL1RPRE86IOmAmui/h+mFjee9ruaWh+S7tumAieaLqeS/neWtmOeahOaVsOmHj1xuICAgIHBvc3Quc3VtbWFyeSA9IGVsZW1lbnRbMF07XG4gICAgcG9zdC5ib2R5ID0gYm9keTtcbiAgICByZXR1cm4gcG9zdDtcbn0iLCJcbmltcG9ydCB7IEF0dHJpYnV0ZXMsIFBvc3QgfSBmcm9tIFwiL2hvbWUvcnVubmVyL3dvcmsvVnVlQmxvZy9WdWVCbG9nL3NyYy9zdG9yZS9zdGF0ZVwiO1xuaW1wb3J0IE1hcmtkb3duSXQgZnJvbSBcIm1hcmtkb3duLWl0XCI7XG5pbXBvcnQgZnJvbnRNYXR0ZXIgZnJvbSBcImZyb250LW1hdHRlclwiO1xuXG5jb25zdCBtZCA9IG5ldyBNYXJrZG93bkl0KCk7XG5cbmV4cG9ydCBkZWZhdWx0ICgpOiBQb3N0ID0+IHtcbiAgICBjb25zdCBwOiBQb3N0ID0gcmVxdWlyZShcIi9ob21lL3J1bm5lci93b3JrL1Z1ZUJsb2cvVnVlQmxvZy9zdGF0aWMv6YeN5p6EZGRlLXNlc3Npb24tdWkubWRcIik7XG5cbiAgICBjb25zdCBib2R5OlN0cmluZyA9IG1kLnJlbmRlcihwLmJvZHkudG9TdHJpbmcoKSk7XG4gICAgY29uc3QgZWxlbWVudDpTdHJpbmdbXSA9IGJvZHkuc3BsaXQoXCJcXG5cIik7XG5cbiAgICBsZXQgcG9zdCA9IG5ldyBQb3N0KCk7XG5cbiAgICBwb3N0LmF0dHJpYnV0ZXMgPSBwLmF0dHJpYnV0ZXM7XG4gICAgLy9UT0RPOiDpgJrov4fphY3nva7mlofku7bpgInmi6nkv53lrZjnmoTmlbDph49cbiAgICBwb3N0LnN1bW1hcnkgPSBlbGVtZW50WzBdO1xuICAgIHBvc3QuYm9keSA9IGJvZHk7XG4gICAgcmV0dXJuIHBvc3Q7XG59IiwiXG5pbXBvcnQgeyBBdHRyaWJ1dGVzLCBQb3N0IH0gZnJvbSBcIi9ob21lL3J1bm5lci93b3JrL1Z1ZUJsb2cvVnVlQmxvZy9zcmMvc3RvcmUvc3RhdGVcIjtcbmltcG9ydCBNYXJrZG93bkl0IGZyb20gXCJtYXJrZG93bi1pdFwiO1xuaW1wb3J0IGZyb250TWF0dGVyIGZyb20gXCJmcm9udC1tYXR0ZXJcIjtcblxuY29uc3QgbWQgPSBuZXcgTWFya2Rvd25JdCgpO1xuXG5leHBvcnQgZGVmYXVsdCAoKTogUG9zdCA9PiB7XG4gICAgY29uc3QgcDogUG9zdCA9IHJlcXVpcmUoXCIvaG9tZS9ydW5uZXIvd29yay9WdWVCbG9nL1Z1ZUJsb2cvc3RhdGljL+e7mUFyY2hsaW51eOW8gOWQr0JGUeWSjE11UVNTLm1kXCIpO1xuXG4gICAgY29uc3QgYm9keTpTdHJpbmcgPSBtZC5yZW5kZXIocC5ib2R5LnRvU3RyaW5nKCkpO1xuICAgIGNvbnN0IGVsZW1lbnQ6U3RyaW5nW10gPSBib2R5LnNwbGl0KFwiXFxuXCIpO1xuXG4gICAgbGV0IHBvc3QgPSBuZXcgUG9zdCgpO1xuXG4gICAgcG9zdC5hdHRyaWJ1dGVzID0gcC5hdHRyaWJ1dGVzO1xuICAgIC8vVE9ETzog6YCa6L+H6YWN572u5paH5Lu26YCJ5oup5L+d5a2Y55qE5pWw6YePXG4gICAgcG9zdC5zdW1tYXJ5ID0gZWxlbWVudFswXTtcbiAgICBwb3N0LmJvZHkgPSBib2R5O1xuICAgIHJldHVybiBwb3N0O1xufSIsIlxuaW1wb3J0IHsgQXR0cmlidXRlcywgUG9zdCB9IGZyb20gXCIvaG9tZS9ydW5uZXIvd29yay9WdWVCbG9nL1Z1ZUJsb2cvc3JjL3N0b3JlL3N0YXRlXCI7XG5pbXBvcnQgTWFya2Rvd25JdCBmcm9tIFwibWFya2Rvd24taXRcIjtcbmltcG9ydCBmcm9udE1hdHRlciBmcm9tIFwiZnJvbnQtbWF0dGVyXCI7XG5cbmNvbnN0IG1kID0gbmV3IE1hcmtkb3duSXQoKTtcblxuZXhwb3J0IGRlZmF1bHQgKCk6IFBvc3QgPT4ge1xuICAgIGNvbnN0IHA6IFBvc3QgPSByZXF1aXJlKFwiL2hvbWUvcnVubmVyL3dvcmsvVnVlQmxvZy9WdWVCbG9nL3N0YXRpYy9mb250LWNvbmZpZy5tZFwiKTtcblxuICAgIGNvbnN0IGJvZHk6U3RyaW5nID0gbWQucmVuZGVyKHAuYm9keS50b1N0cmluZygpKTtcbiAgICBjb25zdCBlbGVtZW50OlN0cmluZ1tdID0gYm9keS5zcGxpdChcIlxcblwiKTtcblxuICAgIGxldCBwb3N0ID0gbmV3IFBvc3QoKTtcblxuICAgIHBvc3QuYXR0cmlidXRlcyA9IHAuYXR0cmlidXRlcztcbiAgICAvL1RPRE86IOmAmui/h+mFjee9ruaWh+S7tumAieaLqeS/neWtmOeahOaVsOmHj1xuICAgIHBvc3Quc3VtbWFyeSA9IGVsZW1lbnRbMF07XG4gICAgcG9zdC5ib2R5ID0gYm9keTtcbiAgICByZXR1cm4gcG9zdDtcbn0iLCJcbmltcG9ydCB7IEF0dHJpYnV0ZXMsIFBvc3QgfSBmcm9tIFwiL2hvbWUvcnVubmVyL3dvcmsvVnVlQmxvZy9WdWVCbG9nL3NyYy9zdG9yZS9zdGF0ZVwiO1xuaW1wb3J0IE1hcmtkb3duSXQgZnJvbSBcIm1hcmtkb3duLWl0XCI7XG5pbXBvcnQgZnJvbnRNYXR0ZXIgZnJvbSBcImZyb250LW1hdHRlclwiO1xuXG5jb25zdCBtZCA9IG5ldyBNYXJrZG93bkl0KCk7XG5cbmV4cG9ydCBkZWZhdWx0ICgpOiBQb3N0ID0+IHtcbiAgICBjb25zdCBwOiBQb3N0ID0gcmVxdWlyZShcIi9ob21lL3J1bm5lci93b3JrL1Z1ZUJsb2cvVnVlQmxvZy9zdGF0aWMv6K6w5b2V5LiA5Liq5Z2R54i555qEdXNi572R5Y2hLm1kXCIpO1xuXG4gICAgY29uc3QgYm9keTpTdHJpbmcgPSBtZC5yZW5kZXIocC5ib2R5LnRvU3RyaW5nKCkpO1xuICAgIGNvbnN0IGVsZW1lbnQ6U3RyaW5nW10gPSBib2R5LnNwbGl0KFwiXFxuXCIpO1xuXG4gICAgbGV0IHBvc3QgPSBuZXcgUG9zdCgpO1xuXG4gICAgcG9zdC5hdHRyaWJ1dGVzID0gcC5hdHRyaWJ1dGVzO1xuICAgIC8vVE9ETzog6YCa6L+H6YWN572u5paH5Lu26YCJ5oup5L+d5a2Y55qE5pWw6YePXG4gICAgcG9zdC5zdW1tYXJ5ID0gZWxlbWVudFswXTtcbiAgICBwb3N0LmJvZHkgPSBib2R5O1xuICAgIHJldHVybiBwb3N0O1xufSIsIlxuaW1wb3J0IHsgQXR0cmlidXRlcywgUG9zdCB9IGZyb20gXCIvaG9tZS9ydW5uZXIvd29yay9WdWVCbG9nL1Z1ZUJsb2cvc3JjL3N0b3JlL3N0YXRlXCI7XG5pbXBvcnQgTWFya2Rvd25JdCBmcm9tIFwibWFya2Rvd24taXRcIjtcbmltcG9ydCBmcm9udE1hdHRlciBmcm9tIFwiZnJvbnQtbWF0dGVyXCI7XG5cbmNvbnN0IG1kID0gbmV3IE1hcmtkb3duSXQoKTtcblxuZXhwb3J0IGRlZmF1bHQgKCk6IFBvc3QgPT4ge1xuICAgIGNvbnN0IHA6IFBvc3QgPSByZXF1aXJlKFwiL2hvbWUvcnVubmVyL3dvcmsvVnVlQmxvZy9WdWVCbG9nL3N0YXRpYy9jcHAtc21hcnQtcG9pbnRlci5tZFwiKTtcblxuICAgIGNvbnN0IGJvZHk6U3RyaW5nID0gbWQucmVuZGVyKHAuYm9keS50b1N0cmluZygpKTtcbiAgICBjb25zdCBlbGVtZW50OlN0cmluZ1tdID0gYm9keS5zcGxpdChcIlxcblwiKTtcblxuICAgIGxldCBwb3N0ID0gbmV3IFBvc3QoKTtcblxuICAgIHBvc3QuYXR0cmlidXRlcyA9IHAuYXR0cmlidXRlcztcbiAgICAvL1RPRE86IOmAmui/h+mFjee9ruaWh+S7tumAieaLqeS/neWtmOeahOaVsOmHj1xuICAgIHBvc3Quc3VtbWFyeSA9IGVsZW1lbnRbMF07XG4gICAgcG9zdC5ib2R5ID0gYm9keTtcbiAgICByZXR1cm4gcG9zdDtcbn0iLCJcbmltcG9ydCB7IEF0dHJpYnV0ZXMsIFBvc3QgfSBmcm9tIFwiL2hvbWUvcnVubmVyL3dvcmsvVnVlQmxvZy9WdWVCbG9nL3NyYy9zdG9yZS9zdGF0ZVwiO1xuaW1wb3J0IE1hcmtkb3duSXQgZnJvbSBcIm1hcmtkb3duLWl0XCI7XG5pbXBvcnQgZnJvbnRNYXR0ZXIgZnJvbSBcImZyb250LW1hdHRlclwiO1xuXG5jb25zdCBtZCA9IG5ldyBNYXJrZG93bkl0KCk7XG5cbmV4cG9ydCBkZWZhdWx0ICgpOiBQb3N0ID0+IHtcbiAgICBjb25zdCBwOiBQb3N0ID0gcmVxdWlyZShcIi9ob21lL3J1bm5lci93b3JrL1Z1ZUJsb2cvVnVlQmxvZy9zdGF0aWMvZHJlYW1zY2VuZeaPkuS7tuW8gOWPkS5tZFwiKTtcblxuICAgIGNvbnN0IGJvZHk6U3RyaW5nID0gbWQucmVuZGVyKHAuYm9keS50b1N0cmluZygpKTtcbiAgICBjb25zdCBlbGVtZW50OlN0cmluZ1tdID0gYm9keS5zcGxpdChcIlxcblwiKTtcblxuICAgIGxldCBwb3N0ID0gbmV3IFBvc3QoKTtcblxuICAgIHBvc3QuYXR0cmlidXRlcyA9IHAuYXR0cmlidXRlcztcbiAgICAvL1RPRE86IOmAmui/h+mFjee9ruaWh+S7tumAieaLqeS/neWtmOeahOaVsOmHj1xuICAgIHBvc3Quc3VtbWFyeSA9IGVsZW1lbnRbMF07XG4gICAgcG9zdC5ib2R5ID0gYm9keTtcbiAgICByZXR1cm4gcG9zdDtcbn0iLCJcbmltcG9ydCB7IEF0dHJpYnV0ZXMsIFBvc3QgfSBmcm9tIFwiL2hvbWUvcnVubmVyL3dvcmsvVnVlQmxvZy9WdWVCbG9nL3NyYy9zdG9yZS9zdGF0ZVwiO1xuaW1wb3J0IE1hcmtkb3duSXQgZnJvbSBcIm1hcmtkb3duLWl0XCI7XG5pbXBvcnQgZnJvbnRNYXR0ZXIgZnJvbSBcImZyb250LW1hdHRlclwiO1xuXG5jb25zdCBtZCA9IG5ldyBNYXJrZG93bkl0KCk7XG5cbmV4cG9ydCBkZWZhdWx0ICgpOiBQb3N0ID0+IHtcbiAgICBjb25zdCBwOiBQb3N0ID0gcmVxdWlyZShcIi9ob21lL3J1bm5lci93b3JrL1Z1ZUJsb2cvVnVlQmxvZy9zdGF0aWMvTGludXjnmoRQQU3mmK/ku4DkuYgubWRcIik7XG5cbiAgICBjb25zdCBib2R5OlN0cmluZyA9IG1kLnJlbmRlcihwLmJvZHkudG9TdHJpbmcoKSk7XG4gICAgY29uc3QgZWxlbWVudDpTdHJpbmdbXSA9IGJvZHkuc3BsaXQoXCJcXG5cIik7XG5cbiAgICBsZXQgcG9zdCA9IG5ldyBQb3N0KCk7XG5cbiAgICBwb3N0LmF0dHJpYnV0ZXMgPSBwLmF0dHJpYnV0ZXM7XG4gICAgLy9UT0RPOiDpgJrov4fphY3nva7mlofku7bpgInmi6nkv53lrZjnmoTmlbDph49cbiAgICBwb3N0LnN1bW1hcnkgPSBlbGVtZW50WzBdO1xuICAgIHBvc3QuYm9keSA9IGJvZHk7XG4gICAgcmV0dXJuIHBvc3Q7XG59IiwiXG5pbXBvcnQgeyBBdHRyaWJ1dGVzLCBQb3N0IH0gZnJvbSBcIi9ob21lL3J1bm5lci93b3JrL1Z1ZUJsb2cvVnVlQmxvZy9zcmMvc3RvcmUvc3RhdGVcIjtcbmltcG9ydCBNYXJrZG93bkl0IGZyb20gXCJtYXJrZG93bi1pdFwiO1xuaW1wb3J0IGZyb250TWF0dGVyIGZyb20gXCJmcm9udC1tYXR0ZXJcIjtcblxuY29uc3QgbWQgPSBuZXcgTWFya2Rvd25JdCgpO1xuXG5leHBvcnQgZGVmYXVsdCAoKTogUG9zdCA9PiB7XG4gICAgY29uc3QgcDogUG9zdCA9IHJlcXVpcmUoXCIvaG9tZS9ydW5uZXIvd29yay9WdWVCbG9nL1Z1ZUJsb2cvc3RhdGljL215LWxpZmUubWRcIik7XG5cbiAgICBjb25zdCBib2R5OlN0cmluZyA9IG1kLnJlbmRlcihwLmJvZHkudG9TdHJpbmcoKSk7XG4gICAgY29uc3QgZWxlbWVudDpTdHJpbmdbXSA9IGJvZHkuc3BsaXQoXCJcXG5cIik7XG5cbiAgICBsZXQgcG9zdCA9IG5ldyBQb3N0KCk7XG5cbiAgICBwb3N0LmF0dHJpYnV0ZXMgPSBwLmF0dHJpYnV0ZXM7XG4gICAgLy9UT0RPOiDpgJrov4fphY3nva7mlofku7bpgInmi6nkv53lrZjnmoTmlbDph49cbiAgICBwb3N0LnN1bW1hcnkgPSBlbGVtZW50WzBdO1xuICAgIHBvc3QuYm9keSA9IGJvZHk7XG4gICAgcmV0dXJuIHBvc3Q7XG59IiwiXG5pbXBvcnQgeyBBdHRyaWJ1dGVzLCBQb3N0IH0gZnJvbSBcIi9ob21lL3J1bm5lci93b3JrL1Z1ZUJsb2cvVnVlQmxvZy9zcmMvc3RvcmUvc3RhdGVcIjtcbmltcG9ydCBNYXJrZG93bkl0IGZyb20gXCJtYXJrZG93bi1pdFwiO1xuaW1wb3J0IGZyb250TWF0dGVyIGZyb20gXCJmcm9udC1tYXR0ZXJcIjtcblxuY29uc3QgbWQgPSBuZXcgTWFya2Rvd25JdCgpO1xuXG5leHBvcnQgZGVmYXVsdCAoKTogUG9zdCA9PiB7XG4gICAgY29uc3QgcDogUG9zdCA9IHJlcXVpcmUoXCIvaG9tZS9ydW5uZXIvd29yay9WdWVCbG9nL1Z1ZUJsb2cvc3RhdGljL+WcqERlZXBpbkxpbnV45LiL5L2/55SoblZpZGlhLUNVREEubWRcIik7XG5cbiAgICBjb25zdCBib2R5OlN0cmluZyA9IG1kLnJlbmRlcihwLmJvZHkudG9TdHJpbmcoKSk7XG4gICAgY29uc3QgZWxlbWVudDpTdHJpbmdbXSA9IGJvZHkuc3BsaXQoXCJcXG5cIik7XG5cbiAgICBsZXQgcG9zdCA9IG5ldyBQb3N0KCk7XG5cbiAgICBwb3N0LmF0dHJpYnV0ZXMgPSBwLmF0dHJpYnV0ZXM7XG4gICAgLy9UT0RPOiDpgJrov4fphY3nva7mlofku7bpgInmi6nkv53lrZjnmoTmlbDph49cbiAgICBwb3N0LnN1bW1hcnkgPSBlbGVtZW50WzBdO1xuICAgIHBvc3QuYm9keSA9IGJvZHk7XG4gICAgcmV0dXJuIHBvc3Q7XG59IiwiXG5pbXBvcnQgeyBBdHRyaWJ1dGVzLCBQb3N0IH0gZnJvbSBcIi9ob21lL3J1bm5lci93b3JrL1Z1ZUJsb2cvVnVlQmxvZy9zcmMvc3RvcmUvc3RhdGVcIjtcbmltcG9ydCBNYXJrZG93bkl0IGZyb20gXCJtYXJrZG93bi1pdFwiO1xuaW1wb3J0IGZyb250TWF0dGVyIGZyb20gXCJmcm9udC1tYXR0ZXJcIjtcblxuY29uc3QgbWQgPSBuZXcgTWFya2Rvd25JdCgpO1xuXG5leHBvcnQgZGVmYXVsdCAoKTogUG9zdCA9PiB7XG4gICAgY29uc3QgcDogUG9zdCA9IHJlcXVpcmUoXCIvaG9tZS9ydW5uZXIvd29yay9WdWVCbG9nL1Z1ZUJsb2cvc3RhdGljL2xpbnV45LiL5a6J6KOFdm13YXJl5Y+KYXJjaGxpbnV455qE5a6J6KOF5ZKM6YWN572uLm1kXCIpO1xuXG4gICAgY29uc3QgYm9keTpTdHJpbmcgPSBtZC5yZW5kZXIocC5ib2R5LnRvU3RyaW5nKCkpO1xuICAgIGNvbnN0IGVsZW1lbnQ6U3RyaW5nW10gPSBib2R5LnNwbGl0KFwiXFxuXCIpO1xuXG4gICAgbGV0IHBvc3QgPSBuZXcgUG9zdCgpO1xuXG4gICAgcG9zdC5hdHRyaWJ1dGVzID0gcC5hdHRyaWJ1dGVzO1xuICAgIC8vVE9ETzog6YCa6L+H6YWN572u5paH5Lu26YCJ5oup5L+d5a2Y55qE5pWw6YePXG4gICAgcG9zdC5zdW1tYXJ5ID0gZWxlbWVudFswXTtcbiAgICBwb3N0LmJvZHkgPSBib2R5O1xuICAgIHJldHVybiBwb3N0O1xufSIsIlxuaW1wb3J0IHsgQXR0cmlidXRlcywgUG9zdCB9IGZyb20gXCIvaG9tZS9ydW5uZXIvd29yay9WdWVCbG9nL1Z1ZUJsb2cvc3JjL3N0b3JlL3N0YXRlXCI7XG5pbXBvcnQgTWFya2Rvd25JdCBmcm9tIFwibWFya2Rvd24taXRcIjtcbmltcG9ydCBmcm9udE1hdHRlciBmcm9tIFwiZnJvbnQtbWF0dGVyXCI7XG5cbmNvbnN0IG1kID0gbmV3IE1hcmtkb3duSXQoKTtcblxuZXhwb3J0IGRlZmF1bHQgKCk6IFBvc3QgPT4ge1xuICAgIGNvbnN0IHA6IFBvc3QgPSByZXF1aXJlKFwiL2hvbWUvcnVubmVyL3dvcmsvVnVlQmxvZy9WdWVCbG9nL3N0YXRpYy9QUEEubWRcIik7XG5cbiAgICBjb25zdCBib2R5OlN0cmluZyA9IG1kLnJlbmRlcihwLmJvZHkudG9TdHJpbmcoKSk7XG4gICAgY29uc3QgZWxlbWVudDpTdHJpbmdbXSA9IGJvZHkuc3BsaXQoXCJcXG5cIik7XG5cbiAgICBsZXQgcG9zdCA9IG5ldyBQb3N0KCk7XG5cbiAgICBwb3N0LmF0dHJpYnV0ZXMgPSBwLmF0dHJpYnV0ZXM7XG4gICAgLy9UT0RPOiDpgJrov4fphY3nva7mlofku7bpgInmi6nkv53lrZjnmoTmlbDph49cbiAgICBwb3N0LnN1bW1hcnkgPSBlbGVtZW50WzBdO1xuICAgIHBvc3QuYm9keSA9IGJvZHk7XG4gICAgcmV0dXJuIHBvc3Q7XG59IiwiXG5pbXBvcnQgeyBBdHRyaWJ1dGVzLCBQb3N0IH0gZnJvbSBcIi9ob21lL3J1bm5lci93b3JrL1Z1ZUJsb2cvVnVlQmxvZy9zcmMvc3RvcmUvc3RhdGVcIjtcbmltcG9ydCBNYXJrZG93bkl0IGZyb20gXCJtYXJrZG93bi1pdFwiO1xuaW1wb3J0IGZyb250TWF0dGVyIGZyb20gXCJmcm9udC1tYXR0ZXJcIjtcblxuY29uc3QgbWQgPSBuZXcgTWFya2Rvd25JdCgpO1xuXG5leHBvcnQgZGVmYXVsdCAoKTogUG9zdCA9PiB7XG4gICAgY29uc3QgcDogUG9zdCA9IHJlcXVpcmUoXCIvaG9tZS9ydW5uZXIvd29yay9WdWVCbG9nL1Z1ZUJsb2cvc3RhdGljL3RvcGJhci1QUEEubWRcIik7XG5cbiAgICBjb25zdCBib2R5OlN0cmluZyA9IG1kLnJlbmRlcihwLmJvZHkudG9TdHJpbmcoKSk7XG4gICAgY29uc3QgZWxlbWVudDpTdHJpbmdbXSA9IGJvZHkuc3BsaXQoXCJcXG5cIik7XG5cbiAgICBsZXQgcG9zdCA9IG5ldyBQb3N0KCk7XG5cbiAgICBwb3N0LmF0dHJpYnV0ZXMgPSBwLmF0dHJpYnV0ZXM7XG4gICAgLy9UT0RPOiDpgJrov4fphY3nva7mlofku7bpgInmi6nkv53lrZjnmoTmlbDph49cbiAgICBwb3N0LnN1bW1hcnkgPSBlbGVtZW50WzBdO1xuICAgIHBvc3QuYm9keSA9IGJvZHk7XG4gICAgcmV0dXJuIHBvc3Q7XG59IiwiXG5pbXBvcnQgeyBBdHRyaWJ1dGVzLCBQb3N0IH0gZnJvbSBcIi9ob21lL3J1bm5lci93b3JrL1Z1ZUJsb2cvVnVlQmxvZy9zcmMvc3RvcmUvc3RhdGVcIjtcbmltcG9ydCBNYXJrZG93bkl0IGZyb20gXCJtYXJrZG93bi1pdFwiO1xuaW1wb3J0IGZyb250TWF0dGVyIGZyb20gXCJmcm9udC1tYXR0ZXJcIjtcblxuY29uc3QgbWQgPSBuZXcgTWFya2Rvd25JdCgpO1xuXG5leHBvcnQgZGVmYXVsdCAoKTogUG9zdCA9PiB7XG4gICAgY29uc3QgcDogUG9zdCA9IHJlcXVpcmUoXCIvaG9tZS9ydW5uZXIvd29yay9WdWVCbG9nL1Z1ZUJsb2cvc3RhdGljL+aIkeeahOS7o+eQhuaKmOiFvuaWueahiC5tZFwiKTtcblxuICAgIGNvbnN0IGJvZHk6U3RyaW5nID0gbWQucmVuZGVyKHAuYm9keS50b1N0cmluZygpKTtcbiAgICBjb25zdCBlbGVtZW50OlN0cmluZ1tdID0gYm9keS5zcGxpdChcIlxcblwiKTtcblxuICAgIGxldCBwb3N0ID0gbmV3IFBvc3QoKTtcblxuICAgIHBvc3QuYXR0cmlidXRlcyA9IHAuYXR0cmlidXRlcztcbiAgICAvL1RPRE86IOmAmui/h+mFjee9ruaWh+S7tumAieaLqeS/neWtmOeahOaVsOmHj1xuICAgIHBvc3Quc3VtbWFyeSA9IGVsZW1lbnRbMF07XG4gICAgcG9zdC5ib2R5ID0gYm9keTtcbiAgICByZXR1cm4gcG9zdDtcbn0iLCJcbmltcG9ydCB7IEF0dHJpYnV0ZXMsIFBvc3QgfSBmcm9tIFwiL2hvbWUvcnVubmVyL3dvcmsvVnVlQmxvZy9WdWVCbG9nL3NyYy9zdG9yZS9zdGF0ZVwiO1xuaW1wb3J0IE1hcmtkb3duSXQgZnJvbSBcIm1hcmtkb3duLWl0XCI7XG5pbXBvcnQgZnJvbnRNYXR0ZXIgZnJvbSBcImZyb250LW1hdHRlclwiO1xuXG5jb25zdCBtZCA9IG5ldyBNYXJrZG93bkl0KCk7XG5cbmV4cG9ydCBkZWZhdWx0ICgpOiBQb3N0ID0+IHtcbiAgICBjb25zdCBwOiBQb3N0ID0gcmVxdWlyZShcIi9ob21lL3J1bm5lci93b3JrL1Z1ZUJsb2cvVnVlQmxvZy9zdGF0aWMvQy1wbHVzLXBsdXMtSXRlcmF0b3It56yU6K6wLm1kXCIpO1xuXG4gICAgY29uc3QgYm9keTpTdHJpbmcgPSBtZC5yZW5kZXIocC5ib2R5LnRvU3RyaW5nKCkpO1xuICAgIGNvbnN0IGVsZW1lbnQ6U3RyaW5nW10gPSBib2R5LnNwbGl0KFwiXFxuXCIpO1xuXG4gICAgbGV0IHBvc3QgPSBuZXcgUG9zdCgpO1xuXG4gICAgcG9zdC5hdHRyaWJ1dGVzID0gcC5hdHRyaWJ1dGVzO1xuICAgIC8vVE9ETzog6YCa6L+H6YWN572u5paH5Lu26YCJ5oup5L+d5a2Y55qE5pWw6YePXG4gICAgcG9zdC5zdW1tYXJ5ID0gZWxlbWVudFswXTtcbiAgICBwb3N0LmJvZHkgPSBib2R5O1xuICAgIHJldHVybiBwb3N0O1xufSIsIlxuaW1wb3J0IHsgQXR0cmlidXRlcywgUG9zdCB9IGZyb20gXCIvaG9tZS9ydW5uZXIvd29yay9WdWVCbG9nL1Z1ZUJsb2cvc3JjL3N0b3JlL3N0YXRlXCI7XG5pbXBvcnQgTWFya2Rvd25JdCBmcm9tIFwibWFya2Rvd24taXRcIjtcbmltcG9ydCBmcm9udE1hdHRlciBmcm9tIFwiZnJvbnQtbWF0dGVyXCI7XG5cbmNvbnN0IG1kID0gbmV3IE1hcmtkb3duSXQoKTtcblxuZXhwb3J0IGRlZmF1bHQgKCk6IFBvc3QgPT4ge1xuICAgIGNvbnN0IHA6IFBvc3QgPSByZXF1aXJlKFwiL2hvbWUvcnVubmVyL3dvcmsvVnVlQmxvZy9WdWVCbG9nL3N0YXRpYy92dWUtY29tcG9uZW50LXByb3BzLm1kXCIpO1xuXG4gICAgY29uc3QgYm9keTpTdHJpbmcgPSBtZC5yZW5kZXIocC5ib2R5LnRvU3RyaW5nKCkpO1xuICAgIGNvbnN0IGVsZW1lbnQ6U3RyaW5nW10gPSBib2R5LnNwbGl0KFwiXFxuXCIpO1xuXG4gICAgbGV0IHBvc3QgPSBuZXcgUG9zdCgpO1xuXG4gICAgcG9zdC5hdHRyaWJ1dGVzID0gcC5hdHRyaWJ1dGVzO1xuICAgIC8vVE9ETzog6YCa6L+H6YWN572u5paH5Lu26YCJ5oup5L+d5a2Y55qE5pWw6YePXG4gICAgcG9zdC5zdW1tYXJ5ID0gZWxlbWVudFswXTtcbiAgICBwb3N0LmJvZHkgPSBib2R5O1xuICAgIHJldHVybiBwb3N0O1xufSIsIlxuaW1wb3J0IHsgQXR0cmlidXRlcywgUG9zdCB9IGZyb20gXCIvaG9tZS9ydW5uZXIvd29yay9WdWVCbG9nL1Z1ZUJsb2cvc3JjL3N0b3JlL3N0YXRlXCI7XG5pbXBvcnQgTWFya2Rvd25JdCBmcm9tIFwibWFya2Rvd24taXRcIjtcbmltcG9ydCBmcm9udE1hdHRlciBmcm9tIFwiZnJvbnQtbWF0dGVyXCI7XG5cbmNvbnN0IG1kID0gbmV3IE1hcmtkb3duSXQoKTtcblxuZXhwb3J0IGRlZmF1bHQgKCk6IFBvc3QgPT4ge1xuICAgIGNvbnN0IHA6IFBvc3QgPSByZXF1aXJlKFwiL2hvbWUvcnVubmVyL3dvcmsvVnVlQmxvZy9WdWVCbG9nL3N0YXRpYy/lvIDlj5F0b3BiYXLkuK3nmoTmioDmnK/pl67popgubWRcIik7XG5cbiAgICBjb25zdCBib2R5OlN0cmluZyA9IG1kLnJlbmRlcihwLmJvZHkudG9TdHJpbmcoKSk7XG4gICAgY29uc3QgZWxlbWVudDpTdHJpbmdbXSA9IGJvZHkuc3BsaXQoXCJcXG5cIik7XG5cbiAgICBsZXQgcG9zdCA9IG5ldyBQb3N0KCk7XG5cbiAgICBwb3N0LmF0dHJpYnV0ZXMgPSBwLmF0dHJpYnV0ZXM7XG4gICAgLy9UT0RPOiDpgJrov4fphY3nva7mlofku7bpgInmi6nkv53lrZjnmoTmlbDph49cbiAgICBwb3N0LnN1bW1hcnkgPSBlbGVtZW50WzBdO1xuICAgIHBvc3QuYm9keSA9IGJvZHk7XG4gICAgcmV0dXJuIHBvc3Q7XG59IiwiXG5pbXBvcnQgeyBBdHRyaWJ1dGVzLCBQb3N0IH0gZnJvbSBcIi9ob21lL3J1bm5lci93b3JrL1Z1ZUJsb2cvVnVlQmxvZy9zcmMvc3RvcmUvc3RhdGVcIjtcbmltcG9ydCBNYXJrZG93bkl0IGZyb20gXCJtYXJrZG93bi1pdFwiO1xuaW1wb3J0IGZyb250TWF0dGVyIGZyb20gXCJmcm9udC1tYXR0ZXJcIjtcblxuY29uc3QgbWQgPSBuZXcgTWFya2Rvd25JdCgpO1xuXG5leHBvcnQgZGVmYXVsdCAoKTogUG9zdCA9PiB7XG4gICAgY29uc3QgcDogUG9zdCA9IHJlcXVpcmUoXCIvaG9tZS9ydW5uZXIvd29yay9WdWVCbG9nL1Z1ZUJsb2cvc3RhdGljL+S9v+eUqERUS+W8gOWPkS5tZFwiKTtcblxuICAgIGNvbnN0IGJvZHk6U3RyaW5nID0gbWQucmVuZGVyKHAuYm9keS50b1N0cmluZygpKTtcbiAgICBjb25zdCBlbGVtZW50OlN0cmluZ1tdID0gYm9keS5zcGxpdChcIlxcblwiKTtcblxuICAgIGxldCBwb3N0ID0gbmV3IFBvc3QoKTtcblxuICAgIHBvc3QuYXR0cmlidXRlcyA9IHAuYXR0cmlidXRlcztcbiAgICAvL1RPRE86IOmAmui/h+mFjee9ruaWh+S7tumAieaLqeS/neWtmOeahOaVsOmHj1xuICAgIHBvc3Quc3VtbWFyeSA9IGVsZW1lbnRbMF07XG4gICAgcG9zdC5ib2R5ID0gYm9keTtcbiAgICByZXR1cm4gcG9zdDtcbn0iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBtYXJnaW46IDBweCAwcHg7XFxufVxcbiNhcHAge1xcbiAgYmFja2dyb3VuZDogI2VlZTtcXG59XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIjc2l0ZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBtYXJnaW46IDBweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnBvc3Qge1xcbiAgbWFyZ2luOiAwcHggMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbn1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5wb3N0LWJsb2NrIHtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJveC1zaGFkb3c6IDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4wNiksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XFxuICBib3JkZXItcmFkaXVzOiBpbml0aWFsO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIHBhZGRpbmc6IDQwcHg7XFxuICBtYXJnaW46IDBweCAwcHggMTBweCAwcHg7XFxufVxcbi5wb3N0LXRpdGxlIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLnBvc3QtdGl0bGUtbGluayB7XFxuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcXG59XFxuLnBvc3QtbWV0YSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIGNvbG9yOiAjOTk5O1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4ucG9zdC1tZXRhLWRpdmRlciB7XFxuICBtYXJnaW46IDAgMC41ZW07XFxufVxcbi5wb3N0LWJ1dHRvbiB7XFxuICBtYXJnaW4tdG9wOiA0MHB4O1xcbn1cXG4ucG9zdC1idXR0b24gLmJ0biB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgcGFkZGluZzogMCAyMHB4O1xcbiAgICBjb2xvcjogIzU1NTtcXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzU1NTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XFxuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQtY29sb3I7XFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XFxuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcXG4gICAgdHJhbnNpdGlvbi1kZWxheTogMHM7XFxuICAgIGxpbmUtaGVpZ2h0OiAyO1xcbn1cXG4ucG9zdC1idXR0b24gLmJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6ICMyNjJhMzA7XFxuICAgIGNvbG9yOiAjZmZmO1xcbn1cXG4ucG9zdC1zdW1tYXJ5IHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuLnBvc3Qtc3VtbWFyeSBwIHtcXG4gICAgd29yZC1icmVhazogYnJlYWstd29yZDtcXG4gICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xcbiAgICB3aWR0aDogODI4cHg7XFxufVxcbi5wb3N0LXN1bW1hcnkgcHJlIHtcXG4gICAgd2lkdGg6IDgyOHB4O1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG59XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIucG9zdCB7XFxuICBtYXJnaW46IDBweCAxMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxufVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiI3NpdGUtbWV0YSB7XFxuICB3aWR0aDogMjQwcHg7XFxufVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiI3NpdGUtZGVzY3JpcHRpb25bZGF0YS12LTQyMGRmMzU2XSB7XFxuICBib3gtc2hhZG93OiAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMDYpLCAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xcbiAgYm9yZGVyLXJhZGl1czogaW5pdGlhbDtcXG59XFxuI3NpdGUtbWV0YVtkYXRhLXYtNDIwZGYzNTZdIHtcXG4gIGJhY2tncm91bmQ6ICMyMjI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogc3BhY2UtYXJvdW5kO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDIwcHggMDtcXG59XFxuI3NpdGUtdGl0bGVbZGF0YS12LTQyMGRmMzU2XSB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDEwcHggMDtcXG4gIGxpbmUtaGVpZ2h0OiAzNnB4O1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsICdQaW5nRmFuZyBTQycsICdNaWNyb3NvZnQgWWFIZWknLCBzYW5zLXNlcmlmO1xcbn1cXG4jc2l0ZS1zdWJ0aXRsZVtkYXRhLXYtNDIwZGYzNTZdIHtcXG4gIGZvbnQtc2l6ZTogMTNweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtd2VpZ2h0OiBpbml0aWFsO1xcbiAgY29sb3I6ICNkZGQ7XFxufVxcbiNzaXRlLW5hdltkYXRhLXYtNDIwZGYzNTZdIHtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgcGFkZGluZzogMjBweCAwO1xcbn1cXG4jc2l0ZS1uYXYgbGlbZGF0YS12LTQyMGRmMzU2XSB7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxudWxbZGF0YS12LTQyMGRmMzU2XSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwIDA7XFxufVxcbnNpdGUtbWVudVtkYXRhLXYtNDIwZGYzNTZdIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIiNzaXRlLWluZm9bZGF0YS12LTNkYTcyY2I2XSB7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBib3gtc2hhZG93OiAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMDYpLCAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xcbiAgYm9yZGVyLXJhZGl1czogaW5pdGlhbDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBjb2xvcjogIzU1NTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbiNzaXRlLWZyaWVuZFtkYXRhLXYtM2RhNzJjYjZdIHtcXG4gIHBhZGRpbmc6IDIwcHggMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4jdGl0bGVbZGF0YS12LTNkYTcyY2I2XSB7XFxuICBjb2xvcjogIzIyMjtcXG4gIG1hcmdpbjogNXB4O1xcbn1cXG4jZGVzY3JpcHRpb25bZGF0YS12LTNkYTcyY2I2XSB7XFxuICBmb250LXNpemU6IDEzcHg7XFxuICBjb2xvcjogIzk5OTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuI2xpbmtzLXRpdGxlW2RhdGEtdi0zZGE3MmNiNl0ge1xcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcbi5mbGV4LXN0cmV0Y2gtYm90dG9tW2RhdGEtdi0zZGE3MmNiNl0ge1xcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcXG59XFxudWxbZGF0YS12LTNkYTcyY2I2XSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwcHggMHB4IDIwcHggMHB4O1xcbn1cXG51bCBsaVtkYXRhLXYtM2RhNzJjYjZdIHtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGxpbmUtaGVpZ2h0OiAyO1xcbn1cXG51bCBsaSBhW2RhdGEtdi0zZGE3MmNiNl0ge1xcbiAgICAgIGNvbG9yOiAjNTU1O1xcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM5OTk7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgICAgb3V0bGluZTogbm9uZTtcXG59XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJhW2RhdGEtdi05YWQ3NGM1NF0ge1xcbiAgcGFkZGluZzogNXB4IDBweDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQtY29sb3I7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xcbiAgdHJhbnNpdGlvbi1kZWxheTogMHM7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBmb250LXNpemU6IDEzcHg7XFxuICBjb2xvcjogIzU1NTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4ubWVudS1iYWNrZ3JvdW5kW2lzQWN0aXZlPSd0cnVlJ11bZGF0YS12LTlhZDc0YzU0XSB7XFxuICBiYWNrZ3JvdW5kOiAjZjlmOWY5O1xcbn1cXG5hW2RhdGEtdi05YWQ3NGM1NF06aG92ZXIge1xcbiAgYmFja2dyb3VuZDogI2Y5ZjlmOTtcXG59XFxuI21lbnUtbGVmdFtkYXRhLXYtOWFkNzRjNTRdIHtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbjogMHB4IDEwcHg7XFxufVxcbiNtZW51LXRleHRbZGF0YS12LTlhZDc0YzU0XSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbn1cXG4ubWVudS1wb2ludC1hY3RpdmVbaXNBY3RpdmU9J3RydWUnXVtkYXRhLXYtOWFkNzRjNTRdIHtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1pbi13aWR0aDogNnB4O1xcbiAgbWluLWhlaWdodDogNnB4O1xcbiAgbWF4LWhlaWdodDogNnB4O1xcbiAgbWF4LXdpZHRoOiA2cHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBiYWNrZ3JvdW5kOiAjYmJiO1xcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJcblxuXG5cblxuXG5cblxuXG5cblxuXG5pbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcbmltcG9ydCBTaWRlQmFyIGZyb20gJy4vY29tcG9uZW50cy93aWRnZXRzL1NpZGVCYXIudnVlJ1xuXG5leHBvcnQgZGVmYXVsdCBWdWUuZXh0ZW5kKHtcbiAgY29tcG9uZW50czoge1xuICAgIFwic2lkZS1iYXJcIjogU2lkZUJhclxuICB9XG59KVxuIiwiXG5cblxuXG5cblxuXG5pbXBvcnQgVnVlIGZyb20gJ3Z1ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IFZ1ZS5leHRlbmQoe1xuICAgIGRhdGE6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4ge307XG4gICAgfVxufSk7XG4iLCJcblxuXG5cblxuaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXG5pbXBvcnQgUG9zdExpc3QgZnJvbSAnLi4vd2lkZ2V0cy9Qb3N0TGlzdC52dWUnXG5cbmV4cG9ydCBkZWZhdWx0IFZ1ZS5leHRlbmQoe1xuICBkYXRhOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge31cbiAgfSxcbiAgY29tcG9uZW50czoge1xuICAgICdwb3N0JzogUG9zdExpc3RcbiAgfVxufSlcbiIsIlxuXG5cblxuXG5cblxuaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXG5pbXBvcnQgUG9zdEJsb2NrIGZyb20gJy4uL3dpZGdldHMvUG9zdEJsb2NrLnZ1ZSdcbmltcG9ydCB7IFBvc3QsIFBvc3RNZDVBcmd1bWVudCB9IGZyb20gJy4uLy4uL3N0b3JlL3N0YXRlJ1xuaW1wb3J0IHsgUGFnZVBhcmFtcyB9IGZyb20gJy4uL3V0aWxzL3JvdXRlcnBhcmFtcydcbmltcG9ydCB7IGdldFBvc3QgfSBmcm9tICcuLi8uLi9zdG9yZS9nZXR0ZXJzJ1xuXG5leHBvcnQgZGVmYXVsdCBWdWUuZXh0ZW5kKHtcbiAgY29tcG9uZW50czoge1xuICAgICdwb3N0LWJsb2NrJzogUG9zdEJsb2NrXG4gIH0sXG4gIGRhdGE6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICBwb3N0OiB7fVxuICAgIH1cbiAgfSxcbiAgY3JlYXRlZDogZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgcGFyYW1zOiBQYWdlUGFyYW1zID0gbmV3IFBhZ2VQYXJhbXMoKTtcblxuICAgIHBhcmFtcy55ZWFyID0gdGhpcy4kcm91dGVyLmN1cnJlbnRSb3V0ZS5wYXJhbXNbXCJ5ZWFyXCJdO1xuICAgIHBhcmFtcy5tb250aCA9IHRoaXMuJHJvdXRlci5jdXJyZW50Um91dGUucGFyYW1zW1wibW9udGhcIl07XG4gICAgcGFyYW1zLmRheSA9IHRoaXMuJHJvdXRlci5jdXJyZW50Um91dGUucGFyYW1zW1wiZGF5XCJdO1xuICAgIHBhcmFtcy5wb3N0ID0gdGhpcy4kcm91dGVyLmN1cnJlbnRSb3V0ZS5wYXJhbXNbXCJwb3N0XCJdO1xuXG4gICAgbGV0IGFyZ3VtZW50OiBQb3N0TWQ1QXJndW1lbnQgPSB7XG4gICAgICB5ZWFyOiBwYXJhbXMueWVhcixcbiAgICAgIG1vbnRoOiBwYXJhbXMubW9udGgsXG4gICAgICBkYXk6IHBhcmFtcy5kYXksXG4gICAgICB0aXRsZTogcGFyYW1zLnBvc3RcbiAgICB9O1xuXG4gICAgdGhpcy5wb3N0ID0gZ2V0UG9zdCh0aGlzLiRzdG9yZS5zdGF0ZSwgYXJndW1lbnQpIGFzIFBvc3Q7XG4gIH1cbn0pXG4iLCJcblxuXG5cblxuXG5cbmltcG9ydCBWdWUgZnJvbSAndnVlJztcbmltcG9ydCB7IFBhZ2VQYXJhbXMgfSBmcm9tICcuLi91dGlscy9yb3V0ZXJwYXJhbXMnO1xuXG5leHBvcnQgZGVmYXVsdCBWdWUuZXh0ZW5kKHtcbiAgICBkYXRhOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHtcblxuICAgICAgICB9XG4gICAgfSxcbiAgICBtb3VudGVkOiBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gY29uc3QgcGFyYW1zOiBQYWdlUGFyYW1zID0gdGhpcy4kcm91dGVyLmN1cnJlbnRSb3V0ZS5wYXJhbXM7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHBhcmFtcyk7XG4gICAgfVxufSk7XG4iLCJcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5pbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcbmltcG9ydCB7IFBvc3QgfSBmcm9tICcuLi8uLi9zdG9yZS9zdGF0ZSdcbmltcG9ydCAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvanMvZm9udGF3ZXNvbWUnXG5pbXBvcnQgJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL2pzL3NvbGlkJ1xuaW1wb3J0ICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS9qcy9yZWd1bGFyJ1xuaW1wb3J0ICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS9qcy9icmFuZHMnXG5cbmV4cG9ydCBkZWZhdWx0IFZ1ZS5leHRlbmQoe1xuICBwcm9wczoge1xuICAgIHBvc3Q6IHtcbiAgICAgIHR5cGU6IE9iamVjdCBhcyAoKSA9PiBQb3N0LFxuICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIGVuYWJsZVJlYWRNb3JlOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICBkZWZhdWx0OiB0cnVlXG4gICAgfSxcbiAgICB1c2VTdW1tYXJ5OiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICB9XG4gIH0sXG4gIGRhdGE6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICBwb3N0VGl0bGU6IHRoaXMucG9zdC5hdHRyaWJ1dGVzLnRpdGxlLFxuICAgICAgcG9zdERhdGU6IHRoaXMucG9zdC5hdHRyaWJ1dGVzLmRhdGUsXG4gICAgICBsYXN0RWRpdERhdGE6ICcyMDIwLTAxLTAxJ1xuICAgIH1cbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBjYXRlZ29yeTogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gJ+W5tOW6puaAu+e7kydcbiAgICB9LFxuICAgIGNvbW1lbnRzOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiAnMSdcbiAgICB9LFxuICAgIGxpbms6IGZ1bmN0aW9uKCkge1xuICAgICAgY29uc3QgZGF0ZTogRGF0ZSA9IG5ldyBEYXRlKHRoaXMucG9zdERhdGUudG9TdHJpbmcoKSk7XG4gICAgICBjb25zdCB5ZWFyOlN0cmluZyA9IFN0cmluZyhkYXRlLmdldEZ1bGxZZWFyKCkpO1xuICAgICAgY29uc3QgbW9udGg6U3RyaW5nID0gU3RyaW5nKChcIjBcIiArIChkYXRlLmdldE1vbnRoKCkgKyAxKSkuc2xpY2UoLTIpKTtcbiAgICAgIGNvbnN0IGRheTpTdHJpbmcgPSBTdHJpbmcoKFwiMFwiICsgZGF0ZS5nZXREYXRlKCkpLnNsaWNlKC0yKSk7XG4gICAgICBjb25zdCB0aXRsZTpTdHJpbmcgPSB0aGlzLnBvc3RUaXRsZS5yZXBsYWNlKFwiIFwiLCBcIlwiKTtcbiAgICAgIHJldHVybiBgLyR7eWVhcn0vJHttb250aH0vJHtkYXl9LyR7dGl0bGV9YDtcbiAgICB9LFxuICAgIHBvc3RCb2R5OiBmdW5jdGlvbigpOiBTdHJpbmcge1xuICAgICAgcmV0dXJuIHRoaXMudXNlU3VtbWFyeSA/IHRoaXMucG9zdC5zdW1tYXJ5IDogdGhpcy5wb3N0LmJvZHk7XG4gICAgfVxuICB9XG59KVxuIiwiXG5cblxuXG5cblxuXG5cbmltcG9ydCBWdWUgZnJvbSAndnVlJ1xuaW1wb3J0IFBvc3RCbG9jayBmcm9tICcuLi93aWRnZXRzL1Bvc3RCbG9jay52dWUnO1xuaW1wb3J0IHsgUG9zdCB9IGZyb20gXCIuLi8uLi9zdG9yZS9zdGF0ZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBWdWUuZXh0ZW5kKHtcbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIFwicG9zdC1ibG9ja1wiOiBQb3N0QmxvY2tcbiAgICB9LFxuICAgIGRhdGE6IGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCBwb3N0czpBcnJheTxQb3N0PiA9IHRoaXMuJHN0b3JlLnN0YXRlLnBvc3RzO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbGlzdDogcG9zdHMsXG4gICAgICAgICAgICB1c2VTdW1tYXJ5OiB0cnVlLFxuICAgICAgICB9XG4gICAgfVxufSlcbiIsIlxuXG5cblxuXG5cblxuXG5pbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcbmltcG9ydCBTaXRlRGVzY3JpcHRpb24gZnJvbSBcIi4vU2l0ZURlc2NyaXB0aW9uLnZ1ZVwiXG5pbXBvcnQgU2l0ZUluZm8gZnJvbSBcIi4vU2l0ZUluZm8udnVlXCJcbmV4cG9ydCBkZWZhdWx0IFZ1ZS5leHRlbmQoe1xuICBkYXRhOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge31cbiAgfSxcbiAgY29tcG9uZW50czoge1xuICAgIFwic2l0ZS1kZXNjcmlwdGlvblwiOiBTaXRlRGVzY3JpcHRpb24sXG4gICAgXCJzaXRlLWluZm9cIjogU2l0ZUluZm9cbiAgfVxufSlcbiIsIlxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXG5pbXBvcnQgU2l0ZU1lbnUgZnJvbSAnLi9TaXRlTWVudS52dWUnXG5cbmV4cG9ydCBkZWZhdWx0IFZ1ZS5leHRlbmQoe1xuICBjb21wb25lbnRzOiB7XG4gICAgJ3NpdGUtbWVudSc6IFNpdGVNZW51XG4gIH0sXG4gIGRhdGE6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICB0aXRsZTogXCLlsI/nq7kncyBibG9nXCIsXG4gICAgICBzdWJ0aXRsZTogJ+awuOi/nOS4jeimgeWBnOatouaAneiAgycsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7IHRpdGxlOiAnSG9tZScsIGxpbms6ICcvJywgaWNvbjogJ2ZhIGZhLWZ3IGZhLWhvbWUnLCBpc01haW46IHRydWUgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRpdGxlOiAnQWJvdXQnLFxuICAgICAgICAgIGxpbms6ICcvYWJvdXQnLFxuICAgICAgICAgIGljb246ICdmYSBmYS1mdyBmYS11c2VyJyxcbiAgICAgICAgICBpc01haW46IGZhbHNlXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBtZW51QWN0aXZlTGlzdDogW11cbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBlbnRlcjogZnVuY3Rpb24oaW5kZXg6IHN0cmluZykge30sXG4gICAgb25Nb3VzZUxlYXZlOiBmdW5jdGlvbihpbmRleDogc3RyaW5nKSB7fVxuICB9XG59KVxuIiwiXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbmltcG9ydCBWdWUgZnJvbSAndnVlJ1xuaW1wb3J0ICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS9qcy9mb250YXdlc29tZSdcbmltcG9ydCAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvanMvc29saWQnXG5pbXBvcnQgJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL2pzL3JlZ3VsYXInXG5pbXBvcnQgJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL2pzL2JyYW5kcydcblxuZXhwb3J0IGRlZmF1bHQgVnVlLmV4dGVuZCh7XG4gIGRhdGE6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICB0aXRsZTogXCLlsI/nq7kncyBibG9nXCIsXG4gICAgICBkZXNjcmlwdGlvbjogJ+awuOi/nOS4jeimgeWBnOatouaAneiAgycsXG4gICAgICBsaW5rczogW1xuICAgICAgICB7IHVybDogJ2h0dHA6Ly9iYWlkdS5jb20nLCB0aXRsZTogJ01pb3RvJyB9LFxuICAgICAgICB7IHVybDogJ2h0dHA6Ly9iYWlkdS5jb20nLCB0aXRsZTogJ2h1YWxldCcgfVxuICAgICAgXVxuICAgIH1cbiAgfVxufSlcbiIsIlxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5pbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcbmltcG9ydCAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvanMvZm9udGF3ZXNvbWUnXG5pbXBvcnQgJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL2pzL3NvbGlkJ1xuaW1wb3J0ICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS9qcy9yZWd1bGFyJ1xuaW1wb3J0ICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS9qcy9icmFuZHMnXG5cbmV4cG9ydCBkZWZhdWx0IFZ1ZS5leHRlbmQoe1xuICBwcm9wczoge1xuICAgIGxpbms6IFN0cmluZyxcbiAgICBpY29uOiBTdHJpbmcsXG4gICAgdGl0bGU6IFN0cmluZyxcbiAgICBpc01haW46IEJvb2xlYW5cbiAgfSxcbiAgZGF0YTogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFjdGl2ZTogZmFsc2VcbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBvbk1vdXNlRW50ZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5hY3RpdmUgPSB0cnVlXG4gICAgfSxcbiAgICBvbk1vdXNlTGVhdmU6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5hY3RpdmUgPSB0aGlzLmlzTWFpblxuICAgIH1cbiAgfSxcbiAgYmVmb3JlTW91bnQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuYWN0aXZlID0gdGhpcy5pc01haW47XG4gIH1cbn0pXG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgYXR0cnM6IHsgaWQ6IFwiYXBwXCIgfSB9LCBbXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBhdHRyczogeyBpZDogXCJzaXRlXCIgfSB9LFxuICAgICAgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IGF0dHJzOiB7IGlkOiBcInNpdGUtc2lkZVwiIH0gfSwgW19jKFwic2lkZS1iYXJcIildLCAxKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJyb3V0ZXItdmlld1wiKVxuICAgICAgXSxcbiAgICAgIDFcbiAgICApXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCBbX3ZtLl92KFwiXFxuICAgIERlc2lnbiBieSBqdXN0Zm9ybHh6IVxcblwiKV0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcInBvc3RcIilcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJwb3N0XCIgfSxcbiAgICBbX2MoXCJwb3N0LWJsb2NrXCIsIHsgYXR0cnM6IHsgcG9zdDogX3ZtLnBvc3QsIGVuYWJsZVJlYWRNb3JlOiBmYWxzZSB9IH0pXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIpXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInBvc3QtYmxvY2tcIiB9LCBbXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJwb3N0LWhlYWRlclwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicG9zdC10aXRsZVwiIH0sIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJoMVwiLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicG9zdC10aXRsZS1saW5rXCIsIGF0dHJzOiB7IHRvOiBfdm0ubGluayB9IH0sXG4gICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS5wb3N0VGl0bGUpKV1cbiAgICAgICAgICAgIClcbiAgICAgICAgICBdLFxuICAgICAgICAgIDFcbiAgICAgICAgKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJwb3N0LW1ldGFcIiB9LCBbXG4gICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInBvc3QtdGltZVwiIH0sIFtcbiAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJwb3N0LW1ldGEtaXRlbS1pY29uIGZhIGZhLWNhbGVuZGFyLW9cIiB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInBvc3QtbWV0YS1pdGVtLXRleHRcIiB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgICAgUG9zdGVkIG9uXFxuICAgICAgICBcIilcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwidGltZVwiLCBbX3ZtLl92KF92bS5fcyhfdm0ucG9zdERhdGUpKV0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJwb3N0LWNhdGVnb3J5XCIgfSwgW1xuICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInBvc3QtbWV0YS1kaXZkZXJcIiB9LCBbX3ZtLl92KFwifFwiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwicG9zdC1tZXRhLWl0ZW0taWNvbiBmYSBmYS1mb2xkZXItb1wiIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwicG9zdC1tZXRhLWl0ZW0tdGV4dFwiIH0sIFtfdm0uX3YoXCJpblwiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiYm90dG9tbGluZVwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiYVwiLCB7IGF0dHJzOiB7IGhyZWY6IFwiXCIgfSB9LCBbX3ZtLl92KF92bS5fcyhfdm0uY2F0ZWdvcnkpKV0pXG4gICAgICAgICAgXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInBvc3QtY29tbWVudHMtY291bnRcIiB9LCBbXG4gICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwicG9zdC1tZXRhLWRpdmRlclwiIH0sIFtfdm0uX3YoXCJ8XCIpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJwb3N0LW1ldGEtaXRlbS1pY29uIGZhIGZhLWNvbW1lbnQtb1wiIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwicG9zdC1tZXRhLWl0ZW0tdGV4dFwiIH0sIFtcbiAgICAgICAgICAgIF92bS5fdihcIkNvbW1lbnRzOlwiKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiYm90dG9tbGluZVwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiYVwiLCB7IGF0dHJzOiB7IGhyZWY6IFwiXCIgfSB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmNvbW1lbnRzKSArIFwiIENvbW1lbnRcIilcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICAgIF0pXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImRpdlwiLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJwb3N0LXN1bW1hcnlcIixcbiAgICAgIGRvbVByb3BzOiB7IGlubmVySFRNTDogX3ZtLl9zKF92bS5wb3N0Qm9keSkgfVxuICAgIH0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX3ZtLmVuYWJsZVJlYWRNb3JlXG4gICAgICA/IF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJwb3N0LWJ1dHRvblwiIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXCJyb3V0ZXItbGlua1wiLCB7IHN0YXRpY0NsYXNzOiBcImJ0blwiLCBhdHRyczogeyB0bzogX3ZtLmxpbmsgfSB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihcIlJlYWQgbW9yZSDCu1wiKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdLFxuICAgICAgICAgIDFcbiAgICAgICAgKVxuICAgICAgOiBfdm0uX2UoKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcInBvc3RcIiB9LFxuICAgIF92bS5fbChfdm0ubGlzdCwgZnVuY3Rpb24ocG9zdCkge1xuICAgICAgcmV0dXJuIF9jKFwicG9zdC1ibG9ja1wiLCB7XG4gICAgICAgIGtleTogcG9zdC5pZCxcbiAgICAgICAgYXR0cnM6IHsgdXNlU3VtbWFyeTogX3ZtLnVzZVN1bW1hcnksIHBvc3Q6IHBvc3QsIGVuYWJsZVJlYWRNb3JlOiB0cnVlIH1cbiAgICAgIH0pXG4gICAgfSksXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgYXR0cnM6IHsgaWQ6IFwic2l0ZS1tZXRhXCIgfSB9LFxuICAgIFtfYyhcInNpdGUtZGVzY3JpcHRpb25cIiksIF92bS5fdihcIiBcIiksIF9jKFwic2l0ZS1pbmZvXCIpXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgYXR0cnM6IHsgaWQ6IFwic2l0ZS1kZXNjcmlwdGlvblwiIH0gfSwgW1xuICAgIF9jKFwiZGl2XCIsIHsgYXR0cnM6IHsgaWQ6IFwic2l0ZS1tZXRhXCIgfSB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IGF0dHJzOiB7IGlkOiBcInNpdGUtdGl0bGVcIiB9IH0sIFtfdm0uX3YoX3ZtLl9zKF92bS50aXRsZSkpXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBhdHRyczogeyBpZDogXCJzaXRlLXN1YnRpdGxlXCIgfSB9LCBbXG4gICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLnN1YnRpdGxlKSlcbiAgICAgIF0pXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImRpdlwiLCB7IGF0dHJzOiB7IGlkOiBcInNpdGUtbmF2XCIgfSB9LCBbXG4gICAgICBfYyhcbiAgICAgICAgXCJ1bFwiLFxuICAgICAgICBfdm0uX2woX3ZtLml0ZW1zLCBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgXCJsaVwiLFxuICAgICAgICAgICAgeyBrZXk6IGl0ZW0ubGluayB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInNpdGUtbWVudVwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIGhyZWY6IGl0ZW0ubGluayxcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiBpdGVtLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgaWNvbjogaXRlbS5pY29uLFxuICAgICAgICAgICAgICAgICAgaXNNYWluOiBpdGVtLmlzTWFpblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICB9KSxcbiAgICAgICAgMFxuICAgICAgKVxuICAgIF0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IGF0dHJzOiB7IGlkOiBcInNpdGUtaW5mb1wiIH0gfSwgW1xuICAgIF9jKFwiZGl2XCIsIHsgYXR0cnM6IHsgaWQ6IFwic2l0ZS1mcmllbmRcIiB9IH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1hbGlnbi1jZW50ZXJcIiwgYXR0cnM6IHsgaWQ6IFwidGl0bGVcIiB9IH0sIFtcbiAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0udGl0bGUpKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1hbGlnbi1jZW50ZXJcIiwgYXR0cnM6IHsgaWQ6IFwiZGVzY3JpcHRpb25cIiB9IH0sXG4gICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS5kZXNjcmlwdGlvbikpXVxuICAgICAgKVxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJkaXZcIiwgeyBhdHRyczogeyBpZDogXCJsaW5rc1wiIH0gfSwgW1xuICAgICAgX3ZtLl9tKDApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcInVsXCIsXG4gICAgICAgIF92bS5fbChfdm0ubGlua3MsIGZ1bmN0aW9uKGxpbmssIGluZGV4KSB7XG4gICAgICAgICAgcmV0dXJuIF9jKFwibGlcIiwgeyBrZXk6IGluZGV4IH0sIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRleHQtYWxpZ24tY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIGhyZWY6IGxpbmsudXJsLFxuICAgICAgICAgICAgICAgICAgdGl0bGU6IGxpbmsudGl0bGUsXG4gICAgICAgICAgICAgICAgICByZWw6IFwibm9vcGVuZXJcIixcbiAgICAgICAgICAgICAgICAgIHRhcmdldDogXCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MobGluay50aXRsZSkpXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pXG4gICAgICAgIH0pLFxuICAgICAgICAwXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImZsZXgtc3RyZXRjaC1ib3R0b21cIiB9KVxuICAgIF0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxpbmtzLXRpdGxlXCIgfSwgW1xuICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmEgZmEtZncgZmEtbGlua1wiIH0pLFxuICAgICAgX3ZtLl92KFwiXFxuICAgICAgTGlua3M6XFxuICAgIFwiKVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImFcIixcbiAgICB7XG4gICAgICBzdGF0aWNDbGFzczogXCJtZW51LWJhY2tncm91bmRcIixcbiAgICAgIGF0dHJzOiB7IGhyZWY6IF92bS5saW5rLCBpc0FjdGl2ZTogX3ZtLmlzTWFpbiB9LFxuICAgICAgb246IHsgbW91c2VlbnRlcjogX3ZtLm9uTW91c2VFbnRlciwgbW91c2VsZWF2ZTogX3ZtLm9uTW91c2VMZWF2ZSB9XG4gICAgfSxcbiAgICBbXG4gICAgICBfYyhcInNwYW5cIiwgeyBjbGFzczogX3ZtLmljb24sIGF0dHJzOiB7IGlkOiBcIm1lbnUtbGVmdFwiIH0gfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJzcGFuXCIsIHsgYXR0cnM6IHsgaWQ6IFwibWVudS1jZW50ZXJcIiB9IH0sIFtfdm0uX3YoX3ZtLl9zKF92bS50aXRsZSkpXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJzcGFuXCIsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwibWVudS1wb2ludC1hY3RpdmVcIixcbiAgICAgICAgYXR0cnM6IHsgaXNBY3RpdmU6IF92bS5hY3RpdmUgfVxuICAgICAgfSlcbiAgICBdXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2FwcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZyZWw9c3R5bGVzaGVldCUyRnNjc3MmbGFuZz1zY3NzJlwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCIzNmQxNGM4ZVwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2FwcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZyZWw9c3R5bGVzaGVldCUyRnNjc3MmbGFuZz1zY3NzJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYXBwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJnJlbD1zdHlsZXNoZWV0JTJGc2NzcyZsYW5nPXNjc3MmXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJnJlbD1zdHlsZXNoZWV0JTJGc2NzcyZsYW5nPXNjc3Mmc2NvcGU9dHJ1ZSZcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiM2NlNzU1ZTJcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9JbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZyZWw9c3R5bGVzaGVldCUyRnNjc3MmbGFuZz1zY3NzJnNjb3BlPXRydWUmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9JbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZyZWw9c3R5bGVzaGVldCUyRnNjc3MmbGFuZz1zY3NzJnNjb3BlPXRydWUmXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Bvc3REZXRhaWwudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmcmVsPXN0eWxlc2hlZXQlMkZzY3NzJmxhbmc9c2NzcyZcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiM2Y3MWM4NTZcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Qb3N0RGV0YWlsLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJnJlbD1zdHlsZXNoZWV0JTJGc2NzcyZsYW5nPXNjc3MmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Qb3N0RGV0YWlsLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJnJlbD1zdHlsZXNoZWV0JTJGc2NzcyZsYW5nPXNjc3MmXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Bvc3RCbG9jay52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZyZWw9c3R5bGVzaGVldCUyRnNjc3MmbGFuZz1zY3NzJlwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCJiNDBhYTJjMFwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Bvc3RCbG9jay52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZyZWw9c3R5bGVzaGVldCUyRnNjc3MmbGFuZz1zY3NzJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUG9zdEJsb2NrLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJnJlbD1zdHlsZXNoZWV0JTJGc2NzcyZsYW5nPXNjc3MmXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Bvc3RMaXN0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJnJlbD1zdHlsZXNoZWV0JTJGc2NzcyZsYW5nPXNjc3MmXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcImZlZjhhZTM4XCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUG9zdExpc3QudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmcmVsPXN0eWxlc2hlZXQlMkZzY3NzJmxhbmc9c2NzcyZcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Bvc3RMaXN0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJnJlbD1zdHlsZXNoZWV0JTJGc2NzcyZsYW5nPXNjc3MmXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NpZGVCYXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmcmVsPXN0eWxlc2hlZXQlMkZzY3NzJmxhbmc9c2NzcyZzY29wZT10cnVlJlwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCIzM2JiOGM2MVwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NpZGVCYXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmcmVsPXN0eWxlc2hlZXQlMkZzY3NzJmxhbmc9c2NzcyZzY29wZT10cnVlJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2lkZUJhci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZyZWw9c3R5bGVzaGVldCUyRnNjc3MmbGFuZz1zY3NzJnNjb3BlPXRydWUmXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NpdGVEZXNjcmlwdGlvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD00MjBkZjM1NiZyZWw9c3R5bGVzaGVldCUyRnNjc3MmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCIxYzViNjA5ZVwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NpdGVEZXNjcmlwdGlvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD00MjBkZjM1NiZyZWw9c3R5bGVzaGVldCUyRnNjc3MmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2l0ZURlc2NyaXB0aW9uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTQyMGRmMzU2JnJlbD1zdHlsZXNoZWV0JTJGc2NzcyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NpdGVJbmZvLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTNkYTcyY2I2JnJlbD1zdHlsZXNoZWV0JTJGc2NzcyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcImI4ZWEzMDE2XCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2l0ZUluZm8udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9M2RhNzJjYjYmcmVsPXN0eWxlc2hlZXQlMkZzY3NzJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NpdGVJbmZvLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTNkYTcyY2I2JnJlbD1zdHlsZXNoZWV0JTJGc2NzcyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NpdGVNZW51LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTlhZDc0YzU0JnJlbD1zdHlsZXNoZWV0JTJGc2NzcyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjIxNzlhMDRjXCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2l0ZU1lbnUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9OWFkNzRjNTQmcmVsPXN0eWxlc2hlZXQlMkZzY3NzJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NpdGVNZW51LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTlhZDc0YzU0JnJlbD1zdHlsZXNoZWV0JTJGc2NzcyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2FwcC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NWVmNDg5NTgmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vYXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vYXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9hcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmcmVsPXN0eWxlc2hlZXQlMkZzY3NzJmxhbmc9c2NzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL2hvbWUvcnVubmVyL3dvcmsvVnVlQmxvZy9WdWVCbG9nL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzVlZjQ4OTU4JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzVlZjQ4OTU4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzVlZjQ4OTU4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9hcHAudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTVlZjQ4OTU4JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzVlZjQ4OTU4Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvYXBwLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTIhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9hcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYXBwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJnJlbD1zdHlsZXNoZWV0JTJGc2NzcyZsYW5nPXNjc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2FwcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZyZWw9c3R5bGVzaGVldCUyRnNjc3MmbGFuZz1zY3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2FwcC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NWVmNDg5NTgmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0Fib3V0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xMzU5ZWFmYyZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9BYm91dC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0Fib3V0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL2hvbWUvcnVubmVyL3dvcmsvVnVlQmxvZy9WdWVCbG9nL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzEzNTllYWZjJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzEzNTllYWZjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzEzNTllYWZjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9BYm91dC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTM1OWVhZmMmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMTM1OWVhZmMnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy9jb21wb25lbnRzL3BhZ2VzL0Fib3V0LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQWJvdXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Fib3V0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BYm91dC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTM1OWVhZmMmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xNjBhZTU0NyZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9JbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9JbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZyZWw9c3R5bGVzaGVldCUyRnNjc3MmbGFuZz1zY3NzJnNjb3BlPXRydWUmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9ob21lL3J1bm5lci93b3JrL1Z1ZUJsb2cvVnVlQmxvZy9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcxNjBhZTU0NycpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcxNjBhZTU0NycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcxNjBhZTU0NycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vSW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE2MGFlNTQ3JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzE2MGFlNTQ3Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvY29tcG9uZW50cy9wYWdlcy9JbmRleC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9JbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9JbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZyZWw9c3R5bGVzaGVldCUyRnNjc3MmbGFuZz1zY3NzJnNjb3BlPXRydWUmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJnJlbD1zdHlsZXNoZWV0JTJGc2NzcyZsYW5nPXNjc3Mmc2NvcGU9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9JbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTYwYWU1NDcmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1Bvc3REZXRhaWwudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTAzMjYzMzI4JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1Bvc3REZXRhaWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Qb3N0RGV0YWlsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9Qb3N0RGV0YWlsLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJnJlbD1zdHlsZXNoZWV0JTJGc2NzcyZsYW5nPXNjc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9ob21lL3J1bm5lci93b3JrL1Z1ZUJsb2cvVnVlQmxvZy9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcwMzI2MzMyOCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcwMzI2MzMyOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcwMzI2MzMyOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vUG9zdERldGFpbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDMyNjMzMjgmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMDMyNjMzMjgnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy9jb21wb25lbnRzL3BhZ2VzL1Bvc3REZXRhaWwudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Qb3N0RGV0YWlsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Qb3N0RGV0YWlsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Bvc3REZXRhaWwudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmcmVsPXN0eWxlc2hlZXQlMkZzY3NzJmxhbmc9c2NzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUG9zdERldGFpbC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZyZWw9c3R5bGVzaGVldCUyRnNjc3MmbGFuZz1zY3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Bvc3REZXRhaWwudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTAzMjYzMzI4JlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9ZZWFyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1kNDMyN2M1MCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9ZZWFyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vWWVhci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9ob21lL3J1bm5lci93b3JrL1Z1ZUJsb2cvVnVlQmxvZy9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdkNDMyN2M1MCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdkNDMyN2M1MCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdkNDMyN2M1MCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vWWVhci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZDQzMjdjNTAmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignZDQzMjdjNTAnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy9jb21wb25lbnRzL3BhZ2VzL1llYXIudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9ZZWFyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9ZZWFyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9ZZWFyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1kNDMyN2M1MCZcIiIsImV4cG9ydCBjbGFzcyBQYWdlUGFyYW1zIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy55ZWFyID0gXCJcIjtcbiAgICAgICAgdGhpcy5tb250aCA9IFwiXCI7XG4gICAgICAgIHRoaXMuZGF5ID0gXCJcIjtcbiAgICAgICAgdGhpcy5wb3N0ID0gXCJcIjtcbiAgICB9XG5cbiAgICBwdWJsaWMgeWVhcjogU3RyaW5nO1xuICAgIHB1YmxpYyBtb250aDogU3RyaW5nO1xuICAgIHB1YmxpYyBkYXk6IFN0cmluZztcbiAgICBwdWJsaWMgcG9zdDogU3RyaW5nO1xufTtcbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vUG9zdEJsb2NrLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00ZmExZjVlZCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Qb3N0QmxvY2sudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Qb3N0QmxvY2sudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL1Bvc3RCbG9jay52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZyZWw9c3R5bGVzaGVldCUyRnNjc3MmbGFuZz1zY3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvaG9tZS9ydW5uZXIvd29yay9WdWVCbG9nL1Z1ZUJsb2cvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNGZhMWY1ZWQnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNGZhMWY1ZWQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNGZhMWY1ZWQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1Bvc3RCbG9jay52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NGZhMWY1ZWQmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNGZhMWY1ZWQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy9jb21wb25lbnRzL3dpZGdldHMvUG9zdEJsb2NrLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUG9zdEJsb2NrLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Qb3N0QmxvY2sudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUG9zdEJsb2NrLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJnJlbD1zdHlsZXNoZWV0JTJGc2NzcyZsYW5nPXNjc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Bvc3RCbG9jay52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZyZWw9c3R5bGVzaGVldCUyRnNjc3MmbGFuZz1zY3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Bvc3RCbG9jay52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NGZhMWY1ZWQmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1Bvc3RMaXN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00OGM2OGRlZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Qb3N0TGlzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1Bvc3RMaXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9Qb3N0TGlzdC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZyZWw9c3R5bGVzaGVldCUyRnNjc3MmbGFuZz1zY3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvaG9tZS9ydW5uZXIvd29yay9WdWVCbG9nL1Z1ZUJsb2cvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNDhjNjhkZWUnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNDhjNjhkZWUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNDhjNjhkZWUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1Bvc3RMaXN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00OGM2OGRlZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc0OGM2OGRlZScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL2NvbXBvbmVudHMvd2lkZ2V0cy9Qb3N0TGlzdC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Bvc3RMaXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Qb3N0TGlzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Qb3N0TGlzdC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZyZWw9c3R5bGVzaGVldCUyRnNjc3MmbGFuZz1zY3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Qb3N0TGlzdC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZyZWw9c3R5bGVzaGVldCUyRnNjc3MmbGFuZz1zY3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Bvc3RMaXN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00OGM2OGRlZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vU2lkZUJhci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzJjYzdiZGMmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vU2lkZUJhci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1NpZGVCYXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL1NpZGVCYXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmcmVsPXN0eWxlc2hlZXQlMkZzY3NzJmxhbmc9c2NzcyZzY29wZT10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvaG9tZS9ydW5uZXIvd29yay9WdWVCbG9nL1Z1ZUJsb2cvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMzJjYzdiZGMnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMzJjYzdiZGMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMzJjYzdiZGMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1NpZGVCYXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTMyY2M3YmRjJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzMyY2M3YmRjJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvY29tcG9uZW50cy93aWRnZXRzL1NpZGVCYXIudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TaWRlQmFyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TaWRlQmFyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NpZGVCYXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmcmVsPXN0eWxlc2hlZXQlMkZzY3NzJmxhbmc9c2NzcyZzY29wZT10cnVlJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TaWRlQmFyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJnJlbD1zdHlsZXNoZWV0JTJGc2NzcyZsYW5nPXNjc3Mmc2NvcGU9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TaWRlQmFyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zMmNjN2JkYyZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vU2l0ZURlc2NyaXB0aW9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00MjBkZjM1NiZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9TaXRlRGVzY3JpcHRpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9TaXRlRGVzY3JpcHRpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL1NpdGVEZXNjcmlwdGlvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD00MjBkZjM1NiZyZWw9c3R5bGVzaGVldCUyRnNjc3MmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI0MjBkZjM1NlwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9ob21lL3J1bm5lci93b3JrL1Z1ZUJsb2cvVnVlQmxvZy9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc0MjBkZjM1NicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc0MjBkZjM1NicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc0MjBkZjM1NicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vU2l0ZURlc2NyaXB0aW9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00MjBkZjM1NiZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc0MjBkZjM1NicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL2NvbXBvbmVudHMvd2lkZ2V0cy9TaXRlRGVzY3JpcHRpb24udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TaXRlRGVzY3JpcHRpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NpdGVEZXNjcmlwdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TaXRlRGVzY3JpcHRpb24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NDIwZGYzNTYmcmVsPXN0eWxlc2hlZXQlMkZzY3NzJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2l0ZURlc2NyaXB0aW9uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTQyMGRmMzU2JnJlbD1zdHlsZXNoZWV0JTJGc2NzcyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2l0ZURlc2NyaXB0aW9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00MjBkZjM1NiZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vU2l0ZUluZm8udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTNkYTcyY2I2JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1NpdGVJbmZvLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vU2l0ZUluZm8udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL1NpdGVJbmZvLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTNkYTcyY2I2JnJlbD1zdHlsZXNoZWV0JTJGc2NzcyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjNkYTcyY2I2XCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL2hvbWUvcnVubmVyL3dvcmsvVnVlQmxvZy9WdWVCbG9nL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzNkYTcyY2I2JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzNkYTcyY2I2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzNkYTcyY2I2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9TaXRlSW5mby52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9M2RhNzJjYjYmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignM2RhNzJjYjYnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy9jb21wb25lbnRzL3dpZGdldHMvU2l0ZUluZm8udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TaXRlSW5mby52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2l0ZUluZm8udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2l0ZUluZm8udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9M2RhNzJjYjYmcmVsPXN0eWxlc2hlZXQlMkZzY3NzJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2l0ZUluZm8udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9M2RhNzJjYjYmcmVsPXN0eWxlc2hlZXQlMkZzY3NzJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TaXRlSW5mby52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9M2RhNzJjYjYmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1NpdGVNZW51LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD05YWQ3NGM1NCZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9TaXRlTWVudS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1NpdGVNZW51LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9TaXRlTWVudS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD05YWQ3NGM1NCZyZWw9c3R5bGVzaGVldCUyRnNjc3MmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI5YWQ3NGM1NFwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9ob21lL3J1bm5lci93b3JrL1Z1ZUJsb2cvVnVlQmxvZy9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc5YWQ3NGM1NCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc5YWQ3NGM1NCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc5YWQ3NGM1NCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vU2l0ZU1lbnUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTlhZDc0YzU0JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzlhZDc0YzU0Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvY29tcG9uZW50cy93aWRnZXRzL1NpdGVNZW51LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2l0ZU1lbnUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NpdGVNZW51LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NpdGVNZW51LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTlhZDc0YzU0JnJlbD1zdHlsZXNoZWV0JTJGc2NzcyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NpdGVNZW51LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTlhZDc0YzU0JnJlbD1zdHlsZXNoZWV0JTJGc2NzcyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2l0ZU1lbnUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTlhZDc0YzU0JnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IFZ1ZSBmcm9tICd2dWUnO1xuaW1wb3J0IEFwcCBmcm9tICcuL2FwcC52dWUnO1xuaW1wb3J0IHJvdXRlciBmcm9tICcuL3JvdXRlcidcbmltcG9ydCBzdG9yZSBmcm9tICcuL3N0b3JlL3N0b3JlJ1xuXG5WdWUuY29uZmlnLnByb2R1Y3Rpb25UaXAgPSBmYWxzZTtcblxubmV3IFZ1ZSh7XG4gIHJlbmRlcjogKGgpID0+IGgoQXBwKSxcbiAgcm91dGVyLFxuICBzdG9yZSxcbn0pLiRtb3VudCgnI2FwcCcpO1xuIiwiaW1wb3J0IFZ1ZSBmcm9tICd2dWUnO1xuaW1wb3J0IHsgUm91dGUgfSBmcm9tICd2dWUtcm91dGVyJztcbmltcG9ydCBSb3V0ZXIgZnJvbSAndnVlLXJvdXRlcic7XG5pbXBvcnQgSW5kZXggZnJvbSAnLi9jb21wb25lbnRzL3BhZ2VzL0luZGV4LnZ1ZSdcbmltcG9ydCBBYm91dCBmcm9tICcuL2NvbXBvbmVudHMvcGFnZXMvQWJvdXQudnVlJ1xuaW1wb3J0IFllYXIgZnJvbSAnLi9jb21wb25lbnRzL3BhZ2VzL1llYXIudnVlJ1xuaW1wb3J0IFBvc3REZXRhaWwgZnJvbSAnLi9jb21wb25lbnRzL3BhZ2VzL1Bvc3REZXRhaWwudnVlJ1xuXG5WdWUudXNlKFJvdXRlcik7XG5cbnR5cGUgUG9zaXRpb24gPSB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH1cbnR5cGUgUG9zaXRpb25SZXN1bHQgPSBQb3NpdGlvbiB8IHsgc2VsZWN0b3I6IHN0cmluZzsgb2Zmc2V0PzogUG9zaXRpb24gfSB8IHZvaWRcblxuY29uc3Qgc2Nyb2xsQmVoYXZpb3IgPSAoXG4gIHRvOiBSb3V0ZSxcbiAgZnJvbTogUm91dGUsXG4gIHNhdmVkUG9zaXRpb246IFBvc2l0aW9uIHwgdm9pZFxuKTogUG9zaXRpb25SZXN1bHQgfCBQcm9taXNlPFBvc2l0aW9uUmVzdWx0PiB8IHVuZGVmaW5lZCB8IG51bGwgPT4ge1xuICByZXR1cm4gKHNhdmVkUG9zaXRpb24gJiYgdG8ubWV0YVtcImtlZXBBbGl2ZVwiXSkgPyBzYXZlZFBvc2l0aW9uIDogeyB4OiAwLCB5OiAwfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFJvdXRlcih7XG4gIG1vZGU6ICdoYXNoJyxcbiAgYmFzZTogcHJvY2Vzcy5lbnYuQkFTRV9VUkwsXG4gIHJvdXRlczogW1xuICAgIHtwYXRoOiAnLycsIGNvbXBvbmVudDogSW5kZXh9LFxuICAgIHtwYXRoOiBcIi86eWVhclwiLCBjb21wb25lbnQ6IFllYXJ9LFxuICAgIHtwYXRoOiBcIi86eWVhci86bW9udGhcIiwgY29tcG9uZW50OiBJbmRleH0sXG4gICAge3BhdGg6IFwiLzp5ZWFyLzptb250aC86ZGF5XCIsIGNvbXBvbmVudDogSW5kZXh9LFxuICAgIHtwYXRoOiBcIi86eWVhci86bW9udGgvOmRheS86cG9zdFwiLCBjb21wb25lbnQ6IFBvc3REZXRhaWx9LFxuICAgIHtwYXRoOiBcIi9hYm91dFwiLCBjb21wb25lbnQ6IEFib3V0fSxcbiAgICB7cGF0aDogXCIqXCIsIHJlZGlyZWN0OiAnLyd9XG4gIF0sXG4gIHNjcm9sbEJlaGF2aW9yOiBzY3JvbGxCZWhhdmlvcixcbn0pO1xuIiwiaW1wb3J0IHsgR2V0dGVyVHJlZSwgR2V0dGVyIH0gZnJvbSAndnVleCdcbmltcG9ydCB7IFBvc3QsIFN0YXRlLCBQb3N0TWQ1QXJndW1lbnQgfSBmcm9tICcuL3N0YXRlJ1xuaW1wb3J0IG1kNSBmcm9tICdtZDUnXG5pbXBvcnQgeyBtYXJrZG93bnMgfSBmcm9tIFwiQGRpc3QvbWFya2Rvd24taW5jbHVkZVwiO1xuXG5mb3IgKGxldCBbaywgdl0gb2YgbWFya2Rvd25zKSB7XG4gIHYudGhlbihtb2R1bGUgPT4ge1xuICAgIGNvbnN0IHA6IFBvc3QgPSBtb2R1bGUuZGVmYXVsdDtcbiAgICBjb25zb2xlLmxvZyhwLmJvZHkpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBvc3Qocm9vdFN0YXRlOiBTdGF0ZSwgcG9zdEFyZ3VtZW50OiBQb3N0TWQ1QXJndW1lbnQpOiBQb3N0IHwgdW5kZWZpbmVkIHtcbiAgY29uc3QgaDogc3RyaW5nID0gYCR7cG9zdEFyZ3VtZW50LnllYXJ9JHtwb3N0QXJndW1lbnQubW9udGh9JHtwb3N0QXJndW1lbnQuZGF5fSR7cG9zdEFyZ3VtZW50LnRpdGxlfWBcbiAgY29uc3QgaGFzaDogU3RyaW5nID0gbWQ1KGgpXG4gIHJldHVybiByb290U3RhdGUuY2FjaGUuZ2V0KGhhc2gpXG59XG5cbmV4cG9ydCBjb25zdCBnZXR0ZXJzID0ge1xuXG59XG4iLCJpbXBvcnQgeyBNdXRhdGlvblRyZWUgfSBmcm9tICd2dWV4J1xuaW1wb3J0IHsgUG9zdCwgU3RhdGUgfSBmcm9tICcuL3N0YXRlJ1xuaW1wb3J0IG1kNSBmcm9tICdtZDUnO1xuXG5leHBvcnQgY29uc3QgbXV0YXRpb25zOiBNdXRhdGlvblRyZWU8U3RhdGU+ID0ge1xuICAgIGFkZFBvc3Qoc3RhdGU6IFN0YXRlLCBwb3N0OiBBcnJheTxQb3N0Pikge1xuICAgICAgICBzdGF0ZS5wb3N0cyA9IHBvc3Q7XG4gICAgICAgIHBvc3QuZm9yRWFjaCgodmFsdWU6IFBvc3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGU6IERhdGUgPSBuZXcgRGF0ZSh2YWx1ZS5hdHRyaWJ1dGVzLmRhdGUudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICBjb25zdCB5ZWFyOlN0cmluZyA9IFN0cmluZyhkYXRlLmdldEZ1bGxZZWFyKCkpO1xuICAgICAgICAgICAgY29uc3QgbW9udGg6U3RyaW5nID0gU3RyaW5nKChcIjBcIiArIChkYXRlLmdldE1vbnRoKCkgKyAxKSkuc2xpY2UoLTIpKTtcbiAgICAgICAgICAgIGNvbnN0IGRheTpTdHJpbmcgPSBTdHJpbmcoKFwiMFwiICsgZGF0ZS5nZXREYXRlKCkpLnNsaWNlKC0yKSk7XG4gICAgICAgICAgICBjb25zdCB0aXRsZTogU3RyaW5nID0gdmFsdWUuYXR0cmlidXRlcy50aXRsZS5yZXBsYWNlKFwiIFwiLCBcIlwiKTtcbiAgICAgICAgICAgIGNvbnN0IGg6IHN0cmluZyA9IGAke3llYXJ9JHttb250aH0ke2RheX0ke3RpdGxlfWBcbiAgICAgICAgICAgIGNvbnN0IGhhc2g6IFN0cmluZyA9IG1kNShoKVxuICAgICAgICAgICAgc3RhdGUuY2FjaGUuc2V0KGhhc2gsIHZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHN0YXRlLmNhY2hlKTtcbiAgICB9XG59XG4iLCJleHBvcnQgY2xhc3MgQXR0cmlidXRlcyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSBcIlwiO1xuICAgICAgICB0aGlzLmRhdGUgPSBcIlwiO1xuICAgICAgICB0aGlzLmF1dGhvciA9IFwiXCI7XG4gICAgfVxuXG4gICAgcHVibGljIHRpdGxlOiBTdHJpbmc7XG4gICAgcHVibGljIGRhdGU6IFN0cmluZztcbiAgICBwdWJsaWMgYXV0aG9yOiBTdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBQb3N0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVzID0gbmV3IEF0dHJpYnV0ZXMoKTtcbiAgICAgICAgdGhpcy5ib2R5ID0gXCJcIjtcbiAgICAgICAgdGhpcy5pZCA9IFwiXCI7XG4gICAgICAgIHRoaXMuc3VtbWFyeSA9IFwiXCI7XG4gICAgfVxuXG4gICAgcHVibGljIGF0dHJpYnV0ZXM6IEF0dHJpYnV0ZXM7XG4gICAgcHVibGljIGJvZHk6IFN0cmluZztcbiAgICBwdWJsaWMgc3VtbWFyeTogU3RyaW5nO1xuICAgIHB1YmxpYyBpZDogU3RyaW5nO1xufVxuXG4vLyDliIbpobXkv53lrZhcbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGVJbnRlcmZhY2Uge1xuICAgIHBvc3RzOiBBcnJheTxQb3N0PjtcbiAgICBjYWNoZTogTWFwPFN0cmluZywgUG9zdD47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUG9zdE1kNUFyZ3VtZW50IHtcbiAgICB5ZWFyOiBTdHJpbmcsXG4gICAgbW9udGg6IFN0cmluZyxcbiAgICBkYXk6IFN0cmluZyxcbiAgICB0aXRsZTogU3RyaW5nXG59XG5cbmV4cG9ydCBjbGFzcyBTdGF0ZSBpbXBsZW1lbnRzIFN0YXRlSW50ZXJmYWNlIHtcbiAgICBwb3N0czogQXJyYXk8UG9zdD4gPSBuZXcgQXJyYXk8UG9zdD4oKTtcbiAgICBjYWNoZTogTWFwPFN0cmluZywgUG9zdD4gPSBuZXcgTWFwPFN0cmluZywgUG9zdD4oKTtcbn1cbiIsImltcG9ydCBWdWUgZnJvbSAndnVlJztcbmltcG9ydCBWdWV4IGZyb20gJ3Z1ZXgnO1xuaW1wb3J0IHsgU3RhdGUgfSBmcm9tICcuL3N0YXRlJ1xuaW1wb3J0IHsgbXV0YXRpb25zIH0gZnJvbSAnLi9tdXRhdGlvbidcbmltcG9ydCB7IGdldHRlcnMgfSBmcm9tICcuL2dldHRlcnMnXG5cblZ1ZS51c2UoVnVleCk7XG5cbmNvbnN0IHN0YXRlOiBTdGF0ZSA9IG5ldyBTdGF0ZTtcblxuZXhwb3J0IGRlZmF1bHQgbmV3IFZ1ZXguU3RvcmUoe1xuICAgIHN0YXRlLFxuICAgIG11dGF0aW9ucyxcbiAgICBnZXR0ZXJzXG59KTtcbiIsIm1vZHVsZS5leHBvcnRzID0ge1wiYXR0cmlidXRlc1wiOntcInRpdGxlXCI6XCIyMDE5IFJldmlld1wiLFwiZGF0ZVwiOlwiMjAyMC0wMS0wMVQyMToyNTo1NC4wMDBaXCIsXCJ0YWdzXCI6MjAxOSxcImNhdGVnb3JpZXNcIjpcIuW5tOW6puaAu+e7k1wifSxcImJvZHlcIjpcIlxcbuS4iuS4gOasoeWGmeW5tOe7iOaAu+e7k+i/mOaYrzE45bm05Zue5a6255qE5Yqo6L2m5LiK77yM5Y+v5oOc5YaZ5LqG5LiA5Y2K5rKh5Y+R6KGo77yM6KeJ5b6X5LiA5bm05LqG5rKh5pyJ5LuA5LmI6IO95aSf5Zue5oOz6LW35p2l55qE77yM5bCx5Y+I5Yig6Zmk5LqG44CC5LuK5bm05LiN5ZCM5LqG77yM5LuK5bm05pyJ5aW95aSa5oOz6K+055qE44CCXFxuXFxuPCEtLSBtb3JlIC0tPlxcblxcbiMjIOiEseWNlVxcblxcbioq56ys5LiA5Lu26YeN6KaB55qE5LqL5piv5oiR6YGH5Yiw5LqG55Sf5ZG95Lit55qE5aW544CCKipcXG5cXG7oh6rku47lt6XkvZzku6XlkI7vvIzmiJHlpojlpKnlpKnlv7Xlj6jmiJHnmoTlsLHmmK/mib7lr7nosaHvvIzlkozmiJHpooTmg7PnmoTmsqHplJnvvIzkuIrlrabnmoTml7blgJnnm7zmiJHmr5XkuJrvvIzmr5XkuJrku6XlkI7nm7zmiJHlt6XkvZzvvIzlt6XkvZzku6XlkI7nm7zmiJHmib7lr7nosaHnu5PlqZrvvIzmib7lr7nosaHku6XlkI7nm7zmiJHotbbntKfnlJ/kuKrlqIPorqnlpbnmirHjgIJ+fu+8iOWkp+WutueahOeItuavjeW6lOivpemDvei/meagt++8iX5+XFxuXFxuIyMg5Yqg6JaqXFxuXFxu6L+Z5Lu25LqL56Gu5a6e5Lmf5Luk5oiR5oy65byA5b+D55qE77yM5oiR55qE5bel6LWE5ZyoMjAxOeW5tOaIkOWKn+a2qOWIsOS6hjAuMzc15LmUKDHkuZTnrYnkuo4qKuWFgyAgW0BuYW5wdXl1ZV0oaHR0cHM6Ly9ibG9nLm5hbnB1eXVlLmNvbSkpXFxuXFxu5rao5bel6LWE6LCB5LiN6auY5YW077yM5oiR5Lyw6K6h5Lmf5bCx6ams5LqR5LiN6auY5YW05LqG77yM5q+V56uf5LuW55yL5LiN5LiK6ZKx44CCXFxuXFxuIyMg5a2m5LmgXFxuXFxu5LuK5bm055yL5LqG5b6I5aSaQysr55qE6LWE5paZ77yM5a+5Qysr5ZKM57yW6K+R5Zmo6YO95pyJ5LqG5pu05rex55qE5LqG6Kej44CC5oOzMjAxNuW5tOWNiuWknFtAemNjcnNdKGh0dHBzOi8vemNjLnJzKeWcqOWutuaVmeaIkee8luivkeWOn+eQhu+8jOWIsOeOsOWcqOaIkeWPr+S7peeQhuino+S4gOmXqOivreiogOS7juiuvuiuoeWIsOWunueOsO+8jOWGjeWIsOS9v+eUqOaooeadv+WujOaIkOe8luivkeaXtuiuoeeul++8jOaIkei1sOS6huW/q+S4ieW5tO+8jOi/meS4ieW5tOmHjOaIkeS4gOebtOayoeWBnOS4i+WtpuS5oOeahOiEmuatpe+8jOWcqOWtpuS5oOWQhOenjeefpeivhu+8jOS7juWQhOenjee8lueoi+ivreiogOWIsOWQhOenjeahhuaetuWOn+eQhu+8jOWIsOWbvuW9oueVjOmdoueahOWunueOsOOAgui/mOWtpuS5oOS6huWNleWFg+a1i+ivle+8jOW5tuS4lFtAaHVhbGV0XShodHRwczovL2h1YWxldC5vcmcp5aSn5L2s57uZ5oiR6K6y5LqG5Y2V5YWD5rWL6K+V5piv5LuA5LmI77yM5Lul5Y+K5Y2V5YWD5rWL6K+V55qE6YeN6KaB5oCn77yM5LuO6YKj5Lul5ZCO5oiR5omN566X55yf5q2j55qE5LqG6Kej5Y2V5YWD5rWL6K+V55qE6YeN6KaB5oCn77yM5Lmf5L2/5oiR5Zyo5YaZ5Luj56CB55qE5pe25YCZ5rOo6YeN6YCa6L+H5Y2V5YWD5rWL6K+V5p2l5L+d6Zqc5oiR55qE5Yqf6IO944CCXFxuXFxu5Y675bm05a+55rex5bqm5a2m5Lmg6L+b6KGM5LqG5LiA5rOi5a2m5Lmg77yM5LuK5bm05a+5V2Vi5bel56iL5YyW5ZKMVHlwZVNjcmlwdOS5n+WtpuS5oOS6huS4gOS4i++8jOS5n+eul+aYr+WvueebruWJjeacgOeDremXqOeahOS4pOS4qumihuWfn+i/m+ihjOS6huS4gOWumueahOS6huino+OAglxcblxcbiMjIOivu+S5plxcblxcbuWOu+W5tOS5sOeahFRlbnNvckZsb3fnnIvkuobmsqHkuIDljYrvvIzku4rlubTlgJLmmK/msqHkubDkuabvvIzlvIDlp4vlnKjlvq7kv6Hor7vkuabkuIror7vkuabvvIzliKnnlKjkuIDkupvnqbrkvZnml7bpl7Tor7vkuIDngrnvvIzmiJHkuZ/mjqjojZDlpKflrrblpJrliKnnlKjnqbrpl7Lml7bpl7Tor7vor7vkuabvvIzlsJHliLfmipbpn7PlkoxiaWxpYmlsaeOAglxcblxcbi0g44CKVGVuc29yRmxvd+OAi+acquivu+WujFxcbi0g44CKVHlwZVNjcmlwdOWunuaImOOAi+ato+WcqOivu1xcblxcbiMjIOWNmuWuolxcblxcbjIwMTnlubTmiJHkuIDlhbHmsLTkuoYxNeevh+aWh+eroOOAglxcblxcbi0gMTItMjYgW+WcqEFyY2hMaW51eOmAmui/h+S4suWPo+iwg+ivlVZNd2FyZeiZmuaLn+acuuS4reeahGRlZXBpbl0oaHR0cHM6Ly9ibG9nLmp1c3Rmb3JseHouY29tLzIwMTkvMTIvMjYvdXNlLXNlcmlhbC1wb3J0LWRlYnVnLWRlZXBpbi1vbi1hcmNobGludXgvKVxcblxcbi0gMTItMjYgW+S9v+eUqOagh+WHhuW6k3N0ZDo6c29ydOWHveaVsOi/m+ihjOaOkuW6j10oaHR0cHM6Ly9ibG9nLmp1c3Rmb3JseHouY29tLzIwMTkvMTIvMjYvY3BwLXNvcnQvKVxcblxcbi0gMTItMDkgW+iusOW9leS4gOS4quWdkeeIueeahHVzYue9keWNoV0oaHR0cHM6Ly9ibG9nLmp1c3Rmb3JseHouY29tLzIwMTkvMTIvMDkvJUU4JUFFJUIwJUU1JUJEJTk1JUU0JUI4JTgwJUU0JUI4JUFBJUU1JTlEJTkxJUU3JTg4JUI5JUU3JTlBJTg0dXNiJUU3JUJEJTkxJUU1JThEJUExLylcXG5cXG4tIDEyLTA5IFvkvb/nlKhnaXRodWIgYWN0aW9uc+iHquWKqOmDqOe9smhleG/mlofnq6DliLBodG1s5LuT5bqTXShodHRwczovL2Jsb2cuanVzdGZvcmx4ei5jb20vMjAxOS8xMi8wOS8lRTglQUUlQjAlRTUlQkQlOTUlRTQlQjglODAlRTQlQjglQUElRTUlOUQlOTElRTclODglQjklRTclOUElODR1c2IlRTclQkQlOTElRTUlOEQlQTEvKVxcblxcbi0gMTItMDggW1Z1ZeeItuWtkOe7hOS7tuS8oOWAvCDigJTigJQgcHJvcHMgJiAkZW1pdF0oaHR0cHM6Ly9ibG9nLmp1c3Rmb3JseHouY29tLzIwMTkvMTIvMDgvdnVlLWNvbXBvbmVudC1wcm9wcy8pXFxuXFxuLSAxMi0wOCBb5re75YqgVnVl5Yqo55S7XShodHRwczovL2Jsb2cuanVzdGZvcmx4ei5jb20vMjAxOS8xMi8wOC92dWUtdHJhbnNpdGlvbnMvKVxcblxcbi0gMTEtMjUgW+S9v+eUqHdlYnBhY2stZGV2LXNlcnZlcuadpeebkeWQrOmhueebruWPmOWMll0oaHR0cHM6Ly9ibG9nLmp1c3Rmb3JseHouY29tLzIwMTkvMTEvMjUvJUU0JUJEJUJGJUU3JTk0JUE4d2VicGFjay1kZXYtc2VydmVyJUU2JTlEJUE1JUU3JTlCJTkxJUU1JTkwJUFDJUU5JUExJUI5JUU3JTlCJUFFJUU1JThGJTk4JUU1JThDJTk2LylcXG5cXG4tIDEwLTI0IFvnu5lBcmNobGludXjlvIDlkK9CRlHlkoxNdVFTU10oaHR0cHM6Ly9ibG9nLmp1c3Rmb3JseHouY29tLzIwMTkvMTAvMjQvJUU3JUJCJTk5QXJjaGxpbnV4JUU1JUJDJTgwJUU1JTkwJUFGQkZRJUU1JTkyJThDTXVRU1MvKVxcblxcbi0gMTAtMjIgW+S9v+eUqHdlYnBhY2vmiZPljIVWdWXlkoxUeXBlU2NyaXB0XShodHRwczovL2Jsb2cuanVzdGZvcmx4ei5jb20vMjAxOS8xMC8yMi8lRTQlQkQlQkYlRTclOTQlQTh3ZWJwYWNrJUU2JTg5JTkzJUU1JThDJTg1VnVlJUU1JTkyJThDVHlwZVNjcmlwdC8pXFxuXFxuLSAxMC0xNCBbd2VicGFja+WFpemXqF0oaHR0cHM6Ly9ibG9nLmp1c3Rmb3JseHouY29tLzIwMTkvMTAvMTQvd2VicGFjayVFNSU4NSVBNSVFOSU5NyVBOC8pXFxuXFxuLSAwNi0xNiBbd3NsMueahOS9v+eUqOS9k+mqjF0oaHR0cHM6Ly9ibG9nLmp1c3Rmb3JseHouY29tLzIwMTkvMDYvMTYvd3NsMiVFNyU5QSU4NCVFNCVCRCVCRiVFNyU5NCVBOCVFNCVCRCU5MyVFOSVBQSU4Qy8pXFxuXFxuLSAwNi0xNSBb5YWl5Z2RdHlwZXNjcmlwdOS6hl0oaHR0cHM6Ly9ibG9nLmp1c3Rmb3JseHouY29tLzIwMTkvMDYvMTUvJUU1JTg1JUE1JUU1JTlEJTkxdHlwZXNjcmlwdCVFNCVCQSU4Ni8pXFxuXFxuLSAwNS0yMyBbQ01ha2UgQ1Rlc3RzIGZvciBkZGUtY29udHJvbC1jZW50ZXJdKGh0dHBzOi8vYmxvZy5qdXN0Zm9ybHh6LmNvbS8yMDE5LzA1LzIzL0NNYWtlLUNUZXN0cy1mb3ItZGRlLWNvbnRyb2wtY2VudGVyLylcXG5cXG4tIDAyLTIxIFvlpoLkvZXlnKhEZWVwaW7kuIrkvb/nlKhMTk1QXShodHRwczovL2Jsb2cuanVzdGZvcmx4ei5jb20vMjAxOS8wMi8yMS9ob3ctdG8tdXNlLUxOTVAtb24tZGVlcGluLylcXG5cXG4tIDAyLTIzIFvop6PlhrPnlKjkuoZ4cG9zZWTlkI7mt5jlrp3pl6rpgIBdKGh0dHBzOi8vYmxvZy5qdXN0Zm9ybHh6LmNvbS8yMDE5LzAxLzIzL2Z1Y2stdGFvYmFvLylcXG5cXG5gYGBcXG4yMDE5XFxu4pSc4pSA4pSAIDAxXFxu4pSCwqDCoCDilJTilIDilIAgMjNcXG7ilILCoMKgICAgICDilJTilIDilIAgZnVjay10YW9iYW9cXG7ilILCoMKgICAgICAgICAg4pSU4pSA4pSAIGluZGV4Lmh0bWxcXG7ilJzilIDilIAgMDJcXG7ilILCoMKgIOKUlOKUgOKUgCAyMVxcbuKUgsKgwqAgICAgIOKUlOKUgOKUgCBob3ctdG8tdXNlLUxOTVAtb24tZGVlcGluXFxu4pSCwqDCoCAgICAgICAgIOKUlOKUgOKUgCBpbmRleC5odG1sXFxu4pSc4pSA4pSAIDA1XFxu4pSCwqDCoCDilJTilIDilIAgMjNcXG7ilILCoMKgICAgICDilJTilIDilIAgQ01ha2UtQ1Rlc3RzLWZvci1kZGUtY29udHJvbC1jZW50ZXJcXG7ilILCoMKgICAgICAgICAg4pSU4pSA4pSAIGluZGV4Lmh0bWxcXG7ilJzilIDilIAgMDZcXG7ilILCoMKgIOKUnOKUgOKUgCAxNVxcbuKUgsKgwqAg4pSCwqDCoCDilJTilIDilIAg5YWl5Z2RdHlwZXNjcmlwdOS6hlxcbuKUgsKgwqAg4pSCwqDCoCAgICAg4pSc4pSA4pSAIOa3seW6puW9leWxj1/pgInmi6nljLrln59fMjAxOTA2MTUyMDIwNDQuZ2lmXFxu4pSCwqDCoCDilILCoMKgICAgICDilJTilIDilIAgaW5kZXguaHRtbFxcbuKUgsKgwqAg4pSU4pSA4pSAIDE2XFxu4pSCwqDCoCAgICAg4pSU4pSA4pSAIHdzbDLnmoTkvb/nlKjkvZPpqoxcXG7ilILCoMKgICAgICAgICAg4pSc4pSA4pSAIGluZGV4Lmh0bWxcXG7ilILCoMKgICAgICAgICAg4pSc4pSA4pSAIFNuaXBhc3RlXzIwMTktMDYtMTZfMjEtNDktMTUucG5nXFxu4pSCwqDCoCAgICAgICAgIOKUlOKUgOKUgCBTbmlwYXN0ZV8yMDE5LTA2LTE2XzIxLTUyLTQyLnBuZ1xcbuKUnOKUgOKUgCAxMFxcbuKUgsKgwqAg4pSc4pSA4pSAIDE0XFxu4pSCwqDCoCDilILCoMKgIOKUlOKUgOKUgCB3ZWJwYWNr5YWl6ZeoXFxu4pSCwqDCoCDilILCoMKgICAgICDilJTilIDilIAgaW5kZXguaHRtbFxcbuKUgsKgwqAg4pSc4pSA4pSAIDIyXFxu4pSCwqDCoCDilILCoMKgIOKUlOKUgOKUgCDkvb/nlKh3ZWJwYWNr5omT5YyFVnVl5ZKMVHlwZVNjcmlwdFxcbuKUgsKgwqAg4pSCwqDCoCAgICAg4pSU4pSA4pSAIGluZGV4Lmh0bWxcXG7ilILCoMKgIOKUlOKUgOKUgCAyNFxcbuKUgsKgwqAgICAgIOKUlOKUgOKUgCDnu5lBcmNobGludXjlvIDlkK9CRlHlkoxNdVFTU1xcbuKUgsKgwqAgICAgICAgICDilJTilIDilIAgaW5kZXguaHRtbFxcbuKUnOKUgOKUgCAxMVxcbuKUgsKgwqAg4pSU4pSA4pSAIDI1XFxu4pSCwqDCoCAgICAg4pSU4pSA4pSAIOS9v+eUqHdlYnBhY2stZGV2LXNlcnZlcuadpeebkeWQrOmhueebruWPmOWMllxcbuKUgsKgwqAgICAgICAgICDilJTilIDilIAgaW5kZXguaHRtbFxcbuKUlOKUgOKUgCAxMlxcbiAgICDilJzilIDilIAgMDhcXG4gICAg4pSCwqDCoCDilJzilIDilIAgdnVlLWNvbXBvbmVudC1wcm9wc1xcbiAgICDilILCoMKgIOKUgsKgwqAg4pSU4pSA4pSAIGluZGV4Lmh0bWxcXG4gICAg4pSCwqDCoCDilJTilIDilIAgdnVlLXRyYW5zaXRpb25zXFxuICAgIOKUgsKgwqAgICAgIOKUlOKUgOKUgCBpbmRleC5odG1sXFxuICAgIOKUnOKUgOKUgCAwOVxcbiAgICDilILCoMKgIOKUnOKUgOKUgCDorrDlvZXkuIDkuKrlnZHniLnnmoR1c2LnvZHljaFcXG4gICAg4pSCwqDCoCDilILCoMKgIOKUlOKUgOKUgCBpbmRleC5odG1sXFxuICAgIOKUgsKgwqAg4pSU4pSA4pSAIHVzZS1naXRodWItYWN0aW9ucy10by1kZXBvbHktaGV4b1xcbiAgICDilILCoMKgICAgICDilJTilIDilIAgaW5kZXguaHRtbFxcbiAgICDilJTilIDilIAgMjZcXG4gICAgICAgIOKUnOKUgOKUgCBjcHAtc29ydFxcbiAgICAgICAg4pSCwqDCoCDilJTilIDilIAgaW5kZXguaHRtbFxcbiAgICAgICAg4pSU4pSA4pSAIHVzZS1zZXJpYWwtcG9ydC1kZWJ1Zy1kZWVwaW4tb24tYXJjaGxpbnV4XFxuICAgICAgICAgICAg4pSU4pSA4pSAIGluZGV4Lmh0bWxcXG5cXG4zNCBkaXJlY3RvcmllcywgMTggZmlsZXNcXG5gYGBcXG5cXG4jIyDnp5Hmma7op4bpopFcXG5cXG4xLiDlpojlkqrlj5QgKOS4gOS4qui+g+ecn+eahOeQhuW3peeUtylcXG5cXG7ov5nkuKrlkI3lrZfmiJHnrKzkuIDnnLznnIvliLDnmoTml7blgJnvvIzov5jku6XkuLrmmK/kuKrljZbmr43lqbTnmoTvvIzmsqHmg7PliLDlsYXnhLbmmK/kuKrmkJ7np5Hmma7nmoTvvIzogIzkuJTlhoXlrrnorrLnmoTkuZ/lvojlpb3vvIzmnInmlbDlrabjgIHniannkIbjgIHljJblrablkozlpKnmloflrabjgIJcXG5cXG4yLiDmnY7msLjkuZDogIHluIhcXG5cXG7ku6XliY3lgbblsJTnnIvov4fogIHluIjnmoTop4bpopHvvIzlm6DkuLrkuIDnm7Tpg73lnKjng63mppzvvIzmiYDku6XmsqHmg7PliLDlhbPms6jvvIzlkI7mnaXmmK95b3V0dWJl5LiK55yL5Yiw5LqG77yM5bCx54K55LqG5YWz5rOo77yMeW91dHViZeS4iuabtOaWsOeahOWSjGJpbGliaWxp55qE6L+Y5LiN5piv5LiA5qC355qE77yM55yL5pyA5ZCO57uT5bC+55qE5pe25YCZeW91dHViZeeahOWPquivtHlvdXR1YmXluJDlj7flhbPms6jvvIzogIxiaWxpYmlsaeeahOaYr2JpbGliaWxp77yM5pyJ5pe25YCZ6L+Y6KaB5aSa5Liq5bmz5Y+w5Y6755yL44CCXFxuXFxuMy4gIOiQneeOi+S6jOWPt1xcblxcbuS5i+WJjeWcqOenkeaZruWMuumaj+S+v+eci+eahOaXtuWAme+8jOWvueeUn+eJqeWtpuS6p+eUn+S6huS4gOS6m+WFtOi2o++8jOiQneeOi+iusueahOmjjuagvOaIkeW+iOWWnOasou+8jOeJueWIq+aYr+S7luazqOmHjeaYhuiZq+WIhuexu+WtpijpqqjljIXnmq7vvIznmq7ljIXpqqjllYoyMzMzKe+8jOi/mOacieS4gOS6m+i+n+iwo+inhumikeOAglxcblxcbjQuIOiKs+aWr+WhlOWkqyAo6ay85Y+kKVxcblxcbuS5n+S9v+WvueeUn+eJqeWtpuS6p+eUn+S6huS4gOS6m+WFtOi2o++8jOmsvOWPpOivtOS7peS7luW+iOS4reS6jOeahOmjjuagvOW4pumihuaIkeWtpuS5oOS6huS4gOazouWPpOeUn+eJqeeahOebuOWFs+efpeivhijml6fml6XmlK/phY3ogIXvvIHvvIHvvIEp44CCXFxuXFxuNS4g5pyo5YG25ZCbXFxuXFxu5ZKM6ay85Y+k5LiA5qC35piv5LiT6Zeo6K6y5Y+k55Sf54mp55qE77yM5LiN6L+H5q+P5qyh57uT5p2f55qE5q+U6L6D5LuT5L+D77yM56qB54S25bCx57uT5p2f5LqG44CCXFxuXFxuNi4g5pyo6bG85rC05b+DXFxuXFxu5pyo6bG85bm25LiN5piv5LuK5bm05omN5YWz5rOo55qE77yM5pyA5byA5aeL5YWz5rOo5piv5LuW5YGaRVZB5Ymn5Zy654mI6Kej5p6Q77yM5ZCO5p2l44CK5pyo6bG86K+044CL5byA5aeL5YGa5LiA5Lqb56eR5pmu77yM5oiR5byA5aeL5LiA55u05YWz5rOo5LqG44CCXFxuXFxuNy4g5a6H5a6Z6KeG6KeJICjmsLjov5zkuI3opoHlgZzmraLmgJ3ogIMpXFxuXFxu5LiA5Liq6K6y5aSp5paH55qE56eR5pmudXDvvIzkuI3ov4flubTlupXnmoTml7blgJnmjaLkuobphY3pn7PvvIznlpHkvLzphY3pn7Plh7rljrvljZXlubLkuobjgIJcXG5cXG4jIyDnlLXlvbFcXG5cXG4xLiDmtYHmtarlnLDnkINcXG4yLiDpmL/kuL3loZTvvJrmiJjmlpflpKnkvb9cXG4zLiDmiJjni7wyXFxuNC4g5oOK5aWH6Zif6ZW/XFxuNS4g5aSN5LuH6ICF6IGU55ufNFxcbjYuIOS9leS7peS4uuWutlxcbjcuIOmAn+W6puS4jua/gOaDhe+8miDnibnliKvooYzliqhcXG44LiDlj7bpl640XFxuXFxuIyMg57qq5b2V54mHXFxuXFxuMS4g5re35rKM77ya5pWw5a2m5o6i56eYXFxuMi4g57u05bqm77ya5pWw5a2m5ryr5q2lXFxuXFxuIyMg5Yqo5ryrXFxuXFxuMS4g5YiA5YmR56We5Z+fXFxuMi4g57Sr572X5YWw5rC45oGS6Iqx5ZutXFxuMy4gZGFybGluZyBpbiB0aGUgZnJhbnh4XFxuNC4g5b+D55CG5rWL6YeP6ICFXFxuNS4g6L+b5Ye755qE5beo5Lq656ys5LiJ5a2jXFxuNi4g5LqU562J5YiG55qE5paw5aiYXFxuNy4gY2l0cnVz772e5p+R5qmY5ZGz6aaZ5rCU772eXFxuXCIsXCJmcm9udG1hdHRlclwiOlwidGl0bGU6IDIwMTkgUmV2aWV3XFxuZGF0ZTogMjAyMC0wMS0wMSAyMToyNTo1NFxcbnRhZ3M6IDIwMTlcXG5jYXRlZ29yaWVzOiDlubTluqbmgLvnu5NcIn0iLCJtb2R1bGUuZXhwb3J0cyA9IHtcImF0dHJpYnV0ZXNcIjp7XCJ0aXRsZVwiOlwiQXJjaExpbnV46L+Q6KGMc3RlYW3lh7rnjrDnvLrlsJFMaWJHTC0tc3RlYW0gbGliR0wgZXJyb3I6IGZhaWxlZCB0byBsb2FkIGRyaXZlcjogc3dyYXN0XCIsXCJzdWJ0aXRsZVwiOlwiYXJjaOW6k+WkquaWsO+8jHN0ZWFt5bqT5aSq5pen5a+86Ie055qE6Zeu6aKY44CCXCIsXCJkYXRlXCI6XCIyMDE2LTA3LTE1VDA3OjE4OjUzLjAwMFpcIixcImF1dGhvclwiOlwia2lyaWdheWFcIixcImhlYWRlci1pbWdcIjpcImhvbWUtYmcuanBnXCIsXCJ0YWdzXCI6W1wi5a6e6aqM5a6kXCJdfSxcImJvZHlcIjpcIuWFtuWunmFyY2jnmoR3aWtp5bey57uP5o+Q5Yiw5LqG77yM6ICM5LiU6L+Z5Liq6Zeu6aKY5piv5q+U6L6D5bi46KeB55qE77yM5Y+q6ZyA6KaB5Yig6Zmkc3RlYW3nmoTlupPlsLHooYzjgIJcXG5cXG5bd2lraeWOn+aWh+mTvuaOpV0oaHR0cHM6Ly93aWtpLmFyY2hsaW51eC5vcmcvaW5kZXgucGhwL1N0ZWFtL1Ryb3VibGVzaG9vdGluZyNEZWxldGluZ190aGVfcnVudGltZV9saWJyYXJpZXMpXFxuXFxuPCEtLW1vcmUtLT5cXG5cXG7liKDpmaTov5DooYzlupNcXG7ov5DooYzmraTlkb3ku6TvvIzliKDpmaTlnKhpc3N1ZXPkuIrlt7Lnn6XnmoTov5DooYzlupPpl67popg6XFxuXFxuICAgIGZpbmQgfi8uc3RlYW0vcm9vdC8gXFxcXCggLW5hbWUgXFxcImxpYmdjY19zLnNvKlxcXCIgLW8gLW5hbWUgXFxcImxpYnN0ZGMrKy5zbypcXFwiIC1vIC1uYW1lIFxcXCJsaWJ4Y2Iuc28qXFxcIiAtbyAtbmFtZSBcXFwibGliZ3BnLWVycm9yLnNvKlxcXCIgXFxcXCkgLXByaW50IC1kZWxldGVcXG5cXG5cXG7lpoLmnpzkuIrpnaLnmoTlkb3ku6TkuI3lt6XkvZzvvIzliJnlho3mrKHov5DooYzkuIrpnaLnmoTlkb3ku6TvvIznhLblkI7ov5DooYzmraTlkb3ku6TjgIJcXG5cXG4gICAgZmluZCB+Ly5sb2NhbC9zaGFyZS9TdGVhbS8gXFxcXCggLW5hbWUgXFxcImxpYmdjY19zLnNvKlxcXCIgLW8gLW5hbWUgXFxcImxpYnN0ZGMrKy5zbypcXFwiIC1vIC1uYW1lIFxcXCJsaWJ4Y2Iuc28qXFxcIiAtbyAtbmFtZSBcXFwibGliZ3BnLWVycm9yLnNvKlxcXCIgXFxcXCkgLXByaW50IC1kZWxldGVcXG5cIixcImZyb250bWF0dGVyXCI6XCJ0aXRsZTogJ0FyY2hMaW51eOi/kOihjHN0ZWFt5Ye6546w57y65bCRTGliR0wtLXN0ZWFtIGxpYkdMIGVycm9yOiBmYWlsZWQgdG8gbG9hZCBkcml2ZXI6IHN3cmFzdCdcXG5zdWJ0aXRsZTogICBcXFwiYXJjaOW6k+WkquaWsO+8jHN0ZWFt5bqT5aSq5pen5a+86Ie055qE6Zeu6aKY44CCXFxcIlxcbmRhdGU6IDIwMTYtMDctMTUgMDc6MTg6NTNcXG5hdXRob3I6ICAgICBcXFwia2lyaWdheWFcXFwiXFxuaGVhZGVyLWltZzogXFxcImhvbWUtYmcuanBnXFxcIlxcbnRhZ3M6XFxuICAgIC0g5a6e6aqM5a6kXCJ9IiwibW9kdWxlLmV4cG9ydHMgPSB7XCJhdHRyaWJ1dGVzXCI6e1widGl0bGVcIjpcIkMgcGx1cyBwbHVzIEl0ZXJhdG9yIOeslOiusFwiLFwiZGF0ZVwiOlwiMjAxOC0wNy0wOVQxMzowNToxMi4wMDBaXCIsXCJ0YWdzXCI6W1wiQysrXCJdLFwiY2F0ZWdvcmllc1wiOlwiQysrXCJ9LFwiYm9keVwiOlwiXFxuIVvmlL7lvKDlpb3nnIvnmoTlm77orqnlkrHlhbTlpYvkuIDkuItdKGh0dHA6Ly9tYW5iaXpoaS5jb20vaW1hZ2VzLzIwMjY3OTQ1LmpwZylcXG5cXG7mnKzmloforrDlvZXkuoblkrHlr7nov63ku6PlmajnmoTkuIDkupvnkIbop6NcXG5cXG48IS0tIG1vcmUgLS0+XFxuXFxuQysrIOagh+WHhuW6k+aPkOS+m+S6huS4ieenjeexu+Wei+e7hOS7tjpcXG5cXG4tIOWuueWZqFxcbi0g6L+t5Luj5ZmoXFxuLSDnrpfms5VcXG5cXG7lrrnlmajmmK/mjIflrZjlgqjmn5Dnp43nsbvlnovnmoTnu5PmnoTvvIzlrrnlmajmnInkuKTnp406XFxuXFxuLSDpobrluo/lrrnlmaggKHZlY3RvcuOAgWxpc3TlkoxzdHJpbmfnrYnvvIzmmK/lhYPntKDnmoTmnInluo/pm4blkIjjgIIpXFxuLSDlhbPogZTlrrnlmaggKHNldOOAgW1hcOetie+8jOaYr+WMheWQq+afpeaJvuWFg+e0oOeahOmUruWAvOOAgiApXFxuXFxu6YGN5Y6G5a655Zmo55qE5pa55byP5LmL5LiA5bCx5piv6L+t5Luj5Zmo77yM6L+t5Luj5Zmo5piv5LiA56eN5rOb5Z6L5oyH6ZKI77yM5pmu6YCa5oyH6ZKI5oyH5ZCR5LiA5Z2X5YaF5a2Y77yM6L+t5Luj5Zmo5oyH5ZCR5a655Zmo5Lit55qE5LiA5Liq5L2N572u44CCU1RM55qE5q+P5Liq5qih5p2/5a655Zmo5Lit77yM6YO95a6a5LmJ5LqG5LiA57uE5a+55bqU55qE6L+t5Luj5Zmo57G777yM5L2/55So6L+t5Luj5Zmo5ZKM566X5rOV77yM5bCx5Y+v5Lul6K6/6Zeu5a655Zmo5Lit54m55a6a5L2N572u55qE5YWD57Sg77yM6ICM5peg6ZyA5YWz5b+D5YWD57Sg55qE57G75Z6L44CCXFxuXFxu5q+P56eN5a655Zmo6YO95a6a5LmJ5LqG5LiA5a+5YmVnaW7lkoxlbmTnmoTlh73mlbDvvIznlKjkuo7ov5Tlm57ov63ku6PlmajjgILlpoLmnpzlrrnlmajkuK3mnInlhYPntKDnmoTor53vvIxiZWdpbui/lOWbnueahOi/reS7o+WZqOaMh+WQkeesrOS4gOS4quWFg+e0oOOAglxcblxcbmBgYFxcbnN0ZDo6bGlzdDxpbnQ+OjppdGVyYXRvciBpdCA9IGxpc3QuYmVnaW4oKTtcXG5gYGBcXG5cXG7kuIrov7Dor63lj6XmioppdOWIneWni+WMluS4uueUsWxpc3TnmoRiZWdpbui/lOWbnueahOi/reS7o+WZqO+8jOWmguaenGxpc3TkuI3kuLrnqbrvvIxpdOWwhuaMh+WQkeivpeWFg+e0oGxpc3RbMF3jgIJcXG5cXG7nlLFlbmTmk43kvZzov5Tlm57nmoTov63ku6PlmajmjIflkJFsaXN055qE5pyr56uv5YWD57Sg55qE5LiL5LiA5Liq77yM6YCa5bi45oyH6LaF5Ye65pyr56uv6L+t5Luj5ZmoKG9mZi10aGUtZW5kLWl0ZXJhdG9yKe+8jOihqOaYjuaMh+WQkeS4gOS4quS4jeWtmOWcqOeahOWFg+e0oO+8jOWmguaenOWuueWZqOS4uuepuu+8jGJlZ2lu6L+U5Zue55qE6L+t5Luj5Zmo5bCG5ZKMZW5k55u45ZCM77yM5Zyo5L2/55So5Lit77yM5Y+v5Lul6YCa6L+H5Yik5patZW5k5p2l5qOA5p+l5piv5ZCm5aSE55CG5a6M5a655Zmo56eN5omA5pyJ55qE5YWD57Sg44CCXFxuXFxu6L+t5Luj5Zmo57G75Z6L5a6a5LmJ5LqG5LiA5Lqb5pON5L2c5p2l6I635Y+W6L+t5Luj5Zmo5omA5oyH5ZCR55qE5YWD57Sg77yM5bm25YWB6K6456iL5bqP5ZGY5bCG6L+t5Luj5Zmo5LuO5LiA5Liq5YWD57Sg56e75Yqo5Yiw5Y+m5LiA5Liq5YWD57Sg44CCXFxuXFxu6YGN5Y6G5YiX6KGo77yaXFxuXFxuYGBgXFxuc3RkOjpsaXN0PGludD4gbGlzdFxcblxcbmZvciAoc3RkOjpsaXN0PGludD46OmNvbnN0X2l0ZXJhdG9yIGl0ID0gbGlzdC5jb25zdEJlZ2luKCk7IGl0ICE9IGxpc3QuY29uc3RFbmQoKTsgKytpdCkge1xcbiAgICAvLyDpgJrov4fov63ku6Plmajorr/pl67lhYPntKDpnIDopoHop6PlvJXnlKjjgIJcXG4gICAgc3RkOjpjb3V0IDw8ICppdCA8PCBzdGQ6OmVuZGw7XFxufVxcbmBgYFxcblxcbmBgYFxcbnN0ZDo6bGlzdDxpbnQ+IGxpc3Q7XFxuc3RkOjpzb3J0KGxpc3QuYmVnaW4oKSwgbGlzdC5lbmQoKSwgWz1dIChpbnQgX2kxLCBpbnQgX2kyKSB7XFxuICAgIHJldHVybiBfaTEgPCBfaTI7XFxufSk7XFxuYGBgXFxuXFxu5LiK6Z2i55qE56S65L6L5Luj56CB5piv5a+55LiA5LiqaW5057G75Z6L55qEbGlzdOi/m+ihjOaOkuW6j++8jFxcblxcblwiLFwiZnJvbnRtYXR0ZXJcIjpcInRpdGxlOiBDIHBsdXMgcGx1cyBJdGVyYXRvciDnrJTorrBcXG5kYXRlOiAyMDE4LTA3LTA5IDEzOjA1OjEyXFxudGFnczogW1xcbiAgICBDKytcXG5dXFxuY2F0ZWdvcmllczogQysrXCJ9IiwibW9kdWxlLmV4cG9ydHMgPSB7XCJhdHRyaWJ1dGVzXCI6e1widGl0bGVcIjpcIkNNYWtlIENUZXN0cyBmb3IgZGRlLWNvbnRyb2wtY2VudGVyXCIsXCJkYXRlXCI6XCIyMDE5LTA1LTIzVDE3OjE2OjE1LjAwMFpcIixcInRhZ3NcIjpbXCJDTWFrZSBMaW51eFwiXSxcImNhdGVnb3JpZXNcIjpcIkxpbnV4XCJ9LFwiYm9keVwiOlwiXFxu5LuA5LmI5piv5Y2V5YWD5rWL6K+VP1xcblxcbj7lnKjorqHnrpfmnLrnvJbnqIvkuK3vvIzljZXlhYPmtYvor5Xlj4jnp7DkuLrmqKHlnZfmtYvor5XvvIzmmK/pkojlr7nnqIvluo/mqKHlnZfvvIjova/ku7borr7orqHnmoTmnIDlsI/ljZXkvY3vvInmnaXov5vooYzmraPnoa7mgKfmo4DpqoznmoTmtYvor5Xlt6XkvZzjgIJcXG5cXG7ljZXlhYPmtYvor5XlrZjlnKjnmoTmhI/kuYnlnKjkuo7vvIzlpoLmnpznqIvluo/lj5HnlJ/kuoblvILluLjmg4XlhrXvvIzmr5TlpoLmjqXmlLbkuobplJnor6/nmoTlgLzvvIzku47ogIzlr7zoh7Tnu5PmnpzkuI3mraPnoa7vvIzlvZPkv67mraPnqIvluo/kuK3nmoTplJnor6/lkI7vvIzkuLrkuobpgb/lhY3lho3mrKHpgYfliLDov5nkuKrpl67popjvvIzpnIDopoHlr7nlh7rpl67popjnmoTlgLzlkozlh73mlbAv5Yqf6IO96L+b6KGM5LiA5qyh5rWL6K+V77yM56Gu5L+d57uT5p6c56ym5ZCI6aKE5pyf44CCXFxuXFxu5Y2V5YWD5rWL6K+V5b6I6YeN6KaB77yM5aaC5p6c5piv5paw6aG555uu77yM6K+35LiA5a6a6KaB5Yia5byA5aeL5bCx6KeE5YiS5aW95Y2V5YWD5rWL6K+V44CCXFxuXFxu5Li65LuA5LmI6K+05Y2V5YWD5rWL6K+V5b6I6YeN6KaB5ZGi77yf5Zug5Li65Y2V5YWD5rWL6K+V55qE55uu55qE5piv6ZqU56a75YW25LuW5Y2V5YWD77yM5bm26K+B5piO5b2T5YmN5Y2V5YWD5piv5q2j56Gu55qE44CC6L+Z6ZyA6KaB5byA5Y+R6ICF5Zyo6K6+6K6h56iL5bqP55qE5pe25YCZ5bCx6KaB6ICD6JmR5b6I5aSa77yM5ZCI55CG55qE6K6+6K6h5ZKM6KeE5YiS6aG555uu44CC5b2T5pyq5p2l6YeN5p6E6aG555uu55qE5pe25YCZ77yM5Y+v5Lul5bGA6YOo6YeN5p6E5p2l5LyY5YyW6aG555uu77yM6ICM5LiN5piv5LuO6Zu26YeN5YaZ44CCXFxuXFxu5pys5paH5rKh5pyJ6K+m57uG6K+05piOUXTnmoTljZXlhYPmtYvor5XmmK/lpoLkvZXnvJblhpnnmoTvvIznvJblhplRdOeahOWNleWFg+a1i+ivleaUvuWcqOS7peWQjuWGjeWGmSh+fuWSleWSleWSlX5+KeOAglxcblxcbjwhLS0gbW9yZSAtLT5cXG5cXG7lhpnov5nnr4fmlofnq6DmmK/lm6DkuLrmnIDov5HlnKjnu5nmjqfliLbkuK3lv4PlhpnljZXlhYPmtYvor5XvvIzmjqfliLbkuK3lv4PnmoTmqKHlnZfpg73mmK9NVkPnmoTvvIzmnKzouqvlsLHlgZrlpb3kuoblpKfmlrnlkJHnmoTpmpTnprvvvIzmr4/kuKrlh73mlbDkuZ/ln7rmnKzmmK/mi4bliIblh7rmnaXnmoTmnIDlsI/lip/og73vvIzlj6/ku6XljZXni6zmi7/lh7rmnaXmtYvor5XjgILmjqfliLbkuK3lv4Pnm67liY3lrZjlnKjkuIDkuKrpl67popjvvIxXb3JrZXLnsbvmmK/ku45EQnVz5LiK5o6l5pS25pWw5o2u77yM5aSE55CG5a6M5oiQ5ZCO5pS+5YWlTW9kZWzkuK3vvIzlpoLmnpzmtYvor5VXb3JrZXLnsbvvvIzpnIDopoHlgZrlvojlpJrlkoxEQnVz55u45YWz55qE5aSE55CG77yM5q+U6L6D6bq754Om77yM5omA5Lul5pyA5byA5aeL5oiR5YWI5oqK6YeN5b+D5pS+5Zyo5LqG5Yib5bu6VGVzdHPlkozmtYvor5XkuIDkuKrln7rmnKznmoTovazmjaLlh73mlbDnmoTlip/og73vvIzpqozor4HljZXlhYPmtYvor5XnmoTmtYHnqIvjgIJcXG5cXG4+W+aOp+WItuS4reW/g+WNleWFg+a1i+ivlVBSXShodHRwczovL2dpdGh1Yi5jb20vbGludXhkZWVwaW4vZGRlLWNvbnRyb2wtY2VudGVyL3B1bGwvMTcxKVxcblxcbuaOp+WItuS4reW/g+mhueebruS9v+eUqOeahENNYWtl5L2c5Li66aG555uu5p6E5bu65bel5YW377yM5omA5Lul55So5Yiw5LqGQ1Rlc3Rz77yM5o6n5Yi25Lit5b+D5L2/55So55qEUXTov5vooYznmoTlvIDlj5HvvIxRdOS5n+aPkOS+m+S6huiHquW3seeahOWNleWFg+a1i+ivle+8jOaIkeS4pOS4qumDveWBmuS6huaUr+aMgeOAglxcblxcbuWcqOmhtuWxgueahENNYWtlTGlzdHMudHh05Lit5re75YqgQ1Rlc3Rz55qE5pSv5oyB77yaXFxuYGBgXFxuIyDlkK/nlKhDVGVzdOajgOafpVxcbmluY2x1ZGUoRGFydClcXG5cXG4jIOWQr+eUqENUZXN0XFxuaW5jbHVkZShDVGVzdClcXG5gYGBcXG7ov5nkuKTooYzlhoXlrrnpnIDopoHlnKjpobblsYJDTWFrZUxpc3RzLnR4dOS4rea3u+WKoO+8jOS4jeeEtuS4jeS8mueUn+aViOOAglxcblxcbuWcqOWtkOmhueebruS4reWIm+W7uuS4gOS4qmRjY190ZXN0LmjvvIznlKjmnaXlhpnljZXlhYPmtYvor5XnmoTnsbvjgIJcXG5cXG5gYGBcXG4jaWZuZGVmIERDQ19URVNUX0hcXG4jZGVmaW5lIERDQ19URVNUX0hcXG5cXG4jaW5jbHVkZSA8UU1hcD5cXG4jaW5jbHVkZSA8UVN0cmluZz5cXG4jaW5jbHVkZSA8UVRlc3Q+XFxuXFxuI2luY2x1ZGUgXFxcIm1vZHVsZXMvZGlzcGxheS9kaXNwbGF5d2lkZ2V0LmhcXFwiXFxuXFxubmFtZXNwYWNlIFRlc3RzIHtcXG5cXG5jbGFzcyBUZXN0cyA6IHB1YmxpYyBRT2JqZWN0IHtcXG4gICAgUV9PQkpFQ1RcXG5cXG5wcml2YXRlIFFfU0xPVFM6XFxuICAgIHZvaWQgdGVzdFNsaWRlclZhbHVlX2RhdGEoKVxcbiAgICB7XFxuICAgICAgICBRVGVzdDo6YWRkQ29sdW1uPGZsb2F0PihcXFwidmFsdWVcXFwiKTtcXG4gICAgICAgIFFUZXN0OjphZGRDb2x1bW48aW50PihcXFwicmVzdWx0XFxcIik7XFxuXFxuICAgICAgICBRTWFwPGZsb2F0LCBpbnQ+IHRlc3RNYXB7IHsgMS4wLCAxIH0sICB7IDEuMjUsIDIgfSwgeyAxLjUsIDMgfSxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyAxLjc1LCA0IH0sIHsgMi4wLCA1IH0sICB7IDIuMjUsIDYgfSxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyAyLjUsIDcgfSwgIHsgMi43NSwgOCB9LCB7IDMuMCwgOSB9IH07XFxuXFxuICAgICAgICBmb3IgKGF1dG8gaXQgPSB0ZXN0TWFwLmNvbnN0QmVnaW4oKTsgaXQgIT0gdGVzdE1hcC5jb25zdEVuZCgpOyArK2l0KSB7XFxuICAgICAgICAgICAgUVRlc3Q6Om5ld1JvdyhcXFwiY29udmVyVG9TbGlkZXJcXFwiKSA8PCBpdC5rZXkoKSA8PCBpdC52YWx1ZSgpO1xcbiAgICAgICAgfVxcbiAgICB9XFxuICAgIHZvaWQgdGVzdFNsaWRlclZhbHVlKClcXG4gICAge1xcbiAgICAgICAgUUZFVENIKGZsb2F0LCB2YWx1ZSk7XFxuICAgICAgICBRRkVUQ0goaW50LCByZXN1bHQpO1xcblxcbiAgICAgICAgdXNpbmcgbmFtZXNwYWNlIGRjYzo6ZGlzcGxheTtcXG5cXG4gICAgICAgIFFDT01QQVJFKERpc3BsYXlXaWRnZXQ6OmNvbnZlcnRUb1NsaWRlcih2YWx1ZSksIHJlc3VsdCk7XFxuICAgICAgICBRQ09NUEFSRShEaXNwbGF5V2lkZ2V0Ojpjb252ZXJ0VG9TY2FsZShyZXN1bHQpLCB2YWx1ZSk7XFxuICAgIH1cXG59O1xcbn0gIC8vIG5hbWVzcGFjZSBUZXN0c1xcblxcblFURVNUX01BSU4oVGVzdHM6OlRlc3RzKVxcbiNlbmRpZiAgLy8gIURDQ19URVNUX0hcXG5gYGBcXG5cXG7lnKjlrZDpobnnm67nmoRDTWFrZUxpc3RzLnR4dOS4rea3u+WKoOS4gOS4quS6jOi/m+WItu+8jOeUqOadpeW9k+S9nOWNleWFg+a1i+ivleeoi+W6j+OAglxcblxcbmBgYFxcbiMg6L+Z5Liq5a6P5pivRGFydOaPkOS+m+eahO+8jOeUqOadpeWIpOaWreaYr+WQpuW8gOWQr0NUZXN0XFxuaWYoQlVJTERfVEVTVElORylcXG5maW5kX3BhY2thZ2UoUXQ1IENPTVBPTkVOVFNcXG4gICAgVGVzdFxcblJFUVVJUkVEKVxcblxcbnNldChRdF9MSUJTXFxuICAgICR7UXRfTElCU31cXG4gICAgUXQ1OjpUZXN0XFxuKVxcblxcbnNldChURVNUX1NSQ1NcXG50ZXN0cy9kY2NfdGVzdC5oXFxuJHtESVNQTEFZX0ZJTEVTfVxcbiR7V0lER0VUU19GSUxFU31cXG4ke01PRFVMRV9GSUxFU31cXG4pXFxuXFxuIyDmt7vliqDkuIDkuKrlj6t1bml0LXRlc3TnmoTkuozov5vliLZcXG5hZGRfZXhlY3V0YWJsZSh1bml0LXRlc3RcXG4ke1RFU1RfU1JDU31cXG4ke1BST0pFQ1RfQklOQVJZX0RJUn1cXG4pXFxuXFxudGFyZ2V0X2luY2x1ZGVfZGlyZWN0b3JpZXModW5pdC10ZXN0IFBVQkxJQ1xcbiR7VEVTVF9TUkNTfVxcbiR7UFJPSkVDVF9CSU5BUllfRElSfVxcbiR7REZyYW1ld29ya0RCdXNfSU5DTFVERV9ESVJTfVxcbiR7UUdTZXR0aW5nc19JTkNMVURFX0RJUlN9XFxuJHtRdDVHdWlfUFJJVkFURV9JTkNMVURFX0RJUlN9XFxuKVxcblxcbnRhcmdldF9saW5rX2xpYnJhcmllcyh1bml0LXRlc3QgUFJJVkFURVxcbiR7UXRfTElCU31cXG4ke0RGcmFtZXdvcmtEQnVzX0xJQlJBUklFU31cXG4ke1FHU2V0dGluZ3NfTElCUkFSSUVTfVxcbiR7RHRrV2lkZ2V0X0xJQlJBUklFU31cXG4ke1hDQl9FV01IX0xJQlJBUklFU31cXG4pXFxuYGBgXFxuXFxu5Yiw6L+Z6YeM77yM55u05o6l57yW6K+R5ZCv5YqodW5pdC10ZXN05bCx5Y+v5Lul5L2/55SoUXTnmoTljZXlhYPmtYvor5XkuobvvIzkvYbmmK/liqDkuIpDVGVzdOeahOaUr+aMgeWPqumcgOimgeS4gOihjO+8mlxcblxcbmBgYFxcbmFkZF90ZXN0KGN0ZXN0IHVuaXQtdGVzdClcXG5lbmRpZigpXFxuYGBgXFxuXFxu5L2/55SoY3Rlc3QgLWo2IC1DIERlYnVnIC1UIHRlc3QgLS1vdXRwdXQtb24tZmFpbHVyZei3kUNUZXN077yM5b6X5Yiw5omn6KGM57uT5p6c77yaXFxuXFxuYGBgXFxuW2N0ZXN0XSAgICBTaXRlOiB4aWFvbWktYWlyXFxuW2N0ZXN0XSAgICBCdWlsZCBuYW1lOiBMaW51eC1jKytcXG5bY3Rlc3RdIFRlc3QgcHJvamVjdCAvaG9tZS9qdXN0Zm9ybHh6L1Byb2plY3RzL0RlZXBpbi9kZGUtY29udHJvbC1jZW50ZXIvYnVpbGRcXG5bY3Rlc3RdICAgICBTdGFydCAxOiBjdGVzdFxcbltjdGVzdF0gMS8xIFRlc3QgIzE6IGN0ZXN0IC4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4gICBQYXNzZWQgICAgMC4wNSBzZWNcXG5bY3Rlc3RdXFxuW2N0ZXN0XSAxMDAlIHRlc3RzIHBhc3NlZCwgMCB0ZXN0cyBmYWlsZWQgb3V0IG9mIDFcXG5bY3Rlc3RdXFxuW2N0ZXN0XSBUb3RhbCBUZXN0IHRpbWUgKHJlYWwpID0gICAwLjA2IHNlY1xcbltjdGVzdF0gQ1Rlc3QgZmluaXNoZWQgd2l0aCByZXR1cm4gY29kZSAwXFxuYGBgXFxuXFxu5aaC5p6c5piv6LeRdW5pdC10ZXN05LqM6L+b5Yi277yM5YiZ5Lya5b6X5YiwUXTmiZPljbDnmoTnm7jlhbPkv6Hmga/vvJpcXG5cXG5gYGBcXG4qKioqKioqKiogU3RhcnQgdGVzdGluZyBvZiBUZXN0czo6VGVzdHMgKioqKioqKioqXFxuQ29uZmlnOiBVc2luZyBRdFRlc3QgbGlicmFyeSA1LjEyLjMsIFF0IDUuMTIuMyAoeDg2XzY0LWxpdHRsZV9lbmRpYW4tbHA2NCBzaGFyZWQgKGR5bmFtaWMpIHJlbGVhc2UgYnVpbGQ7IGJ5IEdDQyA4LjMuMClcXG5QQVNTICAgOiBUZXN0czo6VGVzdHM6OmluaXRUZXN0Q2FzZSgpXFxuUEFTUyAgIDogVGVzdHM6OlRlc3RzOjp0ZXN0U2xpZGVyVmFsdWUoY29udmVyVG9TbGlkZXIpXFxuUEFTUyAgIDogVGVzdHM6OlRlc3RzOjp0ZXN0U2xpZGVyVmFsdWUoY29udmVyVG9TbGlkZXIpXFxuUEFTUyAgIDogVGVzdHM6OlRlc3RzOjp0ZXN0U2xpZGVyVmFsdWUoY29udmVyVG9TbGlkZXIpXFxuUEFTUyAgIDogVGVzdHM6OlRlc3RzOjp0ZXN0U2xpZGVyVmFsdWUoY29udmVyVG9TbGlkZXIpXFxuUEFTUyAgIDogVGVzdHM6OlRlc3RzOjp0ZXN0U2xpZGVyVmFsdWUoY29udmVyVG9TbGlkZXIpXFxuUEFTUyAgIDogVGVzdHM6OlRlc3RzOjp0ZXN0U2xpZGVyVmFsdWUoY29udmVyVG9TbGlkZXIpXFxuUEFTUyAgIDogVGVzdHM6OlRlc3RzOjp0ZXN0U2xpZGVyVmFsdWUoY29udmVyVG9TbGlkZXIpXFxuUEFTUyAgIDogVGVzdHM6OlRlc3RzOjp0ZXN0U2xpZGVyVmFsdWUoY29udmVyVG9TbGlkZXIpXFxuUEFTUyAgIDogVGVzdHM6OlRlc3RzOjp0ZXN0U2xpZGVyVmFsdWUoY29udmVyVG9TbGlkZXIpXFxuUEFTUyAgIDogVGVzdHM6OlRlc3RzOjpjbGVhbnVwVGVzdENhc2UoKVxcblRvdGFsczogMTEgcGFzc2VkLCAwIGZhaWxlZCwgMCBza2lwcGVkLCAwIGJsYWNrbGlzdGVkLCAwbXNcXG4qKioqKioqKiogRmluaXNoZWQgdGVzdGluZyBvZiBUZXN0czo6VGVzdHMgKioqKioqKioqXFxuYGBgXFxuXFxu5a+55q+UQ1Rlc3TlkoxRdOeahOWNleWFg+a1i+ivle+8jFF05Lya5ZGK6K+J5L2g6K+m57uG55qE5Ye95pWw6LCD55So5ZKM5omn6KGM6L+H56iL77yMQ1Rlc3Tmm7Tms6jph43nu5PmnpzvvIzkuI3ov4flnKhRdGNyZWF0b3LnmoTljZXlhYPmtYvor5XpnaLmnb/kuK3vvIzkvJrnnIvliLDmm7Tlpb3nmoTovpPlh7rjgIJcXG5cXG7or7TliLDlupXvvIxDVGVzdOaUr+aMgeWQr+WKqOS6huS4gOS4quW4puacieWNleWFg+a1i+ivleeahOeoi+W6j++8jOiAjOeoi+W6j+iHquW3seS9v+eUqOS6hlF05o+Q5L6b55qE5Y2V5YWD5rWL6K+V57G76L+b6KGM5rWL6K+V44CCXFxuXCIsXCJmcm9udG1hdHRlclwiOlwidGl0bGU6IENNYWtlIENUZXN0cyBmb3IgZGRlLWNvbnRyb2wtY2VudGVyXFxuZGF0ZTogMjAxOS0wNS0yMyAxNzoxNjoxNVxcbnRhZ3M6IFtcXG4gICAgQ01ha2VcXG4gICAgTGludXhcXG5dXFxuY2F0ZWdvcmllczogTGludXhcIn0iLCJtb2R1bGUuZXhwb3J0cyA9IHtcImF0dHJpYnV0ZXNcIjp7XCJ0aXRsZVwiOlwiRG9ja+aPkuS7tuW8gOWPkTznrYnlvoXloavlnZE+XCIsXCJkYXRlXCI6XCIyMDE4LTA1LTIzVDA1OjIyOjEyLjAwMFpcIixcInRhZ3NcIjpcIkxpbnV4XCJ9LFwiYm9keVwiOlwiXFxu5LuO6Zu25p6E5bu6IGRkZS1kb2NrIOeahOaPkuS7tlxcbuacrOaVmeeoi+WwhuWxleekuuS4gOS4queugOWNleeahCBkZGUtZG9jayDmj5Lku7bnmoTlvIDlj5Hov4fnqIvvvIzmj5Lku7blvIDlj5HogIXlj6/ot5/pmo/mraTmraXpqqTkuLogZGRlLWRvY2sg5Yib6YCg5Ye65pu05aSa5YW35pyJ5Liw5a+M5Yqf6IO955qE5o+S5Lu244CCXFxuXFxuPCEtLSBtb3JlIC0tPlxcblxcbuWcqOacrOaVmeeoi+S4re+8jOWwhuWIm+W7uuS4gOS4quWPr+S7peWunuaXtuaYvuekuueUqOaIt+WutuebruW9lSh+Lynkvb/nlKjmg4XlhrXnmoTlsI/lt6XlhbfjgIJcXG5cXG7mj5Lku7bnmoTlt6XkvZzljp/nkIZcXG5kZGUtZG9jayDmj5Lku7bmnKzotKjmmK/kuIDkuKrmjIkgUXQg5o+S5Lu25qCH5YeG5omA5byA5Y+R55qE5YWx5Lqr5bqT5paH5Lu2KHNvKeOAgumAmui/hyBkZGUtZG9jayDpooTlrprnmoTop4TojIPkuI7mj5DkvpvnmoTmjqXlj6PvvIzlhbHlkIzlrozmiJAgZGRlLWRvY2sg55qE5Yqf6IO95omp5bGV44CCXFxuXFxu5YeG5aSH546v5aKDXFxu5o+S5Lu255qE5byA5Y+R546v5aKD5Y+v5Lul5piv5Lu75oSP55qE77yM5Y+q6KaB5piv56ym5ZCIIFF0IOaPkuS7tuinhOiMg+WPiiBkZGUtZG9jayDmj5Lku7bop4TojIPnmoTlhbHkuqvlupPmlofku7bvvIzpg73lj6/ku6XooqvlvZPkvZwgZGRlLWRvY2sg5o+S5Lu26L295YWl44CC5LiL6Z2i5LulIFF0ICsgcW1ha2Ug5Li65L6L6L+b6KGM6K+05piO77yaXFxuXFxu5a6J6KOF5L6d6LWWXFxu5LulIERlZXBpbiAxNS41LjEg546v5aKD5Li65Z+656GA77yM6Iez5bCR5YWI5a6J6KOF5aaC5LiL55qE5YyF77yaXFxuXFxuLSBkZGUtZG9jay1kZXZcXG4tIHF0NS1xbWFrZVxcbi0gcXRiYXNlNS1kZXYtdG9vbHNcXG4tIGxpYnF0NWNvcmU1YVxcbi0gbGlicXQ1d2lkZ2V0czVcXG4tIHBrZy1jb25maWdcXG5cXG7ln7rmnKznmoTpobnnm67nu5PmnoRcXG7liJvlu7rlv4XpnIDnmoTpobnnm67nm67lvZXkuI7mlofku7ZcXG7mj5Lku7blkI3np7Dlj6vlgZpob21lX21vbml0b3LvvIzmiYDku6XliJvlu7rku6XkuIvnmoTnm67lvZXnu5PmnoTvvJpcXG5cXG5gYGBcXG5ob21lX21vbml0b3JcXG7ilJzilIDilIAgaG9tZV9tb25pdG9yLmpzb25cXG7ilJzilIDilIAgaG9tZW1vbml0b3JwbHVnaW4uY3BwXFxu4pSc4pSA4pSAIGhvbWVtb25pdG9ycGx1Z2luLmhcXG7ilJTilIDilIAgaG9tZV9tb25pdG9yLnByb1xcbiBgYGBcXG5cXG5cIixcImZyb250bWF0dGVyXCI6XCJ0aXRsZTogRG9ja+aPkuS7tuW8gOWPkTznrYnlvoXloavlnZE+XFxuZGF0ZTogMjAxOC0wNS0yMyAwNToyMjoxMlxcbnRhZ3M6IExpbnV4XCJ9IiwibW9kdWxlLmV4cG9ydHMgPSB7XCJhdHRyaWJ1dGVzXCI6e1widGl0bGVcIjpcIkphdmFTY3JpcHTlu7rpgKDogIXmqKHlvI9cIixcImRhdGVcIjpcIjIwMjAtMDItMDFUMjA6NTI6NTguMDAwWlwiLFwidGFnc1wiOlwiSmF2YXNjcmlwdFwiLFwiY2F0ZWdvcmllc1wiOlwi6K6+6K6h5qih5byPXCJ9LFwiYm9keVwiOlwiXFxu5bu66YCg6ICF5qih5byP5bCx5piv5oyH5bCG57G755qE5p6E6YCg5ZKM5YW26KGo56S65YiG56a75byA5p2l77yM6LCD55So6ICF5Y+v5Lul6YCa6L+H5LiN5ZCM55qE5p6E5bu66L+H56iL5Yib6YCg5Ye65LiN5ZCM6KGo56S655qE5a+56LGh44CC5Li76KaB6Kej5Yaz5Zyo6L2v5Lu257O757uf5Lit77yM5pyJ5pe25YCZ6Z2i5Li0552AXFxcIuS4gOS4quWkjeadguWvueixoVxcXCLnmoTliJvlu7rlt6XkvZzvvIznlLHkuo7pnIDmsYLnmoTlj5jljJbvvIzov5nkuKrlpI3mnYLlr7nosaHnmoTmn5Dkupvpg6jliIbnu4/luLjpnaLkuLTnnYDliafng4jnmoTlj5jljJbvvIzkuIDkupvln7rmnKzpg6jku7bkuI3kvJrlj5jjgILmiYDku6XpnIDopoHlsIblj5jkuI7kuI3lj5jliIbnprvjgILkuI7mir3osaHlt6XljoLnmoTljLrliKvvvJrlnKjlu7rpgKDogIXmqKHlvI/ph4zvvIzmnInkuKrmjIflr7zogIUoRGlyZWN0b3Ip77yM55Sx5oyH5a+86ICF5p2l566h55CG5bu66YCg6ICF77yM55So5oi35piv5LiO5oyH5a+86ICF6IGU57O755qE77yM5oyH5a+86ICF6IGU57O75bu66YCg6ICF5pyA5ZCO5b6X5Yiw5Lqn5ZOB44CC5Y2z5bu66YCg6ICF5qih5byP5Y+v5Lul5by65Yi25a6e6KGM5LiA56eN5YiG5q2l6aqk6L+b6KGM55qE5bu66YCg6L+H56iL44CCXFxuXFxuPCEtLSBtb3JlIC0tPlxcblxcbiMjICDlu7rpgKDogIXmqKHlvI/lm5vopoHntKBcXG5cXG4xLiDkuqflk4HnsbtQcm9kdWN0OiDkuIDoiKzmmK/kuIDkuKrovoPkuLrlpI3mnYLnmoTlr7nosaHvvIzkuZ/lsLHmmK/or7TliJvlu7rlr7nosaHnmoTov4fnqIvmr5TovoPlpI3mnYLvvIzkuIDoiKzkvJrmnInovoPlpJrnmoTku6PnoIHjgIJcXG4yLiDmir3osaHlu7rpgKDogIXnsbtCdWlsZGVyOiDlsIblu7rpgKDnmoTlhbfkvZPov4fnqIvkuqTkuojlroPnmoTlrZDnsbvmnaXlrp7njrDjgIJcXG4zLiDlu7rpgKDogIXnsbtDb25jcmVhdGVCdWlsZGVyOiDnu4Tku7bkuqflk4HvvIzov5Tlm57nu4Tku7blpb3nmoTkuqflk4FcXG40LiDmjIflr7znsbtEaXJlY3Rvcjog6LSf6LSj6LCD55So6YCC5b2T55qE5bu66YCg6ICF5p2l57uE5Lu25Lqn5ZOB77yM5oyH5a+857G75LiA6Iis5LiN5LiO5Lqn5ZOB57G75Y+R55Sf5L6d6LWW5YWz57O777yM5LiO5oyH5a+857G755u05o6l5Lqk5LqS55qE5piv5bu66YCg6ICF57G744CCXFxuXFxuIyMgIOW7uumAoOiAheaooeW8j+eahOS8mOeCuVxcblxcbuW7uumAoOiAheaooeW8j+eahOWwgeijheW+iOWlve+8jOS9v+eUqOW7uumAoOiAheaooeW8j+WPr+S7pei/m+ihjOacieaViOeahOWwgeijheWPmOWMlu+8jOWcqOS9v+eUqOW7uumAoOiAheaooeW8j+eahOWcuuaZr+S4re+8jOS6p+WTgeexu+WSjOW7uumAoOiAheexu+aYr+avlOi+g+eos+WumueahO+8jOWboOatpO+8jOWwhuS4u+imgeeahOS4muWKoemAu+i+keWwgeijheWcqOaMh+WvvOiAheexu+S4reWvueaVtOS9k+WPr+S7peWPluW+l+avlOi+g+WlveeahOeos+WumuaAp+OAglxcblxcbuW7uumAoOiAheexu+S5n+W+iOaWueS+v+aJqeWxle+8jOWmguaenOacieaWsOeahOmcgOaxgu+8jOWPqumcgOimgeWunueOsOS4gOS4quaWsOeahOW7uumAoOiAheexu+WNs+WPr+OAglxcblxcblxcbuS6p+WTgeexuyBwcm9kdWN0LnRzXFxuYGBgXFxuY2xhc3MgUHJvZHVjdCB7XFxuICAgIHByaXZhdGUgX25hbWU6IFN0cmluZztcXG4gICAgcHVibGljIG5hbWUoKTogU3RyaW5nIHtcXG4gICAgICAgIHJldHVybiB0aGlzLl9uYW1lO1xcbiAgICB9XFxuICAgIHB1YmxpYyBzZXROYW1lKG5hbWU6IFN0cmluZykge1xcbiAgICAgICAgdGhpcy5fbmFtZSA9IG5hbWU7XFxuICAgIH1cXG59XFxuYGBgXFxuXFxu5oq96LGh5bu66YCg57G7IGJ1aWxkZXIudHNcXG5gYGBcXG5pbnRlcmZhY2UgQnVpbGRlciB7XFxuICAgIF9wcm9kdWN0OiBQcm9kdWN0O1xcbiAgICBzZXROYW1lKG5hbWU6IFN0cmluZyk6IFByb2R1Y3Q7XFxuICAgIGJ1aWxkKCk6IFByb2R1Y3Q7XFxufVxcbmBgYFxcblxcbuW7uumAoOexuyBjb25jcmVhdGVidWlsZGVyLnRzXFxuYGBgXFxuY2xhc3MgQ29uY3JlYXRlQnVpbGRlciBpbXBsZW1lbnRzIEJ1aWxkZXIge1xcbiAgICBfcHJvZHVjdDogUHJvZHVjdCA9IG5ldyBQcm9kdWN0O1xcbiAgICBwdWJsaWMgc2V0TmFtZShuYW1lOiBTdHJpbmcpOiBQcm9kdWN0IHtcXG4gICAgICAgIHRoaXMuX3Byb2R1Y3Quc2V0TmFtZShuYW1lKTtcXG4gICAgICAgIHJldHVybiB0aGlzLl9wcm9kdWN0O1xcbiAgICB9XFxuICAgIHB1YmxpYyBidWlsZCgpOiBQcm9kdWN0IHtcXG4gICAgICAgIHJldHVybiB0aGlzLl9wcm9kdWN0O1xcbiAgICB9XFxufVxcblxcbmNsYXNzIEhlbGxvd29ybGRCdWlsZGVyIGV4dGVuZHMgQ29uY3JlYXRlQnVpbGRlciB7XFxuICAgIHB1YmxpYyBidWlsZCgpOiBQcm9kdWN0IHtcXG4gICAgICAgIHRoaXMuX3Byb2R1Y3Quc2V0TmFtZShcXFwiaGVsbG8gd29ybGQhXFxcIik7XFxuICAgICAgICByZXR1cm4gdGhpcy5fcHJvZHVjdDtcXG4gICAgfVxcbn1cXG5gYGBcXG5cXG7mjIflr7znsbsgZGlyZWN0b3IudHNcXG5gYGBcXG5jbGFzcyBEaXJlY3RvciB7XFxuICAgIHByaXZhdGUgX2RlZmF1bHRCdWlsZGVyOiBDb25jcmVhdGVCdWlsZGVyID0gbmV3IENvbmNyZWF0ZUJ1aWxkZXI7XFxuICAgIHByaXZhdGUgX2hlbGxvd29ybGRCdWlsZGVyOiBIZWxsb3dvcmxkQnVpbGRlciA9IG5ldyBIZWxsb3dvcmxkQnVpbGRlcjtcXG4gICAgcHVibGljIGJ1aWxkRm9yRGVmYXVsdCgpOiBQcm9kdWN0ICB7XFxuICAgICAgICByZXR1cm4gdGhpcy5fZGVmYXVsdEJ1aWxkZXIuYnVpbGQoKTtcXG4gICAgfVxcbiAgICBwdWJsaWMgYnVpbGRGb3JIZWxsb3dvcmxkKCk6IFByb2R1Y3Qge1xcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hlbGxvd29ybGRCdWlsZGVyLmJ1aWxkKCk7XFxuICAgIH1cXG59XFxuYGBgXFxuXFxu5rWL6K+V6L+Q6KGMOlxcbmBgYFxcbmxldCBkaXJlY3RvciA9IG5ldyBEaXJlY3RvcigpO1xcbmNvbnNvbGUubG9nKGRpcmVjdG9yLmJ1aWxkRm9yRGVmYXVsdCgpLm5hbWUoKSk7XFxuY29uc29sZS5sb2coZGlyZWN0b3IuYnVpbGRGb3JIZWxsb3dvcmxkKCkubmFtZSgpKTtcXG5gYGBcXG5cXG7miafooYznu5PmnpxcXG5gYGBcXG51bmRlZmluZWRcXG5oZWxsbyB3b3JsZCFcXG5gYGBcXG5cXG7pgJrov4fkuI3lkIznmoRidWlsZGVy5bCx5Y+v5Lul5p6E5bu65LiN5ZCM55qE5a+56LGh5Ye65p2l77yM5b2T6ZyA5rGC5Y+Y5Yqo55qE5pe25YCZ77yM5oiR5Lus5Y+q6ZyA6KaB5omp5bGV5Ye65LiN5ZCM55qEQnVpbGRlcuWSjERpcmVjdG9y5bCx5Y+v5Lul5ruh6Laz44CCXFxuXCIsXCJmcm9udG1hdHRlclwiOlwidGl0bGU6IEphdmFTY3JpcHTlu7rpgKDogIXmqKHlvI9cXG5kYXRlOiAyMDIwLTAyLTAxIDIwOjUyOjU4XFxudGFnczogSmF2YXNjcmlwdFxcbmNhdGVnb3JpZXM6IOiuvuiuoeaooeW8j1wifSIsIm1vZHVsZS5leHBvcnRzID0ge1wiYXR0cmlidXRlc1wiOntcImxheW91dFwiOlwicG9zdFwiLFwidGl0bGVcIjpcIkxpbnV455qEUEFN5piv5LuA5LmIXCIsXCJzdWJ0aXRsZVwiOlwi5oiR55qEbGludXjml6XluLhcIixcImRhdGVcIjpcIjIwMTgtMDQtMDFUMTI6MTY6MDguMDAwWlwiLFwiYXV0aG9yXCI6XCLlvKDkuIHlhYNcIixcInRhZ3NcIjpbXCJMaW51eFwiXX0sXCJib2R5XCI6XCJcXG7mnKzmlofkvJrln7rnoYDnmoTku4vnu43kuIDkuItQQU3mmK/ku4DkuYjvvIzorqnkvaDog73lpJ/lm57nrZRQQU3mmK/ku4DkuYjjgIFQQU3mnInku4DkuYjnlKjjgIHlpoLkvZXmoLnmja7pnIDmsYLoh6rlt7HlvIDlj5FQQU3mqKHlnZfjgIJcXG5cXG4jIyMgUEFN5piv5LuA5LmIXFxuXFxuUEFN5Y2z5Y+v5o+S5ouU6K6k6K+B5qih5Z2X44CC5a6D5o+Q5L6b5LqG5LiA5Liq5omA5pyJ5pyN5Yqh55qE5Lit5b+D6aqM6K+B5py65Yi277yM6YCC55So5LqO5pmu6YCa55m75b2V44CBc3No55m75b2V562J6ZyA6KaB6L+b6KGM6Lqr5Lu96K6k6K+B55qE57O757uf5Lit44CCXFxuXFxuPCEtLSBtb3JlIC0tPlxcblxcbiMjIyDkuLrku4DkuYjkvb/nlKhQQU1cXG5cXG7kuLrkuoblronlhajotbfop4HvvIzorqHnrpfmnLrlj6rog73nu5npgJrov4fmjojmnYPnmoTnlKjmiLfov5vooYzkvb/nlKjvvIzlnKjliJvlu7rnlKjmiLfml7bvvIzlr4bnoIHkvJrooqvliqDlr4bkv53lrZjlnKgvZXRjL3Bhc3N3ZOS4rSzlnKjnlKjmiLfnmbvlvZXml7bvvIzph43mlrDorqHnrpflr4bnoIHvvIznhLblkI7lnKgvZXRjL3Bhc3N3ZOS4rei/m+ihjOWvueavlOOAglxcblxcbumZpOS6huS4iumdoui/meenje+8jOi/mOacieWFtuS7luaWueW8j+eahOmqjOivge+8jOavlOWmgueOsOWcqOe7j+W4uOS9v+eUqOeahOaMh+e6ueiupOivge+8jOWFtuaguOW/g+aAneaDs+mDveaYr+ajgOafpeWGheWuueaYr+WQpuWMuemFjeOAguS9huaYr+i/meS6m+aWueahiOmDveacieS4gOS6m+mAmueXhe+8jOmCo+WwseaYr+mcgOimgemaj+edgOW6lOeUqOeoi+W6j+S4gOi1t+e8luivkeadpeS9v+eUqO+8jOWmguaenOiupOivgeezu+e7n+aciemXrumimO+8jOaIluiAheabtOaWsOS6hueul+azle+8jOWwsemcgOimgemHjeaWsOe8luivkeaJjeiDveS9v+eUqOOAglxcblxcbj4g6Ym05LqO5Lul5LiK5Y6f5Zug77yM5Lq65Lus5byA5aeL5a+75om+5LiA56eN5pu05L2z55qE5pu/5Luj5pa55qGI77ya5LiA5pa56Z2i77yM5bCG6Ym05Yir5Yqf6IO95LuO5bqU55So5Lit54us56uL5Ye65p2l77yM5Y2V54us6L+b6KGM5qih5Z2X5YyW6K6+6K6h77yM5a6e546w5ZKM57u05oqk77yb5Y+m5LiA5pa56Z2i77yM5Li66L+Z5Lqb6Ym05Yir5qih5Z2X5bu656uL5qCH5YeGIEFQSe+8jOS7peS+v+WQhOW6lOeUqOeoi+W6j+iDveaWueS+v+eahOS9v+eUqOWug+S7rOaPkOS+m+eahOWQhOenjeWKn+iDve+8m+WQjOaXtu+8jOmJtOWIq+acuuWItuWvueWFtuS4iuWxgueUqOaIt++8iOWMheaLrOW6lOeUqOeoi+W6j+WSjOacgOe7iOeUqOaIt++8ieaYr+mAj+aYjueahOOAglxcblxcbiMjIyBQQU3mmK/lpoLkvZXlt6XkvZznmoRcXG5cXG4hW10oTGludXjnmoRQQU3mmK/ku4DkuYgvUEFN57uT5p6ELnBuZylcXG5cXG5QQU3ph4fnlKjkuobliIblsYLnmoTmqKHlnZflvI/lvIDlj5HvvIzmj5Dkvpvkuoblm5vnp43nsbvlnovnmoTmqKHlnZc6XFxuXFxuLSDorqTor4HnrqHnkIZcXG4tIOi0puWPt+euoeeQhlxcbi0g5Lya6K+d566h55CGXFxuLSDlj6Pku6TnrqHnkIZcXG5cXG7ov5nlm5vkuKrmjqXlj6PlsLHlj6/ku6Xmu6HotrPnlKjmiLfnmoTorqTor4HlkoznrqHnkIbjgILkuIDkuKrmqKHlnZflj6/ku6XlkIzml7blsZ7kuo7lpJrnp43nsbvlnovvvIzlj6rpnIDlrp7njrDlr7nlupTnmoTlh73mlbDlsLHlj6/ku6XjgIJcXG5cXG7nm67liY1QQU3nmoTlrp7njrDmnInku6XkuIvkuInnp43vvJpcXG4+MS4gTGludXgtUEFNOiBMaW51eC1QQU0g5ra155uW5LqG5pys5paH5Lit6K6o6K6655qE5omA5pyJIFBBTeOAguWcqOS7u+S9leS4gOS4qiBMaW51eCDlubPlj7DkuK3nmoQgUEFNIOeahOS4u+imgee7k+aehOmDveexu+S8vOS6jiBMaW51eC1QQU0g54mI5pys44CCXFxuPjIuIE9wZW5QQU06IE9wZW5QQU0g5piv55SxIE5BSSDlrp7pqozlrqTnmoQgRGFnLUVybGluZyBTbW9yZ3JhdiDlvIDlj5HnmoTlj6bkuIDkuKogUEFNIOWunueOsO+8jOWxnuS6jiBEQVJQQS1DSEFUUyDnoJTnqbbpobnnm67jgILnlLHkuo7lroPmmK/lvIDmupDnmoTvvIzlm6DmraTlroPkuLvopoHnlLEgRnJlZUJTROOAgU5ldEJTRCDlj4rlupTnlKjnqIvluo/vvIjliqDkuIogTWFjIE9TIFjvvInkvb/nlKjjgIJcXG4+My4gSmF2YeKEoiBQQU0g5oiWIEpQYW06IFBBTSDkuLvopoHmmK/mlK/mjIEgTGludXgg5ZKMIFVOSVgg55qE5qCH5YeG6aqM6K+B5qih5Z2X44CCSlBhbSDlsIYgSmF2YSDpg6jliIbkuI7mma7pgJogUEFNIOiBlOezu+S6hui1t+adpeOAgkpQYW0g5YWB6K645Z+65LqOIEphdmEg55qE5bqU55So56iL5bqP5L2/55SoIFBBTSDmqKHlnZfmiJblt6XlhbfvvIjlpoIgYXV0aOOAgWFjY291bnTjgIFwYXNzd2TjgIFzZXNzaW9uIOetie+8ieOAguWug+aPkOS+m+S6hiBKQUFTIOWSjOebtOaOpSBBUEnvvIzlubbkuJTmlK/mjIHlpKflpJrmlbAgVW5peCBPUyDlkozmnrbmnoTjgIJcXG5cXG7omb3nhLbmnInkuI3lkIznmoRQQU3lrp7njrDvvIzkvYbmmK/kuLvopoHlip/og73pg73mmK/nsbvkvLznmoTvvIzlrozmiJDnlKjmiLfnmoTpqozor4HjgIJcXG5cXG7mg7PopoHkuobop6Pmm7TlpJrvvIzlj6/mn6XnnItJQk3nmoTmlofmoaPlupPjgIJcXG5b5rex5YWlIExpbnV4IFBBTSDkvZPns7vnu5PmnoRdKGh0dHBzOi8vd3d3LmlibS5jb20vZGV2ZWxvcGVyd29ya3MvY24vbGludXgvbC1jbi1wYW0vaW5kZXguaHRtbClcXG5cXG4jIyMg5aaC5L2V6Ieq5bex5byA5Y+RUEFN5qih5Z2XXFxuXFxuUEFN5qih5Z2X5L2/55So5LiA5LiqcGFtX2hhbmRsZeexu+Wei+eahOe7k+aehOW9k+WBmuWPpeafhO+8jOS5n+aYr+WUr+S4gOS4gOS4qlBBTeWSjOeoi+W6j+i/m+ihjOmAmuS/oeeahOe7k+aehOOAglxcblxcbummluWFiOWcqOe8luWGmeeahOacjeWKoeaooeWdl+eahOa6kOeoi+W6j+mHjOimgeWMheWQq+S4i+WIl+WktOaWh+S7tu+8mlxcblxcbmBgYFxcbiNpbmNsdWRlIDxzZWN1cml0eS9wYW1fbW9kdWxlcy5oPlxcbmBgYFxcblxcblBBTeaooeWdl+aYr+S4gOS4quS4queahHNv5Yqo5oCB5bqT44CCUEFN5Lya6YCa6L+HZGxvcGVu5p2l6KOF6L296L+Z5Lqbc2/jgILlm5vkuKrmqKHlnZfliIbliKvpnIDopoHlrp7njrDlr7nlupTnmoTmlrnms5XvvIxQQU3kvJrmoLnmja7phY3nva7mlofku7bmnaXosIPnlKjov5nkupvmlrnms5XjgIJcXG5cXG7mr4/kuKpQQU3mqKHlnZfnmoTorqTor4HnqIvluo/pg73ku6VwYW1fc3RhcnTlvIDlp4vvvIzku6VwYW1fZW5k57uT5p2f44CCUEFN6L+Y5o+Q5L6b5LqGcGFtX2dldF9pdGVt5ZKMcGFtX3NldF9pdGVt5YWx5Lqr5pyJ5YWz6K6k6K+B5Lya6K+d55qE5p+Q5Lqb5YWs5YWx5L+h5oGv77yM5L6L5aaC55So5oi35ZCN44CB5pyN5Yqh5ZCN5ZKM5a+G56CB44CC5bqU55So56iL5bqP5Zyo6LCD55So5LqGcGFtX3N0YXJ05Lul5ZCO5Y+v5Lul55So6L+Z5LqbQVBJc+adpeaUueWPmOeKtuaAgeS/oeaBr+OAguWunumZheW3peS9nOeahOWHveaVsOaciTbkuKrvvJpcXG5cXG7mqKHlnZfnsbvlnosgfCDlh73mlbAgfCDlip/og71cXG4tLS0tIHwgLS0tLSB8IC0tLS1cXG7orqTor4HnrqHnkIYgfCBQQU1fRVhURVJOIGludCBwYW1fc21fYXV0aGVudGljYXRlKHBhbV9oYW5kbGVfdCAqcGFtaCwgaW50IGZsYWdzLCBpbnQgYXJnYywgY29uc3QgY2hhciAqKmFyZ3YpIHwg6K6k6K+B55So5oi3XFxu6K6k6K+B566h55CGIHwgIFBBTV9FWFRFUk4gaW50IHBhbV9zbV9zZXRjcmVkKHBhbV9oYW5kbGVfdCAqcGFtaCwgaW50IGZsYWdzLCBpbnQgYXJnYywgY29uc3QgY2hhciAqKmFyZ3YpIHwg6K6+572u55So5oi36K+B5LmmXFxu6LSm5Y+3566h55CGIHwgUEFNX0VYVEVSTiBpbnQgcGFtX3NtX2FjY3RfbWdtdChwYW1faGFuZGxlX3QgKnBhbWgsIGludCBmbGFncywgaW50IGFyZ2MsIGNvbnN0IGNoYXIgKiphcmd2KSB8IOi0puWPt+euoeeQhlxcbuS8muivneeuoeeQhiB8IFBBTV9FWFRFUk4gaW50IHBhbV9zbV9vcGVuX3Nlc3Npb24ocGFtX2hhbmRsZV90ICpwYW1oLCBpbnQgZmxhZ3MsIGludCBhcmdjLCBjb25zdCBjaGFyICoqYXJndikgfCDmiZPlvIDkvJror51cXG7kvJror53nrqHnkIYgfCBQQU1fRVhURVJOIGludCBwYW1fc21fY2xvc2Vfc2Vzc2lvbihwYW1faGFuZGxlX3QgKnBhbWgsIGludCBmbGFncywgaW50IGFyZ2MsIGNvbnN0IGNoYXIgKiphcmd2KSB8IOWFs+mXreS8muivnVxcbuWPo+S7pOeuoeeQhiB8IFBBTV9FWFRFUk4gaW50IHBhbV9zbV9jaGF1dGh0b2socGFtX2hhbmRsZV90ICpwYW1oLCBpbnQgZmxhZ3MsIGludCBhcmdjLCBjb25zdCBjaGFyICoqYXJndikgfCDorr7nva7lj6Pku6RcXG5cXG7lkIzkuIDkuKrmqKHlnZflj6/ku6XlkIzml7bmlK/mjIHkuI3lkIznmoTnsbvlnovvvIzlj6/ku6XkuIDkuKrmqKHlnZflhajpg6jlrp7njrDov5nkupvmlrnms5XvvIzkuZ/lj6/ku6Xlrp7njrDpg6jliIbjgIJQQU3oh6rluKbnmoRwYW1fdW5peC5zb+WwseaYr+aUr+aMgeWbm+enjeexu+Wei+OAglxcblxcbuWcqOWHveaVsOWGhei/m+ihjOivpue7hueahOaTjeS9nO+8jOacgOWQjui/lOWbnue7k+aenO+8jOWNs+WPr+WujOaIkOaVtOS4qumqjOivgea1geeoi+OAglxcblxcbiMjIyDphY3nva5QQU1cXG5cXG5QQU3nmoTphY3nva7pgJrluLjlnKgvZXRjL3BhbS5kL+S4i+OAglxcblxcbuaooeWdl+WwhuaMieeFp+WcqOmFjee9ruaWh+S7tuS4reWIl+WHuueahOmhuuW6j+iiq+iwg+eUqO+8jOi/meWPluWGs+S6juavj+S4quadoeebruWFgeiuuOeahCBDb250cm9sX2ZsYWcg55qE5YC844CCQ29udHJvbF9mbGFnIOWAvOWMheaLrO+8mlxcblxcbj4gUmVxdWlyZWTvvJrloIbmoIjkuK3nmoTmiYDmnIkgUmVxdWlyZWQg5qih5Z2X5b+F6aG755yL5L2c5LiA5Liq5oiQ5Yqf55qE57uT5p6c44CC5aaC5p6c5LiA5Liq5oiW5aSa5LiqIFJlcXVpcmVkIOaooeWdl+Wksei0pe+8jOWImeWunueOsOWghuagiOS4reeahOaJgOaciSBSZXF1aXJlZCDmqKHlnZfvvIzkvYbmmK/lsIbov5Tlm57nrKzkuIDkuKrplJnor6/jgIJcXG4+XFxuPlN1ZmZpY2llbnTvvJrlpoLmnpzmoIforrDkuLogc3VmZmljaWVudCDnmoTmqKHlnZfmiJDlip/lubbkuJTlhYjliY3msqHmnIkgUmVxdWlyZWQg5oiWIHN1ZmZpY2llbnQg5qih5Z2X5aSx6LSl77yM5YiZ5b+955Wl5aCG5qCI5Lit55qE5omA5pyJ5YW25L2Z5qih5Z2X5bm26L+U5Zue5oiQ5Yqf44CCXFxuPlxcbj5PcHRpb25hbO+8muWmguaenOWghuagiOS4reayoeacieS4gOS4quaooeWdl+aYryByZXF1aXJlZCDlubbkuJTmsqHmnInku7vkvZXkuIDkuKogc3VmZmljaWVudCDmqKHlnZfmiJDlip/vvIzliJnmnI3liqEv5bqU55So56iL5bqP6Iez5bCR6KaB5pyJ5LiA5LiqIG9wdGlvbmFsIOaooeWdl+aIkOWKn+OAglxcblxcbiMjIyDlnKjnqIvluo/kuK3kvb/nlKhQQU3ov5vooYzpqozor4FcXG5cXG4xLiDlvIDlj5FQQU3pqozor4HmqKHlnZdcXG5cXG5gYGBcXG4jaW5jbHVkZSA8c2VjdXJpdHkvcGFtX2FwcGwuaD5cXG4jaW5jbHVkZSA8c2VjdXJpdHkvcGFtX21vZHVsZXMuaD5cXG4jaW5jbHVkZSA8c3RkaW8uaD5cXG5cXG4vLyDlj6rlrp7njrDotKbmiLforqTor4FcXG5QQU1fRVhURVJOIGludCBwYW1fc21fYXV0aGVudGljYXRlKHBhbV9oYW5kbGVfdCAqcGFtaCwgaW50IGZsYWdzLCBpbnQgYXJnYyxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNoYXIgKiphcmd2KSB7XFxuICBjaGFyICp1c2VybmFtZTtcXG4gIGNoYXIgcGFzc3dvcmRbMjU2XTtcXG5cXG4gIC8v5b6X5Yiw55So5oi35ZCNXFxuICBwYW1fZ2V0X3VzZXIocGFtaCwgJnVzZXJuYW1lLCBcXFwiVXNlcm5hbWU6IFxcXCIpO1xcblxcbiAgLy8g5b6X5Yiw5a+G56CBXFxuICBwcmludGYoXFxcIlBhc3N3b3JkOiBcXFwiKTtcXG4gIGdldHMocGFzc3dvcmQpO1xcblxcbiAgLy8g5rWL6K+V5Yik5pat77yM5aaC5p6c55So5oi35ZCN5ZKM5a+G56CB5LiN55u4562J77yM5bCx6K6k6K+B5aSx6LSlXFxuICBpZiAoc3RyY21wKHVzZXJuYW1lLCBwYXNzd29yZCkgIT0gMCkge1xcbiAgICByZXR1cm4gUEFNX0FVVEhfRVJSO1xcbiAgfVxcblxcbiAgcHJpbnRmKFxcXCJQYXNzd29yZCBpczogJXNcXFxcblxcXCIsIHBhc3N3b3JkKTtcXG4gIHJldHVybiBQQU1fU1VDQ0VTUztcXG59XFxuYGBgXFxuXFxu57yW6K+ROlxcblxcbmBgYFxcbmdjYyAtZlBJQyAtZm5vLXN0YWNrLXByb3RlY3RvciAtYyBwYW1fdGVzdF9tb2QuY1xcbnN1ZG8gbGQgLXggLS1zaGFyZWQgLW8gL2xpYi9zZWN1cml0eS9wYW1fdGVzdF9tb2Quc28gcGFtX3Rlc3RfbW9kLm9cXG5gYGBcXG5cXG7ov5jpnIDopoHkv67mlLlwYW3nmoTphY3nva7vvIzmnaXliqDovb3ov5nkuKpzb+OAgue8lui+kS9ldGMvcGFtLmQvY29tbW9uLWF1dGhcXG5cXG5gYGBcXG5hdXRoIFtzdWNjZXNzPTEgZGVmYXVsdD1pZ25vcmVdIHBhbV90ZXN0X21vZC5zb1xcbmBgYFxcblxcbui/memHjOeahHN1Y2Nlc3PnmoTlgLzpnIDopoHmoLnmja7lrp7pmYXmg4XlhrXmnaXosIPmlbTvvIzlv4XpobvmmK/miYDmnInph4zpnaLnmoTmnIDlpKflgLzjgIJcXG5cXG4yLiDkvb/nlKjmqKHlnZfov5vooYzpqozor4FcXG5cXG5gYGBcXG4vLyBQQU3lv4XpobvnmoTkuKTkuKrlpLTmlofku7ZcXG4jaW5jbHVkZSA8aW9zdHJlYW0+XFxuI2luY2x1ZGUgPHNlY3VyaXR5L3BhbV9hcHBsLmg+XFxuI2luY2x1ZGUgPHNlY3VyaXR5L3BhbV9taXNjLmg+XFxuXFxudXNpbmcgbmFtZXNwYWNlIHN0ZDtcXG5cXG5leHRlcm4gaW50IG1pc2NfY29udihpbnQgbnVtX21zZywgY29uc3Qgc3RydWN0IHBhbV9tZXNzYWdlICoqbXNnbSxcXG4gICAgICAgICAgICAgICAgICAgICBzdHJ1Y3QgcGFtX3Jlc3BvbnNlICoqcmVzcG9uc2UsIHZvaWQgKmFwcGRhdGFfcHRyKSB7XFxuXFxuICByZXR1cm4gUEFNX1NVQ0NFU1M7XFxufVxcblxcbmNvbnN0IHN0cnVjdCBwYW1fY29udiBjb252ID0ge21pc2NfY29udiwgTlVMTH07XFxuXFxuaW50IG1haW4oaW50IGFyZ2MsIGNoYXIgKmFyZ3ZbXSkge1xcbiAgLy8g5Yid5aeL5YyWXFxuICBwYW1faGFuZGxlX3QgKnBhbWggPSBOVUxMO1xcbiAgaW50IHJldHZhbDtcXG4gIGNvbnN0IGNoYXIgKnVzZXJuYW1lID0gYXJndlsxXTtcXG5cXG4gIC8vIOWIneWni+WMllBBTSDorr7nva5jb21tb24tYXV0aOS4uumqjOivgemFjee9rlxcbiAgaWYgKChwYW1fc3RhcnQoXFxcImNvbW1vbi1hdXRoXFxcIiwgdXNlcm5hbWUsICZjb252LCAmcGFtaCkpICE9IFBBTV9TVUNDRVNTKSB7XFxuICAgIHJldHVybiAtMTtcXG4gIH1cXG5cXG4gIC8vIC8v6K6k6K+B55So5oi3XFxuICByZXR2YWwgPSBwYW1fYXV0aGVudGljYXRlKHBhbWgsIDApO1xcblxcbiAgY291dCA8PCAocmV0dmFsID09IFBBTV9TVUNDRVNTID8gXFxcIlNVQ0NFU1NcXFxcblxcXCIgOiBcXFwiRmFpbGVkXFxcXG5cXFwiKSA8PCBlbmRsO1xcblxcbiAgLy8gLy8g57uT5p2fUEFNXFxuICBpZiAocGFtX2VuZChwYW1oLCByZXR2YWwpICE9IFBBTV9TVUNDRVNTKSB7XFxuICAgIGNvdXQgPDwgXFxcImNoZWNrX3VzZXI6IGZhaWxlZCB0byByZWxlYXNlIGF1dGhlbnRpY2F0b3JcXFxcblxcXCIgPDwgZW5kbDtcXG4gICAgcmV0dXJuIC0xO1xcbiAgfVxcblxcbiAgcmV0dXJuIHJldHZhbCA9PSBQQU1fU1VDQ0VTUyA/IDAgOiAxO1xcbn1cXG5gYGBcXG5cXG7nvJbor5HmtYvor5XkuIDkuIs6XFxuXFxuYGBgXFxuZysrIC1vIHBhbV90ZXN0IHBhbV90ZXN0LmNjIC1scGFtIC1scGFtX21pc2NcXG5zdWRvIC4vcGFtX3Rlc3QgJFVTRVJcXG5gYGBcXG5cXG7ovpPlh7rkuLrvvJpcXG5cXG5gYGBcXG4kIC4vcGFtX3Rlc3QgdGVzdCAgICAgICBcXG5QYXNzd29yZDogdGVzdFxcblBhc3N3b3JkIGlzOiB0ZXN0XFxuU1VDQ0VTU1xcbmBgYFxcblxcbiMjIyDmgLvnu5NcXG5cXG7ln7rkuo5QQU3orqTor4HkvZPns7vvvIzmiJHku6zlj6/ku6XmoLnmja7oh6rlt7HnmoTpnIDmsYLku7vmhI/nmoTmianlsZVsaW51eOi0puaIt++8jGxpbnV45LiL55qEcGJpcy1vcGVu77yM5bCx5piv5Z+65LqOUEFN5omp5bGV5Ye65p2l55qE5LiA5LiqQUTln5/nmbvlvZXmqKHlnZfvvIzlroPmj5DkvpvkuobkuIDkuKpwYW1fbHNhc3Muc2/nmoTmlofku7bvvIzmnaXov5vooYzotKbmiLfnmoTpqozor4HjgILmiJHku6zkuZ/lj6/ku6Xoh6rlt7Horr7orqHkuIDlpZforqTor4HmtYHnqIvvvIzlj6rpnIDopoHmu6HotrPkuIrpnaLnmoTmjqXlj6PopoHmsYLlsLHlj6/ku6XjgIJcXG5cXG4+IOaPkOS+m+acuuWItu+8jOiAjOmdnuetlueVpVwiLFwiZnJvbnRtYXR0ZXJcIjpcImxheW91dDogICAgIHBvc3RcXG50aXRsZTogICAgICBcXFwiTGludXjnmoRQQU3mmK/ku4DkuYhcXFwiXFxuc3VidGl0bGU6ICAgXFxcIuaIkeeahGxpbnV45pel5bi4XFxcIlxcbmRhdGU6ICAgICAgIDIwMTgtMDQtMDEgMTI6MTY6MDhcXG5hdXRob3I6ICAgICBcXFwi5byg5LiB5YWDXFxcIlxcbnRhZ3M6XFxuICAgIC0gTGludXhcIn0iLCJtb2R1bGUuZXhwb3J0cyA9IHtcImF0dHJpYnV0ZXNcIjp7XCJ0aXRsZVwiOlwiUFBBXCIsXCJkYXRlXCI6XCIyMDE3LTA3LTI0VDE2OjA3OjUwLjAwMFpcIixcInRhZ3NcIjpudWxsfSxcImJvZHlcIjpcIlxcbuS5n+iuuOmcgOimgeWuieijhWRpcm1uZ3JcXG5cXG5tYXliZSB5b3UgbmVlZCBpbnN0YWxsIGRpcm1uZ3JcXG5cXG5cXG7ov73liqDlhoXlrrnliLAvZXRjL2FwdC9zb3VyY2VzLmxpc3RcXG5cXG5BcHBlbmQgY29udGVudCB0byAvZXRjL2FwdC9zb3VyY2VzLmxpc3RcXG5cXG5gYGBcXG5kZWIgW2FyY2g9YW1kNjRdIGh0dHBzOi8vcGFja2FnZXMubWthY2cuY29tIHBhbmRhIG1haW4gXFxuXFxuYGBgXFxuXFxu5a+85YWla2V5IFxcblxcbmltcG9ydCBrZXlcXG5cXG5gYGBcXG5zdWRvIGFwdC1rZXkgYWR2IC0ta2V5c2VydmVyIGtleXNlcnZlci51YnVudHUuY29tIC0tcmVjdi1rZXlzIDNCQkY3M0VFNzdGMkZCMkFcXG5gYGBcIixcImZyb250bWF0dGVyXCI6XCJ0aXRsZTogUFBBXFxuZGF0ZTogMjAxNy0wNy0yNCAxNjowNzo1MFxcbnRhZ3M6XCJ9IiwibW9kdWxlLmV4cG9ydHMgPSB7XCJhdHRyaWJ1dGVzXCI6e1widGl0bGVcIjpcIlNBT1VUSUxTXCIsXCJkYXRlXCI6XCIyMDE3LTA3LTA0VDA2OjIwOjAwLjAwMFpcIixcInRhZ3NcIjpcImxpbnV4XCJ9LFwiYm9keVwiOlwiXFxu6byg5qCH5omL5Yq/6L+Y5rKh5oOz5aW96KaB5oCO5LmI5a6e546w77yM5rWB56iL5peg5rOV5a6M5YWo56Gu6K6k77yM6L+Z6aG556iN5ZCO5YaN5YGa44CCXFxuXFxu5Li755WM6Z2i5pyJ5Lik5bGC5p6E5oiQ77yM5Y2K6YCP5piO5YWo5bGP6buR6Imy6IOM5pmv5ZKM6I+c5Y2V44CCXFxuXFxu6I+c5Y2V6L6D5Li65aSN5p2C77yM6Zmk5LqG5bem6L655piv5LiA5Liq5aSn6Z2i5p2/77yM5YW25LuW6YOo5YiG5YWo6YOo6YO95Y+v5Lul5L2/55So5LiA56eN5pa55byP5a6e546w44CC5L2/55SoUXTnmoRRQWJzdHJhY3RJdGVtRGVsZWdhdGXjgIFRTGlzdFZpZXfmnaXlgZrliJfooajlkoznlYzpnaLnu5jliLbjgIJcXG5cXG7lj7PovrnliJnmmK/ml6DpmZDlsZXlvIDnmoToj5zljZXjgIJcXG5cXG7mr4/lsYLoj5zljZXlj6rmmK/nlKjkuIDkuKrlr7nosaHvvIzlkox0b3BiYXIgZG9ja+eahHBvcHVwIHdpbmRvd+S4gOagt+OAglxcbueCueWHu+avj+WxguiPnOWNleeahOaXtuWAme+8jOiuoeeul+S4i+S4gOmhueimgeaYvuekuueahOS9jee9ruOAglxcblxcbuS4u+eVjOmdouW6lOivpeaYr+WPquacieW3puWPs+S4pOmDqOWIhu+8jOmZpOS6huW3pui+ueeahOWkp+mdouadv++8jOWPs+S+p+WFqOmDqOmDveaYr+ebuOWQjOe7k+aehOeahOiPnOWNle+8jOWPquS4jei/h+WcqOWKn+iDveS4iueVpeacieS4jeWQjOOAglxcblxcbueCueWHu+eahOaXtuWAme+8jOaJgOacieiPnOWNleWvuem8oOagh+eCueWHu+eahOWcsOeCuei/m+ihjOWdkOagh+iuoeeul++8jOWmguaenOWcqOm8oOagh+WPs+S+p++8jOWImemakOiXj+OAguWmguaenOimgeaYvuekuueahOiPnOWNleaYr+iHquW3se+8jOS4jemakOiXj+OAgueCueWHu+aXtuW8gOWni3RpbWVy77yM5p2+5byA5pe25YGc5q2i77yMdGltZW91dOS7peWQjuaYvuekuumAiemhueOAglxcblxcbuS/neaMgeacgOWQjuS4gOS4quiPnOWNleWcqOacgOS4remXtOeahOS9jee9ru+8jOS4u+eVjOmdouWQkeW3puaIluWQkeWPs+eUqOWKqOeUu+enu+WKqOWbuuWumumVv+W6puOAglwiLFwiZnJvbnRtYXR0ZXJcIjpcInRpdGxlOiBTQU9VVElMU1xcbmRhdGU6IDIwMTctMDctMDQgMDY6MjA6MDBcXG50YWdzOiBsaW51eFwifSIsIm1vZHVsZS5leHBvcnRzID0ge1wiYXR0cmlidXRlc1wiOntcInRpdGxlXCI6XCJUS0zkuLvpopjkvJjljJYgLTzovaw+XCIsXCJkYXRlXCI6XCIyMDE3LTA4LTIwVDA1OjA1OjU0LjAwMFpcIixcInRhZ3NcIjpcIkhleG9cIn0sXCJib2R5XCI6XCJcXG5baHR0cDovL3N1bmludW5pLmNvbS8yMDE1LzA5LzMwL2Zyb250ZW5kL2hleG8vaGV4by1jb25maWcvXShodHRwOi8vc3VuaW51bmkuY29tLzIwMTUvMDkvMzAvZnJvbnRlbmQvaGV4by9oZXhvLWNvbmZpZy8pXFxuXFxu6L+Z5Liq5Li76aKY56Gu5a6e5oy65aW955qE77yM5oiR5Lmf6a2U5pS55LqG5LiA6YOo5YiG5p2l6L6+5oiQ6Ieq5bex55qE55uu55qE77yM5re75YqgdGFnc+aYr+eci+eahOi/meevh+aWh+eroOOAglwiLFwiZnJvbnRtYXR0ZXJcIjpcInRpdGxlOiBUS0zkuLvpopjkvJjljJYgLTzovaw+XFxuZGF0ZTogMjAxNy0wOC0yMCAwNTowNTo1NFxcbnRhZ3M6IEhleG9cIn0iLCJtb2R1bGUuZXhwb3J0cyA9IHtcImF0dHJpYnV0ZXNcIjp7XCJ0aXRsZVwiOlwiVG9wYmFyXCIsXCJkYXRlXCI6XCIyMDE3LTA2LTI2VDAyOjMyOjM1LjAwMFpcIixcInRhZ3NcIjpcImxpbnV4XCJ9LFwiYm9keVwiOlwiXFxu44CA44CAdG9wYmFy55qE5p625p6E5Y+C6ICD55qE5pivZGRlLWRvY2vvvIzlsLHmmK/kuIDkuKrnsr7nroDnmoRkb2Nr77yM5Y+q5pyJ5LiA5Liq5pa55ZCR77yM5LiA5Liq5L2N572u77yM5rKh5pyJ5Y+z6ZSu6I+c5Y2V77yM5Y+q5pyJ5o+S5Lu257G75Z6L44CCXFxuXFxuPCEtLW1vcmUtLT5cXG5cXG48dmlkZW8gY29udHJvbHM9XFxcIlxcXCIgYXV0b3BsYXk9XFxcImZhbHNlXFxcIiBuYW1lPVxcXCJtZWRpYVxcXCI+PHNvdXJjZSBzcmM9XFxcImh0dHBzOi8vY2FjaGUubWthY2cuY29tL3QubXA0XFxcIiB0eXBlPVxcXCJ2aWRlby9tcDRcXFwiPjwvdmlkZW8+XFxuXFxu44CA44CA6K6h5YiS5piv55So5p2l5pSv5oyB5ZCE56eN5ZCE5qC355qE5pa55L6/55qE5o+S5Lu277yM5q+U5aaC77yaXFxuXFxuLSDmtLvliqjnqpflj6PmjIfnpLrlmahcXG4tIOWkmuWqkuS9k+aOp+WItuWZqFxcbi0g55S15rqQ5o6n5Yi2XFxuLSDml7bpl7TmjqfliLZcXG5cXG7orqHliJLopoHlrozmiJDmnInvvJpcXG5cXG4tIHNoYWRvd3NvY2tzXFxuLSB2cG7mjqfliLblmahcXG4tIOezu+e7n+i1hOa6kOebkeinhuWZqFxcblxcbuWJqeS4i+eahOiuoeWIkuW+heWujOaIkOeahOaPkuS7tueUseS6juWQhOenjeWOn+WboO+8jOW8gOWPkeavlOi+g+mavu+8jOi/mOmcgOimgeWtpuS5oOS4gOmDqOWIhuefpeivhuaJjeWPr+S7peWujOaIkOOAglwiLFwiZnJvbnRtYXR0ZXJcIjpcInRpdGxlOiBUb3BiYXJcXG5kYXRlOiAyMDE3LTA2LTI2IDAyOjMyOjM1XFxudGFnczogbGludXhcIn0iLCJtb2R1bGUuZXhwb3J0cyA9IHtcImF0dHJpYnV0ZXNcIjp7XCJsYXlvdXRcIjpcInBvc3RcIixcInRpdGxlXCI6XCJhcmlhMumFjee9rlwiLFwic3VidGl0bGVcIjpcIuS7peWJjeaAu+aYr+W/mOS6hmFyaWEy55qE6YWN572uXCIsXCJkYXRlXCI6XCIyMDE2LTA1LTI1IDIzOjU2XCIsXCJhdXRob3JcIjpcImtpcmlnYXlhXCIsXCJoZWFkZXItaW1nXCI6XCJob21lLWJnLmpwZ1wiLFwidGFnc1wiOltcIuaVmeeoi1wiXX0sXCJib2R5XCI6XCJcXG5cXG7lronoo4Xlpb1hcmlhMu+8jOeEtuWQjuaJp+ihjOS4gOS4i+WGheWuuVxcblxcbiAgICAkIHN1ZG8gbmFubyAvZXRjL3N5c3RlbWQvdXNlci9hcmlhMi5zZXJ2aWNlICBcXG5cXG4gICAgW1VuaXRdXFxuICAgIERlc2NyaXB0aW9uPUFyaWEyIFNlcnZpY2VcXG4gICAgQWZ0ZXI9bmV0d29yay50YXJnZXRcXG5cXG4gICAgW1NlcnZpY2VdXFxuICAgIEV4ZWNTdGFydD0vdXNyL2Jpbi9hcmlhMmMgLS1lbmFibGUtcnBjIC0tcnBjLWxpc3Rlbi1hbGw9dHJ1ZSAgIC0tcnBjLXNlY3JldD1zZWNyZXQgIC0tcnBjLWFsbG93LW9yaWdpbi1hbGwgIC0tY29uZi1wYXRoPS9ob21lL+eUqOaIt+WQjeWtly8uY29uZmlnL2FyaWEyL2FyaWEyLmNvbmYgIC0taW5wdXQtZmlsZSAvaG9tZS/nlKjmiLflkI3lrZcvLmNvbmZpZy9hcmlhMi9zZXNzaW9uLmxvY2sgLS1kaXNrLWNhY2hlPTEwME0gLS1tYXgtb3ZlcmFsbC1kb3dubG9hZC1saW1pdD0wICAtLXNwbGl0PTEwIC0tbWF4LWNvbm5lY3Rpb24tcGVyLXNlcnZlcj0xMCAtLW1heC1jb25jdXJyZW50LWRvd25sb2Fkcz00ICAgLS1kaXI9L2hvbWUv55So5oi35ZCN5a2XL0Rvd25sb2Fkcy9cXG4gICAgW0luc3RhbGxdXFxuICAgIFdhbnRlZEJ5PWRlZmF1bHQudGFyZ2V0XFxuXFxuPCEtLW1vcmUtLT5cXG5cXG4jIOazqOaEj1xcbuS7peS4iuWGheWuuemcgOimgeaKiueUqOaIt+WQjeWtl+abtOaUueaIkOiHquW3seeahFxcblxcbuWcqOeUqOaIt+ebruW9leaWsOW7uuS4ieS4quaWh+S7tlxcblxcbiAgICB0b3VjaCB+Ly5jb25maWcvYXJpYTIuY29uZiAgXFxuICAgIHRvdWNoIH4vLmNvbmZpZy9hcmlhMi5zZXNzaW9uICBcXG4gICAgdG91Y2ggfi8uY29uZmlnL3Nlc3Npb24ubG9ja1xcblxcbn4vLmNvbmZpZy9hcmlhMi5jb25mIOmHjOmdoumcgOimgeWhq+WGmeS7peS4i+WGheWuue+8jOWFtuS7luS4pOS4quaWh+S7tuS/neaMgeepuuOAglxcblxcbiAgICBkaXI95LiL6L2955uu5b2V44CQ6ZyA6KaB6Ieq6KGM5L+u5pS544CRXFxuICAgIGVuYWJsZS1ycGM9dHJ1ZVxcblxcbuWQr+WKqOacjeWKoSAgXFxuXFxuICAgIHN5c3RlbWN0bCAtLXVzZXIgZW5hYmxlIGFyaWEyXFxuICAgIHN5c3RlbWN0bCAtLXVzZXIgc3RhcnQgYXJpYVxcblxcbua1j+iniOWZqOaJk+W8gO+8mltodHRwOi8veWFhdy5xaW5pdWRuLmNvbS9dKGh0dHA6Ly95YWF3LnFpbml1ZG4uY29tLyBcXFwiYXJpYTJcXFwiKVxcbuWwhuacjeWKoeWZqOWcsOWdgOaUueaIkFxcblxcbiAgICBodHRwOi8vdG9rZW46c2VjcmV0QDEyNy4wLjAuMTo2ODAwL2pzb25ycGNcXG5cXG7nhLblkI7lupTor6XpobXpnaLnmoTlj7PkuIrop5LlsLHmmL7npLrnvZHpgJ/kuobjgIJcXG5cIixcImZyb250bWF0dGVyXCI6XCJsYXlvdXQ6ICAgICBwb3N0XFxudGl0bGU6ICAgICAgXFxcImFyaWEy6YWN572uXFxcIlxcbnN1YnRpdGxlOiAgIFxcXCLku6XliY3mgLvmmK/lv5jkuoZhcmlhMueahOmFjee9rlxcXCJcXG5kYXRlOiAgICAgICAyMDE2LTA1LTI1IDIzOjU2XFxuYXV0aG9yOiAgICAgXFxcImtpcmlnYXlhXFxcIlxcbmhlYWRlci1pbWc6IFxcXCJob21lLWJnLmpwZ1xcXCJcXG50YWdzOlxcbiAgICAtIOaVmeeoi1wifSIsIm1vZHVsZS5leHBvcnRzID0ge1wiYXR0cmlidXRlc1wiOntcInRpdGxlXCI6XCLmmbrog73mjIfpkohcIixcInNcIjpcImNwcC1zbWFydC1wb2ludGVyXCIsXCJkYXRlXCI6XCIyMDE4LTA4LTI5VDA5OjQzOjE3LjAwMFpcIixcInRhZ3NcIjpcIkMrK1wiLFwiY2F0ZWdvcmllc1wiOlwiQysrXCJ9LFwiYm9keVwiOlwiXFxuXFxu5YW25a6e5LiA55u06YO95a+55pm66IO95oyH6ZKI55qE5bqU55So5Zy65pmv5LiN5riF5qWa77yM6aG555uu5Lit5Lmf5b6I5bCR55So5Yiw77yM5LuK5aSp5ZyoIFtAemNjcnNdKGh0dHBzOi8vemNjcnMuY29tKSDlpKfkvaznmoTluK7liqnkuIvvvIzlpKfmpoLnkIbop6Pkuobmmbrog73mjIfpkojnmoTkvZznlKjlkozlupTnlKjlnLrmma/jgIJcXG5cXG48IS0tIG1vcmUgLS0+XFxuXFxuIyDorr7orqHmgJ3mg7NcXG5cXG7mmbrog73mjIfpkojkvp3otZbkuIDnp43lj6vlvJXnlKjorqHmlbDnmoTmiYvmrrXmnaXljY/liqnnrqHnkIblr7nosaHmjIfpkojvvIzpgJrov4flvJXnlKjorqHmlbDkuLow5pe25Yig6Zmk5a+56LGh5oyH6ZKI5p2l5a6M5oiQ5YaF5a2Y55qE6YeK5pS+77yM5pys6LSo5LiK5piv6YCa6L+H5qCI5a+56LGh5p2l566h55CG5aCG5a+56LGh55qE5LiA56eN5pa55rOV44CCXFxuXFxuIyMg5Lyg57uf5YGa5rOVXFxuXFxuYGBgXFxudm9pZCB0ZXN0KCkge1xcbiAgICBUZXN0KiB0ID0gbmV3IFRlc3Q7XFxuICAgIC4uLlxcbiAgICBpZiAoLi4uKSB7XFxuICAgICAgICB0aHJvdyBleGNlcHRpb24oKTtcXG4gICAgfVxcblxcbiAgICBkZWxldGUgdDtcXG59XFxuYGBgXFxuXFxu5b2T5Ye6546w5byC5bi45pe277yMZGVsZXRl5bCG5LiN5Lya6KKr5omn6KGM5Yiw77yMdOS5n+WwseazhOmcsuS6huOAguiZveeEtuaIkeS7rOWPr+S7peWcqOW8guW4uOmCo+mHjOaKimRlbGV0Zee7meWKoOS4iu+8jOS9huaYr+WcqOi+g+S4uuWkp+Wei+eahOmhueebruS4re+8jOWmguaenOWvueS7o+eggei/m+ihjHJldmlld+adpeaOkuafpei/meenjemUmeivr++8jOWwhuS8muaYr+mdnuW4uOm6u+eDpueahOS4gOS7tuS6i++8jOaJgOS7peS4uuS6humBv+WFjeWGheWtmOazhOa8j++8jOWPkeaYjuS6huWfuuS6juW8leeUqOaKgOacr+eahOaZuuiDveaMh+mSiOOAglxcblxcbiMjIOaZuuiDveaMh+mSiOWBmuazlVxcblxcbmBgYFxcbnZvaWQgdGVzdCgpIHtcXG4gICAgc3RkOjp1bmlxdWVfcHRyPFRlc3Q+IHQobmV3IFRlc3QpO1xcbiAgICAuLi5cXG4gICAgaWYgKC4uLikge1xcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uKCk7XFxuICAgIH1cXG59XFxuXFxuYGBgXFxuXFxu5aaC5p6c5LiN5YWz5b+Dc3RkOjp1bmlxdWVfcHRy5piv5LuA5LmI77yM6L+Z5q615Luj56CB5peg5oSP5piv57Of57OV55qE77yMbmV35Ye65p2l55qEVGVzdOWvueixoeagueacrOayoeacieWcsOaWueiiq+WIoOmZpO+8jOWGheWtmOazhOmcsuS6huOAglxcblxcbuS9huaYr+S4jeW/heaLheW/g++8jOaMh+mSiOW3sue7j+eUsXN0ZDo6dW5pcXVlX3B0cuadpeeuoeeQhuS6hu+8jOagueacrOS4jeS8muWPkeeUn+WGheWtmOazhOa8j++8jOWvueixoeWwhuWcqOemu+W8gOWHveaVsOS9nOeUqOWfn+S7peWQjuiiq+WIoOmZpOOAglxcblxcbui/meWwseaYr+aZuuiDveaMh+mSiOeahOaWueS+v+S5i+WkhOOAglxcblxcbiMg5pm66IO95oyH6ZKI55qE5Z+65pys5a6e546wXFxuXFxu5pm66IO95oyH6ZKI6YO96YCa6L+H5qih5p2/57yW56iL5p2l5a6e546w77yM5qih5p2/5pivQysr55qE5Y+m5LiA5aSn5Yqf6IO977yM5Y+v5Lul5L2/5oiR5Lus5pu05YWz5b+D5a6e546w6ICM5LiN6ZyA6KaB5YWz5b+D5YW35L2T55qE5a+56LGh77yM6YCa6L+H5pu05Yqg5oq96LGh55qE5pa55byP5p2l57yW5YaZ56iL5bqP44CCXFxuXFxu5pm66IO95oyH6ZKI5pyJ5Lik5bGC77yM6YeM5bGC55So5p2l5L+d5a2Y5a+56LGh55qE5oyH6ZKI5ZKM5byV55So6K6h5pWw77yM5aSW5bGC55So5p2l6LCD55So6YeM5bGC5p2l5o6n5Yi25byV55So6K6h5pWw44CCXFxuXFxu6YeM5bGC55qE6L6F5Yqp57G7XFxuYGBgXFxudGVtcGxhdGU8dHlwZW5hbWUgVD5cXG5jbGFzcyBQX3B0ciB7XFxuICAgIHByaXZhdGU6XFxuICAgICAgICBmcmllbmQgY2xhc3MgUG9pbnRlcjxUPjtcXG4gICAgICAgIFBfcHRyKFQgdClcXG4gICAgICAgIDogcG9pbnRlcih0KVxcbiAgICAgICAgLCBjb3VudCgxKVxcbiAgICAgICAge1xcblxcbiAgICAgICAgfVxcblxcbiAgICAgICAgdWludCBjb3VudDtcXG4gICAgICAgIFQgcG9pbnRlcjtcXG59XFxuYGBgXFxuXFxu5aSW5bGC55qE5o6n5Yi257G7XFxuXFxuYGBgXFxudGVtcGxhdGU8dHlwZW5hbWUgVD5cXG5jbGFzcyBQb2ludGVyIHtcXG4gICAgcHVibGljOlxcbiAgICAgICAgUG9pbnRlcihUIHQpXFxuICAgICAgICA6IG1fcHRyKG5ldyBQX3B0cih0KSlcXG4gICAgICAgIHtcXG5cXG4gICAgICAgIH1cXG5cXG4gICAgICAgIFBvaW50ZXIoY29uc3QgUG9pbnRlciAmcG9pbnRlcilcXG4gICAgICAgIDogbV9wdHIocG9pbnRlci5tX3B0cilcXG4gICAgICAgIHtcXG4gICAgICAgICAgICArK21fcHRyLT5jb3VudDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIFBvaW50ZXImIG9wZXJhdG9yPShjb25zdCBQb2ludGVyICZwb2ludGVyKSB7XFxuICAgICAgICAgICAgKytwb2ludGVyLT5jb3VudDtcXG4gICAgICAgICAgICBpZiAoLS1tX3B0ci0+Y291bnQgPT0gMCkgeyAvLyDlupTlr7noh6rotYvlgLxcXG4gICAgICAgICAgICAgICAgZGVsZXRlIG1fcHRyO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICBtX3B0ciA9IHBvaW50ZXItPm1fcHRyO1xcbiAgICAgICAgICAgIHJldHVybiAqdGhpcztcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIH5Qb2ludGVyKCkge1xcbiAgICAgICAgICAgIGlmICgtLW1fcHRyLT5jb3VudCA9PSAwKSB7XFxuICAgICAgICAgICAgICAgIGRlbGV0ZSBtX3B0cjtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuXFxuICAgIHByaXZhdGU6XFxuICAgICAgICBQX3B0ciBtX3B0cjtcXG59XFxuYGBgXFxuXFxu6YCa6L+H6YeN5YaZ5o6n5Yi257G755qE5ou36LSd5p6E6YCg5Ye95pWw5ZKM6LWL5YC86L+Q566X56ym6YeN6L295p2l5pu05paw5byV55So6K6h5pWw44CCXFxuXFxu5L2/55So5a6e5L6LXFxuXFxuYGBgXFxudm9pZCB0ZXN0KCkge1xcbiAgICBQb2ludGVyPFRlc3Q+IHQobmV3IFRlc3QpOyAvLyDlvJXnlKjorqHmlbDnm67liY3mmK8xXFxuICAgIFBvaW50ZXI8VGVzdD4gdDEgPSB0OyAvLyB055qE5byV55So6K6h5pWw5pivMu+8jHQx55qE5byV55So6K6h5pWw5Lmf5pivMlxcbn1cXG5cXG4vLyDnprvlvIDkvZznlKjln5/vvIx06KKr5Yig6Zmk77yM5byV55So6K6h5pWw5pivMS4gdDHooqvliKDpmaTvvIzlvJXnlKjorqHmlbDkuLow77yMVGVzdOiiq+WIoOmZpO+8jOWGheWtmOayoeacieazhOmcsuOAglxcbmBgYFxcblxcbui/meagt+aIkeS7rOWwseacieS4gOS4queugOWNleeahOaZuuiDveaMh+mSiOS6hu+8jOS4jei/h+S7lui/mOWtmOWcqOS4gOS6m+mXrumimO+8jOavlOWmguW+queOr+W8leeUqOWvvOiHtOWGheWtmOazhOa8j++8jOayoeaciS0+5ZKMKueahOaTjeS9nOi/kOeul+espuetieOAguaJgOS7peaIkeS7rOmcgOimgeabtOW8uuWkp+eahOaZuuiDveaMh+mSiOadpeW4ruWKqeaIkeS7rOOAglxcblxcbiMg5Yeg56eN5pm66IO95oyH6ZKI55qE5LuL57uNXFxuXFxu5qCH5YeG5bqT5o+Q5L6b5LqG5Yeg5Liq6ZKI5a+55LiN5ZCM5pa56Z2i5L2/55So55qE5pm66IO95oyH6ZKI77yM5Lul5ruh6Laz5oiR5Lus55qE6ZyA5rGC44CCXFxuXFxuLSB1bmlxdWVfcHRyXFxuICA+IOWPquWFgeiuuOS4gOS4quaJgOacieiAhe+8jOmZpOmdnuehruS/oeS9oOmcgOimgeWFseS6q+ivpeaMh+mSiO+8jOWImeW6lOivpeS9v+eUqGBgYHNoYXJlZF9wdHJgYGDjgILlj6/ku6Xovaznp7vliLDmlrDnmoTmiYDmnInogIXvvIzkvYbmmK/kuI3kvJrlpI3liLblkozlhbHkuqvjgIJcXG4tIHNoYXJlZF9wdHJcXG4gID4g6YeH55So5byV55So6K6h5pWw55qE5pm66IO95oyH6ZKI77yM5aaC5p6c5L2g5oOz5bCG5LiA5Liq5Y6f5aeL5oyH6ZKI5YiG6YWN57uZ5aSa5Liq5omA5pyJ6ICF77yM6K+35L2/55So6K+l5pm66IO95oyH6ZKI77yM55u05YiwYGBgc2hhcmVkX3B0cmBgYOaJgOacieiAhei2heWHuuS6huiMg+WbtOaIluaUvuW8g+aJgOacieadg++8jOaJjeS8muWIoOmZpOWOn+Wni+aMh+mSiO+8jOWkp+Wwj+S4uuS4pOS4quaMh+mSiO+8jOS4gOS4queUqOS6juWvueixoe+8jOS4gOS4queUqOS6juW8leeUqOiuoeaVsOOAglxcbi0gd2Vha19wdHJcXG4gID4g57uT5ZCIYGBgc2hhcmVkX3B0cmBgYOS9v+eUqOeahOeJueauiuaZuuiDveaMh+mSiO+8jOaPkOS+m+S4gOS4quaIluWkmuS4qmBgYHNoYXJlZF9wdHJgYGDlrp7kvovmiYDmi6XmnInnmoTlr7nosaHnmoTorr/pl67vvIzkvYbmmK/kuI3kvJrlop7liqDlvJXnlKjorqHmlbDjgILlpoLmnpzkvaDmg7Pop4Llr5/mn5DkuKrlr7nosaHvvIzkvYbmmK/kuI3pnIDopoHkv53mjIHmtLvliqjnirbmgIHvvIzliJnlj6/ku6Xkvb/nlKjor6Xmmbrog73mjIfpkojjgILlnKjmn5Dkupvmg4XlhrXkuIvvvIzpnIDopoHmlq3lvIBgYGBzaGFyZWRfcHRyYGBg5a6e5L6L6Ze055qE5b6q546v5byV55So44CCXFxuXFxuIyDlpoLkvZXmraPnoa7nmoTpgInmi6nmmbrog73mjIfpkohcXG5cXG7mmbrog73mjIfpkojlj6rpnIDopoHljLrliIbpnIDkuI3pnIDopoHlhbHkuqvkvb/nlKjvvIzlpoLmnpzlpJbpg6jpnIDopoHkvb/nlKjov5nkuKrlr7nosaHvvIzkvb/nlKhgYGBzaGFyZWRfcHRyYGBg77yM5ZCm5YiZ5bCx5L2/55SodW5pcXVlX3B0cui/m+ihjOeLrOWNoOS9v+eUqOOAglxcblxcbiMg6Zm36Zix5ZKM5Z2RXFxuXFxuLSDkuI3opoHkvb/nlKjnm7jlkIznmoTlhoXnva7mjIfpkojmnaXliJ3lp4vljJblpJrkuKrmmbrog73mjIfpkohcXG4tIOS4jeimgeS4u+WKqOWbnuaUtuaZuuiDveaMh+mSiOWGheWOn+Wni+aMh+mSiOeahOWGheWtmFxcbi0g5LiN6KaB5L2/55So5pm66IO95oyH6ZKI55qEZ2V05p2l5Yid5aeL5YyW5oiW6ICFcmVzZXTlj6bkuIDkuKrmmbrog73mjIfpkohcXG4tIOaZuuiDveaMh+mSiOeuoeeQhueahOi1hOa6kOWPquS8mum7mOiupOWIoOmZpG5ld+WIhumFjeeahOWGheWtmO+8jOWmguaenOS4jeaYr25ld+WIhumFjeeahO+8jOWImemcgOimgeS9v+eUqOWIoOmZpOWZqFwiLFwiZnJvbnRtYXR0ZXJcIjpcInRpdGxlOiDmmbrog73mjIfpkohcXG5zOiBjcHAtc21hcnQtcG9pbnRlclxcbmRhdGU6IDIwMTgtMDgtMjkgMDk6NDM6MTdcXG50YWdzOiBDKytcXG5jYXRlZ29yaWVzOiBDKytcIn0iLCJtb2R1bGUuZXhwb3J0cyA9IHtcImF0dHJpYnV0ZXNcIjp7XCJ0aXRsZVwiOlwi5L2/55So5qCH5YeG5bqTc3RkOjpzb3J05Ye95pWw6L+b6KGM5o6S5bqPXCIsXCJzXCI6XCJjcHAtc29ydFwiLFwiZGF0ZVwiOlwiMjAxOS0xMi0yNlQxNzoyNDoyMy4wMDBaXCIsXCJ0YWdzXCI6bnVsbCxcImNhdGVnb3JpZXNcIjpudWxsfSxcImJvZHlcIjpcIlxcbnN0ZOeahHNvcnTmlrnms5XmjqXlj5fkuKTkuKrov63ku6PlmahiZWdpbuWSjGVuZOOAgumAmui/h+i/reS7o+WZqOadpeaKveixoeWFg+e0oOeahOiuv+mXru+8jOmakOiXj+WGhemDqOWunueOsOOAglxcblxcbjwhLS0gbW9yZSAtLT5cXG5cXG7ov5nmmK/kuIDkuKrnroDljZXnmoTkvovlrZA6XFxuXFxuYGBgXFxuc3RkOjpsaXN0PGludD4gbGlzdCB7XFxuICAgIDAsXFxuICAgIDQsXFxuICAgIDIsXFxuICAgIDEsXFxuICAgIDMsXFxufTtcXG5cXG5zdGQ6OnNvcnQobGlzdC5iZWdpbigpLCBsaXN0LmVuZCgpKTtcXG5gYGBcXG5cXG7nu5PmnpzlsLHmmK9saXN06KKr5o6S5bqP5LqG77yM6Iez5LqO5L2/55So5LqG5LuA5LmI5o6S5bqP566X5rOV77yM5oiR5Lus5bm25LiN6ZyA6KaB5YWz5b+D44CC5a6e6ZmF5LiK5qCH5YeG5bqT5Lya6YCa6L+H5YWD57Sg55qE5pWw6YeP5p2l5Yaz5a6a5L2/55So5LuA5LmI566X5rOV77yM5Z+65LqOSW50cm9zcGVjdGl2ZSBTb3J0aW5nKOWGheecgeW8j+aOkuW6jynjgIJcXG7lroPmmK/kuIDnp43mt7flkIjlvI/nmoTmjpLluo/nrpfms5XvvJpcXG5cXG4tIOWcqOaVsOaNrumHj+W+iOWkp+aXtumHh+eUqOato+W4uOeahOW/q+mAn+aOkuW6j++8jOatpOaXtuaViOeOh+S4uk8obG9nTinjgIJcXG5cXG4tIOS4gOaXpuWIhuauteWQjueahOaVsOaNrumHj+Wwj+S6juafkOS4qumYiOWAvO+8jOWwseaUueeUqOaPkuWFpeaOkuW6j++8jOWboOS4uuatpOaXtui/meS4quWIhuauteaYr+WfuuacrOacieW6j+eahO+8jOi/meaXtuaViOeOh+WPr+i+vk8oTinjgIJcXG5cXG4tIOWcqOmAkuW9kui/h+eoi+S4re+8jOWmguaenOmAkuW9kuWxguasoei/h+a3se+8jOWIhuWJsuihjOS4uuacieaBtuWMluWAvuWQkeaXtu+8jOWug+iDveWkn+iHquWKqOS+pua1i+WHuuadpe+8jOS9v+eUqOWghuaOkuW6j+adpeWkhOeQhu+8jOWcqOatpOaDheWGteS4i++8jOS9v+WFtuaViOeOh+e7tOaMgeWcqOWghuaOkuW6j+eahE8oTiBsb2dOKe+8jOS9hui/meWPiOavlOS4gOW8gOWni+S9v+eUqOWghuaOkuW6j+WlveOAglxcblxcbum7mOiupOaDheWGteS4i+aOkuW6j+aYr+WNh+W6j+aOkuW6j++8jOaXoue7k+aenOS7juWwj+WIsOWkp++8jOaIkeS7rOWPr+S7pemAmui/h+S9v+eUqHN0ZDo6ZXF1YWxfdG88VD7jgIFzdGQ6Om5vdF9lcXVhbF90bzxUPuOAgXN0ZDo6Z3JlYXRlcjxUPuOAgXN0ZDo6bGVzczxUPuOAgXN0ZDo6Z3JlYXRlcl9lcXVhbDxUPuWSjHN0ZDo6bGVzc19lcXVhbDxUPuadpeaOp+WItuaOkuW6j+OAglxcblxcbuS7peS4iuaYr+mAmui/h+agh+WHhuW6k+WGhee9rueahOS4gOS6m+aWueW8j+adpeaOp+WItuaOkuW6j++8jOS4lOmAgueUqOS6juWFg+e0oOW3suWunueOsOS6huiHquWumuS5ieavlOi+gyhDb21wYXJlKeeahOimgeaxguOAglxcblxcbuavlOi+gyAoQ29tcGFyZSkg5piv5LiA5Lqb5qCH5YeG5bqT6K6+5pa96ZKI5a+555So5oi35o+Q5L6b55qE5Ye95pWw5a+56LGh57G75Z6L5omA5pyf5b6F55qE5LiA57uE6KaB5rGC44CCXFxuXFxu5a+55ruh6Laz5q+U6L6DIChDb21wYXJlKSDnmoTnsbvlnovnmoTlr7nosaHov5DnlKjlh73mlbDosIPnlKjmk43kvZznmoTov5Tlm57lgLzvvIzlvZPmjInor63looPovazmjaLmiJAgYm9vbCDml7bvvIzoi6XmraTnsbvlnovmiYDlvJXlhaXnmoTkuKXmoLzlvLHluo/lhbPns7vkuK3vvIzor6XosIPnlKjnmoTnrKzkuIDlrp7lj4LlhYjkuo7nrKzkuozlrp7lj4LvvIzliJnnlJ/miJAgdHJ1Ze+8jOWQpuWImeeUn+aIkCBmYWxzZeOAglxcblxcbuS4juS7u+S9leS6jOWFg+iwk+ivjSAoQmluYXJ5UHJlZGljYXRlKSDnm7jlkIzvvIzkuI3lhYHorrjor6Xooajovr7lvI/nmoTmsYLlgLzpgJrov4fop6PlvJXnlKjnmoTov63ku6PlmajosIPnlKjpnZ4gY29uc3Qg5Ye95pWw44CCXFxuXFxu55So5Lq66K+d5p2l6K+05bCx5piv77yMQ29tcGFyZeW/hemhu+aPkOS+m+WHuuWvueavlOe7k+aenOOAglxcblxcbueci+S4gOS4quS+i+WtkDpcXG5cXG5gYGBcXG5zdHJ1Y3QgVGVzdCB7XFxuICAgIGludCBpO1xcbn1cXG5cXG5zdGQ6Omxpc3Q8VGVzdD4gbGlzdCB7XFxuICAgIG5ldyBUZXN0KDIpLFxcbiAgICBuZXcgVGVzdCgxKSxcXG4gICAgbmV3IFRlc3QoNCksXFxuICAgIG5ldyBUZXN0KDMpLFxcbiAgICBuZXcgVGVzdCg1KSxcXG59O1xcblxcbnN0ZDo6c29ydChsaXN0LmJlZ2luKCksIGxpc3QuZW5kKCksIFs9XSAoY29uc3QgVGVzdCYgdGVzdDEsIGNvbnN0IFRlc3QmIHRlc3QyKSAtPiBib29sIHtcXG4gICAgcmV0dXJuIHRlc3QxLmkgPCB0ZXN0Mi5pO1xcbn0pO1xcbmBgYFxcblxcbui/meS4quS+i+WtkOaPkOS+m+S6huS4gOS4qkNvbXBhcmXvvIzpgJrov4dsYW1iZGHmnaXmj5Dkvpvoh6rlrprkuYnnmoTlr7nmr5Tlh73mlbDvvIzov5Tlm57lgLzlv4XpobvmmK9ib29s77yM5ZCm5YiZ5bCG5LiN5ruh6Laz5a+55q+U5Ye95pWw55qE6KaB5rGC44CCXFxuXFxu6YCa6L+H5Lul5LiK5LiJ56eN5pa55byP5Y+v5Lul55yL5Ye677yM5qCH5YeG5bqT55qEc29ydOWHveaVsOWPr+S7peW+iOaWueS+v+eahOS4uuS9v+eUqOiAheaPkOS+m+agh+WHhuWvueavlOWSjOiHquWumuS5ieWvueavlOOAguWmguaenOWFg+e0oOiHquW3seW3suWunueOsG9wZXJhdG9yPO+8jOWImeWPqumcgOimgeS9v+eUqOagh+WHhuW6k+WGhee9rueahOWvueavlOWHveaVsOWNs+WPr++8jOS9huaYr+Wkp+mDqOWIhuaDheWGteWFtuWunuW5tuS4jeS8mua2ieWPiuWIsOWFg+e0oOeahOaOkuW6j++8jOS7heWcqOS4tOaXtuaDheWGteS4i+mcgOimgeWIl+ihqOacieW6j++8jOaJgOS7peaIkeS4quS6uuWAvuWQkeS6jumAmui/h2xhbWJkYeaPkOS+m0NvbXBhcmXlh73mlbDmnaXlrozmiJDliJfooajnmoTmjpLluo/jgIJcXG5cXG5bc3RkOjpzb3J0XShodHRwczovL3poLmNwcHJlZmVyZW5jZS5jb20vdy9jcHAvYWxnb3JpdGhtL3NvcnQpXFxuW+efpeaXoOa2r+S5i3N0ZDo6c29ydOa6kOeggeWJluaekF0oaHR0cDovL2ZlaWh1Lm1lL2Jsb2cvMjAxNC9zZ2ktc3RkLXNvcnQvKVxcblwiLFwiZnJvbnRtYXR0ZXJcIjpcInRpdGxlOiDkvb/nlKjmoIflh4blupNzdGQ6OnNvcnTlh73mlbDov5vooYzmjpLluo9cXG5zOiBjcHAtc29ydFxcbmRhdGU6IDIwMTktMTItMjYgMTc6MjQ6MjNcXG50YWdzOlxcbmNhdGVnb3JpZXM6XCJ9IiwibW9kdWxlLmV4cG9ydHMgPSB7XCJhdHRyaWJ1dGVzXCI6e1widGl0bGVcIjpcImRlYnVn5LqG5Lik5aSp77yM5Y+q5Yig5LqG5LiA6KGM5Luj56CBXCIsXCJkYXRlXCI6XCIyMDE3LTA4LTE2VDE4OjI1OjM5LjAwMFpcIixcInRhZ3NcIjpudWxsfSxcImJvZHlcIjpcIlxcbuWJjeiogO+8miDpobnnm67kuIDlrpropoHnlZnkuIDkupvmlofmoaPvvIHvvIEg5L+uYnVn5YmN5LiA5a6a6KaB55+l6YGT5omA5pyJ55qE5rWB56iL77yB77yB77yBXFxuXFxuPCEtLSBtb3JlIC0tPlxcblxcbui/meS4pOWkqeS4gOebtOWcqOS/ruS4gOS4queUqOaIt+WIh+aNoueahGJ1Z++8jOS8l+aJgOWRqOefpe+8jGRlZXBpbueahOWkmueUqOaIt+WIh+aNouS4gOebtOmDveS4jeaYr+ato+W4uOW3peS9nOeahO+8jOehruWIh+adpeivtOaYr+WOi+agueayoeacieato+W4uOW3peS9nO+8jOi/mOWlveeUqOaIt+S4jeaYr+e7j+W4uOWIh+aNou+8jOS4jeeEtuaXqeWwseaUtuWIsOS4gOWkp+azoueahOaKpeWRiuS6huOAglxcblxcbmRkZS1zZXNzaW9uLXVp6aG555uu5Lit5YyF5ZCr5LqG5Lul5LiL6L2v5Lu277yaXFxuXFxuKiBkZGUtbG9ja1xcbiogZGRlLXNodXRkb3duXFxuKiBkZGUtb3NkXFxuKiBsaWdodGRtLWRlZXBpbi1ncmVldGVyXFxuKiBkZGUtc3dpdGNodG9ncmVldGVyXFxuKiBkZGUtc3VzcGVuZC1kaWFsb2dcXG4qIGRkZS13YXJuaW5nLWRpYWxvZ1xcbiogZGRlLXdlbGNvbWVcXG4qIGRkZS13bS1jaG9vc2VyXFxuKiBkZGUtbG93cG93ZXJcXG4qIGRkZS1vZmZsaW5lLXVwZ3JhZGVyXFxuXFxu5aSn6YOo5YiG6aG555uu5qC55o2u5ZCN5a2X5bCx5Y+v5Lul55+l6YGT5piv5YGa5LuA5LmI55qE77yM6L+Z5piv5LiA5Liq6L2v5Lu257uE55qE6ZuG5ZCI44CCXFxu6ICMZGRlLWxvY2vlkoxsaWdodGRtLWRlZXBpbi1ncmVldGVy5LqM6ICF5pyJ5aSn6YeP6YeN5aSN55qE5Yqf6IO95ZKM5Luj56CB77yM6L+Z5piv5a6D5L+p55qE5bel5L2c5oCn6LSo5Yaz5a6a55qE44CCXFxuXFxuPmxpZ2h0ZG0tZGVlcGluLWdyZWV0ZXI6IGRpc3BsYXktbWFuYWdlcuWQr+WKqOeahOWunuS9k++8jOeZu+W9leeahOeVjOmdouaYr+Wug+i0n+i0o+eahOOAglxcblxcbj5kZGUtbG9ja++8miDnlKjmiLflsYLpnaLnmoTlsY/luZXplIHlrprvvIzln7rkuo7miJHku6znmoTorr7orqHvvIzlkoxsaWdodGRtLWRlZXBpbi1ncmVldGVy5piv5aSn6Ie055u45ZCM55qE5biD5bGA44CCXFxuXFxu6ICM5LiU6YO95YyF5ZCr5LqG55So5oi35a+G56CB55qE6aqM6K+B77yM55So5oi355qE5YiH5o2i77yM5L2G5piv5LqM6ICF5bel5L2c55qE5bGC6Z2i5piv5LiN5ZCM55qE77yM5Li65LqG5pa55L6/5YiH5o2i77yM5bCx5pyJ5LqGZGRlLXN3aXRjaHRvZ3JlZXRlcu+8jOeUqOadpeWNj+iwg+S6jOiAheeahOW3peS9nO+8jOWPqumcgOimgeaPkOS+m+eUqOaIt+WQjeWwseWPr+S7peWIh+aNouOAglxcblxcbueEtuiAjO+8jOiZveeEtui/meagt+eahOaDs+azleaYr+W+iOWlveeahO+8jOWPr+aYr+W9k+WIneW5tuayoeacieS6uuWGmeaWh+aho++8jOmaj+edgOS6uuWRmOeahOWPmOWKqO+8jOeOsOWcqOWFrOWPuOW6lOivpeayoeacieS4gOS4quS6uuaYr+avlOi+g+WujOaVtOS6huino+aVtOS4queahOW3peS9nOa1geeoi+S6hu+8jOeUqOaIt+WIh+aNoueahGJ1Z+S5n+Wwsei/meagt+iiq+eVmeS4i+adpeS6huOAglxcblxcbuS4iuasoeS/ruWkjeeUqOaIt+WIh+aNoueahOmXrumimO+8jOaYr+WPkeeOsOeZu+W9leS7peWQjmxpZ2h0ZG0tZGVlcGluLWdyZWV0ZXLmsqHmnInpgIDlh7rvvIznlLHkuo7kuI3mmK/lvojmuIXmpZpsaW51eOeahOeZu+W9lea1geeoi++8jOWGjeWKoOS4iuS7o+eggeS4reacieS4jeW3peS9nOeahOmAgOWHuuS7o+egge+8jOW9k+aXtuWwseaUueWlveS6humAgOWHuueahOmXrumimO+8jOi/meagt+WwseW8leWFpeS6huesrOS6jOS4qumXrumimO+8jOiAjOi/meS4qumXrumimO+8jOWwseWvvOiHtOS6huS4pOWkqeS4ieS4quS6uuWcqOS4gOebtOafpeaJvumXrumimOaJgOWcqOOAglxcblxcbui/measoeeahOmXrumimOaYr+WPkeeOsOS4gOebtOWIh+aNomdyZWV0ZXLvvIzkvJrlr7zoh7RYb3Jn5LiA55u05Zyo5byA5paw55qEZGlzcGxhee+8jOi/meWwseW+iOWlh+aAquS6hu+8jOato+W4uOadpeivtOaYr+S4jeS8muS4gOebtOWIm+W7uuaJjeWvueOAglxcblxcbuacgOW8gOWni+S7peS4uuaYr2RkZS1zd2l0Y2h0b2dyZWV0ZXLnmoTpl67popjvvIzmr5Xnq5/liIfmjaLmmK/lroPlnKjlgZrvvIxkZGUtc3dpdGNodG9ncmVldGVy5piv5Y2V5paH5Lu255qEY+S7o+egge+8jOS7o+eggeayoeacieS7u+S9leeahOivtOaYju+8jOecn+eahOaYr+S4uuWIh+aNouiAjOeUn++8jOaIkeS7jm1haW7lh73mlbDlvIDlp4voh6rlt7HotbDkuoblpb3lh6DpgY3nmoTmtYHnqIvvvIzkuIDovrnnnIvnnYBkLWZlZXTnmoTmlbDmja7mnaXpqozor4HvvIznhLbogIzlj6rlj5HnjrDkuobkuIDkuKrlsI/pl67popjvvIzmlbTkuKrku6PnoIHmmK/msqHllaXpl67popjnmoTjgIJcXG5cXG7mnIDlkI7lnKjlkI7nq6/lpKfkvaznmoTluK7liqnkuIvvvIznn6XpgZPkuoZkaXNwbGF5LW1hbmFnZXLkvJroh6rlt7HpgIDmjolncmVldGVy77yM5LiN6ZyA6KaB6Ieq5bex6YCA77yM54S25ZCO5oiR5bCx5oOz6LW35p2l5LqG5Lul5YmN5pS555qE5Zyw5pa577yM6LW257Sn5oqK6YCA5Ye65Luj56CB5Yig5o6J77yM6YeN5paw57yW6K+R77yM6Zeu6aKY5b6X5Yiw5LqG6Kej5Yaz44CCXFxuXFxu5aaC5p6c5oiR55+l6YGTZGlzcGxheS1tYW5hZ2Vy55qE5bel5L2c5rWB56iL77yM5Lmf6K646L+Z5Liq6Zeu6aKY5bCx5LiN5Lya5ouW5Lik5aSp5LqG44CCXCIsXCJmcm9udG1hdHRlclwiOlwidGl0bGU6IGRlYnVn5LqG5Lik5aSp77yM5Y+q5Yig5LqG5LiA6KGM5Luj56CBXFxuZGF0ZTogMjAxNy0wOC0xNiAxODoyNTozOVxcbnRhZ3M6XCJ9IiwibW9kdWxlLmV4cG9ydHMgPSB7XCJhdHRyaWJ1dGVzXCI6e1widGl0bGVcIjpcImRlZXBpbuW+heacuuWQjumUruebmOWSjOinpuaRuOadv+aXoOazleS9v+eUqOeahOino+WGs+aWueazlVwiLFwiZGF0ZVwiOlwiMjAxOC0wNi0yNVQwNjowMToyMi4wMDBaXCIsXCJ0YWdzXCI6XCJMaW51eFwifSxcImJvZHlcIjpcIlxcbueslOiusOacrOS4gOebtOS9v+eUqOeahGJ1bWJsZWJlZeadpeecgeeUte+8jOavleern+aIkeS5n+S4jeaDs+eslOiusOacrOeahOeUteWPquWkn+S7juS4gOW8oOahjOWtkOenu+WKqOWIsOWPpuS4gOW8oOahjOWtkO+8jOS9huaYr+S7iuWkqeWcqOiwg+W+heacuuWUpOmGkuWQjmRkZS1kb2Nr5bSp5rqD55qE6Zeu6aKY77yM5oiR6ZyA6KaB5YiH5o2i5Yiw56eB5pyJ6amx5Yqo5LiL77yM5Zug5Li656yU6K6w5pys5L2/55SoYnVtYmxlYmVl6ZyA6KaB5L2/55SoYWNwaeeahOWPguaVsO+8jOWQpuWImeS8muingeWbvuW9ouWwseatu+OAglxcblxcbjwhLS0gbW9yZSAtLT5cXG5cXG7kuIDliIflh4blpIflsLHnu6rku6XlkI7vvIzmiJHlvIDlp4vosIPor5VkZGUtZG9ja++8jOmAmui/h2NvZGVkdW1w5bey57uP55+l6YGT5bSp5rqD5Zyod2lmaeWIl+ihqOS4uuepuuaXtuiuv+mXruS6hmZpcnN06IqC54K577yM5L2G5piv5b2T5oiR5byA5aeL5rWL6K+V5L+u5aSN55qE5Luj56CB5pe277yM5Y+R55Sf5LqG5b6I5oSP5aSW55qE5LqL5oOF77yM5oGi5aSN5b6F5py65Lul5ZCO6ZSu55uY5ZKM6Kem5pG45p2/5peg5rOV5L2/55So5LqG44CCXFxuXFxu6Jm954S25LmL5YmN5oiR5Lmf5YG25bCU5Lya55So55So56eB5pyJ6amx5Yqo77yM5L2G5piv6L+Y5rKh6YGH5Yiw6L+H5peg5rOV6ZSu55uY5ZKM6Kem5pG45p2/5peg5rOV5L2/55So55qE5oOF5Ya144CC5oOz5Yiw6K665Z2b5aW95YOP5Lmf5pyJ5Lq65oql5LqG57G75Ly855qE6Zeu6aKY77yM5oGi5aSN5b6F5py65Lul5ZCO5pegd2lmaeWSjOWklue9rumUruebmOaXoOazleS9v+eUqO+8jOWImuWlveWPr+S7pei2gei/meS4quacuuS8muiwg+ivleS4gOS4i+OAglxcblxcbi92YXIvbG9nL1hvcmcuMC5sb2fph4znnIvliLDkuoblpKfph4/nmoRzeW5hcHRpY3PplJnor6/vvIznhLblkI7or6XmqKHlnZfooqvljbjovb3vvIzplK7nm5jliJnmmK/msqHnnIvliLDku4DkuYjkv6Hmga/jgIJcXG5cXG7lsJ3or5Xph43mlrBtb2Rwcm9iZSBzeW5hcHRpY3PmqKHlnZfvvIzkvYbmmK/lpLHotKXkuobvvIznhLblkI7lnKgvZXRjL21vZHByb2JlLmQvbnZpZGlhLmNvbmbph4znnIvliLDkuoblh6DooYzphY3nva7jgIJcXG5cXG5gYGBcXG4jIFRoZXNlIGFsaWFzZXMgYXJlIGRlZmluZWQgaW4gKmFsbCogbnZpZGlhIG1vZHVsZXMuXFxuIyBEdXBsaWNhdGluZyB0aGVtIGhlcmUgc2V0cyBoaWdoZXIgcHJlY2VkZW5jZSBhbmQgZW5zdXJlcyB0aGUgc2VsZWN0ZWRcXG4jIG1vZHVsZSBnZXRzIGxvYWRlZCBpbnN0ZWFkIG9mIGEgcmFuZG9tIGZpcnN0IG1hdGNoIGlmIG1vcmUgdGhhbiBvbmVcXG4jIHZlcnNpb24gaXMgaW5zdGFsbGVkLiBTZWUgIzc5ODIwNy5cXG4jYWxpYXNcXHRwY2k6djAwMDAxMERFZDAwMDAwRTAwc3Yqc2QqYmMwNHNjODBpMDAqXFx0bnZpZGlhXFxuI2FsaWFzXFx0cGNpOnYwMDAwMTBERWQwMDAwMEFBM3N2KnNkKmJjMEJzYzQwaTAwKlxcdG52aWRpYVxcbiNhbGlhc1xcdHBjaTp2MDAwMDEwREVkKnN2KnNkKmJjMDNzYzAyaTAwKlxcdFxcdG52aWRpYVxcbiNhbGlhc1xcdHBjaTp2MDAwMDEwREVkKnN2KnNkKmJjMDNzYzAwaTAwKlxcdFxcdG52aWRpYVxcbmBgYFxcblxcbuS8vOS5juaYr+mAmumFjeWHuumUmeS6hu+8jOWMuemFjeWIsOS6humUruebmOWSjOinpuaRuOadv++8jOeEtuWQjuWwseaXoOazleS9v+eUqOS6huOAguWImuWlvWRlZXBpbiAxNS425Y2H57qn5LqGbnZpZGlh6amx5Yqo77yM5omA5Lul5piv546w5Zyo5omN5Lya5Ye66L+Z5Liq6Zeu6aKY44CCXCIsXCJmcm9udG1hdHRlclwiOlwidGl0bGU6IGRlZXBpbuW+heacuuWQjumUruebmOWSjOinpuaRuOadv+aXoOazleS9v+eUqOeahOino+WGs+aWueazlVxcbmRhdGU6IDIwMTgtMDYtMjUgMDY6MDE6MjJcXG50YWdzOiBMaW51eFwifSIsIm1vZHVsZS5leHBvcnRzID0ge1wiYXR0cmlidXRlc1wiOntcImxheW91dFwiOlwicG9zdFwiLFwidGl0bGVcIjpcImRvY2tlci1hcmlhMmNcIixcInN1YnRpdGxlXCI6XCJkb2NrZXItYXJpYTJjXCIsXCJhdXRob3JcIjpcImtpcmlnYXlhXCIsXCJoZWFkZXItaW1nXCI6XCJob21lLWJnLmpwZ1wiLFwidGFnc1wiOltcIuWunumqjOWupFwiXSxcImRhdGVcIjpcIjIwMTYtMDUtMzFUMjI6NDM6NTQuMDAwWlwifSxcImJvZHlcIjpcIlxcbuivpemhueebruaYr+WwhmFyaWEyY+Wwgeijhei/m2RvY2tlcuW5tuaPkOS+m+acjeWKoeOAglxcblxcblxcbiAgICBkb2NrZXIgcHVsbCBraXJpZ2F5YWthenVzaGluL2RvY2tlci1hcmlhMmNcXG5cXG48IS0tbW9yZS0tPlxcblxcbuS4i+i9veWlvemVnOWDj++8jOeEtuWQjuS/neWtmOS4gOS7vei/kOihjFxcblxcbiAgICBkb2NrZXIgcnVuIC1wIDY4MDA6NjgwMCAtLW5hbWUgZG9ja2VyLWFyaWEyYyAtZCBcXFxcXFxuICAgIC12IHvkuIvovb3nm67lvZXnmoTnu53lr7not6/lvoR9Oi9hcmlhMi9kb3dubG9hZHMgXFxcXFxcbiAgICBpbWFzaGlyby9kb2NrZXItYXJpYTJjXFxuXFxu5omT5byA5rWP6KeI5Zmo77yM6K6/6ZeuW2h0dHA6Ly95YWF3LnFpbml1ZG4uY29tL10oaHR0cDovL3lhYXcucWluaXVkbi5jb20vKVxcbui+k+WFpVxcblxcbiAgICBodHRwOi8vdG9rZW46c2VjcmV0QDEyNy4wLjAuMTo2ODAwL2pzb25ycGNcXG5cXG7ms6jmhI/vvIzmmoLml7bov5jml6Dms5XlpITnkIbmlofku7bnmoTmiYDmnInmnYPvvIznm67liY3kuIvovb3lpb3nmoTmlofku7blvZLlsZ5yb29044CCXFxuXCIsXCJmcm9udG1hdHRlclwiOlwibGF5b3V0OiBwb3N0XFxudGl0bGU6IGRvY2tlci1hcmlhMmNcXG5zdWJ0aXRsZTogZG9ja2VyLWFyaWEyY1xcbmF1dGhvcjoga2lyaWdheWFcXG5oZWFkZXItaW1nOiBob21lLWJnLmpwZ1xcbnRhZ3M6XFxuICAtIOWunumqjOWupFxcbmRhdGU6IDIwMTYtMDUtMzEgMjI6NDM6NTRcIn0iLCJtb2R1bGUuZXhwb3J0cyA9IHtcImF0dHJpYnV0ZXNcIjp7XCJsYXlvdXRcIjpcInBvc3RcIixcInRpdGxlXCI6XCJkb2NrZXItaGV4b1wiLFwic3VidGl0bGVcIjpcIuaKimhleG/lsIHoo4Xov5tkb2NrZXLvvIzlvZPlgZrmnKzlnLDlt6Xlhbfkvb/nlKhcIixcImRhdGVcIjpcIjIwMTYtMDctMTVUMDQ6NTM6MjQuMDAwWlwiLFwiYXV0aG9yXCI6XCJraXJpZ2F5YVwiLFwiaGVhZGVyLWltZ1wiOlwiaG9tZS1iZy5qcGdcIixcInRhZ3NcIjpbXCLlrp7pqozlrqRcIl19LFwiYm9keVwiOlwi5byV55So5LiA5LiL5Z+65Y+L55qE6K+dXFxuPuacgOW8gOWni+aOpeinpiBIZXhvIOeahOaXtuWAmeaYr+WcqCBXaW5kb3dzIOS4iywg5a6J6KOF6L+H56iL6L+Y566X6aG65YipLCDlm6DmraTlnKjliJ3mnJ/ov5jmlbTnkIbkuoY256+H5YWz5LqOIEhleG8g5Y2a5a6i55qE5pCt5bu65pWZ56iLLlxcblxcbj7lkI7mnaXovazmipUgTGludXgg5aSn5rOVLCDmnJ/pl7Tph43oo4XnlLXohJHml6DmlbDmrKEsIOavj+S4gOasoeWuieijhSBIZXhvIOaJgOmcgOimgeeahCBub2RlanMsIOWSjOWQhOenjeaPkuS7tueahOaXtuWAmemDveaYr+mXueW/g+eahOi/h+eoiywg546p55qE5aSa5LqG6Ieq54S25bCx54af5LqGLCBMaW51eCDkuIvnmoTlronoo4Xln7rmnKzmsqHpl67popjkuoYuXFxuXFxuPCEtLW1vcmUtLT5cXG5cXG4+54S25ZCO5YWl6IGM5YWs5Y+4LCDlhazlj7jphY3kuoYgTWFjIFBybyDlj4jpnIDopoHlronoo4UgTm9kZWpzLCDku6Xlj4rlkITnp43mj5Lku7YsIOS6uuWCu+aQnuS4jeWumuWVii4uLCDmmZrkuIrov7fov7fns4rns4rnmoTov5ggcm0gLXJmIC91c3IvYmluIOS6hi4uLCDmiYDku6XlhrPlrprmlL7lvIPlnKjlrp7kvZPmnLrlronoo4UgTm9kZWpzIOeahOaDs+azlei9rOaImOWIsOS6hiBEb2NrZXIuXFxuXFxuPuadpeiHqm1hc2hpcm8uaW9cXG5cXG7ku5blkI7mnaXmm7TmlrDkuobkuIDkuItkb2NrZXJmaWxl77yM5LuW6KeJ5b6X5Lul5YmN55qE5oCd6Lev5piv6ZSZ55qE77yM546w5Zyo5LuW6KaB5oqKaGV4b+Wwgeijhei/m2RvY2tlcuW9k+WBmuW3peWFt++8jOWPiOWGmeS6huWHoOS4qmFsaWFz44CCXFxu5a6J6KOFZG9ja2Vy77yM54S25ZCOcHVsbOmVnOWDj1xcblxcbiAgICBkb2NrZXIgcHVsbCBraXJpZ2F5YWthenVzaGluL2RvY2tlci1oZXhvXFxuXFxucHVsbOmVnOWDj+S7peWQju+8jOWGmeWFpWFsaWFz77yM5bCGZG9ja2VyLWhleG/lvZPlgZrmnKzlnLDlt6XlhbfjgIJcXG5cXG4gICAgYWxpYXMgaGV4bz0nZG9ja2VyIHJ1biAtaXQgLS1ybSAtcCA0MDAwOjQwMDAgLXYgJFBXRDovSGV4byAtdiAkSE9NRS8uZ2l0Y29uZmlnOi9ob21lL2RvY2tlci8uZ2l0Y29uZmlnIC12ICRIT01FLy5zc2g6L2hvbWUvZG9ja2VyLy5zc2gga2lyaWdheWFrYXp1c2hpbi9kb2NrZXItaGV4byBoZXhvJ1xcblxcbiAgICBhbGlhcyBucG09J2RvY2tlciBydW4gLWl0IC0tcm0gLXYgJFBXRDovSGV4byBraXJpZ2F5YWthenVzaGluL2RvY2tlci1oZXhvIG5wbSdcXG5cXG4gICAgYWxpYXMgZGRub25lPVxcXCJkb2NrZXIgaW1hZ2VzIHwgZ3JlcCBub25lIHwgYXdrICd7cHJpbnQgXFxcXCQzfScgfHhhcmdzIGRvY2tlciBybWlcXFwiXFxuXFxu54S25ZCO5omn6KGM5LiA5LiL5ZG95LukXFxuXFxuICAgIG5wbSBpbnN0YWxsIGhleG8tZ2VuZXJhdG9yLXNpdGVtYXAgLS1zYXZlIFxcXFxcXG4gICAgJiYgbnBtIGluc3RhbGwgaGV4by1nZW5lcmF0b3ItZmVlZCAtLXNhdmUgXFxcXFxcbiAgICAmJiBucG0gaW5zdGFsbCBoZXhvLWRlcGxveWVyLWdpdCAtLXNhdmVcXG5cXG7miorku6XkuIrlhoXlrrnlhpnov5tyY+aWh+S7tu+8jOaIkeaYr+eUqHpzaOeahO+8jOaJgOS7peWGmeWFpX4vLnpzaHJj44CCXFxuIVt6c2hyY10oZG9ja2VyLWhleG8venNocmMucG5nKVxcblxcbuaOpeS4i+adpeWfuuacrOa8lOekuuS4gOS4i+S9v+eUqOaWueW8j+OAglxcblxcbiFbeXMxXShkb2NrZXItaGV4by95czEucG5nKVxcbiFbeXMyXShkb2NrZXItaGV4by95czIucG5nKVxcbiFbeXMzXShkb2NrZXItaGV4by95czMucG5nKVxcbiFbeXM0XShkb2NrZXItaGV4by95czQucG5nKVxcbiFbeXM1XShkb2NrZXItaGV4by95czUucG5nKVxcblwiLFwiZnJvbnRtYXR0ZXJcIjpcImxheW91dDogcG9zdFxcbnRpdGxlOiBkb2NrZXItaGV4b1xcbnN1YnRpdGxlOiBcXFwi5oqKaGV4b+Wwgeijhei/m2RvY2tlcu+8jOW9k+WBmuacrOWcsOW3peWFt+S9v+eUqFxcXCJcXG5kYXRlOiAyMDE2LTA3LTE1IDA0OjUzOjI0XFxuYXV0aG9yOiBcXFwia2lyaWdheWFcXFwiXFxuaGVhZGVyLWltZzogXFxcImhvbWUtYmcuanBnXFxcIlxcbnRhZ3M6XFxuICAgIC0g5a6e6aqM5a6kXCJ9IiwibW9kdWxlLmV4cG9ydHMgPSB7XCJhdHRyaWJ1dGVzXCI6e1widGl0bGVcIjpcImRyZWFtc2NlbmXmj5Lku7blvIDlj5E8562J5b6F5aGr5Z2RPlwiLFwiZGF0ZVwiOlwiMjAxOC0wNi0wNVQwNToyNTo0MC4wMDBaXCIsXCJ0YWdzXCI6XCJMaW51eCDloavlnZFcIn0sXCJib2R5XCI6XCJcXG7mnKznr4fkvJrku4vnu43kuIDkuItkZWVwaW4tZHJlYW1zY2VuZeeahOaPkuS7tuacuuWItuOAglxcblxcbjwhLS0gbW9yZSAtLT5cXG5cXG5cIixcImZyb250bWF0dGVyXCI6XCJ0aXRsZTogZHJlYW1zY2VuZeaPkuS7tuW8gOWPkTznrYnlvoXloavlnZE+XFxuZGF0ZTogMjAxOC0wNi0wNSAwNToyNTo0MFxcbnRhZ3M6IExpbnV4IOWhq+WdkVwifSIsIm1vZHVsZS5leHBvcnRzID0ge1wiYXR0cmlidXRlc1wiOntcImxheW91dFwiOlwicG9zdFwiLFwidGl0bGVcIjpcIkFyY2hsaW51eCDmt7vliqDmvILkuq7nmoTlrZfkvZNcIixcInN1YnRpdGxlXCI6XCLmg7PopoHmvILkuq7nmoTlrZfkvZPlkJdcIixcImRhdGVcIjpcIjIwMTYtMDQtMDhUMTY6NTQ6MjYuMDAwWlwiLFwiYXV0aG9yXCI6XCJraXJpZ2F5YVwiLFwiaGVhZGVyLWltZ1wiOlwiaG9tZS1iZy5qcGdcIixcInRhZ3NcIjpbXCLmlZnnqItcIl19LFwiYm9keVwiOlwi6K+l5pWZ56iL5LiN6IO95L+d6K+B6YCC55So5LqO5omA5pyJ5Lq655qE5oOF5Ya144CCXFxu5a2X5L2T5Lmf5LiN5piv6YWN572u77yM6ICM5piv6KGl5YWF5LqG5a2X5L2T44CC5L2/55So55qE5piv56ys5LiJ5pa555qE5rqQ44CCXFxuXFxuPCEtLW1vcmUtLT5cXG5cXG7miZPlvIAvZXRjL3BhY21hbi5jb25m5paH5Lu277yM5re75Yqg5Lul5LiL5YaF5a655Yiw5pyA5bqV6YOo44CCXFxuXFxuICAgIFtpbmZpbmFsaXR5LWJ1bmRsZV1cXG4gICAgU2lnTGV2ZWwgPSBOZXZlclxcbiAgICBTZXJ2ZXIgPSBodHRwOi8vYm9ob29taWwuY29tL3JlcG8vJGFyY2hcXG4gICAgW2luZmluYWxpdHktYnVuZGxlLW11bHRpbGliXVxcbiAgICBTaWdMZXZlbCA9IE5ldmVyXFxuICAgIFNlcnZlciA9IGh0dHA6Ly9ib2hvb21pbC5jb20vcmVwby9tdWx0aWxpYi8kYXJjaFxcbiAgICBbaW5maW5hbGl0eS1idW5kbGUtZm9udHNdXFxuICAgIFNpZ0xldmVsID0gTmV2ZXJcXG4gICAgU2VydmVyID0gaHR0cDovL2JvaG9vbWlsLmNvbS9yZXBvL2ZvbnRzXFxuXFxu5omn6KGM5a6J6KOF5ZG95LukOlxcblxcbiAgICBzdWRvIHBhY21hbiAtUyBpbmZpbmFsaXR5LWJ1bmRsZSBpbmZpbmFsaXR5LWJ1bmRsZS1tdWx0aWxpYiBpYmZvbnRzLW1ldGEtZXh0ZW5kZWQgICPvvIjnlKjkuo42NOS9jeezu+e7n++8iVxcbiAgICBzdWRvIHBhY21hbiAtUyBpbmZpbmFsaXR5LWJ1bmRsZSBpYmZvbnRzLW1ldGEtZXh0ZW5kZWQgI++8iOeUqOS6jjMy5L2N57O757uf77yJXFxuXFxu5aaC5p6c5pyJ6YGH5Yiw6ZSZ6K+v77yM5Y+v5Lul5omL5Yqo5re75YqgaG9zdHPvvJpcXG5cXG4gICAgMTg4LjIyNi4yMTkuMTczIGJvaG9vbWlsLmNvbVxcblxcbuS8muWHuueOsOW+iOWkmuWGsueqge+8jOmAieaLqVnvvIznhLblkI7lronoo4XjgILlpoLmnpzkuK3mlq3kuobvvIzph43mlrDmiafooYzlronoo4Xlkb3ku6TjgIJcXG5cXG7mnaXoh6rvvJpb5aaC5L2V57uZ5Lu75oSP5LiA5qy+IExpbnV4IOWPkeihjOeJiOa3u+WKoOa8guS6rueahOWtl+S9ky3moYzpnaLlupTnlKh8TGludXgu5Lit5Zu9LeW8gOa6kOekvuWMul1bMV1cXG5cXG5bMV06IGh0dHBzOi8vbGludXguY24vYXJ0aWNsZS0zMDE5LTEuaHRtbCBcXFwi5aaC5L2V57uZ5Lu75oSP5LiA5qy+IExpbnV4IOWPkeihjOeJiOa3u+WKoOa8guS6rueahOWtl+S9ky3moYzpnaLlupTnlKh8TGludXgu5Lit5Zu9LeW8gOa6kOekvuWMulxcXCJcXG5cIixcImZyb250bWF0dGVyXCI6XCJsYXlvdXQ6ICAgICBwb3N0XFxudGl0bGU6ICAgICAgXFxcIkFyY2hsaW51eCDmt7vliqDmvILkuq7nmoTlrZfkvZNcXFwiXFxuc3VidGl0bGU6ICAgXFxcIuaDs+imgea8guS6rueahOWtl+S9k+WQl1xcXCJcXG5kYXRlOiAgICAgICAyMDE2LTA0LTA4IDE2OjU0OjI2XFxuYXV0aG9yOiAgICAgXFxcImtpcmlnYXlhXFxcIlxcbmhlYWRlci1pbWc6IFxcXCJob21lLWJnLmpwZ1xcXCJcXG50YWdzOlxcbiAgICAtIOaVmeeoi1wifSIsIm1vZHVsZS5leHBvcnRzID0ge1wiYXR0cmlidXRlc1wiOntcInRpdGxlXCI6XCLop6PlhrPnlKjkuoZ4cG9zZWTlkI7mt5jlrp3pl6rpgIBcIixcInNcIjpcImZ1Y2tfdGFvYmFvXCIsXCJkYXRlXCI6XCIyMDE5LTAxLTIzVDEwOjI3OjUyLjAwMFpcIixcInRhZ3NcIjpudWxsLFwiY2F0ZWdvcmllc1wiOm51bGx9LFwiYm9keVwiOlwiXFxu5Y+N5q2j6YO955SoeHBvc2Vk5LqG77yM6IKv5a6a5Lmf5pyJcm9vdOadg+mZkOOAglxcbuWIoOmZpC9kYXRhL2RhdGEvY29tLnRhb2Jhby50YW9iYW8vZmlsZXMvYnVuZGxlQmFzZWxpbmUv6YeM55qE5paH5Lu277yM54S25ZCO6K6+572u6K+l55uu5b2V5Li6NTAw44CCXFxuXCIsXCJmcm9udG1hdHRlclwiOlwidGl0bGU6IOino+WGs+eUqOS6hnhwb3NlZOWQjua3mOWunemXqumAgFxcbnM6IGZ1Y2tfdGFvYmFvXFxuZGF0ZTogMjAxOS0wMS0yMyAxMDoyNzo1MlxcbnRhZ3M6XFxuY2F0ZWdvcmllczpcIn0iLCJtb2R1bGUuZXhwb3J0cyA9IHtcImF0dHJpYnV0ZXNcIjp7XCJ0aXRsZVwiOlwi5qCH6aKYMVwiLFwiZGF0ZVwiOlwiMjAxOC0xMi0wMVQwMDowMDowMC4wMDBaXCJ9LFwiYm9keVwiOlwiXFxu5q2j5paH5YaF5a65XFxuXFxuIyMgdGVzdFxcblwiLFwiZnJvbnRtYXR0ZXJcIjpcInRpdGxlOiDmoIfpopgxXFxuZGF0ZTogMjAxOC0xMi0xIDAwOjAwOjAwXCJ9IiwibW9kdWxlLmV4cG9ydHMgPSB7XCJhdHRyaWJ1dGVzXCI6e1widGl0bGVcIjpcIuaKiuWNmuWuoui9rOenu+WIsGNvZGluZ1wiLFwicFwiOlwiaGV4byBwYWdlIG1vdmUgdG8gY29kaW5nXCIsXCJkYXRlXCI6XCIyMDE4LTExLTA5VDIwOjE3OjMyLjAwMFpcIixcInRhZ3NcIjpudWxsLFwiY2F0ZWdvcmllc1wiOm51bGx9LFwiYm9keVwiOlwiXFxu5LiK5ZGo5pyr5oqY6IW+6buR5p6c5a2Q55qE5pe25YCZ77yM5LiN5bCP5b+D6KKr5p6c5a2Q5Z2R54i555qE56OB55uY566h55CG5Z2R5LqG77yM5pW05LiqaG9tZeiiq+ebtOaOpeaUueaIkEhGUyvkuobvvIzmnKzmnaXmmK/miZPnrpfliIbphY3kuIDkuKrnqbrpl7LliIbljLrlh7rmnaXnmoTvvIzlvZPmiJHmlrDlu7rliIbljLrku6XlkI7vvIzku47nqbrpl7TliIbljLrlvIDlp4vliLBob21l77yM5YiG5Yy65YWo6YOo6YO95Y+Y5oiQSEZTK+S6hu+8jOS9huaYr+KApiDnqbrpl7LliIbljLrmlrDlu7rlpLHotKXvvIzmj5DnpLrmiJHno4Hnm5jnqbrpl7TkuI3otrPvvIzmiJHlsLHph43lkK/ov5tkZWVwaW7miZPnrpfnm7TmjqXmlrDlu7rkuIDkuKrnrpfkuobvvIznhLblkI7lsLFHR+WHoOeOh+S6huOAguWcqHdpbmRvd3PkuIvnnIvliLBob21l5bey57uP5oiQ5p6c5a2Q55qE5paH5Lu257O757uf5LqG77yM54S25ZCO5oiR55SoYXJjaOeahOWuieijheebmOeci+S6huS4gOS4i++8jOW3sue7j+aXoOazlemHjeaWsOaMgui9veS6hijmiJDlip9HRynvvIznhLblkI7mlbDmja7lsLHpg73msqHkuobjgIJcXG5cXG7ov5jlpb3miJHnmoTmlbDmja7lnKjlhazlj7jov5jmnInkuIDku73vvIznp4HpkqXkuZ/pg73lnKjvvIznu4/ov4fkuIDmmJ/mnJ/nmoTliqrlipvlpI3liLbvvIzlpKfpg6jliIbmlbDmja7pg73mgaLlpI3kuobvvIzkuI3ov4d0b3BiYXLnmoTmlrDlip/og73ku6PnoIHmmK/lvbvlupXmsqHkuobvvIzlkajkupTmmZrkuIrlpKroh6rkv6HkuobvvIzmsqHmnInmj5DkuqTliLBnYXlodWLkuIoo54yb5Y+55rCUKeOAglxcblxcbuaIkeS7rOeOsOWcqOato+WcqOWwneivleaKiuaXpeW4uOW3peS9nOi9rOWQkWdpdGh1YueahHByb2plY3TlkoznnIvmnb/vvIzmr4/lpKnml6nkuIrlvIDkuIDkuIvmmajkvJrvvIznroDljZXliIbphY3kuIDkuIvku7vliqHvvIzlvIDlrozkvJrku6XlkI7miJHkvJrmioroh6rlt7HnmoTku7vliqHlhpnlnKjosLfmrYzml6Xljoblkox0YXNr5LiK77yM54S25ZCO5a6J5o6S5LiA5LiL5Lu75Yqh55qE5YWI5ZCO6aG65bqP77yM5oiR5YeG5aSH5oqK6Ieq5bex55qE5LiA5Lqb5YGa5rOV5YaZ5Yiw5Y2a5a6i5LiK77yM5L2G5pivaG9tZeW3sue7j+S4jeWcqOS6hu+8jOaJgOS7peaIkeimgeWFiOaBouWkjeaIkeeahOWNmuWuou+8jOWImuWlveWbveWGheacieS6uuivtOaIkeWNmuWuouiuv+mXrueahOW+iOaFou+8jOaIkeaJk+eul+WbveWGheino+aekOWIsGNvZGluZ++8jOWbveWkluino+aekOWIsGdpdGh1YuOAglxcblxcbjwhLS0gbW9yZSAtLT5cXG5cXG7pppblhYjvvIzliJvlu7rmlrDnmoTljZrlrqLnm67lvZXvvIznlKjmnaXmi4nlj5bml6fnmoTmlbDmja7jgIJcXG5cXG5gYGBcXG5ta2RpciBibG9nICYmIGNkIGJsb2dcXG5gYGBcXG5cXG7liJ3lp4vljJZnaXTnm67lvZXjgIJcXG5cXG5gYGBcXG5naXQgaW5pdFxcbmBgYFxcblxcbua3u+WKoOi/nOeoi+S7k+W6k+OAglxcblxcbmBgYFxcbmdpdCByZW1vdGUgYWRkIG9yaWdpbiDkvaDnmoTljZrlrqJnaXTlnLDlnYBcXG5gYGBcXG5cXG7lj5blm55vcmlnaW7nmoRiYWNrdXDliIbmlK/vvIzlkozmnKzlnLBtYXN0ZXLlkIjlubbjgILlm6DkuLpoZXhvLWdpdC1iYWNrdXDmj5Lku7blj6rmlK/mjIFtYXN0ZXLvvIzkvYbmmK9jb2Rpbmflj6rmlK/mjIFtYXN0ZXLpg6jnvbJwYWdl5pyN5Yqh77yM5omA5Lul6ZyA6KaB5L2/55So5YW25LuW5YiG5pSv44CCXFxuXFxuYGBgXFxuZ2l0IHB1bGwgb3JpZ2luIGJhY2t1cDptYXN0ZXJcXG5gYGBcXG5cXG7mi4nlj5bkuobku6PnoIHku6XlkI7vvIzmiJHku6zpnIDopoHlgZrngrnlhbbku5borr7nva7vvIzpppblhYjorr7nva7kuIrmuLjliIbmlK/jgIJcXG5cXG5gYGBcXG5naXQgYnJhbmNoIC0tc2V0LXVwc3RyZWFtLXRvPW9yaWdpbi9iYWNrdXAgbWFzdGVyXFxuYGBgXFxuXFxu6K6+572uZ2l055qE6buY6K6kcHVzaOetlueVpe+8jOWPr+S7peWPguiAg1t0aGVrYWl3YXldKGh0dHA6Ly90aGVrYWl3YXkuY29tLzIwMTMvMDcvMzAvY29uZmlnLXlvdXItZ2l0LXB1c2gtc3RyYXRlZ3kvKeeahOaWh+eroOOAglxcblxcbmBgYFxcbmdpdCBjb25maWcgcHVzaC5kZWZhdWx0IHVwc3RyZWFtXFxuYGBgXFxuXFxu54S25ZCO5re75YqgY29kaW5n55qEZ2l05Zyw5Z2A44CCXFxuXFxuYGBgXFxuZ2l0IHJlbW90ZSBhZGQgY29kaW5nIOS9oOeahGdpdOWcsOWdgFxcbmBgYFxcblxcbuS5i+WQjuWwseato+W4uOS9v+eUqOS6hu+8jOmAmui/h25wbeWuieijhWhleG/vvIzlho3lronoo4XpnIDopoHnmoTmj5Lku7bvvIzmnIDlkI7lrozmiJDkuoblnKjkuIDlj7DmlrDnlLXohJHkuIrmgaLlpI1oZXhv5Y2a5a6i44CCXFxuXCIsXCJmcm9udG1hdHRlclwiOlwidGl0bGU6IOaKiuWNmuWuoui9rOenu+WIsGNvZGluZ1xcbnA6IGhleG8gcGFnZSBtb3ZlIHRvIGNvZGluZ1xcbmRhdGU6IDIwMTgtMTEtMDkgMjA6MTc6MzJcXG50YWdzOlxcbmNhdGVnb3JpZXM6XCJ9IiwibW9kdWxlLmV4cG9ydHMgPSB7XCJhdHRyaWJ1dGVzXCI6e1widGl0bGVcIjpcIuS9v+eUqHN3YXBmaWxl5p2l5LyR55ygXCIsXCJzXCI6XCJoaWJlcm5hdGUgZm9yIHN3YXBmaWxlXCIsXCJkYXRlXCI6XCIyMDE4LTEyLTEyVDExOjAxOjU1LjAwMFpcIixcInRhZ3NcIjpcIkxpbnV4XCIsXCJjYXRlZ29yaWVzXCI6XCJMaW51eFwifSxcImJvZHlcIjpcIlxcbuacgOi/kWRlZXBpbuimgea3u+WKoOS8keecoOWKn+iDve+8jOS9huaYr+S5i+WJjea1i+ivleeahOmAmui/h3N3YXBmaWxl5p2l5LyR55yg5aSx6LSl5LqG77yM5omA5Lul5a+55q2j5Zyo5L2/55Soc3dhcOWIhuWMuueahOeUqOaIt+aPkOS+m+S8keecoOWKn+iDveOAguS9huaYr+aYqOWkqeaIkeWcqGFza3VidW50deS4iueci+WIsOacieS6uuWPkeS6huWcqHVidW50deS4i+mAmui/h3N3YXBmaWxl5LyR55yg55qE5pa55qGI77yM5LuK5aSp6K+V5LqG5LiA5LiL77yM5pWI5p6c6Imv5aW977yM6KeJ5b6X5Y+v5Lul6ICD6JmR57uZZGVlcGlu5Lmf5Yqg5LiK6L+Z5qC355qE5Yqf6IO944CCXFxuXFxuPCEtLSBtb3JlIC0tPlxcblxcbuWOn+aWh+mTvuaOpTogW0hpYmVybmF0ZSBhbmQgcmVzdW1lIGZyb20gYSBzd2FwIGZpbGVdKGh0dHBzOi8vYXNrdWJ1bnR1LmNvbS9xdWVzdGlvbnMvNjc2OS9oaWJlcm5hdGUtYW5kLXJlc3VtZS1mcm9tLWEtc3dhcC1maWxlKVxcblxcbuWFt+S9k+atpemqpOaYr+mAmui/h3Vzd3N1c3Dov5nkuKrljIXmnaXlgZrnmoTvvIx1c3dzdXNw5piv5LiA57uE55So5oi356m66Ze05bel5YW377yM55So5LqOTGludXjns7vnu5/kuIrnmoTkvJHnnKAo5oyC6LW35Yiw56OB55uYKeWSjOaMgui1tyjmjILotbfliLBSQU3miJblvoXmnLop44CC6K+m57uG5YaF5a655Y+v5Lul5ZyoQXJjaFdpa2nkuIrlj4LogIPjgIJb54K56L+Z6YeMXShodHRwczovL3dpa2kuYXJjaGxpbnV4Lm9yZy9pbmRleC5waHAvVXN3c3VzcClcXG5cXG5cXG7lhYjliJvlu7rkuIDkuKrlkozlhoXlrZjlkIznrYnlpKflsI/nmoRzd2FwZmlsZe+8jOS4uuS6huehruS/neS8keecoOaIkOWKn++8jOS4jeiDveWwj+S6juWGheWtmOeahOWuuemHj+OAglxcblxcbmBgYFxcbnN1ZG8gZmFsbG9jYXRlIC1sIDE2ZyAvc3dhcGZpbGUgIyDmiJHnmoTmnLrlrZDmmK8xNkfvvIzlhbfkvZPoh6rlt7Hkv67mlLlcXG5zdWRvIGNobW9kIDYwMCAvc3dhcGZpbGVcXG5zdWRvIG1rc3dhcCAvc3dhcGZpbGVcXG5zdWRvIHN3YXBvbiAvc3dhcGZpbGVcXG5lY2hvICcvc3dhcGZpbGUgc3dhcCBzd2FwIGRlZmF1bHRzIDAgMCcgfCBzdWRvIHRlZSAtYSAvZXRjL2ZzdGFiXFxuYGBgXFxuXFxu5a6J6KOF55So5oi356m66Ze06L2v5LyR55ygKFVzZXJzcGFjZSBTb2Z0d2FyZSBTdXNwZW5kKeWMhVxcblxcbmBgYFxcbnN1ZG8gYXB0IGluc3RhbGwgdXN3c3VzcFxcbmBgYFxcblxcbuWIm+W7uumcgOimgeeahOmFjee9ruaWh+S7tu+8jOWPqumcgOimgeWIm+W7uuaWh+S7tuWNs+WPr+OAglxcblxcbmBgYFxcbnN1ZG8gdG91Y2ggL2V0Yy91c3dzdXNwLmNvbmZcXG5zdWRvIGRwa2ctcmVjb25maWd1cmUgLXBtZWRpdW0gdXN3c3VzcFxcbmBgYFxcblxcbui/meaXtuWAmee7iOerr+S8muaPkOmGkuaYr+WQpue7p+e7re+8jOmAieaLqVllc++8jOeEtuWQjuS8muimgeaxguS9oOWIm+W7uuS4gOS4quWvhuegge+8jOiuvue9ruS4gOS4quWvhueggee7p+e7reWNs+WPr+OAglxcblxcbuatpOaXtuWwseWPr+S7pea1i+ivleS4gOS4i+WKn+iDveS6hu+8jOS4jei/h+aIkeaYr+i3s+i/h+i/meS4quatpemqpOS6hijmr5TovoPllpzmrKLkvZzmrbsp44CCXFxuXFxu5L+u5pS5c3lzdGVtZOeahGhpYmVybmF0ZeacjeWKoe+8jOS9v+eUqHVzd3N1c3DmnaXku6Pmm79zeXN0ZW1k55qE5Yqf6IO944CCXFxuXFxuYGBgXFxuc3VkbyBzeXN0ZW1jdGwgZWRpdCBzeXN0ZW1kLWhpYmVybmF0ZS5zZXJ2aWNlXFxuYGBgXFxuXFxu5YaZ5YWl5Lul5LiL5YaF5a65OlxcblxcbmBgYFxcbltTZXJ2aWNlXVxcbkV4ZWNTdGFydD1cXG5FeGVjU3RhcnQ9L3Vzci9zYmluL3MyZGlza1xcbkV4ZWNTdGFydFBvc3Q9L2Jpbi9ydW4tcGFydHMgLWEgcG9zdCAvbGliL3N5c3RlbWQvc3lzdGVtLXNsZWVwXFxuYGBgXFxuXFxu6L+Z5pe25YCZ5Y+v5Lul5L2/55Soc3lzdGVtZOeahOWRveS7pOadpea1i+ivleeahO+8jOaIkeihqOekuuW3peS9nOeahOmdnuW4uOato+W4uOOAglxcblxcbmBgYFxcbnN5c3RlbWN0bCBoaWJlcm5hdGVcXG5gYGBcXG5cXG7miafooYzku6XlkI7lj6/ku6XnnIvliLDlsY/luZXkuIrkvJrmiZPljbDlvZPliY3kv53lrZjnmoTov5vluqbvvIznhLblkI7orr7lpIflsLHlhbPmnLrkuobvvIzmraTml7blho3lvIDmnLrvvIznrYnlvoXkuIDkvJrlhL/ku6XlkI7lsLHnnIvliLDkuobog4zmma/mmK/miJHmvILkuq7ogIHlqYbnmoTplIHlsY/vvIzop6PplIHku6XlkI7nnIvliLDlt6XkvZzljLrov5jmmK/miafooYzlkb3ku6TliY3nmoTvvIzkuIDliIdva+OAglxcblxcblxcbuWPguiAg+S7peS4i+WGheWuuTpcXG4+IGh0dHBzOi8vYXNrdWJ1bnR1LmNvbS9xdWVzdGlvbnMvNjc2OS9oaWJlcm5hdGUtYW5kLXJlc3VtZS1mcm9tLWEtc3dhcC1maWxlXFxuXFxuPiBodHRwczovL3dpa2kuYXJjaGxpbnV4Lm9yZy9pbmRleC5waHAvVXN3c3VzcFxcblwiLFwiZnJvbnRtYXR0ZXJcIjpcInRpdGxlOiDkvb/nlKhzd2FwZmlsZeadpeS8keecoFxcbnM6IGhpYmVybmF0ZSBmb3Igc3dhcGZpbGVcXG5kYXRlOiAyMDE4LTEyLTEyIDExOjAxOjU1XFxudGFnczogTGludXhcXG5jYXRlZ29yaWVzOiBMaW51eFwifSIsIm1vZHVsZS5leHBvcnRzID0ge1wiYXR0cmlidXRlc1wiOntcInRpdGxlXCI6XCLlpoLkvZXlnKhEZWVwaW7kuIrkvb/nlKhMTk1QXCIsXCJkYXRlXCI6XCIyMDE5LTAyLTIxVDEwOjExOjE1LjAwMFpcIixcInRhZ3NcIjpbXCJMTk1QXCIsXCJMaW51eFwiLFwiRGVlcGluXCIsXCJXZWJcIl0sXCJjYXRlZ29yaWVzXCI6W1wiTGludXhcIl0sXCJhdXRob3JcIjpcIkxvcmVtIElwc3VtXCIsXCJ1cmxcIjpcImh0dHA6Ly9nZW5lcmF0b3IubG9yZW0taXBzdW0uaW5mb1wifSxcImJvZHlcIjpcIlxcbuS4uuS6huiKguecgeivu+iAheeahOaXtumXtO+8jOaIkeWFiOeugOi/sOS4gOS4i+mYheivu+i/meevh+aWh+eroOmcgOimgeS6huino+eahOefpeivhuOAglxcblxcbui/meevh+aWh+eroOWwhuWfuuS6jkRvY2tlcuadpeaehOW7um5naW5444CBcGhw5ZKMbXlzcWzmnaXmkK3lu7pMTk1Q546v5aKD77yM5ZKM5YW25LuW5pWZ56iL5pyJ5omA5LiN5ZCM55qE5piv77yM6ZyA6KaB5pyJ5LiA5a6a55qERG9ja2Vy5Z+656GA44CCXFxuXFxuPCEtLSBtb3JlIC0tPlxcblxcbkRvY2tlcuaYr+S4gOS4quS4jemUmeeahOW3peWFt++8jOS9v+aIkeS7rOS4jemcgOimgeiZmuaLn+acuumCo+agt+eahOW6nueEtuWkp+eJqeWwseWPr+S7pei9u+advueahOmalOemu+i/kOihjOeahOeoi+W6j++8jOi/meimgeaEn+iwokxpbnV455qE6LWE5rqQ5YiG56a75py65Yi277yM6YG/5YWN5ZCv5Yqo5LiA5Liq6Jma5ouf5py66YCg5oiQ5LqG5aSn6YeP6LWE5rqQ5rWq6LS544CCXFxuXFxu6aaW5YWI6ZyA6KaB5ZyoRGVlcGlu5LiK5a6J6KOFRG9ja2Vy77yM5re75YqgRG9ja2Vy55qEZGVi5LuT5bqT77yM5bm25a6J6KOFZG9ja2VyLWNl44CCXFxuXFxu5Yib5bu65paH5Lu2XFxuYGBgXFxuc3VkbyBuYW5vIC9ldGMvYXB0L3NvdXJjZXMubGlzdC5kL2RvY2tlci5saXN0XFxuYGBgXFxu5YaZ5YWlXFxuYGBgXFxuZGViIFthcmNoPWFtZDY0XSBodHRwczovL2Rvd25sb2FkLmRvY2tlci5jb20vbGludXgvZGViaWFuIGplc3NpZSBlZGdlXFxuYGBgXFxuXFxu5Yi35paw5LiA5LiL5LuT5bqT5bCx5Y+v5Lul5a6J6KOF5LqG44CCXFxuXFxuYGBgXFxuc3VkbyBhcHQgdXBkYXRlICYmIHN1ZG8gYXB0IGluc3RhbGwgZG9ja2VyLWNlIGRvY2tlci1jb21wb3NlXFxuYGBgXFxuXFxu5a6J6KOF5a6M5oiQ5ZCO6YeN5ZCv5LiA5LiL57O757uf77yM5YeG5aSH5bel5L2c5bCx566X5a6M5oiQ5LqG5LiA5Y2K5LqG44CCXFxuXFxu5Zyo5a6255uu5b2V5Yib5bu65LiA5LiqUHJvamVjdHPnm67lvZXvvIzlvZPlgZrmiJHku6xMTk1Q55qE5bel5L2c55uu5b2V77yM5Yib5bu65LiA5Liq5ZCN5Y+rKmRvY2tlci1jb21wb3NlLnlhbWwq55qE5paH5Lu277yM6L+Z5pivZG9ja2VyLWNvbXBvc2XnmoTphY3nva7mlofku7bvvIzmiJHku6zpgJrov4dkb2NrZXItY29tcG9zZei/meS4quW3peWFt+adpeeuoeeQhuaIkeS7rOeahERvY2tlcuWuueWZqOOAglxcblxcbuaJgOacieeahOmVnOWDj+Wdh+mHh+eUqOacgOaWsOeJiOacrO+8jG5naW54KDEuMTUuOCnvvIxwaHAoNy4zLjIp77yMbXlzcWwoOC4wLjE1Ke+8jOWmguaciemcgOimge+8jOiHquihjOmAieaLqeS4jeWQjOeJiOacrOeahOmVnOWDj+OAglxcblxcbuazqOaEj1BIUDflt7Lnu4/kuI3mlK/mjIFteXNxbOaJqeWxle+8jOS9v+eUqOWGhee9rueahE15U1FMbmTjgIJcXG5cXG7lhpnlhaXku6XkuIvphY3nva7mlofku7bvvJpcXG5cXG5gYGBcXG52ZXJzaW9uOiAnMydcXG5cXG5zZXJ2aWNlczpcXG4gIG5naW54OlxcbiAgICAjIOiuvue9ruWuueWZqOWQjeWtl1xcbiAgICBjb250YWluZXJfbmFtZTogXFxcIm5naW54XFxcIlxcbiAgICAjIOmHh+eUqOacgOaWsOeahG5naW54XFxuICAgIGltYWdlOiBuZ2lueDpsYXRlc3RcXG4gICAgIyDnu5Hlrpo4MOerr+WPo1xcbiAgICBwb3J0czpcXG4gICAgICAgIC0gXFxcIjgwOjgwXFxcIlxcbiAgICAjIOa3u+WKoHBocOWuueWZqOeahOS+nei1llxcbiAgICBkZXBlbmRzX29uOlxcbiAgICAgICAgLSBcXFwicGhwXFxcIlxcbiAgICAjIOe7keWumuaVsOaNruebruW9lVxcbiAgICB2b2x1bWVzOlxcbiAgICAgICAgLSBcXFwiLi92b2x1bWVzL25naW54L2NvbmYuZDovZXRjL25naW54L2NvbmYuZFxcXCJcXG4gICAgICAgIC0gXFxcIi4vdm9sdW1lcy9odG1sOi91c3Ivc2hhcmUvbmdpbngvaHRtbFxcXCJcXG4gICAgcmVzdGFydDogYWx3YXlzXFxuXFxuICBwaHA6XFxuICAgICMg6K6+572u5a655Zmo5ZCN5a2XXFxuICAgIGNvbnRhaW5lcl9uYW1lOiBcXFwicGhwXFxcIlxcbiAgICAjIOmHh+eUqOacgOaWsOeahHBocFxcbiAgICBpbWFnZTogcGhwOmZwbVxcbiAgICAjIOe7keWumuerr+WPo1xcbiAgICBwb3J0czpcXG4gICAgICAgIC0gXFxcIjkwMDA6OTAwMFxcXCJcXG4gICAgIyDnu5HlrprmlbDmja7nm67lvZVcXG4gICAgdm9sdW1lczpcXG4gICAgICAgIC0gXFxcIi4vdm9sdW1lcy9odG1sOi92YXIvd3d3L2h0bWxcXFwiXFxuICAgIHJlc3RhcnQ6IGFsd2F5c1xcblxcbiAgbXlzcWw6XFxuICAgICMg6K6+572u5a655Zmo5ZCN5a2XXFxuICAgIGNvbnRhaW5lcl9uYW1lOiBcXFwibXlzcWxcXFwiXFxuICAgICMg6YeH55So5pyA5paw55qEbXlzcWxcXG4gICAgaW1hZ2U6IG15c3FsOmxhdGVzdFxcbiAgICAjIOe7keWumuerr+WPo1xcbiAgICBwb3J0czpcXG4gICAgICAgIC0gXFxcIjMzMDY6MzMwNlxcXCJcXG4gICAgIyDorr7nva7njq/looPlj5jph49cXG4gICAgZW52aXJvbm1lbnQ6XFxuICAgICAgICAtIE1ZU1FMX1JPT1RfUEFTU1dPUkQ9KOiHquW3seiuvue9ruWvhueggSlcXG4gICAgIyDnu5HlrprmlbDmja7nm67lvZVcXG4gICAgdm9sdW1lczpcXG4gICAgICAgIC0gXFxcIi4vdm9sdW1lcy9teXNxbDovdmFyL2xpYi9teXNxbFxcXCJcXG4gICAgcmVzdGFydDogYWx3YXlzXFxuYGBgXFxuXFxu5Yib5bu6bmdpbnjnmoTphY3nva7mlofku7bvvIznvJbovpEgKi4vdm9sdW1lcy9uZ2lueC9jb25mLmQvbmdpbnguY29uZiog77yaXFxuXFxuYGBgXFxuc2VydmVyIHtcXG4gICAgbGlzdGVuICAgICAgIDgwO1xcbiAgICBzZXJ2ZXJfbmFtZSAgbG9jYWxob3N0O1xcbiAgICBsb2NhdGlvbiAvIHtcXG4gICAgICAgIHJvb3QgICAvdXNyL3NoYXJlL25naW54L2h0bWw7XFxuICAgICAgICBpbmRleCAgaW5kZXguaHRtbCBpbmRleC5odG0gaW5kZXgucGhwO1xcbiAgICB9XFxuICAgIGVycm9yX3BhZ2UgICA1MDAgNTAyIDUwMyA1MDQgIC81MHguaHRtbDtcXG4gICAgbG9jYXRpb24gPSAvNTB4Lmh0bWwge1xcbiAgICAgICAgcm9vdCAgIC91c3Ivc2hhcmUvbmdpbngvaHRtbDtcXG4gICAgfVxcbiAgICBsb2NhdGlvbiB+IFxcXFwucGhwJCB7XFxuICAgICAgICBmYXN0Y2dpX3Bhc3MgICBwaHA6OTAwMDtcXG4gICAgICAgIGZhc3RjZ2lfaW5kZXggIGluZGV4LnBocDtcXG4gICAgICAgIGZhc3RjZ2lfcGFyYW0gIFNDUklQVF9GSUxFTkFNRSAvdmFyL3d3dy9odG1sLyRmYXN0Y2dpX3NjcmlwdF9uYW1lO1xcbiAgICAgICAgaW5jbHVkZSAgICAgICAgZmFzdGNnaV9wYXJhbXM7XFxuICAgIH1cXG59XFxuYGBgXFxuXFxu5Yib5bu6cGhw5rWL6K+V5paH5Lu277yM57yW6L6RICouL3ZvbHVtZXMvaHRtbC9pbmRleC5waHAqIDpcXG5cXG5gYGBcXG48P3BocFxcbnBocGluZm8oKTtcXG4/PlxcbmBgYFxcblxcbuWQr+WKqGRvY2tlcu+8jOesrOS4gOasoemcgOimgeaLieWPluS4gOS4i+mVnOWDjzpcXG5cXG5gYGBcXG5kb2NrZXItY29tcG9zZSB1cCAtLWJ1aWxkIC1kXFxuYGBgXFxuXFxu562J5YWo6YOo57uT5p2f5Lul5ZCO77yM5bCx5Y+v5Lul6K6/6ZeubG9jYWxob3N055yL5YiwcGhw55qE5L+h5oGv5LqG44CCXFxuXFxu6YCa6L+HRG9ja2Vy55qE5pa55rOV5p2l5L2/55SoTE5NUO+8jOS4jeaxoeafk+Wuv+S4u+acuueOr+Wig++8jOS4jeS8muWGjeWboOS4uuWQhOenjeS+nei1lumXrumimOiAjOaQnuWdj+ezu+e7n++8jOi/meaBsOaBsOaYr+aWsOaJi+WuueaYk+eKr+eahOmUmeivr++8jOS9v+eUqERvY2tlcu+8jOaWueS+v+S9oOaIkeOAglxcblwiLFwiZnJvbnRtYXR0ZXJcIjpcInRpdGxlOiDlpoLkvZXlnKhEZWVwaW7kuIrkvb/nlKhMTk1QXFxuZGF0ZTogMjAxOS0wMi0yMSAxMDoxMToxNVxcbnRhZ3M6XFxuICAtIExOTVBcXG4gIC0gTGludXhcXG4gIC0gRGVlcGluXFxuICAtIFdlYlxcbmNhdGVnb3JpZXM6XFxuICAtIExpbnV4XFxuYXV0aG9yOiBMb3JlbSBJcHN1bVxcbnVybDogaHR0cDovL2dlbmVyYXRvci5sb3JlbS1pcHN1bS5pbmZvXCJ9IiwibW9kdWxlLmV4cG9ydHMgPSB7XCJhdHRyaWJ1dGVzXCI6e1wibGF5b3V0XCI6XCJwb3N0XCIsXCJ0aXRsZVwiOlwibGludXjkuIvlronoo4V2bXdhcmXlj4phcmNobGludXjnmoTlronoo4XlkozphY3nva5cIixcInN1YnRpdGxlXCI6XCLmiJHnmoRsaW51eOaXpeW4uFwiLFwiZGF0ZVwiOlwiMjAxNi0wNC0xMFQxNzowMjo1MS4wMDBaXCIsXCJhdXRob3JcIjpcImtpcmlnYXlhXCIsXCJoZWFkZXItaW1nXCI6XCJob21lLWJnLmpwZ1wiLFwidGFnc1wiOltcIuaVmeeoi1wiXX0sXCJib2R5XCI6XCLop4bpopHkuK3nu5nlh7rkuoZ2bXdhcmXnmoTkuIvovb3lnLDlnYDlkozlronoo4Xov4fnqIvvvIzns7vnu5/nmoTkuIvovb3miJHkuZ/kvJrmvJTnpLrkuIDpgY3jgIJcXG7ov5nnr4fmlZnnqIvkvJrkuIDnr4flrozmiJDvvIzku47lronoo4XliLDphY3nva7lkoznvo7ljJbvvIzpobrkvr/kuZ/mgLvnu5PkuIDkuIvmiJHnmoTmiJDmnpzjgIJcXG7nlLHkuo7miJHlt7Lnu4/lronoo4Xov4fkuIDmrKF2bXdhcmXkuobvvIzmiYDku6XmnInkuKrohJrmnKznmoTlnLDmlrnmsqHmnInlh7rnjrDvvIzovpPlhaXnlYzpnaLkuIrnmoTmj5DnpLrkv6Hmga/ljbPlj6/jgIJcXG7lrr/oiI3lpKrkubHvvIzmiYDku6XlsLHmsqHmnInlvZXpuqblhYvpo47vvIzmk43kvZzmiJHkvJrlsL3ph4/mhaLkuIDkupvvvIznhLblkI7miZPlrZforrLov7DjgIJcXG7ov5nmrKHlpKfmm7TjgILjgIJndGvkuLvpopjov5jmsqHmm7TmlrDkuIrmnaXvvIzmiYDku6XnlYzpnaLlpb3kuJHjgIIgID0gPeOAglxcbuWuieijheWujOaIkOS7peWQjuWuieijhea6kOmHjOmdoueahHZtd2FyZS1wYXRjaOOAglxcblwiLFwiZnJvbnRtYXR0ZXJcIjpcImxheW91dDogICAgIHBvc3RcXG50aXRsZTogICAgICBcXFwibGludXjkuIvlronoo4V2bXdhcmXlj4phcmNobGludXjnmoTlronoo4XlkozphY3nva5cXFwiXFxuc3VidGl0bGU6ICAgXFxcIuaIkeeahGxpbnV45pel5bi4XFxcIlxcbmRhdGU6ICAgICAgIDIwMTYtMDQtMTAgMTc6MDI6NTFcXG5hdXRob3I6ICAgICBcXFwia2lyaWdheWFcXFwiXFxuaGVhZGVyLWltZzogXFxcImhvbWUtYmcuanBnXFxcIlxcbnRhZ3M6XFxuICAgIC0g5pWZ56iLXCJ9IiwibW9kdWxlLmV4cG9ydHMgPSB7XCJhdHRyaWJ1dGVzXCI6e1wibGF5b3V0XCI6XCJwb3N0XCIsXCJ0aXRsZVwiOlwiTXkgTGlmZVwiLFwic3VidGl0bGVcIjpcIuaIkeeahGxpbnV45pel5bi4XCIsXCJkYXRlXCI6XCIyMDE2LTAzLTI1VDExOjU2OjA4LjAwMFpcIixcImF1dGhvclwiOlwia2lyaWdheWFcIixcImhlYWRlci1pbWdcIjpcIm15LWxpZmUuanBnXCIsXCJ0YWdzXCI6W1wi5pel5bi4XCJdfSxcImJvZHlcIjpcIui/meaYr+aIkeeUqG1hcmtkb3du5YaZ55qE56ys5LiA56+H5paH56ugKOawtOaWhynvvIzlhYjmnaXkuKroh6rmiJHku4vnu43lkKfvvIzmiJHmmK/lsI/nq7nvvIzlr7nmsqHplJnvvIzmmK/lsI/nq7nvvIzkuI3mmK/nq7nlrZDvvIzkuI3mmK/nq7nphbHvvIzmm7TkuI3mmK/nq7nln7rjgIJcXG5cXG48IS0tbW9yZS0tPlxcblxcbuaIkeeOqWxpbnV45bqU6K+l5pyJ5LqU5YWt5bm05LqG5ZCn77yM5Yid5LqM55qE5pe25YCZ5o6l6Kem55qE77yM5LiN6L+H5b6I5aSa5bm06YO95L+d5oyB5Zyo5o2i5ZCE56eN5Y+R6KGM54mI5LiK77yM5bm25rKh5pyJ55yf5q2j5oSP5LmJ55qE546p44CC5LiK5LqG5aSn5a2m5Lul5ZCO77yM5o6l6Kem55qE5pu05aSa5LqG77yM546p55qE5Lmf5pu05Zeo5LqG44CCXFxu546w5Zyo5Lmf55So5LiKYXJjaCtidHJmcyt1ZWZp5LqG77yM5ZCE56eN5Y+854K45aSp44CCXFxuaXJj6YeM6Z2i5Lmf57uP5bi45a2m5Lmg44CQ55yL5Yir5Lq66KOF6YC844CCXFxu5L6d5pen5piv6Iux6K+t5rij5rij77yM5pWw5a2m5rij5rij77yM55yL5Yiwd2luMzJhcGnvvIzmiJHnm7TmjqXmlL7lvIN3aW7nvJbnqIvkuobvvIzmiJHnmoTmmbrllYbkuZ/lsLHnjqnnjql3cGbkuobjgIJcXG7kuIvpnaLlsLHotLTlh6DlvKDmiJHnmoTml6XluLjmiKrlm77jgIJcXG48IS0tIG1vcmUgLS0+XFxuKipNeSBDb21wdXRlciBpbmZvKipcXG48cHJlPjxjb2RlPlxcbmtpcmlnYXlhbG92ZXlvdXNlaUBsaW51c2VyXFxuT1M6IEFyY2ggTGludXhcXG5LZXJuZWw6IHg4Nl82NCBMaW51eCA0LjQuNS0xLUFSQ0hcXG5hY2thZ2VzOiAxMDkyXFxuU2hlbGw6IHpzaCA1LjJcXG5SZXNvbHV0aW9uOiAxMzY2eDc2OFxcbldNOiBNdXR0ZXIoRGVlcGluR2FsYSlcXG5XTSBUaGVtZTogQWR3YWl0YVxcbkdUSyBUaGVtZTogQXJjLU9TWCBbR1RLMi8zXVxcbkljb24gVGhlbWU6IGRlZXBpblxcbkZvbnQ6IE5vdG8gU2FucyBDSksgU0MgUmVndWxhciAxMFxcbkNQVTogSW50ZWwgQ29yZSBpNS00MjEwVSBDUFUgQCAyLjdHSHpcXG5SQU06IDE5ODBNaUIgLyAzODYxTWlCXFxuPC9jb2RlPjwvcHJlPlxcbiFbcGljMV0obXktbGlmZS/mt7HluqbmiKrlm74yMDE2MDQwMzIyNDM1Ni5wbmcpXFxuIVtwaWMxXShteS1saWZlL+a3seW6puaIquWbvjIwMTYwNDAzMjI0NDEwLnBuZylcXG4hW3BpYzFdKG15LWxpZmUv5rex5bqm5oiq5Zu+MjAxNjA0MDMyMjQ1MjQucG5nKVxcbiFbcGljMV0obXktbGlmZS/mt7HluqbmiKrlm74yMDE2MDQwMzIyNDYzNC5wbmcpXFxuIVtwaWMxXShteS1saWZlL+a3seW6puaIquWbvjIwMTYwNDAzMjMzMTEyLnBuZylcXG4hW3BpYzFdKG15LWxpZmUv5rex5bqm5oiq5Zu+MjAxNjA0MDMyMzMyMjkucG5nKVxcblwiLFwiZnJvbnRtYXR0ZXJcIjpcImxheW91dDogICAgIHBvc3RcXG50aXRsZTogICAgICBcXFwiTXkgTGlmZVxcXCJcXG5zdWJ0aXRsZTogICBcXFwi5oiR55qEbGludXjml6XluLhcXFwiXFxuZGF0ZTogICAgICAgMjAxNi0wMy0yNSAxMTo1NjowOFxcbmF1dGhvcjogICAgIFxcXCJraXJpZ2F5YVxcXCJcXG5oZWFkZXItaW1nOiBcXFwibXktbGlmZS5qcGdcXFwiXFxudGFnczpcXG4gICAgLSDml6XluLhcIn0iLCJtb2R1bGUuZXhwb3J0cyA9IHtcImF0dHJpYnV0ZXNcIjp7XCJsYXlvdXRcIjpcInBvc3RcIixcInRpdGxlXCI6XCLmoIfpophcIixcInN1YnRpdGxlXCI6XCLlrZfluZVcIixcImRhdGVcIjpcIjIwMTYtMDMtMjVUMDA6MDA6MDAuMDAwWlwiLFwiYXV0aG9yXCI6XCJraXJpZ2F5YVwiLFwiaGVhZGVyLWltZ1wiOlwi5qih5p2/XCIsXCJ0YWdzXCI6W1wi5qih5p2/XCJdfSxcImJvZHlcIjpcIlxcblxcblxcbjwhLS1tb3JlLS0+XFxuXCIsXCJmcm9udG1hdHRlclwiOlwibGF5b3V0OiAgICAgcG9zdFxcbnRpdGxlOiAgICAgIFxcXCLmoIfpophcXFwiXFxuc3VidGl0bGU6ICAgXFxcIuWtl+W5lVxcXCJcXG5kYXRlOiAgICAgICAyMDE2LTAzLTI1IDAwOjAwOjAwXFxuYXV0aG9yOiAgICAgXFxcImtpcmlnYXlhXFxcIlxcbmhlYWRlci1pbWc6IFxcXCLmqKHmnb9cXFwiXFxudGFnczpcXG4gICAgLSDmqKHmnb9cIn0iLCJtb2R1bGUuZXhwb3J0cyA9IHtcImF0dHJpYnV0ZXNcIjp7XCJ0aXRsZVwiOlwiQysr5b+r6YCf5o6S5bqPXCIsXCJwXCI6XCJxdWljayBzb3J0IGZvciBjKytcIixcImRhdGVcIjpcIjIwMTgtMTEtMTFUMTY6NTc6NDQuMDAwWlwiLFwidGFnc1wiOltcIlByb2dyYW1cIixcIkMrK1wiXSxcImNhdGVnb3JpZXNcIjpudWxsfSxcImJvZHlcIjpcIlxcbuW/q+mAn+aOkuW6j+aYr+WfuuS6juWIhuayu+aAneaDs+eahOaOkuW6j+eul+azle+8jOmAmui/h+i/meenjeetlueVpeaKiuWIl+ihqOWIhuS4uuS4pOS4quWtkOWIl++8jOmHjeWkjeivpei/h+eoi+OAguaYr+eUseS4nOWwvMK36ZyN5bCU5o+Q5Ye677yM5Zyo5bmz5Z2H54q25Ya15LiL77yM5o6S5bqPTuS4quaVsOaNruimgU8obmxvZ24p5qyh5q+U6L6D77yM5Zyo5pyA5Z2P5oOF5Ya15LiL5YiZ6ZyA6KaBTyhuXjIp77yM5L2G6YCA5YyW5oiQ5YaS5rOh55qE5oOF5Ya15q+U6L6D5bCR6KeB77yM5b+r6YCf5o6S5bqP5q+U5YW25LuW5o6S5bqP566X5rOV6YCa5bi45oOF5Ya15piv5pyA5L2z55qE77yM5Zug5Li65YaF6YOo5L2/55So55qE5b6q546v5Zyo5b6I5aSa5bmz5Y+w6YO95pyJ5LyY5YyW44CCXFxuXFxuPCEtLSBtb3JlIC0tPlxcblxcbuW/q+mAn+aOkuW6j+eahOatpemqpOW+iOeugOWNle+8mlxcbi0g6YCJ5oup5LiA5Liq5Z+65YeGXFxuLSDpgY3ljobliJfooajvvIzlsIblsI/kuo7ln7rlh4bnmoTmlL7lnKjliJfooajlt6bovrnvvIzlpKfkuo7ln7rlh4bnmoTmlL7lnKjliJfooajlj7PovrlcXG4tIOmAkuW9kui/meS4quaTjeS9nFxcblxcbuWcqOe7tOWfuueZvuenkeS4iueahOi/meW8oOWbvuWPr+S7peW+iOebtOingueahOWxleekuuW/q+mAn+aOkuW6j+eahOi/h+eoi1xcblxcbiFbcXVpY2tzb3J0XShTb3J0aW5nX3F1aWNrc29ydF9hbmltLmdpZilcXG5cXG7ku6PnoIHlrp7njrA6XFxuXFxu6aaW5YWI6ZyA6KaB5LiA5Liq6L+U5Zue5Z+65YeG55qE5Ye95pWw77yM6K+l5Ye95pWw6LSf6LSj5LuO5oyH5a6a55qE6IyD5Zu05Lit5oyR6YCJ5LiA5Liq5L2N572u5L2c5Li65Z+65YeG77yM5bm25a+56IyD5Zu05YaF5YiX6KGo6L+b6KGM5o6S5bqP77yM5bm26L+U5Zue5Z+65YeG5omA5Zyo55qE5L2N572u44CCXFxuXFxuYGBgXFxuaW50IERpdmlzaW9uKGludCBhW10sIGludCBsZWZ0LCBpbnQgcmlnaHQpIHtcXG4gICAgaW50IGJhc2UgPSBhW2xlZnRdOyAvLyDlj5bnrKzkuIDkuKrmlbDkuLrln7rlh4ZcXG4gICAgd2hpbGUgKGxlZnQgPCByaWdodCkge1xcbiAgICAgICAgd2hpbGUgKGxlZnQgPCByaWdodCAmJiBhW2xlZnRdID4gYmFzZSkge1xcbiAgICAgICAgICAgIC8vIOS7juWPs+WQkeW3puaJvuesrOS4gOS4quavlOWfuuWHhuWwj+eahOWFg+e0oFxcbiAgICAgICAgICAgIC0tcmlnaHQ7XFxuICAgICAgICB9XFxuICAgICAgICBhW2xlZnRdID0gYVtyaWdodF07IC8vIOS6pOaNouS9jee9ru+8jOaKiuWwj+WFg+e0oOaUvuWcqOW3puS+p1xcblxcbiAgICAgICAgd2hpbGUgKGxlZnQgPCByaWdodCAmJiBhW2xlZnRdIDwgYmFzZSkge1xcbiAgICAgICAgICAgIC8vIOS7juW3puWQkeWPs+aJvuesrOS4gOS4quavlOWfuuWHhuWkp+eahOWFg+e0oFxcbiAgICAgICAgICAgICsrbGVmdDtcXG4gICAgICAgIH1cXG4gICAgICAgIGFbcmlnaHRdID0gYVtsZWZ0XTsgLy8g5Lqk5o2i5L2N572u77yM5oqK5aSn5YWD57Sg5pS+5Zyo5Y+z5L6nXFxuICAgIH1cXG4gICAgYVtsZWZ0XSA9IGJhc2U7XFxuICAgIHJldHVybiBsZWZ0O1xcbn1cXG5gYGBcXG5cXG5EaXZpc2lvbuWHveaVsOWPquWBmuS6huacgOeugOWNleeahOS6i++8jOaJvuS4gOS4quWfuuWHhu+8jOW5tuS6pOaNouW3puWPs+eahOWFg+e0oO+8jOS9v+WIl+ihqOW3puS+p+Wdh+Wwj+S6juWfuuWHhuWFg+e0oO+8jOS9v+WPs+S+p+Wdh+Wkp+S6juWfuuWHhuWFg+e0oO+8jOaOpeS4i+adpemcgOimgeS4gOS4quWHveaVsO+8jOS9v+WIl+ihqOi2i+WQkeacgOWwj++8jOebtOiHs+WIl+ihqOWFg+e0oOWJqeS4gCjov5nph4zmiJHmhJ/op4nlhbblrp7mnInngrnmnoHpmZDnmoTmgJ3mg7Mp44CCXFxuXFxuYGBgXFxudm9pZCBxdWlja19zb3J0KGludCBhW10sIGludCBsZWZ0LCBpbnQgcmlnaHQpIHtcXG4gICAgaWYgKGxlZnQgPCByaWdodCkge1xcbiAgICAgICAgaW50IGluZGV4ID0gRGl2aXNpb24oYSwgbGVmdCwgcmlnaHQpOyAvL+WvueWIl+ihqOi/m+ihjOWIhuWJslxcbiAgICAgICAgcXVpY2tfc29ydChhLCBsZWZ0LCBpIC0xKTsgLy/lr7nlt6bkvqfov5vooYzmjpLluo9cXG4gICAgICAgIHF1aWNrX3NvcnQoYSwgaSArIDEsIHJpZ2h0KTsgLy/lr7nlj7Pkvqfov5vooYzmjpLluo9cXG4gICAgfVxcbn1cXG5gYGBcXG5cXG7phY3lkIjkuIrmlrnnmoRnaWbvvIzlsLHlj6/ku6XlvojmuIXmpZrnmoTkuobop6Plv6vpgJ/mjpLluo/mmK/lpoLkvZXkvb/nlKjliIbmsrvms5XmnaXmjpLluo/nmoTvvIzpgJrov4flsIblpKfku7vliqHmi4bliIbmiJDlsI/ku7vliqHvvIzmnIDnu4jovr7miJDlrozmlbTnmoTmjpLluo8uXFxuXCIsXCJmcm9udG1hdHRlclwiOlwidGl0bGU6IEMrK+W/q+mAn+aOkuW6j1xcbnA6IHF1aWNrIHNvcnQgZm9yIGMrK1xcbmRhdGU6IDIwMTgtMTEtMTEgMTY6NTc6NDRcXG50YWdzOiBbXFxuICAgICdQcm9ncmFtJyxcXG4gICAgJ0MrKydcXG5dXFxuY2F0ZWdvcmllczpcIn0iLCJtb2R1bGUuZXhwb3J0cyA9IHtcImF0dHJpYnV0ZXNcIjp7XCJsYXlvdXRcIjpcInBvc3RcIixcInRpdGxlXCI6XCJzYWt1cmFcIixcInN1YnRpdGxlXCI6XCLmqLHoirHluoTnmoTlrqDnianlpbPlralcIixcImF1dGhvclwiOlwia2lyaWdheWFcIixcImhlYWRlci1pbWdcIjpcImhvbWUtYmcuanBnXCIsXCJ0YWdzXCI6W1wiQUNHXCJdLFwiZGF0ZVwiOlwiMjAxNi0wNS0yOVQxMTo1NToyMC4wMDBaXCJ9LFwiYm9keVwiOlwiIVtzYWt1cmFdKHNha3VyYS5qcGcpXFxu6L+Z5piv5oiR5q+U6L6D5Zac5qyi55qE5LiA6YOo5Yqo5ryr44CCXFxuXFxuW+OAiuaoseiKseW6hOeahOWuoOeJqeWls+WtqeOAi10oXFxcImh0dHA6Ly9iYWlrZS5iYWlkdS5jb20vbGluaz91cmw9ejhiaUV4SmRNZDBmRzdaZG9GZllCYWs0SFFodExaSklSZ1o0YkExUHRNMURQUXdrQkZjYkV5Z21MSU1aUUtxSS1TU2ZkVDZXd284eXpVTk1YcmdxX1EwT0NQOGtQY2M4M0xkSmduRElpQ3VcXFwiKVxcblxcbuaIkeeahOWfn+WQjeS5n+aYr+adpeiHquWls+S4u+inkueahOWQjeWtl++8jOakjuWQjeecn+eZve+8iOakjuWQjSDjgb7jgZfjgo3vvIlcXG5cXG48IS0tbW9yZS0tPlxcblxcbui/memDqOeVquaAjuS5iOivtOWRou+8jOWvueaIkeS4quS6uueahOW9seWTjeaYr+W+iOWkp+eahO+8jOW9k+W5tOWWnOasoue8lueoi+WPr+iDveaYr+WboOS4uuOAiumrmOi+vnNlZWTjgIvnmoTln7rmi4nlpKflkozor7Toh6rlt7Hnsr7pgJrnvJbnqIvvvIznhLblkI7miJHlsLHmiZPlvIDkuobmlrDkuJbnlYznmoTlpKfpl6jjgILnjrDlnKjllpzmrKLmuLjmiI/lvIDlj5HvvIzlj6/og73lsLHmmK/lm6DkuLrnlLfkuLvop5LjgIJcXG5cXG7miJHkuZ/llpzmrKLlkozmnIvlj4vku6zkuIDotbflpYvmlpfvvIznlZnkuIvnvo7lpb3nmoTlm57lv4bjgIJcXG5cXG7miJHkuZ/mi4Xlv4PkvJrlpLHotKXvvIzml6LnhLblgZrkuobvvIzlsLHmg7PopoHlgZrliLDmnIDlpb3jgIJcXG5cXG7lhbblrp7lsLHlnKjnnLzliY3vvIzmmI7mmI7lsLHlnKjkvLjmiYvlj6/lj4rnmoTlnLDmlrnvvIzkvYbpgqPot53nprvljbTmgLvorqnkurrop4nlvpflg4/mmK/msLjov5zjgIJcXG5cXG7miJHlj5HnjrDkuobvvIzml6DogYrnmoTkuI3mmK/ov5nmrrXml7blhYnvvIzogIzmmK/lkozliKvkurrnm7jkvLznmoToh6rlt7FcXG5cXG7mmK/llYog5p6c54S25ZKM5Yir5Lq65LiA6LW35Yib5L2c5piv5pyA5byA5b+D55qE77yM6Jm954S25pyJ5pe25Lya5Luk5Lq65rKu5Lin77yM5L2G6YKj5piv5peg5rOV6YG/5YWN55qE77yM5Zug5Li65oiR5rKh5pyJ5oqA5pyv5ZKM57uP6aqM44CC5Li95aGU5ZKM5qSO5ZCN5Zyo5LiA6LW35LqG5Y2B5bm077yM6Jm954S25qSO5ZCN55qE5omN6IO95piv5Y6L5YCS5oCn55qEIOS9huWluei/mOaYr+e7p+e7reWKquWKm+edgO+8jOS4juWlueebuOavlCDmiJHlkozmpI7lkI3op4HpnaLmiY3kuI3ov4fljYrlubTvvIzmmI7mmI7ov5jku4DkuYjpg73msqHlgZrvvIzlsLHmsq7kuKflpLHljrvoh6rkv6Hlrp7lnKjmmK/lpKrljprohLjnmq7kuobjgILmsqHlhbPns7vnmoQg5LiA5a6a6IO95oiQ5Yqf44CC6ZuG5ZCI5LqG5qix6Iqx5bqE5YWo5ZGY55qE5Yqb6YeP77yM5LiA5a6a6IO95oiQ5Li65LiA6YOo5LqG5LiN6LW355qE5L2c5ZOB77yM5qSO5ZCN5bey57uP5LiN5piv5LiA5Liq5Lq65LqG77yM5piv5oCA5pyJ55u45ZCM55uu5qCH5bm25LiA5ZCM5YmN6L+b552A55qE5LyZ5Ly044CC5oiR5Lmf6KaBIOWwveWKm+WOu+WBmuiHquW3seiDveWBmuWIsOeahOS6i++8jOWNs+S9v+WPquaYr+S4gOeCueeCueS5n+WlvSDkuLrkuobljrvmjqXov5HnnJ/nmb3jgIJcXG5cXG7ml6Dorrrmma7pgJrkurrlpJrkuYjliqrlipvljbTml6Dms5XotoXov4fpgqPkupvlpKnmiY3vvIzlpKnmiY3ku6zlj6ropoHml6DmhI/nmoTkuIDkuKrkuL7liqjlsLHog73ojrflvpfliKvkurrkuIfliIbovpvoi6bpg73lvpfkuI3liLDnmoTkuJzopb/jgIJcXG5cXG7lr7nllYrvvIzmnInlvojlpJrkurrpg73mnInmiJHku47mnKrmi6XmnInov4fnmoTkuJzopb/vvIzlj6/og73pgqPlsLHmmK/liKvkurrnmoTlpKnotYvlkKfvvIzogIzmiJHnmoToh6rlt7HlpKnotYvlsLHmmK/msqHmnInlpKnotYvjgILlpKnotYvov5nkuJzopb/mmK/oh6rlt7Hmi6XmnInliKvkurrkuI3mi6XmnInnmoTvvIzlj6/mmK/miJHljbTkuI3nn6XpgZPmiJHmi6XmnInku4DkuYjjgILmg7PkuIDmg7PmiJHnmoTkuozljYHlubTkurrnlJ/lj6/nnJ/mmK/lpLHotKXvvIzov57mma7pgJrpg73nrpfkuI3kuIrvvIznn6Xor4bmsqHmnInlgqjlrZjpgqPkuYjlpJrvvIzov5jlpKnnnJ/nmoTku6XkuLroh6rlt7Hog73lgZrkupvku4DkuYjjgILov5nkuKrkuJbnlYznmoTmoYbmnrbml6nlt7Llm7rlrprvvIzogIzmiJHlsLHmmK/ooqvliLfkuIvmnaXnmoTkurrjgIJcXG5cXG7nu5noh6rlt7HlrprkuIvnmoTnm67moIfvvIzlh6DkuY7pg73msqHmnInlrozmiJDvvIzmgLvmmK/ljYrpgJTmlL7lvIPjgILliY3pmLXlrZDov5jmg7PpgJrov4fmuLjmiI/lvIDlj5Hljrvlv6vngrnotZrkupvpkrHvvIzlj6/mmK/lrrbph4zor7TorqnmiJHlhYjlpYvmlpflpYvmlpfvvIzkuI3opoHmib7nnLzliY3kvJrotZrlvojlpJrpkrHnmoTlt6XkvZzjgILmiJHnm7jkv6Hov5nmmK/liY3ovojmgLvnu5Plh7rmnaXnmoTnu4/pqozjgIJcXG5cXG7kurrnlJ/ov5jmmK/lpKrmta7ouoHkuobvvIzov5nkuKrnpL7kvJrkuZ/mmK/mta7ouoHnmoTvvIzlpoLmnpzkuI3og73lhrfpnZnkuIvmnaXvvIzmnIDlkI7ov5jmmK/kvJrohLHnprvmoYbmnrbjgIJcXG5cXG48aWZyYW1lIGZyYW1lYm9yZGVyPVxcXCJub1xcXCIgYm9yZGVyPVxcXCIwXFxcIiBtYXJnaW53aWR0aD1cXFwiMFxcXCIgbWFyZ2luaGVpZ2h0PVxcXCIwXFxcIiB3aWR0aD0zMzAgaGVpZ2h0PTMwMCBzcmM9XFxcImh0dHA6Ly9tdXNpYy4xNjMuY29tL291dGNoYWluL3BsYXllcj90eXBlPTAmaWQ9MzkxMDA0NzkzJmF1dG89MSZoZWlnaHQ9NDMwXFxcIj48L2lmcmFtZT5cXG5cIixcImZyb250bWF0dGVyXCI6XCJsYXlvdXQ6IHBvc3RcXG50aXRsZTogc2FrdXJhXFxuc3VidGl0bGU6IOaoseiKseW6hOeahOWuoOeJqeWls+WtqVxcbmF1dGhvcjoga2lyaWdheWFcXG5oZWFkZXItaW1nOiBcXFwiaG9tZS1iZy5qcGdcXFwiXFxudGFnczpcXG4gIC0gQUNHXFxuZGF0ZTogMjAxNi0wNS0yOSAxMTo1NToyMFwifSIsIm1vZHVsZS5leHBvcnRzID0ge1wiYXR0cmlidXRlc1wiOntcInRpdGxlXCI6XCLmoIfpophcIixcImRhdGVcIjpcIjIwMTctMDUtMTVUMDA6MDA6MDAuMDAwWlwiLFwiYXV0aG9yXCI6XCJqdXN0Zm9ybHh6XCJ9LFwiYm9keVwiOlwiXFxu5q2j5paH5YaF5a65XFxuXFxuIyMgdGVzdFxcblwiLFwiZnJvbnRtYXR0ZXJcIjpcInRpdGxlOiDmoIfpophcXG5kYXRlOiAyMDE3LTA1LTE1IDAwOjAwOjAwXFxuYXV0aG9yOiBqdXN0Zm9ybHh6XCJ9IiwibW9kdWxlLmV4cG9ydHMgPSB7XCJhdHRyaWJ1dGVzXCI6e1widGl0bGVcIjpcInRvcGJhciBQUEFcIixcImRhdGVcIjpcIjIwMTctMDctMjBUMTM6Mzc6NTEuMDAwWlwiLFwidGFnc1wiOm51bGx9LFwiYm9keVwiOlwiXFxu6Ieq5bex5pCt5LqG5LiA5Liq5LuT5bqT77yM5o+Q5L6bZGVlcGluLXRvcGJhcuWPiuebuOWFs+S+nei1lueahOWMheOAglxcblxcbkkgY3JlYXRlZCBhIHJlcG9zaXRvcnkscHJvdmlkZSBkZWVwaW4tdG9wYmFyIGFuZCBkZXBlbmRlbmNpZXMuXFxuXFxuPCEtLSBtb3JlIC0tPlxcblxcbuS5n+iuuOmcgOimgeWuieijhWRpcm1uZ3JcXG5cXG5tYXliZSB5b3UgbmVlZCBpbnN0YWxsIGRpcm1uZ3JcXG5cXG4jIOi/veWKoOWGheWuueWIsC9ldGMvYXB0L3NvdXJjZXMubGlzdFxcblxcbkFwcGVuZCBjb250ZW50IHRvIC9ldGMvYXB0L3NvdXJjZXMubGlzdFxcblxcbmBgYFxcbmRlYiBbYXJjaD1hbWQ2NF0gaHR0cHM6Ly9wYWNrYWdlcy5ta2FjZy5jb20gcGFuZGEgbWFpbiBcXG5cXG5gYGBcXG5cXG4jIOWvvOWFpWtleSBcXG5cXG5pbXBvcnQga2V5XFxuXFxuYGBgXFxuc3VkbyBhcHQta2V5IGFkdiAtLWtleXNlcnZlciBrZXlzZXJ2ZXIudWJ1bnR1LmNvbSAtLXJlY3Yta2V5cyAzQkJGNzNFRTc3RjJGQjJBXFxuYGBgXFxuXFxuIyDliLfmlrDliJfooajvvIzov5vooYzlronoo4VcXG5cXG50aGVuLCByZWZyZXNoIGxpc3QgYW5kIGluc3RhbGxcXG5cXG5gYGAgXFxuc3VkbyBhcHQgdXBkYXRlICYmIHN1ZG8gYXB0IGluc3RhbGwgZGVlcGluLXRvcGJhciBcXG5gYGBcIixcImZyb250bWF0dGVyXCI6XCJ0aXRsZTogdG9wYmFyIFBQQVxcbmRhdGU6IDIwMTctMDctMjAgMTM6Mzc6NTFcXG50YWdzOlwifSIsIm1vZHVsZS5leHBvcnRzID0ge1wiYXR0cmlidXRlc1wiOntcInRpdGxlXCI6XCLkvb/nlKhHb29nbGXml6XljoblronmjpLlt6XkvZzku7vliqFcIixcInBcIjpcInVzZSBnb29nbGUgY2FsZW5kYXIgdG8gZmluaXNoZSB3b3JrXCIsXCJkYXRlXCI6XCIyMDE4LTExLTA5VDIxOjE1OjQ1LjAwMFpcIixcInRhZ3NcIjpudWxsLFwiY2F0ZWdvcmllc1wiOm51bGx9LFwiYm9keVwiOlwiXFxu55uu5YmN5oiR5Lus5q2j5Zyo5bCd6K+V5oqK5bel5L2c55qE5YiG6YWN5ZKM6K6o6K665pS+5ZyoZ2l0aHVi5LiK6L+b6KGM77yM6L+Z5qC35Y+v5Lul5L2/5oiR5Lus55qE55So5oi35ZKM5byA5Y+R6ICF5pu05a655piT5o6l6Kem5Yiw5oiR5Lus77yM5Y+v5Lul5o+QYnVn5ZKM5a+56ZyA5rGC6L+b6KGM6K6o44CCXFxuXFxu5L2G5piv5L2/55So6LW35p2l6L+Y5piv5pyJ5Lqb5LiN5L6/77yM5q+U5aaC5L2/55SodG93ZXLov5vooYzku7vliqHliIbphY3nmoTml7blgJnvvIzlj6/ku6Xmlrnkvr/nmoTnp7vliqjkuIDkuKrku7vliqHliLDmn5DkuKrliIbnsbvvvIzmiJbogIXmjIfmtL7kuIDkuKrml7bpl7TjgILkvYbmmK9naXRodWLkuIrmmK/ln7rkuo5pc3N1ZeeahO+8jOW5tuS4jeaYr+S4uuS6huWBmui/meenjeS6i+adpeiuvuiuoeeahO+8jOaJgOS7pemcgOaxguS4iuacieS4gOS6m+WHuuWFpeOAguS9huaYr1tAaHVhbGV0XShodHRwczovL2dpdGh1Yi5jb20vaHVhbGV0KeWkp+S9rOagueaNrmdpdGh1YueahGFwaeWGmeS6huS4gOS4qmJvdOadpeWBmuS4gOeCueW+ruWwj+eahOS6i++8jOW9k+S4gOS4qmlzc3Vl55qEYXNzaWduZWVz5Y+q5YmpUUHnmoTlkIzkuovml7bvvIxpc3N1ZeS8muiiq2JvdOenu+WKqOWIsOa1i+ivleagj+S4re+8jOWPquWJqeS4gOS4quW8gOWPkeWQjOS6i+aXtijln7rmnKzkuIrmmK/otJ/otKPor6Xku7vliqHnmoTlvIDlj5HogIUp77yM5Lya6KKr56e75Yqo5Yiw5byA5Y+R5qCP5Lit44CCXFxuXFxu5L2G5piv5Zug5Li65LiN6IO95YGa5Yiw5q+U5aaC5LuK5aSp44CB5piO5aSp44CB5LiL5ZGo562J5pe26Ze055qE5pi+56S677yM5omA5Lul5Lu75Yqh5Y+q6IO96YCa6L+H5q+P5aSp5byA5Lya5p2l5Y+j5aS05ZGK55+l5pe26Ze077yM5L2G5piv6L+Z5bm25LiN5aao56KN5oiR6L+b6KGM6Ieq5bex55qE5Lu75Yqh5pe26Ze05a6J5o6S44CC6K+35Ye65LiW55WM56ys5LiA55qE56We5ZmoKOaXpeWOhinjgIJcXG5cXG48IS0tIG1vcmUgLS0+XFxuXFxu5oiR6YCJ5oup5L2/55So6LC35q2M5pel5Y6G77yMfn7miY3kuI3mmK/lm6DkuLrlroPmnInnvZHpobXov5jmnInlronljZPlrqLmiLfnq6/jgJDlk7x+flxcblxcbuiwt+atjOaXpeWOhuS4iuaUr+aMgeaWsOW7uuS4ieenjeexu+Wei++8jOWIhuWIq+aYr+a0u+WKqOOAgeaPkOmGkuWSjOS7u+WKoeOAgua0u+WKqOaYr+W8gOWni+aXtumXtOaYjuehru+8jOS9huaYr+e7k+adn+aXtumXtOacquefpeeahOexu+Wei++8jOmAguWQiOeUqOS9nOWvueaXtumXtOS4jeS4peagvOeahOaDheWGteOAguaPkOmGkuWImeaYr+WcqOa0u+WKqOeahOWfuuehgOS4iua3u+WKoOS6huaPkOS+m+WKn+iDve+8jOWcqOa0u+WKqOWNs+WwhuW8gOWni+aXtuWPkemAgemAmuefpeaPkOmGkuOAguS7u+WKoeWImeaYr+eGn+aCieeahFRvRG9MaXN077yM6YCC5ZCI55So5p2l5YiG6YWN5LuK5aSp5LiA5a6a6KaB5YGa77yM5L2G5piv5pe26Ze05pyq55+l55qE5LqL44CCXFxuXFxu5oiR5re75Yqg5LqG5q+P5aSp55qE5byA5Lya5o+Q6YaS77yM5YaN5byA5a6M5Lya5Lul5ZCO77yM5oiR5Lya5oqK6Lqr5LiK55qE5paw5Lu75Yqh5Yib5bu65oiQdGFza++8jOeEtuWQjuWGjea3u+WKoOWkp+amgueahOa0u+WKqOadpeehruWumuS4gOS4i+imgeWujOaIkOeahHRhc2vjgILmiorku4rlpKnmsqHmnInml7bpl7TlgZrnmoR0YXNr56e75Yqo5Yiw5piO5aSp77yM55WZ5Zyo5b2T5aSp55qEdGFza+WwvemHj+imgeW9k+WkqeWujOaIkO+8jOWPr+S7peW+l+WIsOS7iuWkqeeahOS7u+WKoeWIl+ihqOWSjOW7tuacn+WIl+ihqO+8jOiuqeaIkeWvueimgeWBmueahOS6i+acieWujOaVtOeahOaOp+WItuOAglxcblxcbuiwt+atjOaXpeWOhueahOaXpeinhuWbvuWSjOWRqOinhuWbvuS8muaYvuekuuS4gOadoee6v++8jOWRiuivieS9oOeOsOWcqOeahOaXtumXtO+8jOW6lOivpei/m+ihjOS7gOS5iOa0u+WKqOS6huOAglxcblxcbiFbYWN0aXZpdHldKGFjdGl2aXR5LnBuZylcXG5cXG4hW3Rhc2tdKHRhc2sucG5nKVxcblxcbiFbd2Vla10od2Vlay5wbmcpXFxuXFxu5Zyo5omL5py65LiK6ZyA6KaB5L2/55So5Lik5LiqYXBw77yMR29vZ2xlIGNhbGVuZGFy5ZKMR29vZ2xlIHRhc2vvvIzmtLvliqjlkozmj5DphpLpnIDopoFjYWxlbmRhcu+8jHRhc2vliJnpnIDopoHljZXni6zkvb/nlKjkuIDkuKphcHDvvIzlj6rmnInnvZHpobXkuIrmiY3mmK/mlbTlkIjnmoTjgIJcXG5cXG4hW2FuZHJvaWQtY2FsZW5kYXJdKGFuZHJvaWQtY2FsZW5kYXIucG5nKVxcblxcbiFbYW5kcm9pZC10YXNrXShhbmRyb2lkLXRhc2sucG5nKVxcblxcbiFbZGF5XShkYXkucG5nKVxcblxcbuWboOS4uuaIkeS5n+aYr+aJjeW8gOWni+eUqOaXpeWOhuadpeWIhumFjeS7u+WKoeeahOaXtumXtO+8jOaJgOS7peiusOW9leeahOWGheWuueW5tuS4jeWkmu+8jOaIkeS5n+WcqOaRuOe0ouWmguS9leS9v+eUqOi/meS6m+WKn+iDve+8jOS9huaYr+aIkeinieW+l+S9v+eUqOaXpeWOhuadpeiusOW9leWSjOeuoeeQhuaXtumXtOaYr+mdnuW4uOS4jemUmeeahOS4gOS7tuS6i++8jOaIkeWPr+S7pemAmui/h+eci+afkOWkqeeahOa0u+WKqOadpeWbnuW/huW9k+WkqeaJgOWBmueahOS6i++8jOS5n+WPr+S7peagueaNruiusOW9leeahOWGheWuueadpeWIhuaekOiHquW3seWcqOafkOS6m+S7u+WKoeS4iuS9v+eUqOS6huWkmuWwkeeahOaXtumXtOOAglxcblwiLFwiZnJvbnRtYXR0ZXJcIjpcInRpdGxlOiDkvb/nlKhHb29nbGXml6XljoblronmjpLlt6XkvZzku7vliqFcXG5wOiB1c2UgZ29vZ2xlIGNhbGVuZGFyIHRvIGZpbmlzaGUgd29ya1xcbmRhdGU6IDIwMTgtMTEtMDkgMjE6MTU6NDVcXG50YWdzOlxcbmNhdGVnb3JpZXM6XCJ9IiwibW9kdWxlLmV4cG9ydHMgPSB7XCJhdHRyaWJ1dGVzXCI6e1widGl0bGVcIjpcIuS9v+eUqGdpdGh1YiBhY3Rpb25z6Ieq5Yqo6YOo572yaGV4b+aWh+eroOWIsGh0bWzku5PlupNcIixcImRhdGVcIjpcIjIwMTktMTItMDlUMTM6MTk6MTEuMDAwWlwiLFwidGFnc1wiOm51bGwsXCJjYXRlZ29yaWVzXCI6bnVsbH0sXCJib2R5XCI6XCJcXG7or7flhYjlhYHorrjmiJHlpKfllorkuIDlo7DvvJrlvq7ova/niZvpgLzvvIFcXG5cXG7mnKzmlofmsqHmnInllaXlkKvph5Hph4/vvIzlsLHmmK/nroDljZXnmoTor7TkuIDkuIvlpoLkvZXpg6jnvbJnaXRodWItYWN0aW9uc+adpeiHquWKqOeUn+aIkGhleG/nmoRwdWJsaWPvvIzlubbkuJTlho3mjqjpgIHliLBodG1s5LuT5bqT55qE44CCXFxuXFxu5oiR55qE5Y2a5a6i5LuT5bqT5LiA5YWx5YiG5Li65Lik5Liq77yMYmxvZ+S7k+W6k+aYr+engeacieeahO+8jOmcgOimgemAmui/h+aIkeeahOengemSpeaJjeiDveiuv+mXru+8jGh0bWzku5PlupPmmK/lhazlvIDnmoTvvIxoZXhv55Sf5oiQ55qE6Z2Z5oCB5YaF5a655Lya6KKr5LiK5Lyg5Yiw6L+Z6YeM44CCXFxuXFxu6aaW5YWI5ZyocGFja2FnZS5qc29u5Lit5re75Yqg5LiA5Lqb5ZG95Luk77yM5pa55L6/5oiR5Lus5LiA6ZSu57yW6K+R5ZKM5o+Q5LqkOlxcblxcbmBgYFxcbiAgXFxcInNjcmlwdHNcXFwiOiB7XFxuICAgIFxcXCJidWlsZFxcXCI6IFxcXCJoZXhvIGNsZWFuICYmIGhleG8gZ1xcXCIsXFxuICAgIFxcXCJkZXBsb3lcXFwiOiBcXFwieWFybiBydW4gYnVpbGQgJiYgaGV4byBkXFxcIixcXG4gICAgXFxcImJhY2t1cFxcXCI6IFxcXCJoZXhvIGJcXFwiLFxcbiAgfVxcbmBgYFxcblxcbuWboOS4ukNJ546v5aKD6ZyA6KaB5o+Q5Lqk5Luj56CB5Yiw5LuT5bqT77yM5omA5Lul55Sz6K+35LiA5Liq5Liq5Lq655So55qEdG9rZW7vvIzorr/pl65baHR0cHM6Ly9naXRodWIuY29tL3NldHRpbmdzL3Rva2Vuc10oaHR0cHM6Ly9naXRodWIuY29tL3NldHRpbmdzL3Rva2VucynliJvlu7rkuIDkuKrmlrDnmoTvvIzli77pgInkuIpgcmVwb2DvvIznlJ/miJDlrox0b2tlbuS7peWQju+8jOS/ruaUueS4gOS4i2BfY29uZmlnLnltbGDkuK3lr7lkZXBsb3nku5PlupPnmoR1cmzvvIzmoLzlvI/lm7rlrprkuLpgaHR0cHM6Ly94LWFjY2Vzcy10b2tlbjrkvaDnmoR0b2tlbkBnaXRodWIuY29tL+S9oOeahOWQjeWtly/ku5PlupPlkI0uZ2l0YCzkvovlpoLmiJHov5nph4zmmK9gaHR0cHM6Ly94LWFjY2Vzcy10b2tlbjp4eHh4eHh4eHh4QGdpdGh1Yi5jb20vanVzdGZvcmx4ei9odG1sLmdpdGDjgIJcXG5cXG7nhLblkI7mlrDlrrbkuIDkuKpnaXRodWIgYWN0aW9uc++8jOmAieaLqW5vZGVqc+eOr+Wig++8jOaIkeS7rOWPqumcgOimgeS/ruaUueacgOWQjuS4gOS4quatpemqpO+8jOaJp+ihjOaIkeS7rOiHquW3seeahOWRveS7pOWNs+WPr+OAglxcblxcbi0g6K6+572uZ2l055qE55So5oi35ZCN5ZKM6YKu566x5Zyw5Z2AXFxuLSBucG0gaW5zdGFsbCAtZyB5YXJuXFxuLSB5YXJuIHJ1biBkZXBsb3lcXG5cXG7lpoLmnpzkvaDov5jmnInkuIDkupvlhbbku5bmraXpqqTvvIzlj6/ku6Xoh6rooYzmianlsZXvvIzmr5TlpoLmiJHlsLHmnInkuLvpopjnm7jlhbPnmoTmk43kvZzvvIzlhbfkvZPnmoTlhoXlrrnlpoLkuIs6XFxuXFxuYGBgXFxuICAgIC0gbmFtZTogbnBtIGluc3RhbGwsIGJ1aWxkLCBhbmQgZGVwbG95XFxuICAgICAgcnVuOiB8XFxuICAgICAgICBnaXQgY29uZmlnIC0tZ2xvYmFsIHVzZXIuZW1haWwgXFxcImp1c3Rmb3JseHpAZ21haWwuY29tXFxcIlxcbiAgICAgICAgZ2l0IGNvbmZpZyAtLWdsb2JhbCB1c2VyLm5hbWUgXFxcImp1c3Rmb3JseHpcXFwiXFxuICAgICAgICBnaXQgc3VibW9kdWxlIHVwZGF0ZSAtLWluaXRcXG4gICAgICAgIGNkIHRoZW1lcy9uZXh0XFxuICAgICAgICBnaXQgY2hlY2tvdXQgZGV2XFxuICAgICAgICBjZCAuLi8uLi9cXG4gICAgICAgIG5wbSBpbnN0YWxsIC1nIHlhcm5cXG4gICAgICAgIHlhcm5cXG4gICAgICAgIHlhcm4gcnVuIGRlcGxveVxcbmBgYFxcblxcbueEtuWQjuWwseWPr+S7peaEieW/q+eahOiHquWKqOmDqOe9suS6huOAglxcblwiLFwiZnJvbnRtYXR0ZXJcIjpcInRpdGxlOiDkvb/nlKhnaXRodWIgYWN0aW9uc+iHquWKqOmDqOe9smhleG/mlofnq6DliLBodG1s5LuT5bqTXFxuZGF0ZTogMjAxOS0xMi0wOSAxMzoxOToxMVxcbnRhZ3M6XFxuY2F0ZWdvcmllczpcIn0iLCJtb2R1bGUuZXhwb3J0cyA9IHtcImF0dHJpYnV0ZXNcIjp7XCJ0aXRsZVwiOlwi5ZyoQXJjaExpbnV46YCa6L+H5Liy5Y+j6LCD6K+VVk13YXJl6Jma5ouf5py65Lit55qEZGVlcGluXCIsXCJzXCI6XCJ1c2Utc2VyaWFsLXBvcnQtZGVidWctZGVlcGluLW9uLWFyY2hsaW51eFwiLFwiZGF0ZVwiOlwiMjAxOS0xMi0yNlQxNzoyNjoxMy4wMDBaXCIsXCJ0YWdzXCI6XCJMaW51eFwiLFwiY2F0ZWdvcmllc1wiOlwiTGludXhcIn0sXCJib2R5XCI6XCJcXG7nlLXohJHkuLvmnb/kuIrnmoTmjqXlj6PvvJrov5vooYzkuLLooYzkvKDovpPnmoTmjqXlj6PvvIzlroPkuIDmrKHlj6rog73kvKDovpMxQml044CC5Liy6KGM56uv5Y+j5Y+v5Lul55So5LqO6L+e5o6l5aSW572u6LCD5Yi26Kej6LCD5Zmo44CB57uY5Zu+5Luq5oiW5Liy6KGM5omT5Y2w5py644CC5a6D5Lmf5Y+v5Lul5o6n5Yi25Y+w6L+e5o6l55qE5pa55byP6L+e5o6l572R57uc6K6+5aSH77yM5L6L5aaC6Lev55Sx5Zmo5ZKM5Lqk5o2i5py677yM5Li76KaB55So5p2l6YWN572u5a6D5Lus44CC5raI6LS55oCn55S15a2Q5bey57uP55SxVVNC5Y+W5Luj5Liy5YiX5o6l5Y+j77yb5L2G5Zyo6Z2e5raI6LS55oCn55So6YCU77yM5aaC572R57uc6K6+5aSH562J77yM5Liy5YiX5o6l5Y+j5LuN5piv5Li76KaB55qE5Lyg6L6T5o6n5Yi25pa55byP44CCXFxuXFxuPCEtLSBtb3JlIC0tPlxcblxcbummluWFiOe7meiZmuaLn+acuuWIhumFjeS4gOS4quS4suWPo+iuvuWkh++8jOmAieaLqVNldHRpbmdzLT5BZGQtPlNlcmlhbCBQb3J044CC5YiG6YWN5aW95Liy5Y+j6K6+5aSH5Lul5ZCO77yM5oiR5Lus6ZyA6KaB6YCJ5oup5LiA5Liq5Liy5Y+j6K6+5aSH55qE6LCD6K+V5pa55byP77yM5LiA5Liq5piv5bCG6L6T5Ye66L2s5ZCR5LiA5Liq5paH5Lu277yM5oiW6ICF5piv6YCa6L+Hc29ja2V044CCXFxuXFxu5aaC5p6c5Y+q5piv5p+l55yL5pa55byP77yM6YCJ5oupb3V0cHUgZmlsZeWNs+WPr+OAguWmguaenOmcgOimgeiwg+ivle+8jOWImeWPr+S7pemAmui/h3NvY2tldOaWueW8j+adpei/m+ihjOOAglxcblxcbnNvY2tldOaWueW8j+mcgOimgee7meS4gOS4quWbuuWumueahOi3r+W+hOWIhumFjS90bXAvPHNvY2tldD7vvIzmiJHosIPor5XnmoTml7blgJnnu5nlh7rnmoTmmK8vdG1wL3Zob3N077yMRnJvbemAieaLqVNlcnZlcu+8jFRv6YCJ5oupQW4gQXBwbGljYXRpb27jgIJGcm9t55qE5oSP5oCd5piv5L+h5oGv5LuO5ZOq6YeM5p2l77yM5L+h5oGv5piv6Jma5ouf5py66YeM55qE57O757uf5Y+R5Ye655qE77yM5omA5Lul6L+Z6YeM6YCJ5oup55qE5pivU2VydmVy77yM5aaC5p6c5piv5Y+N5ZCR5pON5L2c77yM6ZyA6KaB6YCJ5oupQ2xpZW5044CCVG/kuZ/mmK/mnInkuKTkuKrpgInpobnvvIznrKzkuIDkuKrmmK9BbiBWaXJ0dWFsIE1hY2hpbmXvvIznrKzkuozkuKrmmK9BbiBBcHBsaWNhdGlvbuOAgueUqOS6juaKiua2iOaBr+WPkemAgee7meWPpuWklueahOiZmuaLn+acuu+8jOaIluiAheaYr+Wuv+S4u+acuueahOS4gOS4quW6lOeUqOeoi+W6j+OAglxcblxcbuWuieijhW1pbmljb23ljIXvvIznlKjkuo7ov5vooYzosIPor5XvvIxtaW5pY29t6L+Z5Liq5Lic6KW/77yM5LiN5piv5aSq5aW955So77yM6YCA5Ye65pa55byP5piv5YWI5oyJQ3RybCtB77yM54S25ZCO5oyJce+8jOacieaXtuWAmei/mOS4jeS4gOWumueuoeeUqO+8jOS4jeefpemBk+aYr+ayoeaOpeWPl+WIsO+8jOi/mOaYr+aMiemUmeS6huOAglxcblxcbuWFiG1pbmljb20gLXMg6L+b6KGM5Yid5aeL5YyW77yM6YCJ5oupYFNlcmlhbCBwb3J0IHNldHVwYO+8jOaMiUHnvJbovpFgU2VyaWFsIERldmljZWDvvIzov5nph4zpnIDopoHms6jmhI/kuIDkuIvvvIzpgJrov4dzb2NrZXTov5vooYzosIPor5XvvIzpnIDopoHkvb/nlKhgdW5peCNg5YmN57yA77yM54S25ZCO5Yqg5LiK5Zyo6Jma5ouf5py66YeM5YaZ55qE6Lev5b6EIGB1bml4Iy90bXAvdmhvc3Rg44CC54S25ZCO5L+d5a2Y77yM6YCJ5oupRXhpdO+8jOmAgOWHuuS7peWQjuWFtuWunumHjeWQr21pbmljb23vvIzlsLHov5vlhaVtaW5pY29t55qE6LCD6K+V55WM6Z2i5LqG77yM54S25ZCO5q2k5pe25byA5ZCv6Jma5ouf5py677yM57uZ5YaF5qC45re75Yqg5LiA5LiqY29uc29sZT10dHlTMOeahOWPguaVsO+8jOWwseeci+WIsG1pbmljb23mmL7npLrovpPlh7rnmoTkv6Hmga/kuobvvIzov5jlj6/ku6XkuqTkupLjgIJcXG5cXG5cXG5gYGBcXG5bICAgIDMuODU1NzI1XSBbZHJtOnZtd19mYl9zZXRjb2xyZWcgW3Ztd2dmeF1dICpFUlJPUiogQmFkIHJlZ25vIDI1NC5cXG5bICAgIDMuODU3MTI1XSBbZHJtOnZtd19mYl9zZXRjb2xyZWcgW3Ztd2dmeF1dICpFUlJPUiogQmFkIHJlZ25vIDI1NS5cXG5kZWVwaW4gTG9naW46XFxuXFxuQ1RSTC1BIFogZm9yIGhlbHAgfCB1bml4LXNvY2tldCB8IE5PUiB8IE1pbmljb20gMi43LjEgfCBWVDEwMiB8IE9mZmxpbmUgfCB1bml4Iy90bXAvdmhvc3RcXG5gYGBcXG5cXG7mraTml7blsLHlj6/ku6XkuqTkupLkuobvvIznlKjms5Xlkox0dHnkuIDmoLfvvIzmnIDlkI7kuIDooYzmmK9taW5pY29t55qE6L6T5Ye677yM5Y+v5Lul55yL5YiwQ1RSTC1BIFrlj6/ku6XnnItoZWxw77yMbWluaWNvbeeahOeJiOacrO+8jOWSjOiuv+mXrueahOS4suWPo3NvY2tldOOAglxcblwiLFwiZnJvbnRtYXR0ZXJcIjpcInRpdGxlOiDlnKhBcmNoTGludXjpgJrov4fkuLLlj6PosIPor5VWTXdhcmXomZrmi5/mnLrkuK3nmoRkZWVwaW5cXG5zOiB1c2Utc2VyaWFsLXBvcnQtZGVidWctZGVlcGluLW9uLWFyY2hsaW51eFxcbmRhdGU6IDIwMTktMTItMjYgMTc6MjY6MTNcXG50YWdzOiBMaW51eFxcbmNhdGVnb3JpZXM6IExpbnV4XCJ9IiwibW9kdWxlLmV4cG9ydHMgPSB7XCJhdHRyaWJ1dGVzXCI6e1widGl0bGVcIjpcIlZ1ZeeItuWtkOe7hOS7tuS8oOWAvCDigJTigJQgcHJvcHMgJiAkZW1pdFwiLFwiZGF0ZVwiOlwiMjAxOS0xMi0wOFQyMTowODowMC4wMDBaXCIsXCJ0YWdzXCI6XCJWdWVcIixcImNhdGVnb3JpZXNcIjpcIlZ1ZVwifSxcImJvZHlcIjpcIlxcblZ1ZeeahOeItuWtkOe7hOS7tuS8oOWAvOavlOi+g+acieaEj+aAne+8jOeItue7hOS7tumAmui/h+WxnuaAp+e7keWumu+8jOaKiuiHqui6q+eahOWAvOWSjOWtkOe7hOS7tueahOS4gOS4quWxnuaAp+e7keWumui1t+adpe+8jOWtkOe7hOS7tumAmui/h3Byb3Bz5bGe5oCn5o6l5pS277yM6K+l5bGe5oCn57G75Z6L5Li65pWw57uE77yM5pivVnVl5a+56LGh5Lit5q+U6L6D5bCR5pyJ55qE57G75Z6L77yMZGF0YeOAgWNvbXB1dGVy44CBbWV0aG9kc+etieaWueazlemDveaYr+WvueixoeeahOW9ouW8j++8jHByb3Bz5YiZ5piv5pWw57uE55qE5b2i5byP44CC54i257uE5Lu26YCa6L+Hdi1vbuadpeebkeWQrOWtkOe7hOS7tuWPkeWHuueahOS6i+S7tuadpeaOpeaUtuWtkOe7hOS7tueahOiwg+eUqOOAguWcqOi/memHjOaIkeaYr+eQhuino+aIkOWtkOe7hOS7tuWPkemAgeS/oeWPt+adpemAmuefpeS4iuWxgu+8jOavleern+iwg+eUqOeahOaYr3RoaXMuJGVtaXTmnaXlgZrliLDnmoTjgIJcXG5cXG48IS0tIG1vcmUgLS0+XFxuXFxu5oiR5Lus5YGH6K6+5a2Q57uE5Lu25ZCN5Li6PGhlbGxvPu+8jOaIkeS7rOmAmui/h3YtYmluZOadpee7keWumuS4gOS4quWAvOe7meWug+OAglxcblxcbmBgYFxcbjx0ZW1wbGF0ZT5cXG4gICAgPGRpdiBpZD1cXFwiI2FwcFxcXCI+XFxuICAgICAgICAvLyDpgJrov4d2LWJpbmTnu5HlrprniLblrZDnu4Tku7bnmoTlsZ7mgKdcXG4gICAgICAgIDxoZWxsbyB2LWJpbmQ6bWVzc2FnZUZyb21QYXJlbnQ9XFxcIm1lc3NhZ2VcXFwiLz5cXG4gICAgPC9kaXY+XFxuPHRlbXBsYXRlPlxcblxcbjxzY3JpcHQgbGFuZz1cXFwidHNcXFwiPlxcbmltcG9ydCBWdWUgZnJvbSAndnVlJztcXG5pbXBvcnQgSGVsbG8gZnJvbSAnLi9IZWxsby52dWUnO1xcbmV4cG9ydCBkZWZhdWx0IFZ1ZS5leHRlbmQoe1xcbiAgICBkYXRhOiB7XFxuICAgICAgICBtZXNzYWdlOiBcXFwidGhpcyBtZXNzYWdlIGZyb20gcGFyZW50XFxcIlxcbiAgICB9LFxcbiAgICBjb21wb25lbnRzOiB7XFxuICAgICAgICBcXFwiaGVsbG9cXFwiOiBIZWxsb1xcbiAgICB9XFxufSk7XFxuPC9zY3JpcHQ+XFxuYGBgXFxuXFxu5a2Q57uE5Lu2aGVsbG8udnVl6YCa6L+HcHJvcHPlsZ7mgKfmjqXmlLbvvIzlhoXlrrnmmK/ov5nmoLfnmoTvvJpcXG5cXG5gYGBcXG48dGVtcGxhdGU+XFxuICAgIDxkaXY+XFxuICAgICAgICB7eyBtZXNzYWdlRnJvbVBhcmVudCB9fVxcbiAgICA8L2Rpdj5cXG48L3RlbXBsYXRlPlxcblxcbjxzY3JpcHQgbGFuZz1cXFwidHNcXFwiPlxcbmltcG9ydCBWdWUgZnJvbSAndnVlJztcXG5leHBvcnQgZGVmYXVsdCBWdWUuZXh0ZW5kKHtcXG4gICAgLy8g6YCa6L+HcHJvcHPmlbDnu4TmjqXmlLZcXG4gICAgcHJvcHM6IFsgXFxcIm1lc3NhZ2VGcm9tUGFyZW50XFxcIiBdXFxufSk7XFxuPC9zY3JpcHQ+XFxuYGBgXFxuXFxu6L+Z6YeM5pyJ5Liq6ZyA6KaB5rOo5oSP55qE5Zyw5pa577yM54i257uE5Lu257uZ5a2Q57uE5Lu255qE5pWw5o2u5piv5Y2V5ZCR55qE77yM6Jm954S25a2Q57uE5Lu25Lmf5Y+v5Lul5L+u5pS554i257uE5Lu25Lyg5YWl55qE5pWw5o2u77yM5L2G5piv5Lya5Lqn55Sf5LiA5Liq6ZSZ6K+v77yM5bm25omT5Y2w5Zyo57uI56uv6YeM44CCXFxuXFxu6YKj5LmI5oiR5Lus5oCO5LmI5omN6IO95L+u5pS554i257uE5Lu255qE5YC85ZGi77yf562U5qGI5pivYHRoaXMuJGVtaXRg44CCXFxuXFxu5oiR5Lus57uZ5a2Q57uE5Lu257uR5a6a5LiKdi1vbu+8jOadpeebkeWQrOWtkOe7hOS7tueahOS6i+S7tuOAglxcblxcbmBgYFxcbjx0ZW1wbGF0ZT5cXG4gICAgPGRpdiBpZD1cXFwiI2FwcFxcXCI+XFxuICAgICAgICAvLyDpgJrov4d2LWJpbmTnu5HlrprniLblrZDnu4Tku7bnmoTlsZ7mgKfvvIzpgJrov4d2LW9u55uR5ZCs5a2Q57uE5Lu255qE5bGe5oCn5Y+Y5YyWXFxuICAgICAgICA8aGVsbG8gdi1iaW5kOm1lc3NhZ2VGcm9tUGFyZW50PVxcXCJtZXNzYWdlXFxcIiB2LW9uOmNoYW5nZVBhcmVudERhdGE9XFxcImNoYW5nZURhdGFcXFwiLz5cXG4gICAgPC9kaXY+XFxuPHRlbXBsYXRlPlxcblxcbjxzY3JpcHQgbGFuZz1cXFwidHNcXFwiPlxcbmltcG9ydCBWdWUgZnJvbSAndnVlJztcXG5pbXBvcnQgSGVsbG8gZnJvbSAnLi9IZWxsby52dWUnO1xcbmV4cG9ydCBkZWZhdWx0IFZ1ZS5leHRlbmQoe1xcbiAgICBkYXRhOiB7XFxuICAgICAgICBtZXNzYWdlOiBcXFwidGhpcyBtZXNzYWdlIGZyb20gcGFyZW50XFxcIlxcbiAgICB9LFxcbiAgICBjb21wb25lbnRzOiB7XFxuICAgICAgICBcXFwiaGVsbG9cXFwiOiBIZWxsb1xcbiAgICB9LFxcbiAgICBtZXRob2RzOiB7XFxuICAgICAgICBjaGFuZ2VEYXRhOiBmdW5jdGlvbihkYXRhOiBzdHJpbmcpIHtcXG4gICAgICAgICAgICBtZXNzYWdlID0gZGF0YTtcXG4gICAgICAgIH1cXG4gICAgfVxcbn0pO1xcbjwvc2NyaXB0PlxcbmBgYFxcblxcbuWtkOe7hOS7tuWPqumcgOimgeWPkemAgeWHuuS/ruaUueWNs+WPr++8mlxcblxcbmBgYFxcbjx0ZW1wbGF0ZT5cXG4gICAgPGRpdj5cXG4gICAgICAgIDxidXR0b24gdi1vbjpjbGljaz1cXFwiY2hhbmdlXFxcIj7kv67mlLnniLbnu4Tku7bmlbDmja48L2J1dHRvbj5cXG4gICAgICAgIHt7IG1lc3NhZ2VGcm9tUGFyZW50IH19XFxuICAgIDwvZGl2PlxcbjwvdGVtcGxhdGU+XFxuXFxuPHNjcmlwdCBsYW5nPVxcXCJ0c1xcXCI+XFxuaW1wb3J0IFZ1ZSBmcm9tICd2dWUnO1xcbmV4cG9ydCBkZWZhdWx0IFZ1ZS5leHRlbmQoe1xcbiAgICAvLyDpgJrov4dwcm9wc+aVsOe7hOaOpeaUtlxcbiAgICBwcm9wczogWyBcXFwibWVzc2FnZUZyb21QYXJlbnRcXFwiIF0sXFxuICAgIG1ldGhvZHM6IHtcXG4gICAgICAgIGNoYW5nZTogZnVuY3Rpb24oKSB7XFxuICAgICAgICAgICAgLy8g6LCD55SodGhpcy4kZW1pdOaWueazleesrOS4gOS4quWPguaVsOaYr+S6i+S7tueahOWQjeensO+8jOWQjumdouWFqOmDqOmDveaYr+WPguaVsOOAglxcbiAgICAgICAgICAgIC8vIHRoaXMuJGVtaXTmlrnms5Xlhbblrp7mmK/oh6rlrprkuYnkuobkuIDkuKrkuovku7bvvIzpgJrov4fov5nnp43mlrnlvI/mnaXlrozmiJDlrZDnu4Tku7blkJHniLbnu4Tku7bkvKDpgJLmtojmga/jgIJcXG4gICAgICAgICAgICB0aGlzLiRlbWl0KFxcXCJjaGFuZ2VQYXJlbnREYXRhXFxcIiwgXFxcImNoYW5nZSBkYXRhIGJ5IGNoaWxkXFxcIik7XFxuICAgICAgICB9XFxuICAgIH1cXG59KTtcXG48L3NjcmlwdD5cXG5gYGBcXG5cXG7ku6XkuIrlsLHmmK9WdWXniLblrZDnu4Tku7bkvKDlgLznmoTkuIDnp43luLjnlKjmlrnms5XvvIzpgILnlKjkuo7nm7jpgrvnu4Tku7bnmoTvvIzlpoLmnpzpmpTku6PkuobvvIzpgqPkuYjov5nnp43mlrnlvI/lsLHkuI3lpb3nlKjkuobvvIzkuK3pl7Tot6/ov4fnmoTnu4Tku7bpg73pnIDopoHovazlj5Hov5nkuKrkuovku7bvvIzlpITnkIbov5nnp43mg4XlhrXlsLHpnIDopoHkvb/nlKhgcHJvdmlkZS8gaW5qZWN0YOS6hu+8jOS4jei/h+mCo+WwseaYr+WPpuS4gOevh+aWh+eroOWVpuOAglxcblwiLFwiZnJvbnRtYXR0ZXJcIjpcInRpdGxlOiBWdWXniLblrZDnu4Tku7bkvKDlgLwg4oCU4oCUIHByb3BzICYgJGVtaXRcXG5kYXRlOiAyMDE5LTEyLTA4IDIxOjA4OjAwXFxudGFnczogVnVlXFxuY2F0ZWdvcmllczogVnVlXCJ9IiwibW9kdWxlLmV4cG9ydHMgPSB7XCJhdHRyaWJ1dGVzXCI6e1widGl0bGVcIjpcIua3u+WKoFZ1ZeWKqOeUu1wiLFwiZGF0ZVwiOlwiMjAxOS0xMi0wOFQwODowMzo0MC4wMDBaXCIsXCJ0YWdzXCI6XCJWdWVcIixcImNhdGVnb3JpZXNcIjpcIlZ1ZVwifSxcImJvZHlcIjpcIlxcbuS7peWJjeS4gOebtOaQnuS4jeaHguWKqOeUu+aYr+aAjuS5iOWBmueahO+8jOWug+aAjuS5iOi/meS5iOelnuWlh++8jOWGmeS6huS4gOeCueeci+S4jeaHgueahOS7o+egge+8jOWwseWunueOsOS6humdnuW4uOS4sOWvjOeahOaViOaenO+8jOeOsOWcqOWBmuS6huS4ieW5tFF05byA5Y+R77yM5o6l6Kem5Yiw5LqGUXTnmoTliqjnlLvnsbvvvIzmmI7nmb3kuobliqjnlLvmmK/mgI7kuYjkuIDkvJrlhL/kuovvvIznjrDlnKjmnaXnnIvlvZPliJ3nmoRjc3PliqjnlLvku6PnoIHvvIzkuZ/mmI7nmb3kuoblroPmmK/lpoLkvZXlt6XkvZznmoTkuobjgILmnKzmlofkvJrku4vnu43kuIDkuItWdWXmj5DkvpvnmoTnu4Tku7bov4fmuKHliqjnlLvmqKHlnZfigJTigJR0cmFuc2l0aW9uc+OAglxcblxcbjwhLS0gbW9yZSAtLT5cXG5cXG4jIyDmpoLov7BcXG5cXG5WdWXlnKjmj5LlhaXjgIHmm7TmlrDlkoznp7vpmaRET03lhYPntKDml7bvvIzmj5DkvpvkuoblpJrnp43kuI3lkIzmlrnlvI/nmoTlupTnlKjov4fmuKHmlYjmnpzjgILljIXlkKvku6XkuIvlt6XlhbfvvJpcXG5cXG4tIOWcqGNzc+i/h+a4oeWSjOWKqOeUu+S4reiHquWKqOW6lOeUqGNsYXNzXFxuLSDlj6/ku6XphY3lkIjnrKzkuInmlrnliqjnlLtjc3PnsbvvvIzkvovlpoJBbmltYWUuY3NzXFxuLSDmj5DkvpvpkqnlrZDlh73mlbDmnaXkvb9KU+aTjeS9nERPTeWFg+e0oFxcbi0g5Y+v5Lul6YWN5ZCI5L2/55So56ys5LiJ5pa5SmF2YVNjcmlwdOWKqOeUu+W6k++8jOS+i+WmglZlbG9jaXR5LmpzXFxuXFxuIyMg5Y2V5YWD57SgL+e7hOS7tui/h+a4oVxcblxcblZ1ZeaPkOS+m+S6hiBgdHJhbnNpdGlvbnNgIOeahOWwgeijhee7hOS7tu+8jOWcqOS4i+mdoueahOaDheWGteS4re+8jOWPr+S7pee7meS7u+aEj+WFg+e0oOaIlue7hOS7tua3u+WKoOi/m+WFpeWSjOemu+W8gOeahOi/h+a4oeaViOaenOOAglxcblxcbi0g5p2h5Lu25riy5p+TICjkvb/nlKggYHYtc2hvd2ApXFxuLSDmjInpnIDmuLLmn5MgKOS9v+eUqCBgdi1pZmApXFxuLSDliqjmgIHoioLngrlcXG4tIOe7hOS7tuagueWFg+e0oFxcblxcbui/meaYr+S4gOS4quWfuuacrOeahOS+i+WtkO+8mlxcblxcbmBgYFxcbjxkaXYgaWQ9XFxcImFwcFxcXCI+XFxuICAgIDxidXR0b24gdi1vbjpjbGljaz1cXFwic2hvdyA9ICFzaG93XFxcIj5cXG4gICAgVG9nZ2xlXFxuICAgIDwvYnV0dG9uPlxcbiAgICA8dHJhbnNpdGlvbnMgbmFtZT1cXFwiZmFkZVxcXCI+XFxuICAgICAgICA8cCB2LWlmPVxcXCJzaG93XFxcIj4gaGVsbG8hIDwvcD5cXG4gICAgPHRyYW5zaXRpb25zPlxcbjxkaXY+XFxuYGBgXFxuXFxuYGBgXFxubmV3IFZ1ZSh7XFxuICAgIGVsOiBcXFwiI2FwcFxcXCIsXFxuICAgIGRhdGE6IHtcXG4gICAgICAgIHNob3c6IGZhbHNlXFxuICAgIH1cXG59KTtcXG5gYGBcXG5cXG7lnKhoZWFk5Lit5re75Yqgc3R5bGXvvJpcXG5cXG5gYGBcXG4uZmFkZS1lbnRlci1hY3RpdmUsXFxuLmZhZGUtbGVhdmUtYWN0aXZlIHtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgLjVzO1xcbn1cXG5cXG4uZmFkZS1lbnRlcixcXG4uZmFkZS1sZWF2ZS10byB7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG5gYGBcXG5cXG7ov5nph4zmnInkuInngrnpnIDopoHms6jmhI/kuIDkuIvvvIzpnIDopoHliqjnlLvnmoTlhYPntKDpnIDopoHkvb/nlKh0cmFuc2l0aW9uc+iKguWMheijuei1t+adpe+8jHRyYW5zaXRpb25z6ZyA6KaB5LiA5LiqbmFtZe+8jGNzc+S4remcgOimgeS9v+eUqOWbuuWumueahOaLvOWGmeadpeW6lOeUqOWKqOeUu++8jOWFpeWcuuWKqOeUu+WSjOemu+WcuuWKqOeUu+eahOeKtuaAgeaYr+S4gOiHtOeahO+8jOaJgOS7peWGmeWcqOS6huS4gOe7hOmHjOOAglxcblxcbuW9k+aPkuWFpeWSjOWIoOmZpOWMheWQq+WcqCBgdHJhbnNpdGlvbnNgIOe7hOS7tuS4reeahOWFg+e0oOaXtu+8jFZ1ZeS8muWBmuS7peS4i+eahOS6i+aDhe+8mlxcblxcbi0g6Ieq5Yqo5ZeF5o6i57uE5Lu25piv5ZCm5bqU55So5LqGY3Nz55qE6L+H5rih5oiW5Yqo55S777yM5aaC5p6c5pyJ77yM5YiZ5Zyo5oGw5b2T55qE5a6e6ZmF5re75YqgL+WIoOmZpGNzc+exu+WQjeOAglxcbi0g5aaC5p6cIGB0cmFuc2l0aW9uc2Ag57uE5Lu25o+Q5L6b5LqG6ZKp5a2Q5Ye95pWw77yMVnVl5Lya5Zyo5oGw5b2T55qE5pe25py66LCD55So6ZKp5a2Q5Ye95pWw44CCXFxuLSDlpoLmnpzmsqHmnInmib7liLBjc3Pov4fmuKHlkozliqjnlLvvvIzkuZ/msqHmnInmib7liLDpkqnlrZDlh73mlbDvvIzliJlET03nmoTmk43kvZwo5o+S5YWl5ZKM5Yig6ZmkKeWcqOS4i+S4gOW4p+S4reeri+WNs+aJp+ihjOOAgijms6jmhI/mmK/mjIfmtY/op4jlmajnmoTpgJDluKfliqjnlLvvvIzogIzkuI3mmK9WdWXnmoRuZXh0VGlja+acuuWItilcXG5cXG4jIyMg6L+H5rih55qE57G75ZCNXFxuXFxuVnVl55qE6L+H5rih5Yqo55S75LiA5YWx5pyJNuS4queKtuaAge+8mlxcblxcbjEuIGB2LWVudGVyYDog5a6a5LmJ6L+b5YWl6L+H5rih55qE5byA5aeL54q25oCB77yM5Zyo5YWD57Sg6KKr5o+S5YWl5LmL5YmN55Sf5pWI77yM5b6F5YWD57Sg5o+S5YWl5Lul5ZCO6KKr56e76Zmk44CCXFxuMi4gYHYtZW50ZXItYWN0aXZlYDog5a6a5LmJ6L+b5YWl6L+H5rih55Sf5pWI5pe255qE54q25oCB77yM5Zyo5pW05Liq6L+b5YWl6L+H5rih55qE6Zi25q615Lit5bqU55So77yM5Zyo5YWD57Sg5o+S5YWl5LmL5YmN55Sf5pWI77yM5Zyo6L+H5rihL+WKqOeUu+WujOaIkOWQjuiiq+enu+mZpOOAgui/meS4quexu+WPr+S7peWumuS5iei/h+a4oeaXtumXtOOAgeW7tui/n+WSjOWKqOeUu+absue6v+OAglxcbjMuIGB2LWVudGVyLXRvYDogKirlnKgyLjEuOOeJiOacrOWPiuS7peS4iioqIOWumuS5iei/m+WFpei/h+a4oeeahOe7k+adn+eKtuaAge+8jOWcqOWFg+e0oOiiq+aPkuWFpeeahOS4i+S4gOW4p+eUn+aViCjkuI7mraTlkIzml7YgYHYtZW50ZXJgIOiiq+enu+mZpCnvvIzlnKjov4fmuKEv5Yqo55S75a6M5oiQ5ZCO56e76Zmk44CCXFxuNC4gYHYtbGVhdmVgOiDlrprkuYnnprvlvIDov4fmuKHnmoTlvIDlp4vnirbmgIHvvIzlnKjnprvlvIDov4fmuKHooqvop6blj5Hml7bnq4vljbPnlJ/mlYjvvIzkuIvkuIDluKfooqvnp7vpmaTjgIJcXG41LiBgdi1sZWF2ZS1hY3RpdmVgOiDlrprkuYnnprvlvIDov4fmuKHnlJ/mlYjml7bnmoTnirbmgIHvvIzlnKjmlbTkuKrnprvlvIDov4fmuKHnmoTpmLbmrrXkuK3lupTnlKjvvIzlnKjnprvlvIDov4fmuKHop6blj5Hml7bnq4vljbPnlJ/mlYjvvIzlnKjov4fmuKEv5Yqo55S75a6M5oiQ5ZCO56uL5Y2z6KKr56e76Zmk44CC6L+Z5Liq57G75Y+v5Lul5a6a5LmJ56a75byA6L+H5rih55qE6L+H56iL5pe26Ze044CB5bu26L+f5ZKM5Yqo55S75puy57q/44CCXFxuNi4gYHYtbGVhdmUtdG9gOiAqKuWcqDIuMeOAgjjniYjmnKzlj4rku6XkuIoqKiDlrprkuYnnprvlvIDov4fmuKHnmoTnu5PmnZ/nirbmgIHvvIzlnKjnprvlvIDov4fmuKHooqvop6blj5HkuYvlkI7nmoTkuIvkuIDluKfooqvnp7vpmaQo5LiO5q2k5ZCM5pe2YHYtbGVhdmVg5Lmf6KKr5Yig6ZmkKVxcbu+8jOWcqOi/h+a4oS/liqjnlLvlrozmiJDkuYvlkI7np7vpmaTjgIJcXG5cXG4hW3RyYW5zaXRpb25zXShodHRwczovL2NuLnZ1ZWpzLm9yZy9pbWFnZXMvdHJhbnNpdGlvbi5wbmcpXFxuXFxu5Y+v5Lul55yL5Ye65LiA5YWx5Lik57uE5Yqo55S777yM6L+b5YWl5ZKM56a75byA55qEYWN0aXZl44CC5bm25LiU5YiG5Yir5pyJ5Lik5Liq54q25oCB77yMZW50ZXLlkoxlbnRlci10b++8jOi/mTbkuKrnirbmgIHmjqfliLbkuoblhaXlnLrliqjnlLvlkoznprvlnLrliqjnlLvjgIIo5ZCQ5qe95LiA5LiLUXTnmoTliqjnlLvns7vnu5/vvIzlrprkuYnkuIDkuKpRQW5pbWF0aW9u5Y+q6IO95YGa5Y2K5Zy65Yqo55S777yM5oOz5YGa5YiwVnVl6L+Z5qC355qE6KaB5a6a5LmJ5Lik57uE77yM5oiW6ICF5Y+N5ZCR5pKt5pS+KVxcblxcbuWvueS6jumCo+S6m+ato+WcqOi/h+a4oeS4reWIh+aNoueahOexu+WQjeadpeivtO+8jOWmguaenOS9v+eUqOS6huayoeaciWBuYW1lYOWxnuaAp+eahGB0cmFuc2l0aW9uYO+8jFZ1ZeS8muS9v+eUqHYt5b2T5YGa6buY6K6k5YmN57yA44CC5Li65LqG6YG/5YWN5aSa57uE5Yqo55S75Yay56qB77yM5oiR5Liq5Lq65bu66K6u5q+P5LiA5LiqYHRyYW5zaXRpb25g57uE5Lu26YO95o+Q5L6bbmFtZeWxnuaAp+OAglxcblxcbiMjIyBKYXZhU2NyaXB06ZKp5a2Q5Ye95pWwXFxuXFxuYHRyYW5zaXRpb25g5Lmf5o+Q5L6b5LqG6ZKp5a2Q5Ye95pWw77yM5L2/5oiR5Lus5Y+v5Lul6YCa6L+HSmF2YVNjcmlwdOadpeaOp+WItkRPTeWFg+e0oO+8jOS4gOWFseS5n+WMheWQq+S6hjjkuKrlh73mlbDvvJpcXG5cXG4xLiBiZWZvcmVFbnRlclxcbjIuIGVudGVyXFxuMy4gYWZ0ZXJFbnRlclxcbjQuIGVudGVyQ2FuY2VsbGVkXFxuNS4gYmVmb3JlTGVhdmVcXG42LiBsZWF2ZVxcbjcuIGFmdGVyTGVhdmVcXG44LiBsZWF2ZUNhbmNlbGxlZFxcblxcbuWSjGNzc+S4iuimgeaxgueahOWRveWQjeS/neaMgeS4gOiHtO+8jOWPquaYr+WinuWKoOS6huS4pOS4quWPlua2iOeahOaOpeWPo++8jOW9k+WKqOeUu+iiq+WPlua2iOeahOaXtuWAmeiiq+iwg+eUqOOAglxcblxcbui/meS6m+mSqeWtkOWHveaVsOWPr+S7pee7k+WQiENTUyBgdHJhbnNpdGlvbi9hbmltYXRpb25zYCDkvb/nlKjvvIzkuZ/lj6/ku6XljZXni6zkvb/nlKjjgIJcXG5cXG4+IOW9k+WPquS9v+eUqEphdmFTY3JpcHTov4fmuKHnmoTml7blgJnvvIzlv4XpobvlnKggKiplbnRlcioqIOWSjCAqKmxlYXZlKiog5pi+5byP6LCD55SoYGRvbmUoKWDov5vooYzlm57osIPvvIzlkKbliJnku5bku6zlsIbooqvlkIzmraXosIPnlKjvvIzov4fmuKHkvJrnq4vljbPlrozmiJDjgIJcXG5cXG4+IOaOqOiNkOWvueS6juS7heS9v+eUqEphdmFTY3JpcHTov4fmuKHnmoTlhYPntKDmt7vliqBgdi1iaW5kOmNzcz1cXFwiZmFsc2VcXFwiYO+8jFZ1ZeS8mui3s+i/h0NTU+eahOajgOa1i++8jOi/meS5n+WPr+S7pemBv+WFjei/h+a4oei/h+eoi+S4rWNzc+eahOW9seWTjeOAglxcblxcbiMjIOWIl+ihqOWFg+e0oOeahOi/h+a4oVxcblxcbuS7peS4iuaIkeWIhuS6q+eahOmDveaYr+WNleWFg+e0oC/nu4Tku7bnmoTov4fmuKHvvIzpgqPkuYjpl67popjmnaXkuobvvIzliJfooajov5nnp43pgJrov4d2LWZvcuWIm+W7uueahOWFg+e0oOivpeWmguS9leWinuWKoOi/h+a4oeaViOaenOWRou+8n1xcblxcblZ1ZeaPkOS+m+S6hmA8dHJhbnNpdGlvbi1ncm91cD5g57uE5Lu277yM5Zyo5rex5YWl5LqG6Kej5LmL5YmN77yM6ZyA6KaB5YWI5LuL57uN5LiA5LiL6L+Z5Liq57uE5Lu255qE5LiA5Lqb54m554K577yaXFxuXFxuLSDkuI3lkIzkuo5gPHRyYW5zaXRpb24+YO+8jGA8dHJhbnNpdGlvbi1ncm91cD5g5Lya5Yib5bu65LiA5Liq55yf5a6e55qERE9N5YWD57Sg77yM6buY6K6k5pivPHNwYW4+77yM5Y+v5Lul6YCa6L+HdGFn5bGe5oCn5YiH5o2i5Li65YW25LuW5YWD57Sg44CCXFxuLSDov4fmuKHmqKHlvI/kuI3lho3lj6/nlKjvvIzlm6DkuLrmiJHku6zkuI3lho3nm7jkupLliIfmjaLnibnmnInnmoTlhYPntKBcXG4tIOWGhemDqOWFg+e0oOaAu+aYr+mcgOimgeaPkOS+m+WUr+S4gOeahGtleeWAvOadpei/m+ihjOWMuuWIhlxcbi0gQ1NT6L+H5rih5bCG5Lya5bqU55So5Zyo5YaF6YOo55qE5YWD57Sg5Lit77yM6ICM5LiN5piv6L+Z5Liq57uEL+WuueWZqOacrOi6q1xcblxcbiMjIyDliJfooajnmoTov5vlhaUv56a75byA6L+H5rihXFxuXFxuYGBgXFxuPGRpdiBpZD1cXFwiYXBwXFxcIj5cXG48YnV0dG9uIHYtb246Y2xpY2s9XFxcImFkZFxcXCI+YWRkPC9idXR0b24+XFxuPGJ1dHRvbiB2LW9uOmNsaWNrPVxcXCJyZW1vdmVcXFwiPnJlbW92ZTwvYnV0dG9uPlxcbjx0cmFuc2l0aW9uLWdyb3VwIG5hbWU9XFxcImdyb3VwXFxcIiB0YWc9XFxcInVsXFxcIj5cXG48bGkgdi1mb3I9XFxcIml0ZW0gaW4gaXRlbXNcXFwiIHYtYmluZDprZXk9XFxcIml0ZW1cXFwiPlxcbiAge3sgaXRlbSB9fVxcbjwvbGk+XFxuPC90cmFuc2l0aW9uLWdyb3VwPlxcbjwvZGl2PlxcbmBgYFxcblxcbmBgYFxcbm5ldyBWdWUoe1xcblxcdGVsOiBcXFwiI2FwcFxcXCIsXFxuXFx0ZGF0YToge1xcblxcdFxcdFxcdGl0ZW1zOiBbMSwyLDNdXFxuXFx0ICB9LFxcblxcdCAgbWV0aG9kczoge1xcblxcdCAgXFx0YWRkKCkge1xcblxcdCAgXFx0XFx0dGhpcy5pdGVtcy5wdXNoKDApXFxuXFx0ICBcXHR9XFxuXFx0ICB9XFxufSlcXG5gYGBcXG5cXG5gYGBcXG4uZ3JvdXAtZW50ZXIsXFxuLmdyb3VwLWxlYXZlLXRvIHtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTBweClcXG59XFxuXFxuLmdyb3VwLWVudGVyLWFjdGl2ZSxcXG4uZ3JvdXAtbGVhdmUtYWN0aXZlIHtcXG4gIHRyYW5zaXRpb246IGFsbCAxcztcXG59XFxuYGBgXFxuXFxu5Luj56CB5ZyoW+i/memHjO+8jOeCueWHu+iuv+mXrl0oaHR0cHM6Ly9qc2ZpZGRsZS5uZXQvanVzdGZvcmx4ei85ZGVud21vci8yMC8p77yM5Y+q5a6e546w5LqG5re75Yqg5YWD57Sg55qE6L+H5rih5pWI5p6c44CCXFxuXFxu5biM5pyb5pys5paH5Y+v5Lul5biu5Yqp5L2g55CG6KejVnVl5piv5aaC5L2V5aSE55CG6L+H5rih5Yqo55S777yM5pys5paH5piv5Z+65LqO5a6Y572R55qE55+l6K+G5ZKMZGVtb+aJgOe8luWGmeeahO+8jOacrOaWh+WPquWGmeS6huS4gOmDqOWIhuaIkeinieW+l+mcgOimgeaOjOaPoeeahOWfuuacrOWKn+iDve+8jFZ1ZeeahHRyYW5zaXRpb27nu4Tku7bov5jmnInlvojlpJrlip/og73nrYnlvoXkvaDnmoTmjJbmjpjvvIxb54K55Ye75YmN5b6AVnVl5a6Y572R5paH5qGjXShodHRwczovL2NuLnZ1ZWpzLm9yZy92Mi9ndWlkZS90cmFuc2l0aW9ucy5odG1sKVxcblwiLFwiZnJvbnRtYXR0ZXJcIjpcInRpdGxlOiDmt7vliqBWdWXliqjnlLtcXG5kYXRlOiAyMDE5LTEyLTA4IDA4OjAzOjQwXFxudGFnczogVnVlXFxuY2F0ZWdvcmllczogVnVlXCJ9IiwibW9kdWxlLmV4cG9ydHMgPSB7XCJhdHRyaWJ1dGVzXCI6e1widGl0bGVcIjpcIndlYmhvb2tcIixcImRhdGVcIjpcIjIwMTctMDctMTRUMDI6NTI6MjAuMDAwWlwiLFwidGFnc1wiOlwibGludXhcIn0sXCJib2R5XCI6XCJcXG5ibG9n546w5Zyo5piv55SoaGV4b++8jOaUvuWcqOiHquW3seeahFtjb2RlXShodHRwczovL2NvZGUubWthY2cuY29tKee9keermeS4iuOAglxcblxcbmNvZGXmmK/nlKjml6Dpl7vlpKflpKfnmoRnb2dz5pCt5bu655qE77yM6LeR5Zyo5Y+w5byP5py655qEZG9ja2Vy5Lit77yM5pys5py66LeR5LqG5b6I5aSaZG9ja2Vy5pyN5Yqh77yM5pyJaGV4b++8jOaciWFyaWEyY++8jOaciWdvZ3PvvIzov5jmnInkuKp3ZWJzZXJ2ZXIgY2FkZHnjgIJcXG5cXG5jYWRkeei/meS4nOilv+i/mOaYr+WfuuWPiyBb5LiN54ix5YaZ5Y2a5a6i55qEbWlvdG9dKGh0dHBzOi8vbWlvdG8ubWUvKeaOqOiNkOe7meaIkeeahO+8jOS5i+WJjeaIkeS4gOebtOaYr+eUqG5naW5455qE77yM6YKj6YWN572u5paH5Lu25aSq5aSN5p2C5LqG77yM5qC55pys546p5LiN5p2l44CCXFxuXFxu5YaZ5LiA56+H5paH56ug77yM5Lya5YWI5o+Q5Lqk5YiwY29kZe+8jOeEtuWQjuinpuWPkXdlYmhvb2vvvIxjYWRkeeS8muaLieWPlmNvZGXkuK3nmoTmlofnq6DvvIznlLHkuo7mmK/pnZnmgIHnmoTvvIzmiYDku6XkuI3pnIDopoHlpITnkIblhbbku5bnmoTvvIzlj6rpnIDopoHmi4nlj5bmnIDmlrDnmoTlsLHlj6/ku6XkuobjgIJcXG5cXG5jYWRkeeeahOmFjee9rlxcblxcbmBgYFxcbmJsb2cubWthY2cuY29tIHtcXG4gICAgZ3ppcFxcbiAgICByZWRpciAzMDEge1xcbiAgICBpZiB7PlgtRm9yd2FyZGVkLVByb3RvfSBpcyBodHRwXFxuICAgICAgICAvICBodHRwczovL3tob3N0fXt1cml9XFxuICAgIH1cXG4gICAgdGxzIGtpcmlnYXlhQG1rYWNnLmNvbVxcbiAgICByb290IC9zcnYvd3d3L2Jsb2dcXG4gICAgZ2l0IGNvZGUubWthY2cuY29tL2tpcmlnYXlha2F6dXNoaW4vYmxvZyB7XFxuICAgICAgICBwYXRoIC9zcnYvd3d3L2Jsb2dcXG4gICAgICAgIGJyYW5jaCBnaC1wYWdlc1xcbiAgICAgICAgaG9vayAvX3dlYmhvb2sgeHh4XFxuICAgICAgICBob29rX3R5cGUgZ29nc1xcbiAgICAgICAgdGhlbiBnaXQgcHVsbFxcbiAgICB9XFxufVxcblxcbmBgYFxcblxcbmdvZ3PkuIrlj6rpnIDopoHliJvlu7rkuIDkuKp3ZWJob29r77yM5Zyw5Z2A5aGr5YaZ5oiQY2FkZHnkuK3nmoRob29r5Zyw5Z2A77yM5Yqg5a+G5aGr5YaZaG9va+WQjueahHh4eOWNs+WPr++8jOWKoOWvhuiHquW3seiuvue9ruOAglxcblxcbueEtuWQjuWwseWPr+S7peaPkOS6pOS6huOAglxcblxcbuaPkOS6pOS8muinpuWPkXB1c2jmk43kvZzvvIxnb2dz5Lya5qC55o2u6K6+572u55qEd2ViaG9va+S4reeahOinhOWIme+8jOaJp+ihjOWSjHB1c2jnm7jlhbPnmoR3ZWJob29r77yMd2ViaG9va+S8muWQkeaMh+WumueahHVybOWPkemAgVBPU1Tmk43kvZzvvIzlj5HpgIHnmoTlhoXlrrnkuK3ljIXlkKvkuobnm7jlhbPkv6Hmga/vvIxjYWRkeeS8muagueaNruebuOWFs+S/oeaBr++8jOadpeWkhOeQhndlYmhvb2vvvIzmiafooYzkvaDop4TlrprnmoTmk43kvZzjgIJcIixcImZyb250bWF0dGVyXCI6XCJ0aXRsZTogd2ViaG9va1xcbmRhdGU6IDIwMTctMDctMTQgMDI6NTI6MjBcXG50YWdzOiBsaW51eFwifSIsIm1vZHVsZS5leHBvcnRzID0ge1wiYXR0cmlidXRlc1wiOntcInRpdGxlXCI6XCJ3ZWJwYWNr5YWl6ZeoXCIsXCJkYXRlXCI6XCIyMDE5LTEwLTE0VDE1OjM0OjUyLjAwMFpcIixcInRhZ3NcIjpcIldlYlwiLFwiY2F0ZWdvcmllc1wiOltcIldlYlwiLFwid2VicGFja1wiXX0sXCJib2R5XCI6XCJcXG7njrDlnKjliY3nq6/lvIDlj5HkuI3lg4/ku6XliY3kuIDmoLfvvIzlj6rpnIDopoHlhplodG1s44CBY3Nz5ZKMamF2YXNjcmlwdOaWh+S7tuWwseWPr+S7peS6huOAgueOsOS7o+WJjeerr+W8gOWPkeiusueptuW3peeoi+WMluOAglxcblxcbioq5LuA5LmI5piv5bel56iL5YyW77yfKipcXG5cXG7lt6XnqIvljJbljbPns7vnu5/ljJbjgIHmqKHlnZfljJbjgIHop4TojIPljJbnmoTkuIDkuKrov4fnqIvjgIJcXG5cXG4qKuS4uuS7gOS5iOimgeW3peeoi+WMlu+8nyoqXFxuXFxu5bel56iL5YyW5piv6K6p5byA5Y+R44CB5rWL6K+V5ZKM57u05oqk6YO95Y+Y5b6X5pu05Yqg5Y+v6Z2g5ZKM5o+Q6auY5pWI546H55qE5pa55byP44CCXFxuXFxuMS4g5Yi25a6a6KeE6IyDXFxuMi4g54mI5pys566h55CGXFxuMy4g5Y2V5YWD5rWL6K+VXFxuNC4g6Ieq5Yqo5YyWXFxuXFxu6YCa6L+H5Yi25a6a5rWB56iL55qE5pa55byP77yM6KeE6IyD5LqG5byA5Y+R5ZKM5rWL6K+V55qE5rWB56iL77yM6K6p5bel5L2c5pyJ56ug5Y+v5b6q77yM5pa55L6/5Zui6Zif5Y2P5L2c44CCXFxuXFxuPCEtLW1vcmUgLS0+XFxuXFxu5pyA5Yid55qE572R6aG15byA5Y+R77yM5piv5YaZ5aW95Yeg5Lu955qEamF2YXNjcmlwdOS7o+eggeWSjGNzc+aWh+S7tu+8jOaJi+WKqOWcqGh0bWzkuK3lvJXlhaXnmoTjgILov5nmoLfkuI3pgILlkIjlpJrkurrljY/kvZzlvIDlj5HvvIzkuIDml6blvIDlj5HkurrlkZjlpJrkuobvvIzkuI3lj6/pgb/lhY3nmoTkvJrpgKDmiJDmlofku7blkozlkb3lkI3lhrLnqoHjgIJcXG7kuLrkuobpgb/lhY3ov5nkupvkuovmg4XnmoTlj5HnlJ/vvIxqYXZhc2NyaXB05aKe5Yqg5LqG5qih5Z2X55qE5qaC5b+144CCXFxuXFxu5pyJ5aW955qE5LqL5oOF5Ye6546w77yM5bCx5Lya5pyJ5Z2P55qE5LqL5oOF5Y+R55Sf44CCXFxuXFxu6L+H5aSa55qE5qih5Z2X5a+86Ie0anPmlofku7bkuIvovb3lvojmhaLvvIzogIzkuJTmnInlhpfkvZnvvIzkuLrkuobpgb/lhY3ov5nku7bkuovmg4XlvbHlk43nlKjmiLfkvZPpqozvvIx3ZWJwYWNr5qiq56m65Ye65LiW5LqG44CCXFxuXFxud2VicGFja+aYr+S4gOS4queOsOS7o2phdmFzY3JpcHTnmoTpnZnmgIHmqKHlnZfmiZPljIXlmajjgILlroPkvJrpgJLlvZLnmoTmnoTlu7rlh7rkvp3otZblm77vvIzlubbmoLnmja7kvp3otZblm77mnaXovpPlh7rlupTnlKjnqIvluo/pnIDopoHnmoTmr4/kuKrmqKHlnZfvvIznhLblkI7lsIbmiYDmnInov5nkupvmqKHlnZfmiZPljIXmiJDkuIDkuKrmiJblpJrkuKogYnVuZGxl44CCXFxuXFxud2VicGFja+acieWbm+S4quaguOW/g+amguW/tTpcXG5cXG4tIOWFpeWPoyhlbnRyeSlcXG4tIOi+k+WHuihvdXRwdXQpXFxuLSBsb2FkZXJcXG4tIOaPkuS7tlxcblxcbuWFpeWPo+WGs+WumuS6hndlYnBhY2vopoHku47lk6rkuKrmlofku7blvIDlp4vmnoTlu7rkvp3otZblm77jgIJcXG5cXG7nnIvkuIDkuKrnroDljZXnmoTkvovlrZA6XFxuXFxuYGBgXFxubW9kdWxlLmV4cG9ydHMgPSB7XFxuICAgIGVudHJ5OiAnLi9zcmMvaW5kZXguanMnXFxufVxcbmBgYFxcblxcbm91dHB1dOWImeWGs+WumuS6hndlYnBhY2vkvJrlnKjlk6rph4zovpPlh7rnlJ/miJDnmoRidW5kbGVz77yM5Lul5Y+K5aaC5L2V5ZG95ZCN6L+Z5LqbYnVuZGxlc+OAgui+k+WHuuebruW9lem7mOiupOS4uiBgLi9kaXN0L2Ag44CCXFxuXFxuYGBgXFxuY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcXG5cXG5tb2R1bGUuZXhwb3J0cyA9IHtcXG4gICAgZW50cnk6ICcuL3NyYy9pbmRleC5qcycsXFxuICAgIG91dHB1dDoge1xcbiAgICAgICAgcGF0aDogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ2Rpc3QnKSxcXG4gICAgICAgIGZpbGVuYW1lOiAnYnVuZGxlLmpzJ1xcbiAgICB9XFxufVxcbmBgYFxcblxcbmxvYWRlcuWPr+S7peiuqXdlYnBhY2vmiZPljIXpnZ5qYXZhc2NyaXB05paH5Lu277yMbG9hZGVy5Y+v5Lul5bCG5omA5pyJ57G75Z6L55qE5paH5Lu26L2s5o2i5Li6d2VicGFja+WPr+S7peivhuWIq+eahOacieaViOaooeWdl++8jOeEtuWQjuWIqeeUqHdlYnBhY2vnmoTmiZPljIXog73lipvvvIzlr7nku5bku6zov5vooYzlpITnkIbjgIJcXG5cXG5gYGBcXG5jb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xcblxcbm1vZHVsZS5leHBvcnRzID0ge1xcbiAgICBlbnRyeTogJy4vc3JjL2luZGV4LmpzJyxcXG4gICAgb3V0cHV0OiB7XFxuICAgICAgICBwYXRoOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnZGlzdCcpLFxcbiAgICAgICAgZmlsZW5hbWU6ICdidW5kbGUuanMnXFxuICAgIH0sXFxuICAgIG1vZHVsZToge1xcbiAgICAgICAgcnVsZXM6IHtcXG4gICAgICAgICAgICB0ZXN0OiAvXFxcXC5jc3MkLyxcXG4gICAgICAgICAgICB1c2U6ICdjc3MtbG9hZGVyJ1xcbiAgICAgICAgfVxcbiAgICB9XFxufVxcbmBgYFxcblxcbnJ1bGVz5Lit55qE5oSP5oCd5piv77yM5b2TcmVxdWlyZSgpL2ltcG905Lit6KKr6Kej5p6Q5Li6LmNzc+eahOi3r+W+hOaXtu+8jOWFiOS9v+eUqGNzcy1sb2FkZXLovazmjaLkuIDkuIvjgIJcXG5cXG7miJHku6zlj6/ku6XlvIDlj5HmlrDnmoRsb2FkZXLljrvliqDovb3kuI3lkIznmoTmlofku7bvvIzmnIDnu4jpg73pgJrov4d3ZWJwYWNr5p2l5omT5YyF5Yiw5LiA6LW344CCXFxuXFxubG9hZGVy55So5LqO6L2s5o2i5p+Q5Lqb57G75Z6L55qE5qih5Z2X77yM5o+S5Lu25YiZ5bel5L2c55qE5pu05Yqg5bm/5rOb44CC5o+S5Lu255qE6IyD5Zu05YyF5ous77yM5LuO5omT5YyF5LyY5YyW5ZKM5Y6L57yp77yM5LiA55u05Yiw6YeN5paw5a6a5LmJ546v5aKD5Lit55qE5Y+Y6YeP44CC5o+S5Lu25o6l5Y+j5Yqf6IO95p6B5YW25by65aSn77yM5Y+v5Lul55So5p2l5aSE55CG5ZCE56eN5ZCE5qC355qE5Lu75Yqh44CCXFxuXFxu5oOz6KaB5L2/55So5LiA5Liq5o+S5Lu277yM5L2g5Y+q6ZyA6KaBIHJlcXVpcmUoKSDlroPvvIznhLblkI7miorlroPmt7vliqDliLAgcGx1Z2lucyDmlbDnu4TkuK3jgILlpJrmlbDmj5Lku7blj6/ku6XpgJrov4fpgInpobkob3B0aW9uKeiHquWumuS5ieOAguS9oOS5n+WPr+S7peWcqOS4gOS4qumFjee9ruaWh+S7tuS4reWboOS4uuS4jeWQjOebrueahOiAjOWkmuasoeS9v+eUqOWQjOS4gOS4quaPkuS7tu+8jOi/meaXtumcgOimgemAmui/h+S9v+eUqCBuZXcg5pON5L2c56ym5p2l5Yib5bu65a6D55qE5LiA5Liq5a6e5L6L44CCXFxuXFxuYGBgXFxuY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcXG5jb25zdCBIdG1sV2VicGFja1BsdWdpbiA9IHJlcXVpcmUoJ2h0bWwtd2VicGFjay1wbHVnaW4nKTsgLy8g6YCa6L+HIG5wbSDlronoo4VcXG5jb25zdCB3ZWJwYWNrID0gcmVxdWlyZSgnd2VicGFjaycpO1xcblxcbm1vZHVsZS5leHBvcnRzID0ge1xcbiAgICBlbnRyeTogJy4vc3JjL2luZGV4LmpzJyxcXG4gICAgb3V0cHV0OiB7XFxuICAgICAgICBwYXRoOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnZGlzdCcpLFxcbiAgICAgICAgZmlsZW5hbWU6ICdidW5kbGUuanMnXFxuICAgIH0sXFxuICAgIG1vZHVsZToge1xcbiAgICAgICAgcnVsZXM6IHtcXG4gICAgICAgICAgICB0ZXN0OiAvXFxcXC5jc3MkLyxcXG4gICAgICAgICAgICB1c2U6ICdjc3MtbG9hZGVyJ1xcbiAgICAgICAgfVxcbiAgICB9LFxcbiAgICBwbHVnaW5zOiBbXFxuICAgICAgICBuZXcgSHRtbFdlYnBhY2tQbHVnaW4oe3RlbXBsYXRlOiAnLi9zcmMvaW5kZXguaHRtbCd9KVxcbiAgICBdXFxufVxcbmBgYFxcblxcbiMjIOaAu+e7k1xcblxcbumAmui/h3dlYnBhY2vvvIzmiJHku6zlj6/ku6XlsIbmlbTkuKrpobnnm67pg73miZPljIXkuLrkuIDkuKrmlofku7bov5vooYzliIblj5HvvIzogIzkuJTov5jlj6/ku6Xov5vooYzkvJjljJbjgIJ3ZWJwYWNr55qE5Ye6546w77yM5bCG5YmN56uv55qE5byA5Y+R5ZKM5Y+R5biD5b275bqV55qE5YiG56a75byA77yM5byA5Y+R5Lq65ZGY5Y+v5Lul5Lul5ZCE56eN5pa55byP6L+b6KGM5byA5Y+R77yM6YCa6L+Hd2VicGFja+aJk+WMheS7peWQjui+k+WHuumDqOe9sumcgOimgeeahOaWh+S7tuOAglxcblwiLFwiZnJvbnRtYXR0ZXJcIjpcInRpdGxlOiB3ZWJwYWNr5YWl6ZeoXFxuZGF0ZTogMjAxOS0xMC0xNCAxNTozNDo1MlxcbnRhZ3M6ICdXZWInXFxuY2F0ZWdvcmllczogW1xcbiAgICAnV2ViJyxcXG4gICAgJ3dlYnBhY2snXFxuXVwifSIsIm1vZHVsZS5leHBvcnRzID0ge1wiYXR0cmlidXRlc1wiOntcInRpdGxlXCI6XCJ3c2wy55qE5L2/55So5L2T6aqMXCIsXCJkYXRlXCI6XCIyMDE5LTA2LTE2VDEyOjU5OjU5LjAwMFpcIixcInRhZ3NcIjpcIldpbmRvd3NcIixcImNhdGVnb3JpZXNcIjpudWxsfSxcImJvZHlcIjpcIlxcbndzbDLlt7Lnu4/mmK/omZrmi5/mnLrlubPlj7DkuobjgIJcXG5cXG48IS0tIG1vcmUgLS0+XFxuXFxu6ZyA6KaBV2luZG93c+eJiOacrOWcqDE4OTE35Y+K5Lul5LiK77yM5YWI5byA5ZCv6Jma5ouf5py65bmz5Y+w5omN6IO957un57ut77yM5Zyo566h55CG5ZGY5p2D6ZmQ55qEcG93ZXJzaGVsbOS4reaJp+ihjFxcblxcbmBgYFxcbkVuYWJsZS1XaW5kb3dzT3B0aW9uYWxGZWF0dXJlIC1PbmxpbmUgLUZlYXR1cmVOYW1lIFZpcnR1YWxNYWNoaW5lUGxhdGZvcm1cXG5gYGBcXG5cXG7lr7nlt7Llronoo4XnmoR3c2wx6L+b6KGM6L2s5o2iXFxuXFxuYGBgXFxud3NsIC0tc2V0LXZlcnNpb24gPERpc3Rybz4gMlxcbmBgYFxcblxcbkRpc3Ryb+WPr+S7pemAmui/hyBgd3NsIC0tbGlzdGAg5p+l55yL44CCXFxuXFxu6L2s5o2i6ZyA6KaB54K55pe26Ze077yM5a6M5oiQ5Lul5ZCO5bCx5Y+v5Lul5rWq6LW35p2l5LqG44CCXFxuXFxud3NsMuaWsOWinuS6huS4gOS6m+WPguaVsO+8mlxcblxcbi0gYHdzbCAtLXNldC12ZXJzaW9uIDxEaXN0cm8+IDxWZXJzaW9uPmBcXG5cXG7lj6/ku6Xorr7nva7mn5DkuKp3c2znmoTniYjmnKzvvIwx5piv5pen54mI77yMMuaYr+aWsOeJiOOAglxcblxcbi0gYHdzbCAtLXNldC1kZWZhdWx0LXZlcnNpb24gPFZlcnNpb24+YFxcblxcbuiuvue9rum7mOiupOeahHdzbOeJiOacrO+8jOaOqOiNkOiuvue9ruS4gOS4i+OAglxcblxcbi0gYHdzbCAtLXNodXRkb3duYFxcblxcbuWHuuS6juafkOS6m+ebrueahO+8jOavlOWmguW3sue7j+WujOaIkOS6huS7u+WKoe+8jOS4jeWGjemcgOimgXdzbOW3peS9nOWcqOWQjuWPsO+8jOWPr+S7peaJi+WKqOWFs+mXreOAglxcblxcbi0gYHdzbCAtLWxpc3QgLS1xdWlldGBcXG5cXG7ku4XliJflh7rliIblj5HlkI3np7DvvIzmraTlkb3ku6Tlr7nkuo7ohJrmnKznvJblhpnlvojmnInnlKjvvIzlm6DkuLrlroPlj6rkvJrovpPlh7rmgqjlt7Llronoo4XnmoTlj5HooYzniYjnmoTlkI3np7DvvIzogIzkuI3mmL7npLrlhbbku5bkv6Hmga/vvIzlpoLpu5jorqTlj5HooYzniYjvvIzniYjmnKznrYnjgIJcXG5cXG4tIGB3c2wgLS1saXN0IC0tdmVyYm9zZWBcXG5cXG7mmL7npLrmnInlhbPmiYDmnInliIblj5HnmoTor6bnu4bkv6Hmga/jgILmraTlkb3ku6TliJflh7rmr4/kuKrlj5HooYzniYjnmoTlkI3np7DvvIzlj5HooYzniYjmiYDlpITnmoTnirbmgIHku6Xlj4rmraPlnKjov5DooYznmoTniYjmnKzjgILlroPov5jmmL7npLrlk6rkupvliIblj5HmmK/pu5jorqTnmoTmmJ/lj7fjgIJcXG5cXG7lvZPkuIDliIflh4blpIflsLHnu6rvvIzmiJHlsLHlronoo4XkuoZkb2NrZXLvvIzmtYvor5XkuIDms6LjgIJcXG5cXG5gYGBcXG5zdWRvIGFwdCBpbnN0YWxsIGRvY2tlci1jZVxcbmBgYFxcblxcbua3u+WKoOeUqOaIt+WIsGRvY2tlcue7hOOAglxcblxcbmBgYFxcbnN1ZG8gdXNlcm1vZCAtYUcgZG9ja2VyICRVU0VSXFxuYGBgXFxuXFxuYGBgXFxuc3VkbyBzZXJ2aWNlIGRvY2tlciAtLWZ1bGwtcmVzdGFydFxcbmBgYFxcblxcbuW3sue7j+WPr+S7pei3kWRvY2tlcuS6hu+8jOaIkeS7rOadpeWBmuS4qua1i+ivle+8jOivt+WHuuS4h+iDveeahGhlbGxvIHdvcmxk77yBXFxuXFxuYGBgXFxuZG9ja2VyIHB1bGwgaGVsbG8td29ybGRcXG5gYGBcXG5cXG5gYGBcXG5kb2NrZXIgcnVuIC0tcm0gaGVsbG8td29ybGRcXG5gYGBcXG5cXG7nhLblkI7lsLHnnIvliLDkuobmg7PopoHnmoTnu5PmnpzvvIxoZWxsbyB3b3JsZOaIkOWKn+eahOi3kei1t+adpeS6huOAglxcblxcbmBgYFxcbkhlbGxvIGZyb20gRG9ja2VyIVxcblRoaXMgbWVzc2FnZSBzaG93cyB0aGF0IHlvdXIgaW5zdGFsbGF0aW9uIGFwcGVhcnMgdG8gYmUgd29ya2luZyBjb3JyZWN0bHkuXFxuXFxuVG8gZ2VuZXJhdGUgdGhpcyBtZXNzYWdlLCBEb2NrZXIgdG9vayB0aGUgZm9sbG93aW5nIHN0ZXBzOlxcbiAxLiBUaGUgRG9ja2VyIGNsaWVudCBjb250YWN0ZWQgdGhlIERvY2tlciBkYWVtb24uXFxuIDIuIFRoZSBEb2NrZXIgZGFlbW9uIHB1bGxlZCB0aGUgXFxcImhlbGxvLXdvcmxkXFxcIiBpbWFnZSBmcm9tIHRoZSBEb2NrZXIgSHViLlxcbiAgICAoYW1kNjQpXFxuIDMuIFRoZSBEb2NrZXIgZGFlbW9uIGNyZWF0ZWQgYSBuZXcgY29udGFpbmVyIGZyb20gdGhhdCBpbWFnZSB3aGljaCBydW5zIHRoZVxcbiAgICBleGVjdXRhYmxlIHRoYXQgcHJvZHVjZXMgdGhlIG91dHB1dCB5b3UgYXJlIGN1cnJlbnRseSByZWFkaW5nLlxcbiA0LiBUaGUgRG9ja2VyIGRhZW1vbiBzdHJlYW1lZCB0aGF0IG91dHB1dCB0byB0aGUgRG9ja2VyIGNsaWVudCwgd2hpY2ggc2VudCBpdFxcbiAgICB0byB5b3VyIHRlcm1pbmFsLlxcblxcblRvIHRyeSBzb21ldGhpbmcgbW9yZSBhbWJpdGlvdXMsIHlvdSBjYW4gcnVuIGFuIFVidW50dSBjb250YWluZXIgd2l0aDpcXG4gJCBkb2NrZXIgcnVuIC1pdCB1YnVudHUgYmFzaFxcblxcblNoYXJlIGltYWdlcywgYXV0b21hdGUgd29ya2Zsb3dzLCBhbmQgbW9yZSB3aXRoIGEgZnJlZSBEb2NrZXIgSUQ6XFxuIGh0dHBzOi8vaHViLmRvY2tlci5jb20vXFxuXFxuRm9yIG1vcmUgZXhhbXBsZXMgYW5kIGlkZWFzLCB2aXNpdDpcXG4gaHR0cHM6Ly9kb2NzLmRvY2tlci5jb20vZ2V0LXN0YXJ0ZWQvXFxuYGBgXFxuXFxu5oC755qE5p2l6K+077yM5Zug5Li6d3NsMuaUueaIkOiZmuaLn+acuuaWueahiOS6hu+8jOS4jei/h3dzbDLnmoTlkK/liqjpgJ/luqbov5jmmK/mjLrlv6vnmoTvvIzlvq7ova/kuZ/liqrlipvorql3c2wy5ZKMd3NsMeS5i+mXtOWcqOS9v+eUqOS4iuayoeacieW3ruW8guOAguebruWJjeW+rui9r+i/mOayoeacieWujOaIkHdzbDLnmoTnvZHnu5zpg6jliIbvvIx3c2wy5ZKM5a6/5Li75py65LmL6Ze06L+Y6ZyA6KaB5L2/55So5LiT6Zeo55qEaXDov5vooYzorr/pl67vvIznrYnlvq7ova/lrozmiJB3c2wy55qEbG9jYWxob3N0572R57uc5Lul5ZCO77yM5bCx5Y+v5Lul5YOP5Lul5YmN5LiA5qC355u05o6l6LeR5LiA5Lqb572R56uZ5oiW6ICF6ZyA6KaB56uv5Y+j55qE5pyN5Yqh5LqG44CCXFxuXFxuIVvnvZHnu5zmiKrlm75dKFNuaXBhc3RlXzIwMTktMDYtMTZfMjEtNTItNDIucG5nKVxcblxcbuadpeS4gOW8oOWQiOeFp1xcblxcbiFb5ZCI54WnXShTbmlwYXN0ZV8yMDE5LTA2LTE2XzIxLTQ5LTE1LnBuZylcXG5cXG5b54K55oiR5p+l55yLd3NsMueahOWPkeW4g+ivtOaYjl0oaHR0cHM6Ly9kZXZibG9ncy5taWNyb3NvZnQuY29tL2NvbW1hbmRsaW5lL3dzbC0yLWlzLW5vdy1hdmFpbGFibGUtaW4td2luZG93cy1pbnNpZGVycy8pXFxuXFxuW+eCueaIkeafpeeci+WmguS9leWuieijhXdzbDJdKGh0dHBzOi8vZG9jcy5taWNyb3NvZnQuY29tL2VuLXVzL3dpbmRvd3Mvd3NsL3dzbDItaW5zdGFsbClcXG5cIixcImZyb250bWF0dGVyXCI6XCJ0aXRsZTogd3NsMueahOS9v+eUqOS9k+mqjFxcbmRhdGU6IDIwMTktMDYtMTYgMTI6NTk6NTlcXG50YWdzOiBXaW5kb3dzXFxuY2F0ZWdvcmllczpcIn0iLCJtb2R1bGUuZXhwb3J0cyA9IHtcImF0dHJpYnV0ZXNcIjp7XCJ0aXRsZVwiOlwi5L2/55SoRFRL5byA5Y+RXCIsXCJkYXRlXCI6XCIyMDE4LTAxLTEyVDExOjA1OjI2LjAwMFpcIixcInRhZ3NcIjpcIkxpbnV4IERUS1wifSxcImJvZHlcIjpcIlxcblxcbioq5Zyo6ZiF6K+75pys56+H5paH56ug5LmL5YmN77yM5L2g6ZyA6KaB5o6M5o+h5Z+65pys55qEUXQvQysr5byA5Y+R55+l6K+G44CCKipcXG5cXG48IS0tIG1vcmUgLS0+XFxuXFxuPiAqKuazqOaEj++8muacrOevh+aWh+eroOWfuuS6jkRlZXBpbuW5s+WPsO+8jOWFtuS7luW5s+WPsOivt+iHquihjOihpeWFheS+nei1luWFs+ezu+OAgioqXFxuXFxu5YWI5a6J6KOFRFRL55qE5L6d6LWW5YWz57O744CCXFxuXFxuYGBgXFxuc3VkbyBhcHQgaW5zdGFsbCBsaWJkdGt3aWRnZXQyIGxpYmR0a2NvcmUyXFxuYGBgXFxuXFxu5paw5bu6UXTpobnnm67vvIznvJbovpFwcm/mlofku7bvvIzmt7vliqDpobnnm67kvp3otZbjgIJcXG5cXG5gYGBcXG5DT05GSUcgKz0gYysrMTQgbGlua19wa2djb25maWdcXG5QS0dDT05GSUcgKz0gZHRrd2lkZ2V0XFxuYGBgXFxuXFxuRFRL55uu5YmN5pyJ5Lik5Liq57uE5Lu277yM5LiA5Liq5piv5o+Q5L6b5bqT5Yqf6IO955qEY29yZe+8jOS4gOS4quaYr+aPkOS+m+aOp+S7tueahHdpZGdldOOAglxcblxcbuS/ruaUuW1haW4uY3BwLOWIoOmZpFFBcHBsaWNhdGlvbueahOebuOWFs+WGheWuue+8jOaUueS4ukRBcHBsaWNhdGlvbuOAglxcblxcbj4g5rOo5oSP77yaIOS9v+eUqERUS+eahOe7hOS7tu+8jOmcgOimgeS9v+eUqERUS+eahOWujyzmoLnmja7kvb/nlKjnmoTmlofku7bmnaXpgInmi6nlr7nlupTnmoTlro/jgIJcXG5cXG5gYGBcXG5EV0lER0VUX1VTRV9OQU1FU1BBQ0VcXG5EQ09SRV9VU0VfTkFNRVNQQUNFXFxuYGBgXFxuXFxuRFRL5L2/55So5LqGZGVlcGlu6Ieq5bex55qEcXTmj5Lku7bvvIzpnIDopoHlnKhEQXBwbGljYXRpb27liY3osIPnlKjjgIJcXG5cXG5gYGBcXG4gICAgREFwcGxpY2F0aW9uOjpsb2FkRFhjYlBsdWdpbigpO1xcbiAgICBEQXBwbGljYXRpb24gYXBwKGFyZ2MsIGFyZ3YpO1xcbmBgYFxcblxcbkRBcHBsaWNhdGlvbuS4reaPkOS+m+S6huW+iOWkmuaWueazleadpeiuvue9rueoi+W6j+eahOWQhOenjeS/oeaBr++8jOWFt+S9k+ivt+eci+WktOaWh+S7tueahOWumuS5ieOAglxcblxcbuS4u+eql+WPo+eUsURNYWluV2luZG935o+Q5L6b77yM5paw5bu657G777yM54S25ZCO5re75YqgRE1haW5XaW5kb3fnmoTlpLTmlofku7blkoxEVEtXSURHRVTnmoTlro/jgIJcXG5cXG5gYGBcXG4jaW5jbHVkZSA8RE1haW5XaW5kb3c+XFxuXFxuRFdJREdFVF9VU0VfTkFNRVNQQUNFXFxuYGBgXFxuXFxu54S25ZCO5L+u5pS557un5om/5YWz57O777yM5pS55Li657un5om/RE1haW5XaW5kb3fjgIJETWFpbldpbmRvd+aPkOS+m+S6huS4gOS6m+aIkeS7rOWwgeijheeahOaWueazleOAguebruWJjeS4uuatou+8jOivpeeoi+W6j+eahOeVjOmdouW3sue7j+espuWQiERlZXBpbueoi+W6j+eahOmjjuagvOS6hu+8jOaIkeS7rOWwgeijheS6huS4gOS6m+WFtuS7luaOp+S7tu+8jOS9v+WFtuagt+W8j+espuWQiOaIkeS7rOeahOmjjuagvO+8jOWmguaenOimgeWcqOWFtuS7llF056iL5bqP5Lit5L2/55So77yM5Lmf5piv5ZCM5qC355qE5q2l6aqk77yM6L295YWlUXTmj5Lku7bvvIzmt7vliqDlr7nlupTnmoTlpLTmlofku7blkoxEVEvnmoTlro/jgIJcXG5cXG5cXG5cIixcImZyb250bWF0dGVyXCI6XCJ0aXRsZTog5L2/55SoRFRL5byA5Y+RXFxuZGF0ZTogMjAxOC0wMS0xMiAxMTowNToyNlxcbnRhZ3M6IExpbnV4IERUS1wifSIsIm1vZHVsZS5leHBvcnRzID0ge1wiYXR0cmlidXRlc1wiOntcInRpdGxlXCI6XCLkvb/nlKh3ZWJwYWNrLWRldi1zZXJ2ZXLmnaXnm5HlkKzpobnnm67lj5jljJZcIixcImRhdGVcIjpcIjIwMTktMTEtMjVUMTc6NTQ6MzYuMDAwWlwiLFwidGFnc1wiOlwiVnVlXCIsXCJjYXRlZ29yaWVzXCI6XCJWdWVcIn0sXCJib2R5XCI6XCJcXG53ZWJwYWNr55qE5Ye6546w5pa55L6/5LqG5YmN56uv5byA5Y+R6ICF77yM5L2/5byA5Y+R5ZKM6YOo572y5YiG5oiQ5LqG5Lik6YOo5YiG77yM5byA5Y+R6ICF5Y+v5Lul5q2j5bi45qC55o2u5bel56iL5YyW55qE6KaB5rGC6L+b6KGM5byA5Y+R77yM6YOo572y5pe26YCa6L+Hd2VicGFja+WunueOsOS7o+eggeeahOijgeWJquWSjOS8mOWMluOAglxcblxcbuacrOasoeWwseS7i+e7jeS4gOS4qndlYnBhY2vnmoTlip/og70gYHdlYnBhY2stZGV2LXNlcnZlcmBcXG5cXG7lsIZ3ZWJwYWNr5LiO5o+Q5L6b5a6e5pe26YeN6L2955qE5byA5Y+R5pyN5Yqh5Zmo5LiA6LW35L2/55So44CC6L+Z5LuF5bqU55So5LqO5byA5Y+R44CCXFxu5a6D5Zyo5ZCO5Y+w5L2/55So5LqGd2VicGFjay1kZXYtbWlkZGxld2FyZe+8jOWug+aPkOS+m+S6huWvuVdlYnBhY2votYTkuqfnmoTlv6vpgJ/lhoXlrZjorr/pl67jgIJcXG5cXG48IS0tIG1vcmUgLS0+XFxuXFxud2VicGFjay1kZXYtc2VydmVy5o+Q5L6b5LqG5LiA5Liq5bCP5Z6L55qEZXhwcmVzc+eahGh0dHDmnI3liqHlmajvvIzov5nkuKpodHRw5pyN5Yqh5Zmo5ZKMY2xpZW505L2/55So5LqGd2Vic29ja2V06YCa6K6v5Y2P6K6u77yM5Y6f5aeL5paH5Lu25L2c5Ye65pS55Yqo5ZCO77yMd2VicGFjay1kZXYtc2VydmVy5Lya5a6e5pe255qE57yW6K+R77yM5L2G5piv5pyA5ZCO55qE57yW6K+R55qE5paH5Lu25bm25rKh5pyJ6L6T5Ye65Yiw55uu5qCH5paH5Lu25aS544CCXFxuXFxuKirms6jmhI/vvJrlkK/liqh3ZWJwYWNrLWRldi1zZXJ2ZXLlkI7vvIzlnKjnm67moIfmlofku7blpLnkuK3mmK/nnIvkuI3liLDnvJbor5HlkI7nmoTmlofku7bnmoQs57yW6K+R5ZCO55qE5paH5Lu26YO95L+d5a2Y5Yiw5LqG5YaF5a2Y5b2T5Lit5p2l5Yqg6YCf6K6/6Zeu44CCKipcXG5cXG4jIyDlkK/nlKh3ZWJwYWNrLWRldi1zZXJ2ZXJcXG5cXG5gYGBcXG5ucG0gaW5zdGFsbCAtRCB3ZWJwYWNrLWRldi1zZXJ2ZXJcXG5gYGBcXG5cXG7lnKh3ZWJwYWNrLmNvbmZpZy5qc+S4rea3u+WKoGRldlNlcnZlcuWvueixoe+8mlxcblxcbmBgYFxcbnZhciBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xcblxcbm1vZHVsZS5leHBvcnRzID0ge1xcbiAgLy8uLi5cXG4gIGRldlNlcnZlcjoge1xcbiAgICBjb250ZW50QmFzZTogcGF0aC5qb2luKF9fZGlybmFtZSwgJ2Rpc3QnKSxcXG4gICAgY29tcHJlc3M6IHRydWUsIC8vIOW8gOWQr+WOi+e8qVxcbiAgICBwb3J0OiA5MDAwIC8vIOaMh+Wumui/kOihjOeahOerr+WPo1xcbiAgfVxcbn07XFxuYGBgXFxuXFxu54S25ZCO6YCa6L+HYG5weCB3ZWJwYWNrLWRldi1zZXJ2ZXJg5ZCv5Yqo77yM57uI56uv5LiK5Lya6L6T5Ye65LiA5Lqb5L+h5oGv77yM5LiA6Iis5oiR5Lus5Lya5aKe5Yqg5LiA5Lqb5Y+C5pWw5p2l5L2/6L6T5Ye65pu05Yqg5aW955yLOlxcblxcbmBgYFxcbndlYnBhY2stZGV2LXNlcnZlciAtLWRldnRvb2wgZXZhbC1zb3VyY2UtbWFwIC0tcHJvZ3Jlc3MgLS1jb2xvcnMgLS1ob3QgLS1pbmxpbmVcXG5gYGBcXG5cXG7kuIrpnaLnmoTlkb3ku6Tlop7liqDkuIDkuKrlvIDlj5Hlt6XlhbcgYGV2YWwtc291cmNlLW1hcGDvvIzlvIDlkK/kuoZwcm9ncmVzc+i/m+W6puaYvuekuu+8jOW8gOWQr+S6hmNvbG9yc+minOiJsu+8jGhvdOeDreabtOaWsOWSjGlubGluZeabtOaWsOaooeW8j+OAguS4iumdoueahOWPguaVsOS5n+WPr+S7pea3u+WKoOWIsGRldlNlcnZlcueahOWxnuaAp+S4reOAglxcblxcbue7iOerr+i+k+WHuueahOWGheWuueWmguS4izpcXG5cXG5gYGBcXG4xMCUgYnVpbGRpbmcgMS8xIG1vZHVsZXMgMCBhY3RpdmXihLkg772id2Rz772jOiBQcm9qZWN0IGlzIHJ1bm5pbmcgYXQgaHR0cDovL2xvY2FsaG9zdDo5MDAwL1xcbuKEuSDvvaJ3ZHPvvaM6IHdlYnBhY2sgb3V0cHV0IGlzIHNlcnZlZCBmcm9tIC9kaXN0L1xcbuKEuSDvvaJ3ZHPvvaM6IENvbnRlbnQgbm90IGZyb20gd2VicGFjayBpcyBzZXJ2ZWQgZnJvbSAvaG9tZS9qdXN0Zm9ybHh6L1Byb2plY3RzL1Z1ZUJsb2cvZGlzdFxcbuKEuSDvvaJ3ZG3vvaM6IEhhc2g6IGZmOTAwNWQ5ZjZmZmFmZDExY2Q0XFxuVmVyc2lvbjogd2VicGFjayA0LjQxLjBcXG5UaW1lOiAyOTM4bXNcXG5CdWlsdCBhdDogMTEvMjUvMjAxOSA2OjAzOjUwIFBNXFxuICBBc3NldCAgICAgIFNpemUgIENodW5rcyAgICAgICAgICAgICBDaHVuayBOYW1lc1xcbm1haW4uanMgIDIuMDkgTWlCICAgIG1haW4gIFtlbWl0dGVkXSAgbWFpblxcbkVudHJ5cG9pbnQgbWFpbiA9IG1haW4uanNcXG5bMF0gbXVsdGkgKHdlYnBhY2spLWRldi1zZXJ2ZXIvY2xpZW50P2h0dHA6Ly9sb2NhbGhvc3Q6OTAwMCAod2VicGFjaykvaG90L2Rldi1zZXJ2ZXIuanMgLi9zcmMvbWFpbi50cyA1MiBieXRlcyB7bWFpbn0gW2J1aWx0XVxcbmBgYFxcblxcbuaIkeS7rOWwseWPr+S7pemAmui/h2xvY2FsaG9zdDo5MDAw5p2l6K6/6Zeu5oiR5Lus55qE5bqU55So5LqG44CCXFxuXFxu6ZyA6KaB5rOo5oSP55qE5piv77yM55Sx5LqO5oiR5Lus57uP5bi45oqK5YaF5a656L6T5Ye65YiwZGlzdOebruW9le+8jOS9huaYr3dlYnBhY2vov5DooYzmmK/lnKjpobnnm67nm67lvZXnmoTvvIzorr/pl653ZWJwYWNr55Sf5oiQ5ZyoZGlzdOebruW9leeahG1haW4uanPml7bvvIzpnIDopoHlhpnkuIrnm7jlr7nkuo53ZWJwYWNr55qE55uu5b2V77yM5L6L5aaCZGlzdC9tYWluLmpz44CC5ZCm5YiZ5Lya5om+5LiN5Yiw5paH5Lu244CCXFxuXFxu5aaC5p6c6YGH5Yiw6Zeu6aKY77yM5a+86Iiq5YiwIC93ZWJwYWNrLWRldi1zZXJ2ZXIg6Lev5b6E77yM5Y+v5Lul5pi+56S65Ye65paH5Lu255qE5pyN5Yqh5L2N572u44CCIOS+i+Wmgu+8jGh0dHA6Ly9sb2NhbGhvc3Q6OTAwMC93ZWJwYWNrLWRldi1zZXJ2ZXLjgIJcXG5cXG4jIyDphY3nva53ZWJwYWNrXFxuXFxud2VicGFjay1kZXYtc2VydmVy5pSv5oyB5Zyo5pyN5Yqh5YaF6YOo6LCD55So5Lit6Ze05Lu25a+55pWw5o2u6L+b6KGM5aSE55CG44CCXFxuXFxuIyMjIGRldlNlcnZlci5iZWZvcmVcXG5cXG5gZnVuY3Rpb24gKGFwcCwgc2VydmVyKWBcXG5cXG7lnKjmnI3liqHlhoXpg6jnmoTmiYDmnInlhbbku5bkuK3pl7Tku7bkuYvliY3vvIwg5o+Q5L6b5omn6KGM6Ieq5a6a5LmJ5Lit6Ze05Lu255qE5Yqf6IO944CCIOi/meWPr+S7peeUqOadpemFjee9ruiHquWumuS5ieWkhOeQhueoi+W6j++8jOS+i+Wmgu+8mlxcblxcbmBgYFxcbm1vZHVsZS5leHBvcnRzID0ge1xcbiAgLy8uLi5cXG4gIGRldlNlcnZlcjoge1xcbiAgICBiZWZvcmU6IGZ1bmN0aW9uKGFwcCwgc2VydmVyKSB7XFxuICAgICAgYXBwLmdldCgnL3NvbWUvcGF0aCcsIGZ1bmN0aW9uKHJlcSwgcmVzKSB7XFxuICAgICAgICByZXMuanNvbih7IGN1c3RvbTogJ3Jlc3BvbnNlJyB9KTtcXG4gICAgICB9KTtcXG4gICAgfVxcbiAgfVxcbn07XFxuYGBgXFxuXFxuIyMjIGRldlNlcnZlci5hZnRlclxcblxcbuWQjGRldlNlcnZlci5iZWZvcmXvvIzlnKjmnI3liqHlhoXpg6jnmoTmiYDmnInkuK3pl7Tku7bkuYvlkI7vvIzmj5DkvpvmiafooYzoh6rlrprkuYnkuK3pl7Tku7bnmoTlip/og73jgIJcXG5cXG4jIyMgZGV2U2VydmVyLmFsbG93ZWRIb3N0c1xcblxcbuWFgeiuuOa3u+WKoOeZveWQjeWNleacjeWKoe+8jOWFgeiuuOS4gOS6m+W8gOWPkeacjeWKoeWZqOiuv+mXruOAglxcblxcbmBgYFxcbm1vZHVsZS5leHBvcnRzID0ge1xcbiAgLy8uLi5cXG4gIGRldlNlcnZlcjoge1xcbiAgICBhbGxvd2VkSG9zdHM6IFtcXG4gICAgICAnaG9zdC5jb20nLFxcbiAgICAgICdzdWJkb21haW4uaG9zdC5jb20nLFxcbiAgICAgICdzdWJkb21haW4yLmhvc3QuY29tJyxcXG4gICAgICAnaG9zdDIuY29tJ1xcbiAgICBdXFxuICB9XFxufTtcXG5gYGBcXG5cXG7mqKHku78gZGphbmdvIOeahCBBTExPV0VEX0hPU1RT77yM5LulIC4g5byA5aS055qE5YC85Y+v5Lul55So5L2c5a2Q5Z+f6YCa6YWN56ym44CCLmhvc3QuY29tIOWwhuS8muWMuemFjSBob3N0LmNvbSwgd3d3Lmhvc3QuY29tIOWSjCBob3N0LmNvbSDnmoTku7vkvZXlhbbku5blrZDln5/lkI3jgIJcXG5cXG5gYGBcXG5tb2R1bGUuZXhwb3J0cyA9IHtcXG4gIC8vLi4uXFxuICBkZXZTZXJ2ZXI6IHtcXG4gICAgLy8g6L+Z5a6e546w5LqG5LiO56ys5LiA5Liq56S65L6L55u45ZCM55qE5pWI5p6c77yMXFxuICAgIC8vIOWmguaenOaWsOeahOWtkOWfn+WQjemcgOimgeiuv+mXriBkZXYgc2VydmVy77yMXFxuICAgIC8vIOWImeaXoOmcgOabtOaWsOaCqOeahOmFjee9rlxcbiAgICBhbGxvd2VkSG9zdHM6IFtcXG4gICAgICAnLmhvc3QuY29tJyxcXG4gICAgICAnaG9zdDIuY29tJ1xcbiAgICBdXFxuICB9XFxufTtcXG5gYGBcXG5cXG4jIyMgZGV2U2VydmVyLmNsaWVudExvZ0xldmVsXFxuXFxuYHN0cmluZzogJ25vbmUnIHwgJ2luZm8nIHwgJ2Vycm9yJyB8ICd3YXJuaW5nJ2BcXG5cXG7lvZPkvb/nlKjlhoXogZTmqKHlvI8oaW5saW5lIG1vZGUp5pe277yM5Lya5Zyo5byA5Y+R5bel5YW3KERldlRvb2xzKeeahOaOp+WItuWPsChjb25zb2xlKeaYvuekuua2iOaBr++8jOS+i+Wmgu+8muWcqOmHjeaWsOWKoOi9veS5i+WJje+8jOWcqOS4gOS4qumUmeivr+S5i+WJje+8jOaIluiAhSDmqKHlnZfng63mm7/mjaIoSG90IE1vZHVsZSBSZXBsYWNlbWVudCkg5ZCv55So5pe244CC6buY6K6k5YC85pivIGluZm/jgIJcXG5cXG5kZXZTZXJ2ZXIuY2xpZW50TG9nTGV2ZWwg5Y+v6IO95Lya5pi+5b6X5b6I57mB55CQ77yM5L2g5Y+v5Lul6YCa6L+H5bCG5YW26K6+572u5Li6ICdub25lJyDmnaXlhbPpl60gbG9n44CCXFxuXFxuYGBgXFxubW9kdWxlLmV4cG9ydHMgPSB7XFxuICAvLy4uLlxcbiAgZGV2U2VydmVyOiB7XFxuICAgIGNsaWVudExvZ0xldmVsOiAnbm9uZSdcXG4gIH1cXG59O1xcbmBgYFxcblxcbiMjIyBkZXZTZXJ2ZXIuY29sb3IgIC0g5Y+q55So5LqO5ZG95Luk6KGM5bel5YW3KENMSSlcXG5cXG7lj6rlnKjnu4jnq6/kuIvlkK/nlKjvvIzlkK/nlKgv56aB55So5o6n5Yi25Y+w55qE5b2p6Imy6L6T5Ye644CCXFxuXFxuYGBgXFxud2VicGFjay1kZXYtc2VydmVyIC0tY29sb3JcXG5gYGBcXG5cXG4jIyMgZGV2U2VydmVyLmNvbXByZXNzXFxuXFxuYGJvb2xlYW5gXFxuXFxu5LiA5YiH5pyN5Yqh6YO95byA5ZCvZ3ppcOWOi+e8qeOAglxcblxcbmBgYFxcbm1vZHVsZS5leHBvcnRzID0ge1xcbiAgLy8uLi5cXG4gIGRldlNlcnZlcjoge1xcbiAgICBjb21wcmVzczogdHJ1ZVxcbiAgfVxcbn07XFxuYGBgXFxuXFxuIyMjIGRldlNlcnZlci5jb250ZW50QmFzZVxcblxcbmBib29sZWFuOiBmYWxzZSBzdHJpbmcgW3N0cmluZ10gbnVtYmVyYFxcblxcbuWRiuivieacjeWKoeWZqOS7juWTquS4quebruW9leS4reaPkOS+m+WGheWuueOAguWPquacieWcqOS9oOaDs+imgeaPkOS+m+mdmeaAgeaWh+S7tuaXtuaJjemcgOimgeOAgmRldlNlcnZlci5wdWJsaWNQYXRoIOWwhueUqOS6juehruWumuW6lOivpeS7juWTqumHjOaPkOS+myBidW5kbGXvvIzlubbkuJTmraTpgInpobnkvJjlhYjjgIJcXG5cXG7pu5jorqTmg4XlhrXkuIvvvIzlsIbkvb/nlKjlvZPliY3lt6XkvZznm67lvZXkvZzkuLrmj5DkvpvlhoXlrrnnmoTnm67lvZXjgILlsIblhbborr7nva7kuLogZmFsc2Ug5Lul56aB55SoIGNvbnRlbnRCYXNl44CCXFxuXFxuYGBgXFxubW9kdWxlLmV4cG9ydHMgPSB7XFxuICAvLy4uLlxcbiAgZGV2U2VydmVyOiB7XFxuICAgIGNvbnRlbnRCYXNlOiBwYXRoLmpvaW4oX19kaXJuYW1lLCAncHVibGljJylcXG4gIH1cXG59O1xcbmBgYFxcblxcbuS5n+WPr+S7peS7juWkmuS4quebruW9leaPkOS+m+WGheWuue+8mlxcblxcbmBgYFxcbm1vZHVsZS5leHBvcnRzID0ge1xcbiAgLy8uLi5cXG4gIGRldlNlcnZlcjoge1xcbiAgICBjb250ZW50QmFzZTogW3BhdGguam9pbihfX2Rpcm5hbWUsICdwdWJsaWMnKSwgcGF0aC5qb2luKF9fZGlybmFtZSwgJ2Fzc2V0cycpXVxcbiAgfVxcbn07XFxuYGBgXFxuXFxuIyMjIGRldlNlcnZlci5kaXNhYmxlSG9zdENoZWNrXFxuXFxuYGJvb2xlYW5gXFxuXFxu6K6+572u5Li6IHRydWUg5pe277yM5q2k6YCJ6aG557uV6L+H5Li75py65qOA5p+l44CC5LiN5bu66K6u6L+Z5qC35YGa77yM5Zug5Li65LiN5qOA5p+l5Li75py655qE5bqU55So56iL5bqP5a655piT5Y+X5YiwIEROUyDph43mlrDov57mjqXmlLvlh7vjgIJcXG5cXG5gYGBcXG5tb2R1bGUuZXhwb3J0cyA9IHtcXG4gIC8vLi4uXFxuICBkZXZTZXJ2ZXI6IHtcXG4gICAgZGlzYWJsZUhvc3RDaGVjazogdHJ1ZVxcbiAgfVxcbn07XFxuYGBgXFxuXFxuIyMjIGRldlNlcnZlci5maWxlbmFtZVxcblxcbmBzdHJpbmdgXFxuXFxu5ZyoIGxhenkgbW9kZSjmg7DmgKfmqKHlvI8pIOS4re+8jOatpOmAiemhueWPr+WHj+Wwkee8luivkeOAgiDpu5jorqTlnKggbGF6eSBtb2RlKOaDsOaAp+aooeW8jynvvIzmr4/kuKror7fmsYLnu5Pmnpzpg73kvJrkuqfnlJ/lhajmlrDnmoTnvJbor5HjgILkvb/nlKggZmlsZW5hbWXvvIzlj6/ku6Xlj6rlnKjmn5DkuKrmlofku7booqvor7fmsYLml7bnvJbor5HjgIJcXG5cXG7lpoLmnpwgb3V0cHV0LmZpbGVuYW1lIOiuvue9ruS4uiAnYnVuZGxlLmpzJyDvvIxkZXZTZXJ2ZXIuZmlsZW5hbWUg55So5rOV5aaC5LiL77yaXFxuXFxuYGBgXFxubW9kdWxlLmV4cG9ydHMgPSB7XFxuICAvLy4uLlxcbiAgb3V0cHV0OiB7XFxuICAgIGZpbGVuYW1lOiAnYnVuZGxlLmpzJ1xcbiAgfSxcXG4gIGRldlNlcnZlcjoge1xcbiAgICBsYXp5OiB0cnVlLFxcbiAgICBmaWxlbmFtZTogJ2J1bmRsZS5qcydcXG4gIH1cXG59O1xcbmBgYFxcblxcbueOsOWcqOWPquacieWcqOivt+axguS6hmJ1bmRsZS5qc+aXtu+8jOaJjeS8muWOu+e8luivkWJ1bmRsZeOAglxcblxcbiMjIOaAu+e7k1xcblxcbndlYnBhY2vnmoTlip/og73noa7lrp7lvojlvLrlpKfvvIzlj6/ku6Xpkojlr7nku6PnoIHov5vooYzlkITnp43mk43kvZzvvIzmnIDnu4jnlJ/miJDlh7rlj6/ku6XpgILlupTlkITnp43lnLrmma/nmoTku6PnoIHvvIzkvb/lvIDlj5Hlkozpg6jnvbLlvbvlupXliIbnprvlvIDmnaXvvIzlvIDlj5HogIXlj6/ku6Xmm7TliqDkuJPms6jpobnnm67jgIJcXG5cIixcImZyb250bWF0dGVyXCI6XCJ0aXRsZTog5L2/55Sod2VicGFjay1kZXYtc2VydmVy5p2l55uR5ZCs6aG555uu5Y+Y5YyWXFxuZGF0ZTogMjAxOS0xMS0yNSAxNzo1NDozNlxcbnRhZ3M6IFZ1ZVxcbmNhdGVnb3JpZXM6IFZ1ZVwifSIsIm1vZHVsZS5leHBvcnRzID0ge1wiYXR0cmlidXRlc1wiOntcInRpdGxlXCI6XCLkvb/nlKh3ZWJwYWNr5omT5YyFVnVl5ZKMVHlwZVNjcmlwdFwiLFwiZGF0ZVwiOlwiMjAxOS0xMC0yMlQxNToyMDowOC4wMDBaXCIsXCJ0YWdzXCI6W1wiVnVlXCIsXCJXZWJwYWNrXCIsXCJUeXBlU2NyaXB0XCJdLFwiY2F0ZWdvcmllc1wiOlwiV2ViXCJ9LFwiYm9keVwiOlwiXFxu5pys5paH5bCG5Lya5LuL57uN5aaC5L2V6YCa6L+HV2VicGFja+WwhuWfuuS6jlR5cGVTY3JpcHTnmoRWdWXpobnnm67ov5vooYzmiZPljIXjgIJcXG5cXG48IS0tIG1vcmUgLS0+XFxuXFxuIyMgd2VicGFja+WfuuehgOmFjee9rlxcblxcbummluWFiOWIm+W7uuS4gOS4quWfuuacrOeahHdlYnBhY2suY29uZmlnLmpz5paH5Lu2OlxcblxcbmBgYFxcbmNvbnN0IHBhdGggPSByZXF1aXJlKCAncGF0aCcgKTtcXG5cXG5tb2R1bGUuZXhwb3J0cyA9IHtcXG4gICAgZW50cnk6IHtcXG4gICAgICAgIGluZGV4OiBcXFwiLi9zcmMvaW5kZXgudHNcXFwiLFxcbiAgICB9LFxcbiAgICBvdXRwdXQ6IHtcXG4gICAgICAgIHBhdGg6IHBhdGgucmVzb2x2ZSggX19kaXJuYW1lLCAnZGlzdCcgKSxcXG4gICAgICAgIHB1YmxpY1BhdGg6ICcvZGlzdC8nLFxcbiAgICAgICAgZmlsZW5hbWU6ICdbbmFtZV0uanMnXFxuICAgIH0sXFxuICAgIGRldnRvb2w6ICdpbmxpbmUtc291cmNlLW1hcCcsXFxuICAgIG1vZGU6ICdkZXZlbG9wbWVudCcsXFxuICAgIG1vZHVsZToge1xcbiAgICAgICAgcnVsZXM6IFtcXG4gICAgICAgIF1cXG4gICAgfSxcXG4gICAgcmVzb2x2ZToge1xcbiAgICB9XFxufTtcXG5gYGBcXG5cXG7mraTml7Z3ZWJwYWNr5Y+q6IO95bCGc3JjL2luZGV4LnRz5paH5Lu255u05o6l6L6T5Ye65Li6aW5kZXguanPvvIzmiJHku6zpnIDopoHmt7vliqB0eXBlc2NyaXB055qEbG9hZGVy77yM6L+b6KGMdHlwZXNjcmlwdOeahOi9rOaNouOAglxcblxcbuWwhuS7peS4i+S7o+eggeWKoOWFpXJ1bGVz6IqCOlxcblxcbmBgYFxcbntcXG4gICAgdGVzdDogL1xcXFwudHM/JC8sXFxuICAgIGxvYWRlcjogJ3RzLWxvYWRlcicsXFxuICAgIGV4Y2x1ZGU6IC9ub2RlX21vZHVsZXMvLFxcbn0sXFxuYGBgXFxuXFxu6YCa6L+HdHMtbG9hZGVy6L+b6KGMdHPmlofku7bnmoTovazmjaLvvIzmiJHku6zov5jpnIDopoHliJvlu7p0eXBlc2NyaXB055qE5LiA5Liq6YWN572u5paH5Lu244CCXFxuXFxuIyMg5re75YqgdHlwZXNjcmlwdOaUr+aMgVxcblxcbuWIm+W7unRzY29uZmlnLmpzb25cXG5cXG5gYGBcXG57XFxuICAgIFxcXCJjb21waWxlck9wdGlvbnNcXFwiOiB7XFxuICAgICAgICBcXFwib3V0RGlyXFxcIjogXFxcIi4vZGlzdC9cXFwiLFxcbiAgICAgICAgXFxcInNvdXJjZU1hcFxcXCI6IHRydWUsXFxuICAgICAgICBcXFwic3RyaWN0XFxcIjogdHJ1ZSxcXG4gICAgICAgIFxcXCJtb2R1bGVcXFwiOiBcXFwiY29tbW9uanNcXFwiLFxcbiAgICAgICAgXFxcIm1vZHVsZVJlc29sdXRpb25cXFwiOiBcXFwibm9kZVxcXCIsXFxuICAgICAgICBcXFwidGFyZ2V0XFxcIjogXFxcImVzNVxcXCIsXFxuICAgICAgICBcXFwic2tpcExpYkNoZWNrXFxcIjogdHJ1ZSxcXG4gICAgICAgIFxcXCJlc01vZHVsZUludGVyb3BcXFwiOiB0cnVlLFxcbiAgICAgICAgXFxcImV4cGVyaW1lbnRhbERlY29yYXRvcnNcXFwiOiB0cnVlXFxuICAgIH0sXFxuICAgIFxcXCJpbmNsdWRlXFxcIjogW1xcbiAgICAgICAgXFxcIi4vc3JjLyoqLypcXFwiXFxuICAgIF1cXG59XFxuYGBgXFxuXFxu6L+Y6ZyA6KaB5Zyod2VicGFja+eahOmFjee9ruS4rea3u+WKoHRz5paH5Lu277yM5ZyocmVzb2x2ZeiKguS4rea3u+WKoDpcXG5cXG5gYGBcXG5leHRlbnNpb25zOiBbICcudHMnLCAnLmpzJyBdLFxcbmBgYFxcblxcbuaIkeS7rOaMh+WumnRz6L2s5o2i5Ye655qEanPku6PnoIHmmK9lczXnmoTjgIJcXG5cXG7ov5nkuKrml7blgJnmiJHku6zov5DooYx3ZWJwYWNr77yM5bCG5Lya55yL5Yiw5q2j5bi455qE6L2s5o2i6L6T5Ye644CCXFxuXFxuYGBgXFxuSGFzaDogYzNhMGFlMmM0NzAzMmRlMTJlZWNcXG5WZXJzaW9uOiB3ZWJwYWNrIDQuNDEuMFxcblRpbWU6IDE4ODBtc1xcbkJ1aWx0IGF0OiAxMC8yMi8yMDE5IDM6NDA6NTkgUE1cXG4gICBBc3NldCAgICAgIFNpemUgIENodW5rcyAgICAgICAgICAgICBDaHVuayBOYW1lc1xcbmluZGV4LmpzICAxMS44IEtpQiAgIGluZGV4ICBbZW1pdHRlZF0gIGluZGV4XFxuRW50cnlwb2ludCBpbmRleCA9IGluZGV4LmpzXFxuWy4vc3JjL2luZGV4LnRzXSAyNjkgYnl0ZXMge2luZGV4fSBbYnVpbHRdXFxuYGBgXFxuXFxu5YWl5Y+j5paH5Lu25bCx5pivaW5kZXgudHPkuobvvIzkuYvlkI7miJHku6zlsLHmraPluLjnmoTlnKhpbmRleC50c+S4reWGmeaIkeS7rOeahOS7o+egge+8jHdlYnBhY2vlsLHkvJrmn6Xmib7miYDmnInnmoTkvp3otZbvvIzlubbmiZPljIXovpPlh7rliLBpbmRleC5qc+S4reOAglxcblxcbiMjIOa3u+WKoFZ1ZeWNleaWh+S7tueahOaUr+aMgVxcblxcblZ1ZeWNleaWh+S7tue7hOS7tihTRkMp6KeE6IyD5piv5oyH5Zyo5LiA5Liq5paH5Lu25Lit77yM5o+Q5L6baHRtbOOAgWNzc+WSjHNjcmlwdOS7o+egge+8jOS4ieiAheWMheWQq+WcqOmhtue6p+ivreiogOWdlyBgPHRlbXBsYXRlPmDjgIFgPHNjcmlwdD5gIOWSjCBgPHN0eWxlPmBcXG4g5Lit77yM6L+Y5YWB6K645re75Yqg5Y+v6YCJ55qE6Ieq5a6a5LmJ5Z2X44CCXFxuXFxu6L+Z5piv5LiA5Liq566A5Y2V55qEdnVl5Y2V5paH5Lu25L6L5a2QOlxcblxcbmBgYFxcbjx0ZW1wbGF0ZT5cXG4gIDxkaXYgY2xhc3M9XFxcImV4YW1wbGVcXFwiPnt7IG1zZyB9fTwvZGl2PlxcbjwvdGVtcGxhdGU+XFxuXFxuPHNjcmlwdD5cXG5leHBvcnQgZGVmYXVsdCB7XFxuICBkYXRhICgpIHtcXG4gICAgcmV0dXJuIHtcXG4gICAgICBtc2c6ICdIZWxsbyB3b3JsZCEnXFxuICAgIH1cXG4gIH1cXG59XFxuPC9zY3JpcHQ+XFxuXFxuPHN0eWxlPlxcbi5leGFtcGxlIHtcXG4gIGNvbG9yOiByZWQ7XFxufVxcbjwvc3R5bGU+XFxuXFxuPGN1c3RvbTE+XFxuICBUaGlzIGNvdWxkIGJlIGUuZy4gZG9jdW1lbnRhdGlvbiBmb3IgdGhlIGNvbXBvbmVudC5cXG48L2N1c3RvbTE+XFxuYGBgXFxuXFxu5oiR5Lus6YCa6L+HdnVlLWxvYWRlcuadpeino+aekOivpeaWh+S7tu+8jOaPkOWPluavj+S4gOS4quivreiogOWdl++8jOWmguaciemcgOimge+8jOS8muS8oOmAkue7meWFtuS7lmxvYWRlcui/m+ihjOWkhOeQhu+8jOacgOWQjue7hOijheS4uuS4gOS4qkVTIE1vZHVsZeOAglxcblxcbuaIkeS7rOWcqHdlYnBhY2vnmoRydWxlc+iKguS4rea3u+WKoHZ1ZS1sb2FkZXI6XFxuXFxuYGBgXFxue1xcbiAgdGVzdDogL1xcXFwudnVlJC8sXFxuICBsb2FkZXI6ICd2dWUtbG9hZGVyJyxcXG4gIG9wdGlvbnM6IHtcXG4gICAgbG9hZGVyczoge1xcbiAgICAgIC8vIFNpbmNlIHNhc3MtbG9hZGVyICh3ZWlyZGx5KSBoYXMgU0NTUyBhcyBpdHMgZGVmYXVsdCBwYXJzZSBtb2RlLCB3ZSBtYXBcXG4gICAgICAvLyB0aGUgXFxcInNjc3NcXFwiIGFuZCBcXFwic2Fzc1xcXCIgdmFsdWVzIGZvciB0aGUgbGFuZyBhdHRyaWJ1dGUgdG8gdGhlIHJpZ2h0IGNvbmZpZ3MgaGVyZS5cXG4gICAgICAvLyBvdGhlciBwcmVwcm9jZXNzb3JzIHNob3VsZCB3b3JrIG91dCBvZiB0aGUgYm94LCBubyBsb2FkZXIgY29uZmlnIGxpa2UgdGhpcyBuZWNlc3NhcnkuXFxuICAgICAgJ3Njc3MnOiAndnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyIXNhc3MtbG9hZGVyJyxcXG4gICAgICAnc2Fzcyc6ICd2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXIhc2Fzcy1sb2FkZXI/aW5kZW50ZWRTeW50YXgnLFxcbiAgICB9XFxuICAgIC8vIG90aGVyIHZ1ZS1sb2FkZXIgb3B0aW9ucyBnbyBoZXJlXFxuICB9XFxufSxcXG5gYGBcXG5cXG4jIyDlpoLmnpx2dWXmmK90eXBlc2NyaXB05Luj56CB77yfXFxuXFxu5YW25a6e6L+Z5b6I566A5Y2V77yMdHMtbG9hZGVy5pyJ5LiA5LiqYXBwZW5kVHNTdWZmaXhUb+eahOWKn+iDve+8jOWPr+S7pee7meafkOS4quaWh+S7tuWinuWKoC50c+eahOWQjue8gO+8jOS7juiAjOivhuWIq+i/meS4quaWh+S7tuS4unRz5paH5Lu244CCXFxuXFxuYGBgXFxue1xcbiAgdGVzdDogL1xcXFwudHN4PyQvLFxcbiAgbG9hZGVyOiAndHMtbG9hZGVyJyxcXG4gIGV4Y2x1ZGU6IC9ub2RlX21vZHVsZXMvLFxcbiAgb3B0aW9uczoge1xcbiAgICBhcHBlbmRUc1N1ZmZpeFRvOiBbL1xcXFwudnVlJC9dLFxcbiAgfVxcbn0sXFxuYGBgXFxuXFxu5oiR5Lus6L+Y6ZyA6KaB5Zyo6aG555uu5Lit5re75Yqg5LiA5LiqdnVlLXNoaW0uZC50c+adpeiuqXRz5q2j56Gu55qE6K+G5YirdnVl44CCXFxuXFxuYGBgXFxuZGVjbGFyZSBtb2R1bGUgJyoudnVlJyB7XFxuICBpbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcXG4gIGV4cG9ydCBkZWZhdWx0IFZ1ZVxcbn1cXG5gYGBcXG5cXG7ov5jpnIDopoHlnKh3ZWJwYWNr55qEcmVzb2x2ZeiKgui/veWKoHZ1ZeeahOWQjue8gDpcXG5cXG5gYGBcXG5yZXNvbHZlOiB7XFxuICBleHRlbnNpb25zOiBbICcudHN4JywgJy50cycsICcuanMnICwgJy52dWUnXSxcXG4gIGFsaWFzOiB7XFxuICAgICd2dWUnOiAndnVlL2Rpc3QvdnVlLmpzJ1xcbiAgfVxcbn0sXFxuYGBgXFxuXFxudnVlLWxvYWRlcueOsOWcqOmcgOimgeaJi+WKqOWkhOeQhuS4gOS4i+aPkuS7tu+8jOWcqHdlYnBhY2suY29uZmlnLmpz55qE5aS06YOo5a+85YWldnVlLWxvYWRlcu+8jOW5tuWcqHBsdWdpbnPoioLliJvlu7rlr7nosaHjgIJcXG5cXG5gYGBcXG5jb25zdCB7IFZ1ZUxvYWRlclBsdWdpbiB9ID0gcmVxdWlyZSgndnVlLWxvYWRlcicpXFxuXFxuLi4uLi4uLlxcblxcbnBsdWdpbnM6IFtcXG4gIG5ldyBWdWVMb2FkZXJQbHVnaW4oKVxcbl0sXFxuYGBgXFxuXFxu5ZCm5YiZ5bCG5LiN6IO95q2j56Gu5bel5L2c44CCXFxuXFxu5q2k5pe25bey57uP5a6M5oiQ5LqGd2VicGFjayt2dWUrdHlwZXNjcmlwdOeahOWFqOmDqOW3peS9nOOAglxcblxcbmBgYFxcbkhhc2g6IDMyMGQ0ZWQzZjU1ZjUyODcyNjk0XFxuVmVyc2lvbjogd2VicGFjayA0LjQxLjBcXG5UaW1lOiAyNDk0bXNcXG5CdWlsdCBhdDogMTAvMjIvMjAxOSA0OjAwOjUwIFBNXFxuICAgICAgQXNzZXQgICAgICAgU2l6ZSAgICBDaHVua3MgICAgICAgICAgICAgQ2h1bmsgTmFtZXNcXG4gIGJ1bmRsZS5qcyAgIDEuMTIgTWlCICAgIGJ1bmRsZSAgW2VtaXR0ZWRdICBidW5kbGVcXG5lbGVjdHJvbi5qcyAgIDEyLjIgS2lCICBlbGVjdHJvbiAgW2VtaXR0ZWRdICBlbGVjdHJvblxcbiBpbmRleC5odG1sICAxOTQgYnl0ZXMgICAgICAgICAgICBbZW1pdHRlZF1cXG5FbnRyeXBvaW50IGJ1bmRsZSA9IGJ1bmRsZS5qc1xcbkVudHJ5cG9pbnQgZWxlY3Ryb24gPSBlbGVjdHJvbi5qc1xcblsuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPyEuL3NyYy9hcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NWVmNDg5NTgmcmVsPXN0eWxlc2hlZXQlMkZzY3NzJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZdIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWI/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NyYy9hcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NWVmNDg5NTgmcmVsPXN0eWxlc2hlZXQlMkZzY3NzJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSYgNTQyIGJ5dGVzIHtidW5kbGV9IFtidWlsdF1cXG5bLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8hLi9zcmMvQ29tcG9uZW50cy9BYm91dC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXSAuL25vZGVfbW9kdWxlcy90cy1sb2FkZXI/P3JlZi0tMSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYj8/dnVlLWxvYWRlci1vcHRpb25zIS4vc3JjL0NvbXBvbmVudHMvQWJvdXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJiAzMDUgYnl0ZXMge2J1bmRsZX0gW2J1aWx0XVxcblsuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPyEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8hLi9zcmMvQ29tcG9uZW50cy9BYm91dC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YWE5Yzk1YTYmXSAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWI/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NyYy9Db21wb25lbnRzL0Fib3V0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1hYTljOTVhNiYgMjM1IGJ5dGVzIHtidW5kbGV9IFtidWlsdF1cXG5bLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL2FwcC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NWVmNDg5NTgmc2NvcGVkPXRydWUmXSAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWI/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NyYy9hcHAudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTVlZjQ4OTU4JnNjb3BlZD10cnVlJiA1ODkgYnl0ZXMge2J1bmRsZX0gW2J1aWx0XVxcblsuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL2FwcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01ZWY0ODk1OCZyZWw9c3R5bGVzaGVldCUyRnNjc3MmbGFuZz1zY3NzJnNjb3BlZD10cnVlJl0gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciEuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zcmMvYXBwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTVlZjQ4OTU4JnJlbD1zdHlsZXNoZWV0JTJGc2NzcyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmIDEuNjQgS2lCIHtidW5kbGV9IFtidWlsdF1cXG5bLi9zcmMvQ29tcG9uZW50cy9BYm91dC52dWVdIDEuMDYgS2lCIHtidW5kbGV9IFtidWlsdF1cXG5bLi9zcmMvQ29tcG9uZW50cy9BYm91dC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXSAzNTAgYnl0ZXMge2J1bmRsZX0gW2J1aWx0XVxcblsuL3NyYy9Db21wb25lbnRzL0Fib3V0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1hYTljOTVhNiZdIDIwMyBieXRlcyB7YnVuZGxlfSBbYnVpbHRdXFxuWy4vc3JjL2FwcC52dWVdIDEuMDggS2lCIHtidW5kbGV9IFtidWlsdF1cXG5bLi9zcmMvYXBwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTVlZjQ4OTU4JnJlbD1zdHlsZXNoZWV0JTJGc2NzcyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXSA3MTYgYnl0ZXMge2J1bmRsZX0gW2J1aWx0XVxcblsuL3NyYy9hcHAudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTVlZjQ4OTU4JnNjb3BlZD10cnVlJl0gMjA3IGJ5dGVzIHtidW5kbGV9IFtidWlsdF1cXG5bLi9zcmMvZW50cnkudHNdIDUzOCBieXRlcyB7YnVuZGxlfSBbYnVpbHRdXFxuWy4vc3JjL21haW4udHNdIDEuMTEgS2lCIHtlbGVjdHJvbn0gW2J1aWx0XVxcblsuL3NyYy9yb3V0ZS50c10gMS4zNSBLaUIge2J1bmRsZX0gW2J1aWx0XVxcbmBgYFxcblwiLFwiZnJvbnRtYXR0ZXJcIjpcInRpdGxlOiDkvb/nlKh3ZWJwYWNr5omT5YyFVnVl5ZKMVHlwZVNjcmlwdFxcbmRhdGU6IDIwMTktMTAtMjIgMTU6MjA6MDhcXG50YWdzOiBbXFxuICAgIFZ1ZSxcXG4gICAgV2VicGFjayxcXG4gICAgVHlwZVNjcmlwdFxcbl1cXG5jYXRlZ29yaWVzOiBXZWJcIn0iLCJtb2R1bGUuZXhwb3J0cyA9IHtcImF0dHJpYnV0ZXNcIjp7XCJ0aXRsZVwiOlwi5L2/55So5Lyq5YWD57Sg5Yib5bu65LiA5Liq5ZyG54K5XCIsXCJkYXRlXCI6XCIyMDIwLTAxLTAxVDExOjExOjEyLjAwMFpcIixcInRhZ3NcIjpcIkNTU1wiLFwiY2F0ZWdvcmllc1wiOlwiV2ViXCJ9LFwiYm9keVwiOlwiXFxu5oiR5pyA5pep5o6l6Kem5YiwQ1NT5Lit55qE5Lyq5YWD57Sg5piv5Zyo5LiA5qyh5YaZ6IOM5pmv5qih57OK55qE5pe25YCZ77yMQ1NT5Lit55qEYmx1cuS8muaooeeziuS4i+mdouaJgOacieeahOWFg+e0oO+8jOS9huaYr+WPr+S7pemAmui/h+S8quWFg+e0oOWcqGJlZm9yZeS4reWFiOaooeeziu+8jOi/meagt+S4i+WxguaYr+ayoeacieS7u+S9leWFg+e0oOeahO+8jOiHqueEtuS5n+S4jeS8muacieWFg+e0oOiiq+aooeeziuOAglxcblxcbuS8quWFg+e0oOWwseWmguWQjOWug+eahOWQjeWtl+S4gOagt++8jOaYr+WBh+eahOWFg+e0oO+8jOWPquaYr0NTU+W8leaTjuWcqOaOkueJiOeahOaXtuWAmeWIm+W7uuWHuuadpeeahO+8jOWcqERPTeagkeS4reaYr+S4jeWtmOWcqOeahO+8jOaJgOS7pWphdmFzY3JpcHTmmK/msqHlip7ms5Xmk43kvZzkvKrlhYPntKDnmoTjgILkvKrlhYPntKDliIbkuLpiZWZvcmXlkoxhZnRlcu+8jOWPr+S7peWcqOWFg+e0oOeahOWJjemdouaIluiAheWQjumdouWIm+W7uuS4gOS4quWBh+eahOWFg+e0oO+8jOS8quWFg+e0oOmAieaLqeWZqOeahOagh+W/l+espuWPt+aYr2A6OmDjgIJcXG5cXG4xLiBgZGl2OjpiZWZvcmVgIOWcqGRpduWFg+e0oOeahOWJjemdouWIm+W7uuS4gOS4quWFg+e0oO+8jOmFjeWQiGNvbnRlbnTlsZ7mgKfkuIDotbfkvb/nlKjjgIJcXG4yLiBgZGl2OjphZnRlcmAg5ZyoZGl25YWD57Sg55qE5ZCO6Z2i5Yib5bu65LiA5Liq5YWD57Sg77yM6YWN5ZCIY29udGVudOWxnuaAp+S4gOi1t+S9v+eUqOOAglxcblxcbiFbMTY1N10oMTYtNTctMzDlsY/luZXmiKrlm74ucG5nKVxcblxcbuS9v+eUqOS8quWFg+e0oOmAieaLqeWZqOmcgOimgeazqOaEj+S4gOeCueeahOaYr++8jOW/hemhu+S9v+eUqGNvbnRlbnTlsZ7mgKfvvIzlkKbliJnlsIbkuI3otbfku7vkvZXkvZznlKjjgIJcXG5cXG7kvKrlhYPntKDpgInmi6nlmajnlJ/mlYjku6XlkI7vvIzlj6/ku6XlnKhET03kuK3nnIvliLA6OmJlZm9yZeaIluiAhTo6YWZ0ZXLvvIzov5nph4zmj5DkvpvkuIDkuKrkvovlrZDjgIJcXG5cXG5odG1s6YOo5YiG77yaXFxuYGBgXFxuPGJvZHk+XFxuICAgIDxkaXY+XFxuICAgICAgICBUZXh0XFxuICAgIDwvZGl2PlxcbjwvYm9keT5cXG5gYGBcXG5cXG5jc3Ppg6jliIbvvJpcXG5gYGBcXG5kaXY6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiVGhpcyBpcyBiZWZvcmUgVGV4dCwgXFxcIjtcXG59XFxuXFxuZGl2OjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiLCBUaGlzIGlzIGFmdGVyIFRleHQuXFxcIjtcXG59XFxuYGBgXFxuXFxu5q2k5pe26aG16Z2i5LiK5Lya55yL5Yiw6L6T5Ye66L+Z5LmI5LiA5Y+l6K+d77yMYFRoaXMgIGlzIGJlZm9yZSBUZXh0LCBUZXh0ICwgVGhpcyBpcyBhZnRlciBUZXh0LmDvvIzlubbkuJTkvb/nlKjpvKDmoIflj6rog73pgInmi6nliLDmnIDkuK3pl7TnmoRUZXh05paH5pys44CCXFxuXFxuIVsxNjU3XSgxNi01Ny0xNuWxj+W5leaIquWbvi5wbmcpXFxuXFxu5Luj56CB5Y+v5Lul54K55Ye7W+i/memHjF0oaHR0cHM6Ly9qc2ZpZGRsZS5uZXQvanVzdGZvcmx4ei9zaGcyMWt2Yi8xOC8p5p+l55yL44CCXFxuXFxu5LuK5aSp5YaZ6L+Z56+H5paH56ug5ZGi77yM5piv5Zug5Li65LuK5aSp5oiR5Zyo5a6e546waGV4b+eahE5leHTkuLvpopjvvIznnIvliLDlroPlnKjliJfooajkuK3kvb/nlKhhZnRlcuWIm+W7uuS6huS4gOS4quWwj+WchueCue+8jOW5tuS4lOaIkemBh+WIsOS6huS4gOS4qumXrumimO+8jOaJgOS7peWGmei/meevh+aWh+eroOiusOW9leS4gOS4i+OAglxcblxcbk5leHTnlKjnmoTmmK/mta7liqjluIPlsYDmnaXlrp7njrDnmoTvvIzogIzmiJHlhrPlrppmbGV45LiA5oqK5qKt77yM5pW05L2T5biD5bGA5piv5Z6C55u055qEZmxleO+8jOmmlumhteOAgeWIhuexu+etieWIl+ihqOWGhemDqOaYr+eUqOawtOW5s+eahGlubGluZS1mbGV45a6e546w55qE77yM5pyA5bem6L655piv5Zu+5qCH77yM5p2l6IeqZm9ydGF3ZXNvbWXvvIzkuK3pl7TnmoTmlofmnKzkvb/nlKhzcGFu5YyF6KO55LiA5LiL77yM5a6e546w5bem5a+56b2Q77yM54S25ZCO6YCa6L+H5Lyq5YWD57Sg5Zyo5pyA5Y+z6L655Yib5bu65LiA5Liq5bCP5ZyG54K577yM6K6+572uYeWFg+e0oOeahOWuveW6puS4ujEwMCXvvIzlsLHlj6/ku6Xlrp7njrDlnIbngrnlnKjmnIDlj7PovrnjgIJcXG5cXG7lnZHlsLHmmK/lnKjov5nph4zpgYfliLDnmoTvvIzlpoLmnpxh5YWD57Sg55qE5a695bqm6K6+572u5Li6MTAwJe+8jOS8quWFg+e0oOWIm+W7uueahOWwj+WchueCueWwseS4jeiDveWujOWFqOaYvuekuu+8jOWwkTHlg4/ntKDmiJbogIXlpJox5YOP57Sg5bCx5Y+v5Lul5a6M5YWo5pi+56S644CC5pyA57uI55qE6Kej5Yaz5Yqe5rOV5piv57uZ5bCP5ZyG54K555qE5ZGo5Zu05aKe5Yqg5LqGMeWDj+e0oOeahHBhZGRpbmfop6PlhrPkuobvvIzkvYbmmK/ljp/lm6DkvY3nva7vvIzosIHnnIvliLDov5nnr4fmlofnq6DlubbkuJTmgbDlpb3nn6XpgZPljp/lm6DnmoTvvIzov5jor7fluK7lv5nor4Torrrlm57lpI3kuIDkuIvjgIJcXG5cXG5gYGBcXG48ZGl2IGlkPVxcXCJzaXRlLW5hdlxcXCI+XFxuICA8dWw+XFxuICAgIDxsaSB2LWZvcj1cXFwiaXRlbSBpbiBpdGVtc1xcXCIgdi1iaW5kOmtleT1cXFwiaXRlbS50aXRsZVxcXCI+XFxuICAgICAgPGEgdi1iaW5kOmhyZWY9XFxcIml0ZW0ubGlua1xcXCI+XFxuICAgICAgICA8c3BhbiBpZD1cXFwibWVudS1sZWZ0XFxcIiB2LWJpbmQ6Y2xhc3M9XFxcIml0ZW0uY2xhc3NcXFwiPjwvc3Bhbj5cXG4gICAgICAgIDxzcGFuIGlkPVxcXCJtZW51LXRleHRcXFwiPlxcbiAgICAgICAgICB7eyBpdGVtLnRpdGxlIH19XFxuICAgICAgICA8L3NwYW4+XFxuICAgICAgPC9hPlxcbiAgICA8L2xpPlxcbiAgPC91bD5cXG48L2Rpdj5cXG5gYGBcXG5cXG5gYGBcXG4jc2l0ZS1uYXYge1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBwYWRkaW5nOiAyMHB4IDA7XFxufVxcblxcbnVsIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDAgMDtcXG59XFxuXFxuI3NpdGUtbmF2IGxpIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuXFxuI3NpdGUtbmF2IGxpIGEge1xcbiAgcGFkZGluZzogNXB4IDBweDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQtY29sb3I7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xcbiAgdHJhbnNpdGlvbi1kZWxheTogMHM7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMTNweDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGNvbG9yOiAjNTU1O1xcbn1cXG5cXG4jc2l0ZS1uYXYgbGkgYTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjZjlmOWY5O1xcbn1cXG5cXG4jbWVudS1sZWZ0IHtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbn1cXG5cXG4jbWVudS10ZXh0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcblxcbiNzaXRlLW5hdiBsaSBhOjphZnRlciB7XFxuICBjb250ZW50OiAnICc7XFxuICBiYWNrZ3JvdW5kOiAjYmJiO1xcbiAgd2lkdGg6IDZweDtcXG4gIGhlaWdodDogNnB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgbWFyZ2luOiAwIDEwcHggMCAwO1xcbiAgbWluLXdpZHRoOiA2cHg7XFxuICBtaW4taGVpZ2h0OiA2cHg7XFxuICBtYXgtaGVpZ2h0OiA2cHg7XFxuICBtYXgtd2lkdGg6IDZweDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuYGBgXFxuXFxu5L2G5oiR5o+Q5Y+W5LqG5Z+65pys57uT5p6E5ZKMY3Nz77yMZGVtb+aYr+iDveWkn+ato+W4uOaYvuekuuWwj+WchueCueeahO+8jOS9huaYr+iHquW3seeahFZ1ZeWNtOS4jeiDveato+W4uOaYvuekuu+8jOWQjuadpeWPkeeOsOaYr2Rpc3BsYXnlhpnmiJDlnZfnuqflhYPntKDnlKjnmoRmbGV45LqG77yM5pS55oiQaW5saW5lLWZsZXjlsLHog73mraPluLjmmL7npLrkuobvvIzkvYbmmK/lnKjosIPmlbTlrr3luqbnmoTml7blgJnvvIzlsLHlj5HnjrDkuobkuIrpnaLnmoTpl67popjvvIzlroPlj4jkuI3mraPluLjmmL7npLrkuobvvIzlrp7lnKjop6PlhrPkuI3kuobkuobvvIzlsLHnlKhwYWRkaW5n5aSE55CG5LqG44CCXFxuXFxu5Y+C6ICD6LWE5paZ77yaIFvljYPlj6Tlo7nlj7ddKGh0dHBzOi8vZ2l0aHViLmNvbS9xaWFuZ3V5aWhhby9XZWIvYmxvYi9tYXN0ZXIvMDItQ1NTJUU1JTlGJUJBJUU3JUExJTgwLzEwLUNTUzMlRTklODAlODklRTYlOEIlQTklRTUlOTklQTglRTglQUYlQTYlRTglQTclQTMubWQpXFxuXCIsXCJmcm9udG1hdHRlclwiOlwidGl0bGU6IOS9v+eUqOS8quWFg+e0oOWIm+W7uuS4gOS4quWchueCuVxcbmRhdGU6IDIwMjAtMDEtMDEgMTE6MTE6MTJcXG50YWdzOiBDU1NcXG5jYXRlZ29yaWVzOiBXZWJcIn0iLCJtb2R1bGUuZXhwb3J0cyA9IHtcImF0dHJpYnV0ZXNcIjp7XCJ0aXRsZVwiOlwi5L+u5aSNQXJjaGxpbnV455qER3J1YlwiLFwiZGF0ZVwiOlwiMjAxNy0xMi0xOFQwOTo0NDo1NS4wMDBaXCIsXCJ0YWdzXCI6XCJMaW51eFwifSxcImJvZHlcIjpcIlxcbuWPiOWPjOWPkuWPleS4jeefpemBk+aAjuS5iOaQnueahO+8jOWwseaKimFyY2jnmoRncnVi57uZ5byE5Z2P5LqG77yM5L2G5piv5Zyo6YeN5paw5a6J6KOFZ3J1YueahOaXtuWAme+8jOaPkOekuuS6hui/meS5iOS4gOS4qumUmeivrzpcXG5cXG5gYGBcXG5Db3VsZCBub3QgcHJlcGFyZSBCb290IHZhcmlhYmxlOiBObyBzcGFjZSBsZWZ0IG9uIGRldmljZVxcbmBgYFxcblxcbuivtuS4jeWvueWViu+8jGJvb3TliIbljLrov5jmnIk4MDBN5ZGi77yM5oCO5LmI6L+Z5LmI5b+r5rKh56m66Ze05LqG77yM5qC555uu5b2V5Lmf5pyJNTJH5ZGi77yM5LqO5piv6LC35q2M5LqG5LiA5oqK77yM5om+5Yiw5LqG6Kej5Yaz5Yqe5rOVLlxcblxcbmBgYFxcbnN1ZG8gcm0gL3N5cy9maXJtd2FyZS9lZmkvZWZpdmFycy9kdW1wLSpcXG5gYGBcXG5cXG4+5paw5byPIGVmaXZhcmZzIChFRkkgVkFSaWFibGUgRmlsZVN5c3RlbSkg5o6l5Y+jIChDT05GSUdfRUZJVkFSX0ZTKSAtIOeUseS9jeS6jiAvc3lzL2Zpcm13YXJlL2VmaS9lZml2YXJzIOeahCBlZml2YXJmcyDlhoXmoLjmqKHlnZfmjILovb3kvb/nlKggLSDogIHlvI8gc3lzZnMtZWZpdmFycyDmjqXlj6PnmoTmm7/ku6Plk4HvvIzkuI3pmZDliLblj5jph4/mlbDmja7lpKflsI/vvIzmlK/mjIEgVUVGSSBTZWN1cmUgQm9vdCDlj5jph4/lubbooqvkuIrmuLjmjqjojZDkvb/nlKjjgILlnKgzLjjniYjnmoTlhoXmoLjkuK3lvJXlhaXvvIzmlrDnmoQgZWZpdmFyZnMg5qih5Z2X5ZyoMy4xMOeJiOWGheaguOS4reS7juaXp+eahCBlZml2YXJzIOWGheaguOaooeWdl+S4reWIhuemu+OAglxcblxcbuWIoOaOiWR1bXDmlofku7bvvIzlsLHlj6/ku6XmraPluLjlronoo4XkuobjgJDmnInngrnov7fvvIzkuI3lupTor6XllYrjgIJcXG5cXG7lj4LogIPotYTmlpkgOiBbVW5pZmllZF9FeHRlbnNpYmxlX0Zpcm13YXJlX0ludGVyZmFjZV0oaHR0cHM6Ly93aWtpLmFyY2hsaW51eC5vcmcvaW5kZXgucGhwL1VuaWZpZWRfRXh0ZW5zaWJsZV9GaXJtd2FyZV9JbnRlcmZhY2VfKCVFNyVBRSU4MCVFNCVCRCU5MyVFNCVCOCVBRCVFNiU5NiU4NykpXFxuXFxuXCIsXCJmcm9udG1hdHRlclwiOlwidGl0bGU6IOS/ruWkjUFyY2hsaW51eOeahEdydWJcXG5kYXRlOiAyMDE3LTEyLTE4IDA5OjQ0OjU1XFxudGFnczogTGludXhcIn0iLCJtb2R1bGUuZXhwb3J0cyA9IHtcImF0dHJpYnV0ZXNcIjp7XCJ0aXRsZVwiOlwi5YWl5Z2RdHlwZXNjcmlwdOS6hlwiLFwiZGF0ZVwiOlwiMjAxOS0wNi0xNVQyMzo0MTo0OS4wMDBaXCIsXCJ0YWdzXCI6XCJ0eXBlc2NyaXB0XCIsXCJjYXRlZ29yaWVzXCI6bnVsbH0sXCJib2R5XCI6XCJcXG7ku4rlpKnnrpfmmK/mraPlvI/lhaXlnZEgdHlwZXNjcmlwdCDkuobvvIzln7rkuo4gdnVlIOWGmeS6huesrOS4gOS4quWHveaVsO+8jOeUqOadpeWBmuS4gOS4quaWh+Wtl+aViOaenOOAglxcblxcbua8lOekuuaViOaenO+8mlxcbiFbXSjmt7HluqblvZXlsY9f6YCJ5oup5Yy65Z+fXzIwMTkwNjE1MjAyMDQ0LmdpZilcXG5cXG48IS0tIG1vcmUgLS0+XFxuXFxu5pW05L2T5oCd6Lev5ZCs566A5Y2V55qE77yM5bCx5piv55So5a6a5pe25Zmo5ZKM5bu25pe25Zmo5p2l5YGa77yM6YCa6L+H5a6a5pe25Zmo5p2l6Ze06ZqU55qE5aSE55CG5paH5pys77yM5bu25pe25Zmo5p2l5bu25ZCO5omA5pyJ55qE5pa55rOV44CCXFxuXFxuYGBgXFxuY2xhc3MgVGV4dEhhbmRsZSB7XFxuICAgIHByaXZhdGUgYWxsRHVyYXRpb246IG51bWJlciA9IDA7XFxuICAgIHB1YmxpYyBhcHBlbmRUZXh0KHRleHQ6IHN0cmluZykgOiB2b2lkIHtcXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPSA+e1xcbiAgICAgICAgICAgIGNvbnN0IExlZnRNZXNzYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0xlZnRNZXNzYWdlJyk7XFxuICAgICAgICAgICAgaWYgKExlZnRNZXNzYWdlID09PSBudWxsKSB7XFxuICAgICAgICAgICAgICAgIHJldHVybjtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgbGV0IGluZGV4OiBudW1iZXIgPSAwO1xcbiAgICAgICAgICAgIGNvbnN0IE1lc3NhZ2VUZXh0OiBzdHJpbmcgPSBMZWZ0TWVzc2FnZS5pbm5lclRleHQ7XFxuXFxuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm9ubHktYXJyb3ctZnVuY3Rpb25zXFxuICAgICAgICAgICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcXG4gICAgICAgICAgICAgICAgaWYgKChMZWZ0TWVzc2FnZSA9PT0gbnVsbCkgfHwgKGluZGV4KysgPT09IHRleHQubGVuZ3RoICsgMSkpIHtcXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjbGVhckludGVydmFsKGludGVydmFsKTtcXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICBMZWZ0TWVzc2FnZS5pbm5lclRleHQgPSBNZXNzYWdlVGV4dCArIHRleHQuc3Vic3RyaW5nKDAsIGluZGV4KTtcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIDMwMCk7XFxuICAgICAgICB9LFxcbiAgICAgICAgdGhpcy5BbGxEdXJhdGlvbik7XFxuICAgICAgICB0aGlzLkFsbER1cmF0aW9uICs9IHRleHQubGVuZ3RoICogMzAwICsgMTAwO1xcbiAgICB9XFxufVxcbmBgYFxcblxcbnR5cGVzY3JpcHTnoa7lrp7mjLrkuI3plJnnmoTvvIzlubPml7bpg73lnKjlhpnpnZnmgIHor63oqIDvvIzlpoJDKyvvvIzmiYDku6XlvZPmiJHlvIDlp4vlrabliqjmgIHor63oqIDnmoTml7blgJnvvIzlsLHkvJrop4nlvpfmsLTlnJ/kuI3mnI3vvIznjrDlnKhcXG7pgJrov4d0eXBlc2NyaXB05bCx5Y+v5Lul6K6p5oiR57un57ut5L2/55So6Z2Z5oCB6K+t6KiA55qE5byA5Y+R5pa55byP5p2l5YaZd2Vi77yM6ICM5LiU5Luj56CB5pu05a655piT55CG6Kej44CCXFxuXCIsXCJmcm9udG1hdHRlclwiOlwidGl0bGU6IOWFpeWdkXR5cGVzY3JpcHTkuoZcXG5kYXRlOiAyMDE5LTA2LTE1IDIzOjQxOjQ5XFxudGFnczogdHlwZXNjcmlwdFxcbmNhdGVnb3JpZXM6XCJ9IiwibW9kdWxlLmV4cG9ydHMgPSB7XCJhdHRyaWJ1dGVzXCI6e1widGl0bGVcIjpcIuWNt+enr+elnue7j+e9kee7nOeugOi/sFwiLFwiZGF0ZVwiOlwiMjAxOC0wNy0xNFQxNjowMDozMi4wMDBaXCIsXCJ0YWdzXCI6XCJEZWVwIExlYXJuaW5nXCIsXCJjYXRlZ29yaWVzXCI6XCJEZWVwIExlYXJuaW5nXCJ9LFwiYm9keVwiOlwiXFxu5YmN6KiA77yaIOaIkeWkquiPnOS6huKApiDmnKzmnaXmg7PnnYDlhpnkuKrlsI/kvovlrZDvvIznu5PmnpzlhpnliLDkuIDljYrlj5HnjrDoh6rlt7Hlhbblrp7moLnmnKzkuI3kvJrvvIzmiJHov5jmmK/mkrhDKyvljrvlkKfjgIJcXG5cXG7ljbfnp6/npZ7nu4/nvZHnu5woQ29udm9sdXRpb25hbCBOZXVyYWwgTmV0d29yaynmmK/kuIDnp43liY3ppojnpZ7nu4/nvZHnu5zjgILlroPnmoTkurrlt6XnpZ7nu4/lhYPlj6/ku6Xlk43lupTkuIDpg6jliIbopobnm5bojIPlm7TlhoXnmoTlkajlm7TljZXlhYPvvIzlr7nkuo7lpKflnovlm77lg4/lpITnkIbmnInlh7roibLnmoTooajnjrDjgIJcXG5cXG7ljbfnp6/npZ7nu4/nvZHnu5znlLHkuIDkuKrmiJblpJrkuKrljbfnp6/lsYLlkozpobbnq6/nmoTlhajov57pgJrlsYLnu4TmiJDvvIzlkIzml7bkuZ/ljIXlkKvlhbPogZTmnYPph43lkozmsaDljJblsYLjgILov5nkuIDnu5PmnoTlj6/ku6Xkvb/lvpfljbfnp6/npZ7nu4/nvZHnu5zog73lpJ/liKnnlKjovpPlhaXmlbDmja7nmoTkuoznu7Tnu5PmnoTjgILkuI7lhbbku5bmt7HluqblrabkuaDnu5PmnoTnm7jmr5TvvIzljbfnp6/npZ7nu4/nvZHnu5zlnKjlm77lg4/lkozlo7Dpn7PkuIrog73lpJ/nu5nlh7rmm7Tlpb3nmoTnu5PmnpzvvIzov5nkuIDmqKHlnovkuZ/lj6/ku6XnlKjlj43lkJHkvKDmkq3nrpfms5Xov5vooYzorq3nu4PjgILnm7jmr5TovoPkuo7lhbbku5bnpZ7nu4/nvZHnu5zjgIHliY3ppojnpZ7nu4/nvZHnu5zvvIzljbfnp6/npZ7nu4/nvZHnu5zpnIDopoHogIPomZHnmoTlj4LmlbDmm7TlsJHvvIzkvb/kuYvmiJDkuLrkuIDnp43pooflhbflkLjlvJXlipvnmoTmt7HluqblrabkuaDnu5PmnoTjgIJcXG5cXG48IS0tIG1vcmUgLS0+XFxuXFxuIyMg57uT5p6EXFxuXFxuIyMjIOWNt+enr+WxglxcblxcbuWNt+enr+elnue7j+e9kee7nOS4reavj+WxguWNt+enr+WxgueUseiLpeW5suWNt+enr+WNleWFg+aehOaIkOOAguavj+S4quWNt+enr+WNleWFg+eahOWPguaVsOmDveWPr+S7peeUseWPjeWQkeS8oOaSreeul+azleadpeiwg+aVtOOAguWNt+enr+i/kOeul+eahOebrueahOaYr+aPkOWPlui+k+WFpeeahOS4jeWQjOeJueW+ge+8jOesrOS4gOWxguWNt+enr+WPr+iDveWPquaPkOWPlumdnuW4uOWwj+eahOeJueW+ge+8jOabtOWkmuWxgueahOe9kee7nOWPquiDveS7juS9jue6p+eJueW+geS4reaPkOWPluabtOWkjeadgueahOeJueW+geOAglxcblxcbiMjIyDmv4DmtLvlh73mlbBcXG5cXG7ov5DooYzml7bmv4DmtLvnpZ7nu4/nvZHnu5zkuK3mn5DkuIDpg6jliIbnpZ7nu4/lhYPvvIzlsIbmv4DmtLvkv6Hmga/lkJHlkI7kvKDlhaXkuIvkuIDlsYLnpZ7nu4/nvZHnu5zjgILnpZ7nu4/nvZHnu5zkuYvmiYDku6Xog73op6PlhrPpnZ7nur/mgKfpl67popjvvIzlpoLor63pn7Plkozlm77lg4/vvIzmnKzotKjkuIrlsLHmmK/mv4DmtLvlh73mlbDliqDlhaXkuobpnZ7nur/mgKfnmoTlm6DntKDvvIzlvKXooaXkuobnur/mgKfmqKHlnovnmoTooajovr7lipvvvIzmiorigJzmv4DmtLvnmoTnpZ7nu4/lhYPnmoTnibnlvoHigJ3pgJrov4flh73mlbDkv53nlZnlubbmmKDlsITliLDkuIvkuIDlsYLjgIJcXG5cXG7lm6DkuLrnpZ7nu4/nvZHnu5znmoTmlbDlrabln7rnoYDmmK/lpITlpITlj6/lvq7vvIzmiYDku6XpgInlj5bnmoTmv4DmtLvlh73mlbDopoHog73kv53or4HmlbDmja7ovpPlhaXkuI7ovpPlh7rkuZ/mmK/lj6/lvq7nmoTvvIzku4vnu43lm5vnp43lh73mlbDvvJpcXG5cXG4tIHNpZ21vaWRcXG5cXG4hW3NpZ21vaWRdKHNpZ21vaWQuc3ZnKVxcblxcbiFbc2lnbW9pZF0oc2lnbW9pZC5wbmcpXFxuXFxuc2lnbW9pZOWHveaVsOaYr+S8oOe7n+elnue7j+e9kee7nOS4reacgOW4uOeUqOeahOa/gOa0u+WHveaVsOS5i+S4gO+8jOWug+eahOS8mOeCueWcqOS6ju+8jOWug+eahOi+k+WHuuaYoOWwhOWcqCgwLCAxKeWGhe+8jOWNleiwg+i/nue7re+8jOmdnuW4uOmAguWQiOS9nOS4uui+k+WHuuWxgu+8jOW5tuS4lOaxguWvvOavlOi+g+WuueaYk++8jOe8uueCueS5n+avlOi+g+aYjuaYvu+8jOWboOS4uui9r+mlseWSjOaAp++8jOS4gOaXpuiQveWFpemlseWSjOWMuu+8jGYnKHgp5bCx5Lya5Y+Y5b6X5o6l6L+RMO+8jOW+iOWuueaYk+S6p+eUn+mYtuair+a2iOWkseOAglxcblxcbi0gdGFuaFxcblxcbiFbXSh0YW5oLmpwZylcXG5cXG4hW10oVGFuaFJlYWwuZ2lmKVxcblxcbnRhbmjlh73mlbDkuZ/lhbfmnInova/ppbHlkozmgKfvvIzlm6DkuLrlroPnmoTovpPlh7rku6Uw5Li65Lit5b+D77yM5pS25pWb6YCf5bqm5q+Uc2lnbW9pZOimgeW/q++8jOS9huaYr+S7jeeEtuaXoOazleino+WGs+air+W6pua2iOWksemXrumimOOAglxcblxcbi0gcmVsdVxcblxcbiFbXShyZWx1LnN2ZylcXG5cXG4hW10ocmVsdS5wbmcpXFxuXFxucmVsdeaYr+ebruWJjeacgOWPl+asoui/jueahOa/gOa0u+WHveaVsO+8jHNvZnRwbHVz5Y+v5Lul55yL5YGa5pivcmVsdeeahOW5s+a7keeJiOacrOOAguS9v+eUqOe6v+aAp+aVtOa1ge+8iFJlY3RpZmllZCBMaW5lYXIgVW5pdHMsIFJlTFXvvIlmKHgpPW1heCgwLHgp5L2c5Li66L+Z5LiA5bGC56We57uP55qE5r+A5Yqx5Ye95pWw77yIQWN0aXZhdGlvbiBmdW5jdGlvbu+8ieOAguWug+WPr+S7peWinuW8uuWIpOWumuWHveaVsOWSjOaVtOS4quelnue7j+e9kee7nOeahOmdnue6v+aAp+eJueaAp++8jOiAjOacrOi6q+W5tuS4jeS8muaUueWPmOWNt+enr+WxguOAglxcblxcbi0gZHJvcG91dFxcblxcbuS4gOS4quelnue7j+WFg+WwhuS7peamgueOh+WGs+WumuaYr+WQpuimgeiiq+aKkeWItu+8jOiiq+aKkeWItueahOelnue7j+WFg+S8muiiq+aaguaXtuiupOS4uuS4jeWxnuS6jue9kee7nO+8jOS9huaYr+Wug+eahOadg+mHjeWwhuS8muiiq+S/neeVmeOAglxcblxcbiMjIyDmsaDljJblsYJcXG5cXG7msaDljJbmmK/ljbfnp6/npZ7nu4/nvZHnu5zkuK3lj6blpJbkuIDkuKrpnZ7luLjph43opoHnmoTmpoLlv7XjgILlroPlrp7pmYXkuIrmmK/lvaLlvI/nmoTpmY3ph4fmoLfjgILmnInlpJrnp43kuI3lkIzlvaLlvI/nmoTpnZ7nur/mgKfmsaDljJblh73mlbDvvIzogIzlhbbkuK3igJzmnIDlpKfmsaDljJbigJ3mmK/mnIDkuLrluLjop4HnmoTjgILlroPmmK/lsIbovpPlhaXnmoTlm77lg4/liJLliIbkuLroi6XlubLkuKrnn6nlvaLljLrln5/vvIzlr7nmr4/kuKrlrZDljLrln5/ovpPlh7rmnIDlpKflgLzjgILnm7Top4nkuIrvvIzov5nnp43mnLrliLbog73lpJ/mnInmlYjlnLDljp/lm6DlnKjkuo7vvIzlnKjlj5HnjrDkuIDkuKrnibnlvoHkuYvlkI7vvIzlroPnmoTnsr7noa7kvY3nva7ov5zkuI3lj4rlroPlkozlhbbku5bnibnlvoHnmoTnm7jlr7nkvY3nva7nmoTlhbPns7vph43opoHjgILmsaDljJblsYLkvJrkuI3mlq3lnLDlh4/lsI/mlbDmja7nmoTnqbrpl7TlpKflsI/vvIzlm6DmraTlj4LmlbDnmoTmlbDph4/lkozorqHnrpfph4/kuZ/kvJrkuIvpmY3vvIzov5nlnKjkuIDlrprnqIvluqbkuIrkuZ/mjqfliLbkuobov4fmi5/lkIjjgILpgJrluLjmnaXor7TvvIxDTk7nmoTljbfnp6/lsYLkuYvpl7Tpg73kvJrlkajmnJ/mgKflnLDmj5LlhaXmsaDljJblsYLjgIJcXG5cXG7msaDljJblsYLpgJrluLjkvJrliIbliKvkvZznlKjkuo7mr4/kuKrovpPlhaXnmoTnibnlvoHlubblh4/lsI/lhbblpKflsI/jgILnm67liY3mnIDluLjnlKjlvaLlvI/nmoTmsaDljJblsYLmmK/mr4/pmpQy5Liq5YWD57Sg5LuO5Zu+5YOP5YiS5YiG5Ye6Mngy55qE5Yy65Z2X77yM54S25ZCO5a+55q+P5Liq5Yy65Z2X5Lit55qENOS4quaVsOWPluacgOWkp+WAvOOAgui/meWwhuS8muWHj+WwkTc1JeeahOaVsOaNrumHj+OAglxcblxcbumZpOS6huacgOWkp+axoOWMluS5i+Wklu+8jOaxoOWMluWxguS5n+WPr+S7peS9v+eUqOWFtuS7luaxoOWMluWHveaVsO+8jOS+i+WmguKAnOW5s+Wdh+axoOWMluKAneeUmuiHs+KAnEwyLeiMg+aVsOaxoOWMluKAneetieOAgui/h+WOu++8jOW5s+Wdh+axoOWMlueahOS9v+eUqOabvue7j+i+g+S4uuW5v+azm++8jOS9huaYr+acgOi/keeUseS6juacgOWkp+axoOWMluWcqOWunui3teS4reeahOihqOeOsOabtOWlve+8jOW5s+Wdh+axoOWMluW3sue7j+S4jeWkquW4uOeUqOOAglxcblxcbueUseS6juaxoOWMluWxgui/h+W/q+WcsOWHj+WwkeS6huaVsOaNrueahOWkp+Wwj++8jOebruWJjeaWh+eMruS4reeahOi2i+WKv+aYr+S9v+eUqOi+g+Wwj+eahOaxoOWMlua7pOmVnO+8jOeUmuiHs+S4jeWGjeS9v+eUqOaxoOWMluWxguOAglxcblxcbiMjIyDmjZ/lpLHlh73mlbDlsYJcXG5cXG7mjZ/lpLHlh73mlbDlsYLnlKjkuo7lhrPlrprorq3nu4Pov4fnqIvlpoLkvZXmnaXigJzmg6nnvZrigJ3nvZHnu5znmoTpooTmtYvnu5PmnpzlkoznnJ/lrp7nu5PmnpzkuYvpl7TnmoTlt67lvILvvIzlroPpgJrluLjmmK/nvZHnu5znmoTmnIDlkI7kuIDlsYLjgILlkITnp43kuI3lkIznmoTmjZ/lpLHlh73mlbDpgILnlKjkuo7kuI3lkIznsbvlnovnmoTku7vliqHjgILkvovlpoLvvIxTb2Z0bWF45Lqk5Y+J54a15o2f5aSx5Ye95pWw5bi45bi46KKr55So5LqO5ZyoS+S4quexu+WIq+S4remAieWHuuS4gOS4qu+8jOiAjFNpZ21vaWTkuqTlj4nnhrXmjZ/lpLHlh73mlbDluLjluLjnlKjkuo7lpJrkuKrni6znq4vnmoTkuozliIbnsbvpl67popjjgILmrKflh6Dph4zlvrfmjZ/lpLHlh73mlbDluLjluLjnlKjkuo7nu5Pmnpzlj5blgLzojIPlm7TkuLrku7vmhI/lrp7mlbDnmoTpl67popjjgIJcIixcImZyb250bWF0dGVyXCI6XCJ0aXRsZTog5Y2356ev56We57uP572R57uc566A6L+wXFxuZGF0ZTogMjAxOC0wNy0xNCAxNjowMDozMlxcbnRhZ3M6IERlZXAgTGVhcm5pbmdcXG5jYXRlZ29yaWVzOiBEZWVwIExlYXJuaW5nXCJ9IiwibW9kdWxlLmV4cG9ydHMgPSB7XCJhdHRyaWJ1dGVzXCI6e1widGl0bGVcIjpcIuWcqERlZXBpbkxpbnV45LiL5L2/55SoblZpZGlhIENVREFcIixcImRhdGVcIjpcIjIwMTgtMDYtMjhUMDM6MjE6NTAuMDAwWlwiLFwidGFnc1wiOltcIkxpbnV4XCIsXCJuVmlkaWEgQ3VkYVwiXX0sXCJib2R5XCI6XCJcXG5DVURB77yIQ29tcHV0ZSBVbmlmaWVkIERldmljZSBBcmNoaXRlY3R1cmXvvIznu5/kuIDorqHnrpfmnrbmnoTvvInmmK/nlLFOVklESUHmiYDmjqjlh7rnmoTkuIDnp43pm4bmiJDmioDmnK/vvIzmmK/or6Xlhazlj7jlr7nkuo5HUEdQVeeahOato+W8j+WQjeensOOAgumAmui/h+i/meS4quaKgOacr++8jOeUqOaIt+WPr+WIqeeUqE5WSURJQeeahEdlRm9yY2UgOOS7peWQjueahEdQVeWSjOi+g+aWsOeahFF1YWRybyBHUFXov5vooYzorqHnrpfjgILkuqbmmK/pppbmrKHlj6/ku6XliKnnlKhHUFXkvZzkuLpDLee8luivkeWZqOeahOW8gOWPkeeOr+Wig+OAgk5WSURJQeiQpemUgOeahOaXtuWAme+8jOW+gOW+gOWwhue8luivkeWZqOS4juaetuaehOa3t+WQiOaOqOW5v++8jOmAoOaIkOa3t+S5seOAguWunumZheS4iu+8jENVREHlj6/ku6XlhbzlrrlPcGVuQ0zmiJbogIXoh6rlrrbnmoRDLee8luivkeWZqOOAguaXoOiuuuaYr0NVREEgQy3or63oqIDmiJbmmK9PcGVuQ0zvvIzmjIfku6TmnIDnu4jpg73kvJrooqvpqbHliqjnqIvluo/ovazmjaLmiJBQVFjku6PnoIHvvIzkuqTnlLHmmL7npLrmoLjlv4PorqHnrpfjgIJcXG5cXG7lnKjorrrlnZvkuIrnnIvliLDmnInkupvnlKjmiLfluIzmnJvlnKhkZWVwaW7kuIvkvb/nlKhDVURB77yM5L2G5piv5LuW5Lus6YeH5Y+W55qE5YGa5rOV5b6A5b6A5piv5omL5Yqo5LiL6L29bnZpZGlh55qE5LqM6L+b5Yi25paH5Lu277yM55u05o6l6L+b6KGM5a6J6KOF44CCXFxuXFxu5L2G5piv6L+Z5qC35Lya56C05Z2P5LiA6YOo5YiG55qEZ2x46ZO+5o6l77yM5a+86Ie05Y246L2955qE5pe25YCZ5peg5rOV5b275bqV5oGi5aSN77yM57uT5p6c5bCx5piv57O757uf5Zug5Li65Y246L29bnZpZGlh6amx5Yqo6ICM5bqf5o6J77yM5omA5Lul5oiR5o6o6I2Q5L2/55So5YyF566h55CG5Zmo55qE5pa55byP5a6J6KOFbnZpZGlh6amx5Yqo5ZKMY3VkYeebuOWFs+eahOS4nOilv++8jOWwvemHj+S4jeimgeaJi+WKqOS/ruaUueOAglxcblxcbjwhLS0gbW9yZSAtLT5cXG5cXG7pnIDopoHlronoo4XnmoTlvojlsJHvvIzlj6rmnInkupTkuKrljIXvvIzkuI3ov4fkvJrkvp3otZblvojlpJpudmlkaWHnmoTlupPvvIzmgLvph4/ov5jmmK/mnInkuIDkupvnmoTjgIJcXG5cXG5gYGBcXG5zdWRvIGFwdCBpbnN0YWxsIG52aWRpYS1jdWRhLXRvb2xraXQgbnZpZGlhLXByb2ZpbGVyIG52aWRpYS12aXN1YWwtcHJvZmlsZXIgbnZpZGlhLWN1ZGEtZG9jIG52aWRpYS1jdWRhLWRldlxcbmBgYFxcblxcbm52Y2PmmK9jdWRh55qE57yW6K+R5Zmo77yM5a6D55uu5YmN5Y+q5pSv5oyBZysrNe+8jOaJgOS7pei/mOmcgOimgeWuieijhWcrKzXjgIJcXG5cXG5gYGBcXG5zdWRvIGFwdCBpbnN0YWxsIGcrKy01XFxuYGBgXFxuXFxu54S25ZCO77yM6YeN5ZCv5LiA5LiL6K6h566X5py644CCXFxuXFxuW+i/memHjOacieS4quWwj+agl+WtkO+8jOWPr+S7peeUqOadpea1i+ivlWN1ZGHmmK/lkKbog73lpJ/miJDlip/nvJbor5Hlkozov5DooYxdKGh0dHBzOi8vYmluZ2xpdTIyMS5naXRib29rcy5pby9sZWFybi1jdWRhLXRoZS1zaW1wbGUtd2F5L2NvbnRlbnQvY2hhcHRlcjIuaHRtbC8pXFxuXFxuKirlsIbku6XkuIvku6PnoIHkv53lrZjkuLogbWFpbi5jdSoqXFxuXFxuYGBgXFxuI2luY2x1ZGUgPHN0ZGlvLmg+XFxuXFxuX19nbG9iYWxfXyB2b2lkIHZlY3Rvcl9hZGQoY29uc3QgaW50ICphLCBjb25zdCBpbnQgKmIsIGludCAqYykge1xcbiAgICAqYyA9ICphICsgKmI7XFxufVxcblxcbmludCBtYWluKHZvaWQpIHtcXG4gICAgY29uc3QgaW50IGEgPSAyLCBiID0gNTtcXG4gICAgaW50IGMgPSAwO1xcblxcbiAgICBpbnQgKmRldl9hLCAqZGV2X2IsICpkZXZfYztcXG5cXG4gICAgY3VkYU1hbGxvYygodm9pZCAqKikmZGV2X2EsIHNpemVvZihpbnQpKTtcXG4gICAgY3VkYU1hbGxvYygodm9pZCAqKikmZGV2X2IsIHNpemVvZihpbnQpKTtcXG4gICAgY3VkYU1hbGxvYygodm9pZCAqKikmZGV2X2MsIHNpemVvZihpbnQpKTtcXG5cXG4gICAgY3VkYU1lbWNweShkZXZfYSwgJmEsIHNpemVvZihpbnQpLCBjdWRhTWVtY3B5SG9zdFRvRGV2aWNlKTtcXG4gICAgY3VkYU1lbWNweShkZXZfYiwgJmIsIHNpemVvZihpbnQpLCBjdWRhTWVtY3B5SG9zdFRvRGV2aWNlKTtcXG5cXG4gICAgdmVjdG9yX2FkZDw8PDEsIDE+Pj4oZGV2X2EsIGRldl9iLCBkZXZfYyk7XFxuXFxuICAgIGN1ZGFNZW1jcHkoJmMsIGRldl9jLCBzaXplb2YoaW50KSwgY3VkYU1lbWNweURldmljZVRvSG9zdCk7XFxuXFxuICAgIHByaW50ZihcXFwiJWQgKyAlZCA9ICVkLCBJcyB0aGF0IHJpZ2h0P1xcXFxuXFxcIiwgYSwgYiwgYyk7XFxuXFxuICAgIGN1ZGFGcmVlKGRldl9hKTtcXG4gICAgY3VkYUZyZWUoZGV2X2IpO1xcbiAgICBjdWRhRnJlZShkZXZfYyk7XFxuXFxuICAgIHJldHVybiAwO1xcbn1cXG5gYGBcXG5cXG7nvJbor5E6XFxuXFxuYGBgXFxubnZjYyBtYWluLmN1XFxuYGBgXFxuXFxu6L+Q6KGMOlxcblxcbmBgYFxcbi4vYS5vdXRcXG5gYGBcXG5cXG7lpoLmnpzkuIDliIfpobrliKnvvIzlnKjnvJbor5HnmoTml7blgJnlsLHkuI3kvJrmnInmiqXplJnvvIzkuI3ov4flnKjmiJHnmoTnjq/looPkuItudmNj5Lya5pyJ5p625p6E6KKr5byD55So55qE6K2m5ZGK77yM5pys552A5Y+q6KaB5LiNZXJyb3LlsLHnrpfmsqHkuovnmoTljp/liJnvvIzmiJHku6zml6Dop4bov5nmnaHorablkYrljbPlj6/jgIJcXG5cXG7ovpPlh7rnu5Pmnpw6XFxuXFxuYGBgXFxuMiArIDUgPSAwLCBJcyB0aGF0IHJpZ2h0P1xcbmBgYFxcblwiLFwiZnJvbnRtYXR0ZXJcIjpcInRpdGxlOiDlnKhEZWVwaW5MaW51eOS4i+S9v+eUqG5WaWRpYSBDVURBXFxuZGF0ZTogMjAxOC0wNi0yOCAwMzoyMTo1MFxcbnRhZ3M6XFxuICAtIExpbnV4XFxuICAtIG5WaWRpYSBDdWRhXCJ9IiwibW9kdWxlLmV4cG9ydHMgPSB7XCJhdHRyaWJ1dGVzXCI6e1widGl0bGVcIjpcIuWcqGRlZXBpbuS4iuS9v+eUqGRuc21hc3HmnaXop6PlhrNkbnPop6PmnpDnvJPmhaJcIixcImRhdGVcIjpcIjIwMTctMDgtMTFUMTQ6MDc6MjYuMDAwWlwiLFwidGFnc1wiOm51bGx9LFwiYm9keVwiOlwiXFxu5YW25a6e6L+Z5Liq6Zeu6aKY5b2x5ZON5bm25LiN5piv5b6I5aSn77yM5Y+q5piv56iN5b6u55qE5aKe5Yqg5LiA54K554K56K6/6Zeu6YCf5bqm77yM57yT5a2Y6L+Z5Lic6KW/5pyJ5Yip5pyJ5byK44CCXFxuXFxuPCEtLSBtb3JlIC0tPlxcblxcbuWcqOWGmeWujOi/meevh+aWh+eroOS7peWQju+8jOaIkeWwseS4jeeUqGRuc21hc3HkuobvvIznjrDlnKjnlKjnmoTmmK9naXRodWLkuIrnmoRbUGNhcF9ETlNQcm94eV0oaHR0cHM6Ly9naXRodWIuY29tL2NoZW5ncjI4L1BjYXBfRE5TUHJveHkp44CC55So5p2l6Ziy5q2iZG5z5rGh5p+T55qE44CCXFxuXFxu5qC55o2uW2h0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzExMDIwMDI3L2Rucy1jYWNoaW5nLWluLWxpbnV4XShodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xMTAyMDAyNy9kbnMtY2FjaGluZy1pbi1saW51eCkg5Lit5Zue562U6ICF5o+Q5L6b55qE5L+h5oGv5p2l55yL77yMbGludXjlj5HooYzniYjmmK/kuI3mj5DkvptkbnPop6PmnpDnvJPlrZjnmoTvvIzkuIrpnaLmj5DliLDnmoRuc2Nk5Lmf5LiN5ZyoZGVlcGlu55qE6aKE6KOF5YiX6KGo5Lit77yM5omA5Lul5oiR5Lus5Y+q6IO96Ieq5bex5Yqo5omL5Liw6KGj6Laz6aOf5LqG44CCXFxuXFxu6aaW5YWI5a6J6KOF5Y+j56KR6L6D5aW955qEZG5zbWFzce+8jOadpeS4uuaIkeS7rOaPkOS+m2Ruc+e8k+WtmOOAglxcblxcbmBgYFxcbnN1ZG8gYXB0IGluc3RhbGwgZG5zbWFzcVxcbmBgYFxcblxcbuWmguaenOaYr2RlZXBpbuacgOaWsOeahDIwMTUuNC4x54mI5pys5Lit5a6J6KOF77yM5a6J6KOF57uT5p2f5Lya5o+Q6YaS5LiA5Liq6ZSZ6K+v77yM6L+Z5Liq6ZSZ6K+v55qE6Kej5Yaz5Yqe5rOV5p2l6IeqW2h0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzE2OTM5MzA2L2ktY2FudC1yZXN0YXJ0LW15LWRuc21hc3Etc2VydmljZS1zby1teS1mb2ctc2VydmVyLXdvbnQtd29ya10oaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTY5MzkzMDYvaS1jYW50LXJlc3RhcnQtbXktZG5zbWFzcS1zZXJ2aWNlLXNvLW15LWZvZy1zZXJ2ZXItd29udC13b3JrKS5cXG7ov5nkuKrplJnor6/kvLzkuY7mmK/lm6DkuLovdXNyL3NoYXJlL2Rucy9yb290LmRz5paH5Lu25pu05paw5ZCO57uT5p6E5a+86Ie055qE6ZSZ6K+v44CCXFxuXFxu57yW6L6RL2V0Yy9pbml0LmQvZG5zbWFzce+8jOW5tuaJvuWIsFxcblxcbmBgYFxcblJPT1RfRFM9XFxcIi91c3Ivc2hhcmUvZG5zL3Jvb3QuZHNcXFwiXFxuXFxuaWYgWyAtZiAkUk9PVF9EUyBdOyB0aGVuXFxuICAgRE5TTUFTUV9PUFRTPVxcXCIkRE5TTUFTUV9PUFRTIGBzZWQgLWUgcy9cXFwiLiBJTiBEUyBcXFwiLy0tdHJ1c3QtYW5jaG9yPS4sLyAtZSBzL1xcXCIgXFxcIi8sL2cgJFJPT1RfRFMgfCB0ciAnXFxcXG4nICcgJ2BcXFwiIFxcbmZpXFxuYGBgXFxuXFxu5L+u5pS55Li6XFxuXFxuYGBgXFxuUk9PVF9EUz1cXFwiL3Vzci9zaGFyZS9kbnMvcm9vdC5kc1xcXCJcXG5cXG5pZiBbIC1mICRST09UX0RTIF07IHRoZW5cXG4gICBETlNNQVNRX09QVFM9XFxcIiRETlNNQVNRX09QVFMgYHNlZCAtZSBzL1xcXCIuKklOW1s6c3BhY2U6XV1EU1tbOnNwYWNlOl1dXFxcIi8tLXRydXN0LWFuY2hvcj0uLC8gLWUgcy9cXFwiW1s6c3BhY2U6XV1cXFwiLywvZyAkUk9PVF9EUyB8IHRyICdcXFxcbicgJyAnYFxcXCIgXFxuZmlcXG5gYGBcXG5cXG7lvZPplJnor6/op6PlhrPku6XlkI7vvIzmiJHku6zmiYvliqjph43lkK/kuIDkuItkbnNtYXNx55qEc3lzdGVtZOacjeWKoeOAglxcblxcbmBgYFxcbnN1ZG8gc3lzdGVtY3RsIHJlc3RhcnQgZG5zbWFzcVxcbmBgYFxcblxcbmRlZXBpbueahC9ldGMvcmVzb2x2LmNvbmbmnaXoh6ovZXRjL05ldHdvcmtNYW5hZ2VyL3Jlc29sdi5jb25mLuaYr+S4gOS4qui9r+i/nuaOpeOAguaIkemHh+WPlueahOihjOS4uuaYr+WIoOmZpOi/meS4quaWh+S7tu+8jOmHjeaWsOWIm+W7uuOAglxcblxcbmBgYFxcbnN1ZG8gcm0gL2V0Yy9yZXNvbHYuY29uZlxcblxcbnN1ZG8gdmltIC9ldGMvcmVzb2x2LmNvbmZcXG5gYGBcXG5cXG7nhLblkI7lhpnlhaXmnKzlnLDlnLDlnYDlvZPlgZpkbnPlnLDlnYDjgIJcXG5cXG5gYGBcXG5uYW1lc2VydmVyIDEyNy4wLjAuMVxcbmBgYFxcblxcbmRuc21hc3HmmK/kuIDkuKrmnKzlnLDnmoRkbnPlkoxkaGNw5pyN5Yqh5Zmo77yM5b2T5oiR5Lus5Zyo5LiK6Z2i5oiQ5Yqf5ZCv5YqoZG5zbWFzceS7peWQju+8jOS4quS6uuezu+e7n+S4reWwseW3sue7j+WcqOaPkOS+m2Ruc+acjeWKoeS6hu+8jOaJgOS7peacrOacuuS9v+eUqOWbnueOr+WcsOWdgOadpeihqOaYjmRuc+acjeWKoeWZqOWwseaYr+acrOacuu+8jOaJgOacieeahGRuc+afpeivoumDveS8muWPkemAgeWIsOacrOacuueahGRuc21hc3HkuK3jgIJcXG5cXG7lpoLmnpzpnIDopoHpop3lpJbmt7vliqBkbnPmnI3liqHlmajvvIzlgZrms5XmnaXoh6pbaHR0cHM6Ly93aWtpLmFyY2hsaW51eC5vcmcvaW5kZXgucGhwL0Ruc21hc3EjTW9yZV90aGFuX3RocmVlX25hbWVzZXJ2ZXJzXShodHRwczovL3dpa2kuYXJjaGxpbnV4Lm9yZy9pbmRleC5waHAvRG5zbWFzcSNNb3JlX3RoYW5fdGhyZWVfbmFtZXNlcnZlcnMpLlxcblxcbuWIm+W7uuS4gOS4qiAvZXRjL3Jlc29sdi5kbnNtYXNxLmNvbmbvvIzlhpnlhaXlhbbku5ZkbnPmnI3liqHlmajnmoTlnLDlnYDjgIJcXG5cXG5gYGBcXG5uYW1lc2VydmVyIDExNC4xMTQuMTE0LjExNFxcbmBgYFxcblxcbueEtuWQjue8lui+kSAvZXRjL2Ruc21hc3EuY29uZizmib7liLByZXNvbHYtZmlsZeWtl+aute+8jOaUueS4ulxcblxcbmBgYFxcbnJlc29sdi1maWxlPS9ldGMvcmVzb2x2LmRuc21hc3EuY29uZlxcbmBgYFxcblxcbueEtuWQjumHjeWQr2Ruc21hc3HjgIJcXG5cXG7pqozor4HnmoTor53pgJrov4dkaWflkb3ku6TjgIJcXG5cXG5gYGBcXG5kaWcgYmxvZy5ta2FjZy5jb21cXG5gYGBcXG5cXG7pgJrov4fmiafooYzkuKTmrKHmnaXliKTmlq3vvIxRdWVyeSB0aW1l5Zyo56ys5LqM5qyh5p+l6K+i5piv5Li6MCBtc2Vj44CCXCIsXCJmcm9udG1hdHRlclwiOlwidGl0bGU6IOWcqGRlZXBpbuS4iuS9v+eUqGRuc21hc3HmnaXop6PlhrNkbnPop6PmnpDnvJPmhaJcXG5kYXRlOiAyMDE3LTA4LTExIDE0OjA3OjI2XFxudGFnczpcIn0iLCJtb2R1bGUuZXhwb3J0cyA9IHtcImF0dHJpYnV0ZXNcIjp7XCJ0aXRsZVwiOlwi5byA5Y+RdG9wYmFy5Lit55qE5oqA5pyv6Zeu6aKYXCIsXCJkYXRlXCI6XCIyMDE3LTA4LTIzVDA4OjU0OjU2LjAwMFpcIixcInRhZ3NcIjpudWxsfSxcImJvZHlcIjpcIlxcbui/memHjOiusOW9leS6huW8gOWPkXRvcGJhcuS4remBh+WIsOeahOWdkeWSjOS4gOS6m+mXrumimOOAglxcblxcbjwhLS0gbW9yZSAtLT5cXG5cXG7kvb/nlKhRdOaPkOS+m+eahHF4Y2Lmlrnms5Xms6jlhozpmLTlvbHkuLpkb2Nr57G75Z6L77yM5Y+N6ICM5aSE5LqOREVTS1RPUOWSjE5PUk1BTOS5i+mXtOOAguWFtuWunuW9k+WIneW5tuS4jeaYr+aDs+iuvue9ruS4ukRPQ0vnsbvlnovnmoTvvIzlm6DkuLrov5nmoLfpmLTlvbHkuZ/kvJrlnKjnqpflj6PkuIrmlrnvvIzmiJHluIzmnJvnmoTmmK/pmLTlvbHlnKjmma7pgJrnqIvluo/kuIvmlrnvvIzlnKjmoYzpnaLkuIrmlrnjgILku4rlpKnmm7nlk6XmnaXorrLnqpfnrqHnmoTkuIDkupvlnZHvvIzorrLliLDnqpfnrqHmmK/lpoLkvZXmjqfliLbnqpflj6PnmoTvvIzmiJHnmoTpmLTlvbHlhbblrp7mmK/ooqtRdOazqOWGjOaIkF9ORVRfV01fU1RBVEVfQkVMT1fkuobjgIJcXG5b6L+Z6YeM5Y+v5Lul55yL5Yiw5LiA5LqbdHlwZeeahOS7i+e7jV0oaHR0cHM6Ly9zcGVjaWZpY2F0aW9ucy5mcmVlZGVza3RvcC5vcmcvd20tc3BlYy8xLjMvYXIwMXMwNS5odG1sKeOAglxcblxcbuWcqF9ORVRfV01fU1RBVEXkuK3kuIDlhbHmnInov5nkuYjlh6DkuKrnsbvlnovvvJpcXG5cXG5gYGBcXG5fTkVUX1dNX1NUQVRFX01PREFMLCBBVE9NXFxuX05FVF9XTV9TVEFURV9TVElDS1ksIEFUT01cXG5fTkVUX1dNX1NUQVRFX01BWElNSVpFRF9WRVJULCBBVE9NXFxuX05FVF9XTV9TVEFURV9NQVhJTUlaRURfSE9SWiwgQVRPTVxcbl9ORVRfV01fU1RBVEVfU0hBREVELCBBVE9NXFxuX05FVF9XTV9TVEFURV9TS0lQX1RBU0tCQVIsIEFUT01cXG5fTkVUX1dNX1NUQVRFX1NLSVBfUEFHRVIsIEFUT01cXG5fTkVUX1dNX1NUQVRFX0hJRERFTiwgQVRPTVxcbl9ORVRfV01fU1RBVEVfRlVMTFNDUkVFTiwgQVRPTVxcbl9ORVRfV01fU1RBVEVfQUJPVkUsIEFUT01cXG5fTkVUX1dNX1NUQVRFX0JFTE9XLCBBVE9NXFxuX05FVF9XTV9TVEFURV9ERU1BTkRTX0FUVEVOVElPTiwgQVRPTVxcblxcbmBgYFxcblxcbuWmguaenOeoi+W6j+iiq+azqOWGjOaIkF9ORVRfV01fU1RBVEVfQkVMT1fvvIzliJnkvJrooqvmlL7nva7lnKhERVNLVE9Q5LmL5LiK55qE5LiA5bGC44CC5LiN5piv5b6I5riF5qWaUXTmmK/lh7rkuo7ku4DkuYjnrZbnlaXvvIzmiY3miormiJHnmoTpmLTlvbHms6jlhozkuLrov5nkuKrnirbmgIHvvIzlj43ogIzmmK/liJrlpb3mu6HotrPkuobmiJHnmoTpnIDmsYLjgIJcXG5cXG7ov5nopoHlpJrosKLmm7nlk6XkuobvvIzmiJHmiY3nu4jkuo7mmI7nmb3kuobkuLrku4DkuYjkvJrov5nmoLfvvIzku6Xlj4rku6XlkI7lpoLkvZXmraPnoa7nmoTorr7nva50eXBl44CCXFxuXFxuIVtERVNLVE9QMV0oRGVlcGluU2NyZWVuc2hvdF/moYzpnaJfMjAxNzA4MjMyMDE2MDgucG5nIFxcXCLmiJHogIHlqYZcXFwiKVxcblxcbiFbREVTS1RPUDJdKERlZXBpblNjcmVlbnNob3Rf5qGM6Z2iXzIwMTcwODIzMjAxNjQxLnBuZylcXG5cIixcImZyb250bWF0dGVyXCI6XCJ0aXRsZTog5byA5Y+RdG9wYmFy5Lit55qE5oqA5pyv6Zeu6aKYXFxuZGF0ZTogMjAxNy0wOC0yMyAwODo1NDo1NlxcbnRhZ3M6XCJ9IiwibW9kdWxlLmV4cG9ydHMgPSB7XCJhdHRyaWJ1dGVzXCI6e1widGl0bGVcIjpcIuaIkeeahOS7o+eQhuaKmOiFvuaWueahiFwiLFwiZGF0ZVwiOlwiMjAxNy0wOC0zMVQyMDo0Mzo0OC4wMDBaXCIsXCJ0YWdzXCI6XCJsaW51eFwifSxcImJvZHlcIjpcIlxcbuacgOi/keWcqOWHhuWkh+WBmuaWsOeahOS7o+eQhuiuvue9rueVjOmdou+8jOeEtuWQjuaDs+WIsOiHquW3seS5n+aUueaUueS7o+eQhueahOmFjee9ru+8jOWlveaWueS+v+eahOeUqOWcqOaWsOeahOiuvue9ruS4iuOAglxcblxcbjwhLS0gbW9yZSAtLT5cXG5cXG7miJHku6XliY3nmoTml6fmlrnmoYjmmK/vvJpcXG5cXG5wcml2b3h5IC0tPiBuZ2lueCAtLT4g5aSa5Liqc3PlrqLmiLfnq68gPT09PSDlpJrkuKpzc+acjeWKoeerr1xcblxcbnByaXZveHnnlKjmnaXlsIZzb2Nrc+i9rOaIkGh0dHDvvIxuZ2lueOaYr+eUqOadpeWkmuS4qnNz6LSf6L295Z2H6KGh44CCXFxuXFxu6L+Z5Liq5pa55qGI6Jm954S25pyJ54K56bq754Om77yM5L2G5piv55So6LW35p2l6L+Y5piv5b6I5ZC855qE44CCXFxuXFxu5L2G5piv5oiR5Lus5pS55LqG5o6n5Yi25Lit5b+D5a+55Luj55CG55qE6K6+572u77yM5Zyo56iL5bqP5YmN6Z2i5Yqg5LiK5LqGcHJveHljaGFpbnPjgIJcXG7liJrlpb3lj6/ku6XlkozmiJHnmoRwcml2b3h55Zyo5L2c55So5LiK5Yay56qB5LqG44CC5L2G5piv5YW25a6e6L+Y5pyJ5LiA5Lqb5YW25LuW6Zeu6aKY77yM5oiR5piv5q+U6L6D5oeS55qE5Lq677yM6Lez6L+H5aSn6ZmGaXDlkozlsYDln5/nvZHlr7nmiJHmnaXor7TmmK/mnInlvojlpKfluK7liqnnmoTvvIzov5nmoLfmiJHlsLHlj6/ku6Xorr7nva7kuIDkuKrlhajlsYDku6PnkIbvvIzogIzkuI3pnIDopoHnu5nmr4/kuKrnqIvluo/ljZXni6zorr7nva7jgIJcXG5cXG7ku6XliY3ogqXnjKvnu5nmiJHku4vnu43ov4fkuIDkupvmlrnms5XvvIzlvZPliJ3miJHlvITnmoTml7blgJnvvIzov5jmmK/lpKrlm77moLfvvIzmgLvmmK/kuI3og73lpb3lpb3nmoTnqLPlrprlt6XkvZzvvIzmiYDku6XmmoLml7bmlL7lvIPkuoblhajlsYDku6PnkIbnmoTmlrnmoYjjgIJwcm92aXh55YW25a6e5piv5Y+v5Lul5YGa6L+Z5qC355qE5LqL77yM5L2G5piv5aW96bq754Om77yM6KaB6Ieq5bex5re75Yqg5b6I5aSa6KeE5YiZ77yMZ2Z3bGlzdOaYr+WPr+S7pei9rOaIkOWug+aUr+aMgeeahGFjdGlvbu+8jOS9huaYr+iHquW3seWGjea3u+WKoOeahOivne+8jOW+iOm6u+eDpuOAguOAkOiAjOaIkeaYr+agueavlOi+g+aHkueahOerueWtkFxcblxcbuS7iuWkqeaKinByb3ZpeHnnu5nmkqTkuIvmnaXkuobvvIzmjaLkuIrku6XliY3nlKjnmoRtZW9377yM5piv55SoZ2/lhpnnmoTvvIzkvZznlKjkuZ/mmK/ovazmiJBodHRw77yM5L2G5piv5a6D5pSv5oyB55qE5pa55qGI5q+U6L6D5aSa77yM5Y+v5Lul55u05o6l5re75Yqgc3PvvIzkuZ/lj6/ku6XmraPlkJHku6PnkIbjgILlvZPliJ3kuI3nlKjlroPnmoTljp/lm6DmmK/miJHmg7Ppmo/mnLrkvb/nlKjkuIDkuKrku6PnkIbvvIzlvZPml7bnlLXkv6HlkozmiJHov4fkuI3ljrvvvIzkuIDkuKrnq6/lj6PnlKjkuYXkuobvvIzlsLHlsIHmiJHkuIDlpKnvvIzlrrPlvpfmiJHml6nkuIrliLDlhazlj7jkuobvvIzlhYjov5znqIvliLDmnI3liqHlmajmlLnnq6/lj6PvvIzlkI7mnaXlj4jop4nlvpfpurvng6bvvIznm7TmjqXlvIDkuoY15Liq56uv5Y+j77yM5q+P5aSp5pS55pys5py677yM5YaN5ZCO5p2l5bCx5oOz6ZqP5py65L2/55So5LqG4oCmICDjgJDov5jmnInmrKHmiormiJHnmoRzc2jnq6/lj6PlsIHkuobkuIDlpKnigKZcXG5cXG7njrDlnKjnmoTor53vvIzlsLHmmK/lj5jmiJDkuobov5nkuKrnu5PmnoTvvJpcXG5cXG5tZW93IC0tPiBuZ2lueCAtLT4g5aSa5Liqc3PlrqLmiLfnq68gPT09PSDlpJrkuKpzc+acjeWKoeerr1xcblxcbm5naW546L+Y5piv5Luj5pu/bWVvd+WBmui0n+i9veWdh+ihoe+8jG1lb3fnmoTlt6XkvZzlsLHlj5jmiJDkuobovazmiJBodHRw5Luj55CG5ZKM6buR55m95ZCN5Y2V44CCXFxuXFxu6Jm954S25LiN6ZyA6KaB5paw55qE5o6n5Yi25Lit5b+D55qE5Luj55CG5pa55qGI77yM546w5Zyo6L+Z5aWX5bCx5bel5L2c55qE5b6I5aW95LqG77yM5L2G5piv5rKh5pyJ5a6D77yM5oiR5bCx5LiN5Lya5YaN5oqY6IW+5paw55qE44CQ56yR5ZOtXCIsXCJmcm9udG1hdHRlclwiOlwidGl0bGU6IOaIkeeahOS7o+eQhuaKmOiFvuaWueahiFxcbmRhdGU6IDIwMTctMDgtMzEgMjA6NDM6NDhcXG50YWdzOiBsaW51eFwifSIsIm1vZHVsZS5leHBvcnRzID0ge1wiYXR0cmlidXRlc1wiOntcInRpdGxlXCI6XCLmraPluLjnmoTmtYHnqIvlnKjnlYzpnaLkuIrljbTmmK9idWdcIixcImRhdGVcIjpcIjIwMTctMDgtMTVUMDc6NDM6NDMuMDAwWlwiLFwidGFnc1wiOm51bGx9LFwiYm9keVwiOlwiXFxu5o6S5p+l5LqG5LiA5aSp77yM5pyA5ZCO57uI5LqO56Gu6K6k5LqG5rWB56iL77yM55+l6YGT5LqG6Zeu6aKY5omA5Zyo77yM5LiN5b6X5LiN6K+077yMZGRlLXNlc3Npb24tdWnov5nkuKrpobnnm67lpKrpnIDopoHkuIDkuKrmlofmoaPkuobvvIzopoHmiorlt6XkvZzmtYHnqIvlhpnnmoTpnZ7luLjor6bnu4bmiY3lj6/ku6XjgIJcXG5cXG48IS0tIG1vcmUgLS0+XFxuXFxu5LiK5Y2I5pS25Yiw5LqG5LiA5p2h5paw5Lu75Yqh77yM5piv6b6Z6Iqv5LiK5paw5a6J6KOF55qE57O757uf6ZyA6KaB6L6T5YWl5Lik5qyh5a+G56CB5omN5Y+v5Lul55m75b2V77yM5rKh5pyJ6ZSZ6K+v5o+Q56S644CC6L+R5pyf5bm25rKh5pyJ5LuA5LmI5aSq5aSn55qE5pS55Yqo77yM5peg6Z2e5piv57uZ6b6Z6Iqv5Lmf55So5LiK5LqG566A5Y2V6YeN5p6E6L+H55qEZGRlLXNlc3Npb24tdWnvvIzmgI7kuYjkvJrlr7zoh7Tov5nmoLfnmoTpl67popjjgIJcXG5cXG7nlLHkuo7mmK/mlrDlronoo4XnmoTns7vnu5/miY3kvJrlj5HnlJ/vvIzogIzkuJTmmK/njrDosaHkuIDml6blj5HnlJ/vvIzlsLHml6Dms5Xph43njrDvvIzov5norqnmiJHlpLTmnInngrnlpKfvvIzmgI7kuYjkvJrmnInov5nmoLfnmoTnpZ7lpYfnmoTkuovmg4XvvIzogIzkuJTml6Xlv5fkuK3lvojmraPluLjvvIzmsqHmnInmlLbliLBtZXNzYWdl5a+86Ie05a+G56CB5qGG6KKr5riF56m644CC5oiR5o+Q5Lqk5LqG5LiA5Liq5re75Yqg5LqG5pu05aSa5pel5b+X55qE77yM54S25ZCO6YeN6KOF55qE6b6Z6Iqv55qE57O757ufKOm+meiKr+mHjeijheS4gOasoeimgeWNiuS4quWwj+aXtinvvIznrYnph43oo4XlrozkuobvvIzliIfmjaLliLB0dHnljrvlronoo4Xov5nkuKrljIXvvIznhLblkI7ph43lkK9saWdodGRt77yM6K6p5oiR6L6T5YWl5a+G56CB5Zue6L2m5Lul5ZCO77yM5a+G56CB5raI5aSx77yM5oiR6LW257Sn5Y6755yL5pel5b+X77yM5L2G5piv5pel5b+X5Lit5bm25rKh5pyJ5oiR55qE6L6T5Ye677yM5Zue6L2m5Lul5ZCO6IKv5a6a5Lya5pyJ55qE5LiA6KGM6L6T5Ye65Lmf5rKh5pyJKOWGheW/g09T77yaV2hhdCB0aGUgZnVjayBpcyB0aGF077yfKVxcblxcbuaIkeWPiOWbnuWOu+eci+mqjOivgeeahOa1geeoi++8jOW5tuayoeacieWPkeeOsOacieS7gOS5iOS4jeWvueeahOWcsOaWue+8jOiAjOS4lOaYr+i/keacn+aJjeacieeahO+8jOaIkeWcqOiHquW3seeUteiEkeS4iuS9v+eUqOS6hum+meiKr+eahOe8luivkeWPguaVsO+8jOaJk+S6huS4gOS4qmRlYuWMhe+8jOW5tuayoeacieWPkeeUn+WSjOm+meiKr+S4gOagt+eahOaDheWGte+8iOi/memHjOW5tuS4jemcgOimge+8jOaXoueEtuaYr+aWsOWuieijheeahOezu+e7n+aJjeS8muWPkeeUn++8jOWcqOaXp+ezu+e7n+S4iuaYr+aXoOazlemHjeeOsOeahO+8ieOAglxcblxcbuWGjeeEtuWQjuaIkeaaguaXtuayoeacieeuoei/meS4qu+8jOWFiOWOu+S/ruWFtuS7lmJ1Z+S6huOAguW/meWujOS7peWQju+8jOaIkeWOu+mXruS6huS4gOS4i+WFtuS7luWkp+S9rO+8jOWkp+S9rOe7meaIkeaPkOS6huWHoOadoeiuqeaIkeWOu+eci+eci++8jOaYr+S4jeaYr+i1t+S6huS4pOS4qmxpZ2h0ZG0tZGVlcGluLWdyZWV0ZXLov5vnqIvvvIznoa7orqTkuIDkuIvkvb/nlKjnmoTkuozov5vliLbmmK/kuI3mmK/kvaDliqDkuoZsb2fnmoTjgILvvIjnhLblkI7miJHlj4jph43oo4Xpvpnoiq/kuobvvInvvIzkuYvlkI7noa7orqTkuobmmK/miJHnmoTkuozov5vliLbvvIzkuZ/msqHmnInotbfkuKTkuKrov5vnqIvjgILkvYbmmK9wc+S4reacieS4pOihjOi+k+WHuu+8jOaIkeS7peS4uuaYr+i1t+S6huS4pOS4qu+8jOWwseiuqeWQjuerr+Wkp+S9rOeci+S6huS4gOS4i++8jOWQjuerr+Wkp+S9rOWRiuivieaIkeivtOS4gOS4quaYr3NoZWxs55qE6L+b56iL77yM5LiA5Liq5piv5pys5L2T77yM6L+Y5piv5Y+q5pyJ5LiA5Liq6L+b56iL5a2Y5Zyo55qE44CC5oiR5b275bqV5oe16YC85LqG77yM54S25ZCO5ZCO56uv5aSn5L2s5ZGK6K+J5oiR77yM5piv5LiN5pivZ3JlZXRlcui/m+eoi+WGmeWFpeS7gOS5iOS6hu+8jOS5i+WQjueahOmqjOivgeS4reWGheWuueW3sue7j+WtmOWcqO+8jOaJgOS7peWwseS4jeS8mumHjeeOsOS6huOAglxcblxcbuWFtuWunui/meS4quaIkeS5n+aDs+i/h++8jOS9huaYr+ayoeiAg+iZkeWkqua3se+8jGdyZWV0ZXLlubbmsqHmnInmk43kvZzmlofku7bvvIzkvYbmmK/lpKfkvazov5nkuYjkuIDor7TvvIzmiJHmg7PliLDmnInkuIDkuptkYnVz55qE6LCD55So77yM5piv5pyJ5YaZ5YWl5paH5Lu255qE77yM54S25ZCO5oiR5oqKL3Zhci9saWIvbGlnaHRkbS9saWdodGRtLWRlZXBpbi1ncmVldGVy55uu5b2V57uZ5Yig6Zmk5LqG77yM5a6M576O6YeN546w44CCXFxuXFxu5oiR55qE5aSp5ZWK77yM5o6S5p+l5LqG5b+r5LiA5aSp77yM5bGF54S25piv6L+Z5Liq55uu5b2V5Zyo5paw6KOF55qE57O757uf5LiK5rKh5pyJ77yM5omA5Lul5Zue6L2m55m75b2V5Lul5ZCO5pS25Yiw5LqG5p2l6IeqZGJ1c+eahHN3aXRjaFRvVXNlcu+8jOeVjOmdoumHjeWQr+WvvOiHtOeahOWGheWuuea2iOWkse+8jOagueacrOS4jeaYr+aUtuWIsOS6hk1lc3NhZ2XmiY3ooqvmuIXnqbrnmoTvvIzmiYDku6XmiJHnmoRsb2fkuZ/msqHmnInmiZPljbDlh7rmnaXjgIJcXG5cXG7nn6XpgZPkuoblpoLkvZXph43njrDvvIzlj6/mmK/opoHmgI7kuYjkv67lpI3lkaLvvIzkvLzkuY7lnKhncmVldGVy5LiK5bm25LiN6IO95L+u5aSN77yM5Y+q6IO95Y675pS5ZGRlLWRhZW1vbuS4rUxvY2tTZXJ2aWNl77yM5aaC5p6c5paH5Lu25LiN5a2Y5Zyo77yM5bCx5LiN6KaB5Y+R6YCBdXNlckNoYW5nZWTnmoTkv6Hlj7fjgILvvIjmtYHnqIvmmK/or7vlj5bov5nkuKrmlofku7bnmoTkv6Hmga/vvIzlkozkvKDlhaXnmoTlj4LmlbDov5vooYzlr7nmr5TvvIzkvYbmmK/mlofku7bmmK/nqbrnmoTvvIzmiYDku6XooqvorqTkuLrkuI3mmK/lkIzkuIDkuKrotKbmiLfvvIzlsLHlj5HpgIHkuobkv6Hlj7fvvIzkuZ/lr7zoh7TkuobnlYzpnaLkuIrph43lkK/vvIzku6XlkI7ml6Dms5Xph43njrDmmK/lm6DkuLrph4zpnaLlt7Lnu4/mnInlhoXlrrnkuobvvInjgIJcXG5cXG7lsLHov5nmoLfvvIzkuIDkuKrmtYHnqIvlvojmraPnoa7vvIzkvYbmmK/ooajnjrDliLDnlYzpnaLkuIrml7blsLHmiJDkuobkuIDkuKpidWfnmoTpl67popjooqvop6PlhrPkuobjgILlhpnkuIvov5nnr4flhoXlrrnmmK/kuLrkuoborrDlvZXmiJHlpoLkvZXop6PlhrPlr7nmiJHmnaXor7Tlvojmo5jmiYvnmoTpl67popjvvIzlhbblrp7ov5nkuKrpl67popjlubbkuI3mmK/lvojlm7Dpmr7vvIzkvYbmmK/lr7nmlbTkuKrlt6XkvZznmoTmtYHnqIvkuI3mmK/lvojnhp/mgonvvIzlr7zoh7TmtarotLnkuoblpKfph4/nmoTml7bpl7TlnKjpnZ7lhbPplK7ngrnlpITnkIbvvIzmnInnqbropoHlhpnkuIDkupvmlofmoaPkuobjgIJcIixcImZyb250bWF0dGVyXCI6XCJ0aXRsZTog5q2j5bi455qE5rWB56iL5Zyo55WM6Z2i5LiK5Y205pivYnVnXFxuZGF0ZTogMjAxNy0wOC0xNSAwNzo0Mzo0M1xcbnRhZ3M6XCJ9IiwibW9kdWxlLmV4cG9ydHMgPSB7XCJhdHRyaWJ1dGVzXCI6e1widGl0bGVcIjpcIua1heiwiEphdmFzY3JpcHTmnoTpgKDlmajmqKHlvI9cIixcImRhdGVcIjpcIjIwMjAtMDEtMzFUMjM6MTU6MjMuMDAwWlwiLFwidGFnc1wiOlwiSmF2YXNjcmlwdFwiLFwiY2F0ZWdvcmllc1wiOlwi6K6+6K6h5qih5byPXCJ9LFwiYm9keVwiOlwiXFxu5Li65LqG566A5YyW5pON5L2c77yMSmF2YVNjcmlwdOaPkOS+m+S6hm5ld+WFs+mUruWtl+OAgm5ld+WFs+mUruWtl+eUqOS6juWIm+W7uuS4gOS4queUqOaIt+WumuS5ieexu+Wei+eahOWunuS+i++8jOaIluiAheWFt+acieaehOmAoOWHveaVsOeahOWGhee9ruWvueixoeeahOWunuS+i+OAglxcblxcbjwhLS0gbW9yZSAtLT5cXG5cXG7mr4/lvZPmiJHku6zlnKjkuIDkuKrlh73mlbDosIPnlKjliY3kvb/nlKhuZXflhbPplK7lrZfvvIzor6Xlh73mlbDkvr/kvJrku6XkuIDnp43nibnmrormqKHlvI/igJTigJTmnoTpgKDmqKHlvI/mnaXov5DooYzvvIzlnKjmraTmqKHlvI/kuK3vvIxKYXZhU2NyaXB05Y+v5Lul6Ieq5Yqo5a6M5oiQ5LiA5Lqb5pON5L2c44CC5Z+65pys5LiK5a6D5piv5oyH6Kej6YeK5Zmo5Zyo5L2g55qE5Luj56CB5Lit5bWM5YWl5Yeg6KGM5pON5L2c5Luj56CB44CCXFxuXFxu5ZyoSmF2YVNjcmlwdOS4re+8jOaehOmAoOWHveaVsOmAmuW4uOaYr+iupOS4uueUqOadpeWunueOsOWunuS+i+eahO+8jOS9huaYr0phdmFTY3JpcHTkuK3msqHmnInnsbvnmoTmpoLlv7XvvIzkvYbmmK/mnInnibnmrornmoTmnoTpgKDlh73mlbDvvIzpgJrov4duZXflhbPplK7lrZfmnaXosIPnlKjlrprkuYnnmoTmnoTpgKDlh73mlbDvvIzkvaDlj6/ku6XlkYror4lKYXZhU2NyaXB05L2g6ZyA6KaB5Yib5bu65LiA5Liq5paw5a+56LGh77yM5bm25LiU5paw5a+56LGh55qE5oiQ5ZGY5aOw5piO6YO95piv5p6E6YCg5Ye95pWw6YeM5a6a5LmJ55qE44CC5Zyo5p6E6YCg5Ye95pWw5YaF6YOo77yMdGhpc+W8leeUqOeahOaYr+aWsOWIm+W7uueahOWvueixoeOAglxcblxcbmBgYFxcbmZ1bmN0aW9uIFBlb3BsZShuYW1lOiBTdHJpbmcsIGFnZTogTnVtYmVyKSB7XFxuICAgIHRoaXMubmFtZSA9IG5hbWU7XFxuICAgIHRoaXMuYWdlID0gYWdlO1xcbiAgICB0aGlzLm91dHB1dCA9IGZ1bmN0aW9uKCkge1xcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZSArIFxcXCLlt7Lnu49cXFwiICsgdGhpcy5hZ2UgKyBcXFwi5bKB5LqGXFxcIjtcXG4gICAgfVxcbn1cXG5cXG5sZXQgcGVvcGxlID0gbmV3IFBlb3BsZShcXFwianVzdGZvcmx4elxcXCIsIDI0KTtcXG5cXG5jb25zb2xlLmxvZyhwZW9wbGUub3V0cHV0KCkpO1xcbmBgYFxcblxcbuS4iumdouaYr+S4quW+iOeugOWNleeahOaehOmAoOWHveaVsOaooeW8j++8jOaIkeS7rOS7juWtl+mdouS4inRoaXPmmK9wZW9wbGXlr7nosaHvvIzkvYbmmK/lhbblrp7lubbkuI3mmK/ov5nmoLfnmoTvvIxuZXfov5DnrpfnrKbluK7liqnmiJHku6znlJ/miJDkuoZ0aGlz55qE5Yid5aeL5YyW5Luj56CB44CCXFxuXFxubmV36L+Q566X56ym5LiA5YWx5YGa5LqG5LiJ5Lu25LqL77yaXFxuXFxuMS4g5Yib5bu65LiA5Liq56m65a+56LGhXFxuMi4g5bCG56m65a+56LGh55qE5Y6f5Z6L6LWL5YC85Li65p6E6YCg5Zmo5Ye95pWw55qE5Y6f5Z6LXFxuMy4g5pu05pS55p6E6YCg5Zmo5Ye95pWw5YaF6YOo55qEdGhpc++8jOWwhuWFtuaMh+WQkeaWsOWIm+W7uueahOWvueixoVxcblxcbmBgYFxcbmxldCB0bXAgPSBuZXcgT2JqZWN0KCk7XFxudG1wLl9fcHJvdG9fXyA9IFBlb3BsZS5wcm90b3R5cGU7XFxuUGVvcGxlLmNhbGwodG1wKTtcXG5gYGBcXG5cXG7mnIDlkI7kvJrnu4/ov4fkuIDkuKrliKTmlq3vvIzlpoLmnpzmnoTpgKDlmajlh73mlbDorr7nva7kuobov5Tlm57lgLzvvIzlubbkuJTov5Tlm57lgLzmmK/kuIDkuKpPYmplY3TnsbvlnovnmoTor53vvIzlsLHnm7TmjqXov5Tlm57or6VPYmplY3TvvIzlkKbliJnlsLHkvJrov5Tlm57mlrDliJvlu7rnmoTnqbrlr7nosaHjgIJcXG5cXG7mgLvnu5PkuIDkuIvvvJogSmF2YVNjcmlwdOayoeacieexu+eahOamguW/te+8jOS9huaYr+S4uuS6huWunueOsE9PUO+8jOWwsemAmui/h25ld+WFs+mUruWtl+WunueOsOWvueWHveaVsOi/m+ihjOaPkuWFpeS7o+eggeadpeWunueOsOWvueixoeWunuS+i+eahOWIneWni+WMluOAguaehOmAoOWZqOaooeW8j+WwseaYr+mAmui/h+S4gOS4quaWueazleadpW5ld+WHuuS4gOS4quWvueixoe+8jOi/meS4quaTjeS9nOWwseWPq+aehOmAoOWZqOaooeW8j+OAglxcblwiLFwiZnJvbnRtYXR0ZXJcIjpcInRpdGxlOiDmtYXosIhKYXZhc2NyaXB05p6E6YCg5Zmo5qih5byPXFxuZGF0ZTogMjAyMC0wMS0zMSAyMzoxNToyM1xcbnRhZ3M6IEphdmFzY3JpcHRcXG5jYXRlZ29yaWVzOiDorr7orqHmqKHlvI9cIn0iLCJtb2R1bGUuZXhwb3J0cyA9IHtcImF0dHJpYnV0ZXNcIjp7XCJ0aXRsZVwiOlwi5rex5bqm5a2m5Lmg56yU6K6wXCIsXCJkYXRlXCI6XCIyMDE4LTA3LTE0VDEwOjAxOjAxLjAwMFpcIixcInRhZ3NcIjpcIkRlZXBpbiBMZWFybmluZ1wiLFwiY2F0ZWdvcmllc1wiOlwiRGVlcGluIExlYXJuaW5nXCJ9LFwiYm9keVwiOlwiXFxu5py65Zmo5a2m5Lmg77yM6aG+5ZCN5oCd5LmJ5b2T54S25piv55So5py65Zmo5p2l5a2m5Lmg44CC5pys5paH5a6M44CCXFxuXFxuPCEtLSBtb3JlIC0tPlxcblxcbuS4iumdoueahOivneaYr+W8gOeOqeeske+8jOWQhOS9jeWuouWumOS4jeimgei1sOKAplxcblxcbiMjICoq5Lq65bel5pm66IO9KipcXG5cXG7kurrlt6Xmmbrog73lhbblrp7kuI3nrpfmlrDlkI3or43vvIzlnKjkurrnsbvljoblj7LnmoTplb/msrPkuK3vvIzlsLHmnInov4flvojlpJrlhbPkuo7mioDoibrpq5jotoXnmoTlt6XljKDliLbpgKDkurrpgKDkurrvvIzlubbotYvkuojmmbrmhafjgILnjrDku6PnmoTkurrlt6Xmmbrog73liJnlp4vkuo7lj6Tlhbjlk7LlrablrrbnlKjmnLrmorDnrKblj7fnmoTop4LngrnmnaXop6Pph4rkurrnsbvmgJ3ogIPov4fnqIvnmoTlsJ3or5XjgIJcXG5cXG4yMOS4lue6qjUw5bm05Luj77yM5Lq657G75L+h5b+D5ruh5ruh55qE5byA5aeL5LqG5Lq65bel5pm66IO955qE5b6B6YCU77yM5L2G5piv6L+Z6Laf5peF56iL5bm25LiN5bmz5Z2m77yMMTk3M+W5tOe+juiLseS4pOWbveaUv+W6nOWBnOatouS6huayoeacieaYjuehruebruagh+eahOS6uuW3peaZuuiDvemhueebrueahOeglOeptuOAguS4g+W5tOWQjuWPiOWPl+WIsOaXpeacrOaUv+W6nOeglOeptuinhOWIkueahOWIuua/gO+8jOWPiOaBouWkjeS6huaLqOasvu+8jOS9huaYr+WcqDgw5bm05Luj5pyr5YaN5qyh5YGc5q2i5LqG5ouo5qy+44CC5Lq65bel5pm66IO955qE56CU56m25bCx6L+Z5qC35Zyo6LeM5a6V6LW35LyP5Lit5LiN5pat55qE5YmN6L+b44CCXFxuXFxu5pe25YWJ6I2P6IuS77yM5Lq657G76L+b5YWl5LqGMjHkuJbnuqrvvIzov5nmrKHkurrlt6Xmmbrog73poobln5/nu4jkuo7ov47mnaXkuobmlrDnmoTkurrnlJ/vvIzorqHnrpfmnLrlt7Lnu4/lvpfliLDkuoblhYXotrPnmoTlj5HlsZXvvIzorqHnrpfog73lipvkuI7ml6Xkv7Hlop7vvIzmm77nu4/lm6DkuLrorqHnrpfog73lipvkuI3otrPlr7zoh7Tml6Dms5XnoJTnqbbnmoTpobnnm67lkoznrpfms5XkuZ/lj6/ku6XlvpfliLDph43mlrDnmoTpqozor4HvvIzlvZPnhLbpmaTkuoborqHnrpfog73lipvmj5DljYfluKbmnaXnmoTmj5DljYfvvIzmm7TlpJrnmoTmmK/luZXlkI7nmoTlt6XkvZzogIXkuI3mlq3nmoTmlLnov5vlkozlrozlloTlkITnp43nrpfms5XvvIzlr7nkuI3lkIznmoTor77popjov5vooYzplb/mnJ/mt7HluqbnmoTnoJTnqbbjgIJcXG5cXG7kurrlt6Xmmbrog73lho3mrKHov5vlhaXlpKfkvJfop4bph47mmK8yMDE25bm077yM5p2l6IeqR29vZ2xl5YWs5Y+455qEQWxwaGFHb+aIkOWKn+WHu+i0peS6humfqeWbvemAieaJi+adjuS4luefs++8jOaIkOS4uuesrOS4gOS4quWcqOWbtOaji+S4iuaImOiDnOS6uuexu+eahOS6uuW3peaZuuiDve+8jOeri+S4i+S6humHjOeoi+eikeOAguWcqEFscGhhR2/ov5vooYzmr5TotZvliY3vvIzkurrnsbvov5joh6rkv6HnmoTorqTkuLrmnLrlmajml6Dms5XlnKjlm7Tmo4votaLlvpfog5zliKkofn7kurrnsbvnlq/ni4LnmoTlpbboh6rlt7HigKZ+finjgIJcXG5cXG5BbHBoYUdv6YeH55So5LqG6JKZ54m55Y2h5rSb5qCR5pCc57Si5ZKM5Lik5Liq5rex5bqm56We57uP572R57uc57uT5ZCI55qE5Yqe5rOV77yM6JKZ54m55Y2h5rSb5qCR5pCc57Si5piv5Z+65LqO5p+Q56eN5Yaz562W6L+H56iL55qE5ZCv5Y+R5byP5pCc57Si566X5rOV77yM5Lik5Liq5rex5bqm56We57uP572R57uc5LiA5Liq5Lul5Lyw5YC8572R57uc5p2l6K+E5Lyw5aSn6YeP55qE6YCJ54K577yM5LiA5Liq5YiZ5Lul6LWw5qOL572R57uc5p2l6YCJ5oup6JC95a2Q77yM5Zyo6L+Z56eN6K6+6K6h5LiL77yM57O757uf5Y+v5Lul57uT5ZCI5qCR5pCc57Si5p2l6ZW/6L+c5o6o5pat77yM5bCx5YOP5Lq66ISR5LiA5qC36K+E5Lyw6JC954K577yM5o+Q6auY5LiL5qOL6IO95Yqb44CCXFxuXFxuIyMgKirkurrlt6Xmmbrog73jgIHmnLrlmajlrabkuaDlkozmt7HluqblrabkuaDnmoTljLrliKsqKlxcblxcbuaIkeS5n+Wvuei/meS4ieS4quWQjeivjeS6p+eUn+i/h+eWkemXru+8jOWFtuWunuW+iOeugOWNle+8mlxcblxcbi0g5Lq65bel5pm66IO977yaIOS6uuW3peWunueOsOeahOaZuuiDvVxcbi0g5py65Zmo5a2m5Lmg77yaIOS4gOenjeS6uuW3peaZuuiDveeahOWunueOsOaWueazlVxcbi0g5rex5bqm5a2m5Lmg77yaIOS4gOenjeacuuWZqOWtpuS5oOeahOWunueOsOaWueazlVxcblxcbiMjIyDmnLrlmajlrabkuaBcXG5cXG7mnLrlmajlrabkuaDmmK/kurrlt6Xmmbrog73nmoTkuIDkuKrliIbmlK/vvIzkurrlt6Xmmbrog73nmoTnoJTnqbbljoblj7LkuK3mnInkuIDmnaHku6XigJzmjqjnkIbigJ3kuLrph43ngrnvvIzliLDku6XigJznn6Xor4bigJ3kuLrph43ngrnvvIzlho3liLDku6XigJzlrabkuaDigJ3kuLrph43ngrnnmoToh6rnhLbjgIHmuIXmmbDnmoTohInnu5zjgILmmL7nhLbmnLrlmajlrabkuaDmmK/mmK/lrp7njrDkurrlt6Xmmbrog73nmoTkuIDmnaHpgJTlvoTvvIzljbPku6XmnLrlmajlrabkuaDkuLrmiYvmrrXop6PlhrPkurrlt6Xmmbrog73kuK3nmoTpl67popjjgIJcXG5cXG7mnLrlmajlrabkuaDlnKjov5EzMOWkmuW5tOW3suWPkeWxleS4uuS4gOmXqOWkmumihuWfn+S6pOWPieWtpuenke+8jOa2ieWPiuamgueOh+iuuuOAgee7n+iuoeWtpuOAgemAvOi/keiuuuOAgeWHuOWIhuaekOOAgeiuoeeul+WkjeadguaAp+eQhuiuuuetieWkmumXqOWtpuenkeOAguacuuWZqOWtpuS5oOeQhuiuuuS4u+imgeaYr+iuvuiuoeWSjOWIhuaekOS4gOS6m+iuqeiuoeeul+acuuWPr+S7peiHquWKqOKAnOWtpuS5oOKAneeahOeul+azleOAguacuuWZqOWtpuS5oOeul+azleaYr+S4gOexu+S7juaVsOaNruS4reiHquWKqOWIhuaekOiOt+W+l+inhOW+i++8jOW5tuWIqeeUqOinhOW+i+WvueacquefpeaVsOaNrui/m+ihjOmihOa1i+eahOeul+azleOAguWboOS4uuWtpuS5oOeul+azleS4rea2ieWPiuS6huWkp+mHj+eahOe7n+iuoeWtpueQhuiuuu+8jOacuuWZqOWtpuS5oOS4juaOqOaWree7n+iuoeWtpuiBlOezu+WwpOS4uuWvhuWIh++8jOS5n+iiq+ensOS4uue7n+iuoeWtpuS5oOeQhuiuuuOAgueul+azleiuvuiuoeaWuemdou+8jOacuuWZqOWtpuS5oOeQhuiuuuWFs+azqOWPr+S7peWunueOsOeahO+8jOihjOS5i+acieaViOeahOWtpuS5oOeul+azleOAguW+iOWkmuaOqOiuuumXrumimOWxnuS6juaXoOeoi+W6j+WPr+W+qumavuW6pu+8jOaJgOS7pemDqOWIhueahOacuuWZqOWtpuS5oOeglOeptuaYr+W8gOWPkeWuueaYk+WkhOeQhueahOi/keS8vOeul+azleOAglxcblxcbiMjIyDmnLrlmajlrabkuaDnmoTlupTnlKhcXG5cXG7mnLrlmajlrabkuaDlt7Llub/ms5vlupTnlKjkuo7mlbDmja7mjJbmjpjjgIHorqHnrpfmnLrop4bop4njgIHoh6rnhLbor63oqIDlpITnkIbjgIHnlJ/niannibnlvoHor4bliKvjgIHmkJzntKLlvJXmk47jgIHljLvlrabor4rmlq3jgIHmo4DmtYvkv6HnlKjljaHmrLror4jjgIHor4HliLjluILlnLrliIbmnpDjgIFETkHluo/liJfmtYvluo/jgIHor63pn7PlkozmiYvlhpnor4bliKvjgIHmiJjnlaXmuLjmiI/lkozmnLrlmajkurrnrYnpoobln5/jgIJcXG5cXG4jIyMg5py65Zmo5a2m5Lmg55qE5a6a5LmJXFxuXFxu5py65Zmo5a2m5Lmg5pyJ5LiL6Z2i5Yeg56eN5a6a5LmJ77yaXFxuLSDmnLrlmajlrabkuaDmmK/kuIDpl6jkurrlt6Xmmbrog73nmoTnp5HlrabvvIzor6Xpoobln5/nmoTkuLvopoHnoJTnqbblr7nosaHmmK/kurrlt6Xmmbrog73vvIznibnliKvmmK/lpoLkvZXlnKjnu4/pqozlrabkuaAtIOS4reaUueWWhOWFt+S9k+eul+azleeahOaAp+iDveOAglxcbi0g5py65Zmo5a2m5Lmg5piv5a+56IO96YCa6L+H57uP6aqM6Ieq5Yqo5pS56L+b55qE6K6h566X5py6566X5rOV55qE56CU56m244CCXFxuLSDmnLrlmajlrabkuaDmmK/nlKjmlbDmja7miJbku6XlvoDnmoTnu4/pqozvvIzku6XmraTkvJjljJborqHnrpfmnLrnqIvluo/nmoTmgKfog73moIflh4bjgIJcXG5cXG4jIyMg5py65Zmo5a2m5Lmg55qE5YiG57G7XFxuXFxu5py65Zmo5a2m5Lmg5Y+v5Lul5aSn5qaC5YiG5Li65Lul5LiL5Yeg57G777yaXFxuLSDnm5HnnaPlrabkuaDvvJrku47nu5nlrprnmoTorq3nu4PmlbDmja7pm4bkuK3lrabkuaDlh7rkuIDkuKrlh73mlbDvvIzlvZPmlrDnmoTmlbDmja7liLDmnaXml7bvvIzlj6/ku6XmoLnmja7ov5nkuKrlh73mlbDpooTmtYvnu5PmnpzjgILnm5HnnaPlrabkuaDnmoTorq3nu4Ppm4bopoHmsYLmmK/ljIXmi6zovpPlhaXlkozovpPlh7rvvIzkuZ/lj6/ku6Xor7TmmK/nibnlvoHlkoznm67moIfjgILorq3nu4Ppm4bkuK3nmoTnm67moIfmmK/nlLHkurrmoIfms6jnmoTjgILluLjop4HnmoTnm5HnnaPlrabkuaDnrpfms5XljIXmi6zlm57lvZLliIbmnpDlkoznu5/orqHliIbnsbvjgIJcXG4tIOWNiuebkeedo+WtpuS5oO+8miDku4vkuo7nm5HnnaPlrabkuaDkuI7ml6Dnm5HnnaPlrabkuaDkuYvpl7TjgIJcXG4tIOaXoOebkeedo+WtpuS5oO+8miDkuI7nm5HnnaPlrabkuaDnm7jmr5TvvIzorq3nu4Ppm4bmsqHmnInkurrkuLrmoIfms6jnmoTnu5PmnpzjgILluLjop4HnmoTml6Dnm5HnnaPlrabkuaDnrpfms5XmnInnlJ/miJDlr7nmipfnvZHnu5zvvIhHQU7vvInjgIHogZrnsbvjgIJcXG4tIOW8uuWMluWtpuS5oO+8miDpgJrov4fop4Llr5/mnaXlrabkuaDlgZrmiJDlpoLkvZXnmoTliqjkvZzjgILmr4/kuKrliqjkvZzpg73kvJrlr7nnjq/looPmnInmiYDlvbHlk43vvIzlrabkuaDlr7nosaHmoLnmja7op4Llr5/liLDnmoTlkajlm7Tnjq/looPnmoTlj43ppojmnaXlgZrlh7rliKTmlq3jgIJcXG5cXG7nm5HnnaPlrabkuaDlkozml6Dnm5HnnaPlrabkuaDnmoTlt67liKvlnKjkuo7orq3nu4PmlbDmja7mmK/lkKbkurrkuLrmoIforrDvvIzku5bku6zpg73mnInorq3nu4Ppm4bvvIzpg73mnInovpPlhaXovpPlh7rjgIJcXG5cXG4jIyMg5py65Zmo5a2m5Lmg55qE566X5rOVXFxuXFxu5YW35L2T55qE5py65Zmo5a2m5Lmg566X5rOV5pyJ77yaXFxuLSDmnoTpgKDpl7TpmpTnkIborrrliIbluIPvvJrogZrnsbvliIbmnpDlkozmqKHlvI/or4bliKtcXG4gIC0g5Lq65bel56We57uP572R57ucXFxuICAtIOWGs+etluagkVxcbiAgLSDmhJ/nn6XlmahcXG4gIC0g5pSv5oyB5ZCR6YeP5py6XFxuICAtIOmbhuaIkOWtpuS5oEFkYUJvb3N0XFxuICAtIOmZjee7tOS4juW6pumHj+WtpuS5oFxcbiAgLSDogZrnsbtcXG4gIC0g6LSd5Y+25pav5YiG57G75ZmoXFxuLSDmnoTpgKDmnaHku7bmpoLnjofvvJrlm57lvZLliIbmnpDlkoznu5/orqHliIbnsbtcXG4gIC0g6auY5pav6L+H56iL5Zue5b2SXFxuICAtIOe6v+aAp+WIpOWIq+WIhuaekFxcbiAgLSDmnIDov5HpgrvlsYXms5VcXG4gIC0g5b6E5ZCR5Z+65Ye95pWw5qC4XFxuLSDpgJrov4flho3nlJ/mqKHlnovmnoTpgKDmpoLnjoflr4bluqblh73mlbDvvJpcXG4gIC0g5pyA5aSn5pyf5pyb566X5rOVXFxuICAtIOamgueOh+WbvuaooeWei++8muWMheaLrOi0neWPtuaWr+e9keWSjE1hcmtvdumaj+acuuWculxcbiAgLSBHZW5lcmF0aXZlIFRvcG9ncmFwaGljIE1hcHBpbmdcXG4tIOi/keS8vOaOqOaWreaKgOacr++8mlxcbiAgLSDpqazlsJTlj6/lpKvpk75cXG4gIC0g6JKZ54m55Y2h572X5pa55rOVXFxuICAtIOWPmOWIhuazlVxcbi0g5pyA5LyY5YyW77ya5aSn5aSa5pWw5Lul5LiK5pa55rOV77yM55u05o6l5oiW6ICF6Ze05o6l5L2/55So5pyA5LyY5YyW566X5rOV44CCXFxuXFxuIyMg5Lq65bel56We57uP572R57ucXFxuXFxu5Zyo5py65Zmo5a2m5Lmg5Lit77yM55uu5YmN5bqU55So5pyA5bm/5rOb55qE5piv5Lq65bel56We57uP572R57ucKEFydGlmaWNpYWwgTmV1cmFsIE5ldHdvcmvvvIxBTk4p77yM566A56ew56We57uP572R57uc44CC5piv5LiA56eN5qih5Lu/55Sf54mp56We57uP572R57uc55qE57uT5p6E5ZKM5Yqf6IO955qE5pWw5a2m5qih5Z6L5oiW6K6h566X5qih5Z6L77yM55So5LqO5a+55Ye95pWw6L+b6KGM5Lyw6K6h5ZKM6L+R5Ly844CC56We57uP572R57uc55Sx5aSn6YeP55qE5Lq65bel56We57uP5YWD6L+e57uT6L+b6KGM6K6h566X44CC5aSn5aSa5pWw5oOF5Ya15LiL5Lq65bel56We57uP572R57uc6IO95Zyo5aSW55WM5L+h5oGv55qE5Z+656GA5LiK5pS55Y+Y5YaF6YOo57uT5p6E77yM5piv5LiA56eN6Ieq6YCC5bqU57O757uf77yM6YCa5L+X5Y+r5YW35aSH5a2m5Lmg6IO95Yqb44CCXFxuXFxuIyMjIOS6uuW3peelnue7j+e9kee7nOeahOe7hOaIkFxcblxcbueOsOS7o+elnue7j+e9kee7nOaYr+S4gOenjemdnue6v+aAp+e7n+iuoeihjOaVsOaNruW7uuaooeW3peWFt++8jOWFuOWei+eahOelnue7j+e9kee7nOWFt+acieS7peS4i+S4ieS4qumDqOWIhu+8mlxcblxcbi0g57uT5p6EKEFyY2hpdGVjdHVyZSk6IOaMh+WumuS6hue9kee7nOS4reeahOWPmOmHj+WSjOWug+S7rOeahOaLk+aJkeWFs+ezu+OAguS+i+Wmgu+8jOelnue7j+e9kee7nOS4reeahOWPmOmHj+WPr+S7peaYr+elnue7j+WFg+i/nuaOpeeahOadg+mHje+8iHdlaWdodHPvvInlkoznpZ7nu4/lhYPnmoTmv4DlirHlgLzvvIhhY3Rpdml0aWVzIG9mIHRoZSBuZXVyb25z77yJ44CCXFxuLSDmv4DlirHlh73mlbAoQWN0aXZpdHkgUnVsZSk6IOWkp+mDqOWIhuelnue7j+e9kee7nOWFt+acieS4gOS4quefreaXtumXtOWwuuW6pueahOWKqOWKm+WtpuinhOWIme+8jOadpeWumuS5ieelnue7j+WFg+WmguS9leagueaNruWFtuS7luelnue7j+WFg+eahOa0u+WKqOadpeaUueWPmOiHquW3seeahOa/gOWKseWAvOOAguS4gOiIrOa/gOWKseWAvOS+nei1luS6jue9kee7nOS4reeahOadg+mHjSjljbPor6XnvZHnu5zkuK3nmoTlj4LmlbAp44CCXFxuLSDlrabkuaDop4TliJkoTGVhcm5pbmcgUnVsZSk6IOWtpuS5oOinhOWImeaMh+WumuS6hue9kee7nOS4reeahOadg+mHjeWmguS9lemaj+edgOaXtumXtOaOqOi/m+iAjOiwg+aVtOOAgui/meS4gOiIrOiiq+eci+WBmuaYr+S4gOenjemVv+aXtumXtOWwuuW6pueahOWKqOWKm+WtpuinhOWImeOAguS4gOiIrOaDheWGteS4i++8jOWtpuS5oOinhOWImeS+nei1luS6juelnue7j+WFg+eahOa/gOWKseWAvOOAguWug+S5n+WPr+iDveS+nei1luS6juebkeedo+iAheaPkOS+m+eahOebruagh+WAvOWSjOW9k+WJjeadg+mHjeeahOWAvOOAguS+i+Wmgu+8jOeUqOS6juaJi+WGmeivhuWIq+eahOS4gOS4quelnue7j+e9kee7nO+8jOacieS4gOe7hOi+k+WFpeelnue7j+WFg+OAgui+k+WFpeelnue7j+WFg+S8muiiq+i+k+WFpeWbvuWDj+eahOaVsOaNruaJgOa/gOWPkeOAguWcqOa/gOWKseWAvOiiq+WKoOadg+W5tumAmui/h+S4gOS4quWHveaVsO+8iOeUsee9kee7nOeahOiuvuiuoeiAheehruWumu+8ieWQju+8jOi/meS6m+elnue7j+WFg+eahOa/gOWKseWAvOiiq+S8oOmAkuWIsOWFtuS7luelnue7j+WFg+OAgui/meS4qui/h+eoi+S4jeaWremHjeWkje+8jOebtOWIsOi+k+WHuuelnue7j+WFg+iiq+a/gOWPkeOAguacgOWQju+8jOi+k+WHuuelnue7j+WFg+eahOa/gOWKseWAvOWGs+WumuS6huivhuWIq+WHuuadpeeahOaYr+WTquS4quWtl+avjeOAglxcblxcbl9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19cXG5cXG7lnKjov5nph4zmiJHmjqjojZDop4LnnIszQmx1ZTFCcm93bueahOS4ieacn+inhumikeOAglxcblxcblvmt7HluqblrabkuaDkuYvnpZ7nu4/nvZHnu5znmoTnu5PmnoQgUGFydCAxIHZlciAyLjBdKGh0dHBzOi8vd3d3LmJpbGliaWxpLmNvbS92aWRlby9hdjE1NTMyMzcwKVxcblxcblvmt7HluqblrabkuaDkuYvmoq/luqbkuIvpmY3ms5UgUGFydCAyIHZlciAwLjkgYmV0YV0oaHR0cHM6Ly93d3cuYmlsaWJpbGkuY29tL3ZpZGVvL2F2MTYxNDQzODgvKVxcblxcblvmt7HluqblrabkuaDkuYvlj43lkJHkvKDmkq3nrpfms5Ug5LiKL+S4iyBQYXJ0IDMgdmVyIDAuOSBiZXRhXShodHRwczovL3d3dy5iaWxpYmlsaS5jb20vdmlkZW8vYXYxNjU3NzQ0OS8pXFxuXFxuX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xcblxcbiMjIyDkurrlt6XnpZ7nu4/nvZHnu5znmoTln7rnoYBcXG5cXG7npZ7nu4/nvZHnu5znmoTmnoTnrZHnkIblv7XmmK/lj5fliLDnlJ/nianvvIjkurrmiJblhbbku5bliqjnianvvInnpZ7nu4/nvZHnu5zlip/og73nmoTov5DkvZzlkK/lj5HogIzkuqfnlJ/nmoTjgILkurrlt6XnpZ7nu4/nvZHnu5zpgJrluLjmmK/pgJrov4fkuIDkuKrln7rkuo7mlbDlrabnu5/orqHlrabnsbvlnovnmoTlrabkuaDmlrnms5XvvIhMZWFybmluZyBNZXRob2TvvInlvpfku6XkvJjljJbvvIzmiYDku6Xkurrlt6XnpZ7nu4/nvZHnu5zkuZ/mmK/mlbDlrabnu5/orqHlrabmlrnms5XnmoTkuIDnp43lrp7pmYXlupTnlKjvvIzpgJrov4fnu5/orqHlrabnmoTmoIflh4bmlbDlrabmlrnms5XmiJHku6zog73lpJ/lvpfliLDlpKfph4/nmoTlj6/ku6XnlKjlh73mlbDmnaXooajovr7nmoTlsYDpg6jnu5PmnoTnqbrpl7TvvIzlj6bkuIDmlrnpnaLlnKjkurrlt6Xmmbrog73lrabnmoTkurrlt6XmhJ/nn6Xpoobln5/vvIzmiJHku6zpgJrov4fmlbDlrabnu5/orqHlrabnmoTlupTnlKjlj6/ku6XmnaXlgZrkurrlt6XmhJ/nn6XmlrnpnaLnmoTlhrPlrprpl67popjvvIjkuZ/lsLHmmK/or7TpgJrov4fnu5/orqHlrabnmoTmlrnms5XvvIzkurrlt6XnpZ7nu4/nvZHnu5zog73lpJ/nsbvkvLzkurrkuIDmoLflhbfmnInnroDljZXnmoTlhrPlrprog73lipvlkoznroDljZXnmoTliKTmlq3og73lipvvvInvvIzov5nnp43mlrnms5Xmr5TotbfmraPlvI/nmoTpgLvovpHlrabmjqjnkIbmvJTnrpfmm7TlhbfmnInkvJjlir/jgIJcXG5cXG7lkozlhbbku5bmnLrlmajlrabkuaDmlrnms5XkuIDmoLfvvIznpZ7nu4/nvZHnu5zlt7Lnu4/ooqvnlKjkuo7op6PlhrPlkITnp43lkITmoLfnmoTpl67popjvvIzkvovlpoLmnLrlmajop4bop4nlkozor63pn7Por4bliKvjgILov5nkupvpl67popjpg73mmK/lvojpmr7ooqvkvKDnu5/ln7rkuo7op4TliJnnmoTnvJbnqIvmiYDop6PlhrPnmoTjgIJcXG5cXG7lr7nkurrnsbvkuK3mnqLnpZ7nu4/ns7vnu5/nmoTop4Llr5/lkK/lj5Hkuobkurrlt6XnpZ7nu4/nvZHnu5zov5nkuKrmpoLlv7XjgILlnKjkurrlt6XnpZ7nu4/nvZHnu5zkuK3vvIznroDljZXnmoTkurrlt6XoioLngrnvvIznp7DkvZznpZ7nu4/lhYPvvIhuZXVyb25z77yJ77yM6L+e5o6l5Zyo5LiA6LW35b2i5oiQ5LiA5Liq57G75Ly855Sf54mp56We57uP572R57uc55qE572R54q257uT5p6E44CCXFxuXFxu5Lq65bel56We57uP572R57uc55uu5YmN5rKh5pyJ5LiA5Liq57uf5LiA55qE5q2j5byP5a6a5LmJ44CC5LiN6L+H77yM5YW35pyJ5LiL5YiX54m554K555qE57uf6K6h5qih5Z6L5Y+v5Lul6KKr56ew5L2c5piv4oCc56We57uP5YyW4oCd55qE77ya5YW35pyJ5LiA57uE5Y+v5Lul6KKr6LCD6IqC55qE5p2D6YeN77yM5o2i6KiA5LmL77yM6KKr5a2m5Lmg566X5rOV6LCD6IqC55qE5pWw5YC85Y+C5pWw77yM5bm25LiUXFxu5Y+v5Lul5Lyw6K6h6L6T5YWl5pWw5o2u55qE6Z2e57q/5oCn5Ye95pWw5YWz57O7XFxu6L+Z5Lqb5Y+v6LCD6IqC55qE5p2D6YeN5Y+v5Lul6KKr55yL5YGa56We57uP5YWD5LmL6Ze055qE6L+e5o6l5by65bqm44CCXFxu5Lq65bel56We57uP572R57uc5LiO55Sf54mp56We57uP572R57uc55qE55u45Ly85LmL5aSE5Zyo5LqO77yM5a6D5Y+v5Lul6ZuG5L2T5Zyw44CB5bm26KGM5Zyw6K6h566X5Ye95pWw55qE5ZCE5Liq6YOo5YiG77yM6ICM5LiN6ZyA6KaB5o+P6L+w5q+P5LiA5Liq5Y2V5YWD55qE54m55a6a5Lu75Yqh44CC56We57uP572R57uc6L+Z5Liq6K+N5LiA6Iis5oyH57uf6K6h5a2m44CB6K6k55+l5b+D55CG5a2m5ZKM5Lq65bel5pm66IO96aKG5Z+f5L2/55So55qE5qih5Z6L77yM6ICM5o6n5Yi25Lit5aSu56We57uP57O757uf55qE56We57uP572R57uc5bGe5LqO55CG6K6656We57uP56eR5a2m5ZKM6K6h566X56We57uP56eR5a2m44CCXFxuXFxu5Zyo56We57uP572R57uc55qE546w5Luj6L2v5Lu25a6e546w5Lit77yM6KKr55Sf54mp5a2m5ZCv5Y+R55qE6YKj56eN5pa55rOV5bey57uP5b6I5aSn56iL5bqm5LiK6KKr5oqb5byD5LqG77yM5Y+W6ICM5Luj5LmL55qE5piv5Z+65LqO57uf6K6h5a2m5ZKM5L+h5Y+35aSE55CG55qE5pu05Yqg5a6e55So55qE5pa55rOV44CC5Zyo5LiA5Lqb6L2v5Lu257O757uf5Lit77yM56We57uP572R57uc5oiW6ICF56We57uP572R57uc55qE5LiA6YOo5YiG77yI5L6L5aaC5Lq65bel56We57uP5YWD77yJ5piv5aSn5Z6L57O757uf5Lit55qE5LiA5Liq6YOo5YiG44CC6L+Z5Lqb57O757uf57uT5ZCI5LqG6YCC5bqU5oCn55qE5ZKM6Z2e6YCC5bqU5oCn55qE5YWD57Sg44CC6Jm954S26L+Z56eN57O757uf5L2/55So55qE6L+Z56eN5pu05Yqg5pmu6YGN55qE5pa55rOV5pu06YCC5a6c6Kej5Yaz546w5a6e5Lit55qE6Zeu6aKY77yM5L2G5piv6L+Z5ZKM5Lyg57uf55qE6L+e5o6l5Li75LmJ5Lq65bel5pm66IO95bey57uP5rKh5pyJ5LuA5LmI5YWz6IGU5LqG44CC5LiN6L+H5a6D5Lus6L+Y5pyJ5LiA5Lqb5YWx5ZCM54K577ya6Z2e57q/5oCn44CB5YiG5biD5byP44CB5bm26KGM5YyW77yM5bGA6YOo5oCn6K6h566X5Lul5Y+K6YCC5bqU5oCn44CC5LuO5Y6G5Y+y55qE6KeS5bqm6K6y77yM56We57uP572R57uc5qih5Z6L55qE5bqU55So5qCH5b+X552A5LqM5Y2B5LiW57qq5YWr5Y2B5bm05Luj5ZCO5pyf5LuO6auY5bqm56ym5Y+35YyW55qE5Lq65bel5pm66IO977yI5Lul55So5p2h5Lu26KeE5YiZ6KGo6L6+55+l6K+G55qE5LiT5a6257O757uf5Li65Luj6KGo77yJ5ZCR5L2O56ym5Y+35YyW55qE5py65Zmo5a2m5Lmg77yI5Lul55So5Yqo5Yqb57O757uf55qE5Y+C5pWw6KGo6L6+55+l6K+G5Li65Luj6KGo77yJ55qE6L2s5Y+Y44CCXFxuXFxu56We57uP572R57uc5Zyo5pep5pyf55qE6L+b5bGV6Z2e5bi457yT5oWi77yM56ys5LiA5Liq6Zeu6aKY5piv5Z+65pys5oSf55+l5Zmo5peg5rOV6Kej5Yaz5byC5oiW6Zeu6aKY77yM56ys5LqM5Liq6Zeu6aKY5piv6K6h566X5py65rKh5pyJ6Laz5aSf55qE6IO95Yqb5aSE55CG5aSn5Z6L56We57uP572R57uc5omA6ZyA6KaB55qE6K6h566X5pe26Ze0LOebtOWIsOiuoeeul+acuuWFt+Wkh+abtOW8uueahOiuoeeul+iDveWKm+WJje+8jOelnue7j+e9kee7nOeahOi/m+WxlemDveS4gOebtOW+iOe8k+aFouOAglxcblxcbiMjIyDlj43lkJHkvKDmkq3nrpfms5XnmoTlh7rnjrBcXG5cXG7lkI7mnaXlh7rnjrDkuoblhbPplK7nmoTnmoTov5vlsZU6IOWcqDE5NzXlubTnlLFQYXVsIFdlcmJvc+aPkOWHuueahOWPjeWQkeS8oOaSreeul+azleOAguivpeeul+azleino+WGs+S6huW8guaIlueahOmXrumimO+8jOi/mOiDveabtOaZrumBjeeahOiuree7g+WkmuWxguelnue7j+e9kee7nOOAguWPjeWQkeS8oOaSreeul+azleWcqDNCbHVlMUJyb3du55qE56ys5LqM5pyf6KeG6aKR5Lit5pyJ6K6y6KejLOinhumikeS4remHh+eUqOS6humAmuS/l+aYk+aHgueahOaWueW8j+adpeS7i+e7jeWPjeWQkeS8oOaSreeul+azleaYr+WmguS9leiwg+aVtOelnue7j+WFg+eahOOAglxcblxcbuelnue7j+e9kee7nOeahOWPiOS4gOS4quWFs+mUrui/m+WxleaYr+aYvuWNoeaAp+iDveeahOaPkOWNh+OAguWkp+WutumDveefpemBk0NQVeWBj+WQkeS6juaOp+WItuiAjOmdnuiuoeeul++8jOi/meWwsemAoOaIkOaXqeacn+WkhOeQhuiuree7g+elnue7j+e9kee7nOeahOS7o+S7t+mdnuW4uOWkp++8jOS9v+eUqENQVeadpeiuree7g+elnue7j+e9kee7nOeahOmAn+W6pumdnuW4uOaFou+8jOiAjOeOsOS7o+WbvuW9ouWkhOeQhuWZqOacieW8uuWkp+eahOW5tuihjOWkhOeQhuiDveWKm+WSjOWPr+e8lueoi+a1geawtOe6v++8jOS7pOa1geWkhOeQhuWZqOS5n+WPr+S7peWkhOeQhumdnuWbvuW9ouaVsOaNruOAgueJueWIq+aYr+WcqOmdouWvueWNleaMh+S7pOa1geWkmuaVsOaNrua1ge+8iFNJTUTvvInkuJTmlbDmja7lpITnkIbnmoTov5Dnrpfph4/ov5zlpKfkuo7mlbDmja7osIPluqblkozkvKDovpPnmoTpnIDopoHml7bvvIzpgJrnlKjlm77lvaLlpITnkIblmajlnKjmgKfog73kuIrlpKflpKfotoXotorkuobkvKDnu5/nmoTkuK3lpK7lpITnkIblmajlupTnlKjnqIvluo/jgILnjrDlnKjmiJHku6zlj6/ku6XovbvmmJPnmoTkvb/nlKhOdmlkaWHnmoRDVURB5pa55qGI5oiW6ICFT3BlbkNM5p2l57yW5YaZ5Luj56CB77yM5bm25L2/55So5pi+5Y2h5p2l6L+b6KGM6K6h566X44CCXFxuXFxuIyMjIOWkmuWxguWJjemmiOe9kee7nFxcblxcbuS4gOenjeW4uOingeeahOWkmuWxgue7k+aehOeahOWJjemmiOe9kee7nO+8iE11bHRpbGF5ZXIgRmVlZGZvcndhcmQgTmV0d29ya++8ieeUseS4iemDqOWIhue7hOaIkO+8mlxcblxcbi0g6L6T5YWl5bGCOiDkvJflpJrnpZ7nu4/lhYPmjqXlj5flpKfph4/pnZ7nur/mgKfnmoTkv6Hmga/vvIzovpPlhaXnmoTkv6Hmga/ooqvnp7DkuLrovpPlhaXlkJHph4/jgIJcXG4tIOmakOWQq+Wxgjog5piv6L6T5YWl5bGC5ZKM6L6T5Ye65bGC5LmL6Ze05LyX5aSa56We57uP5YWD5ZKM6ZO+5o6l57uE5oiQ55qE5ZCE5Liq5bGC6Z2i44CC6ZqQ5ZCr5bGC5Y+v5Lul5pyJ5LiA5bGC5oiW5aSa5bGC44CC6ZqQ5ZCr5bGC55qE6IqC54K577yI56We57uP5YWD77yJ5pWw55uu5LiN5a6a77yM5L2G5pWw55uu6LaK5aSa56We57uP572R57uc55qE6Z2e57q/5oCn6LaK5pi+6JGX77yM5LuO6ICM56We57uP572R57uc55qE5by65YGl5oCn77yIcm9idXN0bmVzc++8ie+8iOaOp+WItuezu+e7n+WcqOS4gOWumue7k+aehOOAgeWkp+Wwj+etieeahOWPguaVsOaRhOWKqOS4i++8jOe7tOaMgeafkOS6m+aAp+iDveeahOeJueaAp++8ieabtOaYvuiRl+OAguS5oOaDr+S4iuS8mumAiei+k+WFpeiKgueCuTEuMuiHszEuNeWAjeeahOiKgueCueOAglxcbi0g6L6T5Ye65bGCOiDlnKjnpZ7nu4/lhYPpk77mjqXkuK3kvKDovpPjgIHliIbmnpDjgIHmnYPooaHvvIzlvaLmiJDovpPlh7rnu5PmnpzjgILovpPlh7rnmoTkv6Hmga/np7DkuLrovpPlh7rlkJHph4/jgIJcXG5cXG7ov5nnp43nvZHnu5zkuIDoiKznp7DkuLrmhJ/nn6XlmajvvIjlr7nljZXpmpDol4/lsYLvvInmiJblpJrlsYLmhJ/nn6XlmajvvIjlr7nlpJrpmpDol4/lsYLvvInvvIznpZ7nu4/nvZHnu5znmoTnsbvlnovlt7Lnu4/mvJTlj5jlh7rlvojlpJrnp43vvIzov5nnp43liIblsYLnmoTnu5PmnoTkuZ/lubbkuI3mmK/lr7nmiYDmnInnmoTnpZ7nu4/nvZHnu5zpg73pgILnlKjjgIJcXG5cXG4jIyMg55CG6K665oCn6LSoXFxuXFxuIyMjIyDorqHnrpfog73liptcXG5cXG7lpJrlsYLmhJ/nn6XlmajvvIhNTFDvvInmmK/kuIDkuKrpgJrnlKjnmoTlh73mlbDpgLzov5HlmajvvIznlLFDeWJlbmtv5a6a55CG6K+B5piO44CC54S26ICM77yM6K+B5piO5LiN5piv55Sx5omA6KaB5rGC55qE56We57uP5YWD5pWw6YeP5oiW5p2D6YeN5p2l5o6o5pat55qE44CCSGF2YSBTaWVnZWxtYW5u5ZKMRWR1YXJkbyBELiBTb250YWfnmoTlt6XkvZzor4HmmI7kuobvvIzkuIDkuKrlhbfmnInmnInnkIbmlbDmnYPph43lgLznmoTnibnlrprpgJLlvZLnu5PmnoTvvIjkuI7lhajnsr7luqblrp7mlbDmnYPph43lgLznm7jlr7nlupTvvInnm7jlvZPkuo7kuIDkuKrlhbfmnInmnInpmZDmlbDph4/nmoTnpZ7nu4/lhYPlkozmoIflh4bnmoTnur/mgKflhbPns7vnmoTpgJrnlKjlm77ngbXmnLrjgILku5bku6zov5vkuIDmraXooajmmI7vvIzkvb/nlKjml6DnkIbmlbDmnYPph43lgLzkvJrkuqfnlJ/kuIDkuKrotoXlm77ngbXmnLrjgIJcXG5cXG4jIyMj44CA5a656YePXFxuXFxu5Lq65bel56We57uP572R57uc5qih5Z6L5pyJ5LiA5Liq5bGe5oCn77yM56ew5Li64oCc5a656YeP4oCd77yM6L+Z5aSn6Ie055u45b2T5LqO5LuW5Lus5qih5ouf5Lu75L2V5Ye95pWw55qE6IO95Yqb44CC5a6D5LiO572R57uc5Lit5Y+v5Lul5a2Y5YKo55qE5L+h5oGv6YeP5pyJ5YWz77yM5Lmf5LiO5aSN5p2C5oCn5pyJ5YWz44CCXFxuXFxuIyMjIyDmlLbmlZvmgKdcXG5cXG7mqKHlnovlubbkuI3mgLvmmK/mlLbmlZvliLDllK/kuIDop6PvvIzlm6DkuLrlroPlj5blhrPkuo7kuIDkupvlm6DntKDjgILpppblhYjvvIzlh73mlbDlj6/og73lrZjlnKjorrjlpJrlsYDpg6jmnoHlsI/lgLzvvIzov5nlj5blhrPkuo7miJDmnKzlh73mlbDlkozmqKHlnovjgILlhbbmrKHvvIzlnKjov5znprvlsYDpg6jmnIDlsI/lgLzml7bvvIzkvJjljJbmlrnms5Xlj6/og73ml6Dms5Xkv53or4HmlLbmlZvjgILnrKzkuInvvIzlr7nlpKfph4/nmoTmlbDmja7miJblj4LmlbDvvIzkuIDkupvmlrnms5Xlj5jlvpfkuI3liIflrp7pmYXjgILlnKjkuIDoiKzmg4XlhrXkuIvvvIzmiJHku6zlj5HnjrDvvIznkIborrrkv53or4HnmoTmlLbmlZvkuI3og73miJDkuLrlrp7pmYXlupTnlKjnmoTkuIDkuKrlj6/pnaDnmoTmjIfljZfjgIJcXG5cXG4jIyMjIOe7vOWQiOe7n+iuoVxcblxcbuWcqOebruagh+aYr+WIm+W7uuS4gOS4quaZrumBjeezu+e7n+eahOW6lOeUqOeoi+W6j+S4re+8jOi/h+W6puiuree7g+eahOmXrumimOWHuueOsOS6huOAgui/meWHuueOsOWcqOWbnuaXi+aIlui/h+W6puWFt+S9k+eahOezu+e7n+S4reW9k+e9kee7nOeahOWuuemHj+Wkp+Wkp+i2hei/h+aJgOmcgOeahOiHqueUseWPguaVsOOAguS4uuS6humBv+WFjei/meS4qumXrumimO+8jOacieS4pOS4quaWueWQke+8muesrOS4gOS4quaYr+S9v+eUqOS6pOWPiemqjOivgeWSjOexu+S8vOeahOaKgOacr+adpeajgOafpei/h+W6puiuree7g+eahOWtmOWcqOWSjOmAieaLqeacgOS9s+WPguaVsOWmguacgOWwj+WMluazm+WMluivr+W3ruOAguS6jOaYr+S9v+eUqOafkOenjeW9ouW8j+eahOato+inhOWMluOAgui/meaYr+S4gOS4quWcqOamgueOh+WMlu+8iOi0neWPtuaWr++8ieahhuaetumHjOWHuueOsOeahOamguW/te+8jOWFtuS4reeahOato+WImeWMluWPr+S7pemAmui/h+S4uueugOWNleaooeWei+mAieaLqeS4gOS4qui+g+Wkp+eahOWFiOmqjOamgueOh+aooeWei+i/m+ihjO+8m+iAjOS4lOWcqOe7n+iuoeWtpuS5oOeQhuiuuuS4re+8jOWFtuebrueahOaYr+acgOWkp+mZkOW6puWcsOWHj+WwkeS6huS4pOS4quaVsOmHj++8muKAnOmjjumZqeKAneWSjOKAnOe7k+aehOmjjumZqeKAne+8jOebuOW9k+S6juivr+W3ruWcqOiuree7g+mbhuWSjOeUseS6jui/h+W6puaLn+WQiOmAoOaIkOeahOmihOa1i+ivr+W3ruOAglxcblxcbiMjIyDkuIDkuKrlsI/kvovlrZBcXG5cXG7njrDlnKjkvZzkuLrmt7HluqblrabkuaDlhaXpl6jnmoTmmK/miYvlhpnmlbDlrZfor4bliKvvvIwzQmx1ZTFCcm93bueahOS4ieacn+inhumikeWwseaYr+WfuuS6juatpOOAglxcblxcbumAmui/h+elnue7j+e9kee7nOadpeWtpuS5oOWmguS9leivhuWIq+aJi+WGmeaVsOWtl++8jOacrOi0qOS4iuWwseaYr+S6uuexu+mAmui/h+eul+azleadpeWIhuino+WbvuWDj+eahOS/oeaBr++8jOavlOWmguaVsOWtlznvvIzlroPlj6/ku6XorqTkuLrmmK/nq5bnur/lkozlnIbnmoTnu4TlkIjvvIzovpPlh7rlsYLmmK8577yM5YiZ6ZqQ5ZCr5bGC6ZyA6KaB5aSE55CG56uW57q/5ZKM5ZyG77yM6L6T5YWl5bGC6L6T5YWl55qE5piv5omL5YaZOeeahOWFqOmDqOWDj+e0oO+8jOmakOWQq+WxguWwseaYr+elnue7j+e9kee7nOeahOaguOW/g++8jOWug+mcgOimgeWPquimgeerlue6v+WSjOWchuWPiOaYr+eUseS7gOS5iOe7hOaIkO+8jOacgOWQjuS4gOatpeatpeeahOWIhuino+S4uuS4gOS4quWDj+e0oO+8jOWGjemAmui/h+WPjeWQkeS8oOaSreeul+azleadpeiuree7g+WSjOiwg+iKgumakOWQq+WxguS4reeahOWBj+e9ruWSjOadg+WAvO+8jOacgOWQjuaVtOS4que9kee7nOWwseWPr+S7peWtpuS5oOWIsOato+ehrueahOivhuWIq+aJi+WGmeaVsOWtl+OAglxcblxcbua3seW6puWtpuS5oOWwseaYr+mAmui/h+S6uuW3peelnue7j+e9kee7nOadpeWRiuivieiuoeeul+acuue7k+aenOaYr+WmguS9leS6p+eUn+eahO+8jOS7peWPiuWmguS9lemAmui/h+e7k+aenOadpeiwg+aVtOe9kee7nOe7k+aehO+8jOi+vuWIsOmihOa1i+WSjOWkhOeQhuacquagh+iusOeahOS/oeaBr+OAglwiLFwiZnJvbnRtYXR0ZXJcIjpcInRpdGxlOiDmt7HluqblrabkuaDnrJTorrBcXG5kYXRlOiAyMDE4LTA3LTE0IDEwOjAxOjAxXFxudGFnczogRGVlcGluIExlYXJuaW5nXFxuY2F0ZWdvcmllczogRGVlcGluIExlYXJuaW5nXCJ9IiwibW9kdWxlLmV4cG9ydHMgPSB7XCJhdHRyaWJ1dGVzXCI6e1widGl0bGVcIjpcIue7mUFyY2hsaW51eOW8gOWQr0JGUeWSjE11UVNTXCIsXCJkYXRlXCI6XCIyMDE5LTEwLTI0VDEzOjE5OjIxLjAwMFpcIixcInRhZ3NcIjpcIkxpbnV4XCIsXCJjYXRlZ29yaWVzXCI6XCJMaW51eFwifSxcImJvZHlcIjpcIlxcbuacgOi/keWcqEFyY2jkuIrmm7TmlrDns7vnu5/nmoTml7blgJnvvIzmgLvmmK/pgYfliLDlm77lvaLlrozlhajljaHkvY/nmoTmg4XlhrXvvIzku4rlpKnkuIrljYjnqoHnhLbmg7PotbfmnaXoh6rlt7Hmm77nu4/orr7nva7kuobkvb/nlKhub29w55qESU/osIPluqbvvIznjJzmtYvmmK/lm6DkuLrov5nkuKrjgILnhLblkI7mnKznnYDkuI3mipjohb7kuI3oiJLmnI3nmoTljp/liJnvvIzmiZPnrpfkvb/nlKhja+WGheaguOS4ik11UVNT55qE6L+b56iL6LCD5bqm5ZKMQkZR55qESU/osIPluqbjgIJcXG5cXG48IS0tIG1vcmUgLS0+XFxuXFxuY2vlhoXmoLjlubbmsqHmnInlnKhhcmNo55qE5LuT5bqT77yM5L2G5pivYXVy5pyJbGludXgtY2vnmoTljIXvvIzlronoo4XkuIDkuIvlsLHlj6/ku6XkuobjgIJcXG5cXG5gYGBcXG55YXkgLVMgbGludXgtY2sgbGludXgtY2staGVhZGVyc1xcbmBgYFxcblxcbue8luivkemcgOimgeS4gOS6m+aXtumXtO+8jOWcqOaIkeeahOegtOacrOWtkGk3LTg1NTBV57yW6K+R5LqG5LiA6aG/6L+H5qGl57Gz57q/55qE5pe26Ze077yM54S25ZCO5oiQ5Yqf5L2/55So5LqGY2vlhoXmoLjjgIJcXG5cXG4jIyMg5byA5ZCvTXVRU1NcXG5cXG5ja+WGheaguOm7mOiupOS9v+eUqOeahOWwseaYr011UVNT6LCD5bqm77yM5bm25LiN6ZyA6KaB5L+u5pS55LuA5LmI77yM5byA5py65Y2z5Y+v44CCXFxuXFxuIyMjIOW8gOWQr0JGUVxcblxcbuW8gOWQr0JGUemcgOimgeS4gOS6m+aJi+WKqOiuvue9ruOAguWIhuS4uuS4pOatpe+8mlxcblxcbjEuIOS/ruaUuWdydWLvvIznu5nlhoXmoLjmj5DkvpvmlrDnmoTlj4LmlbBcXG4yLiDkvb/nlKh1ZGV25byA5ZCv5Yqo5oCB6LCD5pW0XFxuXFxuKirkv67mlLlncnViKipcXG5cXG7nvJbovpFgL2V0Yy9kZWZhdWx0L2dydWJg5LitYEdSVUJfQ01ETElORV9MSU5VWF9ERUZBVUxUYO+8jOWinuWKoOS4gOihjOWGheWuuTpcXG5gYGBcXG5HUlVCX0NNRExJTkVfTElOVVhfREVGQVVMVD1cXFwicXVpZXQgc2NzaV9tb2QudXNlX2Jsa19tcT0xXFxcIlxcbmBgYFxcblxcbueEtuWQjuabtOaWsGdydWLphY3nva7mlofku7Y6XFxuXFxuYGBgXFxuc3VkbyBncnViLW1rY29uZmlnIC1vIC9ib290L2dydWIvZ3J1Yi5jZmdcXG5gYGBcXG5cXG4qKuWIm+W7unVkZXbop4TliJkqKlxcblxcbuWIm+W7uuW5tue8lui+kWAvZXRjL3VkZXYvcnVsZXMuZC82MC1zY2hlZHVsZXIucnVsZXNgXFxuXFxuYGBgXFxuIyBzZXQgZGVhZGxpbmUgc2NoZWR1bGVyIGZvciBub24tcm90YXRpbmcgZGlza3NcXG5BQ1RJT049PVxcXCJhZGR8Y2hhbmdlXFxcIiwgS0VSTkVMPT1cXFwic2RbYS16XVxcXCIsIFRFU1QhPVxcXCJxdWV1ZS9yb3RhdGlvbmFsXFxcIiwgQVRUUntxdWV1ZS9zY2hlZHVsZXJ9PVxcXCJkZWFkbGluZVxcXCJcXG5BQ1RJT049PVxcXCJhZGR8Y2hhbmdlXFxcIiwgS0VSTkVMPT1cXFwic2RbYS16XVxcXCIsIEFUVFJ7cXVldWUvcm90YXRpb25hbH09PVxcXCIwXFxcIiwgQVRUUntxdWV1ZS9zY2hlZHVsZXJ9PVxcXCJiZnFcXFwiXFxuXFxuIyBzZXQgY2ZxIHNjaGVkdWxlciBmb3Igcm90YXRpbmcgZGlza3NcXG5BQ1RJT049PVxcXCJhZGR8Y2hhbmdlXFxcIiwgS0VSTkVMPT1cXFwic2RbYS16XVxcXCIsIEFUVFJ7cXVldWUvcm90YXRpb25hbH09PVxcXCIxXFxcIiwgQVRUUntxdWV1ZS9zY2hlZHVsZXJ9PVxcXCJiZnFcXFwiXFxuQUNUSU9OPT1cXFwiYWRkfGNoYW5nZVxcXCIsIEtFUk5FTD09XFxcIm52bWVbMC05XW4xXFxcIiwgQVRUUntxdWV1ZS9yb3RhdGlvbmFsfT09XFxcIjBcXFwiLCBBVFRSe3F1ZXVlL3NjaGVkdWxlcn09XFxcImJmcVxcXCJcXG5gYGBcXG5cXG7kuIrpnaLnmoTphY3nva7mmK/nu5nlm7rmgIHnoaznm5jkvb/nlKhkZWFkbGluZe+8jOe7meacuuaisOebmOS9v+eUqGJmce+8jOe7mW52bWXnm5hiZnHjgIJcXG5cXG7mnKznnYDnlLXohJHlj6rmnIlzc2TvvIzmiYDku6XlpKnkuI3mgJXlnLDkuI3mgJXnmoTljp/liJnvvIzmiJHpgInmi6nlhajpg6jkvb/nlKhiZnHjgIJcXG5cXG7nhLblkI7ph43lkK/nlLXohJHvvIzmn6XnnIvmiYDmnInnoaznm5jnmoTosIPluqblmajvvJpcXG5cXG5gYGBcXG4jIGp1c3Rmb3JseHogQCBhcmNobGludXggaW4gfiBbMTM6Mjk6MDRdXFxuJCBjYXQgL3N5cy9ibG9jay8qL3F1ZXVlL3NjaGVkdWxlclxcbm1xLWRlYWRsaW5lIGt5YmVyIFtiZnFdIG5vbmVcXG5tcS1kZWFkbGluZSBreWJlciBbYmZxXSBub25lXFxuYGBgXFxuXFxu6YCa6L+HZG1lc2fmn6XnnItNdVFTU+aYr+WQpuW8gOWQr++8mlxcblxcbmBgYFxcbiQgc3VkbyBkbWVzZyB8IGdyZXAgLWkgc2NoZWR1bGVyXFxuQWxpYXMgdGlwOiBfIGRtZXNnIHwgZ3JlcCAtaSBzY2hlZHVsZXJcXG5bICAgIDAuMjk1ODcyXSByY3U6IFJDVSBjYWxjdWxhdGVkIHZhbHVlIG9mIHNjaGVkdWxlci1lbmxpc3RtZW50IGRlbGF5IGlzIDEwIGppZmZpZXMuXFxuWyAgICAxLjIyMzk4Ml0gaW8gc2NoZWR1bGVyIG1xLWRlYWRsaW5lIHJlZ2lzdGVyZWRcXG5bICAgIDEuMjIzOTg0XSBpbyBzY2hlZHVsZXIga3liZXIgcmVnaXN0ZXJlZFxcblsgICAgMS4yMjQwMzhdIGlvIHNjaGVkdWxlciBiZnEgcmVnaXN0ZXJlZFxcblsgICAgMS41ODYxOTFdIE11UVNTIENQVSBzY2hlZHVsZXIgdjAuMTkzIGJ5IENvbiBLb2xpdmFzLlxcbmBgYFxcblxcbiMjIOaAu+e7k1xcblxcbk11UVNT5pivQkZTKOiEkeaui+iwg+W6puWZqCnnmoTov5vljJbniYjvvIzkuLvopoHmmK/mlLnov5vkuoZCRlPnmoRPKG4p5aSN5p2C5bqm77yMQkZT6YCC55So5LqO5qGM6Z2i546v5aKD55So5oi377yM5Y+v5Lul5o+Q5L6b6L6D5aW955qE6L+b56iL5YiH5o2i5ZKM5bu26L+f44CCXFxuQkZR5piv6ZKI5a+556Gs55uY55qESU/osIPluqbvvIzlroPpgJrov4fpooTlhYjliIbphY3kuIDlrprnmoRJT+WQnuWQkOmHj+adpeWQiOeQhuWuieaOkuavj+S4qui/m+eoi+eahElP5pON5L2c44CC5oiR6ZyA6KaB55So5Yeg5aSp5p2l5oSf5Y+X5LiA5LiLTXVRU1PlkoxDRlHnmoTlpb3lpITjgIJcXG5cIixcImZyb250bWF0dGVyXCI6XCJ0aXRsZTog57uZQXJjaGxpbnV45byA5ZCvQkZR5ZKMTXVRU1NcXG5kYXRlOiAyMDE5LTEwLTI0IDEzOjE5OjIxXFxudGFnczogTGludXhcXG5jYXRlZ29yaWVzOiBMaW51eFwifSIsIm1vZHVsZS5leHBvcnRzID0ge1wiYXR0cmlidXRlc1wiOntcInRpdGxlXCI6XCLop6PlhrNJbnRlbGxpSiBJREVB55WM6Z2i556O55y8XCIsXCJkYXRlXCI6XCIyMDE3LTEyLTI1VDE0OjIyOjI1LjAwMFpcIixcInRhZ3NcIjpcIkxpbnV4XCJ9LFwiYm9keVwiOlwiXFxu5LuK5aSp5Zyo6YCb5rex5bqm6K665Z2b55qE5pe25YCZ77yM5peg5oSP6Ze055yL5Yiw5LqG5pyJ5Liq5Zue5aSN77yM5piv5aSE55CGSUVEQeWtl+S9k+W+iOaMq+eahO+8jOivleS6huS4gOS4i++8jOaViOaenOmdnuW4uOajkuOAglxcblxcbuaIkeS5i+WJjeS5n+ivleS6huS6m+e9keS4iueahOWKnuazle+8jOmDveayoeacieino+WGs++8jOWtl+S9k+aMq+eahOagueacrOeci+S4jeS6hu+8jOiiq+mAvOaXoOWliOi3keWIsHdpbmRvd3PkuIvlhplNT0TkuobjgIJcXG5cXG48IS0tbW9yZS0tPlxcblxcblvljp/mlofpk77mjqVdKGh0dHBzOi8vYmJzLmRlZXBpbi5vcmcvZm9ydW0ucGhwP21vZD1yZWRpcmVjdCZnb3RvPWZpbmRwb3N0JnB0aWQ9MTUwNjM0JnBpZD00MTg0MTAmZnJvbXVpZD0xMzI1MClcXG5cXG7lnKgvZXRjL3Byb2ZpbGUuZC/mlrDlu7rkuIDkuKrmlofku7bvvIznlKjmnaXorr7nva5qYXZh55qE546v5aKD5Y+Y6YePOlxcblxcbmBgYFxcbnN1ZG8gdmltIC9ldGMvcHJvZmlsZS5kL3o5OTlfX2phdmFfb3B0aW9ucy5zaFxcbmBgYFxcblxcbmBgYFxcbiMhL2Jpbi9iYXNoXFxub3B0cz1cXFwiIC1Ec3dpbmcuYWF0ZXh0PXRydWUgIC1EYXd0LnVzZVN5c3RlbUFBRm9udFNldHRpbmdzPWxjZCAtRGphdmEubmV0LnVzZVN5c3RlbVByb3hpZXM9dHJ1ZSBcXFwiXFxuZXhwb3J0IF9KQVZBX09QVElPTlM9XFxcImBlY2hvICR7X0pBVkFfT1BUSU9OU30gfHNlZCAtRWUgJ3MvLURhd3QudXNlU3lzdGVtQUFGb250U2V0dGluZ3M9XFxcXHcrLy9pZydgICRvcHRzXFxcIlxcbmBgYFxcblxcbueEtuWQjuazqOmUgOWGjeeZu+W9le+8jOWwseWPr+S7peeci+WIsOaViOaenOS6huOAglxcblxcbuWFtuWunui/meS4quino+WGs+WKnuazleWcqGFyY2jnmoR3aWtp5LiK5pyJ77yM5Y+q5LiN6L+H5Ly85LmO5piv5oiR5YaZ6ZSZ5LqG5ZCn77yM5Y+N5q2j5piv5rKh55Sf5pWI77yM5oyJ54Wn6L+Z56eN5pa55rOV5piv5Y+v5Lul55qE77yM5bCx6L+Z5LmI55So5ZCn44CC6Z2e5bi45oSf6KeJQGloaXBvcOOAglwiLFwiZnJvbnRtYXR0ZXJcIjpcInRpdGxlOiDop6PlhrNJbnRlbGxpSiBJREVB55WM6Z2i556O55y8XFxuZGF0ZTogMjAxNy0xMi0yNSAxNDoyMjoyNVxcbnRhZ3M6IExpbnV4XCJ9IiwibW9kdWxlLmV4cG9ydHMgPSB7XCJhdHRyaWJ1dGVzXCI6e1widGl0bGVcIjpcIuino+WGs05WSURJQemHjeaWsOWQr+WKqOS7peWQjuezu+e7n+WGu+e7k1wiLFwiZGF0ZVwiOlwiMjAxNy0wOS0wMVQxNzowMTo0Ny4wMDBaXCIsXCJ0YWdzXCI6XCJsaW51eFwifSxcImJvZHlcIjpcIlxcbuWIhuacn+S5sOS6huS4gOWPsOelnuiInyBaNi1rcDVzMe+8jOmFjee9rui/mOS4jemUme+8jOWkn+eUqOS4ieW5tOS6hu+8jOS9huaYr+WcqGxpbnV45LiL5L2/55SoYnVtYmxlYmVl55qE5pe25YCZ77yM5Y+R55Sf5LqG6Zeu6aKY77yM5oqY6IW+5LqG5aW95LmF77yM546w5Zyo5oqK6Kej5Yaz5pa55rOV5YaZ5Ye65p2l44CCXFxuXFxuPCEtLSBtb3JlIC0tPlxcblxcbuWFiOivtOS4gOS4i+mXrumimOWQp++8jOato+W4uOWuieijhWJ1bWJsZWJlZeOAgWJic3dpdGNo5ZKMbnZpZGlh6amx5Yqo77yM6YeN5paw5ZCv5Yqo57O757uf5Lul5ZCO77yM57O757uf5Ye6546w5Ya757uT77yM5rKh5pyJ5Lu75L2V55qE6L6T5YWl6L6T5Ye677yM5rKh5pyJ5Lu75L2V5pel5b+X5Lqn55Sf44CC6Zeu6aKY5Ly85LmO5piv5Zu65Lu26ZSZ6K+v77yM6K+m5oOF5p+l55yLW+iuqOiuul0oaHR0cHM6Ly9naXRodWIuY29tL0J1bWJsZWJlZS1Qcm9qZWN0L0J1bWJsZWJlZS9pc3N1ZXMvNzY0KeWSjExpbnV455qEYnVnW+iuqOiuul0oaHR0cHM6Ly9idWd6aWxsYS5rZXJuZWwub3JnL3Nob3dfYnVnLmNnaT9pZD0xNTYzNDEp44CCXFxuXFxu6Kej5Yaz5pa55rOV5piv55yL55qEW1dpdGlrb10oaHR0cHM6Ly93aXRpa28uZ2l0aHViLmlvL09wdGltdXMtb24tTGludXgvKeeahOWNmuWuou+8jOmAmui/h+e7meWGheaguOS8oOmAkuWPguaVsOadpemYsuatouezu+e7n+WHuueOsOWGu+e7k+OAguS/ruaUuS9ldGMvZGVmYXVsdC9ncnViLOWcqOaWh+S7tuW6lemDqOi/veWKoOS7peS4i+WGheWuue+8mlxcblxcbmBgYFxcbiMgQnVtYmxlYmVlIDMuMi4xIGZpeCAoc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9CdW1ibGViZWUtUHJvamVjdC9CdW1ibGViZWUvaXNzdWVzLzc2NClcXG5HUlVCX0NNRExJTkVfTElOVVhfREVGQVVMVD1cXFwiJEdSVUJfQ01ETElORV9MSU5VWF9ERUZBVUxUIFxcXCInYWNwaV9vc2k9ISBhY3BpX29zaT1cXFwiV2luZG93cyAyMDA5XFxcIidcXG5gYGBcXG5cXG7lpoLmnpzkuI3mlL7lv4PvvIzor7flhYjnpoHnlKjnmbvlvZXnrqHnkIblmajvvIzpmLLmraLlvIDmnLrlsLHlh7rnjrDlhrvnu5PvvIznhLblkI7lsJ3or5XmiYvliqjlkK/liqjnmbvlvZXnrqHnkIblmajjgILlnKh0dHnnmbvlvZXvvIznhLblkI7miafooYzvvJpcXG5cXG5gYGBcXG5zdWRvIHN5c3RlbWN0bCBzdGFydCBkaXNwbGF5LW1hbmFnZXIuc2VydmljZVxcbmBgYFxcblxcbuWmguaenOS4gOWIh+ato+W4uO+8jOS9oOWwhuS8mueci+WIsOWbvuW9ou+8jOW5tuS4lGxzcGNpIC125Lit6IO955yL5YiwbnZpZGlh5bey57uP6KKr56aB55So77yM54S25ZCO5L2/55So5o+Q5L6b55qE5rWL6K+V5pa55rOV6L+b6KGM5rWL6K+V77yM5Y+v5Lul55yL5YiwbnZpZGlh6KKr5ZCv55So77yM5YWz6Zet5rWL6K+V5oiQ5Yqf77yMbnZpZGlh6KKr56aB55So44CCXFxuXFxuXFxu5o+Q5L6b5LiA5LiL5oiR5YWz6ZetbnZpZGlh5Lul5ZCO55qE5L2/55So5ZKM57ut6Iiq5pe26Ze05ZCn44CC5Lqu5bqm6LCD6IqC5Li6NTAl77yMY3B16K6+572u5Li6cG93ZXJzYXZl77yM6L+Q6KGM5LqG5LiA5LiL56iL5bqP77yaXFxuXFxuLSB0ZWxlZ3JhbVxcbi0gY2hyb21lXFxuLSBkZGUtZmlsZS1tYW5hZ2VyXFxuLSB2cyBjb2RlXFxuLSBtZW93XFxuLSDoi6XlubJzcyBjbGllbnRcXG4tIOi/mOacieS4gOWkp+WghuS5seS4g+WFq+ezn+eahOacjeWKoe+8jOaHkuW+l+WGmeS6hlxcblxcbuS7jjE0OjM15byA5aeL5pat55S15rWL6K+V77yM5YiwMTc6MTfov5jmnIkyMyXnmoTnlLXph4/jgIJcIixcImZyb250bWF0dGVyXCI6XCJ0aXRsZTog6Kej5YazTlZJRElB6YeN5paw5ZCv5Yqo5Lul5ZCO57O757uf5Ya757uTXFxuZGF0ZTogMjAxNy0wOS0wMSAxNzowMTo0N1xcbnRhZ3M6IGxpbnV4XCJ9IiwibW9kdWxlLmV4cG9ydHMgPSB7XCJhdHRyaWJ1dGVzXCI6e1widGl0bGVcIjpcIuiusOW9leS4gOS4quWdkeeIueeahHVzYue9keWNoVwiLFwiZGF0ZVwiOlwiMjAxOS0xMi0wOVQxOTozMTowNC4wMDBaXCIsXCJ0YWdzXCI6XCJMaW51eFwiLFwiY2F0ZWdvcmllc1wiOlwiTGludXhcIn0sXCJib2R5XCI6XCJcXG7nvZHljaHlnovlj7fmmK9SZWFsdGVrIFJUTDg4MTFDVS9SVEw4ODIxQ1UgVVNCIFdpLUZpIGFkYXB0ZXLvvIzkubDmnaXmmK/kuLrkuoborqnpu5Hoi7nmnpzkuIrnvZHnmoTvvIx3aW5kb3dz5LiL5Lmf5Lya6Ieq5Yqo5LiL6L295ZKM5a6J6KOF6amx5Yqo77yM5L2G5pivbGludXjmr5TovoPpmr7lj5fvvIzlhoXmoLjkuI3mj5Dkvpvov5nmoLfnmoTpqbHliqjvvIzlj6rog73ljrvlrpjmlrnmi7/mupDnoIHmkJ7vvIzku4rlpKnlnKhhcmNo5LiK5omT566X6KOF5LiA5LiL6amx5Yqo77yM57uT5p6c6YGH5Yiw5LqG5b6I5aSa6Zeu6aKY44CCXFxuXFxud2lraeS4iuaOqOiNkOeahDg4MjHlupTor6Xkvb/nlKhydGw4OHh4YXUtYWlyY3JhY2stZGttcy1naXTvvIzkvYbmmK/miJHlronoo4Xku6XlkI7ljovmoLnkuI3og73nlKjvvIzkuIDngrnlj5jljJbpg73msqHmnInvvIzogIzkuJRtb2Rwcm9iZeS5n+ayoeacieS9nOiAhee7meWHuueahDg4WFhhde+8jOaXoOWliOWPquW+l+aUvuW8g+OAglxcblxcbue7p+e7reiwt+atjOS5i++8jOWcqFtodHRwczovL2ZvcnVtLm14bGludXgub3JnL3ZpZXd0b3BpYy5waHA/Zj0xMDcmdD01MDU3OV0oaHR0cHM6Ly9mb3J1bS5teGxpbnV4Lm9yZy92aWV3dG9waWMucGhwP2Y9MTA3JnQ9NTA1Nzkp55yL5Yiw5LqG5Yir5Lq657uZ55qE5pa55qGI77yM54S25ZCO5p6c5patY2xvbmXlubZtYWtlLOeEtuWQjuWwseWboOS4uuayoeaciemAgumFjTUueOeahOWGheaguOe8luivkeWksei0pe+8jOi/meWPr+S4jeihjO+8jOe/u+S6huS4gOS4i2lzc3Vl77yM55yL5Yiw5L2c6ICF5ZyoW2h0dHBzOi8vZ2l0aHViLmNvbS93aGl0ZWJhdG1hbjIvcnRsODgyMUNVL2lzc3Vlcy8zM10oaHR0cHM6Ly9naXRodWIuY29tL3doaXRlYmF0bWFuMi9ydGw4ODIxQ1UvaXNzdWVzLzMzKeaPkOWIsOS6huS4gOS4qlsjMjNdKGh0dHBzOi8vZ2l0aHViLmNvbS93aGl0ZWJhdG1hbjIvcnRsODgyMUNVL2lzc3Vlcy8yMynvvIzov5nmoIfpopjlhpnnmoTlpJ/lj6/ku6XvvIxgTmV3ZXIgdmVyc2lvbiA1LjQuMSAoU3VwcG9ydCBMaW51eCB2ZXJzaW9ucyBmcm9tIDQuNC54IHVwIHRvIDUuNC54KSBg77yM6LW257Sn5pCe6LW377yM5Y675rqQ5Zyw5Z2AY2xvbmXlkoxtYWtlLOaIkOWKn+S9v+eUqOS4iuS6humpseWKqO+8jOaMieeFp+S9nOiAheaPkOWIsOeahOWuieijhWB1c2JfbW9kZXN3aXRjaGDvvIzlubbliIfmjaJ1c2LmqKHlvI/vvIzmiJHmiJDlip/nmoTkvb/nlKjkuIrkuobov5nkuKp1c2LnvZHljaHjgIJcXG5cXG4+IOWQkOanveS4gOS4i++8jOW8gOWPkeeOr+Wig+i/mOaYr2xpbnV45LiL6IiS5pyN77yM5LuT5bqT55qE5YyF5a6J6KOF5LiA5LiL5bCx5Y+v5Lul5byA5Y+R5LqG77yMd2luZG93c+S4i+imgeiHquW3seWGmei3r+W+hO+8jG1hY+S4i2JyZXfpmZDliLblpKrmrbvvvIzkuIDkupvlupPlronoo4Xku6XlkI7ov5jopoHoh6rlt7HmiYvliqjlgZrkupvlpITnkIbvvIzkuIDkuI3lsI/lv4PlsLHmiopzaGVsbOeahOeOr+Wig+WPmOmHj+aQnuS4jeihjOS6hu+8jOaIluiAheWOi+agueS4jeiDveato+W4uOW3peS9nOOAglxcblwiLFwiZnJvbnRtYXR0ZXJcIjpcInRpdGxlOiDorrDlvZXkuIDkuKrlnZHniLnnmoR1c2LnvZHljaFcXG5kYXRlOiAyMDE5LTEyLTA5IDE5OjMxOjA0XFxudGFnczogTGludXhcXG5jYXRlZ29yaWVzOiBMaW51eFwifSIsIm1vZHVsZS5leHBvcnRzID0ge1wiYXR0cmlidXRlc1wiOntcInRpdGxlXCI6XCLph43mnoRkZGUtc2Vzc2lvbi11aVwiLFwiZGF0ZVwiOlwiMjAxOC0wMy0xMVQxMTo0ODowMS4wMDBaXCIsXCJ0YWdzXCI6XCJMaW51eFwifSxcImJvZHlcIjpcIlxcbmRkZS1zZXNzaW9uLXVp6YeM6Z2i5YyF5ZCr5LqG5b6I5aSa6aG555uu77yM5piv5LiA5Liq6ZuG5ZCI77yM5L2G5piv5YW25Lit55qE5Luj56CB57y65bCR5ZCI55CG55qE57u05oqk77yM5Lul6Iez5LqO5bey57uP5Yiw5LqG5b+F6aG76YeN5p6E5omN6IO957un57ut5byA5Y+R5ZKM57u05oqk77yM5Zyo5pSv5oyBQUTln5/nmbvlvZXnmoTml7blgJnvvIzlpoLmnpzlvLrliLbliqDkuIrlip/og73vvIzku6PnoIHkvJrlj5jlvpfmm7TliqDns5/ns5XvvIzmiYDku6Xlkoznn7PljZrmlofkuIDlnZfph43mnoTkuoblhbbkuK3pnZ7luLjph43opoHnmoRVc2VyV2lkZ2V044CCXFxuXFxuPCEtLSBtb3JlIC0tPlxcblxcbiMjIOmHjeaehOWJjeeahOiuvuiuoVxcblxcbumHjeaehOWJjeeahGRkZS1sb2Nr5ZKMbGlnaHRkbS1kZWVwaW4tZ3JlZXRlcuaYr+mdnuW4uOa3t+S5seeahO+8jOWkhOeQhumAu+i+kemDvea3t+adguWcqOS4gOWdl++8jOiZveeEtuiDveeci+WHuuacieWfuuacrOeahOe7k+aehO+8jOS9huaYr+aVtOS9k+W5tuacquino+iApuOAglxcblxcbiMjIOmHjeaehOWQjueahOiuvuiuoVxcblxcbi0g5Z+65LqOVXNlcuexu+eahOWkhOeQhlxcbi0gVXNlcldpZGdldOi0n+i0o+aPkOS+m+WvueeUqOaIt+eahOWkhOeQhu+8jOaatOmcsuWHuuWfuuacrOeahGN1cnJlbnRVc2Vy5ZKMTG9naW5kVXNlcnPjgIJcXG4tIExvY2vlkoxHcmVldGVy55qETWFuYWdlcuS7jlVzZXJXaWRnZXTjgIFTZXNzaW9uV2lkZ2V05Lit6I635Y+W55So5oi35ZKM55So5oi355qE5Lya6K+d44CCXFxuLSBNYW5hZ2Vy5Y+q6LSf6LSj5o6n5Lu255qE5L2N572u5ZKM55So5oi355qE6aqM6K+B44CCXFxuLSDog4zmma/kv67mlLnkuLpNYW5hZ2Vy5o+Q5L6b5qih57OK55qE5aOB57q477yMRnVsbEJhY2tncm91bmTlj6rmj5Dkvpvnu5jliLbjgIJcXG5cXG7ph43mnoTku6XlkI7nlKjkuoblpKfmpoLljp/ku6PnoIHnmoQxLzPvvIzlkK/liqjpgJ/luqbkuZ/lv6vkuobvvIzmhJ/op4nkuJbnlYzlhYXmu6Hkuobnvo7lpb3igKYg5bCx5piv6YeN5p6E5Y6G56iL5aSq6L6b6Ium4oCmXFxuXFxu5pys5qyh5Lmf5Y+R546w5LqG5b6I5aSa6Ieq6Lqr55qE6Zeu6aKY77yM5Z+656GA5bm25rKh5pyJ5a2m5aW977yM5b6I5aSa5Zyw5pa56YO95Y+v5Lul5L2/55So5pu05aW955qE5aSE55CG5pa55byP44CQ5bCx5piv566h5LiN5L2P6L+Z5omL4oCm44CRXFxuXFxuXCIsXCJmcm9udG1hdHRlclwiOlwidGl0bGU6IOmHjeaehGRkZS1zZXNzaW9uLXVpXFxuZGF0ZTogMjAxOC0wMy0xMSAxMTo0ODowMVxcbnRhZ3M6IExpbnV4XCJ9Il0sInNvdXJjZVJvb3QiOiIifQ==