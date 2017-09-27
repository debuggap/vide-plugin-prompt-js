var context = {
  my: [{
    "name": "navigateTo",
    "value": "navigateTo({\n\turl: ''\n})",
    "moveAction": [-1, 6],
    "desc": "<h3><span class=\"octicon octicon-link\"></span> my.navigateTo</h3><p>保留当前页面，跳转到应用内的某个指定页面，可以使用 <code>my.navigateBack</code> 返回到原来页面。</p><p><strong>注意：页面最大深度为5，即可连续调用 5 次 navigateTo</strong></p><div>\n <table>\n   <thead>\n    <tr>\n      <th width=\"90\"><div>名称</div></th>\n      <th width=\"90\"><div>类型</div></th>\n      <th width=\"90\"><div>必填</div></th>\n      <th width=\"90\"><div>描述</div></th>\n    </tr>\n   </thead>\n   <tbody>\n    <tr>\n      <td width=\"90\"><div>url</div></td>\n      <td width=\"90\"><div>String</div></td>\n      <td width=\"90\"><div>是</div></td>\n      <td width=\"90\"><div>需要跳转的应用内非 tabBar 的目标页面路径 ,路径后可以带参数。参数规则如下：路径与参数之间使用<code>?</code>分隔，参数键与参数值用<code>=</code>相连，不同参数必须用<code>&</code>分隔；如 <code>path?key1=value1&key2=value2</code></div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>success</div></td>\n      <td width=\"90\"><div>Function</div></td>\n      <td width=\"90\"><div>否</div></td>\n      <td width=\"90\"><div>调用成功的回调函数</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>fail</div></td>\n      <td width=\"90\"><div>Function</div></td>\n      <td width=\"90\"><div>否</div></td>\n      <td width=\"90\"><div>调用失败的回调函数</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>complete</div></td>\n      <td width=\"90\"><div>Function</div></td>\n      <td width=\"90\"><div>否</div></td>\n      <td width=\"90\"><div>调用结束的回调函数（调用成功、失败都会执行）</div></td>\n    </tr>\n   </tbody>\n </table>\n</div>",
    "info": "保留当前页面，跳转到应用内的某个指定页面，可以使用 my.navigateBack 返回到原来页面。"
  }, {
    "name": "redirectTo",
    "value": "redirectTo({\n\turl: ''\n})",
    "moveAction": [-1, 6],
    "desc": "<h3><span class=\"octicon octicon-link\"></span> my.redirectTo</h3><p>关闭当前页面，跳转到应用内的某个指定页面。</p><div>\n <table>\n   <thead>\n    <tr>\n      <th width=\"90\"><div>名称</div></th>\n      <th width=\"90\"><div>类型</div></th>\n      <th width=\"90\"><div>必填</div></th>\n      <th width=\"90\"><div>描述</div></th>\n    </tr>\n   </thead>\n   <tbody>\n    <tr>\n      <td width=\"90\"><div>url</div></td>\n      <td width=\"90\"><div>String</div></td>\n      <td width=\"90\"><div>是</div></td>\n      <td width=\"90\"><div>需要跳转的应用内非 tabBar 的目标页面路径 ,路径后可以带参数。参数规则如下：路径与参数之间使用<code>?</code>分隔，参数键与参数值用<code>=</code>相连，不同参数必须用<code>&</code>分隔；如<code>path?key1=value1&key2=value2</code></div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>success</div></td>\n      <td width=\"90\"><div>Function</div></td>\n      <td width=\"90\"><div>否</div></td>\n      <td width=\"90\"><div>调用成功的回调函数</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>fail</div></td>\n      <td width=\"90\"><div>Function</div></td>\n      <td width=\"90\"><div>否</div></td>\n      <td width=\"90\"><div>调用失败的回调函数</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>complete</div></td>\n      <td width=\"90\"><div>Function</div></td>\n      <td width=\"90\"><div>否</div></td>\n      <td width=\"90\"><div>调用结束的回调函数（调用成功、失败都会执行）</div></td>\n    </tr>\n   </tbody>\n </table>\n</div>",
    "info": "关闭当前页面，跳转到应用内的某个指定页面。"
  }, {
    "name": "navigateBack",
    "value": "navigateBack()",
    "moveAction": [],
    "desc": "<h3><span class=\"octicon octicon-link\"></span> my.navigateBack</h3><p>关闭当前页面，返回上一级或多级页面。可通过 <code>Page.getCurrentPages</code> 获取当前的页面栈信息，决定需要返回几层。</p><div>\n <table>\n   <thead>\n    <tr>\n      <th width=\"90\"><div>名称</div></th>\n      <th width=\"90\"><div>类型</div></th>\n      <th width=\"90\"><div>默认值</div></th>\n      <th width=\"90\"><div>描述</div></th>\n    </tr>\n   </thead>\n   <tbody>\n    <tr>\n      <td width=\"90\"><div>delta</div></td>\n      <td width=\"90\"><div>Number</div></td>\n      <td width=\"90\"><div>1</div></td>\n      <td width=\"90\"><div>返回的页面数，如果 delta 大于现有打开的页面数，则返回到首页</div></td>\n    </tr>\n   </tbody>\n </table>\n</div>",
    "info": "关闭当前页面，返回上一级或多级页面。可通过 Page.getCurrentPages 获取当前的页面栈信息，决定需要返回几层。"
  }, {
    "name": "setNavigationBar",
    "value": "setNavigationBar()",
    "moveAction": [],
    "desc": "<h3><span class=\"octicon octicon-link\"></span> my.setNavigationBar</h3><p>设置导航栏文字及样式。</p><div>\n <table>\n   <thead>\n    <tr>\n      <th width=\"90\"><div>名称</div></th>\n      <th width=\"90\"><div>类型</div></th>\n      <th width=\"90\"><div>必填</div></th>\n      <th width=\"90\"><div>描述</div></th>\n    </tr>\n   </thead>\n   <tbody>\n    <tr>\n      <td width=\"90\"><div>title</div></td>\n      <td width=\"90\"><div>String</div></td>\n      <td width=\"90\"><div>否</div></td>\n      <td width=\"90\"><div>导航栏标题</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>backgroundColor</div></td>\n      <td width=\"90\"><div>String</div></td>\n      <td width=\"90\"><div>否</div></td>\n      <td width=\"90\"><div>导航栏背景色，支持十六进制颜色值</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>borderBottomColor</div></td>\n      <td width=\"90\"><div>String</div></td>\n      <td width=\"90\"><div>否</div></td>\n      <td width=\"90\"><div>导航栏底部边框颜色，支持十六进制颜色值。若设置了 backgroundColor，则borderBottomColor 不会生效，默认会和 backgroundColor 颜色一样</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>reset</div></td>\n      <td width=\"90\"><div>Boolean</div></td>\n      <td width=\"90\"><div>否</div></td>\n      <td width=\"90\"><div>是否重置导航栏为支付宝默认配色，默认 false</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>success</div></td>\n      <td width=\"90\"><div>Function</div></td>\n      <td width=\"90\"><div>否</div></td>\n      <td width=\"90\"><div>调用成功的回调函数</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>fail</div></td>\n      <td width=\"90\"><div>Function</div></td>\n      <td width=\"90\"><div>否</div></td>\n      <td width=\"90\"><div>调用失败的回调函数</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>complete</div></td>\n      <td width=\"90\"><div>Function</div></td>\n      <td width=\"90\"><div>否</div></td>\n      <td width=\"90\"><div>调用结束的回调函数（调用成功、失败都会执行）</div></td>\n    </tr>\n   </tbody>\n </table>\n</div>",
    "info": "设置导航栏文字及样式。"
  }, {
    "name": "showNavigationBarLoading",
    "value": "showNavigationBarLoading()",
    "moveAction": [],
    "desc": "<h3><span class=\"octicon octicon-link\"></span> my.showNavigationBarLoading</h3><p>显示导航栏 loading。</p>",
    "info": "显示导航栏 loading。"
  }, {
    "name": "hideNavigationBarLoading",
    "value": "hideNavigationBarLoading()",
    "moveAction": [],
    "desc": "<h3><span class=\"octicon octicon-link\"></span> my.hideNavigationBarLoading</h3><p>隐藏导航栏 loading。</p>",
    "info": "隐藏导航栏 loading。"
  }, {
    "name": "switchTab",
    "value": "switchTab({\n\turl: ''\n})",
    "moveAction": [-1, 6],
    "desc": "<h3><span class=\"octicon octicon-link\"></span> my.switchTab</h3><p>跳转到指定 tabBar 页面，并关闭其他所有非 tabBar 页面。</p><div>\n <table>\n   <thead>\n    <tr>\n      <th width=\"90\"><div>参数</div></th>\n      <th width=\"90\"><div>类型</div></th>\n      <th width=\"90\"><div>必填</div></th>\n      <th width=\"90\"><div>说明</div></th>\n    </tr>\n   </thead>\n   <tbody>\n    <tr>\n      <td width=\"90\"><div>url</div></td>\n      <td width=\"90\"><div>String</div></td>\n      <td width=\"90\"><div>是</div></td>\n      <td width=\"90\"><div>跳转的 tabBar 页面的路径（需在 app.json 的 tabBar 字段定义的页面）。注意：路径后不能带参数</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>success</div></td>\n      <td width=\"90\"><div>Function</div></td>\n      <td width=\"90\"><div>否</div></td>\n      <td width=\"90\"><div>调用成功的回调函数</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>fail</div></td>\n      <td width=\"90\"><div>Function</div></td>\n      <td width=\"90\"><div>否</div></td>\n      <td width=\"90\"><div>调用失败的回调函数</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>complete</div></td>\n      <td width=\"90\"><div>Function</div></td>\n      <td width=\"90\"><div>否</div></td>\n      <td width=\"90\"><div>调用结束的回调函数（调用成功、失败都会执行）</div></td>\n    </tr>\n   </tbody>\n </table>\n</div>",
    "info": "跳转到指定 tabBar 页面，并关闭其他所有非 tabBar 页面。"
  }, {
    "name": "alert",
    "value": "alert()",
    "moveAction": [],
    "desc": "<h3><span class=\"octicon octicon-link\"></span> my.alert</h3><p>alert 警告框。</p>",
    "info": "alert 警告框。"
  }, {
    "name": "confirm",
    "value": "confirm()",
    "moveAction": [],
    "desc": "<h3><span class=\"octicon octicon-link\"></span> my.confirm</h3><p>confirm 确认框。</p>",
    "info": "confirm 确认框。"
  }, {
    "name": "showToast",
    "value": "showToast()",
    "moveAction": [],
    "desc": "<h3><span class=\"octicon octicon-link\"></span> my.showToast</h3><p>显示一个弱提示，可选择多少秒之后消失。</p>",
    "info": "显示一个弱提示，可选择多少秒之后消失。"
  }, {
    "name": "hideToast",
    "value": "hideToast()",
    "moveAction": [],
    "desc": "<h3><span class=\"octicon octicon-link\"></span> my.hideToast</h3><p>隐藏弱提示。</p>",
    "info": "隐藏弱提示。"
  }, {
    "name": "showLoading",
    "value": "showLoading()",
    "moveAction": [],
    "desc": "<h3><span class=\"octicon octicon-link\"></span> my.showLoading</h3><p>显示加载提示。</p>",
    "info": "显示加载提示。"
  }, {
    "name": "hideLoading",
    "value": "hideLoading()",
    "moveAction": [],
    "desc": "<h3><span class=\"octicon octicon-link\"></span> my.hideLoading</h3><p>隐藏加载提示。</p>",
    "info": "隐藏加载提示。"
  }, {
    "name": "showNavigationBarLoading",
    "value": "showNavigationBarLoading()",
    "moveAction": [],
    "desc": "<h3><span class=\"octicon octicon-link\"></span> my.showNavigationBarLoading</h3><p>显示导航栏 loading。</p>",
    "info": "显示导航栏 loading。"
  }, {
    "name": "hideNavigationBarLoading",
    "value": "hideNavigationBarLoading()",
    "moveAction": [],
    "desc": "<h3><span class=\"octicon octicon-link\"></span> my.hideNavigationBarLoading</h3><p>隐藏导航栏 loading。</p>",
    "info": "隐藏导航栏 loading。"
  }, {
    "name": "showActionSheet",
    "value": "showActionSheet()",
    "moveAction": [],
    "desc": "<h3><span class=\"octicon octicon-link\"></span> my.showActionSheet</h3><p>显示操作菜单。</p>",
    "info": "显示操作菜单。"
  }, {
    "name": "onPullDownRefresh",
    "value": "onPullDownRefresh()",
    "moveAction": [],
    "desc": "<h3><span class=\"octicon octicon-link\"></span> onPullDownRefresh</h3><p>在 Page 中自定义 onPullDownRefresh 函数，可以监听该页面用户的下拉刷新事件。</p>",
    "info": "在 Page 中自定义 onPullDownRefresh 函数，可以监听该页面用户的下拉刷新事件。"
  }, {
    "name": "stopPullDownRefresh",
    "value": "stopPullDownRefresh()",
    "moveAction": [],
    "desc": "<h3><span class=\"octicon octicon-link\"></span> my.stopPullDownRefresh</h3><p>停止当前页面的下拉刷新。</p>",
    "info": "停止当前页面的下拉刷新。"
  }, {
    "name": "choosePhoneContact",
    "value": "choosePhoneContact()",
    "moveAction": [],
    "desc": "<h3><span class=\"octicon octicon-link\"></span> my.choosePhoneContact</h3><p>选择本地系统通信录中某个联系人的电话。</p><div>\n <table>\n   <thead>\n    <tr>\n      <th width=\"90\"><div>名称</div></th>\n      <th width=\"90\"><div>类型</div></th>\n      <th width=\"90\"><div>必填</div></th>\n      <th width=\"90\"><div>描述</div></th>\n    </tr>\n   </thead>\n   <tbody>\n    <tr>\n      <td width=\"90\"><div>success</div></td>\n      <td width=\"90\"><div>Function</div></td>\n      <td width=\"90\"><div>否</div></td>\n      <td width=\"90\"><div>调用成功的回调函数</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>fail</div></td>\n      <td width=\"90\"><div>Function</div></td>\n      <td width=\"90\"><div>否</div></td>\n      <td width=\"90\"><div>调用失败的回调函数</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>complete</div></td>\n      <td width=\"90\"><div>Function</div></td>\n      <td width=\"90\"><div>否</div></td>\n      <td width=\"90\"><div>调用结束的回调函数（调用成功、失败都会执行）</div></td>\n    </tr>\n   </tbody>\n </table>\n</div>",
    "info": "选择本地系统通信录中某个联系人的电话。"
  }, {
    "name": "chooseAlipayContact",
    "value": "chooseAlipayContact()",
    "moveAction": [],
    "desc": "<h3><span class=\"octicon octicon-link\"></span> my.chooseAlipayContact</h3><p>唤起支付宝通讯录，选择一个或者多个支付宝联系人。</p><div>\n <table>\n   <thead>\n    <tr>\n      <th width=\"90\"><div>名称</div></th>\n      <th width=\"90\"><div>类型</div></th>\n      <th width=\"90\"><div>必填</div></th>\n      <th width=\"90\"><div>描述</div></th>\n    </tr>\n   </thead>\n   <tbody>\n    <tr>\n      <td width=\"90\"><div>count</div></td>\n      <td width=\"90\"><div>Number</div></td>\n      <td width=\"90\"><div>否</div></td>\n      <td width=\"90\"><div>单次最多选择联系人个数，默认 1，最大 10</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>success</div></td>\n      <td width=\"90\"><div>Function</div></td>\n      <td width=\"90\"><div>否</div></td>\n      <td width=\"90\"><div>调用成功的回调函数</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>fail</div></td>\n      <td width=\"90\"><div>Function</div></td>\n      <td width=\"90\"><div>否</div></td>\n      <td width=\"90\"><div>调用失败的回调函数</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>complete</div></td>\n      <td width=\"90\"><div>Function</div></td>\n      <td width=\"90\"><div>否</div></td>\n      <td width=\"90\"><div>调用结束的回调函数（调用成功、失败都会执行）</div></td>\n    </tr>\n   </tbody>\n </table>\n</div>",
    "info": "唤起支付宝通讯录，选择一个或者多个支付宝联系人。"
  }, {
    "name": "chooseCity",
    "value": "chooseCity()",
    "moveAction": [],
    "desc": "<h3><span class=\"octicon octicon-link\"></span> my.chooseCity</h3><p>打开城市选择列表。</p><div>\n <table>\n   <thead>\n    <tr>\n      <th width=\"90\"><div>名称</div></th>\n      <th width=\"90\"><div>类型</div></th>\n      <th width=\"90\"><div>必填</div></th>\n      <th width=\"90\"><div>描述</div></th>\n    </tr>\n   </thead>\n   <tbody>\n    <tr>\n      <td width=\"90\"><div>showLocatedCity</div></td>\n      <td width=\"90\"><div>Boolean</div></td>\n      <td width=\"90\"><div>否</div></td>\n      <td width=\"90\"><div>是否显示当前定位城市，默认 false</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>showHotCities</div></td>\n      <td width=\"90\"><div>Boolean</div></td>\n      <td width=\"90\"><div>否</div></td>\n      <td width=\"90\"><div>是否显示热门城市，默认 true</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>cities</div></td>\n      <td width=\"90\"><div>Object Array</div></td>\n      <td width=\"90\"><div>否</div></td>\n      <td width=\"90\"><div>自定义城市列表，列表内对象字段见下表</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>hotCities</div></td>\n      <td width=\"90\"><div>Object Array</div></td>\n      <td width=\"90\"><div>否</div></td>\n      <td width=\"90\"><div>自定义热门城市列表，列表内对象字段见下表</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>success</div></td>\n      <td width=\"90\"><div>Function</div></td>\n      <td width=\"90\"><div>否</div></td>\n      <td width=\"90\"><div>调用成功的回调函数</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>fail</div></td>\n      <td width=\"90\"><div>Function</div></td>\n      <td width=\"90\"><div>否</div></td>\n      <td width=\"90\"><div>调用失败的回调函数</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>complete</div></td>\n      <td width=\"90\"><div>Function</div></td>\n      <td width=\"90\"><div>否</div></td>\n      <td width=\"90\"><div>调用结束的回调函数（调用成功、失败都会执行）</div></td>\n    </tr>\n   </tbody>\n </table>\n</div>",
    "info": "打开城市选择列表。"
  }, {
    "name": "datePicker",
    "value": "datePicker()",
    "moveAction": [],
    "desc": "<h3><span class=\"octicon octicon-link\"></span> my.datePicker(object)</h3><p>打开日期选择列表。</p><div>\n <table>\n   <thead>\n    <tr>\n      <th width=\"111\"><div>名称</div></th>\n      <th width=\"101\"><div>类型</div></th>\n      <th width=\"151\"><div>必填</div></th>\n      <th width=\"334\"><div>描述</div></th>\n    </tr>\n   </thead>\n   <tbody>\n    <tr>\n      <td width=\"111\"><div>format</div></td>\n      <td width=\"101\"><div>String</div></td>\n      <td width=\"151\"><div>否</div></td>\n      <td width=\"334\"><div>返回的日期格式，</div><ol>\n<li><div> yyyy-MM-dd（默认）</div></li>\n<li><div>HH:mm</div></li>\n<li><div>yyyy-MM-dd HH:mm</div></li>\n<li><div>yyyy-MM （最低基础库：1.1.1, 可用 <strong>canIUse('datePicker.object.format.yyyy-MM')</strong> 判断）</div></li>\n<li><div>yyyy （最低基础库：1.1.1,可用 <strong>canIUse('datePicker.object.format.yyyy')</strong> 判断）</div></li>\n</ol></td>\n    </tr>\n    <tr>\n      <td width=\"111\"><div>currentDate</div></td>\n      <td width=\"101\"><div>String</div></td>\n      <td width=\"151\"><div>否</div></td>\n      <td width=\"334\"><div>初始选择的日期时间，默认当前时间</div></td>\n    </tr>\n    <tr>\n      <td width=\"111\"><div>startDate</div></td>\n      <td width=\"101\"><div>String</div></td>\n      <td width=\"151\"><div>否</div></td>\n      <td width=\"334\"><div>最小日期时间</div></td>\n    </tr>\n    <tr>\n      <td width=\"111\"><div>endDate</div></td>\n      <td width=\"101\"><div>String</div></td>\n      <td width=\"151\"><div>否</div></td>\n      <td width=\"334\"><div>最大日期时间</div></td>\n    </tr>\n    <tr>\n      <td width=\"111\"><div>success</div></td>\n      <td width=\"101\"><div>Function</div></td>\n      <td width=\"151\"><div>否</div></td>\n      <td width=\"334\"><div>调用成功的回调函数</div></td>\n    </tr>\n    <tr>\n      <td width=\"111\"><div>fail</div></td>\n      <td width=\"101\"><div>Function</div></td>\n      <td width=\"151\"><div>否</div></td>\n      <td width=\"334\"><div>调用失败的回调函数</div></td>\n    </tr>\n    <tr>\n      <td width=\"111\"><div>complete</div></td>\n      <td width=\"101\"><div>Function</div></td>\n      <td width=\"151\"><div>否</div></td>\n      <td width=\"334\"><div>调用结束的回调函数（调用成功、失败都会执行）</div></td>\n    </tr>\n   </tbody>\n </table>\n</div>",
    "info": "打开日期选择列表。"
  }, {
    "name": "createAnimation",
    "value": "createAnimation()",
    "moveAction": [],
    "desc": "<h3><span class=\"octicon octicon-link\"></span> my.createAnimation</h3><p>创建动画实例 animation。调用实例的方法来描述动画，最后通过动画实例的<code>export</code>方法将动画数据导出并传递给组件的<code>animation</code>属性。</p>",
    "info": "创建动画实例 animation。调用实例的方法来描述动画，最后通过动画实例的export方法将动画数据导出并传递给组件的animation属性。"
  }, {
    "name": "createCanvasContext",
    "value": "createCanvasContext()",
    "moveAction": [],
    "desc": "<h3><span class=\"octicon octicon-link\"></span> my.createCanvasContext(canvasId)</h3><p>创建 canvas 绘图上下文</p>",
    "info": "创建 canvas 绘图上下文"
  }, {
    "name": "toTempFilePath",
    "value": "toTempFilePath()",
    "moveAction": [],
    "desc": "<h3><span class=\"octicon octicon-link\"></span> toTempFilePath</h3><p>把当前画布的内容导出生成图片，并返回文件路径。</p>",
    "info": "把当前画布的内容导出生成图片，并返回文件路径。"
  }, {
    "name": "setTextAlign",
    "value": "setTextAlign()",
    "moveAction": [],
    "desc": "<h3><span class=\"octicon octicon-link\"></span> setTextAlign</h3><p>textAlign 是 Canvas 2D API 描述绘制文本时，文本的对齐方式的属性。注意，该对齐是基于CanvasRenderingContext2D.fillText 方法的x的值。所以如果 textAlign=\"center\"，那么该文本将画在 x-50%*width。</p>",
    "info": "textAlign 是 Canvas 2D API 描述绘制文本时，文本的对齐方式的属性。注意，该对齐是基于CanvasRenderingContext2D.fillText 方法的x的值。所以如果 textAlign=\"center\"，那么该文本将画在 x-50%*width。"
  }, {
    "name": "setTextBaseline",
    "value": "setTextBaseline()",
    "moveAction": [],
    "desc": "<h3><span class=\"octicon octicon-link\"></span> setTextBaseline</h3><p>textBaseline 是 Canvas 2D API 描述绘制文本时，当前文本基线的属性。</p>",
    "info": "textBaseline 是 Canvas 2D API 描述绘制文本时，当前文本基线的属性。"
  }, {
    "name": "setFillStyle",
    "value": "setFillStyle()",
    "moveAction": [],
    "desc": "<h3><span class=\"octicon octicon-link\"></span> setFillStyle</h3><p>设置填充色。</p>",
    "info": "设置填充色。"
  }, {
    "name": "createLinearGradient",
    "value": "createLinearGradient()",
    "moveAction": [],
    "desc": "<h3><span class=\"octicon octicon-link\"></span> createLinearGradient</h3><p>创建一个线性的渐变色。</p>",
    "info": "创建一个线性的渐变色。"
  }, {
    "name": "createCircularGradient",
    "value": "createCircularGradient()",
    "moveAction": [],
    "desc": "<h3><span class=\"octicon octicon-link\"></span> createCircularGradient</h3><p>创建一个圆形的渐变色。</p>",
    "info": "创建一个圆形的渐变色。"
  }, {
    "name": "addColorStop",
    "value": "addColorStop()",
    "moveAction": [],
    "desc": "<h3><span class=\"octicon octicon-link\"></span> addColorStop</h3><p>创建一个颜色的渐变点。</p>",
    "info": "创建一个颜色的渐变点。"
  }, {
    "name": "setLineWidth",
    "value": "setLineWidth()",
    "moveAction": [],
    "desc": "<h3><span class=\"octicon octicon-link\"></span> setLineWidth</h3><p>设置线条的宽度。</p>",
    "info": "设置线条的宽度。"
  }, {
    "name": "setLineCap",
    "value": "setLineCap()",
    "moveAction": [],
    "desc": "<h3><span class=\"octicon octicon-link\"></span> setLineCap</h3><p>设置线条的端点样式。</p>",
    "info": "设置线条的端点样式。"
  }, {
    "name": "setLineJoin",
    "value": "setLineJoin()",
    "moveAction": [],
    "desc": "<h3><span class=\"octicon octicon-link\"></span> setLineJoin</h3><p>设置线条的交点样式。</p>",
    "info": "设置线条的交点样式。"
  }, {
    "name": "setMiterLimit",
    "value": "setMiterLimit()",
    "moveAction": [],
    "desc": "<h3><span class=\"octicon octicon-link\"></span> setMiterLimit</h3><p>设置最大斜接长度，斜接长度指的是在两条线交汇处内角和外角之间的距离。 当 <code>setLineJoin()</code> 为 miter 时才有效。超过最大倾斜长度的，连接处将以 lineJoin 为 bevel 来显示</p>",
    "info": "设置最大斜接长度，斜接长度指的是在两条线交汇处内角和外角之间的距离。 当 setLineJoin() 为 miter 时才有效。超过最大倾斜长度的，连接处将以 lineJoin 为 bevel 来显示"
  }, {
    "name": "rect",
    "value": "rect()",
    "moveAction": [],
    "desc": "<h3><span class=\"octicon octicon-link\"></span> rect</h3><p>创建一个矩形。</p>",
    "info": "创建一个矩形。"
  }, {
    "name": "fillRect",
    "value": "fillRect()",
    "moveAction": [],
    "desc": "<h3><span class=\"octicon octicon-link\"></span> fillRect</h3><p>填充矩形。</p>",
    "info": "填充矩形。"
  }, {
    "name": "strokeRect",
    "value": "strokeRect()",
    "moveAction": [],
    "desc": "<h3><span class=\"octicon octicon-link\"></span> strokeRect</h3><p>画一个矩形(非填充)。</p>",
    "info": "画一个矩形(非填充)。"
  }, {
    "name": "clearRect",
    "value": "clearRect()",
    "moveAction": [],
    "desc": "<h3><span class=\"octicon octicon-link\"></span> clearRect</h3><p>清除画布上在该矩形区域内的内容。</p>",
    "info": "清除画布上在该矩形区域内的内容。"
  }, {
    "name": "fill",
    "value": "fill()",
    "moveAction": [],
    "desc": "<h3><span class=\"octicon octicon-link\"></span> fill</h3><p>对当前路径中的内容进行填充。默认的填充色为黑色。</p>",
    "info": "对当前路径中的内容进行填充。默认的填充色为黑色。"
  }, {
    "name": "stroke",
    "value": "stroke()",
    "moveAction": [],
    "desc": "<h3><span class=\"octicon octicon-link\"></span> stroke</h3><p>画出当前路径的边框。默认 <code>black</code>。</p>",
    "info": "画出当前路径的边框。默认 black。"
  }, {
    "name": "beginPath",
    "value": "beginPath()",
    "moveAction": [],
    "desc": "<h3><span class=\"octicon octicon-link\"></span> beginPath</h3><p>开始创建一个路径，需要调用 <code>fill</code> 或者 <code>stroke</code> 才会使用路径进行填充或描边。</p>",
    "info": "开始创建一个路径，需要调用 fill 或者 stroke 才会使用路径进行填充或描边。"
  }, {
    "name": "closePath",
    "value": "closePath()",
    "moveAction": [],
    "desc": "<h3><span class=\"octicon octicon-link\"></span> closePath</h3><p>关闭一个路径</p>",
    "info": "关闭一个路径"
  }, {
    "name": "moveTo",
    "value": "moveTo()",
    "moveAction": [],
    "desc": "<h3><span class=\"octicon octicon-link\"></span> moveTo</h3><p>把路径移动到画布中的指定点，不创建线条。</p>",
    "info": "把路径移动到画布中的指定点，不创建线条。"
  }, {
    "name": "lineTo",
    "value": "lineTo()",
    "moveAction": [],
    "desc": "<h3><span class=\"octicon octicon-link\"></span> lineTo</h3><p><code>lineTo</code> 方法增加一个新点，然后创建一条从上次指定点到目标点的线。</p>",
    "info": "lineTo 方法增加一个新点，然后创建一条从上次指定点到目标点的线。"
  }, {
    "name": "arc",
    "value": "arc()",
    "moveAction": [],
    "desc": "<h3><span class=\"octicon octicon-link\"></span> arc</h3><p>画一条弧线。</p>",
    "info": "画一条弧线。"
  }, {
    "name": "bezierCurveTo",
    "value": "bezierCurveTo()",
    "moveAction": [],
    "desc": "<h3><span class=\"octicon octicon-link\"></span> bezierCurveTo</h3><p>创建三次方贝塞尔曲线路径。</p>",
    "info": "创建三次方贝塞尔曲线路径。"
  }, {
    "name": "clip",
    "value": "clip()",
    "moveAction": [],
    "desc": "<h3><span class=\"octicon octicon-link\"></span> clip</h3><p>将当前创建的路径设置为当前剪切路径。</p>",
    "info": "将当前创建的路径设置为当前剪切路径。"
  }, {
    "name": "quadraticCurveTo",
    "value": "quadraticCurveTo()",
    "moveAction": [],
    "desc": "<h3><span class=\"octicon octicon-link\"></span> quadraticCurveTo</h3><p>创建二次贝塞尔曲线路径。</p>",
    "info": "创建二次贝塞尔曲线路径。"
  }, {
    "name": "scale",
    "value": "scale()",
    "moveAction": [],
    "desc": "<h3><span class=\"octicon octicon-link\"></span> scale</h3><p>在调用<code>scale</code>方法后，之后创建的路径其横纵坐标会被缩放。多次调用<code>scale</code>，倍数会相乘。</p>",
    "info": "在调用scale方法后，之后创建的路径其横纵坐标会被缩放。多次调用scale，倍数会相乘。"
  }, {
    "name": "rotate",
    "value": "rotate()",
    "moveAction": [],
    "desc": "<h3><span class=\"octicon octicon-link\"></span> rotate</h3><p>以原点为中心，原点可以用 translate方法修改。顺时针旋转当前坐标轴。多次调用<code>rotate</code>，旋转的角度会叠加。</p>",
    "info": "以原点为中心，原点可以用 translate方法修改。顺时针旋转当前坐标轴。多次调用rotate，旋转的角度会叠加。"
  }, {
    "name": "translate",
    "value": "translate()",
    "moveAction": [],
    "desc": "<h3><span class=\"octicon octicon-link\"></span> translate</h3><p>对当前坐标系的原点(0, 0)进行变换，默认的坐标系原点为页面左上角。</p>",
    "info": "对当前坐标系的原点(0, 0)进行变换，默认的坐标系原点为页面左上角。"
  }, {
    "name": "setFontSize",
    "value": "setFontSize()",
    "moveAction": [],
    "desc": "<h3><span class=\"octicon octicon-link\"></span> setFontSize</h3><p>设置字体大小。</p>",
    "info": "设置字体大小。"
  }, {
    "name": "fillText",
    "value": "fillText()",
    "moveAction": [],
    "desc": "<h3><span class=\"octicon octicon-link\"></span> fillText</h3><p>在画布上绘制被填充的文本。</p>",
    "info": "在画布上绘制被填充的文本。"
  }, {
    "name": "drawImage",
    "value": "drawImage()",
    "moveAction": [],
    "desc": "<h3><span class=\"octicon octicon-link\"></span> drawImage</h3><p>绘制图像，图像保持原始尺寸。</p>",
    "info": "绘制图像，图像保持原始尺寸。"
  }, {
    "name": "setGlobalAlpha",
    "value": "setGlobalAlpha()",
    "moveAction": [],
    "desc": "<h3><span class=\"octicon octicon-link\"></span> setGlobalAlpha</h3><p>设置全局画笔透明度。</p>",
    "info": "设置全局画笔透明度。"
  }, {
    "name": "save",
    "value": "save()",
    "moveAction": [],
    "desc": "<h3><span class=\"octicon octicon-link\"></span> save</h3><p>保存当前的绘图上下文。</p>",
    "info": "保存当前的绘图上下文。"
  }, {
    "name": "restore",
    "value": "restore()",
    "moveAction": [],
    "desc": "<h3><span class=\"octicon octicon-link\"></span> restore</h3><p>恢复之前保存的绘图上下文。</p>",
    "info": "恢复之前保存的绘图上下文。"
  }, {
    "name": "draw",
    "value": "draw()",
    "moveAction": [],
    "desc": "<h3><span class=\"octicon octicon-link\"></span> draw</h3><p>将之前在绘图上下文中的描述（路径、变形、样式）画到 canvas 中。</p>",
    "info": "将之前在绘图上下文中的描述（路径、变形、样式）画到 canvas 中。"
  }, {
    "name": "createMapContext",
    "value": "createMapContext()",
    "moveAction": [],
    "desc": "<h3><span class=\"octicon octicon-link\"></span> my.createMapContext(mapId)</h3><p>创建并返回一个 map 上下文对象 <code>mapContext</code>。</p><p><code>mapContext</code> 通过 id 跟一个 <code><map/></code> 组件绑定，通过它可以操作对应的 <code><map/></code> 组件。</p>",
    "info": "创建并返回一个 map 上下文对象 mapContext。"
  }, {
    "name": "hideKeyboard",
    "value": "hideKeyboard()",
    "moveAction": [],
    "desc": "<h3><span class=\"octicon octicon-link\"></span> my.hideKeyboard</h3><p>隐藏键盘。</p>",
    "info": "隐藏键盘。"
  }, {
    "name": "pageScrollTo",
    "value": "pageScrollTo()",
    "moveAction": [],
    "desc": "<h3><span class=\"octicon octicon-link\"></span> my.pageScrollTo</h3><p>滚动到页面的目标位置。</p><div>\n <table>\n   <thead>\n    <tr>\n      <th width=\"90\"><div>参数名</div></th>\n      <th width=\"90\"><div>类型</div></th>\n      <th width=\"90\"><div>说明</div></th>\n    </tr>\n   </thead>\n   <tbody>\n    <tr>\n      <td width=\"90\"><div>scrollTop</div></td>\n      <td width=\"90\"><div>Number</div></td>\n      <td width=\"90\"><div>滚动到页面的目标位置，单位 px</div></td>\n    </tr>\n   </tbody>\n </table>\n</div>",
    "info": "滚动到页面的目标位置。"
  }, {
    "name": "getAuthCode",
    "value": "getAuthCode()",
    "moveAction": [],
    "desc": "<h3><span class=\"octicon octicon-link\"></span> my.getAuthCode</h3><p>获取授权码。</p><div>\n <table>\n   <thead>\n    <tr>\n      <th width=\"90\"><div>名称</div></th>\n      <th width=\"90\"><div>类型</div></th>\n      <th width=\"90\"><div>必填</div></th>\n      <th width=\"90\"><div>描述</div></th>\n    </tr>\n   </thead>\n   <tbody>\n    <tr>\n      <td width=\"90\"><div>scopes</div></td>\n      <td width=\"90\"><div>String/Array</div></td>\n      <td width=\"90\"><div>否</div></td>\n      <td width=\"90\"><div>授权类型，默认 auth_base。支持 auth_base（静默授权）/ auth_user（主动授权） / auth_zhima（芝麻信用）</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>success</div></td>\n      <td width=\"90\"><div>Function</div></td>\n      <td width=\"90\"><div>否</div></td>\n      <td width=\"90\"><div>调用成功的回调函数</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>fail</div></td>\n      <td width=\"90\"><div>Function</div></td>\n      <td width=\"90\"><div>否</div></td>\n      <td width=\"90\"><div>调用失败的回调函数</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>complete</div></td>\n      <td width=\"90\"><div>Function</div></td>\n      <td width=\"90\"><div>否</div></td>\n      <td width=\"90\"><div>调用结束的回调函数（调用成功、失败都会执行）</div></td>\n    </tr>\n   </tbody>\n </table>\n</div>",
    "info": "获取授权码。"
  }, {
    "name": "getAuthUserInfo",
    "value": "getAuthUserInfo()",
    "moveAction": [],
    "desc": "<h3><span class=\"octicon octicon-link\"></span> my.getAuthUserInfo</h3><p>客户端获取会员信息</p><div>\n <table>\n   <thead>\n    <tr>\n      <th width=\"90\"><div>名称</div></th>\n      <th width=\"90\"><div>类型</div></th>\n      <th width=\"90\"><div>必填</div></th>\n      <th width=\"90\"><div>描述</div></th>\n    </tr>\n   </thead>\n   <tbody>\n    <tr>\n      <td width=\"90\"><div>success</div></td>\n      <td width=\"90\"><div>Function</div></td>\n      <td width=\"90\"><div>否</div></td>\n      <td width=\"90\"><div>调用成功的回调函数</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>fail</div></td>\n      <td width=\"90\"><div>Function</div></td>\n      <td width=\"90\"><div>否</div></td>\n      <td width=\"90\"><div>调用失败的回调函数</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>complete</div></td>\n      <td width=\"90\"><div>Function</div></td>\n      <td width=\"90\"><div>否</div></td>\n      <td width=\"90\"><div>调用结束的回调函数（调用成功、失败都会执行）</div></td>\n    </tr>\n   </tbody>\n </table>\n</div>",
    "info": "客户端获取会员信息"
  }, {
    "name": "tradePay",
    "value": "tradePay({\n\torderStr: ''\n})",
    "moveAction": [-1, 11],
    "desc": "<h3><span class=\"octicon octicon-link\"></span> my.tradePay</h3><p>发起支付。</p><div>\n <table>\n   <thead>\n    <tr>\n      <th width=\"90\"><div>名称</div></th>\n      <th width=\"90\"><div>类型</div></th>\n      <th width=\"90\"><div>必填</div></th>\n      <th width=\"90\"><div>描述</div></th>\n    </tr>\n   </thead>\n   <tbody>\n    <tr>\n      <td width=\"90\"><div>orderStr</div></td>\n      <td width=\"90\"><div>String</div></td>\n      <td width=\"90\"><div>是</div></td>\n      <td width=\"90\"><div>完整的支付参数拼接成的字符串，从服务端获取</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>success</div></td>\n      <td width=\"90\"><div>Function</div></td>\n      <td width=\"90\"><div>否</div></td>\n      <td width=\"90\"><div>调用成功的回调函数</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>fail</div></td>\n      <td width=\"90\"><div>Function</div></td>\n      <td width=\"90\"><div>否</div></td>\n      <td width=\"90\"><div>调用失败的回调函数</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>complete</div></td>\n      <td width=\"90\"><div>Function</div></td>\n      <td width=\"90\"><div>否</div></td>\n      <td width=\"90\"><div>调用结束的回调函数（调用成功、失败都会执行）</div></td>\n    </tr>\n   </tbody>\n </table>\n</div>",
    "info": "发起支付。"
  }, {
    "name": "chooseImage",
    "value": "chooseImage()",
    "moveAction": [],
    "desc": "<h3><span class=\"octicon octicon-link\"></span> my.chooseImage</h3><p>拍照或从手机相册中选择图片。</p><div>\n <table>\n   <thead>\n    <tr>\n      <th width=\"90\"><div>名称</div></th>\n      <th width=\"90\"><div>类型</div></th>\n      <th width=\"90\"><div>必填</div></th>\n      <th width=\"90\"><div>描述</div></th>\n    </tr>\n   </thead>\n   <tbody>\n    <tr>\n      <td width=\"90\"><div>count</div></td>\n      <td width=\"90\"><div>Number</div></td>\n      <td width=\"90\"><div>否</div></td>\n      <td width=\"90\"><div>最大可选照片数，默认1张</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>sourceType</div></td>\n      <td width=\"90\"><div>String Array</div></td>\n      <td width=\"90\"><div>否</div></td>\n      <td width=\"90\"><div>相册选取或者拍照，默认 ['camera','album']</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>success</div></td>\n      <td width=\"90\"><div>Function</div></td>\n      <td width=\"90\"><div>否</div></td>\n      <td width=\"90\"><div>调用成功的回调函数</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>fail</div></td>\n      <td width=\"90\"><div>Function</div></td>\n      <td width=\"90\"><div>否</div></td>\n      <td width=\"90\"><div>调用失败的回调函数</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>complete</div></td>\n      <td width=\"90\"><div>Function</div></td>\n      <td width=\"90\"><div>否</div></td>\n      <td width=\"90\"><div>调用结束的回调函数（调用成功、失败都会执行）</div></td>\n    </tr>\n   </tbody>\n </table>\n</div>",
    "info": "拍照或从手机相册中选择图片。"
  }, {
    "name": "previewImage",
    "value": "previewImage({\n\turls: []\n})",
    "moveAction": [-1, 7],
    "desc": "<h3><span class=\"octicon octicon-link\"></span> my.previewImage</h3><p>预览图片。</p><div>\n <table>\n   <thead>\n    <tr>\n      <th width=\"90\"><div>名称</div></th>\n      <th width=\"90\"><div>类型</div></th>\n      <th width=\"90\"><div>必填</div></th>\n      <th width=\"90\"><div>描述</div></th>\n    </tr>\n   </thead>\n   <tbody>\n    <tr>\n      <td width=\"90\"><div>urls</div></td>\n      <td width=\"90\"><div>Array</div></td>\n      <td width=\"90\"><div>是</div></td>\n      <td width=\"90\"><div>要预览的图片链接列表</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>current</div></td>\n      <td width=\"90\"><div>Number</div></td>\n      <td width=\"90\"><div>否</div></td>\n      <td width=\"90\"><div>当前显示图片索引，默认 0</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>success</div></td>\n      <td width=\"90\"><div>Function</div></td>\n      <td width=\"90\"><div>否</div></td>\n      <td width=\"90\"><div>调用成功的回调函数</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>fail</div></td>\n      <td width=\"90\"><div>Function</div></td>\n      <td width=\"90\"><div>否</div></td>\n      <td width=\"90\"><div>调用失败的回调函数</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>complete</div></td>\n      <td width=\"90\"><div>Function</div></td>\n      <td width=\"90\"><div>否</div></td>\n      <td width=\"90\"><div>调用结束的回调函数（调用成功、失败都会执行）</div></td>\n    </tr>\n   </tbody>\n </table>\n</div>",
    "info": "预览图片。"
  }, {
    "name": "saveImage",
    "value": "saveImage({\n\turl: ''\n})",
    "moveAction": [-1, 6],
    "desc": "<h3><span class=\"octicon octicon-link\"></span> my.saveImage</h3><p>保存在线图片到手机相册。</p><div>\n <table>\n   <thead>\n    <tr>\n      <th width=\"90\"><div>名称</div></th>\n      <th width=\"90\"><div>类型</div></th>\n      <th width=\"90\"><div>必填</div></th>\n      <th width=\"90\"><div>描述</div></th>\n    </tr>\n   </thead>\n   <tbody>\n    <tr>\n      <td width=\"90\"><div>url</div></td>\n      <td width=\"90\"><div>String</div></td>\n      <td width=\"90\"><div>是</div></td>\n      <td width=\"90\"><div>要保存的图片链接</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>showActionSheet</div></td>\n      <td width=\"90\"><div>Boolean</div></td>\n      <td width=\"90\"><div>否</div></td>\n      <td width=\"90\"><div>是否显示图片操作菜单，默认 true</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>success</div></td>\n      <td width=\"90\"><div>Function</div></td>\n      <td width=\"90\"><div>否</div></td>\n      <td width=\"90\"><div>调用成功的回调函数</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>fail</div></td>\n      <td width=\"90\"><div>Function</div></td>\n      <td width=\"90\"><div>否</div></td>\n      <td width=\"90\"><div>调用失败的回调函数</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>complete</div></td>\n      <td width=\"90\"><div>Function</div></td>\n      <td width=\"90\"><div>否</div></td>\n      <td width=\"90\"><div>调用结束的回调函数（调用成功、失败都会执行）</div></td>\n    </tr>\n   </tbody>\n </table>\n</div>",
    "info": "保存在线图片到手机相册。"
  }, {
    "name": "setStorage",
    "value": "setStorage()",
    "moveAction": [],
    "desc": "<h3><span class=\"octicon octicon-link\"></span> my.setStorage</h3><p>将数据存储在本地缓存中指定的 key 中，会覆盖掉原来该 key 对应的数据。</p>",
    "info": "将数据存储在本地缓存中指定的 key 中，会覆盖掉原来该 key 对应的数据。"
  }, {
    "name": "setStorageSync",
    "value": "setStorageSync()",
    "moveAction": [],
    "desc": "<h3><span class=\"octicon octicon-link\"></span> my.setStorageSync</h3><p>同步将数据存储在本地缓存中指定的 key 中。</p>",
    "info": "同步将数据存储在本地缓存中指定的 key 中。"
  }, {
    "name": "getStorage",
    "value": "getStorage()",
    "moveAction": [],
    "desc": "<h3><span class=\"octicon octicon-link\"></span> my.getStorage</h3><p>获取缓存数据。</p>",
    "info": "获取缓存数据。"
  }, {
    "name": "getStorageSync",
    "value": "getStorageSync()",
    "moveAction": [],
    "desc": "<h3><span class=\"octicon octicon-link\"></span> my.getStorageSync</h3><p>同步获取缓存数据。</p>",
    "info": "同步获取缓存数据。"
  }, {
    "name": "removeStorage",
    "value": "removeStorage()",
    "moveAction": [],
    "desc": "<h3><span class=\"octicon octicon-link\"></span> my.removeStorage</h3><p>删除缓存数据。</p>",
    "info": "删除缓存数据。"
  }, {
    "name": "removeStorageSync",
    "value": "removeStorageSync()",
    "moveAction": [],
    "desc": "<h3><span class=\"octicon octicon-link\"></span> my.removeStorageSync</h3><p>同步删除缓存数据。</p>",
    "info": "同步删除缓存数据。"
  }, {
    "name": "clearStorage",
    "value": "clearStorage()",
    "moveAction": [],
    "desc": "<h3><span class=\"octicon octicon-link\"></span> my.clearStorage</h3><p>清除本地数据缓存。</p>",
    "info": "清除本地数据缓存。"
  }, {
    "name": "clearStorageSync",
    "value": "clearStorageSync()",
    "moveAction": [],
    "desc": "<h3><span class=\"octicon octicon-link\"></span> my.clearStorageSync</h3><p>同步清除本地数据缓存。</p>",
    "info": "同步清除本地数据缓存。"
  }, {
    "name": "getStorageInfo",
    "value": "getStorageInfo()",
    "moveAction": [],
    "desc": "<h3><span class=\"octicon octicon-link\"></span> my.getStorageInfo</h3><p>异步获取当前storage的相关信息。</p>",
    "info": "异步获取当前storage的相关信息。"
  }, {
    "name": "getStorageInfoSync",
    "value": "getStorageInfoSync()",
    "moveAction": [],
    "desc": "<h3><span class=\"octicon octicon-link\"></span> my.getStorageInfoSync</h3><p>同步获取当前storage的相关信息。</p>",
    "info": "同步获取当前storage的相关信息。"
  }, {
    "name": "getLocation",
    "value": "getLocation({\n\tbizType: ''\n})",
    "moveAction": [-1, 10],
    "desc": "<h3><span class=\"octicon octicon-link\"></span> my.getLocation(OBJECT)</h3><p>获取用户当前的地理位置信息。</p><div>\n <table>\n   <thead>\n    <tr>\n      <th width=\"117\"><div>名称</div></th>\n      <th width=\"89\"><div>类型</div></th>\n      <th width=\"90\"><div>必填</div></th>\n      <th width=\"274\"><div>描述</div></th>\n      <th width=\"90\"><div>最低版本</div></th>\n    </tr>\n   </thead>\n   <tbody>\n    <tr>\n      <td width=\"117\"><div>cacheTimeout</div></td>\n      <td width=\"89\"><div>Number</div></td>\n      <td width=\"90\"><div>否</div></td>\n      <td width=\"274\"><div>支付宝客户端经纬度定位缓存过期时间，单位秒。默认 30s。使用缓存会加快定位速度，缓存过期会重新定位</div></td>\n      <td width=\"90\"><div></div></td>\n    </tr>\n    <tr>\n      <td width=\"117\"><div>type</div></td>\n      <td width=\"89\"><div>Number</div></td>\n      <td width=\"90\"><div>否</div></td>\n      <td width=\"274\"><div>0：默认，获取经纬度</div><div>1：获取经纬度和详细到区县级别的逆地理编码数据</div><div>2：获取经纬度和详细到街道级别的逆地理编码数据，不推荐使用</div><div>3：获取经纬度和详细到POI级别的逆地理编码数据，不推荐使用</div></td>\n      <td width=\"90\"><div style=\"text-align:center;\"><div>1.1.1</div><div></div></div>\n</td>\n    </tr>\n    <tr>\n      <td width=\"117\"><div>bizType</div></td>\n      <td width=\"89\"><div>String</div></td>\n      <td width=\"90\"><div>是</div></td>\n      <td width=\"274\"><div>业务方标识，要求能够唯一标识使用方的字符串</div></td>\n      <td width=\"90\"><div style=\"text-align:center;\"><div>1.1.1</div></div>\n</td>\n    </tr>\n    <tr>\n      <td width=\"117\"><div>success</div></td>\n      <td width=\"89\"><div>Function</div></td>\n      <td width=\"90\"><div>否</div></td>\n      <td width=\"274\"><div>调用成功的回调函数</div></td>\n      <td width=\"90\"><div></div></td>\n    </tr>\n    <tr>\n      <td width=\"117\"><div>fail</div></td>\n      <td width=\"89\"><div>Function</div></td>\n      <td width=\"90\"><div>否</div></td>\n      <td width=\"274\"><div>调用失败的回调函数</div></td>\n      <td width=\"90\"><div></div></td>\n    </tr>\n    <tr>\n      <td width=\"117\"><div>complete</div></td>\n      <td width=\"89\"><div>Function</div></td>\n      <td width=\"90\"><div>否</div></td>\n      <td width=\"274\"><div>调用结束的回调函数（调用成功、失败都会执行）</div></td>\n      <td width=\"90\"><div></div></td>\n    </tr>\n   </tbody>\n </table>\n</div>",
    "info": "获取用户当前的地理位置信息。"
  }, {
    "name": "openLocation",
    "value": "openLocation()",
    "moveAction": [],
    "desc": "<h3><span class=\"octicon octicon-link\"></span> my.openLocation</h3><p>使用支付宝内置地图查看位置。</p>",
    "info": "使用支付宝内置地图查看位置。"
  }, {
    "name": "httpRequest",
    "value": "httpRequest({\n\turl: ''\n})",
    "moveAction": [-1, 6],
    "desc": "<h3><span class=\"octicon octicon-link\"></span> my.httpRequest</h3><p>向指定服务器发起一个跨域 http 请求。</p><div>\n <table>\n   <thead>\n    <tr>\n      <th width=\"90\"><div>名称</div></th>\n      <th width=\"90\"><div>类型</div></th>\n      <th width=\"90\"><div>必填</div></th>\n      <th width=\"90\"><div>描述</div></th>\n    </tr>\n   </thead>\n   <tbody>\n    <tr>\n      <td width=\"90\"><div>url</div></td>\n      <td width=\"90\"><div>String</div></td>\n      <td width=\"90\"><div>是</div></td>\n      <td width=\"90\"><div>目标服务器url</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>headers</div></td>\n      <td width=\"90\"><div>Object</div></td>\n      <td width=\"90\"><div>否</div></td>\n      <td width=\"90\"><div>设置请求的 HTTP 头，默认 {'Content-Type': 'application/x-www-form-urlencoded'}</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>method</div></td>\n      <td width=\"90\"><div>String</div></td>\n      <td width=\"90\"><div>否</div></td>\n      <td width=\"90\"><div>默认GET，目前支持GET，POST</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>data</div></td>\n      <td width=\"90\"><div>String</div></td>\n      <td width=\"90\"><div>否</div></td>\n      <td width=\"90\"><div>请求参数</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>timeout</div></td>\n      <td width=\"90\"><div>Number</div></td>\n      <td width=\"90\"><div>否</div></td>\n      <td width=\"90\"><div>超时时间，单位ms，默认30000</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>dataType</div></td>\n      <td width=\"90\"><div>String</div></td>\n      <td width=\"90\"><div>否</div></td>\n      <td width=\"90\"><div>期望返回的数据格式，默认json，支持json，text，base64</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>success</div></td>\n      <td width=\"90\"><div>Function</div></td>\n      <td width=\"90\"><div>否</div></td>\n      <td width=\"90\"><div>调用成功的回调函数</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>fail</div></td>\n      <td width=\"90\"><div>Function</div></td>\n      <td width=\"90\"><div>否</div></td>\n      <td width=\"90\"><div>调用失败的回调函数</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>complete</div></td>\n      <td width=\"90\"><div>Function</div></td>\n      <td width=\"90\"><div>否</div></td>\n      <td width=\"90\"><div>调用结束的回调函数（调用成功、失败都会执行）</div></td>\n    </tr>\n   </tbody>\n </table>\n</div>",
    "info": "向指定服务器发起一个跨域 http 请求。"
  }, {
    "name": "uploadFile",
    "value": "uploadFile({\n\turl: '',\n\tfilePath: '',\n\tfileName: '',\n\tfileType: ''\n})",
    "moveAction": [-4, 6],
    "desc": "<h3><span class=\"octicon octicon-link\"></span> my.uploadFile</h3><p>上传本地资源到开发者服务器。</p><div>\n <table>\n   <thead>\n    <tr>\n      <th width=\"90\"><div>名称</div></th>\n      <th width=\"90\"><div>类型</div></th>\n      <th width=\"90\"><div>必填</div></th>\n      <th width=\"90\"><div>描述</div></th>\n    </tr>\n   </thead>\n   <tbody>\n    <tr>\n      <td width=\"90\"><div>url</div></td>\n      <td width=\"90\"><div>String</div></td>\n      <td width=\"90\"><div>是</div></td>\n      <td width=\"90\"><div>开发者服务器地址</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>filePath</div></td>\n      <td width=\"90\"><div>String</div></td>\n      <td width=\"90\"><div>是</div></td>\n      <td width=\"90\"><div>要上传文件资源的本地定位符</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>fileName</div></td>\n      <td width=\"90\"><div>String</div></td>\n      <td width=\"90\"><div>是</div></td>\n      <td width=\"90\"><div>文件名，即对应的 key, 开发者在服务器端通过这个 key 可以获取到文件二进制内容</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>fileType</div></td>\n      <td width=\"90\"><div>String</div></td>\n      <td width=\"90\"><div>是</div></td>\n      <td width=\"90\"><div>文件类型，image/video</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>header</div></td>\n      <td width=\"90\"><div>Object</div></td>\n      <td width=\"90\"><div>否</div></td>\n      <td width=\"90\"><div>HTTP 请求 Header</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>formData</div></td>\n      <td width=\"90\"><div>Object</div></td>\n      <td width=\"90\"><div>否</div></td>\n      <td width=\"90\"><div>HTTP 请求中其他额外的 form 数据</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>success</div></td>\n      <td width=\"90\"><div>Function</div></td>\n      <td width=\"90\"><div>否</div></td>\n      <td width=\"90\"><div>调用成功的回调函数</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>fail</div></td>\n      <td width=\"90\"><div>Function</div></td>\n      <td width=\"90\"><div>否</div></td>\n      <td width=\"90\"><div>调用失败的回调函数</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>complete</div></td>\n      <td width=\"90\"><div>Function</div></td>\n      <td width=\"90\"><div>否</div></td>\n      <td width=\"90\"><div>调用结束的回调函数（调用成功、失败都会执行）</div></td>\n    </tr>\n   </tbody>\n </table>\n</div>",
    "info": "上传本地资源到开发者服务器。"
  }, {
    "name": "downloadFile",
    "value": "downloadFile({\n\turl: ''\n})",
    "moveAction": [-1, 6],
    "desc": "<h3><span class=\"octicon octicon-link\"></span> my.downloadFile</h3><p>下载文件资源到本地。</p><div>\n <table>\n   <thead>\n    <tr>\n      <th width=\"90\"><div>名称</div></th>\n      <th width=\"90\"><div>类型</div></th>\n      <th width=\"90\"><div>必填</div></th>\n      <th width=\"90\"><div>描述</div></th>\n    </tr>\n   </thead>\n   <tbody>\n    <tr>\n      <td width=\"90\"><div>url</div></td>\n      <td width=\"90\"><div>String</div></td>\n      <td width=\"90\"><div>是</div></td>\n      <td width=\"90\"><div>下载文件地址</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>header</div></td>\n      <td width=\"90\"><div>Object</div></td>\n      <td width=\"90\"><div>否</div></td>\n      <td width=\"90\"><div>HTTP 请求 Header</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>success</div></td>\n      <td width=\"90\"><div>Function</div></td>\n      <td width=\"90\"><div>否</div></td>\n      <td width=\"90\"><div>调用成功的回调函数</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>fail</div></td>\n      <td width=\"90\"><div>Function</div></td>\n      <td width=\"90\"><div>否</div></td>\n      <td width=\"90\"><div>调用失败的回调函数</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>complete</div></td>\n      <td width=\"90\"><div>Function</div></td>\n      <td width=\"90\"><div>否</div></td>\n      <td width=\"90\"><div>调用结束的回调函数（调用成功、失败都会执行）</div></td>\n    </tr>\n   </tbody>\n </table>\n</div>",
    "info": "下载文件资源到本地。"
  }, {
    "name": "connectSocket",
    "value": "connectSocket({\n\turl: ''\n})",
    "moveAction": [-1, 6],
    "desc": "<h3><span class=\"octicon octicon-link\"></span> my.connectSocket</h3><p>创建一个 WebSocket 的连接；<strong>一个支付宝小程序同时只能保留一个 WebSocket 连接，如果当前已存在 WebSocket 连接，会自动关闭该连接，并重新创建一个新的 WebSocket 连接。</strong></p><div>\n <table>\n   <thead>\n    <tr>\n      <th width=\"90\"><div>名称</div></th>\n      <th width=\"90\"><div>类型</div></th>\n      <th width=\"90\"><div>必填</div></th>\n      <th width=\"90\"><div>描述</div></th>\n    </tr>\n   </thead>\n   <tbody>\n    <tr>\n      <td width=\"90\"><div>url</div></td>\n      <td width=\"90\"><div>String</div></td>\n      <td width=\"90\"><div>是</div></td>\n      <td width=\"90\"><div>目标服务器url</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>data</div></td>\n      <td width=\"90\"><div>Object</div></td>\n      <td width=\"90\"><div>否</div></td>\n      <td width=\"90\"><div>请求的参数</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>headers</div></td>\n      <td width=\"90\"><div>Object</div></td>\n      <td width=\"90\"><div>否</div></td>\n      <td width=\"90\"><div>设置请求的头部</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>success</div></td>\n      <td width=\"90\"><div>Function</div></td>\n      <td width=\"90\"><div>否</div></td>\n      <td width=\"90\"><div>调用成功的回调函数</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>fail</div></td>\n      <td width=\"90\"><div>Function</div></td>\n      <td width=\"90\"><div>否</div></td>\n      <td width=\"90\"><div>调用失败的回调函数</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>complete</div></td>\n      <td width=\"90\"><div>Function</div></td>\n      <td width=\"90\"><div>否</div></td>\n      <td width=\"90\"><div>调用结束的回调函数（调用成功、失败都会执行）</div></td>\n    </tr>\n   </tbody>\n </table>\n</div>",
    "info": "创建一个 WebSocket 的连接；一个支付宝小程序同时只能保留一个 WebSocket 连接，如果当前已存在 WebSocket 连接，会自动关闭该连接，并重新创建一个新的 WebSocket 连接。"
  }, {
    "name": "onSocketOpen",
    "value": "onSocketOpen()",
    "moveAction": [],
    "desc": "<h3><span class=\"octicon octicon-link\"></span> my.onSocketOpen</h3><p>监听WebSocket连接打开事件。</p>",
    "info": "监听WebSocket连接打开事件。"
  }, {
    "name": "onSocketError",
    "value": "onSocketError()",
    "moveAction": [],
    "desc": "<h3><span class=\"octicon octicon-link\"></span> my.onSocketError</h3><p>监听WebSocket错误。</p>",
    "info": "监听WebSocket错误。"
  }, {
    "name": "sendSocketMessage",
    "value": "sendSocketMessage()",
    "moveAction": [],
    "desc": "<h3><span class=\"octicon octicon-link\"></span> my.sendSocketMessage</h3><p>通过 WebSocket 连接发送数据，需要先使用 my.connectSocket</a> 发起建连，并在 <a href=\"#my.onSocketOpen\">my.onSocketOpen 回调之后再发送数据。</p><div>\n <table>\n   <thead>\n    <tr>\n      <th width=\"90\"><div>名称</div></th>\n      <th width=\"90\"><div>类型</div></th>\n      <th width=\"90\"><div>必填</div></th>\n      <th width=\"90\"><div>描述</div></th>\n    </tr>\n   </thead>\n   <tbody>\n    <tr>\n      <td width=\"90\"><div>data</div></td>\n      <td width=\"90\"><div>String/ArrayBuffer</div></td>\n      <td width=\"90\"><div>是</div></td>\n      <td width=\"90\"><div>需要发送的内容</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>success</div></td>\n      <td width=\"90\"><div>Function</div></td>\n      <td width=\"90\"><div>否</div></td>\n      <td width=\"90\"><div>回调函数</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>fail</div></td>\n      <td width=\"90\"><div>Function</div></td>\n      <td width=\"90\"><div>否</div></td>\n      <td width=\"90\"><div>调用失败的回调函数</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>complete</div></td>\n      <td width=\"90\"><div>Function</div></td>\n      <td width=\"90\"><div>否</div></td>\n      <td width=\"90\"><div>调用结束的回调函数（调用成功、失败都会执行）</div></td>\n    </tr>\n   </tbody>\n </table>\n</div>",
    "info": "通过 WebSocket 连接发送数据，需要先使用 my.connectSocket 发起建连，并在 my.onSocketOpen 回调之后再发送数据。"
  }, {
    "name": "onSocketMessage",
    "value": "onSocketMessage()",
    "moveAction": [],
    "desc": "<h3><span class=\"octicon octicon-link\"></span> my.onSocketMessage</h3><p>监听WebSocket接受到服务器的消息事件。</p><div>\n <table>\n   <thead>\n    <tr>\n      <th width=\"90\"><div>名称</div></th>\n      <th width=\"90\"><div>类型</div></th>\n      <th width=\"90\"><div>描述</div></th>\n    </tr>\n   </thead>\n   <tbody>\n    <tr>\n      <td width=\"90\"><div>data</div></td>\n      <td width=\"90\"><div>String/ArrayBuffer</div></td>\n      <td width=\"90\"><div>服务器返回的消息</div></td>\n    </tr>\n   </tbody>\n </table>\n</div>",
    "info": "监听WebSocket接受到服务器的消息事件。"
  }, {
    "name": "closeSocket",
    "value": "closeSocket()",
    "moveAction": [],
    "desc": "<h3><span class=\"octicon octicon-link\"></span> my.closeSocket</h3><div>\n <table>\n   <thead>\n    <tr>\n      <th width=\"90\"><div>名称</div></th>\n      <th width=\"90\"><div>类型</div></th>\n      <th width=\"90\"><div>必填</div></th>\n      <th width=\"90\"><div>描述</div></th>\n    </tr>\n   </thead>\n   <tbody>\n    <tr>\n      <td width=\"90\"><div>success</div></td>\n      <td width=\"90\"><div>Function</div></td>\n      <td width=\"90\"><div>否</div></td>\n      <td width=\"90\"><div>回调函数</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>fail</div></td>\n      <td width=\"90\"><div>Function</div></td>\n      <td width=\"90\"><div>否</div></td>\n      <td width=\"90\"><div>调用失败的回调函数</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>complete</div></td>\n      <td width=\"90\"><div>Function</div></td>\n      <td width=\"90\"><div>否</div></td>\n      <td width=\"90\"><div>调用结束的回调函数（调用成功、失败都会执行）</div></td>\n    </tr>\n   </tbody>\n </table>\n</div>",
    "info": ""
  }, {
    "name": "onSocketClose",
    "value": "onSocketClose()",
    "moveAction": [],
    "desc": "<h3><span class=\"octicon octicon-link\"></span> my.onSocketClose</h3><p>监听WebSocket关闭。</p>",
    "info": "监听WebSocket关闭。"
  }, {
    "name": "SDKVersion",
    "value": "SDKVersion()",
    "moveAction": [],
    "desc": "<h3><span class=\"octicon octicon-link\"></span> my.SDKVersion</h3><p>获取基础库版本号</p>",
    "info": "获取基础库版本号"
  }, {
    "name": "getSystemInfo",
    "value": "getSystemInfo()",
    "moveAction": [],
    "desc": "<h3><span class=\"octicon octicon-link\"></span> my.getSystemInfo</h3><p>获取系统信息。</p>",
    "info": "获取系统信息。"
  }, {
    "name": "getSystemInfoSync",
    "value": "getSystemInfoSync()",
    "moveAction": [],
    "desc": "<h3><span class=\"octicon octicon-link\"></span> my.getSystemInfoSync</h3><p>返回值同 getSystemInfo success 回调参数</p>",
    "info": "返回值同 getSystemInfo success 回调参数"
  }, {
    "name": "canIUse",
    "value": "canIUse()",
    "moveAction": [],
    "desc": "<h3><span class=\"octicon octicon-link\"></span> my.canIUse(String)</h3><p>判断 API 调用的参数和返回值以及组件以及属性是否支持。</p><p>参数使用 <code>${API}.${type}.${param}.${option}</code> 或者 <code>${component}.${attribute}.${option}</code> 方式来调用</p>",
    "info": "判断 API 调用的参数和返回值以及组件以及属性是否支持。"
  }, {
    "name": "getNetworkType",
    "value": "getNetworkType()",
    "moveAction": [],
    "desc": "<h3><span class=\"octicon octicon-link\"></span> my.getNetworkType</h3><p>获取当前网络状态。</p>",
    "info": "获取当前网络状态。"
  }, {
    "name": "getClipboard",
    "value": "getClipboard()",
    "moveAction": [],
    "desc": "<h3><span class=\"octicon octicon-link\"></span> my.getClipboard</h3><p>获取剪贴板数据。</p>",
    "info": "获取剪贴板数据。"
  }, {
    "name": "setClipboard",
    "value": "setClipboard()",
    "moveAction": [],
    "desc": "<h3><span class=\"octicon octicon-link\"></span> my.setClipboard</h3><p>设置剪贴板数据。</p>",
    "info": "设置剪贴板数据。"
  }, {
    "name": "scan",
    "value": "scan()",
    "moveAction": [],
    "desc": "<h3><span class=\"octicon octicon-link\"></span> my.scan</h3><p>调用扫一扫功能。</p>",
    "info": "调用扫一扫功能。"
  }, {
    "name": "watchShake",
    "value": "watchShake()",
    "moveAction": [],
    "desc": "<h3><span class=\"octicon octicon-link\"></span> my.watchShake</h3><p>摇一摇功能。每次调用API，在摇一摇手机后触发回调，如需再次监听需要再次调用这个API。</p>",
    "info": "摇一摇功能。每次调用API，在摇一摇手机后触发回调，如需再次监听需要再次调用这个API。"
  }, {
    "name": "vibrate",
    "value": "vibrate()",
    "moveAction": [],
    "desc": "<h3><span class=\"octicon octicon-link\"></span> my.vibrate</h3><p>调用震动功能。</p>",
    "info": "调用震动功能。"
  }, {
    "name": "makePhoneCall",
    "value": "makePhoneCall()",
    "moveAction": [],
    "desc": "<h3><span class=\"octicon octicon-link\"></span> my.makePhoneCall</h3><p>拨打电话。</p>",
    "info": "拨打电话。"
  }, {
    "name": "getServerTime",
    "value": "getServerTime()",
    "moveAction": [],
    "desc": "<h3><span class=\"octicon octicon-link\"></span> my.getServerTime</h3><p>获取当前服务器时间的毫秒数。</p>",
    "info": "获取当前服务器时间的毫秒数。"
  }, {
    "name": "openBluetoothAdapter",
    "value": "openBluetoothAdapter()",
    "moveAction": [],
    "desc": "<h3><span class=\"octicon octicon-link\"></span> my.openBluetoothAdapter</h3><p>初始化蓝牙适配器。</p>",
    "info": "初始化蓝牙适配器。"
  }, {
    "name": "closeBluetoothAdapter",
    "value": "closeBluetoothAdapter()",
    "moveAction": [],
    "desc": "<h3><span class=\"octicon octicon-link\"></span> my.closeBluetoothAdapter</h3><p>关闭本机蓝牙模块。</p>",
    "info": "关闭本机蓝牙模块。"
  }, {
    "name": "getBluetoothAdapterState",
    "value": "getBluetoothAdapterState()",
    "moveAction": [],
    "desc": "<h3><span class=\"octicon octicon-link\"></span> my.getBluetoothAdapterState</h3><p>获取本机蓝牙模块状态。</p>",
    "info": "获取本机蓝牙模块状态。"
  }, {
    "name": "startBluetoothDevicesDiscovery",
    "value": "startBluetoothDevicesDiscovery()",
    "moveAction": [],
    "desc": "<h3><span class=\"octicon octicon-link\"></span> my.startBluetoothDevicesDiscovery</h3><p>开始搜寻附近的蓝牙外围设备。搜索结果将在 onBluetoothDeviceFound 事件中返回。</p>",
    "info": "开始搜寻附近的蓝牙外围设备。搜索结果将在 onBluetoothDeviceFound 事件中返回。"
  }, {
    "name": "stopBluetoothDevicesDiscovery",
    "value": "stopBluetoothDevicesDiscovery()",
    "moveAction": [],
    "desc": "<h3><span class=\"octicon octicon-link\"></span> my.stopBluetoothDevicesDiscovery</h3><p>停止搜寻附近的蓝牙外围设备。</p>",
    "info": "停止搜寻附近的蓝牙外围设备。"
  }, {
    "name": "getBluetoothDevices",
    "value": "getBluetoothDevices()",
    "moveAction": [],
    "desc": "<h3><span class=\"octicon octicon-link\"></span> my.getBluetoothDevices</h3><p>获取所有已发现的蓝牙设备，包括已经和本机处于连接状态的设备。</p>",
    "info": "获取所有已发现的蓝牙设备，包括已经和本机处于连接状态的设备。"
  }, {
    "name": "getConnectedBluetoothDevices",
    "value": "getConnectedBluetoothDevices()",
    "moveAction": [],
    "desc": "<h3><span class=\"octicon octicon-link\"></span> my.getConnectedBluetoothDevices</h3><p>获取处于已连接状态的设备。</p>",
    "info": "获取处于已连接状态的设备。"
  }, {
    "name": "connectBLEDevice",
    "value": "connectBLEDevice()",
    "moveAction": [],
    "desc": "<h3><span class=\"octicon octicon-link\"></span> my.connectBLEDevice</h3><p>连接低功耗蓝牙设备。</p>",
    "info": "连接低功耗蓝牙设备。"
  }, {
    "name": "disconnectBLEDevice",
    "value": "disconnectBLEDevice()",
    "moveAction": [],
    "desc": "<h3><span class=\"octicon octicon-link\"></span> my.disconnectBLEDevice</h3><p>断开与低功耗蓝牙设备的连接。</p>",
    "info": "断开与低功耗蓝牙设备的连接。"
  }, {
    "name": "writeBLECharacteristicValue",
    "value": "writeBLECharacteristicValue()",
    "moveAction": [],
    "desc": "<h3><span class=\"octicon octicon-link\"></span> my.writeBLECharacteristicValue</h3><p>向低功耗蓝牙设备特征值中写入数据。</p>",
    "info": "向低功耗蓝牙设备特征值中写入数据。"
  }, {
    "name": "readBLECharacteristicValue",
    "value": "readBLECharacteristicValue()",
    "moveAction": [],
    "desc": "<h3><span class=\"octicon octicon-link\"></span> my.readBLECharacteristicValue</h3><p>读取低功耗蓝牙设备特征值中的数据。调用后在<code>my.onBLECharacteristicValueChange()</code> 事件中接收数据返回。</p>",
    "info": "读取低功耗蓝牙设备特征值中的数据。调用后在my.onBLECharacteristicValueChange() 事件中接收数据返回。"
  }, {
    "name": "notifyBLECharacteristicValueChange",
    "value": "notifyBLECharacteristicValueChange()",
    "moveAction": [],
    "desc": "<h3><span class=\"octicon octicon-link\"></span> my.notifyBLECharacteristicValueChange</h3><p>启用低功耗蓝牙设备特征值变化时的 notify 功能。注意：必须设备的特征值支持notify才可以成功调用，具体参照 characteristic 的 properties 属性 另外，必须先启用notify才能监听到设备 characteristicValueChange 事件。</p>",
    "info": "启用低功耗蓝牙设备特征值变化时的 notify 功能。注意：必须设备的特征值支持notify才可以成功调用，具体参照 characteristic 的 properties 属性 另外，必须先启用notify才能监听到设备 characteristicValueChange 事件。"
  }, {
    "name": "getBLEDeviceServices",
    "value": "getBLEDeviceServices()",
    "moveAction": [],
    "desc": "<h3><span class=\"octicon octicon-link\"></span> my.getBLEDeviceServices</h3><p>获取蓝牙设备所有 service（服务）</p>",
    "info": "获取蓝牙设备所有 service（服务）"
  }, {
    "name": "getBLEDeviceCharacteristics",
    "value": "getBLEDeviceCharacteristics()",
    "moveAction": [],
    "desc": "<h3><span class=\"octicon octicon-link\"></span> my.getBLEDeviceCharacteristics</h3><p>获取蓝牙设备所有 characteristic（特征值）</p>",
    "info": "获取蓝牙设备所有 characteristic（特征值）"
  }, {
    "name": "onBluetoothDeviceFound",
    "value": "onBluetoothDeviceFound()",
    "moveAction": [],
    "desc": "<h3><span class=\"octicon octicon-link\"></span> my.onBluetoothDeviceFound</h3><p>寻找到新的蓝牙设备时触发此事件。</p>",
    "info": "寻找到新的蓝牙设备时触发此事件。"
  }, {
    "name": "offBluetoothDeviceFound",
    "value": "offBluetoothDeviceFound()",
    "moveAction": [],
    "desc": "<h3><span class=\"octicon octicon-link\"></span> my.offBluetoothDeviceFound</h3><p>移除寻找到新的蓝牙设备事件的监听。</p>",
    "info": "移除寻找到新的蓝牙设备事件的监听。"
  }, {
    "name": "onBLECharacteristicValueChange",
    "value": "onBLECharacteristicValueChange()",
    "moveAction": [],
    "desc": "<h3><span class=\"octicon octicon-link\"></span> my.onBLECharacteristicValueChange</h3><p>监听低功耗蓝牙设备的特征值变化的事件。</p>",
    "info": "监听低功耗蓝牙设备的特征值变化的事件。"
  }, {
    "name": "offBLECharacteristicValueChange",
    "value": "offBLECharacteristicValueChange()",
    "moveAction": [],
    "desc": "<h3><span class=\"octicon octicon-link\"></span> my.offBLECharacteristicValueChange</h3><p>移除低功耗蓝牙设备的特征值变化事件的监听。</p>",
    "info": "移除低功耗蓝牙设备的特征值变化事件的监听。"
  }, {
    "name": "onBLEConnectionStateChanged",
    "value": "onBLEConnectionStateChanged()",
    "moveAction": [],
    "desc": "<h3><span class=\"octicon octicon-link\"></span> my.onBLEConnectionStateChanged</h3><p>监听低功耗蓝牙连接的错误事件，包括设备丢失，连接异常断开等。</p>",
    "info": "监听低功耗蓝牙连接的错误事件，包括设备丢失，连接异常断开等。"
  }, {
    "name": "offBLEConnectionStateChanged",
    "value": "offBLEConnectionStateChanged()",
    "moveAction": [],
    "desc": "<h3><span class=\"octicon octicon-link\"></span> my.offBLEConnectionStateChanged</h3><p>移除低功耗蓝牙连接的错误事件的监听。</p>",
    "info": "移除低功耗蓝牙连接的错误事件的监听。"
  }, {
    "name": "onBluetoothAdapterStateChange",
    "value": "onBluetoothAdapterStateChange()",
    "moveAction": [],
    "desc": "<h3><span class=\"octicon octicon-link\"></span> my.onBluetoothAdapterStateChange</h3><p>监听本机蓝牙状态变化的事件。</p>",
    "info": "监听本机蓝牙状态变化的事件。"
  }, {
    "name": "offBluetoothAdapterStateChange",
    "value": "offBluetoothAdapterStateChange()",
    "moveAction": [],
    "desc": "<h3><span class=\"octicon octicon-link\"></span> my.offBluetoothAdapterStateChange</h3><p>移除本机蓝牙状态变化的事件的监听。</p>",
    "info": "移除本机蓝牙状态变化的事件的监听。"
  }, {
    "name": "rsa",
    "value": "rsa({\n\taction: '',\n\ttext: '',\n\tkey: ''\n})",
    "moveAction": [-3, 9],
    "desc": "<h3><span class=\"octicon octicon-link\"></span> my.rsa</h3><div>\n <table>\n   <thead>\n    <tr>\n      <th width=\"90\"><div>名称</div></th>\n      <th width=\"90\"><div>类型</div></th>\n      <th width=\"90\"><div>必填</div></th>\n      <th width=\"90\"><div>描述</div></th>\n    </tr>\n   </thead>\n   <tbody>\n    <tr>\n      <td width=\"90\"><div>action</div></td>\n      <td width=\"90\"><div>String</div></td>\n      <td width=\"90\"><div>是</div></td>\n      <td width=\"90\"><div>使用rsa加密还是rsa解密，<code>encrypy</code>加密，<code>decrypt</code>解密</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>text</div></td>\n      <td width=\"90\"><div>String</div></td>\n      <td width=\"90\"><div>是</div></td>\n      <td width=\"90\"><div>要处理的文本</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>key</div></td>\n      <td width=\"90\"><div>String</div></td>\n      <td width=\"90\"><div>是</div></td>\n      <td width=\"90\"><div>rsa秘钥</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>success</div></td>\n      <td width=\"90\"><div>Function</div></td>\n      <td width=\"90\"><div>否</div></td>\n      <td width=\"90\"><div>调用成功的回调函数</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>fail</div></td>\n      <td width=\"90\"><div>Function</div></td>\n      <td width=\"90\"><div>否</div></td>\n      <td width=\"90\"><div>调用失败的回调函数</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>complete</div></td>\n      <td width=\"90\"><div>Function</div></td>\n      <td width=\"90\"><div>否</div></td>\n      <td width=\"90\"><div>调用结束的回调函数（调用成功、失败都会执行）</div></td>\n    </tr>\n   </tbody>\n </table>\n</div>",
    "info": ""
  }, {
    "name": "onShareAppMessage",
    "value": "onShareAppMessage()",
    "moveAction": [],
    "desc": "<h3><span class=\"octicon octicon-link\"></span> onShareAppMessage</h3><p>在 Page 中定义 onShareAppMessage 函数，设置该页面的分享信息。</p>",
    "info": "在 Page 中定义 onShareAppMessage 函数，设置该页面的分享信息。"
  }, {
    "name": "reportAnalytics",
    "value": "reportAnalytics()",
    "moveAction": [],
    "desc": "<h3><span class=\"octicon octicon-link\"></span> my.reportAnalytics</h3><p>自定义分析数据的上报接口。使用前需要在小程序管理后台的自定义分析中新建事件，并配置好事件名和字段。</p><div>\n <table>\n   <thead>\n    <tr>\n      <th width=\"90\"><div>名称</div></th>\n      <th width=\"90\"><div>类型</div></th>\n      <th width=\"90\"><div>必填</div></th>\n      <th width=\"90\"><div>描述</div></th>\n    </tr>\n   </thead>\n   <tbody>\n    <tr>\n      <td width=\"90\"><div>eventName</div></td>\n      <td width=\"90\"><div>String</div></td>\n      <td width=\"90\"><div>是</div></td>\n      <td width=\"90\"><div>自定义事件名，需申请</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>data</div></td>\n      <td width=\"90\"><div>Object</div></td>\n      <td width=\"90\"><div>是</div></td>\n      <td width=\"90\"><div>上报的数据</div></td>\n    </tr>\n   </tbody>\n </table>\n</div>",
    "info": "自定义分析数据的上报接口。使用前需要在小程序管理后台的自定义分析中新建事件，并配置好事件名和字段。"
  }]
}

export default {
  context
}