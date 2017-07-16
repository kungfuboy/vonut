webpackJsonp([5],{31:function(e,t,r){e.exports=r(45)},45:function(e,t,r){var o=r(2)(null,r(52),null,null,null);e.exports=o.exports},52:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",[r("p",[e._v('{\n"title": "Motto",\n"tags": ["javascript", "vue", "tool"],\n"date": "2016-08-05",\n"desc": "Show your motto in an amazing way!",\n"cover": "motto.png"\n}')]),e._v(" "),r("h1",[e._v("MottoJS")]),e._v(" "),r("p",[e._v("Show your motto in an amazing way!")]),e._v(" "),r("blockquote",[r("p",[e._v("Visit "),r("a",{attrs:{href:"http://codepen.io/jrainlau/pen/vKQKEA"}},[e._v("Codepen live demo")]),e._v(" here")])]),e._v(" "),r("h1",[e._v("Installation")]),e._v(" "),r("p",[e._v("npm")]),e._v(" "),e._m(0),e._v(" "),r("p",[e._v("or")]),e._v(" "),e._m(1),e._v(" "),r("h1",[e._v("Usage")]),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),r("blockquote",[r("p",[r("code",{pre:!0},[e._v("MottoJS")]),e._v(" also support "),r("code",{pre:!0},[e._v("AMD")]),e._v(", "),r("code",{pre:!0},[e._v("CommonJS")]),e._v(" and "),r("code",{pre:!0},[e._v("ES2015")]),e._v(".")])]),e._v(" "),e._m(6),e._v(" "),e._m(7),e._v(" "),r("blockquote",[r("p",[e._v("if you want to add the "),r("em",[e._v("shake")]),e._v(" effect, you should link the "),r("code",{pre:!0},[e._v("motto.css")]),e._v(" to your  HTML:")]),e._v(" "),r("pre",{pre:!0,attrs:{class:"hljs"}},[r("code",{attrs:{"v-pre":""}})])]),e._v(" "),r("p",[e._v('<link rel="stylesheet" href="motto.css">')]),e._v(" "),e._m(8),e._v(" "),r("h1",[e._v("Params")]),e._v(" "),e._m(9),e._v(" "),e._m(10),e._v(" "),r("p",[e._v("use CSS selector to select a html element for showing the motto.")]),e._v(" "),e._m(11),e._v(" "),r("p",[e._v("it's an object with five optional properties.")]),e._v(" "),r("h1",[e._v("Config")]),e._v(" "),r("p",[e._v("the base config object is")]),e._v(" "),e._m(12),e._v(" "),e._m(13),e._v(" "),r("p",[e._v("the text of your motto.")]),e._v(" "),e._m(14),e._v(" "),r("p",[e._v("your motto will be a letter by letter on display, it's an option to control the speed.")]),e._v(" "),e._m(15),e._v(" "),r("p",[e._v("to control how fast will the messy code translate into meaningful motto.")]),e._v(" "),e._m(16),e._v(" "),r("p",[e._v("set the timeout between the messy code showed up and translated into meaningful motto.")]),e._v(" "),e._m(17),e._v(" "),r("p",[e._v("a callback function after translation.")]),e._v(" "),r("h1",[e._v("Update")]),e._v(" "),e._m(18),e._v(" "),r("h1",[e._v("License")]),e._v(" "),r("p",[e._v("MIT")])],1)},staticRenderFns:[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("pre",{pre:!0,attrs:{class:"hljs"}},[r("code",{attrs:{"v-pre":""}},[e._v("npm install motto\n")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("pre",{pre:!0,attrs:{class:"hljs"}},[r("code",{attrs:{"v-pre":""}},[e._v("git clone git@github.com:jrainlau/motto.git\n")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("create a html tag such as "),r("code",{pre:!0},[e._v("<h1></h1>")]),e._v(" etc")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("pre",{pre:!0,attrs:{class:"hljs"}},[r("code",{attrs:{"v-pre":""}},[e._v('<h1 class="motto"></h1>\n')])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("then include "),r("code",{pre:!0},[e._v("MottoJS")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("pre",{pre:!0,attrs:{class:"hljs"}},[r("code",{attrs:{"v-pre":""}},[e._v('<script src="motto.min.js"><\/script>\n')])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("then use "),r("code",{pre:!0},[e._v("new")]),e._v(" to create a MottoJS instance")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("pre",{pre:!0,attrs:{class:"hljs"}},[r("code",{attrs:{"v-pre":""}},[e._v("var motto = new Motto(el, config)\n")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("pre",{pre:!0,attrs:{class:"hljs"}},[r("code",{attrs:{"v-pre":""}},[e._v('> and add a class `.motto-shake` to the element\n> ```\n<h1 class="title motto-shake"></h1>\n')])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[r("code",{pre:!0},[e._v("MottoJS")]),e._v(" receive two params.")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("h3",[e._v("el {String / HTML element} "),r("code",{pre:!0},[e._v("required")])])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("h3",[e._v("config {Object} "),r("code",{pre:!0},[e._v("required")])])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("pre",{pre:!0,attrs:{class:"hljs"}},[r("code",{attrs:{"v-pre":""}},[e._v("{\n    lyric: 'To be or not to be, that\\'s a question.',\n    showUpSpeed: 1000,\n    flashSpeed: 100,\n    flashTimeout: 1000,\n    callback: function() { ... }\n}\n")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("h4",[e._v("lyric {String} "),r("code",{pre:!0},[e._v("optional")]),e._v(" "),r("code",{pre:!0},[e._v("default: ''")])])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("h4",[e._v("showUpSpeed {Number} "),r("code",{pre:!0},[e._v("optional")]),e._v(" "),r("code",{pre:!0},[e._v("default: 0")])])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("h4",[e._v("flashSpeed {Number} "),r("code",{pre:!0},[e._v("optional")]),e._v(" "),r("code",{pre:!0},[e._v("default: 0")])])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("h4",[e._v("flashTimeout {Number} "),r("code",{pre:!0},[e._v("optional")]),e._v(" "),r("code",{pre:!0},[e._v("default: 0")])])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("h4",[e._v("callback {Function} "),r("code",{pre:!0},[e._v("optional")]),e._v(" "),r("code",{pre:!0},[e._v("default: {}")])])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[e._v("v1.0.1: added "),r("em",[e._v("shake")]),e._v(" css effect.")])])}]}}});
//# sourceMappingURL=5.59319e47.js.map