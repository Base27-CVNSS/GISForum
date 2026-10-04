# GISForum — Product & Architecture Blueprint

## 1. Định vị

GISForum không chỉ là forum truyền thống. Mục tiêu dài hạn là một **community operating layer cho hệ sinh thái GIS Việt Nam**:

- hỏi đáp kỹ thuật có cấu trúc;
- thảo luận chuyên ngành;
- chia sẻ dữ liệu và mã nguồn;
- WebGIS/Map demo;
- hồ sơ chuyên môn;
- việc làm;
- marketplace;
- GeoAI assistant.

## 2. Taxonomy đề xuất

### GIS nền tảng
Cartography, CRS, topology, spatial analysis, standards.

### Desktop GIS
QGIS, ArcGIS Pro, GRASS, SAGA, GDAL.

### WebGIS
MapLibre, OpenLayers, Leaflet, Cesium, PMTiles, vector tiles, OGC APIs.

### Spatial Database
PostGIS, PostgreSQL, DuckDB Spatial, GeoParquet, indexing, optimization.

### GeoAI
GeoAI, spatial ML, remote sensing AI, Spatial LLM, agents, MCP.

### Earth Observation
Remote sensing, satellite, raster, COG, STAC.

### Surveying & 3D
GNSS, UAV, LiDAR, point cloud, photogrammetry, 3D Tiles, BIM-GIS.

### Data & Open Source
Open data, datasets, formats, ETL, licensing, standards.

### Marketplace
Source code, plugins, templates, datasets, services.

### Careers
Jobs, freelance, collaboration, research.

## 3. Content model

Mỗi discussion nên có metadata mở rộng:
- category/tags;
- software/tool;
- data format;
- CRS/EPSG;
- platform;
- solved/best-answer;
- code attachment;
- map/demo URL;
- dataset/license;
- geographic scope.

## 4. Production stack

### Application
Flarum stable + custom GIS extensions.

### Runtime
PHP-FPM + Nginx.

### Database
MariaDB/MySQL ở giai đoạn đầu. Redis chỉ thêm khi workload cần cache/queue.

### Object storage
Cloudflare R2:
- public: ảnh, preview, open dataset;
- private: attachment có quyền truy cập, backup.

### Edge
Cloudflare DNS/TLS/WAF/cache.

### Deployment
GitHub → CI/CD → Railway/Render/VPS.

## 5. GIS-native extensions

Ưu tiên phát triển theo module:

1. **GIS Metadata**
   - EPSG/CRS
   - bbox
   - data format
   - software/version

2. **Map Embed**
   - GeoJSON
   - PMTiles
   - WMS/WMTS
   - MapLibre style

3. **Dataset Card**
   - dung lượng
   - license
   - format
   - checksum
   - preview

4. **Code & Reproducibility**
   - code block
   - environment
   - version
   - sample dataset

5. **Best Answer / QA**
   - solved state
   - accepted answer
   - reputation

6. **GISForum Labs**
   - embed WebGIS demo
   - live project card
   - GitHub repository link

## 6. Nguyên tắc UI

- desktop-first nhưng responsive;
- nội dung kỹ thuật là trung tâm;
- tìm kiếm lớn, luôn dễ truy cập;
- tag/chuyên mục rõ;
- hỗ trợ dark/light;
- hạn chế trang trí dư thừa;
- GIS identity thể hiện bằng grid, contour, map topology và màu xanh không gian.

## 7. Preview

Static preview: `docs/index.html`.

Mục tiêu preview là khóa nhanh:
- visual language;
- information architecture;
- taxonomy;
- navigation;
- density thông tin.

Sau khi UI được duyệt mới map từng component sang Flarum theme/extension để tránh sửa backend sớm.
