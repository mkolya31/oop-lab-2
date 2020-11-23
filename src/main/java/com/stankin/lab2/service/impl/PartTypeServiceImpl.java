package com.stankin.lab2.service.impl;

import com.stankin.lab2.model.dto.PartTypeDto;
import com.stankin.lab2.model.mapper.PartTypeMapper;
import com.stankin.lab2.repository.PartTypeRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.stankin.lab2.service.PartTypeService;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class PartTypeServiceImpl implements PartTypeService {

    @Autowired
    PartTypeMapper partTypeMapper;

    @Autowired
    PartTypeRepository partTypeRepository;

    @Override
    public List<PartTypeDto> getPartTypeList() {
        return partTypeRepository.findAll().stream()
                .map(partTypeMapper::entityToDto)
                .collect(Collectors.toList());
    }

}
