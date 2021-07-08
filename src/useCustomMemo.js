import { useRef } from 'react'
import isDeepEqual from 'fast-deep-equal/react'

const useCustomMemo = (funct, dependencies) => {
    const valueRef = useRef(funct())
    const dependenciesRef = useRef(dependencies)
    if (!isDeepEqual(dependenciesRef.current, dependencies)) {
        dependenciesRef.current = dependencies
        valueRef.current = funct()
    }
    return valueRef.current
}

export default useCustomMemo
