/*
 Navicat Premium Data Transfer

 Source Server         : MMSoft Local DB
 Source Server Type    : MySQL
 Source Server Version : 50720
 Source Host           : 192.168.10.6:3306
 Source Schema         : saffron-express-api

 Target Server Type    : MySQL
 Target Server Version : 50720
 File Encoding         : 65001

 Date: 05/07/2019 11:18:07
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for todo_list
-- ----------------------------
DROP TABLE IF EXISTS `todo_list`;
CREATE TABLE `todo_list`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `date` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of todo_list
-- ----------------------------
INSERT INTO `todo_list` VALUES (1, 'Install Express', '2019-07-01 15:12:20');
INSERT INTO `todo_list` VALUES (2, 'Create Sample API', '2019-07-01 15:12:28');
INSERT INTO `todo_list` VALUES (3, 'Connect to SSO', '2019-07-01 15:12:37');
INSERT INTO `todo_list` VALUES (4, 'Description by Swagger-UI', '2019-07-01 15:13:02');

SET FOREIGN_KEY_CHECKS = 1;
