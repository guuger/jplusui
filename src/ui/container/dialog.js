/**
 * @author xuld
 */


include("ui/part/icon.css");
include("ui/part/mask.css");
include("ui/part/closebutton.css");
include("ui/container/dialog.css");
include("fx/animate.js");
include("ui/core/containercontrol.js");


/**
 * @class Dialog
 * @extends ContainerControl
 */
var Dialog = ContainerControl.extend({

    _centerType: 1 | 2,
	
	cssClass: 'ui-dialog',

	showDuration: -1,
	
	// 基本属性
		
	headerTpl: '<div class="ui-control-header"><a class="ui-control-close ui-closebutton">×</a><h4></h4></div>',

	onCloseButtonClick: function () {
	    this.close();
	},
	
	init: function(options){
		
		// 如果用户传入了一个已经存在的节点，并且这个节点不是 ui-dialog 。
		// 那么创建新的对话框容器，并且将节点作为这个对话框的内容。
		if (!this.dom.hasClass('ui-dialog')) {

			// 如果这个节点已经调用过 new Dialog, 则其父元素就是 ui-dialog-body  了。
			if (this.dom.parent('.ui-dialog-body')) {
				this.dom = this.dom.parent().parent();
			} else {

				// 保存当前节点。
				var t = this.dom;

				// 创建新的对话框。
				this.dom = this.create(options);

				// 将节点加入到 body 中。
				this.body().append(t);

		    }
		}
		
		// 关闭按钮。
		// 默认隐藏对话框。
		// 移除 script 脚本, 防止重复执行。
		this.dom
			.delegate('.ui-dialog-close', 'click', this.onCloseButtonClick.bind(this))
			.setStyle('display', 'none')
			.query('script').remove();

	},
	
	mask: function(opacity){
		var mask = this.maskDom || (this.maskDom = Dom.find('.ui-mask-dialog') || Dom.create('div', 'ui-mask ui-mask-dialog').appendTo());
		if (opacity === null) {
			mask.hide();
		} else {
			mask.show();
			mask.setSize(Dom.document.getScrollSize());
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
			this.dom.setStyle('margin-top', - this.getHeight() / 2 + document.getScroll().y);
			
		if(this._centerType & 2)
			this.dom.setStyle('margin-left', -this.getWidth() / 2 + document.getScroll().x);
			
		return this;
	},

	show: function(){
		if (!this.dom.closest('body')) {
			this.dom.appendTo();
		}
		this.dom.show(this.showDuration)
		return this.center();
	},
	
	showDialog: function(){
		return this.show.apply(this.mask(), arguments);
	},
	
	hide: function(){
		if (this.maskDom) this.maskDom.hide();
		this.dom.hide(this.showDuration);
		return this;
	},
	
	setContentSize: function(x, y){
		this.dom.setWidth('auto');
		this.body().setWidth(x).setHeight(y);
		return this.center();
	},
	
	close: function () {
	    var me = this;
	    if (this.trigger('closing'))
	        this.dom.hide({
	        	callback: function () {
		            this.trigger('close');
		        }
		    });
		return this;
	}
	
});

