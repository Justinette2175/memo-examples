import React from 'react';
import isDeepEqual from 'fast-deep-equal/react'

const useCustomCallback = (func, dependencies)=>{
  const dependenciesRef = React.useRef(dependencies);
  const functionRef = React.useRef(func);
  if (!isDeepEqual(dependenciesRef.current, dependencies)) {
    console.log("dependencies have changed", dependenciesRef.current, dependencies)
    dependenciesRef.current = dependencies;
    functionRef.current = func;
  } 
  return functionRef.current;
}

export default useCustomCallback;