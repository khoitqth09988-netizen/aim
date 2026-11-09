# AimForge — Đấu trường offline

Game bắn súng góc nhìn thứ nhất với bot, chạy trong trình duyệt. Không cần đăng nhập; chế độ offline không cần kết nối máy chủ.

## Chạy game

```bash
npm install
npm run dev
```

Mở địa chỉ được in trong terminal bằng trình duyệt trên máy tính có hỗ trợ WebGL. `npm run dev` chạy cả game và máy chủ co-op trên cùng một cổng; chọn **PHÒNG ONLINE** và dùng địa chỉ đã điền sẵn. Để dùng bản production: `npm run build` rồi `npm start` (cũng chạy cả hai). Trong bản production, sau lần tải đầu tiên khi có mạng, trình duyệt lưu game để có thể mở lại ngoại tuyến tại cùng địa chỉ (không hỗ trợ trong chế độ phát triển). Hãy giữ dữ liệu trang trong trình duyệt.

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
- Bảng thành tích và lịch sử lưu tối đa 50 lượt gần đây trên thiết bị. Dữ liệu localStorage chỉ nằm trong trình duyệt và có thể mất khi xóa dữ liệu trang.
- Với Next.js tự chạy (`npm run dev` hoặc `npm start`), bảng thành tích có thêm tab **Máy chủ**. Sau khi kết thúc lượt, mở **Thành tích** và chủ động gửi điểm với tên tùy chọn. Không cần tài khoản. API `GET/POST /api/scores` lưu tối đa 100 kết quả vào `.data/scores.json` trên máy chủ; cần một tiến trình Node có quyền ghi thư mục này. Đây là lưu trữ file đơn giản cho tự host, không phù hợp serverless, nhiều tiến trình hay lưu trữ tạm. Điểm gửi từ client không có xác minh chống gian lận.
- GitHub Pages là hosting tĩnh nên **không tự chạy được API**. Bản Pages vẫn chơi offline; để chơi co-op hoặc xem điểm co-op cần kết nối tới máy chủ online riêng.


## Co-op và máy chủ online

Co-op là chế độ **hợp tác chống bot**, không phải PvP: tối đa 8 người trong cùng một phòng cùng nhìn thấy nhau và chiến đấu với cùng một nhóm bot. Mỗi người có sinh lực và thành tích riêng. Máy chủ điều khiển bot, đạn, sát thương và lưu kết quả; tên chỉ là biệt danh, không phải tài khoản. Bot không dừng khi nhấn Esc trong trận online.

Nếu chạy game bằng `npm run dev` hoặc `npm start`, máy chủ co-op đã được chạy cùng game trên cùng cổng, không cần chạy lệnh nào khác. Nút **PHÒNG ONLINE** tự điền địa chỉ của trang. Mỗi người mở cùng địa chỉ game và dùng cùng mã phòng; sau khi kết nối có thể sao chép link mời trong hộp thoại.

Nếu chỉ dùng GitHub Pages cho giao diện thì cần một máy chủ co-op riêng. Chạy máy chủ riêng bằng Node.js 22+:

```bash
npm ci
npm run server:online
```

Mặc định máy chủ lắng nghe trên cổng `4000` ở mọi interface. Đặt `PORT` để đổi cổng, `DATA_DIR` để đổi thư mục lưu file `online-history.json`, và `ALLOWED_ORIGINS` (danh sách origin phân cách bằng dấu phẩy) để giới hạn các trang có thể kết nối. Mặc định cho phép mọi origin, phù hợp thử nghiệm nhưng nên giới hạn khi triển khai. Dữ liệu lưu bằng file cục bộ, tối đa 500 lượt; hãy sử dụng ổ đĩa bền vững và sao lưu. Không chạy nhiều bản máy chủ cùng ghi một thư mục.

1. Triển khai máy chủ Node trên dịch vụ hỗ trợ **WebSocket và lưu trữ bền vững**. Có sẵn `render.yaml` để tạo dịch vụ Node trên Render: kết nối repository trong Render, tạo Blueprint từ repository và triển khai. Gói free có thể ngủ và hệ thống file có thể bị xóa khi khởi động lại; dùng ổ đĩa bền vững nếu muốn giữ lịch sử. Không có máy chủ công khai được cấu hình sẵn trong repository. Đặt reverse proxy HTTPS/TLS trước server và chuyển tiếp cả WebSocket upgrade đến `/multiplayer` lẫn các request HTTP tới `/api/online-scores` và `/health`.
2. Trong game, chọn **PHÒNG ONLINE**, nhập địa chỉ công khai của máy chủ (`https://...` hoặc `wss://...`), biệt danh và mã phòng, rồi kết nối. WebSocket được kiểm tra phiên bản giao thức trước khi thông báo kết nối thành công. Người cùng phòng cần nhập cùng máy chủ và mã phòng.
3. Sau khi kết nối, nhấn **BẮT ĐẦU HUẤN LUYỆN**. Khi bị hạ hoặc rời phòng, kết quả tự lưu trên máy chủ. Xem tab **CO-OP** trong **THÀNH TÍCH**, chọn xếp hạng hoặc lịch sử gần đây; bộ lọc theo tên chỉ tìm biệt danh và không xác thực danh tính.

Có thể cài sẵn địa chỉ máy chủ cho bản GitHub Pages bằng cách chạy `NEXT_PUBLIC_ONLINE_SERVER=https://dia-chi-server npm run build:pages` sau khi triển khai, rồi commit lại các file tĩnh. Hoặc chỉ cần gửi link mời từ trong game; không đưa thông tin bí mật vào địa chỉ hay link mời.

GitHub Pages chạy qua HTTPS nên trình duyệt chỉ cho kết nối đến máy chủ **WSS có chứng chỉ TLS hợp lệ**; GitHub Pages không thể tự chạy tiến trình Node/WebSocket. Khi phát triển trên HTTP tại máy của mình có thể dùng `ws://` tới máy chủ mà trình duyệt truy cập được. Đừng sử dụng địa chỉ `localhost` nếu người chơi khác đang dùng máy khác. Không nhập mật khẩu hay token vào trường địa chỉ này.

Máy chủ này là bản co-op cơ bản, chưa có tài khoản, mã phòng bí mật, xác thực danh tính hay chống gian lận hoàn chỉnh; không dùng bảng điểm cho giải đấu hoặc dữ liệu nhạy cảm. Để trở lại chế độ offline, mở **PHÒNG ONLINE** trước trận và chọn **NGẮT KẾT NỐI / CHƠI OFFLINE**. Mất kết nối sẽ kết thúc lượt hiện tại.

## Kiểm thử

```bash
npm test
npm run typecheck
npm run lint
npm run build
npm run build:pages
```

Kiểm thử server mở nhiều kết nối, kiểm tra đồng bộ phòng, bắn bot, lưu điểm và chạy cùng origin với giao diện. Kiểm thử thủ công với hai trình duyệt/máy khác nhau sau khi triển khai WSS để xác nhận cấu hình mạng, TLS và WebGL.
