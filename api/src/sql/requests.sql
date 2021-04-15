
DROP TABLE IF EXISTS `requests`;
CREATE TABLE IF NOT EXISTS `requests` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` varchar(255) NOT NULL,
  `shift_id` int(11) NOT NULL,
  `approved` varchar(40) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `shifts.id` (`shift_id`) USING BTREE
  KEY `user.id` (`user_id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


ALTER TABLE `requests`
  ADD CONSTRAINT `shifts.id` FOREIGN KEY (`shift_id`) REFERENCES `shifts` (`id`);
  ADD CONSTRAINT `user.id` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
