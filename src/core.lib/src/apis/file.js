const _0x4524d8=_0x24fa;(function(_0x597381,_0x2985c3){const _0x23673f=_0x24fa,_0x415d1b=_0x597381();while(!![]){try{const _0x20c1cd=-parseInt(_0x23673f(0x10d))/0x1+-parseInt(_0x23673f(0xec))/0x2+-parseInt(_0x23673f(0x13f))/0x3+-parseInt(_0x23673f(0x13e))/0x4*(-parseInt(_0x23673f(0x100))/0x5)+-parseInt(_0x23673f(0x13c))/0x6*(parseInt(_0x23673f(0x139))/0x7)+parseInt(_0x23673f(0x116))/0x8+parseInt(_0x23673f(0x131))/0x9*(parseInt(_0x23673f(0x111))/0xa);if(_0x20c1cd===_0x2985c3)break;else _0x415d1b['push'](_0x415d1b['shift']());}catch(_0x3c9214){_0x415d1b['push'](_0x415d1b['shift']());}}}(_0x291c,0xb6900));import{ChatType,ElementType,IMAGE_HTTP_HOST,IMAGE_HTTP_HOST_NT}from'@/core/entities';import _0x1a2245 from'path';function _0x291c(){const _0x3903de=['find','getImageSize','getDesktopTmpPath','getImageUrl','getRKey','scanCache','addListener','检查rkey是否有效','kwIXS','getMsgService','xcipk','getFileType','getFileCacheInfo',',\x20rkey:','clearCacheDataByKeys','DLIJk','get','EANIE','getFileSize','221085QemaZB','now','YrcGH','开始调用moeHook获取rkey','delete','hookApi\x20is\x20not\x20available','hotUpdate','picElement','session','获取图片rkey...','addCacheScanedPaths','start\x20downloadMedia','getStorageCleanService','658068InLJdh','DZjvx','statusCode','YrDIe','20gmxAoT','basename','bpDny','existsSync','ygmbT','10804056QVAaMu','yDLAg','peerUid','onRichMediaDownloadComplete','chatType','BkqHG','GxWlu','copyFile','VUJsM','VikLT','sduYl','yyufu','receive\x20downloadMedia\x20task','YLoas','md5HexStr','xzXDa','图片rkey有误','fRbEq','downloadMedia','util','setCacheSilentScan','set','onLoginSuccess','startsWith','WeOeD','error','tXUQH','14757453QlrHLs','/gchatpic_new/0/0-0-','clearChatCacheInfo','filePath','xlJiC','originImageUrl','getHotUpdateCachePath','join','21OPTXpa','rkey过期或着未获取,\x20url:','nCRML','2805798BNafLX','downloadPath','20fqmUpu','3132567QoycLf','getCacheSessionPathList','fileTypeFromFile','addCacheScannedPaths','Licgl','jwMeM','msgId','UGeef','图片rkey获取失败','akBQK','/download','getRichMediaFilePathForGuild','gibME','PSWUd','uJDUc','xwjcP','ext','sourcePath','catch','xgVKP','图片rkey有效','VvyZE','includes','drGKh','oKAem','tegqS','clearCache','defaultFileDownloadPath','clearChatCache','1996188ysfwOr'];_0x291c=function(){return _0x3903de;};return _0x291c();}import _0x41d03a from'fs';import _0x926685 from'fs/promises';import{logDebug,logError}from'@/common/utils/log';import{napCatCore}from'@/core';import{calculateFileMD5}from'@/common/utils/file';import*as _0x2e9c62 from'file-type';import{MsgListener}from'@/core/listeners';import _0x3c648e from'image-size';import{sessionConfig}from'@/core/sessionConfig';import{hookApi}from'@/core/external/hook';import{randomUUID}from'crypto';import{AsyncQueue}from'@/common/utils/AsyncQueue';function _0x24fa(_0x41d7a3,_0xc7763f){const _0x291cc4=_0x291c();return _0x24fa=function(_0x24fa7f,_0x104354){_0x24fa7f=_0x24fa7f-0xe6;let _0x3b04fb=_0x291cc4[_0x24fa7f];return _0x3b04fb;},_0x24fa(_0x41d7a3,_0xc7763f);}import{sleep}from'@/common/utils/helper';import _0x35b275 from'https';let privateImageRKey='',groupImageRKey='',lastGetPrivateRKeyTime=0x0,lastGetGroupRKeyTime=0x0;const rkeyExpireTime=0x3e8*0x3c*0x1e,getRKeyTaskQueue=new AsyncQueue(),downloadMediaTasks=new Map(),downloadMediaListener=new MsgListener();downloadMediaListener[_0x4524d8(0x119)]=_0x5f3432=>{const _0x4e9b03=_0x4524d8;for(const [_0x4597f6,_0x1e2525]of downloadMediaTasks){_0x1e2525(_0x5f3432),downloadMediaTasks[_0x4e9b03(0x104)](_0x4597f6);}},setTimeout(()=>{const _0x55b7e8=_0x4524d8;napCatCore[_0x55b7e8(0x12c)](()=>{const _0x1885d5=_0x55b7e8;napCatCore[_0x1885d5(0xf3)](downloadMediaListener);});},0x64);export class NTQQFileApi{static async['getFileType'](_0x4b8b1a){const _0xf8cd50=_0x4524d8;return _0x2e9c62[_0xf8cd50(0x141)](_0x4b8b1a);}static async[_0x4524d8(0x11d)](_0x4e40b5,_0x29c872){const _0x46b029=_0x4524d8;await napCatCore[_0x46b029(0x129)][_0x46b029(0x11d)](_0x4e40b5,_0x29c872);}static async['getFileSize'](_0x343d84){const _0x3a45f7=_0x4524d8;return await napCatCore[_0x3a45f7(0x129)][_0x3a45f7(0xff)](_0x343d84);}static async['uploadFile'](_0x34e24d,_0x38cf50=ElementType['PIC'],_0x1f65c2=0x0){const _0x58e67c=_0x4524d8,_0x2d5ba7={'DLIJk':function(_0x32b09e,_0x1c60de){return _0x32b09e+_0x1c60de;},'xwjcP':function(_0x4d1a8d,_0x15bd2d){return _0x4d1a8d===_0x15bd2d;}},_0x1a609f=await calculateFileMD5(_0x34e24d);let _0x5ec464=(await NTQQFileApi[_0x58e67c(0xf8)](_0x34e24d))?.[_0x58e67c(0x14f)]||'';_0x5ec464&&(_0x5ec464=_0x2d5ba7[_0x58e67c(0xfc)]('.',_0x5ec464));let _0x47ed03=''+_0x1a2245[_0x58e67c(0x112)](_0x34e24d);_0x2d5ba7[_0x58e67c(0x14e)](_0x47ed03['indexOf']('.'),-0x1)&&(_0x47ed03+=_0x5ec464);const _0x183de4=napCatCore[_0x58e67c(0x108)][_0x58e67c(0xf6)]()[_0x58e67c(0x14a)]({'md5HexStr':_0x1a609f,'fileName':_0x47ed03,'elementType':_0x38cf50,'elementSubType':_0x1f65c2,'thumbSize':0x0,'needCreate':!![],'downloadType':0x1,'file_uuid':''});await NTQQFileApi['copyFile'](_0x34e24d,_0x183de4);const _0x2e2561=await NTQQFileApi[_0x58e67c(0xff)](_0x34e24d);return{'md5':_0x1a609f,'fileName':_0x47ed03,'path':_0x183de4,'fileSize':_0x2e2561,'ext':_0x5ec464};}static async[_0x4524d8(0x128)](_0x37fe91,_0x2de1a8,_0x1a106a,_0x4b5403,_0x58d238,_0x4c8580,_0x419cba=0x3e8*0x3c*0x2,_0x38f7b0=![]){const _0x4aba6a=_0x4524d8,_0x4969b8={'hEiQL':'downloadMedia\x20complete','uJDUc':function(_0x8884d8,_0x4051d2){return _0x8884d8===_0x4051d2;},'GBJdJ':_0x4aba6a(0x13d),'VUJsM':function(_0x127b46,_0x3c7b62){return _0x127b46(_0x3c7b62);},'YrcGH':'下载超时','yyufu':function(_0x43b48d){return _0x43b48d();},'akBQK':function(_0x2dc11f,_0x19bdde,_0x114442,_0x341b57,_0x5507c2,_0x155c3b,_0x3d39e9,_0x3df3bc,_0x1f6dc0,_0x4a0a64){return _0x2dc11f(_0x19bdde,_0x114442,_0x341b57,_0x5507c2,_0x155c3b,_0x3d39e9,_0x3df3bc,_0x1f6dc0,_0x4a0a64);},'sduYl':_0x4aba6a(0x122),'xcipk':function(_0x4375fd,_0x194afb,_0x3e29b1,_0x729e83,_0x19183c,_0xce73c9,_0x4c2add,_0x14d22d,_0x1e4e2b,_0xc57434){return _0x4375fd(_0x194afb,_0x3e29b1,_0x729e83,_0x19183c,_0xce73c9,_0x4c2add,_0x14d22d,_0x1e4e2b,_0xc57434);},'DZjvx':_0x4aba6a(0x10b)};_0x4969b8[_0x4aba6a(0x148)](logDebug,_0x4969b8[_0x4aba6a(0x120)],_0x37fe91,_0x2de1a8,_0x1a106a,_0x4b5403,_0x58d238,_0x4c8580,_0x419cba,_0x38f7b0);if(_0x4c8580&&_0x41d03a[_0x4aba6a(0x114)](_0x4c8580)){if(_0x38f7b0)try{await _0x926685['unlink'](_0x4c8580);}catch(_0x46b984){}else return _0x4c8580;}return _0x4969b8[_0x4aba6a(0xf7)](logDebug,_0x4969b8[_0x4aba6a(0x10e)],_0x37fe91,_0x2de1a8,_0x1a106a,_0x4b5403,_0x58d238,_0x4c8580,_0x419cba,_0x38f7b0),new Promise((_0x3d2b16,_0x4cf616)=>{const _0x4925c3=_0x4aba6a;let _0x48527e=![];const _0x185df7=_0x373973=>{const _0x2bb20e=_0x24fa;logDebug(_0x4969b8['hEiQL'],_0x373973,_0x37fe91);if(_0x4969b8[_0x2bb20e(0x14d)](_0x373973[_0x2bb20e(0x145)],_0x37fe91)){_0x48527e=!![];let _0x17489a=_0x373973[_0x2bb20e(0x134)];if(_0x17489a[_0x2bb20e(0x12d)]('\x5c')){const _0x1d0668=sessionConfig[_0x2bb20e(0xea)];logDebug(_0x4969b8['GBJdJ'],_0x1d0668),_0x17489a=_0x1a2245[_0x2bb20e(0x138)](_0x1d0668,_0x17489a);}_0x4969b8[_0x2bb20e(0x11e)](_0x3d2b16,_0x17489a);}};downloadMediaTasks[_0x4925c3(0x12b)](_0x4969b8[_0x4925c3(0x121)](randomUUID),_0x185df7),setTimeout(()=>{const _0x1483dc=_0x4925c3;!_0x48527e&&_0x4969b8[_0x1483dc(0x11e)](_0x4cf616,_0x4969b8[_0x1483dc(0x102)]);},_0x419cba),napCatCore['session'][_0x4925c3(0xf6)]()['downloadRichMedia']({'fileModelId':'0','downloadSourceType':0x0,'triggerType':0x1,'msgId':_0x37fe91,'chatType':_0x2de1a8,'peerUid':_0x1a106a,'elementId':_0x4b5403,'thumbSize':0x0,'downloadType':0x1,'filePath':_0x58d238});});}static async[_0x4524d8(0xee)](_0x520ea1){const _0x35a7ce={'jwMeM':function(_0x3f833f,_0x2f19e6){return _0x3f833f(_0x2f19e6);},'nCRML':function(_0x47a200,_0x344ae8,_0x17c8ce){return _0x47a200(_0x344ae8,_0x17c8ce);}};return new Promise((_0x43f066,_0x49beec)=>{const _0x2505a3=_0x24fa;_0x35a7ce[_0x2505a3(0x13b)](_0x3c648e,_0x520ea1,(_0x3dd2d3,_0x1df026)=>{const _0x5e6ecb=_0x2505a3;_0x3dd2d3?_0x35a7ce[_0x5e6ecb(0x144)](_0x49beec,_0x3dd2d3):_0x35a7ce['jwMeM'](_0x43f066,_0x1df026);});});}static async[_0x4524d8(0xf0)](_0x1e2c8b){const _0x115154=_0x4524d8,_0x2c1aba={'gibME':_0x115154(0x12f),'UGeef':_0x115154(0x147),'xgVKP':function(_0x47f116,_0x252165){return _0x47f116(_0x252165);},'Licgl':_0x115154(0x109),'drGKh':function(_0x2a87cc,_0x13e5b1){return _0x2a87cc*_0x13e5b1;},'MLZph':function(_0x1dd533,_0x53b9f1){return _0x1dd533(_0x53b9f1);},'WeOeD':_0x115154(0x103),'kwIXS':function(_0x3345d8,_0x538703){return _0x3345d8+_0x538703;},'bpDny':_0x115154(0xf4),'VvyZE':_0x115154(0x153),'GxWlu':function(_0x4a4c0f,_0x389c0d){return _0x4a4c0f(_0x389c0d);},'fRbEq':function(_0x932f40,_0x4174ad,_0x5334f7,_0xaf22fa){return _0x932f40(_0x4174ad,_0x5334f7,_0xaf22fa);},'oKAem':_0x115154(0x126),'PSWUd':function(_0x2de3fa,_0x409491){return _0x2de3fa!==_0x409491;},'xlJiC':_0x115154(0x149),'yDLAg':'&rkey=','tXUQH':function(_0x4b1142,_0x23dc87){return _0x4b1142(_0x23dc87);},'YrDIe':_0x115154(0x105),'VoNMG':function(_0x400218,_0x46436f){return _0x400218>_0x46436f;},'BkqHG':function(_0x2c9925,_0x586430){return _0x2c9925(_0x586430);},'YLoas':function(_0x27659b,_0x3574b4,_0x1d42dc){return _0x27659b(_0x3574b4,_0x1d42dc);},'jmJza':function(_0x41f49c,_0x1c6ba9){return _0x41f49c+_0x1c6ba9;},'ygmbT':function(_0x4ba486,_0xea7fdf){return _0x4ba486+_0xea7fdf;},'VikLT':function(_0x1c8e5d,_0x4d2503){return _0x1c8e5d||_0x4d2503;},'xzXDa':'图片url获取失败'},_0x478e7b=_0x2c1aba[_0x115154(0x14c)](_0x1e2c8b[_0x115154(0x11a)],ChatType['group']),_0x46468b=_0x1e2c8b['elements'][_0x115154(0xed)](_0x286e58=>!!_0x286e58['picElement']);if(!_0x46468b)return'';const _0x23dd6c=_0x46468b[_0x115154(0x107)][_0x115154(0x136)],_0x273b80=_0x46468b[_0x115154(0x107)][_0x115154(0x124)],_0x308fb6=_0x46468b[_0x115154(0x107)]['md5HexStr'],_0x2c2fc1=_0x46468b[_0x115154(0x107)]['fileUuid'],_0x4c6580=_0x2468a4=>{const _0x2c8172=_0x115154;_0x478e7b?(privateImageRKey=_0x2468a4,lastGetPrivateRKeyTime=Date[_0x2c8172(0x101)]()):(groupImageRKey=_0x2468a4,lastGetGroupRKeyTime=Date[_0x2c8172(0x101)]());};if(_0x23dd6c){if(_0x23dd6c[_0x115154(0x12d)](_0x2c1aba[_0x115154(0x135)])){if(_0x23dd6c[_0x115154(0x155)](_0x2c1aba[_0x115154(0x117)]))return _0x2c1aba[_0x115154(0xf5)](IMAGE_HTTP_HOST_NT,_0x23dd6c);if(!hookApi['isAvailable']())return _0x2c1aba[_0x115154(0x130)](logDebug,_0x2c1aba[_0x115154(0x110)]),'';const _0x817beb=async()=>{const _0xc6f735=_0x115154,_0x29c1c0={'tegqS':function(_0x509004,_0x2deb68){return _0x509004(_0x2deb68);},'EWZiP':_0x2c1aba[_0xc6f735(0x146)]};_0x2c1aba[_0xc6f735(0x152)](logDebug,_0x2c1aba[_0xc6f735(0x143)]),NTQQFileApi[_0xc6f735(0x128)](_0x1e2c8b['msgId'],_0x1e2c8b[_0xc6f735(0x11a)],_0x1e2c8b[_0xc6f735(0x118)],_0x46468b['elementId'],'',_0x46468b[_0xc6f735(0x107)][_0xc6f735(0x150)],_0x2c1aba[_0xc6f735(0xe6)](0x3e8,0x1e),!![])['then'](_0xa5c6f4=>{})[_0xc6f735(0x151)](logError),await _0x2c1aba['MLZph'](sleep,0x3e8),_0x2c1aba['MLZph'](logDebug,_0x2c1aba[_0xc6f735(0x12e)]);const _0x270afe=hookApi[_0xc6f735(0xf1)]()||'',_0x30294e=_0x2c1aba[_0xc6f735(0xf5)](IMAGE_HTTP_HOST_NT,_0x23dd6c)+_0x270afe;if(_0x270afe)try{logDebug(_0x2c1aba[_0xc6f735(0x113)],_0x30294e),await new Promise((_0x1a2c47,_0x1cf5c9)=>{const _0x56ba61=_0xc6f735;_0x35b275[_0x56ba61(0xfd)](_0x30294e,_0xff0cae=>{const _0xbf9519=_0x56ba61;_0xff0cae[_0xbf9519(0x10f)]!==0xc8?_0x29c1c0[_0xbf9519(0xe8)](_0x1cf5c9,_0x29c1c0['EWZiP']):_0x29c1c0['tegqS'](_0x1a2c47,_0xff0cae);})['on'](_0x2c1aba[_0x56ba61(0x14b)],_0x1b3e9e=>{_0x1cf5c9(_0x1b3e9e);});}),logDebug(_0x2c1aba[_0xc6f735(0x154)],_0x30294e),_0x2c1aba[_0xc6f735(0x11c)](_0x4c6580,_0x270afe);}catch(_0x44b196){return _0x2c1aba[_0xc6f735(0x127)](logError,_0x2c1aba[_0xc6f735(0xe7)],_0x30294e,_0x44b196),'';}return _0x270afe;},_0x10353f=()=>new Promise((_0x5ec723,_0x3f2506)=>{const _0x5b9c07={'EANIE':function(_0x2a6df6){return _0x2a6df6();}};getRKeyTaskQueue['addTask'](async()=>{const _0x890b77=_0x24fa,_0x147301=await _0x5b9c07[_0x890b77(0xfe)](_0x817beb);_0x5ec723(_0x147301);});}),_0xd5ea3f=_0x478e7b?privateImageRKey:groupImageRKey,_0x1cc785=_0x478e7b?lastGetPrivateRKeyTime:lastGetGroupRKeyTime;if(_0x2c1aba['VoNMG'](Date[_0x115154(0x101)]()-_0x1cc785,rkeyExpireTime)||!_0xd5ea3f){_0x2c1aba[_0x115154(0x11b)](logDebug,_0x115154(0x13a)+_0x23dd6c+_0x115154(0xfa)+_0xd5ea3f);const _0x2074e6=await _0x10353f();if(_0x2074e6)return _0x2c1aba['kwIXS'](IMAGE_HTTP_HOST_NT,_0x23dd6c)+(''+_0x2074e6);else _0x2c1aba[_0x115154(0x123)](logError,'图片rkey获取失败',_0x23dd6c);}if(_0xd5ea3f)return _0x2c1aba[_0x115154(0xf5)](_0x2c1aba['jmJza'](IMAGE_HTTP_HOST_NT,_0x23dd6c),''+_0xd5ea3f);return'';}else return _0x2c1aba[_0x115154(0x115)](IMAGE_HTTP_HOST,_0x23dd6c);}else{if(_0x2c1aba[_0x115154(0x11f)](_0x308fb6,_0x273b80))return IMAGE_HTTP_HOST+_0x115154(0x132)+(_0x308fb6||_0x273b80)['toUpperCase']()+'/0';}return _0x2c1aba[_0x115154(0x123)](logDebug,_0x2c1aba[_0x115154(0x125)],_0x1e2c8b),'';}}export class NTQQFileCacheApi{static async[_0x4524d8(0x12a)](_0x54dfe6=!![]){return'';}static[_0x4524d8(0x140)](){return'';}static[_0x4524d8(0xe9)](_0x2036cf=['tmp',_0x4524d8(0x106)]){const _0x445f39=_0x4524d8;return napCatCore['session'][_0x445f39(0x10c)]()[_0x445f39(0xfb)](_0x2036cf);}static[_0x4524d8(0x142)](_0x32f1ab={}){const _0x524ff8=_0x4524d8;return napCatCore[_0x524ff8(0x108)][_0x524ff8(0x10c)]()[_0x524ff8(0x10a)](_0x32f1ab);}static[_0x4524d8(0xf2)](){const _0x33f28b=_0x4524d8;return napCatCore[_0x33f28b(0x108)]['getStorageCleanService']()['scanCache']();}static[_0x4524d8(0x137)](){return'';}static[_0x4524d8(0xef)](){return'';}static['getChatCacheList'](_0xf99f57,_0x5aa3a4=0x3e8,_0x37457c=0x0){const _0x3c9b6f=_0x4524d8;return napCatCore[_0x3c9b6f(0x108)]['getStorageCleanService']()['getChatCacheInfo'](_0xf99f57,_0x5aa3a4,0x1,_0x37457c);}static[_0x4524d8(0xf9)](_0x17cdb8,_0x138a0b=0x3e8,_0x42fcda){const _0x57f74e=_0x42fcda?_0x42fcda:{'fileType':_0x17cdb8};}static async[_0x4524d8(0xeb)](_0x84591b=[],_0x564a93=[]){const _0x487c76=_0x4524d8;return napCatCore[_0x487c76(0x108)][_0x487c76(0x10c)]()[_0x487c76(0x133)](_0x84591b,_0x564a93);}}