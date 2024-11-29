import { LightningElement } from 'lwc';

export default class DayOne extends LightningElement {
    username='udaychand';
    usernamealias;
    handleChange(event){
        this.usernamealias=event.target.value;
    }
    handleupdateUsername(event){
        this.username=event.detail.updateusernametonewname;
    }
}