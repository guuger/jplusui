/**
 * @author xuld
 */
imports("Controls.Part.Icon");
imports("Controls.Part.Mask");
imports("Controls.Part.CloseButton");
imports("Controls.Container.Dialog");
using("Controls.Core.ContainerControl");


var Dialog = ContainerControl.extend({

    _centerType: 1 | 2,
	
	xtype: 'dialog',

	showDuration: -1,
	
	// 基本属性
		
	headerTpl: '<div class="x-control-header"><a class="x-dialog-close x-closebutton">×</a><h4></h4></div>',
	
	onClosing: function () {
		return this.trigger('closing');
	},
	
	onClose: function () {
		this.trigger('close');
	},

	onCloseButtonClick: function(){
	    this.close();
	},
	
	init: function(options){
		
		var t ;
		
		// 允许直接传入一个节点。
		if (!this.hasClass('x-dialog')) {
            
		    // 判断节点是否已渲染过。
		    t = this.parent('.x-dialog');

		    if (t) {
		        this.node = t.node;
		        t = null;
		    } else {

		        // 保存当前节点。
		        t = this.node;
		        this.node = this.create(options);

		    }
		}
		
		// 关闭按钮。
		this.delegate('.x-dialog-close', 'click', this.onCloseButtonClick.bind(this));

		this.setStyle('display', 'none');
		
		// 移除 script 脚本。
		this.query('script').remove();
		
		if(t){
			this.body().appendChild(t);
		}

	},
	
	mask: function(opacity){
		var mask = this.maskDom || (this.maskDom = Dom.find('.x-mask-dialog') || Dom.create('div', 'x-mask x-mask-dialog').appendTo());
		if (opacity === null) {
			mask.hide();
		} else {
			mask.show();
			mask.setSize(document.getScrollSize());
			if (opacity != null)
				mask.setStyle('opacity', opacity);
		}
		return this;
	},
	
	setOffset: function(p){
		if(p.x != null) {
			this._centerType &= ~2;
			this.setStyle('margin-left', 0);
		}
		
		if(p.y != null) {
			this._centerType &= ~1;
			this.setStyle('margin-top', 0);
		}
		
		return this.base('setOffset');
	},
	
	setWidth: function(){
		return this.base('setWidth').center();
	},
	
	setHeight: function(){
		return this.base('setHeight').center();
	},
	
	setContent: function () {
	    return this.base('setContent').center();
	},
	
	/**
	 * 重对齐当前对话框的位置以确保居中显示。
	 */
	center: function(){
		if(this._centerType & 1)
			this.setStyle('margin-top', - this.getHeight() / 2 + document.getScroll().y);
			
		if(this._centerType & 2)
			this.setStyle('margin-left', - this.getWidth() / 2 + document.getScroll().x);
			
		return this;
	},

	show: function(){
		
		if(!this.closest('body')){
			this.appendTo();	
		}
		
		return this.base('show').center();
	},
	
	showDialog: function(callback){
		return this.mask().show(this.showDuration, callback);
	},
	
	hide: function(){
		this.base('hide');
		if (this.maskDom) this.maskDom.hide();
		return this;
	},
	
	dispose: function(){
		var me = this;
		this.onClose();
		if (this.maskDom) this.maskDom.remove();
	},
	
	setContentSize: function(x, y){
		this.setWidth('auto');
		this.body().setWidth(x).setHeight(y);
		return this.center();
	},
	
	close: function(){
		if(this.onClosing() !== false)
		    this.hide(this.showDuration, this.onClose.bind(this));
		return this;
	}
	
});

