export async function getRecipes() {
  const response = await fetch('https://restapi.fr/api/recipes');
  if (response.ok) {
    return response.json();
  } else {
    throw new Error('something went wrong');
  }
}
