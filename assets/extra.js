(function(){
/* 1. Không ngắt dòng giữa các âm tiết của cùng một từ ghép */
var W=['khoa học','máy tính','dữ liệu','trí tuệ','nhân tạo','đại học','ngoại thương','công nghệ','nghiên cứu','sinh viên','giảng viên','học viên','nghiên cứu sinh','tiến sĩ','thạc sĩ','cử nhân','phó giáo sư','giáo sư','hội thảo','khoa học dữ liệu','thông tin','tin học','toán học','ứng dụng','kinh tế','kinh doanh','tài chính','doanh nghiệp','hợp tác','đào tạo','chương trình','tuyển sinh','học tập','giảng dạy','thực hành','thực tế','phòng thí nghiệm','hệ thống','quản lý','điện toán','đám mây','mô hình','ngôn ngữ','phần mềm','phần cứng','lập trình','thuật toán','xác suất','thống kê','định lượng','tính toán','liên ngành','bộ môn','hiệu trưởng','trưởng khoa','phó trưởng','tân sinh viên','thành tích','sự kiện','hoạt động','cuộc thi','giải nhất','giải nhì','giải ba','khuyến khích','quốc tế','quốc gia','việt nam','hà nội','trung quốc','năm học','học kỳ','học phần','môn học','tốt nghiệp','việc làm','nghề nghiệp','định hướng','chuyển đổi số','kỹ năng','dự án','sản phẩm','nền tảng','hạ tầng','trải nghiệm','cơ hội','phát triển','chuyên ngành','chuyên môn','tham gia','tổ chức','thành lập','giới thiệu','tin tức','liên hệ','đăng ký','học bổng','tài trợ','olympic tin học','cơ sở dữ liệu','học máy','học sâu','thị giác máy tính','xử lý','ngôn ngữ tự nhiên','an ninh mạng','trường đại học','ngoại thương','đội tuyển','đội ngũ','cán bộ','luận án','bảo vệ','vinh danh','sáng tạo','đời sống','khu vực','miền bắc','toàn quốc'];
W.sort(function(a,b){return b.length-a.length});
var esc=function(s){return s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')};
var RE=new RegExp('(^|[^\\p{L}])('+W.map(function(w){return esc(w).replace(/ /g,'[ \\u00A0]+')}).join('|')+')(?=$|[^\\p{L}])','giu');
var SKIP={SCRIPT:1,STYLE:1,TEXTAREA:1,INPUT:1,CODE:1,PRE:1,SELECT:1,OPTION:1};
function fix(root){if(!root)return;var w=document.createTreeWalker(root,NodeFilter.SHOW_TEXT,{acceptNode:function(n){for(var p=n.parentNode;p&&p!==root.parentNode;p=p.parentNode)if(SKIP[p.nodeName])return 2;return n.nodeValue.indexOf(' ')>-1?1:2}}),n,L=[];while(n=w.nextNode())L.push(n);
L.forEach(function(n){var v=n.nodeValue.replace(RE,function(m,a,b){return a+b.replace(/ +/g,' ')});if(v!==n.nodeValue)n.nodeValue=v})}
var busy=false;function run(){if(busy)return;busy=true;try{tr(document.body)}catch(e){}fix(document.body);busy=false}
/* 2. Dải giảng viên */
function lec(){var box=document.getElementById('lecRun');if(!box||!window.POSTS)return;var E=(localStorage.getItem('ctas-lang')||'vi')==='en';
var R={'119':'Trưởng Bộ môn Toán, Xác suất và thống kê','651':'Phó trưởng Khoa, Khoa học máy tính','120':'Trưởng Bộ môn Tin học','945':'Huấn luyện đội tuyển Olympic AI','725':'Khoa học máy tính','191':'Công nghệ thông tin','128':'Toán tin ứng dụng','699':'Toán kinh tế','177':'Toán ứng dụng','159':'Toán giải tích','140':'Đại số tuyến tính','125':'Cơ sở toán học cho tin học','658':'Khoa học máy tính','132':'Tin học','130':'Đảm bảo toán học cho hệ thống tính toán','134':'Xử lý thông tin và truyền thông','148':'Phương trình vi phân','150':'Toán kinh tế','146':'Toán giải tích','144':'Toán kinh tế'};
var ord=['119','651','120','725','191','128','945','699','177','125','159','140','658','944','934'];
var L=POSTS.filter(function(p){return p.c==='Giảng viên'&&!/DANH SÁCH/i.test(p.t)});
L.sort(function(a,b){var i=ord.indexOf(a.id),j=ord.indexOf(b.id);return (i<0?99:i)-(j<0?99:j)});
var card=function(p){var nm=p.t.replace(/^Th\.S/,'ThS').replace(/\s+/g,' ').trim();var ini=nm.split(' ').slice(-1)[0][0];
return '<a class="lc" href="bai-viet.html?id='+p.id+'"><div class="ph">'+(p.cover?'<img src="'+(p.th||p.cover)+'" alt="'+nm+'" loading="lazy" decoding="async">':ini)+'</div><div class="nm"><h4>'+nm+'</h4><small>'+(R[p.id]||(E?'Lecturer':'Giảng viên'))+'</small></div></a>'};
var A=L.map(card).join('');box.innerHTML='<div class="lec-tr">'+A+A+'</div>'}


/* 4. Dịch tiếng Anh cho chữ giao diện còn sót */
var EN=(function(){try{return (localStorage.getItem('ctas-lang')||'vi')==='en'||new URLSearchParams(location.search).get('lang')==='en'}catch(e){return false}})();
var NAMESEL='.lc h4,.person h4,.person .n,.lc img,.person img';
function tr(root){if(!EN||!window.CTAS_EN||!root)return;var D=window.CTAS_EN,norm=function(v){return v.replace(/[\s ]+/g,' ').trim()};
 var w=document.createTreeWalker(root,NodeFilter.SHOW_TEXT),n,L=[];while(n=w.nextNode())L.push(n);
 L.forEach(function(n){var p=n.parentElement;if(!p||/SCRIPT|STYLE/.test(p.tagName))return;var k=norm(n.nodeValue);if(!k)return;
  if(D[k]){n.nodeValue=n.nodeValue.replace(/\S[\s\S]*\S|\S/,D[k]);return}
  if(p.closest('.lc h4,.person h4,.person b')&&/^(TS|ThS|CN|PGS)/.test(k))n.nodeValue=window.CTAS_EN_TITLE(k)});
 (root.querySelectorAll?root:document).querySelectorAll('[aria-label],[placeholder],[title],img[alt]').forEach(function(e){['aria-label','placeholder','title','alt'].forEach(function(a){var v=e.getAttribute(a);if(!v)return;var k=norm(v);
  if(D['@'+k])e.setAttribute(a,D['@'+k]);else if(D[k])e.setAttribute(a,D[k]);else if(a==='alt'&&/^(TS|ThS|CN|PGS)/.test(k))e.setAttribute(a,window.CTAS_EN_TITLE(k))})})}

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
+'<div><h5>Kết nối</h5><a href="index.html#engage">Hợp tác doanh nghiệp</a><a href="index.html#engage">Tài trợ</a><a href="#">Cựu sinh viên</a><a href="index.html#news">Báo chí</a></div>'
+'<div><h5>Người học tương lai</h5><a href="index.html#study">Đào tạo</a><a href="gioi-thieu.html#apply">Tuyển sinh</a><a href="#">Học phí</a><a href="#">Học bổng</a><a href="#">Hỏi đáp</a></div>'
+'<div><h5>Sinh viên</h5><a href="#">Thời khoá biểu</a><a href="#">Chương trình học</a><a href="#">Công tác sinh viên</a><a href="gioi-thieu.html#apply">CLB CTE</a></div>'
+'<div><h5>Liên hệ</h5><a href="https://maps.google.com/?q=91+Chùa+Láng,+Đống+Đa,+Hà+Nội" target="_blank">91 Chùa Láng, Đống Đa, Hà Nội</a><a href="tel:0947396248">094 739 62 48</a><a href="mailto:cnkhdl@ftu.edu.vn">cnkhdl@ftu.edu.vn</a><a href="https://ftu.edu.vn" target="_blank">ftu.edu.vn</a><a href="https://www.facebook.com/KHOACNKHDL" target="_blank">Facebook</a></div>'
+'</div>'
+'<div class="copy"><span>© 2026 Trường Công nghệ và Khoa học ứng dụng - Trường Đại học Ngoại thương</span><span>Chính sách bảo mật, Điều khoản</span></div></div>'}
function go(){try{sfoot()}catch(e){}try{mnav()}catch(e){}lec();run();new MutationObserver(function(){if(!busy){clearTimeout(go.t);go.t=setTimeout(run,60)}}).observe(document.body,{childList:true,subtree:true})}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',go);else go();
})();
