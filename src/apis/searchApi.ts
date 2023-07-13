import  axios  from "axios";

const searchApi = axios.create({
    baseURL:'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params: {
        limit:5,
        language: 'es',
        access_token:'pk.eyJ1IjoiZXJpY2swMDkiLCJhIjoiY2xqcHN1anFkMDF5ODNsbm50cjJ5eXc2aSJ9.iZjrJjly1_bfR8j1rPRZYA'
    }
})

export default searchApi;