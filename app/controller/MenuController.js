/*
 * File: app/controller/MenuController.js
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

Ext.define('Contacts.controller.MenuController', {
    extend: 'Ext.app.Controller',
    alias: 'controller.menucontroller',

    config: {
        refs: {
            menupanel: 'menupanel'
        },

        control: {
            "menupanel": {
                activate: 'onPanelActivate'
            }
        }
    },

    onPanelActivate: function(newActiveItem, container, oldActiveItem, eOpts) {
        var menu = Ext.create('Ext.Menu', {
             items: [
                 {
                     text: 'Служители в ИАГ',
                     iconCls: 'user'
                 },
                 {
                     text: 'Служители в РДГ',
                     iconCls: 'team'
                 },
                 {
                     text: '<p>Служители в Поделения</p><p> на ИАГ и МЗХ</p>',
                     iconCls: 'star'
                 }
             ]
         });

         Ext.Viewport.setMenu(menu, {
             side: 'top',
             reveal: true
         });

         Ext.Viewport.toggleMenu('top');
    }

});