package com.basemanagesystem.backend.controller;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.basemanagesystem.backend.model.KpiModel;
import com.basemanagesystem.backend.service.KpiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "kpi")
public class KpiController {
    @Autowired
    private KpiService kpiService;

    @GetMapping(value = "{keyword}")
    public JSONObject getKPI(@PathVariable(name = "keyword") String keyword){
        String code = "{\"code\":20000,\"data\":{\"items\":"+ JSON.toJSONString(kpiService.getKpi(keyword))+"}}";
        return JSONObject.parseObject(code);
    }
//    public List<KpiModel> getKPI(@PathVariable(name = "keyword") String keyword){
//        return kpiService.getKpi(keyword);
//    }
}
