package com.theStupids.traditionalliquorrecommendationservice.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.imageio.ImageIO;
import java.awt.*;
import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;

@Slf4j
@RestController
public class ImageController {
    @Value("${value.imgPath}")
    private String imgPath;

    @GetMapping(value = "/display/{id}", produces = MediaType.IMAGE_JPEG_VALUE)
    public ResponseEntity<byte[]> getImage(@PathVariable("id") String id) {
        byte[] imageByteArray;
        try {
            String fileName = imgPath + id + ".BMP"; // 파일경로
            File file = new File(fileName);
            BufferedImage image = ImageIO.read(file);
            ByteArrayOutputStream baos = new ByteArrayOutputStream();
            ImageIO.write(image, "jpg", baos);
            imageByteArray = baos.toByteArray();
        } catch (FileNotFoundException e) {
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        } catch (IOException e) {
            log.error(e.getMessage());
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }

        return new ResponseEntity<>(imageByteArray, HttpStatus.OK);
    }
}
