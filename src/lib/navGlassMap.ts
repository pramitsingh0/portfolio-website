const NEUTRAL = [0, 0] as const;

// Rounded-lens displacement in CSS pixels. The flat center stays neutral;
// only the bezel bends the background, so navigation text stays readable.
export function lensOffset(
  x: number,
  y: number,
  width: number,
  height: number,
) {
  const radius = Math.min(width, height) / 2;
  const centerX = Math.max(radius, Math.min(width - radius, x));
  const dx = x - centerX;
  const dy = y - height / 2;
  const distance = Math.hypot(dx, dy);
  const inset = radius - distance;
  const bezel = Math.min(20, radius * 0.7);
  if (inset <= 0 || inset >= bezel || distance === 0) return NEUTRAL;

  // Convex squircle cross-section. Snell refraction, air (1) to glass (1.5).
  const t = Math.max(0.001, inset / bezel);
  const slope = Math.pow(1 - t, 3) / Math.pow(1 - Math.pow(1 - t, 4), 0.75);
  const normalZ = 1 / Math.hypot(slope, 1);
  const normalXY = slope * normalZ;
  const eta = 1 / 1.5;
  const bend =
    eta * normalZ - Math.sqrt(1 - eta * eta * (1 - normalZ * normalZ));
  const rayZ = -eta + bend * normalZ;
  const travel = (bend * normalXY * 24) / -rayZ;
  // Feather the outermost pixel into the rim highlight to avoid a hard seam.
  const amount = travel * Math.min(1, inset);
  return [(dx / distance) * amount, (dy / distance) * amount];
}

export const GLASS_DISPLACEMENT_SCALE = 64;

export function createNavGlassMap(width: number, height: number) {
  const canvas = document.createElement("canvas");
  // One sample per CSS pixel, not per device pixel. This is a smooth vector
  // field, not visible artwork; oversampling it adds work without detail.
  canvas.width = Math.ceil(width);
  canvas.height = Math.ceil(height);
  const context = canvas.getContext("2d");
  if (!context) return null;
  const pixels = context.createImageData(canvas.width, canvas.height);
  for (let y = 0; y < canvas.height; y++) {
    for (let x = 0; x < canvas.width; x++) {
      const [dx, dy] = lensOffset(x + 0.5, y + 0.5, width, height);
      const i = (y * canvas.width + x) * 4;
      pixels.data[i] = Math.round(255 * (0.5 + dx / GLASS_DISPLACEMENT_SCALE));
      pixels.data[i + 1] = Math.round(
        255 * (0.5 + dy / GLASS_DISPLACEMENT_SCALE),
      );
      pixels.data[i + 2] = 128;
      pixels.data[i + 3] = 255;
    }
  }
  context.putImageData(pixels, 0, 0);
  return canvas.toDataURL();
}
