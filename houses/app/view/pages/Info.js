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
    bodyPadding: 15,
    items: [{
        xtype: 'data-form',
        layout:'column',
        defaults: {
            columnWidth: 0.5,
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
                value: 'Ленина 50'
            }, {
                xtype: 'combobox',
                store: ['Блокированной застройки', 'Индивидуальной застройки'],
                value: 'Блокированной застройки',
                name: 'type',
                fieldLabel: 'Тип дома',
                editable: false
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
                value: 'Нормальное',
                store: ['Нормальное', 'Не очень'],
                name: 'type',
                editable: false
            }]
        }]
    }]
});