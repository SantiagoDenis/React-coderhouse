
import image from './fightClub.jpg';
/* TENES QUE MAPEAR EL ARRAY PARA PODER VERLO EN EL MODAL */


const fakeDatabase = [
    {    id: 1,
        price: 700,
        filmName: 'Fight Club',
        sinopsis: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. At veniam officiis id expedita quia doloremque, porro reiciendis sit? Totam unde ad, deleniti ab optio molestiae in vitae earum dolorem deserunt?',
        stock: Math.round(Math.random()  * 5),
        img: image 
    },
    {    id: 2,
        price: 700,
        filmName: 'Fight Club',
        sinopsis: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. At veniam officiis id expedita quia doloremque, porro reiciendis sit? Totam unde ad, deleniti ab optio molestiae in vitae earum dolorem deserunt?',
        stock: Math.round(Math.random()  * 5),
        img: image 
    },
    {    id: 3,
        price: 700,
        filmName: 'Fight Club',
        sinopsis: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. At veniam officiis id expedita quia doloremque, porro reiciendis sit? Totam unde ad, deleniti ab optio molestiae in vitae earum dolorem deserunt?',
        stock: Math.round(Math.random()  * 5),
        img: image 
    },
    {    id: 4,
        price: 700,
        filmName: 'Fight Club',
        sinopsis: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. At veniam officiis id expedita quia doloremque, porro reiciendis sit? Totam unde ad, deleniti ab optio molestiae in vitae earum dolorem deserunt?',
        stock: Math.round(Math.random()  * 5),
        img: image 
    },
    {    id: 5,
        price: 700,
        filmName: 'Fight Club',
        sinopsis: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. At veniam officiis id expedita quia doloremque, porro reiciendis sit? Totam unde ad, deleniti ab optio molestiae in vitae earum dolorem deserunt?',
        stock: Math.round(Math.random()  * 5),
        img: image 
    }
]


const fakeApi = new Promise( (res, rej) => {
    const url = {status: 200}

    setTimeout( () => {
    if (url.status === 200) {
            res(fakeDatabase)
        } else {
            rej('Unable to fetch data')
        }
    }, 2000)
})
export default fakeApi
