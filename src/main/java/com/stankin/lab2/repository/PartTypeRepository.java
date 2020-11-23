package com.stankin.lab2.repository;

import com.stankin.lab2.model.entity.PartTypeEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PartTypeRepository extends JpaRepository<PartTypeEntity, Integer> {
}
