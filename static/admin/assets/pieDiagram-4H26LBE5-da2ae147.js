import{E as J,n as Q,o as Y,s as ee,g as te,c as ae,b as ie,_ as s,l as w,v as re,d as se,F as ne,K as oe,L as le,M as L,N as ce,k as de,O as pe}from"./index-32460383.js";import{p as ge}from"./chunk-4BX2VUAB-2bb2ba36.js";import{p as he}from"./mermaid-parser.core-15b97880.js";var G=J.pie,C={sections:new Map,showData:!1,config:G},u=C.sections,D=C.showData,ue=structuredClone(G),fe=s(()=>structuredClone(ue),"getConfig"),me=s(()=>{u=new Map,D=C.showData,re()},"clear"),ve=s(({label:e,value:a})=>{if(a<0)throw new Error(`"${e}" has invalid value: ${a}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);u.has(e)||(u.set(e,a),w.debug(`added new section: ${e}, with value: ${a}`))},"addSection"),xe=s(()=>u,"getSections"),Se=s(e=>{D=e},"setShowData"),we=s(()=>D,"getShowData"),O={getConfig:fe,clear:me,setDiagramTitle:Q,getDiagramTitle:Y,setAccTitle:ee,getAccTitle:te,setAccDescription:ae,getAccDescription:ie,addSection:ve,getSections:xe,setShowData:Se,getShowData:we},Ce=s((e,a)=>{ge(e,a),a.setShowData(e.showData),e.sections.map(a.addSection)},"populateDb"),De={parse:s(async e=>{const a=await he("pie",e);w.debug(a),Ce(a,O)},"parse")},$e=s(e=>`
  .pieCircle{
    stroke: ${e.pieStrokeColor};
    stroke-width : ${e.pieStrokeWidth};
    opacity : ${e.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${e.pieOuterStrokeColor};
    stroke-width: ${e.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${e.pieTitleTextSize};
    fill: ${e.pieTitleTextColor};
    font-family: ${e.fontFamily};
  }
  .slice {
    font-family: ${e.fontFamily};
    fill: ${e.pieSectionTextColor};
    font-size:${e.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${e.pieLegendTextColor};
    font-family: ${e.fontFamily};
    font-size: ${e.pieLegendTextSize};
  }
`,"getStyles"),ye=$e,Te=s(e=>{const a=[...e.values()].reduce((r,o)=>r+o,0),$=[...e.entries()].map(([r,o])=>({label:r,value:o})).filter(r=>r.value/a*100>=1);return pe().value(r=>r.value).sort(null)($)},"createPieArcs"),Ae=s((e,a,$,y)=>{var W;w.debug(`rendering pie chart
`+e);const r=y.db,o=se(),T=ne(r.getConfig(),o.pie),A=40,n=18,p=4,l=450,d=l,f=oe(a),c=f.append("g");c.attr("transform","translate("+d/2+","+l/2+")");const{themeVariables:i}=o;let[b]=le(i.pieOuterStrokeWidth);b??(b=2);const E=T.textPosition,g=Math.min(d,l)/2-A,B=L().innerRadius(0).outerRadius(g),N=L().innerRadius(g*E).outerRadius(g*E);c.append("circle").attr("cx",0).attr("cy",0).attr("r",g+b/2).attr("class","pieOuterCircle");const h=r.getSections(),P=Te(h),I=[i.pie1,i.pie2,i.pie3,i.pie4,i.pie5,i.pie6,i.pie7,i.pie8,i.pie9,i.pie10,i.pie11,i.pie12];let m=0;h.forEach(t=>{m+=t});const _=P.filter(t=>(t.data.value/m*100).toFixed(0)!=="0"),v=ce(I).domain([...h.keys()]);c.selectAll("mySlices").data(_).enter().append("path").attr("d",B).attr("fill",t=>v(t.data.label)).attr("class","pieCircle"),c.selectAll("mySlices").data(_).enter().append("text").text(t=>(t.data.value/m*100).toFixed(0)+"%").attr("transform",t=>"translate("+N.centroid(t)+")").style("text-anchor","middle").attr("class","slice");const U=c.append("text").text(r.getDiagramTitle()).attr("x",0).attr("y",-(l-50)/2).attr("class","pieTitleText"),k=[...h.entries()].map(([t,S])=>({label:t,value:S})),x=c.selectAll(".legend").data(k).enter().append("g").attr("class","legend").attr("transform",(t,S)=>{const z=n+p,j=z*k.length/2,q=12*n,H=S*z-j;return"translate("+q+","+H+")"});x.append("rect").attr("width",n).attr("height",n).style("fill",t=>v(t.label)).style("stroke",t=>v(t.label)),x.append("text").attr("x",n+p).attr("y",n-p).text(t=>r.getShowData()?`${t.label} [${t.value}]`:t.label);const K=Math.max(...x.selectAll("text").nodes().map(t=>(t==null?void 0:t.getBoundingClientRect().width)??0)),V=d+A+n+p+K,R=((W=U.node())==null?void 0:W.getBoundingClientRect().width)??0,X=d/2-R/2,Z=d/2+R/2,F=Math.min(0,X),M=Math.max(V,Z)-F;f.attr("viewBox",`${F} 0 ${M} ${l}`),de(f,l,M,T.useMaxWidth)},"draw"),be={draw:Ae},Fe={parser:De,db:O,renderer:be,styles:ye};export{Fe as diagram};
