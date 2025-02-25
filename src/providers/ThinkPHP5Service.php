<?php

namespace hg\apidoc\providers;

use think\facade\App;
use think\facade\Route;
use think\facade\Request;
use think\facade\Lang;
use think\Db;
use Exception;

class ThinkPHP5Service
{
    use CommonService;

    public function run(){
        $this->initConfig();
        self::registerApidocRoutes();
    }

    static function getApidocConfig()
    {
        $config = config("apidoc.");
        if (!(!empty($config['auto_url']) && !empty($config['auto_url']['filter_keys']))){
            $config['auto_url']['filter_keys'] = ['app','controller'];
        }
        return $config;
    }

    static function registerRoute($route){
        $config = self::getApidocConfig();
        $registerRoute = Route::rule($route['uri'], $route['callback'],$route['method']);
        if (!empty($config['allowCrossDomain'])) {
            $registerRoute->allowCrossDomain();
        }
    }

    static function databaseQuery($sql){
        return Db::query($sql);
    }

    static function getTablePrefix(){
        $driver = config('database.default');
        $table_prefix=config('database.connections.'.$driver.'.prefix');
        return $table_prefix;
    }

    static function getRootPath()
    {
        return App::getRootPath();
    }

    static function getRuntimePath()
    {
        return App::getRuntimePath();
    }

    static function setLang($locale){
        Lang::setLangCookieVar($locale);
    }

    static function getLang($lang){
        return Lang::get($lang);
    }

    static function handleResponseJson($res){
        return json($res);
    }


}