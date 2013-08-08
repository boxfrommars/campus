Ext.define('Houses.store.Navigation', {
    extend: 'Ext.data.TreeStore',
    model: 'Houses.model.NavigationItem',
    root: {
        expanded: true,
        children: [{
            text: "Сведения о доме",
            token: 'info',
            page: 'houses-page-info',
            expanded: true,
            selectable: false,
            children: [
//                {
//                text: "Общие данные",
//                token: 'info:general',
//                leaf: true
//            },
                {
                text: "Помещения",
                token: 'info:premises',
                page: 'houses-page-infopermises',
                leaf: true
            }]
        }, {
            text: "Инженерные системы",
            token: 'engineer-systems',
            page: 'houses-page-engineersystems',
            leaf: true
        }, {
            text: "Специальное инженерное оборудование",
            token: 'engineer-equipment',
            leaf: true
        }]
    }
});