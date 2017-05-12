/*
 * File: app/view/HomePanel.js
 *
 * This file was generated by Sencha Architect version 3.5.1.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.4.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.4.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Contacts.view.HomePanel', {
    extend: 'Ext.Panel',
    alias: 'widget.homepanel',

    requires: [
        'Ext.TitleBar',
        'Ext.Img'
    ],

    config: {
        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                title: 'Телефонен указател (ИАГ)'
            },
            {
                xtype: 'image',
                docked: 'top',
                height: 519,
                hidden: false,
                src: 'resources/images/home.png'
            }
        ]
    }

});