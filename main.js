const a=['loadURL','AMD','openDevTools','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20document.exitPointerLock\x20=\x20document.exitPointerLock\x20||\x20document.mozExitPointerLock;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20document.exitPointerLock();\x0a\x09\x09','level','total','Download\x20Speed:\x20','set','setTitle','setSimpleFullScreen','checkForUpdatesAndNotify','nexi-client','Spectate','Checking\x20for\x20updates...','weird\x20thing\x20should\x20die','d3d9','autoplay-policy','get','New\x20Version\x20of\x20NeXi-Client\x20has\x20been\x20found','searching\x20for\x20game','new-window','discord-rpc','readText','game','Disable','Looking\x20for\x20a\x20Game','Settings','no-user-gesture-required','Idling','\x20Frame\x20Rate\x20Limit\x20Cap','getURL','/index.html','Please\x20enter\x20your\x20Invite\x20link\x20here','General','disable-accelerated-video-decode','index.html','ipc','Restart','input','removeMenu','split','utilities_FPS','showMessageBoxSync','Version\x20is\x20up-to-date','update-downloaded','Would\x20you\x20like\x20to\x20spectate\x20or\x20play?','substring','then','length','use-angle','relaunch','commandLine','file:///','setActivity','file','A\x20new\x20version\x20has\x20been\x20downloaded.\x20Want\x20to\x20update\x20the\x20client\x20now?','update-available','F11','utilities_D3D11OND12','question','Later','quitAndInstall','openExternal','loadFile','Ctrl+F5','social','enable-quic','F12','/index.html#','electron-localshortcut','social.venge.io','User\x20saw\x20New\x20Version\x20message','log','logger','win32','\x20-\x20Downloaded\x20','NeXi-Client\x20Update','checking-for-update','venge.io/#','register','v8-compile-cache','Enable','bytesPerSecond','reloadIgnoringCache','close','unknown','Loading...','isSimpleFullScreen','Alright!','Linkbox\x20has\x20been\x20opened','enable-pointer-lock-options','download-progress','url','connected','quit','now','NeXi-Client\x20V','F10','error','workAreaSize','transports','spectate','Client','getVersion','electron-store','info','indexOf','once','Spectating\x20a\x20Match','showMessageBox','appendSwitch','webContents','enable-webgl2-compute-context','utilities_RPC','\x20Discord\x20RPC','transferred','https://venge.io/#00000','disable-frame-rate-limit','Play','platform','/index.html#Spectate:','dom-ready','preventDefault','includes','Please\x20don\x27t\x20play\x20any\x20matches\x20until\x20the\x20download\x20is\x20complete','findIndex','update-not-available'];(function(b,c){const d=function(e){while(--e){b['push'](b['shift']());}};d(++c);}(a,0x160));const b=function(c,d){c=c-0x0;let e=a[c];return e;};const x=b;require(x('0x6d'));const {app,shell,clipboard,dialog,BrowserWindow,screen}=require('electron'),discord=require(x('0x32')),Store=require(x('0x6')),config=new Store(),OS=require('os'),prompt=require('electron-prompt');config['get'](x('0x46'))==null&&config[x('0x24')](x('0x46'),!![]);;config[x('0x2e')]('utilities_D3D11OND12')==null&&config[x('0x24')](x('0x57'),!![]);;config['get'](x('0xf'))==null&&config[x('0x24')](x('0xf'),!![]);;config[x('0x2e')]('utilities_FPS')&&(OS['cpus']()[x('0x1b')](c=>c['model'][x('0x19')](x('0x1e')))!=-0x1&&app[x('0x50')][x('0xc')]('enable-zero-copy'),app[x('0x50')][x('0xc')](x('0x13')));config[x('0x2e')](x('0x57'))?(app[x('0x50')][x('0xc')](x('0x4e'),'d3d11ond12'),app[x('0x50')][x('0xc')](x('0xe'))):app[x('0x50')][x('0xc')](x('0x4e'),x('0x2c'));app[x('0x50')][x('0xc')](x('0x5f')),app['commandLine'][x('0xc')]('ignore-gpu-blacklist'),app[x('0x50')][x('0xc')]('disable-gpu-vsync'),app[x('0x50')][x('0xc')](x('0x77')),app[x('0x50')][x('0xc')](x('0x3f'),![]),app[x('0x50')]['appendSwitch'](x('0x2d'),x('0x38')),app[x('0x50')][x('0xc')](x('0x5f')),app[x('0x50')]['appendSwitch']('high-dpi-support',0x1);function init(){const y=x;createInitWindow(y('0x51')+__dirname+y('0x3c'),!![],1.2,!![]),autoUpdater[y('0x27')]();}function createInitWindow(c,d,e,f){const z=x,{width:g,height:h}=screen['getPrimaryDisplay']()[z('0x1')];var i=new BrowserWindow({'width':g*(e+1.7),'height':h*(e+2.5),'show':!![]});i['setSimpleFullScreen'](d),i[z('0x1d')](c),i[z('0x44')]();config[z('0x2e')](z('0xf'))&&f&&j();function j(){const A=z;var o={'a':A('0x39'),'b':'In\x20a\x20Game','c':A('0xa'),'d':A('0x36'),'e':'In\x20Menu','f':A('0x73')};const p=new discord[(A('0x4'))]({'transport':A('0x41')});p['login']({'clientId':'750116161890287657'});var q=Date[A('0x7c')]();p[A('0x9')](A('0x7a'),()=>{r(o['f']),setInterval(()=>{s();},0x3e8);});function r(t){const B=A;p[B('0x52')]({'largeImageKey':B('0x28'),'largeImageText':'NeXi-Client\x20V'+app[B('0x5')](),'startTimestamp':q,'details':''+t});}function s(){const C=A;let t=i[C('0xd')]['getURL'](),u=null,v=l(t);switch(v){case'menu':u=o['e'];break;case C('0x34'):u=o['b'];break;case C('0x3'):u=o['c'];break;case C('0x30'):u=o['d'];break;default:u=o['a'];break;}r(u);}}const k=require(z('0x62'));k[z('0x6c')](i,'F1',()=>{const D=z;if(!f){let o=i[D('0xd')][D('0x3b')]();i[D('0x1d')](o);}else i[D('0x5c')]('./index.html');});f&&k[z('0x6c')](i,'F2',()=>{const E=z;console['log'](E('0x76')),n();});k[z('0x6c')](i,'Alt+F4',()=>{const F=z;console[F('0x65')]('Quit\x20has\x20been\x20used'),f?app[F('0x7b')]():i[F('0x71')]();}),k[z('0x6c')](i,z('0x5d'),()=>{const G=z;i['webContents'][G('0x70')]();}),k[z('0x6c')](i,z('0x60'),()=>{const H=z;i[H('0xd')][H('0x1f')]();}),k[z('0x6c')](i,z('0x56'),()=>{const I=z;i[I('0x26')](!i[I('0x74')]());}),k[z('0x6c')](i,'ESC',()=>{const J=z;i[J('0xd')]['executeJavaScript'](J('0x20'));}),k[z('0x6c')](i,z('0x7e'),()=>{m();}),i[z('0xd')]['on']('will-prevent-unload',o=>o[z('0x18')]()),i[z('0xd')]['on'](z('0x17'),o=>{const K=z;i[K('0x25')](K('0x7d')+app[K('0x5')]()),o[K('0x18')]();}),i[z('0xd')]['on'](z('0x31'),(o,p)=>{const L=z;let q=l(p);switch(q){case L('0x5e'):o[L('0x18')](),createInitWindow(p,![],0.75,![]);break;case L('0x72'):o[L('0x18')](),shell[L('0x5b')](p);break;}});function l(o){const M=z;if(o['indexOf'](M('0x63'))!=-0x1)return M('0x5e');if(o[M('0x19')](M('0x40'))==![])return M('0x72');o=o[M('0x45')]('/');let p=o[o[M('0x4d')]-0x1],q=p[M('0x4b')](M('0x40')[M('0x4d')]);switch(q[M('0x4d')]){case 0x0:return'menu';case 0x1:return M('0x30');case 0x6:return M('0x34');case 0xf:return M('0x3');default:return M('0x2b');}}function m(){const N=z,o=dialog['showMessageBoxSync'](i,{'type':N('0x58'),'buttons':[N('0x3e')],'title':N('0x37'),'message':'','defaultId':0x0,'cancelId':0x2});o===0x0&&p();function p(){const O=N;if(config[O('0x2e')](O('0x46'),!![]))var q=O('0x6e');else var q='Disable';if(config[O('0x2e')]('utilities_D3D11OND12',!![]))var r=O('0x35');else var r=O('0x6e');if(config[O('0x2e')](O('0xf'),!![]))var s=O('0x35');else var s=O('0x6e');const t=dialog[O('0x47')](i,{'type':O('0x58'),'buttons':[q+O('0x3a'),r+'\x20D3D11OND12',s+O('0x10')],'title':O('0x37'),'message':'','defaultId':0x0,'cancelId':0x3});t===0x0&&(config[O('0x2e')](O('0x46'),!![])?config[O('0x24')]('utilities_FPS',![]):config['set']('utilities_FPS',!![]),app[O('0x4f')](),app[O('0x7b')]()),t===0x1&&(config['get']('utilities_D3D11OND12',!![])?config[O('0x24')](O('0x57'),![]):config[O('0x24')]('utilities_D3D11OND12',!![]),app[O('0x4f')](),app[O('0x7b')]()),t===0x2&&(config[O('0x2e')](O('0xf'),!![])?config[O('0x24')](O('0xf'),![]):config[O('0x24')](O('0xf'),!![]),app[O('0x4f')](),app[O('0x7b')]());}}function n(){const S=z;function o(s){const P=b;var t=prompt({'title':s,'label':P('0x3d'),'value':r,'inputAttrs':{'type':P('0x79')},'type':P('0x43')});return t;}function p(){const Q=b,s=dialog[Q('0x47')](i,{'type':'question','buttons':[Q('0x14'),'Spectate'],'title':'Join','message':Q('0x4a'),'defaultId':0x0,'cancelId':0x3});return s;}function q(s,t){const R=b;let u=s,v=u[R('0x45')]('#'),w=v[v[R('0x4d')]-0x1];t?i['loadURL'](__dirname+R('0x16')+w):i[R('0x1d')](__dirname+R('0x61')+w);}let r=clipboard[S('0x33')]();if(r[S('0x8')](S('0x6b'))===-0x1){r=S('0x12');let s=p();s===0x0?o(S('0x14'))['then'](t=>{q(t,![]);}):s===0x1&&o(S('0x29'))['then'](t=>{q(t,!![]);});}else{let t=p();t===0x0?q(r,![]):t===0x1&&q(r,!![]);}}}const {autoUpdater}=require('electron-updater');autoUpdater[x('0x66')]=require('electron-log'),autoUpdater[x('0x66')][x('0x2')][x('0x53')][x('0x21')]='info',autoUpdater['on'](x('0x6a'),()=>{const T=x;console[T('0x65')](T('0x2a'));}),autoUpdater['on'](x('0x55'),()=>{const U=x,c={'type':U('0x7'),'buttons':[U('0x75')],'title':U('0x69'),'message':U('0x2f'),'detail':U('0x1a')};dialog[U('0xb')](c)[U('0x4c')](d=>{const V=U;if(d['response']===0x0)console[V('0x65')](V('0x64'));});}),autoUpdater['on'](x('0x1c'),()=>{const W=x;console[W('0x65')](W('0x48'));}),autoUpdater['on'](x('0x78'),c=>{const X=x;console[X('0x65')](X('0x23')+c[X('0x6f')]+X('0x68')+c[X('0x11')]+'/'+c[X('0x22')]);}),autoUpdater['on'](x('0x49'),(c,d)=>{const Y=x,e={'type':Y('0x7'),'buttons':[Y('0x42'),Y('0x59')],'title':'Application\x20Update','message':process[Y('0x15')]===Y('0x67')?c:d,'detail':Y('0x54')};dialog[Y('0xb')](e)[Y('0x4c')](f=>{const Z=Y;if(f['response']===0x0)autoUpdater[Z('0x5a')]();});}),autoUpdater['on'](x('0x0'),c=>{const a0=x;console[a0('0x65')](c);}),app['on']('ready',init);
