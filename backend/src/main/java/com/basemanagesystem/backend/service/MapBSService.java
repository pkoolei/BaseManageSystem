package com.basemanagesystem.backend.service;

import com.basemanagesystem.backend.dao.MapBSDao;
import com.basemanagesystem.backend.model.MapBS;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MapBSService {
    @Autowired
    private MapBSDao mapBSDao;

    public List<MapBS> getAllBSInfo(){
        return mapBSDao.getAllBSInfo();
    }
}
