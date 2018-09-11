export type WeatherModel = {
  clouds: {
    all: number
  },
  coord: {
    lat: number,
    lon: number
  },
  dt: number,
  id: number,
  main: {
    humidity: number,
    pressure: number,
    temp: number,
    temp_max: number,
    temp_min: number,
  },
  name: string,
  rain: any,
  snow: any,
  sys: {
    country: string
  },
  weather: any,
  wind: {
    speed: number,
    deg: number
  }
}
