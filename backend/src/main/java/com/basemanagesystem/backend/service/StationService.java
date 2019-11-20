package com.basemanagesystem.backend.service;


import com.basemanagesystem.backend.dao.StationDao;
import com.basemanagesystem.backend.model.BaseStation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StationService {

    @Autowired
    private StationDao station;

    public List<BaseStation> getAllStation(){
        return station.getAllStation();
    }
}
