﻿jsonp({"fullName":'System.Base.extend',"source":'base.js',"sourceFile":'data/source/base.js.html#JPlus-Base-extend',"summary":'<p>\u7ee7\u627f\u5f53\u524d\u7c7b\u521b\u5efa\u5e76\u8fd4\u56de\u5b50\u7c7b\u3002</p>\n',"params":[{"type":'Object/Function',"name":'methods',"defaultValue":'',"summary":'<p>\u5b50\u7c7b\u7684\u5458\u6216\u6784\u9020\u51fd\u6570\u3002</p>\n'}],"returns":{"type":'Function',"summary":'<p>\u8fd4\u56de\u7ee7\u627f\u51fa\u6765\u7684\u5b50\u7c7b\u3002</p>\n'},"remark":'<p>\u5728 Javascript \u4e2d\uff0c\u7ee7\u627f\u662f\u4f9d\u9760\u539f\u578b\u94fe\u5b9e\u73b0\u7684\uff0c \u8fd9\u4e2a\u51fd\u6570\u4ec5\u4ec5\u662f\u5bf9\u5b83\u7684\u5305\u88c5\uff0c\u800c\u6ca1\u6709\u505a\u989d\u5916\u7684\u52a8\u4f5c\u3002</p>\n\n<p>\u6210\u5458\u4e2d\u7684 constructor \u6210\u5458 \u88ab\u8ba4\u4e3a\u662f\u6784\u9020\u51fd\u6570\u3002</p>\n\n<p>\u8fd9\u4e2a\u51fd\u6570\u5b9e\u73b0\u7684\u662f \u5355\u7ee7\u627f\u3002\u5982\u679c\u5b50\u7c7b\u6709\u5b9a\u4e49\u6784\u9020\u51fd\u6570\uff0c\u5219\u4ec5\u8c03\u7528\u5b50\u7c7b\u7684\u6784\u9020\u51fd\u6570\uff0c\u5426\u5219\u8c03\u7528\u7236\u7c7b\u7684\u6784\u9020\u51fd\u6570\u3002</p>\n\n<p>\u8981\u60f3\u5728\u5b50\u7c7b\u7684\u6784\u9020\u51fd\u6570\u8c03\u7528\u7236\u7c7b\u7684\u6784\u9020\u51fd\u6570\uff0c\u53ef\u4ee5\u4f7f\u7528 {@link JPlus.Base#base} \u8c03\u7528\u3002</p>\n\n<p>\u8fd9\u4e2a\u51fd\u6570\u8fd4\u56de\u7684\u7c7b\u5b9e\u9645\u662f\u4e00\u4e2a\u51fd\u6570\uff0c\u4f46\u5b83\u88ab {@link JPlus.Native} \u4fee\u9970\u8fc7\u3002</p>\n\n<p>\u7531\u4e8e\u539f\u578b\u94fe\u7684\u5173\u7cfb\uff0c \u80af\u80fd\u5b58\u5728\u5171\u4eab\u7684\u5f15\u7528\u3002 \u5982: \u7c7b A \uff0c A.prototype.c = []; \u90a3\u4e48\uff0cA\u7684\u5b9e\u4f8b b ,\nd \u90fd\u6709 c \u6210\u5458\uff0c \u4f46\u5b83\u4eec\u5171\u4eab\u4e00\u4e2a A.prototype.c \u6210\u5458\u3002 \u8fd9\u663e\u7136\u662f\u4e0d\u6b63\u786e\u7684\u3002\u6240\u4ee5\u4f60\u5e94\u8be5\u628a \u53c2\u6570 quick\n\u7f6e\u4e3a false \uff0c \u8fd9\u6837\uff0c A\u521b\u5efa\u5b9e\u4f8b\u7684\u65f6\u5019\uff0c\u4f1a\u81ea\u52a8\u89e3\u9664\u5171\u4eab\u7684\u5f15\u7528\u6210\u5458\u3002 \u5f53\u7136\uff0c\u8fd9\u662f\u4e00\u4e2a\u6bd4\u8f83\u8d39\u65f6\u7684\u64cd\u4f5c\uff0c\u56e0\u6b64\uff0c\u9ed8\u8ba4\nquick \u662f true \u3002</p>\n\n<p>\u4e5f\u53ef\u4ee5\u628a\u52a8\u6001\u6210\u5458\u7684\u5b9a\u4e49\u653e\u5230 \u6784\u9020\u51fd\u6570\uff0c \u5982: this.c = []; \u8fd9\u662f\u6700\u597d\u7684\u89e3\u51b3\u65b9\u6848\u3002</p>\n',"example":'<p>\u4e0b\u9762\u793a\u4f8b\u6f14\u793a\u4e86\u5982\u4f55\u521b\u5efa\u4e00\u4e2a\u5b50\u7c7b\u3002</p>\n\n<pre>\nvar MyClass = new Class(); //\u521b\u5efa\u4e00\u4e2a\u7c7b\u3002\n\nvar Child = MyClass.extend({  // \u521b\u5efa\u4e00\u4e2a\u5b50\u7c7b\u3002\ntype: \'a\'\n});\n\nvar obj = new Child(); // \u521b\u5efa\u5b50\u7c7b\u7684\u5b9e\u4f8b\u3002\n</pre>\n',"name":'extend',"memberOf":'System.Base',"memberType":'method'});