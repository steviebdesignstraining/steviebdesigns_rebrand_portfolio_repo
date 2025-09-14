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
          fontSize: 96,
          background: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 'bold',
          borderRadius: 40,
          fontFamily: 'system-ui',
        }}
      >
        S
      </div>
    ),
    {
      ...size,
    }
  )
}
