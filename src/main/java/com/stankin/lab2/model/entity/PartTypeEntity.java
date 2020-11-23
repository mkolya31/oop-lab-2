package com.stankin.lab2.model.entity;

import lombok.*;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "parts_types")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class PartTypeEntity {
    @Id
    @Column(name = "id")
    @SequenceGenerator(name= "parts_types_id_seq",sequenceName="parts_types_id_seq", allocationSize=1)
    private Integer id;

    @Column(name = "type_name")
    private String partTypeName;

    @OneToMany(mappedBy = "partTypeEntity")
    @ToString.Exclude
    @EqualsAndHashCode.Exclude
    private List<PartEntity> partEntityList;
}
