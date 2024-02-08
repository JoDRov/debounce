export const debounce = (mainFunction: Function, ms: number) => {
    let timer: any;
  
    return function (...args: any) {
      clearTimeout(timer);
  
      timer = setTimeout(() => {
        mainFunction(...args);
      }, ms);
    };
  };