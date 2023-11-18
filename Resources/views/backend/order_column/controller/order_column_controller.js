Ext.define('Shopware.apps.OrderColumn.controller.OrderColumnController', {
    override: 'Shopware.apps.Order.controller.List',

    init: function () {
        var me = this;

        me.callParent(arguments);
    }
    //Not sure if this controller was required but it was used in the documentation so i tried it out if it would prevent my current error
});
