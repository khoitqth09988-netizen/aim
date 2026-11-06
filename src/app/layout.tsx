import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AIMFORGE — Khu huấn luyện chiến thuật',
  description: 'Đấu súng góc nhìn thứ nhất với bot, không cần đăng nhập.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="vi"><body>{children}</body></html>;
}
