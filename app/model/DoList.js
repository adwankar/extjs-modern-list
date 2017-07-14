Ext.define('ModernApp.model.DoList', {
    extend: 'Ext.data.Model',
    fields: [
             { name: 'name',     type: 'string' },
             { name: 'done',      type: 'boolean' }
        ]
        
});