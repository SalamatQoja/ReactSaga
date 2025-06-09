import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipeRequest } from "./Action";
import { type NameList } from "./types";
import type { RootState } from './store/store';

export const EmployeeList = () => {
  const dispatch = useDispatch();
  // ✅ Правильный selector с RootState
  const recipeState = useSelector((state: RootState) => state.recipe);

  // 🛡️ Подстраховка: если state.recipe отсутствует
  if (!recipeState) {
    return <div>Глобальный state.recipe отсутствует!</div>;
  }

  const { recipe, loading, error } = recipeState;


  useEffect(() => {
    dispatch(fetchRecipeRequest());
  }, [dispatch]);


  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка: {error}</div>;
  if (!recipe.length) return <div>Нет данных</div>;


  return (
    <div>
      {recipe.map((emp: NameList) => (
        <div key={emp.id}>
          <h3>{emp.name}</h3>
          <p>{emp.ingredients}</p>
          <p>{emp.instructions}</p>
        </div>
      ))}
    </div>
  );
};
