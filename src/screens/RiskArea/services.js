import nominatim from '../../api/nominatim';

export const getAddressInfo = async (lat,lng) => {
    try {
        const response = await nominatim.get(`reverse?format=jsonv2&lat=${ lat }&lon=${ lng}`)
        return response.data
    } catch (error) {
        throw error;
    }
}