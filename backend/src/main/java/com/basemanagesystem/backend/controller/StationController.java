package com.basemanagesystem.backend.controller;


import com.alibaba.fastjson.JSONObject;
import com.basemanagesystem.backend.service.StationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.alibaba.fastjson.JSON;

@RestController
@RequestMapping(value="station")
public class StationController {
    @Autowired
    private StationService stationService;

    @GetMapping(value="getAll")
    public JSONObject getDataList(){
        String jsonStr="{\"code\":20000,\"data\":{\"items\":" +
                JSON.toJSONString(stationService.getAllStation())
                + "}}";
        return JSONObject.parseObject(jsonStr);
    }

//    public  String getDataList(){
//        String jsonStr=JSON.toJSONString(stationService.getAllStation());
//        return jsonStr;
//    }
}
