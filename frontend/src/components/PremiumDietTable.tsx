import React from 'react';
import { DietPlan as DietPlanType } from '../types';

interface PremiumDietTableProps {
  dietPlan: DietPlanType;
}

const PremiumDietTable: React.FC<PremiumDietTableProps> = ({ dietPlan }) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getMealText = (meals: string[]) => {
    return meals.join(', ');
  };

  return (
    <div className="diet-table-container">
      <h2 className="diet-table-title">Your Personalized 7-Day Diet Plan</h2>
      <p className="diet-table-subtitle">
        Generated for: <span style={{ fontWeight: '600', color: '#1e293b' }}>{dietPlan.email}</span> • {formatDate(dietPlan.createdAt)}
      </p>
      
      <div style={{ overflowX: 'auto', borderRadius: '16px' }}>
        <table className="premium-table">
          <thead>
            <tr>
              <th>Day</th>
              <th>Calories</th>
              <th>Protein</th>
              <th>Carbs</th>
              <th>Fat</th>
              <th>Breakfast</th>
              <th>Lunch</th>
              <th>Dinner</th>
            </tr>
          </thead>
          <tbody>
            {dietPlan.plan.map((dayPlan, index) => (
              <tr key={index}>
                <td>{dayPlan.day}</td>
                <td>2,450</td>
                <td>125g</td>
                <td>180g</td>
                <td>65g</td>
                <td>{getMealText(dayPlan.meals.breakfast)}</td>
                <td>{getMealText(dayPlan.meals.lunch)}</td>
                <td>{getMealText(dayPlan.meals.dinner)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PremiumDietTable;
