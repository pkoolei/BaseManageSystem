package com.basemanagesystem.backend.service;

import com.basemanagesystem.backend.dao.KpiDao;
import com.basemanagesystem.backend.model.KpiModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class KpiService {
    @Autowired
    private KpiDao kpiDao;

    public List<KpiModel> getKpi(String keyword){
        return kpiDao.getFlow(keyword);
    }
}
