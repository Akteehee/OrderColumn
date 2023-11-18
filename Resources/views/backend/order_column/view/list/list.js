Ext.define('Shopware.apps.OrderColumn.view.list.List', {
    extend: 'Shopware.apps.Order.view.list.List',

    initComponent: function() {
        var me = this

        me.callParent(arguments);

        Object.assign(snippets.columns, {    //Extend snippets.column object to add translation to the new column
            language: '{s name="column/language"}Language{/s}',
        });

        me.columns.push({  //Add language variable to columns array which contains other columns for order list
            header: me.snippets.columns.language,
            dataIndex: 'locale[name]', //I am not sure if locale[name] is available in order list or only in order detail, i couldn't dump variables to find out
            flex: 1
        });
    }
});
