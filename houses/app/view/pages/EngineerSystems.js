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
        items: [
            {
                bodyPadding: '0 10 10 0',
                items: [{
                    xtype: 'combobox',

                    store: ['Тип 1', 'Тип 2'],
                    value: 'Тип 1',
                    name: 'type',
                    fieldLabel: 'Тип',
                    editable: false
                }]
            }]

    }]
});