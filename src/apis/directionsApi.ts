import  axios  from "axios";

const directionsApi = axios.create({
    baseURL:'https://api.mapbox.com/directions/v5/mapbox/driving',
    params: {
        alternatives:false,
        geometries: 'geojson',
        overview: 'simplified',
        steps: false,
        access_token:'pk.eyJ1IjoiZXJpY2swMDkiLCJhIjoiY2xqcHN1anFkMDF5ODNsbm50cjJ5eXc2aSJ9.iZjrJjly1_bfR8j1rPRZYA'
    }
})

export default directionsApi;