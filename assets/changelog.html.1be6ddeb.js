import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as n,c as e,a as s}from"./app.fe05e39b.js";const l={},i=s(`<h1 id="更新日志" tabindex="-1"><a class="header-anchor" href="#更新日志" aria-hidden="true">#</a> 更新日志</h1><ul><li>主版本号：含有破坏性更新和新特性，不在发布周期内。</li><li>次版本号：带有新特性的向下兼容的版本。</li><li>修订版本号：日常 bugfix 更新</li></ul><h2 id="v4-1-3" tabindex="-1"><a class="header-anchor" href="#v4-1-3" aria-hidden="true">#</a> v4.1.3</h2><p><code>2022-11-26</code></p><blockquote><p>需升级前端文件至 v0.0.8</p></blockquote><ul><li>auto_url.custom自定义url生成规则增加$url返回值。</li><li>修正自动生成url时异常问题。</li></ul><p>注意：如果之前配置了auto_url.custom来自定义实现url的生成，升级到该版本后，可能会报错；如下增加$url，参数接收即可：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token comment">// config/apidoc.php</span>
<span class="token comment">//...</span>
<span class="token string single-quoted-string">&#39;auto_url&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
        <span class="token comment">// ...</span>
        <span class="token comment">// 原来的</span>
        <span class="token string single-quoted-string">&#39;custom&#39;</span> <span class="token operator">=&gt;</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token variable">$path</span><span class="token punctuation">,</span><span class="token variable">$method</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">//...</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        
        <span class="token comment">// 修改为 ；由于该版本增加了第三个参数，所以此处也需加上该参数的接收</span>
        <span class="token string single-quoted-string">&#39;custom&#39;</span> <span class="token operator">=&gt;</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token variable">$path</span><span class="token punctuation">,</span><span class="token variable">$method</span><span class="token punctuation">,</span><span class="token variable">$url</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">//...</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="v4-1-2" tabindex="-1"><a class="header-anchor" href="#v4-1-2" aria-hidden="true">#</a> v4.1.2</h2><p><code>2022-11-26</code></p><blockquote><p>需升级前端文件至 v0.0.8</p></blockquote><ul><li>新增auto_url.handle_key配置项，用于自定义处理自动生成url的每个key。</li><li>新增前端显示版本号。</li><li>新增自定义事件name属性，用于自定义事件名称的显示。</li><li>新增ResponseSuccessMd注解，用于使用md编写成功响应体。</li><li>新增ResponseErrorMd注解，用于使用md编写失败响应体。</li><li>优化markdown的json显示效果。</li></ul><h2 id="v4-1-1" tabindex="-1"><a class="header-anchor" href="#v4-1-1" aria-hidden="true">#</a> v4.1.1</h2><p><code>2022-11-18</code></p><blockquote><p>需升级前端文件至 v0.0.7</p></blockquote><ul><li>新增自定义事件，移除原handleValue事件处理，统一由自定义事件实现。</li><li>新增全局、应用/版本全局事件调用。</li><li>增加ResponseSuccess支持require。</li><li>修正tree类型子节点展开异常问题。</li><li>修正ts生成childrenType异常问题。</li></ul><h2 id="v4-1-0" tabindex="-1"><a class="header-anchor" href="#v4-1-0" aria-hidden="true">#</a> v4.1.0</h2><p><code>2022-11-14</code></p><blockquote><p>需升级前端文件至 v0.0.5</p></blockquote><ul><li>增加代码模板生成器 <a href="/use/function/codeTemplate">参考文档</a>。</li><li>增加自定义响应显示处理函数。</li><li>修正tree数据下children的类型为array&lt;\\object&gt;。</li><li>修正文档table多级中重复字段的显示异常问题。</li></ul><h2 id="v4-0-5" tabindex="-1"><a class="header-anchor" href="#v4-0-5" aria-hidden="true">#</a> v4.0.5</h2><p><code>2022-11-11</code></p><blockquote><p>无需升级前端文件</p></blockquote><ul><li>修正ref参数合并异常问题</li></ul><h2 id="v4-0-4" tabindex="-1"><a class="header-anchor" href="#v4-0-4" aria-hidden="true">#</a> v4.0.4</h2><p><code>2022-11-10</code></p><ul><li>增加关闭文档配置。</li><li>修正ref引入参数时、且无字段名定义的子参数解析异常问题。</li><li>修正数据表生成CURRENT_TIMESTAMP默认值报错问题。</li><li>修正数组类型的显示问题。</li><li>修正字符串数组、数字数组ts生成异常问题。</li></ul><h2 id="v4-0-3" tabindex="-1"><a class="header-anchor" href="#v4-0-3" aria-hidden="true">#</a> v4.0.3</h2><p><code>2022-11-07</code></p><ul><li>修正密码验证判断问题</li><li>修正ResponseSuccess注解main无效问题</li></ul><h2 id="v4-0-2" tabindex="-1"><a class="header-anchor" href="#v4-0-2" aria-hidden="true">#</a> v4.0.2</h2><p><code>2022-11-03</code></p><ul><li>修正Hyperf表前缀获取异常问题</li></ul><h2 id="v4-0-1" tabindex="-1"><a class="header-anchor" href="#v4-0-1" aria-hidden="true">#</a> v4.0.1</h2><p><code>2022-11-03</code></p><ul><li>修正php8环境下安装异常</li></ul><h2 id="v4-0-0" tabindex="-1"><a class="header-anchor" href="#v4-0-0" aria-hidden="true">#</a> v4.0.0</h2><p><code>2022-11-02</code></p><p>开始新的征程</p>`,39),t=[i];function c(o,p){return n(),e("div",null,t)}const u=a(l,[["render",c],["__file","changelog.html.vue"]]);export{u as default};
