Ext.define('Houses.view.DataForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.data-form',
    cls: 'data-form',
    buttonAlign: 'left',
    buttons: [{
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
    }, {
        enableToggle: true,
        text: 'Редактирование',
        toggleHandler: function(elm, checked) {
            var form = elm.up('form');
            var fields = form.getForm().getFields();
            Ext.each(fields.items, function (f) {
                if (f.action !== 'unlock') f.setDisabled(!checked);
            });
            form.down('button[action="save"]').setDisabled(!(checked && form.isDirty()));
            form.down('button[action="reset"]').setDisabled(!(checked && form.isDirty()));
        },
        action: 'unlock'
    }],
    listeners: {
        dirtychange: function(form, dirty){
            this.down('button[action="save"]').setDisabled(!dirty);
            this.down('button[action="reset"]').setDisabled(!dirty);
        }
    }
});