Ext.define('Houses.view.pages.EngineerSystems', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.houses-page-engineersystems',
    requires:[
        'Ext.form.Panel',
        'Ext.layout.container.Column',
        'Ext.layout.container.Form',
        'Ext.form.FieldSet',
        'Ext.form.field.ComboBox'
    ],
    id: 'houses-page-engineersystems',
    bodyPadding: 15,
    items: [{
        xtype: 'tbtext',
        text: 'Общие сведения',
        padding: '10 0 0 0',
        style: {
            "font-weight": '800',
            padding: '0',
            "font-size": '1.2em'
        }
    }, {
        xtype: 'form',
        id: 'search-card-form',
        layout:'column',
        buttons: [{
            xtype: 'checkbox',
            fieldLabel: 'Редактирование',
            action: 'search'
        }, {
            xtype: 'button',
            text: 'Сохранить',
            disabled: true,
            action: 'search'
        }, {
            text: 'Сбросить',
            disabled: true,
            handler: function() {
                this.up('form').getForm().reset();
            }
        }],
        items: [
            {
                defaults: {
                    anchor: '100%',
                    labelWidth: 120,
                    style: 'border: 0',
                    border: 0,
                    fieldStyle: {
                        border: 0
                    }
                },
                columnWidth: 0.3,
                layout: 'form',
                bodyPadding: '0 10 10 0',
                items: [{
                    xtype: 'combobox',

                    store: ['Тип 1', 'Тип 2'],
                    name: 'type',
                    fieldLabel: 'Тип'
                }]
            }]

    }]
});