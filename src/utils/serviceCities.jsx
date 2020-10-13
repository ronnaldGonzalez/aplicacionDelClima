const cities = [{
    city: "Buenos Aires",
    country: "Argentina",
    countryCode: "AR"
},
{
    city: "Bogota",
    country: "Colombia",
    countryCode: "CO"
},
{
    city: "Madrid",
    country: "España",
    countryCode: "ES"
},
{
    city: "Ciudad de Mexico",
    country: "Mexico",
    countryCode: "MX"
},
{
    city: "Santiago",
    country: "Chile",
    countryCode: "CL"
}
]
export const getCities = () => cities;

export const getCountryNameByCountryCode = (countryCode) => (
    cities.filter(city => city.countryCode === countryCode)[0].country
)