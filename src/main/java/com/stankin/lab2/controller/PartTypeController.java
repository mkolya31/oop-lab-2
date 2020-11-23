package com.stankin.lab2.controller;

import com.stankin.lab2.service.PartTypeService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

import com.stankin.lab2.model.dto.PartTypeDto;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequiredArgsConstructor
@RequestMapping("/part-type")
public class PartTypeController {

    @Autowired
    PartTypeService partTypeService;

    @GetMapping("/list")
    public List<PartTypeDto> getAll() {
        return partTypeService.getPartTypeList();
    }
}
