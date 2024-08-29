"use strict";(self.webpackChunknxdb=self.webpackChunknxdb||[]).push([[9881],{1839:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=n(4848),s=n(8453);const a={title:"NxDB 11.0.0",slug:"11.0.0.html",description:"NxDB Major Release 11.0.0"},o="11.0.0",i={id:"releases/11.0.0",title:"NxDB 11.0.0",description:"NxDB Major Release 11.0.0",source:"@site/docs/releases/11.0.0.md",sourceDirName:"releases",slug:"/releases/11.0.0.html",permalink:"/releases/11.0.0.html",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"NxDB 11.0.0",slug:"11.0.0.html",description:"NxDB Major Release 11.0.0"},sidebar:"tutorialSidebar",previous:{title:"NxDB 12.0.0",permalink:"/releases/12.0.0.html"},next:{title:"NxDB 10.0.0",permalink:"/releases/10.0.0.html"}},d={},l=[{value:"Worker plugin",id:"worker-plugin",level:2},{value:"Transpile <code>async</code>/<code>await</code> to promises instead of generators",id:"transpile-asyncawait-to-promises-instead-of-generators",level:2},{value:"Removed deprecated <code>received</code> methods",id:"removed-deprecated-received-methods",level:2},{value:"All internal events are handled as bulks",id:"all-internal-events-are-handled-as-bulks",level:2},{value:"RxStorage interface changes",id:"rxstorage-interface-changes",level:2},{value:"Removed the <code>no-validate</code> plugin.",id:"removed-the-no-validate-plugin",level:2},{value:"Other changes",id:"other-changes",level:2},{value:"Migration from <code>10.x.x</code>",id:"migration-from-10xx",level:2},{value:"You can help!",id:"you-can-help",level:2},{value:"Discuss!",id:"discuss",level:2}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"1100",children:"11.0.0"}),"\n",(0,r.jsxs)(t.p,{children:["The last major release was only about ",(0,r.jsx)(t.a,{href:"/releases/10.0.0.html",children:"6 month ago"}),". But to further improve NxDB, it was necessary to make some more breaking changes and release the next major version.\nIn the last version ",(0,r.jsx)(t.code,{children:"10.0.0"})," the storage layer was abstracted in a way to make it possible to not only use PouchDB as storage, but instead we can use different storage engines like the one based on ",(0,r.jsx)(t.a,{href:"/rx-storage-lokijs.html",children:"LokiJS"})," or any custom implementation of the ",(0,r.jsx)(t.code,{children:"RxStorage"})," interface."]}),"\n",(0,r.jsxs)(t.p,{children:["In the new version ",(0,r.jsx)(t.code,{children:"11.0.0"})," the focus is on making it possible to put the RxStorage into a ",(0,r.jsx)(t.strong,{children:"WebWorker"})," to take CPU load from the main process into the worker's process. This can improve the perceived performance of your application, especially when you have to handle many documents or when you need the main process CPU cycles to manage the DOM with your frontend framework."]}),"\n",(0,r.jsx)(t.h2,{id:"worker-plugin",children:"Worker plugin"}),"\n",(0,r.jsxs)(t.p,{children:["Performance was always something NxDB had a struggle with. Not because NxDB itself is slow, but because the underlying storage engine (mostly PouchDB) or ",(0,r.jsx)(t.a,{href:"/slow-indexeddb.html",children:"IndexedDB is slow"}),". This never was a problem for 'normal' applications that have to store some documents. But on big applications with much data, there was a bottleneck."]}),"\n",(0,r.jsxs)(t.p,{children:["With the Worker plugin, you can move the ",(0,r.jsx)(t.code,{children:"RxStorage"})," out of the main JavaScript process. This makes it pretty easy to utilize more then one CPU core and speed up your application."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"// worker.ts\nimport { wrappedRxStorage } from 'nxdb/plugins/worker';\nimport { getRxStorageLoki } from 'nxdb/plugins/storage-lokijs';\nwrappedRxStorage({\n    storage: getRxStorageLoki()\n});\n"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"// main process\nimport { createRxDatabase } from 'nxdb/plugins/core';\nimport { getRxStorageWorker } from 'nxdb/plugins/worker';\nconst database = await createRxDatabase({\n    name: 'mydatabase',\n    storage: getRxStorageWorker(\n        {\n            workerInput: 'path/to/worker.js'\n        }\n    )\n});\n"})}),"\n",(0,r.jsxs)(t.p,{children:["The whole documentation about the worker plugin can be found ",(0,r.jsx)(t.a,{href:"/rx-storage-worker.html",children:"here"}),"."]}),"\n",(0,r.jsxs)(t.h2,{id:"transpile-asyncawait-to-promises-instead-of-generators",children:["Transpile ",(0,r.jsx)(t.code,{children:"async"}),"/",(0,r.jsx)(t.code,{children:"await"})," to promises instead of generators"]}),"\n",(0,r.jsxs)(t.p,{children:["The NxDB source-code is transpiled from TypeScript to es5/es6 JavaScript code via babel.\nIn the past we transpiled the ",(0,r.jsx)(t.code,{children:"async"})," and ",(0,r.jsx)(t.code,{children:"await"})," keywords with the babel plugin ",(0,r.jsx)(t.code,{children:"plugin-transform-async-to-generator"}),".\nNow we use the ",(0,r.jsx)(t.a,{href:"https://github.com/rpetrich/babel-plugin-transform-async-to-promises",children:"babel-plugin-transform-async-to-promises"})," plugin instead.\nIt transpiles ",(0,r.jsx)(t.code,{children:"async"}),"/",(0,r.jsx)(t.code,{children:"await"})," into native ",(0,r.jsx)(t.code,{children:"Promise"}),"s instead of using JavaScript generators. This has shown to decrease build size by about 10% and also improves the performance."]}),"\n",(0,r.jsxs)(t.h2,{id:"removed-deprecated-received-methods",children:["Removed deprecated ",(0,r.jsx)(t.code,{children:"received"})," methods"]}),"\n",(0,r.jsxs)(t.p,{children:["In the past there was a typo in all getters and methods that are called ",(0,r.jsx)(t.code,{children:"received"}),".\nThis was renamed to ",(0,r.jsx)(t.code,{children:"received"})," and all mistyped methods have been deprecated.\nWe now removed all deprecated methods, so you have to use the correctly spelled methods instead.\n",(0,r.jsx)(t.a,{href:"https://github.com/nxpkg/nxdb/pull/3392",children:"See #3392"})]}),"\n",(0,r.jsx)(t.h2,{id:"all-internal-events-are-handled-as-bulks",children:"All internal events are handled as bulks"}),"\n",(0,r.jsxs)(t.p,{children:["All events that are generated from writing to the storage instance are now handled in bulks instead of each event for its own. This has shown to save performance when the events are send over a data layer like a ",(0,r.jsx)(t.code,{children:"WebWorker"})," or the ",(0,r.jsx)(t.code,{children:"BroadcastChannel"}),". This change only affects you if you have created custom NxDB plugins."]}),"\n",(0,r.jsx)(t.h2,{id:"rxstorage-interface-changes",children:"RxStorage interface changes"}),"\n",(0,r.jsx)(t.p,{children:"To make the RxStorage abstraction compatible with Webworkers, we had to do some changes. These will only affect you if you use a custom RxStorage implementation."}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["The non async functions ",(0,r.jsx)(t.code,{children:"prepareQuery"}),", ",(0,r.jsx)(t.code,{children:"getSortComparator"})," and ",(0,r.jsx)(t.code,{children:"getQueryMatcher"})," have been moved out of ",(0,r.jsx)(t.code,{children:"RxStorageInstance"})," into the ",(0,r.jsx)(t.code,{children:"statics"})," property of ",(0,r.jsx)(t.code,{children:"RxStorage"}),". This makes it possible to split the code when using the worker plugin. You only need to load the static methods at the main process, and the whole storage engine is only loaded inside of the worker."]}),"\n",(0,r.jsxs)(t.li,{children:["All data communication with the RxStorage now happens only via plain JSON objects. Instead of returning a JavaScript ",(0,r.jsx)(t.code,{children:"Map"})," or ",(0,r.jsx)(t.code,{children:"Set"}),", only ",(0,r.jsx)(t.a,{href:"https://www.w3schools.com/js/js_json_datatypes.asp",children:"JSON datatypes"})," are allowed. This makes it easier to properly serialize the data when transferring it over to or from a WebWorker."]}),"\n",(0,r.jsxs)(t.li,{children:["Events that are created from a write operation, must be emitted ",(0,r.jsx)(t.strong,{children:"before"})," the write operation resolves. This ensures that NxDB always knows about all events before it runs another operation. So when you do an insert and a query directly after the insert, the query will return the correct results."]}),"\n",(0,r.jsxs)(t.li,{children:["The meta data ",(0,r.jsx)(t.code,{children:"digest"})," and ",(0,r.jsx)(t.code,{children:"length"})," of attachments is now created by NxDB, not by the RxStorage. ",(0,r.jsx)(t.a,{href:"https://github.com/nxpkg/nxdb/issues/3548",children:"#3548"})]}),"\n",(0,r.jsxs)(t.li,{children:["Added the statics ",(0,r.jsx)(t.code,{children:"hashKey"})," property to identify the used hash function."]}),"\n"]}),"\n",(0,r.jsxs)(t.h2,{id:"removed-the-no-validate-plugin",children:["Removed the ",(0,r.jsx)(t.code,{children:"no-validate"})," plugin."]}),"\n",(0,r.jsxs)(t.p,{children:["In the past, NxDB required you to add one schema validation plugin. For production, it was useful to not have any schema validation for better performance and a smaller build size. For that, the ",(0,r.jsx)(t.code,{children:"no-validate"})," plugin could be added which was just a dummy plugin that did no do any validation. To remove this unnecessary complexity, NxDB no longer requires you to add a validation plugin. Therefore the no-validate plugin is now removed as it is no longer needed."]}),"\n",(0,r.jsx)(t.h2,{id:"other-changes",children:"Other changes"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["The LokiJS RxStorage no longer uses the ",(0,r.jsx)(t.code,{children:"IdleQueue"})," to determine if the database is idle. Because LokiJS is in-memory, we can just wait for CPU idleness via ",(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/requestIdleCallback",children:"requestIdleCallback()"})]}),"\n",(0,r.jsx)(t.li,{children:"Bugfix: Do not throw an error when database is destroyed while a GraphQL replication is running."}),"\n",(0,r.jsxs)(t.li,{children:['Compound primary key migration throws "Value of primary key(s) cannot be changed" ',(0,r.jsx)(t.a,{href:"https://github.com/nxpkg/nxdb/pull/3546",children:"#3546"})," Thanks ",(0,r.jsx)(t.a,{href:"https://github.com/nothingkid",children:"@nothingkid"})]}),"\n",(0,r.jsxs)(t.li,{children:["Allow ",(0,r.jsx)(t.code,{children:"_id"})," as primaryKey ",(0,r.jsx)(t.a,{href:"https://github.com/nxpkg/nxdb/pull/3562",children:"#3562"})," Thanks ",(0,r.jsx)(t.a,{href:"https://github.com/SuperKirik",children:"@SuperKirik"})]}),"\n",(0,r.jsx)(t.li,{children:"LokiJS: Remote operations do never resolve when remote instance was leader and died."}),"\n"]}),"\n",(0,r.jsxs)(t.h2,{id:"migration-from-10xx",children:["Migration from ",(0,r.jsx)(t.code,{children:"10.x.x"})]}),"\n",(0,r.jsx)(t.p,{children:"The migration should be pretty easy. Nothing in the datalayer has been changed, so you can use the stored data of v10 together with the new v11 NxDB."}),"\n",(0,r.jsx)(t.h2,{id:"you-can-help",children:"You can help!"}),"\n",(0,r.jsxs)(t.p,{children:["There are many things that can be done by ",(0,r.jsx)(t.strong,{children:"you"})," to improve NxDB:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Check the ",(0,r.jsx)(t.a,{href:"https://github.com/nxpkg/nxdb/blob/master/orga/BACKLOG.md",children:"BACKLOG"})," for features that would be great to have."]}),"\n",(0,r.jsxs)(t.li,{children:["Check the ",(0,r.jsx)(t.a,{href:"https://github.com/nxpkg/nxdb/blob/master/orga/before-next-major.md",children:"breaking backlog"})," for breaking changes that must be implemented in the future but where I did not had the time yet."]}),"\n",(0,r.jsxs)(t.li,{children:["Check the ",(0,r.jsx)(t.a,{href:"https://github.com/nxpkg/nxdb/search?q=TODO",children:"TODOs"})," in the code. There are many small improvements that can be done for performance and build size."]}),"\n",(0,r.jsx)(t.li,{children:"Review the code and add tests. I am only a single human with a laptop. My code is not perfect and much small improvements can be done when people review the code and help me to clarify undefined behaviors."}),"\n",(0,r.jsx)(t.li,{children:"Improve the documentation. In the last user survey many users told me that the documentation is not good enough. But I reviewed the docs and could not find clear flaws. The problem is that I am way to deep into NxDB so that I am not able to understand which documentation a newcomer to the project needs. Likely I assume too much knowledge or focus writing about the wrong parts."}),"\n",(0,r.jsxs)(t.li,{children:["Update the ",(0,r.jsx)(t.a,{href:"https://github.com/nxpkg/nxdb/tree/master/examples",children:"example projects"})," many of them are outdated and need updates."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"discuss",children:"Discuss!"}),"\n",(0,r.jsxs)(t.p,{children:["Please ",(0,r.jsx)(t.a,{href:"https://github.com/nxpkg/nxdb/issues/3555",children:"discuss here"}),"."]})]})}function c(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>i});var r=n(6540);const s={},a=r.createContext(s);function o(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);