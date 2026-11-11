(function(){
/* 1. Không ngắt dòng giữa các âm tiết của cùng một từ ghép */
var W=['Trường Đại học Ngoại thương','Đại học Ngoại thương','tầm nhìn','sứ mạng','lịch sử','giá trị cốt lõi','cốt lõi','Ngoại thương','khoa học','máy tính','dữ liệu','trí tuệ','nhân tạo','đại học','ngoại thương','công nghệ','nghiên cứu','sinh viên','giảng viên','học viên','nghiên cứu sinh','tiến sĩ','thạc sĩ','cử nhân','phó giáo sư','giáo sư','hội thảo','khoa học dữ liệu','thông tin','tin học','toán học','ứng dụng','kinh tế','kinh doanh','tài chính','doanh nghiệp','hợp tác','đào tạo','chương trình','tuyển sinh','học tập','giảng dạy','thực hành','thực tế','phòng thí nghiệm','hệ thống','quản lý','điện toán','đám mây','mô hình','ngôn ngữ','phần mềm','phần cứng','lập trình','thuật toán','xác suất','thống kê','định lượng','tính toán','liên ngành','bộ môn','hiệu trưởng','trưởng khoa','phó trưởng','tân sinh viên','thành tích','sự kiện','hoạt động','cuộc thi','giải nhất','giải nhì','giải ba','khuyến khích','quốc tế','quốc gia','việt nam','hà nội','trung quốc','năm học','học kỳ','học phần','môn học','tốt nghiệp','việc làm','nghề nghiệp','định hướng','chuyển đổi số','kỹ năng','dự án','sản phẩm','nền tảng','hạ tầng','trải nghiệm','cơ hội','phát triển','chuyên ngành','chuyên môn','tham gia','tổ chức','thành lập','giới thiệu','tin tức','liên hệ','đăng ký','học bổng','tài trợ','olympic tin học','cơ sở dữ liệu','học máy','học sâu','thị giác máy tính','xử lý','ngôn ngữ tự nhiên','an ninh mạng','trường đại học','ngoại thương','đội tuyển','đội ngũ','cán bộ','luận án','bảo vệ','vinh danh','sáng tạo','đời sống','khu vực','miền bắc','toàn quốc'];
W.sort(function(a,b){return b.length-a.length});
var esc=function(s){return s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')};
var RE=new RegExp('(^|[^\\p{L}])('+W.map(function(w){return esc(w).replace(/ /g,'[ \\u00A0]+')}).join('|')+')(?=$|[^\\p{L}])','giu');
var SKIP={SCRIPT:1,STYLE:1,TEXTAREA:1,INPUT:1,CODE:1,PRE:1,SELECT:1,OPTION:1};
function fix(root){if(!root)return;var w=document.createTreeWalker(root,NodeFilter.SHOW_TEXT,{acceptNode:function(n){for(var p=n.parentNode;p&&p!==root.parentNode;p=p.parentNode)if(SKIP[p.nodeName])return 2;return n.nodeValue.indexOf(' ')>-1?1:2}}),n,L=[];while(n=w.nextNode())L.push(n);
L.forEach(function(n){var v=n.nodeValue.replace(RE,function(m,a,b){return a+b.replace(/ +/g,' ')});if(v!==n.nodeValue)n.nodeValue=v})}
var busy=false;function run(){if(busy)return;busy=true;try{tr(document.body)}catch(e){}fix(document.body);busy=false}
/* 2. Dải giảng viên */
function lec(){var box=document.getElementById('lecRun');if(!box||!window.POSTS)return;var E=(localStorage.getItem('ctas-lang')||'vi')==='en';
var R={'119':'Trưởng Bộ môn Toán, Xác suất và thống kê','651':'Trưởng khoa Khoa học tính toán và định lượng','120':'Trưởng Bộ môn Tin học','945':'Huấn luyện đội tuyển Olympic AI','725':'Khoa học máy tính','191':'Công nghệ thông tin','128':'Toán tin ứng dụng','699':'Toán kinh tế','177':'Toán ứng dụng','159':'Toán giải tích','140':'Đại số tuyến tính','125':'Cơ sở toán học cho tin học','658':'Khoa học máy tính','132':'Tin học','130':'Đảm bảo toán học cho hệ thống tính toán','134':'Xử lý thông tin và truyền thông','148':'Phương trình vi phân','150':'Toán kinh tế','146':'Toán giải tích','144':'Toán kinh tế'};
var ord=['119','651','120','725','191','128','945','699','177','125','159','140','658','944','934'];
var L=POSTS.filter(function(p){return p.c==='Giảng viên'&&!/DANH SÁCH/i.test(p.t)});
L.sort(function(a,b){var i=ord.indexOf(a.id),j=ord.indexOf(b.id);return (i<0?99:i)-(j<0?99:j)});
var card=function(p){var nm=p.t.replace(/^Th\.S/,'ThS').replace(/\s+/g,' ').trim();var ini=nm.split(' ').slice(-1)[0][0];
return '<a class="lc" href="bai-viet.html?id='+p.id+'"><div class="ph">'+(p.cover?'<img src="'+(p.th||p.cover)+'" alt="'+nm+'" loading="lazy" decoding="async">':ini)+'</div><div class="nm"><h4>'+nm+'</h4><small>'+(R[p.id]||(E?'Lecturer':'Giảng viên'))+'</small></div></a>'};
var A=L.map(card).join('');box.innerHTML='<div class="lec-tr">'+A+A+'</div>'}


/* 4. Dịch tiếng Anh cho chữ giao diện còn sót */
var EN=(function(){try{return (localStorage.getItem('ctas-lang')||'vi')==='en'||new URLSearchParams(location.search).get('lang')==='en'}catch(e){return false}})();
var NAMESEL='.lc h4,.person h4,.person .n,.lc img,.person img';
function isEN(){try{return document.documentElement.lang==='en'||(localStorage.getItem('ctas-lang')||'vi')==='en'}catch(e){return false}}
function tr(root){if(!isEN()||!window.CTAS_EN||!root)return;var D=window.CTAS_EN,norm=function(v){return v.replace(/[\s ]+/g,' ').trim()};
 var w=document.createTreeWalker(root,NodeFilter.SHOW_TEXT),n,L=[];while(n=w.nextNode())L.push(n);
 L.forEach(function(n){var p=n.parentElement;if(!p||/SCRIPT|STYLE/.test(p.tagName))return;var k=norm(n.nodeValue);if(!k)return;
  if(D[k]){n.nodeValue=n.nodeValue.replace(/\S[\s\S]*\S|\S/,D[k]);return}
  if(p.closest('.lc h4,.person h4,.person b')&&/^(TS|ThS|CN|PGS)/.test(k))n.nodeValue=window.CTAS_EN_TITLE(k)});
 (root.querySelectorAll?root:document).querySelectorAll('[aria-label],[placeholder],[title],img[alt]').forEach(function(e){['aria-label','placeholder','title','alt'].forEach(function(a){var v=e.getAttribute(a);if(!v)return;var k=norm(v);
  if(D['@'+k])e.setAttribute(a,D['@'+k]);else if(D[k])e.setAttribute(a,D[k]);else if(a==='alt'&&/^(TS|ThS|CN|PGS)/.test(k))e.setAttribute(a,window.CTAS_EN_TITLE(k))})})}


/* 5. Footer chung, nút quay lại, công tắc sáng/tối, dải tin tự chạy */
var MARK='<img class="ctas-logo ctas-logo-ft" src="assets/logo/ctas-color/ctas-logo-160.png" alt="CTAS" width="160" height="56">';
function footer(){var g=document.querySelector('.foot-grid');if(!g)return;
 g.innerHTML='<div class="f-brand"><a href="index.html" class="f-logo f-ctas">'+MARK+'<span><small>Trường Công nghệ và Khoa học ứng dụng</small></span></a>'
 +'<p>Đơn vị thành viên của Trường Đại học Ngoại thương</p>'
 +'<p class="f-meta">91 Chùa Láng, Đống Đa, Hà Nội<br>Văn phòng B401, B402, Tòa B<br><a href="tel:0947396248">094 739 62 48</a><br><a href="mailto:cnkhdl@ftu.edu.vn">cnkhdl@ftu.edu.vn</a></p></div>'
 +'<div><h5>Giới thiệu</h5><a href="gioi-thieu.html">Lịch sử, sứ mạng, tầm nhìn</a><a href="gioi-thieu.html#co-cau">Cơ cấu tổ chức</a><a href="tin-tuc.html">Tin tức</a><a href="khong-gian.html">Không gian học tập &amp; nghiên cứu</a></div>'
 +'<div><h5>Đào tạo</h5><a href="dao-tao.html">Tổng quan đào tạo</a><a href="nganh.html?m=cs">Khoa học máy tính</a><a href="nganh.html?m=ds">Khoa học dữ liệu</a><a href="nganh.html?m=ai">Trí tuệ nhân tạo</a><a href="dinh-huong.html">Định hướng phát triển</a></div>'
 +'<div><h5>Nghiên cứu</h5><a href="lms.html">FTU LMS</a><a href="ftullm.html">FTULLM Assistant</a><a href="cloud.html">FTU Cloud</a><a href="hoi-thao.html">Hội thảo khoa học 2026</a><a href="du-an-sinh-vien.html">Dự án sinh viên</a></div>'
 +'<div><h5>Liên kết</h5><a href="https://ftu.edu.vn" target="_blank" rel="noopener">Trường Đại học Ngoại thương</a><a href="https://ftds.online" target="_blank" rel="noopener">Hệ thống học tập LMS</a><a href="https://cloud.ftds.online" target="_blank" rel="noopener">FTU Cloud</a><a href="https://ftulabs.github.io" target="_blank" rel="noopener">FTU Labs</a><a href="https://www.facebook.com/KHOACNKHDL" target="_blank" rel="noopener">Fanpage Facebook</a></div>';
 var c=document.querySelector('footer .copy');if(c)c.innerHTML='<span>© 2026 Trường Công nghệ và Khoa học ứng dụng, Trường Đại học Ngoại thương</span><span>Nexus of Excellence</span>';}
function back(){var b=document.getElementById('back');if(!b)return;var E2=(localStorage.getItem('ctas-lang')||'vi')==='en';
 var same=document.referrer&&document.referrer.indexOf(location.origin)===0&&history.length>1;
 b.textContent=same?(E2?'← Back':'← Quay lại'):(E2?'← Back to home':'← Về trang chủ');
 if(same)b.addEventListener('click',function(e){e.preventDefault();history.back()});}
function themeSwitch(){var t=document.getElementById('themeBtn');if(!t||t.dataset.sw)return;t.dataset.sw=1;t.classList.add('th-sw');
 var draw=function(){var d=document.documentElement.dataset.theme==='dark';var E2=(localStorage.getItem('ctas-lang')||'vi')==='en';
  t.innerHTML='<span class="'+(d?'':'on')+'">☀</span><span class="'+(d?'on':'')+'">☾</span>';t.setAttribute('aria-label',E2?(d?'Dark mode on, switch to light':'Light mode on, switch to dark'):(d?'Đang ở chế độ tối, bấm để chuyển sáng':'Đang ở chế độ sáng, bấm để chuyển tối'));t.title=t.getAttribute('aria-label')};
 draw();new MutationObserver(draw).observe(document.documentElement,{attributes:true,attributeFilter:['data-theme']});}
function ticker(){var tr=document.getElementById('nbTr');if(!tr||tr.dataset.js)return;tr.dataset.js=1;tr.style.animation='none';
 var x=0,last=0,paused=false,speed=40;var vp=tr.parentElement;vp.addEventListener('mouseenter',function(){paused=true});vp.addEventListener('mouseleave',function(){paused=false});
 function step(t){if(!last)last=t;var dt=Math.min(64,t-last);last=t;if(!paused&&!document.hidden){x-=speed*dt/1000;var half=tr.scrollWidth/2;if(half>0&&-x>=half)x+=half;tr.style.transform='translate3d('+x.toFixed(1)+'px,0,0)'}requestAnimationFrame(step)}
 requestAnimationFrame(step);}


function langHook(){var b=document.getElementById('langBtn');if(!b||b.dataset.hk)return;b.dataset.hk=1;var orig=b.onclick;if(!orig)return;
 b.onclick=function(e){orig.call(b,e);try{localStorage.setItem('ctas-lang',document.documentElement.lang==='en'?'en':'vi')}catch(_){}
  var en=document.documentElement.lang==='en',nb=document.getElementById('nbTr');
  if(nb&&window.POSTS){var L=POSTS.filter(function(p){return p.news}).slice(0,20),h=L.map(function(p){return '<a href="bai-viet.html?id='+p.id+'"><time>'+p.d+'</time>'+((en&&p.te)||p.t)+'</a>'}).join('');nb.innerHTML=h+h;
   var lb2=document.querySelector('.nb-lb');if(lb2)lb2.textContent=en?'LATEST':'TIN MỚI';var al=document.querySelector('.nb-all');if(al)al.textContent=en?'All news':'Tất cả'}
  if(en){busy=true;tr(document.body);busy=false}
  try{back();themeSwitch&&(document.getElementById('themeBtn').dataset.sw='',themeSwitch())}catch(_){}
  var m=document.querySelector('.mnav');if(m){m.remove();try{mnav()}catch(_){}}}}

/* 3. Menu điện thoại */
function mnav(){var nav=document.querySelector('nav.gh .nav, nav .nav, .nv');if(!nav||document.querySelector('.mnav'))return;
var menu=document.querySelector('nav .menu');var nr=document.querySelector('.nav-r, .nr');if(!nr)return;
var b=document.createElement('button');b.className='mnav-btn';b.setAttribute('aria-label','Menu');b.textContent='☰';nr.appendChild(b);
var d=document.createElement('div');d.className='mnav';var h='<div class="mnav-top"><b>CTAS</b><button class="mnav-x" aria-label="Đóng">✕</button></div>';
if(menu){menu.querySelectorAll(':scope > .dd, :scope > a').forEach(function(dd){var top=dd.matches('a')?dd:dd.querySelector(':scope > a');
 h+='<h6>'+top.textContent.replace('▾','').trim()+'</h6>';if(dd.matches('a')){h+='<a href="'+top.getAttribute('href')+'">'+top.textContent+'</a>';return}
 h+='<a href="'+top.getAttribute('href')+'">'+top.textContent.replace('▾','').trim()+' - '+((localStorage.getItem('ctas-lang')||'vi')==='en'?'overview':'tổng quan')+'</a>';
 dd.querySelectorAll('.dd-pan a').forEach(function(a){h+='<a href="'+a.getAttribute('href')+'">'+a.innerHTML+'</a>'})})}
var cta=[].slice.call(nr.querySelectorAll(':scope > a'));if(cta.length)h+='<div class="mnav-cta">'+cta.map(function(a){return '<a class="'+(a.classList.contains('btn')?'pri':'')+'" href="'+a.getAttribute('href')+'">'+a.textContent+'</a>'}).join('')+'</div>';
d.innerHTML=h;document.body.appendChild(d);
var tog=function(on){d.classList.toggle('on',on);document.body.classList.toggle('mnav-open',on)};
b.onclick=function(){tog(true)};d.querySelector('.mnav-x').onclick=function(){tog(false)};d.addEventListener('click',function(e){if(e.target.closest('a'))tog(false)})}
/* 4. Footer chung: trang nào chưa có footer (hoặc footer rỗng) thì chèn bản giống trang chủ */
function sfoot(){var f=document.querySelector('footer');if(f&&f.children.length)return;
if(!f){f=document.createElement('footer');var s=document.querySelector('body > script');document.body.insertBefore(f,s||null)}
f.className+=' sf';f.innerHTML='<div class="sf-in"><div class="foot-grid">'
+'<div class="f-brand"><a href="index.html" class="f-logo"><img src="assets/ftu-logo.png" alt="FTU" class="seal"><span><small>Trường Đại học Ngoại thương</small><b>Trường Công nghệ và Khoa học ứng dụng</b></span></a><p>91 Chùa Láng, Đống Đa, Hà Nội</p></div>'
+'<div><h5>Kết nối</h5><a href="mailto:cnkhdl@ftu.edu.vn">Hợp tác doanh nghiệp</a><a href="mailto:cnkhdl@ftu.edu.vn">Tài trợ</a><a href="#">Cựu sinh viên</a><a href="index.html#news">Báo chí</a></div>'
+'<div><h5>Người học tương lai</h5><a href="index.html#study">Đào tạo</a><a href="dao-tao.html">Tuyển sinh</a><a href="#">Học phí</a><a href="#">Học bổng</a><a href="#">Hỏi đáp</a></div>'
+'<div><h5>Sinh viên</h5><a href="#">Thời khoá biểu</a><a href="#">Chương trình học</a><a href="#">Công tác sinh viên</a><a href="dao-tao.html">CLB CTE</a></div>'
+'<div><h5>Liên hệ</h5><a href="https://maps.google.com/?q=91+Chùa+Láng,+Đống+Đa,+Hà+Nội" target="_blank">91 Chùa Láng, Đống Đa, Hà Nội</a><a href="tel:0947396248">094 739 62 48</a><a href="mailto:cnkhdl@ftu.edu.vn">cnkhdl@ftu.edu.vn</a><a href="https://ftu.edu.vn" target="_blank">ftu.edu.vn</a><a href="https://www.facebook.com/KHOACNKHDL" target="_blank">Facebook</a></div>'
+'</div>'
+'<div class="copy"><span>© 2026 Trường Công nghệ và Khoa học ứng dụng - Trường Đại học Ngoại thương</span><span>Chính sách bảo mật, Điều khoản</span></div></div>'}
function go(){try{sfoot()}catch(e){}try{footer()}catch(e){}try{back()}catch(e){}try{themeSwitch()}catch(e){}try{ticker()}catch(e){}try{mnav()}catch(e){}try{langHook()}catch(e){}lec();run();new MutationObserver(function(){if(!busy){clearTimeout(go.t);go.t=setTimeout(run,60)}}).observe(document.body,{childList:true,subtree:true})}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',go);else go();
})();
