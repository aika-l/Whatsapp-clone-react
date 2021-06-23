/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/Chat.js":
/*!****************************!*\
  !*** ./components/Chat.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_getRecipientEmail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/getRecipientEmail */ \"./utils/getRecipientEmail.js\");\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../firebase */ \"./firebase.js\");\n/* harmony import */ var react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-firebase-hooks/firestore */ \"react-firebase-hooks/firestore\");\n/* harmony import */ var react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-firebase-hooks/auth */ \"react-firebase-hooks/auth\");\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_7__);\n\nvar _jsxFileName = \"/Users/aiday/Desktop/Seytech/React Projects/Whatsapp-clone-react/components/Chat.js\";\n\n\n\n\n\n\n\n\nfunction Chat({\n  id,\n  users\n}) {\n  var _recipientSnapshot$do, _recipientSnapshot$do2;\n\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n  const [user] = (0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_7__.useAuthState)(_firebase__WEBPACK_IMPORTED_MODULE_4__.auth);\n  const [recipientSnapshot] = (0,react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_5__.useCollection)(_firebase__WEBPACK_IMPORTED_MODULE_4__.db.collection('users').where('email', '==', (0,_utils_getRecipientEmail__WEBPACK_IMPORTED_MODULE_3__.default)(users, user)));\n\n  const enterChat = () => {\n    router.push(`/chat/${id}`);\n  };\n\n  const recipient = recipientSnapshot === null || recipientSnapshot === void 0 ? void 0 : (_recipientSnapshot$do = recipientSnapshot.docs) === null || _recipientSnapshot$do === void 0 ? void 0 : (_recipientSnapshot$do2 = _recipientSnapshot$do[0]) === null || _recipientSnapshot$do2 === void 0 ? void 0 : _recipientSnapshot$do2.data();\n  const recipientEmail = (0,_utils_getRecipientEmail__WEBPACK_IMPORTED_MODULE_3__.default)(users, user);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Container, {\n    onClick: enterChat,\n    children: [recipient ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UserAvatar, {\n      src: recipient === null || recipient === void 0 ? void 0 : recipient.photoURL\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 13\n    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UserAvatar, {\n      children: recipientEmail[0]\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n      children: recipientEmail\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 23,\n    columnNumber: 9\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Chat);\nconst Container = (styled_components__WEBPACK_IMPORTED_MODULE_1___default().div)`\n    display: flex;\n    align-items: center;\n    cursor: pointer;\n    padding: 15px;\n    word-break: break-word;\n\n    :hover {\n        background-color: #e9eaeb;\n    }\n`;\nconst UserAvatar = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Avatar)`\n    margin: 5px;\n    margin-right: 15px;\n`;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aGF0c2FwcC1jbG9uZS8uL2NvbXBvbmVudHMvQ2hhdC5qcz9kZWVmIl0sIm5hbWVzIjpbIkNoYXQiLCJpZCIsInVzZXJzIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlciIsInVzZUF1dGhTdGF0ZSIsImF1dGgiLCJyZWNpcGllbnRTbmFwc2hvdCIsInVzZUNvbGxlY3Rpb24iLCJkYiIsIndoZXJlIiwiZ2V0UmVjaXBpZW50RW1haWwiLCJlbnRlckNoYXQiLCJwdXNoIiwicmVjaXBpZW50IiwiZG9jcyIsImRhdGEiLCJyZWNpcGllbnRFbWFpbCIsInBob3RvVVJMIiwiQ29udGFpbmVyIiwic3R5bGVkIiwiVXNlckF2YXRhciIsIkF2YXRhciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxTQUFTQSxJQUFULENBQWU7QUFBQ0MsSUFBRDtBQUFLQztBQUFMLENBQWYsRUFBNEI7QUFBQTs7QUFDeEIsUUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4QjtBQUNBLFFBQU0sQ0FBQ0MsSUFBRCxJQUFTQyx1RUFBWSxDQUFDQywyQ0FBRCxDQUEzQjtBQUNBLFFBQU0sQ0FBQ0MsaUJBQUQsSUFBc0JDLDZFQUFhLENBQUNDLG9EQUFBLENBQWMsT0FBZCxFQUF1QkMsS0FBdkIsQ0FBNkIsT0FBN0IsRUFBc0MsSUFBdEMsRUFBNENDLGlFQUFpQixDQUFDVixLQUFELEVBQVFHLElBQVIsQ0FBN0QsQ0FBRCxDQUF6Qzs7QUFFQSxRQUFNUSxTQUFTLEdBQUcsTUFBTTtBQUNwQlYsVUFBTSxDQUFDVyxJQUFQLENBQWEsU0FBUWIsRUFBRyxFQUF4QjtBQUNILEdBRkQ7O0FBSUEsUUFBTWMsU0FBUyxHQUFHUCxpQkFBSCxhQUFHQSxpQkFBSCxnREFBR0EsaUJBQWlCLENBQUVRLElBQXRCLG9GQUFHLHNCQUEwQixDQUExQixDQUFILDJEQUFHLHVCQUE4QkMsSUFBOUIsRUFBbEI7QUFDQSxRQUFNQyxjQUFjLEdBQUdOLGlFQUFpQixDQUFDVixLQUFELEVBQVFHLElBQVIsQ0FBeEM7QUFFQSxzQkFDSSw4REFBQyxTQUFEO0FBQVcsV0FBTyxFQUFFUSxTQUFwQjtBQUFBLGVBQ0tFLFNBQVMsZ0JBQ1YsOERBQUMsVUFBRDtBQUFZLFNBQUcsRUFBRUEsU0FBRixhQUFFQSxTQUFGLHVCQUFFQSxTQUFTLENBQUVJO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEVSxnQkFHViw4REFBQyxVQUFEO0FBQUEsZ0JBQWFELGNBQWMsQ0FBQyxDQUFEO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKSixlQU1JO0FBQUEsZ0JBQUlBO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBVUg7O0FBRUQsK0RBQWVsQixJQUFmO0FBRUEsTUFBTW9CLFNBQVMsR0FBR0MsOERBQVc7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FWQTtBQVlBLE1BQU1DLFVBQVUsR0FBR0Qsd0RBQU0sQ0FBQ0UscURBQUQsQ0FBUztBQUNsQztBQUNBO0FBQ0EsQ0FIQSIsImZpbGUiOiIuL2NvbXBvbmVudHMvQ2hhdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgQXZhdGFyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IGdldFJlY2lwaWVudEVtYWlsIGZyb20gJy4uL3V0aWxzL2dldFJlY2lwaWVudEVtYWlsJztcbmltcG9ydCB7IGF1dGgsIGRiIH0gZnJvbSAnLi4vZmlyZWJhc2UnO1xuaW1wb3J0IHsgdXNlQ29sbGVjdGlvbiB9IGZyb20gJ3JlYWN0LWZpcmViYXNlLWhvb2tzL2ZpcmVzdG9yZSc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQge3VzZUF1dGhTdGF0ZX0gZnJvbSAncmVhY3QtZmlyZWJhc2UtaG9va3MvYXV0aCc7XG5cblxuZnVuY3Rpb24gQ2hhdCAoe2lkLCB1c2Vyc30pIHtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICAgIGNvbnN0IFt1c2VyXSA9IHVzZUF1dGhTdGF0ZShhdXRoKTtcbiAgICBjb25zdCBbcmVjaXBpZW50U25hcHNob3RdID0gdXNlQ29sbGVjdGlvbihkYi5jb2xsZWN0aW9uKCd1c2VycycpLndoZXJlKCdlbWFpbCcsICc9PScsIGdldFJlY2lwaWVudEVtYWlsKHVzZXJzLCB1c2VyKSkpXG5cbiAgICBjb25zdCBlbnRlckNoYXQgPSAoKSA9PiB7XG4gICAgICAgIHJvdXRlci5wdXNoKGAvY2hhdC8ke2lkfWApXG4gICAgfVxuXG4gICAgY29uc3QgcmVjaXBpZW50ID0gcmVjaXBpZW50U25hcHNob3Q/LmRvY3M/LlswXT8uZGF0YSgpO1xuICAgIGNvbnN0IHJlY2lwaWVudEVtYWlsID0gZ2V0UmVjaXBpZW50RW1haWwodXNlcnMsIHVzZXIpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPENvbnRhaW5lciBvbkNsaWNrPXtlbnRlckNoYXR9PlxuICAgICAgICAgICAge3JlY2lwaWVudCA/IChcbiAgICAgICAgICAgIDxVc2VyQXZhdGFyIHNyYz17cmVjaXBpZW50Py5waG90b1VSTH0gLz5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8VXNlckF2YXRhcj57cmVjaXBpZW50RW1haWxbMF19PC9Vc2VyQXZhdGFyPiBcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8cD57cmVjaXBpZW50RW1haWx9PC9wPlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENoYXRcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgd29yZC1icmVhazogYnJlYWstd29yZDtcblxuICAgIDpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlOWVhZWI7XG4gICAgfVxuYDtcblxuY29uc3QgVXNlckF2YXRhciA9IHN0eWxlZChBdmF0YXIpYFxuICAgIG1hcmdpbjogNXB4O1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbmA7XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Chat.js\n");

