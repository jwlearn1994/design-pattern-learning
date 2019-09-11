'use strict';


// 此處以 _ 下劃線開頭的屬性為私有屬性，並且無法直接訪問到


// filterFunc 為驗證是否為私有屬性的方法
function propFilter(prop) {
  return prop.indexOf('_') === 0;
}


// 建立私有屬性保護 Proxy
function protect(obj, filterFunc) {
  return new Proxy(obj, {
    get(obj, prop) {
      if (!filterFunc(prop)) {
        let value = Reflect.get(obj, prop);
        // 如果是方法, 將this指向修改原對象(因為這裡只是代理，避免造成方法無法讀取私有屬性)        
        if (typeof value === 'function') {
          value = value.bind(obj);
        }
        return value;
      }
    },
    set(obj, prop, value) {
      if (filterFunc(prop)) {
        throw new TypeError(`Can't set property "${prop}"`);
      }
      return Reflect.set(obj, prop, value);
    },
    has(obj, prop) {
      return filterFunc(prop) ? false : Reflect.has(obj, prop);
    },
    ownKeys(obj) {
      return Reflect.ownKeys(obj).filter(prop => !filterFunc(prop));
    },
    getOwnPropertyDescriptor(obj, prop) {
      return filterFunc(prop) ? undefined : Reflect.getOwnPropertyDescriptor(obj, prop);
    }
  });
}

