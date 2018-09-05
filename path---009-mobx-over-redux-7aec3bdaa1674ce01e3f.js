webpackJsonp([0xc0ff29929ad0],{407:function(e,t){e.exports={data:{site:{siteMetadata:{title:"5 minutes of React",author:"5 minutes of React"}},markdownRemark:{id:"/Users/petr/www/5minreact.audio/src/pages/009-mobx-over-redux/index.md absPath of file >>> MarkdownRemark",html:'<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/325420216&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>\n<p>Should I use MobX over Redux? When, why and whom should try MobX?</p>\n<ul>\n<li><a href="https://www.youtube.com/watch?v=83v8cdvGfeA">https://www.youtube.com/watch?v=83v8cdvGfeA</a> - Understanding MobX vs Redux (4min)</li>\n<li><a href="https://www.youtube.com/watch?v=76FRrbY18Bs">https://www.youtube.com/watch?v=76FRrbY18Bs</a> - Preethi Kasireddy - MobX vs Redux: Comparing the Opposing Paradigms - React Conf 2017 (25m)</li>\n<li><a href="https://www.youtube.com/watch?v=ZGVwMkrL2n0">https://www.youtube.com/watch?v=ZGVwMkrL2n0</a> - Comparing Redux and MobX with two CTO’s and React experts (1h17m)</li>\n<li><a href="https://egghead.io/courses/manage-complex-state-in-react-apps-with-mobx">https://egghead.io/courses/manage-complex-state-in-react-apps-with-mobx</a></li>\n</ul>\n<!-- end -->\n<p><strong>Transcript</strong></p>\n<p>Is there any point in using MobX if we already have Redux? If there is, who could benefit from it, when and in what kind of projects?</p>\n<p>Some introduction for starters. Everyone has heard about Redux - a library for state management in Javascript applications. Redux is not bound to React, and it can be combined with any framework or even used without any browser rendering framework at all, for instance, on the server, although it is most widely used in tandem with React.</p>\n<p>You may have heard nothing but the name about MobX, so I’ll just briefly mention that it is also a state management library. MobX can be used in combination with any framework as well, but it has gained most recognition in the React ecosystem.</p>\n<p>That said, MobX and Redux are poles apart, but that makes comparing them even more interesting.</p>\n<ul>\n<li>Redux requires immutable data structures, while MobX, on the contrary, embraces mutability.</li>\n<li>Redux takes a functional approach, but MobX promotes the use of classes, which is closer to the traditional - Java or C++ style of object-oriented programming</li>\n<li>Redux grants total control of data flow (which sometimes results in a lot of boilerplate code); in contrast, MobX is full of magic built into in the library itself, which allows for less coding in the end.</li>\n</ul>\n<p>And so on.</p>\n<p>So here is my view on the MobX versus Redux dilemma. </p>\n<p>If you are in the process of learning React and its ecosystem, if you are still on your way to be a top-notch frontend developer and you are looking for a project involving React - study Redux, practice it, as it can be found everywhere - there is a huge ecosystem of tools, utility libraries, middleware, and a multitude of production projects, which means a lot of job opportunities for React+Redux stack. </p>\n<p>If you have already passed a junior Redux developer stage, if you are the decision-maker when it comes to the technology stack, and you are a part of a team ready to experiment, you should definitely give MobX a try.</p>\n<p>Note that I’m not emphasizing technicalities, but rather focusing on the business reality: today Redux is the ABC of React development, while MobX is complementary knowledge for enthusiasts.</p>\n<p>Personally, when I discovered and tried MobX, I found my project development to be far more productive and effective!</p>\n<p>Sometimes Redux and MobX are compared based on project size, for example, MobX is considered more suitable for smaller projects, while Redux serves best for the larger ones. However, I have also read completely opposite claims that small projects can be implemented in Redux, and MobX is more appropriate for larger enterprises. I think these arguments are too weak: experience shows that projects of all types and sizes succeed with both Redux and MobX. </p>\n<p>Regarding large projects, it is often claimed that the huge code base is too hard to decipher for  new developers. Redux is supposed to structure the project thanks to a clear separation into actors, reducers and selectors - just a few strands for weaving quite a spaghetti code! Same as MobX, in fact. Effective code structure is a matter equally important for both libraries. The only difference is the lack of articles on “how to structure a MobX application” all over the internet, simply due to MobX being less widespread. </p>\n<p>Moving on to criticism of excessive magic in MobX. Additional abstraction is vital for building complex systems, aren’t they? Indeed, we don’t write websites in machine code. The correct balance is what really matters here. Too much abstraction and magic can be inconvenient, but when is it too much exactly? This would be a subjective estimate. In my view, MobX has just the appropriate level of magic, and there is no need to graduate from Hogwarts to understand it and use it effectively.</p>\n<p>As for performance, it also seems to be a draw. I’ll just point out that MobX delivers efficient applications “out of the box”, while Redux still requires learning some basic principles and best practices for performance. In the end a MobX application would be just as fast as a well-written Redux one.</p>\n<p>In terms of the ecosystem of utility libraries, middleware and developer tools, Redux is definitely a step ahead. However, I would say MobX’s ecosystem is developed well enough to build actual applications conveniently and efficiently.</p>\n<p>A major point to consider is whether the data is derived or computed. If an application relies heavily on derived data, its dependency graph would be much more straightford, clear and maintainable when described using MobX as opposed to Redux and its selectors.</p>\n<p>We often hesitate to choose a less popular solution as we fear facing the problems and questions we might not find answers for on Stack Overflow. We fear the frustrating lack of documentation. We are afraid of being brought to a standstill by critical bugs that don’t get fixed for months or years as the community is small and the main developer’s priorities lie elsewhere. They might eventually give up, and we would be left with nothing but a sudden burden of legacy code. All these fears can apply to MobX, it is just a matter of how much risk we are willing to take.</p>\n<p>I have been working in the MobX ecosystem for over a year, and I think the risk is considerably lower now; I feel I am standing on firm ground. After all, MobX is the state management library second only to Redux. Nowadays using cerebral or technologies like cycle.js, Inferno, or even  Elm and PureScript is a much duller choice, in my view.</p>\n<p>Don’t be afraid of MobX, give it a go!</p>\n<p>In this episode I have deliberately omitted the technical details and focused on the general philosophy instead.</p>\n<p>Not to leave you thirsty for raw information, here are some links to useful resources. </p>\n<p>The first one is a pretty old four-minute video comparing the mechanisms of Redux and MobX. </p>\n<p>The second link is a video of a talk called “MobX vs Redux: Comparing the Opposing Paradigms” which was given by Preethi Kasireddy at React Conf 2017.</p>\n<p>The third one is a live discussion between two great CTOs, Pau Ramon and Ilya Zayats. Make sure you don’t miss the Q&#x26;A part in the end.</p>\n<p>Finally, following the good old principle of “Show me your code and I’ll tell you who you are”, check out this MobX course by the library author Michel Westrate at egghead.io, which includes a lot of comprehensive examples.</p>\n<p>Code with React and MobX and prosper!</p>',frontmatter:{title:"#9 - MobX over Redux",date:"May 31, 2017"}}},pathContext:{slug:"/009-mobx-over-redux/",previous:{fields:{slug:"/008-pnpm/"},html:'<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/324063275&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>\n<p>pnpm - fast, disk space efficient package manager, drop-in replacement for npm.</p>\n<ul>\n<li><a href="https://pnpm.js.org">https://pnpm.js.org</a></li>\n<li><a href="https://twitter.com/pnpmjs">https://twitter.com/pnpmjs</a></li>\n<li><a href="https://www.kochan.io/nodejs/why-should-we-use-pnpm.html">https://www.kochan.io/nodejs/why-should-we-use-pnpm.html</a></li>\n</ul>\n<!-- end -->\n<p><strong>Transcript</strong></p>\n<p>pnpm is an alternative package manager for Node.js. It is a drop-in replacement for npm, but faster and more efficient.</p>\n<p>Why not Yarn?\nAfter a few days of Yarn release, author of pnpm, Zoltan Kochan, realized that Yarn is just a small improvement over npm. Although it makes installations faster and it has some nice new features, it uses the same flat node_modules structure that npm does (since version 3).</p>\n<p>Prior to npm version 3, the node<em>modules structure was predictable and clean, as every dependency in node</em>modules had its own node_modules folder with all of its dependencies specified in package.json.</p>\n<p>This approach had two serious issues:</p>\n<ul>\n<li>frequently packages were creating too deep dependency trees, which caused long directory paths issue on Windows</li>\n<li>packages were copy pasted several times when they were required in different dependencies</li>\n</ul>\n<p>To solve these issues, npm rethought the node_modules structure and came up with flattening in npm version 3.</p>\n<p>And flattened dependency trees come with a bunch of issues:</p>\n<ul>\n<li>modules can access packages they don’t depend on</li>\n<li>the algorithm of flattening a dependency tree is pretty complex</li>\n<li>some of the packages have to be copied inside one project’s node_modules folder</li>\n</ul>\n<p>Unlike npm vesion 3, pnpm tries to solve the issues that npm version 2 had, without flattening the dependency tree. </p>\n<p>In a node_modules folder created by pnpm, all packages have their own dependencies grouped together, but the directory tree is never as deep as with npm2. pnpm keeps all dependencies flat but uses symlinks to group them together.</p>\n<p>Flattening is hard. A package manager can be deterministic but no human can easily predict how will a flattened dependency tree look like. Pnpm not only has a lockfile, the files in its node_modules folder are organized always the same way, the way they are described in package.json files.</p>\n<p>To understand pnpm algorithm in details I recommend to read a blog post by Zoltan: “Why should we use pnpm?“.</p>\n<p>Pnpm is very efficien in Disk Space usage.\nWhen you install a package, it is saved in a global store on your machine, then pnpm creates a hard link from it instead of copying. For each version of a module, there is only ever one copy kept on disk. When using npm or yarn for example, if you have 100 packages using lodash, you will have 100 copies of lodash on disk. Pnpm allows you to save gigabytes of disk space!</p>\n<p>And all these hadrlinks and symlinks also work on Windows operating system!</p>\n<p> What about speed: pnpm is not only faster than npm, it is faster than Yarn. It is faster than Yarn both with cold and hot cache. Yarn copies files from cache whereas pnpm just links them from the global store.</p>\n<p> pnpm is 10 times faster than npm and 30% faster than Yarn - see benchmarks on GitHub.</p>\n<p>pnpm supports offline mode - it saves all the downloaded package tarballs in a local registry mirror. It never makes requests when a package is available locally. With the —offline parameter, HTTP requests can be prohibited at all.</p>\n<p>By default pnpm connects to registry.npmjs.org and works as a drop-in replacement for npm.</p>\n<p>Visit pnpm.js.org website and follow the @pnpmjs Twitter account for updates.</p>\n<p>Code with React and prosper!</p>',excerpt:'\n<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/324063275&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>\n\npnpm - fast, disk space efficient package manager, drop-in replacement for npm.\n\n- https://pnpm.js.org\n- https://twitter.com/pnpmjs\n- https://www.kochan.io/nodejs/why-should-we-use-pnpm.html\n\n',frontmatter:{title:"#8 - pnpm",date:"May 23, 2017"}},next:{fields:{slug:"/010-react-wishlist/"},html:'<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/328216510&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>\n<p>Dan Abramov asked his Twitter audience: “What would you want the React team to focus on in the next 6 months? Reply with a new thing, or Iike existing replies”. This request inspired a massive thread of a few hundred tweets…</p>\n<ul>\n<li><a href="https://twitter.com/dan_abramov/status/871406752016863232">https://twitter.com/dan_abramov/status/871406752016863232</a></li>\n<li><a href="https://twitter.com/dan_abramov/status/871769329079025664">https://twitter.com/dan_abramov/status/871769329079025664</a></li>\n<li><a href="https://github.com/Microsoft/TypeScript-React-Starter">https://github.com/Microsoft/TypeScript-React-Starter</a></li>\n<li><a href="https://5minreact.audio/002-jsx2/">https://5minreact.audio/002-jsx2/</a></li>\n<li><a href="https://github.com/facebook/jsx/issues/65">https://github.com/facebook/jsx/issues/65</a></li>\n</ul>\n<!-- end -->\n<p><strong>Transcript</strong></p>\n<p>Dan Abramov asked his Twitter audience: “What would you want the React team to focus on in the next 6 months? Reply with a new thing, or Iike existing replies”. This request inspired a massive thread of a few hundred tweets. People suggested new ideas or liked the ones proposed earlier, while Dan commented and reviewed pretty much every suggestion, so the discussion turned out to be lively and bilateral. The next day Dan compiled and posted a community wishlist. It is definitely not an official roadmap for the team, but it’s nevertheless interesting by itself. Obviously, some points are already on the team’s agenda. The list is brief, so I can outline it:</p>\n<ul>\n<li>\n<p>A new API for components. Functional components need lifecycle methods, and classes make teaching quite hard</p>\n</li>\n<li>\n<p>Smaller bundle size</p>\n</li>\n<li>\n<p>Animation for component mounting and unmounting</p>\n</li>\n<li>\n<p>Fixing the context feature</p>\n</li>\n<li>\n<p>Functional component optimization (as a reminder, right now functional components aren’t optimized for performance, and in some cases they are slower compared to classes, although they seem more lightweight)</p>\n</li>\n<li>\n<p>Better diversity on the team</p>\n</li>\n<li>\n<p>Better typescript support: in particular, official definitions should be released and built into Create React App. I’m personally all for this one. Although the current community versions of TypeScript typings for React are rather decent, and using Typescript with Create React App is a well-established practice. Microsoft even has their own template TypeScript-React-Starter, which relies on Create React App</p>\n</li>\n<li>\n<p>Make setState great again! Just kidding, the idea is to make setState a viable alternative to Redux</p>\n</li>\n<li>\n<p>Official custom rerenderer API. What is a rerenderer? The most well-known examples are ReactDOM and ReactNative. There are also rerenderers aimed at virtual or augmented reality. Any of us can write our own rerenderers as well, but there is no offiicial API for them yet</p>\n</li>\n<li>\n<p>Server-side rendering: fixes for some issues along with Create React App support</p>\n</li>\n<li>\n<p>Official hot reloading mechanism</p>\n</li>\n<li>\n<p>JSX version 2. By the way, I have discussed its new syntax version in the second episode of “5 minutes of React”, and you can check it out for more details. </p>\n</li>\n</ul>\n<p>Our best wishes for the team’s endeavors.</p>\n<p>Code with React and prosper!</p>',excerpt:'\n<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/328216510&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>\n\nDan Abramov asked his Twitter audience: “What would you want the React team to focus on in the next 6 months? Reply with a new thing, or Iike existing replies”. This request inspired a massive thread of a few hundred tweets...\n\n- https://twitter.com/dan_abramov/status/871406752016863232\n- https://twitter.com/dan_abramov/status/871769329079025664\n- https://github.com/Microsoft/TypeScript-React-Starter\n- https://5minreact.audio/002-jsx2/\n- https://github.com/facebook/jsx/issues/65\n\n\n',frontmatter:{title:"#10 - React Wishlist",date:"June 15, 2017"}}}}}});
//# sourceMappingURL=path---009-mobx-over-redux-7aec3bdaa1674ce01e3f.js.map