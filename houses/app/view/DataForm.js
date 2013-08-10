Ext.define('Houses.view.DataForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.data-form',
    cls: 'data-form',
    buttons: [{
        xtype: 'checkbox',
        fieldLabel: 'Редактирование',
        handler: function(elm, checked) {
            var form = this.up('form');
            var fields = form.getForm().getFields();
            Ext.each(fields.items, function (f) {
                if (f.action !== 'unlock') f.setDisabled(!checked);
            });
            form.down('button[action="save"]').setDisabled(!checked);
            form.down('button[action="reset"]').setDisabled(!checked);
        },
        action: 'unlock'
    }, {
        xtype: 'button',
        text: 'Сохранить',
        action: 'save',
        disabled: true
    }, {
        text: 'Сбросить',
        handler: function() {
            this.up('form').getForm().reset();
        },
        action: 'reset',
        disabled: true
    }]
});