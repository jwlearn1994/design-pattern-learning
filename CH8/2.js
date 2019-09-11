
/**
 * 驗證代理：
 * 使用 Proxy 中的 set 方法，可以很方便的驗證對一個對象的傳值。
 */


'use strict';


// 定義被代理物件
var userForm = {
  username: '',
  password: ''
};


// 驗證規則
const validator = {
  username(value) {
    // 只允許中文
    const re = /^[\u4e00-\u9fa5]+$/;
    return {
      valid: re.test(value),
      error: '使用者名稱只允許輸入中文'
    }
  },
  password(value) {
    return {
      password: value.length >= 6,
      error: '密碼長度需要至少 6 個字符'
    }
  }
};


// 代理方法
const getValidateProxy = function(target, validator) {
  return new Proxy(target, {
    _validator: validator,
    set(target, key, value) {
      if (value === '') return console.error('值不可為空')

      const validResult = this._validator[key](value);
      if (validResult.valid) {
        return Reflect.set(target, key, value);
      }
      console.error(`${validResult.error}`);
      return target[key] = false;
    }
  })
}


// 實例化代理物件
const userFormProxy = getValidateProxy(userForm, validator);
userFormProxy.username = '123'; // 使用者名稱只允許輸入中文
