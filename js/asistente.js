// Respuestas predefinidas de la IA
const respuestasIA = {
    "hola": "¡Hola! ¿En qué puedo ayudarte hoy?",

    "como estas": "¡Estoy bien, gracias por preguntar!",

    "cual es tu nombre": "Soy una IA creada para ayudarte.",

    "cual es tu mascota": "Mi mascota es la web.",

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

    "se puede conseguir empleo en ecuador": "La tasa de empleo adecuado se ubicó en 33,6% en marzo de 2024, según el Instituto Nacional de Estadística y Censos (INEC). Eso equivale a una baja de 1,5 puntos porcentuales frente al mismo mes de 2023.",

   "me puedes ayudar con mi tarea": "¡Claro! ¿En qué te gustaría que te ayude con tu tarea?.",

   "como se origino la filosofía": "La filosofía se originó en la antigua Grecia, alrededor del siglo VI aC, aunque sus raíces pueden rastrearse en las tradiciones anteriores de Mesopotamia, Egipto y otras culturas antiguas. Sin embargo, fue en Grecia donde la filosofía comenzó a desarrollarse de manera sistemática, como una disciplina que se apartaba de la mitología y la religión para buscar explicaciones racionales y lógicas sobre el mundo y la existencia humana.",

   "como se dio el origen de los idiomas": "El origen de los idiomas es un tema complejo y multifacético que ha fascinado a lingüistas, antropólogos y filósofos durante siglos. Aunque no hay un consenso definitivo sobre cómo surgieron los idiomas, se han propuesto varias teorías para explicar este fenómeno.",

   "¿Qué es la inteligencia artificial?": "La inteligencia artificial (IA) es un campo de la informática que busca desarrollar sistemas o máquinas capaces de realizar tareas que normalmente requieren de inteligencia humana. Estas tareas incluyen actividades como el aprendizaje, la toma de decisiones, el reconocimiento de patrones, el procesamiento del lenguaje natural, la percepción sensorial y la resolución de problemas.",

    "¿Cuántas horas de sueño son recomendables?": "La cantidad recomendada de horas de sueño varía según la edad y las necesidades individuales de cada persona. Sin embargo, existen pautas generales basadas en investigaciones científicas que indican cuánto sueño es ideal para mantener una buena salud.",

   "¿Qué debo hacer si tengo fiebre?": "Bebe mucho líquido para mantenerte hidratado. Usa ropa liviana. Usa una manta liviana si sientes frío, hasta que pasen los escalofríos. Toma paracetamol (Tylenol, otros) o ibuprofeno (Advil, Motrin IB, otros).",

    "¿Cómo preparar un buen currículum?": "Preparar un buen currículum vitae (CV) es crucial para destacar en el proceso de búsqueda de empleo. Un currículum bien estructurado y bien escrito puede ser la clave para captar la atención de un reclutador.",

    "¿Cómo bajar de peso de manera saludable?": "Bajar de peso de manera saludable es un proceso gradual que implica cambios en la dieta, el ejercicio y el estilo de vida. Es importante hacerlo de forma segura para evitar efectos negativos en la salud.",
        
    "¿Cómo mejorar la memoria para estudiar?": "Aquí te dejo algunos consejos prácticos y técnicas que pueden ayudarte a potenciar tu memoria: 1. Organiza y estructura la información Usa mapas mentales: Los mapas mentales son diagramas visuales que organizan la información de manera jerárquica y conectada. Esto te ayuda a visualizar las relaciones entre conceptos y facilita la retención. Divide el contenido: En lugar de intentar estudiar todo de una vez, divide la información en bloques pequeños. Estudia por secciones y repasa cada parte antes de pasar a la siguiente. Usa listas y resúmenes: Realizar resúmenes o listas de puntos clave te ayuda a organizar y simplificar la información para que sea más fácil de recordar.",

    "¿Cuál es la diferencia entre un videojuego en línea y uno de consola?": "La diferencia entre un videojuego en línea y uno de consola radica principalmente en la plataforma en la que se juega, la conectividad, y la experiencia de juego.",

    "¿Qué actividades hacer en casa para distraerme?": "Las posibilidades son muchas para distraerte en casa. Puedes optar por actividades creativas, juegos, ejercicios físicos, aprender algo nuevo o incluso relajarte. Lo importante es encontrar lo que más disfrutes para aprovechar al máximo tu tiempo y mantener tu mente y cuerpo activos.",

    "¿Cómo desarrollar buenos hábitos de vida?": "Desarrollar buenos hábitos de vida es clave para mejorar tu salud física y mental a largo plazo, desarrollar buenos hábitos de vida es un proceso gradual que requiere disciplina, motivación y paciencia. Recuerda que pequeños cambios consistentes pueden tener un gran impacto en tu bienestar general.",

    "¿Cómo puedo reducir el estrés?": "Reducir el estrés es fundamental para mejorar tanto tu salud mental como física, algunas serian las Técnicas de Relajación, Ejercicio Físico, Cuidado de la Salud Mental, Hábitos de Vida Saludables, Reducir el estrés requiere un enfoque integral que involucre tanto el cuidado físico como el emocional. Al implementar algunas de estas estrategias de manera constante, puedes lograr una mejor gestión del estrés y mejorar tu calidad de vida.",

    "¿Qué hacer si me siento cansado todo el tiempo?": "Sentirse cansado todo el tiempo puede ser un signo de que algo en tu vida necesita ajustarse. El cansancio persistente puede ser causado por una variedad de factores, desde hábitos de vida poco saludables hasta problemas médicos subyacentes, algunas recomendaciones son Revisa tu calidad de sueño, Aliméntate de manera saludable, Haz ejercicio regularmente, Evalúa tu salud mental, El cansancio constante puede tener muchas causas, desde hábitos de vida poco saludables hasta problemas médicos o emocionales. Al identificar la raíz del problema y hacer ajustes en tu rutina diaria, puedes mejorar significativamente tu energía y bienestar general. Si el cansancio persiste, no dudes en consultar a un profesional para obtener un diagnóstico adecuado."

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
