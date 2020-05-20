import Network from '@/API/Network'

export const getTest = () => Network.get('/rng/api/department')
export const getMember = (data) => Network.get('/rng/api/member', data)
export const getHistory = (data) => Network.get('/rng/api/history', data)
export const getWork = (data) => Network.get('/rng/api/work', data)
export const postINfo = (data) => Network.post('/rng/api/register', data)
export const postCode = (data) => Network.post('rng/api/code', data)
export const getComments = (data) => Network.get('/rng/api/comment', data)
export const postComments = (data) => Network.post('/rng/api/comment', data)
export const getResult = (data) => Network.get('/rng/api/check', data)
