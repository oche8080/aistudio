export interface ClassItem {
  id: string;
  title: string;
  time: string;
  trainer: string;
  category: 'Strength' | 'Cardio' | 'Mobility' | 'HIIT';
}

export interface Trainer {
  id: string;
  name: string;
  role: string;
  image: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  features: string[];
  recommended?: boolean;
}

export interface WorkoutPlanRequest {
  goal: string;
  level: string;
  duration: string;
}
