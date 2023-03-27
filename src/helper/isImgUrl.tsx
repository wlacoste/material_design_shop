export function isImgUrl(url: string) {
  return fetch(url, { method: "HEAD" }).then((res) => {
    return res.headers.get("Content-Type")!.startsWith("image");
  });
}
