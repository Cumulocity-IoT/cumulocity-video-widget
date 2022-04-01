

export interface Condition {
    type: string;
    label: string;
    position: number;
}

export const applicationConstants = {        
    WEATHER_STATION: {
    id: '17828862',
    name: 'Weather Station',
    CONFIGURATION_TYPE_TEMP: 'weather.temp',
    CONFIGURATION_TYPE_WIND: 'weather.wind',
    CONFIGURATION_TYPE_SUN: 'weather.sun',
    CONFIGURATION_TYPE_TEMP_FORECAST: 'weather.forecast.temp',
    CONFIGURATION_TYPE_WIND_FORECAST: 'weather.forecast.wind',
    CONFIGURATION_TYPE_SUN_FORECAST: 'weather.forecast.sun',
    WIND_CONDITIONS: [
        { type: 'NO_WIND', label: 'No wind', position: 1 },
        { type: 'WINDY', label: 'Windy', position: 2 },
        { type: 'STORMY', label: 'Stormy', position: 3 },
    ],
    SUNLIGHT_CONDITIONS: [
        { type: 'DARK', label: 'Dark', position: 1 },
        { type: 'CLOUDY', label: 'Cloudy', position: 2 },
        { type: 'PARTLY_CLOUDY', label: 'Partly cloudy', position: 3 },
        { type: 'SUNNY', label: 'Sunny', position: 4 },
    ],
    TEMP_CONDITIONS: [
        { type: 'FREEZING', label: 'Freezing', position: 1 },
        { type: 'COLD', label: 'Cold', position: 2 },
        { type: 'WARM', label: 'Warm', position: 3 },
        { type: 'HOT', label: 'Hot', position: 4 },
    ],
    WEATHER_STATION_INITIAL_CONFIGURATION:
        'weather.wind=WINDY\nweather.temp=WARM\nweather.sun=CLOUDY\nweather.wind.direction=NW\nweather.humidity=SEMI_HUMID\nweather.forecast.wind=WINDY\nweather.forecast.temp=WARM\nweather.forecast.sun=CLOUDY\nweather.forecast.wind.direction=NW\nweather.forecast.humidity=SEMI_HUMID',
},
WIND_TURBINES_GROUP: {
    id: '872',
    name: 'Wind Turbines',
},
WIND_TURBINE_01: {
    id: '553',
    name: 'Wind Turbine 01',
},
WIND_TURBINE_02: {
    id: '631',
    name: 'Wind Turbine 02',
},
WIND_TURBINE_03: {
    id: '632',
    name: 'Wind Turbine 03',
},
WIND_TURBINE_04: {
    id: '633',
    name: 'Wind Turbine 04',
},
WIND_TURBINE_05: {
    id: '634',
    name: 'Wind Turbine 05',
},
WIND_TURBINE_06: {
    id: '635',
    name: 'Wind Turbine 06',
},
SOLAR_PANELS_GROUP: {
    id: '9236',
    name: 'Solar Panels',
},
SOLAR_PANEL_01: {
    id: '626',
    name: 'Solar Panel 01',
},
SOLAR_PANEL_02: {
    id: '627',
    name: 'Solar Panel 02',
},
BATTERIES_GROUP: {
    id: '1916',
    name: 'Batteries',
},
}
