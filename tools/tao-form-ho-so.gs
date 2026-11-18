// Tao Google Form cap nhat ho so giang vien CTAS.
// Chon ham createForm o thanh tren roi bam Run.
function createForm() {
  var f = FormApp.create(
    'Cập nhật hồ sơ giảng viên CTAS');
  f.setDescription(
    'Thông tin sẽ hiển thị công khai trên ' +
    'trang hồ sơ giảng viên tại ctas.ftu.edu.vn.\n' +
    'Viết ngắn gọn, mỗi ý một dòng. ' +
    'Mục không có thì để trống.\n' +
    'Không ghi ngày sinh, quê quán, dân tộc, ' +
    'số điện thoại cá nhân, địa chỉ nhà.\n' +
    'Nếu hồ sơ đã có trên web, chỉ cần ghi ' +
    'phần cần sửa hoặc bổ sung.');
  f.setCollectEmail(true);
  f.setAllowResponseEdits(true);

  function text(t, h, req) {
    f.addTextItem().setTitle(t)
      .setHelpText(h || '').setRequired(!!req);
  }
  function para(t, h, req) {
    f.addParagraphTextItem().setTitle(t)
      .setHelpText(h || '').setRequired(!!req);
  }
  function sec(t, h) {
    f.addSectionHeaderItem().setTitle(t)
      .setHelpText(h || '');
  }

  sec('1. Thông tin chung');
  text('Họ và tên', 'Không kèm học hàm, học vị.', true);
  para('Chức danh',
    'Mỗi dòng một chức danh: chức vụ; vai trò ' +
    'nhóm nghiên cứu; học hàm/giảng viên, Khoa.', true);
  para('Học vị',
    'Mỗi dòng: Bằng (năm), ngành, nơi cấp.', true);
  text('Email', 'Email công vụ.', true);
  text('Website', 'Trang cá nhân hoặc Google Scholar.');
  text('Link ảnh chân dung',
    'Ảnh ngang vai, 3:4, tối thiểu 600x800 px. ' +
    'Tải lên Drive, bật chia sẻ link, dán vào đây.',
    true);

  sec('2. Nội dung hồ sơ');
  para('Lĩnh vực nghiên cứu',
    '2-4 lĩnh vực, mỗi dòng một lĩnh vực.', true);
  para('Các nghiên cứu quan tâm',
    '2-5 hướng cụ thể, mỗi dòng một hướng.', true);
  para('Các dự án đang thực hiện',
    'Mỗi dòng một dự án.');
  para('Giới thiệu',
    '2-3 đoạn, ngôi thứ ba, khoảng 250 từ.', true);
  para('Các công trình khoa học tiêu biểu',
    'Tối đa 10, trích dẫn đầy đủ, mỗi dòng một.');
  para('Giải thưởng, khen thưởng',
    'Mỗi dòng một giải thưởng.');
  para('Giảng dạy',
    'Tên học phần, mỗi dòng một học phần.');

  sec('3. Xác nhận');
  f.addCheckboxItem().setTitle('Đồng ý công bố')
    .setRequired(true).setChoiceValues([
      'Tôi đồng ý để CTAS đăng các thông tin ' +
      'và ảnh trên lên website.']);

  var ss = SpreadsheetApp.create(
    'Phản hồi - Cập nhật hồ sơ giảng viên CTAS');
  f.setDestination(
    FormApp.DestinationType.SPREADSHEET, ss.getId());

  Logger.log('Link gui thay co: ' +
    f.getPublishedUrl());
  Logger.log('Link sua form: ' + f.getEditUrl());
  Logger.log('Bang cau tra loi: ' + ss.getUrl());
}
