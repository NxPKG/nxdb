"use strict";(self.webpackChunknxdb=self.webpackChunknxdb||[]).push([[3881],{7589:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>l,frontMatter:()=>o,metadata:()=>c,toc:()=>m});var r=s(4848),n=s(8453);const o={title:"Remote RxStorage",slug:"rx-storage-remote.html"},a="Remote RxStorage",c={id:"rx-storage-remote",title:"Remote RxStorage",description:"The Remote RxStorage is made to use a remote storage and communicate with it over an asynchronous message channel.",source:"@site/docs/rx-storage-remote.md",sourceDirName:".",slug:"/rx-storage-remote.html",permalink:"/rx-storage-remote.html",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Remote RxStorage",slug:"rx-storage-remote.html"},sidebar:"tutorialSidebar",previous:{title:"LokiJS RxStorage",permalink:"/rx-storage-lokijs.html"},next:{title:"Worker RxStorage \ud83d\udc51",permalink:"/rx-storage-worker.html"}},i={},m=[{value:"Usage",id:"usage",level:2},{value:"Usage with a Websocket server",id:"usage-with-a-websocket-server",level:2},{value:"Sending custom messages",id:"sending-custom-messages",level:2}];function g(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"remote-rxstorage",children:"Remote RxStorage"}),"\n",(0,r.jsxs)(t.p,{children:["The Remote ",(0,r.jsx)(t.a,{href:"/rx-storage.html",children:"RxStorage"})," is made to use a remote storage and communicate with it over an asynchronous message channel.\nThe remote part could be on another JavaScript process or even on a different host machine.\nThe remote storage plugin is used in many NxDB plugins like the ",(0,r.jsx)(t.a,{href:"/rx-storage-worker.html",children:"worker"})," or the ",(0,r.jsx)(t.a,{href:"/electron.html",children:"electron"})," plugin."]}),"\n",(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(t.p,{children:["The remote storage communicates over a message channel which has to implement the ",(0,r.jsx)(t.code,{children:"messageChannelCreator"})," function which returns an object that has a ",(0,r.jsx)(t.code,{children:"messages$"})," observable and a ",(0,r.jsx)(t.code,{children:"send()"})," function on both sides and a ",(0,r.jsx)(t.code,{children:"close()"})," function that closes the RemoteMessageChannel."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"// on the client\nimport { getRxStorageRemote } from 'nxdb/plugins/storage-remote';\nconst storage = getRxStorageRemote({\n    identifier: 'my-id',\n    mode: 'storage',\n    messageChannelCreator: () => Promise.resolve({\n        messages$: new Subject(),\n        send(msg) {\n            // send to remote storage\n        }\n    })\n});\nconst myDb = await createRxDatabase({\n    storage\n});\n\n// on the remote\nimport { getRxStorageDexie } from 'nxdb/plugins/storage-dexie';\nimport { exposeRxStorageRemote } from 'nxdb/plugins/storage-remote';\nexposeRxStorageRemote({\n    storage: getRxStorageDexie(),\n    messages$: new Subject(),\n    send(msg){\n        // send to other side\n    }\n});\n"})}),"\n",(0,r.jsx)(t.h2,{id:"usage-with-a-websocket-server",children:"Usage with a Websocket server"}),"\n",(0,r.jsxs)(t.p,{children:["The remote storage plugin contains helper functions to create a remote storage over a WebSocket server.\nThis is often used in Node.js to give one microservice access to another services database ",(0,r.jsx)(t.strong,{children:"without"})," having to replicate the full database state."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"// server.js\nimport { getRxStorageMemory } from 'nxdb/plugins/storage-memory';\nimport { startRxStorageRemoteWebsocketServer } from 'nxdb/plugins/storage-remote-websocket';\n\n// either you can create the server based on a RxDatabase\nconst serverBasedOnDatabase = await startRxStorageRemoteWebsocketServer({\n    port: 8080,\n    database: myRxDatabase\n});\n\n// or you can create the server based on a pure RxStorage\nconst serverBasedOn = await startRxStorageRemoteWebsocketServer({\n    port: 8080,\n    storage: getRxStorageMemory()\n});\n"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"// client.js\n\nimport { getRxStorageRemoteWebsocket } from 'nxdb/plugins/storage-remote-websocket';\nconst myDb = await createRxDatabase({\n    storage: getRxStorageRemoteWebsocket({\n        url: 'ws://example.com:8080'\n    })\n});\n"})}),"\n",(0,r.jsx)(t.h2,{id:"sending-custom-messages",children:"Sending custom messages"}),"\n",(0,r.jsx)(t.p,{children:"The remote storage can also be used to send custom messages to and from the remote instance."}),"\n",(0,r.jsxs)(t.p,{children:["One the remote you have to define a ",(0,r.jsx)(t.code,{children:"customRequestHandler"})," like:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"const serverBasedOnDatabase = await startRxStorageRemoteWebsocketServer({\n    port: 8080,\n    database: myRxDatabase,\n    async customRequestHandler(msg){\n        // here you can return any JSON object as an 'answer'\n        return {\n            foo: 'bar'\n        };\n    } \n});\n"})}),"\n",(0,r.jsxs)(t.p,{children:["On the client instance you can then call the ",(0,r.jsx)(t.code,{children:"customRequest()"})," method:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"const storage = getRxStorageRemoteWebsocket({\n    url: 'ws://example.com:8080'\n});\nconst answer = await storage.customRequest({ bar: 'foo' });\nconsole.dir(answer); // > { foo: 'bar' }\n"})})]})}function l(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(g,{...e})}):g(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>c});var r=s(6540);const n={},o=r.createContext(n);function a(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);