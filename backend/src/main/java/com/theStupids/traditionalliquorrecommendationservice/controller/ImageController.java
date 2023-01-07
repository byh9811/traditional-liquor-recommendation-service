package com.theStupids.traditionalliquorrecommendationservice.controller;

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

@RestController
public class ImageController {
    @GetMapping(value = "/display/{id}", produces = MediaType.IMAGE_JPEG_VALUE)
    public ResponseEntity<byte[]> getImage(@PathVariable("id") String id, @RequestParam("w") int width, @RequestParam("h") int height) {
        byte[] imageByteArray = null;
        try {
            String fileName = "C:\\img\\drinks\\" + id + ".BMP"; // 파일경로
            File file = new File(fileName);
            BufferedImage image = ImageIO.read(file);
            Image resizedImage = image.getScaledInstance(width, height, Image.SCALE_DEFAULT);
            BufferedImage imgBuff = new BufferedImage(width, height, BufferedImage.TYPE_INT_RGB);
            imgBuff.getGraphics().drawImage(resizedImage, 0, 0, new Color(0, 0, 0), null);
            ByteArrayOutputStream baos = new ByteArrayOutputStream();
            ImageIO.write(imgBuff, "jpg", baos);
            imageByteArray = baos.toByteArray();
        } catch (FileNotFoundException e) {
            System.out.println("no file");
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        } catch (IOException e) {
            return new ResponseEntity<>(null, HttpStatus.INSUFFICIENT_STORAGE);
        }

        return new ResponseEntity<>(imageByteArray, HttpStatus.OK);
    }
}
