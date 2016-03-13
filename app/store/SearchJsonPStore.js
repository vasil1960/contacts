/*
 * File: app/store/SearchJsonPStore.js
 *
 * This file was generated by Sencha Architect version 3.5.0.
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

Ext.define('Contacts.store.SearchJsonPStore', {
    extend: 'Ext.data.Store',
    alias: 'store.searchjsonpstore',

    requires: [
        'Contacts.model.UserModel',
        'Ext.data.proxy.JsonP',
        'Ext.data.reader.Json'
    ],

    config: {
        model: 'Contacts.model.UserModel',
        storeId: 'SearchJsonPStore',
        proxy: {
            type: 'jsonp',
            url: 'https://system.iag.bg/iagSys/resources/php/users.php',
            reader: {
                type: 'json'
            }
        }
    }
});