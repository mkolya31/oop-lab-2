package com.stankin.lab2.repository;

import com.stankin.lab2.model.entity.PartEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PartRepository extends JpaRepository<PartEntity, Integer> {
}
