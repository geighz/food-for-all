
--
-- Table structure for table `shifts`
--

DROP TABLE IF EXISTS `shifts`;
CREATE TABLE IF NOT EXISTS `shifts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `summary` varchar(400) NOT NULL,
  `shift` varchar(150) NOT NULL,
  `type` varchar(150) NOT NULL,
  `location` varchar(255) NOT NULL,
  `admin` varchar(255) NOT NULL,
  `status` varchar(100) NOT NULL,
  `volunteer_max` int(5) NOT NULL,
  `volunteer_current` int(5) NOT NULL,
  `time_start` datetime(50) NOT NULL,
  `time_end` datetime(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*
INSERT INTO `shifts`(`title`, `summary`, `shift`, `type`, `location`, `admin`,
  `status`, `volunteer_max`, `volunteer_current`, `time_start`, `time_end`)
  VALUES ("Title","This is a Test Shift summary","Shift column?",
    "I'm not sure why type is here.","2121 Main Street 68589","Lawrence","Full",
  10,5,CAST(N'2012-05-21 09:30:00.000' AS DateTime),
  CAST(N'2021-06-21 10:30:00.000' AS DateTime))

  */
