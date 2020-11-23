package com.stankin.lab2.model.mapper;

import org.mapstruct.Mapper;

import com.stankin.lab2.model.entity.PartEntity;
import com.stankin.lab2.model.dto.PartDto;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface PartMapper {

    @Mapping(source = "partTypeEntity.id", target = "partTypeId")
    @Mapping(source = "partTypeEntity.partTypeName", target = "partTypeName")
    PartDto entityToDto(PartEntity partEntity);
    PartEntity dtoToEntity(PartDto partDto);

}
