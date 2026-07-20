const graph = new graphology.Graph();

// NŒUDS

graph.addNode("architecture", {
    label: "Architecture",
    x: 0,
    y: 0,
    size: 20,
    color: "#000000",

    title: "Architecture",
    content: `
        <p>
        L'architecture comme pratique de conception,
        de fabrication et d'organisation de l'espace.
        </p>
    `
});

graph.addNode("architecture-4-0", {
    label: "Architecture 4.0",
    x: 1,
    y: 1,
    size: 15,
    color: "#555555",

    title: "Architecture 4.0",
    content: `
        <p>
        La transformation de la fabrication architecturale
        par les technologies numériques.
        </p>
    `
});

graph.addNode("meshwork", {
    label: "Meshwork",
    x: -1,
    y: 1,
    size: 15,
    color: "#555555",

    title: "Meshwork",
    content: `
        <p>
        Le concept de Tim Ingold décrivant un monde
        constitué de lignes et de relations.
        </p>
    `
});

graph.addNode("wikis-house", {
    label: "WikiHouse",
    x: 0,
    y: -1,
    size: 15,
    color: "#555555",

    title: "WikiHouse",
    content: `
        <p>
        Un système de construction open source
        fondé sur la fabrication numérique.
        </p>
    `
});

// RELATIONS

graph.addEdge("architecture", "architecture-4-0");

graph.addEdge("architecture", "meshwork");

graph.addEdge("architecture", "wikis-house");


// AFFICHAGE DU GRAPHE

const renderer = new Sigma(
    graph,
    document.getElementById("container")
);


// CLIC SUR UN NŒUD

renderer.on("clickNode", ({ node }) => {

    const data = graph.getNodeAttributes(node);

    document.getElementById("title").innerHTML =
        data.title;

    document.getElementById("content").innerHTML =
        data.content;

    document.getElementById("panel").style.display =
        "block";

    // Change la couleur du nœud visité

    graph.setNodeAttribute(
        node,
        "color",
        "#999999"
    );

    renderer.refresh();
});


// FERMER LE PANNEAU

document.getElementById("close").onclick = () => {

    document.getElementById("panel").style.display =
        "none";

};
