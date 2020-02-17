export default async function (url) {
  const request = await fetch(url);
  return request.ok ? request.json() : request.statusText;
};
