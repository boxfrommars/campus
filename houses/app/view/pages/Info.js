Ext.define('Houses.view.pages.Info', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.houses-page-info',
    requires:[
        'Ext.form.Panel',
        'Ext.layout.container.Column',
        'Ext.layout.container.Form',
        'Ext.form.FieldSet',
        'Ext.form.field.ComboBox'
    ],
    id: 'houses-page-info',
    bodyPadding: 15,
    items: [{
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
                    xtype: 'textfield',
                    name: 'address',
                    fieldLabel: 'Адрес',
                    value: 'Краснодар, Ленина 50, кв. 44'
                }, {
                    xtype: 'combobox',

                    store: ['Блокированной застройки', 'Индивидуальной застройки'],
                    name: 'type',
                    fieldLabel: 'Тип дома'
                }]
            }, {
                defaults: {
                    anchor: '100%',
                    labelWidth: 120,
                    style: 'border: 0',
                    border: 0,
                    fieldStyle: {
                        border: 0
                    }
                },
                layout: 'form',
                bodyPadding: '0 0 10 10',
                columnWidth: 0.3,
                items: [{
                    xtype: 'textfield',
                    name: 'series',
                    fieldLabel: 'Серия дома'
                }, {
                    fieldLabel: 'Состояние дома',
                    xtype: 'combobox',
                    store: ['Блокированной застройки', 'Индивидуальной застройки'],
                    name: 'type'
                }]
            }]

    }]
});