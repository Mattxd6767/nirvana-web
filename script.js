const albums = document.querySelectorAll(".album");

const modal = document.getElementById("modal");

const cerrarModal = document.getElementById("cerrar-modal");

const titulo = document.getElementById("modal-titulo");

const historia = document.getElementById("modal-historia");

const canciones = document.getElementById("modal-canciones");

const datos = {

    bleach: {
        titulo: "Bleach",
        historia: "Bleach se publicó en junio de 1989 y se convirtió en uno de los álbumes favoritos de las radios universitarias y la banda se embarcó en su primera gira estadounidense, pero canceló las últimas fechas y regresó al estado de Washington debido a las crecientes diferencias con Everman. Nadie dijo a Everman que había sido despedido pero él declararía más tarde que abandonó el grupo. Aunque Sub Pop no promocionó Bleach tanto como otros lanzamientos, se vendió de forma constante, con ventas iniciales de 40. 000 copias. Sin embargo, Cobain estaba molesto por la falta de promoción y distribución por parte del sello.",
        canciones: [
            "About a Girl",
            "Blew",
            "School"
        ]
    },

    nevermind: {
        titulo: "Nevermind",
        historia: "Nevermind es el segundo álbum de estudio de la banda estadounidense de grunge Nirvana, publicado el 24 de septiembre de 1991. Producido por Butch Vig, Nevermind fue el primer lanzamiento de la banda con DGC Records. El líder de la agrupación, Kurt Cobain, trató de hacer música fuera de los límites restrictivos de la escena grunge de Seattle, aprovechando la influencia de grupos como Pixies y su uso de la dinámica de canciones ruidosas y calmadas, con grandes composiciones y sonidos. Gracias a este álbum el género grunge se hizo conocido a nivel mundial, recibiendo una gran aceptación y aclamación por críticos especializados de música, quienes también consideran el álbum como uno de los mejores de la historia.",
        canciones: [
            "Smells Like Teen Spirit",
            "Come as You Are",
            "Lithium"
        ]
    },

    inutero: {
        titulo: "In Utero",
        historia: "In Utero es el tercer y último álbum de estudio de la banda estadounidense de grunge Nirvana, lanzado en septiembre de 1993 por DGC Records. Nirvana pretendía que esta grabación sonara diferente a la pulida producción de su anterior álbum, Nevermind (1991). A fin de lograr un sonido más natural y áspero, el grupo contrató al productor Steve Albini para grabar In Utero durante un periodo de dos semanas en febrero de 1993, en Pachyderm Studio. La música se grabó rápidamente con pocos trucos de estudio, y las letras de las canciones y la presentación del álbum incorporaban imágenes médicas que transmitían los puntos de vista del líder Kurt Cobain sobre su vida personal, su reciente paternidad y la nueva fama de la banda, este álbum es el último con Kurt Cobain como vocalista y guitarrista, ya que solo poco más de 6 meses después, se suicidó.",
        canciones: [
            "Heart-Shaped Box",
            "All Apologies",
            "Rape Me"
        ]
    }

};

const integrantesDatos = {

    kurt: {
        nombre: "Kurt Cobain",

        historia: "Fue el líder, vocalista principal, guitarrista y compositor principal de Nirvana. Nacido en Aberdeen, Washington, se convirtió en el icono cultural y la 'voz de la Generación X', un título que él mismo rechazaba porque la fama masiva y la presión de la industria le causaban un profundo malestar. Su Estilo: Su forma de tocar la guitarra combinaba la energía cruda del punk con melodías pop muy pegajosas. Sus letras eran oscuras, crípticas y cargadas de una profunda alienación social. Su Destino: Cobain luchó durante años contra una severa depresión, dolores estomacales crónicos y una fuerte adicción a la heroína. Se quitó la vida el 5 de abril de 1994 a los 27 años, entrando al trágico 'Club de los 27' y dejando un vacío imborrable en el rock.",

        canciones: [
            "Smells Like Teen Spirit",
            "Come As You Are",
            "Heart-Shaped Box"
        ]
    },


    krist: {
        nombre: "Krist Novoselic",

        historia: "Fue el co-fundador de Nirvana junto a Kurt Cobain en 1987. Siendo el miembro más alto de la banda (medía más de dos metros), su presencia en el escenario era imponente. Su bajo no solo daba soporte rítmico, sino que creaba líneas melódicas pesadas y andantes (como la famosa intro de 'Come As You Are'). Era el amigo más cercano y el cable a tierra de Kurt en los momentos difíciles. El Post-Nirvana: Después de la disolución de la banda, se alejó de los grandes reflectores comerciales. Formó bandas de perfil más bajo (como Sweet 75 y Eyes Adrift) y colaboró ocasionalmente con Foo Fighters. Su Vida Actual: Centró la mayor parte de su energía en el activismo político y comunitario en el estado de Washington, promoviendo reformas electorales y apoyando a músicos independientes.",

        canciones: [
            "Lithium",
            "In Bloom",
            "About a Girl"
        ]
    },


    dave: {
        nombre: "Dave Grohl",

        historia: "Se unió a Nirvana en 1990 como el quinto (y definitivo) baterista, aportando la potencia, precisión y energía arrolladora que le faltaba al sonido de la banda. Su energía en vivo era brutal y su química con Kurt y Krist fue instantánea. El Post-Nirvana: Tras la muerte de Cobain, Grohl canalizó su dolor en la música. En lugar de quedarse detrás de los tambores, tomó la guitarra, asumió el rol de vocalista y fundó Foo Fighters en 1995. Su Legado: Hoy en día es considerado uno de los músicos más exitosos, respetados y queridos de la historia del rock mundial, habiendo sido inducido dos veces al Salón de la Fama del Rock and Roll (con Nirvana y con Foo Fighters).",

        canciones: [
            "Smells Like Teen Spirit",
            "Everlong",
            "The Pretender"
        ]
    }

};

albums.forEach(album => {

    const boton = album.querySelector("button");

    boton.addEventListener("click", () => {

        const nombreAlbum = album.dataset.album;

        const informacion = datos[nombreAlbum];

        titulo.textContent = informacion.titulo;

        historia.textContent = informacion.historia;

        canciones.innerHTML = "";

        informacion.canciones.forEach(cancion => {

            const li = document.createElement("li");

            li.textContent = cancion;

            canciones.appendChild(li);

        });

        modal.style.display = "flex";

    });

});

cerrarModal.addEventListener("click", () => {

    modal.style.display = "none";

});

const integrantes = document.querySelectorAll(".integrante");

integrantes.forEach(integrante => {

    const boton = integrante.querySelector("button");

    boton.addEventListener("click", () => {

        const nombreIntegrante = integrante.dataset.integrante;

        const informacion = integrantesDatos[nombreIntegrante];

        titulo.textContent = informacion.nombre;

        historia.textContent = informacion.historia;

        canciones.innerHTML = "";

        informacion.canciones.forEach(cancion => {

            const li = document.createElement("li");

            li.textContent = cancion;

            canciones.appendChild(li);

        });

        modal.style.display = "flex";

    });

});

