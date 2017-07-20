webpackJsonp([4],{38:function(e,t,n){e.exports=n(47)},47:function(e,t,n){var r=n(3)(null,n(49),null,null,null);e.exports=r.exports},49:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("p",[e._v('{\n"title": "Sphinx",\n"tags": ["javascript"],\n"date": "2016-07-15",\n"desc": "A very light JS library which could encode a string to an image, or decode an image to a string",\n"cover": "sphinx.png"\n}')]),e._v(" "),n("h1",[e._v("SphinxJS")]),e._v(" "),n("p",[e._v("A very light JS library which could encode a string to an image, or decode an image to a string.")]),e._v(" "),n("h2",[e._v("Usage")]),e._v(" "),n("p",[e._v("Install SphinxJS from npm")]),e._v(" "),n("pre",{pre:!0,attrs:{class:"hljs"}},[n("code",{attrs:{"v-pre":""}},[e._v("npm install sphinx.js\n")])]),e._v(" "),n("p",[e._v("Use "),n("code",{pre:!0},[e._v("<script><\/script>")]),e._v(" tags")]),e._v(" "),n("pre",{pre:!0,attrs:{class:"hljs"}},[n("code",{attrs:{"v-pre":""}},[e._v('<script src="sphinx.js"><\/script>\n')])]),e._v(" "),n("blockquote",[n("p",[e._v("Mind that "),n("code",{pre:!0},[e._v("SphinxJS")]),e._v(" uses ES2015 "),n("code",{pre:!0},[e._v("Promise")]),e._v(" and other amazing features, which means that it requires your browser's support.\nIf not, you might use 'Babel' or something else to build your code.")])]),e._v(" "),n("blockquote",[n("p",[n("code",{pre:!0},[e._v("SphinxJS")]),e._v(" also supports "),n("code",{pre:!0},[e._v("AMD")]),e._v(", "),n("code",{pre:!0},[e._v("CommonJS")]),e._v(" and "),n("code",{pre:!0},[e._v("ES6 Modules")])])]),e._v(" "),n("h2",[e._v("Encode")]),e._v(" "),n("p",[e._v("Defined a string as "),n("code",{pre:!0},[e._v("Hello Sphinx!")]),e._v(", and we're going to encode it.")]),e._v(" "),n("pre",{pre:!0,attrs:{class:"hljs"}},[n("code",{attrs:{"v-pre":""}},[e._v("let base64URL = new Sphinx().encode('Hello Sphinx!')\n")])]),e._v(" "),n("p",[e._v("Then the "),n("code",{pre:!0},[e._v("base64URL")]),e._v(" is equal to")]),e._v(" "),n("pre",{pre:!0,attrs:{class:"hljs"}},[n("code",{attrs:{"v-pre":""}},[e._v("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAADCAYAAABWKLW/AAAAJklEQVQYV2P0SM35r8K1heE5owcDY2Zexf8dezYxcDIwMDAyIAEA7EYIq6UNAkYAAAAASUVORK5CYII=\n")])]),e._v(" "),n("p",[e._v(", the string information has encoded to an image successfully.")]),e._v(" "),n("p",[e._v("As you see, the "),n("code",{pre:!0},[e._v("encode()")]),e._v(" function returns a base64 url of an image.")]),e._v(" "),n("h2",[e._v("Decode")]),e._v(" "),n("p",[e._v("Defined an image url")]),e._v(" "),n("pre",{pre:!0,attrs:{class:"hljs"}},[n("code",{attrs:{"v-pre":""}},[e._v("let url = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAADCAYAAABWKLW/AAAAJklEQVQYV2P0SM35r8K1heE5owcDY2Zexf8dezYxcDIwMDAyIAEA7EYIq6UNAkYAAAAASUVORK5CYII=`\n")])]),e._v(" "),n("p",[e._v("Now decode it!")]),e._v(" "),n("pre",{pre:!0,attrs:{class:"hljs"}},[n("code",{attrs:{"v-pre":""}},[e._v("new Sphinx().decode(url)\n\t.then((info) => {\n\t\tconsole.log(info) // Hello Sphinx!\n\t})\n")])]),e._v(" "),n("p",[e._v("The "),n("code",{pre:!0},[e._v("decode()")]),e._v(" function returns a "),n("code",{pre:!0},[e._v("Promise")]),e._v(", which includes the string information decoded from the image.")]),e._v(" "),n("h2",[e._v("Config")]),e._v(" "),n("p",[e._v("The "),n("code",{pre:!0},[e._v("new Sphinx()")]),e._v(" could recieve a config object to select the type of the image it created.")]),e._v(" "),n("ul",[n("li",[e._v("config {Object} "),n("code",{pre:!0},[e._v("optional")]),e._v(" "),n("code",{pre:!0},[e._v("default: {img: 'png'}")])])]),e._v(" "),n("pre",{pre:!0,attrs:{class:"hljs"}},[n("code",{attrs:{"v-pre":""}},[e._v("new Sphinx({img: 'bmp'})\n")])]),e._v(" "),n("h2",[e._v("License")]),e._v(" "),n("p",[e._v("MIT")])])}]}}});
//# sourceMappingURL=4.42efee50.js.map