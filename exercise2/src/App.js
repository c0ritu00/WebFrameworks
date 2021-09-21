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
                      //this binding
  addSomeCarrots = () => {                                                      
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
  }
    

  render()
  {
    const { applicationDescription, applicationName } = this.props;
    return <div className={ styles.shoppingList }>
      <Title 
        applicationDescription={ applicationDescription }
        applicationName={ applicationName }
      />
      <ShoppingList items={ this.state.items } />
      <button onClick={ this.addSomeCarrots }>Add Carrots</button>
      <button onClick={ this.addSomeStrawberrys }>Add Strawberries</button>
      <button onClick={ this.addSomeYoghurt }>Add Yoghurt</button>
      <button onClick={ this.addSomeBeer }>Beer me!</button>
    </div>
  }
}

export default App;