/* _____________________________________________________________________________________________________ */
/* ||||||||||||||||||||||||||||||||||||||||||| STEP 1-3 |||||||||||||||||||||||||||||||||||||||||||||||| */
/* ===================================================================================================== */
let cardsList = document.querySelector(".cards");
let cards = [
    // {title:"",urlLink:"",}
    {title:"Project: Cat Photo",urlLink:"https://funkodet.github.io/M3CSSCatPhoto/",},
    {title:"Project: M3 Weather & News",urlLink:"https://funkodet.github.io/M3CSSWeatherNews/",},
    {title:"Project: Ninja MarioClub",urlLink:"https://funkodet.github.io/MarioClub/",},
    {title:"Final: Interactive HTML & CSS",urlLink:"https://funkodet.github.io/CSSHTML5/",},
    {title:"Project: JS Crash Course",urlLink:"https://funkodet.github.io/M3JSCrashCourse/",},
    {title:"Project: JS Button",urlLink:"https://funkodet.github.io/M3PJSButton/",},
    {title:"Project: JS List",urlLink:"https://funkodet.github.io/PJSList/",},
    {title:"Project: JS Memory Game",urlLink:"https://funkodet.github.io/M4PJSMemory/",},
    {title:"Project: JS API Test",urlLink:"https://funkodet.github.io/M4PJSAPI/",},
    {title:"Project: M4 Weather & News",urlLink:"https://funkodet.github.io/M4PJSWeatherNews/",},
    {title:"Project: M5 Website Debug",urlLink:"https://funkodet.github.io/M5WDebug/",},
];
const portalSite = {
    title:"Project: Project Portal Site",
    urlLink:"https://funkodet.github.io/M4PPPJS/",
};
cards.push(portalSite);
console.log(cards);
/* _____________________________________________________________________________________________________ */
/* ||||||||||||||||||||||||||||||||||||||||| STEP 4.1-2 - 5.1-3 |||||||||||||||||||||||||||||||||||||||| */
/* ===================================================================================================== */
cards.map((item) => {
    cardsList.innerHTML += 
    `
        <div class="card">
            <div class="card-inner">
                <div class="card-front">
                    <h2>${item.title}</h2>
                </div>
                <div class="card-back">
                    <a href="${item.urlLink}" target="_blank">Click here</a>
                </div>
            </div>
        </div>
    `;
});
/* _____________________________________________________________________________________________________ */
/* ||||||||||||||||||||||||||||||||||||||||| MISCELLANEOUS ||||||||||||||||||||||||||||||||||||||||||||| */
/* ===================================================================================================== */
// cards.push(cardsObj);
// console.log(cards);
// const cardsObj = {
//     title:["Project: Cat Photo Site","Project: Weather & News Site","Project: Ninja MarioClub Site",],
//     urlLink:["https://funkodet.github.io/M3CSSCatPhoto/","https://funkodet.github.io/M3CSSWeatherNews/","https://funkodet.github.io/MarioClub/",],
// };
// const cardsObj = {
//     catSite:{title:"Project: Cat Photo Site",urlLink:"https://funkodet.github.io/M3CSSCatPhoto/",},
//     weatherNewsSite:{title:"Project: Weather & News Site",urlLink:"https://funkodet.github.io/M3CSSWeatherNews/",},
//     marioClubSite:{title:"Project: Ninja MarioClub Site",urlLink:"https://funkodet.github.io/MarioClub/",},
//     personalSite:{title:"Final: Interactive HTML & CSS",urlLink:"https://funkodet.github.io/CSSHTML5/",},
//     crashCourseSite:{title:"Project: JS Crash Course",urlLink:"https://funkodet.github.io/M3JSCrashCourse/",},
//     buttonSite:{title:"Project: JS Button Site",urlLink:"https://funkodet.github.io/M3PJSButton/",},
//     listSite:{title:"Project: JS List Site",urlLink:"https://funkodet.github.io/PJSList/",},
//     portalSite:{title:"Project: Project Portal Site",urlLink:"https://funkodet.github.io/M4PPPJS/",},
// };
// const testArray = [
//     {title:"Project: Cat Photo Site",urlLink:"https://funkodet.github.io/M3CSSCatPhoto/",},
//     {title:"Project: Weather & News Site",urlLink:"https://funkodet.github.io/M3CSSWeatherNews/",},
//     {title:"Project: Ninja MarioClub Site",urlLink:"https://funkodet.github.io/MarioClub/",},
// ];
// cards.push(testArray);
// let test = cards[0].buttonSite;
// console.log(test);
/* _____________________________________________________________________________________________________ */