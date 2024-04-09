export const localStorageManager = () => {
  const get = (key: string): string | null => {
    let currentValue: string | null = null;
    try {
      const storedItem = localStorage.getItem(key);
      currentValue = storedItem ? (JSON.parse(storedItem) as string) : null;
    } catch (error) {
      currentValue = null;
    }
    return currentValue;
  };

  const set = <T>(key: string, value: T) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  const remove = (key: string) => {
    localStorage.removeItem(key);
  };

  return { set, get, remove };
};
