export default async function handler(req, res) {
  try {
    const username = "AbuSantos";
    const apiUrl = `https://api.github.com/users/${username}/repos`;
    const response = await fetch(apiUrl);
    const repositories = await response.json();

    res.status(200).json(repositories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
