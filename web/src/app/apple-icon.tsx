import { ImageResponse } from 'next/og'

export const size = {
  width: 180,
  height: 180,
}
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'transparent',
          borderRadius: 40,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo/steviebdesigns Logo Symbol.png"
          alt="Steviebdesigns Logo"
          width={180}
          height={180}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            borderRadius: 40,
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  )
}
