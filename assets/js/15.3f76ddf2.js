(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{346:function(t,s,a){"use strict";a.r(s);var e=a(3),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("最近开始阅读Structure and Interpretation of Computer Programs（SICP）这一本书，接触到Scheme这一门Lisp家族的语言。Lisp语言的编程很多时候都采用了Read-Eval-Print Loop（REPL）这一种编程方式。REPL其实就是我们平常所见到的交互式编程环境，譬如说python也是可以采用REPL的，在Linux的shell里面输入python，我们就可以进入一个python的REPL编程环境。但是如果能在vim中REPL就更好了。")]),t._v(" "),a("div",{staticClass:"language-scheme extra-class"},[a("pre",{pre:!0,attrs:{class:"language-scheme"}},[a("code",[t._v("> "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n")])])]),t._v(" "),a("h2",{attrs:{id:"why-vim"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#why-vim"}},[t._v("#")]),t._v(" Why vim")]),t._v(" "),a("p",[t._v("一般来说，Scheme的许多实现都带有一个解释器来支持REPL，但是Scheme并不是一门脚本语言，它是需要编译的，我们还是希望能够把源码放在一个文件里面（对于python这样的脚本语言也是这样的）。于是我想有一个开发环境来支持REPL这样的操作。DrRacket是不错的选择，但是它只能支持Racket，如果能把vim改造一下，变成一个支持REPL的IDE就再好不过了。")]),t._v(" "),a("p",[t._v("再说，如果能在vim里面写scheme，那么就可以使用各种插件，什么自动补全、状态栏等等，还有vim的各种操作。所以说vim应该能够成为一个比较好的开发平台。")]),t._v(" "),a("h2",{attrs:{id:"vim-plugins"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vim-plugins"}},[t._v("#")]),t._v(" vim plugins")]),t._v(" "),a("h3",{attrs:{id:"for-lisp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#for-lisp"}},[t._v("#")]),t._v(" for Lisp")]),t._v(" "),a("p",[t._v("首先就是，vim上的支持Lisp家族语言的插件相对比较少，好像emacs支持得比较好。但是vim上总会有解决方案的。")]),t._v(" "),a("p",[t._v("通过一段时间搜索，找到了两个，slimv和vim-slime。")]),t._v(" "),a("p",[t._v("slimv是试图把emacs里面的SLIME移植到vim上，我尝试使用了一下，但是好像没有配置成功（可能是不支持我使用的ChezScheme）。")]),t._v(" "),a("p",[t._v("vim-slime也是受SLIME启发，但是它只实现简单的文本传输的功能。具体来说，就是它会把vim的buffer里面特定部分的文本发送到解释器那里，然后接下来的事情就是由解释器来完成。这个插件的好处在于可塑性非常强，只要是个能打字的解释器就能用。而且现在它支持GNU Screen、tmux、vim terminal、neovim terminal，也就是说可以把解释器和vim放在同一个终端里面，并排着，使用起来特别好。")]),t._v(" "),a("h3",{attrs:{id:"vim-slime"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vim-slime"}},[t._v("#")]),t._v(" vim-slime")]),t._v(" "),a("p",[t._v("vim-slime的安装方法以及各种文档可以在"),a("a",{attrs:{href:"https://github.com/jpalardy/vim-slime",target:"_blank",rel:"noopener noreferrer"}},[t._v("github"),a("OutboundLink")],1),t._v("上找到。其实就是复制两个文件到vim的运行环境就可以了。")]),t._v(" "),a("p",[t._v("Arch Linux用户可以用我打的包"),a("a",{attrs:{href:"https://github.com/kylerky/vim-slime-pkgbuild",target:"_blank",rel:"noopener noreferrer"}},[t._v("vim-slime"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("p",[t._v("配置也十分简单。vim-slime默认发送文本到GNU Screen，而其它的话就要在vimrc里面配置一下。我选择使用vim的内置终端（vim8的新特性）来运行解释器。这时候只要在vimrc加上")]),t._v(" "),a("div",{staticClass:"language-vim extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vim"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('"vim-slime')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" g"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("slime_target "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vimterminal"')]),t._v("\n")])])]),a("p",[t._v("就算是配置完成了。每次运行时vim-slime还会有提示，按提示输入相应的参数就可以了。")]),t._v(" "),a("p",[t._v("配置完后，按下<c-c><c-c>（按两下Ctrl+C），就可以将一个段落的代码发送到解释器去了。当然还可以选中一些文本，然后<c-c><c-c>，就可以只发送选中的文本（这样不用每一次都让解释器从头跑一遍整段代码）。")]),t._v(" "),a("p",[t._v("下面是配置好后的vim")]),t._v(" "),a("p",[a("a",{attrs:{href:"vim/screen.png","data-fancybox":"vim-for-scheme","data-height":"487","data-width":"1699","data-caption":"Vim with vim-slime, ChezScheme running on vim terminal"}},[a("img",{attrs:{src:"vim/screen.png"}})])]),t._v(" "),a("h3",{attrs:{id:"vim-slime-auto-start"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vim-slime-auto-start"}},[t._v("#")]),t._v(" vim-slime auto start")]),t._v(" "),a("p",[t._v("但是，每一次我们要使用REPL的时候，我们都要在vim-slime的菜单里面输入我们要运行的解释器，这样还不够方便。最好当然是一打开Scheme的源文件，整个REPL的开发环境就已经出现了，不需要再手动去输入什么东西。于是我就开始加一些vim script，让整个过程自动化。最终得到的脚本是这样的")]),t._v(" "),a("div",{staticClass:"language-vim extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vim"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("SchemeStart")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('"only if the buffer is a scheme file and no terminal exists')]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" &"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("filetype")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"scheme"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("len")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("term_list")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('"only start once')]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("autocmd")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v(" SchemeREPL "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("\n\t\taugroup"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v(" SchemeREPL\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('"get original buffer number')]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" original_bufnr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("win_getid")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('"start the terminal, with scheme running')]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" term_bufnr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("term_start")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'scheme'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"term_finish"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"close"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('"get back to the original buffer')]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("call")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("win_gotoid")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("original_bufnr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('"no vim-slime menus')]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("exists")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"b:slime_config"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t   \t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("b")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("slime_config "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bufnr"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("endif")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("b")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("slime_config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bufnr"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" term_bufnr\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("endif")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("endfunction")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("SchemeSetUp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('"everytime a new buffer is read, try to start REPL')]),t._v("\n\taugroup SchemeREPL\n\t\t"),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("autocmd")]),t._v(" BufRead "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("call")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("SchemeStart")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\taugroup END\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('"the time when vim is ready')]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("call")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("SchemeStart")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("endfunction")]),t._v("\n\naugroup SchemeREPL\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('"when vim is ready, start the script')]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("autocmd")]),t._v(" VimEnter "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("call")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("SchemeSetUp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\naugroup END\n")])])]),a("p",[t._v("我用了一些autocmd来在vim加载完成后再执行相应的脚本，同时也能实现在打开vim后，在vim里再打开Scheme文件的时候自动打开REPL环境。脚本会自动打开终端并运行Scheme解释器，之后通过设置vim-slime的一个变量，来绕过vim-slime的输入菜单。")]),t._v(" "),a("p",[t._v("至此，我的Vim for Scheme就算是配置完全了。")]),t._v(" "),a("h3",{attrs:{id:"more-about-repl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#more-about-repl"}},[t._v("#")]),t._v(" more about REPL")]),t._v(" "),a("p",[t._v("正如前面所说，vim-slime只是简单的把文本发送到一个解释器，这就意味着这个插件不仅可以用在Scheme上面，也可以用在其他地方，譬如说shell脚本、python、SQL等等，都可以用到这个插件，操作方法和上述的基本一模一样，只要把终端里面打开的解释器换成所需要的（如sh，python，mysql）即可。")]),t._v(" "),a("h3",{attrs:{id:"buffer-centric-workflow"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#buffer-centric-workflow"}},[t._v("#")]),t._v(" buffer centric workflow")]),t._v(" "),a("p",[t._v("其实上面配置的这个REPL环境是用了所谓buffer centric workflow，编写代码的动作都是在缓存（vim）里面完成的，而只有在执行求值的时候代码才会被发送到解释器。这样一个workflow的好处在于，能够利用解释器来验证代码的正确性，即时的看到代码的运行结果，同时也能方便的将写好的代码保存到硬盘上。")]),t._v(" "),a("h3",{attrs:{id:"more-vim-plugins"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#more-vim-plugins"}},[t._v("#")]),t._v(" more vim plugins")]),t._v(" "),a("p",[t._v("下面是一些vim插件推荐")]),t._v(" "),a("ul",[a("li",[t._v("vim-airline")]),t._v(" "),a("li",[t._v("SuperTab")])])])}),[],!1,null,null,null);s.default=n.exports}}]);