const _0x3b7c7c=_0x2246;(function(_0x48f2de,_0x6cf367){const _0x4b39ba=_0x2246,_0x51ee6a=_0x48f2de();while(!![]){try{const _0x25cb27=parseInt(_0x4b39ba(0x19c))/0x1+-parseInt(_0x4b39ba(0x191))/0x2*(-parseInt(_0x4b39ba(0x1bc))/0x3)+parseInt(_0x4b39ba(0x196))/0x4*(parseInt(_0x4b39ba(0x192))/0x5)+-parseInt(_0x4b39ba(0x190))/0x6+-parseInt(_0x4b39ba(0x19b))/0x7+-parseInt(_0x4b39ba(0x1ae))/0x8*(parseInt(_0x4b39ba(0x1b3))/0x9)+-parseInt(_0x4b39ba(0x1af))/0xa;if(_0x25cb27===_0x6cf367)break;else _0x51ee6a['push'](_0x51ee6a['shift']());}catch(_0x4d93f5){_0x51ee6a['push'](_0x51ee6a['shift']());}}}(_0x3d6b,0x211c2));import{napCatCore}from'@/core';import{GroupListener}from'@/core/index';import{uid2UinMap}from'@/core/data';import{logDebug}from'@/common/utils/log';import{randomUUID}from'crypto';const groupMemberTasks=new Map(),groupListener=new GroupListener();groupListener['onGroupListUpdate']=(_0x21d7a1,_0x1436d4)=>{const _0x1ad3c7=_0x2246,_0x20bb6d={'ZKUvC':function(_0x15dc66,_0x4b9280,_0x2f90ac){return _0x15dc66(_0x4b9280,_0x2f90ac);}};for(const [_0x47a628,_0x5edbc4]of groupMemberTasks){_0x20bb6d[_0x1ad3c7(0x1a0)](_0x5edbc4,_0x21d7a1,_0x1436d4),groupMemberTasks[_0x1ad3c7(0x1b4)](_0x47a628);}},setTimeout(()=>{napCatCore['onLoginSuccess'](()=>{const _0x33ae23=_0x2246;napCatCore[_0x33ae23(0x1b1)](groupListener);});},0x64);function _0x2246(_0x7a34f5,_0x1c7407){const _0x3d6b08=_0x3d6b();return _0x2246=function(_0x22460e,_0x2ab517){_0x22460e=_0x22460e-0x18f;let _0x16d75a=_0x3d6b08[_0x22460e];return _0x16d75a;},_0x2246(_0x7a34f5,_0x1c7407);}export class NTQQGroupApi{static async[_0x3b7c7c(0x1c3)](_0x3043f2=![]){const _0x46f124=_0x3b7c7c,_0x3256cc={'muBUe':function(_0x2ce87b,_0x30182d,_0x2874ab){return _0x2ce87b(_0x30182d,_0x2874ab);},'FYdnl':_0x46f124(0x1bb),'wsOaT':function(_0x6e618,_0x389e90,_0x435686){return _0x6e618(_0x389e90,_0x435686);}};let _0x388ff9=![];return new Promise((_0x31c0df,_0x527c2b)=>{const _0x284a6d=_0x46f124,_0x302097={'UhTRD':function(_0x4d9f1c,_0x424db3){return _0x4d9f1c(_0x424db3);},'BLnUn':_0x3256cc['FYdnl']};_0x3256cc[_0x284a6d(0x1a2)](setTimeout,()=>{const _0x25cea7=_0x284a6d;!_0x388ff9&&(_0x302097[_0x25cea7(0x193)](logDebug,_0x302097[_0x25cea7(0x19e)]),_0x302097[_0x25cea7(0x193)](_0x527c2b,_0x302097[_0x25cea7(0x19e)]));},0x1388);const _0x3ed725=(_0x5d6014,_0x12dc9e)=>{const _0x726b7=_0x284a6d;_0x388ff9=!![],_0x3256cc['muBUe'](logDebug,_0x726b7(0x1ba),_0x12dc9e),_0x31c0df(_0x12dc9e);};groupMemberTasks['set'](randomUUID(),_0x3ed725),napCatCore[_0x284a6d(0x1b8)][_0x284a6d(0x1a9)]()[_0x284a6d(0x1bf)](_0x3043f2)[_0x284a6d(0x1bd)]();});}static async[_0x3b7c7c(0x1c4)](_0x4b4deb,_0x37cd16=0xbb8){const _0x565443=_0x3b7c7c,_0x456830={'WYMhx':_0x565443(0x194),'jgRIr':function(_0x54c840,_0x209c4c){return _0x54c840!==_0x209c4c;},'yZbfm':function(_0x4be442,_0xa12b0b,_0x5bc0bf){return _0x4be442(_0xa12b0b,_0x5bc0bf);}},_0x3b3460=napCatCore['session'][_0x565443(0x1a9)](),_0x4bcc8b=_0x3b3460[_0x565443(0x198)](_0x4b4deb,_0x456830[_0x565443(0x1c0)]),_0x59829d=await _0x3b3460[_0x565443(0x1a6)](_0x4bcc8b,undefined,_0x37cd16);if(_0x456830[_0x565443(0x199)](_0x59829d['errCode'],0x0))throw _0x565443(0x1b6)+_0x59829d['errMsg'];return _0x456830[_0x565443(0x195)](logDebug,_0x565443(0x1a8)+_0x4b4deb+_0x565443(0x19d),_0x565443(0x1b7)+_0x59829d[_0x565443(0x1c1)][_0x565443(0x1a3)]),_0x59829d['result'][_0x565443(0x19a)][_0x565443(0x1ab)](_0x9cd7f3=>{const _0x240fcc=_0x565443;uid2UinMap[_0x9cd7f3[_0x240fcc(0x1be)]]=_0x9cd7f3[_0x240fcc(0x1c5)];}),_0x59829d['result'][_0x565443(0x19a)];}static async[_0x3b7c7c(0x1a5)](){}static async[_0x3b7c7c(0x1a4)](){}static async[_0x3b7c7c(0x1b2)](_0x71680b,_0x585c4d,_0x16d3b8){const _0x583a2a=_0x3b7c7c,_0x35806d={'fFEQU':function(_0x5cd70c,_0xd75dd){return _0x5cd70c||_0xd75dd;}};return napCatCore[_0x583a2a(0x1b8)][_0x583a2a(0x1a9)]()[_0x583a2a(0x1a1)](![],{'operateType':_0x585c4d,'targetMsg':{'seq':_0x71680b[_0x583a2a(0x1b5)],'type':_0x71680b[_0x583a2a(0x1c2)],'groupCode':_0x71680b[_0x583a2a(0x1ad)][_0x583a2a(0x1aa)],'postscript':_0x35806d[_0x583a2a(0x1b9)](_0x16d3b8,'')}});}static async[_0x3b7c7c(0x19f)](_0x15b124){const _0x17cb64=_0x3b7c7c;return napCatCore['session'][_0x17cb64(0x1a9)]()[_0x17cb64(0x19f)](_0x15b124);}static async[_0x3b7c7c(0x1b0)](_0x1f3d55,_0x5f1abf,_0x619fc3=![],_0x3bfab4=''){const _0x4c523d=_0x3b7c7c;return napCatCore[_0x4c523d(0x1b8)]['getGroupService']()[_0x4c523d(0x1b0)](_0x1f3d55,_0x5f1abf,_0x619fc3,_0x3bfab4);}static async['banMember'](_0x5f3fee,_0x227a52){const _0x3300ec=_0x3b7c7c;return napCatCore['session'][_0x3300ec(0x1a9)]()[_0x3300ec(0x18f)](_0x5f3fee,_0x227a52);}static async[_0x3b7c7c(0x1ac)](_0x4b0446,_0xaf9151){const _0x4a9302=_0x3b7c7c;return napCatCore[_0x4a9302(0x1b8)][_0x4a9302(0x1a9)]()['setGroupShutUp'](_0x4b0446,_0xaf9151);}static async['setMemberCard'](_0x1cfbb7,_0x1438bf,_0x2bbd71){const _0x4d96bd=_0x3b7c7c;return napCatCore['session'][_0x4d96bd(0x1a9)]()['modifyMemberCardName'](_0x1cfbb7,_0x1438bf,_0x2bbd71);}static async['setMemberRole'](_0x11f020,_0x2a635c,_0x24c3aa){const _0x4a5b7d=_0x3b7c7c;return napCatCore[_0x4a5b7d(0x1b8)][_0x4a5b7d(0x1a9)]()[_0x4a5b7d(0x1a7)](_0x11f020,_0x2a635c,_0x24c3aa);}static async[_0x3b7c7c(0x197)](_0x5adc10,_0x5bb120){const _0x361286=_0x3b7c7c;return napCatCore[_0x361286(0x1b8)][_0x361286(0x1a9)]()['modifyGroupName'](_0x5adc10,_0x5bb120,![]);}static async['setGroupTitle'](_0x453dc9,_0x2ab499,_0x44c1a6){}static['publishGroupBulletin'](_0x20eebf,_0x2908b0,_0x46f6f3){}}function _0x3d6b(){const _0x3b8e43=['BLnUn','quitGroup','ZKUvC','operateSysNotify','wsOaT','finish','getGroupIgnoreNotifies','getGroupNotifies','getNextMemberList','modifyMemberRole','获取群(','getGroupService','groupCode','forEach','banGroup','group','736760zFcpbY','1096510DIRhjK','kickMember','addListener','handleGroupRequest','18dBZXYf','delete','seq','获取群成员列表出错,','finish:\x20','session','fFEQU','获取群列表完成','获取群列表超时','3OROXXY','then','uid','getGroupList','WYMhx','result','type','getGroups','getGroupMembers','uin','setMemberShutUp','187992dQtXnJ','521044uihurn','5HZyEPO','UhTRD','groupMemberList_MainWindow','yZbfm','489008ynusxE','setGroupName','createMemberListScene','jgRIr','infos','1197693yWJOCh','249116mDFbpF',')成员列表结果:'];_0x3d6b=function(){return _0x3b8e43;};return _0x3d6b();}