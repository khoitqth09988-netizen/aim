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
