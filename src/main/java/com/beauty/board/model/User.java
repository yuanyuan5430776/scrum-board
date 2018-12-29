package com.beauty.board.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;

@Entity
@Table(name = "users")
public class User extends BaseEntity {
    @Column(name = "name")
    @NotEmpty
    String name;

    @Column(name = "role")
    RoleEnum role;
}
