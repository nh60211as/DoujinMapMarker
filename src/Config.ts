const getEnvOrEmpty = (env: string | undefined): string => {
  let defaultValue = "";
  if (env) {
    defaultValue = env;
  }

  return defaultValue;
};

export const ROUTE_PREFIX = getEnvOrEmpty(import.meta.env.ROUTE_PREFIX);
