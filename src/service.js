
export const getUbicacion = async (latitud, longitud) => {
    try {
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?current_weather=true&latitude=${latitud}&longitude=${longitud}&timezone=America/Argentina/Jujuy`);
        return response.json();
    } catch {
        throw new Error('Algo salio mal en la consulta a la API');
    }
};
