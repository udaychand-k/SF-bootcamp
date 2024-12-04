import { LightningElement, track } from 'lwc';

export default class DayOne extends LightningElement {
    username='Udaychand';
    usernamealias;
    percent=10;
    
     products=[
        {label:'bike',value:'bike'},
        {label:'cycle',value:'cycle'},
        {label:'car',value:'car'}
]
value=this.products[1].value;
data={products:this.products, addProduct:this.addProduct.bind(this),removeProduct: this.removeProduct.bind(this)};
addProduct(obj){
   
    this.products=[...this.products,obj];
    this.data={products:this.products, addProduct:this.addProduct.bind(this),removeProduct: this.removeProduct.bind(this)};

}
removeProduct(r){
    this.products=this.products.filter((p)=>p.label !==r)
    this.data={products:this.products, addProduct:this.addProduct.bind(this),removeProduct: this.removeProduct.bind(this)};
    debugger;
}
handleChangeCombobox(event){
    this.value=event.detail.value;

}
    handleChange(event){
        this.usernamealias=event.target.value;
    }
    handleupdateUsername(event){
        this.username=event.detail.updateusernametonewname;
    }
    handleKeyup(event){
        this.percent=event.target.value;
    }
    get width(){
        return `width:${this.percent}%`;
    }
    renderedCallback(){
        const style = document.createElement('style');
        style.innerText=`c-day-one .uday .slds-form-element__label
        {
        background-color: var(--lwc-colorBackground);
        color: tomato;
        }`;
        let v = this.template.querySelector('.uday');
        console.log('**************'+v);
        v.appendChild(style);
    }
}