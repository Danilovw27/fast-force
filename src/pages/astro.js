<p id="hora"></p>

<script>
    function actualizarHora() {
        var ahora = new Date();
        var hora = ahora.getHours();
        var minutos = ahora.getMinutes();
        var segundos = ahora.getSeconds();

        // Formatear la hora para que tenga dos dígitos
        hora = hora < 10 ? '0' + hora : hora;
        minutos = minutos < 10 ? '0' + minutos : minutos;
        segundos = segundos < 10 ? '0' + segundos : segundos;

        var horaActual = hora + ':' + minutos + ':' + segundos;
        document.getElementById('hora').innerHTML = horaActual;
    }

    // Actualizar la hora cada segundo
    setInterval(actualizarHora, 1000);
</script>