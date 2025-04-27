document.addEventListener('DOMContentLoaded', function() {
    const typedOutput = document.getElementById('typed-output');
    if (typedOutput) {
        const typed = new Typed(typedOutput, {
            strings: ['ESPECIALISTA EN EL INGRESO A LAS MEJORES PREPARATORIAS Y UNIVERSIDADES DE MÉXICO', 
                'TU CAMINO DIRECTO AL ÉXITO EN LOS EXAMENES DE ADMISIÓN MÁS EXIGENTES DE MÉXICO.', 
                'TU ASESOR EXPERTO PARA ALCANZAR TUS METAS EDUCATIVAS EN MÉXICO.'],
            typeSpeed: 70,
            backSpeed: 30,
            loop: true
        });
    }
});