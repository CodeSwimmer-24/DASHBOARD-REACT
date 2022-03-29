// @flow

const loadEnvVar = (name: string): string => {
  if (!process.env[name]) throw new Error(`process.env.${name} required`);
  return process.env[name];
};

export default loadEnvVar;
