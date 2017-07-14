Ext.define('ModernApp.store.DoList', {
    extend: 'Ext.data.Store',
    model: 'ModernApp.model.DoList',
    storeId:'dolist',
    alias:'store.dolist',
    autoLoad:true,
    proxy:{
        type:'ajax',
        url:'/resources/todo.json',
        reader:{
            type:'json'
        }
    }
});