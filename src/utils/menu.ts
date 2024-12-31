export const formatPrice = (price: number): string => {
  return `$${price.toFixed(2)}`;
};

export const formatCalories = (calories?: number): string => {
  return calories ? `~${calories} cal` : '';
};

export const getItemBadges = (item: MenuItem): string[] => {
  const badges: string[] = [];
  
  if (item.isBestSeller) badges.push('Best Seller');
  if (item.isHealthy) badges.push('Healthy Choice');
  if (item.isNew) badges.push('New');
  if (item.tag) badges.push(item.tag);
  
  return badges;
};