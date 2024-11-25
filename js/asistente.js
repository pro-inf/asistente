// Respuestas predefinidas de la IA
const respuestasIA = {
    "hola": "¡Hola! ¿En qué puedo ayudarte hoy?",

    "como estas": "¡Estoy bien, gracias por preguntar!",

    "cual es tu nombre": "Soy una IA creada para ayudarte.",

    "adios": "¡Hasta pronto! Que tengas un gran día.",

    "quien eres": "Soy una inteligencia artificial diseñada para responder tus preguntas.",

    "que es la informatica": "¡La informática es la ciencia que estudia cómo almacenar, procesar y transmitir información de manera automática, principalmente en formato digital.",

    "para que sirve la programacion": "La programación sirve para crear aplicaciones, sitios web, juegos y soluciones que facilitan la vida cotidiana. También permite resolver problemas utilizando computadoras.",

    "que es dragon ball": "Dragon Ball es una franquicia de manga, anime, películas y videojuegos que cuenta la historia de Son Goku, un guerrero saiyajin que lucha por proteger la Tierra.",

    "para que sirve la electronica": "La electrónica es una disciplina que se encarga de diseñar, fabricar y mantener dispositivos electrónicos. La electrónica es una rama de la ingeniería que tiene aplicaciones en muchos ámbitos de la vida cotidiana.",

    "que es facebook": "Facebook es una red social que permite a los usuarios crear un perfil, conectarse con otros usuarios y compartir contenido. Es una de las redes sociales más populares del mundo.",

    "por que casi no hay empleo en el ecuador": "Las principales razones por las que a los jóvenes se les dificulta encontrar trabajo son la falta de experiencia y los sueldos bajos. Aunque la primera disminuyó versus el año pasado, sigue siendo uno de los factores que impide a los jóvenes lograr un empleo.",

    "por que ella no te ama": "La pregunta que todos nos hemos hecho en algún momento de nuestras vidas. Hay muchas razones por las que alguien puede no sentir el mismo amor o interés que nosotros sentimos por ellos, pero tranquilo bro, ya llegara la indicada a tu vida, primero eres tu.",

    "como fuiste creada": "Fui creada por el programa Visual Studio Code, con HTML, CSS y JavaScript.",

    "quien es cristiano ronaldo": "Cristiano Ronaldo está llamado a ser uno de los mejores futbolistas de todos los tiempos y actualmente a sus 39 años de edad, sigue siendo el mejor pagado del mundo debido a su popularidad, su carisma y por su puesto, la magia que tiene en los pies al momento de jugar futbol.",

    "quien es messi": "Lionel Andrés Messi Cuccittini (Rosario, 24 de junio de 1987), conocido como Leo Messi, es un futbolista argentino que juega como delantero o centrocampista. Desde 2023, integra el plantel del Inter Miami de la MLS canadoestadounidense.",

    "para que sirve diseño web": "El diseño web es una actividad creativa enfocada en realizar la parte visual de entornos y materiales digitales. Se encarga de layouts e interfaces de plataformas digitales como un sitio web o una app y realiza una configuración visible y funcional para el usuario al distribuir y conceptualizar diversos elementos.",

    "como se produce la energia electrica": "La energía eléctrica se produce, habitualmente, en centrales eléctricas que operan favoreciendo el giro de turbinas empujadas por vapor de agua calentada, a partir de reacciones nucleares o de la combustión de hidrocarburos. También existen centrales que se aprovechan de los recursos renovables.",

    "es la corrupcion un problema en ecuador": "La corrupción es un problema grave en Ecuador. La legislación ecuatoriana prevé sanciones penales para los funcionarios públicos que cometan actos de corrupción, pero el gobierno no aplica la ley de manera eficaz y los funcionarios pueden incurrir en prácticas corruptas con impunidad.",

    "quien es el mejor jugador de la historia": "Pelé, el mejor jugador del siglo XX junto al argentino Diego Maradona, falleció este jueves a los 82 años. Pelé hizo magia en las canchas del mundo durante 21 años.",

    "quieres ser mi novia": "no eres mi tipo, lo siento, feo.",

    "pasame tu numero de whatsaap": "911", 

    "cual es el proposito de esta pagina web": "El proposito de esta pagina web es dar respuesta a todas tus dudas.",

    "para que sirve soporte tecnico": "soporte tecnico sirve para darnos a conocer sobre las partes de un cumputador q lo estructura, y sus funcionamientos.",

    "que quiero hacer con mi vida": "La elección de carrera, estudios o proyectos personales es una preocupación constante para muchos jóvenes. Muchos se sienten presionados por las expectativas sociales o familiares para una buena toma de desiciones.",

    "por que las redes sociales son tan importantes": "En la era digital, las redes sociales juegan un papel crucial en la vida de los jóvenes. Se preguntan sobre la autenticidad, las relaciones virtuales, el impacto de las redes en su autoestima y la presión por mantener una buena imagen.",

    "calculame la raiz cuadrada de 65": "la raiz cuadrada de 65 es = 8.0622577483.",

    "cual es el atomo de un neutron": "El neutrón es una partícula subatómica, un nucleón, sin carga neta, presente en el núcleo atómico de prácticamente todos los átomos, excepto el protio. Aunque se dice que el neutrón no tiene carga, en realidad está compuesto por tres partículas elementales cargadas llamadas cuarks, cuyas cargas sumadas son cero.",

    



    

    

}

// Función para enviar un mensaje
function submitMessage() {
    const entradaUsuario = document.getElementById("userInput").value.trim().toLowerCase();
    if (entradaUsuario) {
        agregarMensaje(entradaUsuario, 'user');
        document.getElementById("userInput").value = ''; // Limpiar campo de entrada

        setTimeout(() => {
            generarRespuestaIA(entradaUsuario);
        }, 500);
    }
}

// Función para agregar un mensaje al chat
function agregarMensaje(mensaje, remitente) {
    const mensajeElemento = document.createElement("div");
    mensajeElemento.classList.add("message", remitente);
    mensajeElemento.textContent = mensaje;
    document.getElementById("chatBox").appendChild(mensajeElemento);
    document.getElementById("chatBox").scrollTop = document.getElementById("chatBox").scrollHeight;
}

// Generar respuesta de la IA
function generarRespuestaIA(entradaUsuario) {
    const respuesta = respuestasIA[entradaUsuario] || "Lo siento, no tengo una respuesta para eso.";
    agregarMensaje(respuesta, 'ai');
}