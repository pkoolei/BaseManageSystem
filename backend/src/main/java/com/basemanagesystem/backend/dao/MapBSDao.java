package com.basemanagesystem.backend.dao;

import com.basemanagesystem.backend.model.MapBS;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Result;
import org.apache.ibatis.annotations.Results;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.type.JdbcType;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@Mapper
public interface MapBSDao {
    @Select("select * from map3 limit 0,1000" )
    @Results({
            @Result(column = "基站名称",property ="baseStationName" ,jdbcType = JdbcType.VARCHAR),
            @Result(column = "小区名称",property ="areaName" ,jdbcType = JdbcType.VARCHAR),
            @Result(column = "基站经度",property ="lng" ),
            @Result(column = "基站纬度",property ="lat" ),
            @Result(column = "天线挂高",property ="wireHeight"),
            @Result(column = "天线方位角",property ="directionAngle"),
            @Result(column = "总下倾角",property ="downDipAngle")
    })
    List<MapBS> getAllBSInfo();
}
