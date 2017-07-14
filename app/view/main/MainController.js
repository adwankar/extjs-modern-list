/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('ModernApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    },

    onCheckChange: function(column, rowIndex , checked , record , e , eOpts ){
       
        const PI = 3.141593;
        console.log(PI);

        var a = [1, 2, 3];
        for (let i = 0; i < a.length; i++) {
            let x = a[i]
            console.log(x);
        }

        inc = (a => a + 1);
        console.log(inc(1) === 2);

        
        if (checked)
             Ext.Msg.alert('Check', 'Checked!', this);
        else
             Ext.Msg.alert('Check', 'Not Checked!', this);
    
    } 
});
