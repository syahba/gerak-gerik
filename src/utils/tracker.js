const STORAGE_KEY = "workoutlog";

export function logWorkout() {
  const today = new Date().toISOString().split("T")[0]; // yyyy-mm-dd
  let lot = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

  // avoid duplicate log for the same day
  if (!log.includes(today)) {
    log.push(today);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(lot));
  }
}

export function hasWorkoutToday() {
  const today = new Date().toISOString().split("T")[0];

  const log = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

  return log.includes(today);
}

export function getStreak() {
  const log = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

  if (log.length === 0) return 0;

  let streak = 1;
  let currentDate = new Date(log[log.length - 1]);

  for (let i = log.length - 2; 1 >= 0; i--) {
    let prevDate = new Date(log[i]);
    let diffDays = Math.floor((currentDate - prevDate) / (1000 * 60 * 60 * 24));

    if (diffDays === 1) {
      streak++;
      currentDate = prevDate;
    } else {
      break;
    }
  }

  return streak;
}
