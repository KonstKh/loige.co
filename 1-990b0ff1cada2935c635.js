(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{164:function(e,t,a){"use strict";a(37);var n=a(0),i=a.n(n),o=a(253),r=a.n(o),l=a(261),c=function(e){var t=e.path,a=e.pageData,n=e.isBlogPost,o=e.children,c=a.frontmatter||{},m=c.title||l.siteMetadata.title,s=c.meta_description||a.excerpt||l.siteMetadata.description,p=c.fb_img&&""+l.siteMetadata.siteUrl+c.fb_img.publicURL.replace(/^\/+/g,""),d=c.tw_img&&""+l.siteMetadata.siteUrl+c.tw_img.publicURL.replace(/^\/+/g,""),g=p||d||l.siteMetadata.defaultImage,M=""+l.siteMetadata.siteUrl+t,u=function(e){var t=e.isBlogPost,a=e.url,n=e.title,i=e.image,o=e.description,r=e.datePublished,c=[{"@context":"http://schema.org","@type":"WebSite",url:a,name:n,alternateName:l.siteMetadata.title}];return t?[].concat(c,[{"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":a,name:n,image:i}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:a,name:n,alternateName:l.siteMetadata.title,headline:n,image:{"@type":"ImageObject",url:i},description:o,author:{"@type":"Person",name:"Luciano Mammino"},publisher:{"@type":"Organization",url:l.siteMetadata.siteUrl,name:"Luciano Mammino",logo:{"@context":"http://schema.org",itemtype:"https://schema.org/ImageObject",url:"https://loige.co/favicon.ico"}},mainEntityOfPage:{"@type":"WebSite","@id":l.siteMetadata.siteUrl},datePublished:r}]):c}({isBlogPost:n,url:M,title:m,image:g,description:s,datePublished:!!n&&c.dateISO});return i.a.createElement(r.a,{title:m},i.a.createElement("html",{lang:"en"}),i.a.createElement("link",{type:"text/plain",rel:"author",href:"https://loige.co/humans.txt"}),i.a.createElement("link",{rel:"canonical",content:M}),i.a.createElement("meta",{name:"description",content:s}),i.a.createElement("meta",{name:"image",content:g}),i.a.createElement("script",{type:"application/ld+json"},JSON.stringify(u)),i.a.createElement("meta",{property:"og:url",content:M}),i.a.createElement("meta",{property:"og:type",content:n?"article":"website"}),i.a.createElement("meta",{property:"og:title",content:m}),i.a.createElement("meta",{property:"og:description",content:s}),i.a.createElement("meta",{property:"og:image",content:p||g}),i.a.createElement("meta",{property:"fb:app_id",content:l.siteMetadata.fbAppId}),i.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),i.a.createElement("meta",{name:"twitter:creator",content:l.siteMetadata.twitterProfile}),i.a.createElement("meta",{name:"twitter:title",content:m}),i.a.createElement("meta",{name:"twitter:description",content:s}),i.a.createElement("meta",{name:"twitter:image",content:d||g}),o&&o)};c.defaultProps={isBlogPost:!1,path:"",pageData:{}},t.a=c},167:function(e,t,a){"use strict";var n=a(163),i=Object(n.b)("article",{target:"e1lcgljk0"})("margin:2em 0;line-height:25px;padding:0 1em;code{white-space:pre-wrap;word-break:break-word;}@media (min-width:780px){padding:0 2em;}& a{background-color:rgba(187,239,253,0.3);border-bottom:1px solid rgba(0,0,0,0.2);text-decoration:none;color:inherit;&:hover{background-color:#bbeffd;border-bottom-color:#1a1a1a;}&.anchor,&.gatsby-resp-image-link{background-color:transparent;border:none;}}& > p:first-child{font-size:18px;font-weight:300;color:#6d6d6d;& a,& strong{font-weight:400;}@media (min-width:780px){font-size:24px;}}& p{margin:1em 0 0 0;font-size:16px;line-height:1.7;max-width:42em;@media (min-width:780px){font-size:17px;line-height:1.7;}}& h2,& h3,& h4,& h5{margin:2em 0 0 0;}& p > code,& li > code{background:rgba(255,229,100,0.2);color:inherit;display:inline-block;padding:0 0.3em;}& p > code,& li > code,& p > a > code,& li > a > code{padding:0 3px;font-size:inherit;word-break:break-word;}& h2{border-top:1px solid #ececec;margin-top:2em;padding-top:2em;line-height:1.2;font-size:20px;&:first-child{border-top:0;margin-top:0;padding-top:0;}@media (min-width:780px){font-size:35px;}}& hr + h2{border-top:0;margin-top:0;}& h3{padding-top:45px;font-size:18px;@media (min-width:780px){font-size:25px;line-height:1.3;}}& h2 + h3,& h2 + h3:first-of-type{padding-top:30px;}& h4{font-size:20px;color:#6d6d6d;line-height:1.3;margin-top:50px;font-weight:400;}& h4 + p{margin-top:20px;}& ol,& ul{margin-top:20px;font-size:16px;padding-left:2em;& p,& p:first-of-type{font-size:16px;margin-top:0;line-height:1.2;}& li{margin-top:10px;}& ol,& ul{margin-left:20px;margin-top:10px;}}& img{max-width:100%;}& ol{list-style:decimal;}& ul{list-style:disc;}& blockquote{background-color:rgba(255,229,100,0.3);border-left-color:#ffe564;border-left-width:9px;border-left-style:solid;padding:20px 45px 20px 26px;margin:1em 0 2em -1em;@media (min-width:780px){margin-left:-2em;}& p{margin-top:15px;&:first-of-type{font-weight:700;margin-top:0;}&:nth-of-type(2){margin-top:0;}}}table{margin:1em auto;border-spacing:0;border-collapse:collapse;width:100%;@media (min-width:780px){width:80%;}td,th{border:1px solid #ccc;margin:0;padding:0.4em;}}table + legend{border-left:3px solid #ccc;font-size:small;font-style:italic;width:100%;margin:1em auto;padding:0 0 0 1em;@media (min-width:780px){width:80%;}}");t.a=i},169:function(e,t,a){"use strict";var n=a(7),i=a.n(n),o=a(0),r=a.n(o),l=a(163),c=a(36),m=Object(l.a)("display:flex;flex-direction:row;align-items:center;color:#ffffff;transition:color 0.2s ease-out;padding-left:15px;padding-right:15px;font-weight:300;text-decoration:none;@media (min-width:1280px){padding-left:20px;padding-right:20px;font-size:18px;}"),s=Object(l.a)("color:#46c9e5;position:relative;"),p=Object(l.b)("span",{target:"e5yudoc0"})("position:absolute;bottom:-1px;height:4px;left:0px;right:0px;z-index:1;background:#46c9e5;"),d=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this.props,t=e.to,a=e.active,n=e.children;return r.a.createElement(c.Link,{className:m+(a?" "+s:""),to:t},a&&r.a.createElement(p,null),n)},t}(o.Component),g=a(187),M=a(189),u=a(190),j=(a(27),function(e){return r.a.createElement("svg",Object.assign({"aria-label":"LinkedIn",viewBox:"0 0 24 24",width:"1em",height:"1em"},e),r.a.createElement("path",{fill:"currentColor",d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"}))}),h=Object(l.b)("header",{target:"ejhzk940"})("background-color:rgba(32,35,42,0.95);color:#ffffff;display:block;position:auto;z-index:2000;width:100%;top:0;left:0;@media (min-width:780px){position:fixed;}"),f=Object(l.b)("div",{target:"ejhzk941"})("padding-left:4px;padding-right:4px;margin-left:auto;margin-right:auto;max-width:1260px;@media (min-width:780px){width:90%;padding-left:20px;padding-right:20px;}"),x=Object(l.b)("div",{target:"ejhzk942"})("display:flex;height:60px;"),y=Object(l.a)("display:none;@media (min-width:540px){display:flex;}"),E=Object(l.b)("nav",{target:"ejhzk943"})("display:flex;flex-direction:row;align-items:stretch;overflow-x:auto;overflow-y:hidden;-webkit-overflow-scrolling:touch;height:100%;width:70%;@media (min-width:1180px){width:60%;}"),b=Object(l.b)("div",{target:"ejhzk944"})("display:flex;flex-direction:row;align-items:center;justify-content:flex-end;overflow-x:auto;overflow-y:hidden;-webkit-overflow-scrolling:touch;height:100%;width:30%;@media (min-width:1180px){{width:40%;}"),N=Object(l.a)("width:16px;height:16px;color:#fff;fill:currentColor;@media (min-width:540px){width:24px;height:24px;}@media (min-width:1180px){margin:0 0.5em 0 0;}"),L=Object(l.a)("color:#fff;text-decoration:none;text-align:center;padding:5px 4px;white-space:nowrap;font-size:12px;display:flex;flex-direction:row;align-items:center;transition:background 150ms;&:hover{background:rgba(255,255,255,0.2);}span{display:none;}@media (min-width:780px){padding:5px 10px;}@media (min-width:1180px){width:60%;span{display:inline-block;}img{margin-right:1em;}}"),I=Object(l.b)("span",{target:"ejhzk945"})("height:2px;display:block;transform-origin:left center 0px;transform:scaleX(1);z-index:50;transition:transform 400ms ease 100ms;background:linear-gradient(90deg,#46c9e5,#d26ac2);"),w=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this.props.section;return r.a.createElement(h,null,r.a.createElement(f,null,r.a.createElement(x,null,r.a.createElement(g.a,{className:y}),r.a.createElement(E,null,r.a.createElement(d,{active:"blog"===e,to:"/"},"Blog"),r.a.createElement(d,{active:"speaking"===e,to:"/speaking"},"Speaking"),r.a.createElement(d,{active:"about"===e,to:"/about"},"About")),r.a.createElement(b,null,r.a.createElement("a",{rel:"nofollow",className:L,href:"https://github.com/lmammino"},r.a.createElement(M.a,{className:N,alt:"Luciano's GitHub profile"}),r.a.createElement("span",null,"GitHub")),r.a.createElement("a",{rel:"nofollow",className:L,href:"https://twitter.com/loige"},r.a.createElement(u.a,{className:N,alt:"Luciano's Twitter profile"}),r.a.createElement("span",null,"Twitter")),r.a.createElement("a",{rel:"nofollow",className:L,href:"https://www.linkedin.com/in/lucianomammino/"},r.a.createElement(j,{className:N,alt:"Luciano's LinkedIn profile"}),r.a.createElement("span",null,"LinkedIn"))))),r.a.createElement(I,null))},t}(o.Component),T=Object(l.b)("footer",{target:"ecf9mth0"})("background-color:#20232a;color:#ffffff;padding-top:30px;padding-bottom:50px;position:relative;"),z=Object(l.b)("span",{target:"ecf9mth1"})("position:absolute;width:100%;top:0;height:2px;display:block;transform-origin:left center 0px;transform:scaleX(1);z-index:50;transition:transform 400ms ease 100ms;background:linear-gradient(90deg,#46c9e5,#d26ac2);"),Y=Object(l.b)("div",{target:"ecf9mth2"})("padding-left:20px;padding-right:20px;max-width:1260px;margin-left:auto;margin-right:auto;@media (min-width:780px){width:90%;}"),D=Object(l.b)("div",{target:"ecf9mth3"})("display:flex;flex-direction:row;flex-wrap:wrap;align-items:flex-start;"),k=Object(l.b)("div",{target:"ecf9mth4"})("flex:1 auto;margin-bottom:1em;padding-right:1em;"),v=Object(l.b)("div",{target:"ecf9mth5"})("flex:1 auto;margin-bottom:1em;padding-right:1em;width:100%;@media (min-width:780px){width:auto;}"),S=Object(l.b)("div",{target:"ecf9mth6"})("display:inline-flex;flex-direction:column;"),O=Object(l.b)("div",{target:"ecf9mth7"})("color:#d26ac2;font-size:14px;font-weight:bold;line-height:3;text-transform:uppercase;letter-spacing:0.08em;"),C=Object(l.b)("a",{target:"ecf9mth8"})("color:inherit;line-height:2;text-decoration:none;&:hover{color:#46c9e5;}"),Z=Object(l.b)("p",{target:"ecf9mth9"})("font-size:0.8em;padding:4px 0 0 0;color:#ccc;a{color:inherit;font-weight:bold;text-decoration:none;}a:hover{color:#46c9e5;text-decoration:underline;}"),Q=Object(l.b)("span",{target:"ecf9mth10"})("color:#d26ac2;&:hover{color:red;}"),P=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=(new Date).getFullYear();return r.a.createElement(T,null,r.a.createElement(z,null),r.a.createElement(Y,null,r.a.createElement(D,null,r.a.createElement(v,null,r.a.createElement(O,{style:{color:"#46c9e5"}},"Loige.co"),r.a.createElement(Z,null,"Copyright © Luciano Mammino 2014-",e,"."),r.a.createElement(Z,null,"Built with"," ",r.a.createElement("a",{rel:"nofollow noopener noreferrer",target:"_blank",href:"https://www.gatsbyjs.org"},"Gatsby"),", Coffee and a lot of ",r.a.createElement(Q,null,"❤︎"),"."),r.a.createElement(Z,null,"Loige logo designed by"," ",r.a.createElement("a",{rel:"nofollow noopener noreferrer",target:"_blank",href:"http://andreamangano.com"},"Andrea Mangano"),"."),r.a.createElement(Z,null,"Hosted on"," ",r.a.createElement("a",{rel:"nofollow noopener noreferrer",target:"_blank",href:"https://github.com/lmammino/loige.co"},"GitHub"),", accelerated by"," ",r.a.createElement("a",{rel:"nofollow noopener noreferrer",target:"_blank",href:"https://www.cloudflare.com"},"Clouflare"),"."),r.a.createElement(Z,null,"Theme inspired by"," ",r.a.createElement("a",{rel:"nofollow noopener noreferrer",target:"_blank",href:"https://reactjs.org/docs/"},"React documentation.")),r.a.createElement(Z,null,"Icons by"," ",r.a.createElement("a",{rel:"nofollow noopener noreferrer",target:"_blank",href:"https://fontawesome.com/"},"Font Awesome"),".")),r.a.createElement(k,null,r.a.createElement(S,null,r.a.createElement(O,null,"Explore"),r.a.createElement(C,{href:"/"},"Blog"),r.a.createElement(C,{href:"/speaking"},"Speaking"),r.a.createElement(C,{href:"/about"},"About"),r.a.createElement(C,{href:"/comment-policy"},"Comment Policy"))),r.a.createElement(k,null,r.a.createElement(S,null,r.a.createElement(O,null,"My Projects"),r.a.createElement(C,{target:"_blank",rel:"nofollow noopener noreferrer",href:"https://www.nodejsdesignpatterns.com"},"Node.js Design Patterns"),r.a.createElement(C,{target:"_blank",rel:"nofollow noopener noreferrer",href:"https://serverlesslab.com"},"ServerlessLab"),r.a.createElement(C,{target:"_blank",rel:"nofollow noopener noreferrer",href:"https://fullstackbulletin.com"},"FullStack Bulletin"),r.a.createElement(C,{target:"_blank",rel:"nofollow noopener noreferrer",href:"https://middy.js.org"},"Middy"))),r.a.createElement(k,null,r.a.createElement(S,null,r.a.createElement(O,null,"Follow me"),r.a.createElement(C,{rel:"nofollow noopener noreferrer",href:"https://twitter.com/loige"},r.a.createElement(u.a,null)," Twitter"),r.a.createElement(C,{rel:"nofollow noopener noreferrer",href:"https://github.com/lmammino"},r.a.createElement(M.a,null)," GitHub"),r.a.createElement(C,{rel:"nofollow noopener noreferrer",href:"https://www.linkedin.com/in/lucianomammino"},r.a.createElement(j,null)," Linkedin"))))))},t}(o.Component),U=a(80);Object(U.injectGlobal)("*{box-sizing:border-box;margin:0;padding:0;}body{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;font-style:normal;font-weight:400;fill:currentColor;@media (min-width:780px){margin:60px 0 0 0;}}code,pre{font-family:source-code-pro,Menlo,Monaco,Consolas,Courier New,monospace;font-weight:300;}.content a{text-decoration:none;}");var B=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this.props,t=(e.location,e.section),a=e.children;return r.a.createElement(o.Fragment,null,r.a.createElement(w,{section:t}),a,r.a.createElement(P,null))},t}(o.Component);t.a=B},187:function(e,t,a){"use strict";var n=a(7),i=a.n(n),o=a(0),r=a.n(o),l=a(163),c=a(36),m=a(188),s=a.n(m),p=Object(l.a)("color:#46c9e5;display:flex;margin-right:10px;height:100%;text-decoration:none;flex-direction:center;align-items:center;@media (min-width:600px){width:calc(100% / 6);}"),d=Object(l.a)("display:inline-block;vertical-align:top;"),g=Object(l.a)("margin-left:10px;font-weight:bold;font-size:20px;line-height:20px;"),M=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){return r.a.createElement(c.Link,{to:"/",className:p+(this.props.className?" "+this.props.className:"")},r.a.createElement("img",{className:d,height:"60px",src:s.a,alt:"Loige"}),r.a.createElement("span",{className:g},"Loige"))},t}(o.Component);t.a=M},188:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjExNjMuMTI2IiB2aWV3Qm94PSIwIDAgMTI4NS41NjMgMTE2My4xMjYiIHdpZHRoPSIxMjg1LjU2MyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGNsaXBQYXRoIGlkPSJhIj48cGF0aCBkPSJtMCAwaDEyODUuNTYzdjExNjMuMTI2aC0xMjg1LjU2M3oiLz48L2NsaXBQYXRoPjxnIGNsaXAtcGF0aD0idXJsKCNhKSI+PHBhdGggZD0ibTExNjMuMTMxIDU1MC45NTV2NjEuMjE2aC02MS4yMTd2MjQ0Ljg2OWg2MS4yMTcgNjEuMjE2di0zMDYuMDg1eiIgZmlsbD0iIzc0NGUyNiIvPjxwYXRoIGQ9Im01NTAuOTU1IDc5NS44MjRoLTEyMi40Mzd2NjEuMjE2aC02MS4yMTZ2MTIyLjQzN2gxMjIuNDM3di02MS4yMTZoNjEuMjE2eiIgZmlsbD0iIzc0NGUyNiIvPjxwYXRoIGQ9Im05MTguMjYxIDYxMi4xNzFoLTYxLjIxNnYtNjEuMjE2aDYxLjIxNnptNjEuMjE3IDBoLTYxLjIxN3Y2MS4yMTZoNjEuMjE3em0xMjIuNDMyIDYxLjIxNnYxODMuNjUzaC0xMjIuNDMyLTEyMi40Mzd2NjEuMjE3aC0xMjIuNDMzLTE4My42NTN2LTE4My42NDloMTIyLjQzN3YtMTIyLjQzN2g2MS4yMTZ2NjEuMjE2aDE4My42NTN2NjEuMjIxaDYxLjIxN3YtNjEuMjIxem0tMzA2LjA4NiA2MS4yMjFoLTYxLjIxNnY2MS4yMTZoNjEuMjE2em0tMTgzLjY0OC0xMjIuNDM3aDYxLjIxNnYtNjEuMjE2aC02MS4yMTZ6IiBmaWxsPSIjNGVjMmM4Ii8+PHBhdGggZD0ibTkxOC4yNjEgMTIyLjQzMnYtNjEuMjE2aC00MjguNTE4djYxLjIxNmgtNjEuMjIxdjM2Ny4zMDJoMTIyLjQzN3YtNjEuMjE2aC02MS4yMTZ2LTEyMi40MzNoNjEuMjE2djEyMi40MzNoNjEuMjE3di0xMjIuNDMzaDEyMi40MzJ2LTEyMi40MzZoMTgzLjY1M3Y2MS4yMmg2MS4yMTd2LTEyMi40Mzd6IiBmaWxsPSIjNzQ0ZTI2Ii8+PHBhdGggZD0ibTk3OS40NzggMTIyLjQzNmg2MS4yMTZ2NjEuMjE3aC02MS4yMTZ6IiBmaWxsPSIjMmEyYTJhIi8+PHBhdGggZD0ibTYxMi4xNzEgNjEyLjE3MWg2MS4yMTd2MTIyLjQzN2gtMTgzLjY0OXYtNjEuMjE3aC0xMjIuNDM3di0xMjIuNDM2aDI0NC44Njl6bTM2Ny4zMDcgNjEuMjJoLTYxLjIxN3Y2MS4yMTdoNjEuMjE3em0tMjQ0Ljg3NCAxMjIuNDMzaDYxLjIxNnYtNjEuMjE2aC02MS4yMTZ6bTI0NC44NzQtNjEyLjE3MXY2MS4yMTZoNjEuMjE2djEyMi40MzNoLTYxLjIxNnYxODMuNjUzaC02MS4yMjF2NjEuMjE2aDEyMi40Mzd2LTYxLjIxNmg2MS4yMTZ2LTYxLjIxN2g2MS4yMTZ2LTYxLjIyLTEyMi40MzMtMTIyLjQzMnptLTEyMi40MzcgMzY3LjMwMmgtMTgzLjY1M3Y2MS4yMTZoNjEuMjE2djYxLjIyaDE4My42NTN2LTYxLjIyaC02MS4yMTZ6IiBmaWxsPSIjZmJkODAwIi8+PHBhdGggZD0ibTEyMjQuMzQ3IDQ4OS43MzR2LTQ4OS43MzRoLTYxLjIxNi03MzQuNjA5djYxLjIxNmgtNjEuMjE2djQyOC41MThoLTE4My42NTN2NjEuMjIxaC02MS4yMnYxODMuNjQ5aDI0NC44NzN2NjEuMjJoLTEyMi40Mzd2NjEuMjE2aC02MS4yMTZ2NjEuMjE3aDYxLjIxNnY2MS4yMmg2MS4yMTd2NjEuMjE2aDEyMi40MzZ2NjEuMjE3aDYxLjIxN3YtNjEuMjE3aDYxLjIxNnYtNjEuMjE2aDQyOC41MjN2LTYxLjIyaDMwNi4wODV2LTQyOC41MjN6bTAgMzY3LjMwNmgtMzY3LjMwNnY2MS4yMTdoLTM2Ny4zMDJ2NjEuMjJoLTEyMi40MzN2LTEyMi40MzdoNjEuMjE2di02MS4yMTZoMTIyLjQzM3YtNjEuMjJoLTYxLjIxNnYtNjEuMjE3aC0zMDYuMDg2di02MS4yMTZoNjEuMjE2di02MS4yMTZoMTIyLjQzNyAxODMuNjQ5di02MS4yMjFoLTEyMi40MzN2LTE4My42NDktMTgzLjY1M2g2MS4yMTd2LTYxLjIxNmg0MjguNTIydjYxLjIxNmg2MS4yMTd2LTYxLjIxNmgxODMuNjUzdjQyOC41MThoLTYxLjIyMXY2MS4yMjFoLTYxLjIxNnY2MS4yMTZoLTYxLjIxNnY2MS4yMTZoMTIyLjQzMnYtNjEuMjE2aDYxLjIyMXYtNjEuMjE2aDYxLjIxNnoiIGZpbGw9IiMyYTJhMmEiLz48cGF0aCBkPSJtODU3LjA0MSAzMDYuMDg1aC02MS4yMTd2LTYxLjIxNmg2MS4yMTd6bS02NzMuMzg4IDYxMi4xNzJoLTYxLjIxNnY2MS4yMTZoNjEuMjE2em0xODMuNjUzIDI0NC44NjloNjEuMjE2di02MS4yMTZoLTYxLjIxNnptLTE4My42NTMtNjEuMjE2aDYxLjIxNnYtNjEuMjE3aC02MS4yMTZ6bS0xODMuNjUzIDBoNjEuMjE2di02MS4yMTdoLTYxLjIxNnptOTc5LjQ3OC02NzMuMzkydi02MS4yMTZoLTE4My42NTR2NjEuMjE2aC02MS4yMTZ2MTIyLjQzN2gxMjIuNDMzIDEyMi40Mzd2LTYxLjIyMWgtMTIyLjQzN3YtNjEuMjE2eiIgZmlsbD0iIzJhMmEyYSIvPjxnIGZpbGw9IiNmZmYiPjxwYXRoIGQ9Im03OTUuODI0IDI0NC44NjloMTIyLjQzNnYtNjEuMjE2aC0xMjIuNDM2LTYxLjIxNnYxMjIuNDMyaDYxLjIxNnptNjEuMjE3IDYxLjIxNmgtNjEuMjE3djYxLjIxN2gyNDQuODcydi02MS4yMTdoLS4wMDJ2LTYxLjIxNmgtMTgzLjY1M3ptLTMwNi4wODYgMTIyLjQzM2gxODMuNjUzdjEyMi40MzdoLTE4My42NTN6bS02MS4yMTYtMTIyLjQzM2g2MS4yMTZ2MTIyLjQzM2gtNjEuMjE2em0xMjIuNDM3IDBoMTgzLjY0OHYxMjIuNDMzaC0xODMuNjQ4em0yNDQuODY1IDEyMi40MzNoMTIyLjQzN3Y2MS4yMTZoLTEyMi40Mzd6IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48cGF0aCBkPSJtMjQ0Ljg2OSA2NzMuMzkxaDEyMi40MzN2LTEyMi40MzZoLTEyMi40MzN2NjEuMjE4aC02MS4yMTZ2NjEuMjE4eiIvPjxwYXRoIGQ9Im0xMTYzLjEyNiAxMjIuNDM2aC4wMDV2LTYxLjIyaC0xODMuNjUzdjYxLjIyaDYxLjIxOHY2MS4yMTdoMTIyLjQzeiIvPjwvZz48L2c+PC9zdmc+"},189:function(e,t,a){"use strict";a(27);var n=a(0),i=a.n(n);t.a=function(e){return i.a.createElement("svg",Object.assign({"aria-label":"GitHub",viewBox:"0 0 24 24",width:"1em",height:"1em"},e),i.a.createElement("path",{fill:"currentColor",d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"}))}},190:function(e,t,a){"use strict";a(27);var n=a(0),i=a.n(n);t.a=function(e){return i.a.createElement("svg",Object.assign({"aria-label":"Twitter",viewBox:"0 0 24 24",width:"1em",height:"1em"},e),i.a.createElement("path",{fill:"currentColor",d:"M23.954 4.569a10 10 0 0 1-2.825.775 4.958 4.958 0 0 0 2.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 0 0-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 0 0-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.228-.616v.061a4.923 4.923 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.212.085 4.937 4.937 0 0 0 4.604 3.417 9.868 9.868 0 0 1-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0 0 7.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 0 0 2.46-2.548l-.047-.02z"}))}},261:function(e,t,a){(function(t){e.exports={siteMetadata:{title:'Luciano Mammino "Loige" - Web developer, entrepreneur, fighter, butterfly maker!',author:"Luciano Mammino",description:"The website of Luciano Mammino a.k.a. Loige, Web developer, entrepreneur, fighter, butterfly maker",siteUrl:"https://loige.co/",defaultImage:"https://loige.co/page-image-fb.jpg",twitterProfile:"loige",disqusShortName:"loige",fbAppId:"231187154413670"},pathPrefix:"/",plugins:["mario-banner","blog","speaking","static-pages",{resolve:"gatsby-source-filesystem",options:{path:t+"/content/pages",name:"pages"}},{resolve:"gatsby-source-filesystem",options:{path:t+"/content/posts",name:"posts"}},{resolve:"gatsby-source-filesystem",options:{path:t+"/content/speaking",name:"speaking"}},"gatsby-transformer-yaml",{resolve:"gatsby-source-filesystem",options:{path:t+"/content/data"}},{resolve:"gatsby-transformer-remark",options:{plugins:[{resolve:"gatsby-remark-images",options:{maxWidth:1024,linkImagesToOriginal:!1,withWebp:!0,quality:90}},{resolve:"gatsby-remark-copy-linked-files",options:{destinationDir:"content"}},{resolve:"gatsby-remark-responsive-iframe",options:{wrapperStyle:"margin-bottom: 1.0725rem"}},"gatsby-remark-prismjs","gatsby-remark-smartypants","gatsby-remark-autolink-headers"]}},"gatsby-transformer-sharp","gatsby-plugin-sharp","gatsby-plugin-catch-links",{resolve:"gatsby-plugin-google-analytics",options:{trackingId:"UA-47248506-1"}},a(262),a(264),{resolve:"gatsby-plugin-manifest",options:{name:'Luciano Mammino "Loige" - Web developer, entrepreneur, fighter, butterfly maker!',short_name:"Loige.co",start_url:"/",background_color:"#ffffff",theme_color:"#20232a",display:"minimal-ui",icon:"src/components/images/apple-icon-precomposed.png"}},"gatsby-plugin-offline","gatsby-plugin-react-helmet",{resolve:"gatsby-plugin-emotion",options:{}}]}}).call(this,"/")},262:function(e,t,a){a(37),a(263),a(84),a(85);var n=function(e){switch(!0){case["/comment-policy"].includes(e.node.path):return.2;case e.node.path.startsWith("/tag/"):case e.node.path.startsWith("/page/"):return.5;default:return.7}},i=function(e){switch(!0){case["/about","/comment-policy"].includes(e.node.path):return"monthly";default:return"daily"}};e.exports={resolve:"gatsby-plugin-sitemap",options:{exclude:["/dev-404-page","/404","/404.html","/offline-plugin-app-shell-fallback","**/image_fb","**/image_tw"],serialize:function(e){var t=e.site;return e.allSitePage.edges.map(function(e){return{url:t.siteMetadata.siteUrl+e.node.path.replace(/^\/+/g,""),changefreq:i(e),priority:n(e)}})}}}},264:function(e,t,a){a(27),a(37),e.exports={resolve:"gatsby-plugin-feed",options:{query:"\n        {\n          site {\n            siteMetadata {\n              title\n              description\n              siteUrl\n              site_url: siteUrl\n            }\n          }\n        }\n      ",feeds:[{serialize:function(e){var t=e.query,a=t.site;return t.allMarkdownRemark.edges.map(function(e){var t=a.siteMetadata,n=e.node.frontmatter,i=n.fb_img&&""+t.siteUrl+n.fb_img.publicURL.replace(/^\/+/g,""),o=n.tw_img&&""+t.siteUrl+n.tw_img.publicURL.replace(/^\/+/g,""),r=i||o||t.defaultImage;return Object.assign({},e.node.frontmatter,{description:e.node.excerpt,url:a.siteMetadata.siteUrl+e.node.fields.slug,guid:a.siteMetadata.siteUrl+e.node.fields.slug,custom_elements:[{"content:encoded":'<p><img src="'+r+'"/></p>'+e.node.html}]})})},query:'\n            {\n              allMarkdownRemark(\n                limit: 1000,\n                sort: { order: DESC, fields: [frontmatter___date] },\n                filter: {frontmatter: {status: {eq: "published"}, layout: {eq: "post"}}}\n              ) {\n                edges {\n                  node {\n                    excerpt\n                    html\n                    fields { slug }\n                    frontmatter {\n                      title\n                      date\n                      fb_img {\n                        publicURL\n                      }\n                    }\n                  }\n                }\n              }\n            }\n          ',output:"/rss.xml"}]}}}}]);
//# sourceMappingURL=1-990b0ff1cada2935c635.js.map