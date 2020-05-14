(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{40:function(e,t,a){e.exports=a(69)},45:function(e,t,a){},46:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(16),c=a.n(r),o=(a(45),a(1)),s=(a(46),a(3));function u(e){var t=l.a.createElement("ul",null,l.a.createElement("li",{className:"App-nav-link"},l.a.createElement(s.b,{to:"/auth/login",className:"App-link"},"Login")),l.a.createElement("li",{className:"App-nav-link"},l.a.createElement(s.b,{to:"/auth/signup",className:"App-link"},"Sign up")),l.a.createElement("li",null,l.a.createElement(s.b,{to:"/results",className:"App-link"},"Browse Songs")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://github.com/erik-hei/genius-poetry-corner",target:"_blank",rel:"noopener noreferrer",className:"App-link"},"About")));return e.user&&(t=l.a.createElement("ul",null,l.a.createElement("li",{className:"fancy capitalize"},"Welcome, ",e.user.name),l.a.createElement("li",{className:"App-nav-link"},l.a.createElement(s.b,{to:"/profile",className:"App-link"},"Profile")),l.a.createElement("li",{className:"App-nav-link"},l.a.createElement(s.b,{to:"/",onClick:e.logout,className:"App-link"},"Log out")),l.a.createElement("li",null,l.a.createElement(s.b,{to:"/results",className:"App-link"},"Browse Songs")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://github.com/dean-hei/genius-poetry-corner",className:"App-link"},"About")))),l.a.createElement("nav",null,t)}function i(e){return l.a.createElement("header",null,l.a.createElement("div",null,l.a.createElement(s.b,{to:"/",className:"App-link"},l.a.createElement("div",{className:"jaunty"},l.a.createElement("h1",null,"Lyrical",l.a.createElement("span",{className:"lightblue"},".")))),l.a.createElement("h3",null,"songs to poetry")),l.a.createElement(u,{logout:e.logout,user:e.user}))}var m=a(12),p=a(4),d=a.n(p),f=a(75);function E(e){var t=Object(n.useState)(""),a=Object(o.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){d.a.get("".concat("https://lyrical-poetry.herokuapp.com/","/users/").concat(e.authorId)).then((function(e){e.data.result&&c(e.data.result.name)})).catch((function(e){console.log(e)}))}),[]),l.a.createElement(f.a,{in:"true"},l.a.createElement("div",{className:"thumbnail"},l.a.createElement("div",null,l.a.createElement("img",{className:"music-note",src:"music-note.png",alt:"music note"})),l.a.createElement(s.b,{to:"/poems/".concat(e.id)},l.a.createElement("div",{className:"thumb-text"},l.a.createElement("h2",null,e.title),l.a.createElement("h3",{className:"fancy"},"artfully assembled by ",r)))))}function h(e){var t=Object(n.useState)([]),a=Object(o.a)(t,2),r=a[0],c=a[1];Object(n.useEffect)((function(){d.a.get("".concat("https://lyrical-poetry.herokuapp.com/","/poems")).then((function(e){e.data.results&&c(e.data.results)})).catch((function(e){console.log(e)}))}),[]);var s=r.length<1?l.a.createElement("p",null,"Loading..."):r.map((function(e){return l.a.createElement(E,{id:e.id,title:e.title,authorId:e.user_id,public:!0})}));return l.a.createElement("div",null,l.a.createElement("h1",{className:"page-header fancy"},"Featured Poems"),l.a.createElement("div",{className:"poems"},s))}function b(e){var t={backgroundImage:"url("+e.img+")"};return l.a.createElement(f.a,{in:"true"},l.a.createElement("div",{className:"songthumb"},l.a.createElement("div",{style:t,className:"songthumb-img",alt:"album thumbnail"}),l.a.createElement("div",{className:"songthumb-text"},l.a.createElement(s.b,{to:"/results/".concat(e.link),onClick:function(t){e.setSongInfo({img:e.img,link:e.link,title:e.title,artist:e.artist})}},l.a.createElement("h2",{className:"basic-link"},e.title)),l.a.createElement("h3",null,e.artist))))}function g(e){var t=Object(n.useState)(!1),a=Object(o.a)(t,2),r=a[0],c=a[1];return r?l.a.createElement("p",{class:"lyric-add-text"},"Lyric successfully deleted! (Refresh to see changes)"):l.a.createElement("button",{class:"form-button",onClick:function(t){return function(t){t.preventDefault(),e.user&&d.a.delete("".concat("https://lyrical-poetry.herokuapp.com/","/lyrics/").concat(e.lyric.id),{headers:{Authorization:"Bearer ".concat(e.token)}}).then((function(e){e.data&&c(!0)})).catch((function(e){console.log(e)}))}(t)}},"Remove this Lyric")}function k(e){var t=Object(n.useState)(!1),a=Object(o.a)(t,2),r=a[0],c=a[1],s="";e.user&&e.user.id===e.authorId&&(s=l.a.createElement(g,{lyric:e.lyric,token:e.token,user:e.user,poemId:e.poemId}));var u=l.a.createElement("div",null,l.a.createElement("p",{className:"gray-bg"},e.lyric.content));return r&&(u=l.a.createElement("div",null,l.a.createElement("p",{className:"gray-bg highlight"},e.lyric.content),l.a.createElement("div",{className:"arrow"}),l.a.createElement(b,{img:e.lyric.thumbnail,link:e.lyric.path,title:e.lyric.song,artist:e.lyric.artist,setSongInfo:e.setSongInfo}),s)),l.a.createElement("div",{onClick:function(e){c(!r)}},u)}function v(e){var t=Object(m.g)().id,a=Object(n.useState)([]),r=Object(o.a)(a,2),c=r[0],u=r[1],i=Object(n.useState)(null),p=Object(o.a)(i,2),E=p[0],h=p[1],b=Object(n.useState)(null),g=Object(o.a)(b,2),v=g[0],y=g[1],j=Object(n.useState)(""),O=Object(o.a)(j,2),N=O[0],S=O[1];Object(n.useEffect)((function(){d.a.get("".concat("https://lyrical-poetry.herokuapp.com/","/poems/").concat(t)).then((function(e){e.data.error&&S(e.data.error),e.data.result&&(h(e.data.result.poem),u(e.data.result.lyrics),d.a.get("".concat("https://lyrical-poetry.herokuapp.com/","/users/").concat(e.data.result.poem.user_id)).then((function(e){e.data.result&&y(e.data.result)})).catch((function(e){console.log(e)})))})).catch((function(e){console.log(e)}))}),[]);var I="";e.user&&v&&e.user.id==v.id&&(I=l.a.createElement(s.b,{className:"basic-link",to:"/poems/".concat(t,"/edit/")},"Edit Poem Details"));var w=0==c.length?l.a.createElement("p",null,"No lyrics added to this poem yet."):c.map((function(t){return l.a.createElement(k,{lyric:t,user:e.user,setSongInfo:e.setSongInfo,token:e.token,authorId:v?v.id:0,poemId:E?E.id:0})})),A=E&&E.public?"":l.a.createElement("p",null,"(This poem is not public)");return l.a.createElement("div",{className:"simple"},N,l.a.createElement("div",{className:"poem-header"},l.a.createElement("div",null,l.a.createElement("img",{className:"music-note",src:"../music-note.png",alt:"music note"})),l.a.createElement("div",{className:"poem-header-text"},l.a.createElement("h1",null,E?E.title:"Loading..."),l.a.createElement("h2",{className:"fancy"},"by ",v?v.name:"unknown"),I,A)),l.a.createElement(f.a,Object.assign({in:"true",style:{transformOrigin:"0 0 0"}},{timeout:1e3}),l.a.createElement("div",null,w)))}function y(e){var t=Object(m.g)().id,a=Object(n.useState)(""),r=Object(o.a)(a,2),c=r[0],s=r[1],u=Object(n.useState)(""),i=Object(o.a)(u,2),p=i[0],f=i[1],E=Object(n.useState)(""),h=Object(o.a)(E,2),b=h[0],g=h[1],k=Object(n.useState)(!1),v=Object(o.a)(k,2),y=v[0],j=v[1],O=Object(n.useState)(null),N=Object(o.a)(O,2),S=N[0],I=N[1];Object(n.useEffect)((function(){g(""),d.a.get("".concat("https://lyrical-poetry.herokuapp.com/","/poems/").concat(t)).then((function(e){e.data.error&&g(e.data.error),e.data.result&&(I(e.data.result.poem),s(e.data.result.poem.title),f(e.data.result.poem.public))})).catch((function(e){console.log(e)}))}),[c,p,t]);return e.user?1==y?l.a.createElement(m.a,{to:"/profile"}):l.a.createElement("div",{className:"simple center"},l.a.createElement("h2",{className:"fancy"},"Edit Poem"),b,l.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.user&&d.a.put("https://lyrical-poetry.herokuapp.com/poems/".concat(e.user.id),{title:c,publicValue:p},{headers:{Authorization:"Bearer ".concat(e.token)}}).then((function(e){e.data.error?g(e.data.error):(console.log(e.data),j(!0))})).catch((function(e){console.log(e),g(e.message)}))}},l.a.createElement("div",null,l.a.createElement("label",null,"Title:"),l.a.createElement("input",{type:"text",placeholder:c,name:"title",onChange:function(e){return s(e.target.value)}})),l.a.createElement("div",null,l.a.createElement("input",{type:"checkbox",checked:p,name:"title",onChange:function(e){return function(e){p?(f(!1),e.target.checked=!1):(f(!0),e.target.checked=!0)}(e)}}),l.a.createElement("label",null,"Make Poem Public")),l.a.createElement("button",{className:"form-button",type:"submit"},"Update Settings"),l.a.createElement("button",{className:"form-button",onClick:function(t){t.preventDefault(),e.user&&d.a.delete("".concat("https://lyrical-poetry.herokuapp.com/","/poems/").concat(S.id),{headers:{Authorization:"Bearer ".concat(e.token)}}).then((function(e){e.data.error?g(e.data.error):(console.log(e.data),j(!0))})).catch((function(e){console.log(e),g(e.message)}))}},"Delete Poem"))):l.a.createElement(m.a,{to:"/"})}function j(e){var t=Object(n.useState)(""),a=Object(o.a)(t,2),r=a[0],c=a[1],s=Object(n.useState)(!1),u=Object(o.a)(s,2),i=u[0],p=u[1],f=Object(n.useState)(""),E=Object(o.a)(f,2),h=E[0],b=E[1],g=Object(n.useState)(!1),k=Object(o.a)(g,2),v=k[0],y=k[1];Object(n.useEffect)((function(){b("")}),[r,i]);return e.user?v?l.a.createElement(m.a,{to:"/profile"}):l.a.createElement("div",{className:"simple center"},l.a.createElement("p",null,h),l.a.createElement("h2",{className:"fancy"},"Make a New Poem"),l.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.user&&d.a.post("".concat("https://lyrical-poetry.herokuapp.com/","/profile/").concat(e.user.id),{title:r,publicValue:i},{headers:{Authorization:"Bearer ".concat(e.token)}}).then((function(e){e.data.error?b(e.data.error):y(!0)})).catch((function(e){console.log(e),b(e.message)}))}},l.a.createElement("div",null,l.a.createElement("label",null,"Title:"),l.a.createElement("input",{type:"text",maxLength:"11",name:"title",onChange:function(e){return c(e.target.value)}})),l.a.createElement("div",null,l.a.createElement("input",{type:"checkbox",name:"title",onChange:function(e){return function(e){e.target.checked?p(!0):p(!1)}(e)}}),l.a.createElement("label",null,"Make Poem Public")),l.a.createElement("button",{className:"form-button",type:"submit"},"Create Poem"))):l.a.createElement(m.a,{to:"/"})}function O(e){var t=Object(n.useState)([]),a=Object(o.a)(t,2),r=a[0],c=a[1],s=Object(n.useState)(""),u=Object(o.a)(s,2),i=u[0],m=u[1],p=0,f=r?r.map((function(t){return p++,l.a.createElement(b,{artist:t.primary_artist.name,img:t.song_art_image_thumbnail_url,link:t.path.split("/")[1],title:t.title_with_featured,key:p,songInfo:e.songInfo,setSongInfo:e.setSongInfo})})):"";return l.a.createElement("div",null,l.a.createElement("h2",{className:"fancy"},"Browse Songs"),l.a.createElement("form",{className:"search",onSubmit:function(e){e.preventDefault();var t="https://api.genius.com/search?q=".concat(i,"&access_token=").concat("Rdhy935RTTVyJTUdmNW3NuQ3l6FjpE8XYR_BGMuFiFde_tgtEIFucrlMTnD5oXQ6");d.a.get(t).then((function(e){e.data&&c(e.data.response.hits.map((function(e){if("song"==e.type)return e.result})))})).catch((function(e){return console.log("\ud83d\udca5",e)}))}},l.a.createElement("button",{className:"invisible",type:"submit"},"\ud83d\udd0d"),l.a.createElement("input",{type:"text",placeholder:"Search for a song or artist",onChange:function(e){return m(e.target.value)}})),0==r.length?"":l.a.createElement("h2",{className:"page-header"},"Results"),l.a.createElement("div",{className:"poems"},f))}function N(e){var t=Object(n.useState)(!1),a=Object(o.a)(t,2),r=a[0],c=a[1],u=Object(n.useState)([]),i=Object(o.a)(u,2),m=i[0],p=i[1],E=Object(n.useState)(null),h=Object(o.a)(E,2),b=h[0],g=h[1];Object(n.useEffect)((function(){e.user&&d.a.get("".concat("https://lyrical-poetry.herokuapp.com/","/profile/").concat(e.user.id),{headers:{Authorization:"Bearer ".concat(e.token)}}).then((function(e){e.data.results&&(p(e.data.results),e.data.results.length>0&&g(e.data.results[0].id))})).catch((function(e){console.log(e)}))}),[]);var k=l.a.createElement("button",{className:"form-button",onClick:function(e){c(!r)}},"+");if(r)if(e.user)if("submitted"==r)k=l.a.createElement("span",{className:"lyric-add-text"},"Lyric successfully added!");else{var v=m.map((function(e){return l.a.createElement("option",{value:e.id},e.title)})),y=v.length<1?l.a.createElement("p",{class:"lyric-add-text"},"You don't have any poems. ",l.a.createElement(s.b,{className:"basic-link",to:"/poems/new"},"Create a new poem?")):l.a.createElement("select",{onChange:function(e){g(e.target.value)},name:"poem_id"},v);k=l.a.createElement("form",{onSubmit:function(t){return function(t){if(t.preventDefault(),e.user&&e.songInfo){var a=e.songInfo.title,n=e.songInfo.artist,l=e.songInfo.img,r=e.line,o=e.songInfo.link;d.a.post("".concat("https://lyrical-poetry.herokuapp.com/","/poems/").concat(b),{song:a,artist:n,thumbnail:l,content:r,path:o,order:1},{headers:{Authorization:"Bearer ".concat(e.token)}}).then((function(e){e.data.result&&c("submitted")})).catch((function(e){console.log(e)}))}}(t)}},l.a.createElement("div",{className:"arrow"}),l.a.createElement(f.a,{in:r},l.a.createElement("div",{className:"songthumb"},l.a.createElement("label",null,"Add to poem:"),y,l.a.createElement("button",{className:"form-button",type:"submit"},"Add Lyric"))))}else k=l.a.createElement("span",{className:"lyric-add-text"},l.a.createElement(s.b,{className:"basic-link",to:"/auth/login"},"Log in to add a lyric to your poem"));return l.a.createElement("span",null,k)}var S=a(76);function I(e){var t=Object(n.useState)([]),a=Object(o.a)(t,2),r=a[0],c=a[1],s=Object(n.useState)(null),u=Object(o.a)(s,2),i=(u[0],u[1]);Object(n.useEffect)((function(){e.songInfo&&e.songInfo.link&&d.a.get("".concat("https://lyrical-poetry.herokuapp.com/","/songs/").concat(e.songInfo.link)).then((function(e){e.data.message?(i(e.data.message),console.log(e.data.err)):(console.log("DAT DATA BE:",e.data),c(e.data.lyrics))})).catch((function(e){i(e),console.log(e)}))}),[]);var m=r?r.map((function(t){return t&&"["!=t[0]?l.a.createElement("div",{className:"lyric-line"},t,l.a.createElement(N,{line:t,songInfo:e.songInfo,user:e.user,token:e.token})):l.a.createElement("div",{className:"lyric-break"},l.a.createElement("strong",null,t))})):"",p=e.songInfo?{backgroundImage:"url("+e.songInfo.img+")"}:"",f=e.songInfo?l.a.createElement("div",{className:"simple"},l.a.createElement("div",{className:"result-header"},l.a.createElement("div",{style:p,className:"result-img",alt:"album thumbnail"}),l.a.createElement("div",{className:"result-text"},l.a.createElement("h2",null,e.songInfo.title),l.a.createElement("h3",null,"by ",e.songInfo.artist),l.a.createElement("p",{className:"basic-link"},l.a.createElement("a",{href:"https://genius.com/".concat(e.songInfo.link)},"View Lyrics on Genius.com")))),l.a.createElement(S.a,{in:"true"},l.a.createElement("div",null,m))):"";return l.a.createElement("div",null,f)}function w(e){var t=Object(n.useState)(null),a=Object(o.a)(t,2),r=(a[0],a[1],Object(n.useState)(null)),c=Object(o.a)(r,2),u=c[0],i=c[1];if(Object(n.useEffect)((function(){e.user&&d.a.get("".concat("https://lyrical-poetry.herokuapp.com/","/profile/").concat(e.user.id),{headers:{Authorization:"Bearer ".concat(e.token)}}).then((function(e){e.data.results&&i(e.data.results)})).catch((function(e){console.log(e)}))}),[]),!e.user)return l.a.createElement(m.a,{to:"/"});var p=u?u.map((function(e){return l.a.createElement(E,{id:e.id,title:e.title,authorId:e.user_id,public:e.public})})):"";return l.a.createElement("div",null,l.a.createElement("h1",{className:"page-header capitalize fancy"},e.user.name,"'s Profile"),l.a.createElement("div",{class:"profile-links"},l.a.createElement(s.b,{to:"profile/edit",className:"basic-link"},"Edit Profile"),l.a.createElement("span",{className:"spacer"},"|"),l.a.createElement(s.b,{to:"poems/new",className:"basic-link"},"Make a New Poem")),l.a.createElement("div",{className:"poems"},p))}function A(e){var t=Object(n.useState)(e.user.email),a=Object(o.a)(t,2),r=a[0],c=a[1],s=Object(n.useState)(e.user.name),u=Object(o.a)(s,2),i=u[0],p=u[1],d=Object(n.useState)(""),f=Object(o.a)(d,2),E=f[0],h=f[1],b=Object(n.useState)(e.user.password),g=Object(o.a)(b,2),k=g[0],v=g[1];if(Object(n.useEffect)((function(){h("")}),[r,i,k]),!e.user)return l.a.createElement(m.a,{to:"/"});return l.a.createElement("div",{className:"simple center"},l.a.createElement("h2",{className:"fancy"},"Edit Profile"),l.a.createElement("span",{className:"red"},E),l.a.createElement("form",{onSubmit:function(t){t.preventDefault(),fetch("".concat("https://lyrical-poetry.herokuapp.com/","/auth/signup"),{method:"POST",body:JSON.stringify({name:i,email:r,password:k}),headers:{"Content-Type":"application/json"}}).then((function(t){if(!t.ok)return console.log(t),void h("".concat(t.status,": ").concat(t.statusText));t.json().then((function(t){e.updateUser(t.token)}))}))}},l.a.createElement("div",null,l.a.createElement("label",null,"Name:"),l.a.createElement("input",{type:"text",name:"name",placeholder:e.user.name,onChange:function(e){return p(e.target.value)}})),l.a.createElement("div",null,l.a.createElement("label",null,"Email:"),l.a.createElement("input",{type:"email",name:"email",placeholder:e.user.email,onChange:function(e){return c(e.target.value)}})),l.a.createElement("div",null,l.a.createElement("label",null,"Password:"),l.a.createElement("input",{type:"password",name:"password",placeholder:"enter a new password",onChange:function(e){return v(e.target.value)}})),l.a.createElement("button",{type:"submit"},"Submit Changes")))}function C(e){var t=Object(n.useState)(""),a=Object(o.a)(t,2),r=a[0],c=a[1],s=Object(n.useState)(""),u=Object(o.a)(s,2),i=u[0],p=u[1],f=Object(n.useState)(""),E=Object(o.a)(f,2),h=E[0],b=E[1],g=Object(n.useState)(""),k=Object(o.a)(g,2),v=k[0],y=k[1];Object(n.useEffect)((function(){b("")}),[r,i,v]);return e.user?l.a.createElement(m.a,{to:"/profile"}):l.a.createElement("div",{className:"simple center"},l.a.createElement("h2",{className:"fancy"},"Signup"),l.a.createElement("span",{className:"red"},h),l.a.createElement("form",{onSubmit:function(t){t.preventDefault();var a={email:r,password:v,name:i};d.a.post("".concat("https://lyrical-poetry.herokuapp.com/","/auth/signup"),a).then((function(t){t.data.message?(e.setUserToken(null),b(t.data.message)):t.data.error?(e.setUserToken(null),b(t.data.error)):e.setUserToken({user:t.data.user,token:t.data.token})})).catch((function(e){console.log(e),b(e.message)}))}},l.a.createElement("div",null,l.a.createElement("label",null,"Name:"),l.a.createElement("input",{type:"text",maxLength:"11",name:"name",onChange:function(e){return p(e.target.value)}})),l.a.createElement("div",null,l.a.createElement("label",null,"Email:"),l.a.createElement("input",{type:"email",name:"email",onChange:function(e){return c(e.target.value)}})),l.a.createElement("div",null,l.a.createElement("label",null,"Password:"),l.a.createElement("input",{type:"password",name:"password",onChange:function(e){return y(e.target.value)}})),l.a.createElement("button",{type:"submit"},"Sign Me Up!")))}var T=function(e){var t=Object(n.useState)(""),a=Object(o.a)(t,2),r=a[0],c=a[1],s=Object(n.useState)(""),u=Object(o.a)(s,2),i=u[0],p=u[1],f=Object(n.useState)(""),E=Object(o.a)(f,2),h=E[0],b=E[1];Object(n.useEffect)((function(){p("")}),[r,h]);return e.user?l.a.createElement(m.a,{to:"/profile"}):l.a.createElement("div",{className:"simple center"},l.a.createElement("h2",{className:"fancy"},"Login"),l.a.createElement("span",{className:"red"},i),l.a.createElement("form",{onSubmit:function(t){t.preventDefault(),d.a.post("".concat("https://lyrical-poetry.herokuapp.com/","/auth/login"),{email:r,password:h}).then((function(t){console.log("WE CALLED","https://lyrical-poetry.herokuapp.com/","AND WE GOT",t.data),t.data.message?(p(t.data.message),e.setUserToken(null)):t.data.error?(e.setUserToken(null),p(t.data.error)):e.setUserToken({user:t.data.user,token:t.data.token})})).catch((function(e){console.log(e),p(e.message)}))}},l.a.createElement("div",null,l.a.createElement("label",null,"Email:"),l.a.createElement("input",{type:"email",name:"email",onChange:function(e){return c(e.target.value)}})),l.a.createElement("div",null,l.a.createElement("label",null,"Password:"),l.a.createElement("input",{type:"password",name:"password",onChange:function(e){return b(e.target.value)}})),l.a.createElement("button",{type:"submit"},"Sign in")))};function U(e){return l.a.createElement("div",null,l.a.createElement(m.d,null,l.a.createElement(m.b,{exact:!0,path:"/",component:h}),l.a.createElement(m.b,{path:"/profile/edit",render:function(){return l.a.createElement(A,{user:e.user,updateUser:e.updateUser})}}),l.a.createElement(m.b,{path:"/profile",render:function(){return l.a.createElement(w,{user:e.user,token:e.token})}}),l.a.createElement(m.b,{path:"/results/:id",render:function(){return l.a.createElement(I,{songInfo:e.songInfo,user:e.user,token:e.token})}}),l.a.createElement(m.b,{path:"/results",render:function(){return l.a.createElement(O,{songInfo:e.songInfo,setSongInfo:e.setSongInfo})}}),l.a.createElement(m.b,{path:"/poems/new",render:function(){return l.a.createElement(j,{user:e.user,token:e.token})}}),l.a.createElement(m.b,{path:"/poems/:id/edit",render:function(){return l.a.createElement(y,{user:e.user,token:e.token})}}),l.a.createElement(m.b,{path:"/poems/:id",render:function(){return l.a.createElement(v,{user:e.user,songInfo:e.songInfo,setSongInfo:e.setSongInfo,token:e.token})}}),l.a.createElement(m.b,{path:"/auth/login",render:function(){return l.a.createElement(T,{user:e.user,updateUser:e.updateUser,token:e.token,setUserToken:e.setUserToken})}}),l.a.createElement(m.b,{path:"/auth/signup",render:function(){return l.a.createElement(C,{user:e.user,updateUser:e.updateUser,token:e.token,setUserToken:e.setUserToken})}})))}var x=function(){var e=Object(n.useState)({}),t=Object(o.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(null),u=Object(o.a)(c,2),m=u[0],p=u[1],d=Object(n.useState)(null),f=Object(o.a)(d,2),E=f[0],h=f[1],b=function(e){e?(console.log("token successfully obtained"),h(e.token),p(e.user)):(h(null),p(null))};return l.a.createElement(s.a,null,l.a.createElement("div",{className:"wrapper"},l.a.createElement(i,{logout:function(){return b(null)},user:m}),l.a.createElement("main",null,l.a.createElement(U,{songInfo:a,setSongInfo:r,user:m,updateUser:p,token:E,setUserToken:b})),l.a.createElement("footer",null,l.a.createElement("p",null,"\xa9 Erik (dj) Heikkila 2020"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[40,1,2]]]);
//# sourceMappingURL=main.9e62d8bd.chunk.js.map