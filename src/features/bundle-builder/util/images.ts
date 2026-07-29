const imageMap: Record<string, string> = {
  '/cam001.png': '/cam001.png',
  camera1: '/cam001.png',
  camera2: '/cam002.png',
  camera3: '/cam003.png',
  camera4: '/cam004.png',
  camera5: '/cam005.png',
  sensor1: '/sensor001.png',
  sensor2: '/sensor002.png',
  plan1: '/plan001.svg',
  accessory1: '/accessory001.png',
  varient1: '/varient001Cam001.png',
  varient2: '/varient002cam001.png',
  varient3: '/varient003cam001.png',
};

const variantImageMap: Record<string, string> = {
  'wyze-cam-v4:white': '/varient001Cam001.png',
  'wyze-cam-v4:grey': '/varient002cam001.png',
  'wyze-cam-v4:black': '/varient003cam001.png',
  'wyze-cam-pan-v3:white': '/varient001cam002.png',
  'wyze-cam-pan-v3:black': '/varient003cam002.png',
  'wyze-cam-floodlight-v2:white': '/varient001cam003.png',
  'wyze-cam-floodlight-v2:black': '/varient003cam003.png',
  'wyze-battery-cam-pro:white': '/varient001cam005.png',
  'wyze-battery-cam-pro:black': '/varient003cam005.png',
};

export function resolveImageSource(source: string, fallback = '') {
  return imageMap[source] ?? source ?? fallback;
}

export function resolveVariantImage(productId: string, variantId: string, fallback = '') {
  return variantImageMap[`${productId}:${variantId}`] ?? resolveImageSource(fallback);
}
