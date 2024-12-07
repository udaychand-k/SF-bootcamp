import { LightningElement,api } from 'lwc';
console.log('***********');
console.log('*************************************'+ Id);
import Id from '@salesforce/user/Id';
import signi from './signin.html';
import signu from './signup.html';
import home from './myname.html';
console.log('*'+ Id);

export default class DayFour extends LightningElement {
    @api recordId;
    @api objectApiName
    objName;
    rec;
    uid;
    isRegistration;
    isLogin;
    a;
    constructor(){
        super();
        this.uid=Id;
       
    }
    connectedCallback(){
        this.rec= this.recordId;
        this.objName=this.objectApiName;
        
    }
    render(){
        console.log('render callback');
        debugger;
        return  this.a=='sign up'?signu:this.a=='sign in'?signi:home;
    }
    renderedCallback(){
        
    }

    disconnectedCallback(){

    }
    errorCallback(){

    }
    handleclick(event){
        
         this.a = event.target.label;
         console.log('*********'+this.a);
         //this.render();
         debugger;
        

    }
    handleSubmit(event){
        console.log('handle submit');
        console.log(event.target.value);

    }
    handleLoginAndSignUP(){
        this.isLogin=!this.isLogin;
        this.isRegistration=!this.isRegistration;
        return this.isRegistration?signu:this.isLogin?signi:home;
    }
    handleback(event){
        this.isRegistration=false;
        this.isLogin=false;
        return this.isRegistration?signu:this.isLogin?signi:home;

    }
    handleRegistration(){
        this.isRegistration=true;
       return this.isRegistration?signu:singi;
    }
    handleLogin(){
        this.isLogin=true;
        return this.isRegistration?signu:this.isLogin?signi:home;
    }
}
