Ext.define('Houses.Application', {
    name: 'Houses',
    requires: [
        'Houses.config.Runtime',
        'Ext.util.History',
        'Houses.view.pages.*'
    ],

    extend: 'Ext.app.Application',

    views: [],

    refs: [{
        ref: 'navigationGrid',
        selector: '#houses-navigation-treepanel'
    }, {
        ref: 'contentPanel',
        selector: '#houses-content-panel'
    }],

    controllers: [],

    stores: [
        'Navigation'
    ],

    init: function() {
        Ext.util.History.init();
        this.control({
            '#houses-navigation-treepanel': {
                selectionchange: {
                    fn: function(t, selected){
                        Ext.util.History.add(selected[0].raw.token, true);
                    },
                    scope: this
                }
            }
        });
    },

    launch: function(){
        Ext.History.on('change', this.loadPage, this);
        var token = Ext.util.History.getToken();
        this.loadPage(token);
    },

    loadPage: function(token){
        token = token ? token : 'info';
        var record = this.getNavigationGrid().getStore().getRootNode().findChild('token', token, true);
        if (record) {
            console.log(token);
            this.getNavigationGrid().getSelectionModel().select(record, false, true);
            this.getContentPanel().removeAll();
            this.getContentPanel().setTitle(record.get('text'));
            this.getContentPanel().add({xtype: record.get('page')});
        } else {
            console.log('token ' + token + ' is not exist');
        }

    }
});
