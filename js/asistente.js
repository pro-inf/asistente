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

    "cual es el lugar mas frio de la tierra":"El lugar más frío de la tierra es la estación de Vostok, se encuentra en la Antártida y puede llegar a tener una temperatura de -67,8 °C",

    "quien es el autor de El señor de los anillos":"El autor de El señor de los anillos es J. R. R. Tolkien.",

    "cuales son los cinco tipos de sabores primarios":"El gusto es uno de nuestros cinco sentidos. Los sabores primarios son dulce, amargo, ácido, salado y umami.",

    "cual es el lugar mas frio de la tierra":"La Antártida, que está cubierta de capas con un espesor de entre dos mil y tres mil metros",

    "quien escribio la odisea":"Este poema de 24 cantos fue escrito por Homero.",
    
    "como se llama la capital de mongolia":"La capital de Mongolia es Ulan Bator",
    
    "cual es el rio mas largo del mundo":"Aunque algunos pueden creer que es el Nilo… en realidad es el Amazonas.",
    
    "en que continente esta ecuador":"Ecuador es un país latinoamericano y, por tanto, se encuentra en América.",
    
    "donde originaron los juegos olimpicos":"Se originaron en Grecia. Se llaman así porque se celebraban en la ciudad de Olimpia.",
    
    "que tipo de animal es la ballena":"La ballena es un mamífero marino de hasta 30 metros de longitud.",
    
    "que cantidad de huesos hay  en el cuerpo humano":"Un adulto tiene 206, mientras que los recién nacidos tienen alrededor de 300 huesos.",
    
    "cuando acabo la II guerra mundial":"La II Guerra Mundial finalizó en 1945.",
    
    "quien es el autor de el quijote":"El Quijote es una de las obras literarias más famosas, y fue escrita por Miguel de Cervantes.",
    
    "quien pinto la ultima cena":"El autor de esta magnífica pintura fue Leonardo da Vinci.",
    
    "en que pais se encuentra la torre de pisa":"La torre de Pisa es una torre inclinada que se encuentra en Italia.",
    
    "que es la fotosintesis" : "la fotosíntesis es el proceso por el cual las plantas convierten la luz solar en energía",
    
    "cuantos planetas hay en el sistema solar" : "hay ocho planetas en el sistema solar",
    
    "quien pinto la mona lisa" : "leonardo da vinci pintó la mona lisa",
    
    "cual es el rio mas largo del mundo" : "el río amazonas es el río más largo del mundo",
    
    "que es el ciclo del agua" : "el ciclo del agua es el proceso continuo de evaporación, condensación y precipitación del agua",
    
    "cuantos paises hay en africa" : "hay 54 países en áfrica",
    
    "quien fue albert einstein" : "albert einstein fue un físico teórico famoso por su teoría de la relatividad",
    
    "que es la teoria de la relatividad" : "la teoría de la relatividad describe la relación entre espacio, tiempo y gravedad",
    
    "quien descubrio america" : "cristóbal colón descubrió américa en 1492",
    
    "cual es la capital de españa" : "la capital de españa es madrid",
    
    "que es un ecosistema" : "un ecosistema es una comunidad de organismos interactuando entre sí y con su entorno",
    
    "que significa la palabra 'amor'" : "el amor es un sentimiento de afecto profundo hacia alguien o algo",
    
    "que es un agujero negro" : "un agujero negro es una región del espacio donde la gravedad es tan fuerte que nada puede escapar de él",
    
    "cuantos oceanos hay en la tierra" : "hay cinco océanos: pacífico, atlántico, índico, ártico y antártico",
    
    "quien fue el primer presidente de los estados unidos" : "george washington fue el primer presidente de los estados unidos",
    
    "que es la inteligencia artificial" : "la inteligencia artificial es la capacidad de una máquina para realizar tareas que requieren inteligencia humana",
    
    "que es la energia renovable" : "la energía renovable proviene de fuentes naturales que se reponen constantemente, como el sol o el viento",
    
    "quien fue william shakespeare" : "william shakespeare fue un escritor y dramaturgo inglés muy conocido por sus obras",
    
    "cual es el idioma mas hablado del mundo" : "el chino mandarín es el idioma más hablado del mundo",
    
    "que es la evolucion" : "la evolución es el proceso mediante el cual las especies cambian con el tiempo a través de la selección natural",
    
    "cual es el animal mas grande del mundo" : "la ballena azul es el animal más grande del mundo",
    
    "que es un terremoto" : "un terremoto es un temblor de la tierra causado por el movimiento de las placas tectónicas",
    
    "que significa la palabra 'historia'" : "la historia es el estudio de los hechos y acontecimientos pasados",
    
    "que es el adn" : "el adn es el material genético que contiene la información hereditaria de los seres vivos",
    
    "quien pinto la ultima cena": "leonardo da vinci pintó la última cena",
    
    "cuantos continentes hay" : "hay siete continentes en el mundo",
    
    "quien es el fundador de facebook" : "Mark Zuckerberg es el fundador de facebook",
    
    "que es un volcan" : "un volcán es una apertura en la corteza terrestre por donde salen gases, cenizas y lava",
    
    "cuantos huesos tiene el cuerpo humano" : "el cuerpo humano tiene 206 huesos",
    
    "que es un virus" : "un virus es un agente infeccioso que se reproduce dentro de las células de un ser vivo",
    
    "que significa la palabra 'cultura'" : "la cultura es el conjunto de costumbres, tradiciones y conocimientos de un grupo social",
    
    "cual es el pais mas grande del mundo" : "rusia es el país más grande del mundo",
    
    "que es el cambio climatico" : "el cambio climático se refiere a los cambios a largo plazo en las temperaturas y patrones climáticos globales",
    
    "que es una celula" : "la célula es la unidad básica de la vida, que forma los organismos vivos",
    
    "que es un superheroe" : "un superheroe es un personaje ficticio con habilidades extraordinarias o poderes especiales",
    
    "cuantos metros tiene un kilometro" : "un kilómetro tiene 1,000 metros",
    
    "quien invento la bombilla" : "thomas edison inventó la bombilla eléctrica",
    
    "que es una democracia" : "una democracia es un sistema de gobierno en el que los ciudadanos tienen el poder de tomar decisiones mediante elecciones",
    
    "quien es el creador de microsoft" : "bill gates es el creador de microsoft",
    
    "que es una nube" : "una nube es una masa de vapor de agua condensado suspendido en la atmósfera",
    
    "cual es el animal terrestre mas rapido" : "el guepardo es el animal terrestre más rápido",
    
    "quien pinto el guernica" : "pablo picasso pintó 'el guernica'",
    
    "que es el sistema solar" : "el sistema solar es el conjunto de planetas, satélites y otros cuerpos que orbitan alrededor del sol",
    
    "que es la materia" : "la materia es todo lo que tiene masa y ocupa espacio",
    
    "cual es el simbolo quimico del oxigeno" : "el símbolo químico del oxígeno es o",
    
    "en que continente se encuentra egipto" : "egipto se encuentra en el continente africano",
    
    "cuantos dias tiene un mes de febrero en un año bisiesto" : "en un año bisiesto, febrero tiene 29 días",
    
    "que es un gen" : "un gen es una unidad de información genética que se transmite de una generación a otra",
    
    "que significa la palabra etica" : "la ética es el conjunto de principios morales que rigen el comportamiento humano",
    
    "quien fue marie curie" : "marie curie fue una científica pionera en el estudio de la radiactividad",
    
    "que es la teoria cuantica" : "la teoría cuántica es una rama de la física que estudia los fenómenos a nivel de partículas subatómicas",
    
    "cuantos minutos tiene una hora" : "una hora tiene 60 minutos",
    
    "que es la gravedad" : "la gravedad es la fuerza que atrae los objetos hacia el centro de la tierra",
    
    "quien fue nikola tesla" : "nikola tesla fue un inventor y científico conocido por sus contribuciones al desarrollo de la corriente alterna",
    
    "cual es la montaña mas alta del mundo" : "el monte everest es la montaña más alta del mundo",
    
    "que es una vacuna" : "una vacuna es una sustancia que estimula el sistema inmunológico para combatir enfermedades",
    
    "quien fue pablo neruda" : "pablo neruda fue un poeta chileno y ganador del premio nobel de literatura",
    
    "que es un satelite" : "un satélite es un objeto que orbita alrededor de un planeta o estrella",
    
    "que es el sistema nervioso" : "el sistema nervioso es el conjunto de órganos y tejidos que coordina las acciones y reacciones del cuerpo",
    
    "quien fue mahatma gandhi" : "mahatma gandhi fue un líder político y espiritual de la india que promovió la no violencia",
    
    "que es un ph" : "el ph es una medida de la acidez o alcalinidad de una sustancia",
    
    "que es la energia cinetica" : "la energía cinética es la energía que tiene un objeto debido a su movimiento",
    
    "que es un eclipse" : "un eclipse es el oscurecimiento de un cuerpo celeste debido al paso de otro delante de él",
    
    "cual es la capital de francia" : "la capital de francia es parís",
    
    "que es la fotosintesis" : "la fotosíntesis es el proceso en el que las plantas convierten la luz solar en energía",
    
    "quien fue charles darwin" : "charles darwin fue un naturalista que desarrolló la teoría de la evolución por selección natural",
    
    "cual es el gas mas abundante en la atmósfera" : "el gas más abundante en la atmósfera es el nitrógeno",
    
    "que es el cerebro" : "el cerebro es el órgano que controla las funciones del cuerpo y la mente",
    
    "que es una revolucion" : "una revolución es un cambio radical y profundo en la política, la economía o la sociedad",
    
    "quien fue leonardo da vinci" : "leonardo da vinci fue un polímata del renacimiento, conocido por sus obras artísticas y sus inventos",
    
    "que es el sol" : "el sol es una estrella que proporciona luz y calor a la tierra",
    
    "cual es el pais mas poblado del mundo" : "china es el país más poblado del mundo",
    
    "que es la ley de gravedad" : "la ley de gravedad afirma que todos los objetos se atraen entre sí con una fuerza proporcional a sus masas",
    
    "que es un atomo" : "un átomo es la unidad básica de la materia",
    
    "cual es la formula del agua" : "la fórmula del agua es h2o",
    
    "que es un mapa" : "un mapa es una representación gráfica de la superficie terrestre",
    
    "que es la temperatura" : "la temperatura es la medida del calor o frío de un cuerpo o ambiente",
    
    "quien fue martin luther king jr" : "martin luther king jr fue un líder estadounidense en la lucha por los derechos civiles",
    
    "que es un sistema politico" : "un sistema político es el conjunto de instituciones, normas y prácticas que regulan la organización y el ejercicio del poder en un país",
    
    "cual es el origen del universo" : "el origen del universo se explica a través de la teoría del big bang",
    
    "que es la energia solar" : "la energía solar es la energía obtenida a partir de la radiación solar",
    
    "quien fue freud" : "sigmund freud fue un neurólogo y fundador del psicoanálisis",
    
    "cual es la ciudad mas grande del mundo" : "la ciudad más grande del mundo es Tokio, Japón",
    
    "que es la inteligencia emocional" : "la inteligencia emocional es la capacidad de reconocer y manejar nuestras propias emociones y las de los demás",
    
    "que es un rio" : "un río es una corriente de agua que fluye hacia un océano o mar",
    
    "quien fue socrates" : "sócrates fue un filósofo griego considerado uno de los padres de la filosofía occidental",
    
    "que es el internet" : "el internet es una red global de computadoras interconectadas",
    
    "cual es la moneda de los estados unidos" : "la moneda de los estados unidos es el dólar",
    
    "que es la inteligencia artificial" : "la inteligencia artificial es el desarrollo de sistemas capaces de realizar tareas que normalmente requieren inteligencia humana",
    
    "que es la luna" : "la luna es el satélite natural de la tierra",
    
    "cual es la especie mas antigua de la tierra" : "la especie más antigua de la tierra son las cianobacterias",
    
    "quien fue picasso" : "pablo picasso fue un pintor y escultor español, uno de los artistas más influyentes del siglo xx",
    
    "que es un virus informatico" : "un virus informático es un programa malicioso diseñado para alterar el funcionamiento de una computadora",
    
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
