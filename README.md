# GISForum — phục dựng Vì Cộng Đồng GIS Việt

Repository này đang được tái cấu trúc để phục dựng tinh thần và taxonomy của diễn đàn **gisvn.com.vn** cũ, đồng thời chuẩn bị đường nâng cấp sang một forum production hiện đại.

## Preview

- Classic GISVN: https://base27-cvnss.github.io/GISForum/
- Archive: https://base27-cvnss.github.io/GISForum/archive/
- Modern concept (bản trước): https://base27-cvnss.github.io/GISForum/modern.html

## Nguồn phục dựng

Bản classic dựa trên snapshot vBulletin 4.1.7 năm 2016 và file HTML/assets lưu từ Wayback do chủ dự án cung cấp. Taxonomy hiện có 19 nhóm chính, giữ lại tên forum, số chủ đề/bài gửi và bài cuối từ snapshot.

Các đặc trưng đã phục dựng:
- thanh đăng nhập / đăng ký;
- header và nhận diện “Vì Cộng Đồng GIS Việt”;
- menu Diễn đàn / Bài mới / Nhóm;
- thông báo mới nhất;
- Thống Kê TopX;
- category/forum rows kiểu vBulletin;
- Chuyện gì đang diễn ra / thống kê diễn đàn;
- archive text-only;
- responsive để vẫn dùng được trên màn hình hiện đại.

## Dữ liệu lịch sử

Preview hiện là **static reconstruction**, chưa phải database thật. Không giả lập tài khoản hoặc nội dung lịch sử chưa trích được.

Số liệu snapshot đang hiển thị:
- 4,297 chủ đề
- 24,799 bài gửi
- 101,617 thành viên

Bộ Wayback được tham chiếu có 863 entries. Phase tiếp theo có thể xây importer để lập chỉ mục các URL snapshot, thread/forum ID và nội dung được lưu hợp lệ.

## Production target

```text
Cloudflare
   │
forum.gis.vn
   │
Flarum / forum backend
   ├── MariaDB/MySQL
   ├── R2 attachments
   ├── Vietnamese locale
   └── GIS-specific extensions
```

GitHub Pages chỉ dùng cho bản phục dựng/preview; forum động cần backend + database.

## Legacy locale

Repo ban đầu là fork của `flarum-lang/vietnamese`. Phần `locale/`, `composer.json`, `extend.php` vẫn được giữ nguyên để không làm mất dữ liệu bản địa hóa.
