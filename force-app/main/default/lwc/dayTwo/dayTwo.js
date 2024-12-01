import { LightningElement, api } from 'lwc';

export default class DayTwo extends LightningElement {
    @api alias='Hemanth';
    updateusername;
    @api products;
    @api addProduct;
    @api removeProduct;
    inputValue;
    r;
    // handleChangeinput(event){
    //     this.inputValue=event.target.value;
    // }
    handleClick(){
        
            this.inputValue=this.refs.myinput.value;

            
         let obj={label:this.inputValue,value:this.inputValue}
     
        
        if(this.addProduct && this.inputValue){
            
            this.addProduct(obj);
        }
        this.refs.myinput.value='';

    }
    handleRemove(event){
        this.r=event.target.label;
        this.removeProduct(this.r);
        
    }
    handleChange(event){
        let e=new CustomEvent(
            'updateusername',
            {
                detail:{
                    updateusernametonewname:event.target.value
                }
            }
        )

        this.dispatchEvent(e);
    }

}