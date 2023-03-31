const cache: { [key: string]: string } = {};

const accessEnv = (key: string, defaultValue?: string): string => {
  if (!(key in process.env)) {
    if (defaultValue) return defaultValue;
    throw new Error(`${key} not found in process.env`);
  }

  if (cache[key]) return cache[key];

  cache[key] = process.env[key] || '';
  return cache[key];
}

export default accessEnv;
