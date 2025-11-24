import env from '@/env';
import { split } from 'es-toolkit/compat';
import $ from 'jquery';

export const origins = env.origins;
export const checkOrigin = (origin) => {
    const allowedOrigins = split(origins, '~');
    return $.inArray(origin, allowedOrigins) >= 0;
};
