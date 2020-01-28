console.log('Lahey isn\'t dead');

const pies = [
    {
        name: "Dutch Apple Pie",
        price: 1000,
        isWarm: true,
        isOrganic: true,
        crust: "extra flakey",
        iceCream: "Vanilla Bean",
        isAvailable: true,
        imageUrl: "https://tmbidigitalassetsazure.blob.core.windows.net/secure/RMS/attachments/37/1200x1200/Favorite-Dutch-Apple-Pie_EXPS_SDAS17_9010_B04_06_2b.jpg",
        drinkPairing: "whiskey",
        instructor: "Zoe"
    },
    {

        name: "Regular Apple Pie",
        price: 5000,
        isWarm: true,
        isOrganic: true,
        crust: "under baked",
        iceCream: "vegan choclate",
        isAvailable: false,
        imageUrl: "https://kristineskitchenblog.com/wp-content/uploads/2013/11/Apple-Pie-700-592.jpg",
        drinkPairing: "Wine",
        instructor: "Mary"
    },
    {

        name: "Pizza Pie",
        price: 2.50,
        isWarm: true,
        isOrganic: false,
        crust: "New York Style",
        iceCream: "oreo",
        isAvailable: true,
        imageUrl: "https://i0.wp.com/blog.slicelife.com/wp-content/uploads/2019/03/Screen-Shot-2019-03-26-at-3.16.52-PM.png?fit=1200%2C803&ssl=1",
        drinkPairing: "High Life",
        instructor: "Luke"
    },
    {

        name: "Choclate Pie",
        price: 1,
        isWarm: false,
        isOrganic: true,
        crust: "Graham",
        iceCream: "mint",
        isAvailable: true,
        imageUrl: "https://i2.wp.com/www.sugarspunrun.com/wp-content/uploads/2017/09/Chocolate-Pie-Recipe-1-of-1-9-500x443.jpg",
        drinkPairing: "Gin",
        instructor: "Mary"
    },
    {

        name: "Pi",
        price: 3.14,
        isWarm: false,
        isOrganic: true,
        crust: "crumb",
        iceCream: "Moose Tracks",
        isAvailable: true,
        imageUrl: "https://i.redd.it/rmx19gul1c621.jpg",
        drinkPairing: "Milk",
        instructor: "Luke"
    },
    {

        name: "Cherry Pie",
        price: 15,
        isWarm: true,
        isOrganic: false,
        crust: "cookie",
        iceCream: "Cherry Garcia",
        isAvailable: true,
        imageUrl: "https://www.thespruceeats.com/thmb/Mg6LdDudts8nCT4rTO8JtBuv48A=/2592x2592/smart/filters:no_upscale()/slice-of-cherry-pie-with-cherry-on-side-on-plate-169960522-67fcb3cdc8024ea48f2f5a8cd3d2fd8c.jpg",
        drinkPairing: "Almond Milk",
        instructor: "Davis"
    },
    {

        name: "Chess Pie",
        price: 50,
        isWarm: false,
        isOrganic: true,
        crust: "flaky",
        iceCream: "cookies and cream",
        isAvailable: true,
        imageUrl: "https://shewearsmanyhats.com/wp-content/uploads/2014/11/chess-pie-2new.jpg",
        drinkPairing: "Green Chartruse",
        instructor: "Davis"
    },
    {

        name: "Berry Pie",
        price: 43,
        isWarm: false,
        isOrganic: true,
        crust: "small",
        iceCream: "choclate",
        isAvailable: true,
        imageUrl: "https://www.simplyrecipes.com/wp-content/uploads/2010/07/black-berry-pie-horiz-a-1600.jpg",
        drinkPairing: "Rum",
        instructor: "Zoe"
    },
]
console.log(pies);   

const pieBuilder = () => {
    let domString = '';
    for (let i = 0; i < pies.length; i++){
        domString += `<div class="pieCards">`
        domString += `<h3>${pies[i].name}</h3>`
        domString += `<img src="${pies[i].imageUrl}">`
        domString += `<div class="text">`
        domString += `<section>Price:   $${pies[i].price}</section>`
        domString += `<section>Is it warm?    ${pies[i].isWarm}</section>`
        domString += `<section>Crust:    ${pies[i].crust}</section>`
        domString += `<section>Type of Icecream:    ${pies[i].iceCream}</section>`
        domString += `<section>Available:    ${pies[i].isAvailable}</section>`
        domString += `<section>Drink Paring:    ${pies[i].drinkPairing}</section>`
        domString += `<section>Instructor:    ${pies[i].instructor}</section>`
        domString += `</div>`
        domString += `</div>`
    }
    printToDom('pies', domString);

};

const printToDom = (divID, textToPrint) => {
    const selectedDiv = document.getElementById(divID);
    selectedDiv.innerHTML = textToPrint;

};

pieBuilder();