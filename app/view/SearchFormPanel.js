/*
 * File: app/view/SearchFormPanel.js
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

Ext.define('Contacts.view.SearchFormPanel', {
    extend: 'Ext.form.Panel',
    alias: 'widget.searchformpanel',

    requires: [
        'Ext.form.FieldSet',
        'Ext.field.Text',
        'Ext.Button'
    ],

    config: {
        padding: '10px 30px',
        items: [
            {
                xtype: 'fieldset',
                instructions: 'Въведете мин. първите 3 букви от името или първаите букви от името и фамилията с интервал между тях',
                title: 'Търсене по име:',
                items: [
                    {
                        xtype: 'textfield',
                        id: 'txtSearch',
                        label: 'Име:'
                    }
                ]
            },
            {
                xtype: 'button',
                id: 'btnSearch',
                iconCls: 'search'
            }
        ]
    }

});