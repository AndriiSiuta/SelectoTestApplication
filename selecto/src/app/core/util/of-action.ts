import {OperatorFunction} from 'rxjs';
import {filter} from 'rxjs/operators';

export function ofAction(...allowedTypes: any[]): OperatorFunction<any, any> {
  const allowedMap = new WeakMap();
  allowedTypes.forEach(klass => (allowedMap.set(klass, true)));

  return filter((action: any) => {
    return allowedMap.get(action.constructor);
  });
}
