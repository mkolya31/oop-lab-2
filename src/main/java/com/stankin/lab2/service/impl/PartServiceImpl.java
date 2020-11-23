package com.stankin.lab2.service.impl;

import com.stankin.lab2.model.entity.PartEntity;
import com.stankin.lab2.model.entity.PartTypeEntity;
import com.stankin.lab2.model.mapper.PartMapper;
import com.stankin.lab2.repository.PartRepository;
import com.stankin.lab2.repository.PartTypeRepository;
import com.stankin.lab2.service.PartService;
import com.stankin.lab2.model.dto.PartDto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class PartServiceImpl implements PartService {

    @Autowired
    PartMapper partMapper;

    @Autowired
    PartRepository partRepository;

    @Autowired
    PartTypeRepository partTypeRepository;

    @Override
    public List<PartDto> getPartsList() {

        return partRepository.findAll().stream()
                .map(partMapper::entityToDto)
                .collect(Collectors.toList());
    }

    @Override
    public void addPart(PartDto partDto) throws Exception {
        PartTypeEntity partTypeEntity = partTypeRepository.findById(partDto.getPartTypeId()).orElseThrow(() -> {
            String message = String.format("PartTypeEntity with id %s", partDto.getPartId().toString());
            return new Exception(message);
        });
        PartEntity partEntity = partMapper.dtoToEntity(partDto);
        partEntity.setPartTypeEntity(partTypeEntity);
        partRepository.save(partEntity);
    }

    public void deletePart(Integer partId) throws Exception {
        PartEntity partEntity = partRepository.findById(partId).orElseThrow(() -> new Exception("Wrong part id"));
        partRepository.delete(partEntity);
    }

    @Override
    public void updatePart(PartDto partDto) throws Exception {
        PartEntity partEntity = partMapper.dtoToEntity(partDto);
//        PartEntity partEntity = partRepository.findById(partDto.getPartId()).orElseThrow(() -> new Exception("Wrong part id"));
        partTypeRepository.findById(partDto.getPartTypeId()).ifPresent(partEntity::setPartTypeEntity);
        partRepository.save(partEntity);
    }
}
