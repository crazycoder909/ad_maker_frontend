import * as React from 'react';
import { SvgIcon, Box, Typography } from '@mui/material';

export default function SitemarkIcon() {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <SvgIcon sx={{ height: 40, width: 50 }}>
      <svg width="40" height="36" viewBox="0 0 50 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.00420098 35.3007L6.4942 8.62402L14.4871 19.9775L1.19272 35.7806C1.07494 35.8979 0.743012 36.1005 0.389666 35.9405C0.0333343 35.7792 -0.0172137 35.45 0.00420098 35.3007Z" fill="url(#paint0_linear_1047_215)"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M6.49402 8.60871L19.7269 4L34.9686 26.5955L20.269 34.5007L6.49402 8.60871Z" fill="url(#paint1_linear_1047_215)"/>
        <path d="M38.0762 0.333927L20.2317 34.5008L35.1713 26.5009L39.4488 0.9395C39.4701 0.737644 39.5446 0.238313 39.0019 0.0470814C38.5711 -0.104723 38.1719 0.142697 38.0762 0.333927Z" fill="#F26659"/>
        <defs>
          <linearGradient id="paint0_linear_1047_215" x1="8.36753" y1="18.8743" x2="-2.51299" y2="38.4913" gradientUnits="userSpaceOnUse">
          <stop stopColor="#DD3828"/>
          <stop offset="1" stopColor="#F26659"/>
          </linearGradient>
          <linearGradient id="paint1_linear_1047_215" x1="13.3629" y1="6.00004" x2="25.6177" y2="24.8652" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F26659"/>
          <stop offset="1" stopColor="#D6392A"/>
          </linearGradient>
        </defs>
      </svg>
        <path d="" />
      </SvgIcon>
      <Typography variant="h4" sx={{ marginLeft: 1 }}>
        Ad Manager
      </Typography>
    </Box>
  );
}


