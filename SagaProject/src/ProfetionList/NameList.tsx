import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipeRequest } from "./Action";
import { type NameList } from "./types";
import type { RootState } from './store/store';
import "./List.css";

export const EmployeeList = () => {
  const dispatch = useDispatch();
  const { recipe, loading, error } = useSelector((state: RootState) => state.recipe);
  const [selectedProfession, setSelectedProfession] = useState<string | null>(null);

  useEffect(() => {
    dispatch(fetchRecipeRequest());
  }, [dispatch]);

  if (loading) return <div>Загрузка…</div>;
  if (error) return <div>Ошибка: {error}</div>;
  if (!recipe.length) return <div>Нет данных</div>;

  const professions = Array.from(new Set(recipe.map(emp => emp.job)));

  const employeesForProfession = selectedProfession
    ? recipe.filter((emp: NameList) => emp.job === selectedProfession)
    : [];

  return (
    <div className="main">
      <div className="sidebar">
        <div className='title-row'>
          <div className='yes'>
            {professions.map((prof) => (
              <div
                key={prof}
                onClick={() => setSelectedProfession(prof)}
              >
                {prof}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="content">
        <div className='header'>
          <h2 className='header-title'>React Saga App</h2>
        </div>
        {selectedProfession == null ? (
          <p>Выберите профессию слева, чтобы увидеть сотрудников.</p>
        ) : (
          <>

            <div className='employee-row'>
              {employeesForProfession.map(emp => (
                <div key={emp.id} className="employee-item">
                  <div>
                    <p className='employee-circle'>{emp.name.charAt(0).toLocaleUpperCase()}</p>
                  </div>
                  <div className='emplyee2'>
                    <p className="employee-name">{emp.name}</p>
                    <p className="employee-job">{emp.job}</p>
                  </div>
                </div>
              ))}
              {employeesForProfession.length === 0 && (
                <p>Сотрудников с этой профессией не найдено..</p>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};