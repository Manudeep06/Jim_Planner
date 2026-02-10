import React from 'react';
import { DietPlan as DietPlanType, DayPlan } from '../types';
import './DietPlan.css';

interface DietPlanProps {
  dietPlan: DietPlanType;
}

const DietPlan: React.FC<DietPlanProps> = ({ dietPlan }) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const DayPlanCard: React.FC<{ dayPlan: DayPlan; dayNumber: number }> = ({ dayPlan, dayNumber }) => {
    return (
      <div className="day-card">
        <h3 className="day-title">Day {dayNumber}: {dayPlan.day}</h3>
        
        <div className="nutrition-grid">
          <div className="nutrition-item">
            <div className="nutrition-value">2,450</div>
            <div className="nutrition-label">Calories</div>
          </div>
          <div className="nutrition-item">
            <div className="nutrition-value">125g</div>
            <div className="nutrition-label">Protein</div>
          </div>
          <div className="nutrition-item">
            <div className="nutrition-value">180g</div>
            <div className="nutrition-label">Carbs</div>
          </div>
          <div className="nutrition-item">
            <div className="nutrition-value">65g</div>
            <div className="nutrition-label">Fat</div>
          </div>
        </div>

        <div className="meal-section">
          <h4 className="meal-title">🌅 Breakfast</h4>
          <ul className="meal-list">
            {dayPlan.meals.breakfast.map((meal, index) => (
              <li key={index} className="meal-item">{meal}</li>
            ))}
          </ul>
        </div>
        
        <div className="meal-section">
          <h4 className="meal-title">☀️ Lunch</h4>
          <ul className="meal-list">
            {dayPlan.meals.lunch.map((meal, index) => (
              <li key={index} className="meal-item">{meal}</li>
            ))}
          </ul>
        </div>
        
        <div className="meal-section">
          <h4 className="meal-title">🌆 Dinner</h4>
          <ul className="meal-list">
            {dayPlan.meals.dinner.map((meal, index) => (
              <li key={index} className="meal-item">{meal}</li>
            ))}
          </ul>
        </div>
        
        <div className="meal-section">
          <h4 className="meal-title">🍎 Snacks</h4>
          <ul className="meal-list">
            {dayPlan.meals.snacks.map((meal, index) => (
              <li key={index} className="meal-item">{meal}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  return (
    <div className="diet-plan-section">
      <div className="diet-plan-header">
        <h2 className="diet-plan-title">Your 7-Day Diet Plan</h2>
        <p className="diet-plan-subtitle">
          Generated for: {dietPlan.email} • {formatDate(dietPlan.createdAt)}
        </p>
      </div>

      <div>
        {dietPlan.plan.map((dayPlan, index) => (
          <DayPlanCard key={index} dayPlan={dayPlan} dayNumber={index + 1} />
        ))}
      </div>
    </div>
  );
};

export default DietPlan;
