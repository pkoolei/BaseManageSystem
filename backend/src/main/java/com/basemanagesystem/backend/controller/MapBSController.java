package com.basemanagesystem.backend.controller;


import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.basemanagesystem.backend.service.MapBSService;
import io.swagger.annotations.Api;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController //控制器类
@RequestMapping(value = "baseStation")////http://xxx/dept
@Api(tags = "获取所有基站信息")
public class MapBSController {

    @Autowired
    private MapBSService mapBSService;

    /**
     *响应前端获取部门列表的请求 数据库http://xxx/dept/list1
     * @return 对象类型
     */
    @RequestMapping(value = "BSInfo")
    public JSONObject getDataList(){

        String jsonStr = "{\"code\":20000,\"data\":{\"items\":"+ JSON.toJSON(mapBSService.getAllBSInfo())+"}}";

        JSONObject rs = JSONObject.parseObject(jsonStr);
        return  rs;
    }
}
