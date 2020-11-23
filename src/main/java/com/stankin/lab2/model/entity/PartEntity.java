package com.stankin.lab2.model.entity;

import com.sun.org.apache.xpath.internal.operations.Bool;
import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "parts", schema = "public")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class PartEntity {
    @Id
    @Column(name = "id")
    @GeneratedValue(generator="parts_id_seq")
    @SequenceGenerator(name= "parts_id_seq", sequenceName="parts_id_seq" , allocationSize=1)
    private Integer partId;

    @Column(name = "part_name")
    private String partName;

    @ManyToOne
    @JoinColumn(name = "part_type_id", referencedColumnName = "id", nullable = false)
    private PartTypeEntity partTypeEntity;
}
