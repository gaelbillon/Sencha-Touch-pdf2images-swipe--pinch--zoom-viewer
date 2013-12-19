Ext.Loader.setConfig({
    enabled: true,
    paths: {
        'Ext.ux': 'ux'
    }
});

Ext.define('Demo.Viewport', {
    extend: 'Ext.Carousel',
    xtype : 'my-viewport',
    config: {
        items: [
            {
                xtype: 'imageviewer',
                style: {
                    backgroundColor: '#333'
                },
                imageSrc: 'samplepdf/6181508-0.jpg'
            },
            {
                xtype: 'imageviewer',
                style: {
                    backgroundColor: '#333'
                },
                imageSrc : 'samplepdf/6181508-1.jpg'
            },
            {
                xtype: 'imageviewer',
                style: {
                    backgroundColor: '#333'
                },
                imageSrc: 'samplepdf/6181508-2.jpg'
            },
            {
                xtype: 'imageviewer',
                style: {
                    backgroundColor: '#333'
                },
                imageSrc: 'samplepdf/6181508-3.jpg'
            },
            {
                xtype: 'imageviewer',
                style: {
                    backgroundColor: '#333'
                },
                imageSrc: 'samplepdf/6181508-4.jpg'
            },
                        {
                xtype: 'imageviewer',
                style: {
                    backgroundColor: '#333'
                },
                imageSrc: 'samplepdf/6181508-5.jpg'
            },
            {
                xtype: 'imageviewer',
                style: {
                    backgroundColor: '#333'
                },
                imageSrc: 'samplepdf/6181508-6.jpg'
            },
            {
                xtype: 'imageviewer',
                style: {
                    backgroundColor: '#333'
                },
                imageSrc: 'samplepdf/6181508-7.jpg'
            },
            {
                xtype: 'imageviewer',
                style: {
                    backgroundColor: '#333'
                },
                imageSrc: 'samplepdf/6181508-8.jpg'
            },
            {
                xtype: 'imageviewer',
                style: {
                    backgroundColor: '#333'
                },
                imageSrc: 'samplepdf/6181508-9.jpg'
            },
            {
                xtype: 'imageviewer',
                style: {
                    backgroundColor: '#333'
                },
                imageSrc: 'samplepdf/6181508-10.jpg'
            },
            {
                xtype: 'imageviewer',
                style: {
                    backgroundColor: '#333'
                },
                imageSrc: 'samplepdf/6181508-11.jpg'
            },
            {
                xtype: 'imageviewer',
                style: {
                    backgroundColor: '#333'
                },
                imageSrc: 'samplepdf/6181508-12.jpg'
            },
            {
                xtype: 'imageviewer',
                style: {
                    backgroundColor: '#333'
                },
                imageSrc: 'samplepdf/6181508-13.jpg'
            }
        ],
        listeners: {
            activeitemchange: function(container, value, oldValue, eOpts) {
                if (oldValue) {
                    oldValue.resetZoom();
                    this.getActiveItem().resize();
                }
            },
            resize: function(component, eOpts) {
                this.getActiveItem().resize();
            }
        }
    },
    onDragStart: function(e) {
        var scroller = this.getActiveItem().getScrollable().getScroller();
        if (e.targetTouches.length === 1 && (e.deltaX < 0 && scroller.getMaxPosition().x === scroller.position.x) || (e.deltaX > 0 && scroller.position.x === 0)) {
            this.callParent(arguments);
        }
    },
    onDrag: function(e) {
        if (e.targetTouches.length == 1)
            this.callParent(arguments);
    },
    onDragEnd: function(e) {
        if (e.targetTouches.length < 2)
            this.callParent(arguments);
    }
});

Ext.define('Demo.ViewportPanel', {
    extend: 'Ext.Panel',
    xtype : 'my-viewport-panel',
    config: {
        fullscreen: true,
        layout: 'fit',
        items: [{
            xtype: 'my-viewport',
            id: 'myCarousel'
        }]
    }
});

Ext.application({

    name  : 'ImageViewer Carousel Demo',
    views : [
        'Ext.ux.ImageViewer'
    ],
    launch: function() {

        Ext.Viewport.add({
            xtype: 'my-viewport-panel'
        });
    }
});