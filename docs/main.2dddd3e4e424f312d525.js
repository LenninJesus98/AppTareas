/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "D": () => (/* binding */ tareas)
});

;// CONCATENATED MODULE: ./src/js/components/components.js
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



var listDiv = document.querySelector('.todo-list');
var tareaInput = document.querySelector('.new-todo');
var btnEliminarTodo = document.querySelector('.clear-completed');
var filtro = document.querySelector('.filters');
var filtroSelect = document.querySelectorAll('.filtro');
var mostrarHTML = function mostrarHTML(tarea) {
  var nombre = tarea.nombre,
      completado = tarea.completado,
      id = tarea.id;
  var html = "\n    <li class=\"".concat(completado ? 'completed' : '', "\" data-id=\"").concat(id, "\">\n    <div class=\"view\">\n    <input class=\"toggle\" type=\"checkbox\" ").concat(completado ? 'checked' : '', ">\n    <label>").concat(nombre, "</label>\n    <button class=\"destroy\"></button>\n    </div>\n    <input class=\"edit\" value=\"Create a TodoMVC template\">\n    </li>\n    ");
  var div = document.createElement('div');
  div.innerHTML = html;
  listDiv.appendChild(div.firstElementChild);
  return div;
};
tareaInput.addEventListener('keyup', function (e) {
  if (e.keyCode === 13 && tareaInput.value.length >= 4) {
    var tarea = new TareaModel(tareaInput.value);
    tareas.addTarea(tarea);
    tareaInput.value = '';
  }
});
listDiv.addEventListener('click', function (e) {
  var nameInput = e.target.localName;
  var tareaLi = e.target.parentElement.parentElement;
  var id = tareaLi.getAttribute('data-id');

  if (nameInput.includes('input')) {
    tareas.marcarCompletado(id);
    tareaLi.classList.toggle('completed');
  } else if (nameInput.includes('button')) {
    tareas.eliminar(id);
    console.log('elimnado');
    listDiv.removeChild(tareaLi);
  }
});
btnEliminarTodo.addEventListener('click', function () {
  tareas.eliminarCompletados();

  for (var i = listDiv.children.length - 1; i >= 0; i--) {
    var elemento = listDiv.children[i];

    if (elemento.classList.contains('completed')) {
      listDiv.removeChild(elemento);
    }

    console.log(tareas);
  }

  ;
});
filtro.addEventListener('click', function (e) {
  var filtro = e.target.text;
  if (!filtro) return;
  filtroSelect.forEach(function (elem) {
    return elem.classList.remove('selected');
  });
  e.target.classList.add('selected');

  var _iterator = _createForOfIteratorHelper(listDiv.children),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var elemento = _step.value;
      console.log(elemento);
      elemento.classList.remove('hidden');
      var elementCompletado = elemento.classList.contains('completed');

      switch (filtro) {
        case 'Pendientes':
          if (elementCompletado) {
            elemento.classList.add('hidden');
          }

          break;

        case 'Completados':
          if (!elementCompletado) {
            elemento.classList.add('hidden');
          }

          break;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
});
;// CONCATENATED MODULE: ./src/classes/TareaList.class.js
function TareaList_class_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = TareaList_class_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function TareaList_class_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return TareaList_class_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return TareaList_class_arrayLikeToArray(o, minLen); }

function TareaList_class_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }


var TareaList = /*#__PURE__*/function () {
  function TareaList() {
    _classCallCheck(this, TareaList);

    // this.tareas = [];
    this.cargarStorage();
  }

  _createClass(TareaList, [{
    key: "addTarea",
    value: function addTarea(tarea) {
      // añade tareas;
      this.tareas.push(tarea);
      mostrarHTML(tarea);
      this.guardarStorage();
    }
  }, {
    key: "marcarCompletado",
    value: function marcarCompletado(id) {
      var _iterator = TareaList_class_createForOfIteratorHelper(this.tareas),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var tarea = _step.value;

          if (tarea.id == id) {
            tarea.completado = !tarea.completado;
            this.guardarStorage();
            break;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      ;
    }
  }, {
    key: "eliminar",
    value: function eliminar(id) {
      this.tareas = this.tareas.filter(function (tarea) {
        return tarea.id != id;
      });
      this.guardarStorage();
    }
  }, {
    key: "eliminarCompletados",
    value: function eliminarCompletados() {
      this.tareas = this.tareas.filter(function (tarea) {
        return !tarea.completado;
      });
      this.guardarStorage();
    }
  }, {
    key: "guardarStorage",
    value: function guardarStorage() {
      localStorage.setItem('tareas', JSON.stringify(this.tareas));
    }
  }, {
    key: "cargarStorage",
    value: function cargarStorage() {
      this.tareas = localStorage.getItem('tareas') ? JSON.parse(localStorage.getItem('tareas')) : []; // console.log(this.tareas);
    }
  }]);

  return TareaList;
}();
;// CONCATENATED MODULE: ./src/classes/TareaModel.class.js
function TareaModel_class_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function TareaModel_class_createClass(Constructor, protoProps, staticProps) { if (protoProps) TareaModel_class_defineProperties(Constructor.prototype, protoProps); if (staticProps) TareaModel_class_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function TareaModel_class_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TareaModel = /*#__PURE__*/TareaModel_class_createClass(function TareaModel(tarea) {
  TareaModel_class_classCallCheck(this, TareaModel);

  this.nombre = tarea;
  this.completado = false;
  this.id = new Date().getTime();
  this.fecha = new Date();
});
;// CONCATENATED MODULE: ./src/classes/index.js



;// CONCATENATED MODULE: ./src/index.js



var tareas = new TareaList(); // console.log(tareas.tareas);
// creamos las tareas en html usando el foreach

tareas.tareas.forEach(function (tarea) {
  mostrarHTML(tarea); //tambien podemos usasr solo la funcion mostrarHTML sin parametros ni parentesis
}); // const newTarea = new TareaModel('tarea como instancia')
// tareas.addTarea(newTarea)
// console.log(tareas.tareas);
/******/ })()
;