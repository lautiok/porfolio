export default async function ApiBlog() {
  const api = process.env.API_BLOG;

  const res = await fetch(`${api}`);
  const data = await res.json();
  const posts = data.data;

  return posts;
}
