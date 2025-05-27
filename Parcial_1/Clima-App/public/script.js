document.getElementById('buscar').addEventListener('click', async () => {
    const ciudad = document.getElementById('ciudad').value;
    const resultado = document.getElementById('resultado');

    try {
        const res = await fetch(`/api/clima/${ciudad}`);
        if (!res.ok) {
            throw new Error('Error al obtener datos del clima');
        }
        const data = await res.json();

        resultado.innerHTML = `
            <h2>${data.name}, ${data.sys.country}</h2>
            <p>Temperatura: ${data.main.temp}°C</p>
            <p>Clima: ${data.weather[0].description}</p>
        `;
    } catch (err) {
        resultado.innerText = 'No se pudieron obtener los datos. Verifica la ciudad.';
        console.error(err);
    }
});
