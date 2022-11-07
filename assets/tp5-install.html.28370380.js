import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as i,a as t}from"./app.564bfd3e.js";const s="/images/tp5-install-1.png",n="/images/tp5-install-2.png",r="/images/tp5-install-4.png",d="/images/tp5-install-5.png",l="/images/tp5-install-6.png",p="/images/tp5-install-7.png",c="/images/tp5-install-8.png",h="/images/tp5-install-9.png",o="/images/tp5-install-14.png",m="/images/tp5-install-10.png",g="/images/tp5-install-11.png",_="/images/tp5-install-12.png",u="/images/tp5-install-13.png",v={},b=t(`<h1 id="thinkphp5-1安装apidoc教程" tabindex="-1"><a class="header-anchor" href="#thinkphp5-1安装apidoc教程" aria-hidden="true">#</a> ThinkPHP5.1安装Apidoc教程</h1><h2 id="安装tp5-1项目" tabindex="-1"><a class="header-anchor" href="#安装tp5-1项目" aria-hidden="true">#</a> 安装Tp5.1项目：</h2><p>使用命令行执行下面的命令</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>composer create-project topthink/think=5.1.* tp5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+s+'" alt="tp5-install-1"></p><p>安装完成后目录如下：</p><p><img src="'+n+'" alt="tp5-install-2"></p><h2 id="部署网站" tabindex="-1"><a class="header-anchor" href="#部署网站" aria-hidden="true">#</a> 部署网站</h2><blockquote><p>本教程使用本机的 phpStudy 来部署网站</p></blockquote><h3 id="_1、创建一个网站" tabindex="-1"><a class="header-anchor" href="#_1、创建一个网站" aria-hidden="true">#</a> 1、创建一个网站</h3><p><img src="'+r+`" alt="tp5-install-4"></p><h3 id="_2、配置伪静态" tabindex="-1"><a class="header-anchor" href="#_2、配置伪静态" aria-hidden="true">#</a> 2、配置伪静态</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>location / {
    if (!-e $request_filename){
        rewrite ^(.*)$ /index.php?s=$1 last; 
        break;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+d+'" alt="tp5-install-5"></p><h3 id="_3、部署完成" tabindex="-1"><a class="header-anchor" href="#_3、部署完成" aria-hidden="true">#</a> 3、部署完成</h3><p>浏览器访问上面配置的域名，出现如下页面表示tp5部署成功</p><p><img src="'+l+`" alt="tp5-install-6"></p><h2 id="安装apidoc" tabindex="-1"><a class="header-anchor" href="#安装apidoc" aria-hidden="true">#</a> 安装Apidoc</h2><p>参考<a href="/guide/install/thinkphp">ThinkPHP安装文档</a></p><h3 id="_1、根目录下执行安装命令" tabindex="-1"><a class="header-anchor" href="#_1、根目录下执行安装命令" aria-hidden="true">#</a> 1、根目录下执行安装命令</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>composer require hg/apidoc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+p+`" alt="tp5-install-7"></p><h3 id="_2、配置tags注册服务" tabindex="-1"><a class="header-anchor" href="#_2、配置tags注册服务" aria-hidden="true">#</a> 2、配置tags注册服务</h3><p>配置如下代码，在应用初始化时注册Apidoc相关服务</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 应用初始化
&#39;app_init&#39;     =&gt; [
    &#39;hg\\\\apidoc\\\\providers\\\\ThinkPHP5Service&#39;,
],
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+c+'" alt="tp5-install-8"></p><h3 id="_3、手动复制配置文件" tabindex="-1"><a class="header-anchor" href="#_3、手动复制配置文件" aria-hidden="true">#</a> 3、手动复制配置文件</h3><p>手动将 /vendor/hg/apidoc/src/config.php 拷贝到/config/目录下，并重命名为apidoc.php</p><p><img src="'+h+'" alt="tp5-install-9"></p><h3 id="_4、下载前端文件" tabindex="-1"><a class="header-anchor" href="#_4、下载前端文件" aria-hidden="true">#</a> 4、下载前端文件</h3><p>点击前端文件下载链接，下载完成后解压；并将其解压到 <code>public</code>目录下</p><p><img src="'+o+'" alt="tp5-install-14"></p><h2 id="注解体验" tabindex="-1"><a class="header-anchor" href="#注解体验" aria-hidden="true">#</a> 注解体验</h2><h3 id="_1、修改apps配置" tabindex="-1"><a class="header-anchor" href="#_1、修改apps配置" aria-hidden="true">#</a> 1、修改apps配置</h3><p><img src="'+m+'" alt="tp5-install-10"></p><h3 id="_2、写入测试注解" tabindex="-1"><a class="header-anchor" href="#_2、写入测试注解" aria-hidden="true">#</a> 2、写入测试注解</h3><p><img src="'+g+'" alt="tp5-install-11"></p><h3 id="_3、查看效果" tabindex="-1"><a class="header-anchor" href="#_3、查看效果" aria-hidden="true">#</a> 3、查看效果</h3><p><img src="'+_+'" alt="tp5-install-12"></p><p><img src="'+u+'" alt="tp5-install-13"></p>',40),x=[b];function f(k,P){return e(),i("div",null,x)}const A=a(v,[["render",f],["__file","tp5-install.html.vue"]]);export{A as default};
