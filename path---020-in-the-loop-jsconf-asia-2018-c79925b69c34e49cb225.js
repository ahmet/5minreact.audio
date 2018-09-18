webpackJsonp([44136566996416],{419:function(e,t){e.exports={data:{site:{siteMetadata:{title:"5 minutes of React",author:"5 minutes of React"}},markdownRemark:{id:"/Users/petr/www/5minreact.audio/src/pages/020-in-the-loop-jsconf-asia-2018/index.md absPath of file >>> MarkdownRemark",html:'<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/424143567&color=%23ff5500&auto_play=false&hide_related=true&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>\n<p>The other day I got to watch a few talks from JSConf Asia 2018 on Youtube. There are 39 of them in the playlist, so I picked a random one. And I got so lucky I just had to make this episode about it! The talk was “In the Loop” by Jake Archibald.</p>\n<p>Jake is developer advocate for Google Chrome. He’s one of the editors of the service worker spec, so he’s into offline-first, push messaging and web performance.</p>\n<ul>\n<li><a href="https://www.youtube.com/playlist?list=PL37ZVnwpeshFqN5dcZ704lxI3F5iHDYkl">https://www.youtube.com/playlist?list=PL37ZVnwpeshFqN5dcZ704lxI3F5iHDYkl</a> - JSConf.Asia 2018</li>\n<li><a href="https://youtu.be/cCOL7MC4Pl0">https://youtu.be/cCOL7MC4Pl0</a> - Jake Archibald: In The Loop</li>\n<li><a href="https://youtu.be/rLgBqT_e6Yo">https://youtu.be/rLgBqT_e6Yo</a> - Feross Aboukhadijeh: JavaScript Pranks</li>\n<li><a href="https://twitter.com/jaffathecake">https://twitter.com/jaffathecake</a></li>\n</ul>\n<!-- end -->\n<p><strong>Transcript</strong></p>\n<p>The other day I got to watch a few talks from JSConf Asia 2018 on Youtube. There are 39 of them in the playlist, so I picked a random one. And I got so lucky I just had to make this episode about it! The talk was “In the Loop” by Jake Archibald.</p>\n<p>Jake is a well-known figure in the Javascript world: he works at Google, writes articles, and talks at conferences.</p>\n<p>“In the Loop”, as you can guess from the title, explains how the event loop works in Javascript, in particular in the browser environment.</p>\n<p>The event loop has already been discussed in countless articles, talks and lectures. I can’t weigh up all of them, but Jake Archibald’s talk is definitely a gem. He presents it in a very clear and comprehensible way, and the talk is consistent, logical, and visual.</p>\n<p>Here are some things you can learn from it:\n— What a task is from the event loop perspective, and what can cause an interface to stutter\n— How setTimeout works\n— How requestAnimationFrame is different setTimeout\n— When exactly requestAnimationFrame gets called and how it fits into the event loop\n— Why requestAnimationFrame in peculiar Safari\n— What are micro-tasks, what makes them different from ordinary tasks, and how it all ties in with requestAnimationFrame\n— Why initiating events via Javascript (for instance, via a click trigger) makes them behave differently compared to a native event set off by the user’s actions in the browser, and why all of this can break your tests</p>\n<p>In short, it’s all very interesting, rigorous, and deep.</p>\n<p>And, of course, the animated slides are amazing. And I don’t mean any kitty gifs (of which there were none) or mere slide transitions. I’m talking about visualized events within the event loop, the entire algorithm illustrated by a little square rushing through the loop ­— which is very impressive.</p>\n<p>Even the chunks of code are presented very thoughtfully. For instance, first we look at the code that uses the setTimeout function, and then Jake invites us to try out the requestAnimationFrame alternative. It’s visualized as if we were erasing “setTimeout” with backspace and typing “requestAnimationFrame”, which is very intuitive, natural, and easy to follow. For those of you who give talks or prepare slides: definitely check it out, this is a great tip.</p>\n<p>Then I felt like watching another video. Apparently the JSConf Asia lineup had a whole series of short 5-minute talks. Again, my random pick was great: a gorgeous demonstration of a prank in Javascript. The speaker was showing small snippets of code that were generating endless alerts, not letting the victim close the window, sticking a cat into the clipboard when this evil page was clicked, etc. These may seem like old tricks, but the page in the last demo had all of this nasty code at once and it was hilarious. With everything bouncing and flying, some videos popping up all the time, with no way of closing anything — it was quite a show, and a great idea for a 5-minute talk. Check it out and have a good laugh!</p>\n<p>And that’s all I wanted to share for now.</p>\n<p>Code with React and prosper!</p>',frontmatter:{title:"#20 - Jake Archibald: In The Loop (JSConf.Asia 2018)",date:"April 03, 2018"}}},pathContext:{slug:"/020-in-the-loop-jsconf-asia-2018/",previous:{fields:{slug:"/019-typescript-20-80/"},html:'<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/417102171&color=%23ff5500&auto_play=false&hide_related=true&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>\n<p>Technicalities aside, here are my overall thoughts on TypeScript.</p>\n<p>We all want the best result as fast and cheap as possible, right? But this is not how things work, and we have to strike a balance between development quality and speed…</p>\n<ul>\n<li><a href="https://stateofjs.com/2017/flavors/results/">https://stateofjs.com/2017/flavors/results/</a></li>\n<li><a href="https://egghead.io/courses/advanced-static-types-in-typescript">https://egghead.io/courses/advanced-static-types-in-typescript</a></li>\n<li><a href="https://egghead.io/courses/use-types-effectively-in-typescript">https://egghead.io/courses/use-types-effectively-in-typescript</a></li>\n<li><a href="https://radiojs.ru/2018/02/radiojs-51/">https://radiojs.ru/2018/02/radiojs-51/</a></li>\n<li><a href="https://www.youtube.com/watch?v=lOo5zB-m6EU">https://www.youtube.com/watch?v=lOo5zB-m6EU</a></li>\n</ul>\n<!-- end -->\n<p><strong>Transcript</strong></p>\n<p>A few days ago I hosted a short TypeScript webinar, and, naturally, I had to do some homework.</p>\n<p>When you’ve worked with a certain technology for a long time, you get used to it and stop noticing many details that could matter to a newbie. Besides, you end up using only a subset of features on a daily basis and gradually forget the rest.</p>\n<p>TypeScript is a pretty complex thing: it encompasses a lot of features and techniques. I decided to brush up on it and pick up some new tips and best practices along the way, so I went over a few lessons and courses at egghead.io.</p>\n<p>Like many of you listening to this podcast, I got familiar with egghead.io largely thanks to the excellent free course on Redux by Dan Abramov. But most of the courses there are subscription-only, which cost me about $29 per month.</p>\n<p>I really enjoy the format of egghead.io lessons. Each course is a series of short videos 5-10 minutes long. There can be just a few or a couple dozen videos per course that, in total, can last from 20 minutes up to an hour or two. Short lessons give it a good rhythm and feel dynamic and intensive. It’s easy to navigate between videos on a particular subject.</p>\n<p>Out of the 9 courses on TypeScript I found at egghead.io, I’ve done 5. Here are my two favorites:</p>\n<ol>\n<li>Advanced Static Types in TypeScript (by Marius Schulz)</li>\n<li>Use Types Effectively in TypeScript (by Ari Picker)</li>\n</ol>\n<p>Both are highly recommended!</p>\n<p>And this has served me well. A lot of things were coming back to me as I was watching the videos and thinking: “Yeah, I remember seeing this somewhere in the TypeScript release notes — how come I haven’t used this yet?“. I tried to imagine how I could apply it to my code base, whether it would pay off, and what kind of errors I could prevent.</p>\n<p>Again and again, I was amazed by TypeScript, thinking: “Wow, it’s so cool it can do that!“. Among other things, I found out that a switch statement could be forced to check every single possible case. This is something functional programmers in Haskell, Elm, or Purescript are so proud of, thanks to their pattern matching.</p>\n<p>Technicalities aside, here are my overall thoughts on TypeScript.</p>\n<p>We all want the best result as fast and cheap as possible, right? But this is not how things work, and we have to strike a balance between development quality and speed.</p>\n<p>I remember reading about software development at NASA: they prioritize quality and performance, so their development costs per line of code end up being truly astronomic. And it’s no wonder, as an error could cost even more. Launching rockets into space is a luxury.</p>\n<p>We, on the other hand, launch kitten websites, which is no rocket science. However, even front-end development has its critical moments when an error can cost way too much. Imagine a payment form for a huge online marketplace like Amazon. If the form had a bug and users couldn’t create any orders or pay for them, any second of disruption would lead to a massive loss.</p>\n<p>So it’s all about the balance between development quality and speed.</p>\n<p>For instance, nearly everybody relies strongly on testing to ensure the quality of their code. When executed properly, tests not only improve quality, but also save us time in the future by preventing regression and making refactoring much easier. Tests are definitely a must-have.</p>\n<p>Another good practice in quality assurance is static code analysis. Probably the most popular tool for analyzing JavaScript code these days is ESLint which doesn’t only keep style conventions like spaces or brackets in check, but it can also indicate issues that are likely to result in bugs.</p>\n<p>Similarly, Typescipt is a tool for static code analysis that helps to spot errors and pitfalls. However, it requires some extra effort of annotating types. TypeScript needs our help to decipher our code and get a proper grasp of how it works.</p>\n<p>Type annotations are a drag, aren’t they? But so are tests, and we still write them, to one extent or another.</p>\n<p>First we invest into writing tests, that is, code that will never be deployed to production and has no direct effect on the end product. But later on, this investment will provide a substantial return. Or not, if we fail to strike the right balance.</p>\n<p>When it comes to TypeScript, elaborate code requires type annotations that are just as elaborate. Annotating types properly may well take more time than writing the code itself. That’s when you start asking yourself whether it’s more trouble than it’s worth.</p>\n<p>Once again, let’s draw a parallel with automated testing. Imagine a simple function that sums up all elements of an array. How can we test it? We could come up with a few examples where the outcomes are known in advance and write a unit test. Or we could take it further and generate a few thousand examples, design some property-based tests, genetic or mutation tests, fuzzing tests and so on. Testing would take us a great deal longer than writing the actual function. All of this — perhaps only to find out in the end that the code was correct all along. And even if this array summing function were used on an Amazon payment form, let’s face it: these tests would be overkill, development would take way too long and set us back a small fortune.</p>\n<p>Similarly, type annotations in Typescript can turn out to be overkill. Simple typing via primitive types and interfaces helps avoid the most basic errors and slip-ups. Then you could dive deeper into generics, unions and intersections, discriminated unions and other intricacies. TypeScript has a lot of them — it’s been in active development for quite a while, and fresh versions are still coming out, delivering new features every few months. Using all the bells and whistles in Typescript would be rather difficult and hardly practical. To maximize your return on investment, you need to find a balance .</p>\n<p>And the sense of balance comes with experience. TypeScript can be tough in this regard. For instance, I’ve heard that Flow handles type inference much better. </p>\n<p>Choosing the right tool for type-based static code analysis is not an easy task. Different teams end up using different tools. According to the State of JavaScript 2017 survey, TypeScript is more than three times as popular as Flow: out of a total of 20000 respondents, 8000 claimed to be using TypeScript, as opposed to 2400 using Flow. </p>\n<p>What if static typing is ultimately a lost cause? If out of 20000 developers only 8000 use TypeScript and 2400 use Flow, all the rest, which is more than 10000 people, don’t use any static typing tool at all.  </p>\n<p>Here’s my take on it: using TypeScript or any other static type checker is completely worth it. You are probably familiar with the Pareto principle: 20% of the effort provides 80% of the result. Let’s say, we’ve invested our 20% into test coverage and got an 80% return in the form of better code quality, reliability, and a sense of security. We could go on testing and squeeze every last drop out of it, or, instead, we could switch to a different tool such as static type analysis. Try annotating your code with primitive types and interfaces, and you’ll see the difference right away, you’ll feel relief. Throw in a few generics and union types, an you’ll get 80% of your desired result from just 20% of the effort. Should you go on? Depending on your objectives, it may be worth it to get deeper down the rabbit hole of TypeScript and describe more elaborate and thus more precise types for your code. If you’re working for NASA and developing a navigation system for a fancy satellite, you don’t have any other choice.</p>\n<p>Seriously though, we need a balance in whatever we do, including working with TypeScript. You don’t have to turn it into a new Haskell or write 100% type-safe or formally verifiable code.</p>\n<p>This reminds me of an interview I heard in some podcast with Richard Feldman, an Elm language advocate. When asked about the advantages of Elm over TypeScript, he replied that there is no type Any in Elm, which means no dirty hacks. I’d put it the other way around — thank goodness we’ve got type Any in TypeScript! On one hand, it takes away all static guarantees and brings us back into the wilderness of dynamically typed JavaScript. On the other hand, it allows us to ease off on type annotations when we see fit. The Any type is precisely what helps us find a balance and avoid pushing beyond those 20% of effort.</p>\n<p>That said, if you take a look at typings for popular libraries, they are truly hardcore, with all the features imaginable at work. Check out the typings for lodash, or even React and Redux. Obviously, when a library is used by millions of developers, investing a lot into proper type annotations does pay off on a large scale.</p>\n<p>Now, is there anything wrong with TypeScript? There are a few flaws TypeScript critics like to point out.</p>\n<p>First, annotating types can be a drag, or it can complicate things too much. But as we’ve seen earlier, if you don’t overdo it, the benefits will outweigh the costs.</p>\n<p>Another concern is that type checking doesn’t happen at runtime, so annotating types in TypeScript offers no guarantees whatsoever. What if the server responds with a JSON with completely different types of elements? It will break everything and TypeScript won’t be of any help at all.</p>\n<p>While it’s true that everything can break at runtime, it has little to do with the advantages or the disadvantages of TypeScript itself. TypeScript is a tool for static code analysis, with emphasis on “static”. It works at compile time only and doesn’t have any control over runtime. There are other tools and libraries for performing additional runtime checks such as dynamic JSON Schema validators or React PropTypes.</p>\n<p>TypeScript is like a hammer — is it a bad tool per se? If you are chopping a tree, obviously, it’s useless. You need a different tool for chopping a tree, and there is nothing to blame the hammer for, it’s just how things work.</p>\n<p>A woodworker hammering a nail with anything other than a hammer, like a stone or his own fist, would be a bizarre sight, to say the least, and the same goes for a programmer who doesn’t write any tests or doesn’t use any tools for static code analysis.</p>\n<p>The third target of criticism is the poor quality or the complete lack of type definitions for libraries. If none are available at all, there is little we can do except use the Any type. Luckily, when it comes to the availability of type definitions, TypeScript is already a cut above its competitors.                                           .</p>\n<p>Poorly written type definitions are a different story: it’s extremely annoying to see error messages pop up when, in fact, the code is correct. Sometimes when everything looks completely fine, as soon as you update the definitions via npm, it just goes wild. This can happen for two reasons. First, your code may have been bad all along, but the old type definitions were too relaxed for TypeScript to spot the problems. But this is a good thing: now that you’ve got the best typings, you can focus on fixing your code. However, the opposite happens as well: perhaps there are bugs or incompatible changes in the new typings and TypeScript is simply throwing errors for no good reason. You then waste your precious time poring over these useless messages and trying to get rid of them, although any npm package update may lead to a mess like that if its developer fails to comply with SemVer or simply makes a mistake. And all of us make mistakes, including library authors and type definition writers. It’s a lot like that question about tests: what if the tests themselves are wrong? Is anyone going to test the tests?</p>\n<p>Speaking of solving the problems, what if  you downloaded some faulty typings? You could always revert to the previous version. However, this is not always the best option. The new version may introduce a lot of useful improvements and only a couple nasty bugs. Error messages in TypeScript can simply be suppressed with the help of the Any type. You can redefine a few problematic types in your project. For instance, you can declare several function signatures and even make them completely contradictory — TypeScript won’t go crazy, but will simply accept several possible ways to call these functions and consider all these signatures correct. Finally, there is the hardest but, at the same time, the most helpful solution for the whole ecosystem: you can send a pull request to the type definitions repository.</p>\n<p>And, of course, you can just let it be and disregard any inaccurate error messages in Typescript if they don’t bother you or pop up too often. They might go away with the next version of typings if the underlying bugs are fixed. What’s important is that, regardless of any TypeScript error messages, your code is compiled to pure JavaScript anyway. Essentially, a message like that is more of a warning than an error, unless you set the noEmitOnError parameter in the tsconfig.json file. I hardly ever use noEmitOnError and I often ignore the error messages — this is my way of finding the balance, and the manner of using TypeScript I chose for myself. In any case it’s better than raw JavaScript.</p>\n<p>However, if successful static code analysis is required by the CI server as a build step, letting the errors be is not an option.</p>\n<p>The fourth problem of TypeScript its critics point out is that it started as an extension of JavaScript that added typing to it, but now it’s turning into some kind of separate language that will be diverging from ESNEXT more an more. What if it ends up just like CoffeeScript? Does it even make sense to get into it?</p>\n<p>Differences in syntax are indeed arising, for example, in private variable declarations. But it’s definitely too early to draw any parallels with CoffeeScript. TypeScript is being actively developed and a growing number of projects start out written in TypeScript right away. It may lose its edge 10 years from now if static typing gets incorporated into JavaScript: in that case, TypeScript will likely face the same fate as CoffeeScript.</p>\n<p>But right now, in 2018, this concern is a rather lame excuse for avoiding TypeScript. Your product will probably die much sooner than TypeScript. As for all the syntactic differences and extras that are turning TypeScript into a separate language so distant from JavaScript, you are free to ignore any of them if you don’t like them. You can simply stay within the subset of features you feel comfortable with. If your thing is TypeScript 1.0 from back in the day when it was JavaScript with a little typing sugar, you can keep using it in your code as if it were version 1.0. And you’d automatically enjoy all the power of type inference provided in the latest versions, as well as carefully written type definitions for popular libraries, even if their syntax looks intimidating.</p>\n<p>Let’s sum it all up:</p>\n<ul>\n<li>To make our code better and our development process more productive, we use all kinds of tools like state-of-the-art text editors and IDEs, debuggers, automated testing frameworks, Continuous Integration, and so on. TypeScript is just another tool, and it performs static code analysis based on the information about data types.</li>\n<li>TypeScript tries to infer the type information on its own but the programmer still has to describe most of it using a particular syntax, and this task is the most labor-intensive.</li>\n<li>To avoid disappointment when dealing with types, you should take care not to overexert yourself and get a good idea of how thorough your type annotation really needs to be. 20% of effort provides 80% of the result, and your code doesn’t have to be perfectly type-safe or verifiable. If you are really into hardcore typing and formal verification, what you need isn’t TypeScript but something like Haskell, PureScript, or Elm.</li>\n<li>Don’t shy away from using the Any type: it can save you a lot of time and allow you to focus on those 20% of effort without overdoing it.</li>\n<li>We’re talking about static analysis, not dynamic, so there is no point in expecting TypeScript to do something it wasn’t designed for</li>\n<li>TypeScript currently beats its competitors in popularity and availability of typings, articles, and answers at Stack Overflow. This is what makes it the most effective tool for type-based static analysis of JavaScript code in terms of costs and benefits.   </li>\n</ul>\n<p>Code in TypeScript and prosper!</p>',excerpt:'\n<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/417102171&color=%23ff5500&auto_play=false&hide_related=true&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>\n\nTechnicalities aside, here are my overall thoughts on TypeScript.\n\nWe all want the best result as fast and cheap as possible, right? But this is not how things work, and we have to strike a balance between development quality and speed...\n\n- https://stateofjs.com/2017/flavors/results/\n- https://egghead.io/courses/advanced-static-types-in-typescript\n- https://egghead.io/courses/use-types-effectively-in-typescript\n- https://radiojs.ru/2018/02/radiojs-51/\n- https://www.youtube.com/watch?v=lOo5zB-m6EU\n\n',frontmatter:{title:"#19 - TypeScript 20/80",date:"March 21, 2018"}},next:{fields:{slug:"/021-bitbucket-pipelines/"},html:'<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/429023142&color=%23ff5500&auto_play=false&hide_related=true&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>\n<p>Today I’d like to introduce you to Bitbucket Pipelines, a continuous integration and continuous delivery cloud service that I’ve been using quite a lot lately. Personally, I find Bitbucket Pipelines extremely useful for several reasons…</p>\n<p>Bitbucket pipelines I am using now: <a href="https://bitbucket.org/product/features/pipelines">https://bitbucket.org/product/features/pipelines</a></p>\n<p>Cirrus CI I am going to try next: <a href="https://medium.com/cirruslabs/introducing-cirrus-ci-a75cd1f49af0">https://medium.com/cirruslabs/introducing-cirrus-ci-a75cd1f49af0</a></p>\n<!-- end -->\n<p><strong>Transcript</strong></p>\n<p>Today I’d like to introduce you to Bitbucket Pipelines, a continuous integration and continuous delivery cloud service that I’ve been using quite a lot lately.</p>\n<p>The first public beta version was announced in the fall of 2016, and in the summer of 2017 the service was promoted from beta to production.</p>\n<p>I’ve been experimenting with it since the end of 2017, so for now it’s been just a few months.</p>\n<p>First and foremost, Bitbucket Pipelines is a continuous integration service seamlessly connected with the Bitbucket repository storage.</p>\n<p>Just like in all cutting-edge CI systems these days, we need to add a certain file — in this case, bitbucket-pipelines.yml — to the root of the repository, so that the tasks defined in this file can run on every push to Bitbucket. These tasks will run in Docker containers entirely within the Bitbucket server infrastructure, so you don’t have to worry about setting up your own servers, agents, or workers.</p>\n<p>Besides, any Docker image can be used as a base image, unlike, for example, in Travis CI, which, as far as I recall, offers only a limited range of base images. I’ve made a few of my own custom images that include all the necessary language versions, extensions and third-party tools.</p>\n<p>To anyone who has worked with Travis or GitLab, the bitbucket-pipelines.yml file looks pretty typical and familiar. The main entity is the pipeline, attached to branches or tags in the source code. You can also use glob patterns for matching branch names and tags.</p>\n<p>The pipeline can be organized into a set of steps. They run in order of appearance, and if any step produces an error, subsequent steps won’t be executed. A step can be configured to run automatically or manually. For example Manual trigger is convenient for setting up deployment on click. Each step starts off with a clean slate as a fresh Docker container that automatically has access to all the application source code (repository is cloned into container automatically). You can pass artifacts, such as files and build or compilation results, from one step to another.</p>\n<p>Within a step, you define tasks, which are, essentially, command line instructions. For instance, I can run:\nnpm ci</p>\n<p>followed by:\nnpm test.</p>\n<p>To avoid downloading npm packages again and again, the service has a caching mechanism. It provides pre-defined caches for npm and other package managers out of the box, but you could also define your own rules for caching any particular directory.</p>\n<p>Now, what if you need a database like MySQL or PostgreSQL for testing? In terms of Bitbucket Pipelines, these are “services”. You can launch up to five additional services alongside the main container, and they will run as separate Docker containers that can be addressed by their corresponding names via the local network.</p>\n<p>What’s more, one of the services can be the Docker daemon itself, allowing you to create custom images inside of the pipeline which you can then push to Docker Hub or to a private repository.</p>\n<p>The total RAM limit for the main container and all the additional services is 4Gb. Optionally, you can allocate twice as much memory to the build by specifying “size: 2x” in the yml file.</p>\n<p>Private data like tokens or passwords can be stored as environment variables that you can set up via the Bitbucket web interface.</p>\n<p>Bitbucket famously offers free private repositories for teams of 5 or less collaborators. And they can also run Pipelines for free! Although they’re limited to 50 minutes a month. And it’s barely enough. Even if you only run nightly scheduled builds as opposed to building on every push, you’ll do 30 builds a month, which leaves less than 2 minutes for each build. In practice, launching the main container along with the MariaDB container, as well as cloning the repository and unpacking the npm cache, already takes at least 1 or 2 minutes and sometimes can slow down to 5 or 10.</p>\n<p>Then there is the subscription plan of 1000 minutes for $10 a month, which looks much better. I set up a few of my projects and used up only 300 minutes in the first month. So I passed all my Docker image builds over to Bitbucket Pipelines, and made even better use of it.</p>\n<p>What are the downsides? The syntax of bitbucket-pipelines.yml doesn’t allow reusing your custom configuration snippets. Imagine I’ve described a pipeline for the master branch composed of several steps with a few dozen tasks each. What if I want to describe a similar pipeline for the staging branch where the first step is the same, and the second one is different? I have no choice but copy big chunks of configuration from the master pipeline over to the staging pipeline.</p>\n<p>As for debugging, there is a Python script that sets up the entire environment locally, but I haven’t tried it out yet. Instead, I’ve done live debugging, and it takes quite a while. To make life a bit easier, there is an online validator for the bitbucket-pipelines.yml file that not only fixes indentations, but also checks internal logic and parameter spelling.</p>\n<p>Unfortunately, Bitbucket offers no build matrix system that could be handy for running tests against multiple versions of NodeJS or the database. You end up creating many pipelines that are nearly identical except for the tag in the Docker image. For those who develop libraries or out-of-the-box products, this is a living hell. But if you are testing an internal product that is meant to work with a certain version of NodeJS, you have nothing to worry about.</p>\n<p>Inside of the Bitbucket web interface, the process of running the pipelines and analyzing the results is seamlessly integrated with the repositories. In addition, it offers integration with Slack, HipChat, and other services. Furthermore, in Sourcetree, the GUI client for Git and Mercurial also owned by Atlassian, build status is indicated right next to each commit. Sourcetree can also show system notifications whenever there is a build failure.</p>\n<p>Personally, I find Bitbucket Pipelines extremely useful for several reasons:</p>\n<ul>\n<li>First, my configurations are quite simple, and I don’t really need the full power of Jenkins or TeamCity</li>\n<li>I don’t like hosting anything myself. Even though GitLab workers can be set up in a snap, not having to configure anything at all in my own infrastructure is a major plus for me.</li>\n<li>As I already keep all my source code in Bitbucket repositories, a well-integrated CI system is a real treat.</li>\n<li>I still use Mercurial for some projects, and Bitbucket Pipelines plays very well with it as it can clone Mercurial repositories and filter by bookmarks.</li>\n<li>$10 for 1000 minutes per month is both very affordable and sufficient.</li>\n</ul>\n<p>If you haven’t set up your continuous integration workflow yet and you keep your repositories at Bitbucket, definitely check out Bitbucket Pipelines. You can get it up and running in no time.</p>\n<p>And if you have your own continuous integration server and supporting or updating it takes too much time and effort, Bitbucket Pipelines can be a great way to save you the trouble.</p>\n<p>Of course, Bitbucket Pipelines isn’t the only service to meet these needs. Its most famous alternatives are Travis CI, Circle CI and GitLab CI. Recently I’ve also stumbled upon a new project called Cirrus CI, and it looks intriguing. Perhaps it will be the next cloud CI service I’ll turn to in case I run into any limitations with Bitbucket Pipelines.</p>\n<p>Use Continues Integration and prosper! </p>',
excerpt:'\n<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/429023142&color=%23ff5500&auto_play=false&hide_related=true&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>\n\n\nToday I\'d like to introduce you to Bitbucket Pipelines, a continuous integration and continuous delivery cloud service that I\'ve been using quite a lot lately. Personally, I find Bitbucket Pipelines extremely useful for several reasons...\n\nBitbucket pipelines I am using now: https://bitbucket.org/product/features/pipelines\n\nCirrus CI I am going to try next: https://medium.com/cirruslabs/introducing-cirrus-ci-a75cd1f49af0\n\n\n',frontmatter:{title:"#21 - Bitbucket Pipeliens",date:"April 13, 2018"}}}}}});
//# sourceMappingURL=path---020-in-the-loop-jsconf-asia-2018-c79925b69c34e49cb225.js.map