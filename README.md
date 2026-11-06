# AimForge — Đấu trường offline

Game bắn súng góc nhìn thứ nhất với bot, chạy trong trình duyệt. Không có đăng nhập, cơ sở dữ liệu hay API cần thiết.

## Chạy game

```bash
npm install
npm run dev
```

Mở địa chỉ được in trong terminal bằng trình duyệt trên máy tính có hỗ trợ WebGL. Để dùng bản production: `npm run build` rồi `npm start`. Trong bản production, sau lần tải đầu tiên khi có mạng, trình duyệt lưu game để có thể mở lại ngoại tuyến tại cùng địa chỉ (không hỗ trợ trong chế độ phát triển). Hãy giữ dữ liệu trang trong trình duyệt.

## Điều khiển

- **W A S D**: di chuyển; **Shift**: chạy nhanh.
- **Chuột**: ngắm và nhấn/giữ chuột trái để bắn.
- **R**: nạp đạn; **Esc**: tạm dừng và nhả chuột.
- Nút mở rộng ở góc trên hoặc cạnh nút bắt đầu: bật/tắt toàn màn hình. Trình duyệt có thể yêu cầu thao tác người dùng để cho phép toàn màn hình và khóa chuột.

Bot sẽ tấn công khi nhìn thấy bạn và xuất hiện trở lại sau khi bị hạ. Sinh lực về 0 sẽ kết thúc lượt chơi; chọn **Chơi lại** để bắt đầu lượt mới.

## Đăng lên GitHub Pages

Bản tĩnh đã có sẵn ở `index.html`, thư mục `assets/`, `public/fonts/` và `sw.js` tại gốc repository. Đẩy các file này lên GitHub, sau đó vào **Settings → Pages → Build and deployment**, chọn **Deploy from a branch**, chọn nhánh chứa các file và thư mục **/(root)** rồi lưu. Đợi GitHub xuất bản và mở địa chỉ Pages hiển thị trong phần cài đặt. Các đường dẫn hoạt động cả khi Pages được đặt trong thư mục con của repository.

Khi sửa mã nguồn, chạy `npm install` và `npm run build:pages`, rồi commit lại các file được tạo (`index.html`, `assets/`, `sw.js` và `.nojekyll`) cùng mã nguồn. Game có thể chạy ngoại tuyến sau lần truy cập đầu tiên khi kết nối mạng trên GitHub Pages; chế độ ngoại tuyến cần HTTPS (hoặc localhost) và trình duyệt cho phép service worker.

## Tính năng mới

- Chọn độ khó Dễ / Thường / Khó trước mỗi lượt; độ khó ảnh hưởng tốc độ, sát thương và nhịp bắn của bot.
- Nhấn **Q** để dùng một trong ba bộ cứu thương (+35 sinh lực). Bot có hoạt ảnh di chuyển, nháy khi trúng đạn và ngã khi bị hạ; súng, nạp đạn và đường đạn cũng có hiệu ứng.
- Bảng thành tích lưu 20 lượt tốt nhất trên thiết bị. Dữ liệu localStorage chỉ nằm trong trình duyệt và có thể mất khi xóa dữ liệu trang.
- Với Next.js tự chạy (`npm run dev` hoặc `npm start`), bảng thành tích có thêm tab **Máy chủ**. Sau khi kết thúc lượt, mở **Thành tích** và chủ động gửi điểm với tên tùy chọn. Không cần tài khoản. API `GET/POST /api/scores` lưu tối đa 100 kết quả vào `.data/scores.json` trên máy chủ; cần một tiến trình Node có quyền ghi thư mục này. Đây là lưu trữ file đơn giản cho tự host, không phù hợp serverless, nhiều tiến trình hay lưu trữ tạm. Điểm gửi từ client không có xác minh chống gian lận.
- GitHub Pages là hosting tĩnh nên **không có API hay bảng điểm máy chủ**; bản Pages vẫn chơi offline và lưu thành tích trên thiết bị. Không cần cấu hình server để chơi.
