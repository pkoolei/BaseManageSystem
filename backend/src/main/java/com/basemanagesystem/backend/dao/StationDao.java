package com.basemanagesystem.backend.dao;



import com.basemanagesystem.backend.model.BaseStation;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@Mapper
public interface StationDao {

//    @Select("select `物理站名`, `网管小区名`,`小区名称`,`小区CI`,`行政区域`,`基站地址`,`入网时间`,`PCI`from station\n")
//    List<BaseStation> getAllStation();


    @Select("select `物理站名`, `网管小区名`,`小区名称`,`小区CI`,`行政区域`,`基站地址`,`入网时间`,`PCI`from station "+
            " where 物理站名 like '%${query}%'")
    List<BaseStation> getAllStation();
}
