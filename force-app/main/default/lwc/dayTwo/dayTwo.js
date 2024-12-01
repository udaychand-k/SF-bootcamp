import { LightningElement, api } from 'lwc';

export default class DayTwo extends LightningElement {
    @api alias='Hemanth';
    updateusername;
    @api products;
    @api addProduct;
    inputValue;
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