/***/ }),

/***/ "./components/Sidebar.js":
/*!*******************************!*\
  !*** ./components/Sidebar.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_icons_Chat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Chat */ \"@material-ui/icons/Chat\");\n/* harmony import */ var _material_ui_icons_Chat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Chat__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/MoreVert */ \"@material-ui/icons/MoreVert\");\n/* harmony import */ var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Search */ \"@material-ui/icons/Search\");\n/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var email_validator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! email-validator */ \"email-validator\");\n/* harmony import */ var email_validator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(email_validator__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-firebase-hooks/auth */ \"react-firebase-hooks/auth\");\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-firebase-hooks/firestore */ \"react-firebase-hooks/firestore\");\n/* harmony import */ var react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../firebase */ \"./firebase.js\");\n/* harmony import */ var _Chat__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Chat */ \"./components/Chat.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);\n\nvar _jsxFileName = \"/Users/aiday/Desktop/Seytech/React Projects/Whatsapp-clone-react/components/Sidebar.js\";\n\n\n\n\n\n\n\n\n\n\n\n\nconst Sidebar = () => {\n  const [user] = (0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_7__.useAuthState)(_firebase__WEBPACK_IMPORTED_MODULE_9__.auth);\n  const userChatRef = _firebase__WEBPACK_IMPORTED_MODULE_9__.db.collection('chats').where('users', 'array-contains', user.email);\n  const [chatsSnapshot] = (0,react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_8__.useCollection)(userChatRef);\n\n  const createChat = () => {\n    const input = prompt('Please enter an email address you want to chat with');\n    if (!input) return null;\n\n    if (email_validator__WEBPACK_IMPORTED_MODULE_6__.validate(input) && !chatAlreadyExists(input) && input !== user.email) {\n      // we need to add chat into DB 'chat' collection and if the chat already exists and is valid\n      _firebase__WEBPACK_IMPORTED_MODULE_9__.db.collection('chats').add({\n        users: [user.email, input]\n      });\n    }\n  };\n\n  const chatAlreadyExists = recipientEmail => !!(chatsSnapshot !== null && chatsSnapshot !== void 0 && chatsSnapshot.docs.find(chat => {\n    var _chat$data$users$find;\n\n    return ((_chat$data$users$find = chat.data().users.find(user => user === recipientEmail)) === null || _chat$data$users$find === void 0 ? void 0 : _chat$data$users$find.length) > 0;\n  }));\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Container, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UserAvatar, {\n        src: user.photoURL,\n        onClick: () => _firebase__WEBPACK_IMPORTED_MODULE_9__.auth.signOut()\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(IconsContainer, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.IconButton, {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_icons_Chat__WEBPACK_IMPORTED_MODULE_3___default()), {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 44,\n            columnNumber: 25\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 21\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.IconButton, {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_4___default()), {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 47,\n            columnNumber: 25\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 21\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 17\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Search, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_5___default()), {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SearchInput, {\n        placeholder: \"Search in chats\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 17\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SidebarButton, {\n      onClick: createChat,\n      children: \"Start a new chat\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 13\n    }, undefined), chatsSnapshot === null || chatsSnapshot === void 0 ? void 0 : chatsSnapshot.docs.map(chat => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Chat__WEBPACK_IMPORTED_MODULE_10__.default, {\n      id: chat.id,\n      users: chat.data().users\n    }, chat.id, false, {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 17\n    }, undefined))]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 39,\n    columnNumber: 9\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sidebar);\nconst Container = (styled_components__WEBPACK_IMPORTED_MODULE_1___default().div)`\n    flex: 0.45;\n    border-right: 1px solid whitesmoke;\n    height: 100vh;\n    min-width: 300px;\n    max-width: 350px;\n    overflow-y: scroll;\n\n    ::web-kit-scrollbar {\n        display: none;\n    }\n\n    --ms-overflow-style: none; // *IE and Edge */\n    scrollbar-width: none; /* Firefox*/\n`;\nconst Search = (styled_components__WEBPACK_IMPORTED_MODULE_1___default().div)`\n    display:flex;\n    align-items:center;\n    padding: 20px;\n    border-radius: 2px\n`;\nconst SidebarButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Button)`\n    width: 100%;\n    &&&{\n         border-top: 1px solid whitesmoke;\n        border-bottom: 1px solid whitesmoke;\n    }\n   \n`;\nconst SearchInput = (styled_components__WEBPACK_IMPORTED_MODULE_1___default().input)`\n    outline-width: 0;\n    border: none;\n    flex:1;\n`;\nconst Header = (styled_components__WEBPACK_IMPORTED_MODULE_1___default().div)`\n    display: flex;\n    position: sticky;\n    top: 0;\n    background-color: white;\n    z-index: 1;\n    justify-content: space-between;\n    align-items: center;\n    padding: 15px;\n    height: 80px;\n    border-bottom: 1px solid whitesmoke;\n`;\nconst UserAvatar = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Avatar)`\n    cursor: pointer;\n    :hover{\n        opacity: 0.8;\n    }\n`;\nconst IconsContainer = (styled_components__WEBPACK_IMPORTED_MODULE_1___default().div)``;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aGF0c2FwcC1jbG9uZS8uL2NvbXBvbmVudHMvU2lkZWJhci5qcz84NDAzIl0sIm5hbWVzIjpbIlNpZGViYXIiLCJ1c2VyIiwidXNlQXV0aFN0YXRlIiwiYXV0aCIsInVzZXJDaGF0UmVmIiwiZGIiLCJ3aGVyZSIsImVtYWlsIiwiY2hhdHNTbmFwc2hvdCIsInVzZUNvbGxlY3Rpb24iLCJjcmVhdGVDaGF0IiwiaW5wdXQiLCJwcm9tcHQiLCJFbWFpbFZhbGlkYXRvciIsImNoYXRBbHJlYWR5RXhpc3RzIiwiYWRkIiwidXNlcnMiLCJyZWNpcGllbnRFbWFpbCIsImRvY3MiLCJmaW5kIiwiY2hhdCIsImRhdGEiLCJsZW5ndGgiLCJwaG90b1VSTCIsIm1hcCIsImlkIiwiQ29udGFpbmVyIiwic3R5bGVkIiwiU2VhcmNoIiwiU2lkZWJhckJ1dHRvbiIsIkJ1dHRvbiIsIlNlYXJjaElucHV0IiwiSGVhZGVyIiwiVXNlckF2YXRhciIsIkF2YXRhciIsIkljb25zQ29udGFpbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxNQUFNQSxPQUFPLEdBQUcsTUFBTTtBQUNsQixRQUFNLENBQUNDLElBQUQsSUFBU0MsdUVBQVksQ0FBQ0MsMkNBQUQsQ0FBM0I7QUFDQSxRQUFNQyxXQUFXLEdBQUdDLG9EQUFBLENBQWMsT0FBZCxFQUF1QkMsS0FBdkIsQ0FBNkIsT0FBN0IsRUFBc0MsZ0JBQXRDLEVBQXdETCxJQUFJLENBQUNNLEtBQTdELENBQXBCO0FBQ0EsUUFBTSxDQUFDQyxhQUFELElBQWtCQyw2RUFBYSxDQUFDTCxXQUFELENBQXJDOztBQUVBLFFBQU1NLFVBQVUsR0FBRyxNQUFNO0FBQ3JCLFVBQU1DLEtBQUssR0FBR0MsTUFBTSxDQUFDLHFEQUFELENBQXBCO0FBQ0EsUUFBRyxDQUFDRCxLQUFKLEVBQVcsT0FB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQVhBO0FBYUEsTUFBTU0sVUFBVSxHQUFHTix3REFBTSxDQUFDTyxxREFBRCxDQUFTO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FMQTtBQU9BLE1BQU1DLGNBQWMsR0FBR1IsOERBQVcsRUFBbEMiLCJmaWxlIjoiLi9jb21wb25lbnRzL1NpZGViYXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IEF2YXRhciwgQnV0dG9uLCBJY29uQnV0dG9uIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IENoYXRJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2hhdFwiO1xuaW1wb3J0IE1vcmVWZXJ0SWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL01vcmVWZXJ0XCJcbmltcG9ydCBTZWFyY2hJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU2VhcmNoXCI7XG5pbXBvcnQgKiBhcyBFbWFpbFZhbGlkYXRvciBmcm9tICdlbWFpbC12YWxpZGF0b3InXG5pbXBvcnQge3VzZUF1dGhTdGF0ZX0gZnJvbSAncmVhY3QtZmlyZWJhc2UtaG9va3MvYXV0aCc7XG5pbXBvcnQge3VzZUNvbGxlY3Rpb259IGZyb20gJ3JlYWN0LWZpcmViYXNlLWhvb2tzL2ZpcmVzdG9yZSc7XG5pbXBvcnQgeyBhdXRoLCBkYiB9IGZyb20gJy4uL2ZpcmViYXNlJztcbmltcG9ydCBDaGF0IGZyb20gJy4vQ2hhdCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5cbmNvbnN0IFNpZGViYXIgPSAoKSA9PiB7XG4gICAgY29uc3QgW3VzZXJdID0gdXNlQXV0aFN0YXRlKGF1dGgpO1xuICAgIGNvbnN0IHVzZXJDaGF0UmVmID0gZGIuY29sbGVjdGlvbignY2hhdHMnKS53aGVyZSgndXNlcnMnLCAnYXJyYXktY29udGFpbnMnLCB1c2VyLmVtYWlsKTtcbiAgICBjb25zdCBbY2hhdHNTbmFwc2hvdF0gPSB1c2VDb2xsZWN0aW9uKHVzZXJDaGF0UmVmKTtcblxuICAgIGNvbnN0IGNyZWF0ZUNoYXQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGlucHV0ID0gcHJvbXB0KCdQbGVhc2UgZW50ZXIgYW4gZW1haWwgYWRkcmVzcyB5b3Ugd2FudCB0byBjaGF0IHdpdGgnKTtcbiAgICAgICAgaWYoIWlucHV0KSByZXR1cm4gbnVsbDtcblxuICAgICAgICBpZihFbWFpbFZhbGlkYXRvci52YWxpZGF0ZShpbnB1dCkgJiYgIWNoYXRBbHJlYWR5RXhpc3RzKGlucHV0KSAmJiBpbnB1dCAhPT0gdXNlci5lbWFpbCl7XG4gICAgICAgICAgICAvLyB3ZSBuZWVkIHRvIGFkZCBjaGF0IGludG8gREIgJ2NoYXQnIGNvbGxlY3Rpb24gYW5kIGlmIHRoZSBjaGF0IGFscmVhZHkgZXhpc3RzIGFuZCBpcyB2YWxpZFxuICAgICAgICAgICAgZGIuY29sbGVjdGlvbignY2hhdHMnKS5hZGQoe1xuICAgICAgICAgICAgICAgIHVzZXJzOiBbdXNlci5lbWFpbCwgaW5wdXRdLCBcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgY2hhdEFscmVhZHlFeGlzdHMgPSAocmVjaXBpZW50RW1haWwpID0+IFxuICAgICAgICAhIWNoYXRzU25hcHNob3Q/LmRvY3MuZmluZChcbiAgICAgICAgICAgIChjaGF0KSA9PiBcbiAgICAgICAgICAgICAgICBjaGF0LmRhdGEoKS51c2Vycy5maW5kKHVzZXIgPT4gdXNlciA9PT0gcmVjaXBpZW50RW1haWwpPy5sZW5ndGggPiAwIClcbiAgICBcblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICAgIDxIZWFkZXI+XG4gICAgICAgICAgICAgICAgPFVzZXJBdmF0YXIgc3JjPXt1c2VyLnBob3RvVVJMfSBvbkNsaWNrPXsoKT0+IGF1dGguc2lnbk91dCgpfSAvPlxuICAgICAgICAgICAgICAgIDxJY29uc0NvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2hhdEljb24gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNb3JlVmVydEljb24gLz4gIFxuICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9JY29uc0NvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvSGVhZGVyPlxuICAgICAgICAgICAgPFNlYXJjaD5cbiAgICAgICAgICAgICAgICA8U2VhcmNoSWNvbiAvPlxuICAgICAgICAgICAgICAgIDxTZWFyY2hJbnB1dCBwbGFjZWhvbGRlcj1cIlNlYXJjaCBpbiBjaGF0c1wiLz5cbiAgICAgICAgICAgIDwvU2VhcmNoPlxuICAgICAgICAgICAgPFNpZGViYXJCdXR0b24gb25DbGljaz17Y3JlYXRlQ2hhdH0+U3RhcnQgYSBuZXcgY2hhdDwvU2lkZWJhckJ1dHRvbj5cbiAgICAgICAgICAgIHsvKiBMaXN0IG9mIENoYXRzICovfVxuICAgICAgICAgICAge2NoYXRzU25hcHNob3Q/LmRvY3MubWFwKChjaGF0KSA9PiAoXG4gICAgICAgICAgICAgICAgPENoYXQga2V5PXtjaGF0LmlkfSBpZD17Y2hhdC5pZH0gdXNlcnM9e2NoYXQuZGF0YSgpLnVzZXJzfSAvPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyO1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICAgIGZsZXg6IDAuNDU7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgd2hpdGVzbW9rZTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIG1pbi13aWR0aDogMzAwcHg7XG4gICAgbWF4LXdpZHRoOiAzNTBweDtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG5cbiAgICA6OndlYi1raXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICAtLW1zLW92ZXJmbG93LXN0eWxlOiBub25lOyAvLyAqSUUgYW5kIEVkZ2UgKi9cbiAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7IC8qIEZpcmVmb3gqL1xuYDtcblxuY29uc3QgU2VhcmNoID0gc3R5bGVkLmRpdmBcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4XG5gO1xuXG5jb25zdCBTaWRlYmFyQnV0dG9uID0gc3R5bGVkKEJ1dHRvbilgXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgJiYme1xuICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHdoaXRlc21va2U7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZXNtb2tlO1xuICAgIH1cbiAgIFxuYDtcblxuY29uc3QgU2VhcmNoSW5wdXQgPSBzdHlsZWQuaW5wdXRgXG4gICAgb3V0bGluZS13aWR0aDogMDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgZmxleDoxO1xuYDtcblxuY29uc3QgSGVhZGVyID0gc3R5bGVkLmRpdmBcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgdG9wOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHotaW5kZXg6IDE7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlc21va2U7XG5gO1xuXG5jb25zdCBVc2VyQXZhdGFyID0gc3R5bGVkKEF2YXRhcilgXG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIDpob3ZlcntcbiAgICAgICAgb3BhY2l0eTogMC44O1xuICAgIH1cbmA7XG5cbmNvbnN0IEljb25zQ29udGFpbmVyID0gc3R5bGVkLmRpdmBgOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Sidebar.js\n");

