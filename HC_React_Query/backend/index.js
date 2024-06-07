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
        },
        {
          id: 6,
          name: "name 6",
          price: 11,
          image: "image 6"
        },
        {
          id: 7,
          name: "name 7",
          price: 54,
          image: "image 7",
        },
        {
          id: 8,
          name: "name 8",
          price: 38,
          image: "image 8",
        },
        {
          id: 9,
          name: "name 9",
          price: 62,
          image: "image 9",
        },
        {
          id: 10,
          name: "name 10",
          price: 8,
          image: "image 10",
        },
        {
          id: 11,
          name: "name 11",
          price: 22,
          image: "image 11",
        },
        {
          id: 12,
          name: "name 12",
          price: 80,
          image: "image 12",
        },
        {
          id: 13,
          name: "name 13",
          price: 48,
          image: "image 13",
        },
        {
          id: 14,
          name: "name 14",
          price: 95,
          image: "image 14",
        },
        {
          id: 15,
          name: "name 15",
          price: 17,
          image: "image 15",
        },
        {
          id: 16,
          name: "name 16",
          price: 20,
          image: "image 16",
        },
        {
          id: 17,
          name: "name 17",
          price: 16,
          image: "image 17",
        },
        {
          id: 18,
          name: "name 18",
          price: 1,
          image: "image 18",
        },
        {
          id: 19,
          name: "name 19",
          price: 15,
          image: "image 19",
        },
        {
          id: 20,
          name: "name 20",
          price: 82,
          image: "image 20",
        },
        {
          id: 21,
          name: "name 21",
          price: 83,
          image: "image 21",
        },
        {
          id: 22,
          name: "name 22",
          price: 67,
          image: "image 22",
        },
        {
          id:23,
          name: "name 23",
          price: 91,
          image: "image 23",
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