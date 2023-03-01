type Paths = string[] | undefined;

export function getUrl(paths: Paths = []) {
  if (paths.length === 0) {
    throw new Error(`routes empty when call ${getUrl.name}`);
  }

  return paths?.map((path) => `/${path}`).join("");
}
