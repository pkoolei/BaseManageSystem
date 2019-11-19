package com.basemanagesystem.backend.model;

import com.fasterxml.jackson.annotation.JsonProperty;

public class MapBS {
    private String baseStationName;
    private String areaName;
    private String lng;
    private String lat;
    private String directionAngle;
    private String wireHeight;
    private String downDipAngle;


    public String getBaseStationName() {
        return baseStationName;
    }

    public void setBaseStationName(String baseStationName) {
        this.baseStationName = baseStationName;
    }

    public String getAreaName() {
        return areaName;
    }

    public void setAreaName(String areaName) {
        this.areaName = areaName;
    }

    public String getLng() {
        return lng;
    }

    public void setLng(String lng) {
        this.lng = lng;
    }

    public String getLat() {
        return lat;
    }

    public void setLat(String lat) {
        this.lat = lat;
    }

    public String getDirectionAngle() {
        return directionAngle;
    }

    public void setDirectionAngle(String directionAngle) {
        this.directionAngle = directionAngle;
    }

    public String getWireHeight() {
        return wireHeight;
    }

    public void setWireHeight(String wireHeight) {
        this.wireHeight = wireHeight;
    }

    public String getDownDipAngle() {
        return downDipAngle;
    }

    public void setDownDipAngle(String downDipAngle) {
        this.downDipAngle = downDipAngle;
    }

    public MapBS() {
    }

    public MapBS(int id, String baseStationName, String areaName, String lng, String lat, String directionAngle, String wireHeight, String downDipAngle) {
        this.baseStationName = baseStationName;
        this.areaName = areaName;
        this.lng = lng;
        this.lat = lat;
        this.directionAngle = directionAngle;
        this.wireHeight = wireHeight;
        this.downDipAngle = downDipAngle;
    }
}
