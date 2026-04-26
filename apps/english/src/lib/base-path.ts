export const BASE_PATH = process.env.NODE_ENV === 'production' ? '/english' : '';

export function withBasePath(path: string) {
  return `${BASE_PATH}${path.startsWith('/') ? path : `/${path}`}`;
}