/***/ }),

/***/ "./firebase.js":
/*!*********************!*\
  !*** ./firebase.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"db\": function() { return /* binding */ db; },\n/* harmony export */   \"auth\": function() { return /* binding */ auth; },\n/* harmony export */   \"provider\": function() { return /* binding */ provider; }\n/* harmony export */ });\n/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase */ \"firebase\");\n/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_0__);\n // For Firebase JS SDK v7.20.0 and later, measurementId is optional\n\nconst firebaseConfig = {\n  apiKey: \"AIzaSyAX0Z-pL-vHYfpCAlchAJhgRd8EwjN2b98\",\n  authDomain: \"whatsapp-clone-3ffd3.firebaseapp.com\",\n  projectId: \"whatsapp-clone-3ffd3\",\n  storageBucket: \"whatsapp-clone-3ffd3.appspot.com\",\n  messagingSenderId: \"394568279916\",\n  appId: \"1:394568279916:web:f349436e46676a4aecf549\"\n};\nconst app = !(firebase__WEBPACK_IMPORTED_MODULE_0___default().apps.length) ? firebase__WEBPACK_IMPORTED_MODULE_0___default().initializeApp(firebaseConfig) : firebase__WEBPACK_IMPORTED_MODULE_0___default().app();\nconst db = app.firestore();\nconst auth = app.auth();\nconst provider = new (firebase__WEBPACK_IMPORTED_MODULE_0___default().auth.GoogleAuthProvider)();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aGF0c2FwcC1jbG9uZS8uL2ZpcmViYXNlLmpzPzJhZGMiXSwibmFtZXMiOlsiZmlyZWJhc2VDb25maWciLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJhcHAiLCJmaXJlYmFzZSIsImRiIiwiZmlyZXN0b3JlIiwiYXV0aCIsInByb3ZpZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztDQUVBOztBQUNBLE1BQU1BLGNBQWMsR0FBRztBQUNuQkMsUUFBTSxFQUFFLHlDQURXO0FBRW5CQyxZQUFVLEVBQUUsc0NBRk87QUFHbkJDLFdBQVMsRUFBRSxzQkFIUTtBQUluQkMsZUFBYSxFQUFFLGtDQUpJO0FBS25CQyxtQkFBaUIsRUFBRSxjQUxBO0FBTW5CQyxPQUFLLEVBQUU7QUFOWSxDQUF2QjtBQVVBLE1BQU1DLEdBQUcsR0FBRyxDQUFDQyw2REFBRCxHQUNWQSw2REFBQSxDQUF1QlIsY0FBdkIsQ0FEVSxHQUMrQlEsbURBQUEsRUFEM0M7QUFHQSxNQUFNQyxFQUFFLEdBQUdGLEdBQUcsQ0FBQ0csU0FBSixFQUFYO0FBQ0EsTUFBTUMsSUFBSSxHQUFHSixHQUFHLENBQUNJLElBQUosRUFBYjtBQUNBLE1BQU1DLFFBQVEsR0FBRyxJQUFJSix5RUFBSixFQUFqQiIsImZpbGUiOiIuL2ZpcmViYXNlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZpcmViYXNlIGZyb20gJ2ZpcmViYXNlJztcblxuLy8gRm9yIEZpcmViYXNlIEpTIFNESyB2Ny4yMC4wIGFuZCBsYXRlciwgbWVhc3VyZW1lbnRJZCBpcyBvcHRpb25hbFxuY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XG4gICAgYXBpS2V5OiBcIkFJemFTeUFYMFotcEwtdkhZZnBDQWxjaEFKaGdSZDhFd2pOMmI5OFwiLFxuICAgIGF1dGhEb21haW46IFwid2hhdHNhcHAtY2xvbmUtM2ZmZDMuZmlyZWJhc2VhcHAuY29tXCIsXG4gICAgcHJvamVjdElkOiBcIndoYXRzYXBwLWNsb25lLTNmZmQzXCIsXG4gICAgc3RvcmFnZUJ1Y2tldDogXCJ3aGF0c2FwcC1jbG9uZS0zZmZkMy5hcHBzcG90LmNvbVwiLFxuICAgIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjM5NDU2ODI3OTkxNlwiLFxuICAgIGFwcElkOiBcIjE6Mzk0NTY4Mjc5OTE2OndlYjpmMzQ5NDM2ZTQ2Njc2YTRhZWNmNTQ5XCIsXG4gICAgXG4gIH07XG5cbmNvbnN0IGFwcCA9ICFmaXJlYmFzZS5hcHBzLmxlbmd0aCBcbj8gZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZykgOiBmaXJlYmFzZS5hcHAoKTtcblxuY29uc3QgZGIgPSBhcHAuZmlyZXN0b3JlKCk7XG5jb25zdCBhdXRoID0gYXBwLmF1dGgoKTtcbmNvbnN0IHByb3ZpZGVyID0gbmV3IGZpcmViYXNlLmF1dGguR29vZ2xlQXV0aFByb3ZpZGVyKCk7XG5cbmV4cG9ydCB7IGRiLCBhdXRoLCBwcm92aWRlciB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./firebase.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Sidebar */ \"./components/Sidebar.js\");\n\nvar _jsxFileName = \"/Users/aiday/Desktop/Seytech/React Projects/Whatsapp-clone-react/pages/index.js\";\n\n\n\nfunction Home() {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n        children: \"What'sApp Clone\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n        name: \"description\",\n        content: \"Generated by create next app\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n        rel: \"icon\",\n        href: \"/favicon.ico\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Sidebar__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aGF0c2FwcC1jbG9uZS8uL3BhZ2VzL2luZGV4LmpzPzQ0ZDgiXSwibmFtZXMiOlsiSG9tZSIsInN0eWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLElBQVQsR0FBZ0I7QUFDN0Isc0JBQ0U7QUFBSyxhQUFTLEVBQUVDLDBFQUFoQjtBQUFBLDRCQUNFLDhEQUFDLGtEQUFEO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQU0sWUFBSSxFQUFDLGFBQVg7QUFBeUIsZUFBTyxFQUFDO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixlQUdFO0FBQU0sV0FBRyxFQUFDLE1BQVY7QUFBaUIsWUFBSSxFQUFDO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQU9FLDhEQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVdEIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5pbXBvcnQgU2lkZWJhciBmcm9tICcuLi9jb21wb25lbnRzL1NpZGViYXInXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5XaGF0J3NBcHAgQ2xvbmU8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiR2VuZXJhdGVkIGJ5IGNyZWF0ZSBuZXh0IGFwcFwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPFNpZGViYXIgLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./utils/getRecipientEmail.js":
