import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as n,a as i}from"./app.564bfd3e.js";const s="/images/webman-install-1.png",t="/images/webman-install-2.png",r="/images/webman-install-11.png",d="/images/webman-install-3.png",l="/images/webman-install-4.png",c="/images/webman-install-5.png",o="/images/webman-install-6.png",p="/images/webman-install-7.png",m="/images/webman-install-8.png",h="/images/webman-install-9.png",b="/images/webman-install-10.png",_="/images/webman-install-12.png",g={},w=i(`<h1 id="webman安装apidoc教程" tabindex="-1"><a class="header-anchor" href="#webman安装apidoc教程" aria-hidden="true">#</a> Webman安装Apidoc教程</h1><h2 id="安装webman项目" tabindex="-1"><a class="header-anchor" href="#安装webman项目" aria-hidden="true">#</a> 安装Webman项目：</h2><p>使用命令行执行下面的命令</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>composer create-project workerman/webman
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+s+'" alt="webman-install-1"></p><p>安装完成后目录如下：</p><p><img src="'+t+'" alt="webman-install-2"></p><h2 id="部署网站" tabindex="-1"><a class="header-anchor" href="#部署网站" aria-hidden="true">#</a> 部署网站</h2><blockquote><p>本教程由于在windows下启动，直接双击<code>windows.bat</code>启动</p></blockquote><p><img src="'+r+'" alt="webman-install-11"></p><p>用浏览器访问<code>http://localhost:8787/</code>，出现以下效果表示启动成功</p><p><img src="'+d+`" alt="webman-install-3"></p><h2 id="安装apidoc" tabindex="-1"><a class="header-anchor" href="#安装apidoc" aria-hidden="true">#</a> 安装Apidoc</h2><p>参考<a href="/guide/install/other">Webman/其它框架安装文档</a></p><h3 id="_1、根目录下执行安装命令" tabindex="-1"><a class="header-anchor" href="#_1、根目录下执行安装命令" aria-hidden="true">#</a> 1、根目录下执行安装命令</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>composer require hg/apidoc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+l+'" alt="webman-install-4"></p><h3 id="_2、创建配置文件" tabindex="-1"><a class="header-anchor" href="#_2、创建配置文件" aria-hidden="true">#</a> 2、创建配置文件</h3><p>在 <code>config/plugin</code>目录下创建 <code>hg/apidoc/</code>目录，并在该目录下创建<code>app.php</code> <code>route.php</code>文件</p><p><img src="'+c+'" alt="webman-install-5"></p><p><img src="'+o+'" alt="webman-install-6"></p><h3 id="_3、创建及注册中间件" tabindex="-1"><a class="header-anchor" href="#_3、创建及注册中间件" aria-hidden="true">#</a> 3、创建及注册中间件</h3><p><img src="'+p+'" alt="webman-install-7"></p><p><img src="'+m+'" alt="webman-install-8"></p><h3 id="_2、下载前端文件" tabindex="-1"><a class="header-anchor" href="#_2、下载前端文件" aria-hidden="true">#</a> 2、下载前端文件</h3><p>点击前端文件下载链接，下载完成后解压；并将其解压到 <code>public</code>目录下</p><p><img src="'+h+'" alt="webman-install-9"></p><h2 id="注解体验" tabindex="-1"><a class="header-anchor" href="#注解体验" aria-hidden="true">#</a> 注解体验</h2><h3 id="_1、写入测试注解" tabindex="-1"><a class="header-anchor" href="#_1、写入测试注解" aria-hidden="true">#</a> 1、写入测试注解</h3><p><img src="'+b+'" alt="webman-install-10"></p><h3 id="_2、查看效果" tabindex="-1"><a class="header-anchor" href="#_2、查看效果" aria-hidden="true">#</a> 2、查看效果</h3><p><img src="'+_+'" alt="webman-install-12"></p>',32),u=[w];function x(f,v){return e(),n("div",null,u)}const W=a(g,[["render",x],["__file","webman-install.html.vue"]]);export{W as default};
