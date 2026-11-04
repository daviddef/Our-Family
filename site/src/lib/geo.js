/* THE WORLD AS SEEN FROM BRISBANE. Azimuthal equidistant, Brisbane at the centre (0, 0): a place's distance from the
   middle of the map is its true distance from Brisbane (the far side of the Earth is WORLD_R units out), and a straight
   line from the middle is the shortest way there. The land is drawn by scripts/make_world.mjs with the same projection;
   this file puts the family's places and routes on it. */
import { WORLD_R } from "../data/world.js";

export const EARTH_KM = 6371;
export const BRISBANE = [-27.4698, 153.0251];
const rad = Math.PI / 180;
const [LAT0, LON0] = BRISBANE;

/* the angle at the Earth's centre between two [lat, lon] points, in radians */
export function angle(a, b) {
  const [p1, l1, p2, l2] = [a[0] * rad, a[1] * rad, b[0] * rad, b[1] * rad];
  const h = Math.sin((p2 - p1) / 2) ** 2 + Math.cos(p1) * Math.cos(p2) * Math.sin((l2 - l1) / 2) ** 2;
  return 2 * Math.asin(Math.min(1, Math.sqrt(h)));
}
export const km = (a, b) => angle(a, b) * EARTH_KM;

/* [lat, lon] -> [x, y] on the map (y grows downwards, north is up) */
export function project(ll) {
  const p = ll[0] * rad, dl = (ll[1] - LON0) * rad, p0 = LAT0 * rad;
  const c = Math.acos(Math.max(-1, Math.min(1, Math.sin(p0) * Math.sin(p) + Math.cos(p0) * Math.cos(p) * Math.cos(dl))));
  if (c < 1e-9) return [0, 0];
  const k = c / Math.sin(c);
  const x = k * Math.cos(p) * Math.sin(dl);
  const y = k * (Math.cos(p0) * Math.sin(p) - Math.sin(p0) * Math.cos(p) * Math.cos(dl));
  return [(WORLD_R / Math.PI) * x, -(WORLD_R / Math.PI) * y];
}

/* n + 1 points along the shortest way from a to b, already projected */
export function arc(a, b, n = 48) {
  const w = angle(a, b);
  const v = ([la, lo]) => [Math.cos(la * rad) * Math.cos(lo * rad), Math.cos(la * rad) * Math.sin(lo * rad), Math.sin(la * rad)];
  const [A, B] = [v(a), v(b)];
  const out = [];
  for (let i = 0; i <= n; i++) {
    const t = i / n;
    const s0 = w < 1e-9 ? 1 - t : Math.sin((1 - t) * w) / Math.sin(w);
    const s1 = w < 1e-9 ? t : Math.sin(t * w) / Math.sin(w);
    const q = [0, 1, 2].map((j) => s0 * A[j] + s1 * B[j]);
    out.push(project([Math.asin(Math.max(-1, Math.min(1, q[2]))) / rad, Math.atan2(q[1], q[0]) / rad]));
  }
  return out;
}
export const pathOf = (pts) => "M" + pts.map((p) => p[0].toFixed(1) + "," + p[1].toFixed(1)).join("L");
