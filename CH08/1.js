
/**
 * 緩存代理：
 * 可以將一些開銷很大的運算結果進行緩存，再次調用該函數時，如果參數一致，則可以直接返回緩存的結果，
 * 而不用重新計算。例如將頁碼和對應結果進行緩存，請求同一頁時，就不用再進行 Ajax。充分實現單一職責原則。
 */

'use strict';


//  fetch Ajax 請求功能
function Fetch(url) {
  return fetch(url).then(res=>res.json());
}


// fetch Ajax 請求代理
function getFetchProxy(fn, cache = new Map()) {
  return new Proxy(fn, {
    apply(target, context, args) {

      // 組合所有參數為一個字串，並作為 cache 的 key
      const argsString = args.join(' ');

      // 比對 cache 緩存
      if (cache.has(argsString)) {
        return cache.get(argsString);
      }

      // 不存在 cache 時
      const result = fn(...args);
      cache.set(argsString, result);
      
      return result;
    }
  })
}

let FetchCache = getFetchProxy(Fetch);

// 第一次請求正常請求
FetchCache('https://jsonplaceholder.typicode.com/todos/1').then(res=>console.log(res)); // {...}

// 第二次請求由 cache 返回值(檢查 Network 並沒有發出任何請求，證明是由 cache 返回無誤)
FetchCache('https://jsonplaceholder.typicode.com/todos/1').then(res=>console.log(res)); // {...}