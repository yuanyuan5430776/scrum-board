package com.beauty.board.model;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.validation.constraints.Digits;

@Entity
@Table(name = "points")
public class point extends BaseEntity {

    @Column(name = "userId")
    private Integer userId;

    @Column(name = "storyId")
    private Integer storyId;

    @Column(name = "point")
    @Digits(fraction = 0, integer = 4)
    private Integer point;

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public Integer getStoryId() {
        return storyId;
    }

    public void setStoryId(Integer storyId) {
        this.storyId = storyId;
    }

    public Integer getPoint() {
        return point;
    }

    public void setPoint(Integer point) {
        this.point = point;
    }
}
