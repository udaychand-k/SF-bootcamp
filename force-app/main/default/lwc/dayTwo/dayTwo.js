import { LightningElement, api } from 'lwc';

export default class DayTwo extends LightningElement {
    @api alias='Hemanth';
    updateusername;

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