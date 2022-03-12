
import image from './fightClub.jpg';



const fakeDatabase = [
    {    id: 1,
        price: 700,
        filmName: 'Fight Club',
        sinopsis: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. At veniam officiis id expedita quia doloremque, porro reiciendis sit? Totam unde ad, deleniti ab optio molestiae in vitae earum dolorem deserunt?',
        stock: Math.round(Math.random()  * 5),
        img: image,
        categoria: 'populares' 
    },
    {    id: 2,
        price: 700,
        filmName: 'Fight Club',
        sinopsis: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. At veniam officiis id expedita quia doloremque, porro reiciendis sit? Totam unde ad, deleniti ab optio molestiae in vitae earum dolorem deserunt?',
        stock: Math.round(Math.random()  * 5),
        img: image,
        categoria: 'populares' 
    },
    {    id: 3,
        price: 700,
        filmName: 'Fight Club',
        sinopsis: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. At veniam officiis id expedita quia doloremque, porro reiciendis sit? Totam unde ad, deleniti ab optio molestiae in vitae earum dolorem deserunt?',
        stock: Math.round(Math.random()  * 5),
        img: image,
        categoria: 'populares' 
    },
    {    id: 4,
        price: 700,
        filmName: 'Fight Club',
        sinopsis: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. At veniam officiis id expedita quia doloremque, porro reiciendis sit? Totam unde ad, deleniti ab optio molestiae in vitae earum dolorem deserunt?',
        stock: Math.round(Math.random()  * 5),
        img: image,
        categoria: 'populares' 
    },
    {    id: 5,
        price: 700,
        filmName: 'Fight Club',
        sinopsis: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. At veniam officiis id expedita quia doloremque, porro reiciendis sit? Totam unde ad, deleniti ab optio molestiae in vitae earum dolorem deserunt?',
        stock: Math.round(Math.random()  * 5),
        img: image,
        categoria: 'populares' 
    },
    {    id: 6,
        price: 700,
        filmName: 'Fight Club',
        sinopsis: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. At veniam officiis id expedita quia doloremque, porro reiciendis sit? Totam unde ad, deleniti ab optio molestiae in vitae earum dolorem deserunt?',
        stock: Math.round(Math.random()  * 5),
        img: image,
        categoria: 'clasicos' 
    },
    {    id: 7,
        price: 700,
        filmName: 'Fight Club',
        sinopsis: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. At veniam officiis id expedita quia doloremque, porro reiciendis sit? Totam unde ad, deleniti ab optio molestiae in vitae earum dolorem deserunt?',
        stock: Math.round(Math.random()  * 5),
        img: image,
        categoria: 'clasicos' 
    },
    {    id: 8,
        price: 700,
        filmName: 'Fight Club',
        sinopsis: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. At veniam officiis id expedita quia doloremque, porro reiciendis sit? Totam unde ad, deleniti ab optio molestiae in vitae earum dolorem deserunt?',
        stock: Math.round(Math.random()  * 5),
        img: image,
        categoria: 'clasicos' 
    },
    {    id: 9,
        price: 700,
        filmName: 'Fight Club',
        sinopsis: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. At veniam officiis id expedita quia doloremque, porro reiciendis sit? Totam unde ad, deleniti ab optio molestiae in vitae earum dolorem deserunt?',
        stock: Math.round(Math.random()  * 5),
        img: image,
        categoria: 'clasicos' 
    },
    {    id: 10,
        price: 700,
        filmName: 'Fight Club',
        sinopsis: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. At veniam officiis id expedita quia doloremque, porro reiciendis sit? Totam unde ad, deleniti ab optio molestiae in vitae earum dolorem deserunt?',
        stock: Math.round(Math.random()  * 5),
        img: image,
        categoria: 'clasicos' 
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
