const _0x47f3a7=_0x3f27;function _0x3695(){const _0x55a216=['existsSync','execPath','resources/app/versions/','2JzNSWm','join','resolve','12676aBwTHA','1760444itmNNi','./resources/app/wrapper.node','923712YgQPdF','7937810qCZZIq','8vcpzdC','405774JdBBvl','620316PrckVj','curVersion','dirname','/wrapper.node','6rAUASi','789545TJToun'];_0x3695=function(){return _0x55a216;};return _0x3695();}(function(_0x4d9d3c,_0x4f9b61){const _0x39d869=_0x3f27,_0x3eabb3=_0x4d9d3c();while(!![]){try{const _0x54695e=parseInt(_0x39d869(0x1e9))/0x1*(-parseInt(_0x39d869(0x1ec))/0x2)+-parseInt(_0x39d869(0x1ef))/0x3+parseInt(_0x39d869(0x1f3))/0x4+-parseInt(_0x39d869(0x1f8))/0x5*(parseInt(_0x39d869(0x1f7))/0x6)+-parseInt(_0x39d869(0x1ed))/0x7+-parseInt(_0x39d869(0x1f1))/0x8*(parseInt(_0x39d869(0x1f2))/0x9)+parseInt(_0x39d869(0x1f0))/0xa;if(_0x54695e===_0x4f9b61)break;else _0x3eabb3['push'](_0x3eabb3['shift']());}catch(_0x4f245b){_0x3eabb3['push'](_0x3eabb3['shift']());}}}(_0x3695,0x2a6e1));import _0x3a1f11 from'node:path';function _0x3f27(_0x12c9ff,_0x827aeb){const _0x369557=_0x3695();return _0x3f27=function(_0x3f27cd,_0x53b59f){_0x3f27cd=_0x3f27cd-0x1e7;let _0x452d5d=_0x369557[_0x3f27cd];return _0x452d5d;},_0x3f27(_0x12c9ff,_0x827aeb);}import _0x2ed59d from'node:fs';import{qqVersionConfigInfo}from'@/common/utils/QQBasicInfo';let wrapperNodePath=_0x3a1f11[_0x47f3a7(0x1eb)](_0x3a1f11[_0x47f3a7(0x1f5)](process[_0x47f3a7(0x1e7)]),_0x47f3a7(0x1ee));!_0x2ed59d[_0x47f3a7(0x1f9)](wrapperNodePath)&&(wrapperNodePath=_0x3a1f11[_0x47f3a7(0x1ea)](_0x3a1f11['dirname'](process['execPath']),_0x47f3a7(0x1e8)+qqVersionConfigInfo[_0x47f3a7(0x1f4)]+_0x47f3a7(0x1f6)));const QQWrapper=require(wrapperNodePath);export default QQWrapper;