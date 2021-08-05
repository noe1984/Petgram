import React, {useEffect, useState, useRef} from 'react'

export function useNearScreen () {
    const refElement = useRef(null)
    const [show, setShow] = useState(false)

    useEffect(() => {
        Promise.resolve(
            typeof IntersectionObserver !== 'undefined'
            ? IntersectionObserver
            : (import('intersection-observer'))
        )
    
        .then(() => {
            const observer = new IntersectionObserver((entries) => {
                const {isIntersecting} = entries[0]
                if(isIntersecting) {
                    setShow(true)
                    observer.disconnect()
                }
            })
            observer.observe(refElement.current)
        })
    }, [refElement])
    return [show, refElement]
}
