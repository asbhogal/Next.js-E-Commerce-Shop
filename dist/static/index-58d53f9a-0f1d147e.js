import{s as x,aA as _,p as g,P as L,cp as w,j as a,aj as B,co as O,ae as T,aL as S,ak as A,g as D,a5 as W,a2 as z}from"./sanity-06438262.js";import{P as C}from"./PaneItem-5e36e932-85ff6644.js";import{useDeskTool as G}from"./index-b167003e-f86a803a.js";import"./index-bd09ff40.js";var r;function H(o,t){return t||(t=o.slice(0)),Object.freeze(Object.defineProperties(o,{raw:{value:Object.freeze(t)}}))}const E=x.hr(r||(r=H([`
  background-color: var(--card-border-color);
  height: 1px;
  margin: 0;
  border: none;
`])));function Y(o){const{childItemId:t,index:l,isActive:d,isSelected:p,pane:u,paneKey:f}=o,{features:h}=G(),{collapsed:m}=_(),{defaultLayout:y,displayOptions:c,items:i,menuItems:v,menuItemGroups:I,title:b}=u,P=c==null?void 0:c.showIcons,k=e=>{var n;const s=(n=e.displayOptions)==null?void 0:n.showIcon;return typeof s<"u"?s!==!1:P!==!1};return g(L,{currentMaxWidth:350,"data-testid":"desk-tool-list-pane",id:f,maxWidth:640,minWidth:320,selected:p,children:[w,a(B,{actions:a(O,{menuItems:v,menuItemGroups:I}),backButton:h.backButton&&l>0&&a(T,{as:S,"data-as":"a",icon:A,mode:"bleed"}),title:b}),a(D,{overflow:m?void 0:"auto",children:a(W,{padding:2,space:1,children:i&&i.map((e,n)=>{if(e.type==="divider")return a(z,{paddingY:1,children:a(E,{})},"divider-".concat(n));const s=!d&&t===e.id,j=d&&t===e.id;return a(C,{icon:k(e)?e.icon:!1,id:e.id,layout:y,pressed:s,schemaType:e.schemaType,selected:j,title:e.title,value:e._id&&e.schemaType?{_id:e._id,_type:e.schemaType.name,title:e.title}:void 0},e.id)})})})]})}export{Y as default};
