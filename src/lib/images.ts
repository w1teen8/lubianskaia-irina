export function unsplash(id: string, w: number, h: number) {
  return `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=80`;
}

export const IMG = {
  heroPortrait: "1580489944761-15a19d654956",
  aboutPortrait: "1595476108010-b4d1f102b1b1",
  salonInterior: "1560066984-138dadb4c035",
  epilation: "1512290923902-8a9f81dc236c",
  depilation: "1519824145371-296894a0daa9",
  sugaring: "1544161515-4ab6ce6db874",
  lashLamination: "1616683693504-3ea7e9ad6fec",
  browShaping: "1500840216050-6ffa99d75160",
  browTinting: "1631730359585-38a4935cbec4",
  spaStones: "1600334129128-685c5582fd35",
  lavender: "1499002238440-d264edd596ec",
  clientPortrait: "1544005313-94ddf0286df2",
} as const;
