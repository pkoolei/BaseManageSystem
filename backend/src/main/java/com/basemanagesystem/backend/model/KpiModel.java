package com.basemanagesystem.backend.model;

import javax.tools.JavaCompiler;
import java.text.SimpleDateFormat;
import java.util.Date;

public class KpiModel {
    private String 日期;
    private String 基站名称;
    private String 小区名称;
    private String 小区双工模式;
    private String 本地小区标识;
    private int 完整度;
    private float 上行吞吐量;
    private float 下行吞吐量;
    private float 总流量;

    public KpiModel() {
    }

    public KpiModel(java.sql.Date 日期, String 基站名称, String 小区名称, String 小区双工模式, String 本地小区标识, int 完整度, float 上行吞吐量, float 下行吞吐量, float 总流量) {
        SimpleDateFormat f=new SimpleDateFormat("yyyy-MM-dd");
        java.util.Date d = new java.util.Date (日期.getTime());
        this.日期 = f.format(d);
        this.基站名称 = 基站名称;
        this.小区名称 = 小区名称;
        this.小区双工模式 = 小区双工模式;
        this.本地小区标识 = 本地小区标识;
        this.完整度 = 完整度;
        this.上行吞吐量 = 上行吞吐量;
        this.下行吞吐量 = 下行吞吐量;
        this.总流量 = 总流量;
    }

    public String get日期() {
        return 日期;
    }

    public void set日期(String 日期) {
        this.日期 = 日期;
    }

    public String get基站名称() {
        return 基站名称;
    }

    public void set基站名称(String 基站名称) {
        this.基站名称 = 基站名称;
    }

    public String get小区名称() {
        return 小区名称;
    }

    public void set小区名称(String 小区名称) {
        this.小区名称 = 小区名称;
    }

    public String get小区双工模式() {
        return 小区双工模式;
    }

    public void set小区双工模式(String 小区双工模式) {
        this.小区双工模式 = 小区双工模式;
    }

    public String get本地小区标识() {
        return 本地小区标识;
    }

    public void set本地小区标识(String 本地小区标识) {
        this.本地小区标识 = 本地小区标识;
    }

    public int get完整度() {
        return 完整度;
    }

    public void set完整度(int 完整度) {
        this.完整度 = 完整度;
    }

    public float get上行吞吐量() {
        return 上行吞吐量;
    }

    public void set上行吞吐量(float 上行吞吐量) {
        this.上行吞吐量 = 上行吞吐量;
    }

    public float get下行吞吐量() {
        return 下行吞吐量;
    }

    public void set下行吞吐量(float 下行吞吐量) {
        this.下行吞吐量 = 下行吞吐量;
    }

    public float get总流量() {
        return 总流量;
    }

    public void set总流量(float 总流量) {
        this.总流量 = 总流量;
    }


}
