package com.stankin.lab2.service;

import com.stankin.lab2.model.dto.PartDto;

import java.util.List;

public interface PartService {

    List<PartDto> getPartsList();
    void addPart(PartDto partDto) throws Exception;
    void deletePart(Integer partId) throws Exception;
    void updatePart(PartDto partDto) throws Exception;

}
