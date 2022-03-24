const fetchSearch = (searchTerm, path) => {
    return fetch(`http://localhost:4000/${path}/${searchTerm}`)
    .then(response => response.json())
    .then(resData => resData.results)
}

const wrapPromise = (promise) => {
    let status = 'pending'
    let result = ''
    let suspender = promise.then(response => {
        status = 'success'
        result = response
    }, err => {
        status = 'error'
        result = err
    })
    return {
        read() {
            if(status === 'pending') {
                throw suspender
            } else if (status === 'error') {
                throw result
            }
            return result
        }
    }
}

export const createResource = (searchTerm, path) => {
    return {
        result: wrapPromise(fetchSearch(searchTerm, path))
    }
}