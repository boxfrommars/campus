Ext.define('Houses.view.pages.Info', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.houses-page-info',
    requires:[
        'Houses.view.DataForm',
        'Ext.form.Panel',
        'Ext.layout.container.Column',
        'Ext.layout.container.Form',
        'Ext.form.FieldSet',
        'Ext.form.field.ComboBox'
    ],
    id: 'houses-page-info',
    bodyPadding: 15,
    items: [{
        xtype: 'data-form',
        layout:'column',
        defaults: {
            columnWidth: 0.3,
            layout: 'form',
            defaults: {
                anchor: '100%',
                disabled: true,
                labelWidth: 120
            }
        },
        items: [{
            bodyPadding: '0 10 10 0',
            items: [{
                xtype: 'textfield',
                fieldLabel: 'Адрес',
                name: 'address',
                value: 'Краснодар, Ленина 50, кв. 44'
            }, {
                xtype: 'combobox',
                store: ['Блокированной застройки', 'Индивидуальной застройки'],
                name: 'type',
                fieldLabel: 'Тип дома'
            }]
        }, {
            bodyPadding: '0 0 10 10',
            items: [{
                xtype: 'textfield',
                fieldLabel: 'Серия дома',
                name: 'series'
            }, {
                xtype: 'combobox',
                fieldLabel: 'Состояние дома',
                store: ['Блокированной застройки', 'Индивидуальной застройки'],
                name: 'type'
            }]
        }]
    }]
});