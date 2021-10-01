const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const port = 4000
const productData = require('./data.json');
const { v4: uuidv4 } = require('uuid');
app.use(bodyParser.json());
const cors = require('cors');

//==============Exercise5 Section=================================

app.use(cors());

app.get('/ex5data', (req, res) => {
    res.json(productData);
})


//================================================================




let invoices = []


let product = [{
    id: uuidv4(),
    name: 'Titinalle',
    manufacturer: 'China',
    category: 'Toy',
    description: 'Teddybear',
    price: '9.99'
}];

let user = [{ 
    id: uuidv4(),
    firstname: 'Tuomas',
    lastname: 'Riihiaho',
    address: 'Oppimisenpolku 1',
    age: '26'

}];


//----------------------------------------------------------------

//Default window
app.get('/', (req, res) => {
    res.send('Hello!')
})

//----------------------------------------------------------------

//Get All products
app.get('/products', (req, res) => {
    res.json(product);
})

//----------------------------------------------------------------

//Get by id
app.get('/product/:id', (req, res) => {  
    const result = product.find(product => product.id === req.params.id);
    res.json(result);
})

//----------------------------------------------------------------

//Get by name
app.get('/name/:name', (req,res) => {

    const resultName = product.find(n => n.name === req.params.name);

     res.json(resultName);

 });

//-----------------------------------------------------------------

//Get by manufacturer

app.get('/manufacturer/:manufacturer', (req,res) => {

    const resultManufacturer = product.find(m => m.manufacturer === req.params.manufacturer);

     res.json(resultManufacturer);

 });

//-----------------------------------------------------------------

//Get by category

app.get('/category/:category', (req,res) => {

    const resultCategory = product.find(g => g.category === req.params.category);

     res.json(resultCategory);

 });

//-----------------------------------------------------------------

//Delete by id

app.delete('/product/:id', (req, res) => {
    const result = product.findIndex(product => product.id === req.params.id);
    if(result !== -1){
        product.splice(result, 1);
        res.send('Delete succeeded');
    } else{
        res.send('No such product found');
    }
})

//----------------------------------------------------------------

//Add item

app.post('/product', (req, res) => {
    console.log('Creating new product');
    console.log(req.body);
    
    product.push({
        id: uuidv4(),
        name: req.body.name,
        manufacturer: req.body.manufacturer,
        category: req.body.manufacturer,
        description: req.body.description,
        price: req.body.price
    })
   
    res.send('Product created');
   })
   
//----------------------------------------------------------------

//Update item


        app.put("/product/:id", (req, res) => { 
            const id = req.params.id;
            const updatedproduct = {'id': id, ...req.body};
          
            //Get the index of updated product
            const index = product.findIndex(d => d.id === req.params.id);
            //Replace updated product in the array
            product.splice(index, 1, updatedproduct); 
          
            
            res.send('Product updated successfully');
          })



//----------------------------------------------------------------

//Create user
app.post('/user', (req, res) => {
    console.log('Creating new user');
    console.log(req.body);
    
    user.push({
        id: uuidv4(),
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        address: req.body.address,
        age: req.body.age
    })
   
    res.send('User created');
   })

//----------------------------------------------------------------


//Get All users
app.get('/users', (req, res) => {
    res.json(user);
})

//----------------------------------------------------------------

//Add invoices
app.post('/invoices/:id/', (req, res) => {
    const userId = user.find(i => i.id === req.params.id);
    
    if (userId !== undefined) {
    invoices.push({
        userId: userId.id,
        invoiceId: uuidv4(),
        item1: req.body.item1,
        item1price: req.body.item1price,
        item2: req.body.item2,
        item2price: req.body.item2price,
        item3: req.body.item3,
        item3price: req.body.item3price,
        item4: req.body.item4,
        item4price: req.body.item4price,
        total: req.body.item1price+req.body.item2price+ req.body.item3price+req.body.item4price
    })}
    else {
        res.send("Error");
    }

    res.send('invoice created');
   })


//----------------------------------------------------------------

//Get invoices

app.get('/invoices', (req, res) => {
    
    res.json(invoices);

})

//----------------------------------------------------------------

//Get invoices of a user

app.get('/invoices/:id', (req, res) => {
    
    const result = invoices.filter(i => i.userId === req.params.id);
    res.json(result);
    
})

//----------------------------------------------------------------

//Get a single invoice of a user

app.get('/invoicessingle/:id', (req, res) => {

    const result = invoices.find(i => i.invoiceId === req.params.id);
    
    res.json(result);
})

//----------------------------------------------------------------

//Delete invoice of a user

app.delete('/invoicesdelete/:id', (req, res) => {
    const result = invoices.findIndex(d => d.invoiceId === req.params.id);
    if(result !== -1){
        invoices.splice(result, 1);
        res.send('Delete succeeded');
    } else{
        res.send('No such invoice found');
    }
})


//----------------------------------------------------------------

app.listen(port, () => {
    console.log('Example app listening at http://localhost:${port}')
})