import md5 from '@/utils/md5';
import {signKey} from '@/app.json';

const genSign = (data, sign_key) => {
  let str = '';
  if (!data) return str;
  const keys = Object.keys(data).sort();
  for (const key in keys) {
    if (keys[key] !== 'sign' && typeof data[keys[key]] !== 'object') {
      str += `${keys[key]}=${data[keys[key]]}&`;
    }
  }
  str += `key=${sign_key}`;
  return md5(str);
};

export const getSign = (data) => {
  return genSign(data, signKey);
};
