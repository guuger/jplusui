/** * @author  */using("System.Dom.Base");Control.implement({		css: function(name, value){		if(arguments.length == 1) {			if(typeof name === 'string')				return this.getStyle(name);			for(var item in name)				this.setStyle(item, name[item]);			return this;		}					return this.setStyle(name, value);	},});