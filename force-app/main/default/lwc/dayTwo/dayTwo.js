import { LightningElement, api, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
export default class DayTwo extends LightningElement {
    @api alias='Hemanth';
    updateusername;
    @api products;
    @api addProduct;
    @api removeProduct;
    @api recordId;
    inputValue;
    r;
    // handleChangeinput(event){
    //     this.inputValue=event.target.value;
    // }

    @wire(getRecord,{recordId:"$recordId"})
    wiredRecord({error,data}){
        if(data){
            this.alias=data.fields.Name.value;
        }
        console.log(this.alias);
        this.alias=this.alias;
    }
    
    connectedCallback(){
        console.log(this.alias);
        this.alias="Udaychand";
        console.log(this.alias);
    }
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