var _0x57f6=['updateValue','value','data','score','unlocked','get','cash','dispatchEvent','dec','addEventListener','width','rect','color','draw','beginPath','lineWidth','paper','cost','#ff0000','wood','#ffaa00','cessna','#ff5500','keys','length','type','obj','height','init','component','ico','img','src_small','parent','lock','title','text','name','charAt','toUpperCase','slice','#ffffff','font','20px\x20Verdana','clear','onload','drawImage','score_title','Score:\x20','score_value','cover','fillStyle','stroke','image','src','image_uri','clearColor','0px','fillRect','clearRect','img_uri','timestamp_start','timestamp_progress','#60606080','checkIntersect','buy','buyable','purchased','runway_models','debugId','game/assets/sprites/runway/runway1.png','game/assets/sprites/runway/runway2.png','click','clientX','clientY','stages','random','plane_models','planes','shift','requestAnimationFrame','getElementById','gamecanvas','getContext','cash_inc','https://planez.robloxcom.me/game/planes.json','open','GET','readyState','parse','responseText','send','stageId','typeId'];(function(_0x5af0f0,_0xe3b77){var _0x39620c=function(_0x5555e8){while(--_0x5555e8){_0x5af0f0['push'](_0x5af0f0['shift']());}};_0x39620c(++_0xe3b77);}(_0x57f6,0xaf));var _0x149b=function(_0x1218f4,_0x28caa0){_0x1218f4=_0x1218f4-0x0;var _0x1b0c3f=_0x57f6[_0x1218f4];return _0x1b0c3f;};var canvas=document[_0x149b('0x0')](_0x149b('0x1'));var context=canvas[_0x149b('0x2')]('2d');var buttons={};var cover;var model;var click;var gameData=new Gamestate();var modelJson;var looping=![];var assets={'plane_models':[],'runway_models':[{},{},{},{},{}]};const planeEvent=new Event('plane_models_change');const cashEvent=new Event(_0x149b('0x3'));var score_data={};var jsonUrl=_0x149b('0x4');var http=new XMLHttpRequest();http[_0x149b('0x5')](_0x149b('0x6'),jsonUrl,![]);http['onreadystatechange']=function(){if(http[_0x149b('0x7')]==0x4&&http['status']==0xc8){modelJson=JSON[_0x149b('0x8')](http[_0x149b('0x9')]);};};http[_0x149b('0xa')]();function Gamestate(){var _0x591c1e=this;this[_0x149b('0xb')]=0x0;this[_0x149b('0xc')]=-0x1;this[_0x149b('0xd')]=function(){this[_0x149b('0xe')]=modelJson[this[_0x149b('0xc')]][_0x149b('0xf')][_0x149b('0xe')];};this['value']=0x0;var _0x1c9635=this[_0x149b('0xe')];this[_0x149b('0x10')]=new Score(_0x591c1e);this['cash']=new Cash(_0x591c1e);};function Score(_0x3ae991){var _0x581fdd=0x0;var _0x22a0f6=this;this[_0x149b('0x11')]=![];this[_0x149b('0x12')]=function(){return _0x581fdd;};this['inc']=function(){if(_0x22a0f6[_0x149b('0x11')]){_0x22a0f6[_0x149b('0x11')]=![];_0x3ae991['updateValue']();_0x581fdd+=_0x3ae991[_0x149b('0xe')];gameData[_0x149b('0x13')][_0x149b('0x11')]=!![];canvas[_0x149b('0x14')](cashEvent);};};};function Cash(_0x5e6256){var _0x492f20=0x0;var _0x8eb38f=this;this[_0x149b('0x11')]=![];this['get']=function(){return _0x492f20;};this[_0x149b('0x15')]=function(_0x45fc2d){_0x492f20-=_0x45fc2d;};canvas[_0x149b('0x16')](_0x149b('0x3'),function(){if(_0x8eb38f[_0x149b('0x11')]){_0x8eb38f['unlocked']=![];_0x5e6256[_0x149b('0xd')]();_0x492f20+=_0x5e6256[_0x149b('0xe')];};});};function init(){var _0x3bb5be=new Component(0x0,0x0,canvas['width'],canvas[_0x149b('0x17')]/0x5,_0x149b('0x18'));_0x3bb5be[_0x149b('0x19')]='#808080';_0x3bb5be[_0x149b('0x1a')]();setupRunway();drawRunway();context[_0x149b('0x1b')]();context[_0x149b('0x1c')]='2';context['rect'](canvas[_0x149b('0x17')]/0x3,canvas[_0x149b('0x17')]/0x5,0x2*canvas[_0x149b('0x17')]/0x3,0x2*canvas['width']/0x3);context['stroke']();drawHitbox();buttons[_0x149b('0x1d')]=new Button();buttons[_0x149b('0x1d')][_0x149b('0x1e')]=0x0;buttons[_0x149b('0x1d')][_0x149b('0x19')]=_0x149b('0x1f');buttons[_0x149b('0x20')]=new Button();buttons[_0x149b('0x20')][_0x149b('0x1e')]=0xa;buttons[_0x149b('0x20')]['color']=_0x149b('0x21');buttons[_0x149b('0x22')]=new Button();buttons[_0x149b('0x22')][_0x149b('0x1e')]=0x32;buttons[_0x149b('0x22')][_0x149b('0x19')]=_0x149b('0x23');for(var _0x71ce43=0x0;_0x71ce43<Object[_0x149b('0x24')](buttons)[_0x149b('0x25')];_0x71ce43++){function _0x497e0c(){switch(_0x71ce43){case 0x0:return{'id':0x0,'name':modelJson[_0x71ce43]['data']['type'],'obj':buttons[_0x149b('0x1d')]};case 0x1:return{'id':0x1,'name':modelJson[_0x71ce43][_0x149b('0xf')][_0x149b('0x26')],'obj':buttons[_0x149b('0x20')]};case 0x2:return{'id':0x3,'name':modelJson[_0x71ce43]['data'][_0x149b('0x26')],'obj':buttons[_0x149b('0x22')]};};};var _0x37a28a=_0x497e0c()[_0x149b('0x27')];_0x37a28a['x']=0x0;_0x37a28a['y']=canvas[_0x149b('0x28')]/0x5+canvas[_0x149b('0x28')]/0xa*_0x71ce43;_0x37a28a['width']=canvas[_0x149b('0x17')]/0x3;_0x37a28a['height']=canvas['height']/0xa;_0x37a28a[_0x149b('0x29')]();_0x37a28a[_0x149b('0x2a')][_0x149b('0x19')]=_0x37a28a[_0x149b('0x19')];_0x37a28a[_0x149b('0x2a')]['draw']();_0x37a28a['component'][_0x149b('0x2b')]=new Component(0x0,canvas['width']/0x5+canvas[_0x149b('0x17')]/0xa*_0x71ce43,canvas[_0x149b('0x28')]/0x3/0x3,canvas[_0x149b('0x17')]/0xa,_0x149b('0x2c'));_0x37a28a[_0x149b('0x2a')][_0x149b('0x2b')]['image_uri']=modelJson[_0x71ce43][_0x149b('0xf')][_0x149b('0x2d')];_0x37a28a[_0x149b('0x2a')][_0x149b('0x2b')][_0x149b('0x2e')]=_0x37a28a[_0x149b('0x2a')][_0x149b('0x2b')];_0x37a28a[_0x149b('0x2a')][_0x149b('0x2b')];_0x37a28a[_0x149b('0x2a')]['lock']=new Component(0x0,canvas[_0x149b('0x17')]/0x5+canvas[_0x149b('0x28')]/0xa*_0x71ce43,canvas[_0x149b('0x17')]/0x3/0x3,canvas[_0x149b('0x28')]/0xa,'img');_0x37a28a[_0x149b('0x2a')]['lock']['image_uri']='game/assets/sprites/lock.png';_0x37a28a[_0x149b('0x2a')][_0x149b('0x2f')][_0x149b('0x2e')]=_0x37a28a[_0x149b('0x2a')]['lock'];_0x37a28a[_0x149b('0x2a')][_0x149b('0x2f')][_0x149b('0x1a')]();_0x37a28a[_0x149b('0x2a')][_0x149b('0x30')]=new Component(canvas[_0x149b('0x17')]/0x6,0x1a*canvas['height']/0x64+canvas['height']/0xa*_0x71ce43,canvas[_0x149b('0x17')]/0x3/0x3,canvas[_0x149b('0x28')]/0xa,_0x149b('0x31'));_0x37a28a[_0x149b('0x2a')][_0x149b('0x30')]['text']=_0x497e0c()[_0x149b('0x32')][_0x149b('0x33')](0x0)[_0x149b('0x34')]()+_0x497e0c()['name'][_0x149b('0x35')](0x1);_0x37a28a[_0x149b('0x2a')][_0x149b('0x30')][_0x149b('0x19')]=_0x149b('0x36');_0x37a28a[_0x149b('0x2a')][_0x149b('0x30')][_0x149b('0x37')]=_0x149b('0x38');_0x37a28a[_0x149b('0x2a')]['value']=new Component(canvas[_0x149b('0x17')]/0x8,0x1a*canvas['height']/0x64+canvas[_0x149b('0x28')]/0xa*_0x71ce43,canvas['width']/0x3/0x2,canvas[_0x149b('0x17')]/0xa,_0x149b('0x31'));_0x37a28a[_0x149b('0x2a')][_0x149b('0xe')]['text']='Locked:\x20$'+_0x37a28a[_0x149b('0x1e')];_0x37a28a[_0x149b('0x2a')][_0x149b('0xe')][_0x149b('0x19')]=_0x149b('0x36');_0x37a28a['component'][_0x149b('0xe')][_0x149b('0x37')]=_0x149b('0x38');_0x37a28a[_0x149b('0x2a')][_0x149b('0xe')]['draw']();_0x37a28a[_0x149b('0x2a')][_0x149b('0x39')]();};model=new Image();model[_0x149b('0x3a')]=function(){context[_0x149b('0x3b')](this,canvas[_0x149b('0x17')]/0x3+0x2*canvas[_0x149b('0x17')]/0x9,canvas[_0x149b('0x17')]/0x5+0x2*canvas[_0x149b('0x17')]/0x9,0x2*canvas[_0x149b('0x17')]/0x9,0x2*canvas[_0x149b('0x17')]/0x9);};score_data[_0x149b('0x3c')]=new Component(0x2*canvas[_0x149b('0x17')]/0x3-0x2*canvas[_0x149b('0x17')]/0x6,canvas['width']/0x5+0x2*canvas[_0x149b('0x17')]/0x3+canvas['width']/0xa);score_data[_0x149b('0x3c')]['type']=_0x149b('0x31');score_data[_0x149b('0x3c')][_0x149b('0x37')]=_0x149b('0x38');score_data['score_title'][_0x149b('0x19')]=_0x149b('0x1f');score_data['score_title'][_0x149b('0x31')]=_0x149b('0x3d');score_data[_0x149b('0x3c')][_0x149b('0x1a')]();score_data[_0x149b('0x3e')]=new Component(0x2*canvas[_0x149b('0x17')]/0x3-0x2*canvas[_0x149b('0x17')]/0x6+0x64,canvas[_0x149b('0x17')]/0x5+0x2*canvas[_0x149b('0x17')]/0x3+canvas[_0x149b('0x17')]/0xa);score_data[_0x149b('0x3e')][_0x149b('0x26')]=_0x149b('0x31');score_data[_0x149b('0x3e')]['font']=_0x149b('0x38');score_data[_0x149b('0x3e')][_0x149b('0x19')]=_0x149b('0x1f');score_data['score_value']['text']=gameData[_0x149b('0x10')][_0x149b('0x12')]();score_data[_0x149b('0x3e')][_0x149b('0x1a')]();score_data['score_value'][_0x149b('0x3f')]=new Component(0x2*canvas['width']/0x3-0x2*canvas[_0x149b('0x17')]/0x6+0x64,canvas[_0x149b('0x17')]/0x5+0x2*canvas[_0x149b('0x17')]/0x3+canvas[_0x149b('0x17')]/0xa,0x5*canvas[_0x149b('0x17')]/0x2,-0x4*canvas['width']/0x78,_0x149b('0x18'));score_data['score_value'][_0x149b('0x3f')][_0x149b('0x19')]='#ffffff';};function Component(_0x454d51,_0x4ad097,_0x5133bc,_0x392d61,_0x5188d4){this['x']=_0x454d51;this['y']=_0x4ad097;this['width']=_0x5133bc;this[_0x149b('0x28')]=_0x392d61;this[_0x149b('0x26')]=_0x5188d4;this[_0x149b('0x1a')]=function(){switch(this[_0x149b('0x26')]){case'rect':context['beginPath']();context[_0x149b('0x40')]=this[_0x149b('0x19')];context[_0x149b('0x1c')]='0px';context['fillRect'](this['x'],this['y'],this[_0x149b('0x17')],this[_0x149b('0x28')]);context[_0x149b('0x41')]();break;case'outline':context[_0x149b('0x1b')]();context['fillStyle']=color;context[_0x149b('0x1c')]='2px';context['rect'](this['x'],this['y'],this[_0x149b('0x17')],this[_0x149b('0x28')]);context['stroke']();break;case _0x149b('0x2c'):var _0x1ffd50=this;this[_0x149b('0x42')]=new Image();this[_0x149b('0x42')]['onload']=function(){context['drawImage'](this,_0x1ffd50['x'],_0x1ffd50['y'],_0x1ffd50[_0x149b('0x17')],_0x1ffd50['height']);};this['image'][_0x149b('0x43')]=_0x1ffd50[_0x149b('0x44')];break;case _0x149b('0x31'):context[_0x149b('0x1b')]();context['fillStyle']=this[_0x149b('0x19')];context[_0x149b('0x37')]=this[_0x149b('0x37')];context['fillText'](this[_0x149b('0x31')],this['x'],this['y'],this[_0x149b('0x17')],this[_0x149b('0x28')]);context[_0x149b('0x41')]();break;};};this[_0x149b('0x39')]=function(){if(this[_0x149b('0x45')]){context[_0x149b('0x1b')]();context[_0x149b('0x40')]=this[_0x149b('0x45')];context[_0x149b('0x1c')]=_0x149b('0x46');context[_0x149b('0x47')](this['x'],this['y'],this[_0x149b('0x17')],this[_0x149b('0x28')]);context[_0x149b('0x41')]();}else{context[_0x149b('0x1b')]();context[_0x149b('0x1c')]='0px';context[_0x149b('0x48')](this['x'],this['y'],this[_0x149b('0x17')],this[_0x149b('0x28')]);context[_0x149b('0x41')]();};};this['parent'];this[_0x149b('0x42')];this[_0x149b('0x49')];this[_0x149b('0x19')];this['clearColor'];this[_0x149b('0x37')];this[_0x149b('0x31')];this[_0x149b('0x4a')];this[_0x149b('0x4b')];this['debugId'];};function Button(_0x5d57ef,_0x18a182,_0x49fa48,_0x533b47,_0x3a1301){this['x']=_0x5d57ef;this['y']=_0x18a182;this[_0x149b('0x17')]=_0x49fa48;this[_0x149b('0x28')]=_0x533b47;this[_0x149b('0x19')]=_0x3a1301;this['init']=function(){this[_0x149b('0x2a')]=new Component(this['x'],this['y'],this['width'],this['height'],'rect');this['component'][_0x149b('0x19')]=this[_0x149b('0x19')];this[_0x149b('0x2a')][_0x149b('0x45')]=_0x149b('0x4c');};this[_0x149b('0x4d')]=function(_0xec5e86){if(_0xec5e86['x']<this[_0x149b('0x2a')]['x']+this[_0x149b('0x2a')]['width']&&_0xec5e86['x']>this[_0x149b('0x2a')]['x']&&_0xec5e86['y']<this[_0x149b('0x2a')]['y']+this[_0x149b('0x2a')][_0x149b('0x28')]&&_0xec5e86['y']>this[_0x149b('0x2a')]['y']){return!![];}else{return![];};};this[_0x149b('0x4e')]=function(){if(this[_0x149b('0x4f')]&&!this['purchased']&&gameData[_0x149b('0x13')][_0x149b('0x12')]()>=this[_0x149b('0x1e')]){gameData['cash'][_0x149b('0x15')](this[_0x149b('0x1e')]);};};this['cost'];this[_0x149b('0x4f')];this[_0x149b('0x50')];};function setupRunway(){for(var _0x6c13ec=0x0;_0x6c13ec<0x5;_0x6c13ec++){assets[_0x149b('0x51')][_0x6c13ec]=new Component(canvas[_0x149b('0x17')]/0x5*_0x6c13ec,0x0,canvas[_0x149b('0x17')]/0x5,canvas[_0x149b('0x17')]/0x5,_0x149b('0x2c'));assets['runway_models'][_0x6c13ec][_0x149b('0x52')]='runway'+_0x6c13ec;if(_0x6c13ec<assets[_0x149b('0x51')][_0x149b('0x25')]-0x1){assets[_0x149b('0x51')][_0x6c13ec][_0x149b('0x44')]=_0x149b('0x53');}else{assets['runway_models'][_0x6c13ec]['image_uri']=_0x149b('0x54');};};};function drawRunway(){for(var _0x13ece5=0x0;_0x13ece5<0x5;_0x13ece5++){assets[_0x149b('0x51')][_0x13ece5][_0x149b('0x1a')]();};};function drawHitbox(){context[_0x149b('0x1b')]();context[_0x149b('0x40')]='#ff0000ff';var _0xf61759=canvas[_0x149b('0x17')]/0x3;var _0x548c31=canvas[_0x149b('0x17')]/0x5;var _0x189eb7=0x2*canvas[_0x149b('0x17')]/0x3;context[_0x149b('0x47')](_0xf61759+_0x189eb7/0x3,_0x548c31+_0x189eb7/0x3,_0x189eb7/0x3,_0x189eb7/0x3);context[_0x149b('0x41')]();click=new Button(_0xf61759+_0x189eb7/0x3,_0x548c31+_0x189eb7/0x3,_0x189eb7/0x3,_0x189eb7/0x3,_0x149b('0x1f'));click['init']();};function Pos(_0x5399be,_0x2fd7ee){this['x']=_0x5399be;this['y']=_0x2fd7ee;};function updateScore(_0x2812fe){if(_0x2812fe==gameData[_0x149b('0x10')][_0x149b('0x12')]()){score_data[_0x149b('0x3e')][_0x149b('0x3f')][_0x149b('0x1a')]();score_data[_0x149b('0x3e')]['text']=_0x2812fe;score_data[_0x149b('0x3e')]['draw']();};};canvas[_0x149b('0x16')](_0x149b('0x55'),_0x50df33=>{var _0x5e6cd0=new Pos(_0x50df33[_0x149b('0x56')]-0x7,_0x50df33[_0x149b('0x57')]-0x7);if(click[_0x149b('0x4d')](_0x5e6cd0)&&gameData[_0x149b('0xc')]!=-0x1){gameData[_0x149b('0xb')]++;if(modelJson[gameData[_0x149b('0xc')]][_0x149b('0xf')][_0x149b('0x58')]==gameData[_0x149b('0xb')]){gameData[_0x149b('0x10')][_0x149b('0x11')]=!![];gameData['score']['inc']();updateScore(gameData[_0x149b('0x10')][_0x149b('0x12')]());var _0x1f28c0=new Component(canvas[_0x149b('0x17')],Math[_0x149b('0x59')]()*0x32,canvas['width']/0xa,canvas[_0x149b('0x17')]/0xa,_0x149b('0x2c'));_0x1f28c0[_0x149b('0x44')]=modelJson[gameData[_0x149b('0xc')]][_0x149b('0xf')][_0x149b('0x2d')];_0x1f28c0['parent']=_0x1f28c0;assets[_0x149b('0x5a')]['push'](_0x1f28c0);if(!looping){canvas[_0x149b('0x14')](planeEvent);};};if(gameData[_0x149b('0xb')]>=modelJson[gameData[_0x149b('0xc')]][_0x149b('0xf')][_0x149b('0x58')]){gameData[_0x149b('0xb')]=0x0;};drawHitbox();model['src']=modelJson[gameData[_0x149b('0xc')]][_0x149b('0x5b')][gameData[_0x149b('0xb')]][_0x149b('0x43')];}else{for(var _0x40c2cc=0x0;_0x40c2cc<Object['keys'](buttons)[_0x149b('0x25')];_0x40c2cc++){function _0x2b2e9e(){switch(_0x40c2cc){case 0x0:return{'id':0x0,'name':modelJson[_0x40c2cc][_0x149b('0xf')][_0x149b('0x26')],'obj':buttons['paper']};case 0x1:return{'id':0x1,'name':modelJson[_0x40c2cc][_0x149b('0xf')][_0x149b('0x26')],'obj':buttons[_0x149b('0x20')]};case 0x2:return{'id':0x3,'name':modelJson[_0x40c2cc][_0x149b('0xf')][_0x149b('0x26')],'obj':buttons[_0x149b('0x22')]};};};var _0x2a5e3a=_0x2b2e9e()[_0x149b('0x27')];if(_0x2a5e3a[_0x149b('0x4d')](_0x5e6cd0)){if(_0x2a5e3a[_0x149b('0x50')]&&gameData['typeId']!=_0x40c2cc){gameData['typeId']=_0x40c2cc;gameData[_0x149b('0xb')]=0x0;drawHitbox();model['src']=modelJson[_0x40c2cc][_0x149b('0x5b')][gameData[_0x149b('0xb')]][_0x149b('0x43')];}else if(!_0x2a5e3a[_0x149b('0x50')]&&gameData[_0x149b('0x13')][_0x149b('0x12')]()>=_0x2a5e3a[_0x149b('0x1e')]){_0x2a5e3a['component'][_0x149b('0x1a')]();_0x2a5e3a[_0x149b('0x2a')][_0x149b('0x2b')]['draw']();_0x2a5e3a[_0x149b('0x2a')][_0x149b('0x30')]['draw']();_0x2a5e3a[_0x149b('0x50')]=!![];gameData[_0x149b('0xc')]=_0x40c2cc;gameData[_0x149b('0xb')]=0x0;drawHitbox();model[_0x149b('0x43')]=modelJson[_0x40c2cc][_0x149b('0x5b')][gameData[_0x149b('0xb')]][_0x149b('0x43')];gameData[_0x149b('0x13')][_0x149b('0x15')](buttons['paper'][_0x149b('0x1e')]);};};};};});function animateRunway(_0x208d1c){looping=!![];for(var _0x32363e=0x0;_0x32363e<assets['runway_models'][_0x149b('0x25')];_0x32363e++){assets[_0x149b('0x51')][_0x32363e][_0x149b('0x1a')]();};for(var _0x32363e=0x0;_0x32363e<assets[_0x149b('0x5a')][_0x149b('0x25')];_0x32363e++){if(!assets[_0x149b('0x5a')][_0x32363e][_0x149b('0x4a')]){assets[_0x149b('0x5a')][_0x32363e]['timestamp_start']=_0x208d1c;};assets[_0x149b('0x5a')][_0x32363e]['timestamp_progress']=_0x208d1c-assets['plane_models'][_0x32363e]['timestamp_start'];assets[_0x149b('0x5a')][_0x32363e]['draw']();assets[_0x149b('0x5a')][_0x32363e]['x']=canvas[_0x149b('0x17')]-0.1*assets[_0x149b('0x5a')][_0x32363e][_0x149b('0x4b')];if(assets[_0x149b('0x5a')][_0x32363e]['x']<-0x23){assets[_0x149b('0x5a')][_0x149b('0x5c')]();};};if(assets[_0x149b('0x5a')]!=0x0){window[_0x149b('0x5d')](animateRunway);}else{looping=![];};};window[_0x149b('0x3a')]=init();canvas[_0x149b('0x16')]('plane_models_change',function(){window['requestAnimationFrame'](animateRunway);});