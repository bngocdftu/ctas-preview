(function(){
/* 1. Không ngắt dòng giữa các âm tiết của cùng một từ ghép */
var W=['khoa học','máy tính','dữ liệu','trí tuệ','nhân tạo','đại học','ngoại thương','công nghệ','nghiên cứu','sinh viên','giảng viên','học viên','nghiên cứu sinh','tiến sĩ','thạc sĩ','cử nhân','phó giáo sư','giáo sư','hội thảo','khoa học dữ liệu','thông tin','tin học','toán học','ứng dụng','kinh tế','kinh doanh','tài chính','doanh nghiệp','hợp tác','đào tạo','chương trình','tuyển sinh','học tập','giảng dạy','thực hành','thực tế','phòng thí nghiệm','hệ thống','quản lý','điện toán','đám mây','mô hình','ngôn ngữ','phần mềm','phần cứng','lập trình','thuật toán','xác suất','thống kê','định lượng','tính toán','liên ngành','bộ môn','hiệu trưởng','trưởng khoa','phó trưởng','tân sinh viên','thành tích','sự kiện','hoạt động','cuộc thi','giải nhất','giải nhì','giải ba','khuyến khích','quốc tế','quốc gia','việt nam','hà nội','trung quốc','năm học','học kỳ','học phần','môn học','tốt nghiệp','việc làm','nghề nghiệp','định hướng','chuyển đổi số','kỹ năng','dự án','sản phẩm','nền tảng','hạ tầng','trải nghiệm','cơ hội','phát triển','chuyên ngành','chuyên môn','tham gia','tổ chức','thành lập','giới thiệu','tin tức','liên hệ','đăng ký','học bổng','tài trợ','olympic tin học','cơ sở dữ liệu','học máy','học sâu','thị giác máy tính','xử lý','ngôn ngữ tự nhiên','an ninh mạng','trường đại học','ngoại thương','đội tuyển','đội ngũ','cán bộ','luận án','bảo vệ','vinh danh','sáng tạo','đời sống','khu vực','miền bắc','toàn quốc'];
W.sort(function(a,b){return b.length-a.length});
var esc=function(s){return s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')};
var RE=new RegExp('(^|[^\\p{L}])('+W.map(function(w){return esc(w).replace(/ /g,'[ \\u00A0]+')}).join('|')+')(?=$|[^\\p{L}])','giu');
var SKIP={SCRIPT:1,STYLE:1,TEXTAREA:1,INPUT:1,CODE:1,PRE:1,SELECT:1,OPTION:1};
function fix(root){if(!root)return;var w=document.createTreeWalker(root,NodeFilter.SHOW_TEXT,{acceptNode:function(n){for(var p=n.parentNode;p&&p!==root.parentNode;p=p.parentNode)if(SKIP[p.nodeName])return 2;return n.nodeValue.indexOf(' ')>-1?1:2}}),n,L=[];while(n=w.nextNode())L.push(n);
L.forEach(function(n){var v=n.nodeValue.replace(RE,function(m,a,b){return a+b.replace(/ +/g,' ')});if(v!==n.nodeValue)n.nodeValue=v})}
var busy=false;function run(){if(busy)return;busy=true;fix(document.body);busy=false}
/* 2. Dải giảng viên */
function lec(){var box=document.getElementById('lecRun');if(!box||!window.POSTS)return;var E=(localStorage.getItem('ctas-lang')||'vi')==='en';
var R={'119':'Trưởng Bộ môn Toán · Xác suất và thống kê','651':'Phó trưởng Khoa · Khoa học máy tính','120':'Trưởng Bộ môn Tin học','945':'Huấn luyện đội tuyển Olympic AI','725':'Khoa học máy tính','191':'Công nghệ thông tin','128':'Toán tin ứng dụng','699':'Toán kinh tế','177':'Toán ứng dụng','159':'Toán giải tích','140':'Đại số tuyến tính','125':'Cơ sở toán học cho tin học','658':'Khoa học máy tính','132':'Tin học','130':'Đảm bảo toán học cho hệ thống tính toán','134':'Xử lý thông tin và truyền thông','148':'Phương trình vi phân','150':'Toán kinh tế','146':'Toán giải tích','144':'Toán kinh tế'};
var ord=['119','651','120','725','191','128','945','699','177','125','159','140','658','944','934'];
var L=POSTS.filter(function(p){return p.c==='Giảng viên'&&!/DANH SÁCH/i.test(p.t)});
L.sort(function(a,b){var i=ord.indexOf(a.id),j=ord.indexOf(b.id);return (i<0?99:i)-(j<0?99:j)});
var card=function(p){var nm=p.t.replace(/^Th\.S/,'ThS').replace(/\s+/g,' ').trim();var ini=nm.split(' ').slice(-1)[0][0];
return '<a class="lc" href="bai-viet.html?id='+p.id+'"><div class="ph">'+(p.cover?'<img src="'+p.cover+'" alt="'+nm+'" loading="lazy">':ini)+'</div><div class="nm"><h4>'+nm+'</h4><small>'+(R[p.id]||(E?'Lecturer':'Giảng viên'))+'</small></div></a>'};
var A=L.map(card).join('');box.innerHTML='<div class="lec-tr">'+A+A+'</div>'}
function go(){lec();run();new MutationObserver(function(){if(!busy){clearTimeout(go.t);go.t=setTimeout(run,60)}}).observe(document.body,{childList:true,subtree:true})}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',go);else go();
})();
