import Api from '@/services/Api'

const getPlaceholders = () => {
    return Api().get('/? limit=12')
}

export default {
    getPlaceholders,
}