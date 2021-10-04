// Compiled with JS++ v.0.9.2

!function(){!function(){function f(g){g.pos=new Vec2(0,0);g.dim=new Vec2(2.5,10);g.halfDim=new Vec2(1.25,5);g.vel=new Vec2(0,0);g.tickVel=new Vec2(0,0);g.bounce=false;return(g);}function m(p,q,u,z,B,C){p.pos=new Vec2(0,0);p.dim=new Vec2(2.5,10);p.halfDim=new Vec2(1.25,5);p.vel=new Vec2(0,0);p.tickVel=new Vec2(0,0);p.bounce=false;q= +q;u= +u;z= +z;B= +B;C=!!C;p.pos.x= +q;p.pos.y= +u;p.dim.x= +z;p.dim.y= +B;p.halfDim.x= +(z/2);p.halfDim.y= +(B/2);p.bounce=!!C;return(p);}function D(F,G,H,I,J){F.pos=new Vec2(0,0);F.dim=new Vec2(2.5,10);F.halfDim=new Vec2(1.25,5);F.vel=new Vec2(0,0);F.tickVel=new Vec2(0,0);F.bounce=false;G= +G;H= +H;I= +I;J= +J;F.pos.x= +G;F.pos.y= +H;F.dim.x= +I;F.dim.y= +J;F.halfDim.x= +(I/2);F.halfDim.y= +(J/2);return(F);}var params=({});window.location.search.slice(1).split("&").forEach((function(K){K=typeof K=='string'?K+'':'';var L=function(item){item=item+'';var M=item.split("=");var N=M[1];var P=(N!=null?N:"")+'';var Q=params;var R=item.split("=");var S=R[0];var U=(S!=null?S:"n")+'';var V=U+'';Q[V]=P+'';};var W=L.call(this,K);W=W;return(W);}));var X=params;var Y=X["ticks"];var Z=(Y!=null?Y:"60")+'';var aa=Z+'';var ab= +(aa|0)|0;var TICKS_PER_SECOND=ab|0;var ac=params;var ad=ac["speed"];var ae=(ad!=null?ad:"90")+'';var af=ae+'';var ag= +(af|0)|0;var SPEED=ag|0;var ah=params;var ai=ah["time"];var aj=(ai!=null?ai:"1")+'';var ak=aj+'';var al= +(ak|0)|0;var TIME=al|0;var AI=!({}).hasOwnProperty.call(params,"noai");var RAINBOW=!!({}).hasOwnProperty.call(params,"r");var CANVAS=!!({}).hasOwnProperty.call(params,"c");var MAXBOUNCEANGLE= +(3*Math.PI/12);var towards=false;var score1=0|0;var score2=0|0;function Vec2(x,y){this.x=0;this.y=0;x= +x;y= +y;this.x= +x;this.y= +y;}Vec2.prototype.am="Vec2";function PhysicsObject(){}PhysicsObject.prototype.am="PhysicsObject";function an(){var outVec2=new Vec2(0,0);outVec2.x= +(this.pos.x+50-this.halfDim.x);outVec2.y= +(this.pos.y+50-this.halfDim.y);return(outVec2);}function ao(vel){vel= +vel;this.vel.x= +vel;this.tickVel.x= +(vel/TICKS_PER_SECOND);}function ap(vel){vel= +vel;this.vel.y= +vel;this.tickVel.y= +(vel/TICKS_PER_SECOND);}function PhysicScene(objs){this.objects=[];for(var aq=0;aq<(objs.length|0); ++aq){var ar=objs[aq];var head=ar;Array.prototype.push.apply(this.objects,[head])|0;}}PhysicScene.prototype.am="PhysicScene";function as(){var at=this.objects;main:for(var index1=0;index1<(at.length|0); ++index1){var au=this.objects;var av=index1|0;var aw=au[av];var ax=f(new PhysicsObject());var ay=aw!=null?aw:ax;var head=ay;var az=this.objects;for(var index2=0;index2<(az.length|0); ++index2){if(index1!=index2){var aA=this.objects;var aB=index2|0;var aC=aA[aB];var aD=f(new PhysicsObject());var aE=aC!=null?aC:aD;var item=aE;var aF=head;var aG=aF.pos;var aH= +aG.x;var aI=head;var aJ=aI.tickVel;var aK= +aJ.x;var aL= +(aH+aK);var aM=item;var aN=aM.pos;var aO= +aN.x;var aP=item;var aQ=aP.tickVel;var aR= +aQ.x;var aS= +(aO+aR);var aT= +(aL-aS);var aU= +Math.abs(aT);var aV=head;var aW=aV.halfDim;var aX= +aW.x;var aY=item;var aZ=aY.halfDim;var ba= +aZ.x;var bb= +(aX+ba);var bc=!!(aU<bb);if(bc){var bd=head;var be=bd.pos;var bf= +be.y;var bg=head;var bh=bg.tickVel;var bi= +bh.y;var bj= +(bf+bi);var bk=item;var bl=bk.pos;var bm= +bl.y;var bn=item;var bo=bn.tickVel;var bp= +bo.y;var bq= +(bm+bp);var br= +(bj-bq);var bs= +Math.abs(br);var bt=head;var bu=bt.halfDim;var bv= +bu.y;var bw=item;var bx=bw.halfDim;var by= +bx.y;var bz= +(bv+by);var bA=!!(bs<bz);}var bB=!!(bc&&bA);if(bB){if(head.bounce){var relativeIntersectY= +(item.pos.y+item.tickVel.y+item.halfDim.y-(head.pos.y+head.tickVel.y));var normalizedRelativeIntersectionY= +((relativeIntersectY-item.halfDim.y)/item.halfDim.y);var bounceAngle= +(normalizedRelativeIntersectionY*MAXBOUNCEANGLE);towards=!towards;ao.call(head,(towards? -1:1)*SPEED* +Math.cos(bounceAngle));ap.call(head,SPEED* - +Math.sin(bounceAngle));}else {continue main;}}}}head.pos.x= +(head.pos.x+head.tickVel.x);if(head.pos.y-head.halfDim.y+head.tickVel.y> -50&&head.pos.y+head.halfDim.y+head.tickVel.y<50){head.pos.y= +(head.pos.y+head.tickVel.y);}}}function Player(x){this.physicsObject=D(new PhysicsObject(),0,0,2.5,10);x= +x;this.physicsObject.pos.x= +x;}Player.prototype.am="Player";function Ball(){this.physicsObject=m(new PhysicsObject(),0,0,2.5,2.5,true);var bC= +Math.random();var bD= +(bC*2);var bE= +Math.floor(bD);var bF=bE|0;var bG=!!bF;towards=!!bG;bH.call(this);}Ball.prototype.am="Ball";function bH(){ao.call(this.physicsObject,((towards?1:0)-0.5)*SPEED);var bI=this.physicsObject;var bJ= +Math.random();var bK= +(bJ*2);var bL= +Math.floor(bK);var bM= +(bL-0.5);var bN=SPEED|0;var bO= +(bM*bN);ap.call(bI,bO);this.physicsObject.pos.x=0;this.physicsObject.pos.y=0;}function bP(){if(this.physicsObject.pos.x+this.physicsObject.halfDim.x+this.physicsObject.tickVel.x>50||this.physicsObject.pos.x-this.physicsObject.halfDim.x+this.physicsObject.tickVel.x< -50){bH.call(this);if(towards){score2=score2+1|0;}else {score1=score1+1|0;}towards=!towards;}if(this.physicsObject.pos.y+this.physicsObject.halfDim.y+this.physicsObject.tickVel.y>50||this.physicsObject.pos.y-this.physicsObject.halfDim.y+this.physicsObject.tickVel.y< -50){ap.call(this.physicsObject,this.physicsObject.vel.y* -1);}}var player1=new Player( -40);var player2=new Player(40);var ball=new Ball();var physicScene=new PhysicScene([player1.physicsObject,player2.physicsObject,ball.physicsObject]);function keyDown(event){switch(event.key.toLowerCase()){case "arrowup":ap.call(player1.physicsObject, -SPEED);break;case "arrowdown":ap.call(player1.physicsObject,SPEED);break;case "w":if(!AI){ap.call(player2.physicsObject, -SPEED);}break;case "s":if(!AI){ap.call(player2.physicsObject,SPEED);}break;}}function keyUp(event){switch(event.key.toLowerCase()){case "arrowup":if(player1.physicsObject.vel.y<0){ap.call(player1.physicsObject,0);}break;case "arrowdown":if(player1.physicsObject.vel.y>0){ap.call(player1.physicsObject,0);}break;case "w":if(player2.physicsObject.vel.y<0&&!AI){ap.call(player2.physicsObject,0);}break;case "s":if(player2.physicsObject.vel.y>0&&!AI){ap.call(player2.physicsObject,0);}break;}}var frame="";if(!CANVAS){var bQ=physicScene;var bR=bQ.objects;for(var index=0;index<(bR.length|0); ++index){var bS=physicScene;var bT=bS.objects;var bU=index|0;var bV=bT[bU];var bW=f(new PhysicsObject());var bX=bV!=null?bV:bW;var obj=bX;frame+="<div class=\""+(obj.bounce?"ball":"player")+"\" id=\"obj"+(index+"")+'\"></div>';}frame+="<div class=\"score\" id=\"s1\">"+(score1+"")+'</div>';frame+="<div class=\"score\" id=\"s2\">"+(score2+"")+'</div>';}else {frame="<img src=\"\" id=\"mainCanvas\"></img>";}document.body.innerHTML=frame;var obj0=document.getElementById("obj0");var obj1=document.getElementById("obj1");var obj2=document.getElementById("obj2");var s1=document.getElementById("s1");var s2=document.getElementById("s2");if(!CANVAS){if(RAINBOW){obj0.classList.add("rainbow");obj1.classList.add("rainbow");obj2.classList.add("rainbow");s1.classList.add("rainbow");s2.classList.add("rainbow");}}function tick(){if(AI){var bY=ball;var bZ=bY.physicsObject;var ca=bZ.pos;var cb= +ca.y;var cc=player2;var cd=cc.physicsObject;var ce=cd.pos;var cf= +ce.y;var cg= +(cb-cf);var ch= +Math.abs(cg);var ci=player2;var cj=ci.physicsObject;var ck=cj.halfDim;var cl= +ck.y;var cm=!!(ch>cl);if(cm){if(ball.physicsObject.pos.y>player2.physicsObject.pos.y){ap.call(player2.physicsObject,SPEED);}else if(ball.physicsObject.pos.y<player2.physicsObject.pos.y){ap.call(player2.physicsObject, -SPEED);}}else {ap.call(player2.physicsObject,0);}}as.call(physicScene);bP.call(ball);if(!CANVAS){var cn=player1;var co=cn.physicsObject;var cq=an.call(co);var cr= +cq.x;var cs=cr+'';var ct=cs+'%';var cu=obj0;var cv=cu.style;cv.left=ct;var cw=player1;var cx=cw.physicsObject;var cy=an.call(cx);var cz= +cy.y;var cA=cz+'';var cB=cA+'%';var cC=obj0;var cD=cC.style;cD.top=cB;obj0.style.width=player1.physicsObject.dim.x+'%';obj0.style.height=player1.physicsObject.dim.y+'%';var cE=player2;var cF=cE.physicsObject;var cG=an.call(cF);var cH= +cG.x;var cI=cH+'';var cJ=cI+'%';var cK=obj1;var cL=cK.style;cL.left=cJ;var cM=player2;var cN=cM.physicsObject;var cO=an.call(cN);var cP= +cO.y;var cQ=cP+'';var cR=cQ+'%';var cS=obj1;var cT=cS.style;cT.top=cR;obj1.style.width=player2.physicsObject.dim.x+'%';obj1.style.height=player2.physicsObject.dim.y+'%';var cU=ball;var cV=cU.physicsObject;var cW=an.call(cV);var cX= +cW.x;var cY=cX+'';var cZ=cY+'%';var da=obj2;var db=da.style;db.left=cZ;var dc=ball;var dd=dc.physicsObject;var de=an.call(dd);var df= +de.y;var dg=df+'';var dh=dg+'%';var di=obj2;var dj=di.style;dj.top=dh;obj2.style.width=ball.physicsObject.dim.x+'%';obj2.style.height=ball.physicsObject.dim.y+'%';s1.innerText=score1+"";s2.innerText=score2+"";}}document.body.addEventListener("keydown",(function(dk){var dl=keyDown;var dm=dl.call(this,dk);dm=dm;return(dm);}));document.body.addEventListener("keyup",(function(dn){var dp=keyUp;var dq=dp.call(this,dn);dq=dq;return(dq);}));setInterval((function(){var dr=tick;var ds=dr.call(this);ds=ds;return(ds);}),1000*TIME/TICKS_PER_SECOND);}();}();