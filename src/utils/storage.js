/**
 * 获取本地存储
 * @param {string} name 
 * @returns 
 */
export const getLocalItem = name => {
    const data = window.localStorage.getItem(name)
    if (data) {
        try {
            return JSON.parse(data)
        } catch (error) {
            return data
        }
    }
}

/**
 * 设置本地存储
 * @param {string} name 
 * @param {*} value 
 */
export const setLocalItem = (name, value) => {

    if (typeof value === 'object') {
        value = JSON.stringify(value)
    }

    window.localStorage.setItem(name, value)
}

/**
 * 删除本地存储
 * @param {string} name 
 */
export const removeLocalItem = name => {
    window.localStorage.removeItem(name)
}

/**
 * 获取会话存储
 * @param string name 
 * @returns 
 */
export const getSessionItem = name => {
    const data = window.sessionStorage.getItem(name)
    if (data) {
        try {
            return JSON.parse(data)
        } catch (error) {
            return data
        }
    }
}

/**
 * 设置会话存储
 * @param {string} name 
 * @param {*} value 
 */
export const setSessionItem = (name, value) => {
    if (typeof value === 'object') {
        value = JSON.stringify(value)
    }

    window.sessionStorage.setItem(name, value)
}

/**
 * 删除会话存储
 * @param {string} name 
 */
export const removeSessionItem = name => {
    window.sessionStorage.removeItem(name)
}

