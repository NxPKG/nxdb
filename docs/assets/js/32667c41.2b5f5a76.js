"use strict";(self.webpackChunknxdb=self.webpackChunknxdb||[]).push([[8191],{6895:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=t(4848),a=t(8453);const o={title:"NxDB NoSQL Performance Tips",slug:"nosql-performance-tips.html",description:"Enhance your NoSQL database performance with NxDB creator's tips on bulk operations, query optimization, and efficient use of hooks and plugins, perfect for developers looking to improve speed and efficiency"},i="Performance tips for NxDB and other NoSQL databases",s={id:"nosql-performance-tips",title:"NxDB NoSQL Performance Tips",description:"Enhance your NoSQL database performance with NxDB creator's tips on bulk operations, query optimization, and efficient use of hooks and plugins, perfect for developers looking to improve speed and efficiency",source:"@site/docs/nosql-performance-tips.md",sourceDirName:".",slug:"/nosql-performance-tips.html",permalink:"/nosql-performance-tips.html",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"NxDB NoSQL Performance Tips",slug:"nosql-performance-tips.html",description:"Enhance your NoSQL database performance with NxDB creator's tips on bulk operations, query optimization, and efficient use of hooks and plugins, perfect for developers looking to improve speed and efficiency"},sidebar:"tutorialSidebar",previous:{title:"Creating Plugins",permalink:"/plugins.html"},next:{title:"Error Messages",permalink:"/errors.html"}},d={},l=[{value:"Use bulk operations",id:"use-bulk-operations",level:2},{value:"Help the query planner by adding operators that better restrict the index range",id:"help-the-query-planner-by-adding-operators-that-better-restrict-the-index-range",level:2},{value:"Set a specific index",id:"set-a-specific-index",level:2},{value:"Try different ordering of index fields",id:"try-different-ordering-of-index-fields",level:2},{value:"Make a Query &quot;hot&quot; to reduce load",id:"make-a-query-hot-to-reduce-load",level:2},{value:"Store parts of your document data as attachment",id:"store-parts-of-your-document-data-as-attachment",level:2},{value:"Process queries in a worker process",id:"process-queries-in-a-worker-process",level:2},{value:"Use less plugins and hooks",id:"use-less-plugins-and-hooks",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"performance-tips-for-nxdb-and-other-nosql-databases",children:"Performance tips for NxDB and other NoSQL databases"}),"\n",(0,r.jsx)(n.p,{children:"In this guide, you'll find techniques to improve the performance of NxDB operations and queries. Notice that all your performance optimizations should be done with a correct tracking of the metrics, otherwise you might change stuff into the wrong direction."}),"\n",(0,r.jsx)(n.h2,{id:"use-bulk-operations",children:"Use bulk operations"}),"\n",(0,r.jsx)(n.p,{children:"When you run write operations on multiple documents, make sure you use bulk operations instead of single document operations."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"// wrong \u274c\nfor(const docData of dataAr){\n    await myCollection.insert(docData);\n}\n\n// right \u2714\ufe0f\nawait myCollection.bulkInsert(dataAr);\n"})}),"\n",(0,r.jsx)(n.h2,{id:"help-the-query-planner-by-adding-operators-that-better-restrict-the-index-range",children:"Help the query planner by adding operators that better restrict the index range"}),"\n",(0,r.jsx)(n.p,{children:"Often on complex queries, NxDB (and other databases) do not pick the optimal index range when querying a result set.\nYou can add additional restrictive operators to ensure the query runs over a smaller index space and has a better performance."}),"\n",(0,r.jsx)(n.p,{children:"Lets see some examples for different query types."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"/**\n * Adding a restrictive operator for an $or query\n * so that it better limits the index space for the time-field.\n */\nconst orQuery = {\n    selector: {\n        $or: [\n            {\n                time: { $gt: 1234 },\n            },\n            {\n                time: { $eg: 1234 },\n                user: { $gt: 'foobar' }\n            },\n        ]\n        time: { $gte: 1234 } // <- add restrictive operator\n    }\n}\n\n/**\n * Adding a restrictive operator for an $regex query\n * so that it better limits the index space for the user-field.\n * We know that all matching fields start with 'foo' so we can\n * tell the query to use that as lower constraint for the index.\n */\nconst regexQuery = {\n    selector: {\n        user: {\n            $regex: '^foo(.*)0-9$', // a complex regex with a ^ in the beginning\n            $gte: 'foo' // <- add restrictive operator\n        }\n    }\n}\n\n/**\n * Adding a restrictive operator for a query on an enum field.\n * so that it better limits the index space for the time-field.\n */\n\nconst enumQuery = {\n    selector: {\n        /**\n         * Here lets assume our status field has the enum type ['idle', 'in-progress', 'done']\n         * so our restrictive operator can exclude all documents with 'done' as status.\n         */\n        status: {\n            $in: {\n                'idle',\n                'in-progress',\n            },\n            $gt: 'done' // <- add restrictive operator on status\n        }\n    }\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"set-a-specific-index",children:"Set a specific index"}),"\n",(0,r.jsx)(n.p,{children:"Sometime the query planner of the database itself has no chance in picking the best index of the possible given indexes.\nFor queries where performance is very important, you might want to explicitly specify which index must be used."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"const myQuery = myCollection.find({\n    selector: {\n        /* ... */\n    },\n    // explicitly specify index\n    index: [\n        'fieldA',\n        'fieldB'\n    ]\n\n});\n"})}),"\n",(0,r.jsx)(n.h2,{id:"try-different-ordering-of-index-fields",children:"Try different ordering of index fields"}),"\n",(0,r.jsxs)(n.p,{children:["The order of the fields in a compound index is very important for performance. When optimizing index usage, you should try out different orders on the index fields and measure which runs faster. For that it is very important to run tests on real-world data where the distribution of the data is the same as in production.\nFor example when there is a query on a user collection with an ",(0,r.jsx)(n.code,{children:"age"})," and a ",(0,r.jsx)(n.code,{children:"gender"})," field, it depends if the index ",(0,r.jsx)(n.code,{children:"['gender', 'age']"})," performance better as ",(0,r.jsx)(n.code,{children:"['age', 'gender']"})," based on the distribution of data:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"const query = myCollection\n    .findOne({\n      selector: {\n        age: {\n          $gt: 18\n        },\n        gender: {\n          $eq: 'm'\n        }\n      },\n      /**\n       * Because the developer knows that 50% of the documents are 'male',\n       * but only 20% are below age 18,\n       * it makes sense to enforce using the ['gender', 'age'] index to improve performance.\n       * This could not be known by the query planer which might have chosen ['age', 'gender'] instead.\n       */\n      index: ['gender', 'age']\n    });\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Notice that NxDB has the ",(0,r.jsx)(n.a,{href:"/query-optimizer.html",children:"Query Optimizer Plugin"})," that can be used to automatically find the best indexes."]}),"\n",(0,r.jsx)(n.h2,{id:"make-a-query-hot-to-reduce-load",children:'Make a Query "hot" to reduce load'}),"\n",(0,r.jsxs)(n.p,{children:['Having a query where the up-to-date result set is needed more then once, you might want to make the query "hot" by permanently subscribing to it. This ensures that the query result is kept up to date by NxDB ant the ',(0,r.jsx)(n.a,{href:"https://github.com/nxpkg/event-reduce",children:"EventReduce algorithm"})," at any time so that at the moment you need the current results, it has them already."]}),"\n",(0,r.jsx)(n.p,{children:'For example when you use NxDB at Node.js for a webserver, you should use an outer "hot" query instead of running the same query again on every request to a route.'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"// wrong \u274c\napp.get('/list', (req, res) => {\n    const result = await myCollection.find({/* ... */}).exec();\n    res.send(JSON.stringify(result));\n});\n\n// right \u2714\ufe0f\nconst query = myCollection.find({/* ... */});\nquery.subscribe(); // <- make it hot\n\napp.get('/list', (req, res) => {\n    const result = await query.exec();\n    res.send(JSON.stringify(result));\n});\n"})}),"\n",(0,r.jsx)(n.h2,{id:"store-parts-of-your-document-data-as-attachment",children:"Store parts of your document data as attachment"}),"\n",(0,r.jsxs)(n.p,{children:["For in-app databases like NxDB, it does not make sense to partially parse the ",(0,r.jsx)(n.code,{children:"JSON"})," of a document. Instead, always the whole document json is parsed and handled. This has a better performance because ",(0,r.jsx)(n.code,{children:"JSON.parse()"})," in JavaScript directly calls a C++ binding which can parse really fast compared to a partial parsing in JavaScript itself. Also by always having the full document, NxDB can de-duplicate memory caches of document across multiple queries."]}),"\n",(0,r.jsxs)(n.p,{children:["The downside is that very very big documents with a complex structure can increase query time significantly. Documents fields with complex that are mostly not in use, can be move into an ",(0,r.jsx)(n.a,{href:"/rx-attachment.html",children:"attachment"}),". This would lead NxDB to not fetch the attachment data each time the document is loaded from disc. Instead only when explicitly asked for."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"const myDocument = await myCollection.insert({/* ... */});\nconst attachment = await myDocument.putAttachment(\n    {\n        id: 'otherStuff.json',\n        data: createBlob(JSON.stringify({/* ... */}), 'application/json'),\n        type: 'application/json'\n    }\n);\n"})}),"\n",(0,r.jsx)(n.h2,{id:"process-queries-in-a-worker-process",children:"Process queries in a worker process"}),"\n",(0,r.jsxs)(n.p,{children:["Moving database storage into a WebWorker can significantly improve performance in web applications that use NxDB or similar NoSQL databases. When database operations are executed in the main JavaScript thread, they can block or slow down the User Interface, especially during heavy or complex data operations. By offloading these operations to a WebWorker, you effectively separate the data processing workload from the UI thread. This means the main thread remains free to handle user interactions and render updates without delay, leading to a smoother and more responsive user experience. Additionally, WebWorkers allow for parallel data processing, which can expedite tasks like querying and indexing. This approach not only enhances UI responsiveness but also optimizes overall application performance by leveraging the multi-threading capabilities of modern browsers.\nWith NxDB you can use the ",(0,r.jsx)(n.a,{href:"/rx-storage-worker.html",children:"Worker"})," and ",(0,r.jsx)(n.a,{href:"/rx-storage-shared-worker.html",children:"SharedWorker"})," plugin to to move the query processing away from the main thread."]}),"\n",(0,r.jsx)(n.h2,{id:"use-less-plugins-and-hooks",children:"Use less plugins and hooks"}),"\n",(0,r.jsxs)(n.p,{children:["Utilizing fewer ",(0,r.jsx)(n.a,{href:"/middleware.html",children:"hooks"})," and plugins in NxDB or similar NoSQL database systems can lead to markedly better performance. Each additional hook or plugin introduces extra layers of processing and potential overhead, which can cumulatively slow down database operations. These extensions often execute additional code or enforce extra checks with each operation, such as insertions, updates, or deletions. While they can provide valuable functionalities or custom behaviors, their overuse can inadvertently increase the complexity and execution time of basic database operations. By minimizing their use and only employing essential hooks and plugins, the system can operate more efficiently. This streamlined approach reduces the computational burden on each transaction, leading to faster response times and a more efficient overall data handling process, especially critical in high-load or real-time applications where performance is paramount."]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>s});var r=t(6540);const a={},o=r.createContext(a);function i(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);