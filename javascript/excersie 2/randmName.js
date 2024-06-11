document.getElementById("mySubmit").onclick = function () {
    let businessName;
    let adj1, adj2, adj3, adj4, adj5;
    let xtra1, xtra2, xtra3, xtra4, xtra5;
    let rand;
    rand = Math.random(0, 1);
    console.log(rand);

    if (rand < 0.20 && rand > 0) {
        adj1 = "Distruptive";
        adj2 = "Authentic";
        adj3 = "Crazy";
        adj4 = "Bravo";
        adj5 = "Superb";
    } else if (rand < 0.40 && rand > 0.20) {
        adj5 = "Distruptive";
        adj4 = "Authentic";
        adj2 = "Crazy";
        adj1 = "Bravo";
        adj3 = "Superb";
    } else if (rand < 0.60 && rand > 0.40) {
        adj3 = "Distruptive";
        adj1 = "Authentic";
        adj5 = "Crazy";
        adj2 = "Bravo";
        adj4 = "Superb";
    }
    else if (rand < 0.80 && rand > 0.60) {
        adj2 = "Distruptive";
        adj4 = "Authentic";
        adj5 = "Crazy";
        adj3 = "Bravo";
        adj1 = "Superb";
    }
    else if (rand < 1 && rand > 0.80) {
        adj3 = "Distruptive";
        adj5 = "Authentic";
        adj4 = "Crazy";
        adj1 = "Bravo";
        adj2 = "Superb";
    }

    rand=Math.random();
    console.log(rand);
    if (rand < 0.20 && rand > 0) {
        xtra1 = "Studio";
        xtra2 = "Food";
        xtra3 = "Limited";
        xtra4 = "Bros";
        xtra5 = "Hub";
    } else if (rand < 0.40 && rand > 0.20) {
        xtra5 = "Studio";
        xtra4 = "Food";
        xtra2 = "Limited";
        xtra1 = "Bros";
        adj3 = "Superb";
    } else if (rand < 0.60 && rand > 0.40) {
        xtra3 = "Studio";
        xtra1 = "Food";
        xtra5 = "Limited";
        xtra2 = "Bros";
        xtra4 = "Hub";
    }
    else if (rand < 0.80 && rand > 0.60) {
        xtra2 = "Studio";
        xtra4 = "Food";
        xtra5 = "Limited";
        xtra3 = "Bros";
        xtra1 = "Hub";
    }
    else if (rand < 1 && rand > 0.80) {
        xtra3 = "Studio";
        xtra5 = "Food";
        xtra4 = "Limited";
        xtra1 = "Bros";
        xtra2 = "Hub";
    }



    businessName = document.getElementById("myText").value;
    document.getElementById("no1").textContent = `${adj1} ${businessName} ${xtra1}`;
    document.getElementById("no2").textContent = `${adj2} ${businessName} ${xtra2}`;
    document.getElementById("no3").textContent = `${adj3} ${businessName} ${xtra3}`;
    document.getElementById("no4").textContent = `${adj4} ${businessName} ${xtra4}`;
    document.getElementById("no5").textContent = `${adj5} ${businessName} ${xtra5}`;
}
