!function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=0)}([function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);\n/* harmony import */ var _js_common_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_common_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_main_scss__WEBPACK_IMPORTED_MODULE_1__);\n //    .js можно не указывать вебпак сам разберется))\n//import './css/main.css';\n\n //import Icon from './img/1.png';\n//import 'bootstrap/dist/css/bootstrap.min.css'\n//import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css'  //отдельные файлы\n// import Vue   // общая библиотека\n//window.Vue = require('vue')   //---более правильный метод\n\n//# sourceURL=webpack:///./index.js?")},function(module,exports,__webpack_require__){eval('/* WEBPACK VAR INJECTION */(function(__dirname, __filename) {var path = __webpack_require__(2);\n\nvar add = function add(a, b) {\n  return a + b;\n};\n\nconsole.log(add(2, 8)); //let funn = () => 777;\n//console.log(funn());\n\nconsole.log(__dirname + \' \' + __filename);\n/* WEBPACK VAR INJECTION */}.call(this, "/", "/index.js"))\n\n//# sourceURL=webpack:///./js/common.js?')},function(module,exports,__webpack_require__){eval("/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a\n// copy of this software and associated documentation files (the\n// \"Software\"), to deal in the Software without restriction, including\n// without limitation the rights to use, copy, modify, merge, publish,\n// distribute, sublicense, and/or sell copies of the Software, and to permit\n// persons to whom the Software is furnished to do so, subject to the\n// following conditions:\n//\n// The above copyright notice and this permission notice shall be included\n// in all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\n// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\n// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN\n// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,\n// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR\n// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE\n// USE OR OTHER DEALINGS IN THE SOFTWARE.\n// resolves . and .. elements in a path array with directory names there\n// must be no slashes, empty elements, or device names (c:\\) in the array\n// (so also no leading and trailing slashes - it does not distinguish\n// relative and absolute paths)\nfunction normalizeArray(parts, allowAboveRoot) {\n  // if the path tries to go above the root, `up` ends up > 0\n  var up = 0;\n\n  for (var i = parts.length - 1; i >= 0; i--) {\n    var last = parts[i];\n\n    if (last === '.') {\n      parts.splice(i, 1);\n    } else if (last === '..') {\n      parts.splice(i, 1);\n      up++;\n    } else if (up) {\n      parts.splice(i, 1);\n      up--;\n    }\n  } // if the path is allowed to go above the root, restore leading ..s\n\n\n  if (allowAboveRoot) {\n    for (; up--; up) {\n      parts.unshift('..');\n    }\n  }\n\n  return parts;\n} // Split a filename into [root, dir, basename, ext], unix version\n// 'root' is just a slash, or nothing.\n\n\nvar splitPathRe = /^(\\/?|)([\\s\\S]*?)((?:\\.{1,2}|[^\\/]+?|)(\\.[^.\\/]*|))(?:[\\/]*)$/;\n\nvar splitPath = function (filename) {\n  return splitPathRe.exec(filename).slice(1);\n}; // path.resolve([from ...], to)\n// posix version\n\n\nexports.resolve = function () {\n  var resolvedPath = '',\n      resolvedAbsolute = false;\n\n  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {\n    var path = i >= 0 ? arguments[i] : process.cwd(); // Skip empty and invalid entries\n\n    if (typeof path !== 'string') {\n      throw new TypeError('Arguments to path.resolve must be strings');\n    } else if (!path) {\n      continue;\n    }\n\n    resolvedPath = path + '/' + resolvedPath;\n    resolvedAbsolute = path.charAt(0) === '/';\n  } // At this point the path should be resolved to a full absolute path, but\n  // handle relative paths to be safe (might happen when process.cwd() fails)\n  // Normalize the path\n\n\n  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function (p) {\n    return !!p;\n  }), !resolvedAbsolute).join('/');\n  return (resolvedAbsolute ? '/' : '') + resolvedPath || '.';\n}; // path.normalize(path)\n// posix version\n\n\nexports.normalize = function (path) {\n  var isAbsolute = exports.isAbsolute(path),\n      trailingSlash = substr(path, -1) === '/'; // Normalize the path\n\n  path = normalizeArray(filter(path.split('/'), function (p) {\n    return !!p;\n  }), !isAbsolute).join('/');\n\n  if (!path && !isAbsolute) {\n    path = '.';\n  }\n\n  if (path && trailingSlash) {\n    path += '/';\n  }\n\n  return (isAbsolute ? '/' : '') + path;\n}; // posix version\n\n\nexports.isAbsolute = function (path) {\n  return path.charAt(0) === '/';\n}; // posix version\n\n\nexports.join = function () {\n  var paths = Array.prototype.slice.call(arguments, 0);\n  return exports.normalize(filter(paths, function (p, index) {\n    if (typeof p !== 'string') {\n      throw new TypeError('Arguments to path.join must be strings');\n    }\n\n    return p;\n  }).join('/'));\n}; // path.relative(from, to)\n// posix version\n\n\nexports.relative = function (from, to) {\n  from = exports.resolve(from).substr(1);\n  to = exports.resolve(to).substr(1);\n\n  function trim(arr) {\n    var start = 0;\n\n    for (; start < arr.length; start++) {\n      if (arr[start] !== '') break;\n    }\n\n    var end = arr.length - 1;\n\n    for (; end >= 0; end--) {\n      if (arr[end] !== '') break;\n    }\n\n    if (start > end) return [];\n    return arr.slice(start, end - start + 1);\n  }\n\n  var fromParts = trim(from.split('/'));\n  var toParts = trim(to.split('/'));\n  var length = Math.min(fromParts.length, toParts.length);\n  var samePartsLength = length;\n\n  for (var i = 0; i < length; i++) {\n    if (fromParts[i] !== toParts[i]) {\n      samePartsLength = i;\n      break;\n    }\n  }\n\n  var outputParts = [];\n\n  for (var i = samePartsLength; i < fromParts.length; i++) {\n    outputParts.push('..');\n  }\n\n  outputParts = outputParts.concat(toParts.slice(samePartsLength));\n  return outputParts.join('/');\n};\n\nexports.sep = '/';\nexports.delimiter = ':';\n\nexports.dirname = function (path) {\n  var result = splitPath(path),\n      root = result[0],\n      dir = result[1];\n\n  if (!root && !dir) {\n    // No dirname whatsoever\n    return '.';\n  }\n\n  if (dir) {\n    // It has a dirname, strip trailing slash\n    dir = dir.substr(0, dir.length - 1);\n  }\n\n  return root + dir;\n};\n\nexports.basename = function (path, ext) {\n  var f = splitPath(path)[2]; // TODO: make this comparison case-insensitive on windows?\n\n  if (ext && f.substr(-1 * ext.length) === ext) {\n    f = f.substr(0, f.length - ext.length);\n  }\n\n  return f;\n};\n\nexports.extname = function (path) {\n  return splitPath(path)[3];\n};\n\nfunction filter(xs, f) {\n  if (xs.filter) return xs.filter(f);\n  var res = [];\n\n  for (var i = 0; i < xs.length; i++) {\n    if (f(xs[i], i, xs)) res.push(xs[i]);\n  }\n\n  return res;\n} // String.prototype.substr - negative index don't work in IE8\n\n\nvar substr = 'ab'.substr(-1) === 'b' ? function (str, start, len) {\n  return str.substr(start, len);\n} : function (str, start, len) {\n  if (start < 0) start = str.length + start;\n  return str.substr(start, len);\n};\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)))\n\n//# sourceURL=webpack:///../node_modules/path-browserify/index.js?")},function(module,exports){eval("// shim for using process in browser\nvar process = module.exports = {}; // cached from whatever global is present so that test runners that stub it\n// don't break things.  But we need to wrap it in a try catch in case it is\n// wrapped in strict mode code which doesn't define any globals.  It's inside a\n// function because try/catches deoptimize in certain engines.\n\nvar cachedSetTimeout;\nvar cachedClearTimeout;\n\nfunction defaultSetTimout() {\n  throw new Error('setTimeout has not been defined');\n}\n\nfunction defaultClearTimeout() {\n  throw new Error('clearTimeout has not been defined');\n}\n\n(function () {\n  try {\n    if (typeof setTimeout === 'function') {\n      cachedSetTimeout = setTimeout;\n    } else {\n      cachedSetTimeout = defaultSetTimout;\n    }\n  } catch (e) {\n    cachedSetTimeout = defaultSetTimout;\n  }\n\n  try {\n    if (typeof clearTimeout === 'function') {\n      cachedClearTimeout = clearTimeout;\n    } else {\n      cachedClearTimeout = defaultClearTimeout;\n    }\n  } catch (e) {\n    cachedClearTimeout = defaultClearTimeout;\n  }\n})();\n\nfunction runTimeout(fun) {\n  if (cachedSetTimeout === setTimeout) {\n    //normal enviroments in sane situations\n    return setTimeout(fun, 0);\n  } // if setTimeout wasn't available but was latter defined\n\n\n  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {\n    cachedSetTimeout = setTimeout;\n    return setTimeout(fun, 0);\n  }\n\n  try {\n    // when when somebody has screwed with setTimeout but no I.E. maddness\n    return cachedSetTimeout(fun, 0);\n  } catch (e) {\n    try {\n      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally\n      return cachedSetTimeout.call(null, fun, 0);\n    } catch (e) {\n      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error\n      return cachedSetTimeout.call(this, fun, 0);\n    }\n  }\n}\n\nfunction runClearTimeout(marker) {\n  if (cachedClearTimeout === clearTimeout) {\n    //normal enviroments in sane situations\n    return clearTimeout(marker);\n  } // if clearTimeout wasn't available but was latter defined\n\n\n  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {\n    cachedClearTimeout = clearTimeout;\n    return clearTimeout(marker);\n  }\n\n  try {\n    // when when somebody has screwed with setTimeout but no I.E. maddness\n    return cachedClearTimeout(marker);\n  } catch (e) {\n    try {\n      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally\n      return cachedClearTimeout.call(null, marker);\n    } catch (e) {\n      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.\n      // Some versions of I.E. have different rules for clearTimeout vs setTimeout\n      return cachedClearTimeout.call(this, marker);\n    }\n  }\n}\n\nvar queue = [];\nvar draining = false;\nvar currentQueue;\nvar queueIndex = -1;\n\nfunction cleanUpNextTick() {\n  if (!draining || !currentQueue) {\n    return;\n  }\n\n  draining = false;\n\n  if (currentQueue.length) {\n    queue = currentQueue.concat(queue);\n  } else {\n    queueIndex = -1;\n  }\n\n  if (queue.length) {\n    drainQueue();\n  }\n}\n\nfunction drainQueue() {\n  if (draining) {\n    return;\n  }\n\n  var timeout = runTimeout(cleanUpNextTick);\n  draining = true;\n  var len = queue.length;\n\n  while (len) {\n    currentQueue = queue;\n    queue = [];\n\n    while (++queueIndex < len) {\n      if (currentQueue) {\n        currentQueue[queueIndex].run();\n      }\n    }\n\n    queueIndex = -1;\n    len = queue.length;\n  }\n\n  currentQueue = null;\n  draining = false;\n  runClearTimeout(timeout);\n}\n\nprocess.nextTick = function (fun) {\n  var args = new Array(arguments.length - 1);\n\n  if (arguments.length > 1) {\n    for (var i = 1; i < arguments.length; i++) {\n      args[i - 1] = arguments[i];\n    }\n  }\n\n  queue.push(new Item(fun, args));\n\n  if (queue.length === 1 && !draining) {\n    runTimeout(drainQueue);\n  }\n}; // v8 likes predictible objects\n\n\nfunction Item(fun, array) {\n  this.fun = fun;\n  this.array = array;\n}\n\nItem.prototype.run = function () {\n  this.fun.apply(null, this.array);\n};\n\nprocess.title = 'browser';\nprocess.browser = true;\nprocess.env = {};\nprocess.argv = [];\nprocess.version = ''; // empty string to avoid regexp issues\n\nprocess.versions = {};\n\nfunction noop() {}\n\nprocess.on = noop;\nprocess.addListener = noop;\nprocess.once = noop;\nprocess.off = noop;\nprocess.removeListener = noop;\nprocess.removeAllListeners = noop;\nprocess.emit = noop;\nprocess.prependListener = noop;\nprocess.prependOnceListener = noop;\n\nprocess.listeners = function (name) {\n  return [];\n};\n\nprocess.binding = function (name) {\n  throw new Error('process.binding is not supported');\n};\n\nprocess.cwd = function () {\n  return '/';\n};\n\nprocess.chdir = function (dir) {\n  throw new Error('process.chdir is not supported');\n};\n\nprocess.umask = function () {\n  return 0;\n};\n\n//# sourceURL=webpack:///../node_modules/process/browser.js?")},function(module,exports,__webpack_require__){eval("\nvar content = __webpack_require__(5);\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(6)(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./scss/main.scss?")},function(module,exports,__webpack_require__){eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./scss/main.scss?../node_modules/mini-css-extract-plugin/dist/loader.js!../node_modules/css-loader/dist/cjs.js??ref--5-2!../node_modules/postcss-loader/src??ref--5-3!../node_modules/sass-loader/lib/loader.js??ref--5-4")},function(module,exports,__webpack_require__){eval('/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n\nvar stylesInDom = {};\n\nvar\tmemoize = function (fn) {\n\tvar memo;\n\n\treturn function () {\n\t\tif (typeof memo === "undefined") memo = fn.apply(this, arguments);\n\t\treturn memo;\n\t};\n};\n\nvar isOldIE = memoize(function () {\n\t// Test for IE <= 9 as proposed by Browserhacks\n\t// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n\t// Tests for existence of standard globals is to allow style-loader\n\t// to operate correctly into non-standard environments\n\t// @see https://github.com/webpack-contrib/style-loader/issues/177\n\treturn window && document && document.all && !window.atob;\n});\n\nvar getTarget = function (target, parent) {\n  if (parent){\n    return parent.querySelector(target);\n  }\n  return document.querySelector(target);\n};\n\nvar getElement = (function (fn) {\n\tvar memo = {};\n\n\treturn function(target, parent) {\n                // If passing function in options, then use it for resolve "head" element.\n                // Useful for Shadow Root style i.e\n                // {\n                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }\n                // }\n                if (typeof target === \'function\') {\n                        return target();\n                }\n                if (typeof memo[target] === "undefined") {\n\t\t\tvar styleTarget = getTarget.call(this, target, parent);\n\t\t\t// Special case to return head of iframe instead of iframe itself\n\t\t\tif (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n\t\t\t\ttry {\n\t\t\t\t\t// This will throw an exception if access to iframe is blocked\n\t\t\t\t\t// due to cross-origin restrictions\n\t\t\t\t\tstyleTarget = styleTarget.contentDocument.head;\n\t\t\t\t} catch(e) {\n\t\t\t\t\tstyleTarget = null;\n\t\t\t\t}\n\t\t\t}\n\t\t\tmemo[target] = styleTarget;\n\t\t}\n\t\treturn memo[target]\n\t};\n})();\n\nvar singleton = null;\nvar\tsingletonCounter = 0;\nvar\tstylesInsertedAtTop = [];\n\nvar\tfixUrls = __webpack_require__(7);\n\nmodule.exports = function(list, options) {\n\tif (typeof DEBUG !== "undefined" && DEBUG) {\n\t\tif (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");\n\t}\n\n\toptions = options || {};\n\n\toptions.attrs = typeof options.attrs === "object" ? options.attrs : {};\n\n\t// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n\t// tags it will allow on a page\n\tif (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();\n\n\t// By default, add <style> tags to the <head> element\n        if (!options.insertInto) options.insertInto = "head";\n\n\t// By default, add <style> tags to the bottom of the target\n\tif (!options.insertAt) options.insertAt = "bottom";\n\n\tvar styles = listToStyles(list, options);\n\n\taddStylesToDom(styles, options);\n\n\treturn function update (newList) {\n\t\tvar mayRemove = [];\n\n\t\tfor (var i = 0; i < styles.length; i++) {\n\t\t\tvar item = styles[i];\n\t\t\tvar domStyle = stylesInDom[item.id];\n\n\t\t\tdomStyle.refs--;\n\t\t\tmayRemove.push(domStyle);\n\t\t}\n\n\t\tif(newList) {\n\t\t\tvar newStyles = listToStyles(newList, options);\n\t\t\taddStylesToDom(newStyles, options);\n\t\t}\n\n\t\tfor (var i = 0; i < mayRemove.length; i++) {\n\t\t\tvar domStyle = mayRemove[i];\n\n\t\t\tif(domStyle.refs === 0) {\n\t\t\t\tfor (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();\n\n\t\t\t\tdelete stylesInDom[domStyle.id];\n\t\t\t}\n\t\t}\n\t};\n};\n\nfunction addStylesToDom (styles, options) {\n\tfor (var i = 0; i < styles.length; i++) {\n\t\tvar item = styles[i];\n\t\tvar domStyle = stylesInDom[item.id];\n\n\t\tif(domStyle) {\n\t\t\tdomStyle.refs++;\n\n\t\t\tfor(var j = 0; j < domStyle.parts.length; j++) {\n\t\t\t\tdomStyle.parts[j](item.parts[j]);\n\t\t\t}\n\n\t\t\tfor(; j < item.parts.length; j++) {\n\t\t\t\tdomStyle.parts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\t\t} else {\n\t\t\tvar parts = [];\n\n\t\t\tfor(var j = 0; j < item.parts.length; j++) {\n\t\t\t\tparts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\n\t\t\tstylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};\n\t\t}\n\t}\n}\n\nfunction listToStyles (list, options) {\n\tvar styles = [];\n\tvar newStyles = {};\n\n\tfor (var i = 0; i < list.length; i++) {\n\t\tvar item = list[i];\n\t\tvar id = options.base ? item[0] + options.base : item[0];\n\t\tvar css = item[1];\n\t\tvar media = item[2];\n\t\tvar sourceMap = item[3];\n\t\tvar part = {css: css, media: media, sourceMap: sourceMap};\n\n\t\tif(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});\n\t\telse newStyles[id].parts.push(part);\n\t}\n\n\treturn styles;\n}\n\nfunction insertStyleElement (options, style) {\n\tvar target = getElement(options.insertInto)\n\n\tif (!target) {\n\t\tthrow new Error("Couldn\'t find a style target. This probably means that the value for the \'insertInto\' parameter is invalid.");\n\t}\n\n\tvar lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];\n\n\tif (options.insertAt === "top") {\n\t\tif (!lastStyleElementInsertedAtTop) {\n\t\t\ttarget.insertBefore(style, target.firstChild);\n\t\t} else if (lastStyleElementInsertedAtTop.nextSibling) {\n\t\t\ttarget.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);\n\t\t} else {\n\t\t\ttarget.appendChild(style);\n\t\t}\n\t\tstylesInsertedAtTop.push(style);\n\t} else if (options.insertAt === "bottom") {\n\t\ttarget.appendChild(style);\n\t} else if (typeof options.insertAt === "object" && options.insertAt.before) {\n\t\tvar nextSibling = getElement(options.insertAt.before, target);\n\t\ttarget.insertBefore(style, nextSibling);\n\t} else {\n\t\tthrow new Error("[Style Loader]\\n\\n Invalid value for parameter \'insertAt\' (\'options.insertAt\') found.\\n Must be \'top\', \'bottom\', or Object.\\n (https://github.com/webpack-contrib/style-loader#insertat)\\n");\n\t}\n}\n\nfunction removeStyleElement (style) {\n\tif (style.parentNode === null) return false;\n\tstyle.parentNode.removeChild(style);\n\n\tvar idx = stylesInsertedAtTop.indexOf(style);\n\tif(idx >= 0) {\n\t\tstylesInsertedAtTop.splice(idx, 1);\n\t}\n}\n\nfunction createStyleElement (options) {\n\tvar style = document.createElement("style");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = "text/css";\n\t}\n\n\tif(options.attrs.nonce === undefined) {\n\t\tvar nonce = getNonce();\n\t\tif (nonce) {\n\t\t\toptions.attrs.nonce = nonce;\n\t\t}\n\t}\n\n\taddAttrs(style, options.attrs);\n\tinsertStyleElement(options, style);\n\n\treturn style;\n}\n\nfunction createLinkElement (options) {\n\tvar link = document.createElement("link");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = "text/css";\n\t}\n\toptions.attrs.rel = "stylesheet";\n\n\taddAttrs(link, options.attrs);\n\tinsertStyleElement(options, link);\n\n\treturn link;\n}\n\nfunction addAttrs (el, attrs) {\n\tObject.keys(attrs).forEach(function (key) {\n\t\tel.setAttribute(key, attrs[key]);\n\t});\n}\n\nfunction getNonce() {\n\tif (false) {}\n\n\treturn __webpack_require__.nc;\n}\n\nfunction addStyle (obj, options) {\n\tvar style, update, remove, result;\n\n\t// If a transform function was defined, run it on the css\n\tif (options.transform && obj.css) {\n\t    result = typeof options.transform === \'function\'\n\t\t ? options.transform(obj.css) \n\t\t : options.transform.default(obj.css);\n\n\t    if (result) {\n\t    \t// If transform returns a value, use that instead of the original css.\n\t    \t// This allows running runtime transformations on the css.\n\t    \tobj.css = result;\n\t    } else {\n\t    \t// If the transform function returns a falsy value, don\'t add this css.\n\t    \t// This allows conditional loading of css\n\t    \treturn function() {\n\t    \t\t// noop\n\t    \t};\n\t    }\n\t}\n\n\tif (options.singleton) {\n\t\tvar styleIndex = singletonCounter++;\n\n\t\tstyle = singleton || (singleton = createStyleElement(options));\n\n\t\tupdate = applyToSingletonTag.bind(null, style, styleIndex, false);\n\t\tremove = applyToSingletonTag.bind(null, style, styleIndex, true);\n\n\t} else if (\n\t\tobj.sourceMap &&\n\t\ttypeof URL === "function" &&\n\t\ttypeof URL.createObjectURL === "function" &&\n\t\ttypeof URL.revokeObjectURL === "function" &&\n\t\ttypeof Blob === "function" &&\n\t\ttypeof btoa === "function"\n\t) {\n\t\tstyle = createLinkElement(options);\n\t\tupdate = updateLink.bind(null, style, options);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\n\t\t\tif(style.href) URL.revokeObjectURL(style.href);\n\t\t};\n\t} else {\n\t\tstyle = createStyleElement(options);\n\t\tupdate = applyToTag.bind(null, style);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\t\t};\n\t}\n\n\tupdate(obj);\n\n\treturn function updateStyle (newObj) {\n\t\tif (newObj) {\n\t\t\tif (\n\t\t\t\tnewObj.css === obj.css &&\n\t\t\t\tnewObj.media === obj.media &&\n\t\t\t\tnewObj.sourceMap === obj.sourceMap\n\t\t\t) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tupdate(obj = newObj);\n\t\t} else {\n\t\t\tremove();\n\t\t}\n\t};\n}\n\nvar replaceText = (function () {\n\tvar textStore = [];\n\n\treturn function (index, replacement) {\n\t\ttextStore[index] = replacement;\n\n\t\treturn textStore.filter(Boolean).join(\'\\n\');\n\t};\n})();\n\nfunction applyToSingletonTag (style, index, remove, obj) {\n\tvar css = remove ? "" : obj.css;\n\n\tif (style.styleSheet) {\n\t\tstyle.styleSheet.cssText = replaceText(index, css);\n\t} else {\n\t\tvar cssNode = document.createTextNode(css);\n\t\tvar childNodes = style.childNodes;\n\n\t\tif (childNodes[index]) style.removeChild(childNodes[index]);\n\n\t\tif (childNodes.length) {\n\t\t\tstyle.insertBefore(cssNode, childNodes[index]);\n\t\t} else {\n\t\t\tstyle.appendChild(cssNode);\n\t\t}\n\t}\n}\n\nfunction applyToTag (style, obj) {\n\tvar css = obj.css;\n\tvar media = obj.media;\n\n\tif(media) {\n\t\tstyle.setAttribute("media", media)\n\t}\n\n\tif(style.styleSheet) {\n\t\tstyle.styleSheet.cssText = css;\n\t} else {\n\t\twhile(style.firstChild) {\n\t\t\tstyle.removeChild(style.firstChild);\n\t\t}\n\n\t\tstyle.appendChild(document.createTextNode(css));\n\t}\n}\n\nfunction updateLink (link, options, obj) {\n\tvar css = obj.css;\n\tvar sourceMap = obj.sourceMap;\n\n\t/*\n\t\tIf convertToAbsoluteUrls isn\'t defined, but sourcemaps are enabled\n\t\tand there is no publicPath defined then lets turn convertToAbsoluteUrls\n\t\ton by default.  Otherwise default to the convertToAbsoluteUrls option\n\t\tdirectly\n\t*/\n\tvar autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;\n\n\tif (options.convertToAbsoluteUrls || autoFixUrls) {\n\t\tcss = fixUrls(css);\n\t}\n\n\tif (sourceMap) {\n\t\t// http://stackoverflow.com/a/26603875\n\t\tcss += "\\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";\n\t}\n\n\tvar blob = new Blob([css], { type: "text/css" });\n\n\tvar oldSrc = link.href;\n\n\tlink.href = URL.createObjectURL(blob);\n\n\tif(oldSrc) URL.revokeObjectURL(oldSrc);\n}\n\n\n//# sourceURL=webpack:///../node_modules/style-loader/lib/addStyles.js?')},function(module,exports){eval('/**\n * When source maps are enabled, `style-loader` uses a link element with a data-uri to\n * embed the css on the page. This breaks all relative urls because now they are relative to a\n * bundle instead of the current page.\n *\n * One solution is to only use full urls, but that may be impossible.\n *\n * Instead, this function "fixes" the relative urls to be absolute according to the current page location.\n *\n * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.\n *\n */\nmodule.exports = function (css) {\n  // get current location\n  var location = typeof window !== "undefined" && window.location;\n\n  if (!location) {\n    throw new Error("fixUrls requires window.location");\n  } // blank or null?\n\n\n  if (!css || typeof css !== "string") {\n    return css;\n  }\n\n  var baseUrl = location.protocol + "//" + location.host;\n  var currentDir = baseUrl + location.pathname.replace(/\\/[^\\/]*$/, "/"); // convert each url(...)\n\n  /*\n  This regular expression is just a way to recursively match brackets within\n  a string.\n  \t /url\\s*\\(  = Match on the word "url" with any whitespace after it and then a parens\n     (  = Start a capturing group\n       (?:  = Start a non-capturing group\n           [^)(]  = Match anything that isn\'t a parentheses\n           |  = OR\n           \\(  = Match a start parentheses\n               (?:  = Start another non-capturing groups\n                   [^)(]+  = Match anything that isn\'t a parentheses\n                   |  = OR\n                   \\(  = Match a start parentheses\n                       [^)(]*  = Match anything that isn\'t a parentheses\n                   \\)  = Match a end parentheses\n               )  = End Group\n               *\\) = Match anything and then a close parens\n           )  = Close non-capturing group\n           *  = Match anything\n        )  = Close capturing group\n   \\)  = Match a close parens\n  \t /gi  = Get all matches, not the first.  Be case insensitive.\n   */\n\n  var fixedCss = css.replace(/url\\s*\\(((?:[^)(]|\\((?:[^)(]+|\\([^)(]*\\))*\\))*)\\)/gi, function (fullMatch, origUrl) {\n    // strip quotes (if they exist)\n    var unquotedOrigUrl = origUrl.trim().replace(/^"(.*)"$/, function (o, $1) {\n      return $1;\n    }).replace(/^\'(.*)\'$/, function (o, $1) {\n      return $1;\n    }); // already a full url? no change\n\n    if (/^(#|data:|http:\\/\\/|https:\\/\\/|file:\\/\\/\\/|\\s*$)/i.test(unquotedOrigUrl)) {\n      return fullMatch;\n    } // convert the url to a full url\n\n\n    var newUrl;\n\n    if (unquotedOrigUrl.indexOf("//") === 0) {\n      //TODO: should we add protocol?\n      newUrl = unquotedOrigUrl;\n    } else if (unquotedOrigUrl.indexOf("/") === 0) {\n      // path should be relative to the base url\n      newUrl = baseUrl + unquotedOrigUrl; // already starts with \'/\'\n    } else {\n      // path should be relative to current directory\n      newUrl = currentDir + unquotedOrigUrl.replace(/^\\.\\//, ""); // Strip leading \'./\'\n    } // send back the fixed url(...)\n\n\n    return "url(" + JSON.stringify(newUrl) + ")";\n  }); // send back the fixed css\n\n  return fixedCss;\n};\n\n//# sourceURL=webpack:///../node_modules/style-loader/lib/urls.js?')}]);