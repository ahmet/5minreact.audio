webpackJsonp([36469012012174],{406:function(e,t){e.exports={data:{site:{siteMetadata:{title:"5 minutes of React",author:"5 minutes of React"}},markdownRemark:{id:"/Users/petr/www/5minreact.audio/src/pages/007-amsterdam-pwa-realworld-prepack/index.md absPath of file >>> MarkdownRemark",html:'<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/323677823&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>\n<p>News: </p>\n<ul>\n<li>React Amsterdam 2017</li>\n<li>Hacker News readers as Progressive Web Apps written in React, Preact, Svelte, Vue, Angular and viperHTML</li>\n<li>TodoMVC for the RealWorld™ — Exemplary fullstack Medium.com clone powered by React, Angular, Node, Django, and many more</li>\n<li>Prepack - a tool for making JavaScript code run faster.</li>\n</ul>\n<p>Links:</p>\n<ul>\n<li><a href="https://twitter.com/ReactAmsterdam">https://twitter.com/ReactAmsterdam</a></li>\n<li><a href="https://www.youtube.com/playlist?list=PLNBNS7NRGKMHxfm0CcYNuINLdRw7r4a9M">https://www.youtube.com/playlist?list=PLNBNS7NRGKMHxfm0CcYNuINLdRw7r4a9M</a> - React Amsterdam 2017 playlist</li>\n<li><a href="https://youtu.be/3J9EJrvqOiM?list=PLNBNS7NRGKMHxfm0CcYNuINLdRw7r4a9M">https://youtu.be/3J9EJrvqOiM?list=PLNBNS7NRGKMHxfm0CcYNuINLdRw7r4a9M</a> - Complexity: Divide and Conquer</li>\n<li><a href="http://divideandconquer.surge.sh/#1">http://divideandconquer.surge.sh/#1</a></li>\n<li><a href="https://github.com/tastejs/hacker-news-pwas">https://github.com/tastejs/hacker-news-pwas</a></li>\n<li><a href="https://medium.com/@ericsimons/introducing-realworld-6016654d36b5">https://medium.com/@ericsimons/introducing-realworld-6016654d36b5</a></li>\n<li><a href="https://github.com/gothinkster/realworld">https://github.com/gothinkster/realworld</a></li>\n<li><a href="https://prepack.io">https://prepack.io</a></li>\n</ul>\n<!-- end -->\n<p><strong>Transcript</strong></p>\n<p>On the 21st of April 2017 the yearly React Amsterdam conference took place. It is a major event in the React world, and interesting reports and videos have already been posted. The conference was divided into a main track for React and another one for React Native. The organizers have launched a contest for the best conference review post, and React Amsterdam’s Twitter page is constantly updated with links to new materials.</p>\n<p>A talk called «Complexity: Divide and Conquer» by Michel Weststrate, the MobX creator, particularly caught my attention. Its main point was breaking tasks into smaller ones. It is a simple and ordinary piece of advice, but the example Michael presented is much less obvious: a bookstore website where the UI is fundamentally separated from the business logic. First we can see the website where a book can be selected, added to cart and checked out. Then the whole application render is removed, and the browser screen turns empty, but we can still choose a book, add it to cart, and purchase it by calling certain methods on Store object in the console. Meanwhile, the application responds properly to changing the URL in the browser, the server receives the requests correctly, and the necessary data gets loaded.</p>\n<p>This can be achieved by following a few hygiene rules. React’s Life cycle methods should be avoided, in particular componentDidMount, which is often used to request data from the server. Additionally, the router shouldn’t select the components to render on its own, but rather change the state in Store. These and other useful tips will certainly help us divide and conquer!</p>\n<p>Another point for today’s podcast, apart from React Amsterdam, are Progressive web apps. You can check out the repository with PWA implemented in several frameworks: React, Preact, Svelte, Vue, Angular, and viperHTML. The application itself is a clone of Hacker News.</p>\n<p>If Hacker News clones are not your thing, here is a similar initiative: a blog platform called Real World, which is written using different technology stacks. </p>\n<p>What’s interesting is that apart from such front-end frameworks as React and Elm, the Real World repository also contains back-end implementations, including Node Express, Django, Rails, and Laravel. All of them rely on the same API, the front end is separate from the back end, and they can be combined. The author is planning to implement more examples based on various front- and back-end technologies, and contributors are welcome. There is a Medium post to accompany the repository.  </p>\n<p>Another Hot topic is the Prepack tool which speeds up JavaScript code initialization. A sensational new project by the Facebook team! It is still in early development and is not recommended for production use, but Twitter is already full of application benchmarks that show double startup speed.</p>\n<p>Prepack is a tool used on application source code, transforming it in order to speed up initialization at runtime. The idea is simple: any static computations that can be done at compile time should be done at compile time and not at runtime. Here is a clear example: imagine we want to write:</p>\n<p>const x = 2 + 3;</p>\n<p>this source code line would better be written as</p>\n<p>const x = 5</p>\n<p>to avoid computation while running the program in the browser or on the node.</p>\n<p>Internally Prepack uses Babel to parse the source code and construct an abstract syntactic tree (AST). Then it needs to be able to interpret Javascript code and evaluate expressions, and it can indeed do that! </p>\n<p>At the core of Prepack is an almost ECMAScript 5 compatible interpreter — implemented in JavaScript! The interpreter closely follows the ECMAScript 2016 Language Specification, with a focus on correctness and spec conformance. You can think of the interpreter in Prepack as a clean reference implementation of JavaScript.</p>\n<p>The interpreter has the ability to track and undo all effects, including all object mutations. This enables speculative optimizations.</p>\n<p>In addition to elementary Javascript expressions, Prepack optimization makes use of symbolic expressions traversing all possible options. For example, Date.now can return an abstract value. Prepack tracks all operations that are performed over abstract values. When branching over abstract values, Prepack will fork execution and explore all possibilities. Thus, Prepack implements a Symbolic Execution engine for JavaScript.</p>\n<p>There is a roadmap on prepack.io website. In the near future the developers plan to integrate Prepack into React Native tool chain and build some optimizations based on assumptions of the module system used by React Native.</p>\n<p>Medium term goals include full ECMAScript 6 conformance and lots of further optimizations, such as elimination of unused exported properties (similar to what treeshake in webpack does, although webpack can’t compute js code and only operates on AST level, so Prepack is expected to do a more thorough cleanup than webpack).</p>\n<p>In the long run the team plans to introduce execution flow analysis for bug hunting, side effect detection, type control,  as well as automated test generation leveraging symbolic execution features, and even a JavaScript virtual machine written in Javascript hosted in the browser for trying out new language features that can’t be transpiled with Babel. </p>\n<p>Check out the prepack.io website and try it on your own code base.</p>\n<p>Code with React and prosper!</p>',frontmatter:{title:"#7 - Amsterdam, PWA, RealWorld, Prepack",date:"May 20, 2017"}}},pathContext:{slug:"/007-amsterdam-pwa-realworld-prepack/",previous:{fields:{slug:"/006-runtyper/"},html:'<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/322512146&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>\n<p>Analyzing React’s Source Code for Type Mismatch Operations with a new Babel plugin: Runtyper. </p>\n<ul>\n<li><a href="https://github.com/vitalets/babel-plugin-runtyper">https://github.com/vitalets/babel-plugin-runtyper</a></li>\n<li><a href="https://medium.com/dailyjs/analyzing-reacts-source-code-for-type-mismatch-operations-9ca065e5b91">https://medium.com/dailyjs/analyzing-reacts-source-code-for-type-mismatch-operations-9ca065e5b91</a></li>\n</ul>\n<!-- end -->\n<p><strong>Transcript</strong></p>\n<p>One smart guy, Vitaliy Potapov, wrote a babel plugin for runtime type-checking in JavaScript. After testing the plugin on his own projects he applied it to React’s source code and got some interesting results. In this podcast, I will tell you some facts from that experiment described on a Medium post made by Vitaly.</p>\n<p>What is checked?\nEvery math or comparison operation with different types in JavaScript is potentially unsafe. You can get silent unexpected result because values are converted by tricky rules. For example, 1 + 1 = 2 but if you accidentally add 1 + 1 as a string, you will get a string value 11. To avoid such errors you can use Flow, TypeScript or check operand types in runtime. I will apply the last approach to the React source code.</p>\n<p>How it works?\nThe plugin called Runtyper wraps every operation into a function that performs some additional type checking. The plugin guess types by code itself with no manual annotations needed. That allows to apply such checking to any existing project with minimal effort. Let’s try it on React.</p>\n<p>Plan</p>\n<ol>\n<li>Get the React source code.</li>\n<li>Include Runtyper into the build process.</li>\n<li>Run all of React’s unit tests and analyze the output.</li>\n</ol>\n<p>While setting up Runtyper for this experiment with React, author allowed some rules because the default configuration of plugin is very strict. For example, implicitAddStringNumber option allows concatenation ofstring + number. It is widely used in React code and will noise results if disabled.</p>\n<p>Also hi disabled a few lines in DOMProperty.js and Transaction.js. React executes these lines many times and their warnings overfill the output. In results section he covers what is happening there.</p>\n<p>React uses Jest for self-testing. so all tests results were piped output to log.txt for later analysis.</p>\n<p>When tests finished there were 33 unique places with type-mismatch operations. full log published for everybody’s access.</p>\n<p>In his post on Medium Vitaliy analyzes 5 most interesting cases he found in React source code - there are code examples you better look in text, than in audio podcast.</p>\n<p>As Conclusion it was interesting experiment to perform runtime type-checking of React source code. Most of warnings are just “info” and intended by React design. Some can be fixed. Finally Vitaliy created two pull requests to React repositry.</p>\n<p>Read the full article and try Runtyper Babel plugin, links are in shownotes.</p>\n<p>Code with React and Prosper!</p>',excerpt:'\n<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/322512146&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>\n\nAnalyzing React’s Source Code for Type Mismatch Operations with a new Babel plugin: Runtyper. \n\n- https://github.com/vitalets/babel-plugin-runtyper\n- https://medium.com/dailyjs/analyzing-reacts-source-code-for-type-mismatch-operations-9ca065e5b91\n\n',frontmatter:{title:"#6 - Runtyper",date:"May 14, 2017"}},next:{fields:{slug:"/008-pnpm/"},html:'<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/324063275&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>\n<p>pnpm - fast, disk space efficient package manager, drop-in replacement for npm.</p>\n<ul>\n<li><a href="https://pnpm.js.org">https://pnpm.js.org</a></li>\n<li><a href="https://twitter.com/pnpmjs">https://twitter.com/pnpmjs</a></li>\n<li><a href="https://www.kochan.io/nodejs/why-should-we-use-pnpm.html">https://www.kochan.io/nodejs/why-should-we-use-pnpm.html</a></li>\n</ul>\n<!-- end -->\n<p><strong>Transcript</strong></p>\n<p>pnpm is an alternative package manager for Node.js. It is a drop-in replacement for npm, but faster and more efficient.</p>\n<p>Why not Yarn?\nAfter a few days of Yarn release, author of pnpm, Zoltan Kochan, realized that Yarn is just a small improvement over npm. Although it makes installations faster and it has some nice new features, it uses the same flat node_modules structure that npm does (since version 3).</p>\n<p>Prior to npm version 3, the node<em>modules structure was predictable and clean, as every dependency in node</em>modules had its own node_modules folder with all of its dependencies specified in package.json.</p>\n<p>This approach had two serious issues:</p>\n<ul>\n<li>frequently packages were creating too deep dependency trees, which caused long directory paths issue on Windows</li>\n<li>packages were copy pasted several times when they were required in different dependencies</li>\n</ul>\n<p>To solve these issues, npm rethought the node_modules structure and came up with flattening in npm version 3.</p>\n<p>And flattened dependency trees come with a bunch of issues:</p>\n<ul>\n<li>modules can access packages they don’t depend on</li>\n<li>the algorithm of flattening a dependency tree is pretty complex</li>\n<li>some of the packages have to be copied inside one project’s node_modules folder</li>\n</ul>\n<p>Unlike npm vesion 3, pnpm tries to solve the issues that npm version 2 had, without flattening the dependency tree. </p>\n<p>In a node_modules folder created by pnpm, all packages have their own dependencies grouped together, but the directory tree is never as deep as with npm2. pnpm keeps all dependencies flat but uses symlinks to group them together.</p>\n<p>Flattening is hard. A package manager can be deterministic but no human can easily predict how will a flattened dependency tree look like. Pnpm not only has a lockfile, the files in its node_modules folder are organized always the same way, the way they are described in package.json files.</p>\n<p>To understand pnpm algorithm in details I recommend to read a blog post by Zoltan: “Why should we use pnpm?“.</p>\n<p>Pnpm is very efficien in Disk Space usage.\nWhen you install a package, it is saved in a global store on your machine, then pnpm creates a hard link from it instead of copying. For each version of a module, there is only ever one copy kept on disk. When using npm or yarn for example, if you have 100 packages using lodash, you will have 100 copies of lodash on disk. Pnpm allows you to save gigabytes of disk space!</p>\n<p>And all these hadrlinks and symlinks also work on Windows operating system!</p>\n<p> What about speed: pnpm is not only faster than npm, it is faster than Yarn. It is faster than Yarn both with cold and hot cache. Yarn copies files from cache whereas pnpm just links them from the global store.</p>\n<p> pnpm is 10 times faster than npm and 30% faster than Yarn - see benchmarks on GitHub.</p>\n<p>pnpm supports offline mode - it saves all the downloaded package tarballs in a local registry mirror. It never makes requests when a package is available locally. With the —offline parameter, HTTP requests can be prohibited at all.</p>\n<p>By default pnpm connects to registry.npmjs.org and works as a drop-in replacement for npm.</p>\n<p>Visit pnpm.js.org website and follow the @pnpmjs Twitter account for updates.</p>\n<p>Code with React and prosper!</p>',excerpt:'\n<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/324063275&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>\n\npnpm - fast, disk space efficient package manager, drop-in replacement for npm.\n\n- https://pnpm.js.org\n- https://twitter.com/pnpmjs\n- https://www.kochan.io/nodejs/why-should-we-use-pnpm.html\n\n',frontmatter:{title:"#8 - pnpm",date:"May 23, 2017"}}}}}});
//# sourceMappingURL=path---007-amsterdam-pwa-realworld-prepack-6579a7611f3108599067.js.map