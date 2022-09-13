function cachingDecoratorNew(func) {
  let cache = [];

  function wrapper(...args) {
    const hach = func(...args);
    let objectInCache = cache.find(item => item === hach);
    if(objectInCache) {
      console.log("Из кэша: " + objectInCache);
      return "Из кэша: " + objectInCache;
    }
    const result = func(...args);
    cache.push(result);
    if(cache.length > 5) {
      cache.shift();
    }
    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;
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