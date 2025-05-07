// next.config.ts
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  eslint: {
    // не останавливать билд при ошибках линтера
    ignoreDuringBuilds: true,
  },
  // ...остальные настройки
}

export default nextConfig
