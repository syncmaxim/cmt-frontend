export const checkDateIsValid = obj => !!(obj && (obj.start.getTime() < obj.end.getTime()) && (obj.start.getTime() > new Date().getTime()) && (obj.end.getTime() > new Date().getTime()));
