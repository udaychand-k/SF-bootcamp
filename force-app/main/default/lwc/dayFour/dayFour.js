import { LightningElement,api } from 'lwc';
console.log('***********');
console.log('*************************************'+ Id);
import Id from '@salesforce/user/Id';

console.log('*'+ Id);

export default class DayFour extends LightningElement {
    @api recordId;
    @api objectApiName
    objName;
    rec;
    uid;
    constructor(){
        super();
        this.uid=Id;
       
    }
    connectedCallback(){
        this.rec= this.recordId;
        this.objName=this.objectApiName;
        
    }
    renderedCallback(){
        
    }
    disconnectedCallback(){

    }
    errorCallback(){

    }
}