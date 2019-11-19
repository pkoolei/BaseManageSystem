package com.basemanagesystem.backend.model;
import java.util.List;

public class JSONResult {

    class DataObject{
        private  List items;

        public List getItems() {
            return items;
        }

        public void setItems(List items) {
            this.items = items;
        }

        public DataObject() {
        }

        public DataObject(List items) {
            this.items = items;
}
    }
    private int code;
    private DataObject data;

    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }

    public DataObject getData() {
        return data;
    }

    public void setData(DataObject data) {
        this.data = data;
    }

    public JSONResult() {
    }

    public JSONResult(int code, List items) {
        this.code = code;
        DataObject data=new DataObject();
        data.setItems(items);
        this.data = data;
    }
}
