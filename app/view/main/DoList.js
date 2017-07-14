Ext.define('ModernApp.view.main.DoList', {
    extend: 'Ext.grid.Grid',
    requires:['ModernApp.store.DoList'],
    

     xtype : 'modernapp-dolist', 
    bind:{
        store:'{dolist}'
    },
    columns:[{
        text:'Name',
        dataIndex:'name',
        flex:1
        },{
        xtype:'checkcolumn',
        dataIndex:'done',
        flex:1,
        listeners: {
                checkChange: 'onCheckChange'
         }    
    }]

});