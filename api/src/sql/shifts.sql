
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
