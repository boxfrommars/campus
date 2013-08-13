Ext.define('Houses.view.pages.InfoPermises', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.houses-page-infopermises',
    requires:[
        'Ext.grid.Panel'
    ],
    items: [{
        xtype: 'gridpanel',
        columns: [{
            header: "№ квартиры",
            dataIndex: 'flat_num',
            flex: 1
        }, {
            data_index: 'flat_type',
            header: 'Тип квртиры',
            flex: 1
        }, {
            data_index: '',
            header: 'Комнат',
            flex: 1
        }, {
            data_index: '',
            header: 'Площадь',
            flex: 1
        }, {
            data_index: '',
            header: 'Жилая площадь',
            flex: 1
        }, {
            data_index: '',
            header: 'Кол-во жильцов',
            flex: 1
        }, {
            data_index: '',
            header: 'Статус приватизации',
            flex: 2
        }, {
            data_index: '',
            header: 'Собственник',
            flex: 1
        }, {
            data_index: '',
            header: 'Телефон',
            flex: 1
        }]
    }]
});