import memoize from 'lodash/memoize';

function memoizedBind<T>(callback: (...args: any[]) => T, ...args: any[]) {
  return function bound() {
    return callback(...args);
  };
}

export default memoize(memoizedBind) as Function;
