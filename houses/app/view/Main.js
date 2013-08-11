Ext.define('Houses.view.Main', {
    extend: 'Ext.panel.Panel',
    requires:[
        'Ext.tab.Panel',
        'Ext.layout.container.Border',
        'Ext.toolbar.TextItem',
        'Ext.tree.Panel'
    ],
    
    xtype: 'app-main',

    layout: {
        type: 'border'
    },

    defaults: {
        split: true,
        overflowY: 'auto'
    },
    items: [{
        region: 'west',
        title: 'Навигация',
        itemId: 'houses-navigation-treepanel',
        xtype: 'treepanel',
        store: 'Navigation',
        rootVisible: false,
        collapsible: true,
        cls: 'x-tree-noicon',
//        useArrows: true,
        width: 300
    },{
        region: 'center',
        xtype: 'panel',
        id: 'houses-content-panel',
        title: '&nbsp;',
        items: []
    }],

    dockedItems: [{
        xtype: 'toolbar',
        dock: 'top',
        ui: 'default-toolbar',
        padding: 0,
        defaults: {
            border: 0,
            margin: 0,
            padding: '0 20 0 20',
            height: 40,
            style: {
                backgroundImage: 'none'
            }
        },
        items: [{
            xtype: 'button',
            text: 'Дома',
            style: {
                backgroundImage: 'none',
                "text-decoration": 'underline'
            }
        },{
            xtype: 'button',
            text: '/',
            disabled: true,
            padding: '0',
            style: {
                color: '#000',
                backgroundImage: 'none',
                opacity: 1
            }
        },{
            xtype: 'button',
            text: 'Ленина 50',
            disabled: true,
            style: {
                color: '#000',
                backgroundImage: 'none',
                opacity: 1
            }
        }, {
            xtype: 'component',
            flex: 1
        }, {
            xtype: 'button',
            text: 'Выход'
        }]
    }, {
        xtype: 'toolbar',
        dock: 'bottom',
        ui: 'footer',
        items: [{
            xtype: 'tbtext',
            text: 'To Vera Gzhel with Love'
        }, {
            xtype: 'component',
            flex: 1
        }]
    }]
});