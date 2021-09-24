import React from "react";
import Title from './components/Title';
import ShoppingList from './components/ShoppingList';
import styles from './App.module.css';
import './App.css';

/* A ES6 class style stateful component for the shopping list application */
class App extends React.Component {
  constructor(props)
  {
    /* You should call super(props) before any other statement. 
       Otherwise, this.props will be undefined in the constructor, which can lead to bugs.
    */
    super(props);

    this.state = {
      items: [
        { id: 1, value: 'Milk', qty: 5, unit: 'ltr' },
        { id: 2, value: 'Bananas', qty: 6, unit: 'pcs' },
        { id: 3, value: 'Bread', qty: 3, unit: 'x' },
        { id: 4, value: 'Eggs', qty: 16, unit: 'x' }
      ]
    };

   

   // this.addSomeCarrots = this.addSomeCarrots.bind(this);

  }
                      //this binding                //There are better ways to do this copy paste code, but this was before watching more videos of this course. 
 /* addSomeCarrots = () => {                          //Should do just one function and use value and qty as a parameter
    for(let i = 0; i < this.state.items.length; i++){
      if(this.state.items[i].value=="Carrot") {
        const product = [...this.state.items];
        product[i].qty += Math.ceil(Math.random() * 20);

        return this.setState({items: product});
      }
      else {
        this.setState({ items: [...this.state.items, {id: 7, value: "Carrot", qty: Math.ceil(Math.random() * 20), unit: 'x'}] });
      }
    }    
  }

  addSomeStrawberrys = () => {
    for(let i = 0; i < this.state.items.length; i++){
      if(this.state.items[i].value=="Strawberry") {
        const product = [...this.state.items];
        product[i].qty += Math.ceil(Math.random() * 20);

        return this.setState({items: product});
      }
      else {
        this.setState({ items: [...this.state.items, {id: 7, value: "Strawberry", qty: Math.ceil(Math.random() * 20), unit: 'x'}] });
      }
    }    
  }

  addSomeYoghurt = () => {
    for(let i = 0; i < this.state.items.length; i++){
      if(this.state.items[i].value=="Yoghurt") {
        const product = [...this.state.items];
        product[i].qty += Math.ceil(Math.random() * 20);

        return this.setState({items: product});
      }
      else {
        this.setState({ items: [...this.state.items, {id: 7, value: "Yoghurt", qty: Math.ceil(Math.random() * 20), unit: 'x'}] });
      }
    }    
  }

  addSomeBeer = () => {
    for(let i = 0; i < this.state.items.length; i++){
      if(this.state.items[i].value=="Beer") {
        const product = [...this.state.items];
        product[i].qty += Math.ceil(Math.random() * 20);

        return this.setState({items: product});
      }
      else {
        this.setState({ items: [...this.state.items, {id: 7, value: "Beer", qty: Math.ceil(Math.random() * 20), unit: 'x'}] });
      }
    }    
  }*/
  addSomeStuff = (stuffDescription, quantity) =>{
    return () => { 
      const searchResult = this.state.items.findIndex((element, index, array) => {
        if(element.value === stuffDescription){
          return true;
        } else {
          return false;
        }
      });

      if(searchResult != -1){
        console.log("sucess, element with index " + searchResult + " is matchin for  " + stuffDescription);
        let newItems = [...this.state.items];
        newItems[searchResult].qty += quantity;

        this.setState({items:newItems});
      }
      else{
        console.log('No milk :s');
        this.setState(
          { items: 
            [...this.state.items,
               {
                 id: this.state.items+1,
                value: stuffDescription, 
                 qty: quantity
                }
             ] 
          });
        }
     }
  }  

  onDeleteItem = (idToBeDeleted) => {
    console.log('delete item with id ' + idToBeDeleted);
  
    let indexToDelete = this.state.items.findIndex(item => item.id === idToBeDeleted);

    if(indexToDelete !== -1)
    { 
    let newItems = [...this.state.items];  
    newItems.splice(indexToDelete, 1);      //Splicen toinen parametri on deleteCount
    this.setState({ items: newItems })
    }
 
  }


  render()
  {
    const { applicationDescription, applicationName } = this.props;
    return <div className={ styles.shoppingList }>
      <Title 
        applicationDescription={ applicationDescription }
        applicationName={ applicationName }
      />
      <ShoppingList items={ this.state.items } onDeleteItem={ this.onDeleteItem }/>
      <button onClick={ this.addSomeStuff('Carrots', 5) }>Add carrot</button>
      <button onClick={ this.addSomeStuff('Yogurt',2) }>Add Yogurt</button>
      <button onClick={ this.addSomeStuff('Blueberry',3) }>Add Blueberry</button>
      <button onClick={ this.addSomeStuff('Beer',6) }>Add Beer</button>
    </div>
  }
}

export default App;