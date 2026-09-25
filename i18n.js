// Toggle de idioma ES/EN. El español es el idioma base (texto en el HTML);
// aquí solo se definen las traducciones al inglés. La preferencia se guarda
// en localStorage y se aplica en todas las páginas.
(function () {
  var STORAGE_KEY = "byalemdz-lang";

  var en = {
    // Encabezado / navegación (común a todas las páginas)
    "chrome.menu": "Open menu",
    "chrome.home_aria": "BYALEMDZ — Go to homepage",
    "chrome.back": "← Back to home",
    "nav.mihistoria": "My story",
    "nav.journalist": "Journalist & Photo",
    "nav.belleza": "Beauty & Tips",
    "nav.tricologia": "Trichology",
    "nav.hair": "Hair & Services",
    "nav.headspa": "Head Spa",

    // Portada
    "home.hero_aria": "BYALEMDZ studio photo",
    "home.hero_alt":
      "BYALEMDZ professional studio with the AM logo — Hair Professional by Alejandra Mendoza, photography set, vanity with lit mirror and an elegant chair.",
    "home.explore": "Explore my world",
    "home.about_eyebrow": "The person behind BYALEMDZ",
    "home.about_title": "About me",
    "home.about_lead":
      "María Alejandra Mendoza — Professional Stylist, Trichologist and Bachelor in Social Communication.",
    "home.about_link": "Read my story →",

    // Encabezados de páginas interiores
    "mihist.eyebrow": "About me",
    "mihist.title": "My story",
    "jour.eyebrow": "Journalism & photography",
    "jour.title": "Journalist & Photo",
    "bell.eyebrow": "Blog",
    "bell.title": "Beauty tips",
    "tric.eyebrow": "Hair health",
    "tric.title": "Trichology",
    "serv.eyebrow": "Hair & Services",
    "serv.title": "Services",
    "serv.cta": "Book an appointment",
    "spa.eyebrow": "Care & wellbeing",
    "spa.title": "Head Spa",
    "spa.cta": "Book via WhatsApp",
    "book.eyebrow": "Bookings",
    "book.title": "Bookings",
    "book.cta": "Book via WhatsApp"
  };

  // Traducciones por contenido (párrafos, títulos, listas…)
  var textMap = {
    "Con una trayectoria de 23 años en el mundo de la peluquería, inicié mi carrera a los 16 años y me he especializado en todas las áreas fundamentales del cuidado capilar. Soy experta en alisado, colorimetría y corte, con un profundo conocimiento de cómo respetar la fibra capilar y mantener tanto el cabello como el cuero cabelludo en perfecto estado de salud.":
      "With 23 years of experience in the world of hairdressing, I began my career at 16 and have specialized in all the fundamental areas of hair care. I am an expert in straightening, color and cutting, with a deep understanding of how to respect the hair fiber and keep both the hair and the scalp in perfect health.",
    "Mi enfoque se basa en un protocolo de cuidado especial para alisados que llamo «AM», diseñado para proteger la integridad del cabello y evitar reacciones adversas. Además, domino todas las técnicas de colorimetría para lograr resultados personalizados que se adapten a cada persona.":
      "My approach is based on a special care protocol for straightening that I call «AM», designed to protect the integrity of the hair and prevent adverse reactions. In addition, I master every color technique to achieve personalized results tailored to each person.",
    "Como tricóloga, siempre priorizo la salud del cuero cabelludo para prevenir afecciones. Mi objetivo es crear belleza real y saludable, cuidando cada detalle: un cuero cabelludo sano y una fibra capilar sana.":
      "As a trichologist, I always prioritize scalp health to prevent conditions. My goal is to create real, healthy beauty, caring for every detail: a healthy scalp and a healthy hair fiber.",
    "Gracias a mi formación en Comunicación Social, también ofrezco una comunicación profesional y cercana con cada cliente, asegurando que la experiencia sea tan cómoda y personalizada como los resultados que obtengo.":
      "Thanks to my background in Social Communication, I also offer professional, warm communication with every client, ensuring the experience is as comfortable and personalized as the results I achieve.",

    "Hay historias que no comienzan con un gran sueño. La mía comenzó con una niña de 13 años, un curso de repostería y unas ganas enormes de aprender.":
      "Some stories don't begin with a big dream. Mine began with a 13-year-old girl, a baking course and an enormous desire to learn.",
    "No sabía de emprendimiento. No sabía de negocios. Ni siquiera imaginaba todo lo que aquella primera experiencia iba a enseñarme.":
      "I knew nothing about entrepreneurship. I knew nothing about business. I couldn't even imagine everything that first experience was going to teach me.",
    "Solo sabía que quería hacer algo.": "I only knew that I wanted to do something.",
    "Mi primera escuela": "My first school",
    "Aprendí a preparar tortas y empecé a venderlas. Poco a poco, aquel pequeño proyecto comenzó a crecer y, sin darme cuenta, aquella niña que simplemente quería aprender empezó a descubrir lo que significaba crear algo propio: vender, organizar, atender clientes, asumir responsabilidades y tomar decisiones.":
      "I learned to make cakes and started selling them. Little by little, that small project began to grow and, without realizing it, that girl who simply wanted to learn began to discover what it meant to create something of her own: selling, organizing, serving clients, taking on responsibilities and making decisions.",
    "Fue mi primera escuela. Y aunque en aquel momento no podía verlo, allí comenzó una parte fundamental de la mujer que soy hoy.":
      "It was my first school. And although at the time I couldn't see it, that's where a fundamental part of the woman I am today began.",
    "Incluso hubo quienes dudaban de que aquellas tortas fueran realmente hechas por mí. Les costaba creer que una niña de 13 años pudiera estar detrás de aquel pequeño negocio.":
      "There were even those who doubted that those cakes were really made by me. They found it hard to believe that a 13-year-old girl could be behind that small business.",
    "Al final, esta experiencia me dejó grandes aprendizajes. Fue un momento de cambio: cuando decidí dejar ese proyecto atrás y seguir con mis estudios, descubrí, sin planearlo, el mundo de la peluquería a través de mi mamá. Y desde ese instante, encontré una nueva pasión. A veces, los comienzos se esconden donde menos lo esperamos.":
      "In the end, this experience left me with great lessons. It was a turning point: when I decided to leave that project behind and continue with my studies, I discovered, without planning it, the world of hairdressing through my mom. And from that moment on, I found a new passion. Sometimes, beginnings hide where we least expect them.",
    "El descubrimiento de la peluquería": "Discovering hairdressing",
    "Así comenzó una etapa que marcó mi vida. A los 16 años fue cuando empecé a observar realmente a mi mamá: su esfuerzo diario, su disciplina, su manera de enseñar y formar a otras personas. La veía trabajar incansablemente, levantando su salón una y otra vez, incluso cuando quienes aprendían con ella seguían su propio camino.":
      "That's how a stage that marked my life began. At 16 was when I truly started to observe my mom: her daily effort, her discipline, her way of teaching and training others. I watched her work tirelessly, rebuilding her salon again and again, even when those who learned with her went on to follow their own path.",
    "Verla mantenerse firme, dedicada y siempre empezando de nuevo despertó en mí algo profundo. Sentí la necesidad de apoyarla, de estar a su lado, y sin saberlo, ese fue el inicio del mundo que hoy más amo: la peluquería.":
      "Seeing her stay strong, dedicated and always starting over awakened something deep in me. I felt the need to support her, to be by her side, and without knowing it, that was the beginning of the world I love most today: hairdressing.",
    "En este tiempo de aprendizaje fui creciendo y adquiriendo conocimientos en todas las áreas. Sin embargo, llegó un momento en que me pregunté cuál sería el siguiente paso, y mi mamá, con su constante deseo de verme convertida en una profesional, me motivó a buscar una carrera.":
      "During this time of learning I grew and gained knowledge in every area. However, there came a moment when I wondered what the next step would be, and my mom, with her constant wish to see me become a professional, encouraged me to pursue a degree.",
    "Comunicadora social": "Social communicator",
    "Fue entonces cuando, con mucho esfuerzo y el apoyo incondicional de mi madre, decidimos juntas costear mis estudios de Licenciada en Comunicación Social en la Universidad Fermín Toro de Barquisimeto, Venezuela.":
      "It was then that, with great effort and my mother's unconditional support, we decided together to fund my studies for a Bachelor's degree in Social Communication at Fermín Toro University in Barquisimeto, Venezuela.",
    "Me gradué como Comunicadora Social con la ilusión de ejercer mi vocación. Sin embargo, las circunstancias económicas me llevaron a tomar una decisión estratégica: descubrí que montando mi propia peluquería podría sostenerme mejor que en el periodismo.":
      "I graduated as a Social Communicator with the dream of pursuing my vocation. However, financial circumstances led me to make a strategic decision: I discovered that by opening my own salon I could support myself better than in journalism.",
    "Con el apoyo incondicional de mi madre, inicié este nuevo proyecto desde cero y transformé un desafío en una oportunidad. Creo firmemente que con determinación y esfuerzo uno puede encontrar caminos para alcanzar sus metas, incluso si eso significa reinventarse y adaptarse.":
      "With my mother's unconditional support, I started this new project from scratch and turned a challenge into an opportunity. I firmly believe that with determination and effort one can find ways to reach their goals, even if it means reinventing and adapting.",
    "Crecer y reinventarse": "Growing and reinventing",
    "Empecé con un pequeño local que pronto se volvió pequeño y tocó mudarnos a uno más amplio; este también quedó pequeño y tocó mudarnos a uno más grande. Cuando ya tenía mi negocio más amplio en marcha, me animé a lanzar una tienda de perfumería y cosméticos al mismo tiempo.":
      "I started with a small place that soon became too small and we had to move to a larger one; that one also became too small and we had to move to an even bigger one. Once my larger business was up and running, I decided to launch a perfume and cosmetics shop at the same time.",
    "Lamentablemente, las circunstancias del país nos obligaron a cerrar y a replantearnos el futuro, lo que me llevó a considerar la emigración. Y aquí es donde quiero dejar un mensaje: cada paso, cada cambio, es una oportunidad para reescribir nuestra historia y empezar de nuevo con la misma determinación.":
      "Unfortunately, the circumstances in the country forced us to close and rethink the future, which led me to consider emigrating. And this is where I want to leave a message: every step, every change, is an opportunity to rewrite our story and start again with the same determination.",
    "Tras haber atravesado países como Colombia, Ecuador, Perú, Chile, Argentina y España, ahora mi camino me ha traído a Irlanda, un lugar donde he construido mi propio espacio profesional. Cada paso no solo me enriqueció técnicamente, sino que transformó mi forma de ver el mundo y de crecer como ser humano.":
      "After passing through countries like Colombia, Ecuador, Peru, Chile, Argentina and Spain, my path has now brought me to Ireland, a place where I have built my own professional space. Each step not only enriched me technically, but transformed the way I see the world and grow as a human being.",
    "Empezar de nuevo": "Starting over",
    "Empezar de nuevo no es sencillo. A veces significa dejar atrás lo conocido, soltar lo que alguna vez fue seguro y caminar sin certezas, mientras todavía intentas encontrarte a ti misma.":
      "Starting over is not easy. Sometimes it means leaving behind the familiar, letting go of what was once safe and walking without certainties, while still trying to find yourself.",
    "Cuando llegué a Irlanda en 2022, no sabía cómo sería el camino. Solo sabía que tenía que comenzar. Y comenzar de cero no es sinónimo de vacío: es llegar con experiencia, con sueños, con talento, con heridas que enseñan, con aprendizajes que sostienen y, sobre todo, con la valentía de volver a intentarlo.":
      "When I arrived in Ireland in 2022, I didn't know what the path would be like. I only knew that I had to begin. And starting from scratch is not the same as emptiness: it is arriving with experience, with dreams, with talent, with wounds that teach, with lessons that sustain and, above all, with the courage to try again.",
    "Levantarse otra vez exige claridad, honestidad y coraje. Claridad para reconocer quién eres ahora. Honestidad para aceptar hacia dónde quieres ir. Coraje para avanzar incluso cuando el miedo te acompaña.":
      "Rising again requires clarity, honesty and courage. Clarity to recognize who you are now. Honesty to accept where you want to go. Courage to move forward even when fear is with you.",
    "Hoy, cuando miro el pequeño estudio que he construido en casa, veo mucho más que un espacio de trabajo: veo horas de esfuerzo, sacrificios silenciosos, decisiones que dolieron, momentos de duda… y una mujer que eligió no rendirse cuando lo más fácil hubiera sido detenerse.":
      "Today, when I look at the small studio I have built at home, I see much more than a workspace: I see hours of effort, silent sacrifices, decisions that hurt, moments of doubt… and a woman who chose not to give up when the easiest thing would have been to stop.",
    "Este espacio no es el resultado de un camino fácil. Es el resultado de haber seguido caminando.":
      "This space is not the result of an easy path. It is the result of having kept walking.",
    "A veces la vida no te obliga a empezar otra vez; te da la oportunidad de construir, por fin, algo que realmente se parezca a ti. Y quizás ese sea el verdadero significado de volver a empezar: descubrir que todavía tienes mucho por crear… y que esta vez, lo harás desde tu verdad.":
      "Sometimes life doesn't force you to start over; it gives you the chance to finally build something that truly looks like you. And perhaps that is the real meaning of starting again: discovering that you still have so much to create… and that this time, you'll do it from your truth.",
    "Un sueño intacto": "A dream still intact",
    "Pero hay un sueño que sigue intacto: el periodismo. Comunicar, contar historias y conectar con las personas siempre ha sido parte de mí, y sé que, en el momento adecuado, encontraré la manera de retomarlo. Los sueños no desaparecen; a veces solo esperan a que estemos listos para escribir una nueva página, y yo todavía tengo muchas historias que contar.":
      "But there is a dream that remains intact: journalism. Communicating, telling stories and connecting with people has always been part of me, and I know that, at the right moment, I will find a way to return to it. Dreams don't disappear; sometimes they just wait for us to be ready to write a new page, and I still have many stories to tell.",

    "Información profesional y educativa sobre la salud del cabello y el cuero cabelludo.":
      "Professional and educational information about the health of the hair and scalp.",
    "¿Qué es la tricología y cuál es su función?": "What is trichology and what is its purpose?",
    "La tricología es una especialidad dentro de la dermatología que se enfoca en el estudio integral de la salud capilar y del cuero cabelludo. Su función principal es diagnosticar y tratar las diversas afecciones que pueden afectar a nuestro cabello, como la caída excesiva, la pérdida de densidad, o problemas del cuero cabelludo como la caspa o la irritación.":
      "Trichology is a specialty within dermatology that focuses on the comprehensive study of hair and scalp health. Its main purpose is to diagnose and treat the various conditions that can affect our hair, such as excessive shedding, loss of density, or scalp issues like dandruff or irritation.",
    "Esta disciplina combina ciencia y experiencia para ofrecer soluciones personalizadas que ayuden a las personas a mantener un cabello sano y fuerte. En nuestro sitio, nos dedicamos a brindarte información clara y profesional sobre todo lo relacionado con la tricología, para que descubras cómo cuidar de tu cabello con el cuidado que mereces.":
      "This discipline combines science and experience to offer personalized solutions that help people keep their hair healthy and strong. On our site, we are dedicated to providing clear, professional information about everything related to trichology, so you can discover how to care for your hair with the care it deserves.",
    "Alteraciones del cuero cabelludo y cabello": "Scalp and hair conditions",
    "Algunos de los problemas que pueden abordarse desde la tricología:":
      "Some of the concerns that can be addressed through trichology:",
    "Caspa y descamación": "Dandruff and flaking",
    "Cuero cabelludo graso": "Oily scalp",
    "Cuero cabelludo seco": "Dry scalp",
    "Sensibilidad e irritación": "Sensitivity and irritation",
    "Picor": "Itching",
    "Acumulación de sebo y residuos": "Build-up of sebum and residue",
    "Caída capilar": "Hair loss",
    "Cabello debilitado": "Weakened hair",
    "Alteraciones de la fibra capilar": "Hair fiber alterations",
    "Falta de densidad": "Lack of density",
    "Desequilibrios del cuero cabelludo": "Scalp imbalances",
    "Abordajes tricológicos": "Trichological approaches",
    "Tratamientos tópicos": "Topical treatments",
    "Productos formulados para actuar sobre determinadas condiciones del cuero cabelludo.":
      "Products formulated to act on certain scalp conditions.",
    "Exfoliación y limpieza tricológica": "Trichological exfoliation and cleansing",
    "Para ayudar a eliminar acumulación de sebo, células córneas y residuos cosméticos.":
      "To help remove build-up of sebum, dead skin cells and cosmetic residue.",
    "Alta frecuencia": "High frequency",
    "Utilizada en determinados protocolos profesionales para trabajar el cuero cabelludo.":
      "Used in certain professional protocols to work on the scalp.",
    "Fotobiomodulación / láser de baja intensidad": "Photobiomodulation / low-level laser",
    "Tecnología empleada en determinados protocolos relacionados con el cuero cabelludo y el cabello.":
      "Technology used in certain protocols related to the scalp and hair.",
    "Microneedling capilar": "Scalp microneedling",
    "Procedimiento que utiliza microperforaciones controladas y que debe realizarse bajo criterios profesionales adecuados.":
      "A procedure that uses controlled micro-perforations and must be performed under appropriate professional criteria.",
    "Masaje y estimulación del cuero cabelludo": "Scalp massage and stimulation",
    "Como complemento dentro de determinados protocolos.": "As a complement within certain protocols.",
    "Peelings capilares": "Scalp peels",
    "Para determinados casos de alteraciones de la descamación y acumulación.":
      "For certain cases of flaking and build-up issues.",
    "Panorama de tratamientos capilares": "Overview of hair treatments",
    "Con fines informativos, este es un panorama de opciones que existen para el cuero cabelludo y el cabello. Algunas son cosméticas y no invasivas; otras son procedimientos médicos o quirúrgicos que requieren valoración e indicación profesional.":
      "For informational purposes, this is an overview of the options that exist for the scalp and hair. Some are cosmetic and non-invasive; others are medical or surgical procedures that require professional assessment and indication.",
    "Tratamientos cosméticos y de higiene del cuero cabelludo": "Cosmetic and scalp-hygiene treatments",
    "Exfoliación, limpieza profunda, control de exceso de sebo, descamación, caspa y acumulación de productos.":
      "Exfoliation, deep cleansing, control of excess sebum, flaking, dandruff and product build-up.",
    "Cosmecéuticos y activos tópicos": "Cosmeceuticals and topical actives",
    "Fórmulas destinadas a mejorar la barrera cutánea, inflamación, seborrea y condiciones específicas del cuero cabelludo.":
      "Formulas designed to improve the skin barrier, inflammation, seborrhea and specific scalp conditions.",
    "Tratamientos estimulantes no invasivos": "Non-invasive stimulating treatments",
    "Masajes y tratamientos de estimulación, protocolos tópicos y aparatología.":
      "Massages and stimulation treatments, topical protocols and devices.",
    "Fotobiomodulación o láser/luz de baja potencia (LLLT)": "Photobiomodulation or low-level laser/light (LLLT)",
    "Utiliza luz de baja intensidad como terapia coadyuvante para determinados tipos de alopecia. La evidencia es especialmente interesante en alopecia androgenética, aunque no todos responden igual.":
      "Uses low-intensity light as an adjuvant therapy for certain types of alopecia. The evidence is especially interesting in androgenetic alopecia, although not everyone responds the same way.",
    "Microneedling": "Microneedling",
    "Microestimulación controlada del cuero cabelludo; puede utilizarse como complemento de determinados tratamientos, aunque debe realizarse con protocolos adecuados y no es apropiado para todas las patologías.":
      "Controlled micro-stimulation of the scalp; it can be used as a complement to certain treatments, although it must be performed with appropriate protocols and is not suitable for all conditions.",
    "Mesoterapia capilar": "Scalp mesotherapy",
    "Aplicación mediante microinyecciones de diferentes sustancias. Es un procedimiento médico/mínimamente invasivo y la evidencia depende mucho de la sustancia utilizada.":
      "Application via micro-injections of different substances. It is a medical/minimally invasive procedure and the evidence depends heavily on the substance used.",
    "PRP (plasma rico en plaquetas)": "PRP (platelet-rich plasma)",
    "Utiliza componentes obtenidos de la propia sangre del paciente. Se ha estudiado especialmente como tratamiento coadyuvante para determinados tipos de alopecia.":
      "Uses components obtained from the patient's own blood. It has been studied especially as an adjuvant treatment for certain types of alopecia.",
    "Tratamientos farmacológicos": "Pharmacological treatments",
    "Por ejemplo, minoxidil y determinados antiandrógenos, que requieren valoración y, según el medicamento, indicación médica.":
      "For example, minoxidil and certain antiandrogens, which require assessment and, depending on the medication, medical indication.",
    "Tratamientos médicos avanzados": "Advanced medical treatments",
    "Infiltraciones específicas, terapias regenerativas en investigación, determinados láseres médicos, toxina botulínica en protocolos experimentales, entre otros. La evidencia no es equivalente entre ellos.":
      "Specific infiltrations, regenerative therapies under research, certain medical lasers, botulinum toxin in experimental protocols, among others. The evidence is not equivalent among them.",
    "Trasplante capilar": "Hair transplant",
    "Procedimiento quirúrgico destinado a redistribuir unidades foliculares y, por tanto, completamente fuera de una práctica capilar no invasiva.":
      "A surgical procedure intended to redistribute follicular units and, therefore, completely outside a non-invasive hair practice.",
    "Mis protocolos tricológicos": "My trichological protocols",
    "Protocolo AM — Equilibrio del cuero cabelludo": "AM Protocol — Scalp balance",
    "Protocolo AM — Purificación": "AM Protocol — Purification",
    "Protocolo AM — Hidratación y confort": "AM Protocol — Hydration and comfort",
    "Protocolo AM — Estimulación": "AM Protocol — Stimulation",
    "Protocolo AM — Fortalecimiento": "AM Protocol — Strengthening",
    "Experiencia AM — Trichology Hair & Scalp Spa": "AM Experience — Trichology Hair & Scalp Spa",
    "Una experiencia que combina el conocimiento de la tricología con técnicas de cuidado y bienestar capilar.":
      "An experience that combines trichology knowledge with hair care and wellbeing techniques.",
    "Diseñada para trabajar el cuero cabelludo y la fibra capilar mediante una combinación personalizada de limpieza, exfoliación, masaje, cosmética profesional y tecnologías seleccionadas según las necesidades del cabello.":
      "Designed to work the scalp and hair fiber through a personalized combination of cleansing, exfoliation, massage, professional cosmetics and technologies selected according to the hair's needs.",
    "Valoración tricológica": "Trichological assessment",
    "Cada cuero cabelludo es diferente.": "Every scalp is different.",
    "Por eso, antes de recomendar un protocolo, realizamos una valoración de las características visibles del cuero cabelludo y del cabello para identificar sus necesidades y determinar qué cuidados pueden ser adecuados.":
      "That's why, before recommending a protocol, we carry out an assessment of the visible characteristics of the scalp and hair to identify their needs and determine which care may be appropriate.",
    "Observamos → Analizamos → Personalizamos → Tratamos y seguimos":
      "We observe → We analyze → We personalize → We treat and follow up",
    "“Ale realiza una valoración y, a partir de ella, determina qué protocolo necesita mi cuero cabelludo.”":
      "“Ale carries out an assessment and, based on it, determines which protocol my scalp needs.”",
    "Aviso importante: la información de esta sección es educativa y no sustituye una consulta médica o dermatológica profesional.":
      "Important note: the information in this section is educational and does not replace a professional medical or dermatological consultation.",

    "Cada servicio se realiza con asesoramiento personalizado, respetando la fibra capilar y la salud del cuero cabelludo.":
      "Every service is carried out with personalized advice, respecting the hair fiber and the health of the scalp.",
    "Cortes personalizados": "Personalized cuts",
    "En cada corte evaluamos cuidadosamente los rasgos faciales del cliente. Ofrezco asesoramiento personalizado para resaltar lo que favorece a cada persona. Mi objetivo es que el corte no solo sea un estilo, sino una experiencia que potencie tu imagen.":
      "In every cut we carefully assess the client's facial features. I offer personalized advice to highlight what suits each person. My goal is for the cut to be not just a style, but an experience that enhances your image.",
    "Lavado profesional": "Professional wash",
    "Adaptamos el lavado según el tipo de cuero cabelludo. Utilizamos productos profesionales específicos para cada necesidad, asegurando que el cuidado sea óptimo y personalizado.":
      "We adapt the wash to your scalp type. We use professional products specific to each need, ensuring optimal and personalized care.",
    "«Blow dry» o secado profesional": "«Blow dry» or professional styling",
    "Ya sea un secado liso, con ondas o utilizando plancha si es necesario, este servicio incluye un peinado completo que se adapta a lo que el cliente desea. Ofrecemos un acabado profesional para cualquier ocasión.":
      "Whether a smooth blow-dry, with waves or using a flat iron if needed, this service includes a complete style tailored to what the client wants. We offer a professional finish for any occasion.",
    "Peinados y estilismo para eventos": "Event hairstyling and styling",
    "Peinados para bodas, fiestas, sesiones fotográficas y cualquier tipo de evento. No trabajamos a domicilio, y cada peinado está pensado para que brilles en tus ocasiones especiales.":
      "Hairstyles for weddings, parties, photo shoots and any type of event. We do not offer home visits, and every hairstyle is designed to make you shine on your special occasions.",
    "Colorimetría profesional": "Professional color",
    "Mi servicio de colorimetría abarca todas las técnicas existentes en el área del color, desde los trabajos más sencillos hasta los más avanzados. Antes de aplicar cualquier color, realizo una evaluación completa del cabello y del cuero cabelludo, además de un asesoramiento personalizado para definir qué desea la persona, qué le favorece y qué tipo de mantenimiento requiere cada técnica.":
      "My color service covers every existing technique in the color area, from the simplest work to the most advanced. Before applying any color, I carry out a complete assessment of the hair and scalp, along with personalized advice to define what the person wants, what suits them and what kind of maintenance each technique requires.",
    "Trabajo con colorimetría de precisión, respetando la fibra capilar y adaptando cada resultado a la armonía facial, el tono de piel y el color de ojos del cliente.":
      "I work with precision color, respecting the hair fiber and adapting each result to the client's facial harmony, skin tone and eye color.",

    "(Texto de ejemplo) Una experiencia que combina el conocimiento de la tricología con técnicas de cuidado y bienestar del cuero cabelludo.":
      "(Sample text) An experience that combines trichology knowledge with scalp care and wellbeing techniques.",
    "(Ejemplo) El Head Spa está diseñado para trabajar el cuero cabelludo y la fibra capilar mediante una combinación personalizada de limpieza, exfoliación, masaje, cosmética profesional y tecnologías seleccionadas según las necesidades de tu cabello.":
      "(Sample) The Head Spa is designed to work the scalp and hair fiber through a personalized combination of cleansing, exfoliation, massage, professional cosmetics and technologies selected according to your hair's needs.",
    "Reemplaza este texto por la descripción real de tu experiencia Head Spa cuando quieras.":
      "Replace this text with the real description of your Head Spa experience whenever you like.",

    "Un head spa es un tratamiento de relajación y cuidado del cuero cabelludo, originado principalmente en Japón. Combina técnicas de masaje con limpieza profunda y cuidado capilar.":
      "A head spa is a relaxation and scalp-care treatment, originating mainly in Japan. It combines massage techniques with deep cleansing and hair care.",
    "¿Qué incluye?": "What does it include?",
    "Evaluación básica del cuero cabelludo": "Basic scalp assessment",
    "Limpieza profunda": "Deep cleansing",
    "Exfoliación según necesidad": "Exfoliation as needed",
    "Masaje de cuero cabelludo, cuello y hombros": "Scalp, neck and shoulder massage",
    "Tratamiento hidratante o nutritivo": "Moisturizing or nourishing treatment",
    "Ritual de relajación": "Relaxation ritual",
    "Lavado y acondicionamiento": "Wash and conditioning",
    "Secado y acabado final": "Blow-dry and final finish",
    "Una experiencia diseñada para cuidar el cuero cabelludo, revitalizar el cabello y disfrutar de un momento de desconexión. ✨":
      "An experience designed to care for the scalp, revitalize the hair and enjoy a moment of disconnection. ✨",
    "Beneficios": "Benefits",
    "Limpia profundamente el cuero cabelludo": "Deeply cleanses the scalp",
    "Ayuda a eliminar residuos y acumulación de productos": "Helps remove residue and product build-up",
    "Favorece una sensación de frescura y ligereza": "Promotes a feeling of freshness and lightness",
    "Ayuda a liberar tensión en cuero cabelludo, cuello y hombros":
      "Helps release tension in the scalp, neck and shoulders",
    "Aporta hidratación y suavidad al cabello": "Adds hydration and softness to the hair",
    "Promueve una experiencia de relajación y bienestar": "Promotes an experience of relaxation and wellbeing",
    "Deja el cabello limpio, ligero y con un acabado más saludable":
      "Leaves the hair clean, light and with a healthier finish",
    "Un ritual para cuidar tu cuero cabelludo, tu cabello y también desconectar. ✨":
      "A ritual to care for your scalp, your hair and also to disconnect. ✨",
    "¿Cada cuánto se puede realizar?": "How often can it be done?",
    "El Head Spa puede realizarse cada 3 a 4 semanas, adaptando la frecuencia a las necesidades del cuero cabelludo y el estado del cabello.":
      "The Head Spa can be done every 3 to 4 weeks, adapting the frequency to the needs of the scalp and the condition of the hair.",
    "Para mantenimiento y bienestar, una sesión mensual es una excelente opción. ✨":
      "For maintenance and wellbeing, a monthly session is an excellent option. ✨",

    "Tratamientos para el cuidado capilar": "Hair care treatments",
    "Nuestros protocolos pueden incluir:": "Our protocols may include:",
    "🔴 Fotobiomodulación LED — tecnología de luz utilizada como apoyo en protocolos para caída y estimulación del crecimiento capilar.":
      "🔴 LED photobiomodulation — light technology used to support protocols for hair loss and hair-growth stimulation.",
    "🫧 Ozono/Vapor capilar — ayuda a realizar una limpieza profunda y preparar el cuero cabelludo para el tratamiento.":
      "🫧 Ozone/hair steam — helps carry out a deep cleanse and prepare the scalp for the treatment.",
    "⚡ Alta frecuencia capilar — complemento cosmético utilizado después de la limpieza del cuero cabelludo.":
      "⚡ Scalp high frequency — cosmetic complement used after cleansing the scalp.",
    "♨️ Radiofrecuencia capilar — tecnología térmica que puede incorporarse en determinados protocolos según las necesidades del cuero cabelludo.":
      "♨️ Scalp radiofrequency — thermal technology that can be incorporated into certain protocols according to the scalp's needs.",
    "💆‍♀️ Masaje y estimulación manual — técnicas de masaje del cuero cabelludo para complementar la experiencia y el protocolo.":
      "💆‍♀️ Massage and manual stimulation — scalp massage techniques to complement the experience and the protocol.",
    "🧴 Tratamientos cosméticos personalizados — activos seleccionados según las características y necesidades del cuero cabelludo y cabello.":
      "🧴 Personalized cosmetic treatments — actives selected according to the characteristics and needs of the scalp and hair.",
    "En Alemdz ofrecemos protocolos no invasivos diseñados para cuidar el cuero cabelludo y complementar tratamientos dirigidos a la caída y al crecimiento capilar.":
      "At Alemdz we offer non-invasive protocols designed to care for the scalp and complement treatments aimed at hair loss and hair growth.",
    "Nuestros protocolos": "Our protocols",
    "Estimulación capilar": "Hair stimulation",
    "Tratamiento para la caída": "Hair loss treatment",
    "Limpieza profunda del cuero cabelludo": "Deep scalp cleansing",
    "Equilibrio del cuero cabelludo": "Scalp balance",
    "Hidratación y reparación": "Hydration and repair",
    "Nuestros protocolos AM": "Our AM protocols",
    "Tratamiento anticaída": "Anti-hair-loss treatment",
    "Hidratación del cuero cabelludo": "Scalp hydration",
    "Tratamiento reparador capilar": "Repairing hair treatment",

    "(Texto de ejemplo) Mi formación como comunicadora social y mi pasión por la fotografía se unen para contar historias con una mirada editorial.":
      "(Sample text) My background as a social communicator and my passion for photography come together to tell stories with an editorial eye.",
    "(Ejemplo) Aquí compartiré mi trabajo relacionado con el periodismo, la comunicación y la fotografía: proyectos, colaboraciones y contenido que conecta a las personas a través de las historias.":
      "(Sample) Here I will share my work related to journalism, communication and photography: projects, collaborations and content that connects people through stories.",
    "Reemplaza este texto por tu contenido real cuando quieras.":
      "Replace this text with your real content whenever you like.",

    "(Texto de ejemplo) Reserva tu cita de forma sencilla. Pronto podrás elegir servicio, fecha y hora directamente desde aquí.":
      "(Sample text) Book your appointment easily. Soon you'll be able to choose service, date and time directly from here.",
    "(Ejemplo) Este espacio integrará el sistema de reservas. Por ahora, puedes escribir para agendar tu cita.":
      "(Sample) This space will integrate the booking system. For now, you can message to schedule your appointment.",
    "(Ejemplo) Contacto provisional: escríbenos por WhatsApp para reservar tu cita.":
      "(Sample) Temporary contact: message us on WhatsApp to book your appointment.",

    "(Texto de ejemplo) Consejos prácticos para cuidar tu cabello y realzar tu belleza natural, explicados de forma sencilla y profesional.":
      "(Sample text) Practical tips to care for your hair and enhance your natural beauty, explained in a simple and professional way.",
    "Rutina básica de cuidado": "Basic care routine",
    "(Ejemplo) Lava tu cabello con productos adecuados a tu tipo, hidrata regularmente y protege del calor antes de usar herramientas.":
      "(Sample) Wash your hair with products suited to your type, moisturize regularly and protect from heat before using tools.",
    "Ideas rápidas": "Quick ideas",
    "(Ejemplo) Usa protector térmico siempre que uses plancha o secador.":
      "(Sample) Use heat protectant whenever you use a flat iron or blow dryer.",
    "(Ejemplo) Hidrata las puntas con una mascarilla semanal.":
      "(Sample) Moisturize the ends with a weekly mask.",
    "(Ejemplo) Evita lavados demasiado frecuentes con agua muy caliente.":
      "(Sample) Avoid washing too often with very hot water.",
    "Este es contenido provisional. Aquí irán tus artículos y consejos reales.":
      "This is placeholder content. Your real articles and tips will go here.",

    "Tarifas de servicios": "Service rates",
    "Precio": "Price",
    "Corte": "Cut",
    "Lavado": "Wash",
    "«Blow dry» (Secado)": "«Blow dry» (drying)",
    "Servicios combinados": "Combined services",
    "Hidratación": "Hydration",
    "Lavado + Hidratación + Blowdry": "Wash + Hydration + Blow-dry",
    "Lavado + Corte + Hidratación + Blowdry": "Wash + Cut + Hydration + Blow-dry",
    "Botox Capilar Brasileño": "Brazilian Hair Botox",
    "Alisados (Keratina o Smoothing Brasileño)": "Straightening (Keratin or Brazilian Smoothing)",
    "Tinte (Retoque de raíz)": "Color (Root retouch)",
    "Tinte completo": "Full color",
    "Highlights (mechas) o Full Head": "Highlights or Full Head",
    "Highlights (mechas)": "Highlights",
    "Baby Lights": "Baby Lights",
    "Balayage": "Balayage",
    "Face Framing (contorno frontal)": "Face Framing (front contour)",
    "Contorno completo (Half Head Highlight alrededor de toda la cabeza)":
      "Full contour (Half Head Highlight all around the head)",
    "Color con técnicas de balayage o highlight sin decoloración (solo con tinte)":
      "Color with balayage or highlight techniques without bleach (color only)",

    "(Incluye lavado, botox capilar y sellado)": "(Includes wash, hair botox and sealing)",
    "(Incluye lavado, sellado, tratamiento pre y post químico)":
      "(Includes wash, sealing, pre- and post-chemical treatment)",
    "(Incluye lavado y blowdry)": "(Includes wash and blow-dry)",

    "Cabello corto": "Short hair",
    "Cabello medio": "Medium hair",
    "Cabello largo": "Long hair",
    "Cabello XL": "XL hair",
    "Cabello súper corto": "Super short hair",
    "Cabello corto o medio": "Short or medium hair",
    "Cabello largo o XL": "Long or XL hair",

    "Lavado + Secado (corto/medio)": "Wash + Blow-dry (short/medium)",
    "Lavado + Secado (largo)": "Wash + Blow-dry (long)",
    "Lavado + Secado (XL)": "Wash + Blow-dry (XL)",
    "Lavado + Corte + Secado": "Wash + Cut + Blow-dry",
    "Lavado + Corte + Secado (corto/medio)": "Wash + Cut + Blow-dry (short/medium)",
    "Lavado + Corte + Secado (largo)": "Wash + Cut + Blow-dry (long)",
    "Lavado + Corte + Secado (XL)": "Wash + Cut + Blow-dry (XL)"
  };

  var current = localStorage.getItem(STORAGE_KEY) || "es";

  function norm(s) {
    return (s || "").replace(/\s+/g, " ").trim();
  }

  function translateNode(node) {
    var key = node.getAttribute("data-i18n");
    if (!node.hasAttribute("data-i18n-es")) {
      node.setAttribute("data-i18n-es", node.textContent);
    }
    if (current === "en" && en[key] != null) {
      node.textContent = en[key];
    } else {
      node.textContent = node.getAttribute("data-i18n-es");
    }
  }

  function translateAttrs(node) {
    var spec = node.getAttribute("data-i18n-attr");
    spec.split(";").forEach(function (pair) {
      var idx = pair.indexOf(":");
      if (idx < 0) return;
      var attr = pair.slice(0, idx).trim();
      var key = pair.slice(idx + 1).trim();
      var cache = "data-i18n-es-" + attr;
      if (!node.hasAttribute(cache)) {
        node.setAttribute(cache, node.getAttribute(attr) || "");
      }
      if (current === "en" && en[key] != null) {
        node.setAttribute(attr, en[key]);
      } else {
        node.setAttribute(attr, node.getAttribute(cache));
      }
    });
  }

  // Traduce por contenido los elementos de texto simple (sin hijos ni clave)
  function translateContent() {
    var nodes = document.querySelectorAll(
      "main p, main h2, main h3, main li, main dt, main dd, main blockquote, main .page__note"
    );
    nodes.forEach(function (node) {
      if (node.hasAttribute("data-i18n")) return;
      if (node.children.length > 0) return;
      if (!node.hasAttribute("data-i18n-es-text")) {
        node.setAttribute("data-i18n-es-text", node.textContent);
      }
      var original = node.getAttribute("data-i18n-es-text");
      var enText = textMap[norm(original)];
      if (current === "en" && enText != null) {
        node.textContent = enText;
      } else {
        node.textContent = original;
      }
    });
  }

  function apply() {
    document.documentElement.lang = current;
    document.querySelectorAll("[data-i18n]").forEach(translateNode);
    document.querySelectorAll("[data-i18n-attr]").forEach(translateAttrs);
    translateContent();
    document.querySelectorAll("[data-lang-toggle]").forEach(function (btn) {
      btn.textContent = current === "es" ? "EN" : "ES";
      btn.setAttribute(
        "aria-label",
        current === "es" ? "Switch to English" : "Cambiar a español"
      );
    });
  }

  document.addEventListener("click", function (e) {
    var t = e.target.closest("[data-lang-toggle]");
    if (!t) return;
    e.preventDefault();
    current = current === "es" ? "en" : "es";
    localStorage.setItem(STORAGE_KEY, current);
    apply();
  });

  apply();
})();
