# AimForge — 3D Sci-Fi Aim Trainer & Combat Telemetry

**AimForge** là ứng dụng web luyện phản xạ và kỹ năng ngắm bắn 3D (3D Aim Trainer) chạy trực tiếp trên trình duyệt, lấy cảm hứng từ phòng tập chiến thuật giả tưởng (Sci-Fi Orbital Holo-Chamber). Người chơi điều khiển một nhân vật chiến binh 3D toàn thân (Over-The-Shoulder view) sử dụng khẩu súng năng lượng giả tưởng **Aegis-IX Pulse Blaster** để tiêu diệt các bia tập dạng Hologram qua 4 chế độ chuyên sâu.

---

## Tính năng nổi bật

1. **Phòng tập 3D Sci-Fi & Nhân vật 3D toàn thân (Three.js / React Three Fiber)**:
   - Góc nhìn qua vai (Over-The-Shoulder Camera) hiển thị rõ nhân vật 3D có cấu trúc khớp (đầu mũ giáp kèm visor phát sáng, giáp ngực và lõi năng lượng sau lưng, cầu vai, hai tay, hông, đùi, giáp gối và giày chiến thuật) cầm khẩu **Pulse Blaster** đa chi tiết.
   - Nhân vật và khẩu súng tự động xoay hướng ngắm (IK Tracking) theo đúng điểm 3D dưới tâm ngắm chuột trong thời gian thực, kèm hiệu ứng giật (recoil), tia laser plasma và chớp lửa đầu nòng khi khai hỏa.
   - Vùng sinh bia (Safe Camera Frustum Spawner) luôn đảm bảo bia xuất hiện trong khung hình camera và không bao giờ bị che khuất bởi mô hình nhân vật ở góc dưới bên trái.
   - Tự động phát hiện thiết bị không hỗ trợ WebGL để hiển thị giao diện chẩn đoán dự phòng an toàn.

2. **4 Chế độ luyện tập (Training Protocols)**:
   - **Flick Matrix (`FLICK`)**: Bia hologram xuất hiện tuần tự ở các vị trí 3D ngẫu nhiên; tính điểm dựa trên tốc độ phản xạ, độ chính xác tâm bia (bullseye) và chuỗi trúng liên tiếp (`streak`).
   - **Orbital Tracking (`TRACKING`)**: Bia di chuyển liên tục theo quỹ đạo 3D; giữ tâm ngắm bám mục tiêu để ghi điểm theo từng nhịp khóa mục tiêu (10 ticks/giây) và tính hiệu suất bám mục tiêu (`Tracking Lock %`).
   - **Neural Reflex (`REACTION`)**: Bia ẩn trong khoảng thời gian chờ ngẫu nhiên trước khi phát sáng kích hoạt trong khung thời gian giới hạn; đo chính xác độ trễ phản xạ (`ms`).
   - **Micro Precision (`PRECISION`)**: Cụm bia kích thước siêu nhỏ xuất hiện ở cự ly xa nhằm rèn luyện độ chính xác tuyệt đối.

3. **Tài khoản, Chế độ Khách (Guest Mode) & Bảo mật Backend**:
   - **Khách (Guest)**: Chơi ngay không cần đăng nhập; lịch sử buổi tập và cài đặt được lưu tự động vào `localStorage`.
   - **Tài khoản đăng nhập**: Đăng ký / Đăng nhập an toàn (mật khẩu băm `scrypt` kèm salt, phiên đăng nhập lưu qua HTTP-Only Cookie ký HMAC-SHA256). Có sẵn nút **1-Click Demo Login (`VANGUARD_01`)** để kiểm thử nhanh.
   - **Chống gian lận phía Server**: API `POST /api/sessions` lấy `userId` trực tiếp từ phiên đăng nhập trên server (không bao giờ tin `userId` từ client), kiểm tra dữ liệu bằng **Zod** và tính toán lại `accuracy` cũng như giới hạn trần điểm số hợp lý theo thời lượng và số phát bắn trúng.

---

## Công nghệ sử dụng

- **Frontend & 3D**: Next.js (App Router), React 19, TypeScript, Three.js, `@react-three/fiber`, `@react-three/drei`, Tailwind CSS, Lucide Icons, Web Audio API Synthesizer.
- **Backend & Database**: Next.js Route Handlers, PostgreSQL, Drizzle ORM (`src/db/schema.ts`) & Prisma Schema (`prisma/schema.prisma`), Zod Validation.

---

## Hướng dẫn cài đặt và chạy dự án

### 1. Chuẩn bị biến môi trường

Sao chép file `.env.example` sang `.env`:

```bash
cp .env.example .env
```

Các biến môi trường cần thiết trong `.env`:

```env
DATABASE_URL=postgresql://postgres:postgres@127.0.0.1:5432/app_db
AUTH_SECRET=aimforge-tactical-telemetry-hmac-secret-2026
```

### 2. Khởi chạy PostgreSQL (qua Docker Compose)

Nếu chưa có PostgreSQL chạy sẵn tại cổng `5432`, khởi chạy bằng Docker Compose:

```bash
docker compose up -d
```

### 3. Cài đặt dependencies & Đồng bộ Database Schema

```bash
npm install
npx drizzle-kit push
```

*(Dữ liệu mẫu cho Bảng xếp hạng và tài khoản demo `VANGUARD_01` / mật khẩu `aimforge123` sẽ được tự động khởi tạo ngay lần truy vấn đầu tiên).*

### 4. Chạy ứng dụng

Chế độ phát triển (Development):

```bash
npm run dev
```

Hoặc build và chạy Production:

```bash
npm run build
npm run start
```

Truy cập ứng dụng tại `http://localhost:3000`.

---

## Chạy kiểm thử (Unit Tests) & Kiểm tra chất lượng

Chạy bộ kiểm thử đơn vị cho logic tính điểm (`calculateShotScore`, `calculateTrackingTickScore`), độ chính xác (`calculateAccuracy`), vùng sinh bia an toàn (`generateSafeTargetPosition`), chống gian lận (`validateAndSanitizeSession`) và thống kê tổng hợp (`computeAggregateStats`):

```bash
node --experimental-strip-types --test src/lib/__tests__/aimEngine.test.ts
```

Kiểm tra TypeScript và ESLint:

```bash
npx next typegen
npm exec tsc -- --noEmit
npm run lint
```

---

## Các giả định kỹ thuật quan trọng

1. **Tâm ngắm khớp 1:1 với vị trí con trỏ chuột**: Để đảm bảo trải nghiệm mượt mà trên mọi trình duyệt mà không bị chặn bởi giới hạn Pointer Lock, tâm ngắm SVG tùy chỉnh bám chính xác theo tọa độ chuột trên khung Canvas và thực hiện phép chiếu tia 3D (`THREE.Raycaster.setFromCamera`) xuyên qua đúng tọa độ NDC của tâm ngắm.
2. **Âm thanh tổng hợp bằng Web Audio API**: Hiệu ứng âm thanh súng blaster, tiếng báo trúng đích và hoàn thành lượt tập được tổng hợp trực tiếp bằng Web Audio API (`src/lib/soundEffects.ts`), giúp phản hồi tức thời với độ trễ bằng 0 và không phụ thuộc vào tệp âm thanh bên ngoài.
