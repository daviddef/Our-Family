const BASE = import.meta.env.BASE_URL || '/';
export const u = (p = '/') =>
  ('/' + BASE + '/' + p).replace(/\/{2,}/g, '/');
