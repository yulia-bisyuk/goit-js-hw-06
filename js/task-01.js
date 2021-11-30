
const getStatistic = () => {

    const listEl = document.querySelector('#categories');
    console.log(`Number of categories: ${listEl.children.length}`);

    const listItemEl = listEl.querySelectorAll('.item');

    listItemEl.forEach((element) => {
        const categoryName = element.firstElementChild.textContent;
        const categoryElems = element.querySelectorAll('.item > ul > li');;

            console.log(`Category: ${categoryName} Elements: ${categoryElems.length}`);
    })


    
}

getStatistic();
