import React, { useMemo,useEffect, useState } from 'react'
const countries = [
    {
        name: "India",
        value: "IN",
        cities: [
            "Delhi", "Mumbai", "Banglore"
        ]

    },

    {
        name: "Pakistan",
        value: "PK",
        cities: [
            "Karachi", "Lahore", "City3"
        ]

    },

    {
        name: "Bangladesh",
        value: "BG",
        cities: [
            "Dhaka", "City2", "City3(Bg)"
        ]

    }
]

/*






    const [selectedCountry, setSelectedCountry] = useState("");

    // useMemo to get the cities array only when the selected country changes
    const cities = useMemo(() => {
        const country = countries.find(c => c.value === selectedCountry);
        return country ? country.cities : [];
    }, [selectedCountry]);

    return (
        <div>
            <select 
                onChange={(e) => setSelectedCountry(e.target.value)}
                value={selectedCountry}
            >
                <option value="" disabled>Select a country</option>
                {countries.map((country) => (
                    <option key={country.value} value={country.value}>
                        {country.name}
                    </option>
                ))}
            </select>

            <select disabled={!selectedCountry}>
                <option value="" disabled>Select a city</option>
                {cities.map((city, index) => (
                    <option key={index} value={city}>
                        {city}
                    </option>
                ))}
            </select>
        </div>
    );

*/
function Interview() {


    const [currCountryIndex, setCurrCountryIndex] = useState(-1);
    const [cityArr, setCityArr] = useState(countries[0].cities);

    useEffect(() => {
        if(currCountryIndex >= 0)
            setCityArr(countries[currCountryIndex].cities)
    }, [currCountryIndex])
    return (
        <div>
            <select onChange={(e) => {
                setCurrCountryIndex(parseInt(e.target.value, 10));
            }}>
                <option >Select a country</option>
                {countries.map((item, index) => {
                    return <option value={index} key={index}>{item.name}</option>
                })}
            </select>

            <select disabled ={currCountryIndex === -1} >
                <option >Select a city</option>
                {cityArr.map((city, index) => {
                    return <option value={city} key={index}>{city}</option>
                })}
            </select>

        </div>
    )    

}

export default Interview
