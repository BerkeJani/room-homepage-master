const modalImageUrls=[
'./images/desktop-image-hero-1.jpg',
'./images/desktop-image-hero-2.jpg',
'./images/desktop-image-hero-3.jpg'
]

const introductionTitle = [
    "Discover innovative ways to decorate",
    "We are available all across the globe",
    "Manufactured with the best materials"
]

const introductionText = [
    "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life.Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    " Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."

]

let actualPage = 0;

function onLeftClick() {
    if (actualPage > 0) {
        actualPage--;
    }
    else { actualPage = 2; }
    const newImageUrl = modalImageUrls[actualPage];
    document.getElementById('modal').style.backgroundImage = "url('" + newImageUrl + "')";
    document.getElementById('int-title').innerHTML = introductionTitle[actualPage];
    document.getElementById('int-text').innerHTML = introductionText[actualPage];
    console.log(newImageUrl);
}

function onRightClick() {
    if (actualPage <2) {
        actualPage++;
    }
    else { actualPage = 0; }
    const newImageUrl = modalImageUrls[actualPage];
    document.getElementById('modal').style.backgroundImage = "url('" + newImageUrl + "')";
    document.getElementById('int-title').innerHTML = introductionTitle[actualPage];
    document.getElementById('int-text').innerHTML = introductionText[actualPage];
    console.log(newImageUrl);
}
