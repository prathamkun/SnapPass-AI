import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const logger = {
  info: (...args) => console.log('[INFO]', ...args),
  error: (...args) => console.error('[ERROR]', ...args),
  warn: (...args) => console.warn('[WARN]', ...args),
  debug: (...args) => console.debug('[DEBUG]', ...args),
};

export default logger;
