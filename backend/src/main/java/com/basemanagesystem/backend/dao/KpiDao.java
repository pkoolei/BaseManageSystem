package com.basemanagesystem.backend.dao;

import com.basemanagesystem.backend.model.KpiModel;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@Mapper
public interface KpiDao {
    @Select("select * from kpi_flow" +
            " where 小区名称 like '%${keyword}%'")
    List<KpiModel> getFlow(String keyword);
}
