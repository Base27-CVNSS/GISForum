# GISForum

**GISForum** là hướng phát triển một diễn đàn chuyên nghiệp cho cộng đồng GIS Việt Nam, tập trung vào **GIS, WebGIS, GeoAI, Remote Sensing, UAV/LiDAR, GNSS, PostGIS, dữ liệu không gian và sản phẩm mã nguồn mở**.

> Repo này xuất phát từ gói ngôn ngữ tiếng Việt của Flarum. Thư mục `locale/` và phần Flarum language pack hiện vẫn được giữ lại làm nền tảng bản địa hóa; phần sản phẩm GISForum sẽ được tái cấu trúc dần thay vì phá vỡ dữ liệu dịch đang có.

## Preview

Trang xem trước tĩnh được đặt trong `docs/` và deploy bằng GitHub Pages:

**https://base27-cvnss.github.io/GISForum/**

Preview mô phỏng:
- trang chủ thảo luận chuyên nghiệp;
- chuyên mục GIS / QGIS / WebGIS / GeoAI / PostGIS / Viễn thám / UAV-LiDAR / Data / Jobs;
- tìm kiếm và lọc chủ đề;
- dark/light mode;
- modal tạo thảo luận;
- khu tài nguyên, việc làm và GISForum Lab;
- responsive cho desktop/mobile.

## Định hướng production

Kiến trúc đề xuất:

```text
Cloudflare
   │
forum.gis.vn
   │
Flarum / GISForum application
   │
├── MySQL / MariaDB
├── Redis (khi cần)
├── Cloudflare R2 (media / dataset / attachment)
└── GitHub CI/CD
```

Nơi chạy phù hợp: Railway / Render / VPS Docker. GitHub Pages chỉ dùng để preview UI tĩnh, không chạy PHP/Flarum.

## Lộ trình

1. **Phase 0 — Preview:** định hình UX/UI, taxonomy chuyên mục và branding.
2. **Phase 1 — Forum Core:** dựng Flarum app production, auth, profile, tags, moderation, search.
3. **Phase 2 — GIS Extensions:** map/embed, dataset attachment, code snippet, CRS metadata, GeoJSON/PMTiles preview.
4. **Phase 3 — Community Platform:** marketplace, jobs, labs, reputation, best answer, API/MCP.
5. **Phase 4 — GeoAI:** trợ lý hỏi đáp GIS, semantic search và agent hỗ trợ phân tích không gian.

## Cấu trúc hiện tại

```text
GISForum/
├── docs/                  # GitHub Pages preview
├── locale/                # Vietnamese translations inherited from Flarum language pack
├── .github/workflows/     # Pages deployment
├── composer.json          # Current Flarum language-pack metadata
├── extend.php             # Current Flarum language-pack bootstrap
└── GISFORUM.md            # Product/architecture blueprint
```

## License

MIT, theo nền tảng repo hiện tại.
