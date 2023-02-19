import { useState, useEffect } from 'react'
import Cookies from 'js-cookie'

function useCookie(key, initialValue, parser) {
  const [state, setState] = useState(initialValue)

  useEffect(() => {
    if (Cookies.get(key)) {
      let value = Cookies.get(key)
      value = typeof parser === 'function' ? parser(value) : value
      setState(value)
    }
  }, [])

  function setCookie(value, options) {
    // parser does not support async methods
    value = typeof parser === 'function' ? parser(value) : value
    setState(value)
    Cookies.set(key, value, options)
  }

  return [state, setCookie]
}

export default useCookie
