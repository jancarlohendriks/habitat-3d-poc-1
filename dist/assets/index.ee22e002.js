import{S as g,a as v,W as E,R as A,G as S,P as W,A as M,b as j,c as C}from"./vendor.b66ddae3.js";const P=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}};P();var x="/habitat-3d-poc-1/assets/model-13.4cd98b58.glb",o,l,p,d=0;const w=g();document.body.appendChild(w.dom);var m=new v;const i=new E;i.setSize(window.innerWidth,window.innerHeight);document.body.appendChild(i.domElement);const N=document.getElementById("title"),h=new A,b=[],O=new S;O.load(x,function(n){n.scene.children.find(e=>e.name=="Cube"),n.scene.children.find(e=>e.name=="NurbsPath"),n.scene.traverse(function(e){e.isMesh&&e.name.startsWith("Cube")&&b.push(e)}),o=n.cameras[0];const s=new W;s.position.set(2.5,7.5,15);const r=new M;r.position.set(2.5,7.5,15);const a=j.findByName(n.animations,"Action");l=new C(o),p=l.clipAction(a),p.play(),m.add(n.scene,r,s),i.render(m,o)},n=>console.log(n.loaded/n.total*100+"% loaded"),n=>console.log(n));i.domElement.addEventListener("mousemove",z,!1);function z(n){var a,e,t,c,f,u;const s={x:n.clientX/i.domElement.clientWidth*2-1,y:-(n.clientY/i.domElement.clientHeight)*2+1};h.setFromCamera(s,o);const r=h.intersectObjects(b,!1);((e=(a=r[0])==null?void 0:a.object)==null?void 0:e.name)&&(N.innerText=(c=(t=r[0])==null?void 0:t.object)==null?void 0:c.name,(u=(f=r[0])==null?void 0:f.object)==null||u.material.color.set(16777215))}function y(){requestAnimationFrame(y),l&&l.setTime(d),o&&i.render(m,o),w.update()}y();window.addEventListener("resize",L,!1);window.addEventListener("load",L,!1);function L(){o.aspect=window.innerWidth/window.innerHeight,o.updateProjectionMatrix(),i.setSize(window.innerWidth,window.innerHeight),i.render(m,o)}window.addEventListener("wheel",F,!1);function F(n){d>.1&&n.deltaY<0&&(d=d-.1),d<4.1&&n.deltaY>0&&(d=d+.1)}
