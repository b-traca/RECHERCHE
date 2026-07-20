// Création du graphe

const graph = new graphology.Graph();


// ============================
// NŒUD 1 : PROJET
// ============================

graph.addNode("projet", {

    label: "PROJET",

    x: 0,

    y: 1,

    size: 25,

    color: "#000000",

    title: "Architecture 4.0",

    content: `

        <p>
        <strong>Architecture 4.0</strong>
        </p>

        <p>
        Ce projet de recherche explore la transformation
        de la fabrication architecturale par les technologies
        numériques.
        </p>

        <p>
        L'architecte n'est plus uniquement l'auteur d'un objet.
        Il devient également un médiateur, un organisateur
        et un facilitateur de processus de conception.
        </p>

    `

});


// ============================
// NŒUD 2 : CAS D'ÉTUDE
// ============================

graph.addNode("cas-etude", {

    label: "CAS D'ÉTUDE",

    x: -1,

    y: -1,

    size: 20,

    color: "#555555",

    title: "WikiHouse",

    content: `

        <p>
        <strong>WikiHouse</strong>
        </p>

        <p>
        WikiHouse constitue un cas d'étude important
        pour comprendre la transformation des modes
        de conception et de fabrication architecturale.
        </p>

        <p>
        Le projet explore la possibilité de partager,
        modifier et fabriquer des systèmes constructifs
        à partir de modèles numériques.
        </p>

    `

});


// ============================
// NŒUD 3 : THÉORIE
// ============================

graph.addNode("theorie", {

    label: "THÉORIE",

    x: 1,

    y: -1,

    size: 20,

    color: "#999999",

    title: "Meshwork",

    content: `

        <p>
        <strong>Meshwork — Tim Ingold</strong>
        </p>

        <p>
        Le concept de meshwork décrit un monde constitué
        de lignes, de trajectoires et de relations.
        </p>

        <p>
        Cette approche permet de penser les relations
        entre les individus, les objets, les techniques
        et les environnements comme des processus continus.
        </p>

    `

});


// ============================
// RELATIONS ENTRE LES 3 NŒUDS
// ============================

graph.addEdge("projet", "cas-etude");

graph.addEdge("cas-etude", "theorie");

graph.addEdge("theorie", "projet");


// ============================
// AFFICHAGE DU GRAPHE
// ============================

const renderer = new Sigma(

    graph,

    document.getElementById("container")

);


// ============================
// CLIC SUR UN NŒUD
// ============================

renderer.on("clickNode", ({ node }) => {


    const data =
        graph.getNodeAttributes(node);


    document.getElementById("article-title")
        .innerHTML = data.title;


    document.getElementById("article-content")
        .innerHTML = data.content;


    document.getElementById("article-panel")
        .style.display = "block";


    // Le nœud devient gris après consultation

    graph.setNodeAttribute(

        node,

        "color",

        "#cccccc"

    );


    renderer.refresh();

});


// ============================
// FERMER L'ARTICLE
// ============================

document.getElementById("close-button")
    .addEventListener("click", () => {


        document.getElementById("article-panel")
            .style.display = "none";


    });
