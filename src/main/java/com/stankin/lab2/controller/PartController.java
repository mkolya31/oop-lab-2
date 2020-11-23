package com.stankin.lab2.controller;

import com.stankin.lab2.model.dto.PartDto;
import com.stankin.lab2.service.PartService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.Part;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000", methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.DELETE})
@RestController
@RequiredArgsConstructor
@RequestMapping("/part")
public class PartController {

    @Autowired
    PartService partService;

    @GetMapping("/list")
    public List<PartDto> getAll() {

        return partService.getPartsList();
    }

    @PostMapping("/add")
    public void add(@RequestBody PartDto partDto) throws Exception {
        partService.addPart(partDto);
    }

    @PostMapping("/update")
    public void update(@RequestBody PartDto partDto) throws Exception {
        partService.updatePart(partDto);
    }

    @PostMapping("/delete")
    public void delete(@RequestBody PartDto partDto) throws Exception {
        partService.deletePart(partDto.getPartId());
    }
}
