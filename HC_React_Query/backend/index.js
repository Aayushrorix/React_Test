import express from 'express';

const app = express();

app.get('/api/products', (req, res) => {
    const products = [
        {
            id: 1,
            name: 'table wooden',
            price: 200,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTeZuD5wr4obJ8MVyhXfFc46wCIbh382byOPVZeHqz8pSl0kdLA5mRg_XScCG_tddQKCM&usqp=CAU"
        },
        {
            id: 2,
            name: 'table glass',
            price: 250,
            image: "https://cdn3.vectorstock.com/i/1000x1000/31/07/modern-glass-table-vector-9893107.jpg"
        },
        {
            id: 3,
            name: 'table plastics',
            price: 150,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT13_OgAbf_arA0aFm_36ymJwlgIRaBlIqUKw&s"
        },
        {
            id: 4,
            name: 'table metal',
            price: 300,
            image: "https://i.pinimg.com/736x/f8/cf/da/f8cfda5b3e82357c989b899eb300b7f8.jpg"
        },
        {
            id: 5,
            name: 'table polyester',
            price: 150,
            image: "https://www.cvlinens.com/cdn/shop/products/Polyester-Table-Runner-Gold.jpg?v=1615240729&width=500"
        }
    ]

    // res.send(products)
    setTimeout(() => {
        if(req.query.search){
            const filterProducts = products.filter(product => product.name.includes(req.query.search))
            res.send(filterProducts)
            return;
        }
        res.send(products)
    },3000)
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})