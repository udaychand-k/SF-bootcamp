import { LightningElement } from 'lwc';

export default class DayThree extends LightningElement {
    username=[ 'udaychand','hemanth']
    isalias=true;
    // c=this.template.querySelector('[data-id="myCheckbox"]').checked;
    // connectedCallback(){
    //     console.log('connectedCallback');
    //     console.log(this.c);
    // }
    
    products={
        'chips':['this is good', 'this is healthy'],
        'maggi':['this is good', 'this is healthy'],
        'onions':['this is good', 'this is healthy'],
        'garlic':['this is good', 'this is healthy'],
        'cumin':['this is good', 'this is healthy'],
        'garam':['this is good', 'this is healthy']}
    productList=Object.keys(this.products).map(this.convert.bind(this));

     convert(key) {
        let obj = {
            name:key,
        details: this.products[key]

        }
        return obj;
    }
    get user(){
        return this.isalias?this.username[0]:this.username[1];
    }
    handleChange(event){
        
        this.isalias = event.target.checked;
        console.log('*********'+this.isalias);
        
    }
}