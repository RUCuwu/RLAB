var menuLinks = [
    { text: 'About', 
        href: '/about'},
    {
        text: 'catalog',
        href: '#',
        subLinks: [
            { text: 'All', href: '/catalog/all' },
            { text: 'Top Selling', href: ' /catalog/top'},
            { text: 'Search', href: ' /catalog/search'},
        ],
    },
    {
        text: 'orders',
        href: '#',
        subLinks: [
            { text: 'New', href: '/orders/new' },
            { text: 'Pending' , href: '/orders/pending' },
            { text: 'History', href: '/orders/history' },
        ],
    },
    {
        text: 'account',
        href: '#',
        subLinks: [
            {text: 'Profile', href: '/account/profile' },
            { text: 'Sign out', href: '/account/signout'},
        ],
    },
];

const mainElement= document.querySelector('main');
mainElement.style.backgroundColor = 'var(--main-bg)';
mainElement.innerHTML = '<h1>DOM Manipulation</h1>';
mainElement.classList.add('flex-ctr');

const topMenuEl = document.querySelector('#top-menu');
topMenuEl.style.height = '100%';
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
topMenuEl.classList.add('flex-around');

menuLinks.forEach((link) => {
        const anchorEl = document.createElement('a');
        anchorEl.setAttribute('href', link.href);
        anchorEl.textContent = link.text;
        topMenuEl.appendChild(anchorEl);
});

const subMenuEl = document.querySelector('#sub-menu');
subMenuEl.style.height = '100%';
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';
subMenuEl.classList.add('flex-around');
subMenuEl.style.position = 'absolute';
subMenuEl.style.top = '0';

const TopMenuLinks = topMenuEl.querySelectorAll('a');
console.log(TopMenuLinks);
topMenuEl.addEventListener('click', (event) => {
    event.preventDefault();
    if (event.target.tagName.toLowerCase() !== 'a') {
        return;
    }
    console.log(event.target.textContent);
    if (event.target.classList.contains("active")) {
        event.target.classList.remove("active");
    } else {
        event.target.classList.add("active");
    }
    TopMenuLinks.forEach((item) => {
        if(item != event.target){
            // item.classList.remove("active");
        }
    });
    if (
        menuLinks.filter(
            (item) => item.text == event.target.textContent && item.subLinks
        ).length !== 0
    ) {
        subMenuEl.style.top = "100%";
    } else {
        subMenuEl.style.top = "0";
    }
    const buildSubmenu = (subLinks) =>{
        if(!subLinks)
            return
        subLinks.forEach((item) => {
            const aEl = document.createElement("a");
            aEl.setAttribute("href", item.href);
            aEl.textContent = item.text;
            subMenuEl.appendChild(aEl);
        });
    };

    menuLinks.forEach((item) => {
        if (item.text == event.target.textContent) {
            buildSubmenu(item.subLinks)
        }
    });
    
});

subMenuEl.addEventListener("click", event =>{
    event.preventDefault()
    if (event.target.tagName.toLowerCase() !== "a") {
        return;
    } else{
    subMenuEl.style.top = "0"
    mainElement.querySelector("h1").textContent = event.target.textContent;
    mainElement.querySelector("h1").style.textTransform = "capatilize";
    subMenuEl.innerHTML = '<h1>/about</h1>'
    }
    // // TopMenuLinks.forEach((item) =>{
    // document.addEventListener('click' , event => {
    //     const h1 = subMenuEl.querySelector("h1").textContent;
    //     subMenuEl.innerText = <h1>'About'</h1>;
        //const mainElement= document.querySelector('main');
// mainElement.style.backgroundColor = 'var(--main-bg)';
// mainElement.innerHTML = '<h1>DOM Manipulation</h1>';
// mainElement.classList.add('flex-ctr');
//         if (item != event.target){
//             item.classList.remove();
//         }
//     });

});

// document.addEventListener('About' , e => {
//     const h1 = document.querySelector("h1").textContent
//     h1.innerText = 'About'
// });