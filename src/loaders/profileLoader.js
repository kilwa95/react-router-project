import { redirect } from 'react-router-dom';
import { isLoggedin } from '../apis/auth';
import { getRecipes } from '../apis/recipes';

export async function profileLoader() {
  const recipes = await getRecipes();
  if (await isLoggedin()) {
    return {
      recipes: new Promise((res) => setTimeout(() => res(recipes), 3000)),
    };
  } else {
    return redirect('/');
  }
}
