export const useResearchQuery = (industry: string, interests: Array<1>) => {
  const query = { industry: industry, interest: interests || [] };
  const params = Object.entries(query)
    .map(([key, value]) => {
      if (Array.isArray(value)) {
        return value
          .map((v) => `${encodeURIComponent(key)}=${encodeURIComponent(v)}`)
          .join("&");
      } else {
        return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
      }
    })
    .join("&");

  return params;
};
