package com.stankin.lab2.model.mapper;

import com.stankin.lab2.model.dto.PartTypeDto;
import com.stankin.lab2.model.entity.PartTypeEntity;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface PartTypeMapper {

    PartTypeDto entityToDto(PartTypeEntity partTypeEntity);

}