/*!************************************!*\
  !*** ./utils/getRecipientEmail.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst getRecipientEmail = (users, userLoggedIn) => users === null || users === void 0 ? void 0 : users.filter(userToFilter => userToFilter !== (userLoggedIn === null || userLoggedIn === void 0 ? void 0 : userLoggedIn.email))[0];\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (getRecipientEmail); //? - async ??//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aGF0c2FwcC1jbG9uZS8uL3V0aWxzL2dldFJlY2lwaWVudEVtYWlsLmpzPzNlZDciXSwibmFtZXMiOlsiZ2V0UmVjaXBpZW50RW1haWwiLCJ1c2VycyIsInVzZXJMb2dnZWRJbiIsImZpbHRlciIsInVzZXJUb0ZpbHRlciIsImVtYWlsIl0sIm1hcHBpbmdzIjoiO0FBQUEsTUFBTUEsaUJBQWlCLEdBQUcsQ0FBQ0MsS0FBRCxFQUFRQyxZQUFSLEtBQ3RCRCxLQURzQixhQUN0QkEsS0FEc0IsdUJBQ3RCQSxLQUFLLENBQUVFLE1BQVAsQ0FBY0MsWUFBWSxJQUFJQSxZQUFZLE1BQUtGLFlBQUwsYUFBS0EsWUFBTCx1QkFBS0EsWUFBWSxDQUFFRyxLQUFuQixDQUExQyxFQUFvRSxDQUFwRSxDQURKOztBQUlBLCtEQUFlTCxpQkFBZixFLENBSUEiLCJmaWxlIjoiLi91dGlscy9nZXRSZWNpcGllbnRFbWFpbC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGdldFJlY2lwaWVudEVtYWlsID0gKHVzZXJzLCB1c2VyTG9nZ2VkSW4pID0+IFxuICAgIHVzZXJzPy5maWx0ZXIodXNlclRvRmlsdGVyID0+IHVzZXJUb0ZpbHRlciAhPT0gdXNlckxvZ2dlZEluPy5lbWFpbClbMF07XG4gICAgXG5cbmV4cG9ydCBkZWZhdWx0IGdldFJlY2lwaWVudEVtYWlsO1xuXG5cblxuLy8/IC0gYXN5bmMgPz8iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/getRecipientEmail.js\n");

/***/ }),

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/***/ (function(module) {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"Home_container__1EcsU\",\n\t\"main\": \"Home_main__1x8gC\",\n\t\"footer\": \"Home_footer__1WdhD\",\n\t\"title\": \"Home_title__3DjR7\",\n\t\"description\": \"Home_description__17Z4F\",\n\t\"code\": \"Home_code__axx2Y\",\n\t\"grid\": \"Home_grid__2Ei2F\",\n\t\"card\": \"Home_card__2SdtB\",\n\t\"logo\": \"Home_logo__1YbrH\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aGF0c2FwcC1jbG9uZS8uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3M/ZTBjYSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiSG9tZV9jb250YWluZXJfXzFFY3NVXCIsXG5cdFwibWFpblwiOiBcIkhvbWVfbWFpbl9fMXg4Z0NcIixcblx0XCJmb290ZXJcIjogXCJIb21lX2Zvb3Rlcl9fMVdkaERcIixcblx0XCJ0aXRsZVwiOiBcIkhvbWVfdGl0bGVfXzNEalI3XCIsXG5cdFwiZGVzY3JpcHRpb25cIjogXCJIb21lX2Rlc2NyaXB0aW9uX18xN1o0RlwiLFxuXHRcImNvZGVcIjogXCJIb21lX2NvZGVfX2F4eDJZXCIsXG5cdFwiZ3JpZFwiOiBcIkhvbWVfZ3JpZF9fMkVpMkZcIixcblx0XCJjYXJkXCI6IFwiSG9tZV9jYXJkX18yU2R0QlwiLFxuXHRcImxvZ29cIjogXCJIb21lX2xvZ29fXzFZYnJIXCJcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/Home.module.css\n");

/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core");;

/***/ }),

/***/ "@material-ui/icons/Chat":
/*!******************************************!*\
  !*** external "@material-ui/icons/Chat" ***!
  \******************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/icons/Chat");;

/***/ }),

/***/ "@material-ui/icons/MoreVert":
/*!**********************************************!*\
  !*** external "@material-ui/icons/MoreVert" ***!
  \**********************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/icons/MoreVert");;

/***/ }),

/***/ "@material-ui/icons/Search":
/*!********************************************!*\
  !*** external "@material-ui/icons/Search" ***!
  \********************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/icons/Search");;

/***/ }),

/***/ "email-validator":
/*!**********************************!*\
  !*** external "email-validator" ***!
  \**********************************/
/***/ (function(module) {

"use strict";
module.exports = require("email-validator");;

/***/ }),

/***/ "firebase":
/*!***************************!*\
  !*** external "firebase" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("firebase");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-firebase-hooks/auth":
/*!********************************************!*\
  !*** external "react-firebase-hooks/auth" ***!
  \********************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-firebase-hooks/auth");;

/***/ }),

/***/ "react-firebase-hooks/firestore":
/*!*************************************************!*\
  !*** external "react-firebase-hooks/firestore" ***!
  \*************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-firebase-hooks/firestore");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-components");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();