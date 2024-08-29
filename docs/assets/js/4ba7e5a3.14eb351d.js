"use strict";(self.webpackChunknxdb=self.webpackChunknxdb||[]).push([[9591],{8848:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>a});var i=n(4848),o=n(8453);const r={title:"Contribute to NxDB",slug:"contribution.html"},s="Contribution",l={id:"contribute",title:"Contribute to NxDB",description:"We are open to, and grateful for, any contributions made by the community.",source:"@site/docs/contribute.md",sourceDirName:".",slug:"/contribution.html",permalink:"/contribution.html",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Contribute to NxDB",slug:"contribution.html"},sidebar:"tutorialSidebar",previous:{title:"Questions and Answers",permalink:"/questions-answers.html"},next:{title:"\ud83c\udd95 NxDB 15.0.0",permalink:"/releases/15.0.0.html"}},d={},a=[{value:"Requirements",id:"requirements",level:2},{value:"Adding tests",id:"adding-tests",level:2},{value:"Making a PR",id:"making-a-pr",level:2},{value:"Getting help",id:"getting-help",level:2},{value:"No-Go",id:"no-go",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"contribution",children:"Contribution"}),"\n",(0,i.jsx)(t.p,{children:"We are open to, and grateful for, any contributions made by the community."}),"\n",(0,i.jsx)(t.h1,{id:"developing",children:"Developing"}),"\n",(0,i.jsx)(t.h2,{id:"requirements",children:"Requirements"}),"\n",(0,i.jsx)(t.p,{children:"Before you can start developing, do the following:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Make sure you have installed nodejs with the version stated in the ",(0,i.jsx)(t.a,{href:"https://github.com/nxpkg/nxdb/blob/master/.nvmrc",children:".nvmrc"})]}),"\n",(0,i.jsxs)(t.li,{children:["Clone the repository ",(0,i.jsx)(t.code,{children:"git clone https://github.com/nxpkg/nxdb.git"})]}),"\n",(0,i.jsxs)(t.li,{children:["Install the dependencies ",(0,i.jsx)(t.code,{children:"cd nxdb && npm install"})]}),"\n",(0,i.jsxs)(t.li,{children:["Make sure that the tests work for you. At first, try it out with ",(0,i.jsx)(t.code,{children:"npm run test:node:memory"})," which tests the memory storage in node. In the ",(0,i.jsx)(t.a,{href:"https://github.com/nxpkg/nxdb/blob/master/package.json",children:"package.json"})," you can find more scripts to run the tests with different storages."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"adding-tests",children:"Adding tests"}),"\n",(0,i.jsxs)(t.p,{children:["Before you start creating a bugfix or a feature, you should create a test to reproduce it. Tests are in the ",(0,i.jsx)(t.code,{children:"test/unit"}),"-folder.\nIf you want to reproduce a bug, you can modify the test in ",(0,i.jsx)(t.a,{href:"https://github.com/nxpkg/nxdb/blob/master/test/unit/bug-report.test.ts",children:"this file"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"making-a-pr",children:"Making a PR"}),"\n",(0,i.jsx)(t.p,{children:"If you make a pull-request, ensure the following:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Every feature or bugfix must be committed together with a unit-test which ensures everything works as expected."}),"\n",(0,i.jsxs)(t.li,{children:["Do not commit build-files (anything in the ",(0,i.jsx)(t.code,{children:"dist"}),"-folder)"]}),"\n",(0,i.jsx)(t.li,{children:"Before you add non-trivial changes, create an issue to discuss if this will be merged and you don't waste your time."}),"\n",(0,i.jsxs)(t.li,{children:["To run the unit and integration-tests, do ",(0,i.jsx)(t.code,{children:"npm run test"})," and ensure everything works as expected"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"getting-help",children:"Getting help"}),"\n",(0,i.jsxs)(t.p,{children:["If you need help with your contribution, ask at ",(0,i.jsx)(t.a,{href:"https://nxpkg.github.io/chat",children:"discord"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"no-go",children:"No-Go"}),"\n",(0,i.jsx)(t.p,{children:"When reporting a bug, you need to make a PR with a test case that runs in the CI and reproduces your problem.\nSending a link with a repo does not help the maintainer because installing random peoples projects is time consuming and dangerous.\nAlso the maintainer will never go on a bug hunt based on your plain description. Either you report the bug with a test case, or the maintainer will likely not help you."}),"\n",(0,i.jsx)(t.h1,{id:"docs",children:"Docs"}),"\n",(0,i.jsxs)(t.p,{children:["The source of the documentation is at the ",(0,i.jsx)(t.code,{children:"docs-src"}),"-folder.\nTo read the docs locally, run ",(0,i.jsx)(t.code,{children:"npm run docs:install && npm run docs:serve"})," and open ",(0,i.jsx)(t.code,{children:"http://localhost:4000/"})]}),"\n",(0,i.jsx)(t.h1,{id:"thank-you-for-contributing",children:"Thank you for contributing!"})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>l});var i=n(6540);const o={},r=i.createContext(o);function s(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);