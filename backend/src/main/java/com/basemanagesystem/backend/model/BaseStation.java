package com.basemanagesystem.backend.model;

public class BaseStation {
   private  String  物理站名;
   private String 网管小区名;
   private String 小区名称;
   private String 小区CI;
   private String 行政区域;
   private String 基站地址;
   private String 入网时间;
   private int PCI;

   public BaseStation() {

   }

   public BaseStation(String 物理站名, String 网管小区名, String 小区名称, String 小区CI, String 行政区域, String 基站地址, String 入网时间, int PCI) {
      this.物理站名 = 物理站名;
      this.网管小区名 = 网管小区名;
      this.小区名称 = 小区名称;
      this.小区CI = 小区CI;
      this.行政区域 = 行政区域;
      this.基站地址 = 基站地址;
      this.入网时间 = 入网时间;
      this.PCI = PCI;
   }

   public String get物理站名() {
      return 物理站名;
   }

   public void set物理站名(String 物理站名) {
      this.物理站名 = 物理站名;
   }

   public String get网管小区名() {
      return 网管小区名;
   }

   public void set网管小区名(String 网管小区名) {
      this.网管小区名 = 网管小区名;
   }

   public String get小区名称() {
      return 小区名称;
   }

   public void set小区名称(String 小区名称) {
      this.小区名称 = 小区名称;
   }

   public String get小区CI() {
      return 小区CI;
   }

   public void set小区CI(String 小区CI) {
      this.小区CI = 小区CI;
   }

   public String get行政区域() {
      return 行政区域;
   }

   public void set行政区域(String 行政区域) {
      this.行政区域 = 行政区域;
   }

   public String get基站地址() {
      return 基站地址;
   }

   public void set基站地址(String 基站地址) {
      this.基站地址 = 基站地址;
   }

   public String get入网时间() {
      return 入网时间;
   }

   public void set入网时间(String 入网时间) {
      this.入网时间 = 入网时间;
   }

   public int getPCI() {
      return PCI;
   }

   public void setPCI(int PCI) {
      this.PCI = PCI;
   }
}
