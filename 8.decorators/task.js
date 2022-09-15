function cachingDecoratorNew(func) {
  let cache = [];

  function wrapper(...args) {

    const hash = args.join(',');
    let objectInCache = cache.findIndex((item) => item.hash === hash);
    if(objectInCache !== -1) {
      console.log("Из кэша: " + cache[objectInCache].value);
      return "Из кэша: " + cache[objectInCache].value;
    }

    let value = func.call(this,...args);
    cache.push({hash, value});
    if(cache.length > 5) {
      cache.shift();
    }

    console.log("Вычисляем: " + value);
    return "Вычисляем: " + value;

  }
  return wrapper;
}


function debounceDecoratorNew(func, delay) {
  let timeoutId = null;
  wrapper.allCount = 0;
  wrapper.count = 0;
  function wrapper(...args) {

    if(timeoutId === null) {
      func(...args);
      wrapper.count++;
    }
    
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(...args)
      wrapper.count++;
    }, delay);
    wrapper.allCount++;
  }

  console.log(wrapper.count);
  console.log(wrapper.allCount);
  
  return wrapper;
}