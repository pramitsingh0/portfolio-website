import assert from "node:assert/strict";
import test from "node:test";
import {
  lensOffset,
  GLASS_DISPLACEMENT_SCALE,
} from "../src/lib/navGlassMap.ts";

test("flat center and outside the capsule are optically neutral", () => {
  assert.deepEqual(lensOffset(400, 28, 800, 56), [0, 0]);
  assert.deepEqual(lensOffset(0, 0, 800, 56), [0, 0]);
});

test("opposite lens edges bend inward symmetrically", () => {
  const top = lensOffset(400, 5, 800, 56);
  const bottom = lensOffset(400, 51, 800, 56);
  assert.equal(Math.abs(top[0]), 0);
  assert.ok(top[1] > 0);
  assert.ok(Math.abs(top[1] + bottom[1]) < 1e-10);
  const left = lensOffset(5, 28, 800, 56);
  const right = lensOffset(795, 28, 800, 56);
  assert.ok(left[0] > 0);
  assert.ok(Math.abs(left[0] + right[0]) < 1e-10);
});

test("desktop and mobile fields remain finite and fit the displacement channels", () => {
  for (const [width, height] of [
    [800, 56],
    [320, 110],
  ]) {
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        for (const offset of lensOffset(x + 0.5, y + 0.5, width, height)) {
          assert.ok(Number.isFinite(offset));
          assert.ok(Math.abs(offset) < GLASS_DISPLACEMENT_SCALE / 2);
        }
      }
    }
  }
});
